export const SET_VIDEO = 'SELECT_VIDEO';
export const UPDATE_COMMENTS_ARR = 'CHANGE_COMMENTS_ARR';
export const UPDATE_SEARCH_ARR = 'CHANGE_SEARCH_ARR';


export const updateSearchArr = (data) =>{
    return {
        type: UPDATE_SEARCH_ARR,
        data:data
    }
};

export const updateCommentsArr = (data) =>{
    return {
        type: UPDATE_COMMENTS_ARR,
        data:data
    }
};


export const setVideo = (data) =>{
    return {
        type: SET_VIDEO,
        data:data
    }
};