import imageTpl from '../templates/image.hbs';
import ImgApi from './new-API'

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    formInput: document.querySelector('.form-control'),
    searchBtn: document.querySelector('.btn-primary'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    imgContainer: document.querySelector('.js-card-container')
}

const imgApiServis = new ImgApi()

refs.searchForm.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.formInput.addEventListener('input', checkingValue)

function checkingValue(e) {
    const value = e.currentTarget.value;

     if (value === '') {
        refs.searchBtn.disabled = true;
    } else {
        refs.searchBtn.disabled = false;
    }
}


function onSubmit(e) {
    e.preventDefault();

    refs.imgContainer.innerHTML = '';
    imgApiServis.resetPage();

    const form = e.currentTarget;
    let value =  form.elements.query.value;
    imgApiServis.searchQuery = value;
    
    form.elements.query.value = ''
    imgApiServis.fetchArticles()
    .then(createMurkup)
    .catch(onError)
};

function onLoadMore() {
    imgApiServis.incrasePage();
    imgApiServis.fetchArticles()
    .then(createMurkup)
}

function createMurkup(img) {
    console.log(img);
              const murkup = imageTpl(img)
    refs.imgContainer.insertAdjacentHTML('beforeend', murkup)
}

function onError() {
    alert('Запит невірний(( Спробуйте ще раз!');
    refs.imgContainer.innerHTML = '';
    refs.loadMoreBtn.disabled = false; 
}
