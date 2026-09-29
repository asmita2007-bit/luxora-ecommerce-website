const products=[
{id:1,name:"Satin Evening Dress",cat:"Fashion",price:2499,old:3299,icon:"👗",badge:"BESTSELLER",rating:"★★★★★",desc:"Elegant satin finish evening dress with a flattering silhouette, perfect for parties, dinners and special occasions.",sizes:["S","M","L","XL"],colors:["Black","Wine","Navy"],stock:18},
{id:2,name:"Premium Oversized Shirt",cat:"Fashion",price:1299,old:1799,icon:"👔",badge:"NEW",rating:"★★★★★",desc:"Relaxed premium oversized shirt made for everyday street-style looks and comfortable all-day wear.",sizes:["S","M","L","XL"],colors:["White","Sky Blue","Black"],stock:25},
{id:3,name:"Everyday Glow Skincare Kit",cat:"Beauty",price:899,old:1199,icon:"🧴",badge:"POPULAR",rating:"★★★★☆",desc:"A simple daily skincare set designed to refresh, hydrate and brighten your everyday routine.",sizes:["One Size"],colors:["Original"],stock:14},
{id:4,name:"Urban Runner Sneakers",cat:"Footwear",price:2199,old:2999,icon:"👟",badge:"TRENDING",rating:"★★★★★",desc:"Lightweight everyday sneakers with a cushioned sole for college, travel and casual days.",sizes:["6","7","8","9","10"],colors:["White","Black","Grey"],stock:21},
{id:5,name:"Minimal Gold Watch",cat:"Lifestyle",price:1899,old:2499,icon:"⌚",badge:"NEW",rating:"★★★★☆",desc:"Minimal gold-tone watch with a clean dial that pairs effortlessly with casual and formal outfits.",sizes:["One Size"],colors:["Gold"],stock:9},
{id:6,name:"Classic Leather Handbag",cat:"Fashion",price:2799,old:3699,icon:"👜",badge:"PREMIUM",rating:"★★★★★",desc:"Structured premium-look handbag with spacious compartments for everyday essentials.",sizes:["One Size"],colors:["Tan","Black","Brown"],stock:12},
{id:7,name:"Aroma Wellness Candle",cat:"Lifestyle",price:699,old:899,icon:"🕯️",badge:"SALE",rating:"★★★★☆",desc:"Warm aromatic candle created to make your room feel calm, cozy and inviting.",sizes:["150 g"],colors:["Vanilla","Rose","Sandalwood"],stock:30},
{id:8,name:"Hydrating Lip Care Set",cat:"Beauty",price:599,old:799,icon:"💄",badge:"BESTSELLER",rating:"★★★★★",desc:"Daily lip-care duo for soft, moisturised lips with a smooth non-sticky finish.",sizes:["One Size"],colors:["Natural"],stock:22},
{id:9,name:"Classic Casual Loafers",cat:"Footwear",price:1999,old:2699,icon:"👞",badge:"SALE",rating:"★★★★☆",desc:"Classic slip-on loafers designed for smart-casual outfits and office wear.",sizes:["6","7","8","9","10"],colors:["Brown","Black"],stock:16},
{id:10,name:"Soft Knit Co-ord Set",cat:"Fashion",price:1799,old:2399,icon:"🧥",badge:"NEW",rating:"★★★★★",desc:"Soft knit co-ord set offering a polished matching look with relaxed comfort.",sizes:["S","M","L","XL"],colors:["Cream","Black","Olive"],stock:13},
{id:11,name:"Smart Travel Backpack",cat:"Lifestyle",price:1499,old:1999,icon:"🎒",badge:"POPULAR",rating:"★★★★☆",desc:"Smart everyday backpack with organised storage for laptop, books and travel essentials.",sizes:["18 L"],colors:["Black","Beige","Navy"],stock:19},
{id:12,name:"Daily Essentials Beauty Box",cat:"Beauty",price:1099,old:1499,icon:"✨",badge:"LIMITED",rating:"★★★★★",desc:"A curated beauty essentials box for an easy everyday self-care routine.",sizes:["One Size"],colors:["Original"],stock:11},
{id:13,name:"Ribbed Everyday Top",cat:"Fashion",price:799,old:1099,icon:"👚",badge:"NEW",rating:"★★★★☆",desc:"Soft ribbed top with a clean everyday fit for jeans, skirts and trousers.",sizes:["S","M","L","XL"],colors:["Cream","Pink","Black"],stock:27},
{id:14,name:"Classic Denim Jacket",cat:"Fashion",price:1599,old:2199,icon:"🧥",badge:"TRENDING",rating:"★★★★★",desc:"Versatile denim jacket with a timeless silhouette for layering across seasons.",sizes:["S","M","L","XL"],colors:["Blue","Black"],stock:15},
{id:15,name:"Hydra Face Mist",cat:"Beauty",price:499,old:699,icon:"💧",badge:"POPULAR",rating:"★★★★☆",desc:"Refreshing face mist for a quick burst of hydration throughout the day.",sizes:["100 ml"],colors:["Original"],stock:32},
{id:16,name:"Everyday Platform Sneakers",cat:"Footwear",price:2399,old:3199,icon:"👟",badge:"NEW",rating:"★★★★★",desc:"Comfortable platform sneakers with a contemporary shape for elevated everyday styling.",sizes:["6","7","8","9","10"],colors:["White","Cream","Black"],stock:17},
{id:17,name:"Classic Sunglasses",cat:"Lifestyle",price:899,old:1299,icon:"🕶️",badge:"SALE",rating:"★★★★☆",desc:"Statement everyday sunglasses with a timeless frame for sunny city days and vacations.",sizes:["One Size"],colors:["Black","Brown"],stock:24},
{id:18,name:"Soft Mini Shoulder Bag",cat:"Fashion",price:1299,old:1799,icon:"👜",badge:"BESTSELLER",rating:"★★★★★",desc:"Compact shoulder bag with a polished finish for phone, wallet, keys and daily essentials.",sizes:["One Size"],colors:["Black","Cream","Pink"],stock:20},
{id:19,name:"Vanilla Body Care Duo",cat:"Beauty",price:749,old:999,icon:"🧴",badge:"LIMITED",rating:"★★★★☆",desc:"A fragrant body-care duo designed to leave skin feeling fresh, soft and pampered.",sizes:["One Size"],colors:["Vanilla"],stock:10},
{id:20,name:"Comfy Lounge Joggers",cat:"Fashion",price:999,old:1399,icon:"👖",badge:"POPULAR",rating:"★★★★★",desc:"Comfort-first joggers with a soft feel, perfect for travel, study sessions and relaxed weekends.",sizes:["S","M","L","XL"],colors:["Grey","Black","Beige"],stock:26}
];

let category="All", cart=JSON.parse(localStorage.getItem("luxoraCart")||"[]"), wishlist=JSON.parse(localStorage.getItem("luxoraWishlist")||"[]"), coupon=0, selected=null, qty=1;

const money=n=>"₹"+Math.round(n).toLocaleString("en-IN");
function save(){localStorage.setItem("luxoraCart",JSON.stringify(cart));localStorage.setItem("luxoraWishlist",JSON.stringify(wishlist));}
function goShop(){document.getElementById("shop").scrollIntoView({behavior:"smooth"});}
function focusSearch(){goShop();setTimeout(()=>document.getElementById("searchInput").focus(),400);}
function openCategory(cat){setCategory(cat);goShop();}
function setCategory(cat){category=cat;document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.cat===cat));renderProducts();}

function renderProducts(){
 const q=(document.getElementById("searchInput")?.value||"").toLowerCase().trim(), sort=document.getElementById("sortSelect")?.value||"featured";
 let list=products.filter(p=>(category==="All"||p.cat===category)&&(!q||(p.name+" "+p.cat+" "+p.desc).toLowerCase().includes(q)));
 if(sort==="low")list.sort((a,b)=>a.price-b.price); if(sort==="high")list.sort((a,b)=>b.price-a.price); if(sort==="rating")list.sort((a,b)=>b.rating.length-a.rating.length);
 document.getElementById("resultCount").textContent=`Showing ${list.length} product${list.length!==1?"s":""}`;
 document.getElementById("productGrid").innerHTML=list.length?list.map(p=>`
 <article class="product" onclick="openProduct(${p.id})">
  <div class="product-visual"><span class="badge">${p.badge}</span><button class="wish" onclick="event.stopPropagation();toggleWish(${p.id})">${wishlist.includes(p.id)?"♥":"♡"}</button>${p.icon}</div>
  <div class="product-info"><span class="product-cat">${p.cat}</span><h3>${p.name}</h3><div class="rating">${p.rating}</div><div class="price">${money(p.price)} <del>${money(p.old)}</del><span class="discount">${Math.round((1-p.price/p.old)*100)}% OFF</span></div><button class="add" onclick="event.stopPropagation();addToCart(${p.id})">ADD TO BAG</button></div>
 </article>`).join(""):`<div style="grid-column:1/-1;text-align:center;padding:60px;color:#888">No products found. Try another search or category.</div>`;
 updateCounts();
}
function openProduct(id){
 selected=products.find(p=>p.id===Number(id));qty=1;if(!selected)return;
 document.getElementById("productDetails").innerHTML=`
 <div class="detail"><div class="detail-visual"><span class="detail-badge">${selected.badge}</span>${selected.icon}</div><div>
 <p class="eyebrow">${selected.cat}</p><h2>${selected.name}</h2><div class="rating">${selected.rating} &nbsp; <span style="color:#888;letter-spacing:0">(${selected.stock+27} reviews)</span></div>
 <div class="price">${money(selected.price)} <del>${money(selected.old)}</del><span class="discount">${Math.round((1-selected.price/selected.old)*100)}% OFF</span></div>
 <p class="detail-desc">${selected.desc}</p><div class="options"><b>SELECT SIZE</b>${selected.sizes.map((x,i)=>`<button class="option ${i===0?"active":""}" onclick="selectOption(this)">${x}</button>`).join("")}</div>
 <div class="options"><b>SELECT COLOR</b>${selected.colors.map((x,i)=>`<button class="option ${i===0?"active":""}" onclick="selectOption(this)">${x}</button>`).join("")}</div>
 <div class="stock">✓ In stock • ${selected.stock} pieces available</div><p style="font-size:11px;color:#777">🚚 Free delivery above ₹999 • Enter your PIN at checkout for delivery availability.</p>
 <div class="detail-actions"><div class="qty"><button onclick="changeQty(-1)">−</button><span id="detailQty">1</span><button onclick="changeQty(1)">+</button></div><button class="btn dark" onclick="addSelected()">ADD TO BAG</button><button class="btn light" onclick="toggleWish(${selected.id});openProduct(${selected.id})">♡</button></div>
 </div></div>`;
 document.getElementById("productModal").classList.add("show");
}
function selectOption(el){el.parentElement.querySelectorAll(".option").forEach(x=>x.classList.remove("active"));el.classList.add("active")}
function changeQty(n){qty=Math.max(1,Math.min(10,qty+n));document.getElementById("detailQty").textContent=qty}
function addSelected(){for(let i=0;i<qty;i++)addToCart(selected.id);closeModal("productModal");openCart();}
function addToCart(id){const p=products.find(x=>x.id===Number(id)), item=cart.find(x=>x.id===Number(id));if(item)item.qty++;else cart.push({id:p.id,qty:1});save();updateCounts();toast(p.name+" added to your bag ✓")}
function removeFromCart(id){cart=cart.filter(x=>x.id!==Number(id));save();renderCart()}
function changeCartQty(id,n){const x=cart.find(i=>i.id===Number(id));if(!x)return;x.qty=Math.max(1,x.qty+n);save();renderCart()}
function updateCounts(){document.getElementById("cartCount").textContent=cart.reduce((a,x)=>a+x.qty,0);document.getElementById("wishCount").textContent=wishlist.length}
function toggleWish(id){id=Number(id);wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];save();updateCounts();renderProducts();toast(wishlist.includes(id)?"Added to wishlist ♡":"Removed from wishlist")}
function showWishlist(){const names=wishlist.map(id=>products.find(p=>p.id===id)?.name).filter(Boolean);toast(names.length?names.length+" item(s) in wishlist ♡":"Your wishlist is empty")}
function openCart(){renderCart();document.getElementById("cartDrawer").classList.add("open");document.getElementById("cartOverlay").classList.add("show")}
function closeCart(){document.getElementById("cartDrawer").classList.remove("open");document.getElementById("cartOverlay").classList.remove("show")}
function renderCart(){
 const box=document.getElementById("cartItems");let sub=0;
 if(!cart.length)box.innerHTML='<div style="text-align:center;padding:70px 20px;color:#888">Your bag is empty.<br><button class="btn dark" style="margin-top:15px" onclick="closeCart();goShop()">START SHOPPING</button></div>';
 else box.innerHTML=cart.map(x=>{const p=products.find(y=>y.id===x.id);sub+=p.price*x.qty;return `<div class="cart-row"><div class="cart-icon">${p.icon}</div><div><h4>${p.name}</h4><small>${money(p.price)} × ${x.qty}</small><div><button onclick="changeCartQty(${p.id},-1)">−</button><button onclick="changeCartQty(${p.id},1)">+</button><button onclick="removeFromCart(${p.id})">Remove</button></div></div><b>${money(p.price*x.qty)}</b></div>`}).join("");
 const discount=Math.round(sub*coupon/100),total=sub-discount;document.getElementById("cartSubtotal").textContent=money(sub);document.getElementById("cartTotal").textContent=money(total);
}
function applyCoupon(){const code=document.getElementById("couponInput").value.trim().toUpperCase();coupon=code==="WELCOME20"?20:code==="LUXORA10"?10:0;document.getElementById("couponMsg").textContent=coupon?`✓ ${coupon}% discount applied`:"Invalid coupon code";renderCart()}
function openCheckout(){if(!cart.length){toast("Your bag is empty");return}closeCart();let sub=0;document.getElementById("checkoutItems").innerHTML=cart.map(x=>{const p=products.find(y=>y.id===x.id);sub+=p.price*x.qty;return `<div class="summary-item"><span>${p.icon} ${p.name} × ${x.qty}</span><b>${money(p.price*x.qty)}</b></div>`}).join("");document.getElementById("coSub").textContent=money(sub);document.getElementById("coDiscount").textContent="-"+money(sub*coupon/100);document.getElementById("coTotal").textContent=money(sub*(1-coupon/100));document.getElementById("checkoutModal").classList.add("show")}
function checkPin(){const pin=document.getElementById("pin").value;document.getElementById("pinStatus").textContent=pin.length===6?"✓ Great! Delivery is available to this PIN code.":"📍 Enter your 6-digit PIN to check delivery."}
function placeOrder(e){e.preventDefault();if(!e.target.checkValidity()){e.target.reportValidity();return}const id="LUX"+Date.now().toString().slice(-8);cart=[];coupon=0;save();updateCounts();closeModal("checkoutModal");document.getElementById("orderId").textContent=id;document.getElementById("successModal").classList.add("show");e.target.reset()}
function subscribe(e){e.preventDefault();toast("You're subscribed to LUXORA ✦");e.target.reset()}
function closeModal(id){document.getElementById(id).classList.remove("show")}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove("show"),2600)}
document.addEventListener("DOMContentLoaded",()=>{renderProducts();document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("show")}));document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".modal.show").forEach(m=>m.classList.remove("show"))})});
