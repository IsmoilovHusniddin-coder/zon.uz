import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("cart")) || [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getData(state, { payload }) {
      if (state.data.find((value) => value.id === payload.id)) {
        state.data = state.data.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              count: (item.count += 1),
              userPrice: item.count * item.price,
            };
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify(state.data));
        return;
      }
      state.data = [
        ...state.data,
        { ...payload, count: 1, userPrice: payload.price },
      ];

      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    deleteDate(state, { payload }) {
      state.data = state.data.filter((value) => value.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    increment(state, { payload }) {
      state.data = state.data.map((value) => {
        if (value.id === payload) {
          return {
            ...value,
            count: (value.count += 1),
            userPrice: value.count * value.price,
          };
        }
        return value;
      });
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    decrement(state, { payload }) {
      state.data = state.data.map((value) => {
        const newCount = value.count > 1 ? value.count - 1 : 1;
        if (value.id === payload) {
          return {
            ...value,
            count: newCount,
            userPrice: newCount * value.price,
          };
        }
        return value;
      });
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
});

export const { getData, deleteDate, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
