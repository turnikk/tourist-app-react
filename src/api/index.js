import axios from 'axios';
import { config } from '../config';

const { GOOGLE_API_KEY, GOOGLE_API_BASE_URL } = config.api;

const SEARCH_API_ADDR = 'maps/api/place/nearbysearch/json';
const PHOTO_API_ADDR = 'maps/api/place/photo';

export const searchPlacesApi = ({
    keyword,
    location,
    radius,
    type,
    language,
    pagetoken
}) =>
    axios.get(`${GOOGLE_API_BASE_URL}${SEARCH_API_ADDR}`, {
        params: {
            key: GOOGLE_API_KEY,
            keyword,
            location,
            radius,
            type,
            language,
            pagetoken
        }
    });

export const createPhotoURL = (ref) =>
    `${GOOGLE_API_BASE_URL}${PHOTO_API_ADDR}?maxwidth=${300}&photoreference=${ref}&key=${GOOGLE_API_KEY}`;
