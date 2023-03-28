import Notiflix from 'notiflix';

const searchInputEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

const BASE_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(countryName) {
  fetch(
    `${BASE_URL}${countryName}?fields=name,capital,population,languages,flags&&fullText=false`
  )
    .then(response => {
      if (!response.ok) {
        throw Notiflix.Notify.failure(
          'Oops, there is no country with that name'
        );
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        throw Notiflix.Notify.info(
          `Too many matches found. Please enter a more specific name.`
        );
      } else if (data.length > 1 && data.length <= 10) {
        countryInfoEl.innerHTML = '';

        let countryCollectionArr = [];
        let countryCollection;

        for (let i = 0; i < data.length; i++) {
          let name = data[i].name.official;
          let flag = data[i].flags.svg;

          const markupCountryList = ` <li class="country-item">
          <img
            src="${flag}"
            alt="flag"
            width="25"
            height="20"
          />
          <p class="country-name">${name}</p>
        </li>`;

          countryCollectionArr.push(markupCountryList);
          countryCollection = countryCollectionArr.join('');
        }

        countryListEl.innerHTML = countryCollection;
      } else {
        countryListEl.innerHTML = '';

        let dataSity = data[0];
        let name = dataSity.name.official;
        let flag = dataSity.flags.svg;
        let capital = dataSity.capital[0];
        let languages = Object.values(dataSity.languages).join(', ');
        let population = dataSity.population;

        const markupCountryInfo = `<div class="country-title">
          <img
            src="${flag}"
            alt="flag"
            width="30"
            height="25"
          />
          <p>${name}</p>
        </div>
        <p class="country-descr">
          <span class="country-field">Capital: </span>${capital}
        </p>
        <p class="country-descr">
          <span class="country-field">Population: </span>${population}
        </p>
        <p class="country-descr">
          <span class="country-field">Languages: </span>${languages}
        </p>`;
        countryInfoEl.innerHTML = markupCountryInfo;
      }
    })
    .catch(error => {
      console.log(error);
    });
}

// =============================
// function makeCountryInfo({ flag, name, capital, population, languages }) {
//   ` <div class="country-title">
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

//   // countryInfoEl.innerHTML = markupCountryInfo;
// }
