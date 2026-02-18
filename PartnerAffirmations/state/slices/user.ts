import { User } from '@/constants/models/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProgressState {
  value: {
    user: User | undefined;
  };
}

const initialState: ProgressState = {
  value: {
    user: undefined,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.value.user = action.payload;
    },
  },
});

export const {
    setUser
} = userSlice.actions;

export default userSlice.reducer;