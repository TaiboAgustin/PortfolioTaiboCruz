const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector ('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () =>{
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click',() =>{
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0)
})

const toggleBtn = document.getElementById('toggle-btn');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});