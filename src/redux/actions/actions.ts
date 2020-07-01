import axios from 'axios';
import { POSTS_FAIL, POSTS_LOADING, POSTS_SUCCESS, POST_SUCCESS } from '../types/types';

const postsLoading = () => ({
    type: POSTS_LOADING,
});

const successData = (data) => ({
    type: POSTS_SUCCESS,
    payload: data,
});

const errorData = (error) => ({
    type: POSTS_FAIL,
    payload: error,
});

const successPost = (data) => ({
    type: POST_SUCCESS,
    post: data,
});

const getPosts = () => (dispatch) => {
    postsLoading();
    axios
        .get('https://simple-blog-api.crew.red/posts')
        .then((res) => dispatch(successData(res.data)))
        .catch((error) => dispatch(errorData(error)))
        .finally(() => postsLoading());
};

const getPostsById = (postId) => (dispatch) => {
    if (postId === undefined) return;
    axios
        .get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
        .then((res) => dispatch(successPost(res.data)));
};
interface newPost {
    title: string;
    body: string;
}

const addPost = (newPost: newPost, dispatch) => {
    axios({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(newPost),
        url: 'https://simple-blog-api.crew.red/posts',
    }).then((res) => console.log(res));
};

export { getPosts, getPostsById, addPost };
