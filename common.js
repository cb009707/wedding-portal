(function(){
  var intro=document.getElementById('intro'),page=document.getElementById('page'),seal=document.getElementById('seal'),opened=false;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function watch(){
    var els=document.querySelectorAll('.rv');
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
    els.forEach(function(e){io.observe(e)});
  }
  function showPage(){
    if(intro)intro.style.display='none';
    page.classList.add('show');
    window.scrollTo(0,0);
    watch();
    try{sessionStorage.setItem('sd-open','1')}catch(e){}
  }
  function openIt(){
    if(opened)return;opened=true;
    seal.disabled=true;
    if(reduce){showPage();return}
    intro.classList.add('open');
    setTimeout(function(){intro.classList.add('leave')},2100);
    setTimeout(showPage,2900);
  }
  var skip=!intro||location.hash==='#open';
  try{if(sessionStorage.getItem('sd-open')==='1')skip=true}catch(e){}
  if(skip){showPage()}else{seal.addEventListener('click',openIt)}
})();
