import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

import { productCreateReviewReducer, productDetailsReducer, productListReducer } from "./reducers/productReducers"
import { cartReducer } from "./reducers/cartReducers"
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateReducer } from "./reducers/userReducer"
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from "./reducers/orderReducers"

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : null

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store