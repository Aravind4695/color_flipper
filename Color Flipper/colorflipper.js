const color = document.querySelector('h3')
const button = document.querySelector('button')
button.addEventListener('click',addno)
function addno(){
    let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let code ='#'
    for(i=0;i<6;i++){
        const num =Math.floor(Math.random()*16)
        code += arr[num]
    }
    var colorno = code;
    color.innerHTML = colorno; 
    document.getElementsByClassName('container')[0].style.backgroundColor= colorno;    
}