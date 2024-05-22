//X Y
let autoflush = true;

function determineCell(n, k) {
  // Convert k to zero-based index
  k -= 1;

  // Count the number of 1s in the binary representation of k
  let count = 0;
  while (k > 0) {
    count += k & 1;
    k >>= 1;
  }

  // If count of 1s is even, it's 'X', otherwise it's 'Y'
  return count % 2 === 0 ? 'X' : 'Y';
}

const numTests = parseInt(gets());

const results = [];

for (let i = 0; i < numTests; i++) {
  const [n, k] = gets().split(" ").map(Number);
  const cell = determineCell(n, k);
  results.push(cell);
}

for (const result of results) {
  print(result);
  if (autoflush) flush();
}