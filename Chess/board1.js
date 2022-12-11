let rowData={}
let ColData={}

var button=document.createElement("button");
var div=document.createElement("div");
var div2=document.createElement("div");
var colourID=1;
var row=8;
var ID=1;
const index=['a','b','c','d','e','f','g','h'];
var box;

function createBoard(){
        for(var j=1;j<=8;j++){
            createRow(j);
            createColumn(j,"index"+j,"col1");
            createButton(ID++,"index","",row,"index"+j);


            for(var i=1;i<=8;i++){
                createColumn(j,"col"+ID,"col");
                if(colourID%2==0){
                createButton(ID,"even","black","","col"+ID);
                }
                else{
                    createButton(ID,"odd","white","","col"+ID);
                }
                ID++;

                colourID++;
            }
            if(j==8){
                createRow(j+1);
                createColumn(j+1,"index","col4");
                createButton(ID,"ind","","","index");
                for(var i=0;i<8;i++){
                   
                    createColumn(j+1,"index"+i+i,"col3");
                    createButton(ID++,"fas","transparent",index[i],"index"+i+i);
                    
                }
              
            }
            createColumn(j,"index"+j+j+j,"col1");
            createButton(ID++,"index","",row--,"index"+j+j+j);
            colourID++;
        }
       
}
createBoard();
function createButton(num,cname,bcolor,html,colid){
    button=document.createElement("button");
    if(num!=""){
     button.id=num;
    }
     button.className=cname;
     if(bcolor!=""){
       
     button.style.backgroundColor=bcolor;
     }
     if(html!=""){
        button.innerHTML=html;
     }
     
     document.getElementById(colid).appendChild(button);
     //console.log("the column id is "+colid+html);
     button.onclick=()=>{ChangeEvent(num);}
    if(num!="index1"){
     button.addEventListener('mouseover',()=>{ changeMouseOver(num)});
     button.addEventListener("mouseout", ()=> { changeMouseOut(num) });
    }
    
  }
function createColumn(j,id,cName){
    div2=document.createElement("div");
    div2.className=cName;
    div2.id=id;
    document.getElementById("row"+j).appendChild(div2);
    return div2;
}
function createRow(j){
    div=document.createElement("div");
    div.className="row";
    div.id="row"+j;
    document.getElementById("box").appendChild(div);
    return div;
}

 function getColData(){
    for(var i=1;i<=79;i++){
        if(document.getElementById("col"+i)!=null){
        ColData["col"+i]=document.getElementById("col"+i);}
    }
   for(var i=1;i<=8;i++){
    ColData["index"+i+i+i]=document.getElementById("index"+i+i+i);
    
   }
    console.log("completed");
 }
function clearColData(){
    for(var i=1;i<=79;i++){
        if(document.getElementById("col"+i)!=null){
        document.getElementById("col"+i).remove();}
        }
        for(var i=1;i<=8;i++){
            document.getElementById("index"+i+i+i).remove();
            }
    }
  function getRowData(count){
  
                getColData();
                
                clearColData();
               
                 if(count==1){
                    
                     for(var i=1;i<=9;i++){
                         for(var j=1;j<=8;j++){
                            if(count<=79)
                            if(ColData["col"+count]!=null)
                         document.getElementById("row"+i).appendChild(ColData["col"+count]);
                            else {j--;}count++;
                             }
                             if(i!=9)
                             document.getElementById("row"+i).appendChild(ColData["index"+i+i+i]);
                     }
                     }  
                     else{
                         for(var i=1;i<=9;i++){
                             for(var j=1;j<=8;j++){
                                if(count>0){
                                    if(ColData["col"+count]!=null){
                                document.getElementById("row"+i).appendChild(ColData["col"+count]);}
                                else{
                                    j--;
                                }count--;
                                 } }
                                 if(i!=9)
                                 document.getElementById("row"+i).appendChild(ColData["index"+i+i+i]);
                        
                         }
                     }
 }
function whiteTurn(){
    getRowData(1); 
    lookForCheck( $("*[name='wk']").attr('id'),'w');  
}
function blackTurn(){
    getRowData(79);
    lookForCheck($("*[name='bk']").attr('id'),'b');   
}
$("#black").click(()=>blackTurn());
$("#white").click(()=>whiteTurn());
// Get the modal



    














