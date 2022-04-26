

const PIECETYPE = { P: "pawn", R: "rook", Kn: "knight", B: "bishop", K: "king", Q: "queen" };




class ChessPiece {

    type;
    color;
    row;
    col;
    constructor({ type, color, row, col }) {  // param 은 객체로! 호출하는 쪽에서 훨씬 가독성이 좋아짐. 추후 확장성도.
        this.type = type;
        this.color = color;
        this.row = row;
        this.col = col;

        let chessBoard = document.getElementById("chessBoard");
        let img = document.createElement("img");
        /* if(color === "black")
         {
             switch(type)
             {
                 case 'P':
                     img = document.createElement("img");
                     img.setAttribute("src", "icon/pawn_black.png");
                     img.classList.add([color, "pawn"]);
                 break;
                 case 'R':
                     img = document.createElement("img");
                     img.setAttribute("src", "icon/rook_black.png");
                     img.setAttribute("class", color);
                     img.setAttribute("class", "rook");
                 break;
                 case 'Kn':
                     img = document.createElement("img");
                     img.setAttribute("src", "icon/knight_black.png");
                     img.setAttribute("class", color);
                     img.setAttribute("class", "knight");
                 break;
                 case 'B':
                     img = document.createElement("img");
                     img.setAttribute("src", "icon/bishop_black.png");
                     img.setAttribute("class", color);
                     img.setAttribute("class", "bishop");
                 break;
                 case 'Q':
                     img = document.createElement("img");
                     img.setAttribute("src", "icon/queen_black.png");
                     img.setAttribute("class", color);
                     img.setAttribute("class", "queen");
                 break;
                 case 'K':
                     img = document.createElement("img");
                     img.setAttribute("src", "icon/king_black.png");
                     img.setAttribute("class", color);
                     img.setAttribute("class", "king");
                 break;
                 default:
                 break;
             }
         }*/
        img.setAttribute("src", "icon/" + PIECETYPE[type] + "_" + color + ".png");
        img.classList.add([color, PIECETYPE[type]]);
        chessBoard.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].appendChild(img);
    }




}