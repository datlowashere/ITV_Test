const readlineSync = require('readline-sync');

// Simplified print function
function print(...args) {
  console.log(...args);
}

// Simplified gets function
function gets() {
  return readlineSync.question('');
}

function maxProfit(n, k, profits) {
    // Create a 2D dp table to store maximum profits at each index
    const dp = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));
  
    // Base case: No projects or no allowed consecutive projects
    for (let i = 0; i < n; i++) {
      dp[i][0] = 0;
    }
    for (let j = 0; j <= k; j++) {
      dp[0][j] = 0;
    }
  
    // Fill the dp table using recursion relation
    for (let i = 1; i < n; i++) {
      for (let j = 1; j <= k; j++) {
        // Option 1: Exclude current project
        let exclude = dp[i - 1][j];
  
        // Option 2: Include current project and consider the restriction on consecutive projects
        let include = profits[i] + (i > j ? dp[i - j - 1][j] : 0);
  
        // Pick the maximum profit
        dp[i][j] = Math.max(exclude, include);
      }
    }
  
    // Return the maximum profit from the last row of the dp table
    return dp[n - 1][k];
  }
  
  // Input functions (replace these with your preferred input methods)
  function getN() {
    return parseInt(prompt("Enter the number of projects (N): "));
  }
  
  function getK() {
    return parseInt(prompt("Enter the maximum consecutive projects allowed (K): "));
  }
  
  function getProfits(n) {
    const profits = [];
    for (let i = 0; i < n; i++) {
      profits.push(Array.from({ length: n }, () => readlineSync.question('').split(' ').map(Number)));
    }
    return profits;
  }
  
  // Main function to run the program
  function main() {
  
    // Read input
    const [n, k] = readlineSync.question('').split(' ').map(Number);
    const profits = getProfits

    const maxProfitValue = maxProfit(n, k, profits);
    console.log("Maximum profit achievable:", maxProfitValue);
  }
  
  main();