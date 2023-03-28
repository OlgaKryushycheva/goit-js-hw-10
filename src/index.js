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

  fetchCountries(searchQuery);
}

console.log('TEST');
