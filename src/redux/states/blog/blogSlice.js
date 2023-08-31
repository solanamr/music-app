import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyState = {
    blogs: [],
    blogsCopy: [],
  };


  // fetch de todos los films
  export const fetchBlogs = createAsyncThunk(
    "blog/fetchBlogs", async () => {
      try {
        const res = await axios.get("http://localhost:5077/api/post");
        // console.log("🚀  res:", res.data.$values)
        const data = await res.data.$values
        return {data: data};

      } catch (error) {
        console.log(error);
      }
    }
  );

  export const fetchComments = createAsyncThunk(
    'blog/fetchComments', async (postId) => {
    const response = await axios.get(`http://localhost:5077/api/comments/post/${postId}`);
    const data = response.data.$values
    //console.log("🚀 ~ file: blogSlice.js:33 ~ 'blog/fetchComments', ~ data:", response)
    return data;
 })



  export const blogSlice = createSlice({
    name: "blog",
    initialState: EmptyState,
    reducers: {
      filterCategory: (state, action) => {
        state.blogs = state.blogsCopy.filter(
          (e) => e.category === action.payload
        ); 
      },
      
      // filterGender: (state, action) => {
      //   state.characters = state.charactersCopy.filter(
      //     (g) => g.gender === action.payload
      //   );
      // },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchBlogs.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
          state.status = "error";
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
          state.status = "succeeded";
  
          const data  = action.payload;
          state.blogs = data.data;
          state.blogsCopy = data.data;
          
          if (data.errors === "There is not data") {
            state.blogs = [];
            state.blogsCopy = []
          }
          
        });

     
      
    },
  });

  export const { filterCategory } = blogSlice.actions;


export default blogSlice.reducer; 