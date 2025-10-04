'use strict';
const inpEl=document.querySelector('#inp');
const btnEl=document.querySelector('#serch');
const showEl=document.querySelector('#show-card');
const showBorderEl=document.querySelector('.card-border');
inpEl.addEventListener('change',async(e)=>
{try{
               const res=await fetch(`https://restcountries.com/v3.1/name/${e.target.value}?fullText=true`)
               const data=await res.json()
               showEl.innerHTML=`<div class='card'><img src=${data[0].flags.svg}></img><h2>${data[0].name.common}</h2></div> `
               const borders=await fetch(`https://restcountries.com/v3.1/alpha?codes=${data[0].borders}`);
               const bordersData=await borders.json();
               bordersData.map(e=>{
                showBorderEl.innerHTML+=`</br><div class='card-border'><img src=${e.flags.svg}></img><p>${e.name.common}</p></div>`
               })
    }
    catch(error){alert(error)}
})