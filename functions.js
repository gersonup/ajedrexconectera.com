const Elements =  {
    Bishop: 0,
    Tower: 1,
    horse: 2
}

const Graphics = {
    Bishop: '<div class= "bishop"></div>',
    Tower: '<div class= "tower"></div>',
    horse: '<div class= "horse"></div>',
    whitwSpace: '<div class= "white"></div>',
    BlackSpace: '<div class= "black"></div>',
    draw: '<div class= "draw"></div>'
}
let html;
$(document).ready(function(){
    drawChessBoard();
    function drawChessBoard() {
        let matrix = new Array();
    
        for (let i = 0; i < 8; i ++) {
             matrix[i] = new Array();
             html += '<div class="chessRow">';
            for (let j = 0; j < 8; j ++) {
                html += '<div class="casilla">';
                if(i%2){
                    if(j%2){
                        html += '<div class="white">';
                    } else {

                    }
                } else {
                    html += '<div class="casilla">';
                }
                matrix[i][j] = 0;
            }  


        }
        console.log(matrix);
    }
});