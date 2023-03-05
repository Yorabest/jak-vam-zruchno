import imageTpl from '../templates/image.hbs';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    imgContainer: document.querySelector('.js-card-container')
}

let searching = '';
let page = 1;

refs.searchForm.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSubmit(e) {
    e.preventDefault()
    searching = e.srcElement[0].value;
    fetchImg(searching)
};

function onLoadMore() {
    page += 1;
    fetchImg(searching)
}

function fetchImg(searching) {
    const apiKey = '34021222-b9c8863f050204b598fd68392';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searching}&per_page=10&page=${page}`;
    // const options = {
    //     heders: {
    //         'X-Api-'
    //     }
    // }
   return fetch(url)
    .then(response=> response.json())
    .then(imgs => imgs.hits)
    .then(img => {
        const murkup = imageTpl(img)
        // refs.imgContainer.innerHTML = murkup;
        refs.imgContainer.insertAdjacentHTML('beforeend', murkup)
    })
}