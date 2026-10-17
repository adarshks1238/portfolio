(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],C=window.CONFIG||{};

// config -> links
const mail=$('#lEmail'),ph=$('#lPhone');
if(mail){
  const v=mail.querySelector('.val');
  if(v) v.textContent=C.email; else mail.textContent=C.email;
  mail.href='mailto:'+C.email;
}
if(ph){
  const v=ph.querySelector('.val');
  if(v) v.textContent=C.phone; else ph.textContent=C.phone;
  ph.href='tel:'+C.phone.replace(/\s/g,'');
}
const lLin=$('#lLin'),lGit=$('#lGit');
if(lLin) lLin.href=C.linkedin;
if(lGit) lGit.href=C.githubProfile;
$$('.gh').forEach(a=>a.href=(C.repos&&C.repos[a.dataset.repo])||C.githubProfile);

// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('.rv,.ti').forEach(el=>io.observe(el));

// counters
$$('[data-n]').forEach(el=>{const t=+el.dataset.n,d=+el.dataset.d,s=performance.now()+700;(function f(n){const p=Math.max(0,Math.min((n-s)/1500,1));el.textContent=(t*(1-Math.pow(1-p,3))).toFixed(d);if(p<1)requestAnimationFrame(f)})(s)});

// nav
const nav=$('#nav'),links=$$('.links a'),ids=['home','about','toolkit','projects','journey','certs','contact'];
const so=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    const targetId = e.target.id === 'certs' ? 'journey' : e.target.id;
    links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+targetId));
  }
}),{rootMargin:'-45% 0px -50% 0px'});
ids.forEach(i=>{const el=document.getElementById(i);if(el)so.observe(el)});

// mobile navigation toggle
const menuBtn=$('#menuBtn');
if(menuBtn && nav){
  menuBtn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',open?'true':'false');
  });
  links.forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
  }));
}

// story: highlight first lines, light up the rest on scroll
const sp=$('#story');
if(sp){
  sp.innerHTML=sp.textContent.trim().split(/\s+/).map(w=>'<span>'+w+'</span>').join(' ');
  const words=$$('#story span'),wrap=$('#about'),tlf=$('#tlf'),tl=$('#tl'),photo=$('#heroPhoto');
  function onScroll(){
    nav.classList.toggle('sc',scrollY>30);
    if(wrap){
      const r=wrap.getBoundingClientRect(),p=Math.max(0,Math.min(1,-r.top/(r.height-innerHeight))),n=Math.round((.22+.78*Math.min(1,p*1.25))*words.length);
      words.forEach((w,i)=>w.classList.toggle('hl',i<n));
    }
    if(tl && tlf){
      const t=tl.getBoundingClientRect(),h=Math.max(0,Math.min(t.height,innerHeight*.6-t.top));
      tlf.style.height=h+'px';
    }
  }
  addEventListener('scroll',onScroll,{passive:true});
  onScroll();
}

// hero parallax + glass spotlight
const hero=$('.hero'),photo=$('#heroPhoto');
if(hero && photo){
  hero.addEventListener('pointermove',e=>{
    const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);
    photo.style.transform='translate('+x*-18+'px,'+y*-10+'px)';
  });
}
$$('.glass').forEach(g=>g.addEventListener('pointermove',e=>{
  const r=g.getBoundingClientRect();
  g.style.setProperty('--mx',e.clientX-r.left+'px');
  g.style.setProperty('--my',e.clientY-r.top+'px');
}));

// contact form -> direct email notification (FormSubmit.co / Web3Forms)
const f=$('#form'),msg=$('#msg'),btn=$('#send');
if(f){
  f.addEventListener('submit',async e=>{
    e.preventDefault();
    const d=new FormData(f);
    if(d.get('botcheck'))return;

    const name=(d.get('name')||'').trim();
    const email=(d.get('email')||'').trim();
    const message=(d.get('message')||'').trim();

    if(!name||!email||!message){
      msg.className='fmsg err';
      msg.textContent='Please fill in your name, a valid email and a message.';
      return;
    }
    if(!/^\S+@\S+\.\S+$/.test(email)){
      msg.className='fmsg err';
      msg.textContent='Please provide a valid email address.';
      return;
    }

    const prevBtnText=btn.textContent;
    btn.disabled=true;
    btn.innerHTML='<span class="spinner"></span> Sending...';
    msg.className='fmsg';
    msg.textContent='';

    const targetEmail=C.email||'adarshksundaresan12381698@gmail.com';

    try{
      // 1. Check if Vercel serverless function /api/contact is available
      let sentViaApi = false;
      try {
        const apiRes = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message })
        });
        if (apiRes.ok) {
          const apiJson = await apiRes.json().catch(() => ({}));
          if (apiJson.success) {
            msg.className = 'fmsg ok';
            msg.textContent = '✓ Thank you! Your message was sent and I will reply soon.';
            f.reset();
            sentViaApi = true;
            return;
          }
        }
      } catch (_) {
        // Fall through to client-side direct delivery
      }
      if (sentViaApi) return;

      if(C.web3formsKey && C.web3formsKey.trim()){
        d.set('access_key',C.web3formsKey.trim());
        d.set('subject','Portfolio message from '+name);
        d.set('from_name','Portfolio Website');
        const r=await fetch('https://api.web3forms.com/submit',{method:'POST',body:d});
        const j=await r.json();
        if(j.success){
          msg.className='fmsg ok';
          msg.textContent='✓ Thank you! Your message was sent and I will reply soon.';
          f.reset();
          return;
        }else{
          throw new Error(j.message||'Web3Forms error');
        }
      }

      // Default: Direct zero-config delivery via FormSubmit.co
      const r=await fetch('https://formsubmit.co/ajax/'+encodeURIComponent(targetEmail),{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({
          name:name,
          email:email,
          message:message,
          _subject:'New Portfolio inquiry from '+name,
          _template:'table',
          _captcha:'false'
        })
      });

      const j=await r.json().catch(()=>({}));
      if(r.ok && (j.success==='true'||j.success===true)){
        msg.className='fmsg ok';
        msg.textContent='✓ Thank you! Your message was sent and I will reply soon.';
        f.reset();
      }else if(j.message && j.message.toLowerCase().includes('activation')){
        msg.className='fmsg ok';
        msg.textContent='✓ Message sent! (FormSubmit activation sent to inbox to approve messages).';
        f.reset();
      }else{
        throw new Error(j.message||'Submission failed');
      }
    }catch(x){
      console.warn('Form submission notice:',x);
      msg.className='fmsg err';
      msg.innerHTML='Could not send directly. <a href="mailto:'+targetEmail+'?subject='+encodeURIComponent('Portfolio message from '+name)+'&body='+encodeURIComponent(message+'\n\nFrom: '+name+' ('+email+')')+'" style="text-decoration:underline;color:inherit;font-weight:700;">Click here to open your email app</a>, or email directly to '+targetEmail+'.';
    }finally{
      btn.disabled=false;
      btn.textContent=prevBtnText;
    }
  });
}
})();
