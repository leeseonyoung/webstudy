class ChessBoard {
    constructor() {

    }

    draw() {
        let table = document.createElement("table");
        table.id = "chessBoard";
        for (let row = 0; row < 8; row++) {
            let tr = document.createElement("tr");
            for (let col = 0; col < 8; col++) {
                let td = document.createElement("td");
                if ((row + col) % 2 === 0)
                    td.classList.add(["odd"]);
                else
                    td.classList.add(["even"]);
                /*
                if(row%2 === 0) // 0 2 4 6
                {
                    if(col%2 === 0)  // 0 2 4 6
                        td.classList.add(["odd"]);
                    else
                        td.classList.add(["even"]);
                }
                else    //1 3 5 7
                {
                    if(col%2 === 0) // 0 2 4 6
                        td.classList.add(["even"]);
                    else
                        td.classList.add(["odd"]);
                }
                */

                td.id = "cell_" + row + "_" + col;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }

    chessPieces;    // 클래스 변수 

    init() {
        this.chessPieces = {"black":{}, "white":{}}
        for( let color in this.chessPieces){
            for(let type in ChessPiece.PIECETYPE){
                for(let num=0; num < ChessPiece.PIECETYPE[type].num; num++)
                this.chessPieces[color][type+num] = new ChessPiece({type, color}); 
                //                                  new ChessPiece({type:type, color:color});
                // object 접근 방식 1. chessPieces.color.type (string 상수느낌 chessPieces."color".) 2. chessPieces[color][type] 변수화
            
                this.putPiece( {piece:this.chessPieces[color][type+num], position:{row, col}});

            }
        }

    }
    /**
     * @function putPiece
     * @description .....
     * @param {ChessPiece} piece ....
     * @param {object} position
     * @param {number} position.row
     * @param {number} position.col
     */
    putPiece({ piece, position}) { // {"piece":piece , "position":position}
        
        //piece.draw({row:position.row, col:position.col});
        piece.draw(position);
    }

}
