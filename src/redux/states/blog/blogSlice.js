import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyState = {
    blogs: [],
    blogsCopy: [],
    comments: [],
    comment: [],
    userId: 0
    
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
    return data;

  });

  export const fetchUserComments = createAsyncThunk('blog/fetchUserComments', async (userId) => {
    const response = await axios.get(`http://localhost:5077/api/comments/user/${userId}`);
    
    console.log("🚀 ~ file: blogSlice.js:38 ~ fetchUserComments ~ response:", response.data)
    // Aquí asumo que el userId está en la respuesta, ajusta según la estructura real de la respuesta
    const obtainedUserId = response.data.userId;
    
    
    return {
      comments: response.data.comments,
      userId: obtainedUserId
    };
  });



  export const blogSlice = createSlice({
    name: "blog",
    initialState: EmptyState,
    reducers: {
      // filterEyeColor: (state, action) => {
      //   state.blogs = state.charactersCopy.filter(
      //     (e) => e.eye_color === action.payload
      //   ); 
      // },
      
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
          }
          
        });

      builder
        .addCase(fetchComments.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchComments.rejected, (state, action) => {
          state.status = "error";
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
          state.status = "succeeded";
  
          const data  = action.payload;
          state.comments = data;
          
          if (data.errors === "There is not data") {
            state.comments = [];
          }
          
        });
      builder
        .addCase(fetchUserComments.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchUserComments.rejected, (state, action) => {
          state.status = "error";
        })
        .addCase(fetchUserComments.fulfilled, (state, action) => {
          state.status = "succeeded";
  
          state.comment = action.payload.comments;
      state.userId = action.payload.userId;
          
        });
    },
  });

  export const { filterEyeColor, filterGender } = blogSlice.actions;


export default blogSlice.reducer;