import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const simplelightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 500,
});
const refs = {
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.loader'),
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
refs.gallery.innerHTML = markup;
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
