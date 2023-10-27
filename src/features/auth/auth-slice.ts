import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../../api/auth';
import { RootState } from '../../store';
import { AuthInitialStateInterface } from '../types';

export const authInitialState: AuthInitialStateInterface = {
  refresh: null,
  access: null,
  is_email_confirmed: null,
};

const slice = createSlice({
  name: 'wb',
  initialState: authInitialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { refresh, access, is_email_confirmed },
      }: PayloadAction<AuthInitialStateInterface>
    ) => {
      state.access = access;
      state.refresh = refresh;
      state.is_email_confirmed = is_email_confirmed;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload: { refresh, access, is_email_confirmed } }) => {
        state.access = access;
        state.refresh = refresh;
        state.is_email_confirmed = is_email_confirmed;
      }
    );
  },
});

export const { setCredentials } = slice.actions;
export const selectCredentials = (state: RootState) => state.auth;
export default slice.reducer;
