import { POSTS_FAIL, POSTS_LOADING, POSTS_SUCCESS } from '../types/types';

interface InitialStateI {
  posts: any;
  isLoading: boolean
}

const initialState: InitialStateI = {
  posts: [],
  isLoading: false,
};

const reducer = (state: InitialStateI = initialState, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return { ...state, isLoading: !state.isLoading };

    case POSTS_SUCCESS:
      return { ...state, posts: [...action.payload] };

    case POSTS_FAIL:
      return state;

    default:
      return state;
  }
};

export default reducer;
