import { CommentState } from './../type/type.d';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

export const callApi = {
  getList: () => instance.get(`/comments`),
  getCommentByPage: (page: number) => instance.get(`/comments?_page=${page}&_limit=4&_order=desc&_sort=id`),
  getOneComment: (id: number) => instance.get(`/comments/${id}`),
  addComment: (newComment: CommentState) => instance.post(`/comments`, newComment),
  updateComment: (id :number|undefined, newComment: CommentState) => instance.put(`/comments/${id}`, newComment),
  delComment: (id: number) => instance.delete(`/comments/${id}`),
}