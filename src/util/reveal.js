//Below function takes an array and the cells position as arguments. It reveals the blocks/cells the user clicks on and uses x and y as locations
//Credit to Edurise minesweeper tutorial that assisted with the below logic
export const revealed = (arr, x, y, newNonMinesCount) => {
  //starting off with an empty array
  let flipped = [];

  flipped.push(arr[x][y]);

  while (flipped.length !== 0) {
    let single = flipped.pop();

    if (!single.revealed) {
      newNonMinesCount--;
      single.revealed = true;
    }

    if (single.value !== 0) {
      break;
    }

    //Top left

    if (
      single.x > 0 &&
      single.y > 0 &&
      arr[single.x - 1][single.y - 1].value === 0 &&
      !arr[single.x - 1][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y - 1]);
    }

    //Bottom right
    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      arr[single.x + 1][single.y + 1].value === 0 &&
      !arr[single.x + 1][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y + 1]);
    }

    //Bottom left
    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      arr[single.x + 1][single.y - 1].value === 0 &&
      !arr[single.x + 1][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y - 1]);
    }

    //Top right
    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      arr[single.x - 1][single.y + 1].value === 0 &&
      !arr[single.x - 1][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y + 1]);
    }

    //Single ones
    //Top
    if (
      single.x > 0 &&
      arr[single.x - 1][single.y].value === 0 &&
      !arr[single.x - 1][single.y].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y]);
    }

    //Bottom
    if (
      single.x < arr.length - 1 &&
      arr[single.x + 1][single.y].value === 0 &&
      !arr[single.x + 1][single.y].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y]);
    }

    //Left
    if (
      single.y > 0 &&
      arr[single.x][single.y - 1].value === 0 &&
      !arr[single.x][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x][single.y - 1]);
    }

    //Right
    if (
      single.y < arr[0].length - 1 &&
      arr[single.x][single.y + 1].value === 0 &&
      !arr[single.x][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x][single.y + 1]);
    }

    //Revealing the cells/blocks

    if (
      single.x > 0 &&
      single.y > 0 &&
      !arr[single.x - 1][single.y - 1].revealed
    ) {
      //Top left reveal
      arr[single.x - 1][single.y - 1].revealed = true;
      newNonMinesCount--;
    }

    if (single.y > 0 && !arr[single.x][single.y - 1].revealed) {
      //left reveal
      arr[single.x][single.y - 1].revealed = true;
      newNonMinesCount--;
    }

    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      !arr[single.x + 1][single.y - 1].revealed
    ) {
      //bottom left reveal
      arr[single.x + 1][single.y - 1].revealed = true;
      newNonMinesCount--;
    }

    if (single.x > 0 && !arr[single.x - 1][single.y].revealed) {
      //top reveal
      arr[single.x - 1][single.y].revealed = true;
      newNonMinesCount--;
    }

    if (single.x < arr.length - 1 && !arr[single.x + 1]) {
      //bottom reveal
      arr[single.x + 1][single.y].revealed = true;
      newNonMinesCount--;
    }

    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x - 1][single.y + 1].revealed
    ) {
      //top right reveal
      arr[single.x - 1][single.y + 1].revealed = true;
      newNonMinesCount--;
    }

    if (single.y < arr[0].length - 1 && !arr[single.x][single.y + 1].revealed) {
      //right reveal
      arr[single.x][single.y + 1].revealed = true;
      newNonMinesCount--;
    }

    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x + 1][single.y + 1].revealed
    ) {
      //Bottom right reveal
      arr[single.x + 1][single.y + 1].revealed = true;
      newNonMinesCount--;
    }
  }
  return { arr, newNonMinesCount };
};
