import * as ActionTypes from '../constants/actionTypes';

const reducer = (posts = [], action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ALL:
            return action.payload;
        case ActionTypes.CREATE:
            return [...posts, action.payload];
        case ActionTypes.UPDATE:
        case ActionTypes.LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case ActionTypes.DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}

export default reducer;