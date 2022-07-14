let myButtom = document.getElementById('board')
let scoreTitle = document.querySelector('.title')

let posX;
let posY;
let newX;
let newY;

myButtom.addEventListener('mousemove', function (event){
    posX = event.pageX
    posY = event.pageY
    
    if(posX){
        newX = Math.random() * 800
        newY = Math.random() * 800  

        newX = Math.floor(newX)
        newY = Math.floor(newY)
        posX = newX
        posY = newY

        myButtom.style.marginLeft = posX + 'px'
        myButtom.style.marginTop = posY + 'px' 
               console.log(newX, posY)
    }
})
let score = 0

myButtom.addEventListener('click', function(){
    alert("nice you go me :))) ")
    

    scoreTitle.innerHTML += ++score +  ", "

    
})

