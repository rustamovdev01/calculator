let a = document.querySelector(".first_val");
let b = document.querySelector(".second_val");
let pilus = document.querySelector(".pilus");
let minus = document.querySelector(".minus");
let kopaytiruv = document.querySelector(".kopaytiruv");
let boluv = document.querySelector(".boluv");
let foiz = document.querySelector(".foiz");
let degree = document.querySelector(".degree");
let result=document.querySelector('.result')
function ayirish(){
    result.innerHTML=+a.value-Number(b.value)
}
function qoshish(){
    result.innerHTML=+a.value+Number(b.value)
}
function bolish(){
    result.innerHTML=+a.value/Number(b.value)
}
function kopayish(){
    result.innerHTML=+a.value*Number(b.value)
}
function foiz_l(){
    result.innerHTML=(+a.value*(+b.value))/100
}
function daraja(){
    result.innerHTML=Number(a.value)**Number(b.value)
}
minus.addEventListener('click',ayirish)
pilus.addEventListener('click',qoshish)
boluv.addEventListener('click',bolish)
kopaytiruv.addEventListener('click',kopayish)
foiz.addEventListener('click',foiz_l)
degree.addEventListener('click',daraja)