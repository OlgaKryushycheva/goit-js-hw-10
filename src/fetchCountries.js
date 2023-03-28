import Notiflix from 'notiflix';

const BASE_URL = 'https://restcountries.com/v3.1/name/';
// const PARAMS = 'fields=${countryName},capital,population,languages,flag';

export function fetchCountries(countryName) {
  fetch(
    `${BASE_URL}${countryName}?fields=name,capital,population,languages,flags&&fullText=false`
  ).then(response => {
    if (!response.ok) {
      // throw new Error(response.status);
      throw Notiflix.Notify.failure('Oops, there is no country with that name');
    }
    console.log(response.json());
    return response.json();
  });
  // .then(data => {
  //   if (data.length > 10) {
  //     throw Notiflix.Notify.info(
  //       `Too many matches found. Please enter a more specific name.`
  //     );
  //   }
  //   console.log(data);
  //   // console.log(...data);
  //   const dataObj = data[0];
  //   console.log(dataObj);
  //   console.log(dataObj.name.official);
  //   console.log(dataObj.flags.svg);
  //   console.log(...dataObj.capital);
  //   console.log(Object.values(dataObj.languages).join(', '));
  //   console.log(dataObj.population);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
}

// https://restcountries.com/v3.1/all?fields=name,capital,currencies

//https: restcountries.eu/rest/v2/all?fields=name;capital;currencies
// https://restcountries.eu/rest/v2/{service}?fields={field};{field};{field}
// name;
// capital;
// population;
// languages;
// flag;

// const searchParams = new URLSearchParams({
//   _limit: 10,
//   // _sort: 'name',
//   _name: 'name.official',
//   _capital: '',
//   _population: 0,
//   _languages: [],
//   _flag: 'flags.svg',
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
// throw Notiflix.Notify.failure('Oops, there is no country with that name');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });
