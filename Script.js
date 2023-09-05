var flag1=false;
var flag2=false;
var flag3=false;
var element1 = document.getElementById("1");
var element2 = document.getElementById("2");
var element3 = document.getElementById("3");

function AddNew(){
    element1.style.display="block";
    if(flag2===true){
        element2.style.display="none";
        flag2=false;
    }
    if(flag3===true){
        element3.style.display="none";
        flag3=false;
    }
    flag1=true;
}
function searchforp(){
    element2.style.display="block";
    if(flag1===true){
        element1.style.display="none";
        flag1=false;
    }
    if(flag3===true){
        element3.style.display="none";
        flag3=false;
    }
    flag2=true;
}