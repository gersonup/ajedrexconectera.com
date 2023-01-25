const Elements =  {
    Bishop: 0,
    Tower: 1,
    horse: 2
}

const Graphics = {
    bishop: '<div class= "bishop"></div>',
    tower: '<div class= "tower"></div>',
    horse: '<div class= "horse"></div>',
    white: '<div class= "white"></div>',
    black: '<div class= "black"></div>',
    draw: '<div class= "draw"></div>'
}

let html = "";
$(document).ready(function(){
    drawChessBoard(8);

    function drawChessBoard(n) {
        let matrix = new Array();
        html += '<div class="chess-matrix">';
        for (let i = 0; i < n; i ++) {
             matrix[i] = new Array();
             html += '<div class="chess-row row">';
            for (let j = 0; j < n; j ++) {
                if(i%2){
                    if(j%2){
                        html += Graphics.white;
                    } else {
                        html += Graphics.black;
                    }
                } else {
                    if(j%2){
                        html += Graphics.black;
                    } else {
                        html += Graphics.white;
                    }
                }
                matrix[i][j] = 0;
            }  
            html += '</div>'
        }
        html += '</div>'
        console.log(matrix);
        $(".main").html(html);

        return matrix;
    }
});