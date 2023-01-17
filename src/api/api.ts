import { CommentState } from './../type/type.d';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

export const callApi = {
  getList: () => instance.get(`/comments`),
  addComment: (newComment: CommentState) => instance.post(`/comments`, newComment),
  getOneComment: (id: number) => instance.get(`/comments/${id}`),
  updateComment: (id :number|undefined, newComment: CommentState) => instance.put(`/comments/${id}`, newComment),
  delComment: (id: number) => instance.delete(`/comments/${id}`),
}