import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchPosts, posts } from "../../store/posts";
import Chat from "../Chat/Chat";

const Posts = ({ fetchPosts, posts }) => {
    const [num, setNum] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    const getParams = () => {
        const params = searchParams.get()
        console.log(params);
    }

    const setParams = () => {
        setNum(num => num + 1);
        setSearchParams({"page": num})
    }

    useEffect(() => {
        fetchPosts("/posts")
    }, [])
    return (
        <>
            <h2>Posts</h2>
            <button
                onClick={getParams}
            >GET</button>
            <button
                onClick={setParams}
            >SET</button>
            <Chat/>
        </>
    )
}

const mapState = createStructuredSelector({
    posts
})

const mapDispatch = {
    fetchPosts
}

export default connect(mapState, mapDispatch)(Posts);