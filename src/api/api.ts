import { CommentState } from './../type/type.d';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

export const callApi = {
  getList: () => instance.get(`/comments`),
  addComment: (newComment: CommentState) => instance.post(`/comments`, newComment),
  delComment: (id: number) => instance.delete(`/comments/${id}`),
}