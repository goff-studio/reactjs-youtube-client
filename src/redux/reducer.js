import {SET_VIDEO, UPDATE_COMMENTS_ARR, UPDATE_SEARCH_ARR} from "./actions";
import {combineReducers} from "redux";

const initState={
    curVideo:{},
    curComments:[],
    curSearches:[]
};

export const youtubeReducer =(state=initState,action)=>{
    switch (action.type) {

        case UPDATE_SEARCH_ARR:
            return {
                ...state,
                curSearches: action.data
            };
        case UPDATE_COMMENTS_ARR:
            return {
                ...state,
                curComments:action.data
            };
        case SET_VIDEO:
                return {
                    ...state,
                    curVideo:action.data
                };

        default:
            return state
    }
};

export const reducer = combineReducers({youtubeReducer}); //we can add more reducers here

