import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=12312302491'

export function fetchPosts() {
    const request = axios.get(`${ROOL_URL}/posts${API_KEY}`)

    return {
        type: FETCH_POSTS,
        payload: request
    }
}