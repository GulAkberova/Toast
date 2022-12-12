let add=document.getElementById('add-button')
let clear=document.getElementById('clear-button')
let toasts=document.getElementById('toasts')
let success=document.getElementById('success')
let error=document.getElementById('error')
let messagee=document.getElementById('message-content')
console.log(success.checked)



 add.addEventListener('click',()=>{
    console.log("gtfguh",messagee.value)
    setTimeout(() => {
        
    }, 1000);


   if(success.checked){
      let div=document.createElement('div')
    div.classList.add('toast')
    div.classList.add('success-toast')

    let p=document.createElement('p')
    p.classList.add('message')
     p.innerText='success'
    if(messagee.value.length>0){
        p.innerText=messagee.value
    }


    
    div.appendChild(p)

    let button=document.createElement('button')
    button.classList.add('cancel-button')
    button.innerText=('X')
    div.appendChild(button)
    toasts.appendChild(div)
    console.log(button)
    button.addEventListener('click',()=>{
        button.parentElement.remove()

    })
     setTimeout(() => {
       button.parentElement.remove()
        
    }, 3000);

   }else{
       let div=document.createElement('div')
    div.classList.add('toast')
    div.classList.add('error-toast')

    let p=document.createElement('p')
    p.classList.add('message')
       p.innerText='error'
    if(messagee.value.length>0){
        p.innerText=messagee.value
    }

    div.appendChild(p)

    let button=document.createElement('button')
    button.classList.add('cancel-button')
   button.innerText=('X')
    div.appendChild(button)
    toasts.appendChild(div)
      button.addEventListener('click',()=>{
        button.parentElement.remove()

    })
    setTimeout(() => {
       button.parentElement.remove()
        
    }, 3000);
   }
   
  
})

 clear.addEventListener('click',()=>{
    console.log(toasts)
    toasts.innerHTML=' '
})
