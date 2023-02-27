import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";


export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface NewsState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  nextPage: number | null;
}

const initialState: NewsState = {
  posts: [],
  status: "idle",
  error: null,
  nextPage: 2,
};


export const fetchPosts = createAsyncThunk(
  "news/fetchPosts",
  async (page: number) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  "news/deletePost",
  async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return id;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = "succeeded";
        state.posts = state.posts.concat(action.payload);
        state.nextPage = state.nextPage ? state.nextPage + 1 : null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<number>) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
});


export const selectPosts = (state: RootState) => state.news.posts;
export const selectStatus = (state: RootState) => state.news.status;
export const selectError = (state: RootState) => state.news.error;
export const selectNextPage = (state: RootState) =>
  state.news.nextPage;

export default newsSlice.reducer;