class ChessBoard {
    constructor() {
        
    }

    draw() {
        let table = document.createElement("table");
        for(let row=0; row<8; row++)
        {
            let tr = document.createElement("tr");
            for(let col=0; col<8; col++)
            {
                let td = document.createElement("td");
                if( (row+col)%2 === 0)
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

                td.id = "cell_"+row+"_"+col;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }


}