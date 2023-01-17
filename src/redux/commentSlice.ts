import { callApi } from './../api/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
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
    const response = await callApi.getList();
    return response.data;
  });

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<CommentState>) => {
      callApi.addComment(action.payload);
      state.push(action.payload);
    },
    updateComment: (state, action: PayloadAction<CommentState>) => {
      const form = action.payload
      callApi.updateComment(form.id, form);
      if (form.id) state.splice(form.id - 1, 1, form);
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      callApi.delComment(action.payload);
      return state.filter(state => state.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        console.log("api calling")
      })
      .addCase(getList.fulfilled, (state, { payload }) => {
        return [...payload];
      })
      .addCase(getList.rejected, (state, { payload }) => {
        console.log("api calling error")
      });
  },
})

export const { addComment, updateComment, deleteComment } = commentSlice.actions

export default commentSlice.reducer