import gComm from "./communicationHelper";
import {store} from "../redux/store";
import {setVideo, updateCommentsArr, updateSearchArr} from "../redux/actions";

export default class playerHelper {

    static loadVideo(item){
        store.dispatch(setVideo(item));
        this.loadComments(item);
    }

    static async loadComments(item){
        const commentsParams = {
            part:'snippet',
            videoId:item.id.videoId,
        };
        const responses = await gComm.requestFrom('commentThreads',commentsParams);
        store.dispatch(updateCommentsArr(await responses.items));
    }

    static async doSearch(keyword){
        const commentsParams = {
            part:'snippet',
            maxResults:'25',
            type:'video',
            q:keyword
        };
        const responses = await gComm.requestFrom('search',commentsParams);
        store.dispatch(updateSearchArr(await responses.items));

        if(await responses.items.length>0){
            /////////////NOTICE:
            // in assessment you asked to load first item of array automatically each time we do the search, but I think its better that user select it and do authomatic select only when there is no selected video [following commented code
            // if(Object.keys(props.curVideo).length===0)this.loadVideo(await responses.items[0]);

            this.loadVideo(await responses.items[0]);
        }
    }
}