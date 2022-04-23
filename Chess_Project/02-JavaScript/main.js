

window.onload = function(){ // 함수를 할당
    let chessBoard = new ChessBoard(); 
    chessBoard.draw();

    let blackKnight1 = new ChessPiece({type:"Kn", color:"black", row:0, col:1});

    const chessPieces = {};

    /*
    chessPieces.pawn0 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn0 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn0 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn0 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn0 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn5 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn6 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn7 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    */

    for(let num = 0; num<8; num++)
    {
        //객체 내 프로퍼티 생성 및 접근 방법 []
        chessPieces['pawn'+num] = new ChessPiece({type:"P", color:"black", row:1, col:0});
    }

    console.log(chessPieces);

}