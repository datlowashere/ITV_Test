// const readline = require('readline');

// function largestRectangleArea(heights) {
//     let stack = [];
//     let maxArea = 0;
//     let index = 0;
    
//     while (index < heights.length) {
//         if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[index]) {
//             stack.push(index++);
//         } else {
//             let height = heights[stack.pop()];
//             let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
//             maxArea = Math.max(maxArea, height * width);
//         }
//     }
    
//     while (stack.length > 0) {
//         let height = heights[stack.pop()];
//         let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
//         maxArea = Math.max(maxArea, height * width);
//     }
    
//     return maxArea;
// }

// function processMatrix(N, M, matrix) {
//     if (N === 0 || M === 0) {
//         console.log(0);
//         return;
//     }
    
//     let maxArea = 0;
//     let heights = new Array(M).fill(0);
    
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < M; j++) {
//             heights[j] = matrix[i][j] === 0 ? 0 : heights[j] + 1;
//         }
//         maxArea = Math.max(maxArea, largestRectangleArea(heights));
//     }
    
//     console.log(maxArea);
// }

// // Create an interface to read lines from the input
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];
// let matrix = [];
// let N = 0, M = 0;

// rl.on('line', (line) => {
//     input.push(line.trim());
// });

// rl.on('close', () => {
//     let firstLine = input[0].split(" ");
//     N = parseInt(firstLine[0]);
//     M = parseInt(firstLine[1]);
    
//     for (let i = 1; i <= N; i++) {
//         matrix.push(input[i].split(" ").map(Number));
//     }
    
//     processMatrix(N, M, matrix);
// });


// function largestRectangleArea(heights) {
//   let stack = [];
//   let maxArea = 0;
//   let index = 0;
  
//   while (index < heights.length) {
//       if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[index]) {
//           stack.push(index++);
//       } else {
//           let height = heights[stack.pop()];
//           let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
//           maxArea = Math.max(maxArea, height * width);
//       }
//   }
  
//   while (stack.length > 0) {
//       let height = heights[stack.pop()];
//       let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
//       maxArea = Math.max(maxArea, height * width);
//   }
  
//   return maxArea;
// }

// function main() {
//   let input = gets().split(" ");
//   let N = parseInt(input[0]);
//   let M = parseInt(input[1]);
//   let matrix = [];
  
//   for (let i = 0; i < N; i++) {
//       matrix.push(gets().split(" ").map(Number));
//   }
  
//   if (N === 0 || M === 0) {
//       print(0);
//       return;
//   }
  
//   let maxArea = 0;
//   let heights = new Array(M).fill(0);
  
//   for (let i = 0; i < N; i++) {
//       for (let j = 0; j < M; j++) {
//           heights[j] = matrix[i][j] === 0 ? 0 : heights[j] + 1;
//       }
//       maxArea = Math.max(maxArea, largestRectangleArea(heights));
//   }
  
//   print(maxArea);
// }

// main();
const readline = require('readline');

// Create an interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to read input
function readInput(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Function to convert space-separated string to array of integers
function parseInputToIntArray(input) {
    return input.split(' ').map(Number);
}

// Function to convert space-separated string to array of integers
function parseInputToIntegerArray(input) {
    return input.split(' ').map(Number);
}

// Main function to calculate maximum profit
async function main() {
    // Read N and K
    const nkInput = await readInput('Enter N and K: ');
    const [N, K] = parseInputToIntArray(nkInput);

    // Read profits for each project
    const profitsInput = await readInput('Enter profits for each project separated by space: ');
    const profits = parseInputToIntegerArray(profitsInput);

    // Calculate and print the maximum profit
    console.log('Maximum profit:', maxProfit(N, K, profits));

    // Close the interface
    rl.close();
}

// Function to calculate maximum profit
function maxProfit(N, K, profits) {
    const dp = Array(N + 1).fill(0).map(() => Array(K + 1).fill(0));

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= K; j++) {
            // Calculate the maximum profit either by skipping the current project or by including it
            dp[i][j] = Math.max(dp[i - 1][j], dp[Math.max(0, i - K - 1)][j - 1] + profits[i - 1]);
        }
    }

    return dp[N][K];
}

// Call the main function
main();


  