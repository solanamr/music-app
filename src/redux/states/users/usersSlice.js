import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyState = {
    users: [],
  };


  // fetch de todos los films
  export const fetchUsers = createAsyncThunk(
    "users/fetchUsers", async () => {
      try {
        const res = await axios.get('http://localhost:5077/api/users');
        // console.log(res.data)
        const data = await res.data
        return {data: data};

      } catch (error) {
        console.log(error);
      }
    }
  );

  export const loginUser = createAsyncThunk("user/loginUser", async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5077/api/auth/login",
        data
      );
      return res;
    } catch (err) {
      console.error(err);
    }
  });
  


  export const usersSlice = createSlice({
    name: "users",
    initialState: EmptyState,
    reducers: {
    //   filterEyeColor: (state, action) => {
    //     state.characters = state.charactersCopy.filter(
    //       (e) => e.eye_color === action.payload
    //     ); 
    //   },
      
    //   filterGender: (state, action) => {
    //     state.characters = state.charactersCopy.filter(
    //       (g) => g.gender === action.payload
    //     );
    //   },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchUsers.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.status = "error";
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.status = "succeeded";
  
          const data  = action.payload;
          state.users = data.data;
          
          if (data.errors === "There is not data") {
            state.users = [];
          }
          
        })
        
    },
  });

  export const { filterEyeColor, filterGender } = usersSlice.actions;


export default usersSlice.reducer;