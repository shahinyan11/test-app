import apiClient from '../ApiClient';

export function getCategories() {
  return apiClient.get('/categories');
}

export function getImages(data?: {
  page?: number,
  category_ids?: number
}) {
  let url = `/images/search?limit=10&page=${data?.page || 1}`
  
  if(data?.category_ids){
    url += `&category_ids=${data.category_ids}`
  } 

  return apiClient.get(url);
}
