/*! Inqelio main script v1.0.0 - Ferhat Dz */
(function(){
'use strict';
if(window.__inqBoot)return;window.__inqBoot=1;
var D=document,H=D.documentElement,W=window,B0=D.body;
var WARNED={};
function warn(ctx,err){try{if(WARNED[ctx]||!W.console||!console.warn)return;WARNED[ctx]=1;var m=err&&err.message;console.warn('[Inqelio] '+ctx+': '+((err&&err.name)||'error')+(/^\d{3}$/.test(String(m))?' '+m:''))}catch(x){}}
function guard(ctx,fn){try{return fn()}catch(e){warn(ctx,e)}}
function $(s,c){return (c||D).querySelector(s)}
function $$(s,c){return Array.prototype.slice.call((c||D).querySelectorAll(s))}
function E(t,c,h){var e=D.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){}return null}
function rdj(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){warn('storage-json',e);return null}}
function rm(e){if(e&&e.parentNode)e.parentNode.removeChild(e)}
var AR=/[\u0600-\u06FF]/;
function en(t){t=String(t||'');if(t.indexOf('|')<0)return t.trim();var p=t.split('|').map(function(x){return x.trim()}).filter(function(x){return x&&!AR.test(x)});return p[0]||t.trim()}
var reduce=W.matchMedia&&W.matchMedia('(prefers-reduced-motion: reduce)').matches;
var IC={
tech:'<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
health:'<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/><path d="M6 12h3l1.5-3 3 6 1.5-3h3"/>',
finance:'<path d="M4 21V12M10 21V5M16 21v-6M2 21h20"/><path d="M13 5l4 4 5-6"/>',
business:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
play:'<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
doc:'<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 16h6"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
swap:'<path d="M7 4L3 8l4 4M3 8h15M17 20l4-4-4-4M21 16H6"/>',
pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
chev:'<path d="M9 5l7 7-7 7"/>',
x:'<path d="M6 6l12 12M18 6L6 18"/>',
home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
book:'<path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
brain:'<path d="M9.5 4A3 3 0 0 0 6.5 7v.3A3.5 3.5 0 0 0 4 10.7a3.4 3.4 0 0 0 1.3 2.7A3.5 3.5 0 0 0 7 19a3 3 0 0 0 5-1.5V5.5A1.5 1.5 0 0 0 9.5 4z"/><path d="M14.5 4a3 3 0 0 1 3 3v.3a3.5 3.5 0 0 1 2.5 3.4 3.4 3.4 0 0 1-1.3 2.7A3.5 3.5 0 0 1 17 19a3 3 0 0 1-5-1.5"/>',
calc:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 11h2M14 11h2M8 15h2M14 15h2M8 18.5h2M14 18.5h2"/>',
rss:'<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',
bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
gift:'<path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
nospam:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6M4 4l16 16"/>',
refresh:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
send:'<path d="M21 3L3 10.5l7 2.5 2.5 7z"/><path d="M10 13l11-10"/>',
bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
sprout:'<path d="M12 21v-9M12 12c0-4 3-6 7-6 0 4-3 6-7 6zM12 14c0-3-2-5-6-5 0 3 2 5 6 5z"/>'
};
function sv(k,c){return '<svg'+(c?' class="'+c+'"':'')+' viewBox="0 0 24 24" aria-hidden="true" focusable="false">'+(IC[k]||IC.star)+'</svg>'}
var C={logo:'','logo.height':'40',hero:'on','hero.image':'','hero.eyebrow':'','info.news':'on','info.news.title':'Subscribe to Our Newsletter','info.news.text':'Get the latest articles in your inbox','info.news.url':'','trending.label':'Trending','hero.title':'Better Information.','hero.title2':'A Brighter Future.',
'hero.text':'Inqelio is your trusted platform for high-quality articles on technology, health, finance and more. Discover insights, ideas and practical knowledge to improve your life.','hero.cta':'Explore Articles','hero.cta.url':'/search',
sponsored:'on','sponsored.title':'Sponsored News','sponsored.label':'Sponsored, Sponsored News, Partner, Promoted',topics:'on','topics.title':'Popular Topics','topics.count':'10','footer.email':'',sections:'on','section.count':'3','section.min':'1','section.dedupe':'on',reels:'on','reels.title':'Reels & Short Videos','reels.tagline':'Quick insights, Big ideas.','reels.auto':'on','reels.min':'3','latest.title':'Latest Articles','latest.tagline':'Fresh perspectives. Always.',
loadmore:'on','latest.dedupe':'off','block.topbar':'on','block.promo':'on','block.popular':'on','block.tools':'on','block.labels':'on','block.touch':'on','block.newsletter':'on','block.follow':'on','sticky.header':'on','reading.mode':'on',toc:'on','toc.min':'3',fontsize:'on',progress:'on',share:'on',postnav:'on',authorbox:'on',tags:'on',related:'on','related.count':'4','ad.paragraph':'3','ad.every':'0','ad.lazy':'on',
'color.brand':'','color.accent':'','width':'','radius':'','img.max':'','font.size':'','font.min':'14','font.max':'26','font.step':'1.5','line.height':'','remote.id':'','remote.blog':'','panel.src':'',
'social.facebook':'','social.x':'','social.instagram':'','social.youtube':'','social.telegram':'','social.whatsapp':'','social.linkedin':'','social.rss':'',
'newsletter.action':'','newsletter.field':'email','newsletter.heading':'Newsletter','newsletter.title':'Get the latest articles and insights directly to your inbox.','newsletter.placeholder':'Enter your email address','newsletter.button':'Subscribe',
'promo.title':'Small steps today.','promo.title2':'Big changes tomorrow.','promo.url':'/search','promo.image':'','footer.cta':'Better knowledge.','footer.cta2':'Brighter future.','footer.cta.url':'/search',
copyright:'\u00a9 {year} {title}. All rights reserved.','developer.label':'Developed by',developer:'Ferhat Dz','developer.url':''};
var MULTI={video:'reel',reel:'reel',section:'section',stat:'stat',topic:'topic',info:'info'},SECS=[],cfg0=$('#hyp-cfg');
function unsafeKey(k){return k==='__proto__'||k==='constructor'||k==='prototype'}
function plain(o){return o&&typeof o==='object'&&!Array.isArray(o)?o:null}
function isHttp(u){return /^https?:\/\/[^\/\\\s]/i.test(String(u||''))}
function isHttps(u){try{var x=new URL(String(u||''));return x.protocol==='https:'&&!x.username&&!x.password}catch(e){return false}}
function sameOrigin(u){try{return new URL(String(u||''),location.href).origin===location.origin}catch(e){return false}}
function cssOk(v){return v.length<=60&&!/[;{}<>\\@]|url\s*\(|expression|import/i.test(v)}
function dataImg(s){return /^data:image\/(?:webp|png|jpe?g|gif);base64,[A-Za-z0-9+\/=]+$/.test(String(s||''))?s:''}
function imgUrl(u){u=safeUrl(u);return u&&u.charAt(0)!=='#'&&!/^mailto:/i.test(u)?u:''}
function parseCfg(t,T,S){String(t||'').split('\n').forEach(function(l){l=l.replace(/\s+#(\s.*)?$/,'').trim();if(!l||l.charAt(0)==='#')return;var i=l.indexOf('=');if(i<1)return;var k=l.slice(0,i).trim().toLowerCase(),v=l.slice(i+1).trim();if(unsafeKey(k)||k.indexOf('__')===0)return;
if(Object.prototype.hasOwnProperty.call(MULTI,k)){var m=T.__m=T.__m||{},mk=MULTI[k];(m[mk]=m[mk]||[]).push(v)}else T[k]=v})}
function decEnt(t){t=String(t||'');if(t.indexOf('&')<0)return t;try{var d=document.createElement('textarea');d.innerHTML=t.replace(/</g,'&lt;');return d.value}catch(e){return t}}
if(cfg0)parseCfg(decEnt(cfg0.textContent),C,SECS);
var RM=plain(rdj('hypRemote')),DV=plain(rdj('hypOv')),RID=String((DV&&DV['remote.id']!==undefined?DV['remote.id']:C['remote.id'])||'').trim();
if(RID&&RM&&RM.id===RID&&plain(RM.d)){for(var rk in RM.d){if(unsafeKey(rk))continue;if(rk==='__m'){if(plain(RM.d.__m)){C.__m=C.__m||{};for(var mk2 in RM.d.__m)if(!unsafeKey(mk2)&&Array.isArray(RM.d.__m[mk2]))C.__m[mk2]=RM.d.__m[mk2]}}else if(rk!=='__sec'&&rk!=='panel.src'&&rk.indexOf('remote.')!==0&&typeof RM.d[rk]==='string')C[rk]=RM.d[rk]}if(Array.isArray(RM.d.__sec)&&RM.d.__sec.length)SECS=RM.d.__sec}
else if(RM&&!RID){try{localStorage.removeItem('hypRemote')}catch(e){}}
(function(){if(!cfg0||cfg0.getAttribute('data-sw')!=='1')return;var S={};$$('[data-fsw]').forEach(function(e){S[e.getAttribute('data-fsw')]=e});
function f(k){return S[k]?'on':'off'}
C['reading.mode']=f('reading');C['sticky.header']=f('sticky');C['block.newsletter']=f('newsletter');
H.setAttribute('data-sw-search',f('search'));H.setAttribute('data-sw-nav',f('nav'));H.setAttribute('data-sw-desk',f('desktop'));H.setAttribute('data-sw-copy',f('copy'));
if(S.logo){var u=String(S.logo.textContent||'').trim();if(imgUrl(u))C.logo=imgUrl(u)}})();
var BASE={};for(var bk in C)BASE[bk]=C[bk];
if(DV)for(var dk in DV){if(unsafeKey(dk)||dk.indexOf('__')===0||dk==='panel.src')continue;if(/^(?:string|number|boolean)$/.test(typeof DV[dk]))C[dk]=DV[dk]}
var VARS={'color.brand':'--brand','color.accent':'--accent','width':'--w','radius':'--r','img.max':'--img-max','font.size':'--fs','line.height':'--lh'};
var VCHK={'color.brand':'col','color.accent':'col','width':'len','radius':'len','img.max':'len','font.size':'len','line.height':'num'};
function okVar(k,v){var t=VCHK[k];if(t==='col')return /^(#[0-9a-f]{3,8}|[a-z]{3,20}|(?:rgb|hsl)a?\([\d\s.,%\/-]+\))$/i.test(v);if(t==='len')return /^\d+(?:\.\d+)?(?:px|rem|em|%)?$/.test(v);if(t==='num')return /^\d+(?:\.\d+)?$/.test(v);return false}
function applyVars(){for(var k in VARS){if(k==='font.size'&&ls('hypFs'))continue;var v=String(C[k]==null?'':C[k]).trim();if(v&&(!cssOk(v)||!okVar(k,v)))v='';if(v)H.style.setProperty(VARS[k],/^\d+(\.\d+)?$/.test(v)&&k!=='line.height'?v+'px':v);else H.style.removeProperty(VARS[k])}}
(function(){var b=ls('hypFsB'),n=String(C['font.size']==null?'':C['font.size']);if(ls('hypFs')&&b!==null&&b!==n){try{localStorage.removeItem('hypFs')}catch(e){}}})();
applyVars();
function remote(force){var id=String(C['remote.id']||'').trim();if(!id||!W.fetch)return Promise.resolve(null);
var c=RM;if(!force&&c&&c.id===id&&Date.now()-c.t<300000)return Promise.resolve(c);
var b=String(C['remote.blog']||'').trim().replace(/\/+$/,'');
if(b){try{var ru=new URL(b,location.href);if(ru.protocol!=='https:'&&ru.origin!==location.origin)return Promise.resolve(null);b=ru.origin}catch(e){return Promise.resolve(null)}}
return fx(b+'/feeds/pages/default/'+encodeURIComponent(id)+'?alt=json').then(function(r){if(!r.ok)throw new Error(r.status);return r.json()}).then(function(j){
var h=(j.entry&&j.entry.content&&j.entry.content.$t)||'',ta=D.createElement('textarea');
ta.innerHTML=h.replace(/<(br|\/p|\/div|\/li|\/h\d)[^>]*>/gi,'\n').replace(/<[^>]+>/g,'');
var d={},S2=[];parseCfg(ta.value,d,S2);delete d['remote.id'];delete d['remote.blog'];if(S2.length)d.__sec=S2;
var o={id:id,t:Date.now(),d:d};try{localStorage.setItem('hypRemote',JSON.stringify(o))}catch(e){}return o}).catch(function(e){warn('remote-config',e);return null})}
function on(k){var v=String(C[k]).toLowerCase();return v==='on'||v==='1'||v==='true'||v==='yes'}
function num(k,d){var n=parseInt(C[k],10);return isNaN(n)?d:n}
function cfgT(k,d){var v=String(C[k]==null?'':C[k]).trim();return v||d}
function multi(k){return (C.__m&&C.__m[k])||[]}
function pp(s){return String(s).split('|').map(function(x){return x.trim()})}
function safeUrl(u){u=String(u||'').trim();if(/[\u0000-\u001f\u007f]/.test(u))return '';return /^(https?:\/\/[^\/\\\s]|mailto:|\/(?![\/\\])|#)/i.test(u)?u:''}
var isHome=B0.classList.contains('is-home')&&!/[?&]updated-max=/.test(location.search);
var isPost=!!$('#pb');
function curTheme(){return H.getAttribute('data-theme')==='light'?'light':'dark'}
function setTheme(t){t=t==='light'?'light':'dark';H.setAttribute('data-theme',t);ls('inqTheme',t);var tb=$('#tbdm');if(tb)tb.setAttribute('aria-pressed',t==='dark'?'true':'false');var m=$('meta[name=theme-color]');if(m)m.setAttribute('content',t==='light'?'#eef3fb':'#050b19');
var b=$('#btnTheme');if(b){b.setAttribute('aria-pressed',t==='dark'?'true':'false')}guard('dark-fix',dfx)}
function themeInit(){setTheme(curTheme());var b=$('#btnTheme');if(b)b.onclick=function(){setTheme(curTheme()==='dark'?'light':'dark')}}
function rgbOf(v){var m=String(v||'').match(/rgba?\(\s*(\d+)[ ,]+(\d+)[ ,]+(\d+)(?:[ ,\/]+([\d.]+))?/);return m?{l:(0.2126*m[1]+0.7152*m[2]+0.0722*m[3])/255,a:m[4]===undefined?1:parseFloat(m[4])}:null}
function dfx(){var pb=$('#pb');if(!pb)return;var dark=curTheme()==='dark';
$$('[style],font[color],[bgcolor]',pb).forEach(function(e){var st=e.style,c=rgbOf(st.color),g=rgbOf(st.backgroundColor),k='';
if(!c&&e.tagName==='FONT'&&e.getAttribute('color')){var p=D.createElement('i');p.style.color=e.getAttribute('color');c=rgbOf(p.style.color)}
if(!g&&e.getAttribute('bgcolor')){var q=D.createElement('i');q.style.color=e.getAttribute('bgcolor');g=rgbOf(q.style.color)}
if(dark){if(g&&g.a>.5&&g.l>.62)k='dfx-b';else if(c&&c.a>.5&&c.l<.4&&!(g&&g.a>.5&&g.l<.4))k='dfx-t'}
else if(c&&c.a>.5&&c.l>.85&&!(g&&g.a>.5&&g.l<.6))k='dfx-l';
e.classList.remove('dfx-b','dfx-t','dfx-l');if(k)e.classList.add(k)})}
var DF=null;function fmt(iso){try{DF=DF||new Intl.DateTimeFormat('en',{year:'numeric',month:'short',day:'numeric'});return DF.format(new Date(iso))}catch(e){return String(iso).slice(0,10)}}
function timeEl(iso){return '<time class="d" data-iso="'+esc(iso)+'" datetime="'+esc(iso)+'">'+fmt(iso)+'</time>'}
function fmtAll(){$$('time[data-iso]').forEach(function(t){t.textContent=fmt(t.getAttribute('data-iso'))});today()}
function sz(u,w,h){if(!u)return '';u=u.replace(/^http:/,'https:');if(/ytimg\.com/.test(u))return u.replace(/\/(default|mqdefault)\.jpg/,'/hqdefault.jpg');var m=h?'w'+w+'-h'+h+'-c':'w'+w;if(/(?:googleusercontent|bp\.blogspot)\.com/.test(u)&&!/\.(?:gif|svg)(?:$|[?#])/i.test(u))m+='-rw';return u.replace(/\/(?:s\d+|w\d+-h\d+)[^\/]*\//,'/'+m+'/').replace(/=(?:s\d+|w\d+-h\d+)[^?&]*$/,'='+m)}
function topbarX(){var d=$('#tbdm');if(d){d.onclick=function(){setTheme(curTheme()==='dark'?'light':'dark')}}
var so=$('#tbsoc');if(so){var h='';SOC.forEach(function(x){var u=safeUrl(C['social.'+x[0]]);if(u&&u.charAt(0)!=='#'&&x[0]!=='rss')h+='<a href="'+esc(u)+'" rel="noopener me" target="_blank" aria-label="'+x[1]+'" title="'+x[1]+'"><svg viewBox="0 0 24 24" aria-hidden="true">'+x[2]+'</svg></a>'});so.innerHTML=h;so.hidden=!h}}
function today(){var t=$('#today');if(!t)return;var h='';try{h='<span>'+new Intl.DateTimeFormat('en',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(new Date())+'</span>'}catch(e){warn('date-format',e)}t.innerHTML=h}
function uk(u){return String(u||'').replace(/[?#].*$/,'').replace(/^http:/,'https:')}
function nice(c){return String(c||'').replace(/[\s.,;:!]+$/,'').replace(/^([^(]*)\)$/,'$1').trim()}
var HUES={tech:'#1685ff',health:'#16b889',finance:'#e9a23b',business:'#9b6bff',sprout:'#f078a8',reels:'#9b5cf6',latest:'#64748b',def:'#22c7f2'};
function lcol(l){l=String(l||'').toLowerCase();
if(/tech|\bai\b|cloud|cyber|software|app|future|auto|agent|code|dev|data|robot|gadget/.test(l))return HUES.tech;
if(/health|fit|nutri|food|sleep|mind|mental|well|diet|yoga|work ?out/.test(l))return HUES.health;
if(/business|entrepren|startup|marketing|manage|career|leader|educat|commerce/.test(l))return HUES.business;
if(/financ|invest|stock|money|crypto|econ|market|passive|budget|tax|trad|bank|income/.test(l))return HUES.finance;
if(/lifestyle|life|travel|hobb|home|fashion|beauty|style|culture|relationship|family/.test(l))return HUES.sprout;
if(/video|reel|short|watch/.test(l))return HUES.reels;
var p=['#22d3ee','#f472b6','#fb7185','#a3e635','#38bdf8'],h=0,i;for(i=0;i<l.length;i++)h=(h*31+l.charCodeAt(i))|0;return p[Math.abs(h)%p.length]}
function paint(root){$$('.chip[data-lb]',root).forEach(function(c){if(!c.style.getPropertyValue('--k'))c.style.setProperty('--k',lcol(c.getAttribute('data-lb')));
if(!c.getAttribute('data-n')){c.setAttribute('data-n','1');var t=en(nice(c.textContent));if(t&&t!==c.textContent.trim()){c.textContent=t;c.title=t}}})}
function norm(e){if(!e)return null;var u='';(e.link||[]).forEach(function(x){if(x.rel==='alternate')u=x.href});u=String(u||'').replace(/^http:/,'https:');
var t=e.title&&e.title.$t,d=e.published&&e.published.$t;if(!u||!d||!isHttp(u))return null;
return{t:String(t||'').trim()||'Untitled',u:u,d:d,i:e.media$thumbnail&&isHttp(e.media$thumbnail.url)?e.media$thumbnail.url:'',s:e.summary&&e.summary.$t?String(e.summary.$t).slice(0,200):'',c:(e.category||[]).map(function(c){return c.term}),a:e.author&&e.author[0]&&e.author[0].name?String(e.author[0].name.$t||'').slice(0,60):''}}
var cache={};
function okItem(x){return !!x&&typeof x.u==='string'&&isHttp(x.u)&&typeof x.d==='string'}
function cleanItems(a){return Array.isArray(a)?a.filter(okItem):null}
function sget(u,ttl){try{var x=JSON.parse(localStorage.getItem('hypF'+u));if(x&&Date.now()-x.t<(ttl||600000))return x.d}catch(e){}return null}
function sset(u,d){try{localStorage.setItem('hypF'+u,JSON.stringify({t:Date.now(),d:d}))}catch(e){}}
function fx(u,ms){if(!W.fetch)return Promise.reject(new Error('fetch'));var ac=W.AbortController?new AbortController():null,t=ac?setTimeout(function(){ac.abort()},ms||12000):0;return fetch(u,ac?{signal:ac.signal}:undefined).then(function(r){clearTimeout(t);return r},function(e){clearTimeout(t);throw e})}
function getJ(u,sig){if(!W.fetch)return Promise.reject(new Error('fetch'));if(!sig&&u===W.__hypFeedU&&W.__hypFeed){var q=W.__hypFeed;W.__hypFeed=null;return q.catch(function(){return getJ(u)})}var ac,t=0;if(!sig&&W.AbortController){ac=new AbortController();sig=ac.signal;t=setTimeout(function(){ac.abort()},12000)}
return fetch(u,sig?{signal:sig}:undefined).then(function(r){clearTimeout(t);if(!r.ok)throw new Error(r.status);return r.json()},function(e){clearTimeout(t);throw e})}
function feed(label,n,o){o=o||{};var L=[];if(label&&label!=='*')L.push(label);
var u='/feeds/posts/summary'+(L.length?'/-/'+L.map(encodeURIComponent).join('/'):'')+'?alt=json&orderby=published&max-results='+n+(o.start?'&start-index='+o.start:'')+(o.q?'&q='+encodeURIComponent(o.q):'');
if(!o.q&&cache[u])return cache[u];
function real(){return getJ(u,o.signal).then(function(j){if(!L.length&&!o.q){var t=j.feed&&j.feed.openSearch$totalResults?parseInt(j.feed.openSearch$totalResults.$t,10):-1;if(t>=0)sset('tot',t)}return((j.feed&&j.feed.entry)||[]).map(norm).filter(Boolean)})}
var hit=o.q?null:cleanItems(sget(u)),p;
if(hit)p=Promise.resolve(hit);else p=real();
if(!o.q){p=p.then(function(a){if(!hit)sset(u,a);return a},function(e){delete cache[u];throw e});cache[u]=p}
return p}
function totalPosts(){var c=sget('tot',21600000);if(typeof c==='number'&&c>=0)return Promise.resolve(c);
return allFeed().then(function(){var t=sget('tot',21600000);if(typeof t==='number'&&t>=0)return t;return totalFetch()})}
function totalFetch(){return getJ('/feeds/posts/summary?alt=json&max-results=0').then(function(j){var n=parseInt(j.feed.openSearch$totalResults.$t,10)||0;sset('tot',n);return n}).catch(function(e){warn('feed-total',e);return 0})}
function kfmt(n){if(n>=1000){var k=Math.floor(n/100)/10;return(k%1?k.toFixed(1):String(k))+'K+'}return String(n)}
var RT=rdj('inqRT');if(!RT||!plain(RT.m))RT={f:0,m:{}};
function mins(html){var t=String(html||'').replace(/<(script|style)[\s\S]*?<\/\1>/gi,' ').replace(/<[^>]+>/g,' '),n=(t.match(/\S+/g)||[]).length;return Math.max(1,Math.round(n/200))}
function rtSave(f){if(f)RT.f=Date.now();try{if(Object.keys(RT.m).length>500)RT.m={};localStorage.setItem('inqRT',JSON.stringify(RT))}catch(e){}}
function rtFill(){$$('.rt[data-k]').forEach(function(e){var m=RT.m[uk(e.getAttribute('data-k'))];if(m)e.textContent=m+' min read'})}
function eatFull(j,latest){var vids=[];(j.feed.entry||[]).forEach(function(e){var h=(e.content&&e.content.$t)||'',n=norm(e);if(!n)return;var k=uk(n.u);if(k)RT.m[k]=mins(h);var m=h.match(/(?:youtube(?:-nocookie)?\.com\/embed\/|youtu\.be\/)([\w-]{11})/);if(m)vids.push({id:m[1],t:n.t,u:n.u,d:n.d})});rtSave(latest);return vids}
var FF=null;
function fullFeed(){if(FF)return FF;var cv=sget('vids',21600000);if(Array.isArray(cv)&&Date.now()-(RT.f||0)<21600000){FF=Promise.resolve(cv);return FF}
FF=getJ('/feeds/posts/default?alt=json&max-results=30').then(function(j){var v=eatFull(j,true);sset('vids',v);return v}).catch(function(e){warn('feed-full',e);FF=null;return[]});return FF}
function labelFull(l){return fx('/feeds/posts/default/-/'+encodeURIComponent(l)+'?alt=json&max-results=30').then(function(r){return r.ok?r.json():null}).then(function(j){if(j){eatFull(j);rtFill()}}).catch(function(e){warn('feed-label',e)})}
function missing(){return $$('.rt[data-k]').filter(function(e){return !RT.m[uk(e.getAttribute('data-k'))]})}
var RTQ=0,EV=['scroll','pointerdown','keydown','touchstart'];
function rtLoad(){rtFill();if(!missing().length)return;if(W.navigator&&navigator.connection&&(navigator.connection.saveData||/^(slow-2g|2g)$/.test(navigator.connection.effectiveType||'')))return;
var go=function(){var p=Date.now()-(RT.f||0)<21600000?Promise.resolve():fullFeed();p.then(function(){rtFill();var lm=location.pathname.match(/^\/search\/label\/([^\/]+)/);if(lm&&missing().length)labelFull(decodeURIComponent(lm[1]))})};
if(RTQ)return;RTQ=1;var run=function(){if(!RTQ||RTQ===2)return;RTQ=2;EV.forEach(function(e){W.removeEventListener(e,run)});go()};EV.forEach(function(e){W.addEventListener(e,run,{passive:true})});
var arm=function(){setTimeout(run,5000)};if(D.readyState==='complete')arm();else W.addEventListener('load',arm,{once:true})}
function img(it,w,h,sizes,eager,r){r=r||[.6,1,1.5];var ss=r.map(function(k){var a=Math.round(w*k);return esc(sz(it.i,a,Math.round(h*k)))+' '+a+'w'}).join(',');return '<img src="'+esc(sz(it.i,w,h))+'" srcset="'+ss+'" sizes="'+sizes+'" width="'+w+'" height="'+h+'" alt="" decoding="async"'+(eager?' fetchpriority="high"':' loading="lazy"')+'>'}
function chipH(l){return '<a class="chip" data-lb="'+esc(l)+'" title="'+esc(en(nice(l)))+'" href="/search/label/'+encodeURIComponent(l)+'">'+esc(en(nice(l)))+'</a>'}
function ic(it,eg){var l=(it.c||[])[0]||'';
return '<article class="ic"><div class="ic-m'+(it.i?'':' ph')+'">'+(it.i?img(it,360,270,'(min-width:1120px) 200px,(min-width:640px) 30vw,72vw',!!eg,[.6,1,1.5]):'<span class="ic-ph">'+esc((it.t||'\u2022').trim().charAt(0))+'</span>')+'<div class="ic-cap">'+(l?chipH(l):'')+'<h3 class="ic-t" dir="auto"><a href="'+esc(it.u)+'">'+esc(it.t)+'</a></h3></div></div><div class="ic-f">'+timeEl(it.d)+'<span class="rt" data-k="'+esc(uk(it.u))+'"></span></div></article>'}
var USED={},EAG=W.innerWidth>=900?5:2;
function pk(u){return String(u||'').replace(/^https?:\/\/[^\/]+/,'').split(/[?#]/)[0]}
function choose(list,n,used,strict){if(strict)return list.filter(function(x){return !used[pk(x.u)]}).slice(0,n);
var c=list.map(function(x,k){return{x:x,k:k,u:used[pk(x.u)]||0}});c.sort(function(a,b){return a.u-b.u||a.k-b.k});var o=c.slice(0,n);o.sort(function(a,b){return a.k-b.k});return o.map(function(z){return z.x})}
function mark(used,a){a.forEach(function(x){var k=pk(x.u);used[k]=(used[k]||0)+1})}
var HOMEAD=0;
function revive(frag){$$('script',frag).forEach(function(s){var n=D.createElement('script');for(var i=0;i<s.attributes.length;i++)n.setAttribute(s.attributes[i].name,s.attributes[i].value);n.text=s.text;s.parentNode.replaceChild(n,s)});return frag}
function adSrc(k){var t=$('template[data-ad="'+k+'"]');return t&&t.innerHTML.replace(/<!--[\s\S]*?-->/g,'').trim()?t:null}
function adBox(k,cls,eager){var t=adSrc(k);if(!t)return null;if(k==='home-mid'){if(HOMEAD)return null;HOMEAD=1}var b=E('div','ad'+(cls?' '+cls:''),'<span class="ad-l">Advertisement</span>');
function fill(){if(b._d)return;b._d=1;var f=t.content.cloneNode(true);b.appendChild(revive(f))}
if(eager||!on('ad.lazy')||!('IntersectionObserver' in W)){setTimeout(fill,0)}else{var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){io.disconnect();fill()}},{rootMargin:'500px 0px'});io.observe(b)}
return b}
function lazyBox(box,fn){if('IntersectionObserver' in W){var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){io.disconnect();fn()}},{rootMargin:'600px 0px'});io.observe(box)}else fn()}
var MODAL=null;
function modal(html,cls,label){if(MODAL)MODAL.close();var o=E('div','md '+(cls||''),'<div class="md-b" role="dialog" aria-modal="true" aria-label="'+esc(label||'')+'"><button class="ib md-x" type="button" aria-label="Close">'+sv('x')+'</button>'+html+'</div>'),prev=D.activeElement;
function close(){if(MODAL&&MODAL.el===o)MODAL=null;rm(o);B0.classList.remove('md-o');D.removeEventListener('keydown',key);if(prev&&prev.focus)prev.focus()}
function key(e){if(e.key==='Escape'){close();return}if(e.key!=='Tab')return;var f=$$('button,a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',o).filter(function(n){return n.offsetParent!==null});if(!f.length)return;var p=f[0],z=f[f.length-1],a=D.activeElement;if(e.shiftKey&&(a===p||!o.contains(a))){e.preventDefault();z.focus()}else if(!e.shiftKey&&(a===z||!o.contains(a))){e.preventDefault();p.focus()}}
o.addEventListener('click',function(e){if(e.target===o||e.target.closest('.md-x'))close()});
D.addEventListener('keydown',key);B0.appendChild(o);B0.classList.add('md-o');var x=$('.md-x',o);if(x)x.focus();MODAL={el:o,close:close};return MODAL}
function bmGet(){var a=rdj('inqBm');return Array.isArray(a)?a.filter(function(x){return !!x&&typeof x.u==='string'&&isHttp(x.u)&&typeof x.t==='string'}):[]}
function bmSave(a){try{localStorage.setItem('inqBm',JSON.stringify(a.slice(0,60)))}catch(e){}}
function bmHas(u){u=uk(u);return bmGet().some(function(x){return uk(x.u)===u})}
function bmToggle(it){var a=bmGet(),u=uk(it.u),i=-1;a.forEach(function(x,k){if(uk(x.u)===u)i=k});if(i>=0)a.splice(i,1);else a.unshift(it);bmSave(a);return i<0}
var BMEMPTY='<p class="empty">No saved articles yet. Open an article and tap Save.</p>';
function bmOpen(){var a=bmGet(),h='<h2 class="md-h">Saved articles</h2>'+(a.length?'<ul class="bml">'+a.map(function(x){return '<li>'+(x.i&&isHttp(String(x.i))?'<img src="'+esc(sz(x.i,112,84,1))+'" alt="" width="56" height="42">':'')+'<a href="'+esc(x.u)+'" dir="auto">'+esc(x.t)+'</a><button type="button" data-u="'+esc(x.u)+'">Remove</button></li>'}).join('')+'</ul>':BMEMPTY);
var m=modal(h,'md-s','Saved articles');
m.el.addEventListener('click',function(e){var b=e.target.closest('button[data-u]');if(!b)return;var u=uk(b.getAttribute('data-u'));bmSave(bmGet().filter(function(x){return uk(x.u)!==u}));rm(b.closest('li'));if(!$('.bml li',m.el)){var ul=$('.bml',m.el);if(ul)ul.outerHTML=BMEMPTY}})}
function mesh(){var s=11,r=function(){s=(s*9301+49297)%233280;return s/233280},p=[],i,j,w=640,h=360,L='',N='';
for(i=0;i<40;i++)p.push([w*.4+r()*w*.58,h*.04+r()*h*.92]);
for(i=0;i<p.length;i++)for(j=i+1;j<p.length;j++){var dx=p[i][0]-p[j][0],dy=p[i][1]-p[j][1];if(dx*dx+dy*dy<7600)L+='<path d="M'+p[i][0].toFixed(0)+' '+p[i][1].toFixed(0)+'L'+p[j][0].toFixed(0)+' '+p[j][1].toFixed(0)+'"/>'}
p.forEach(function(q,k){N+='<circle cx="'+q[0].toFixed(0)+'" cy="'+q[1].toFixed(0)+'" r="'+(k%6===0?3:1.6)+'"'+(k%6===0?' class="hn"':'')+'/>'});
return '<svg class="hero-mesh" viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="xMaxYMid slice" aria-hidden="true"><g class="hl">'+L+'</g><g class="hd">'+N+'</g></svg>'}
var GX='<div class="gx" aria-hidden="true"><i class="gx-s a"></i><i class="gx-s b"></i></div>';
function heroText(){var box=$('#hero');if(!box)return;
var im=imgUrl(C['hero.image']),t2=cfgT('hero.title2','A Brighter Future.'),k=t2.lastIndexOf(' '),
TP=multi('topic').map(pp).filter(function(p){return p[0]&&safeUrl(p[1])}),
TD=[['All Topics','/search','grid'],['AI & Tech','/search/label/Technology%20%26%20AI','tech'],['Health','/search/label/Health%20%26%20Wellness','health'],['Finance','/search/label/Finance%20%26%20Investing','finance'],['Business','/search/label/Business','business'],['Lifestyle','/search/label/Lifestyle','sprout']];
if(!TP.length)TP=TD;
var vis='<div class="hv" aria-hidden="true"><svg viewBox="0 0 560 420" preserveAspectRatio="xMidYMid meet"><defs><radialGradient id="hvg" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="#7fd4ff"/><stop offset=".45" stop-color="#1f6bff"/><stop offset="1" stop-color="#071a52"/></radialGradient></defs>'
+'<circle cx="290" cy="215" r="128" fill="url(#hvg)" opacity=".92"/><g class="hv-l"><ellipse cx="290" cy="215" rx="128" ry="42"/><ellipse cx="290" cy="215" rx="128" ry="86"/><ellipse cx="290" cy="215" rx="42" ry="128"/><ellipse cx="290" cy="215" rx="86" ry="128"/><ellipse cx="290" cy="215" rx="190" ry="58" transform="rotate(-18 290 215)"/></g>'
+[[70,70,'brain'],[430,40,'health'],[480,150,'finance'],[40,200,'book'],[460,300,'bulb'],[100,330,'tech']].map(function(a){return '<rect class="hv-t" x="'+a[0]+'" y="'+a[1]+'" width="64" height="64" rx="14"/><g class="hv-i" transform="translate('+(a[0]+20)+' '+(a[1]+20)+')">'+(IC[a[2]]||IC.star)+'</g>'}).join('')
+'</svg></div>';
box.innerHTML='<div class="hero-bg">'+(im?'<img src="'+esc(im)+'"'+(sz(im,800)!==im?' srcset="'+esc(sz(im,800))+' 800w,'+esc(sz(im,1200))+' 1200w,'+esc(sz(im,1600))+' 1600w" sizes="(min-width:1200px) 1200px,100vw"':'')+' width="1600" height="900" alt="" decoding="async" fetchpriority="high">':'')+'</div>'+(im?'':GX)
+'<div class="hero-in"><h2 class="hero-t">'+esc(cfgT('hero.title','Better Information.'))+'<span>'+(k>0?'<em>'+esc(t2.slice(0,k))+'</em> '+esc(t2.slice(k+1)):'<em>'+esc(t2)+'</em>')+'</span></h2><p class="hero-p">'+esc(cfgT('hero.text',''))+'</p>'
+'<form class="hs" action="/search" method="get" role="search">'+sv('search')+'<input id="hsq" name="q" type="search" placeholder="Search for articles..." aria-label="Search for articles" autocomplete="off" required><button class="hs-b" type="submit"><span>Search</span>'+sv('arrow')+'</button></form>'
+'<ul class="ht" aria-label="Topics">'+TP.map(function(p){return '<li><a href="'+esc(safeUrl(p[1]))+'">'+sv(p[2]||'star')+esc(p[0])+'</a></li>'}).join('')+'</ul></div>'+(im?'':vis);
box.hidden=false;
if(!im&&'IntersectionObserver' in W){new IntersectionObserver(function(es){box.classList.toggle('off',!es[es.length-1].isIntersecting)}).observe(box)}}
var HEROP=Promise.resolve(),LIVE=null;
function trunc(s,n){s=String(s||'').replace(/\s+/g,' ').trim();if(s.length<=n)return s;var c=s.slice(0,n),k=c.lastIndexOf(' ');return (k>40?c.slice(0,k):c).replace(/[\s.,;:!\-]+$/,'')+'\u2026'}
function lab(x){return String((x.c||[])[0]||'').toLowerCase()}
function rowCls(n,i){var P={1:[1],2:[2],3:[3],4:[2,2],5:[3,2],6:[3,3],7:[3,2,2],8:[3,3,2]},p=P[Math.min(Math.max(n,1),8)],k=0,r;for(r=0;r<p.length;r++){if(i<k+p[r])return p[r]===3?'w2':p[r]===2?'w3':'w6';k+=p[r]}return 'w6'}
function heroPick(all){var src=all.slice(0,30),wi=src.filter(function(x){return x.i});if(wi.length>=4)src=wi;
var feat=src.filter(function(x){return (x.c||[]).some(function(c){return /^featured$/i.test(String(c).trim())})}),main=feat[0]||src[0];
if(!main)return null;
var rest=src.filter(function(x){return x!==main}),side=[],seen={};seen[lab(main)]=1;
rest.forEach(function(x){if(side.length<3&&!seen[lab(x)]){seen[lab(x)]=1;side.push(x)}});
rest.forEach(function(x){if(side.length<3&&side.indexOf(x)<0)side.push(x)});
return{m:main,s:side}}
function hgMeta(it,by){return '<div class="hg-meta">'+(by&&it.a?'<span class="hg-by"><i aria-hidden="true">'+esc(it.a.charAt(0).toUpperCase())+'</i>By '+esc(it.a)+'</span>':'')+timeEl(it.d)+'<span class="rt" data-k="'+esc(uk(it.u))+'"></span></div>'}
function hgMain(it){var l=(it.c||[])[0]||'',d=trunc(it.s,170);
return '<article class="hg-m" style="--k:'+lcol(l)+'"><div class="hg-img'+(it.i?'':' ph')+'">'+(it.i?img(it,1100,760,'(min-width:1000px) 62vw,100vw',true,[.5,.68,1,1.5]):'')+'</div><div class="hg-c">'+(l?chipH(l):'')+'<h2 class="hg-t" dir="auto"><a href="'+esc(it.u)+'">'+esc(it.t)+'</a></h2>'+(d?'<p class="hg-d" dir="auto">'+esc(d)+'</p>':'')+hgMeta(it,1)+'</div><span class="hg-go" aria-hidden="true">'+sv('arrow')+'</span></article>'}
function hgSide(it){var l=(it.c||[])[0]||'';
return '<article class="hg-s" style="--k:'+lcol(l)+'"><div class="hg-img'+(it.i?'':' ph')+'">'+(it.i?img(it,420,300,'(min-width:1000px) 24vw,60vw',false,[.6,1,1.5]):'')+'</div><div class="hg-c">'+(l?chipH(l):'')+'<h3 class="hg-t2" dir="auto"><a href="'+esc(it.u)+'">'+esc(it.t)+'</a></h3>'+hgMeta(it,0)+'</div></article>'}
function heroTop(){return '<div class="hg-top"><div class="tb-tr" id="tbtr" hidden></div></div>'}
function trendX(all,skip){var tr=$('#tbtr');if(!tr||!all||!all.length)return;var s={},t;(skip||[]).forEach(function(x){s[uk(x.u)]=1});t=all.filter(function(x){return !s[uk(x.u)]})[0]||all[0];
tr.innerHTML=sv('flame')+'<b>'+esc(cfgT('trending.label','Trending'))+':</b><a href="'+esc(t.u)+'">'+esc(t.t)+'</a>';tr.hidden=false}
function hero(){var box=$('#hero');if(!box)return;if(!isHome||!on('hero')){rm(box);rm($('#ibar'));return}
HEROP=allFeed().then(function(all){var p=all&&all.length?heroPick(all):null;
if(!p){heroText();return}
box.className='hero hg';box.innerHTML=heroTop()+'<div class="hg-mw">'+hgMain(p.m)+'</div><div class="hg-side">'+p.s.map(hgSide).join('')+'</div>';box.hidden=false;
mark(USED,[p.m].concat(p.s));trendX(all,[p.m].concat(p.s));paint(box);imgFix(box);rtFill()}).catch(function(e){warn('hero',e);heroText()});
guard('info-bar',infoBar)}
function liveLabels(all){var m={},o=[],k;
$$('.widget.Label a.label-name').forEach(function(a){var cl=a.cloneNode(true),cc=cl.querySelector('.label-count'),cv=cc?parseInt(cc.textContent.replace(/\D/g,''),10)||0:0;if(cc)cc.parentNode.removeChild(cc);
var n=nice(cl.textContent.replace(/\s+/g,' ')),q=n.toLowerCase();if(n&&!m[q])m[q]={n:n,c:cv}});
(all||[]).forEach(function(x){(x.c||[]).forEach(function(l){var n=nice(l),q=n.toLowerCase();if(!q)return;if(!m[q])m[q]={n:n,c:0,f:1};if(m[q].f)m[q].c++})});
for(k in m)o.push(m[k]);o.sort(function(a,b){return b.c-a.c});return o}
var SKIPL=/^(featured|sponsored|sponsored news|partner|promoted|uncategorized)$/i;
function autoDefs(all,defs){var cov={};defs.forEach(function(d){d.l.forEach(function(l){cov[nice(l).toLowerCase()]=1});cov[nice(d.t).toLowerCase()]=1});
return liveLabels(all).filter(function(x){return !cov[x.n.toLowerCase()]&&!SKIPL.test(x.n)}).slice(0,8).map(function(x){return{t:en(x.n),k:'',tag:'',l:[x.n],auto:1}})}
function place(ref,id,cls,html){var host=ref&&ref.parentNode?ref.parentNode:$('.col-main');if(!host||$('#'+id))return ref;var s=E('section',cls,html);s.id=id;host.insertBefore(s,ref&&ref.parentNode?ref.nextSibling:null);return s}
function sponsoredBlock(ref){if(!on('sponsored'))return ref;var all=LIVE||[];if(all.length<3)return ref;
var names=String(cfgT('sponsored.label','Sponsored, Sponsored News, Partner, Promoted')).split(',').map(function(x){return x.trim().toLowerCase()}).filter(Boolean),
isS=function(c){return names.indexOf(nice(c).toLowerCase())>-1},
tagged=all.filter(function(x){return (x.c||[]).some(isS)}),pick=tagged.slice(0,3),have={};
pick.forEach(function(x){have[pk(x.u)]=1});
all.forEach(function(x){if(pick.length<3&&!have[pk(x.u)]&&!USED[pk(x.u)]){have[pk(x.u)]=1;pick.push(x)}});
all.forEach(function(x){if(pick.length<3&&!have[pk(x.u)]){have[pk(x.u)]=1;pick.push(x)}});
if(pick.length<3)return ref;
mark(USED,pick);
var tl=tagged.length?(tagged[0].c||[]).filter(isS)[0]:'',all_=tl?'/search/label/'+encodeURIComponent(tl):'/search',
ttl=cfgT('sponsored.title','Sponsored News');
return place(ref,'hm-sp','sp','<header class="sp-h"><span class="sp-i">'+sv('star')+'</span><h2>'+esc(ttl)+'</h2><a class="cs-all" href="'+esc(all_)+'">View All'+sv('arrow')+'</a></header><div class="sp-g">'+pick.map(function(it){var l=(it.c||[])[0]||'';
return '<a class="sp-c" href="'+esc(it.u)+'" style="--c:'+lcol(l)+'"><span class="sp-m'+(it.i?'':' ph')+'">'+(it.i?img(it,360,240,'(min-width:1000px) 16vw,45vw',false,[.6,1,1.5]):'<b>'+esc((it.t||'\u2022').trim().charAt(0))+'</b>')+'</span><span class="sp-t" dir="auto">'+esc(it.t)+'</span><span class="sp-go" aria-hidden="true">'+sv('arrow')+'</span></a>'}).join('')+'</div>')}
function topicsBlock(ref){if(!on('topics'))return ref;
var L=liveLabels(LIVE).filter(function(l){return !SKIPL.test(l.n)}).slice(0,Math.max(3,Math.min(16,num('topics.count',10))));
if(L.length<3)return ref;var ttl=cfgT('topics.title','Popular Topics');
return place(ref,'hm-pt','pt','<nav class="pt-n" aria-label="'+esc(ttl)+'"><span class="pt-l">'+sv('bookmark')+'<b>'+esc(ttl)+':</b></span><ul>'+L.map(function(l){return '<li><a href="/search/label/'+encodeURIComponent(l.n)+'">'+esc(en(l.n))+'</a></li>'}).join('')+'</ul></nav>')}
function nlBlock(ref){if(!on('info.news'))return ref;
var a=String(C['newsletter.action']||'').trim(),ok=isHttps(a),f=String(C['newsletter.field']||'email').replace(/[^\w\-.\[\]]/g,'')||'email',ph=cfgT('newsletter.placeholder','Enter your email address'),
u=safeUrl(C['info.news.url']),form;
if(ok)form='<form class="nlb-f" action="'+esc(a)+'" method="post" target="_blank" rel="noopener noreferrer"><input type="email" name="'+esc(f)+'" required autocomplete="email" placeholder="'+esc(ph)+'" aria-label="'+esc(ph)+'"><button type="submit">'+sv('send')+esc(cfgT('newsletter.button','Subscribe'))+'</button></form>';
else form='<div class="nlb-f nlb-r"><a class="nlb-b" href="'+esc(u&&u.charAt(0)!=='#'?u:'/feeds/posts/default?alt=rss')+'"'+(u&&/^https?:/i.test(u)?' target="_blank" rel="noopener noreferrer"':'')+'>'+sv(u&&u.charAt(0)!=='#'?'send':'rss')+esc(u&&u.charAt(0)!=='#'?cfgT('newsletter.button','Subscribe'):'Subscribe via RSS')+'</a></div>';
return place(ref,'hm-nl','nlb','<span class="nlb-i" aria-hidden="true">'+sv('mail')+'</span><div class="nlb-t" id="newsletter" tabindex="-1"><h2>'+esc(cfgT('info.news.title','Subscribe to Our Newsletter'))+'</h2><p>'+esc(cfgT('info.news.text','Get the latest articles in your inbox'))+'</p></div>'+form)}
function extras(){var ref=$('#hm-s')||$('#main')||$('#hero');if(!ref)return;
ref=guard('sponsored',function(){return sponsoredBlock(ref)})||ref;
ref=guard('topics',function(){return topicsBlock(ref)})||ref;
guard('nl-band',function(){return nlBlock(ref)})}
function fcats(){var c=$('#fcats');if(!c)return;var L=secDefs();if(!L.length)return;
c.innerHTML='<h2 class="wt">Categories</h2><ul>'+L.map(function(d){return '<li><a href="/search/label/'+encodeURIComponent(d.l[0])+'">'+esc(d.t)+'</a></li>'}).join('')+'</ul>';c.hidden=false}
function infoBar(){var bar=$('#ibar');if(!bar)return;
var IT=multi('info').map(pp).filter(function(p){return p[0]}).slice(0,4);
if(!IT.length)IT=[['auto','Articles & Guides','bolt'],['Readers Worldwide','','users'],['Trusted Content','Well Researched','shield'],['Always Updated','Stay Informed','clock']];
var h=IT.map(function(p){var auto=p[0].toLowerCase()==='auto';return '<div class="ib-i"><span class="si">'+sv(p[2]||'star')+'</span><span><b'+(auto?' data-auto="1"':'')+'>'+esc(auto?'\u2026':p[0])+'</b>'+(p[1]?'<small>'+esc(p[1])+'</small>':'')+'</span></div>'}).join('');
var nu=safeUrl(C['info.news.url'])||'#newsletter';
if(on('info.news'))h+='<a class="ib-n" href="'+esc(nu)+'"'+(/^https?:/i.test(nu)?' target="_blank" rel="noopener noreferrer"':'')+'>'+sv('send')+'<span><b>'+esc(cfgT('info.news.title','Subscribe to Our Newsletter'))+'</b><small>'+esc(cfgT('info.news.text','Get the latest articles in your inbox'))+'</small></span><i>'+sv('arrow')+'</i></a>';
bar.innerHTML=h;
var au=$('b[data-auto]',bar);if(au)totalPosts().then(function(n){if(n>0)au.textContent=kfmt(n);else{var li=au.closest('.ib-i');rm(li)}})}
function secDefs(){return multi('section').slice(0,8).map(function(s){var p=pp(s),t=p[0];if(!t)return null;return{t:t,k:(p[1]||'').toLowerCase(),tag:p[2]||'',l:(p[3]||t).split(',').map(function(x){return x.trim()}).filter(Boolean).slice(0,8)}}).filter(Boolean)}
var ALLF=null,ALLN=60;
function allFeed(){return ALLF||(ALLF=feed('',ALLN).catch(function(e){warn('feed-all',e);ALLF=null;return null}))}
function byLabel(all,l,n){var q=String(l).toLowerCase().trim();return all.filter(function(x){return(x.c||[]).some(function(c){return String(c).toLowerCase().trim()===q})}).slice(0,n)}
function secItems(d,n){return allFeed().then(function(all){return Promise.all(d.l.map(function(l){var r=all&&all.length?byLabel(all,l,n+6):null;
if(r&&(r.length>=n||all.length<ALLN))return r;
return feed(l,n+6).catch(function(e){warn('feed-label-section',e);return r||[]})}))}).then(function(r){var seen={},out=[];r.forEach(function(a){a.forEach(function(x){var k=uk(x.u);if(!seen[k]){seen[k]=1;out.push(x)}})});out.sort(function(a,b){return Date.parse(b.d)-Date.parse(a.d)});return out})}
function cfH(it,eg){var l=(it.c||[])[0]||'';
return '<article class="cf"><div class="cf-m'+(it.i?'':' ph')+'">'+(it.i?img(it,720,480,'(min-width:1120px) 440px,(min-width:640px) 48vw,94vw',!!eg,[.6,1,1.5]):'<span class="ic-ph">'+esc((it.t||'\u2022').trim().charAt(0))+'</span>')+'</div><div class="cf-c">'+(l?chipH(l):'')+'<h3 class="cf-t" dir="auto"><a href="'+esc(it.u)+'">'+esc(it.t)+'</a></h3><div class="cf-f">'+timeEl(it.d)+'<span class="rt" data-k="'+esc(uk(it.u))+'"></span></div></div><span class="cf-go" aria-hidden="true">'+sv('arrow')+'</span></article>'}
function clH(it){var l=(it.c||[])[0]||'';
return '<article class="cl"><div class="cl-m'+(it.i?'':' ph')+'">'+(it.i?img(it,232,174,'116px',false,[1,1.5,2]):'<span class="ic-ph">'+esc((it.t||'\u2022').trim().charAt(0))+'</span>')+'</div><div class="cl-b">'+(l?chipH(l):'')+'<h3 class="cl-t" dir="auto"><a href="'+esc(it.u)+'">'+esc(it.t)+'</a></h3><div class="cl-f">'+timeEl(it.d)+'<span class="rt" data-k="'+esc(uk(it.u))+'"></span></div></div><span class="cl-go" aria-hidden="true">'+sv('arrow')+'</span></article>'}
var LAYK={tech:'card-hero',health:'card-list',finance:'card-compact',business:'card-hero',sprout:'card-list'},LAYC=['card-compact','card-list','card-hero'];
function cgH(it){return '<article class="cg-c"><h3 class="cg-t" dir="auto"><a href="'+esc(it.u)+'">'+esc(it.t)+'</a></h3><div class="cl-f">'+timeEl(it.d)+'<span class="rt" data-k="'+esc(uk(it.u))+'"></span></div></article>'}
function csBody(d,items,rest){
if(d.lay==='card-tiles')return '<div class="ct-g">'+items.slice(0,4).map(ctH).join('')+'</div>';
if(d.lay==='card-compact')return '<div class="cg">'+items.slice(0,4).map(cgH).join('')+'</div>';
if(d.lay==='card-list')return '<div class="cl-list">'+items.slice(0,4).map(clH).join('')+'</div>';
return cfH(items[0],EAG>0&&EAG--)+(rest.length?'<div class="cl-list">'+rest.map(clH).join('')+'</div>':'')}
var PRI=['technology & ai','health & wellness','finance & investing','business'];
var PRILAY=['card-hero','card-list','card-compact','card-tiles'];
function ctH(it){var l=(it.c||[])[0]||'';return '<article class="ct"><div class="ct-m'+(it.i?'':' ph')+'">'+(it.i?img(it,480,300,'(min-width:1120px) 220px,46vw',false,[.6,1,1.5]):'<span class="ic-ph">'+esc((it.t||'\u2022').trim().charAt(0))+'</span>')+'</div><div class="ct-b">'+(l?chipH(l):'')+'<h3 class="ct-t" dir="auto"><a href="'+esc(it.u)+'">'+esc(it.t)+'</a></h3><div class="cl-f">'+timeEl(it.d)+'<span class="rt" data-k="'+esc(uk(it.u))+'"></span></div></div></article>'}
function priIdx(t){return PRI.indexOf(String(t||'').trim().toLowerCase())}
function tierCls(out,j){var np=0,d=out[j].d;out.forEach(function(o){if(o.d.pri)np++});
if(d.pri)return(np%2&&j===np-1?'w6':'w3')+' pri';
return rowCls(out.length-np,j-np)+' sec'}
function csH(d,items,i,w){var c=HUES[d.k]||(d.auto?lcol(d.l[0]):HUES.def),rest=items.slice(1,4);return '<section class="cs '+(d.lay||'card-hero')+(w?' '+w:'')+'" id="sec-'+i+'" style="--c:'+c+'"><header class="cs-h"><span class="cs-i">'+sv(HUES[d.k]?d.k:'star')+'</span><h2>'+esc(d.t)+'</h2><a class="cs-all" href="/search/label/'+encodeURIComponent(d.l[0])+'">View All'+sv('arrow')+'</a></header><div class="cs-b">'+csBody(d,items,rest)+'</div></section>'}
function qnCard(href,c,icon,t,tag){return '<a class="qn-c" href="'+esc(href)+'" style="--c:'+c+'"><span class="qn-i">'+sv(icon)+'</span><span class="qn-t"><b>'+esc(t)+'</b><small>'+esc(tag)+'</small></span>'+sv('chev')+'</a>'}
function ytId(s){s=String(s||'').trim();var m=s.match(/(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?(?:[^"'\s]*&)?v=|shorts\/)|youtu\.be\/)([\w-]{11})/);if(m)return m[1];return /^[\w-]{11}$/.test(s)?s:''}
function reels(){var R=$('#hm-r');if(!R)return Promise.resolve(false);if(!isHome||!on('reels')){rm(R);return Promise.resolve(false)}
var man=multi('reel').map(function(s){var p=pp(s),id=ytId(p[0]);return id?{id:id,t:p[1]||'Watch on YouTube',dur:p[2]||'',u:safeUrl(p[3])}:null}).filter(Boolean),min=Math.max(1,num('reels.min',3));
function paintR(list){var seen={};list=list.filter(function(v){if(!v||!/^[\w-]{11}$/.test(String(v.id))||seen[v.id])return false;seen[v.id]=1;return true}).slice(0,8);
if(list.length<min){rm(R);return false}
R.innerHTML='<section class="cs rl-s" id="reels"><header class="cs-h"><span class="cs-i">'+sv('play')+'</span><h2>'+esc(cfgT('reels.title','Reels & Short Videos'))+'</h2></header><div class="rl-g">'+list.map(function(v){
return '<article class="rl"><button class="rl-m" type="button" data-id="'+esc(v.id)+'" data-u="'+esc(v.u||'')+'" aria-label="Play: '+esc(v.t)+'"><img src="https://i.ytimg.com/vi/'+esc(v.id)+'/hqdefault.jpg" width="480" height="300" alt="" loading="lazy" decoding="async">'+(v.dur?'<span class="rl-d">'+esc(v.dur)+'</span>':'')+'<span class="rl-p">'+sv('play')+'</span><span class="rl-t" dir="auto">'+esc(v.t)+'</span></button></article>'}).join('')+'</div></section>';
R.onclick=function(e){var b=e.target.closest?e.target.closest('.rl-m'):null;if(!b)return;var id=b.getAttribute('data-id'),u=safeUrl(b.getAttribute('data-u')),t=b.getAttribute('aria-label').replace(/^Play: /,'');
modal('<iframe src="https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?autoplay=1&rel=0&playsinline=1" title="'+esc(t)+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-popups-to-escape-sandbox" allowfullscreen></iframe>'+(u?'<a class="md-l" href="'+esc(u)+'">Read the article</a>':'')+'<a class="md-l" href="https://www.youtube.com/watch?v='+encodeURIComponent(id)+'" rel="noopener noreferrer" target="_blank">Watch on YouTube</a>','md-v',t)};
return true}
if(man.length>=min||!on('reels.auto'))return Promise.resolve(paintR(man));
return fullFeed().then(function(a){return paintR(man.concat(a))})}
function skelS(n,c){var i,o='',r='<div class="cl"><span class="sk-b"></span><span class="sk-b"></span></div>';
for(i=0;i<n;i++)o+='<section class="cs sk '+rowCls(n,i)+'" aria-hidden="true"><header class="cs-h"><span class="sk-b sk-i"></span><span class="sk-b sk-h"></span></header><div class="cs-b"><div class="cf"><span class="sk-b"></span></div><div class="cl-list">'+r+r+r+'</div></div></section>';
return o+'<p class="sk-t" role="status">Loading articles\u2026</p>'}
function skelQ(n){var i,h='';for(i=0;i<n;i++)h+='<span class="qn-c sk" aria-hidden="true"><span class="sk-b"></span><span class="sk-b"></span></span>';return h}
function dedupeLatest(){if(!on('latest.dedupe')||!isHome)return;var f=$('.feed');if(!f)return;var cs=$$('.ic',f),dup=function(a){var l=$('.ic-t a',a);return !!(l&&USED[pk(l.href)])};
if(!cs.some(function(a){return !dup(a)}))return;cs.forEach(function(a){a.hidden=dup(a)})}
function home(){var Q=null,S=$('#hm-s'),R=$('#hm-r');
if(!isHome||!on('sections')){[Q,S,R].forEach(rm);return Promise.resolve()}
var defs=secDefs(),cnt=Math.max(3,Math.min(8,num('section.count',3))),strict=on('section.dedupe'),min=Math.max(1,num('section.min',1));
if(S){S.innerHTML=skelS(Math.min(Math.max(defs.length,3),5),4);S.setAttribute('aria-busy','true')}
if(Q){Q.innerHTML=skelQ(Math.min(defs.length+1,5));Q.setAttribute('aria-busy','true')}
var sp=HEROP.then(function(){return allFeed()}).then(function(all){LIVE=all;defs=defs.concat(autoDefs(all,defs)).slice(0,12);defs.forEach(function(d,k){d.o=k;d.pri=priIdx(d.t)>-1?1:0});defs.sort(function(a,b){return a.pri!==b.pri?b.pri-a.pri:(a.pri?priIdx(a.t)-priIdx(b.t):a.o-b.o)});if(on('section.main.only'))defs=defs.filter(function(d){return d.pri});defs.forEach(function(d,k){d.lay=d.pri?PRILAY[priIdx(d.t)]:(d.auto&&k%2?'card-compact':'card-list')});return Promise.all(defs.map(function(d){return secItems(d,cnt).catch(function(e){warn('feed-section',e);return[]})}))}).then(function(res){var out=[];
res.forEach(function(items,i){var pick=choose(items,defs[i].lay==='card-hero'?Math.min(cnt,4):4,USED,strict);if(pick.length&&pick.length>=min){mark(USED,pick);out.push({d:defs[i],i:i,items:pick})}});
if(S){if(out.length){S.innerHTML=out.map(function(o,j){return csH(o.d,o.items,o.i,tierCls(out,j))}).join('');S.removeAttribute('aria-busy');paint(S);imgFix(S)}else{rm(S);S=null}}
return out});
return Promise.all([sp,reels()]).then(function(r){
var h='';guard('extras',extras);
r[0].forEach(function(o){h+=qnCard('#sec-'+o.i,HUES[o.d.k]||HUES.def,HUES[o.d.k]?o.d.k:'star',o.d.t,o.d.tag)});
if(r[1])h+=qnCard('#reels',HUES.reels,'play',cfgT('reels.title','Reels & Short Videos'),cfgT('reels.tagline','Quick insights, Big ideas.'));
if($('#latest'))h+=qnCard('#latest',HUES.latest,'doc',cfgT('latest.title','Latest Articles'),cfgT('latest.tagline','Fresh perspectives. Always.'));
if(Q){if(h){Q.innerHTML=h;Q.removeAttribute('aria-busy')}else rm(Q)}
if(R)imgFix(R);
dedupeLatest()
}).catch(function(e){warn('home',e);[Q,S].forEach(function(b){if(b&&b.getAttribute('aria-busy'))rm(b)})})}
function nlCard(){var side=$('.col-side .section');if(!side||!isHome||$('#NewsletterCard'))return;
var a=String(C['newsletter.action']||'').trim(),ok=isHttps(a);
if(!ok)return;
var f=String(C['newsletter.field']||'email').replace(/[^\w\-.\[\]]/g,'')||'email',w=E('div','widget nlc');w.id='NewsletterCard';
w.innerHTML='<h2 class="wt"><span class="wi">'+sv('mail')+'</span>'+esc(cfgT('newsletter.heading','Newsletter'))+'</h2><p>'+esc(cfgT('newsletter.title',''))+'</p>'
+'<form action="'+esc(a)+'" method="post" target="_blank" rel="noopener noreferrer"><input type="email" name="'+esc(f)+'" required autocomplete="email" placeholder="'+esc(cfgT('newsletter.placeholder','Enter your email address'))+'" aria-label="'+esc(cfgT('newsletter.placeholder','Enter your email address'))+'"><button type="submit">'+esc(cfgT('newsletter.button','Subscribe'))+'</button></form>'
+'<ul><li>'+sv('gift')+'Free</li><li>'+sv('nospam')+'No Spam</li><li>'+sv('refresh')+'Unsubscribe Anytime</li></ul>';
var pop=$('#PopularPosts1',side);if(pop&&pop.nextSibling)side.insertBefore(w,pop.nextSibling);else if(pop)side.appendChild(w);else side.insertBefore(w,side.firstChild)}
function promo(){var side=$('.col-side .section');if(!side||!isHome||$('[data-promo]',side))return;var u=safeUrl(C['promo.url'])||'/search',w=E('div','widget pc'),ps=imgUrl(C['promo.image']);
if(!ps)return;
w.innerHTML='<img class="pc-img" src="'+esc(ps)+'" alt="" width="900" height="300" loading="lazy" decoding="async"><a href="'+esc(u)+'" aria-label="'+esc(cfgT('promo.title','Small steps today.')+' '+cfgT('promo.title2','Big changes tomorrow.'))+'"><span><i class="go">'+sv('arrow')+'</i></span></a>';
w.setAttribute('data-promo','1');side.appendChild(w)}
function tools(){var tl=$('#tl');if(!tl||tl.getAttribute('data-tl')==='1')return;tl.setAttribute('data-tl','1');
$$('li',tl).forEach(function(li){var t=$('.tl-t',li),i=$('.tl-i',li);if(!t||!i)return;var p=t.textContent.split('::'),h=p[0].trim(),
k=/\bai\b|prompt/i.test(h)?'brain':/calc/i.test(h)?'calc':/know|base|learn|guide|library/i.test(h)?'book':/convert|unit/i.test(h)?'swap':/word|count|writ/i.test(h)?'pen':/rss|feed/i.test(h)?'rss':/book|save|fav/i.test(h)?'bookmark':/dark|mode|theme/i.test(h)?'moon':'doc';
t.innerHTML=esc(en(h))+(p[1]?'<small>'+esc(p[1].trim())+'</small>':'');i.innerHTML=sv(k)});
tl.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a'):null;if(!a)return;var h=a.getAttribute('href')||'';
if(h==='#theme'){e.preventDefault();guard('theme-toggle',function(){setTheme(curTheme()==='dark'?'light':'dark')})}else if(h==='#bookmarks'){e.preventDefault();guard('bookmarks',bmOpen)}})}
function sideInit(){guard('newsletter-card',nlCard);guard('promo',promo);guard('tools',tools)}
function blocks(){var M={'block.topbar':'.topbar','block.promo':'.promo-sec,.pc','block.popular':'#PopularPosts1','block.tools':'#LinkList7','block.labels':'#Label1','block.touch':'#HTML12','block.newsletter':'#NewsletterCard','block.follow':'.ftr-follow'};
for(var k in M){if(!on(k))$$(M[k]).forEach(function(e){e.hidden=true;e.style.display='none'})}
H.setAttribute('data-sticky',on('sticky.header')?'on':'off');
try{if(on('reading.mode')&&ls('inqRd')==='1')H.classList.add('rd')}catch(e){}}
function readBtn(){if(!on('reading.mode'))return;var fz=$('#fsz'),pm=$('.pm');if(!pm||$('#rdb'))return;
var b=E('button','bm','');b.type='button';b.id='rdb';b.setAttribute('data-rd','1');
function st(){var o=H.classList.contains('rd');b.setAttribute('aria-pressed',o?'true':'false');b.textContent='Reading mode'}
st();b.onclick=function(){H.classList.toggle('rd');ls('inqRd',H.classList.contains('rd')?'1':'0');st()};pm.insertBefore(b,fz||null)}
function menu(){var nav=$('#nav');if(!nav||nav.getAttribute('data-nv')==='1')return;nav.setAttribute('data-nv','1');
var tops={},st=[],uid=0;$$('li',nav).forEach(function(li){var a=$('a',li);if(a&&a.textContent.trim().charAt(0)!=='_')tops[a.getAttribute('href')]=1});
$$('li',nav).forEach(function(li){var a=$('a',li);if(!a)return;var t=a.textContent.trim(),d=Math.min(t.match(/^_*/)[0].length,2),p=null;
if(d){a.textContent=t.replace(/^_+/,'').trim();if(tops[a.getAttribute('href')]){li.remove();return}tops[a.getAttribute('href')]=1;p=st[d-1]}
if(p){if(!p.sub){p.sub=E('ul','sub');p.sub.id='nsub'+(++uid);p.li.classList.add('has');p.li.appendChild(p.sub);if(p.li.parentNode.classList.contains('sub'))p.li.parentNode.classList.add('nest')}
p.sub.appendChild(li);st[d]={li:li,sub:null};st.length=d+1}
else st=[{li:li,sub:null}]});
$$('a',nav).forEach(function(a){a.textContent=en(a.textContent);try{var u=new URL(a.href,location.href);if(u.pathname===location.pathname&&u.search===location.search){a.setAttribute('aria-current','page');for(var q=a.parentNode.parentNode;q&&q!==nav;q=q.parentNode)if(q.tagName==='LI'){var pa=q.firstElementChild;if(pa&&pa.tagName==='A'&&!pa.hasAttribute('aria-current'))pa.setAttribute('aria-current','true')}}}catch(e){warn('menu-current',e)}});
$$('.wt,.ftr li a').forEach(function(e){if(e.textContent.indexOf('|')>-1)e.textContent=en(e.textContent)});
var h0=$('ul > li > a',nav);try{if(h0&&new URL(h0.href,location.href).pathname==='/'&&!$('svg',h0))h0.insertAdjacentHTML('afterbegin',sv('home','i'))}catch(e){warn('menu-home-icon',e)}
$$('a',nav).forEach(function(a){if(a.closest('.sub')||$('svg',a))return;var s=(a.textContent+' '+a.getAttribute('href')).toLowerCase(),k=/tech|\bai\b|artificial/.test(s)?'tech':/health|wellness|fitness/.test(s)?'health':/financ|invest|stock|bank/.test(s)?'finance':/business|educat|career/.test(s)?'business':/lifestyle/.test(s)?'sprout':/\bmore\b/.test(s)?'grid':'';if(k)a.insertAdjacentHTML('afterbegin',sv(k,'i'))});
var btn=$('#btnMenu'),mq=W.matchMedia('(max-width:820px)'),hv=W.matchMedia('(min-width:821px) and (hover:hover)'),PT='',tm=0,sup=0;
$$('li.has',nav).forEach(function(li){var a=$('a',li),sub=$('.sub',li);if(!a||!sub)return;var v=E('li','va'),l=E('a');l.href=a.getAttribute('href');l.textContent='View all '+a.textContent.trim();v.appendChild(l);sub.insertBefore(v,sub.firstChild);a.setAttribute('aria-controls',sub.id)});
function chain(li){var r=[];for(var p=li;p&&p!==nav;p=p.parentNode)if(p.tagName==='LI')r.push(p);return r}
function items(sub){var r=[];if(sub)for(var c=sub.firstElementChild;c;c=c.nextElementSibling)if(c.tagName==='LI'&&c.offsetParent!==null&&c.firstElementChild&&c.firstElementChild.tagName==='A')r.push(c.firstElementChild);return r}
function sync(){$$('li.has>a',nav).forEach(function(a){a.setAttribute('aria-expanded',a.parentNode.classList.contains('open')?'true':'false')})}
function shut(keep){$$('li.open',nav).forEach(function(l){if(!keep||keep.indexOf(l)<0)l.classList.remove('open')});sync()}
function closeAll(){shut(null)}
function fit(li){var s=$('.sub',li);if(!s||mq.matches)return;s.classList.remove('flip');if(s.getBoundingClientRect().right>H.clientWidth-8)s.classList.add('flip')}
function show(li){shut(chain(li));li.classList.add('open');fit(li);sync()}
function setMenu(o){o=!!o;nav.classList.toggle('open',o);H.classList.toggle('nvo',o&&mq.matches);if(btn){btn.setAttribute('aria-expanded',o?'true':'false');btn.setAttribute('aria-label',o?'Close menu':'Open menu')}
if(o){var h=$('#hdr');if(h)h.classList.remove('up');var x=$('#nvClose');if(x&&mq.matches)setTimeout(function(){x.focus()},50)}else closeAll()}
sync();
if(btn)btn.addEventListener('click',function(){setMenu(!nav.classList.contains('open'))});
var xb=$('#nvClose');if(xb)xb.addEventListener('click',function(){setMenu(false);if(btn)btn.focus()});
nav.addEventListener('pointerdown',function(e){PT=e.pointerType||''});
nav.addEventListener('pointerover',function(e){PT=e.pointerType||'';if(PT!=='mouse'||!hv.matches)return;clearTimeout(tm);var li=e.target.closest('li');if(!li||!nav.contains(li)){tm=setTimeout(closeAll,160);return}shut(chain(li));if(li.classList.contains('has')){li.classList.add('open');fit(li)}sync()});
nav.addEventListener('pointerleave',function(e){if(e.pointerType!=='mouse'||!hv.matches)return;clearTimeout(tm);tm=setTimeout(closeAll,160)});
nav.addEventListener('focusin',function(e){if(mq.matches||sup)return;var t=e.target,li=t.closest&&t.closest('li'),k=false;if(!li)return;try{k=t.matches(':focus-visible')}catch(_){}if(!k)return;clearTimeout(tm);shut(chain(li));if(li.classList.contains('has')&&li.firstElementChild===t){li.classList.add('open');fit(li)}sync()});
nav.addEventListener('focusout',function(e){if(mq.matches)return;var n=e.relatedTarget;if(!n||!nav.contains(n))closeAll()});
nav.addEventListener('click',function(e){var a=e.target.closest('li.has>a');
if(a){var li=a.parentNode,was=li.classList.contains('open');
if(!(mq.matches||!hv.matches||(e.detail&&PT!=='mouse')))return;
e.preventDefault();
if(was){li.classList.remove('open');$$('li.open',li).forEach(function(l){l.classList.remove('open')});sync()}else show(li);
return}
if(e.target.closest('a')&&mq.matches)setMenu(false)});
D.addEventListener('click',function(e){if(nav.contains(e.target)||(btn&&btn.contains(e.target)))return;closeAll();if(mq.matches&&nav.classList.contains('open'))setMenu(false)});
D.addEventListener('keydown',function(e){var op=nav.classList.contains('open'),k=e.key;
if(k==='Escape'){if(op){setMenu(false);if(btn)btn.focus();return}
var o=$$('li.open',nav);if(o.length){var l=o[o.length-1],f=D.activeElement,pa=l.firstElementChild;l.classList.remove('open');sync();if(f&&l.contains(f)&&pa){sup=1;pa.focus();sup=0}}return}
if(k==='Tab'&&op&&mq.matches){var f=$$('a,button',nav).filter(function(x){return x.offsetParent!==null&&getComputedStyle(x).visibility!=='hidden'});if(!f.length)return;var p=f[0],z=f[f.length-1];
if(e.shiftKey&&D.activeElement===p){e.preventDefault();z.focus()}else if(!e.shiftKey&&D.activeElement===z){e.preventDefault();p.focus()}return}
var a=e.target&&e.target.closest?e.target.closest('a'):null;if(!a||!nav.contains(a)||e.altKey||e.ctrlKey||e.metaKey)return;
var li=a.parentNode,box=li.parentNode,ins=box.classList.contains('sub'),has=li.classList.contains('has');
if(k==='ArrowDown'&&!ins&&has){e.preventDefault();show(li);var g=items($('.sub',li))[0];if(g)g.focus()}
else if(ins&&(k==='ArrowDown'||k==='ArrowUp'||k==='Home'||k==='End')){var L=items(box),i=L.indexOf(a),n=k==='ArrowDown'?i+1:k==='ArrowUp'?i-1:k==='Home'?0:L.length-1;e.preventDefault();if(n<0)box.parentNode.firstElementChild.focus();else L[n%L.length].focus()}
else if(ins&&k==='ArrowRight'&&has){e.preventDefault();show(li);var h=items($('.sub',li))[0];if(h)h.focus()}
else if(ins&&k==='ArrowLeft'){e.preventDefault();var pl=box.parentNode;pl.classList.remove('open');sync();sup=1;pl.firstElementChild.focus();sup=0}});
var rs=function(e){if(!e.matches)setMenu(false);else closeAll()};
if(mq.addEventListener)mq.addEventListener('change',rs);else if(mq.addListener)mq.addListener(rs)}
function header(){if(H.getAttribute('data-hd')==='1')return;H.setAttribute('data-hd','1');
var LG=imgUrl(C.logo);if(LG){var b=$('.brand');if(b){var im=E('img');im.addEventListener('error',function(){rm(im)});im.src=LG;im.alt=(D.title||'').split(' | ')[0];im.style.height=(num('logo.height',40))+'px';im.decoding='async';var nm=$('.brand-name',b);b.innerHTML='';if(nm)b.appendChild(nm);b.appendChild(im)}}
D.addEventListener('keydown',function(e){var q=$('#hsq');if(e.key==='/'&&q&&!/^(INPUT|TEXTAREA|SELECT)$/.test((D.activeElement||{}).tagName||'')&&!(D.activeElement&&D.activeElement.isContentEditable)){e.preventDefault();q.focus();q.scrollIntoView({block:'center'})}});
var last=0,hdr=$('#hdr'),btt=$('#btt'),nvEl=$('#nav'),tick=false;
W.addEventListener('scroll',function(){if(tick)return;tick=true;requestAnimationFrame(function(){var y=W.pageYOffset;
if(hdr)hdr.classList.toggle('up',y>last+4&&y>260&&!(nvEl&&nvEl.classList.contains('open')));if(y<last-4||y<260)hdr&&hdr.classList.remove('up');last=y;
if(btt)btt.classList.toggle('show',y>900);tick=false})},{passive:true});
if(btt)btt.onclick=function(){W.scrollTo({top:0,behavior:reduce?'auto':'smooth'})};}
function fbrand(){var f=$('#fbrand'),b=$('.hdr .brand');if(!f||!b||f.firstElementChild)return;var c=b.cloneNode(true);c.removeAttribute('id');f.appendChild(c)}
function slug(t,i){try{var s=t.trim().toLowerCase().replace(/\s+/g,'-').replace(/[^\p{L}\p{N}-]/gu,'').slice(0,60);return s||'s'+i}catch(e){return 's'+i}}
function article(){var pb=$('#pb');if(!pb||pb.getAttribute('data-ar')==='1')return;pb.setAttribute('data-ar','1');
var title=($('.pt')||{}).textContent||D.title,mn=mins(pb.innerHTML),pm=$('.pm'),tm=$('.pm time'),fz=$('#fsz');
RT.m[uk(location.href)]=mn;rtSave();
if(pm){var r=E('span','rt');r.textContent=mn+' min read';var lt=$$('.pm time').pop();if(lt&&lt.parentNode===pm)pm.insertBefore(r,lt.nextSibling);else pm.insertBefore(r,fz||null);
var og=$('meta[property="og:image"]'),it={u:uk(location.href),t:String(title).trim(),i:og?og.getAttribute('content'):''},b=E('button','bm','');b.type='button';b.id='bm';
function bs(){var s=bmHas(it.u);b.setAttribute('aria-pressed',s?'true':'false');b.innerHTML=sv('bookmark')+(s?'Saved':'Save')}
bs();b.onclick=function(){bmToggle(it);bs()};pm.insertBefore(b,fz||null)}
$$('table',pb).forEach(function(t){if(t.classList.contains('tr-caption-container')){t.setAttribute('role','presentation');return}if(t.closest('.tbl'))return;var w=E('div','tbl'),rw=t.rows&&t.rows[0];w.tabIndex=0;w.setAttribute('role','region');w.setAttribute('aria-label','Scrollable table');if(rw&&rw.cells.length>=3)w.classList.add('wide');t.parentNode.insertBefore(w,t);w.appendChild(t)});
$$('pre',pb).forEach(function(p){if(p.parentNode.classList.contains('code'))return;var w=E('div','code'),b=E('button','cp','Copy');p.parentNode.insertBefore(w,p);w.appendChild(p);w.appendChild(b);p.tabIndex=0;p.setAttribute('role','region');p.setAttribute('aria-label','Code block');b.type='button';b.setAttribute('aria-label','Copy code to clipboard');b.onclick=function(){var t=p.innerText.trimEnd();(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent='Copied \u2713';setTimeout(function(){b.textContent='Copy'},1600)}).catch(function(e){warn('copy-code',e)})}});
$$('img',pb).forEach(function(i,n){i.decoding='async';if(!i.hasAttribute('alt'))i.alt='';if(n===0)i.setAttribute('fetchpriority','high');else if(!i.getAttribute('loading'))i.loading='lazy';var w=+i.getAttribute('data-original-width')||+i.getAttribute('width'),h=+i.getAttribute('data-original-height')||+i.getAttribute('height');if(w&&h&&!i.getAttribute('width')&&!i.getAttribute('height')){i.setAttribute('width',w);i.setAttribute('height',h)}if(w&&h&&h/w>1.5)i.classList.add('tall')});
$$('iframe',pb).forEach(function(f){if(!f.getAttribute('loading'))f.loading='lazy'});
$$('video',pb).forEach(function(v){if(!v.getAttribute('preload'))v.preload='metadata'});
Array.prototype.slice.call(pb.children).forEach(function(e){if(/^(DIV|P|SPAN)$/.test(e.tagName)&&!e.id&&!e.querySelector('img,iframe,video,audio,table,pre,object,embed,svg,hr,canvas,[id],a[name]')&&!e.textContent.replace(/[\s\u00a0]+/g,''))e.classList.add('ge')});
(function(){var f=$('img',pb);if(!f)return;var c=f;while(c.parentNode&&c.parentNode!==pb)c=c.parentNode;if(c.parentNode!==pb)return;var k=0,sb=c.previousElementSibling;while(sb){if(!sb.classList.contains('ge')&&sb.textContent.trim().length>0)k++;sb=sb.previousElementSibling}if(k===0)c.classList.add('fi')})();
$$('h1',pb).forEach(function(h){var n=E('h2','',h.innerHTML);Array.prototype.forEach.call(h.attributes,function(a){n.setAttribute(a.name,a.value)});h.parentNode.replaceChild(n,h)});
var hs=$$('h2,h3',pb).filter(function(h){return h.textContent.trim().length>1}),used={},d=null;
hs.forEach(function(h,i){var base=h.id||slug(h.textContent,i+1),id=base,k=1;while(used[id]||(D.getElementById(id)&&D.getElementById(id)!==h))id=base+'-'+(++k);used[id]=1;h.id=id});
if(on('toc')&&hs.length>=num('toc.min',3)){
var li=hs.map(function(h){return '<li class="'+(h.tagName==='H3'?'l3':'l2')+'"><a href="#'+esc(h.id)+'" dir="auto">'+esc(h.textContent.trim())+'</a></li>'}).join('');
d=E('details','toc','<summary>In this article</summary><nav aria-label="Table of contents"><ol>'+li+'</ol></nav>');d.open=W.innerWidth>=900;pb.insertBefore(d,pb.firstChild);
d.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(!a)return;var t=D.getElementById(a.getAttribute('href').slice(1));if(!t)return;t.setAttribute('tabindex','-1');setTimeout(function(){try{t.focus({preventScroll:true})}catch(x){}},0)});
if('IntersectionObserver' in W){var lk={},cur=null;$$('a',d).forEach(function(a){lk[a.getAttribute('href').slice(1)]=a});
var io=new IntersectionObserver(function(es){es.forEach(function(e){var a=e.isIntersecting&&lk[e.target.id];if(!a)return;if(cur)cur.removeAttribute('aria-current');cur=a;a.setAttribute('aria-current','true')})},{rootMargin:'-90px 0px -65% 0px'});
hs.forEach(function(h){io.observe(h)})}}
hs.forEach(function(h){var a=E('a','ha','#');a.href='#'+h.id;a.setAttribute('aria-label','Link to this section');h.appendChild(a)});
var t0=Date.now();function goHash(){var x=location.hash;if(x.length<2)return;var id=x.slice(1);try{id=decodeURIComponent(id)}catch(e){}var t=D.getElementById(id);if(t&&pb.contains(t))t.scrollIntoView({behavior:'auto',block:'start'})}
if(location.hash){goHash();W.addEventListener('load',function(){if(Date.now()-t0<5000)goHash()},{once:true})}
W.addEventListener('beforeprint',function(){$$('img',pb).forEach(function(i){if(i.loading==='lazy')i.loading='eager'})});
if(fz){if(!on('fontsize'))fz.remove();else{fz.setAttribute('role','group');fz.setAttribute('aria-label','Text size');fz.innerHTML='<button type="button" data-d="-1" aria-label="Decrease text size (A-)">A-</button><button type="button" data-d="1" aria-label="Increase text size (A+)">A+</button>';fz.onclick=function(e){var b=e.target.closest('button');if(!b)return;var cs=parseFloat(getComputedStyle(pb).fontSize),mn2=parseFloat(C['font.min'])||14,mx=parseFloat(C['font.max'])||26,st=parseFloat(C['font.step'])||1.5,v=Math.min(mx,Math.max(mn2,cs+(+b.getAttribute('data-d'))*st));H.style.setProperty('--fs',v+'px');ls('hypFs',v+'px');ls('hypFsB',String(C['font.size']==null?'':C['font.size']))}}}
var top=adBox('post-top','',true);if(top)pb.parentNode.insertBefore(top,pb);
var bot=adBox('post-bottom','',false);if(bot)pb.parentNode.insertBefore(bot,pb.nextSibling);
var N=num('ad.paragraph',3),ev=num('ad.every',0);
if(N>0&&adSrc('post-mid')){var ps=Array.prototype.filter.call(pb.children,function(e){return /^(P|DIV)$/.test(e.tagName)&&e.textContent.trim().length>60&&!e.querySelector('img,pre,table,iframe')});
if(ps.length>N){var at=N-1;while(at<ps.length-1){var ab2=adBox('post-mid','in',false);if(ab2)ps[at].parentNode.insertBefore(ab2,ps[at].nextSibling);if(!ev)break;at+=ev}}}
related(title)}
function related(title){var box=$('#rel');if(!box&&B0.classList.contains('pt-static_page')){var pgA=$('article.post.page');if(pgA){box=E('section','sec');box.id='rel';box.hidden=true;pgA.appendChild(box)}}if(!box||!on('related'))return;
var tags=$$('#plab a').map(function(a){return a.textContent.trim()}),n=num('related.count',4),cur=location.pathname;
function path(u){return String(u).replace(/^https?:\/\/[^\/]+/,'').split('?')[0]}
var go=function(){var seen={},out=[];seen[cur]=1;
function add(a){(a||[]).forEach(function(i){var p=path(i.u);if(out.length>=n||seen[p])return;seen[p]=1;out.push(i)})}
Promise.all(tags.slice(0,3).map(function(l){return feed(l,n+3).catch(function(e){warn('feed-related-tag',e);return[]})})).then(function(res){res.forEach(add);return out.length>=n?0:feed('',30).then(add)}).catch(function(e){warn('feed-related',e)}).then(function(){
if(!out.length)return;
box.innerHTML='<h2 class="mh">Related articles</h2><div class="rel-g">'+out.map(ic).join('')+'</div>';box.hidden=false;paint(box);rtLoad()})};
lazyBox($('#pb')||$('.pb')||box,go)}
function progress(){if(!on('progress'))return;var pb=$('#pb');if(!pb||$('#rp'))return;
var bar=E('div','rp'),fill=E('div','rp-f'),tick=false;bar.id='rp';bar.setAttribute('aria-hidden','true');bar.appendChild(fill);B0.appendChild(bar);
function upd(){tick=false;var r=pb.getBoundingClientRect(),span=r.height-W.innerHeight,p=span>0?-r.top/span:(r.top<=0?1:0);fill.style.transform='scaleX('+Math.min(1,Math.max(0,p)).toFixed(4)+')'}
W.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});W.addEventListener('resize',upd);upd()}
function shareBar(){var box=$('#shr'),b=box&&$('#shr-b',box);if(!b||!on('share')||b.getAttribute('data-ready')==='1')return;b.setAttribute('data-ready','1');
var u=uk((($('link[rel="canonical"]')||{}).href)||location.href),t=String((($('.pt')||{}).textContent)||D.title).trim(),eu=encodeURIComponent(u),et=encodeURIComponent(t),st=E('span','vh','');st.setAttribute('role','status');
if(navigator.share){var n=E('button','pri','Share\u2026');n.type='button';n.onclick=function(){navigator.share({title:t,url:u}).catch(function(e){if(e&&e.name!=='AbortError')warn('share',e)})};b.appendChild(n)}
var c=E('button','','Copy link');c.type='button';
function done(){c.textContent='Link copied \u2713';st.textContent='Link copied to clipboard';setTimeout(function(){c.textContent='Copy link'},2000)}
c.onclick=function(){var p=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(u):Promise.reject();p.then(done).catch(function(){try{var ta=E('textarea');ta.value=u;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;opacity:0';D.body.appendChild(ta);ta.select();var ok=D.execCommand('copy');ta.remove();if(ok)done();else W.prompt('Copy this link',u)}catch(e){W.prompt('Copy this link',u)}})};
b.appendChild(c);
[['X','https://x.com/intent/post?url='+eu+'&text='+et],['Facebook','https://www.facebook.com/sharer/sharer.php?u='+eu],['LinkedIn','https://www.linkedin.com/sharing/share-offsite/?url='+eu],['WhatsApp','https://wa.me/?text='+et+'%20'+eu],['Telegram','https://t.me/share/url?url='+eu+'&text='+et],['Email','mailto:?subject='+et+'&body='+eu]].forEach(function(x){
var a=E('a','',esc(x[0]));a.href=x[1];if(x[0]==='Email')a.setAttribute('aria-label','Share by email');else{a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label','Share on '+x[0]+' (opens in a new tab)')}b.appendChild(a)});
b.appendChild(st);box.hidden=false}
function postUpdated(){var a=$('article.post'),el=$('#upd'),pid=a&&a.getAttribute('data-pid');if(!el||!pid||!/^\d+$/.test(pid)||!W.fetch)return;
var key='inqUpd'+pid,c=null;try{c=JSON.parse(sessionStorage.getItem(key)||'null')}catch(e){}
function show(p,u){var pu=Date.parse(p),uu=Date.parse(u);if(isNaN(pu)||isNaN(uu))return;el.setAttribute('datetime',u);if(uu-pu>864e5){el.textContent='Updated '+fmt(u);el.hidden=false}}
if(c&&c.p&&c.u){show(c.p,c.u);return}
fx('/feeds/posts/default/'+pid+'?alt=json').then(function(r){if(!r.ok)throw new Error(r.status);return r.json()}).then(function(j){var e=j.entry;if(!e||!e.published||!e.updated)return;try{sessionStorage.setItem(key,JSON.stringify({p:e.published.$t,u:e.updated.$t}))}catch(x){}show(e.published.$t,e.updated.$t)}).catch(function(e){warn('post-updated',e)})}
function postExtras(){var pb=$('#pb'),a=$('article.post');if(!pb||!a)return;
[['tags','#plab'],['authorbox','#ab'],['postnav','#pn']].forEach(function(p){if(!on(p[0])){var e=$(p[1]);if(e){e.hidden=true;e.style.display='none'}}});
}
function phFix(root){$$('.ic-m.ph .ic-ph,.cf-m.ph .ic-ph,.cl-m.ph .ic-ph',root).forEach(function(p){var c=p.closest('.ic,.cf,.cl'),t=c&&$('.ic-t,.cf-t,.cl-t',c),ch=t?t.textContent.trim().charAt(0):'';if(ch)p.textContent=ch})}
function imgFix(root){$$('.ic-m img,.cf-m img,.cl-m img,.rl-m img,.pl-th img,.hero-bg img',root).forEach(function(i){if(i.getAttribute('data-f'))return;i.setAttribute('data-f','1');
function bad(){var m=i.closest('.ic-m,.cf-m,.cl-m');rm(i);if(m&&!$('.ic-ph',m)){m.classList.add('ph');m.insertBefore(E('span','ic-ph','\u2022'),m.firstChild);phFix(m.parentNode)}}
i.addEventListener('error',bad);if(i.complete&&i.naturalWidth===0&&i.getAttribute('src')&&i.getAttribute('loading')!=='lazy')bad()})}
function listing(){var f=$('.feed');
if(f&&!$('.ic',f)){f.innerHTML='<p class="empty">No articles here yet.</p>'}
phFix(f);
var pg=$('.pager');if(f&&pg&&on('loadmore')&&'DOMParser' in W&&W.fetch&&pg.getAttribute('data-pg')!=='1'){pg.setAttribute('data-pg','1');var busy=0;pg.addEventListener('click',function(e){var a=e.target.closest('a.more');if(!a||busy)return;e.preventDefault();busy=1;a.setAttribute('aria-busy','true');var tries=0;
function seen(){var s={};$$('.ic-t a',f).forEach(function(x){s[pk(x.href)]=1});return s}
function load(url){if(!sameOrigin(url))return Promise.reject(new Error('origin'));return fx(url).then(function(r){if(!r.ok)throw new Error(r.status);return r.text()}).then(function(t){
var d=new DOMParser().parseFromString(t,'text/html'),nf=d.querySelector('.feed'),nm=d.querySelector('a.more');if(!nf)throw new Error('feed');
var s=seen(),add=0;Array.prototype.slice.call(nf.children).forEach(function(c){if(c.classList.contains('empty'))return;$$('script,iframe,object,embed',c).forEach(rm);$$('*',c).concat([c]).forEach(function(n){Array.prototype.slice.call(n.attributes).forEach(function(at){if(/^on/i.test(at.name))n.removeAttribute(at.name)})});var l=c.querySelector('.ic-t a');if(l&&s[pk(l.href)])return;f.appendChild(D.adoptNode(c));add++});
if(nm&&sameOrigin(nm.href)){a.href=nm.href;if(!add&&++tries<3)return load(nm.href)}else a.remove()})}
load(a.href).then(function(){a.removeAttribute('aria-busy');busy=0;fmtAll();paint(f);phFix(f);imgFix(f);dedupeLatest();rtLoad()}).catch(function(e){warn('pager',e);if(sameOrigin(a.href))location.href=a.href;else{a.removeAttribute('aria-busy');busy=0}})})}
var nf2=$('#nfl');if(nf2)feed('',6).then(function(a){nf2.innerHTML='<div class="g3">'+a.map(ic).join('')+'</div>';paint(nf2);imgFix(nf2);rtLoad()}).catch(function(e){warn('feed-404',e)})
var lt=$('#latest h2');if(lt&&C['latest.title'])lt.textContent=C['latest.title'];var lp=$('#latest p');if(lp&&C['latest.tagline'])lp.textContent=C['latest.tagline']}
var SOC=[
['facebook','Facebook','<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'],
['x','X','<path class="f" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>'],
['instagram','Instagram','<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>'],
['youtube','YouTube','<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><path d="M9.75 15.02l5.75-3.27-5.75-3.27z"/>'],
['telegram','Telegram','<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>'],
['whatsapp','WhatsApp','<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'],
['linkedin','LinkedIn','<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'],
['rss','RSS','<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>']
];
function social(){var f=$('#fsocial');if(!f)return;var h='';
SOC.forEach(function(s){var u=safeUrl(C['social.'+s[0]]);
if(u&&u.charAt(0)!=='#')h+='<a href="'+esc(u)+'" rel="noopener me" target="_blank" aria-label="'+s[1]+'" title="'+s[1]+'"><svg viewBox="0 0 24 24" aria-hidden="true">'+s[2]+'</svg></a>'});
f.innerHTML=h;var col=f.closest('.ftr-follow');if(col)col.hidden=!h;f.hidden=!h}
function fmail(c){var em=String(C['footer.email']||'').trim();if(/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(em))c.insertAdjacentHTML('beforeend','<a class="ft-mail" href="mailto:'+esc(em)+'">'+sv('mail')+'<span>'+esc(em)+'</span></a>')}
function fcta(){var c=$('#fcta');if(!c)return;var u=safeUrl(C['footer.cta.url'])||'/search';c.innerHTML='<a href="'+esc(u)+'"><span class="sp2">'+sv('sprout')+'</span><span>'+esc(cfgT('footer.cta','Better knowledge.'))+'<br>'+esc(cfgT('footer.cta2','Brighter future.'))+'</span><i class="go">'+sv('arrow')+'</i></a>';fmail(c)}
function siteCopy(){var b=$('#sitecopy');if(!b)return;
var bn=$('.brand-name'),ttl=bn?bn.textContent.trim():D.title,yy=String(new Date().getFullYear()),
t=String(C.copyright||'').replace(/\{year\}/gi,function(){return yy}).replace(/\{title\}/gi,function(){return ttl}).trim(),
d=String(C.developer||'').trim(),lb=String(C['developer.label']||'').trim(),u=safeUrl(C['developer.url']),h='';
if(t)h+='<div class="cpy" dir="auto">'+esc(t)+'</div>';
if(d)h+='<div class="dev" dir="auto">'+(lb?esc(lb)+' ':'')+(u?'<a href="'+esc(u)+'" rel="noopener" target="_blank">'+esc(d)+'</a>':'<b>'+esc(d)+'</b>')+'</div>';
b.innerHTML=h;b.hidden=!h}
function gtSync(){var g=$('#gt');if(!g)return;
$$('a[data-s]',g).forEach(function(a){var u=safeUrl(C['social.'+a.getAttribute('data-s')]);if(u)a.href=u;else a.parentNode.hidden=true});
if(!$('li:not([hidden])',g)){var w=g.closest('.widget');if(w)w.hidden=true}}
function ovrNotice(){if(B0.id==='layout'||/[?&]hyp(=|&|$)/.test(location.search)||$('.ovr'))return;var n=0;if(DV)for(var k in DV)if(!unsafeKey(k)&&k.indexOf('__')!==0&&k!=='panel.src')n++;if(!n)return;var a=E('a','ovr','Local settings active ('+n+')'),hb=$('.hdr .brand');a.href=((hb&&hb.href)||'/').replace(/[?#].*$/,'')+'?hyp';a.title='Settings saved on this device override the Controls gadget. Open the panel to review or reset them.';B0.appendChild(a)}
W.__hyp={C:C,v:'3.4',hook:1,base:BASE,vars:VARS,secs:SECS,apply:applyVars,remote:remote};
try{W.addEventListener('error',function(e){warn('runtime',e&&e.error)});W.addEventListener('unhandledrejection',function(e){warn('promise',e&&e.reason)});
document.addEventListener('submit',function(e){var f=e.target;if(!f||!f.classList||!f.classList.contains('hs'))return;var i=f.querySelector('input[name=q]');if(!i)return;i.value=i.value.replace(/\s+/g,' ').trim();if(!i.value){e.preventDefault();i.focus()}})}catch(x){}
guard('theme',themeInit);guard('today',today);guard('topbar',topbarX);guard('menu',menu);guard('header',header);guard('footer-brand',fbrand);guard('dates',fmtAll);guard('social',social);guard('footer-cta',fcta);guard('footer-cats',fcats);guard('social-widget',gtSync);guard('site-copy',siteCopy);
if(B0.classList.contains('is-home')&&!isHome)B0.classList.add('pg-old');
guard('hero',hero);guard('sidebar',sideInit);guard('blocks',blocks);guard('paint',function(){paint(D)});
Promise.resolve(guard('home',home)).then(function(){guard('paint',function(){paint(D)});guard('reading-time',rtLoad)},function(e){warn('home',e);guard('reading-time',rtLoad)});
if(isPost){guard('article',article);guard('reading-button',readBtn);guard('post-extras',postExtras);guard('share-bar',shareBar);guard('reading-progress',progress);guard('post-updated',postUpdated)}else if(B0.classList.contains('pt-static_page'))guard('related',related);
guard('override-notice',ovrNotice);guard('listing',listing);guard('images',function(){imgFix(D)});guard('reading-time',rtLoad);
function openPanel(){if(B0.id==='layout')return;if(W.__hypPanel)return W.__hypPanel.open();var s=$('#hyp-panel');if(!s){if(!B0.classList.contains('is-home')){var hb=$('.hdr .brand');if(hb&&hb.href)location.replace(hb.href.replace(/[?#].*$/,'')+'?hyp')}return}var e=D.createElement('script'),u=s.getAttribute('data-src');if(u)e.src=u;else e.text=s.textContent;D.head.appendChild(e)}
if(/[?&]hyp(=|&|$)/.test(location.search))guard('panel',openPanel);
if(W.requestIdleCallback)W.requestIdleCallback(function(){remote()});else setTimeout(function(){remote()},1500);
})();
