import tableTmp from './templates/table.hbs';
const tableBody = document.querySelector('#planets');

const baseUrl = 'https://swapi.dev/api/';

const options = {
  Accept: 'Application/json',
};

fetch(baseUrl + 'planets', options)
  .then(resp => {
    return resp.json();
  })
  .then(data => {
    renderTableRows(data.results);
  });

function renderTableRows(planets) {
  const markup = planets.map(planet => tableTmp(planet)).join('');
  tableBody.insertAdjacentHTML('beforeend', markup);
}
