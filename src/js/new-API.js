// import imageTpl from '../templates/image.hbs';

const API_KEY = '34021222-b9c8863f050204b598fd68392'
const BASE_URL = 'https://pixabay.com/api/'

export default class NewsApi  {
    constructor (){
        this.searchQuery = '',
        this.page = 1
    }    

    fetchArticles(){
       return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&per_page=9&page=${this.page}`)
          .then(response=> response.json())
          .then(imgs => imgs.hits)
          .then(img => img)
            }

    incrasePage(){
        this.page += 1
    }

    resetPage() {
        this.page = 1;
    }
}
// Andromeda
// фіолетове щось там