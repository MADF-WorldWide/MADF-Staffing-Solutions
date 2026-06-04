const fav='assets/favicon.svg';
function ensureIcon(rel,href,type){if(!document.querySelector('link[rel="'+rel+'"]')){let l=document.createElement('link');l.rel=rel;if(type)l.type=type;l.href=href;document.head.appendChild(l);}}
ensureIcon('icon',fav,'image/svg+xml');
ensureIcon('shortcut icon',fav,'image/svg+xml');
ensureIcon('apple-touch-icon',fav,'image/svg+xml');
const polish=document.createElement('style');
polish.textContent='fieldset{border:0!important;border-radius:22px!important;box-shadow:0 16px 45px rgba(16,32,51,.1)!important;background:#fff!important;padding:1.55rem!important;margin:0!important;overflow:hidden!important}legend{display:block!important;float:none!important;width:100%!important;margin:0 0 1.25rem 0!important;padding:0!important;font-size:1.25rem!important;font-weight:1000!important;line-height:1.15!important;color:#102033!important}.grid,.two,.three{align-items:start!important}.card{align-self:start!important}input,select,textarea{min-width:0!important}';
document.head.appendChild(polish);
const EMAIL='melissasteele462@outlook.com';
const enc=s=>encodeURIComponent(s||'');
const menu=document.querySelector('.menu'),tog=document.querySelector('.toggle');
if(tog)tog.addEventListener('click',()=>{let open=menu.classList.toggle('open');tog.setAttribute('aria-expanded',String(open));});
function collect(f){let d=new FormData(f),g={},lines=[];for(const [k,v] of d.entries()){let c=String(v).trim();if(!c)continue;(g[k]||(g[k]=[])).push(c);}lines.push(f.dataset.name||'MADF WorldWide Form');lines.push('Submitted from: '+location.href);lines.push('Date: '+new Date().toLocaleString());lines.push('----------------------------------------');Object.entries(g).forEach(([k,v])=>lines.push(k+': '+v.join(', ')));return lines.join('\n');}
async function copy(t){try{await navigator.clipboard.writeText(t);alert('Copied to clipboard.');}catch(e){alert('Copy not available. Select the preview text and copy it manually.');}}
document.querySelectorAll('form.smart').forEach(f=>{f.addEventListener('submit',e=>{e.preventDefault();let b=collect(f),o=f.querySelector('output');if(o){o.textContent=b+'\n\nSend to: '+EMAIL;o.classList.add('show');}let url='mailto:'+EMAIL+'?subject='+enc(f.dataset.subject||'MADF WorldWide Website Form')+'&body='+enc(b);if(url.length>1800){alert('Your form is detailed. Copy the preview text and email it to Melissa Steele.');}else{location.href=url;}});let c=f.querySelector('[data-copy]');if(c)c.addEventListener('click',()=>copy(collect(f)));});
const title='MADF WorldWide recruitment agency',text='Apply for recruitment, sourcing, sales and staffing opportunities with MADF WorldWide.',pageUrl='https://madf-worldwide.github.io/MADF-Staffing-Solutions/';
document.querySelectorAll('[data-share]').forEach(a=>{let m={linkedin:'https://www.linkedin.com/sharing/share-offsite/?url='+enc(pageUrl),facebook:'https://www.facebook.com/sharer/sharer.php?u='+enc(pageUrl),x:'https://twitter.com/intent/tweet?text='+enc(text)+'&url='+enc(pageUrl),whatsapp:'https://wa.me/?text='+enc(text+' '+pageUrl),email:'mailto:?subject='+enc(title)+'&body='+enc(text+'\n\n'+pageUrl)};a.href=m[a.dataset.share]||pageUrl;if(a.dataset.share!=='email'&&a.dataset.share!=='whatsapp')a.target='_blank';a.rel='noopener';});
document.querySelectorAll('[data-native]').forEach(b=>b.addEventListener('click',async()=>{if(navigator.share)await navigator.share({title:title,text:text,url:pageUrl});else copy(text+' '+pageUrl);}));
