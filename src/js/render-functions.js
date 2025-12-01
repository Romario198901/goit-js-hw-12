import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const simplelightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 500,
});
export const refs = {
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-btn'),
};
function createCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
<a href="${largeImageURL}" class="gallery-link">
<img src="${webformatURL}" alt="${tags}">
</a>
<div class="gallery-descr">
<div class="gallery-descr-item">
<p class="gallery-descr-title">Likes</p>
<p class="gallery-descr-value">${likes}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Views</p>
<p class="gallery-descr-value">${views}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Comments</p>
<p class="gallery-descr-value">${comments}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Downloads</p>
<p class="gallery-descr-value">${downloads}</p>
</div>
</div>
</li>`;
}
export function createGallery(images) {
  const markup = images.map(createCard).join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  simplelightbox.refresh();
}
export function clearGallery() {
  refs.gallery.innerHTML = '';
}
export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}
export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
export function showLoadMoreButton() {
  refs.loadMoreBtn.classList.remove('is-hidden');
}
export function hideLoadMoreButton() {
  refs.loadMoreBtn.classList.add('is-hidden');
}
