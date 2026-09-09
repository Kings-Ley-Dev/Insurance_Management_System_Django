
document.addEventListener('DOMContentLoaded', function(){
  const sidebar=document.querySelector('.sidebar');
  const menu=document.querySelector('.mobile-menu');
  const overlay=document.querySelector('.sidebar-overlay');
  if(menu&&sidebar){
    menu.addEventListener('click',()=>{sidebar.classList.toggle('open'); if(overlay) overlay.classList.toggle('show');});
    if(overlay) overlay.addEventListener('click',()=>{sidebar.classList.remove('open');overlay.classList.remove('show');});
  }
  const navToggle=document.querySelector('.nav-toggle');
  const navLinks=document.querySelector('.nav-links');
  if(navToggle&&navLinks) navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
});
