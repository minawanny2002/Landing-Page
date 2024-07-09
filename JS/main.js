const closeBtn1 = document.querySelector('.xmark-1');
const closeBtn2 = document.querySelector('.xmark-2');
const label1 = document.querySelector('.inp-1');
const label2 = document.querySelector('.inp-2');

closeBtn1.addEventListener('click' , function(){
    label1.value="";
})
closeBtn2.addEventListener('click' , function(){
    label2.value="";
})