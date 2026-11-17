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
  }
  // ---- photo locket opening: split, petal burst, flap lifts, photo grows then settles ----
  var lkTimers=[];function T(f,ms){lkTimers.push(setTimeout(f,ms))}
  function burst(n,cx,cy){
    var cols=(getComputedStyle(document.documentElement).getPropertyValue('--pet')||'#fff,#e29ab8').split(',').map(function(x){return x.trim()});
    for(var i=0;i<n;i++){var s=document.createElement('span');s.className='bp';
      var a=Math.random()*Math.PI*2,d=90+Math.random()*190;
      s.style.left=cx+'px';s.style.top=cy+'px';s.style.setProperty('--dx',(Math.cos(a)*d)+'px');s.style.setProperty('--dy',(Math.sin(a)*d+60)+'px');s.style.setProperty('--r',(Math.random()*720-360)+'deg');s.style.setProperty('--c',cols[i%cols.length]);
      document.body.appendChild(s);setTimeout(function(el){el.remove()},1700,s)}
  }
  function sparks(n,cx,cy){
    for(var i=0;i<n;i++){var s=document.createElement('span');s.className='sp';
      var a=Math.random()*Math.PI*2,d=70+Math.random()*230;
      s.style.left=cx+'px';s.style.top=cy+'px';s.style.setProperty('--dx',Math.cos(a)*d+'px');s.style.setProperty('--dy',Math.sin(a)*d+'px');s.style.setProperty('--s',(.5+Math.random()*1.1).toFixed(2));s.style.animationDelay=(Math.random()*.25)+'s';
      document.body.appendChild(s);setTimeout(function(el){el.remove()},1800,s)}
  }
  function ripple(cx,cy,delay){setTimeout(function(){var r=document.createElement('span');r.className='rip';r.style.left=cx+'px';r.style.top=cy+'px';document.body.appendChild(r);setTimeout(function(){r.remove()},1400)},delay)}
  if(intro&&!reduce){ // ambient twinkles on the envelope
    for(var k=0;k<16;k++){var e=document.createElement('i');e.className='is';e.style.left=(5+Math.random()*90)+'%';e.style.top=(4+Math.random()*92)+'%';e.style.setProperty('--t',(2.4+Math.random()*2.6).toFixed(1)+'s');e.style.setProperty('--dl',(Math.random()*3).toFixed(1)+'s');var z=6+Math.random()*10;e.style.width=e.style.height=z+'px';intro.appendChild(e)}
  }
  function openIt(){
    if(opened)return;opened=true;
    seal.disabled=true;
    var grow=document.getElementById('grow');
    if(reduce||!grow){showPage();return}
    var r=seal.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
    seal.classList.add('go');burst(30,cx,cy);sparks(26,cx,cy);ripple(cx,cy,0);ripple(cx,cy,260);
    T(function(){intro.classList.add('open')},300);
    T(function(){
      var fl=document.getElementById('flash');if(fl){fl.classList.remove('on');fl.offsetWidth;fl.classList.add('on')}
      grow.style.display='block';grow.style.clipPath='circle(0 at '+cx+'px '+cy+'px)';grow.offsetWidth;
      grow.style.transition='clip-path 1s cubic-bezier(.6,0,.2,1)';grow.style.clipPath='circle(150% at '+cx+'px '+cy+'px)';
    },1400);
    T(function(){
      showPage();                                   // page now sits underneath the full-screen photo
      var target=page.querySelector('.photo');
      if(target){                                   // settle into the arch
        target.style.transition='none';target.classList.add('in');
        var b=target.getBoundingClientRect();
        grow.style.transition='none';grow.style.clipPath='none';grow.style.left='0';grow.style.top='0';grow.style.width='100vw';grow.style.height='100vh';grow.offsetWidth;
        grow.style.transition='all .95s cubic-bezier(.65,0,.2,1)';
        grow.style.left=b.left+'px';grow.style.top=b.top+'px';grow.style.width=b.width+'px';grow.style.height=b.height+'px';grow.style.borderRadius='150px 150px 4px 4px';
        T(function(){grow.style.display='none';target.style.transition=''},1000);
      }else{                                        // no arch on this page: gently fade into it
        grow.style.transition='opacity .9s ease';grow.style.opacity='0';
        T(function(){grow.style.display='none'},950);
      }
    },2500);
  }

  var skip=!intro||location.hash==='#open';
  if(skip){showPage()}else{seal.addEventListener('click',openIt)}
})();