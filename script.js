const square1 = document.querySelector("#square_1");
const square2 = document.querySelector("#square_2");
const square3 = document.querySelector("#square_3");
const square4 = document.querySelector("#square_4");
const square5 = document.querySelector("#square_5");
const square6 = document.querySelector("#square_6");
const square7 = document.querySelector("#square_7");
const square8 = document.querySelector("#square_8");
const square9 = document.querySelector("#square_9");
const symbol1 = document.querySelector("#symbol_1");
const symbol2 = document.querySelector("#symbol_2");
const symbol3 = document.querySelector("#symbol_3");
const symbol4 = document.querySelector("#symbol_4");
const symbol5 = document.querySelector("#symbol_5");
const symbol6 = document.querySelector("#symbol_6");
const symbol7 = document.querySelector("#symbol_7");
const symbol8 = document.querySelector("#symbol_8");
const symbol9 = document.querySelector("#symbol_9");
const game_table = document.getElementById("game-table");
const again_button = document.getElementById("again-button");
let count = 0;
let items = ["","","","","","","","",""];


square1.addEventListener("click",clicked);
square2.addEventListener("click",clicked);
square3.addEventListener("click",clicked);
square4.addEventListener("click",clicked);
square5.addEventListener("click",clicked);
square6.addEventListener("click",clicked);
square7.addEventListener("click",clicked);
square8.addEventListener("click",clicked);
square9.addEventListener("click",clicked);
again_button.addEventListener("click",startAgain);




function startAgain(){
    
    for(let i = 0; i<= 8; i++){
        game_table.children[i].children[0].innerHTML = `${i+1}`;
        game_table.children[i].children[0].style.opacity = 0;
        count = 0;               
    }
    items = ["","","","","","","","",""];
}

let userTurn = true;

function clicked(event){

    
    let changeSymbolControl = event.currentTarget.children[0].innerHTML;
    let changeSymbolwithNew = event.currentTarget.children[0];
    changeSymbolwithNew.style.opacity = 1;

    //console.log(event.currentTarget.children[0].id)
    
    if(changeSymbolControl === "X" || changeSymbolControl === "O"){

        
    }else{
        let numb = parseInt(changeSymbolwithNew.innerHTML);
        
        changeSymbolwithNew.innerHTML = "X";
        items[numb-1] = "X"
        count++;        
        userTurn = false;
        console.log(items)
        pointControl();
               
    }

    if(count <= 4){
        
        AI();
    }else{       
    }
   


    
}


function AI(event){
    
    


    while(userTurn === false){
        let random = Math.floor(Math.random()*9);
        let controlSymbol = game_table.children[random].children[0].innerHTML;
        let changeSymbolwithNew = game_table.children[random].children[0];
        changeSymbolwithNew.style.opacity = 1;
        




        if(controlSymbol === "X" || controlSymbol === "O"){  
        }else{
            numb = parseInt(changeSymbolwithNew.innerHTML);

            changeSymbolwithNew.innerHTML = "O";
            items[numb-1] = "O"
            userTurn = true;
            console.log(items)
            pointControl();

        }
        
    }
       
}

function pointControl(){
    
    if(items[0] == "X" && items[1] == "X" && items[2] == "X"){
        
        finish("X");
    }
    else if(items[3] == "X" && items[4] == "X" && items[5] == "X"){
        
        finish("X");
    }
    else if(items[6] == "X" && items[7] == "X" && items[8] == "X"){
        
        finish("X");
    }
    else if(items[0] == "X" && items[3] == "X" && items[6] == "X"){
        
        finish("X");
    }
    else if(items[1] == "X" && items[4] == "X" && items[7] == "X"){
        
        finish("X");
    }
    else if(items[2] == "X" && items[5] == "X" && items[8] == "X"){
        
        finish("X");
    }
    else if(items[0] == "X" && items[4] == "X" && items[8] == "X"){
        
        finish("X");
    }
    else if(items[2] == "X" && items[4] == "X" && items[6] == "X"){
        
        finish("X");
    }
    ////////////////////////////////////////////////////////////
    else if(items[0] == "O" && items[1] == "O" && items[2] == "O"){
        
        finish("O");
    }
    else if(items[3] == "O" && items[4] == "O" && items[5] == "O"){
        
        finish("O");
    }
    else if(items[6] == "O" && items[7] == "O" && items[8] == "O"){
        
        finish("O");
    }
    else if(items[0] == "O" && items[3] == "O" && items[6] == "O"){
        
        finish("O");
    }
    else if(items[1] == "O" && items[4] == "O" && items[7] == "O"){
        
        finish("O");
    }
    else if(items[2] == "O" && items[5] == "O" && items[8] == "O"){
        
        finish("O");
    }
    else if(items[0] == "O" && items[4] == "O" && items[8] == "O"){
        
        finish("O");
    }
    else if(items[2] == "O" && items[4] == "O" && items[6] == "O"){
        
        finish("O");
    }


    }

    function finish(winner){
        if(winner == "X"){
            alert("You Win");
        }else{
            alert("Computer Win");
        }
        startAgain();



        
    }


