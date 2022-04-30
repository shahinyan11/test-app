import {  GET_CATEGORIES_REQUEST_SUCCESS,  GET_IMAGES_REQUEST_SUCCESS, SET_CURRENT_PAGE } from "../actions/catActions";


export interface AppState {
    categories: any[];
    images: any[];
    page: number

}

const initialState: AppState = {
    categories: [],
    images: [],
    page: 1
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST_SUCCESS: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case GET_IMAGES_REQUEST_SUCCESS: {
      const {images, page, remove} = action.payload
      const newImages = remove ? [...images] : [...state.images, ...images]
      return {
        ...state,
        images: newImages,
        page: page || state.page
        
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
  
    default: {
      return state;
    }
  }
}

export default reducer;