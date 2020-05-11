import debounce from 'lodash.debounce';
import data from '../JSON/fake-data.json';
import postFeedItemTmp from '../templates/post-feed-item.hbs';

// const markup = postFeedItemTmp(data[0]);
// console.log(markup);

const refs = {
  postFeed: document.querySelector('.tmp-test'),
  feedbackForm: document.querySelector('#feedback-form'),
};
// console.log(refs.postFeed);

function buildPostFeed(data) {
  const markup = data.map(post => postFeedItemTmp(post)).join('');

  refs.postFeed.insertAdjacentHTML('beforeend', markup);
}

buildPostFeed(data);

//---------------------------------------------------------------------------------------
// Запись в набранного текста в localStorage
//---------------------------------------------------------------------------------------

const persisitedFeedback = localStorage.getItem('text');

if (persisitedFeedback) {
  const textArea = refs.feedbackForm.elements.message;

  textArea.value = persisitedFeedback;
}

refs.feedbackForm.addEventListener(
  'input',
  // e => {
  //   const textArea = e.currentTarget.elements.message;
  //   localStorage.setItem('text', textArea.value);
  // },
  debounce(e => {
    const textArea = e.target;
    localStorage.setItem('text', textArea.value);
  }, 300),
);

refs.feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('text');
});
