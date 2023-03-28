import debounce from 'lodash.debounce';
// player.on('timeupdate', debounce(getCurrentTime, DEBOUNCE_DELAY));

import Notiflix from 'notiflix';
// Notiflix.Notify.info(
//   `Too many matches found. Please enter a more specific name.`
// );
// Notiflix.Notify.failure('Oops, there is no country with that name');

import './css/styles.css';

import { fetchCountries } from './fetchCountries';
// fetchCountries('Ukraine');

const DEBOUNCE_DELAY = 300;

const searchInputEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfotEl = document.querySelector('.country-info');

searchInputEl.addEventListener(
  'input',
  debounce(onSearchCountry, DEBOUNCE_DELAY)
);
function onSearchCountry() {
  const searchQuery = searchInputEl.value.trim();
  console.log(searchQuery);
  fetchCountries(searchQuery).then(console.log);
}

//  .then(data => {
//       if (data.length > 10) {
//         throw Notiflix.Notify.info(
//           `Too many matches found. Please enter a more specific name.`
//         );
//       }
//       console.log(data);
//       // console.log(...data);
//       const dataObj = data[0];
//       console.log(dataObj);
//       console.log(dataObj.name.official);
//       console.log(dataObj.flags.svg);
//       console.log(...dataObj.capital);
//       console.log(Object.values(dataObj.languages).join(', '));
//       console.log(dataObj.population);
//     })
//     .catch(error => {
//       console.log(error);
//     });

const makeCountryList = ({ flag, name }) => `<li class="js-gallery-item">
        <img class="js-img"src="${url}" alt="${alt}" />
      </li>`;

// const markupCountryList = images.map(el => makeCountryList(el)).join('');
// countryListEl.insertAdjacentHTML('afterbegin', markupCountryList);

const makeCountryInfo = ({
  flag,
  name,
  papital,
  population,
  languages,
}) => `<li class="js-gallery-item">
        <img class="js-img"src="${url}" alt="${alt}" />
      </li>`;

// const markupCountryInfo = images.map(el => makeCountryList(el)).join('');
// countryInfotEl.insertAdjacentHTML('afterbegin', markupCountryInfo);

// ==================================================================
const BASE_URL = 'https://restcountries.com/v3.1/name/';

// fetch(`${BASE_URL}?fields=Ukraine,capital,population,languages,flags`);
// https://restcountries.com/v3.1/name/aruba?fullText=true
// fetch(`${BASE_URL}/sud?fullText=false`);
// fetch(`${BASE_URL}sudan?fields=name,capital,population,languages,flags`);

// fetch(
//   `${BASE_URL}sud?fields=name,capital,population,languages,flags&&fullText=false`
// )
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(
//         Notiflix.Notify.failure('Oops, there is no country with that name')
//       );
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     console.log(...data);
//     const dataObj = data[0];
//     console.log(dataObj);
//     console.log(dataObj.name.official);
//     console.log(dataObj.flags.svg);
//     console.log(...dataObj.capital);
//     console.log(Object.values(dataObj.languages).join(', '));
//     console.log(dataObj.population);
//   })
//   .catch(error => {
//     console.log(error);
//   });

console.log('TEST');
