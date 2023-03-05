// import './node_modules/modern-normalize/modern-normalize.css';
import imageTpl from './templates/image.hbs';

const formRef = document.querySelector('.js-search-form');
const rezultRef = document.querySelector('.js-card-container');

let searching = '';
let type = '';
let orientation = ''

formRef.addEventListener('submit', searchImg);

function searchImg(e) {
    e.preventDefault();

    searching = e.srcElement[0].value;
    type = e.srcElement[1].value;
    orientation = e.srcElement[2].value

    fetch(`https://pixabay.com/api/?key=34021222-b9c8863f050204b598fd68392&q=${searching}&image_type=${type}&orientation=${orientation}&per_page=50`)
.then(response => response.json())
.then(imgs => imgs.hits)
.then(img => {
     const murkup = imageTpl(img);
        console.log(img);
        rezultRef.innerHTML = murkup;
})    
}
