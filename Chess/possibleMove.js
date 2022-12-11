
let possiblePath="&#x25A0;";

let knightPossibleMoves=[19,21,8,12,-19,-21,-8,-12];
let rookiePossibleMoves=[10,-10,1,-1];
let bishopPossibleMoves=[9,-9,11,-11];
let kingPossibleMoves=[10,-10,1,-1,9,-9,11,-11];
function knightPossible(val,pieces){
    var possibleCount=0;
    var index;
            for(var i=0;i<8;i++){
                 index=val+knightPossibleMoves[i];
                  if(index>=1&&index<=79){
                        if(document.getElementById(index).innerHTML!=''){   
                            possibleCount++;
                        }
                  }else{possibleCount++;}  
            }
            if(possibleCount<8) {     
                document.getElementById(val).style.backgroundColor="green";
                return 1;
            }
            else{
                document.getElementById(val).style.backgroundColor="red";
                    return 0;
            }
 }
var currentPiece;
var oppositePiece;
//--------------------------------------------------------
function pawnPossible(val,pieces){
        if(pieces[0]=="w"){
            if(document.getElementById(val-10).name==''){
                    document.getElementById(val).style.backgroundColor="green";  
            }
            else{ 
                document.getElementById(val).style.backgroundColor="red"; 
            } 
        }
        else {
            if(document.getElementById(val+10).name==''){
                    document.getElementById(val).style.backgroundColor="green";
            }
            else{
                document.getElementById(val).style.backgroundColor="red"; 
            }
        }
    }
function rookiePossible(val,pieces){
    currentPiece=pieces[0];
    if(currentPiece=='w')
        oppositePiece='b';
    else oppositePiece='w'
        var possibleCount=0;
            for(var i=0;i<4;i++){
                if(val+rookiePossibleMoves[i]<=79&&val+rookiePossibleMoves[i]>=1){
                   
                    if((document.getElementById(val+rookiePossibleMoves[i]).name!=null&&document.getElementById(val+rookiePossibleMoves[i]).innerHTML!='')&&document.getElementById(val+rookiePossibleMoves[i]).name[0]!=oppositePiece){
                        possibleCount++;
                       
                    }
            }else{possibleCount++;
              
            }
            }     
            if(possibleCount<4) {  
                console.log(possibleCount);   
                    document.getElementById(val).style.backgroundColor="green";
                    return 1;
            }
            else{
                document.getElementById(val).style.backgroundColor="red";
                    return 0;
            }
    }
function bishopPossible(val,pieces){
    if(currentPiece=='w')
    oppositePiece='b';
else oppositePiece='w'
        var possibleCount=0;
        for(var i=0;i<4;i++){
            if(val+bishopPossibleMoves[i]<=79&&val+bishopPossibleMoves[i]>=0){
                if((document.getElementById(val+bishopPossibleMoves[i]).name!=null&&document.getElementById(val+bishopPossibleMoves[i]).innerHTML!='')&&document.getElementById(val+bishopPossibleMoves[i]).name[0]!=oppositePiece){
                    possibleCount++;
                }
        }else{possibleCount++;}
        }     
        if(possibleCount<4) {     
                document.getElementById(val).style.backgroundColor="green";
                return 1;
        }
        else{
            document.getElementById(val).style.backgroundColor="red";
            return 0;
        }
    }
function queenPossible(val,pieces){
  var posible1=  rookiePossible(val,pieces);
  var possible2=bishopPossible(val,pieces);
  if((posible1+possible2)!=0){
    document.getElementById(val).style.backgroundColor="green";
  }else{
    document.getElementById(val).style.backgroundColor="red";
  }
   
}
function kingPossible(val,pieces){
    var possibleCount=0;
    for(var i=0;i<8;i++){
        if(val+kingPossibleMoves[i]<=79&&val+kingPossibleMoves[i]>=0){
            if(document.getElementById(val+kingPossibleMoves[i]).innerHTML!=''){
                possibleCount++;
            }
    }else{possibleCount++;}
    }     
    if(possibleCount<8) {     
            document.getElementById(val).style.backgroundColor="green";
            return 1;
    }
    else{
        document.getElementById(val).style.backgroundColor="red";
            return 0;
    }
}

