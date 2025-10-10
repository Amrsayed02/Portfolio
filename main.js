document.addEventListener('DOMContentLoaded', function() {
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
  const reveals = document.querySelectorAll('.section, .card, .project-card');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('show'); } });
  },{threshold:0.12});
  reveals.forEach(r => { r.classList.add('reveal'); obs.observe(r); });
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){ e.preventDefault(); const target=document.querySelector(this.getAttribute('href')); if(target) target.scrollIntoView({behavior:'smooth', block:'start'}); });
  });
});
