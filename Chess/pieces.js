//------------------------------------------------------Pieces set up-----------------------------

const rookie="&#x2656;";
const bishop="&#x2657;";
const queen="&#x2655;";
const pawn="&#x2659;";
const knight="&#x2658;";
const king="&#9812;";
const pieceColor1="#b9936c";
const pieceColor2="#86af49";

const whitePawn=['wp1','wp2','wp3','wp4','wp5','wp6','wp7','wp8'];
const blackPawn=['bp1','bp2','bp3','bp4','bp5','bp6','bp7','bp8'];
const whitePieces=['wr1','wKn1','wb1','wQ','wk','wb2','wKn2','wr2'];
const blackPieces=['br1','bKn1','bb1','bQ','bk','bb2','bKn2','br2'];
const rightIndex=['a','b','c','d','e','f','g','h'];


const piecesIcon={
    br2:{icon:rookie,colors:pieceColor1,piece:"rookie"},
    bKn2:{icon:knight,colors:pieceColor1,piece:"knight"},
    bb2:{icon:bishop,colors:pieceColor1,piece:"bishop"},
    bk:{icon:king,colors:pieceColor1,piece:"king"},
    bQ:{icon:queen,colors:pieceColor1,piece:"queen"},
    bb1:{icon:bishop,colors:pieceColor1,piece:"bishop"},
    bKn1:{icon:knight,colors:pieceColor1,piece:"knight"},
    br1:{icon:rookie,colors:pieceColor1,piece:"rookie"},
    wr2:{icon:rookie,colors:pieceColor2,piece:"rookie"},
    wKn2:{icon:knight,colors:pieceColor2,piece:"knight"},
    wb2:{icon:bishop,colors:pieceColor2,piece:"bishop"},
    wk:{icon:king,colors:pieceColor2,piece:"king"},
    wQ:{icon:queen,colors:pieceColor2,piece:"queen"},
    wb1:{icon:bishop,colors:pieceColor2,piece:"bishop"},
    wKn1:{icon:knight,colors:pieceColor2,piece:"knight"},
    wr1:{icon:rookie,colors:pieceColor2,piece:"rookie"},
    bp1:{icon:pawn,colors:pieceColor1,piece:"pawn"},
    bp2:{icon:pawn,colors:pieceColor1,piece:"pawn"},
    bp3:{icon:pawn,colors:pieceColor1,piece:"pawn"},
    bp4:{icon:pawn,colors:pieceColor1,piece:"pawn"},
    bp5:{icon:pawn,colors:pieceColor1,piece:"pawn"},
    bp6:{icon:pawn,colors:pieceColor1,piece:"pawn"},
    bp7:{icon:pawn,colors:pieceColor1,piece:"pawn"},
    bp8:{icon:pawn,colors:pieceColor1,piece:"pawn"},
    wp1:{icon:pawn,colors:pieceColor2,piece:"pawn"},
    wp2:{icon:pawn,colors:pieceColor2,piece:"pawn"},
    wp3:{icon:pawn,colors:pieceColor2,piece:"pawn"},
    wp4:{icon:pawn,colors:pieceColor2,piece:"pawn"},
    wp5:{icon:pawn,colors:pieceColor2,piece:"pawn"},
    wp6:{icon:pawn,colors:pieceColor2,piece:"pawn"},
    wp7:{icon:pawn,colors:pieceColor2,piece:"pawn"},
    wp8:{icon:pawn,colors:pieceColor2,piece:"pawn"},

}
var boardTable={
    
             1:"",2:"", 3:"",4:"", 5:"",6:"", 7:"",8:"",

             9:"",10:"", 11:"",12:"", 13:"",14:"", 15:"",16:"",
        
             17:"",18:"", 19:"",19:"", 21:"",22:"", 23:"",24:"",
      
             25:"",26:"", 27:"",28:"", 29:"",30:"", 31:"",32:"",
         
             33:"",34:"", 35:"",36:"", 37:"",38:"", 39:"",40:"",
        
             41:"",42:"", 43:"",44:"", 45:"",46:"", 47:"",48:"",
       
             49:"",50:"", 51:"",52:"", 53:"",54:"", 55:"",56:"",
       
             57:"",58:"", 59:"",60:"", 61:"",62:"", 63:"",64:""
        
    
    }

var setWhitePawn=0;
var setBlackPawn=0;
var setWhitePieces=0;
var setBlackPeieces=0;
var totalCount=1;
function reset(){
    setWhitePawn=0;
    setBlackPawn=0;
    setWhitePieces=0;
    setBlackPeieces=0;
    totalCount=1;
    for(var  i=1;i<9;i++){
        for(var  j=1;j<=10;j++){
           
            if(i==1){ 
                if(document.getElementById(totalCount).className=="odd"||document.getElementById(totalCount).className=="even"){
                boardTable[totalCount]=blackPieces[setBlackPeieces];  
              setPiece(totalCount,blackPieces[setBlackPeieces++]);
                }
            }
            if(i==2){
                if(document.getElementById(totalCount).className=="odd"||document.getElementById(totalCount).className=="even"){
                    boardTable[totalCount]=blackPawn[setBlackPawn];
                setPiece(totalCount,blackPawn[setBlackPawn++]);
                }  
            }
            if(i==7) {
                if(document.getElementById(totalCount).className=="odd"||document.getElementById(totalCount).className=="even"){
                    boardTable[totalCount]=whitePawn[setWhitePawn];
                setPiece(totalCount,whitePawn[setWhitePawn++]);
                }   
            }  
            if(i==8){
                if(document.getElementById(totalCount).className=="odd"||document.getElementById(totalCount).className=="even"){
                    boardTable[totalCount]=whitePieces[setWhitePieces];
                setPiece(totalCount,whitePieces[setWhitePieces++]);
                }
            }   
            totalCount++; 
        }
    }
}
reset();
var getPieceDetail;
var icon;
function setPiece(ID,pieceName){
    document.getElementById(ID).name=pieceName;
    colour=piecesIcon[pieceName]["colors"];
    icon=piecesIcon[pieceName]["icon"];
    document.getElementById(ID).innerHTML=icon;
    document.getElementById(ID).style.color=colour;  
   // console.log("piece name is "+document.getElementById(ID).name +" with id of "+ID)
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                            //Events for buttons
var previuos1={color:"",id:""};
var flag=true;
var previuos2="";
var previous3="";
var initialMoveName;
var initialMove;
var initialID;
let mouseIn=true;
let rookieMouseIn=true;
let bishopmouseIn=true;
let knightMouseIn=true;
var demopieces='hello';
var UserFlag=true;

function ChangeEvent(val){
    
        if(document.getElementById(val).style.backgroundColor=="violet"||((val==initialID||document.getElementById(val).innerHTML==demopieces)||(document.getElementById(val).style.backgroundColor=="green"||document.getElementById(val).style.backgroundColor=="blue"))){
            console.log("hello 12345");
        if(flag){
            previous3=previuos2;
            previuos2='blue';
            initialID=val;
            initialMove=$("#"+val).text();
            initialMoveName=$("#"+val).attr("name");
            $('#'+val).css('background-color', 'blue');
            flag=false;
        }else{
            if(val==initialID){
                previuos2=previous3;
            $('#'+initialID).css('background-color', previous3);}
            else{
            $('#'+initialID).css('background-color', previous3);}
            $('#'+initialID).text("");
            $("#"+initialID).attr("name",'');
            if(initialMoveName[0]=='w'){
                $('#'+val).css('color', pieceColor2);
                if(document.getElementById(val).name!='')
                    addStrikesPiece( $('#'+val).text(),'p2')
            }else{
                $('#'+val).css('color', pieceColor1);
                if(document.getElementById(val).name!='')
                addStrikesPiece( $('#'+val).text(),'p1')
            }
            
            $('#'+val).text(initialMove);
            $('#'+val).attr('name',initialMoveName);
            flag=true;
        }
        moveallPieces(initialID,initialMoveName);
        if(initialID!=val)
        changeBoardTurn();
    }
    
}
let whiteStrikeText='';
let BlackStrikeText='';
function addStrikesPiece(text,id){
    var strikeText;
    console.log("its calling");
    if(id=='p1'){
    whiteStrikeText+=text;
    console.log(whiteStrikeText);
    document.getElementById(id).value=whiteStrikeText;
    }
    else{
        BlackStrikeText+=text;
        console.log(BlackStrikeText);
    document.getElementById(id).value=BlackStrikeText;
    }
}
function changeBoardTurn(){
    if(UserFlag){
        blackTurn();
        UserFlag=false;
    }
    else{
        whiteTurn();
        UserFlag=true;
    }
}

function moveallPieces(){
    if(initialMoveName[1]=='p')
         pawnMoves(initialID,initialMoveName);
    else  if(initialMoveName[1]=='r')
        rookieMoves(initialID,initialMoveName);
    else if(initialMoveName[1]=='b')
        bishopMoves(initialID,initialMoveName);
    else if(initialMoveName[1]=='Q')
        queenMoves(initialID,initialMoveName);
    else if(initialMoveName[1]=='k')
         kingMoves(initialID,initialMoveName);
    else if(initialMoveName[1]=='K')
        knightMoves(initialID,initialMoveName);
}

function changeMouseOver(val){
    if(flag){
            if(UserFlag){
                if(document.getElementById(val).name[0]=='w'){
                 
                        if(checkPieces(val)){
                        }else{
                            previuos2=document.getElementById(val).style.backgroundColor;
                            document.getElementById(val).style.backgroundColor="grey";
                    }
               }
               else{
                previuos2=document.getElementById(val).style.backgroundColor;
                document.getElementById(val).style.backgroundColor="red";
               }
            }
            else{
                    if(document.getElementById(val).name[0]=='b'){
                        if(checkPieces(val)){
                        }else{
                            previuos2=document.getElementById(val).style.backgroundColor;
                            document.getElementById(val).style.backgroundColor="grey";
                    }
                }
                else{
                    previuos2=document.getElementById(val).style.backgroundColor;
                    document.getElementById(val).style.backgroundColor="red";
                }
            }
        
               
        
    }else{
        if(($('#'+val).text()==demopieces||$("#"+val).attr("name")==initialMoveName)){
                    previuos2=document.getElementById(val).style.backgroundColor;
                    document.getElementById(val).style.backgroundColor="grey";
        }else if(document.getElementById(val).style.backgroundColor=='violet'){
            previuos2=document.getElementById(val).style.backgroundColor;
            document.getElementById(val).style.backgroundColor="green";
        }
        else{
        previuos2=document.getElementById(val).style.backgroundColor;
        document.getElementById(val).style.backgroundColor="red";}
    }
}
function changeMouseOut(val){
    if( document.getElementById(val).className=='even')
    document.getElementById(val).style.backgroundColor='black';
    else 
    document.getElementById(val).style.backgroundColor='white';
}
function checkPieces(val){
    if(document.getElementById(val).name!=""){
        previuos2=document.getElementById(val).style.backgroundColor;
        possibleMoves(val);
        return true;
    }else{
        return false;
    }

}

function possibleMoves(val){
   eachPieces=document.getElementById(val).name;
   if(document.getElementById(val).name!=""){
   if(piecesIcon[eachPieces]["piece"]=="pawn"){ pawnPossible(val,eachPieces); }
   else if(piecesIcon[eachPieces]["piece"]=="rookie"){ rookiePossible(val,eachPieces);}
  else if(piecesIcon[eachPieces]["piece"]=="knight"){ knightPossible(val,eachPieces);}
  else if(piecesIcon[eachPieces]["piece"]=="bishop"){ bishopPossible(val,eachPieces);}
   else if(piecesIcon[eachPieces]["piece"]=="king"){ kingPossible(val,eachPieces);}
  else if(piecesIcon[eachPieces]["piece"]=="queen"){ queenPossible(val,eachPieces);}
  }
} 








