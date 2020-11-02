import React from 'react';
import {connect} from "react-redux";
import Theme from "./pages/Theme";

function App (){
    return(
        <Theme/>
    )
}


function mapStateToProps(state){
    return {
        curVideo:state.youtubeReducer.curVideo,
    }
}

export default connect(mapStateToProps)(App);