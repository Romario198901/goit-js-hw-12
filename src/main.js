import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  refs,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';
const searchForm = document.querySelector('form');
let currentPage;
let currentQuery = '';
const ITEMS_PER_PAGE = 15;
searchForm.addEventListener('submit', handleFormSubmit);
async function handleFormSubmit(e) {
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
  currentPage = 1;
  currentQuery = query;
  try {
    const { hits } = await getImagesByQuery(query, currentPage);
    if (!hits || hits.length === 0) {
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
    createGallery(hits);
    showLoadMoreButton();
  } catch (error) {
    iziToast.error({
      title: '❌',
      titleColor: '#fafafb',
      message: `Sorry, something went wrong!!!. Please try again!`,
      messageColor: '#fafafb',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
     e.target.reset();
  }
}
clearGallery();
refs.loadMoreBtn.addEventListener('click', handleLoadMoreBtnClicked);
async function handleLoadMoreBtnClicked() {
  showLoader();
  try {
    currentPage += 1;
    const { totalHits } = await getImagesByQuery(currentPage, currentQuery);
    const totalPages = Math.ceil(totalHits / ITEMS_PER_PAGE);
    if (currentPage > totalPages) {
      iziToast.warning({
        title: '❌',
        titleColor: '#fafafb',
        message: `We're sorry, but you've reached the end of search results.`,
        messageColor: '#fafafb',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
      hideLoadMoreButton();
      return;
    }
    const { hits } = await getImagesByQuery(currentQuery, currentPage);
    if (!hits || hits.length === 0) {
      iziToast.warning({
        title: '❌',
        titleColor: '#fafafb',
        message: `No more images found.`,
        messageColor: '#fafafb',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
      hideLoadMoreButton();
      return;
    }
    createGallery(hits);
    const cardHeight =
      refs.gallery.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      title: '❌',
      titleColor: '#fafafb',
      message: `Sorry, something went wrong!!!. Please try again!`,
      messageColor: '#fafafb',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
