import {View,Text,Image} from 'react-native-web';
import {MessageStyle} from "../assets/styles/Styles";

export function Message(props) {
    let {item}=props;
    const snippet = item.snippet.topLevelComment.snippet;
    return(
        <View style={MessageStyle.body}>
            <View style={MessageStyle.senderBody}>
                <Image style={MessageStyle.senderAvatar} source={{uri:snippet.authorProfileImageUrl}}/>
            </View>
            <View style={MessageStyle.commentDetail}>
                <View style={MessageStyle.blubUsers}>
                    <View style={MessageStyle.senderDetailBody}>
                        <Text style={MessageStyle.senderName}>{snippet.authorDisplayName}</Text>
                        <Text style={MessageStyle.sendTime}>Today</Text>
                    </View>
                    <Text>{snippet.textDisplay}</Text>
                </View>
            </View>
        </View>
    )
}