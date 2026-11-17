/* "Our moments" gallery + lightbox. Photos live in moment-1..5.jpg */
(function(){
  var host=document.getElementById('gal');if(!host)return;
  var P=[
    {s:'moment-1.jpg',a:'Shehani and Dinod walking arm in arm'},
    {s:'moment-3.jpg',a:'Shehani and Dinod dancing in the garden'},
    {s:'moment-4.jpg',a:'Shehani and Dinod, forehead to forehead'},
    {s:'moment-5.jpg',a:'Dinod helping Shehani with her sandal'},
    {s:'moment-2.jpg',a:'Shehani and Dinod on the balcony under a chandelier'}
  ];
  /* photos are looked for in photos/ first, then in the main folder */
  function src(f,alt){return 'photos/'+f+'?v=9'}
  function im(i,cls){return '<button type="button" class="gimg '+cls+' rv" data-i="'+i+'" aria-label="Open photo '+(i+1)+'"><img src="'+src(P[i].s)+'" onerror="if(!this.dataset.f){this.dataset.f=1;this.src=\''+P[i].s+'?v=9\'}" alt="'+P[i].a+'" loading="lazy" decoding="async"></button>'}
  host.innerHTML=
    '<div class="lab rv">OUR MOMENTS</div><div class="ttl rv" style="--d:.08s">A little glimpse of us</div><div class="lead rv" style="--d:.14s">Two hearts, one beautiful journey</div>'+
    '<div class="gwrap">'+im(0,'arch')+
    '<div class="gpair">'+im(1,'')+im(2,'top')+'</div>'+
    '<div class="gpair rev">'+im(3,'top')+im(4,'top')+'</div>'+
    '<div class="gcap rv">Tap a photo to see it bigger</div></div>';
  var lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Photo viewer');
  lb.innerHTML='<img alt=""><button class="x" type="button" aria-label="Close">&times;</button><button class="pv" type="button" aria-label="Previous">&lsaquo;</button><button class="nx" type="button" aria-label="Next">&rsaquo;</button><div class="ct"></div>';
  document.body.appendChild(lb);
  var img=lb.querySelector('img'),ct=lb.querySelector('.ct'),cur=0;
  function show(i){cur=(i+P.length)%P.length;img.onerror=function(){if(!img.dataset.f){img.dataset.f=1;img.src=P[cur].s+'?v=9'}};img.dataset.f='';img.src=src(P[cur].s);img.alt=P[cur].a;ct.textContent=(cur+1)+' / '+P.length}
  function open(i){show(i);lb.classList.add('on');requestAnimationFrame(function(){lb.classList.add('vis')});document.documentElement.style.overflow='hidden'}
  function close(){lb.classList.remove('vis');setTimeout(function(){lb.classList.remove('on')},300);document.documentElement.style.overflow=''}
  host.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.gimg');if(b)open(+b.getAttribute('data-i'))});
  lb.querySelector('.x').onclick=close;lb.querySelector('.pv').onclick=function(e){e.stopPropagation();show(cur-1)};lb.querySelector('.nx').onclick=function(e){e.stopPropagation();show(cur+1)};
  lb.addEventListener('click',function(e){if(e.target===lb||e.target===img)close()});
  document.addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
  var sx=null;lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  lb.addEventListener('touchend',function(e){if(sx===null)return;var d=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(d)>50)show(cur+(d<0?1:-1))},{passive:true});
})();