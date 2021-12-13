import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'src/features/auth/authSlice';
import { productReducer } from 'src/features/product/productSlice';
import { userReducer } from 'src/features/user/userSlice';
import  cartReducer from 'src/features/cart/cartSlice';
import { categoryReducer } from 'src/features/category/categorySlice';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  cart:cartReducer,
  product: productReducer,
  // brand: brandReducer,
  category: categoryReducer,
  // countryData: countryReducer,
});
