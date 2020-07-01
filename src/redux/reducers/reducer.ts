import { POSTS_FAIL, POSTS_LOADING, POSTS_SUCCESS, POST_SUCCESS, POST_ADD_SUCCESS } from '../types/types';

export interface CommentI {
    id: number;
    POST_ID: number;
    BODY: string;
}
export interface IPost {
    id: number;
    title: string;
    body: string;
    comments?: Array<CommentI>;
}
export interface Istate {
    posts: Array<IPost>;
    isLoading: boolean;
    comment: string;
    title: string;
    body: string;
    post?: IPost;
}

const initialState: Istate = {
    posts: [],
    title: '',
    body: '',
    comment: '',
    isLoading: false,
};

const reducer = (state = initialState, action: any) => {
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
            return { ...state, title: '', body: '' };

        default:
            return state;
    }
};

export default reducer;
