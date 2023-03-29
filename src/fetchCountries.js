import Notiflix from 'notiflix';

const BASE_URL = 'https://restcountries.com/v3.1/name/';
const FIELDS = 'fields=name,capital,population,languages,flags';

export function fetchCountries(countryName) {
  return fetch(`${BASE_URL}${countryName}?${FIELDS}`).then(response => {
    if (!response.ok) {
      throw Notiflix.Notify.failure('Oops, there is no country with that name');
    }
    return response.json();
  });
}
