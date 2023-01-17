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
  number | undefined,
  { rejectValue: CommentError }
  >("GET_COMMENT", async (page = 1) => {
    const response = await callApi.getCommentByPage(page);
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
      // FIXME : 바로 인덱스 번호로 지우지 말고 findIndex 해서 인덱스 번호 찾아서 지우기
      if (form.id) state.splice(form.id - 1, 1, form);
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      callApi.delComment(action.payload);
      return state.filter(state => state.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
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