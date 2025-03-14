import { createSlice } from "@reduxjs/toolkit";
import { changeBalance } from "./balanceOperations";
const balanceSlice = createSlice({
	name: "balance",
	initialState: { balance: 0, loading: false, error: null },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(changeBalance.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(changeBalance.fulfilled, (state, action) => {
				state.loading = false;
				state.balance = action.payload.balance;
			})
			.addCase(changeBalance.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default balanceSlice.reducer;
