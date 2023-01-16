import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { CommentState } from '../type/type';

interface CommentError {
  errorMessage: string
}

const initialState: CommentState[] = [];

export const getList = createAsyncThunk<
  CommentState[],
  string | undefined,
  { rejectValue: CommentError }
  >("GET_COMMENT", async () => {
    const response = await axios.get("http://localhost:4000/comments");
    return response.data;
  });

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<CommentState>) => {
      axios.post("http://localhost:4000/comments", action.payload);
    },
    updateComment: (state, action: PayloadAction<number>) => {
      // FIX ME
      return state;
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      // FIX ME
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      // 통신 중
      .addCase(getList.pending, (state) => {
        console.log("api calling")
      })
      // 통신 성공
      .addCase(getList.fulfilled, (state, { payload }) => {
        console.log(payload);
        return [...payload];
      })
      // 통신 에러
      .addCase(getList.rejected, (state, { payload }) => {
        console.log("api calling error")
      });
  },
})

export const { addComment, updateComment, deleteComment } = commentSlice.actions

export default commentSlice.reducer