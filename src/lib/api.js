import axios from "axios";
import queryString from "query-string";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const createPost = ({ title, body, tags }) =>
  axios.post("/post/", { title, body, tags });

export const getPost = id => axios.get(`/post/${id}`);

export const getPostList = ({ tag, page }) =>
  axios.get(`/post/?${queryString.stringify({ tag, page })}`);
