import { useState } from 'react';
import { callApi } from '../api/api';
import { CommentState } from '../type/type';

const initialValue = { profile_url: "https://picsum.photos/id/1/50/50", createdAt: "2020-05-30" };

export default function useForm(defaultValue = initialValue) {
  const [form, setForm] = useState<CommentState>(defaultValue);

  const handleUpdate = async (id: number) => {
    const res = await callApi.getOneComment(id);
    setForm(res.data);
  }
  
  return {form, setForm, handleUpdate}
}

