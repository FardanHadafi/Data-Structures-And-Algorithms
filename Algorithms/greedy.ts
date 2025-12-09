// ============================================
// GREEDY ALGORITHM - COMPLETE GUIDE
// ============================================

// What is a Greedy Algorithm?
// - Makes the LOCALLY OPTIMAL choice at each step
// - Hopes it leads to a GLOBALLY OPTIMAL solution
// - NEVER reconsiders previous choices (no backtracking)
// - Much simpler than DP, but doesn't always work!

// Key Difference from DP:
// - DP: Solves all subproblems, then chooses best
// - GREEDY: Makes best choice NOW, never looks back
function coinChangeGreedy(coins: number[], amount: number): number {
  // Sort coins in descending order (largest first)
  coins.sort((a, b) => b - a);

  let count = 0;
  let remaining = amount;

  for (const coin of coins) {
    // Use as manu of this coin as possible
    const numCoins = Math.floor(remaining / coin);
    count += numCoins;
    remaining -= numCoins * coin;

    console.log(`Using ${numCoins} x ${coin} coin(s), remaining: ${remaining}`);
  }
  return remaining === 0 ? count : -1;
}
