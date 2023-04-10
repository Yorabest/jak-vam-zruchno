import pocemonCardsTpl from '../templates/pocemon-cards.hbs';
import weatherTpl from '../templates/weather.hbs';

const refs = {
    form: document.querySelector('.js-search-form'),
    countainer: document.querySelector('.countainer')
}

refs.form.addEventListener('submit', searchWeather);

const key = '40207e285e43c5b8e49ba7f2599cdd4b'




function searchWeather(e) {
    e.preventDefault();

    const city = e.target[0].value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const date = new Date();
            const locate = date.toLocaleString(data.sys.country, {hour: 'numeric', minute: 'numeric'});
            console.log(locate);
            const hours = date.toLocaleString(data.sys.country, {hour: 'numeric'});
            console.log(hours);
            data.locate = locate;
            // console.log(data.snow); en-GB
            const murkup = weatherTpl(data, locate);
            console.log(murkup);
            refs.countainer.innerHTML = murkup;
            refs.form.style.background = bg.dayClouds;
        }
        )
    // console.log(city); timezone
    
}