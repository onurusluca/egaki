(function(t){function e(e){for(var o,c,i=e[0],s=e[1],u=e[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d45":function(t,e,n){t.exports=n.p+"img/delete.650cdc57.svg"},"34b1":function(t,e,n){t.exports=n.p+"img/undo.a0732ff2.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={id:"app"};function r(t,e,n,r,c,i){var s=Object(o["i"])("Home");return Object(o["e"])(),Object(o["c"])("div",a,[Object(o["d"])(s)])}var c=Object(o["j"])("data-v-42d7a32a");Object(o["g"])("data-v-42d7a32a");var i={id:"home"},s=Object(o["d"])("div",{class:"cursor",id:"cursor"},[Object(o["d"])("div",{class:"dot"})],-1),u={class:"bottom-control"},l=Object(o["d"])("p",null,"2",-1),d=Object(o["d"])("p",null,"10",-1),p=Object(o["d"])("p",null,"20",-1),f=Object(o["d"])("p",null,"30",-1),v=Object(o["d"])("p",null,"50",-1),b=Object(o["d"])("p",null,"90",-1),h=Object(o["d"])("img",{id:"prevImg",hidden:""},null,-1),g={target:"_blank",href:"https://onurusluca.me/",class:"btn",title:"See My Portfolio"};Object(o["f"])();var m=c((function(t,e,n,a,r,c){var m=this;return Object(o["e"])(),Object(o["c"])("div",i,[s,Object(o["d"])("canvas",{onMousemove:e[1]||(e[1]=function(){return c.draw.apply(c,arguments)}),onMousedown:e[2]||(e[2]=function(){return c.startDraw.apply(c,arguments)}),onMouseup:e[3]||(e[3]=function(){return c.stopDraw.apply(c,arguments)}),onTouchmove:e[4]||(e[4]=function(){return c.draw.apply(c,arguments)}),onTouchstart:e[5]||(e[5]=function(){return c.startDraw.apply(c,arguments)}),onTouchend:e[6]||(e[6]=function(){return c.stopDraw.apply(c,arguments)}),id:"canvas",onClick:e[7]||(e[7]=function(t){return r.showPenMenu=!1,r.showColorMenu=!1})},null,32),Object(o["d"])("div",u,[Object(o["d"])("div",{class:"btn",title:"Delete All",onClick:e[8]||(e[8]=function(){return c.clearCanvas.apply(c,arguments)})},[Object(o["d"])("object",{class:"btn-svg",data:r.svgs.trashSvg,type:"image/svg+xml"},null,8,["data"])]),Object(o["d"])("div",{class:"btn",title:"Pen Size",onClick:e[15]||(e[15]=function(t){return r.showPenMenu=!r.showPenMenu})},[Object(o["d"])("object",{class:"btn-svg",data:r.svgs.pencilSvg,type:"image/svg+xml"},null,8,["data"]),Object(o["d"])("div",{class:["pen-menu",{appear:r.showPenMenu}]},[Object(o["d"])("span",{onClick:e[9]||(e[9]=function(t){return r.brushSize=2})},[l]),Object(o["d"])("span",{onClick:e[10]||(e[10]=function(t){return r.brushSize=10})},[d]),Object(o["d"])("span",{onClick:e[11]||(e[11]=function(t){return r.brushSize=20})},[p]),Object(o["d"])("span",{onClick:e[12]||(e[12]=function(t){return r.brushSize=30})},[f]),Object(o["d"])("span",{onClick:e[13]||(e[13]=function(t){return r.brushSize=50})},[v]),Object(o["d"])("span",{onClick:e[14]||(e[14]=function(t){return r.brushSize=90})},[b])],2)]),Object(o["d"])("div",{class:"btn",title:"Choose Color",onClick:e[16]||(e[16]=function(t){return r.showColorMenu=!r.showColorMenu})},[Object(o["d"])("object",{class:"btn-svg",data:r.svgs.paintSvg,type:"image/svg+xml"},null,8,["data"]),Object(o["d"])("div",{class:["color-menu",{appear:r.showColorMenu}]},[(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(r.colors,(function(t,e){return Object(o["e"])(),Object(o["c"])("div",{key:e},[Object(o["d"])("div",{class:"color",style:{"background-color":t},onClick:function(e){return m.color=t}},null,12,["onClick"])])})),128))],2)]),Object(o["d"])("div",{class:"btn",title:"Download The Canvas",onClick:e[18]||(e[18]=function(){return c.clickUpload.apply(c,arguments)})},[Object(o["d"])("object",{class:"btn-svg",data:r.svgs.uploadSvg,type:"image/svg+xml"},null,8,["data"]),Object(o["d"])("input",{id:"uploadInput",type:"file",onChange:e[17]||(e[17]=function(){return c.uploadImage.apply(c,arguments)}),hidden:"",accept:"image/*"},null,32),h]),Object(o["d"])("div",{class:"btn",title:"Download The Canvas",onClick:e[19]||(e[19]=function(){return c.downloadCanvas.apply(c,arguments)})},[Object(o["d"])("object",{class:"btn-svg",data:r.svgs.dowloadSvg,type:"image/svg+xml"},null,8,["data"])]),Object(o["d"])("a",g,[Object(o["d"])("object",{class:"btn-svg heart",data:r.svgs.heartSvg,type:"image/svg+xml"},null,8,["data"])])])])})),j=(n("cb29"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),{name:"home",data:function(){return{svgs:{leftSvg:n("34b1"),dowloadSvg:n("f28e"),heartSvg:n("7d16"),paintSvg:n("954f"),pencilSvg:n("6492"),trashSvg:n("0d45"),uploadSvg:n("5a96")},brushSize:2,sizes:[6,12,24,48],color:"black",randomColor:"#",colors:["#222","#fff","#2C3E50","#5D6D7E","#7F8C8D","#95A5A6","#CACFD2","#D35400","#E67E22","#F39C12","#F4D03F","#2ECC71","#27AE60","#16A085","#1ABC9C","#3498DB","#2980B9","#8E44AD","#9B59B6","#CB4335","#A93226"],canvas:null,x:0,y:0,isDrawing:!1,showPenMenu:!1,showColorMenu:!1,selectedImg:null}},mounted:function(){var t=this,e=document.getElementById("canvas");this.canvas=e.getContext("2d"),this.resizeCanvas(),this.drawDots(),this.getRandomColor(),this.setRandomColor(),document.querySelector("#cursor").style.display="none",setTimeout((function(){t.setCustomCursor()}),500)},methods:{drawLine:function(t,e,n,o){var a=this.canvas;a.beginPath(),a.strokeStyle=this.color,a.lineWidth=this.brushSize,a.moveTo(t,e),a.lineTo(n,o),a.stroke(),a.closePath(),a.lineCap="round"},draw:function(t){this.isDrawing&&(this.drawLine(this.x,this.y,t.offsetX,t.offsetY),this.x=t.offsetX,this.y=t.offsetY,t.preventDefault());var e=t.touches[0],n=new MouseEvent("mousemove",{clientX:e.clientX,clientY:e.clientY});this.draw(n)},startDraw:function(t){this.x=t.offsetX,this.y=t.offsetY,this.isDrawing=!0},stopDraw:function(t){this.isDrawing&&(this.drawLine(this.x,this.y,t.offsetX,t.offsetY),this.x=0,this.y=0,this.isDrawing=!1)},clearCanvas:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),this.drawDots()},drawDots:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),n=25;e.fillStyle="rgba(0, 0, 0, .3)";for(var o=0;o*n<t.width;o++)for(var a=0;a*n<t.height;a++)o>0&&a>0&&(e.beginPath(),e.rect(o*n,a*n,2,2),e.fill(),e.closePath())},resizeCanvas:function(){var t=document.getElementById("canvas");t.width=window.innerWidth-30,t.height=window.innerHeight-85},getRandomColor:function(){for(var t="0123456789ABCDEF",e="",n=0;n<6;n++)this.randomColor+=t[Math.floor(16*Math.random())];return e},setRandomColor:function(){this.color=this.randomColor},clickUpload:function(){document.querySelector("#uploadInput").click()},uploadImage:function(t){var e=this,n=document.querySelector("#prevImg");n.src=URL.createObjectURL(t.target.files[0]),n.onload=function(){URL.revokeObjectURL(n.src)},setTimeout((function(){e.putImgToCanvas()}),100)},putImgToCanvas:function(){var t=document.querySelector("#prevImg"),e=document.getElementById("canvas"),n=e.getContext("2d"),o=e.width,a=t.width/t.height,r=o/a;r<e.height&&(r=e.height,o=r*a);var c=o>e.width?(e.width-o)/2:0,i=r>e.height?(e.height-r)/2:0;n.drawImage(t,c,i,o,r)},downloadCanvas:function(){var t=document.createElement("a");t.download="EgakiImage.png",t.href=document.getElementById("canvas").toDataURL(),t.click()},setCustomCursor:function(){var t=document.querySelector("#cursor");document.addEventListener("mousemove",(function(e){t.setAttribute("style","top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;")})),document.addEventListener("mousedown",(function(){t.classList.add("get-reckt")})),document.addEventListener("mouseup",(function(){t.classList.remove("get-reckt")}))}}});n("abb7");j.render=m,j.__scopeId="data-v-42d7a32a";var w=j,O={name:"App",components:{Home:w}};n("64be");O.render=r;var y=O;Object(o["b"])(y).mount("#app")},"5a96":function(t,e,n){t.exports=n.p+"img/upload.933ebf67.svg"},6492:function(t,e,n){t.exports=n.p+"img/pen.104bf02c.svg"},"64be":function(t,e,n){"use strict";n("c894")},"7d16":function(t,e,n){t.exports=n.p+"img/heart.f2610513.svg"},"954f":function(t,e,n){t.exports=n.p+"img/paint-palette.dcebca73.svg"},abb7:function(t,e,n){"use strict";n("f8b8")},c894:function(t,e,n){},f28e:function(t,e,n){t.exports=n.p+"img/download.f7d264bc.svg"},f8b8:function(t,e,n){}});
//# sourceMappingURL=app.e43ed45d.js.map