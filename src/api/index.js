import axios from 'axios';
import { config } from '../config';

const { GOOGLE_API_KEY, GOOGLE_API_BASE_URL } = config.api;

const SEARCH_API_ADDR = 'maps/api/place/nearbysearch/json';

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
