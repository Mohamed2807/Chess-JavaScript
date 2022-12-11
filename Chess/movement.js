let currentPawn,OppositePawn;
let currentBishop,oppositeBishop;
let currentRookie,OppositeRookie;
let currentQueen,oppositeQueen;
let curentKing,oppositeKing;
let currentKnight,oppositeKnight;
function pawnMoves(val,pieces){
    currentPawn=initialMoveName[0];
  
    
    if(currentPawn=='w')
        OppositePawn='b';
    else
        OppositePawn='w';
        
if(val>=0&&val<=79){
        if(pieces[0]=="w"){
            if(mouseIn){
                if(document.getElementById(val-9).name[0]==OppositePawn){
                    document.getElementById(val-9).style.backgroundColor="violet";
                }
                if(document.getElementById(val-11).name[0]==OppositePawn){
                    document.getElementById(val-11).style.backgroundColor="violet";
                }
            }else{
                if(document.getElementById(val-9).className=='odd'){
                    document.getElementById(val-9).style.backgroundColor='white';
                }
                else{
                    document.getElementById(val-9).style.backgroundColor='black';
                }
                if(document.getElementById(val-11).className=='odd'){
                    document.getElementById(val-11).style.backgroundColor='white';
                }
                else{
                    document.getElementById(val-11).style.backgroundColor='black';
                }
            }

            if(val>=62&&val<=69){
                for(var i=val-10;i>=val-20;i=i-10){
                    if(document.getElementById(i).name==''){
                        if(mouseIn){
                            document.getElementById(i).innerHTML=possiblePath;
                            document.getElementById(i).style.color="yellow";
                            if(demopieces=='hello'){demopieces=document.getElementById(i).innerHTML;}
                        }else{
                            document.getElementById(i).innerHTML="";
                            document.getElementById(i).style.color="";
                        
                        }
                    }  
                }
                if(mouseIn)
                    mouseIn=false;
                else mouseIn=true;
            }
            else{
                    if(document.getElementById(val-10).name==''){
                        if(mouseIn){
                            document.getElementById(val-10).innerHTML=possiblePath;
                            document.getElementById(val-10).style.color="yellow";
                        }else{
                            document.getElementById(val-10).innerHTML="";
                            document.getElementById(val-10).style.color="";
                        
                        }
                    } 
                    
                    
                
                if(mouseIn)
                    mouseIn=false;
                else mouseIn=true;

            }
           
        }
        else {
            if(mouseIn){
                if(document.getElementById(val+9).name[0]==OppositePawn){
                    document.getElementById(val+9).style.backgroundColor="violet";
                }
                if(document.getElementById(val+11).name[0]==OppositePawn){
                    document.getElementById(val+11).style.backgroundColor="violet";
                }
            }else{
                if(document.getElementById(val+9).className=='odd'){
                    document.getElementById(val+9).style.backgroundColor='white';
                }
                else{
                    document.getElementById(val+9).style.backgroundColor='black';
                }
                if(document.getElementById(val+11).className=='odd'){
                    document.getElementById(val+11).style.backgroundColor='white';
                }
                else{
                    document.getElementById(val+11).style.backgroundColor='black';
                }
            }

            if(val>=12&&val<=19){
                for(var i=val+10;i<=val+20;i=i+10){
                    if(document.getElementById(i).name==''){
                        
                            if(mouseIn){
                            document.getElementById(i).innerHTML=possiblePath;
                            document.getElementById(i).style.color="yellow";
                            if(demopieces=='hello'){demopieces=document.getElementById(i).innerHTML;}
                            }else{
                                document.getElementById(i).innerHTML="";
                                document.getElementById(i).style.color="";  
                            } 
                        }
                    }
                if(mouseIn)
                mouseIn=false;
                else mouseIn=true;
            }else{
            
                if(document.getElementById(val+10).name==''){
                    if(mouseIn){
                        document.getElementById(val+10).innerHTML=possiblePath;
                        document.getElementById(val+10).style.color="yellow";
                    }else{
                        document.getElementById(val+10).innerHTML="";
                        document.getElementById(val+10).style.color="";
                    }
                }  
            if(mouseIn)
                mouseIn=false;
            else mouseIn=true;
            }
        }
    }
}
function rookieMoves(val,pieces){
    currentRookie=initialMoveName[0];
    if(currentRookie=='w')
         OppositeRookie='b';
    else
         OppositeRookie='w';
  for(var i=val-10;i>=1;i=i-10){
  
    if($("#"+i).text()==''||($("#"+i).text()==demopieces||document.getElementById(i).name==pieces)){
        if(rookieMouseIn){
            document.getElementById(i).innerHTML=possiblePath;
            document.getElementById(i).style.color="yellow";
            if(demopieces=='hello'){demopieces=document.getElementById(i).innerHTML;}
       }else{
        if(document.getElementById(i).name==pieces){}
            else{
           document.getElementById(i).innerHTML="";
           document.getElementById(i).style.color="";
            }
       }
    }
    else {
        rookieStrikes(i);
        break;
        }
  }
  for(var i=val+10;i<=79;i=i+10){
    if($("#"+i).text()==''||($("#"+i).text()==demopieces||document.getElementById(i).name==pieces)){
        if(rookieMouseIn){
            document.getElementById(i).innerHTML=possiblePath;
            document.getElementById(i).style.color="yellow";
            if(demopieces=='hello'){demopieces=document.getElementById(i).innerHTML;}
       }else{
        if(document.getElementById(i).name==pieces){}
            else{
           document.getElementById(i).innerHTML="";
           document.getElementById(i).style.color="";
            }
       }
    }else  { 
        rookieStrikes(i);
        break;}
  }
  for(var i=val-1;i>=1;i=i-1){
    
    if($("#"+i).text()==''||($("#"+i).text()==demopieces||document.getElementById(i).name==pieces)){
        if(rookieMouseIn){
            document.getElementById(i).innerHTML=possiblePath;
            document.getElementById(i).style.color="yellow";
             if(demopieces=='hello'){demopieces=document.getElementById(i).innerHTML;}
       }else{
        if(document.getElementById(i).name==pieces){}
            else{
           document.getElementById(i).innerHTML="";
           document.getElementById(i).style.color="";
            }
       }
    }else {
        rookieStrikes(i);
        break;}
  }
  for(var i=val+1;i<=79;i=i+1){
    if($("#"+i).text()==''||($("#"+i).text()==demopieces||document.getElementById(i).name==pieces)){
        if(rookieMouseIn){
            document.getElementById(i).innerHTML=possiblePath;
            document.getElementById(i).style.color="yellow";
            if(demopieces=='hello'){demopieces=document.getElementById(i).innerHTML;}
       }else{
        if(document.getElementById(i).name==pieces){}
            else{
           document.getElementById(i).innerHTML="";
           document.getElementById(i).style.color="";
            }
       }
    }else  {
        rookieStrikes(i);
        break;}
  }
  if(rookieMouseIn)
             rookieMouseIn=false;
        else rookieMouseIn=true;
}
function rookieStrikes(i){
    if(document.getElementById(i).name[0]==OppositeRookie){
        if(rookieMouseIn){
            document.getElementById(i).style.backgroundColor="violet";
            
        }
        else{
            if(document.getElementById(i).className=='odd'){
                document.getElementById(i).style.backgroundColor='white';
                
            }
            else{
                document.getElementById(i).style.backgroundColor='black';
                 
            }
        }
       }
}
function bishopMoves(val,pieces){
    currentBishop=initialMoveName[0];
    if(currentBishop=='w')
        oppositeBishop='b';
    else
         oppositeBishop='w';
         console.log("the current color"+currentBishop);
         console.log("the opposite color"+oppositeBishop);
    for(var i=val-11;i>=1;i=i-11){
        if($("#"+i).text()==''||($("#"+i).text()==demopieces||document.getElementById(i).name==pieces)){
            if(bishopmouseIn){
                document.getElementById(i).innerHTML=possiblePath;
                document.getElementById(i).style.color="yellow";
                if(demopieces=='hello'){demopieces=document.getElementById(i).innerHTML;}
           }else{
            if(document.getElementById(i).name==pieces){}
                else{
               document.getElementById(i).innerHTML="";
               document.getElementById(i).style.color="";
                }
           }
        }else {  bishopStrikes(i);
            break;}
      }
      for(var i=val+11;i<=79;i=i+11){
        if($("#"+i).text()==''||($("#"+i).text()==demopieces||document.getElementById(i).name==pieces)){
            if(bishopmouseIn){
                document.getElementById(i).innerHTML=possiblePath;
                document.getElementById(i).style.color="yellow";
                if(demopieces=='hello'){demopieces=document.getElementById(i).innerHTML;}
           }else{
            if(document.getElementById(i).name==pieces){}
                else{
               document.getElementById(i).innerHTML="";
               document.getElementById(i).style.color="";
                }
           }
        }else  {  bishopStrikes(i);
            break;}
      }
      for(var i=val-9;i>=1;i=i-9){
        
        if($("#"+i).text()==''||($("#"+i).text()==demopieces||document.getElementById(i).name==pieces)){
            if(bishopmouseIn){
                document.getElementById(i).innerHTML=possiblePath;
                document.getElementById(i).style.color="yellow";
                if(demopieces=='hello'){demopieces=document.getElementById(i).innerHTML;}
           }else{
            if(document.getElementById(i).name==pieces){}
                else{
               document.getElementById(i).innerHTML="";
               document.getElementById(i).style.color="";
                }
           }
        }else { bishopStrikes(i);
             break;}
      }
      for(var i=val+9;i<=79;i=i+9){
        if($("#"+i).text()==''||($("#"+i).text()==demopieces||document.getElementById(i).name==pieces)){
            if(bishopmouseIn){
                document.getElementById(i).innerHTML=possiblePath;
                document.getElementById(i).style.color="yellow";
                if(demopieces=='hello'){demopieces=document.getElementById(i).innerHTML;}
           }else{
            if(document.getElementById(i).name==pieces){}
                else{
               document.getElementById(i).innerHTML="";
               document.getElementById(i).style.color="";
                }
           }
        }else  {
            bishopStrikes(i);
            break;}
      }
      if(bishopmouseIn)
                bishopmouseIn=false;
            else bishopmouseIn=true;
}
function bishopStrikes(i){
    if(document.getElementById(i).name[0]==oppositeBishop){
        if(bishopmouseIn){
            document.getElementById(i).style.backgroundColor="violet";
            
        }
        else{
            if(document.getElementById(i).className=='odd'){
                document.getElementById(i).style.backgroundColor='white';
                
            }
            else{
                document.getElementById(i).style.backgroundColor='black';
                 
            }
        }
       }
}
function queenMoves(initialID,initialMoveName){
    bishopMoves(initialID,initialMoveName);
    rookieMoves(initialID,initialMoveName);
}
function kingMoves(val,pieces){
    curentKing=initialMoveName[0];
    if(curentKing=='w')
        oppositeKing='b';
    else
        oppositeKing='w';
    for(var i=0;i<8;i++){
        if(val+kingPossibleMoves[i]>=1&&val+kingPossibleMoves[i]<=79){
            if($("#"+(val+kingPossibleMoves[i])).text()==''||$("#"+(val+kingPossibleMoves[i])).text()==demopieces){
                if(mouseIn){
                    document.getElementById(val+kingPossibleMoves[i]).innerHTML=possiblePath;
                    document.getElementById(val+kingPossibleMoves[i]).style.color="yellow";
                    if(demopieces=='hello'){demopieces=document.getElementById(val+kingPossibleMoves[i]).innerHTML;}
                }else{
                    document.getElementById(val+kingPossibleMoves[i]).innerHTML="";
                    document.getElementById(val+kingPossibleMoves[i]).style.color="";
                    
                     }
            } else  if(document.getElementById(val+kingPossibleMoves[i]).name[0]==oppositeKing){
                        kingStrikes(val+kingPossibleMoves[i]);    
            } 
        }
    }
        if(mouseIn)
        mouseIn=false;
   else mouseIn=true;
    }
function kingStrikes(i){
    console.log("the i is "+i);
    if(document.getElementById(i).name[0]==oppositeKing){
        if(mouseIn){
            document.getElementById(i).style.backgroundColor="violet";
            
        }
        else{
            if(document.getElementById(i).className=='odd'){
                document.getElementById(i).style.backgroundColor='white';
                
            }
            else{
                document.getElementById(i).style.backgroundColor='black';
                 
            }
        }
       }
}
function knightMoves(val,pieces){
    currentKnight=initialMoveName[0];
    if(currentKnight=='w')
         oppositeKnight='b';
    else
         oppositeKnight='w';
    var index;
    var possibleCount=0;
    for(var i=0;i<8;i++){
        index=val+knightPossibleMoves[i];
         if(index>=1&&index<=79){
            if($("#"+index).text()==''||$("#"+index).text()==demopieces){
                
                    if(knightMouseIn){
                        document.getElementById(index).innerHTML=possiblePath;
                        document.getElementById(index).style.color="yellow";
                        if(demopieces=='hello'){demopieces=document.getElementById(index).innerHTML;}
                }else{
                    document.getElementById(index).innerHTML="";
                    document.getElementById(index).style.color="";
                }
               }else  if(document.getElementById(index).name[0]==oppositeKnight){
                         knightStrikes(index);    
                     } 
         }  
   }
   if(knightMouseIn)
        knightMouseIn=false;
   else knightMouseIn=true;
  
}
function knightStrikes(i){
    console.log("the i is "+i);
    if(document.getElementById(i).name[0]==oppositeKnight){
        if(mouseIn){
            document.getElementById(i).style.backgroundColor="violet";
            
        }
        else{
            if(document.getElementById(i).className=='odd'){
                document.getElementById(i).style.backgroundColor='white';
                
            }
            else{
                document.getElementById(i).style.backgroundColor='black';
                 
            }
        }
       }
}
