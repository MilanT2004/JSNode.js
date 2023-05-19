import './style.css'

const redBtn= document.querySelector('.red');
const blueBtn= document.querySelector('.blue');

redBtn.addEventListener('click', () =>{
  fetch('http://localhost:3000/red',{
    method: 'PUT',
    headers:{

    }
  })
  .then((response)=>response.json)
  .then((response)=> console.log(response))
  .catch((err)=> console.log(err));
  
})
blueBtn.addEventListener('click',()=>{
  fetch('http://localhost:3000/blue',{
    method: 'PUT',
  })
  .then((response)=>response.json)
  .then((response)=> console.log(response))
  .catch((err)=> console.log(err));
})
