import{u as v,d as h}from"./draggable-ab2e5b52.js";import{u as C}from"./modal-d582e1fa.js";import{d as I,j as k,k as y,u as w,o as l,c as B,g as b,w as _,b as p,n as N,f as s,t as E,m as D,e as M,h as V,l as $,q as z,s as j,_ as q}from"./index-a8f1b17d.js";const O=i=>(z("data-v-764277e7"),i=i(),j(),i),P={"flex-center":"","text-14":""},R=["onClick"],A=O(()=>p("div",{"i-carbon:add":""},null,-1)),F=I({__name:"SiteNavBar",setup(i){const r=C(),t=k(),m=y();function u(o){m.name==="setting"&&t.cateIndex===o?r.showModal("update","cate"):t.setCateIndex(o)}const c=w(),{draggableOptions:g,handleStart:x,handleEnd:f}=v();function S(o){f();const{oldIndex:a,newIndex:n}=o,{cateIndex:e}=t;if(a===e&&n!==e)t.setCateIndex(n);else{if(a<e&&n<e||a>e&&n>e)return;a<e?t.setCateIndex(e-1):a>e&&t.setCateIndex(e+1)}}return(o,a)=>{const n=$;return l(),B("section",P,[b(s(h),D({class:"nav w-auto flex gap-x-6 w-90p sm:gap-x-12 sm:max-w-480",list:s(t).data,"item-key":"id","component-data":{tag:"div",type:"transition-group"}},s(g),{onStart:s(x),onEnd:S}),{item:_(({element:e,index:d})=>[p("div",{class:N(["dragging nav__item shrink-0",{"hover:text-$primary-c":!s(c).isSetting,"nav__item--active":s(t).cateIndex===d}]),"cursor-pointer":"","px-8":"","py-10":"","transition-color":"","duration-300":"",onClick:G=>u(d)},E(e.name),11,R)]),_:1},16,["list","onStart"]),s(c).isSetting?(l(),M(n,{key:0,class:"ml-12",type:"primary",size:"small",focusable:!1,secondary:"",circle:"",onClick:a[0]||(a[0]=e=>s(r).showModal("add","cate"))},{icon:_(()=>[A]),_:1})):V("",!0)])}}});const L=q(F,[["__scopeId","data-v-764277e7"]]);export{L as default};