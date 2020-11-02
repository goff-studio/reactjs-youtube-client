import {Dimensions} from 'react-native-web';
import {Positions} from "../constants/Positions";
import {Aligns} from "../constants/Aligns";
import {Colors} from "../constants/Colors";
import {Dims} from "../constants/Dims";
import {FontSize} from "../constants/FontSize";

export const MainStyle = {
    container:{
        width: '100%',
        height: '100%',
        backgroundColor:'black'
    },
    backgroundLayout:{
        width:'100%',
        height:Dimensions.get('window').height,
    },
    frame: {
        display:'flex',
        flexDirection:'row',
        position: Positions.absolute,
        top: '10%',
        bottom: '10%',
        left: '20%',
        right: '20%',
        filter:'drop-shadow(0 0 1rem black)',
        // webkitFilter:'drop-shadow(0 0 0.75rem black)'
    },
    rightPanel:{
        width:'65%',
        flex:0.66,
        overflow:'scroll'
    },
    videoPlayer: {
        // backgroundColor: Colors.white
    },
    videoPlayerContent:{
        width:'100%',
        height:'unset'
    },
    videoPlayerDetails:{
        marginTop:-80,
        position: Positions.relative,
        paddingTop:40,
        padding: Dims.padding,
        flexDirection: 'column',
        display: 'flex',
        // marginBottom: 40
    },
    leftPanel:{
        padding:Dims.padding,
        width:'35%',
        flex: 0.35,
    },
    logo:{
        width:200,
        height:50,
        marginBottom:15
    },
    videoTitle:{
        marginTop:20,
        color:Colors.white,
        fontSize:FontSize.xLarge,
    },
    videoDesc:{
        marginTop:10,
        color:Colors.white,
        fontSize:FontSize.medium,
        // paddingHorizontal:Dims.padding
    },
    videoChanelInfo:{
        marginTop:10,
        color:Colors.white,
        fontSize:FontSize.medium,
    },
    welcomeBody:{
        justifyContent:Aligns.center,
        alignItems:Aligns.center,
        width:'100%',
        padding:Dims.padding
    },
    error:{
        color:Colors.danger,
        fontSize:FontSize.small
    },
    playerBtn:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:Colors.white,
        justifyContent:Aligns.center,
        alignItems:Aligns.center,
        alignSelf:Aligns.center
    }
};

export const SearchStyle={
    body:{
        flexDirection:'row',
        alignItems:Aligns.center,
        backgroundColor:Colors.white,
        borderRadius:Dims.borderRadius,
        height:30,
        width:'100%',
        padding:10,
        marginBottom:10
    },
    input:{
        flex:1,
        borderWidth:0,
        outline: 'none',
        marginLeft:3
    },
    searchBtn:{
        paddingHorizontal:1
    }
};

export const MessageStyle={
    body:{
        flex:1,
        // display:'block',
        // height:30,
        paddingHorizontal:15,
        marginVertical:10,
        flexDirection:'row',
        alignItems: Aligns.flexStart,
        // backgroundColor:'red'
    },
    blubSender:{
        backgroundColor:Colors.white,
        borderTopLeftRadius:Dims.borderRadius,
        borderTopRightRadius:Dims.borderRadius,
        borderBottomLeftRadius:Dims.borderRadius
    },
    blubUsers:{
        minHeight:50,
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:Colors.white,
        borderBottomLeftRadius:Dims.borderRadius,
        borderTopRightRadius:Dims.borderRadius,
        borderBottomRightRadius:Dims.borderRadius,
    },
    commentDetail:{
        flex:1,
        marginTop:5,
        justifyContent:Aligns.center,
        alignItems:Aligns.flexStart,

    },
    senderBody:{
        // flex:1,
        paddingHorizontal:10
    },
    senderAvatar:{
        width:50,
        height:50,
        borderRadius: 25
    },
    senderName:{
        color:Colors.black,
        fontSize:FontSize.medium,
        textAlign:Aligns.center
    },
    sendTime:{
        fontSize:FontSize.xSmall,
        color:Colors.black,
        textAlign:Aligns.center,
        marginHorizontal:5
    },
    senderDetailBody:{
        flexDirection:'row',
        justifyContent: Aligns.flexStart,
        alignItems:Aligns.center
    }
};

export const ThumbnailStyle = {
    body:{
        paddingVertical: 10
    },
    image:{
        width:'100%',
        height:150
    },
    title:{
        color:Colors.white,
        fontSize:FontSize.medium,
        marginTop:10,
    }
};