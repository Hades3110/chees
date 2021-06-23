let x1=0 , x2 = 0 , y1 = 0 , y2 = 0 , lenghtx = 0 , lenghty = 0;
function cordinate(a , b){
    if(x1==0){
        x1 = a;
        y1 = b;
    }else x2 = a;
        y2 = b
}
function answer(){
    if((x1!=0) && (x2!=0)){
        lenghtx = x1 - x2;
        lenghty = y1 - y2;
        if(lenghtx**2 + lenghty**2==5){
            alert("«Dzin karox e 1 qaylov hasnel");
        }else alert("«Dzin CHI karox 1 qaylov hasnel");
        location.reload()
    }
}