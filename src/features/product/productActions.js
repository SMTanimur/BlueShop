import { client } from '@pages/_app';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { errorAlert, handleErrorMessage, successAlert } from 'src/utils';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const attemptGetProducts = createAsyncThunk(
  'user/attemptGetProducts',
  async () => {
    try {
      const { data } = await axios.get(`/api/admin/product`, config);
      errorAlert(data.error);
      successAlert(data.message);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptGetProductById = createAsyncThunk(
  'user/attemptGetProductById',
  async id => {
    try {
      const { data } = await axios.get(`/api/admin/product/${id}`, config);
      errorAlert(data.error);
      successAlert(data.message);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptCreateProduct = createAsyncThunk(
  'user/attemptCreateProduct',
  async (productData, { getState }) => {
    try {
      const { user } = getState().auth;

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/admin/product/create`,
        productData,
        config
      );

      errorAlert(data.error);
      successAlert(data.message);

      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptDeleteProduct = createAsyncThunk(
  'user/attemptDeleteProduct',
  async (id, { getState }) => {
    try {
      const { user } = getState().auth;

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.delete(`/api/admin/product/delete/${id}`, config);

      errorAlert(data.error);
      successAlert(data.message);
      client.invalidateQueries('products');
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);
