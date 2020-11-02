import {TouchableOpacity,Image,Text} from 'react-native-web';
import {ThumbnailStyle} from "../assets/styles/Styles";
import playerHelper from "../helpers/playerHelper";

export function Thumbnail(props) {
    const {item} = props;

    async function loadData() {
        playerHelper.loadVideo(item);
    }

    return(
        <TouchableOpacity onPress={()=>loadData()} style={ThumbnailStyle.body}>
            <Image style={ThumbnailStyle.image} source={{uri:item.snippet.thumbnails.high.url}}/>
            <Text style={ThumbnailStyle.title}>{item.snippet.title}</Text>
        </TouchableOpacity>
    )
}