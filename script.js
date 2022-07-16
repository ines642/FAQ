const qst=document.querySelectorAll('.qst')
const cntr =document.querySelector('.container')
const r=document.querySelectorAll('.respens')
const QR=document.querySelectorAll('.QR')
var i;
console.log(r);console.log(qst);console.log(QR);console.log(r[0]);

hide =()=>{
    r[0].style.display='none'
    r[1].style.display='none'
    r[2].style.display='none'
}

hide()
qst[0].addEventListener('click',(e)=> {
    console.log(e.target.getAttribute('class')+'is clicked')
    r[0].style.display='block'
    r[1].style.display='none'
    r[2].style.display='none'

})

qst[1].addEventListener('click',(e)=> {
    console.log(e.target.getAttribute('class')+'is clicked')
    r[1].style.display='block'
    r[0].style.display='none'
    r[2].style.display='none'
})

qst[2].addEventListener('click',(e) => {
    console.log(e.target.getAttribute('class')+'is clicked')
    r[2].style.display = 'block'
    r[1].style.display='none'
    r[0].style.display='none'
})

window.addEventListener('mouseout',(e)=>{
    if (e.target===cntr) {hide()} })