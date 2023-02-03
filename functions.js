var matrix = new Array();
var elements = new Array();

const Pieces =  {
    bishop: 1,
    rook: 2,
    horse: 3
}

const Graphics = {
    white: '<div class= "white" title="%id%" id="%id%">%id%</div>',
    black: '<div class= "black" title="%id%" id="%id%">%id%</div>',
    draw: '<div class= "draw"></div>'
}


$(document).ready(function(){
    initMatrix();
    drawChessBoard();

    $(".chessRow").on("click","div",function(){
       let title = $(this).attr("title");
       let xy = title.split("-");

       if(elements.length > 0 && matrix[xy[0]][xy[1]] == 0) {
           matrix[xy[0]][xy[1]] = elements[0];
           elements.shift();
           refreshBoard();
           $(".row.pieces .white").first().remove();
           return;
       }

       if($(this).hasClass("bishop")) {
            bishopWays();
            refreshBoard();
            return;
       }

        if($(this).hasClass("rook")) {
            rookWays();
            refreshBoard();
            return;
        }

        if($(this).hasClass("horse")) {
            horseWays();
            refreshBoard();
            return;
        }

    });
});


function initMatrix() {
    matrix = new Array();

    elements = [Pieces.bishop, Pieces.rook, Pieces.horse];

    for(let i = 0; i < 8; i++) {
        matrix[i] = new Array();
        for (let j = 0; j < 8; j++) {
            matrix[i][j] = 0;  
        }
    }
}

function drawChessBoard() {
        
    let html = "";

    for (let i = 0; i < 8; i ++) {
        
        html += '<div class="chessRow">';
        for (let j = 0; j < 8; j ++) {
            if(i%2){
                if(j%2){
                    html += Graphics.white.replaceAll("%id%",i+'-'+j);
                } else {
                    html += Graphics.black.replaceAll("%id%",i+'-'+j);
                }
            } else {
                if(j%2){
                    html += Graphics.black.replaceAll("%id%",i+'-'+j);
                } else {
                    html += Graphics.white.replaceAll("%id%",i+'-'+j);
                }
            }

        }
        html += '</div>';
    }
    $(".main").html(html);
}

function refreshBoard() {
    $(".chessRow .black, .chessRow .white").removeClass(["bishop", "horse", "rook"]);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {

            switch(matrix[i][j]) {
            case Pieces.bishop:
                $("#"+i+"-"+j).addClass("bishop");
                break;
            case Pieces.horse:
                $("#"+i+"-"+j).addClass("horse");
                break;
            case Pieces.rook:
                $("#"+i+"-"+j).addClass("rook");
                break;
            }
        }
    }
}

function bishopWays() {
    $(".chessRow .black, .chessRow .white").removeClass("selected");
    let currentPosition = $(".chessRow .bishop").attr("title");
    let xy = currentPosition.split("-");

    for (let i = xy[0]; i < matrix.length; i++) {
        
        for (let j = xy[1]; j < matrix.length; j++) {
           
            matrix[i][j]
        }
    }

}

function rookWays() {
    $(".chessRow .black, .chessRow .white").removeClass("selected");
    let currentPosition = $(".chessRow .bishop").attr("title");
    let xy = currentPosition.split("-");

    for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix.length; j++) {
           
            
        }
    }

}

function horseWays() {
    $(".chessRow .black, .chessRow .white").removeClass("selected");
    let currentPosition = $(".chessRow .bishop").attr("title");
    let xy = currentPosition.split("-");

    for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix.length; j++) {
           
            
        }
    }

}