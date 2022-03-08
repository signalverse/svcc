import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from './sum_to_n.js';

try {
  let i = 1.2;
  console.log(`sum_to_n_a(${i}) === ${sum_to_n_a(i)}`);
} catch (err) {
  console.error(err.message);
}

try {
  let i = 1.2;
  console.log(`sum_to_n_b(${i}) === ${sum_to_n_b(i)}`);
} catch (err) {
  console.error(err.message);
}

try {
  let i = 1.2;
  console.log(`sum_to_n_c(${i}) === ${sum_to_n_c(i)}`);
} catch (err) {
  console.error(err.message);
}

console.log('');

for (let i = -1; i < 10; i++) {
  try {
    console.log(`sum_to_n_a(${i}) === ${sum_to_n_a(i)}`);
  } catch (err) {
    console.error(err.message);
  }

  try {
    console.log(`sum_to_n_b(${i}) === ${sum_to_n_b(i)}`);
  } catch (err) {
    console.error(err.message);
  }

  try {
    console.log(`sum_to_n_c(${i}) === ${sum_to_n_c(i)}`);
  } catch (err) {
    console.error(err.message);
  }

  console.log('');
}

