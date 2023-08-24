import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyState = {
    blogs: [],
    
  };


  // fetch de todos los films
  export const fetchBlogs = createAsyncThunk(
    "blog/fetchBlogs", async () => {
      try {
        const res = await axios.get("http://localhost:5077/api/post");
        // console.log("🚀  res:", res.data)
        const data = await res.data
        return {data: data};

      } catch (error) {
        console.log(error);
      }
    }
  );



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
          
          if (data.errors === "There is not data") {
            state.blogs = [];
          }
          
        });
    },
  });

  export const { filterEyeColor, filterGender } = blogSlice.actions;


export default blogSlice.reducer;