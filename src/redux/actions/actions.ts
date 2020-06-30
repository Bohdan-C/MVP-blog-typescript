import axios from 'axios';
import { POSTS_FAIL, POSTS_LOADING, POSTS_SUCCESS } from '../types/types';

const postsLoading = () => ({
    type: POSTS_LOADING
})
const successData = (data) => ({
    type: POSTS_SUCCESS,
    payload: data
});
const errorData = (error) => ({
    type: POSTS_FAIL,
    payload: error
});

const getPosts = () => (dispatch) => {
    postsLoading();
    axios
        .get('https://simple-blog-api.crew.red/posts')
        .then(res => dispatch(successData(res.data)))
        .catch(error => dispatch(errorData(error)))
        .finally(() => postsLoading())
}

export { getPosts }
