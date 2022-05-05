

window.onload = function () { // 함수를 할당
    let chessBoard = new ChessBoard();
    chessBoard.draw();

    chessBoard.init();

    const chessPieces = {};

    /*
    //let blackKnight1 = new ChessPiece({type:"Kn", color:"black", row:0, col:1});

    chessPieces.pawn0 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn0 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn0 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn0 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn0 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn5 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn6 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    chessPieces.pawn7 = new ChessPiece({type:"P", color:"black", row:1, col:0});
    */


    for (let num = 0; num < 8; num++)  // col
    {
        //객체 내 프로퍼티 생성 및 접근 방법 []
        chessPieces['blackPawn' + num] = new ChessPiece({ type: "P", color: "black", row: 1, col: num });
        chessPieces['whitePawn' + num] = new ChessPiece({ type: "P", color: "white", row: 6, col: num });

        switch (num) {
            case 0:
            case 7:
                chessPieces['blackRook' + num] = new ChessPiece({ type: "R", color: "black", row: 0, col: num });
                chessPieces['whiteRook' + num] = new ChessPiece({ type: "R", color: "white", row: 7, col: num });
                break;
            case 1:
            case 6:
                chessPieces['blackKnight' + num] = new ChessPiece({ type: "Kn", color: "black", row: 0, col: num });
                chessPieces['whiteKnight' + num] = new ChessPiece({ type: "Kn", color: "white", row: 7, col: num });
                break;
            case 2:
            case 5:
                chessPieces['blackBishop' + num] = new ChessPiece({ type: "B", color: "black", row: 0, col: num });
                chessPieces['whiteBishop' + num] = new ChessPiece({ type: "B", color: "white", row: 7, col: num });
                break;
            case 3:
                chessPieces['blackQueen' + num] = new ChessPiece({ type: "Q", color: "black", row: 0, col: num });
                chessPieces['whiteQueen' + num] = new ChessPiece({ type: "Q", color: "white", row: 7, col: num });
                break;
            case 4:
                chessPieces['blackKing' + num] = new ChessPiece({ type: "K", color: "black", row: 0, col: num });
                chessPieces['whiteKing' + num] = new ChessPiece({ type: "K", color: "white", row: 7, col: num });
                break;
            default:
                break;
        }
    }

    chessBoard.putPiece({
        piece: chessPieces['blackPawn' + num],
        position: { row, col },
        //position: { "row":row, "col":col }
    });




    console.log(chessPieces);

}