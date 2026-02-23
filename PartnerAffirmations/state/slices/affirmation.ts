import { TodaysAffirmation } from '@/constants/models/affirmation';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProgressState {
  value: {
    todaysAffirmation: TodaysAffirmation | undefined;
  };
}

const initialState: ProgressState = {
  value: {
    todaysAffirmation: undefined,
  },
};

const affirmationSlice = createSlice({
  name: 'affirmation',
  initialState,
  reducers: {
    setTodaysAffirmation: (state, action: PayloadAction<TodaysAffirmation | undefined>) => {
        state.value.todaysAffirmation = action.payload;
    },
  },
});

export const {
    setTodaysAffirmation
} = affirmationSlice.actions;

export default affirmationSlice.reducer;