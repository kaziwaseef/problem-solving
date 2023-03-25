let count = 0;

function moveDisc(n: number, start: string, temp: string, finish: string) {
  count += 1;
  if (n == 1) {
    console.log(start, "->", finish);
    return;
  }
  moveDisc(n - 1, start, finish, temp);
  console.log(start, "->", finish);
  moveDisc(n - 1, temp, start, finish);
}

count = 0;
moveDisc(3, "A", "B", "C");
console.log("Total Steps " + count);

count = 0;
moveDisc(4, "A", "B", "C");
console.log("Total Steps " + count);

count = 0;
moveDisc(6, "A", "B", "C");
console.log("Total Steps " + count);
