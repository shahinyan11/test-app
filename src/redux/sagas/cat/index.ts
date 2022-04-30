import { AxiosResponse } from 'axios';
import {takeLatest, put, call} from 'redux-saga/effects';


import * as api from '../../../apis/cat';
import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_REQUEST_SUCCESS, GET_IMAGES_REQUEST, GET_IMAGES_REQUEST_SUCCESS } from '../../actions/catActions';


function* getCategories() {
  try {
    const response: AxiosResponse = yield call(api.getCategories);
    yield put({
      type: GET_CATEGORIES_REQUEST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.log('function* getCategories');
  }
}

function* getImages(action: any) {
  try {
    const response: AxiosResponse = yield call(api.getImages, action.payload);
    yield put({
      type: GET_IMAGES_REQUEST_SUCCESS,
      payload: {
        page: action.payload?.page || null ,
        images: response.data,
        remove: action.payload?.remove
      },
    });
  } catch (e) {
    console.log('function* getImages', e);
  }
}



export default function* watcher() {
  yield takeLatest(GET_CATEGORIES_REQUEST, getCategories);
  yield takeLatest(GET_IMAGES_REQUEST, getImages);
}