// Есть файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API

const apiKey = '19902573-b9fa82d62327bd625e4b4b636';

// async function featchImage(searchQuery, page) {
//   const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
//   //  fetch(url)
//   //   .then(res => res.json())
//   //   .then(({ hits }) => hits);
//   try {
//     const response = await fetch(url);
//     const images = response.json();
//     // throw 'oops';
//     return images;
//   } catch (error) {
//     throw error;
//   }
// }

// export default featchImage;

export default {
  searchQuery: '',
  page: 1,

  fetchImage() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
