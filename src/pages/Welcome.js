import React from 'react';
import '../assets/styles/App.css';
import {Image,View,Text} from 'react-native-web';
import {MainStyle} from "../assets/styles/Styles";
import {Resizes} from "../assets/constants/Resizes";
import {LinearGradient} from "../components/LinearGradient";
import {Colors} from "../assets/constants/Colors";
import Search from "../components/Search";
import {connect} from "react-redux";


class Welcome extends React.Component{
//this is an example of Class Component but i prefer functional for better performance

    render(){
        let error = this.props.searchResponses.length===0&&Object.keys(this.props.curVideo).length>0?'Not found, try again!':'';
        return (
            <LinearGradient colors={[Colors.darkGradientStart,Colors.darkGradientStart,Colors.darkGradientStart,Colors.darkGradientEnd]} style={MainStyle.frame}>
                <View style={MainStyle.welcomeBody}>
                    <Image
                        resizeMode={Resizes.center}
                        style={MainStyle.logo}
                        source={{uri:'http://goudarzi.ws/assessment/youitv/logo.png'}}
                    />
                    <Search/>
                    <Text style={MainStyle.error}>{error}</Text>
                </View>
            </LinearGradient>
        )
    }
}


const mapStateToProps = (state) =>{
    return {
        searchResponses:state.youtubeReducer.curSearches,
        comments:state.youtubeReducer.curComments,
        curVideo:state.youtubeReducer.curVideo
    }
};

export default connect(mapStateToProps)(Welcome);