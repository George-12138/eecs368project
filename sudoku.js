
let gameBoard = [
[ 5, 3, 0, 0, 7, 0, 0, 0, 0 ],
[ 6, 0, 0, 1, 9, 5, 0, 0, 0 ],
[ 0, 9, 8, 0, 0, 0, 0, 6, 0 ],
[ 8, 0, 0, 0, 6, 0, 0, 0, 3 ],
[ 4, 0, 0, 8, 0, 3, 0, 0, 1 ],
[ 7, 0, 0, 0, 2, 0, 0, 0, 6 ],
[ 0, 6, 0, 0, 0, 0, 2, 8, 0 ],
[ 0, 0, 0, 4, 1, 9, 0, 0, 5 ],
[ 0, 0, 0, 0, 8, 0, 0, 7, 9 ] ];
let codeBoard = [
[ 5, 3, 0, 0, 7, 0, 0, 0, 0 ],
[ 6, 0, 0, 1, 9, 5, 0, 0, 0 ],
[ 0, 9, 8, 0, 0, 0, 0, 6, 0 ],
[ 8, 0, 0, 0, 6, 0, 0, 0, 3 ],
[ 4, 0, 0, 8, 0, 3, 0, 0, 1 ],
[ 7, 0, 0, 0, 2, 0, 0, 0, 6 ],
[ 0, 6, 0, 0, 0, 0, 2, 8, 0 ],
[ 0, 0, 0, 4, 1, 9, 0, 0, 5 ],
[ 0, 0, 0, 0, 8, 0, 0, 7, 9 ] ];
let solutionBoard = [
[ 5, 3, 0, 0, 7, 0, 0, 0, 0 ],
[ 6, 0, 0, 1, 9, 5, 0, 0, 0 ],
[ 0, 9, 8, 0, 0, 0, 0, 6, 0 ],
[ 8, 0, 0, 0, 6, 0, 0, 0, 3 ],
[ 4, 0, 0, 8, 0, 3, 0, 0, 1 ],
[ 7, 0, 0, 0, 2, 0, 0, 0, 6 ],
[ 0, 6, 0, 0, 0, 0, 2, 8, 0 ],
[ 0, 0, 0, 4, 1, 9, 0, 0, 5 ],
[ 0, 0, 0, 0, 8, 0, 0, 7, 9 ] ];
gameSolution(solutionBoard);
console.table(solutionBoard);

let button;
let level;
function setup()
{
  createCanvas(540,540);
  textAlign(CENTER);
 button = createButton('check your puzzle here');
 button.position(300, 125);
 button.mousePressed(resultTest);
 level = createSelect();
 level.position(115, 75);
 level.option('easy');
 level.option('normal');
 level.option('hard');
 level.changed(levelSelection);

}

let value = 0;
let universalI = 0;
let universalJ = 0;
let universalW = 0;
function draw()
{
  background("#ffad3c");
  textSize(30);

  let w = 60;
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (codeBoard[i][j] === 0) {
        if ((mouseX > j*w) && (mouseX <= j*w + w)) {
          if ((mouseY > i*w) && (mouseY <= i*w + w)) {
            universalI =i;
            universalJ =j;
            universalW =w;
            if(isMouseClick){
              gameBoard[i][j] = value;

              isMouseClick = false;
            }
            //value = 0;
          }
        }
      }
      noFill();
      strokeWeight(1);
      stroke(0);
      rect(i*w,j*w,w,w);
      textAlign(CENTER,CENTER);
      textSize(30);
      text(gameBoard[i][j],j*w + w/2,i*w + w/2);
    }
  }
}

let isMouseClick = false;
function mouseClicked()
{
  if ((mouseX > universalJ*universalW) && (mouseX <= universalJ*universalW + universalW)) {
    if ((mouseY > universalI*universalW) && (mouseY <= universalI*universalW + universalW)) {
      isMouseClick = true;
      value = value + 1;
      if (value > 9)
      {
        value = 0;
      }
    }
  }
}

function resultTest()
{
  var test = 0;
  for (var i = 0; i < 9; i++)
  {
    for (var j = 0; j < 9; j++)
    {
      if(gameBoard[i][j] === solutionBoard[i][j])
      {
        test++;
      }
    }
  }
  if (test === 81)
  {
    alert("You win YeaHHHHHH");
  }
  else
  {
    alert("your puzzle is not done yet !!!!LOL");
  }
  console.log("testing");
}

function levelSelection()
{
  let m_level = level.value();
  if (m_level == "hard") {
    gameBoard = [
      [ 0, 0, 0, 1, 0, 0, 5, 0, 2 ],
      [ 0, 0, 0, 0, 9, 0, 0, 0, 0 ],
      [ 0, 9, 8, 5, 0, 0, 0, 7, 0 ],
      [ 0, 0, 0, 0, 6, 1, 0, 0, 0 ],
      [ 0, 0, 5, 0, 0, 0, 0, 0, 0 ],
      [ 9, 2, 0, 0, 5, 0, 0, 0, 0 ],
      [ 0, 0, 0, 7, 0, 4, 0, 0, 8 ],
      [ 0, 0, 0, 0, 0, 0, 7, 0, 9 ],
      [ 3, 5, 0, 0, 0, 0, 0, 0, 6 ] ];
    codeBoard = [
      [ 0, 0, 0, 1, 0, 0, 5, 0, 2 ],
      [ 0, 0, 0, 0, 9, 0, 0, 0, 0 ],
      [ 0, 9, 8, 5, 0, 0, 0, 7, 0 ],
      [ 0, 0, 0, 0, 6, 1, 0, 0, 0 ],
      [ 0, 0, 5, 0, 0, 0, 0, 0, 0 ],
      [ 9, 2, 0, 0, 5, 0, 0, 0, 0 ],
      [ 0, 0, 0, 7, 0, 4, 0, 0, 8 ],
      [ 0, 0, 0, 0, 0, 0, 7, 0, 9 ],
      [ 3, 5, 0, 0, 0, 0, 0, 0, 6 ] ];
    solutionBoard = [
      [ 0, 0, 0, 1, 0, 0, 5, 0, 2 ],
      [ 0, 0, 0, 0, 9, 0, 0, 0, 0 ],
      [ 0, 9, 8, 5, 0, 0, 0, 7, 0 ],
      [ 0, 0, 0, 0, 6, 1, 0, 0, 0 ],
      [ 0, 0, 5, 0, 0, 0, 0, 0, 0 ],
      [ 9, 2, 0, 0, 5, 0, 0, 0, 0 ],
      [ 0, 0, 0, 7, 0, 4, 0, 0, 8 ],
      [ 0, 0, 0, 0, 0, 0, 7, 0, 9 ],
      [ 3, 5, 0, 0, 0, 0, 0, 0, 6 ] ];
  }
 if (m_level == "normal") {
    gameBoard = [
    [ 5, 3, 0, 0, 7, 0, 0, 0, 0 ],
    [ 6, 0, 0, 1, 9, 5, 0, 0, 0 ],
    [ 0, 9, 8, 0, 0, 0, 0, 6, 0 ],
    [ 8, 0, 0, 0, 6, 0, 0, 0, 3 ],
    [ 4, 0, 0, 8, 0, 3, 0, 0, 1 ],
    [ 7, 0, 0, 0, 2, 0, 0, 0, 6 ],
    [ 0, 6, 0, 0, 0, 0, 2, 8, 0 ],
    [ 0, 0, 0, 4, 1, 9, 0, 0, 5 ],
    [ 0, 0, 0, 0, 8, 0, 0, 7, 9 ] ];
    codeBoard = [
    [ 5, 3, 0, 0, 7, 0, 0, 0, 0 ],
    [ 6, 0, 0, 1, 9, 5, 0, 0, 0 ],
    [ 0, 9, 8, 0, 0, 0, 0, 6, 0 ],
    [ 8, 0, 0, 0, 6, 0, 0, 0, 3 ],
    [ 4, 0, 0, 8, 0, 3, 0, 0, 1 ],
    [ 7, 0, 0, 0, 2, 0, 0, 0, 6 ],
    [ 0, 6, 0, 0, 0, 0, 2, 8, 0 ],
    [ 0, 0, 0, 4, 1, 9, 0, 0, 5 ],
    [ 0, 0, 0, 0, 8, 0, 0, 7, 9 ] ];
    solutionBoard = [
    [ 5, 3, 0, 0, 7, 0, 0, 0, 0 ],
    [ 6, 0, 0, 1, 9, 5, 0, 0, 0 ],
    [ 0, 9, 8, 0, 0, 0, 0, 6, 0 ],
    [ 8, 0, 0, 0, 6, 0, 0, 0, 3 ],
    [ 4, 0, 0, 8, 0, 3, 0, 0, 1 ],
    [ 7, 0, 0, 0, 2, 0, 0, 0, 6 ],
    [ 0, 6, 0, 0, 0, 0, 2, 8, 0 ],
    [ 0, 0, 0, 4, 1, 9, 0, 0, 5 ],
    [ 0, 0, 0, 0, 8, 0, 0, 7, 9 ] ];
  }
   if (m_level == "easy"){
    gameBoard = [
      [ 0, 8, 0, 0, 0, 0, 2, 0, 0 ],
      [ 0, 0, 0, 0, 8, 4, 0, 9, 0 ],
      [ 0, 0, 6, 3, 2, 0, 0, 1, 0 ],
      [ 0, 9, 7, 0, 0, 0, 0, 8, 0 ],
      [ 8, 0, 0, 9, 0, 3, 0, 0, 2 ],
      [ 0, 1, 0, 0, 0, 0, 9, 5, 0 ],
      [ 0, 7, 0, 0, 4, 5, 8, 0, 0 ],
      [ 0, 3, 0, 7, 1, 0, 0, 0, 0 ],
      [ 0, 0, 8, 0, 0, 0, 0, 4, 0 ] ];
    codeBoard = [
      [ 0, 8, 0, 0, 0, 0, 2, 0, 0 ],
      [ 0, 0, 0, 0, 8, 4, 0, 9, 0 ],
      [ 0, 0, 6, 3, 2, 0, 0, 1, 0 ],
      [ 0, 9, 7, 0, 0, 0, 0, 8, 0 ],
      [ 8, 0, 0, 9, 0, 3, 0, 0, 2 ],
      [ 0, 1, 0, 0, 0, 0, 9, 5, 0 ],
      [ 0, 7, 0, 0, 4, 5, 8, 0, 0 ],
      [ 0, 3, 0, 7, 1, 0, 0, 0, 0 ],
      [ 0, 0, 8, 0, 0, 0, 0, 4, 0 ]  ];
    solutionBoard = [
      [ 0, 8, 0, 0, 0, 0, 2, 0, 0 ],
      [ 0, 0, 0, 0, 8, 4, 0, 9, 0 ],
      [ 0, 0, 6, 3, 2, 0, 0, 1, 0 ],
      [ 0, 9, 7, 0, 0, 0, 0, 8, 0 ],
      [ 8, 0, 0, 9, 0, 3, 0, 0, 2 ],
      [ 0, 1, 0, 0, 0, 0, 9, 5, 0 ],
      [ 0, 7, 0, 0, 4, 5, 8, 0, 0 ],
      [ 0, 3, 0, 7, 1, 0, 0, 0, 0 ],
      [ 0, 0, 8, 0, 0, 0, 0, 4, 0 ] ];
  }
}


function gameSolution(gameBoard)
{
  var unValidVal = {};
  var validVal;
  var valPos = 1;
  var center_i,center_j = 0;
  while (valPos > 0) {
    valPos = 0;
    for (var ndx_i = 0; ndx_i < 9; ndx_i++){
      for (var ndx_j = 0; ndx_j < 9; ndx_j++){
        if (gameBoard[ndx_i][ndx_j] === 0) {
          unValidVal = {};
          for (var l = 0; l < 9; l++){
            if( (gameBoard[ndx_i][l] != gameBoard[ndx_i][ndx_j]) && (ndx_j != l)){
              unValidVal[gameBoard[ndx_i][l]] = true;
            }
            if( (gameBoard[l][ndx_j] != gameBoard[ndx_i][ndx_j]) && (ndx_i != l)){
              unValidVal[gameBoard[l][ndx_j]] = true;
            }
          }
	        if(ndx_i==0 || ndx_i==1 || ndx_i==2) {
  	         center_i = 0;
	        }
	        else if(ndx_i==3 || ndx_i==4 || ndx_i==5) {
  	         center_i = 3;
	        }
	        else {
	           center_i = 6;
	        }
	        if(ndx_j==0 || ndx_j==1 || ndx_j==2) {
  	         center_j = 0;
	        }
	        else if(ndx_j==3 || ndx_j==4 || ndx_j==5) {
  	         center_j = 3;
	        }
	        else {
  	         center_j = 6;
	        }
	        //check possible input in nine 3*3 squares
	        for (var k = center_i;k < center_i+3; k++) {
  	         for (var l = center_j;l < center_j+3; l++) {
    	          if (gameBoard[k][l]) {
      	           unValidVal[gameBoard[k][l]] = true;
    	          }
 	           }
	        }
          validVal = Object.keys(unValidVal);
          if (validVal.length === 8) {
            for (var i = 1; i < 10; i++) {
              var index = i.toString();
              if (validVal.indexOf(index) < 0) {
                gameBoard[ndx_i][ndx_j] = i;
              }
            }
          }else {
            valPos++;
          }
        }
      }
    }
  }

  //return gameBoard;
}
