// Problem: Tower of Hanoi is a classic recursive algorithm problem, commonly used to teach recursion and problem decomposition.
// Problem Description
// There are 3 rods:
// Source (A) – starting rod
// Auxiliary (B) – helper rod
// Destination (C) – target rod
// There are N disks of different sizes stacked on the source rod.
// Rules:
// Only one disk can be moved at a time
// A larger disk cannot be placed on top of a smaller disk
// Goal: Move all disks from Source → Destination.
// Only one disk can be moved at a time
// A larger disk cannot be placed on top of a smaller disk
// Goal: Move all disks from Source → Destination.

const towerOfHanoi = (n, fromRod, toRod, auxRod) => {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${fromRod} to rod ${toRod}`);
    return;
  }
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
};

// time complexity: O(2^n)

towerOfHanoi(3, "A", "C", "B");
