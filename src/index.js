import debounce from 'lodash.debounce';
// player.on('timeupdate', debounce(getCurrentTime, DEBOUNCE_DELAY));

import Notiflix from 'notiflix';
Notiflix.Notify.info(
  `Too many matches found. Please enter a more specific name.`
);
Notiflix.Notify.failure('Oops, there is no country with that name');

import './css/styles.css';

import { fetchCountries } from './fetchCountries';
fetchCountries('Ukraine');

const DEBOUNCE_DELAY = 300;
