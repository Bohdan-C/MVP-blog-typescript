import axios from 'axios';
import { POSTS_FAIL, POSTS_LOADING, POSTS_SUCCESS, POST_SUCCESS, POST_ADD_SUCCESS } from '../types/types';

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
    payload: data,
})

const successAddData = () => ({
  type: POST_ADD_SUCCESS,
})


const getPosts = () => (dispatch) => {
  postsLoading();
  axios
    .get('https://simple-blog-api.crew.red/posts')
    .then((res) => dispatch(successData(res.data)))
    .catch((error) => dispatch(errorData(error)))
    .finally(() => postsLoading());
};

const getPostsById = (id: string | string[]) => (dispatch: Function) => {
  postsLoading();
  axios
    .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
    .then((res) => dispatch(successPost(res.data)))
};

interface newPost {
  title: string,
  body: string
};

const addPost = (newPost: newPost, dispatch: Function) => (dispatch: Function) => {
    axios({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(newPost),
      url: 'https://simple-blog-api.crew.red/posts'
  })
  .then((res) => console.log(res));
}

// export function addPost(newPost: newPost, dispatch: Function) {
//   axios({
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       data: JSON.stringify(newPost),
//       url: 'https://simple-blog-api.crew.red/posts'
//   })
//       .then(res => dispatch({ type: "ADDPOST" }));
// };


export { getPosts, getPostsById, addPost };
