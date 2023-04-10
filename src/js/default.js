// Напишіть функцію, яка приймає об'єкт користувача з ім'ям, прізвищем та електронною поштою та повертає форматовану рядок "Ім'я Прізвище, Електронна пошта".
const user = {
    name: 'Yora',
    surname: 'Voloshina',
    email: 'email@ukr.net'
}

function getUser({name, surname, email}) {
    console.log(`${name} ${surname}, ${email}`);
}

getUser(user)

// Напишіть функцію, яка приймає масив чисел та функцію-обробник та застосовує функцію-обробник до кожного елемента масиву, повертаючи новий масив.

const numders = [1, 3, 25, 48, 56];

function plusing(numders, plusing, howMuch) {
    const rezult = plusing(numders, howMuch);
    console.log(rezult);
}

function callbeck(arr, howMuch) {
    const rezult = arr.map(num=> num + howMuch)
    // let rezult = [];
    // for (const num of arr) {
    //     rezult.push(num + howMuch) ;
    //     
    // }
    return rezult;
}

plusing(numders, callbeck, 2)