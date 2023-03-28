import debounce from 'lodash.debounce';

import Notiflix from 'notiflix';

import './css/styles.css';

import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchInputEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

searchInputEl.addEventListener(
  'input',
  debounce(onSearchCountry, DEBOUNCE_DELAY)
);
function onSearchCountry() {
  countryListEl.innerHTML = '';
  countryInfoEl.innerHTML = '';

  const searchQuery = searchInputEl.value.trim();

  // if (searchQuery.length > 0) {
  fetchCountries(searchQuery);
  // } else {
  //   countryListEl.innerHTML = '';
  //   countryInfoEl.innerHTML = '';
  // }
}

// const makeCountryList = ({ flag, name }) => `<li class="js-gallery-item">
//         <img class="js-img"src="${url}" alt="${alt}" />
//       </li>`;

// const markupCountryList = images.map(el => makeCountryList(el)).join('');
// countryListEl.innerHTML = markupCountryList;

// const makeCountryInfo = ({
//   flag,
//   name,
//   capital,
//   population,
//   languages,
// }) => ` <div class="country-title">
//         <img
//           src="${flag}"
//           alt="flag"
//           width="25"
//           height="20"
//         />
//         <p>${name}</p>
//       </div>

//       <p class="country-descr">
//         <span class="country-field">Capital: </span>${capital}
//       </p>
//       <p class="country-descr">
//         <span class="country-field">Population: </span>${population}
//       </p>
//       <p class="country-descr">
//         <span class="country-field">Languages: </span>${languages}
//       </p>`;

// const markupCountryInfo = images.map(el => makeCountryList(el)).join('');
// countryInfotEl.insertAdjacentHTML('afterbegin', markupCountryInfo);

// ==================================================================
// const BASE_URL = 'https://restcountries.com/v3.1/name/';

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
