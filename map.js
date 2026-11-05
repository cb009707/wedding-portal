/* Floor plan + animated route. Coordinates follow the floor-plan picture (1600 x 1053). */
(function(){
  var NS='http://www.w3.org/2000/svg',R=34;
  var CFG=(window.WEDDING&&WEDDING.entrance)||{x:1442,y:503,label:'Entrance'};
  // [x, y, mode, gx]  mode 'v' = straight up/down the aisle, 'g' = down/up a gap then in from the side
  var T={
    1:[929,332,'v'],2:[1111,247,'g',1202],3:[1293,247,'g',1372],4:[1111,393,'g',1202],5:[1293,393,'g',1372],
    6:[416,326,'v'],7:[584,326,'v'],8:[498,412,'v'],
    9:[394,628,'g',470],10:[545,628,'g',616],11:[688,628,'g',767],12:[847,628,'g',982],13:[1117,628,'g',1206],14:[1295,628,'g',1372],
    15:[394,780,'g',470],16:[545,780,'g',616],17:[688,780,'g',767],18:[847,780,'g',982],19:[1117,780,'g',1206],20:[1295,780,'g',1372]
  };
  var W=1440,H=1010,VX=30,VY=10,SCALE_W=1000;
  function el(n,a,p,t){var e=document.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);if(t!=null)e.textContent=t;if(p)p.appendChild(e);return e}

  function build(host){
    host.innerHTML='';
    var svg=el('svg',{viewBox:VX+' '+VY+' '+W+' '+H,role:'img','aria-label':'Floor plan of the reception hall',class:'fp'},host);
    var d=el('defs',{},svg);
    var m=el('marker',{id:'arw',viewBox:'0 0 10 10',refX:'6',refY:'5',markerWidth:'5',markerHeight:'5',orient:'auto-start-reverse'},d);
    el('path',{d:'M0 0L10 5L0 10z',fill:'#A40A4A'},m);
    // hall
    el('rect',{x:145,y:171,width:1297,height:686,class:'hall'},svg);
    // deck
    el('rect',{x:859,y:89,width:32,height:82,class:'deckc'},svg);
    el('rect',{x:838,y:25,width:122,height:64,class:'acc'},svg);
    el('text',{x:899,y:64,class:'lb a c'},svg,'Deck');
    // top-left features
    el('rect',{x:361,y:208,width:230,height:47,class:'acc'},svg);el('text',{x:476,y:238,class:'lb a c'},svg,'Head table of four');
    el('rect',{x:638,y:180,width:230,height:80,class:'blu'},svg);el('text',{x:753,y:225,class:'lb c'},svg,'Settee back');
    el('rect',{x:210,y:286,width:107,height:74,class:'acc'},svg);el('text',{x:263,y:319,class:'lb a c sm'},svg,'Band &');el('text',{x:263,y:341,class:'lb a c sm'},svg,'photo table');
    el('line',{x1:730,y1:175,x2:730,y2:467,class:'dash'},svg);
    el('circle',{cx:677,cy:321,r:13,class:'acc'},svg);el('text',{x:677,y:354,class:'lb a c sm'},svg,'Cake table');
    el('circle',{cx:825,cy:321,r:13,class:'acc'},svg);el('text',{x:825,y:354,class:'lb a c sm'},svg,'Oil lamp');
    // pathway
    el('line',{x1:318,y1:471,x2:1440,y2:471,class:'dash'},svg);el('line',{x1:318,y1:535,x2:1440,y2:535,class:'dash'},svg);
    el('text',{x:876,y:510,class:'lb c g'},svg,'Pathway');
    // tent / dance floor
    el('text',{x:60,y:421,class:'lb a'},svg,'Outside tent');
    el('rect',{x:57,y:434,width:261,height:177,class:'tent'},svg);
    el('rect',{x:68,y:452,width:67,height:142,class:'blu w'},svg);el('text',{x:101,y:506,class:'lb c b'},svg,'DJ');el('text',{x:101,y:530,class:'lb c sm'},svg,'console');
    el('text',{x:254,y:497,class:'lb c sm'},svg,'Dance');el('text',{x:254,y:518,class:'lb c sm'},svg,'floor');
    el('rect',{x:144,y:548,width:44,height:24,rx:5,class:'acc'},svg);el('text',{x:166,y:565,class:'lb a c xs'},svg,'ELU');
    el('rect',{x:197,y:548,width:44,height:24,rx:5,class:'acc'},svg);el('text',{x:219,y:565,class:'lb a c xs'},svg,'ELU');
    el('circle',{cx:299,cy:502,r:9,fill:'#A40A4A'},svg);el('line',{x1:299,y1:512,x2:331,y2:557,class:'accl'},svg);
    el('text',{x:338,y:571,class:'lb a'},svg,'Champagne fountain');
    el('rect',{x:178,y:653,width:23,height:184,fill:'#A40A4A'},svg);
    el('text',{x:137,y:736,class:'lb a e sm'},svg,'Multimedia');el('text',{x:137,y:757,class:'lb a e sm'},svg,'outside');
    el('line',{x1:148,y1:746,x2:172,y2:746,class:'accl','marker-end':'url(#arw)'},svg);
    // bar
    el('polygon',{points:'126,923 222,923 261,951 222,979 126,979',class:'blu'},svg);el('text',{x:180,y:958,class:'lb c b'},svg,'Bar');
    [[324,919],[388,919],[451,919],[356,954],[420,954],[483,954]].forEach(function(p){el('circle',{cx:p[0],cy:p[1],r:11,class:'stool'},svg)});
    el('text',{x:527,y:942,class:'lb g sm'},svg,'Bar stools');
    // tables
    var tg=el('g',{id:'tables'},svg);
    Object.keys(T).forEach(function(n){
      var t=T[n],g=el('g',{class:'tbl','data-t':n},tg);
      el('circle',{cx:t[0],cy:t[1],r:R,class:'tc'},g);
      el('text',{x:t[0],y:t[1]+9,class:'tn'},g,n);
    });
    el('text',{x:929,y:392,class:'lb a c sm'},svg,'Family table');
    // route layer
    var rl=el('g',{id:'route'},svg);
    // entrance marker
    var e=el('g',{class:'ent'},svg);
    el('rect',{x:CFG.x-10,y:CFG.y-30,width:20,height:60,class:'door'},e);
    el('text',{x:CFG.x-18,y:CFG.y-42,class:'lb a e b'},e,CFG.label||'Entrance');
    return svg;
  }

  function routePts(n){
    var t=T[n];if(!t)return null;var E=CFG,p=[[E.x,E.y]];
    if(t[2]==='v'){p.push([t[0],E.y]);p.push([t[0],t[1]+(t[1]<E.y?R+8:-(R+8))])}
    else{var gx=t[3];p.push([gx,E.y]);p.push([gx,t[1]]);p.push([t[0]+(gx>t[0]?R+8:-(R+8)),t[1]])}
    return p;
  }

  var raf=0;
  function show(host,n,follow){
    var svg=host.querySelector('svg');if(!svg)svg=build(host);
    cancelAnimationFrame(raf);
    var rl=svg.querySelector('#route');rl.innerHTML='';
    svg.querySelectorAll('.tbl').forEach(function(g){g.classList.remove('hit');g.classList.add('dim')});
    var g=svg.querySelector('.tbl[data-t="'+n+'"]');if(!g)return;
    g.classList.remove('dim');g.classList.add('hit');g.parentNode.appendChild(g);
    var t=T[n];
    el('circle',{cx:t[0],cy:t[1],r:R,class:'pulse'},rl);el('circle',{cx:t[0],cy:t[1],r:R,class:'pulse p2'},rl);
    var pts=routePts(n),dstr='M'+pts.map(function(p){return p[0]+' '+p[1]}).join(' L');
    var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
    var base=el('path',{d:dstr,class:'rbase'},rl);
    var line=el('path',{d:dstr,class:'rline','marker-end':'url(#arw)',pathLength:100},rl);
    var flow=el('path',{d:dstr,class:'rflow'},rl);flow.style.display='none';
    var dot=el('circle',{r:13,class:'rdot'},rl),ring=el('circle',{r:22,class:'rring'},rl);
    var len=base.getTotalLength();
    var s=el('g',{class:'you'},rl);el('circle',{cx:pts[0][0],cy:pts[0][1],r:11,fill:'#A40A4A'},s);
    if(reduce){line.style.strokeDasharray='none';dot.remove();ring.remove();if(follow)follow(t[0],true);return}
    // draw the route, then loop a travelling dot
    line.style.strokeDasharray='100';line.style.strokeDashoffset='100';
    var settled=false,t0=null,DRAW=3200,TRAVEL=Math.max(3000,len*4.2),PAUSE=900;
    function frame(ts){
      if(t0===null)t0=ts;var el_=ts-t0;
      if(el_<DRAW){var k=el_/DRAW;k=1-Math.pow(1-k,3);line.style.strokeDashoffset=String(100-100*k);var pp=base.getPointAtLength(len*k);dot.setAttribute('cx',pp.x);dot.setAttribute('cy',pp.y);ring.setAttribute('cx',pp.x);ring.setAttribute('cy',pp.y);if(follow)follow(pp.x,false)}
      else{
        line.style.strokeDasharray='';line.style.strokeDashoffset='';flow.style.display='';if(!settled){settled=true;if(follow)follow(t[0],true)}
        var c=(el_-DRAW)%(TRAVEL+PAUSE),k2=Math.min(1,c/TRAVEL);k2=k2<.5?2*k2*k2:1-Math.pow(-2*k2+2,2)/2;
        var q=base.getPointAtLength(len*k2);dot.setAttribute('cx',q.x);dot.setAttribute('cy',q.y);ring.setAttribute('cx',q.x);ring.setAttribute('cy',q.y);
      }
      raf=requestAnimationFrame(frame);
    }
    raf=requestAnimationFrame(frame);
  }
  function stop(){cancelAnimationFrame(raf)}
  window.TableMap={build:build,show:show,stop:stop,tables:T,vb:{x:VX,y:VY,w:W,h:H},R:R,routePts:routePts};
})();