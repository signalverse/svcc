const validate_n = function(n, functionName) {
  if (!Number.isInteger(n)) {
    throw new Error(`${functionName}: ${n} is not an integer`);
  }

  if (n < 0) {
    throw new Error(`${functionName}: ${n} is negative`);
  }
};

const sum_to_n_a = function(n) {
  validate_n(n, sum_to_n_a.name);

  const sum = n * (n + 1) / 2; // arithmetic series
  return sum;
};

const sum_to_n_b = function(n) {
  validate_n(n, sum_to_n_b.name);

  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
};

const sum_to_n_c = function(n) {
  validate_n(n, sum_to_n_c.name);

  let sum = 0;

  let remaining = n;
  while (remaining > 0) {
    sum += remaining--;
  }

  return sum;
};

export {
  sum_to_n_a,
  sum_to_n_b,
  sum_to_n_c,
};

