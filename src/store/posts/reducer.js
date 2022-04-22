import { handleActions } from "redux-actions";
import { fetchPosts } from "./actions";

const initialState = {
    posts: null,
    loading: false,
    error: false
}

const fetchingPostsHandler = (state) => {
    return {
        ...state,
        loading: true
    }
}

const fetchedPostsHandler = (state, action) => {
    return {
        ...state,
        posts: action.payload,
        loading: false
    }
}

const fetchingPostsErrorHandler = (state) => {
    return {
        ...state,
        loading: false,
        error: true
    }
}

const postsReducer = handleActions({
    [fetchPosts]: fetchingPostsHandler,
    [fetchPosts.success]: fetchedPostsHandler,
    [fetchPosts.fail]: fetchingPostsErrorHandler
}, initialState);
export default postsReducer;