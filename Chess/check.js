let oppositeColour;
let currentColor;
let checkMatePossible=0;
let warnFlag=true;
let checkCount=0;
let enemy=[];
let checkKingId='';
function lookForCheck(kingID,kingColor){
  checkCount=0;
  currentColor=kingColor;
    $('#warn').val("");
   
    if(kingColor=='w')
        oppositeColour='b';
    else oppositeColour='w';
    console.log(oppositeColour);
    kingID=Number(kingID);
            for(var i=kingID-10;i>=1;i=i-10){
                if($("#"+i).text()!=''){ checkKing(i,kingID); break;}
            }
            for(var i=kingID+10;i<=79;i=i+10){
                if($("#"+i).text()!=''){ checkKing(i,kingID); break;}
            }
            for(var i=kingID-1;i>=1;i=i-1){
                if($("#"+i).text()!=''){ checkKing(i,kingID); break;}
            }
            for(var i=kingID+1;i<=79;i=i+1){
                if($("#"+i).text()!=''){ checkKing(i,kingID); break;}
            }
          for(var i=kingID-11;i>=1;i=i-11){
            if($("#"+i).text()!=''){ checkKing(i,kingID); break;}
          }
          for(var i=kingID+11;i<=79;i=i+11){
            if($("#"+i).text()!=''){ checkKing(i,kingID); break;}
          }
          for(var i=kingID-9;i>=1;i=i-9){ 
            if($("#"+i).text()!=''){ checkKing(i,kingID); break;}
          }
          for(var i=kingID+9;i<=79;i=i+9){
            if($("#"+i).text()!=''){ checkKing(i,kingID); break;}
          }
           for(var i=0;i<knightPossibleMoves.length;i++){
            var index=kingID+knightPossibleMoves[i];
            if(index<=79&&index>=1){
            if($("#"+index).text()!=''){ checkKingWithKnight(index,kingID); 
            console.log(index+"=>"+kingID)
            }
            
            }
           }
           if(warnFlag){
            if(checkKingId!='')
              if(document.getElementById(checkKingId).className=="even")
              document.getElementById(checkKingId).style.backgroundColor='black';
              else
              document.getElementById(checkKingId).style.backgroundColor='white';

            if(checkCount==1){
              warnFlag=false;
              checkMate(enemy[0],kingID);
              warnFlag=true;
              }
              else if(checkCount>1){
                if((checkMate(enemy[0],kingID)+checkMate(enemy[1],kingID))!=2){
                  $('#warn').val("checkMate to Player2!!!!! ");
                }else{
                  warnCheck(1,kingID);
                }
              }
          }
            else{
              if(checkCount==0){
                  return 0;
              }else{
                return checkCount;
              }
          }
           
}
function checkKing(i,id){
  //console.log("the mehod called")
    if(document.getElementById(i).name[0]==oppositeColour){
      if((i-id)%10==0){
       // console.log("its working 10 out");
      if(document.getElementById(i).name[1]=='r'||document.getElementById(i).name[1]=='Q'){
        console.log(document.getElementById(i).name+"the pieces symbol of "+document.getElementById(i).name[1]+"=>"+i+"=>"+id)
       checkCount++;
       //console.log(document.getElementById(i).name);
      enemy.push(i);
       // console.log("its working 10 in");
      }
    }else  if((i-id)%11==0){
        //console.log("its working 11 out")
        if(document.getElementById(i).name[1]=='b'||document.getElementById(i).name[1]=='Q'){
        console.log(document.getElementById(i).name+"the pieces symbol of "+document.getElementById(i).name[1]+"=>"+i+"=>"+id)
       // console.log("its working 11 int");
        checkCount++;
        //console.log(document.getElementById(i).name);
        enemy.push(i);
      }
    } else if((i-id)%9==0){
       // console.log("its working 9 out")
        if(document.getElementById(i).name[1]=='b'||document.getElementById(i).name[1]=='Q'){
        console.log(document.getElementById(i).name+"the pieces symbol of "+document.getElementById(i).name[1]+"=>"+i+"=>"+id+"the king of "+document.getElementById(id).name)
        //console.log("its working 9 in")
        checkCount++;
       // console.log(document.getElementById(i).name);
        enemy.push(i);
        }
    }else  if(Math.ceil(i/10)==Math.ceil(id/10)){
        if(document.getElementById(i).name[1]=='r'||document.getElementById(i).name[1]=='Q'){
        checkCount++;
        console.log(document.getElementById(i).name);
        enemy.push(i);
        }
    }
    
     }   
}
function checkKingWithKnight(i,id){
  console.log("knight function called");
   if(document.getElementById(i).name[0]==oppositeColour){
       if(document.getElementById(i).name[1]=='K'){
        console.log("king function called in"+id+"=>"+document.getElementById(id).name);
        console.log("knight function called in"+i+"=>"+document.getElementById(i).name);
      checkCount++;
      enemy.push(i);
    }
    }
}
function warnCheck(i,id){
  if(document.getElementById(id).name[0]=='w')
  $('#warn').val("check to Player1!!!!! ");
  else
  $('#warn').val("check to Player2!!!!! ");
  document.getElementById(id).style.backgroundColor="yellow";
  checkKingId=id;
}
 function checkMate(i,id){
  if(escapeWithOthers(i,id))
        return warnCheck(i,id);
    else {
          if(escapeWithOwnMove(i,id))
            return  warnCheck(i,id);
          else
              if(strikePossibleEnemy(i,id)){
                     warnCheck(i,id);
                     return 1;
              }
                else{
                  if(document.getElementById(id).name[0]=='w'){
                    GameEnd("player 2  wins!!!!!!!!!!");
                  $('#warn').val("checkMate to Player1!!!!! ");}
                  else{
                    GameEnd("player 1  wins!!!!!!!!");
                  $('#warn').val("checkMate to Player2!!!!! ");}
                    return -1;}
    }
 
 
 }
 var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  createBoard();
  modal.style.display = "none";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 function GameEnd(text){
  modal.style.display = "block";
  document.getElementById('wins').innerHTML=text;
}
 function escapeWithOthers(i,id){
      let myTeam=possibleBackUp(i,id);
      let EnemyTeam=possibleEnemyBackUp(i,id);
      console.log("my team and enemys "+myTeam+"=>"+EnemyTeam)
      if(myTeam>EnemyTeam){
          return true;
        }
        else
           return false;
 }
 function escapeWithOwnMove(i,id){
  console.log("escapeWithOwnMove is called")
    var kingColor=$('#'+id).attr('name')[0];
    var possibleCount1=0;
    
    for(var j=0;j<8;j++){
      
      
      if(id+kingPossibleMoves[j]>=1&&id+kingPossibleMoves[j]<=79){
        console.log("showinng in !!!!"+document.getElementById(id+kingPossibleMoves[j]).name)
        if($("#"+(id+kingPossibleMoves[j])).text()==''){
          console.log("showinng!!!!"+document.getElementById(id+kingPossibleMoves[j]).name+"=>"+(id+kingPossibleMoves[j]))
          if(lookForCheck(id+kingPossibleMoves[j],kingColor)==0){
            console.log("hey=>"+(id+kingPossibleMoves[j]));
          possibleCount1++;}
      }
    }
      
  }
  console.log(possibleCount1);
  if(possibleCount1>0)
      return true;
      else
      return false;
}
 function possibleBackUp(i,id){
  var backUpCount=0;
  var backUpPiece;
  console.log("the enemy is "+i+"the king is "+id+"=>"+(i-id))
  if($('#'+id).attr('name')[0]=='w')
    backUpPiece='b';
  else
    backUpPiece='w';
    if((i-id)%10==0){
      if(i<id){
        for(var j=i+10;j<id;j+=10){
          console.log("10+"+lookForCheck(j,backUpPiece));
          backUpCount+=lookForCheck(j,backUpPiece);
            
        }
      }
      else if (i>id){
        for(var j=i-10;j>id;j-=10){
          console.log("10-"+lookForCheck(j,backUpPiece));
          backUpCount+=lookForCheck(j,backUpPiece);
        }
      }
  
    }else  if((i-id)%11==0){
      if(i<id){
        for(var j=i+11;j<id;j+=11){
          console.log("11+"+lookForCheck(j,backUpPiece));
          backUpCount+=lookForCheck(j,backUpPiece);
        }
      }
      else if (i>id){
        for(var j=i-11;j>id;j-=11){
          console.log("11-"+lookForCheck(j,backUpPiece));
          backUpCount+=lookForCheck(j,backUpPiece);
        }
      }
    }else if((i-id)%9==0){
      if(i<id){
        for(var j=i+9;j<id;j+=9){
          console.log("9+"+lookForCheck(j,backUpPiece));
          backUpCount+=lookForCheck(j,backUpPiece);
          
        }
      }
      else if (i>id){
        for(var j=i-9;j>id;j-=9){
          console.log("9-"+lookForCheck(j,backUpPiece));
          backUpCount+=lookForCheck(j,backUpPiece);
         
        }
      }
    }else  if(Math.ceil(i/10)==Math.ceil(id/10)){
      if(i<id){
        for(var j=i+1;j<id;j+=1){
          console.log("1+"+lookForCheck(j,backUpPiece));
          backUpCount+=lookForCheck(j,backUpPiece);
        }
      }
      else if (i>id){
        for(var j=i-1;j>id;j-=1){
          console.log("1-"+lookForCheck(j,backUpPiece));
          backUpCount+=lookForCheck(j,backUpPiece);
        }
      }
     }//else{
    //   for(var j=0;j<knightPossibleMoves.length;j++){
    //     var index=id+knightPossibleMoves[j];
    //     if(index<=79&&index>=1){
    //         //if($("#"+index).text()!=''){ checkKingWithKnight(index,kingID); }
    //         console.log(index);
    //         if(document.getElementById(index).name!=''&&document.getElementById(index).name[0]!=backUpPiece){
    //           if(document.getElementById(index).name[1]=='K'){
    //             backUpCount++;
    //           }
    //         }
    //     }
    //   }
    // }

    console.log("the backUp Count is "+backUpCount);
  return backUpCount;
 }
 function possibleEnemyBackUp(i,id){
  var backUpCount=0;
  var backUpPiece;
  
  if($('#'+i).attr('name')[0]=='w')
    backUpPiece='b';
  else
    backUpPiece='w';

    backUpCount+=lookForCheck(i,backUpPiece);

  return backUpCount;
  
 }
 function strikePossibleEnemy(i,id){
 
    if(lookForCheck(i,$('#'+i).attr('name')[0])>0)
      return true;
    else return false;
 }
