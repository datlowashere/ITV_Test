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
