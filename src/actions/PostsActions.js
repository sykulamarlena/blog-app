import axios from '../axios/axios';
import store from '../store/getStore';
import constants from '../constants/actionsConstants';

class PostsActions {
    getPosts() {
        return new Promise((resolve, reject) => {
            axios.get('posts')
                .then((response) => {
                    store.dispatch({
                        type: constants.GET_POSTS,
                        payload: response.data
                    });
                    resolve(response.data);
                })
                .catch(error => reject(error));
        });
    }
}

export default PostsActions;