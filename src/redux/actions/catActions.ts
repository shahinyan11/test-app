export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_REQUEST_SUCCESS = 'GET_CATEGORIES_REQUEST_SUCCESS';


export const GET_IMAGES_REQUEST = 'GET_IMAGES_REQUEST';
export const GET_IMAGES_REQUEST_SUCCESS = 'GET_IMAGES_REQUEST_SUCCESS';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


export function getCategoriesAction() {
  return { type: GET_CATEGORIES_REQUEST };
}


export function getImagesAction(data?: {
  page?: number,
  category_ids?: number,
  remove?: boolean
}) {
  return { type: GET_IMAGES_REQUEST , payload: data};
}

export function setCurrentPage(page: number) {
  return { type: SET_CURRENT_PAGE, payload: page };
}