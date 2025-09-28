import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance"; // ✅ centralized axios

const initialState = {
  isLoading: false,
  reviews: [],
};

export const addReview = createAsyncThunk(
  "review/addReview",
  async (formdata) => {
    const response = await axiosInstance.post("/api/shop/review/add", formdata);
    return response.data; // expected { success: true, data: review }
  }
);

export const getReviews = createAsyncThunk(
  "review/getReviews",
  async (id) => {
    const response = await axiosInstance.get(`/api/shop/review/${id}`);
    return response.data; // expected { success: true, data: [reviews] }
  }
);

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getReviews
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data || [];
      })
      .addCase(getReviews.rejected, (state) => {
        state.isLoading = false;
        state.reviews = [];
      })

      // addReview
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload?.success) {
          // append new review to state
          state.reviews.push(action.payload.data);
        }
      })
      .addCase(addReview.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default reviewSlice.reducer;
