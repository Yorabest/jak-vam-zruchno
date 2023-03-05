import pocemonCardsTpl from '../templates/pocemon-cards.hbs';

const pokemonCard = document.querySelector('.js-card-container');
const searchForm = document.querySelector('.js-search-form');

let searchingPocemon = '';

searchForm.addEventListener('submit', searchPocemon)

function searchPocemon(e){
    e.preventDefault()
    const input = e.srcElement[0];
    searchingPocemon = input.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchingPocemon}`)
.then(response => response.json())
.then(pocemon => {
        const murkup = pocemonCardsTpl(pocemon);
    pokemonCard.innerHTML = murkup;
    input.value = "";
}).catch(error => {
    alert('Упс, такого покемона не знайдено');
    pokemonCard.innerHTML = '';
}
)
}
