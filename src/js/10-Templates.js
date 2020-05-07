import data from '../JSON/fake-data.json';
import postFeedItemTmp from '../templates/post-feed-item.hbs';

// const markup = postFeedItemTmp(data[0]);
// console.log(markup);

const refs = {
  postFeed: document.querySelector('.tmp-test'),
};
// console.log(refs.postFeed);

function buildPostFeed(data) {
  const markup = data.map(post => postFeedItemTmp(post)).join('');

  refs.postFeed.insertAdjacentHTML('beforeend', markup);
}

buildPostFeed(data);
