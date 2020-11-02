import React,{useState} from 'react';
import '../assets/styles/App.css';
import {Image,View,Text,ScrollView,FlatList,TouchableOpacity} from 'react-native-web';
import {MainStyle} from "../assets/styles/Styles";
import {Resizes} from "../assets/constants/Resizes";
import {LinearGradient} from "../components/LinearGradient";
import {Colors} from "../assets/constants/Colors";
import Search from "../components/Search";
import {Message} from "../components/Message";
import {Thumbnail} from "../components/Thumbnail";
import {connect} from "react-redux";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';

function Player (props){
    const [player, setPlayer] = useState(null);
    const [isPlaying, setPlaying] = useState(false);

    let title = '';
    let descr = '';
    let channel = '';
    let videoId = '';

    if(Object.keys(props.curVideo).length > 0){
        videoId = props.curVideo.id.videoId;
        title=props.curVideo.snippet.title;
        descr=props.curVideo.snippet.description;
        channel=props.curVideo.snippet.channelTitle;
    } else {
        videoId = '';
        title='';
        descr = '';
        channel = '';
    }
    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            controls:0,
            rel:0,
            playsinline:1,
            autohide: 1,
            showinfo : 0,
        },
    };


    const onReady = (e) => {
        setPlayer(e.target);
    };
    const playVideo = () => {
        player.playVideo();
    };

    const pauseVideo = () => {
        player.pauseVideo();
    };

    function PlayIcon() {
        return (
            <TouchableOpacity onPress={()=>playVideo()} style={MainStyle.playerBtn}>
                <FontAwesomeIcon icon={faPlay} />
            </TouchableOpacity>
        )
    }

    function PauseIcon() {
        return (
            <TouchableOpacity onPress={()=>pauseVideo()} style={MainStyle.playerBtn}>
                <FontAwesomeIcon icon={faPause} />
            </TouchableOpacity>
        )
    }

    function PlayerIcon() {
        return isPlaying?<PauseIcon/>:<PlayIcon/>;
    }

    return (
        <LinearGradient colors={[Colors.darkGradientStart,Colors.darkGradientStart,Colors.darkGradientStart,Colors.darkGradientEnd]} style={MainStyle.frame}>
            <View style={MainStyle.leftPanel}>
                <Image
                    resizeMode={Resizes.center}
                    style={MainStyle.logo}
                    source={{uri:'http://goudarzi.ws/assessment/youitv/logo.png'}}
                />
                <Search/>

                <FlatList extraData={props.searchResponses} data={props.searchResponses} renderItem={(item)=><Thumbnail item={item.item}/>} keyExtractor={(item,index)=>index.toString()}/>

            </View>

            <View style={MainStyle.rightPanel}>
                <ScrollView style={MainStyle.videoPlayer}>
                    <YouTube onStateChange={e=>{
                        setPlaying(e.data===YouTube.PlayerState.PLAYING)
                    }} className='videoPlayerContent' videoId={videoId} opts={opts} onReady={onReady} />

                    <LinearGradient colors={[Colors.transparent,Colors.darkGradientStart,Colors.darkGradientStart,Colors.darkGradientStart,Colors.darkGradientStart,Colors.transparent]} style={MainStyle.videoPlayerDetails}>
                        <PlayerIcon/>
                        <Text style={MainStyle.videoTitle}>{title}</Text>
                        <Text style={MainStyle.videoChanelInfo}>{channel}</Text>
                        <Text style={MainStyle.videoDesc}>{descr}</Text>
                    </LinearGradient>
                    <FlatList data={props.comments} renderItem={(item)=><Message isSender={false} item={item.item}/>} keyExtractor={(item,index)=>index.toString()}/>

                </ScrollView>
            </View>
        </LinearGradient>
    )

}


const mapStateToProps = (state) =>{
    return {
        searchResponses:state.youtubeReducer.curSearches,
        comments:state.youtubeReducer.curComments,
        curVideo:state.youtubeReducer.curVideo
    }
};

export default connect(mapStateToProps)(Player);