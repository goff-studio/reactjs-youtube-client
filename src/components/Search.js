import React,{useState} from 'react';
import {View,TouchableOpacity} from 'react-native-web'
import {SearchStyle} from "../assets/styles/Styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Text} from 'react-native-web';
import {connect} from "react-redux";
import playerHelper from "../helpers/playerHelper";

function Search() {

    const [keyword, setKeyword] = useState('');

    async function loadData() {
        await playerHelper.doSearch(keyword);
    }

    return(
        <View style={SearchStyle.body}>
            <TouchableOpacity onPress={()=>loadData()} style={SearchStyle.searchBtn}>
                <FontAwesomeIcon icon={faSearch} />
            </TouchableOpacity>
            <Text> | </Text>
            <input onKeyPress={e=>{
                if(e.key==='Enter')loadData();
            }} onChange={word=>setKeyword(word.target.value)} type={'text'} placeholder={'Search Video'} style={SearchStyle.input}/>
        </View>
    )
}

const mapStateToProps = (state) =>{
    return {
        curVideo:state.youtubeReducer.curVideo
    }
};
export default connect(mapStateToProps)(Search);