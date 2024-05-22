//Devil's game
function solve() {
  let T = parseInt(gets());
  for (let i = 0; i < T; i++) {
      let n = parseInt(gets());
      if (n % 4 === 0) {
          print("false");
      } else {
          print("true");
      }
  }
}

solve();
