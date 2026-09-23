(function(){
  if(window.__shopNexaFinalV2)return; window.__shopNexaFinalV2=true;
  const money=n=>Number(n||0).toLocaleString('en-PK');
  const esc=v=>String(v??'').replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[m]));
  function imgs(p){
    if(typeof window.imageList==='function')return window.imageList(p);
    const a=Array.isArray(p.images)?p.images:[];
    return [...a.map(x=>typeof x==='string'?x:x&&x.url),p.image].filter(Boolean);
  }
  const style=document.createElement('style');
  style.textContent=`
  /* Product cards: remove the visible image frame and never crop product photos */
  .product-image{height:auto!important;min-height:0!important;background:transparent!important;border:0!important;border-radius:0!important;overflow:visible!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:0!important}
  .product-image img{width:100%!important;height:auto!important;max-height:280px!important;object-fit:contain!important;display:block!important;border:0!important;border-radius:0!important;background:transparent!important;padding:0!important}
  .card{overflow:visible!important}
  .sn-store-product{position:fixed;inset:0;z-index:999999;background:#fff;color:#171717;overflow:auto;font-family:Inter,Arial,sans-serif}
  .sn-store-product *{box-sizing:border-box}.sn-sp-top{height:58px;border-bottom:1px solid #e8e8e8;display:flex;align-items:center;justify-content:space-between;padding:0 5%;background:#fff;position:sticky;top:0;z-index:5}.sn-sp-brand{font-size:18px;font-weight:800;letter-spacing:.4px}.sn-sp-brand span{color:#f4b400}.sn-sp-close{width:38px;height:38px;border:1px solid #ddd;border-radius:50%;background:#fff;color:#333;font-size:22px;cursor:pointer}.sn-sp-breadcrumb{max-width:1200px;margin:0 auto;padding:18px 5%;font-size:12px;color:#777}.sn-sp-main{max-width:1200px;margin:0 auto;padding:5px 5% 55px;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(350px,.95fr);gap:55px}.sn-sp-gallery{min-width:0}.sn-sp-photo{height:min(68vh,600px);min-height:380px;border:1px solid #eee;border-radius:8px;background:#fafafa;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}.sn-sp-photo img{width:100%;height:100%;object-fit:contain;padding:35px}.sn-sp-count{position:absolute;bottom:14px;right:14px;background:#fff;border:1px solid #ddd;border-radius:20px;padding:6px 10px;font-size:11px;color:#555}.sn-sp-nav{position:absolute;inset:0;display:flex;align-items:center;justify-content:space-between;padding:0 10px;pointer-events:none}.sn-sp-nav button{pointer-events:auto;width:38px;height:38px;border:1px solid #ddd;background:#fff;border-radius:50%;font-size:22px;color:#333;box-shadow:0 2px 8px #0001;cursor:pointer}.sn-sp-thumbs{display:flex;gap:8px;overflow:auto;padding:12px 0}.sn-sp-thumbs img{width:72px;height:72px;object-fit:contain;background:#fafafa;border:1px solid #ddd;border-radius:6px;padding:3px;cursor:pointer}.sn-sp-thumbs img.active{border:2px solid #171717}.sn-sp-info{padding:8px 0}.sn-sp-category{text-transform:uppercase;font-size:10px;letter-spacing:2px;color:#777;margin-bottom:12px}.sn-sp-info h1{font-size:clamp(28px,4vw,42px);line-height:1.15;margin:0 0 12px;font-weight:700}.sn-sp-stars{font-size:13px;letter-spacing:2px;margin-bottom:18px;color:#f4b400}.sn-sp-price{font-size:27px;font-weight:700;margin-bottom:7px}.sn-sp-old{text-decoration:line-through;color:#999;font-size:14px;margin-bottom:18px}.sn-sp-line{height:1px;background:#e9e9e9;margin:20px 0}.sn-sp-cod{display:flex;align-items:center;gap:9px;font-size:12px;font-weight:700;margin:16px 0}.sn-sp-cod i{color:#20a35a}.sn-sp-desc{font-size:14px;line-height:1.8;color:#555;white-space:pre-line;margin-bottom:20px}.sn-sp-qty{display:flex;align-items:center;gap:12px;margin:18px 0}.sn-sp-qty label{font-size:12px;font-weight:700}.sn-sp-qtybox{display:flex;border:1px solid #ccc;border-radius:5px;overflow:hidden}.sn-sp-qtybox button{width:35px;height:35px;border:0;background:#f7f7f7;cursor:pointer}.sn-sp-qtybox span{width:40px;display:grid;place-items:center;font-size:12px}.sn-sp-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}.sn-sp-actions button{height:50px;border-radius:5px;font-size:12px;font-weight:800;cursor:pointer}.sn-sp-cart{border:1px solid #222;background:#fff;color:#111}.sn-sp-cart:hover{background:#111;color:#fff}.sn-sp-order{border:1px solid #111;background:#111;color:#fff}.sn-sp-order:hover{background:#f4b400;border-color:#f4b400;color:#111}.sn-sp-trust{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:22px}.sn-sp-trust div{border:1px solid #eee;border-radius:5px;padding:12px 8px;text-align:center;font-size:10px;color:#666}.sn-sp-trust b{display:block;color:#222;margin-bottom:4px}.sn-sp-details{max-width:1200px;margin:0 auto;border-top:1px solid #e8e8e8;padding:35px 5% 70px}.sn-sp-details h3{font-size:18px;margin:0 0 15px}.sn-sp-details p{max-width:800px;color:#666;font-size:13px;line-height:1.8;white-space:pre-line}.sn-sp-video{max-width:800px;margin-top:25px}.sn-sp-video video{width:100%;border-radius:7px;background:#000}.sn-sp-badge{position:absolute;left:14px;top:14px;background:#111;color:#fff;padding:7px 10px;border-radius:3px;font-size:9px;font-weight:800;letter-spacing:1px}.sn-sp-back{font-size:12px;color:#555;cursor:pointer;border:0;background:none;padding:0}.sn-sp-back:hover{text-decoration:underline}@media(max-width:850px){.sn-sp-main{grid-template-columns:1fr;gap:25px;padding-top:0}.sn-sp-photo{height:55vh;min-height:300px}.sn-sp-info h1{font-size:30px}.sn-sp-trust{grid-template-columns:1fr 1fr 1fr}}@media(max-width:520px){.sn-sp-top{padding:0 4%}.sn-sp-main{padding-left:4%;padding-right:4%}.sn-sp-breadcrumb{padding-left:4%;padding-right:4%}.sn-sp-details{padding-left:4%;padding-right:4%}.sn-sp-photo{height:48vh}.sn-sp-actions{grid-template-columns:1fr}.sn-sp-trust{grid-template-columns:1fr}.sn-sp-thumbs img{width:62px;height:62px}}
  `;
  style.textContent += `
    #sn-store-product{background:#fff!important;color:#171717!important}
    #sn-store-product .sn-sp-top,#sn-store-product .sn-sp-close{background:#fff!important;color:#171717!important}
    #sn-store-product .sn-sp-photo{background:#fafafa!important;border-color:#e5e5e5!important}
    #sn-store-product .sn-sp-info{background:#fff!important;color:#171717!important}
    #sn-store-product .sn-sp-details{background:#fff!important;color:#171717!important}
    #sn-store-product .sn-sp-details p,#sn-store-product .sn-sp-desc{color:#555!important}
    #sn-store-product .sn-sp-nav button{background:#fff!important;color:#333!important;border-color:#ddd!important}
    #sn-store-product .sn-sp-thumbs img{background:#fafafa!important;border-color:#ddd!important}
  `;
  document.head.appendChild(style);
  function close(){const e=document.getElementById('sn-store-product');if(e)e.remove();document.body.style.overflow='';}
  function open(id){
    const p=(window.products||[]).find(x=>x.id===id);if(!p)return;
    close();const a=imgs(p),price=Number(p.price||0),old=Number(p.oldPrice||p.compareAtPrice||0),category=esc(p.category||'Shop Nexa');
    const e=document.createElement('div');e.id='sn-store-product';e.className='sn-store-product';
    e.innerHTML=`<div class="sn-sp-top"><div class="sn-sp-brand">SHOP <span>NEXA</span></div><button class="sn-sp-close" aria-label="Close">×</button></div><div class="sn-sp-breadcrumb"><button class="sn-sp-back">← Back to products</button></div><main class="sn-sp-main"><section class="sn-sp-gallery"><div class="sn-sp-photo">${a[0]?`<img id="snSpImg" src="${esc(a[0])}" alt="${esc(p.name||'Product')}">`:'<div style="font-size:60px;color:#ccc">▣</div>'}<span class="sn-sp-count" id="snSpCount">${a.length?1:0} / ${a.length}</span><div class="sn-sp-nav"><button id="snSpPrev">‹</button><button id="snSpNext">›</button></div>${old?'<span class="sn-sp-badge">SALE</span>':''}</div><div class="sn-sp-thumbs">${a.map((u,i)=>`<img data-i="${i}" class="${!i?'active':''}" src="${esc(u)}" alt="Product image ${i+1}">`).join('')}</div></section><section class="sn-sp-info"><div class="sn-sp-category">${category}</div><h1>${esc(p.name||'Product')}</h1><div class="sn-sp-stars">★★★★★ <span style="color:#777;letter-spacing:0;font-size:11px">(Customer favourite)</span></div><div class="sn-sp-price">Rs. ${money(price)}</div>${old?`<div class="sn-sp-old">Rs. ${money(old)}</div>`:''}<div class="sn-sp-line"></div><div class="sn-sp-cod"><i>✓</i> Cash on Delivery available across Pakistan</div><div class="sn-sp-desc">${esc(p.description||'Quality product from Shop Nexa. Fast delivery all over Pakistan.')}</div><div class="sn-sp-qty"><label>Quantity</label><div class="sn-sp-qtybox"><button id="snSpMinus">−</button><span id="snSpQty">1</span><button id="snSpPlus">+</button></div></div><div class="sn-sp-actions"><button class="sn-sp-cart">ADD TO CART</button><button class="sn-sp-order">ORDER NOW</button></div><div class="sn-sp-trust"><div><b>🚚 Fast Delivery</b>All over Pakistan</div><div><b>✓ Quality Checked</b>Selected by Shop Nexa</div><div><b>💬 Support</b>WhatsApp assistance</div></div></section></main><section class="sn-sp-details"><h3>Product details</h3><p>${esc(p.description||'Product details will be updated soon.')}</p>${p.video?`<div class="sn-sp-video"><video controls src="${esc(p.video)}"></video></div>`:''}</section>`;
    document.body.appendChild(e);document.body.style.overflow='hidden';let i=0,q=1;
    const show=n=>{if(!a.length)return;i=(n+a.length)%a.length;const im=e.querySelector('#snSpImg');if(im)im.src=a[i];e.querySelector('#snSpCount').textContent=(i+1)+' / '+a.length;e.querySelectorAll('.sn-sp-thumbs img').forEach((x,j)=>x.classList.toggle('active',j===i));};
    e.querySelector('.sn-sp-close').onclick=close;e.querySelector('.sn-sp-back').onclick=close;e.querySelector('#snSpPrev').onclick=()=>show(i-1);e.querySelector('#snSpNext').onclick=()=>show(i+1);e.querySelectorAll('.sn-sp-thumbs img').forEach(x=>x.onclick=()=>show(Number(x.dataset.i)));
    e.querySelector('#snSpMinus').onclick=()=>{q=Math.max(1,q-1);e.querySelector('#snSpQty').textContent=q};e.querySelector('#snSpPlus').onclick=()=>{q=Math.min(99,q+1);e.querySelector('#snSpQty').textContent=q};
    e.querySelector('.sn-sp-cart').onclick=()=>{if(typeof window.addCart==='function'){for(let z=0;z<q;z++)window.addCart(id)}else alert('Cart is not available')};
    e.querySelector('.sn-sp-order').onclick=()=>{if(typeof window.orderProduct==='function')window.orderProduct(id,q);else window.open('https://wa.me/923274670280?text='+encodeURIComponent('Assalam o Alaikum, I want to order: '+(p.name||'Product')+' | Quantity: '+q),'_blank')};
  }
  window.openProduct=open;window.ShopNexaOpenProduct=open;
})();
/* FINAL WHITE THEME HARD LOCK */
(function(){
  const s=document.createElement('style');
  s.id='sn-final-white-lock';
  s.textContent=`
  html body #sn-store-product,
  html body #sn-store-product *{box-sizing:border-box}
  html body #sn-store-product{background:#fff!important;color:#171717!important;color-scheme:light!important}
  html body #sn-store-product .sn-sp-top,
  html body #sn-store-product .sn-sp-brand,
  html body #sn-store-product .sn-sp-info,
  html body #sn-store-product .sn-sp-details,
  html body #sn-store-product .sn-sp-breadcrumb{background:#fff!important;color:#171717!important}
  html body #sn-store-product .sn-sp-photo,
  html body #sn-store-product .sn-sp-thumbs img{background:#fafafa!important}
  html body #sn-store-product .sn-sp-close{background:#fff!important;color:#171717!important;border-color:#ddd!important}
  html body #sn-store-product .sn-sp-category,
  html body #sn-store-product .sn-sp-desc,
  html body #sn-store-product .sn-sp-details p,
  html body #sn-store-product .sn-sp-back{color:#555!important}
  html body #sn-store-product .sn-sp-price,
  html body #sn-store-product .sn-sp-info h1,
  html body #sn-store-product .sn-sp-details h3{color:#171717!important}
  html body #sn-store-product .sn-sp-line{background:#e9e9e9!important}
  html body #sn-store-product .sn-sp-nav button{background:#fff!important;color:#333!important;border-color:#ddd!important}
  html body #sn-store-product .sn-sp-cart{background:#fff!important;color:#111!important;border-color:#222!important}
  html body #sn-store-product .sn-sp-order{background:#111!important;color:#fff!important;border-color:#111!important}
  `;
  document.head.appendChild(s);
})();

/* COMPACT PREVIOUS PRODUCT VIEW - WHITE */
(function(){const s=document.createElement('style');s.id='sn-compact-previous-lock';s.textContent=`
#sn-store-product{background:#fff!important;color:#171717!important}
#sn-store-product .sn-sp-main{max-width:1100px!important;padding-top:0!important;gap:30px!important;grid-template-columns:minmax(0,1.05fr) minmax(300px,.95fr)!important;align-items:start!important}
#sn-store-product .sn-sp-photo{height:min(58vh,500px)!important;min-height:300px!important;background:#fafafa!important}
#sn-store-product .sn-sp-photo img{padding:15px!important;width:100%!important;height:100%!important;object-fit:contain!important}
#sn-store-product .sn-sp-info h1{font-size:clamp(25px,3vw,34px)!important;margin-bottom:8px!important}
#sn-store-product .sn-sp-price{font-size:23px!important}
#sn-store-product .sn-sp-desc{font-size:13px!important;line-height:1.65!important;margin-bottom:12px!important}
#sn-store-product .sn-sp-qty{margin:12px 0!important}
#sn-store-product .sn-sp-actions{gap:8px!important}
#sn-store-product .sn-sp-actions button{height:44px!important}
#sn-store-product .sn-sp-cart{background:#fff!important;color:#111!important;border:1px solid #222!important}
#sn-store-product .sn-sp-order{background:#fff!important;color:#111!important;border:1px solid #222!important}
#sn-store-product .sn-sp-order:hover{background:#f4b400!important;border-color:#f4b400!important;color:#111!important}
#sn-store-product .sn-sp-trust{margin-top:14px!important}
#sn-store-product .sn-sp-details{max-width:1100px!important;padding-top:22px!important;padding-bottom:45px!important}
@media(max-width:850px){#sn-store-product .sn-sp-main{gap:18px!important}#sn-store-product .sn-sp-photo{height:48vh!important;min-height:280px!important}}
`;document.head.appendChild(s)})();
