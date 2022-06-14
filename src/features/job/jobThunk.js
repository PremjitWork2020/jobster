import axios from 'axios';
import customFetch from '../../utils/axios';
import { logoutUser } from '../user/userSlice';
import { clearValues } from './jobSlice';

export const addJobThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
