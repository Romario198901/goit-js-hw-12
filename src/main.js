import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';

import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const query = formData.get('search-text').trim();
  if (!query) {
    iziToast.warning({
      title: '❌',
      titleColor: '#fafafb',
      message: ` Please enter search query!`,
      messageColor: '#fafafb',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(images => {
      if (!images || images.length === 0) {
        iziToast.error({
          title: '❌',
          titleColor: '#fafafb',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          messageColor: '#fafafb',
          backgroundColor: '#ef4040',
          position: 'topRight',
        });
        return;
      }
     createGallery(images);
    })
    .catch(error => {
      iziToast.error({
        title: '❌',
        titleColor: '#fafafb',
        message: `Sorry, something went wrong!!!. Please try again!`,
        messageColor: '#fafafb',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
  e.target.reset();
}
clearGallery();
