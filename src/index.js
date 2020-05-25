import './styles.css';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() < 0.3;
    if (success) {
      resolve('Promice resolved.');
    } else {
      reject('Promice rejected.');
    }
  }, 500);
});

// Var_1
// promise.then(
//   message => {
//     console.log(message);
//   },
//   error => {
//     console.error(`Error - ${error}`);
//   },
// );

// Var_2
// const onSuccess = message => {
//   console.log(message);
// };
// const onError = error => {
//   console.error(`Error - ${error}`);
// };

// promise.then(onSuccess, onError);

// Var_3
const onSuccess = message => {
  console.log(message);
};
const onError = error => {
  console.error(`Error - ${error}`);
};

promise.then(onSuccess).catch(onError);
