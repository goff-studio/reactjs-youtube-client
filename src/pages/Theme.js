import React from 'react';
import '../assets/styles/App.css';
import {Image,View} from 'react-native-web';
import {MainStyle} from "../assets/styles/Styles";
import {Resizes} from "../assets/constants/Resizes";
import {connect} from "react-redux";
import Player from "./Player";
import Welcome from "./Welcome";


function Theme(props){

    let cover = Object.keys(props.curVideo).length === 0?'':props.curVideo.snippet.thumbnails.high.url;

    return (
        <View style={MainStyle.container}>
            <Image
                blurRadius={60}
                style={MainStyle.backgroundLayout}
                resizeMode={Resizes.cover}
                source={{uri:cover}}
            />
            {props.searchResponses.length===0?<Welcome/>:<Player/>}
        </View>
    )

}


const mapStateToProps = (state) =>{
    return {
        searchResponses:state.youtubeReducer.curSearches,
        comments:state.youtubeReducer.curComments,
        curVideo:state.youtubeReducer.curVideo
    }
};

export default connect(mapStateToProps)(Theme);