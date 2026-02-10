import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:9000/stickers");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// const initialState = {
//   items: [],
//   status: null,
// };

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/stickers");
//       return response.data;
//     } catch (err) {
//       console.log(err);
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   },
// );

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchProducts.pending]: (state, action) => {
//       state.status = "pending";
//     },
//     [fetchProducts.fulfilled]: (state, action) => {
//       state.items = action.payload;
//       state.status = "success";
//     },
//     [fetchProducts.rejected]: (state, action) => {
//       state.status = "rejected";
//     },
//   },
// });

// export default productsSlice.reducer;
