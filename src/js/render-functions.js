import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export default createGallery;

const gallery = document.querySelector('.gallery');

function createGallery(images) {
  let list = '';
  images.forEach(image => {
    list =
      list +
      `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
  <ul class="image-attribute-list">
  <lI class="image-attribute-list-item">
  <p>Likes</p>
  <p>${image.likes}</p>
  </lI>
  <lI class="image-attribute-list-item">
  <p>Views</p>
  <p>${image.views}</p>
  </lI>
  <lI class="image-attribute-list-item">
  <p>Comments</p>
  <p>${image.comments}</p>
  </lI>
  <lI class="image-attribute-list-item">
  <p>Downloads</p>
  <p>${image.downloads}</p>
  </lI>
  </ul> 
</li>`;
  });

  gallery.insertAdjacentHTML('beforeend', list);
  modal.refresh();
}

const modal = new SimpleLightbox('.gallery-link', {
  captions: true,

  captionDelay: 250,
});

export function clearGallery() {
  gallery.innerHTML = '';
}

const loader = document.querySelector('span');

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}
