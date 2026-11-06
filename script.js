var SHOPEE="https://sv.shopee.ph/";
var S="https://s.shopee.ph/";
var SOCIAL={Facebook:"https://www.facebook.com/profile.php?id=100060537343483",Instagram:"https://www.instagram.com/scntph_",TikTok:"https://www.tiktok.com/@scntph?_r=1&_t=ZS-9Ap8L2bnbqX",Threads:"https://www.threads.com/@scntph_",Pinterest:"https://ph.pinterest.com/SCNTPH/?actingBusinessId=1147151473742737841"};
var ICON={Facebook:"M14 8V6.5c0-.7.2-1 1-1h2V2h-3c-3 0-4 2-4 4.500V8H8v3.500h2V22h4V11.500h2.700L17 8z",Instagram:"M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm5 2.500a4.500 4.500 0 1 1 0 9 4.500 4.500 0 0 1 0-9zm0 2a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5zM17.300 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",TikTok:"M16.500 3c.3 2.300 1.600 3.700 3.800 3.900v2.800c-1.300.1-2.500-.3-3.700-1.100v6.100a5.800 5.800 0 1 1-5-5.800v3a2.900 2.900 0 1 0 2 2.800V3z",Threads:"M12.200 21c-4.300 0-7-2.700-7-8.200S7.900 4.600 12.200 4.600c3.300 0 5.600 1.700 6.300 4.500l-2 .5c-.5-1.800-2-2.900-4.300-2.900-3 0-4.800 2-4.800 6.100s1.800 6.100 4.800 6.100c2.300 0 3.700-1.100 3.700-2.800 0-1.200-.8-2-2.500-2.300-.4 1.700-1.500 2.600-3.100 2.600-1.700 0-2.800-1-2.800-2.500 0-1.700 1.400-2.800 3.700-2.800.7 0 1.300.1 1.900.2 0-1-.5-1.500-1.500-1.500-.7 0-1.200.2-1.500.7l-1.500-1c.6-1 1.700-1.600 3.100-1.600 2.300 0 3.600 1.300 3.600 3.700v.7c1.700.7 2.600 1.900 2.600 3.600 0 2.600-2.100 4.500-5.600 4.500zm-.9-6.400c0 .5.4.8 1 .8.9 0 1.400-.6 1.600-1.700a6 6 0 0 0-1.500-.2c-.8 0-1.100.4-1.100 1.100z",Pinterest:"M12 3a9 9 0 0 0-3.300 17.400c-.1-.7-.1-1.800 0-2.600l1.100-4.500s-.3-.6-.3-1.400c0-1.300.8-2.300 1.700-2.300.8 0 1.200.6 1.200 1.300 0 .8-.5 2-.8 3.100-.2.900.5 1.700 1.400 1.700 1.700 0 3-1.800 3-4.400 0-2.300-1.600-3.900-4-3.900-2.700 0-4.300 2-4.300 4.100 0 .8.3 1.700.7 2.200l.1.300-.3 1.100c0 .2-.2.200-.4.100-1.200-.6-2-2.400-2-3.800 0-3.100 2.300-6 6.500-6 3.400 0 6 2.400 6 5.600 0 3.400-2.100 6.100-5.100 6.100-1 0-1.900-.5-2.200-1.100l-.6 2.300c-.2.800-.8 1.800-1.200 2.400A9 9 0 1 0 12 3z"};

/* ===== NEW RELEASES ===== */
var RELEASES=[
{name:"MYSLF MYLK",brand:"YSL",notes:"Top, heart and base notes",gender:"Unisex",smells:"Fresh, woody",link:"https://s.shopee.ph/7Ky4IRLrtN",tiktok:"",imgs:["images/R1.jpg","images/R1.1.jpg","images/R1.2.jpg"]},
{name:"ASAD POLAR",brand:"LATTAFA",notes:"Blackcurrant, Lavender and Amber notes",gender:"Unisex",smells:"Fresh, aromatic, woody",link:SHOPEE,tiktok:"",imgs:["images/yara1.jpg","images/yara1.2.jpg","images/yara1.3.jpg", "images/yara1.4.jpg"]},
{name:"POUR HOMME FORTE",brand:"VERSACE ",notes:"Top, heart and base notes",gender:"For him",smells:"Sweet, spicy",link:"https://s.shopee.ph/30pIEWQHQr",imgs:["images/v1.jpg","images/v1.1.jpg","images/v1.2.jpg"]},
//{name:"Fragrance name 4",brand:"Brand",notes:"Top, heart and base notes",gender:"Unisex",smells:"Fresh, woody",link:SHOPEE,tiktok:"",imgs:["","","",""]},
//{name:"Fragrance name 5",brand:"Brand",notes:"Top, heart and base notes",gender:"For him",smells:"Sweet, spicy",link:SHOPEE,tiktok:"",imgs:["","","",""]},
//{name:"Fragrance name 6",brand:"Brand",notes:"Top, heart and base notes",gender:"For her",smells:"Floral, fruity",link:SHOPEE,tiktok:"",imgs:["","","",""]}
];

/* ===== SHOP DATA =====
   Each shop: [name, Shopee code, image, TikTok link (optional), badge (optional)]
   Example: ["Shop name","30p6rmbtQz","images/x.jpg","https://vt.tiktok.com/XXXX/","Verified"]
   Use "" to skip a value, e.g. a badge without TikTok: [name,code,img,"","Top pick"] */
var LOCAL=[
["1440 Co.","8pn3CnPkxq","images/1440.jpg", "https://vt.tiktok.com/ZS9ytMD9w796E-OVzKq/"],
["625 Perfumes","LoLgvXUoS","images/625.jpg"],
["A&M Perfumes","20wgUxTEww","images/1m.jpg"],
["AmieRuth.Ph","9fM0o8wpW4","images/amie.jpg"],
["Asteria Apothecary","5AtbRwCLV5","images/as.jpg"],
["Bleu de blanc","114BsStPAj","images/bleu.jpg"],
["CITTA PH","2qVqDT3CcC","images/citta.jpg","https://vt.tiktok.com/ZS9yt1WBBSNKt-J4qH1/"],
["CONSUME MISSION","8AXMWyJUQL","images/con1.jpg","https://vt.tiktok.com/ZS9ytMcrAm3X3-oeLRq/"],
["Cotidiano Fragrances","30p6rmbtQz","images/cot.jpg","https://vt.tiktok.com/ZS9yGojgu4W45-TRxHu/"],
["Dimiourgia (Dimiourgia CreationPh)","2BFzsVL7zF","images/dimi.jpg"],
["Elite Fragrances","4VduerOAih","images/elite.jpg", "https://vt.tiktok.com/ZS9ytjDvjSefh-vZr8R/"],
["ELNARIS","AKbhbeMU8l","images/elnaris.jpg", "https://vt.tiktok.com/ZS9yt2EYK8UEK-DN7Vl/"],
["Enzo Scents","4LKUSe9BRT","images/enzo.jpg","https://vt.tiktok.com/ZS9yGEPrmx1hu-17krb/"],
["Esscents PH","8fTTcfWF0z","images/par.jpg"],
["Father and Son Philippines","6L5fIMsA78","images/fS.jpg", "https://vt.tiktok.com/ZS9ytjacN61Rh-X2sRF/"],
["FERALDE","8fTa4g0bzN","images/feralde.jpg", "https://vt.tiktok.com/ZS9ytYHw19v7C-5Su6X/"],
["Florence Perfumes","1gJpjtY2Wx","images/florence.avif", "https://vt.tiktok.com/ZS9ytjtvJ94YN-WXZFq/"],
["Fragrance Manila","906QpinYPR","images/fm.jpg"],
["Fragrancelab","6fiVh9TXpw","images/frag.jpg"],
["GSP PARFUMS","qklkzqChu","images/GSP.jpg", "https://vt.tiktok.com/ZS9ytMombNdtV-1itvW/"],
["HSI scent Collection","","images/hsi.jpg","https://vt.tiktok.com/ZS9yGKa9r4Shc-61Rpz/"],
["Issy","1LgzLUUGPZ","images/issy.jpg", "https://vt.tiktok.com/ZS9ytYqtBfGRR-1MQHM/"],
["J.E.M Perfumery","8fTa50mHlS","images/jem.jpg"],
["JA Perfume shop (House of Andres)","7fb5oQJ4xt","images/house.jpg"],
["Jamarias Fragrances","6AmF6TiV4c","images/ham.jpg", "https://vt.tiktok.com/ZS9ytYYPpDwcX-Qr9UH/"],
["Kellastefan","7puT5tnp75","images/kella.jpg"],
["Le La Vie","3VlWyIHkVk","images/LLV.jpg"],
["LUNE de VERRE","","images/lune.jpg","https://vt.tiktok.com/ZS9ytY1EFKDCn-nEv9t/"],
["Maison Gardine","","images/maison.jpg","https://vt.tiktok.com/ZS9yt2S9oAQer-gP122/"],
["Minimaliscent Fragrances","6L5iFpH1Wm","images/25m.jpg"],
["Noah Solutions","1BNZ9iV2gU","images/noah.jpg", "https://vt.tiktok.com/ZS9yt2s46u7rC-q1pY4/"],
["Nuscent.PH","","images/nu.jpg","https://vt.tiktok.com/ZS9yt6nUDHN5s-LFs9m/"],
["ORIGINALAB.PH","40hkX14Hzc","images/orig.jpg", "https://vt.tiktok.com/ZS9yt2QejnQMw-ZfKbz/"],
["Overdose MNL","4qGrWaDImB","images/overdose.jpg"],
["Parfums Astraux","8fTa5iqZxk","images/parfum.jpg"],
["PARFVM","3qOKKrUVP5","images/par.jpg"],
["PRMNKY","60SouwHQX9","images/prime.jpg"],
["reverie fragrances","4fxRKVi1rQ","images/rev.jpg"],
["Sancto","","images/sancto.jpg","https://vt.tiktok.com/ZS9yt64SRSH6J-sV3y1/"],
["Sapphire Fragrances","9APqgtAJxA","images/sap.jpg","https://vt.tiktok.com/ZS9yGEkGDUDpb-6fpsT/"],
["Scent Faery","6AmI3kGXX4","images/sf.jpg"],
["Scent Geeks","1W0PYpO7pa","images/sg.jpg"],
["Scent Society","","images/ss.jpg","https://vt.tiktok.com/ZS9ytMRmSUtfP-b47Xv/"],
["Scent Therapy PH","2VswkhfZt0","images/st.jpg"],
["Sniff Perfumes","","images/sniff.jpg","https://vt.tiktok.com/ZS9yt1xdwJeqT-jrpu5/"],
["Suns Perfume Shop","6fiYk07pmXT","images/suns.jpg"],
["Symmetry Lab Parfums","2LZWYeoBZg","images/sl.jpg"],
["Zenin Perfume","","images/zenin.jpg","https://vt.tiktok.com/ZS9yGKvvxNFbn-mbkMX/"]
];
var SHOPS={
niche:[
["ALLORIGINAL100% by Riza Lina","30lQodUAlt","images/5n.jpg"],
["BODYROCKERSPH Online Shop","3VlHiCSos4","images/3n.jpeg"],
["DAGS Online Shop","6fiNfV32Ec","images/dags.jpg"],
["FragranceHavenPH","5LCFaw0Hag","images/2jp.jpg"],
["JP Fragrances","gR6KuOmbB","images/1jp.jpg"],
["Klei and Kleines Perfume Shop","3qKXoGodDC","images/7n.jpg"],
["Lux For Less Boutique","9pfPQtb9YD","images/lux.jpg"],
["MJchua Perfumes Store 2.0","4AxOGhj3gD","images/10n.jpg"],
["mrsgoodiesmanila","3B8VUQWJL7","images/mrs.jpg"],
["Nosewise Central","7fauqe3Bze","images/nc.jpg"],
["Perf & Lavish","gNW2VyJYj","images/8n.jpg"],
["Perfumania by Pao","5VSlq0Wuo1","images/9n.jpg"],
["Scentro Style","6L5Tzw242p","images/4n.jpg"],
["Sniff St.","7Aazp9kgce","images/sni.jpg"],
["ThePerfumeJunkiePH","5AtWbtlFnH","images/6n.jpg"]
],
me:[
["A&M Perfumes","7fXOHnncQr","images/1m.jpg"],
["Arbab Frags","9zvJAnQcDO","images/2m.jpg"],
["Body Rockers Perfumeria Online (Main)","5q8WDYcnsH","images/3n.jpeg"],
["Body Rockers Perfumeria Online (Sister)","40gs2E4ptY","images/3n.jpeg"],
["Bridgewater Partners","8fTS0pOYtt","images/3m.jpg"],
["Bryan Perfume Shop","6VOxQulcnD","images/4m.jpg"],
["Curated Collection by Chris","AKbg02jNbi","images/5m.jpg"],
["Dayluxe Online Shop","3LRvfCmSuh","images/6m.jpg"],
["Dubai Perfumes PH","5VWQFD0qJr","images/7m.jpg"],
["Dubai Shop Baliuag","2qVf4KLvx7","images/8m.jpg"],
["DXB Miriams Online Shop","20wY4pLPXP","images/9m.jpg"],
["Fabulous Collection","20t1dukjYn","images/10m.jpg"],
["Fawah Perfume Shop","9zypbZXFdE","images/11m.jpg"],
["Fofo’s Trading","40hcSalJpO","images/12m.jpg"],
["FRAGANCE4U","50a9fqOOXB","images/f.jpg"],
["Fragrance Philippines Inc.","qkagnaZGW","images/13m.jpg"],
["GL Online Shop PH","BUttbAndm","images/14m.jpg"],
["GoodScents Perfume Shop","1AjHK8Ce2","images/good.jpg"],
["Hi_Fragrances","3qOCGNVA5n","images/16m.jpg"],
["Hossana & Co. Fragrances","7VHUd97ODH","images/17m.jpg"],
["House_of_Perfume Shop","9fLzD9Yxxk","images/18m.jpg"],
["IIBR Online Shop","30p5GwJsdi","images/iibr.jpg"],
["Jhemsluxcollection","6VLQtneSNR","images/19m.jpg"],
["Joyful Finds Hub","8pmsDmEzJS","images/20m.jpg"],
["JP Fragrances","4LKSrTKD11","images/1jp.jpg"],
["JTK Online Shop","2VsogATyL8","images/21m.jpg"],
["K&R Scentstation","AUv6CvtqSI","images/22m.jpg"],
["KissScentTell","2VsogIe97H","images/23m.jpg"],
["Klei and Kleiness Perfume Shop","1LdKkcpI4v","images/24m.jpg"],
["Larry Scents Shop","1qd7t7x0CW","images/lar.jpg"],
["Lux For Less Boutique","9APidb6FKm","images/lux.jpg"],
["Minimaliscent Fragrances","qkahN7S3t","images/25m.jpg"],
["Moredo Perfume Shop","5fpqSHOsOA","images/mor.jpg"],
["Online Trindahan","5fpqSZGqiC","images/32m.jpg"],
["Perfumebox","30p5HPNuNh","images/27m.jpg"],
["Perfumesbyluna","902lsSkItQ","images/26m.jpg"],
["Scentro Style","60PAJsYE7o","images/4n.jpg"],
["Scentsations Collection Corp.","5AtZrT5Flf","images/28m.jpg"],
["Shopmixtrade","6Aiabce2Yy","images/29m.jpg"],
["Spray Me V2","1BTi59RhL","images/30m.jpg"],
["The Cloud Store MNL","AAIFonJHiX","images/cl.jpg"],
["The Souq Shop PH","AUuLlrRDX0","images/31m.jpg"],
["Wesworld Online Shop","7fXOOZggKn","images/33m.jpg"],
["Wise Scents","5AtZsf1gt7","images/wise.jpg"],
["Xianelle Parfums","9V0ooo6n0S","images/34m.jpg"],
["Xi’s Dubai Pasabuy Ilocos & Abra","1VwkyQAc9X","images/35m.jpg"],
["Y&A Fragrance","7AeeDbxrS9","images/37m.jpg"],
["Yalla Dubai Kafagway","1LgrIeMZue","images/36m.jpg"],
["Yumi_Shop2020 (M & R Shop)","1BTj4szgq","images/yumi.jpg"],
["Zesty_ent","30p5IVrype","images/zes.jpg"]
],
decant:[
["Alze boulevard","1Lgss14Tn5","images/al.jpg"],
["AromartPH","8AXD0GUGaz","images/aro.jpg"],
["Catherine’s Blessings","2gCGSbnnGg","images/cat.jpg"],
["Coast Perfumery Manila","7AbVeYjoss","images/d10.jpg"],
["Decant Dynasty","3LRBCbT8JY","images/d12.jpg"],
["Elite Fragrances","2VsqFWGKkm","images/d4.jpg"],
["Eros PH Fragrances","906JzdLvDO","images/d8.jpg"],
["Klei and Kleiness Perfume Shop","1gJjFxbV4l","images/d3.jpg"],
["Minimaliscent Fragrances","8pmtnrJsim","images/25m.jpg"],
["Minimalmist.mnl","1BKIUexx3d","images/d6.jpg"],
["One Whiff Wonder Decants","8KqdCe2JX9","images/one.jpg"],
["Perfume Love Manila","2qVge546me","images/d2.jpg"],
["Perfumesbyluna","3g4ndb92VF","images/26m.jpg"],
["Perfumoirse","9KjAOc7a5R","images/pm.jpg"],
["Pocket Scent PH","1BNSfDa3nB","images/d7.jpg"],
["RAinscent","6q1pPiKARF","images/d11.jpg"],
["ScenthubPH Online Shop","gO1u8cHXw","images/d5.jpg"],
["Scentique Fragrances","8KprADUOU3","images/d14.jpg"],
["TakalDecants","9fM0n9QtSB","images/takal.jpg"],
["The5thScent","4LHKHYOopa","images/5s.jpg"],
["Unbox Diaries","70LFbg1gbj","images/d1.jpg"],
["V’scents Perfume PH","4LKUR64n3d","images/vs.jpg"]
]};
var TAB_LABELS={niche:"Niche / Designer",me:"Middle Eastern perfumes",decant:"Decant"};
var SHOPIMG={}; /* optional: {"Shop name":"image url"} */

/* ===== BEST DUPES =====
   One group = 1 original (og) + 3 dupes. Copy a whole { og:..., dupes:[...] } block to add another group.
   shopee / tiktok: paste a full link, or just the Shopee code (like the shop lists). Leave "" to hide a button.
   note: a short label such as "Closest match", "Best value", "Longest lasting". price: any text, e.g. "From P500". */
var DUPES=[
{og:{name:"AVENTUS",brand:"CREED",notes:"Top: Bergamot, Black Currant, Apple, Lemon and Pink Pepper\nHeart: Pineapple, Patchouli and Moroccan Jasmine\nBase notes:Birch, Musk, oak moss, Cedarwood and Ambroxan",price:"₱ 15,000-20,000",img:"images/original.jpg",shopee:"5q9V0Cn2AK",tiktok:""},
dupes:[
{name:"CLUB DE NUIT INTENSE MAN XDP",brand:"ARMAF",note:"Closest match",price:"",img:"images/top1.jpg",shopee:"LoYRROXAD",tiktok:""},
{name:"CLUB DE NUIT INTENSE MAN LIMITED EDITION",brand:"ARMAF",note:"Best value",price:"",img:"images/top2.jpg",shopee:"4Ve7P8rr36",tiktok:""},
{name:"CLUB DE NUIT INTENSE MAN SDP",brand:"ARMAF",note:"Longest lasting",price:"",img:"images/top3.jpg",shopee:"4Ve7P8rr36",tiktok:""}
]}
];
/* ===================== */

function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function ext(url,shop,plat){return 'href="'+esc(url)+'" target="_blank" rel="noopener noreferrer" data-shop="'+esc(shop)+'" data-plat="'+plat+'"'}

/* shop card: s = [name, code, image, tiktok, badge] */
function card(s){
s=s.slice();
if(/[\/.]/.test(s[1]||""))s.splice(1,0,"");          /* image path typed in the Shopee slot */
if(/^https?:/.test(s[2]||""))s.splice(2,0,"");        /* TikTok link typed in the image slot */
var n=s[0],sp=s[1]?S+s[1]:"",img=s[2]||SHOPIMG[n]||"",tt=s[3],badge=s[4];
var main=sp||tt,mp=sp?"shopee":"tiktok";
return '<article class="card"><a class="im" '+ext(main,n,mp)+' aria-label="'+esc(n)+'" tabindex="-1"><span class="ph" aria-hidden="true">'+esc(n.charAt(0).toUpperCase())+'</span>'+(img?'<img src="'+esc(img)+'" alt="" loading="lazy" decoding="async">':'')+(badge?'<span class="badge">'+esc(badge)+'</span>':'')+'</a>'
+'<div class="bd"><h3><a '+ext(main,n,mp)+'>'+esc(n)+'</a></h3>'
+'<div class="plat">'+(sp?'<span>Shopee</span>':'')+(tt?'<span>TikTok</span>':'')+'</div>'
+'<div class="acts">'+(sp?'<a class="btn sm" '+ext(sp,n,"shopee")+'>Shop on Shopee</a>':'')+(tt?'<a class="btn tt sm" '+ext(tt,n,"tiktok")+'>Shop on TikTok</a>':'')+'</div></div></article>'}

/* missing images fall back to the letter placeholder */
document.addEventListener("error",function(e){var t=e.target;if(t&&t.tagName=="IMG"&&t.closest(".im,.slide,.dpic"))t.remove()},true);

document.getElementById("localGrid").innerHTML=LOCAL.map(card).join("");
["niche","me","decant"].forEach(function(k){document.querySelector("#p-"+k+" .grid").innerHTML=SHOPS[k].map(card).join("")});
document.getElementById("soc").innerHTML=Object.keys(SOCIAL).map(function(k){return '<a href="'+SOCIAL[k]+'" target="_blank" rel="noopener noreferrer" aria-label="'+k+'" title="'+k+'"><svg viewBox="0 0 24 24"><path d="'+ICON[k]+'"/></svg></a>'}).join("");


/* best dupes */
function lk(v){return !v?"":/^https?:/.test(v)?v:S+v}
function dbtns(o){var sp=lk(o.shopee),tt=o.tiktok;return (sp?'<a class="btn sm" '+ext(sp,o.name,"shopee")+'>Shop on Shopee</a>':'')+(tt?'<a class="btn tt sm" '+ext(tt,o.name,"tiktok")+'>Shop on TikTok</a>':'')}
function dpic(o,cls){var sp=lk(o.shopee),href=sp||o.tiktok,t=href?'a':'div';
return '<'+t+' class="dpic '+cls+'"'+(href?' '+ext(href,o.name,sp?"shopee":"tiktok")+' aria-label="'+esc(o.name)+'"':'')+'><span class="ph" aria-hidden="true">'+esc(o.name.charAt(0).toUpperCase())+'</span>'+(o.img?'<img src="'+esc(o.img)+'" alt="'+esc(o.name)+'" loading="lazy" decoding="async">':'')+'</'+t+'>'}
function dupeGroup(g){var o=g.og;
return '<article class="dgroup"><div class="og">'+dpic(o,"ogpic")+'<div class="ogbody"><span class="tag">THE ORIGINAL</span><h3>'+esc(o.name)+'</h3><p class="by">'+esc(o.brand)+'</p>'+(o.notes?'<p class="nt">'+esc(o.notes)+'</p>':'')+(o.price?'<p class="pr">'+esc(o.price)+'</p>':'')+'<div class="acts">'+dbtns(o)+'</div></div></div>'
+'<div class="arrow"><span>Top 3 dupes</span></div>'
+'<div class="dgrid">'+g.dupes.map(function(d,i){return '<div class="dcard"><span class="rank">'+(i+1)+'</span>'+dpic(d,"")+'<div class="dbd"><div><h4>'+esc(d.name)+'</h4><p class="by">'+esc(d.brand)+'</p>'+(d.note?'<span class="dnote">'+esc(d.note)+'</span>':'')+(d.price?'<p class="pr">'+esc(d.price)+'</p>':'')+'</div><div class="acts">'+dbtns(d)+'</div></div></div>'}).join("")+'</div></article>'}
document.getElementById("dupes").innerHTML=DUPES.map(dupeGroup).join("");
document.getElementById("dupesHome").innerHTML=DUPES.length?dupeGroup(DUPES[0]):"";

/* releases */
document.getElementById("releases").innerHTML=RELEASES.map(function(r){
var L=esc(r.link);
return '<div class="rel" data-g="'+esc(r.gender)+'"><div class="car"><div class="slides">'
+r.imgs.map(function(m,j){return '<a class="slide" '+ext(r.link,r.name,"shopee")+' aria-label="'+esc(r.name)+'">'+(m?'<img src="'+esc(m)+'" alt="'+esc(r.name)+' photo '+(j+1)+'"'+(j?' loading="lazy"':'')+' decoding="async">':'Image '+(j+1))+'</a>'}).join("")
+'</div><button class="prev" aria-label="Previous image">‹</button><button class="next" aria-label="Next image">›</button></div>'
+'<div class="dots">'+r.imgs.map(function(_,j){return '<i'+(j?"":' class="on"')+'></i>'}).join("")+'</div>'
+'<div class="info"><h3><a '+ext(r.link,r.name,"shopee")+'>'+esc(r.name)+'</a></h3><dl><dt>Brand</dt><dd>'+esc(r.brand)+'</dd><dt>Olfactory Family</dt><dd>'+esc(r.notes)+'</dd><dt>Gender</dt><dd>'+esc(r.gender)+'</dd><dt>Smells like</dt><dd>'+esc(r.smells)+'</dd></dl>'
+'<div class="acts"><a class="btn" '+ext(r.link,r.name,"shopee")+'>Wait here!</a>'+(r.tiktok?'<a class="btn tt" '+ext(r.tiktok,r.name,"tiktok")+'>Shop on TikTok</a>':'')+'</div></div></div>'}).join("");

document.querySelectorAll(".rel").forEach(function(el){
var n=el.querySelectorAll(".slide").length,i=0,sl=el.querySelector(".slides"),car=el.querySelector(".car");
function go(d){i=(i+d+n)%n;sl.style.transform="translateX(-"+i*100+"%)";el.querySelectorAll(".dots i").forEach(function(x,j){x.className=j==i?"on":""})}
el.querySelector(".prev").onclick=function(){go(-1)};el.querySelector(".next").onclick=function(){go(1)};
var x0=null;
car.addEventListener("touchstart",function(e){x0=e.touches[0].clientX},{passive:true});
car.addEventListener("touchend",function(e){if(x0!==null){var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40)go(d<0?1:-1);x0=null}})});

/* release filter chips */
document.querySelectorAll("#chips .chip").forEach(function(c){c.onclick=function(){
document.querySelectorAll("#chips .chip").forEach(function(x){x.classList.toggle("on",x==c)});
document.querySelectorAll(".rel").forEach(function(r){r.style.display=(c.dataset.g=="all"||r.dataset.g==c.dataset.g)?"":"none"})}});

/* trusted shops: tabs, counts, search */
var sIn=document.getElementById("shopSearch"),sNo=document.getElementById("noRes"),cur="niche";
function pick(k){cur=k;
document.querySelectorAll("#tabs .btn").forEach(function(b){b.classList.toggle("on",b.dataset.p==k)});
document.querySelectorAll(".panel").forEach(function(p){p.classList.toggle("on",p.id=="p-"+k)})}
function filterShops(){
var q=sIn.value.trim().toLowerCase(),counts={};
["niche","me","decant"].forEach(function(k){var c=0;
document.querySelectorAll("#p-"+k+" .card").forEach(function(card){var ok=!q||card.querySelector("h3").textContent.toLowerCase().indexOf(q)>-1;card.style.display=ok?"":"none";if(ok)c++});
counts[k]=c;
var b=document.querySelector('#tabs .btn[data-p="'+k+'"]');b.textContent=TAB_LABELS[k]+" ("+c+")"});
if(q&&!counts[cur]){var f=["niche","me","decant"].filter(function(k){return counts[k]})[0];if(f)pick(f)}
var total=counts.niche+counts.me+counts.decant;
sNo.style.display=(q&&!total)?"block":"none"}
document.querySelectorAll("#tabs .btn").forEach(function(b){b.onclick=function(){pick(b.dataset.p)}});
sIn.addEventListener("input",filterShops);
pick("niche");filterShops();

/* home stats */
document.getElementById("stN").textContent=SHOPS.niche.length;
document.getElementById("stM").textContent=SHOPS.me.length;
document.getElementById("stD").textContent=SHOPS.decant.length;

/* routing and nav highlight */
function route(){var h=(location.hash||"#home").slice(1);if(!document.getElementById("v-"+h))h="home";
document.querySelectorAll(".view").forEach(function(v){v.classList.toggle("on",v.id=="v-"+h)});
document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")=="#"+h)});
window.scrollTo(0,0)}
addEventListener("hashchange",route);route();

/* mobile dropdown menu */
var mBtn=document.getElementById("menuBtn"),mNav=document.getElementById("nav");
function menu(o){mNav.classList.toggle("open",o);mBtn.setAttribute("aria-expanded",o?"true":"false")}
mBtn.onclick=function(e){e.stopPropagation();menu(!mNav.classList.contains("open"))};
mNav.addEventListener("click",function(e){if(e.target.closest("a"))menu(false)});
document.addEventListener("click",function(e){if(!e.target.closest("header"))menu(false)});
document.addEventListener("keydown",function(e){if(e.key=="Escape")menu(false)});
addEventListener("resize",function(){if(innerWidth>860)menu(false)});

/* back to top */
var topBtn=document.getElementById("top");
addEventListener("scroll",function(){topBtn.classList.toggle("show",window.scrollY>600)},{passive:true});
topBtn.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};

/* optional click tracking (works if Plausible or Google Analytics is added to index.html) */
document.addEventListener("click",function(e){var a=e.target.closest("a[data-shop]");if(!a)return;
var d={shop:a.dataset.shop,platform:a.dataset.plat};
if(window.plausible)window.plausible("Shop Click",{props:d});
if(window.gtag)window.gtag("event","shop_click",d)});
