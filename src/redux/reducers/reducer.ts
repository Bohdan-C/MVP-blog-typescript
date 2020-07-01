import {
  POSTS_FAIL,
  POSTS_LOADING,
  POSTS_SUCCESS,
  POST_SUCCESS,
  POST_ADD_SUCCESS,
} from "../types/types";

export interface CommentI {
  id: number;
  postId: number;
  body: string;
}
export interface PostI {
  id: number;
  title: string;
  body: string;
  comments?: Array<CommentI>;
}
export interface InitialStateI {
  posts: Array<PostI>;
  isLoading: boolean;
  comment: string;
  title: string;
  body: string;
  post?: PostI;
}

const initialState: InitialStateI = {
  posts: [],
  title: "",
  body: "",
  comment: "",
  isLoading: false,
};

const reducer = (state: InitialStateI = initialState, action: any) => {
  switch (action.type) {
    case POSTS_LOADING:
      return { ...state, isLoading: !state.isLoading };

    case POSTS_SUCCESS:
      return { ...state, posts: [...action.payload] };

    case POSTS_FAIL:
      return state;

    case POST_SUCCESS:
      return { ...state, post: action.post };

    case POST_ADD_SUCCESS:
      return { ...state, title: "", body: "" };

    default:
      return state;
  }
};

export default reducer;
