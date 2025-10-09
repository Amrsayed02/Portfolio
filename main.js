
document.addEventListener('DOMContentLoaded', function(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  },{threshold:0.12});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
  const btn = document.getElementById('navToggle');
  if(btn){
    btn.addEventListener('click', ()=>{
      const links = document.getElementById('navLinks');
      if(links.style.display === 'flex'){ links.style.display='none'; }
      else{ links.style.display='flex'; links.style.flexDirection='column'; links.style.gap='12px'; }
    });
  }
});
