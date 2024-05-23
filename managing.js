function solve() {
  let firstLine = gets().trim().split(' ');
  let N = parseInt(firstLine[0]);
  let K = parseInt(firstLine[1]);
  
  let profits = [];
  for (let i = 0; i < N; i++) {
      profits.push(parseInt(gets().trim()));
  }

  let dp = new Array(N).fill(0);

  dp[0] = profits[0];

  for (let i = 1; i < N; i++) {
      dp[i] = dp[i - 1];

      if (i > K) {
          dp[i] = Math.max(dp[i], profits[i] + dp[i - K - 1]);
      } else {
          dp[i] = Math.max(dp[i], profits[i]);
      }
  }

  print(dp[N - 1]);
}

solve();
