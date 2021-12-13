import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorAlert, handleErrorMessage, successAlert } from 'src/utils';
import { client } from '@pages/_app';


const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const attemptCreateCategory = createAsyncThunk(
  'user/attemptCreateCategory',
  async (categoryData, { getState }) => {
    try {
      const { user } = getState().auth;

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/admin/category/create`,
        categoryData,
        config
      );

      errorAlert(data.error);
      successAlert(data.message);
      client.invalidateQueries('categories');

      return data;
    } catch (err) {
      console.log(err)
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);
