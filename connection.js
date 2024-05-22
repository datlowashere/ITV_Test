// // Similar to Python's print
// function print(...args) {
//     console.log(...args);
//   }
  
//   // Similar to Ruby's gets
//   function gets() {
//     return readlineSync.question('');
//   }
  
//   const readlineSync = require('readline-sync');
  
//   function find(parent, i) {
//     if (parent[i] === i) return i;
//     return parent[i] = find(parent, parent[i]);
//   }
  
//   function union(parent, rank, x, y) {
//     const xroot = find(parent, x);
//     const yroot = find(parent, y);
    
//     if (xroot !== yroot) {
//       if (rank[xroot] < rank[yroot]) {
//         parent[xroot] = yroot;
//       } else if (rank[xroot] > rank[yroot]) {
//         parent[yroot] = xroot;
//       } else {
//         parent[yroot] = xroot;
//         rank[xroot]++;
//       }
//       return true;
//     }
//     return false;
//   }
  
//   function minimumEdgesToConnectAllComputers(N, edges) {
//     const parent = [];
//     const rank = [];
  
//     for (let i = 0; i < N; i++) {
//       parent[i] = i;
//       rank[i] = 0;
//     }
  
//     let components = N;
//     let extraEdges = 0;
    
//     for (const [u, v] of edges) {
//       if (union(parent, rank, u, v)) {
//         components--;
//       } else {
//         extraEdges++;
//       }
//     }
  
//     const neededEdges = components - 1;
    
//     if (neededEdges <= extraEdges) {
//       return neededEdges;
//     } else {
//       return -1;
//     }
//   }
  
//   // Read the first line for N and M
//   const [N, M] = gets().split(' ').map(Number);
  
//   const edges = [];
//   for (let i = 0; i < M; i++) {
//     const [u, v] = gets().split(' ').map(Number);
//     edges.push([u, v]);
//   }
  
//   print(minimumEdgesToConnectAllComputers(N, edges));
  


 // ==27/50
// const readlineSync = require('readline-sync');

// // Simplified print function
// function print(...args) {
//   console.log(...args);
// }

// // Simplified gets function
// function gets() {
//   return readlineSync.question('');
// }

// // Union-Find with path compression and union by rank
// class UnionFind {
//   constructor(size) {
//     this.parent = Array.from({ length: size }, (_, i) => i);
//     this.rank = Array(size).fill(0);
//   }

//   find(x) {
//     if (this.parent[x] !== x) {
//       this.parent[x] = this.find(this.parent[x]); // Path compression
//     }
//     return this.parent[x];
//   }

//   union(x, y) {
//     const rootX = this.find(x);
//     const rootY = this.find(y);

//     if (rootX !== rootY) {
//       if (this.rank[rootX] > this.rank[rootY]) {
//         this.parent[rootY] = rootX;
//       } else if (this.rank[rootX] < this.rank[rootY]) {
//         this.parent[rootX] = rootY;
//       } else {
//         this.parent[rootY] = rootX;
//         this.rank[rootX]++;
//       }
//       return true;
//     }
//     return false;
//   }
// }

// // Main function to find the minimum edges to connect all computers
// function minimumEdgesToConnectAllComputers(N, edges) {
//   const uf = new UnionFind(N);
//   let components = N;
//   let extraEdges = 0;

//   for (const [u, v] of edges) {
//     if (uf.union(u, v)) {
//       components--;
//     } else {
//       extraEdges++;
//     }
//   }

//   const neededEdges = components - 1;
//   return neededEdges <= extraEdges ? neededEdges : -1;
// }

// // Read input
// const [N, M] = gets().split(' ').map(Number);
// const edges = Array.from({ length: M }, () => gets().split(' ').map(Number));

// // Compute and print result
// print(minimumEdgesToConnectAllComputers(N, edges));
const readlineSync = require('readline-sync');

// Union-Find class with path compression and union by rank
class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
      return true;
    }
    return false;
  }
}

// Function to determine the minimum edges needed to connect all computers
function minimumEdgesToConnectAllComputers(N, edges) {
  const uf = new UnionFind(N);
  let components = N;
  let extraEdges = 0;

  for (const [u, v] of edges) {
    if (uf.union(u, v)) {
      components--;
    } else {
      extraEdges++;
    }
  }

  const neededEdges = components - 1;
  return neededEdges <= extraEdges ? neededEdges : -1;
}

// Read input
const [N, M] = readlineSync.question('').split(' ').map(Number);
const edges = Array.from({ length: M }, () => readlineSync.question('').split(' ').map(Number));

// Compute and print result
console.log(minimumEdgesToConnectAllComputers(N, edges));
