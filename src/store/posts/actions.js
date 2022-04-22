import createRequestAction from "../createRequestAction";

const FETCH_POSTS = "FETCH_POSTS";
export const fetchPosts = createRequestAction(FETCH_POSTS, (pathname) => {
    return {
        request: {
            method: "GET",
            url: pathname
        }
    }
});