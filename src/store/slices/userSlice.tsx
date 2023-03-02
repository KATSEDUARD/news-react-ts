import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { isNull } from 'lodash';
import { toast } from 'react-toastify';

interface UserState {
    username: string,
    isLoggedIn: boolean,
    errorMessage: string
};

const initialState: UserState = {
    username: '',
    isLoggedIn: false,
    errorMessage: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize: (state, action) => {
      const { username, password } = action.payload;

      if(username === 'admin' && password === '12345') {
        state.isLoggedIn = true;
        state.username = username;
        localStorage.setItem('user', JSON.stringify({ username, isLoggedIn: true }));
        toast.success('Authorized!');
      }
      else {
        state.errorMessage = 'Invalid username or password.';
        toast.error(state.errorMessage);
      }
    },
    isAuthorized: (state) => {
      const user = !isNull(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user') || "") : false;
      state.isLoggedIn = user.isLoggedIn;
      state.username = user.username;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.username = '';
      localStorage.removeItem('user');
      toast.info('Logged Out.');
    },
    changeLng: (state, action) => {
      const { translator, language } = action.payload;

      translator.changeLanguage(language);
    }
  },
});

export const { authorize, isAuthorized, logOut, changeLng } = userSlice.actions;

export const selectNews = (state: RootState) => state.news;

export const userReducer = userSlice.reducer;