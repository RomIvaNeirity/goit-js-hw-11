hideLoader();
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery, { handleAxiosError } from './js/pixabay-api';
import createGallery, {
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

let query;
const search = document.querySelector('form');
search.addEventListener('submit', clickSearch);

function clickSearch(event) {
  event.preventDefault();
  clearGallery();
  query = event.target.elements['search-text'].value.trim();
  showLoader();
  getImagesByQuery(query)
    .then(response => {
      const data = response.data;
      if (!data.hits.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: 'yellow',
          timeout: 5000,
          position: 'center',
          messageSize: '20',
          backgroundColor: 'magenta',
        });
        hideLoader();
        return;
      }

      createGallery(data.hits);
      hideLoader();
    })
    .catch(error => {
      const message = handleAxiosError(error);
      iziToast.show({
        message,
        position: 'center',
        backgroundColor: 'red',
        timeout: 5000,
      });
      hideLoader();
    });
}
