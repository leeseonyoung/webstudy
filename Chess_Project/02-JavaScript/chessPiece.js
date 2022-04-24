class ChessPiece {

    type;
    color;
    row;
    col;
    constructor({type, color, row, col}) {  // param 객체
        this.type = type;
        this.color = color;
        this.row = row;
        this.col = col;

        let chessBoard = document.getElementById("chessBoard");
        let img;
        if(color === "black")
        {
            switch(type)
            {
                case 'P':
                    img = document.createElement("img");
                    img.setAttribute("src", "icon/pawn_black.png");
                    img.setAttribute("class", color);
                    img.setAttribute("class", "pawn");
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
            chessBoard.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].appendChild(img);
        }
        else if(color === "white")
        {
            switch(type)
            {
                case 'P':
                    img = document.createElement("img");
                    img.setAttribute("src", "icon/pawn_white.png");
                    img.setAttribute("class", color);
                    img.setAttribute("class", "pawn");
                break;
                case 'R':
                    img = document.createElement("img");
                    img.setAttribute("src", "icon/rook_white.png");
                    img.setAttribute("class", color);
                    img.setAttribute("class", "rook");
                break;
                case 'Kn':
                    img = document.createElement("img");
                    img.setAttribute("src", "icon/knight_white.png");
                    img.setAttribute("class", color);
                    img.setAttribute("class", "knight");
                break;
                case 'B':
                    img = document.createElement("img");
                    img.setAttribute("src", "icon/bishop_white.png");
                    img.setAttribute("class", color);
                    img.setAttribute("class", "bishop");
                break;
                case 'Q':
                    img = document.createElement("img");
                    img.setAttribute("src", "icon/queen_white.png");
                    img.setAttribute("class", color);
                    img.setAttribute("class", "queen");
                break;
                case 'K':
                    img = document.createElement("img");
                    img.setAttribute("src", "icon/king_white.png");
                    img.setAttribute("class", color);
                    img.setAttribute("class", "king");
                break;
                default:
                break;
            }
            chessBoard.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].appendChild(img);
        }
    }




}