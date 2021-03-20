import axios from 'axios';
import { config } from '../config';

const timeout = 10000;

const { GOOGLE_API_KEY, GOOGLE_API_BASE_URL } = config.api;

const httpClient = axios.create({
  baseURL: GOOGLE_API_BASE_URL,
  timeout,
});

export const getGistsData = (username, limit = 20, page = 1) =>
  httpClient.get(`/users/${username}/gists`, {
    params: {
      per_page: limit,
      page,
    },
  });

export const getGistForks = (id, limit = 3, page = 1) =>
  httpClient.get(`/gists/${id}/forks`, {
    params: {
      per_page: limit,
      page,
    },
  });
