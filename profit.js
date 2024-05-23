function solve() {
    let firstLine = gets().split(' ');
    let N = parseInt(firstLine[0]);
    let K = parseInt(firstLine[1]);
    
    let profits = [];
    for (let i = 0; i < N; i++) {
        profits.push(parseInt(gets()));
    }

    if (N === 0) return 0;

    let dp = new Array(N).fill(0);

    dp[0] = profits[0];
    for (let i = 1; i < K && i < N; i++) {
        dp[i] = dp[i - 1] + profits[i];
    }

    for (let i = K; i < N; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + profits[i], dp[i - 3] + profits[i - 1] + profits[i]);
        if (i > 3) {
            dp[i] = Math.max(dp[i], dp[i - 4] + profits[i - 2] + profits[i - 1] + profits[i]);
        }
    }

    return Math.max(...dp);
}
