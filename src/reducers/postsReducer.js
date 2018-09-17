import constants from '../constants/actionsConstants';

function postsReducer(state = [], action) {
  switch (action.type) {
    case constants.GET_POSTS:
        return action.payload;
    default:
        return state;
  }
}

export default postsReducer;