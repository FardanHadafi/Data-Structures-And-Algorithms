/** What is Dynamic Programming (DP)?
Simple explanation: Instead of solving the same problem multiple times, we remember the answer and reuse it!
Think of it like studying for an exam:

❌ Bad way: Re-read the entire textbook every time you forget something
✅ DP way: Make notes once, refer to them whenever needed */

function fibOptimize(n: number): number {
  if (n <= 1) return n;

  let prev1 = 1;
  let prev2 = 0;

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}
