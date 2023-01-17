import React from "react";
import styled from "styled-components";
import { addComment, updateComment } from '../redux/commentSlice';
import { useAppDispatch } from '../redux/hooks';
import { CommentState, FProps } from '../type/type';

export default function Form({form, setForm} :FProps) {
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;
    setForm((form: CommentState) => ({ ...form, [name]: value }));
  }
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    form.id ? dispatch(updateComment(form)) : dispatch(addComment(form));
    setForm({ profile_url: "https://picsum.photos/id/1/50/50", createdAt: "2020-05-30" });
  }
  
  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="profile_url"
          defaultValue="https://picsum.photos/id/1/50/50"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={form.author || ''}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          value={form.content || ''}
          onChange={handleChange}
          required></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          value="2020-05-30"
          onChange={handleChange}
          required />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;