(function(){
  var n=0;
  // Pakk hvert .sp-element inn bak en knapp
  document.querySelectorAll('.sp').forEach(function(el){
    var id='sp'+(++n);
    var btn=el.nextElementSibling&&el.nextElementSibling.querySelector&&el.nextElementSibling.querySelector('.spbtn');
    if(btn){el.nextElementSibling.remove();}
    btn=document.createElement('button');btn.type='button';btn.className='spbtn';
    el.classList.add('spc');el.id=id;el.hidden=true;
    btn.setAttribute('aria-controls',id);btn.setAttribute('aria-expanded','false');btn.textContent='🔒 Vis spoiler';
    el.parentNode.insertBefore(btn,el);
    btn.addEventListener('click',function(){var o=el.hidden;el.hidden=!o;btn.setAttribute('aria-expanded',String(o));btn.textContent=o?'🔓 Skjul spoiler':'🔒 Vis spoiler';});
  });
  document.querySelectorAll('#filter button').forEach(function(b){b.addEventListener('click',function(){
    document.querySelectorAll('#filter button').forEach(function(x){x.setAttribute('aria-pressed',String(x===b));});
    document.querySelectorAll('#rute li').forEach(function(li){li.classList.toggle('skjult',b.dataset.f!=='alle'&&li.dataset.r!==b.dataset.f);});
  });});
  var s=document.getElementById('sok'),info=document.getElementById('sokinfo');
  s.addEventListener('input',function(){var q=s.value.trim().toLowerCase(),t=0;
    document.querySelectorAll('section.s').forEach(function(sec){
      var items=sec.querySelectorAll('li,tr,p,details');var hit=!q||sec.textContent.toLowerCase().indexOf(q)>=0;
      sec.classList.toggle('skjult',!hit);if(hit&&q)t++;
    });info.textContent=q?(t+' seksjoner treff (spoilere forblir skjult)'):'';});
})();
