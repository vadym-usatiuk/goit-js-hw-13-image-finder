export default {
  pageNumber: 0,
  per_page: 12,
  query: '',
  getUrl() {
    const baseUrl = 'https://pixabay.com/api/';
    const key = '13266916-cbb933a2194e370075cd13811';
    return `${baseUrl}?image_type=photo&orientation=horizontal&q=${
      this.query
    }&page=${this.pageNumber}&per_page=${this.per_page}&key=${key}`;
  },
  
  fetchImg() {
    return fetch(this.getUrl())
      .then(response => response.json())
      .then(response => {
        this.incrementPage();
        return response.hits;
      });
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(str) {
    this.query = str;
  },

  incrementPage() {
    this.pageNumber += 1;
  },

  resetPage() {
    this.pageNumber = 1;
  },
};
