const height = 10, width = 40;
let board;

function NewBoard(){
  board=[];
  for(let i=0;i<height;i++){
    board[i]=[];
    for(let j=0;j<width;j++){
      board[i][j]=0;
    }
  }
  return board;
}

function FillBoard(board){
  for(let i=0;i<height;i++){
    for(let j=0;j<width;j++){
      board[i][j]=Math.round(Math.random());
    }
  }
}

function WriteBoard(board){
  console.clear();
  for(let i=0;i<height;i++){
    for(let j=0;j<width;j++){
      if(board[i][j]) {process.stdout.write('#');}
      else {process.stdout.write(' ');}
    }
    process.stdout.write('\n');
  }
}

function LifeCucle(board){
  for(let i=0;i<height;i++){
    for(let j=0;j<width;j++){
      board[i][j] = (Neighbors(board,i,j)==3||(Neighbors(board,i,j)==2 && board[i][j]));
    }
  }
  WriteBoard(board);
}

function Neighbors(board,i,j){
  return test(board,i-1,j-1) + test(board,i-1,j) + test(board,i-1,j+1) +
         test(board,i,j-1)   +                   + test(board,i,j+1)   +
         test(board,i+1,j-1) + test(board,i+1,j) + test(board,i+1,j+1);
}

function test(board,i,j){
  if(i<=0||j<=0||i>=height||j>=width) {return 0;}
}

board=NewBoard(board);
FillBoard(board);
setInterval(Life=function(){LifeCucle(board);}, 2000);
