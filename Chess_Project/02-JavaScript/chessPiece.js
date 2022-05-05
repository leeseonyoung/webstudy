

class ChessPiece {

    // ChessPiece 클래스 자체의 변수. 인스턴스를 만들지 않고 쓸 수 있음. 상수에서 많이 씀
    //static PIECETYPE = { P: {type:"pawn", num:8}, R: {type:"rook", num:2}, Kn: "knight", B: "bishop", K: "king", Q: "queen" };
    static PIECETYPE = { pawn:{num:8}, rook:{num:2}, knight:{num:2}, bishop:{num:2}, king:{num:1}, queen:{num:1}};

    type;
    color;

    constructor({ type, color }) {  // param 은 객체로! 호출하는 쪽에서 훨씬 가독성이 좋아짐. 추후 확장성도.

        this.type = type;
        this.color = color;

    }

    draw({row, col}){
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
        img.setAttribute("src", "icon/" + type + "_" + color + ".png");
        img.classList.add([color, type]);
        chessBoard.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].appendChild(img);
    }




}