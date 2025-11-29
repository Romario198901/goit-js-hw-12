import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 1000,
});
export function getImagesByQuery(query) {
  return instance
    .get('/', {
      params: {
        key: '53360432-3950dd890aa8264617696b589',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      if (!res.data.hits || res.data.hits.length === 0) {
        iziToast.error({
          title: '❌',
          titleColor: '#fafafb',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          messageColor: '#fafafb',
          backgroundColor: '#ef4040',
          position: 'topRight',
        });
        return null;
      } else {
        return res.data.hits;
      }
    })
    .catch(error => {
      console.error(error);
    });
}
