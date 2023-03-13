import {loadMenu} from './menu.js'; 
import {loadHome} from './home.js';
import {loadContact} from './contact.js'; 

function loadHeader(){

    const header=document.createElement('div');
    content.appendChild(header);
    header.classList.add('header');

    const title1=document.createElement('div');
    header.appendChild(title1);
    title1.classList.add('title1');
    title1.textContent='Aralık Sonu OCAKBAŞI';

    header.appendChild(loadNav());

    return header;
}

function loadNav(){

    const buttons=document.createElement('nav');
    buttons.classList.add('buttons');
    
    const home=document.createElement('button');
    const menu=document.createElement('button');
    const contact=document.createElement('button');
  
    buttons.appendChild(home); 
    buttons.appendChild(menu); 
    buttons.appendChild(contact); 

    home.textContent='Home';
    menu.textContent='Menu';
    contact.textContent='Contact';

    home.classList.add('home');
    menu.classList.add('menu');
    contact.classList.add('contact');


    return buttons;
}

function setActiveButton(button){
    const buttons=document.querySelectorAll('nav button');

    buttons.forEach((btn)=>{
        if(btn===button){
            button.classList.add('active');
        }else{
            btn.classList.remove('active');
        }
    });
}

function deleteMiddle(){

    const elements = document.querySelectorAll("[class*='-middle']");

    elements.forEach((el) => {
        el.remove();
    });
} 

function loadMain(){
    
    const home=document.querySelector('.home');
    const menu=document.querySelector('.menu');
    const contact=document.querySelector('.contact');

    home.addEventListener('click',()=>{
        if(home.classList.contains('active')){
            return;
        }else{       
            setActiveButton(home);
            deleteMiddle();
            loadHome(); 
        } 
    });

    menu.addEventListener('click',()=>{
        if(menu.classList.contains('active')){
            return;
        }else{
            setActiveButton(menu);
            deleteMiddle();  
            loadMenu(); 
        } 
    });

    contact.addEventListener('click',()=>{
        if(contact.classList.contains('active')){
            return;
        }else{
            setActiveButton(contact);
            deleteMiddle();
            loadContact();  
        } 
    });
}

function loadFooter(){
    const footer=document.createElement('div');
    footer.classList.add('footer');
    footer.textContent='Copyright © 2023 Yıldırım Mert Gökçe';
    return footer;
}
function loadWebsite(){

    const content=document.getElementById('content');
    content.appendChild(loadHeader()); 

    const home=document.querySelector('.home');
    setActiveButton(home);  
    loadHome();  
    
    loadMain();

    content.appendChild(loadFooter()); 
   
}

export {loadWebsite,loadNav};