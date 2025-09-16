import iziToast from "izitoast";
import getImagesByQuery, { handleAxiosError } from "./js/pixabay-api";
import createGallery, { clearGallery } from "./js/render-functions";


let query;
const search = document.querySelector("form");
search.addEventListener("submit", clickSearch);

function clickSearch(event) {
    
    event.preventDefault();
    query = event.target.elements["search-text"].value.trim();
     
    getImagesByQuery(query)
        .then((response) => {
      const data = response.data;
            
            if (!data.hits.length) {
        iziToast.show({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "center",
          backgroundColor: "blue",
          timeout: 3000,
        });
        return;
      }
            
            createGallery(data.hits);
        })
        .catch((error) => {
    const message = handleAxiosError(error);
    iziToast.show({
        message,
        position: "center",
        backgroundColor: "red",
        timeout: 3000,
    });
        });
    
}
