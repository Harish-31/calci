sum=0;
str="";
function by_add(){
    a=parseInt(document.getElementById("t1").value);
    sum+=a;
    if(str.length==0){
        str+=a;
    }else{
         str+= ("+" +a);
     }
     document.getElementById("t2").value=str;
     document.getElementById("t3").value=sum;
    }


function by_sub(){
    a=parseInt(document.getElementById("t1").value);
    sum-=a;
    if(str.length==0){
        str+=a;
    }else{
         str+= ("-" +a);
    }
    document.getElementById("t2").value=str;
    document.getElementById("t3").value=sum;
}


function by_mul(){
     a=parseInt(document.getElementById("t1").value);
    sum*=a;
    if(str.length==0){
        str+=a;
     }else{
       str+= ("*" +a);
    }
     document.getElementById("t2").value=str;
     document.getElementById("t3").value=sum;
}

    
function by_div(){
    a=parseInt(document.getElementById("t1").value);
    sum/=a;
    if(str.length==0){
        str+=a;
    }else{
        str+= ("/" +a);
    }
     document.getElementById("t2").value=str;
     document.getElementById("t3").value=sum;
}
                

