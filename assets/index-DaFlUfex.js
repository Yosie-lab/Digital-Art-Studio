(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wl="170",id=0,Dc=1,sd=2,Ou=1,rd=2,On=3,fi=0,Pe=1,ue=2,ci=0,Oe=1,jt=2,Uc=3,Nc=4,od=5,Ai=100,ad=101,ld=102,cd=103,hd=104,ud=200,fd=201,dd=202,pd=203,Ga=204,Ha=205,md=206,gd=207,Md=208,_d=209,xd=210,vd=211,yd=212,Sd=213,bd=214,ka=0,Va=1,Wa=2,Ss=3,Xa=4,Ya=5,qa=6,Za=7,Bu=0,wd=1,Ed=2,hi=0,Ad=1,Td=2,Rd=3,Cd=4,Pd=5,Ld=6,Id=7,Gu=300,bs=301,ws=302,Ja=303,Ka=304,Do=306,$a=1e3,Li=1001,ja=1002,sn=1003,Dd=1004,Ir=1005,bn=1006,ko=1007,Ii=1008,kn=1009,Hu=1010,ku=1011,pr=1012,Xl=1013,Ni=1014,wn=1015,Ar=1016,Yl=1017,ql=1018,Es=1020,Vu=35902,Wu=1021,Xu=1022,gn=1023,Yu=1024,qu=1025,xs=1026,As=1027,Zl=1028,Jl=1029,Zu=1030,Kl=1031,$l=1033,Mo=33776,_o=33777,xo=33778,vo=33779,Qa=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,fl=37814,dl=37815,pl=37816,ml=37817,gl=37818,Ml=37819,_l=37820,xl=37821,yo=36492,vl=36494,yl=36495,Ju=36283,Sl=36284,bl=36285,wl=36286,Ud=3200,Nd=3201,Ku=0,Fd=1,si="",Je="srgb",Ls="srgb-linear",Uo="linear",ce="srgb",Zi=7680,Fc=519,zd=512,Od=513,Bd=514,$u=515,Gd=516,Hd=517,kd=518,Vd=519,zc=35044,Wd=35048,Oc="300 es",Bn=2e3,bo=2001;class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const ar=Math.PI/180,mr=180/Math.PI;function Hi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function ze(n,t,e){return Math.max(t,Math.min(e,n))}function jl(n,t){return(n%t+t)%t}function Xd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Yd(n,t,e){return n!==t?(e-n)/(t-n):0}function lr(n,t,e){return(1-e)*n+e*t}function qd(n,t,e,i){return lr(n,t,1-Math.exp(-e*i))}function Zd(n,t=1){return t-Math.abs(jl(n,t*2)-t)}function Jd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Kd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function $d(n,t){return n+Math.floor(Math.random()*(t-n+1))}function jd(n,t){return n+Math.random()*(t-n)}function Qd(n){return n*(.5-Math.random())}function tp(n){n!==void 0&&(Bc=n);let t=Bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ep(n){return n*ar}function np(n){return n*mr}function ip(n){return(n&n-1)===0&&n!==0}function sp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function op(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),u=o((t+i)/2),f=r((t-i)/2),p=o((t-i)/2),m=r((i-t)/2),M=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*f,l*p,a*h);break;case"YZY":n.set(l*p,a*u,l*f,a*h);break;case"ZXZ":n.set(l*f,l*p,a*u,a*h);break;case"XZX":n.set(a*u,l*M,l*m,a*h);break;case"YXY":n.set(l*m,a*u,l*M,a*h);break;case"ZYZ":n.set(l*M,l*m,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ap={DEG2RAD:ar,RAD2DEG:mr,generateUUID:Hi,clamp:ze,euclideanModulo:jl,mapLinear:Xd,inverseLerp:Yd,lerp:lr,damp:qd,pingpong:Zd,smoothstep:Jd,smootherstep:Kd,randInt:$d,randFloat:jd,randFloatSpread:Qd,seededRandom:tp,degToRad:ep,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:sp,floorPowerOfTwo:rp,setQuaternionFromProperEuler:op,normalize:qe,denormalize:ps};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,i,s,r,o,a,l,h){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],u=i[4],f=i[7],p=i[2],m=i[5],M=i[8],x=s[0],g=s[3],d=s[6],b=s[1],w=s[4],_=s[7],R=s[2],y=s[5],E=s[8];return r[0]=o*x+a*b+l*R,r[3]=o*g+a*w+l*y,r[6]=o*d+a*_+l*E,r[1]=h*x+u*b+f*R,r[4]=h*g+u*w+f*y,r[7]=h*d+u*_+f*E,r[2]=p*x+m*b+M*R,r[5]=p*g+m*w+M*y,r[8]=p*d+m*_+M*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-i*r*u+i*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=u*o-a*h,p=a*l-u*r,m=h*r-o*l,M=e*f+i*p+s*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/M;return t[0]=f*x,t[1]=(s*h-u*i)*x,t[2]=(a*i-s*o)*x,t[3]=p*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(i*l-h*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new Jt;function ju(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lp(){const n=wo("canvas");return n.style.display="block",n}const Gc={};function ir(n){n in Gc||(Gc[n]=!0,console.warn(n))}function cp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function hp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function up(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(n.r=Hn(n.r),n.g=Hn(n.g),n.b=Hn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(n.r=vs(n.r),n.g=vs(n.g),n.b=vs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===si?Uo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Hc=[.64,.33,.3,.6,.15,.06],kc=[.2126,.7152,.0722],Vc=[.3127,.329],Wc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Ls]:{primaries:Hc,whitePoint:Vc,transfer:Uo,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:kc,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:Hc,whitePoint:Vc,transfer:ce,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:kc,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});let Ji;class fp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=wo("canvas")),Ji.width=t.width,Ji.height=t.height;const i=Ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dp=0;class Qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wo(s[o].image)):r.push(Wo(s[o]))}else r=Wo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pp=0;class Ye extends Is{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=Li,s=Li,r=bn,o=Ii,a=gn,l=kn,h=Ye.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Hi(),this.name="",this.source=new Qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $a:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $a:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Gu;Ye.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,h=l[0],u=l[4],f=l[8],p=l[1],m=l[5],M=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-x)<.01&&Math.abs(M-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+x)<.1&&Math.abs(M+g)<.1&&Math.abs(h+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(h+1)/2,_=(m+1)/2,R=(d+1)/2,y=(u+p)/4,E=(f+x)/4,A=(M+g)/4;return w>_&&w>R?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=y/i,r=E/i):_>R?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=y/s,r=A/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=E/r,s=A/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-M)*(g-M)+(f-x)*(f-x)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(g-M)/b,this.y=(f-x)/b,this.z=(p-u)/b,this.w=Math.acos((h+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mp extends Is{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ye(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends mp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class tf extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gp extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],u=i[s+2],f=i[s+3];const p=r[o+0],m=r[o+1],M=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=M,t[e+3]=x;return}if(f!==x||l!==p||h!==m||u!==M){let g=1-a;const d=l*p+h*m+u*M+f*x,b=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const R=Math.sqrt(w),y=Math.atan2(R,d*b);g=Math.sin(g*y)/R,a=Math.sin(a*y)/R}const _=a*b;if(l=l*g+p*_,h=h*g+m*_,u=u*g+M*_,f=f*g+x*_,g===1-a){const R=1/Math.sqrt(l*l+h*h+u*u+f*f);l*=R,h*=R,u*=R,f*=R}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o],p=r[o+1],m=r[o+2],M=r[o+3];return t[e]=a*M+u*f+l*m-h*p,t[e+1]=l*M+u*p+h*f-a*m,t[e+2]=h*M+u*m+a*p-l*f,t[e+3]=u*M-a*f-l*p-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(s/2),f=a(r/2),p=l(i/2),m=l(s/2),M=l(r/2);switch(o){case"XYZ":this._x=p*u*f+h*m*M,this._y=h*m*f-p*u*M,this._z=h*u*M+p*m*f,this._w=h*u*f-p*m*M;break;case"YXZ":this._x=p*u*f+h*m*M,this._y=h*m*f-p*u*M,this._z=h*u*M-p*m*f,this._w=h*u*f+p*m*M;break;case"ZXY":this._x=p*u*f-h*m*M,this._y=h*m*f+p*u*M,this._z=h*u*M+p*m*f,this._w=h*u*f-p*m*M;break;case"ZYX":this._x=p*u*f-h*m*M,this._y=h*m*f+p*u*M,this._z=h*u*M-p*m*f,this._w=h*u*f+p*m*M;break;case"YZX":this._x=p*u*f+h*m*M,this._y=h*m*f+p*u*M,this._z=h*u*M-p*m*f,this._w=h*u*f-p*m*M;break;case"XZY":this._x=p*u*f-h*m*M,this._y=h*m*f-p*u*M,this._z=h*u*M+p*m*f,this._w=h*u*f+p*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],f=e[10],p=i+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-h)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+h)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-h)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+h)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-i*h,this._z=r*u+o*h+i*l-s*a,this._w=o*u-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),f=Math.sin((1-e)*u)/h,p=Math.sin(e*u)/h;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,i=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*h+o*f-a*u,this.y=i+l*u+a*h-r*f,this.z=s+l*f+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new q,Yc=new zi;class ki{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Ur.subVectors(this.max,Bs),Ki.subVectors(t.a,Bs),$i.subVectors(t.b,Bs),ji.subVectors(t.c,Bs),Jn.subVectors($i,Ki),Kn.subVectors(ji,$i),mi.subVectors(Ki,ji);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-mi.y,mi.x,0];return!Yo(e,Ki,$i,ji,Ur)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Ki,$i,ji,Ur))?!1:(Nr.crossVectors(Jn,Kn),e=[Nr.x,Nr.y,Nr.z],Yo(e,Ki,$i,ji,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new q,new q,new q,new q,new q,new q,new q,new q],fn=new q,Dr=new ki,Ki=new q,$i=new q,ji=new q,Jn=new q,Kn=new q,mi=new q,Bs=new q,Ur=new q,Nr=new q,gi=new q;function Yo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gi.fromArray(n,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),h=e.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const Mp=new ki,Gs=new q,qo=new q;class Vi{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Mp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Gs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(qo)),this.expandByPoint(Gs.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new q,Zo=new q,Fr=new q,$n=new q,Jo=new q,zr=new q,Ko=new q;class Ql{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Zo.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Zo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Fr),a=$n.dot(this.direction),l=-$n.dot(Fr),h=$n.lengthSq(),u=Math.abs(1-o*o);let f,p,m,M;if(u>0)if(f=o*l-a,p=o*a-l,M=r*u,f>=0)if(p>=-M)if(p<=M){const x=1/u;f*=x,p*=x,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+h}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;else p<=-M?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h):p<=M?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+h):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Zo).addScaledVector(Fr,p),m}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const i=Dn.dot(this.direction),s=Dn.dot(Dn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(i=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(i=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,i,s,r){Jo.subVectors(e,t),zr.subVectors(i,t),Ko.crossVectors(Jo,zr);let o=this.direction.dot(Ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);const l=a*this.direction.dot(zr.crossVectors($n,zr));if(l<0)return null;const h=a*this.direction.dot(Jo.cross($n));if(h<0||l+h>o)return null;const u=-a*$n.dot(Ko);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,s,r,o,a,l,h,u,f,p,m,M,x,g){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,u,f,p,m,M,x,g)}set(t,e,i,s,r,o,a,l,h,u,f,p,m,M,x,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=h,d[6]=u,d[10]=f,d[14]=p,d[3]=m,d[7]=M,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const p=o*u,m=o*f,M=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=h,e[1]=m+M*h,e[5]=p-x*h,e[9]=-a*l,e[2]=x-p*h,e[6]=M+m*h,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,m=l*f,M=h*u,x=h*f;e[0]=p+x*a,e[4]=M*a-m,e[8]=o*h,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-M,e[6]=x+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,m=l*f,M=h*u,x=h*f;e[0]=p-x*a,e[4]=-o*f,e[8]=M+m*a,e[1]=m+M*a,e[5]=o*u,e[9]=x-p*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,m=o*f,M=a*u,x=a*f;e[0]=l*u,e[4]=M*h-m,e[8]=p*h+x,e[1]=l*f,e[5]=x*h+p,e[9]=m*h-M,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,m=o*h,M=a*l,x=a*h;e[0]=l*u,e[4]=x-p*f,e[8]=M*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=m*f+M,e[10]=p-x*f}else if(t.order==="XZY"){const p=o*l,m=o*h,M=a*l,x=a*h;e[0]=l*u,e[4]=-f,e[8]=h*u,e[1]=p*f+x,e[5]=o*u,e[9]=m*f-M,e[2]=M*f-m,e[6]=a*u,e[10]=x*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,xp)}lookAt(t,e,i){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),jn.crossVectors(i,tn),jn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),jn.crossVectors(i,tn)),jn.normalize(),Or.crossVectors(tn,jn),s[0]=jn.x,s[4]=Or.x,s[8]=tn.x,s[1]=jn.y,s[5]=Or.y,s[9]=tn.y,s[2]=jn.z,s[6]=Or.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],u=i[1],f=i[5],p=i[9],m=i[13],M=i[2],x=i[6],g=i[10],d=i[14],b=i[3],w=i[7],_=i[11],R=i[15],y=s[0],E=s[4],A=s[8],v=s[12],S=s[1],T=s[5],I=s[9],U=s[13],V=s[2],H=s[6],W=s[10],Z=s[14],X=s[3],$=s[7],rt=s[11],ot=s[15];return r[0]=o*y+a*S+l*V+h*X,r[4]=o*E+a*T+l*H+h*$,r[8]=o*A+a*I+l*W+h*rt,r[12]=o*v+a*U+l*Z+h*ot,r[1]=u*y+f*S+p*V+m*X,r[5]=u*E+f*T+p*H+m*$,r[9]=u*A+f*I+p*W+m*rt,r[13]=u*v+f*U+p*Z+m*ot,r[2]=M*y+x*S+g*V+d*X,r[6]=M*E+x*T+g*H+d*$,r[10]=M*A+x*I+g*W+d*rt,r[14]=M*v+x*U+g*Z+d*ot,r[3]=b*y+w*S+_*V+R*X,r[7]=b*E+w*T+_*H+R*$,r[11]=b*A+w*I+_*W+R*rt,r[15]=b*v+w*U+_*Z+R*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],f=t[6],p=t[10],m=t[14],M=t[3],x=t[7],g=t[11],d=t[15];return M*(+r*l*f-s*h*f-r*a*p+i*h*p+s*a*m-i*l*m)+x*(+e*l*m-e*h*p+r*o*p-s*o*m+s*h*u-r*l*u)+g*(+e*h*f-e*a*m-r*o*f+i*o*m+r*a*u-i*h*u)+d*(-s*a*u-e*l*f+e*a*p+s*o*f-i*o*p+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=t[9],p=t[10],m=t[11],M=t[12],x=t[13],g=t[14],d=t[15],b=f*g*h-x*p*h+x*l*m-a*g*m-f*l*d+a*p*d,w=M*p*h-u*g*h-M*l*m+o*g*m+u*l*d-o*p*d,_=u*x*h-M*f*h+M*a*m-o*x*m-u*a*d+o*f*d,R=M*f*l-u*x*l-M*a*p+o*x*p+u*a*g-o*f*g,y=e*b+i*w+s*_+r*R;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/y;return t[0]=b*E,t[1]=(x*p*r-f*g*r-x*s*m+i*g*m+f*s*d-i*p*d)*E,t[2]=(a*g*r-x*l*r+x*s*h-i*g*h-a*s*d+i*l*d)*E,t[3]=(f*l*r-a*p*r-f*s*h+i*p*h+a*s*m-i*l*m)*E,t[4]=w*E,t[5]=(u*g*r-M*p*r+M*s*m-e*g*m-u*s*d+e*p*d)*E,t[6]=(M*l*r-o*g*r-M*s*h+e*g*h+o*s*d-e*l*d)*E,t[7]=(o*p*r-u*l*r+u*s*h-e*p*h-o*s*m+e*l*m)*E,t[8]=_*E,t[9]=(M*f*r-u*x*r-M*i*m+e*x*m+u*i*d-e*f*d)*E,t[10]=(o*x*r-M*a*r+M*i*h-e*x*h-o*i*d+e*a*d)*E,t[11]=(u*a*r-o*f*r-u*i*h+e*f*h+o*i*m-e*a*m)*E,t[12]=R*E,t[13]=(u*x*s-M*f*s+M*i*p-e*x*p-u*i*g+e*f*g)*E,t[14]=(M*a*s-o*x*s-M*i*l+e*x*l+o*i*g-e*a*g)*E,t[15]=(o*f*s-u*a*s+u*i*l-e*f*l-o*i*p+e*a*p)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+i,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,f=a+a,p=r*h,m=r*u,M=r*f,x=o*u,g=o*f,d=a*f,b=l*h,w=l*u,_=l*f,R=i.x,y=i.y,E=i.z;return s[0]=(1-(x+d))*R,s[1]=(m+_)*R,s[2]=(M-w)*R,s[3]=0,s[4]=(m-_)*y,s[5]=(1-(p+d))*y,s[6]=(g+b)*y,s[7]=0,s[8]=(M+w)*E,s[9]=(g-b)*E,s[10]=(1-(p+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);const h=1/r,u=1/o,f=1/a;return dn.elements[0]*=h,dn.elements[1]*=h,dn.elements[2]*=h,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,e.setFromRotationMatrix(dn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Bn){const l=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s);let m,M;if(a===Bn)m=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===bo)m=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Bn){const l=this.elements,h=1/(e-t),u=1/(i-s),f=1/(o-r),p=(e+t)*h,m=(i+s)*u;let M,x;if(a===Bn)M=(o+r)*f,x=-2*f;else if(a===bo)M=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Qi=new q,dn=new le,_p=new q(0,0,0),xp=new q(1,1,1),jn=new q,Or=new q,tn=new q,qc=new le,Zc=new zi;class En{constructor(t=0,e=0,i=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class ef{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vp=0;const Jc=new q,ts=new zi,Un=new le,Br=new q,Hs=new q,yp=new q,Sp=new zi,Kc=new q(1,0,0),$c=new q(0,1,0),jc=new q(0,0,1),Qc={type:"added"},bp={type:"removed"},es={type:"childadded",child:null},$o={type:"childremoved",child:null};class Yt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const t=new q,e=new En,i=new zi,s=new q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Jt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ef,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Kc,t)}rotateY(t){return this.rotateOnAxis($c,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return Jc.copy(t).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kc,t)}translateY(t){return this.translateOnAxis($c,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Br.copy(t):Br.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Hs,Br,this.up):Un.lookAt(Br,Hs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Un),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bp),$o.child=t,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),m=o(t.animations),M=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),M.length>0&&(i.nodes=M)}return i.object=s,i;function o(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new q(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new q,Nn=new q,jo=new q,Fn=new q,ns=new q,is=new q,th=new q,Qo=new q,ta=new q,ea=new q,na=new he,ia=new he,sa=new he;class mn{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),Nn.subVectors(i,e),jo.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Nn),l=pn.dot(jo),h=Nn.dot(Nn),u=Nn.dot(jo),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(h*l-a*u)*p,M=(o*u-a*l)*p;return r.set(1-m-M,M,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,i),sa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(na,r.x),o.addScaledVector(ia,r.y),o.addScaledVector(sa,r.z),o}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),Nn.subVectors(t,e),pn.cross(Nn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),pn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,i),is.subVectors(r,i),Qo.subVectors(t,i);const l=ns.dot(Qo),h=is.dot(Qo);if(l<=0&&h<=0)return e.copy(i);ta.subVectors(t,s);const u=ns.dot(ta),f=is.dot(ta);if(u>=0&&f<=u)return e.copy(s);const p=l*f-u*h;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ns,o);ea.subVectors(t,r);const m=ns.dot(ea),M=is.dot(ea);if(M>=0&&m<=M)return e.copy(r);const x=m*h-l*M;if(x<=0&&h>=0&&M<=0)return a=h/(h-M),e.copy(i).addScaledVector(is,a);const g=u*M-m*f;if(g<=0&&f-u>=0&&m-M>=0)return th.subVectors(r,s),a=(f-u)/(f-u+(m-M)),e.copy(s).addScaledVector(th,a);const d=1/(g+x+p);return o=x*d,a=p*d,e.copy(i).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=jl(t,1),e=ze(e,0,1),i=ze(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ra(o,r,t+1/3),this.g=ra(o,r,t),this.b=ra(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const i=nf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ne.fromWorkingColorSpace(We.copy(this),t),Math.round(ze(We.r*255,0,255))*65536+Math.round(ze(We.g*255,0,255))*256+Math.round(ze(We.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(We.copy(this),e);const i=We.r,s=We.g,r=We.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,h;const u=(a+o)/2;if(a===o)l=0,h=0;else{const f=o-a;switch(h=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Je){ne.fromWorkingColorSpace(We.copy(this),t);const e=We.r,i=We.g,s=We.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Gr);const i=lr(Qn.h,Gr.h,e),s=lr(Qn.s,Gr.s,e),r=lr(Qn.l,Gr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new kt;kt.NAMES=nf;let wp=0;class Wi extends Is{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Hi(),this.name="",this.blending=Oe,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Ha,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oe&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ga&&(i.blendSrc=this.blendSrc),this.blendDst!==Ha&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ee extends Wi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new q,Hr=new Et;class Le{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zc&&(t.usage=this.usage),t}}class sf extends Le{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class rf extends Le{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class te extends Le{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ep=0;const an=new le,oa=new Yt,ss=new q,en=new ki,ks=new ki,Ne=new q;class ye extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?rf:sf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,i){return an.makeTranslation(t,e,i),this.applyMatrix4(an),this}scale(t,e,i){return an.makeScale(t,e,i),this.applyMatrix4(an),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(en.min,ks.min),en.expandByPoint(Ne),Ne.addVectors(en.max,ks.max),en.expandByPoint(Ne)):(en.expandByPoint(ks.min),en.expandByPoint(ks.max))}en.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Ne.fromBufferAttribute(a,h),l&&(ss.fromBufferAttribute(t,h),Ne.add(ss)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new q,l[A]=new q;const h=new q,u=new q,f=new q,p=new Et,m=new Et,M=new Et,x=new q,g=new q;function d(A,v,S){h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,S),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,v),M.fromBufferAttribute(r,S),u.sub(h),f.sub(h),m.sub(p),M.sub(p);const T=1/(m.x*M.y-M.x*m.y);isFinite(T)&&(x.copy(u).multiplyScalar(M.y).addScaledVector(f,-m.y).multiplyScalar(T),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-M.x).multiplyScalar(T),a[A].add(x),a[v].add(x),a[S].add(x),l[A].add(g),l[v].add(g),l[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,v=b.length;A<v;++A){const S=b[A],T=S.start,I=S.count;for(let U=T,V=T+I;U<V;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const w=new q,_=new q,R=new q,y=new q;function E(A){R.fromBufferAttribute(s,A),y.copy(R);const v=a[A];w.copy(v),w.sub(R.multiplyScalar(R.dot(v))).normalize(),_.crossVectors(y,v);const T=_.dot(l[A])<0?-1:1;o.setXYZW(A,w.x,w.y,w.z,T)}for(let A=0,v=b.length;A<v;++A){const S=b[A],T=S.start,I=S.count;for(let U=T,V=T+I;U<V;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,h=new q,u=new q,f=new q;if(t)for(let p=0,m=t.count;p<m;p+=3){const M=t.getX(p+0),x=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,M),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,g),a.add(u),l.add(u),h.add(u),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){const h=a.array,u=a.itemSize,f=a.normalized,p=new h.constructor(l.length*u);let m=0,M=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let d=0;d<u;d++)p[M++]=h[m++]}return new Le(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,i);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let u=0,f=h.length;u<f;u++){const p=h[u],m=t(p,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let f=0,p=h.length;f<p;f++){const m=h[f];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],f=r[h];for(let p=0,m=f.length;p<m;p++)u.push(f[p].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,u=o.length;h<u;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new le,Mi=new Ql,kr=new Vi,nh=new q,Vr=new q,Wr=new q,Xr=new q,aa=new q,Yr=new q,ih=new q,qr=new q;class Pt extends Yt{constructor(t=new ye,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=a[l],f=r[l];u!==0&&(aa.fromBufferAttribute(f,t),o?Yr.addScaledVector(aa,u):Yr.addScaledVector(aa.sub(e),u))}e.add(Yr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(kr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(kr,nh)===null||Mi.origin.distanceToSquared(nh)>(t.far-t.near)**2))&&(eh.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(eh),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,x=p.length;M<x;M++){const g=p[M],d=o[g.materialIndex],b=Math.max(g.start,m.start),w=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let _=b,R=w;_<R;_+=3){const y=a.getX(_),E=a.getX(_+1),A=a.getX(_+2);s=Zr(this,d,t,i,h,u,f,y,E,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const M=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let g=M,d=x;g<d;g+=3){const b=a.getX(g),w=a.getX(g+1),_=a.getX(g+2);s=Zr(this,o,t,i,h,u,f,b,w,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,x=p.length;M<x;M++){const g=p[M],d=o[g.materialIndex],b=Math.max(g.start,m.start),w=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let _=b,R=w;_<R;_+=3){const y=_,E=_+1,A=_+2;s=Zr(this,d,t,i,h,u,f,y,E,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const M=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=M,d=x;g<d;g+=3){const b=g,w=g+1,_=g+2;s=Zr(this,o,t,i,h,u,f,b,w,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Ap(n,t,e,i,s,r,o,a){let l;if(t.side===Pe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===fi,a),l===null)return null;qr.copy(a),qr.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(qr);return h<e.near||h>e.far?null:{distance:h,point:qr.clone(),object:n}}function Zr(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,Vr),n.getVertexPosition(l,Wr),n.getVertexPosition(h,Xr);const u=Ap(n,t,e,i,Vr,Wr,Xr,ih);if(u){const f=new q;mn.getBarycoord(ih,Vr,Wr,Xr,f),s&&(u.uv=mn.getInterpolatedAttribute(s,a,l,h,f,new Et)),r&&(u.uv1=mn.getInterpolatedAttribute(r,a,l,h,f,new Et)),o&&(u.normal=mn.getInterpolatedAttribute(o,a,l,h,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c:h,normal:new q,materialIndex:0};mn.getNormal(Vr,Wr,Xr,p.normal),u.face=p,u.barycoord=f}return u}class be extends ye{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],u=[],f=[];let p=0,m=0;M("z","y","x",-1,-1,i,e,t,o,r,0),M("z","y","x",1,-1,i,e,-t,o,r,1),M("x","z","y",1,1,t,i,e,s,o,2),M("x","z","y",1,-1,t,i,-e,s,o,3),M("x","y","z",1,-1,t,e,i,s,r,4),M("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(f,2));function M(x,g,d,b,w,_,R,y,E,A,v){const S=_/E,T=R/A,I=_/2,U=R/2,V=y/2,H=E+1,W=A+1;let Z=0,X=0;const $=new q;for(let rt=0;rt<W;rt++){const ot=rt*T-U;for(let st=0;st<H;st++){const J=st*S-I;$[x]=J*b,$[g]=ot*w,$[d]=V,h.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[d]=y>0?1:-1,u.push($.x,$.y,$.z),f.push(st/E),f.push(1-rt/A),Z+=1}}for(let rt=0;rt<A;rt++)for(let ot=0;ot<E;ot++){const st=p+ot+H*rt,J=p+ot+H*(rt+1),C=p+(ot+1)+H*(rt+1),P=p+(ot+1)+H*rt;l.push(st,J,P),l.push(J,C,P),X+=6}a.addGroup(m,X,v),m+=X,p+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ze(n){const t={};for(let e=0;e<n.length;e++){const i=Ts(n[e]);for(const s in i)t[s]=i[s]}return t}function Tp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function of(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Rp={clone:Ts,merge:Ze};var Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Wi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class af extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new q,sh=new Et,rh=new Et;class nn extends af{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ar*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,os=1;class Lp extends Yt{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(rs,os,t,e);s.layers=this.layers,this.add(s);const r=new nn(rs,os,t,e);r.layers=this.layers,this.add(r);const o=new nn(rs,os,t,e);o.layers=this.layers,this.add(o);const a=new nn(rs,os,t,e);a.layers=this.layers,this.add(a);const l=new nn(rs,os,t,e);l.layers=this.layers,this.add(l);const h=new nn(rs,os,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,p,m),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class lf extends Ye{constructor(t,e,i,s,r,o,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,i,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ip extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new lf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new be(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:ci});r.uniforms.tEquirect.value=e;const o=new Pt(s,r),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=bn),new Lp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const la=new q,Dp=new q,Up=new Jt;class wi{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=la.subVectors(i,e).cross(Dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(la),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Up.getNormalMatrix(t),s=this.coplanarPoint(la).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Vi,Jr=new q;class tc{constructor(t=new wi,e=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],f=s[6],p=s[7],m=s[8],M=s[9],x=s[10],g=s[11],d=s[12],b=s[13],w=s[14],_=s[15];if(i[0].setComponents(l-r,p-h,g-m,_-d).normalize(),i[1].setComponents(l+r,p+h,g+m,_+d).normalize(),i[2].setComponents(l+o,p+u,g+M,_+b).normalize(),i[3].setComponents(l-o,p-u,g-M,_-b).normalize(),i[4].setComponents(l-a,p-f,g-x,_-w).normalize(),e===Bn)i[5].setComponents(l+a,p+f,g+x,_+w).normalize();else if(e===bo)i[5].setComponents(a,f,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Np(n){const t=new WeakMap;function e(a,l){const h=a.array,u=a.usage,f=h.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,h,u),a.onUploadCallback();let m;if(h instanceof Float32Array)m=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=n.SHORT;else if(h instanceof Uint32Array)m=n.UNSIGNED_INT;else if(h instanceof Int32Array)m=n.INT;else if(h instanceof Int8Array)m=n.BYTE;else if(h instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,h){const u=l.array,f=l.updateRanges;if(n.bindBuffer(h,a),f.length===0)n.bufferSubData(h,0,u);else{f.sort((m,M)=>m.start-M.start);let p=0;for(let m=1;m<f.length;m++){const M=f[p],x=f[m];x.start<=M.start+M.count+1?M.count=Math.max(M.count,x.start+x.count-M.start):(++p,f[p]=x)}f.length=p+1;for(let m=0,M=f.length;m<M;m++){const x=f[m];n.bufferSubData(h,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}class Oi extends ye{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,u=l+1,f=t/a,p=e/l,m=[],M=[],x=[],g=[];for(let d=0;d<u;d++){const b=d*p-o;for(let w=0;w<h;w++){const _=w*f-r;M.push(_,-b,0),x.push(0,0,1),g.push(w/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const w=b+h*d,_=b+h*(d+1),R=b+1+h*(d+1),y=b+1+h*d;m.push(w,_,y),m.push(_,R,y)}this.setIndex(m),this.setAttribute("position",new te(M,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,r0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",d0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ig=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,og=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Fp,alphahash_pars_fragment:zp,alphamap_fragment:Op,alphamap_pars_fragment:Bp,alphatest_fragment:Gp,alphatest_pars_fragment:Hp,aomap_fragment:kp,aomap_pars_fragment:Vp,batching_pars_vertex:Wp,batching_vertex:Xp,begin_vertex:Yp,beginnormal_vertex:qp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:t0,color_fragment:e0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:h0,emissivemap_pars_fragment:u0,colorspace_fragment:f0,colorspace_pars_fragment:d0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:R0,envmap_vertex:_0,fog_vertex:x0,fog_pars_vertex:v0,fog_fragment:y0,fog_pars_fragment:S0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:w0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:A0,lights_pars_begin:T0,lights_toon_fragment:C0,lights_toon_pars_fragment:P0,lights_phong_fragment:L0,lights_phong_pars_fragment:I0,lights_physical_fragment:D0,lights_physical_pars_fragment:U0,lights_fragment_begin:N0,lights_fragment_maps:F0,lights_fragment_end:z0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:H0,map_fragment:k0,map_pars_fragment:V0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Z0,morphcolor_vertex:J0,morphnormal_vertex:K0,morphtarget_pars_vertex:$0,morphtarget_vertex:j0,normal_fragment_begin:Q0,normal_fragment_maps:tm,normal_pars_fragment:em,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:am,iridescence_pars_fragment:lm,opaque_fragment:cm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:fm,dithering_fragment:dm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:_m,shadowmap_vertex:xm,shadowmask_pars_fragment:vm,skinbase_vertex:ym,skinning_pars_vertex:Sm,skinning_vertex:bm,skinnormal_vertex:wm,specularmap_fragment:Em,specularmap_pars_fragment:Am,tonemapping_fragment:Tm,tonemapping_pars_fragment:Rm,transmission_fragment:Cm,transmission_pars_fragment:Pm,uv_pars_fragment:Lm,uv_pars_vertex:Im,uv_vertex:Dm,worldpos_vertex:Um,background_vert:Nm,background_frag:Fm,backgroundCube_vert:zm,backgroundCube_frag:Om,cube_vert:Bm,cube_frag:Gm,depth_vert:Hm,depth_frag:km,distanceRGBA_vert:Vm,distanceRGBA_frag:Wm,equirect_vert:Xm,equirect_frag:Ym,linedashed_vert:qm,linedashed_frag:Zm,meshbasic_vert:Jm,meshbasic_frag:Km,meshlambert_vert:$m,meshlambert_frag:jm,meshmatcap_vert:Qm,meshmatcap_frag:tg,meshnormal_vert:eg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:og,meshtoon_vert:ag,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:ug,shadow_frag:fg,sprite_vert:dg,sprite_frag:pg},Lt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},yn={basic:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ze([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ze([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ze([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ze([Lt.points,Lt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ze([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ze([Lt.common,Lt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ze([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ze([Lt.sprite,Lt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Ze([Lt.common,Lt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Ze([Lt.lights,Lt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};yn.physical={uniforms:Ze([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Kr={r:0,b:0,g:0},xi=new En,mg=new le;function gg(n,t,e,i,s,r,o){const a=new kt(0);let l=r===!0?0:1,h,u,f=null,p=0,m=null;function M(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function x(b){let w=!1;const _=M(b);_===null?d(a,l):_&&_.isColor&&(d(_,1),w=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,w){const _=M(w);_&&(_.isCubeTexture||_.mapping===Do)?(u===void 0&&(u=new Pt(new be(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Ts(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xi.copy(w.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(xi)),u.material.toneMapped=ne.getTransfer(_.colorSpace)!==ce,(f!==_||p!==_.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new Pt(new Oi(2,2),new Vn({name:"BackgroundMaterial",uniforms:Ts(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=ne.getTransfer(_.colorSpace)!==ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=_,p=_.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function d(b,w){b.getRGB(Kr,of(n)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:x,addToRenderList:g}}function Mg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,o=!1;function a(S,T,I,U,V){let H=!1;const W=f(U,I,T);r!==W&&(r=W,h(r.object)),H=m(S,U,I,V),H&&M(S,U,I,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(S,T,I,U),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function h(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,T,I){const U=I.wireframe===!0;let V=i[S.id];V===void 0&&(V={},i[S.id]=V);let H=V[T.id];H===void 0&&(H={},V[T.id]=H);let W=H[U];return W===void 0&&(W=p(l()),H[U]=W),W}function p(S){const T=[],I=[],U=[];for(let V=0;V<e;V++)T[V]=0,I[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:U,object:S,attributes:{},index:null}}function m(S,T,I,U){const V=r.attributes,H=T.attributes;let W=0;const Z=I.getAttributes();for(const X in Z)if(Z[X].location>=0){const rt=V[X];let ot=H[X];if(ot===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),rt===void 0||rt.attribute!==ot||ot&&rt.data!==ot.data)return!0;W++}return r.attributesNum!==W||r.index!==U}function M(S,T,I,U){const V={},H=T.attributes;let W=0;const Z=I.getAttributes();for(const X in Z)if(Z[X].location>=0){let rt=H[X];rt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor));const ot={};ot.attribute=rt,rt&&rt.data&&(ot.data=rt.data),V[X]=ot,W++}r.attributes=V,r.attributesNum=W,r.index=U}function x(){const S=r.newAttributes;for(let T=0,I=S.length;T<I;T++)S[T]=0}function g(S){d(S,0)}function d(S,T){const I=r.newAttributes,U=r.enabledAttributes,V=r.attributeDivisors;I[S]=1,U[S]===0&&(n.enableVertexAttribArray(S),U[S]=1),V[S]!==T&&(n.vertexAttribDivisor(S,T),V[S]=T)}function b(){const S=r.newAttributes,T=r.enabledAttributes;for(let I=0,U=T.length;I<U;I++)T[I]!==S[I]&&(n.disableVertexAttribArray(I),T[I]=0)}function w(S,T,I,U,V,H,W){W===!0?n.vertexAttribIPointer(S,T,I,V,H):n.vertexAttribPointer(S,T,I,U,V,H)}function _(S,T,I,U){x();const V=U.attributes,H=I.getAttributes(),W=T.defaultAttributeValues;for(const Z in H){const X=H[Z];if(X.location>=0){let $=V[Z];if($===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const rt=$.normalized,ot=$.itemSize,st=t.get($);if(st===void 0)continue;const J=st.buffer,C=st.type,P=st.bytesPerElement,z=C===n.INT||C===n.UNSIGNED_INT||$.gpuType===Xl;if($.isInterleavedBufferAttribute){const G=$.data,D=G.stride,B=$.offset;if(G.isInstancedInterleavedBuffer){for(let k=0;k<X.locationSize;k++)d(X.location+k,G.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let k=0;k<X.locationSize;k++)g(X.location+k);n.bindBuffer(n.ARRAY_BUFFER,J);for(let k=0;k<X.locationSize;k++)w(X.location+k,ot/X.locationSize,C,rt,D*P,(B+ot/X.locationSize*k)*P,z)}else{if($.isInstancedBufferAttribute){for(let G=0;G<X.locationSize;G++)d(X.location+G,$.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let G=0;G<X.locationSize;G++)g(X.location+G);n.bindBuffer(n.ARRAY_BUFFER,J);for(let G=0;G<X.locationSize;G++)w(X.location+G,ot/X.locationSize,C,rt,ot*P,ot/X.locationSize*G*P,z)}}else if(W!==void 0){const rt=W[Z];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(X.location,rt);break;case 3:n.vertexAttrib3fv(X.location,rt);break;case 4:n.vertexAttrib4fv(X.location,rt);break;default:n.vertexAttrib1fv(X.location,rt)}}}}b()}function R(){A();for(const S in i){const T=i[S];for(const I in T){const U=T[I];for(const V in U)u(U[V].object),delete U[V];delete T[I]}delete i[S]}}function y(S){if(i[S.id]===void 0)return;const T=i[S.id];for(const I in T){const U=T[I];for(const V in U)u(U[V].object),delete U[V];delete T[I]}delete i[S.id]}function E(S){for(const T in i){const I=i[T];if(I[S.id]===void 0)continue;const U=I[S.id];for(const V in U)u(U[V].object),delete U[V];delete I[S.id]}}function A(){v(),o=!0,r!==s&&(r=s,h(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:y,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function _g(n,t,e){let i;function s(h){i=h}function r(h,u){n.drawArrays(i,h,u),e.update(u,i,1)}function o(h,u,f){f!==0&&(n.drawArraysInstanced(i,h,u,f),e.update(u,i,f))}function a(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,f);let m=0;for(let M=0;M<f;M++)m+=u[M];e.update(m,i,1)}function l(h,u,f,p){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<h.length;M++)o(h[M],u[M],p[M]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,u,0,p,0,f);let M=0;for(let x=0;x<f;x++)M+=u[x]*p[x];e.update(M,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==gn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==kn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wn&&!A)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=M>0,y=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:M,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:R,maxSamples:y}}function vg(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new wi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,m){const M=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!s||M===null||M.length===0||r&&!g)r?u(null):h();else{const b=r?0:i,w=b*4;let _=d.clippingState||null;l.value=_,_=u(M,p,w,m);for(let R=0;R!==w;++R)_[R]=e[R];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,p,m,M){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,M!==!0||g===null){const d=m+x*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<d)&&(g=new Float32Array(d));for(let w=0,_=m;w!==x;++w,_+=4)o.copy(f[w]).applyMatrix4(b,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function yg(n){let t=new WeakMap;function e(o,a){return a===Ja?o.mapping=bs:a===Ka&&(o.mapping=ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ja||a===Ka)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Ip(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class No extends af{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gs=4,oh=[.125,.215,.35,.446,.526,.582],Ti=20,ca=new No,ah=new kt;let ha=null,ua=0,fa=0,da=!1;const Ei=(1+Math.sqrt(5))/2,as=1/Ei,lh=[new q(-Ei,as,0),new q(Ei,as,0),new q(-as,0,Ei),new q(as,0,Ei),new q(0,Ei,-as),new q(0,Ei,as),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class ch{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ha,ua,fa),this._renderer.xr.enabled=da,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ar,format:gn,colorSpace:Ls,depthBuffer:!1},s=hh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sg(r)),this._blurMaterial=bg(r,t,e)}return s}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,ca)}_sceneToCubeUV(t,e,i,s){const a=new nn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(ah),u.toneMapping=hi,u.autoClear=!1;const m=new ee({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),M=new Pt(new be,m);let x=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,x=!0):(m.color.copy(ah),x=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(h[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,h[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,h[d]));const w=this._cubeSize;$r(s,b*w,d>2?w:0,w,w),u.setRenderTarget(s),x&&u.render(M,a),u.render(t,a)}M.geometry.dispose(),M.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===bs||t.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;$r(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ca)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lh[(s-r-1)%lh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pt(this._lodPlanes[s],h),p=h.uniforms,m=this._sizeLods[i]-1,M=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ti-1),x=r/M,g=isFinite(r)?1+Math.floor(u*x):Ti;g>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ti}`);const d=[];let b=0;for(let E=0;E<Ti;++E){const A=E/x,v=Math.exp(-A*A/2);d.push(v),E===0?b+=v:E<g&&(b+=2*v)}for(let E=0;E<d.length;E++)d[E]=d[E]/b;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:w}=this;p.dTheta.value=M,p.mipInt.value=w-i;const _=this._sizeLods[s],R=3*_*(s>w-gs?s-w+gs:0),y=4*(this._cubeSize-_);$r(e,R,y,3*_,2*_),l.setRenderTarget(e),l.render(f,ca)}}function Sg(n){const t=[],e=[],i=[];let s=n;const r=n-gs+1+oh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-gs?l=oh[o-n+gs-1]:o===0&&(l=0),i.push(l);const h=1/(a-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,M=6,x=3,g=2,d=1,b=new Float32Array(x*M*m),w=new Float32Array(g*M*m),_=new Float32Array(d*M*m);for(let y=0;y<m;y++){const E=y%3*2/3-1,A=y>2?0:-1,v=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];b.set(v,x*M*y),w.set(p,g*M*y);const S=[y,y,y,y,y,y];_.set(S,d*M*y)}const R=new ye;R.setAttribute("position",new Le(b,x)),R.setAttribute("uv",new Le(w,g)),R.setAttribute("faceIndex",new Le(_,d)),t.push(R),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function hh(n,t,e){const i=new Fi(n,t,e);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function bg(n,t,e){const i=new Float32Array(Ti),s=new q(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function uh(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function fh(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===Ja||l===Ka,u=l===bs||l===ws;if(h||u){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new ch(n)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return h&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new ch(n)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Eg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ir("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ag(n,t,e,i){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const M in p.attributes)t.remove(p.attributes[M]);for(const M in p.morphAttributes){const x=p.morphAttributes[M];for(let g=0,d=x.length;g<d;g++)t.remove(x[g])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const M in p)t.update(p[M],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const M in m){const x=m[M];for(let g=0,d=x.length;g<d;g++)t.update(x[g],n.ARRAY_BUFFER)}}function h(f){const p=[],m=f.index,M=f.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let w=0,_=b.length;w<_;w+=3){const R=b[w+0],y=b[w+1],E=b[w+2];p.push(R,y,y,E,E,R)}}else if(M!==void 0){const b=M.array;x=M.version;for(let w=0,_=b.length/3-1;w<_;w+=3){const R=w+0,y=w+1,E=w+2;p.push(R,y,y,E,E,R)}}else return;const g=new(ju(p)?rf:sf)(p,1);g.version=x;const d=r.get(f);d&&t.remove(d),r.set(f,g)}function u(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Tg(n,t,e){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){n.drawElements(i,m,r,p*o),e.update(m,i,1)}function h(p,m,M){M!==0&&(n.drawElementsInstanced(i,m,r,p*o,M),e.update(m,i,M))}function u(p,m,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,M);let g=0;for(let d=0;d<M;d++)g+=m[d];e.update(g,i,1)}function f(p,m,M,x){if(M===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)h(p[d]/o,m[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,x,0,M);let d=0;for(let b=0;b<M;b++)d+=m[b]*x[b];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Rg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Cg(n,t,e){const i=new WeakMap,s=new he;function r(o,a,l){const h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let S=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;p!==void 0&&p.texture.dispose();const M=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;M===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let R=a.attributes.position.count*_,y=1;R>t.maxTextureSize&&(y=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*y*4*f),A=new tf(E,R,y,f);A.type=wn,A.needsUpdate=!0;const v=_*4;for(let T=0;T<f;T++){const I=d[T],U=b[T],V=w[T],H=R*y*4*T;for(let W=0;W<I.count;W++){const Z=W*v;M===!0&&(s.fromBufferAttribute(I,W),E[H+Z+0]=s.x,E[H+Z+1]=s.y,E[H+Z+2]=s.z,E[H+Z+3]=0),x===!0&&(s.fromBufferAttribute(U,W),E[H+Z+4]=s.x,E[H+Z+5]=s.y,E[H+Z+6]=s.z,E[H+Z+7]=0),g===!0&&(s.fromBufferAttribute(V,W),E[H+Z+8]=s.x,E[H+Z+9]=s.y,E[H+Z+10]=s.z,E[H+Z+11]=V.itemSize===4?s.w:1)}}p={count:f,texture:A,size:new Et(R,y)},i.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let M=0;for(let g=0;g<h.length;g++)M+=h[g];const x=a.morphTargetsRelative?1:1-M;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Pg(n,t,e,i){let s=new WeakMap;function r(l){const h=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class hf extends Ye{constructor(t,e,i,s,r,o,a,l,h,u=xs){if(u!==xs&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xs&&(i=Ni),i===void 0&&u===As&&(i=Es),super(null,s,r,o,a,l,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uf=new Ye,dh=new hf(1,1),ff=new tf,df=new gp,pf=new lf,ph=[],mh=[],gh=new Float32Array(16),Mh=new Float32Array(9),_h=new Float32Array(4);function Ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ph[s];if(r===void 0&&(r=new Float32Array(s),ph[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fo(n,t){let e=mh[t];e===void 0&&(e=new Int32Array(t),mh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Lg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Ue(e,t)}}function Dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Ue(e,t)}}function Ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Ue(e,t)}}function Ng(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;_h.set(i),n.uniformMatrix2fv(this.addr,!1,_h),Ue(e,i)}}function Fg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;Mh.set(i),n.uniformMatrix3fv(this.addr,!1,Mh),Ue(e,i)}}function zg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;gh.set(i),n.uniformMatrix4fv(this.addr,!1,gh),Ue(e,i)}}function Og(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Ue(e,t)}}function Gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Ue(e,t)}}function Hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Ue(e,t)}}function kg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Ue(e,t)}}function Wg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Ue(e,t)}}function Xg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Ue(e,t)}}function Yg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(dh.compareFunction=$u,r=dh):r=uf,e.setTexture2D(t||r,s)}function qg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||df,s)}function Zg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||pf,s)}function Jg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ff,s)}function Kg(n){switch(n){case 5126:return Lg;case 35664:return Ig;case 35665:return Dg;case 35666:return Ug;case 35674:return Ng;case 35675:return Fg;case 35676:return zg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return Gg;case 35669:case 35673:return Hg;case 5125:return kg;case 36294:return Vg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function $g(n,t){n.uniform1fv(this.addr,t)}function jg(n,t){const e=Ds(t,this.size,2);n.uniform2fv(this.addr,e)}function Qg(n,t){const e=Ds(t,this.size,3);n.uniform3fv(this.addr,e)}function tM(n,t){const e=Ds(t,this.size,4);n.uniform4fv(this.addr,e)}function eM(n,t){const e=Ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function nM(n,t){const e=Ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function iM(n,t){const e=Ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sM(n,t){n.uniform1iv(this.addr,t)}function rM(n,t){n.uniform2iv(this.addr,t)}function oM(n,t){n.uniform3iv(this.addr,t)}function aM(n,t){n.uniform4iv(this.addr,t)}function lM(n,t){n.uniform1uiv(this.addr,t)}function cM(n,t){n.uniform2uiv(this.addr,t)}function hM(n,t){n.uniform3uiv(this.addr,t)}function uM(n,t){n.uniform4uiv(this.addr,t)}function fM(n,t,e){const i=this.cache,s=t.length,r=Fo(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||uf,r[o])}function dM(n,t,e){const i=this.cache,s=t.length,r=Fo(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||df,r[o])}function pM(n,t,e){const i=this.cache,s=t.length,r=Fo(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pf,r[o])}function mM(n,t,e){const i=this.cache,s=t.length,r=Fo(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ff,r[o])}function gM(n){switch(n){case 5126:return $g;case 35664:return jg;case 35665:return Qg;case 35666:return tM;case 35674:return eM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return sM;case 35667:case 35671:return rM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return hM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}class MM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Kg(e.type)}}class _M{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gM(e.type)}}class xM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function xh(n,t){n.seq.push(t),n.map[t.id]=t}function vM(n,t,e){const i=n.name,s=i.length;for(pa.lastIndex=0;;){const r=pa.exec(i),o=pa.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){xh(e,h===void 0?new MM(a,n,t):new _M(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new xM(a),xh(e,f)),e=f}}}class So{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);vM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function vh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const yM=37297;let SM=0;function bM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const yh=new Jt;function wM(n){ne._getMatrix(yh,ne.workingColorSpace,n);const t=`mat3( ${yh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case Uo:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Sh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bM(n.getShaderSource(t),o)}else return s}function EM(n,t){const e=wM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function AM(n,t){let e;switch(t){case Ad:e="Linear";break;case Td:e="Reinhard";break;case Rd:e="Cineon";break;case Cd:e="ACESFilmic";break;case Ld:e="AgX";break;case Id:e="Neutral";break;case Pd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jr=new q;function TM(){ne.getLuminanceCoefficients(jr);const n=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function CM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function PM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function sr(n){return n!==""}function bh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LM=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(n){return n.replace(LM,DM)}const IM=new Map;function DM(n,t){let e=Kt[t];if(e===void 0){const i=IM.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return El(e)}const UM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(n){return n.replace(UM,NM)}function NM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function FM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function zM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bs:case ws:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function OM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function BM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bu:t="ENVMAP_BLENDING_MULTIPLY";break;case wd:t="ENVMAP_BLENDING_MIX";break;case Ed:t="ENVMAP_BLENDING_ADD";break}return t}function GM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function HM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=FM(e),h=zM(e),u=OM(e),f=BM(e),p=GM(e),m=RM(e),M=CM(r),x=s.createProgram();let g,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(sr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(sr).join(`
`),d.length>0&&(d+=`
`)):(g=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),d=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==hi?AM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,EM("linearToOutputTexel",e.outputColorSpace),TM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=El(o),o=bh(o,e),o=wh(o,e),a=El(a),a=bh(a,e),a=wh(a,e),o=Eh(o),a=Eh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=b+g+o,_=b+d+a,R=vh(s,s.VERTEX_SHADER,w),y=vh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,R),s.attachShader(x,y),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(T){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(y).trim();let H=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,y);else{const Z=Sh(s,R,"vertex"),X=Sh(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+Z+`
`+X)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||V==="")&&(W=!1);W&&(T.diagnostics={runnable:H,programLog:I,vertexShader:{log:U,prefix:g},fragmentShader:{log:V,prefix:d}})}s.deleteShader(R),s.deleteShader(y),A=new So(s,x),v=PM(s,x)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,yM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=y,this}let kM=0;class VM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new WM(t),e.set(t,i)),i}}class WM{constructor(t){this.id=kM++,this.code=t,this.usedTimes=0}}function XM(n,t,e,i,s,r,o){const a=new ef,l=new VM,h=new Set,u=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return h.add(v),v===0?"uv":`uv${v}`}function g(v,S,T,I,U){const V=I.fog,H=U.geometry,W=v.isMeshStandardMaterial?I.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||W),X=Z&&Z.mapping===Do?Z.image.height:null,$=M[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ot=rt!==void 0?rt.length:0;let st=0;H.morphAttributes.position!==void 0&&(st=1),H.morphAttributes.normal!==void 0&&(st=2),H.morphAttributes.color!==void 0&&(st=3);let J,C,P,z;if($){const ae=yn[$];J=ae.vertexShader,C=ae.fragmentShader}else J=v.vertexShader,C=v.fragmentShader,l.update(v),P=l.getVertexShaderID(v),z=l.getFragmentShaderID(v);const G=n.getRenderTarget(),D=n.state.buffers.depth.getReversed(),B=U.isInstancedMesh===!0,k=U.isBatchedMesh===!0,nt=!!v.map,Y=!!v.matcap,K=!!Z,N=!!v.aoMap,vt=!!v.lightMap,ut=!!v.bumpMap,yt=!!v.normalMap,mt=!!v.displacementMap,At=!!v.emissiveMap,St=!!v.metalnessMap,O=!!v.roughnessMap,L=v.anisotropy>0,it=v.clearcoat>0,ht=v.dispersion>0,Mt=v.iridescence>0,pt=v.sheen>0,Dt=v.transmission>0,Tt=L&&!!v.anisotropyMap,Ft=it&&!!v.clearcoatMap,at=it&&!!v.clearcoatNormalMap,Q=it&&!!v.clearcoatRoughnessMap,dt=Mt&&!!v.iridescenceMap,gt=Mt&&!!v.iridescenceThicknessMap,bt=pt&&!!v.sheenColorMap,_t=pt&&!!v.sheenRoughnessMap,It=!!v.specularMap,zt=!!v.specularColorMap,Wt=!!v.specularIntensityMap,j=Dt&&!!v.transmissionMap,Rt=Dt&&!!v.thicknessMap,ft=!!v.gradientMap,xt=!!v.alphaMap,Ct=v.alphaTest>0,Ut=!!v.alphaHash,qt=!!v.extensions;let Se=hi;v.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Se=n.toneMapping);const ke={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:J,fragmentShader:C,defines:v.defines,customVertexShaderID:P,customFragmentShaderID:z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:k,batchingColor:k&&U._colorsTexture!==null,instancing:B,instancingColor:B&&U.instanceColor!==null,instancingMorph:B&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ls,alphaToCoverage:!!v.alphaToCoverage,map:nt,matcap:Y,envMap:K,envMapMode:K&&Z.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:vt,bumpMap:ut,normalMap:yt,displacementMap:p&&mt,emissiveMap:At,normalMapObjectSpace:yt&&v.normalMapType===Fd,normalMapTangentSpace:yt&&v.normalMapType===Ku,metalnessMap:St,roughnessMap:O,anisotropy:L,anisotropyMap:Tt,clearcoat:it,clearcoatMap:Ft,clearcoatNormalMap:at,clearcoatRoughnessMap:Q,dispersion:ht,iridescence:Mt,iridescenceMap:dt,iridescenceThicknessMap:gt,sheen:pt,sheenColorMap:bt,sheenRoughnessMap:_t,specularMap:It,specularColorMap:zt,specularIntensityMap:Wt,transmission:Dt,transmissionMap:j,thicknessMap:Rt,gradientMap:ft,opaque:v.transparent===!1&&v.blending===Oe&&v.alphaToCoverage===!1,alphaMap:xt,alphaTest:Ct,alphaHash:Ut,combine:v.combine,mapUv:nt&&x(v.map.channel),aoMapUv:N&&x(v.aoMap.channel),lightMapUv:vt&&x(v.lightMap.channel),bumpMapUv:ut&&x(v.bumpMap.channel),normalMapUv:yt&&x(v.normalMap.channel),displacementMapUv:mt&&x(v.displacementMap.channel),emissiveMapUv:At&&x(v.emissiveMap.channel),metalnessMapUv:St&&x(v.metalnessMap.channel),roughnessMapUv:O&&x(v.roughnessMap.channel),anisotropyMapUv:Tt&&x(v.anisotropyMap.channel),clearcoatMapUv:Ft&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(v.sheenRoughnessMap.channel),specularMapUv:It&&x(v.specularMap.channel),specularColorMapUv:zt&&x(v.specularColorMap.channel),specularIntensityMapUv:Wt&&x(v.specularIntensityMap.channel),transmissionMapUv:j&&x(v.transmissionMap.channel),thicknessMapUv:Rt&&x(v.thicknessMap.channel),alphaMapUv:xt&&x(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(yt||L),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(nt||xt),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:D,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:st,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:nt&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===ce,decodeVideoTextureEmissive:At&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ue,flipSided:v.side===Pe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:qt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&v.extensions.multiDraw===!0||k)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=h.has(1),ke.vertexUv2s=h.has(2),ke.vertexUv3s=h.has(3),h.clear(),ke}function d(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)S.push(T),S.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(b(S,v),w(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function b(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function w(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function _(v){const S=M[v.type];let T;if(S){const I=yn[S];T=Rp.clone(I.uniforms)}else T=v.uniforms;return T}function R(v,S){let T;for(let I=0,U=u.length;I<U;I++){const V=u[I];if(V.cacheKey===S){T=V,++T.usedTimes;break}}return T===void 0&&(T=new HM(n,S,v,r),u.push(T)),T}function y(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function E(v){l.remove(v)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:_,acquireProgram:R,releaseProgram:y,releaseShaderCache:E,programs:u,dispose:A}}function YM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function qM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Th(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Rh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,p,m,M,x,g){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:M,renderOrder:f.renderOrder,z:x,group:g},n[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=M,d.renderOrder=f.renderOrder,d.z=x,d.group=g),t++,d}function a(f,p,m,M,x,g){const d=o(f,p,m,M,x,g);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(f,p,m,M,x,g){const d=o(f,p,m,M,x,g);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function h(f,p){e.length>1&&e.sort(f||qM),i.length>1&&i.sort(p||Th),s.length>1&&s.sort(p||Th)}function u(){for(let f=t,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function ZM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Rh,n.set(i,[o])):s>=r.length?(o=new Rh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function JM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new kt};break;case"SpotLight":e={position:new q,direction:new q,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function KM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let $M=0;function jM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function QM(n){const t=new JM,e=KM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new q);const s=new q,r=new le,o=new le;function a(h){let u=0,f=0,p=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let m=0,M=0,x=0,g=0,d=0,b=0,w=0,_=0,R=0,y=0,E=0;h.sort(jM);for(let v=0,S=h.length;v<S;v++){const T=h[v],I=T.color,U=T.intensity,V=T.distance,H=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=I.r*U,f+=I.g*U,p+=I.b*U;else if(T.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(T.sh.coefficients[W],U);E++}else if(T.isDirectionalLight){const W=t.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Z=T.shadow,X=e.get(T);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=T.shadow.matrix,b++}i.directional[m]=W,m++}else if(T.isSpotLight){const W=t.get(T);W.position.setFromMatrixPosition(T.matrixWorld),W.color.copy(I).multiplyScalar(U),W.distance=V,W.coneCos=Math.cos(T.angle),W.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),W.decay=T.decay,i.spot[x]=W;const Z=T.shadow;if(T.map&&(i.spotLightMap[R]=T.map,R++,Z.updateMatrices(T),T.castShadow&&y++),i.spotLightMatrix[x]=Z.matrix,T.castShadow){const X=e.get(T);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=H,_++}x++}else if(T.isRectAreaLight){const W=t.get(T);W.color.copy(I).multiplyScalar(U),W.halfWidth.set(T.width*.5,0,0),W.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=W,g++}else if(T.isPointLight){const W=t.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),W.distance=T.distance,W.decay=T.decay,T.castShadow){const Z=T.shadow,X=e.get(T);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,i.pointShadow[M]=X,i.pointShadowMap[M]=H,i.pointShadowMatrix[M]=T.shadow.matrix,w++}i.point[M]=W,M++}else if(T.isHemisphereLight){const W=t.get(T);W.skyColor.copy(T.color).multiplyScalar(U),W.groundColor.copy(T.groundColor).multiplyScalar(U),i.hemi[d]=W,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2):(i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=p;const A=i.hash;(A.directionalLength!==m||A.pointLength!==M||A.spotLength!==x||A.rectAreaLength!==g||A.hemiLength!==d||A.numDirectionalShadows!==b||A.numPointShadows!==w||A.numSpotShadows!==_||A.numSpotMaps!==R||A.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=g,i.point.length=M,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+R-y,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=E,A.directionalLength=m,A.pointLength=M,A.spotLength=x,A.rectAreaLength=g,A.hemiLength=d,A.numDirectionalShadows=b,A.numPointShadows=w,A.numSpotShadows=_,A.numSpotMaps=R,A.numLightProbes=E,i.version=$M++)}function l(h,u){let f=0,p=0,m=0,M=0,x=0;const g=u.matrixWorldInverse;for(let d=0,b=h.length;d<b;d++){const w=h[d];if(w.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(w.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),m++}else if(w.isRectAreaLight){const _=i.rectArea[M];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),M++}else if(w.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(g),p++}else if(w.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Ch(n){const t=new QM(n),e=[],i=[];function s(u){h.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function t_(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ch(n),t.set(s,[a])):r>=o.length?(a=new Ch(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class e_ extends Wi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n_ extends Wi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r_(n,t,e){let i=new tc;const s=new Et,r=new Et,o=new he,a=new e_({depthPacking:Nd}),l=new n_,h={},u=e.maxTextureSize,f={[fi]:Pe,[Pe]:fi,[ue]:ue},p=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const M=new ye;M.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pt(M,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let d=this.type;this.render=function(y,E,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const v=n.getRenderTarget(),S=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ci),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=d!==On&&this.type===On,V=d===On&&this.type!==On;for(let H=0,W=y.length;H<W;H++){const Z=y[H],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const $=X.getFrameExtents();if(s.multiply($),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,X.mapSize.y=r.y)),X.map===null||U===!0||V===!0){const ot=this.type!==On?{minFilter:sn,magFilter:sn}:{};X.map!==null&&X.map.dispose(),X.map=new Fi(s.x,s.y,ot),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const rt=X.getViewportCount();for(let ot=0;ot<rt;ot++){const st=X.getViewport(ot);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),I.viewport(o),X.updateMatrices(Z,ot),i=X.getFrustum(),_(E,A,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===On&&b(X,A),X.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(v,S,T)};function b(y,E){const A=t.update(x);p.defines.VSM_SAMPLES!==y.blurSamples&&(p.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Fi(s.x,s.y)),p.uniforms.shadow_pass.value=y.map.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(E,null,A,p,x,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(E,null,A,m,x,null)}function w(y,E,A,v){let S=null;const T=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(T!==void 0)S=T;else if(S=A.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=S.uuid,U=E.uuid;let V=h[I];V===void 0&&(V={},h[I]=V);let H=V[U];H===void 0&&(H=S.clone(),V[U]=H,E.addEventListener("dispose",R)),S=H}if(S.visible=E.visible,S.wireframe=E.wireframe,v===On?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=n.properties.get(S);I.light=A}return S}function _(y,E,A,v,S){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===On)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const U=t.update(y),V=y.material;if(Array.isArray(V)){const H=U.groups;for(let W=0,Z=H.length;W<Z;W++){const X=H[W],$=V[X.materialIndex];if($&&$.visible){const rt=w(y,$,v,S);y.onBeforeShadow(n,y,E,A,U,rt,X),n.renderBufferDirect(A,null,U,rt,y,X),y.onAfterShadow(n,y,E,A,U,rt,X)}}}else if(V.visible){const H=w(y,V,v,S);y.onBeforeShadow(n,y,E,A,U,H,null),n.renderBufferDirect(A,null,U,H,y,null),y.onAfterShadow(n,y,E,A,U,H,null)}}const I=y.children;for(let U=0,V=I.length;U<V;U++)_(I[U],E,A,v,S)}function R(y){y.target.removeEventListener("dispose",R);for(const A in h){const v=h[A],S=y.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const o_={[ka]:Va,[Wa]:qa,[Xa]:Za,[Ss]:Ya,[Va]:ka,[qa]:Wa,[Za]:Xa,[Ya]:Ss};function a_(n,t){function e(){let j=!1;const Rt=new he;let ft=null;const xt=new he(0,0,0,0);return{setMask:function(Ct){ft!==Ct&&!j&&(n.colorMask(Ct,Ct,Ct,Ct),ft=Ct)},setLocked:function(Ct){j=Ct},setClear:function(Ct,Ut,qt,Se,ke){ke===!0&&(Ct*=Se,Ut*=Se,qt*=Se),Rt.set(Ct,Ut,qt,Se),xt.equals(Rt)===!1&&(n.clearColor(Ct,Ut,qt,Se),xt.copy(Rt))},reset:function(){j=!1,ft=null,xt.set(-1,0,0,0)}}}function i(){let j=!1,Rt=!1,ft=null,xt=null,Ct=null;return{setReversed:function(Ut){if(Rt!==Ut){const qt=t.get("EXT_clip_control");Rt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Se=Ct;Ct=null,this.setClear(Se)}Rt=Ut},getReversed:function(){return Rt},setTest:function(Ut){Ut?G(n.DEPTH_TEST):D(n.DEPTH_TEST)},setMask:function(Ut){ft!==Ut&&!j&&(n.depthMask(Ut),ft=Ut)},setFunc:function(Ut){if(Rt&&(Ut=o_[Ut]),xt!==Ut){switch(Ut){case ka:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case Wa:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case Ya:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=Ut}},setLocked:function(Ut){j=Ut},setClear:function(Ut){Ct!==Ut&&(Rt&&(Ut=1-Ut),n.clearDepth(Ut),Ct=Ut)},reset:function(){j=!1,ft=null,xt=null,Ct=null,Rt=!1}}}function s(){let j=!1,Rt=null,ft=null,xt=null,Ct=null,Ut=null,qt=null,Se=null,ke=null;return{setTest:function(ae){j||(ae?G(n.STENCIL_TEST):D(n.STENCIL_TEST))},setMask:function(ae){Rt!==ae&&!j&&(n.stencilMask(ae),Rt=ae)},setFunc:function(ae,hn,Pn){(ft!==ae||xt!==hn||Ct!==Pn)&&(n.stencilFunc(ae,hn,Pn),ft=ae,xt=hn,Ct=Pn)},setOp:function(ae,hn,Pn){(Ut!==ae||qt!==hn||Se!==Pn)&&(n.stencilOp(ae,hn,Pn),Ut=ae,qt=hn,Se=Pn)},setLocked:function(ae){j=ae},setClear:function(ae){ke!==ae&&(n.clearStencil(ae),ke=ae)},reset:function(){j=!1,Rt=null,ft=null,xt=null,Ct=null,Ut=null,qt=null,Se=null,ke=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap;let u={},f={},p=new WeakMap,m=[],M=null,x=!1,g=null,d=null,b=null,w=null,_=null,R=null,y=null,E=new kt(0,0,0),A=0,v=!1,S=null,T=null,I=null,U=null,V=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=Z>=2);let $=null,rt={};const ot=n.getParameter(n.SCISSOR_BOX),st=n.getParameter(n.VIEWPORT),J=new he().fromArray(ot),C=new he().fromArray(st);function P(j,Rt,ft,xt){const Ct=new Uint8Array(4),Ut=n.createTexture();n.bindTexture(j,Ut),n.texParameteri(j,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(j,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<ft;qt++)j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?n.texImage3D(Rt,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(Rt+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return Ut}const z={};z[n.TEXTURE_2D]=P(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=P(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=P(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=P(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(n.DEPTH_TEST),o.setFunc(Ss),ut(!1),yt(Dc),G(n.CULL_FACE),N(ci);function G(j){u[j]!==!0&&(n.enable(j),u[j]=!0)}function D(j){u[j]!==!1&&(n.disable(j),u[j]=!1)}function B(j,Rt){return f[j]!==Rt?(n.bindFramebuffer(j,Rt),f[j]=Rt,j===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Rt),j===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Rt),!0):!1}function k(j,Rt){let ft=m,xt=!1;if(j){ft=p.get(Rt),ft===void 0&&(ft=[],p.set(Rt,ft));const Ct=j.textures;if(ft.length!==Ct.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let Ut=0,qt=Ct.length;Ut<qt;Ut++)ft[Ut]=n.COLOR_ATTACHMENT0+Ut;ft.length=Ct.length,xt=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,xt=!0);xt&&n.drawBuffers(ft)}function nt(j){return M!==j?(n.useProgram(j),M=j,!0):!1}const Y={[Ai]:n.FUNC_ADD,[ad]:n.FUNC_SUBTRACT,[ld]:n.FUNC_REVERSE_SUBTRACT};Y[cd]=n.MIN,Y[hd]=n.MAX;const K={[ud]:n.ZERO,[fd]:n.ONE,[dd]:n.SRC_COLOR,[Ga]:n.SRC_ALPHA,[xd]:n.SRC_ALPHA_SATURATE,[Md]:n.DST_COLOR,[md]:n.DST_ALPHA,[pd]:n.ONE_MINUS_SRC_COLOR,[Ha]:n.ONE_MINUS_SRC_ALPHA,[_d]:n.ONE_MINUS_DST_COLOR,[gd]:n.ONE_MINUS_DST_ALPHA,[vd]:n.CONSTANT_COLOR,[yd]:n.ONE_MINUS_CONSTANT_COLOR,[Sd]:n.CONSTANT_ALPHA,[bd]:n.ONE_MINUS_CONSTANT_ALPHA};function N(j,Rt,ft,xt,Ct,Ut,qt,Se,ke,ae){if(j===ci){x===!0&&(D(n.BLEND),x=!1);return}if(x===!1&&(G(n.BLEND),x=!0),j!==od){if(j!==g||ae!==v){if((d!==Ai||_!==Ai)&&(n.blendEquation(n.FUNC_ADD),d=Ai,_=Ai),ae)switch(j){case Oe:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFunc(n.ONE,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Oe:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}b=null,w=null,R=null,y=null,E.set(0,0,0),A=0,g=j,v=ae}return}Ct=Ct||Rt,Ut=Ut||ft,qt=qt||xt,(Rt!==d||Ct!==_)&&(n.blendEquationSeparate(Y[Rt],Y[Ct]),d=Rt,_=Ct),(ft!==b||xt!==w||Ut!==R||qt!==y)&&(n.blendFuncSeparate(K[ft],K[xt],K[Ut],K[qt]),b=ft,w=xt,R=Ut,y=qt),(Se.equals(E)===!1||ke!==A)&&(n.blendColor(Se.r,Se.g,Se.b,ke),E.copy(Se),A=ke),g=j,v=!1}function vt(j,Rt){j.side===ue?D(n.CULL_FACE):G(n.CULL_FACE);let ft=j.side===Pe;Rt&&(ft=!ft),ut(ft),j.blending===Oe&&j.transparent===!1?N(ci):N(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);const xt=j.stencilWrite;a.setTest(xt),xt&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),At(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):D(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(j){S!==j&&(j?n.frontFace(n.CW):n.frontFace(n.CCW),S=j)}function yt(j){j!==id?(G(n.CULL_FACE),j!==T&&(j===Dc?n.cullFace(n.BACK):j===sd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):D(n.CULL_FACE),T=j}function mt(j){j!==I&&(W&&n.lineWidth(j),I=j)}function At(j,Rt,ft){j?(G(n.POLYGON_OFFSET_FILL),(U!==Rt||V!==ft)&&(n.polygonOffset(Rt,ft),U=Rt,V=ft)):D(n.POLYGON_OFFSET_FILL)}function St(j){j?G(n.SCISSOR_TEST):D(n.SCISSOR_TEST)}function O(j){j===void 0&&(j=n.TEXTURE0+H-1),$!==j&&(n.activeTexture(j),$=j)}function L(j,Rt,ft){ft===void 0&&($===null?ft=n.TEXTURE0+H-1:ft=$);let xt=rt[ft];xt===void 0&&(xt={type:void 0,texture:void 0},rt[ft]=xt),(xt.type!==j||xt.texture!==Rt)&&($!==ft&&(n.activeTexture(ft),$=ft),n.bindTexture(j,Rt||z[j]),xt.type=j,xt.texture=Rt)}function it(){const j=rt[$];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ht(){try{n.compressedTexImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pt(){try{n.texSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Tt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function at(){try{n.texStorage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function gt(){try{n.texImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function bt(j){J.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),J.copy(j))}function _t(j){C.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),C.copy(j))}function It(j,Rt){let ft=h.get(Rt);ft===void 0&&(ft=new WeakMap,h.set(Rt,ft));let xt=ft.get(j);xt===void 0&&(xt=n.getUniformBlockIndex(Rt,j.name),ft.set(j,xt))}function zt(j,Rt){const xt=h.get(Rt).get(j);l.get(Rt)!==xt&&(n.uniformBlockBinding(Rt,xt,j.__bindingPointIndex),l.set(Rt,xt))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},$=null,rt={},f={},p=new WeakMap,m=[],M=null,x=!1,g=null,d=null,b=null,w=null,_=null,R=null,y=null,E=new kt(0,0,0),A=0,v=!1,S=null,T=null,I=null,U=null,V=null,J.set(0,0,n.canvas.width,n.canvas.height),C.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:D,bindFramebuffer:B,drawBuffers:k,useProgram:nt,setBlending:N,setMaterial:vt,setFlipSided:ut,setCullFace:yt,setLineWidth:mt,setPolygonOffset:At,setScissorTest:St,activeTexture:O,bindTexture:L,unbindTexture:it,compressedTexImage2D:ht,compressedTexImage3D:Mt,texImage2D:dt,texImage3D:gt,updateUBOMapping:It,uniformBlockBinding:zt,texStorage2D:at,texStorage3D:Q,texSubImage2D:pt,texSubImage3D:Dt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Ft,scissor:bt,viewport:_t,reset:Wt}}function Ph(n,t,e,i){const s=l_(i);switch(e){case Wu:return n*t;case Yu:return n*t;case qu:return n*t*2;case Zl:return n*t/s.components*s.byteLength;case Jl:return n*t/s.components*s.byteLength;case Zu:return n*t*2/s.components*s.byteLength;case Kl:return n*t*2/s.components*s.byteLength;case Xu:return n*t*3/s.components*s.byteLength;case gn:return n*t*4/s.components*s.byteLength;case $l:return n*t*4/s.components*s.byteLength;case Mo:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xo:case vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(n,16)*Math.max(t,8)/4;case Qa:case el:return Math.max(n,8)*Math.max(t,8)/2;case il:case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case yo:case vl:case yl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ju:case Sl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case bl:case wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l_(n){switch(n){case kn:case Hu:return{byteLength:1,components:1};case pr:case ku:case Ar:return{byteLength:2,components:1};case Yl:case ql:return{byteLength:2,components:4};case Ni:case Xl:case wn:return{byteLength:4,components:1};case Vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function c_(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,u=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,L){return m?new OffscreenCanvas(O,L):wo("canvas")}function x(O,L,it){let ht=1;const Mt=St(O);if((Mt.width>it||Mt.height>it)&&(ht=it/Math.max(Mt.width,Mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pt=Math.floor(ht*Mt.width),Dt=Math.floor(ht*Mt.height);f===void 0&&(f=M(pt,Dt));const Tt=L?M(pt,Dt):f;return Tt.width=pt,Tt.height=Dt,Tt.getContext("2d").drawImage(O,0,0,pt,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+pt+"x"+Dt+")."),Tt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),O;return O}function g(O){return O.generateMipmaps}function d(O){n.generateMipmap(O)}function b(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(O,L,it,ht,Mt=!1){if(O!==null){if(n[O]!==void 0)return n[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pt=L;if(L===n.RED&&(it===n.FLOAT&&(pt=n.R32F),it===n.HALF_FLOAT&&(pt=n.R16F),it===n.UNSIGNED_BYTE&&(pt=n.R8)),L===n.RED_INTEGER&&(it===n.UNSIGNED_BYTE&&(pt=n.R8UI),it===n.UNSIGNED_SHORT&&(pt=n.R16UI),it===n.UNSIGNED_INT&&(pt=n.R32UI),it===n.BYTE&&(pt=n.R8I),it===n.SHORT&&(pt=n.R16I),it===n.INT&&(pt=n.R32I)),L===n.RG&&(it===n.FLOAT&&(pt=n.RG32F),it===n.HALF_FLOAT&&(pt=n.RG16F),it===n.UNSIGNED_BYTE&&(pt=n.RG8)),L===n.RG_INTEGER&&(it===n.UNSIGNED_BYTE&&(pt=n.RG8UI),it===n.UNSIGNED_SHORT&&(pt=n.RG16UI),it===n.UNSIGNED_INT&&(pt=n.RG32UI),it===n.BYTE&&(pt=n.RG8I),it===n.SHORT&&(pt=n.RG16I),it===n.INT&&(pt=n.RG32I)),L===n.RGB_INTEGER&&(it===n.UNSIGNED_BYTE&&(pt=n.RGB8UI),it===n.UNSIGNED_SHORT&&(pt=n.RGB16UI),it===n.UNSIGNED_INT&&(pt=n.RGB32UI),it===n.BYTE&&(pt=n.RGB8I),it===n.SHORT&&(pt=n.RGB16I),it===n.INT&&(pt=n.RGB32I)),L===n.RGBA_INTEGER&&(it===n.UNSIGNED_BYTE&&(pt=n.RGBA8UI),it===n.UNSIGNED_SHORT&&(pt=n.RGBA16UI),it===n.UNSIGNED_INT&&(pt=n.RGBA32UI),it===n.BYTE&&(pt=n.RGBA8I),it===n.SHORT&&(pt=n.RGBA16I),it===n.INT&&(pt=n.RGBA32I)),L===n.RGB&&it===n.UNSIGNED_INT_5_9_9_9_REV&&(pt=n.RGB9_E5),L===n.RGBA){const Dt=Mt?Uo:ne.getTransfer(ht);it===n.FLOAT&&(pt=n.RGBA32F),it===n.HALF_FLOAT&&(pt=n.RGBA16F),it===n.UNSIGNED_BYTE&&(pt=Dt===ce?n.SRGB8_ALPHA8:n.RGBA8),it===n.UNSIGNED_SHORT_4_4_4_4&&(pt=n.RGBA4),it===n.UNSIGNED_SHORT_5_5_5_1&&(pt=n.RGB5_A1)}return(pt===n.R16F||pt===n.R32F||pt===n.RG16F||pt===n.RG32F||pt===n.RGBA16F||pt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function _(O,L){let it;return O?L===null||L===Ni||L===Es?it=n.DEPTH24_STENCIL8:L===wn?it=n.DEPTH32F_STENCIL8:L===pr&&(it=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Ni||L===Es?it=n.DEPTH_COMPONENT24:L===wn?it=n.DEPTH_COMPONENT32F:L===pr&&(it=n.DEPTH_COMPONENT16),it}function R(O,L){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==sn&&O.minFilter!==bn?Math.log2(Math.max(L.width,L.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?L.mipmaps.length:1}function y(O){const L=O.target;L.removeEventListener("dispose",y),A(L),L.isVideoTexture&&u.delete(L)}function E(O){const L=O.target;L.removeEventListener("dispose",E),S(L)}function A(O){const L=i.get(O);if(L.__webglInit===void 0)return;const it=O.source,ht=p.get(it);if(ht){const Mt=ht[L.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&v(O),Object.keys(ht).length===0&&p.delete(it)}i.remove(O)}function v(O){const L=i.get(O);n.deleteTexture(L.__webglTexture);const it=O.source,ht=p.get(it);delete ht[L.__cacheKey],o.memory.textures--}function S(O){const L=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(L.__webglFramebuffer[ht]))for(let Mt=0;Mt<L.__webglFramebuffer[ht].length;Mt++)n.deleteFramebuffer(L.__webglFramebuffer[ht][Mt]);else n.deleteFramebuffer(L.__webglFramebuffer[ht]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[ht])}else{if(Array.isArray(L.__webglFramebuffer))for(let ht=0;ht<L.__webglFramebuffer.length;ht++)n.deleteFramebuffer(L.__webglFramebuffer[ht]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let ht=0;ht<L.__webglColorRenderbuffer.length;ht++)L.__webglColorRenderbuffer[ht]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[ht]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const it=O.textures;for(let ht=0,Mt=it.length;ht<Mt;ht++){const pt=i.get(it[ht]);pt.__webglTexture&&(n.deleteTexture(pt.__webglTexture),o.memory.textures--),i.remove(it[ht])}i.remove(O)}let T=0;function I(){T=0}function U(){const O=T;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),T+=1,O}function V(O){const L=[];return L.push(O.wrapS),L.push(O.wrapT),L.push(O.wrapR||0),L.push(O.magFilter),L.push(O.minFilter),L.push(O.anisotropy),L.push(O.internalFormat),L.push(O.format),L.push(O.type),L.push(O.generateMipmaps),L.push(O.premultiplyAlpha),L.push(O.flipY),L.push(O.unpackAlignment),L.push(O.colorSpace),L.join()}function H(O,L){const it=i.get(O);if(O.isVideoTexture&&mt(O),O.isRenderTargetTexture===!1&&O.version>0&&it.__version!==O.version){const ht=O.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(it,O,L);return}}e.bindTexture(n.TEXTURE_2D,it.__webglTexture,n.TEXTURE0+L)}function W(O,L){const it=i.get(O);if(O.version>0&&it.__version!==O.version){C(it,O,L);return}e.bindTexture(n.TEXTURE_2D_ARRAY,it.__webglTexture,n.TEXTURE0+L)}function Z(O,L){const it=i.get(O);if(O.version>0&&it.__version!==O.version){C(it,O,L);return}e.bindTexture(n.TEXTURE_3D,it.__webglTexture,n.TEXTURE0+L)}function X(O,L){const it=i.get(O);if(O.version>0&&it.__version!==O.version){P(it,O,L);return}e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture,n.TEXTURE0+L)}const $={[$a]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},rt={[sn]:n.NEAREST,[Dd]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[ko]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},ot={[zd]:n.NEVER,[Vd]:n.ALWAYS,[Od]:n.LESS,[$u]:n.LEQUAL,[Bd]:n.EQUAL,[kd]:n.GEQUAL,[Gd]:n.GREATER,[Hd]:n.NOTEQUAL};function st(O,L){if(L.type===wn&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===bn||L.magFilter===ko||L.magFilter===Ir||L.magFilter===Ii||L.minFilter===bn||L.minFilter===ko||L.minFilter===Ir||L.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,$[L.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,$[L.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,$[L.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,rt[L.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,rt[L.minFilter]),L.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,ot[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===sn||L.minFilter!==Ir&&L.minFilter!==Ii||L.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||i.get(L).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");n.texParameterf(O,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy}}}function J(O,L){let it=!1;O.__webglInit===void 0&&(O.__webglInit=!0,L.addEventListener("dispose",y));const ht=L.source;let Mt=p.get(ht);Mt===void 0&&(Mt={},p.set(ht,Mt));const pt=V(L);if(pt!==O.__cacheKey){Mt[pt]===void 0&&(Mt[pt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,it=!0),Mt[pt].usedTimes++;const Dt=Mt[O.__cacheKey];Dt!==void 0&&(Mt[O.__cacheKey].usedTimes--,Dt.usedTimes===0&&v(L)),O.__cacheKey=pt,O.__webglTexture=Mt[pt].texture}return it}function C(O,L,it){let ht=n.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ht=n.TEXTURE_2D_ARRAY),L.isData3DTexture&&(ht=n.TEXTURE_3D);const Mt=J(O,L),pt=L.source;e.bindTexture(ht,O.__webglTexture,n.TEXTURE0+it);const Dt=i.get(pt);if(pt.version!==Dt.__version||Mt===!0){e.activeTexture(n.TEXTURE0+it);const Tt=ne.getPrimaries(ne.workingColorSpace),Ft=L.colorSpace===si?null:ne.getPrimaries(L.colorSpace),at=L.colorSpace===si||Tt===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Q=x(L.image,!1,s.maxTextureSize);Q=At(L,Q);const dt=r.convert(L.format,L.colorSpace),gt=r.convert(L.type);let bt=w(L.internalFormat,dt,gt,L.colorSpace,L.isVideoTexture);st(ht,L);let _t;const It=L.mipmaps,zt=L.isVideoTexture!==!0,Wt=Dt.__version===void 0||Mt===!0,j=pt.dataReady,Rt=R(L,Q);if(L.isDepthTexture)bt=_(L.format===As,L.type),Wt&&(zt?e.texStorage2D(n.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,bt,Q.width,Q.height,0,dt,gt,null));else if(L.isDataTexture)if(It.length>0){zt&&Wt&&e.texStorage2D(n.TEXTURE_2D,Rt,bt,It[0].width,It[0].height);for(let ft=0,xt=It.length;ft<xt;ft++)_t=It[ft],zt?j&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,_t.width,_t.height,dt,gt,_t.data):e.texImage2D(n.TEXTURE_2D,ft,bt,_t.width,_t.height,0,dt,gt,_t.data);L.generateMipmaps=!1}else zt?(Wt&&e.texStorage2D(n.TEXTURE_2D,Rt,bt,Q.width,Q.height),j&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,gt,Q.data)):e.texImage2D(n.TEXTURE_2D,0,bt,Q.width,Q.height,0,dt,gt,Q.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){zt&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,bt,It[0].width,It[0].height,Q.depth);for(let ft=0,xt=It.length;ft<xt;ft++)if(_t=It[ft],L.format!==gn)if(dt!==null)if(zt){if(j)if(L.layerUpdates.size>0){const Ct=Ph(_t.width,_t.height,L.format,L.type);for(const Ut of L.layerUpdates){const qt=_t.data.subarray(Ut*Ct/_t.data.BYTES_PER_ELEMENT,(Ut+1)*Ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,Ut,_t.width,_t.height,1,dt,qt)}L.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,Q.depth,dt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,bt,_t.width,_t.height,Q.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?j&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,Q.depth,dt,gt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,bt,_t.width,_t.height,Q.depth,0,dt,gt,_t.data)}else{zt&&Wt&&e.texStorage2D(n.TEXTURE_2D,Rt,bt,It[0].width,It[0].height);for(let ft=0,xt=It.length;ft<xt;ft++)_t=It[ft],L.format!==gn?dt!==null?zt?j&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,_t.width,_t.height,dt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,bt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?j&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,_t.width,_t.height,dt,gt,_t.data):e.texImage2D(n.TEXTURE_2D,ft,bt,_t.width,_t.height,0,dt,gt,_t.data)}else if(L.isDataArrayTexture)if(zt){if(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,bt,Q.width,Q.height,Q.depth),j)if(L.layerUpdates.size>0){const ft=Ph(Q.width,Q.height,L.format,L.type);for(const xt of L.layerUpdates){const Ct=Q.data.subarray(xt*ft/Q.data.BYTES_PER_ELEMENT,(xt+1)*ft/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,Q.width,Q.height,1,dt,gt,Ct)}L.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,gt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,dt,gt,Q.data);else if(L.isData3DTexture)zt?(Wt&&e.texStorage3D(n.TEXTURE_3D,Rt,bt,Q.width,Q.height,Q.depth),j&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,gt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,dt,gt,Q.data);else if(L.isFramebufferTexture){if(Wt)if(zt)e.texStorage2D(n.TEXTURE_2D,Rt,bt,Q.width,Q.height);else{let ft=Q.width,xt=Q.height;for(let Ct=0;Ct<Rt;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,bt,ft,xt,0,dt,gt,null),ft>>=1,xt>>=1}}else if(It.length>0){if(zt&&Wt){const ft=St(It[0]);e.texStorage2D(n.TEXTURE_2D,Rt,bt,ft.width,ft.height)}for(let ft=0,xt=It.length;ft<xt;ft++)_t=It[ft],zt?j&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,dt,gt,_t):e.texImage2D(n.TEXTURE_2D,ft,bt,dt,gt,_t);L.generateMipmaps=!1}else if(zt){if(Wt){const ft=St(Q);e.texStorage2D(n.TEXTURE_2D,Rt,bt,ft.width,ft.height)}j&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,gt,Q)}else e.texImage2D(n.TEXTURE_2D,0,bt,dt,gt,Q);g(L)&&d(ht),Dt.__version=pt.version,L.onUpdate&&L.onUpdate(L)}O.__version=L.version}function P(O,L,it){if(L.image.length!==6)return;const ht=J(O,L),Mt=L.source;e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+it);const pt=i.get(Mt);if(Mt.version!==pt.__version||ht===!0){e.activeTexture(n.TEXTURE0+it);const Dt=ne.getPrimaries(ne.workingColorSpace),Tt=L.colorSpace===si?null:ne.getPrimaries(L.colorSpace),Ft=L.colorSpace===si||Dt===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const at=L.isCompressedTexture||L.image[0].isCompressedTexture,Q=L.image[0]&&L.image[0].isDataTexture,dt=[];for(let xt=0;xt<6;xt++)!at&&!Q?dt[xt]=x(L.image[xt],!0,s.maxCubemapSize):dt[xt]=Q?L.image[xt].image:L.image[xt],dt[xt]=At(L,dt[xt]);const gt=dt[0],bt=r.convert(L.format,L.colorSpace),_t=r.convert(L.type),It=w(L.internalFormat,bt,_t,L.colorSpace),zt=L.isVideoTexture!==!0,Wt=pt.__version===void 0||ht===!0,j=Mt.dataReady;let Rt=R(L,gt);st(n.TEXTURE_CUBE_MAP,L);let ft;if(at){zt&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,It,gt.width,gt.height);for(let xt=0;xt<6;xt++){ft=dt[xt].mipmaps;for(let Ct=0;Ct<ft.length;Ct++){const Ut=ft[Ct];L.format!==gn?bt!==null?zt?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,Ut.width,Ut.height,bt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,It,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,Ut.width,Ut.height,bt,_t,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,It,Ut.width,Ut.height,0,bt,_t,Ut.data)}}}else{if(ft=L.mipmaps,zt&&Wt){ft.length>0&&Rt++;const xt=St(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,It,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Q){zt?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,dt[xt].width,dt[xt].height,bt,_t,dt[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,It,dt[xt].width,dt[xt].height,0,bt,_t,dt[xt].data);for(let Ct=0;Ct<ft.length;Ct++){const qt=ft[Ct].image[xt].image;zt?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,qt.width,qt.height,bt,_t,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,It,qt.width,qt.height,0,bt,_t,qt.data)}}else{zt?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,bt,_t,dt[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,It,bt,_t,dt[xt]);for(let Ct=0;Ct<ft.length;Ct++){const Ut=ft[Ct];zt?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,bt,_t,Ut.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,It,bt,_t,Ut.image[xt])}}}g(L)&&d(n.TEXTURE_CUBE_MAP),pt.__version=Mt.version,L.onUpdate&&L.onUpdate(L)}O.__version=L.version}function z(O,L,it,ht,Mt,pt){const Dt=r.convert(it.format,it.colorSpace),Tt=r.convert(it.type),Ft=w(it.internalFormat,Dt,Tt,it.colorSpace),at=i.get(L),Q=i.get(it);if(Q.__renderTarget=L,!at.__hasExternalTextures){const dt=Math.max(1,L.width>>pt),gt=Math.max(1,L.height>>pt);Mt===n.TEXTURE_3D||Mt===n.TEXTURE_2D_ARRAY?e.texImage3D(Mt,pt,Ft,dt,gt,L.depth,0,Dt,Tt,null):e.texImage2D(Mt,pt,Ft,dt,gt,0,Dt,Tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,O),yt(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,Mt,Q.__webglTexture,0,ut(L)):(Mt===n.TEXTURE_2D||Mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ht,Mt,Q.__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function G(O,L,it){if(n.bindRenderbuffer(n.RENDERBUFFER,O),L.depthBuffer){const ht=L.depthTexture,Mt=ht&&ht.isDepthTexture?ht.type:null,pt=_(L.stencilBuffer,Mt),Dt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=ut(L);yt(L)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,pt,L.width,L.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,pt,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,pt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,O)}else{const ht=L.textures;for(let Mt=0;Mt<ht.length;Mt++){const pt=ht[Mt],Dt=r.convert(pt.format,pt.colorSpace),Tt=r.convert(pt.type),Ft=w(pt.internalFormat,Dt,Tt,pt.colorSpace),at=ut(L);it&&yt(L)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,Ft,L.width,L.height):yt(L)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,Ft,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,Ft,L.width,L.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function D(O,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,O),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=i.get(L.depthTexture);ht.__renderTarget=L,(!ht.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),H(L.depthTexture,0);const Mt=ht.__webglTexture,pt=ut(L);if(L.depthTexture.format===xs)yt(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Mt,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Mt,0);else if(L.depthTexture.format===As)yt(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Mt,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function B(O){const L=i.get(O),it=O.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==O.depthTexture){const ht=O.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),ht){const Mt=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,ht.removeEventListener("dispose",Mt)};ht.addEventListener("dispose",Mt),L.__depthDisposeCallback=Mt}L.__boundDepthTexture=ht}if(O.depthTexture&&!L.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");D(L.__webglFramebuffer,O)}else if(it){L.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer[ht]),L.__webglDepthbuffer[ht]===void 0)L.__webglDepthbuffer[ht]=n.createRenderbuffer(),G(L.__webglDepthbuffer[ht],O,!1);else{const Mt=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=L.__webglDepthbuffer[ht];n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,pt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=n.createRenderbuffer(),G(L.__webglDepthbuffer,O,!1);else{const ht=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=L.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,Mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function k(O,L,it){const ht=i.get(O);L!==void 0&&z(ht.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),it!==void 0&&B(O)}function nt(O){const L=O.texture,it=i.get(O),ht=i.get(L);O.addEventListener("dispose",E);const Mt=O.textures,pt=O.isWebGLCubeRenderTarget===!0,Dt=Mt.length>1;if(Dt||(ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture()),ht.__version=L.version,o.memory.textures++),pt){it.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(L.mipmaps&&L.mipmaps.length>0){it.__webglFramebuffer[Tt]=[];for(let Ft=0;Ft<L.mipmaps.length;Ft++)it.__webglFramebuffer[Tt][Ft]=n.createFramebuffer()}else it.__webglFramebuffer[Tt]=n.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){it.__webglFramebuffer=[];for(let Tt=0;Tt<L.mipmaps.length;Tt++)it.__webglFramebuffer[Tt]=n.createFramebuffer()}else it.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let Tt=0,Ft=Mt.length;Tt<Ft;Tt++){const at=i.get(Mt[Tt]);at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&yt(O)===!1){it.__webglMultisampledFramebuffer=n.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Tt=0;Tt<Mt.length;Tt++){const Ft=Mt[Tt];it.__webglColorRenderbuffer[Tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,it.__webglColorRenderbuffer[Tt]);const at=r.convert(Ft.format,Ft.colorSpace),Q=r.convert(Ft.type),dt=w(Ft.internalFormat,at,Q,Ft.colorSpace,O.isXRRenderTarget===!0),gt=ut(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,dt,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,it.__webglColorRenderbuffer[Tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(it.__webglDepthRenderbuffer=n.createRenderbuffer(),G(it.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pt){e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),st(n.TEXTURE_CUBE_MAP,L);for(let Tt=0;Tt<6;Tt++)if(L.mipmaps&&L.mipmaps.length>0)for(let Ft=0;Ft<L.mipmaps.length;Ft++)z(it.__webglFramebuffer[Tt][Ft],O,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ft);else z(it.__webglFramebuffer[Tt],O,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);g(L)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let Tt=0,Ft=Mt.length;Tt<Ft;Tt++){const at=Mt[Tt],Q=i.get(at);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),st(n.TEXTURE_2D,at),z(it.__webglFramebuffer,O,at,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,0),g(at)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let Tt=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Tt=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Tt,ht.__webglTexture),st(Tt,L),L.mipmaps&&L.mipmaps.length>0)for(let Ft=0;Ft<L.mipmaps.length;Ft++)z(it.__webglFramebuffer[Ft],O,L,n.COLOR_ATTACHMENT0,Tt,Ft);else z(it.__webglFramebuffer,O,L,n.COLOR_ATTACHMENT0,Tt,0);g(L)&&d(Tt),e.unbindTexture()}O.depthBuffer&&B(O)}function Y(O){const L=O.textures;for(let it=0,ht=L.length;it<ht;it++){const Mt=L[it];if(g(Mt)){const pt=b(O),Dt=i.get(Mt).__webglTexture;e.bindTexture(pt,Dt),d(pt),e.unbindTexture()}}}const K=[],N=[];function vt(O){if(O.samples>0){if(yt(O)===!1){const L=O.textures,it=O.width,ht=O.height;let Mt=n.COLOR_BUFFER_BIT;const pt=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(O),Tt=L.length>1;if(Tt)for(let Ft=0;Ft<L.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Ft=0;Ft<L.length;Ft++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Mt|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Mt|=n.STENCIL_BUFFER_BIT)),Tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ft]);const at=i.get(L[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,at,0)}n.blitFramebuffer(0,0,it,ht,0,0,it,ht,Mt,n.NEAREST),l===!0&&(K.length=0,N.length=0,K.push(n.COLOR_ATTACHMENT0+Ft),O.depthBuffer&&O.resolveDepthBuffer===!1&&(K.push(pt),N.push(pt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Tt)for(let Ft=0;Ft<L.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ft]);const at=i.get(L[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,at,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){const L=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[L])}}}function ut(O){return Math.min(s.maxSamples,O.samples)}function yt(O){const L=i.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function mt(O){const L=o.render.frame;u.get(O)!==L&&(u.set(O,L),O.update())}function At(O,L){const it=O.colorSpace,ht=O.format,Mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||it!==Ls&&it!==si&&(ne.getTransfer(it)===ce?(ht!==gn||Mt!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),L}function St(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=k,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=z,this.useMultisampledRTT=yt}function h_(n,t){function e(i,s=si){let r;const o=ne.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===Yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hu)return n.BYTE;if(i===ku)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===Xl)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Ar)return n.HALF_FLOAT;if(i===Wu)return n.ALPHA;if(i===Xu)return n.RGB;if(i===gn)return n.RGBA;if(i===Yu)return n.LUMINANCE;if(i===qu)return n.LUMINANCE_ALPHA;if(i===xs)return n.DEPTH_COMPONENT;if(i===As)return n.DEPTH_STENCIL;if(i===Zl)return n.RED;if(i===Jl)return n.RED_INTEGER;if(i===Zu)return n.RG;if(i===Kl)return n.RG_INTEGER;if(i===$l)return n.RGBA_INTEGER;if(i===Mo||i===_o||i===xo||i===vo)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qa||i===tl||i===el||i===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===il||i===sl)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===fl||i===dl||i===pl||i===ml||i===gl||i===Ml||i===_l||i===xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ol)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ml)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ml)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_l)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yo||i===vl||i===yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===yo)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ju||i===Sl||i===bl||i===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class u_ extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fe extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f_={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i),d=this._getHandJoint(h,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),m=.02,M=.005;h.inputState.pinching&&p>m+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=m-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Vn({vertexShader:d_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g_ extends Is{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,f=null,p=null,m=null,M=null;const x=new m_,g=e.getContextAttributes();let d=null,b=null;const w=[],_=[],R=new Et;let y=null;const E=new nn;E.viewport=new he;const A=new nn;A.viewport=new he;const v=[E,A],S=new u_;let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let P=w[C];return P===void 0&&(P=new ma,w[C]=P),P.getTargetRaySpace()},this.getControllerGrip=function(C){let P=w[C];return P===void 0&&(P=new ma,w[C]=P),P.getGripSpace()},this.getHand=function(C){let P=w[C];return P===void 0&&(P=new ma,w[C]=P),P.getHandSpace()};function U(C){const P=_.indexOf(C.inputSource);if(P===-1)return;const z=w[P];z!==void 0&&(z.update(C.inputSource,C.frame,h||o),z.dispatchEvent({type:C.type,data:C.inputSource}))}function V(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",H);for(let C=0;C<w.length;C++){const P=_[C];P!==null&&(_[C]=null,w[C].disconnect(P))}T=null,I=null,x.reset(),t.setRenderTarget(d),m=null,p=null,f=null,s=null,b=null,J.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(C){h=C},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",V),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const P={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,P),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Fi(m.framebufferWidth,m.framebufferHeight,{format:gn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let P=null,z=null,G=null;g.depth&&(G=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,P=g.stencil?As:xs,z=g.stencil?Es:Ni);const D={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(D),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Fi(p.textureWidth,p.textureHeight,{format:gn,type:kn,depthTexture:new hf(p.textureWidth,p.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),J.setContext(s),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(C){for(let P=0;P<C.removed.length;P++){const z=C.removed[P],G=_.indexOf(z);G>=0&&(_[G]=null,w[G].disconnect(z))}for(let P=0;P<C.added.length;P++){const z=C.added[P];let G=_.indexOf(z);if(G===-1){for(let B=0;B<w.length;B++)if(B>=_.length){_.push(z),G=B;break}else if(_[B]===null){_[B]=z,G=B;break}if(G===-1)break}const D=w[G];D&&D.connect(z)}}const W=new q,Z=new q;function X(C,P,z){W.setFromMatrixPosition(P.matrixWorld),Z.setFromMatrixPosition(z.matrixWorld);const G=W.distanceTo(Z),D=P.projectionMatrix.elements,B=z.projectionMatrix.elements,k=D[14]/(D[10]-1),nt=D[14]/(D[10]+1),Y=(D[9]+1)/D[5],K=(D[9]-1)/D[5],N=(D[8]-1)/D[0],vt=(B[8]+1)/B[0],ut=k*N,yt=k*vt,mt=G/(-N+vt),At=mt*-N;if(P.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(At),C.translateZ(mt),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),D[10]===-1)C.projectionMatrix.copy(P.projectionMatrix),C.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{const St=k+mt,O=nt+mt,L=ut-At,it=yt+(G-At),ht=Y*nt/O*St,Mt=K*nt/O*St;C.projectionMatrix.makePerspective(L,it,ht,Mt,St,O),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function $(C,P){P===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(P.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;let P=C.near,z=C.far;x.texture!==null&&(x.depthNear>0&&(P=x.depthNear),x.depthFar>0&&(z=x.depthFar)),S.near=A.near=E.near=P,S.far=A.far=E.far=z,(T!==S.near||I!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,I=S.far),E.layers.mask=C.layers.mask|2,A.layers.mask=C.layers.mask|4,S.layers.mask=E.layers.mask|A.layers.mask;const G=C.parent,D=S.cameras;$(S,G);for(let B=0;B<D.length;B++)$(D[B],G);D.length===2?X(S,E,A):S.projectionMatrix.copy(E.projectionMatrix),rt(C,S,G)};function rt(C,P,z){z===null?C.matrix.copy(P.matrixWorld):(C.matrix.copy(z.matrixWorld),C.matrix.invert(),C.matrix.multiply(P.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(P.projectionMatrix),C.projectionMatrixInverse.copy(P.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=mr*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(C){l=C,p!==null&&(p.fixedFoveation=C),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=C)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ot=null;function st(C,P){if(u=P.getViewerPose(h||o),M=P,u!==null){const z=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let G=!1;z.length!==S.cameras.length&&(S.cameras.length=0,G=!0);for(let B=0;B<z.length;B++){const k=z[B];let nt=null;if(m!==null)nt=m.getViewport(k);else{const K=f.getViewSubImage(p,k);nt=K.viewport,B===0&&(t.setRenderTargetTextures(b,K.colorTexture,p.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(b))}let Y=v[B];Y===void 0&&(Y=new nn,Y.layers.enable(B),Y.viewport=new he,v[B]=Y),Y.matrix.fromArray(k.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(k.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(nt.x,nt.y,nt.width,nt.height),B===0&&(S.matrix.copy(Y.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),G===!0&&S.cameras.push(Y)}const D=s.enabledFeatures;if(D&&D.includes("depth-sensing")){const B=f.getDepthInformation(z[0]);B&&B.isValid&&B.texture&&x.init(t,B,s.renderState)}}for(let z=0;z<w.length;z++){const G=_[z],D=w[z];G!==null&&D!==void 0&&D.update(G,P,h||o)}ot&&ot(C,P),P.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:P}),M=null}const J=new cf;J.setAnimationLoop(st),this.setAnimationLoop=function(C){ot=C},this.dispose=function(){}}}const vi=new En,M_=new le;function __(n,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,of(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,b,w,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d)):d.isMeshStandardMaterial?(r(g,d),p(g,d),d.isMeshPhysicalMaterial&&m(g,d,_)):d.isMeshMatcapMaterial?(r(g,d),M(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,b,w):d.isSpriteMaterial?h(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Pe&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Pe&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const b=t.get(d),w=b.envMap,_=b.envMapRotation;w&&(g.envMap.value=w,vi.copy(_),vi.x*=-1,vi.y*=-1,vi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),g.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(vi)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,b,w){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*b,g.scale.value=w*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,b){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function M(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){const b=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function x_(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const _=w.program;i.uniformBlockBinding(b,_)}function h(b,w){let _=s[b.id];_===void 0&&(M(b),_=u(b),s[b.id]=_,b.addEventListener("dispose",g));const R=w.program;i.updateUBOMapping(b,R);const y=t.render.frame;r[b.id]!==y&&(p(b),r[b.id]=y)}function u(b){const w=f();b.__bindingPointIndex=w;const _=n.createBuffer(),R=b.__size,y=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,_),_}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const w=s[b.id],_=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let y=0,E=_.length;y<E;y++){const A=Array.isArray(_[y])?_[y]:[_[y]];for(let v=0,S=A.length;v<S;v++){const T=A[v];if(m(T,y,v,R)===!0){const I=T.__offset,U=Array.isArray(T.value)?T.value:[T.value];let V=0;for(let H=0;H<U.length;H++){const W=U[H],Z=x(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,I+V,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,w,_,R){const y=b.value,E=w+"_"+_;if(R[E]===void 0)return typeof y=="number"||typeof y=="boolean"?R[E]=y:R[E]=y.clone(),!0;{const A=R[E];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return R[E]=y,!0}else if(A.equals(y)===!1)return A.copy(y),!0}return!1}function M(b){const w=b.uniforms;let _=0;const R=16;for(let E=0,A=w.length;E<A;E++){const v=Array.isArray(w[E])?w[E]:[w[E]];for(let S=0,T=v.length;S<T;S++){const I=v[S],U=Array.isArray(I.value)?I.value:[I.value];for(let V=0,H=U.length;V<H;V++){const W=U[V],Z=x(W),X=_%R,$=X%Z.boundary,rt=X+$;_+=$,rt!==0&&R-rt<Z.storage&&(_+=R-rt),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=Z.storage}}}const y=_%R;return y>0&&(_+=R-y),b.__size=_,b.__cache={},this}function x(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function g(b){const w=b.target;w.removeEventListener("dispose",g);const _=o.indexOf(w.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:h,dispose:d}}class v_{constructor(t={}){const{canvas:e=lp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const M=new Uint32Array(4),x=new Int32Array(4);let g=null,d=null;const b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=hi,this.toneMappingExposure=1;const _=this;let R=!1,y=0,E=0,A=null,v=-1,S=null;const T=new he,I=new he;let U=null;const V=new kt(0);let H=0,W=e.width,Z=e.height,X=1,$=null,rt=null;const ot=new he(0,0,W,Z),st=new he(0,0,W,Z);let J=!1;const C=new tc;let P=!1,z=!1;const G=new le,D=new le,B=new q,k=new he,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function K(){return A===null?X:1}let N=i;function vt(F,tt){return e.getContext(F,tt)}try{const F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wl}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),N===null){const tt="webgl2";if(N=vt(tt,F),N===null)throw vt(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let ut,yt,mt,At,St,O,L,it,ht,Mt,pt,Dt,Tt,Ft,at,Q,dt,gt,bt,_t,It,zt,Wt,j;function Rt(){ut=new Eg(N),ut.init(),zt=new h_(N,ut),yt=new xg(N,ut,t,zt),mt=new a_(N,ut),yt.reverseDepthBuffer&&p&&mt.buffers.depth.setReversed(!0),At=new Rg(N),St=new YM,O=new c_(N,ut,mt,St,yt,zt,At),L=new yg(_),it=new wg(_),ht=new Np(N),Wt=new Mg(N,ht),Mt=new Ag(N,ht,At,Wt),pt=new Pg(N,Mt,ht,At),bt=new Cg(N,yt,O),Q=new vg(St),Dt=new XM(_,L,it,ut,yt,Wt,Q),Tt=new __(_,St),Ft=new ZM,at=new t_(ut),gt=new gg(_,L,it,mt,pt,m,l),dt=new r_(_,pt,yt),j=new x_(N,At,yt,mt),_t=new _g(N,ut,At),It=new Tg(N,ut,At),At.programs=Dt.programs,_.capabilities=yt,_.extensions=ut,_.properties=St,_.renderLists=Ft,_.shadowMap=dt,_.state=mt,_.info=At}Rt();const ft=new g_(_,N);this.xr=ft,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const F=ut.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=ut.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(F){F!==void 0&&(X=F,this.setSize(W,Z,!1))},this.getSize=function(F){return F.set(W,Z)},this.setSize=function(F,tt,lt=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=F,Z=tt,e.width=Math.floor(F*X),e.height=Math.floor(tt*X),lt===!0&&(e.style.width=F+"px",e.style.height=tt+"px"),this.setViewport(0,0,F,tt)},this.getDrawingBufferSize=function(F){return F.set(W*X,Z*X).floor()},this.setDrawingBufferSize=function(F,tt,lt){W=F,Z=tt,X=lt,e.width=Math.floor(F*lt),e.height=Math.floor(tt*lt),this.setViewport(0,0,F,tt)},this.getCurrentViewport=function(F){return F.copy(T)},this.getViewport=function(F){return F.copy(ot)},this.setViewport=function(F,tt,lt,ct){F.isVector4?ot.set(F.x,F.y,F.z,F.w):ot.set(F,tt,lt,ct),mt.viewport(T.copy(ot).multiplyScalar(X).round())},this.getScissor=function(F){return F.copy(st)},this.setScissor=function(F,tt,lt,ct){F.isVector4?st.set(F.x,F.y,F.z,F.w):st.set(F,tt,lt,ct),mt.scissor(I.copy(st).multiplyScalar(X).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(F){mt.setScissorTest(J=F)},this.setOpaqueSort=function(F){$=F},this.setTransparentSort=function(F){rt=F},this.getClearColor=function(F){return F.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(F=!0,tt=!0,lt=!0){let ct=0;if(F){let et=!1;if(A!==null){const wt=A.texture.format;et=wt===$l||wt===Kl||wt===Jl}if(et){const wt=A.texture.type,Nt=wt===kn||wt===Ni||wt===pr||wt===Es||wt===Yl||wt===ql,Ot=gt.getClearColor(),Bt=gt.getClearAlpha(),Xt=Ot.r,Zt=Ot.g,Gt=Ot.b;Nt?(M[0]=Xt,M[1]=Zt,M[2]=Gt,M[3]=Bt,N.clearBufferuiv(N.COLOR,0,M)):(x[0]=Xt,x[1]=Zt,x[2]=Gt,x[3]=Bt,N.clearBufferiv(N.COLOR,0,x))}else ct|=N.COLOR_BUFFER_BIT}tt&&(ct|=N.DEPTH_BUFFER_BIT),lt&&(ct|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Ft.dispose(),at.dispose(),St.dispose(),L.dispose(),it.dispose(),pt.dispose(),Wt.dispose(),j.dispose(),Dt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ec),ft.removeEventListener("sessionend",Ac),pi.stop()};function xt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const F=At.autoReset,tt=dt.enabled,lt=dt.autoUpdate,ct=dt.needsUpdate,et=dt.type;Rt(),At.autoReset=F,dt.enabled=tt,dt.autoUpdate=lt,dt.needsUpdate=ct,dt.type=et}function Ut(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function qt(F){const tt=F.target;tt.removeEventListener("dispose",qt),Se(tt)}function Se(F){ke(F),St.remove(F)}function ke(F){const tt=St.get(F).programs;tt!==void 0&&(tt.forEach(function(lt){Dt.releaseProgram(lt)}),F.isShaderMaterial&&Dt.releaseShaderCache(F))}this.renderBufferDirect=function(F,tt,lt,ct,et,wt){tt===null&&(tt=nt);const Nt=et.isMesh&&et.matrixWorld.determinant()<0,Ot=td(F,tt,lt,ct,et);mt.setMaterial(ct,Nt);let Bt=lt.index,Xt=1;if(ct.wireframe===!0){if(Bt=Mt.getWireframeAttribute(lt),Bt===void 0)return;Xt=2}const Zt=lt.drawRange,Gt=lt.attributes.position;let ie=Zt.start*Xt,de=(Zt.start+Zt.count)*Xt;wt!==null&&(ie=Math.max(ie,wt.start*Xt),de=Math.min(de,(wt.start+wt.count)*Xt)),Bt!==null?(ie=Math.max(ie,0),de=Math.min(de,Bt.count)):Gt!=null&&(ie=Math.max(ie,0),de=Math.min(de,Gt.count));const me=de-ie;if(me<0||me===1/0)return;Wt.setup(et,ct,Ot,lt,Bt);let $e,se=_t;if(Bt!==null&&($e=ht.get(Bt),se=It,se.setIndex($e)),et.isMesh)ct.wireframe===!0?(mt.setLineWidth(ct.wireframeLinewidth*K()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(et.isLine){let Ht=ct.linewidth;Ht===void 0&&(Ht=1),mt.setLineWidth(Ht*K()),et.isLineSegments?se.setMode(N.LINES):et.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else et.isPoints?se.setMode(N.POINTS):et.isSprite&&se.setMode(N.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)se.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))se.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Ht=et._multiDrawStarts,Ln=et._multiDrawCounts,re=et._multiDrawCount,un=Bt?ht.get(Bt).bytesPerElement:1,qi=St.get(ct).currentProgram.getUniforms();for(let Qe=0;Qe<re;Qe++)qi.setValue(N,"_gl_DrawID",Qe),se.render(Ht[Qe]/un,Ln[Qe])}else if(et.isInstancedMesh)se.renderInstances(ie,me,et.count);else if(lt.isInstancedBufferGeometry){const Ht=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ln=Math.min(lt.instanceCount,Ht);se.renderInstances(ie,me,Ln)}else se.render(ie,me)};function ae(F,tt,lt){F.transparent===!0&&F.side===ue&&F.forceSinglePass===!1?(F.side=Pe,F.needsUpdate=!0,Lr(F,tt,lt),F.side=fi,F.needsUpdate=!0,Lr(F,tt,lt),F.side=ue):Lr(F,tt,lt)}this.compile=function(F,tt,lt=null){lt===null&&(lt=F),d=at.get(lt),d.init(tt),w.push(d),lt.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(d.pushLight(et),et.castShadow&&d.pushShadow(et))}),F!==lt&&F.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(d.pushLight(et),et.castShadow&&d.pushShadow(et))}),d.setupLights();const ct=new Set;return F.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const wt=et.material;if(wt)if(Array.isArray(wt))for(let Nt=0;Nt<wt.length;Nt++){const Ot=wt[Nt];ae(Ot,lt,et),ct.add(Ot)}else ae(wt,lt,et),ct.add(wt)}),w.pop(),d=null,ct},this.compileAsync=function(F,tt,lt=null){const ct=this.compile(F,tt,lt);return new Promise(et=>{function wt(){if(ct.forEach(function(Nt){St.get(Nt).currentProgram.isReady()&&ct.delete(Nt)}),ct.size===0){et(F);return}setTimeout(wt,10)}ut.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let hn=null;function Pn(F){hn&&hn(F)}function Ec(){pi.stop()}function Ac(){pi.start()}const pi=new cf;pi.setAnimationLoop(Pn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(F){hn=F,ft.setAnimationLoop(F),F===null?pi.stop():pi.start()},ft.addEventListener("sessionstart",Ec),ft.addEventListener("sessionend",Ac),this.render=function(F,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(tt),tt=ft.getCamera()),F.isScene===!0&&F.onBeforeRender(_,F,tt,A),d=at.get(F,w.length),d.init(tt),w.push(d),D.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),C.setFromProjectionMatrix(D),z=this.localClippingEnabled,P=Q.init(this.clippingPlanes,z),g=Ft.get(F,b.length),g.init(),b.push(g),ft.enabled===!0&&ft.isPresenting===!0){const wt=_.xr.getDepthSensingMesh();wt!==null&&Ho(wt,tt,-1/0,_.sortObjects)}Ho(F,tt,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort($,rt),Y=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Y&&gt.addToRenderList(g,F),this.info.render.frame++,P===!0&&Q.beginShadows();const lt=d.state.shadowsArray;dt.render(lt,F,tt),P===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=g.opaque,et=g.transmissive;if(d.setupLights(),tt.isArrayCamera){const wt=tt.cameras;if(et.length>0)for(let Nt=0,Ot=wt.length;Nt<Ot;Nt++){const Bt=wt[Nt];Rc(ct,et,F,Bt)}Y&&gt.render(F);for(let Nt=0,Ot=wt.length;Nt<Ot;Nt++){const Bt=wt[Nt];Tc(g,F,Bt,Bt.viewport)}}else et.length>0&&Rc(ct,et,F,tt),Y&&gt.render(F),Tc(g,F,tt);A!==null&&(O.updateMultisampleRenderTarget(A),O.updateRenderTargetMipmap(A)),F.isScene===!0&&F.onAfterRender(_,F,tt),Wt.resetDefaultState(),v=-1,S=null,w.pop(),w.length>0?(d=w[w.length-1],P===!0&&Q.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Ho(F,tt,lt,ct){if(F.visible===!1)return;if(F.layers.test(tt.layers)){if(F.isGroup)lt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(tt);else if(F.isLight)d.pushLight(F),F.castShadow&&d.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||C.intersectsSprite(F)){ct&&k.setFromMatrixPosition(F.matrixWorld).applyMatrix4(D);const Nt=pt.update(F),Ot=F.material;Ot.visible&&g.push(F,Nt,Ot,lt,k.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||C.intersectsObject(F))){const Nt=pt.update(F),Ot=F.material;if(ct&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),k.copy(F.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),k.copy(Nt.boundingSphere.center)),k.applyMatrix4(F.matrixWorld).applyMatrix4(D)),Array.isArray(Ot)){const Bt=Nt.groups;for(let Xt=0,Zt=Bt.length;Xt<Zt;Xt++){const Gt=Bt[Xt],ie=Ot[Gt.materialIndex];ie&&ie.visible&&g.push(F,Nt,ie,lt,k.z,Gt)}}else Ot.visible&&g.push(F,Nt,Ot,lt,k.z,null)}}const wt=F.children;for(let Nt=0,Ot=wt.length;Nt<Ot;Nt++)Ho(wt[Nt],tt,lt,ct)}function Tc(F,tt,lt,ct){const et=F.opaque,wt=F.transmissive,Nt=F.transparent;d.setupLightsView(lt),P===!0&&Q.setGlobalState(_.clippingPlanes,lt),ct&&mt.viewport(T.copy(ct)),et.length>0&&Pr(et,tt,lt),wt.length>0&&Pr(wt,tt,lt),Nt.length>0&&Pr(Nt,tt,lt),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Rc(F,tt,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ct.id]===void 0&&(d.state.transmissionRenderTarget[ct.id]=new Fi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Ar:kn,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const wt=d.state.transmissionRenderTarget[ct.id],Nt=ct.viewport||T;wt.setSize(Nt.z,Nt.w);const Ot=_.getRenderTarget();_.setRenderTarget(wt),_.getClearColor(V),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),Y&&gt.render(lt);const Bt=_.toneMapping;_.toneMapping=hi;const Xt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),d.setupLightsView(ct),P===!0&&Q.setGlobalState(_.clippingPlanes,ct),Pr(F,lt,ct),O.updateMultisampleRenderTarget(wt),O.updateRenderTargetMipmap(wt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Gt=0,ie=tt.length;Gt<ie;Gt++){const de=tt[Gt],me=de.object,$e=de.geometry,se=de.material,Ht=de.group;if(se.side===ue&&me.layers.test(ct.layers)){const Ln=se.side;se.side=Pe,se.needsUpdate=!0,Cc(me,lt,ct,$e,se,Ht),se.side=Ln,se.needsUpdate=!0,Zt=!0}}Zt===!0&&(O.updateMultisampleRenderTarget(wt),O.updateRenderTargetMipmap(wt))}_.setRenderTarget(Ot),_.setClearColor(V,H),Xt!==void 0&&(ct.viewport=Xt),_.toneMapping=Bt}function Pr(F,tt,lt){const ct=tt.isScene===!0?tt.overrideMaterial:null;for(let et=0,wt=F.length;et<wt;et++){const Nt=F[et],Ot=Nt.object,Bt=Nt.geometry,Xt=ct===null?Nt.material:ct,Zt=Nt.group;Ot.layers.test(lt.layers)&&Cc(Ot,tt,lt,Bt,Xt,Zt)}}function Cc(F,tt,lt,ct,et,wt){F.onBeforeRender(_,tt,lt,ct,et,wt),F.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),et.onBeforeRender(_,tt,lt,ct,F,wt),et.transparent===!0&&et.side===ue&&et.forceSinglePass===!1?(et.side=Pe,et.needsUpdate=!0,_.renderBufferDirect(lt,tt,ct,et,F,wt),et.side=fi,et.needsUpdate=!0,_.renderBufferDirect(lt,tt,ct,et,F,wt),et.side=ue):_.renderBufferDirect(lt,tt,ct,et,F,wt),F.onAfterRender(_,tt,lt,ct,et,wt)}function Lr(F,tt,lt){tt.isScene!==!0&&(tt=nt);const ct=St.get(F),et=d.state.lights,wt=d.state.shadowsArray,Nt=et.state.version,Ot=Dt.getParameters(F,et.state,wt,tt,lt),Bt=Dt.getProgramCacheKey(Ot);let Xt=ct.programs;ct.environment=F.isMeshStandardMaterial?tt.environment:null,ct.fog=tt.fog,ct.envMap=(F.isMeshStandardMaterial?it:L).get(F.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&F.envMap===null?tt.environmentRotation:F.envMapRotation,Xt===void 0&&(F.addEventListener("dispose",qt),Xt=new Map,ct.programs=Xt);let Zt=Xt.get(Bt);if(Zt!==void 0){if(ct.currentProgram===Zt&&ct.lightsStateVersion===Nt)return Lc(F,Ot),Zt}else Ot.uniforms=Dt.getUniforms(F),F.onBeforeCompile(Ot,_),Zt=Dt.acquireProgram(Ot,Bt),Xt.set(Bt,Zt),ct.uniforms=Ot.uniforms;const Gt=ct.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Gt.clippingPlanes=Q.uniform),Lc(F,Ot),ct.needsLights=nd(F),ct.lightsStateVersion=Nt,ct.needsLights&&(Gt.ambientLightColor.value=et.state.ambient,Gt.lightProbe.value=et.state.probe,Gt.directionalLights.value=et.state.directional,Gt.directionalLightShadows.value=et.state.directionalShadow,Gt.spotLights.value=et.state.spot,Gt.spotLightShadows.value=et.state.spotShadow,Gt.rectAreaLights.value=et.state.rectArea,Gt.ltc_1.value=et.state.rectAreaLTC1,Gt.ltc_2.value=et.state.rectAreaLTC2,Gt.pointLights.value=et.state.point,Gt.pointLightShadows.value=et.state.pointShadow,Gt.hemisphereLights.value=et.state.hemi,Gt.directionalShadowMap.value=et.state.directionalShadowMap,Gt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Gt.spotShadowMap.value=et.state.spotShadowMap,Gt.spotLightMatrix.value=et.state.spotLightMatrix,Gt.spotLightMap.value=et.state.spotLightMap,Gt.pointShadowMap.value=et.state.pointShadowMap,Gt.pointShadowMatrix.value=et.state.pointShadowMatrix),ct.currentProgram=Zt,ct.uniformsList=null,Zt}function Pc(F){if(F.uniformsList===null){const tt=F.currentProgram.getUniforms();F.uniformsList=So.seqWithValue(tt.seq,F.uniforms)}return F.uniformsList}function Lc(F,tt){const lt=St.get(F);lt.outputColorSpace=tt.outputColorSpace,lt.batching=tt.batching,lt.batchingColor=tt.batchingColor,lt.instancing=tt.instancing,lt.instancingColor=tt.instancingColor,lt.instancingMorph=tt.instancingMorph,lt.skinning=tt.skinning,lt.morphTargets=tt.morphTargets,lt.morphNormals=tt.morphNormals,lt.morphColors=tt.morphColors,lt.morphTargetsCount=tt.morphTargetsCount,lt.numClippingPlanes=tt.numClippingPlanes,lt.numIntersection=tt.numClipIntersection,lt.vertexAlphas=tt.vertexAlphas,lt.vertexTangents=tt.vertexTangents,lt.toneMapping=tt.toneMapping}function td(F,tt,lt,ct,et){tt.isScene!==!0&&(tt=nt),O.resetTextureUnits();const wt=tt.fog,Nt=ct.isMeshStandardMaterial?tt.environment:null,Ot=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ls,Bt=(ct.isMeshStandardMaterial?it:L).get(ct.envMap||Nt),Xt=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Zt=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Gt=!!lt.morphAttributes.position,ie=!!lt.morphAttributes.normal,de=!!lt.morphAttributes.color;let me=hi;ct.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=_.toneMapping);const $e=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,se=$e!==void 0?$e.length:0,Ht=St.get(ct),Ln=d.state.lights;if(P===!0&&(z===!0||F!==S)){const on=F===S&&ct.id===v;Q.setState(ct,F,on)}let re=!1;ct.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ln.state.version||Ht.outputColorSpace!==Ot||et.isBatchedMesh&&Ht.batching===!1||!et.isBatchedMesh&&Ht.batching===!0||et.isBatchedMesh&&Ht.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Ht.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Ht.instancing===!1||!et.isInstancedMesh&&Ht.instancing===!0||et.isSkinnedMesh&&Ht.skinning===!1||!et.isSkinnedMesh&&Ht.skinning===!0||et.isInstancedMesh&&Ht.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Ht.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Ht.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Ht.instancingMorph===!1&&et.morphTexture!==null||Ht.envMap!==Bt||ct.fog===!0&&Ht.fog!==wt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Q.numPlanes||Ht.numIntersection!==Q.numIntersection)||Ht.vertexAlphas!==Xt||Ht.vertexTangents!==Zt||Ht.morphTargets!==Gt||Ht.morphNormals!==ie||Ht.morphColors!==de||Ht.toneMapping!==me||Ht.morphTargetsCount!==se)&&(re=!0):(re=!0,Ht.__version=ct.version);let un=Ht.currentProgram;re===!0&&(un=Lr(ct,tt,et));let qi=!1,Qe=!1,zs=!1;const ge=un.getUniforms(),xn=Ht.uniforms;if(mt.useProgram(un.program)&&(qi=!0,Qe=!0,zs=!0),ct.id!==v&&(v=ct.id,Qe=!0),qi||S!==F){mt.buffers.depth.getReversed()?(G.copy(F.projectionMatrix),hp(G),up(G),ge.setValue(N,"projectionMatrix",G)):ge.setValue(N,"projectionMatrix",F.projectionMatrix),ge.setValue(N,"viewMatrix",F.matrixWorldInverse);const qn=ge.map.cameraPosition;qn!==void 0&&qn.setValue(N,B.setFromMatrixPosition(F.matrixWorld)),yt.logarithmicDepthBuffer&&ge.setValue(N,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&ge.setValue(N,"isOrthographic",F.isOrthographicCamera===!0),S!==F&&(S=F,Qe=!0,zs=!0)}if(et.isSkinnedMesh){ge.setOptional(N,et,"bindMatrix"),ge.setOptional(N,et,"bindMatrixInverse");const on=et.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ge.setValue(N,"boneTexture",on.boneTexture,O))}et.isBatchedMesh&&(ge.setOptional(N,et,"batchingTexture"),ge.setValue(N,"batchingTexture",et._matricesTexture,O),ge.setOptional(N,et,"batchingIdTexture"),ge.setValue(N,"batchingIdTexture",et._indirectTexture,O),ge.setOptional(N,et,"batchingColorTexture"),et._colorsTexture!==null&&ge.setValue(N,"batchingColorTexture",et._colorsTexture,O));const Os=lt.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&bt.update(et,lt,un),(Qe||Ht.receiveShadow!==et.receiveShadow)&&(Ht.receiveShadow=et.receiveShadow,ge.setValue(N,"receiveShadow",et.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(xn.envMap.value=Bt,xn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&tt.environment!==null&&(xn.envMapIntensity.value=tt.environmentIntensity),Qe&&(ge.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ht.needsLights&&ed(xn,zs),wt&&ct.fog===!0&&Tt.refreshFogUniforms(xn,wt),Tt.refreshMaterialUniforms(xn,ct,X,Z,d.state.transmissionRenderTarget[F.id]),So.upload(N,Pc(Ht),xn,O)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(So.upload(N,Pc(Ht),xn,O),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&ge.setValue(N,"center",et.center),ge.setValue(N,"modelViewMatrix",et.modelViewMatrix),ge.setValue(N,"normalMatrix",et.normalMatrix),ge.setValue(N,"modelMatrix",et.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const on=ct.uniformsGroups;for(let qn=0,Zn=on.length;qn<Zn;qn++){const Ic=on[qn];j.update(Ic,un),j.bind(Ic,un)}}return un}function ed(F,tt){F.ambientLightColor.needsUpdate=tt,F.lightProbe.needsUpdate=tt,F.directionalLights.needsUpdate=tt,F.directionalLightShadows.needsUpdate=tt,F.pointLights.needsUpdate=tt,F.pointLightShadows.needsUpdate=tt,F.spotLights.needsUpdate=tt,F.spotLightShadows.needsUpdate=tt,F.rectAreaLights.needsUpdate=tt,F.hemisphereLights.needsUpdate=tt}function nd(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(F,tt,lt){St.get(F.texture).__webglTexture=tt,St.get(F.depthTexture).__webglTexture=lt;const ct=St.get(F);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=lt===void 0,ct.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,tt){const lt=St.get(F);lt.__webglFramebuffer=tt,lt.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(F,tt=0,lt=0){A=F,y=tt,E=lt;let ct=!0,et=null,wt=!1,Nt=!1;if(F){const Bt=St.get(F);if(Bt.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(N.FRAMEBUFFER,null),ct=!1;else if(Bt.__webglFramebuffer===void 0)O.setupRenderTarget(F);else if(Bt.__hasExternalTextures)O.rebindTextures(F,St.get(F.texture).__webglTexture,St.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const Gt=F.depthTexture;if(Bt.__boundDepthTexture!==Gt){if(Gt!==null&&St.has(Gt)&&(F.width!==Gt.image.width||F.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(F)}}const Xt=F.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Nt=!0);const Zt=St.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Zt[tt])?et=Zt[tt][lt]:et=Zt[tt],wt=!0):F.samples>0&&O.useMultisampledRTT(F)===!1?et=St.get(F).__webglMultisampledFramebuffer:Array.isArray(Zt)?et=Zt[lt]:et=Zt,T.copy(F.viewport),I.copy(F.scissor),U=F.scissorTest}else T.copy(ot).multiplyScalar(X).floor(),I.copy(st).multiplyScalar(X).floor(),U=J;if(mt.bindFramebuffer(N.FRAMEBUFFER,et)&&ct&&mt.drawBuffers(F,et),mt.viewport(T),mt.scissor(I),mt.setScissorTest(U),wt){const Bt=St.get(F.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Bt.__webglTexture,lt)}else if(Nt){const Bt=St.get(F.texture),Xt=tt||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.__webglTexture,lt||0,Xt)}v=-1},this.readRenderTargetPixels=function(F,tt,lt,ct,et,wt,Nt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=St.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){mt.bindFramebuffer(N.FRAMEBUFFER,Ot);try{const Bt=F.texture,Xt=Bt.format,Zt=Bt.type;if(!yt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=F.width-ct&&lt>=0&&lt<=F.height-et&&N.readPixels(tt,lt,ct,et,zt.convert(Xt),zt.convert(Zt),wt)}finally{const Bt=A!==null?St.get(A).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(F,tt,lt,ct,et,wt,Nt){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=St.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){const Bt=F.texture,Xt=Bt.format,Zt=Bt.type;if(!yt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(tt>=0&&tt<=F.width-ct&&lt>=0&&lt<=F.height-et){mt.bindFramebuffer(N.FRAMEBUFFER,Ot);const Gt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Gt),N.bufferData(N.PIXEL_PACK_BUFFER,wt.byteLength,N.STREAM_READ),N.readPixels(tt,lt,ct,et,zt.convert(Xt),zt.convert(Zt),0);const ie=A!==null?St.get(A).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,ie);const de=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await cp(N,de,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Gt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,wt),N.deleteBuffer(Gt),N.deleteSync(de),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,tt=null,lt=0){F.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),tt=arguments[0]||null,F=arguments[1]);const ct=Math.pow(2,-lt),et=Math.floor(F.image.width*ct),wt=Math.floor(F.image.height*ct),Nt=tt!==null?tt.x:0,Ot=tt!==null?tt.y:0;O.setTexture2D(F,0),N.copyTexSubImage2D(N.TEXTURE_2D,lt,0,0,Nt,Ot,et,wt),mt.unbindTexture()},this.copyTextureToTexture=function(F,tt,lt=null,ct=null,et=0){F.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,F=arguments[1],tt=arguments[2],et=arguments[3]||0,lt=null);let wt,Nt,Ot,Bt,Xt,Zt,Gt,ie,de;const me=F.isCompressedTexture?F.mipmaps[et]:F.image;lt!==null?(wt=lt.max.x-lt.min.x,Nt=lt.max.y-lt.min.y,Ot=lt.isBox3?lt.max.z-lt.min.z:1,Bt=lt.min.x,Xt=lt.min.y,Zt=lt.isBox3?lt.min.z:0):(wt=me.width,Nt=me.height,Ot=me.depth||1,Bt=0,Xt=0,Zt=0),ct!==null?(Gt=ct.x,ie=ct.y,de=ct.z):(Gt=0,ie=0,de=0);const $e=zt.convert(tt.format),se=zt.convert(tt.type);let Ht;tt.isData3DTexture?(O.setTexture3D(tt,0),Ht=N.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(O.setTexture2DArray(tt,0),Ht=N.TEXTURE_2D_ARRAY):(O.setTexture2D(tt,0),Ht=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,tt.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,tt.unpackAlignment);const Ln=N.getParameter(N.UNPACK_ROW_LENGTH),re=N.getParameter(N.UNPACK_IMAGE_HEIGHT),un=N.getParameter(N.UNPACK_SKIP_PIXELS),qi=N.getParameter(N.UNPACK_SKIP_ROWS),Qe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,me.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt);const zs=F.isDataArrayTexture||F.isData3DTexture,ge=tt.isDataArrayTexture||tt.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){const xn=St.get(F),Os=St.get(tt),on=St.get(xn.__renderTarget),qn=St.get(Os.__renderTarget);mt.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Zn=0;Zn<Ot;Zn++)zs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(F).__webglTexture,et,Zt+Zn),F.isDepthTexture?(ge&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(tt).__webglTexture,et,de+Zn),N.blitFramebuffer(Bt,Xt,wt,Nt,Gt,ie,wt,Nt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ge?N.copyTexSubImage3D(Ht,et,Gt,ie,de+Zn,Bt,Xt,wt,Nt):N.copyTexSubImage2D(Ht,et,Gt,ie,de+Zn,Bt,Xt,wt,Nt);mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ge?F.isDataTexture||F.isData3DTexture?N.texSubImage3D(Ht,et,Gt,ie,de,wt,Nt,Ot,$e,se,me.data):tt.isCompressedArrayTexture?N.compressedTexSubImage3D(Ht,et,Gt,ie,de,wt,Nt,Ot,$e,me.data):N.texSubImage3D(Ht,et,Gt,ie,de,wt,Nt,Ot,$e,se,me):F.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,et,Gt,ie,wt,Nt,$e,se,me.data):F.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,et,Gt,ie,me.width,me.height,$e,me.data):N.texSubImage2D(N.TEXTURE_2D,et,Gt,ie,wt,Nt,$e,se,me);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ln),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re),N.pixelStorei(N.UNPACK_SKIP_PIXELS,un),N.pixelStorei(N.UNPACK_SKIP_ROWS,qi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe),et===0&&tt.generateMipmaps&&N.generateMipmap(Ht),mt.unbindTexture()},this.copyTextureToTexture3D=function(F,tt,lt=null,ct=null,et=0){return F.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),lt=arguments[0]||null,ct=arguments[1]||null,F=arguments[2],tt=arguments[3],et=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,tt,lt,ct,et)},this.initRenderTarget=function(F){St.get(F).__webglFramebuffer===void 0&&O.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?O.setTextureCube(F,0):F.isData3DTexture?O.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?O.setTexture2DArray(F,0):O.setTexture2D(F,0),mt.unbindTexture()},this.resetState=function(){y=0,E=0,A=null,mt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class nc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new nc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Al extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class y_ extends Ye{constructor(t=null,e=1,i=1,s,r,o,a,l,h=sn,u=sn,f,p){super(null,o,a,l,h,u,s,r,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Re extends Le{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ls=new le,Lh=new le,Qr=[],Ih=new ki,S_=new le,Vs=new Pt,Ws=new Vi;class $t extends Pt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Re(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,S_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ls),Ih.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(Ih)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ls),Ws.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(i),t.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),Lh.multiplyMatrices(i,ls),Vs.matrixWorld=Lh,Vs.raycast(t,Qr);for(let o=0,a=Qr.length;o<a;o++){const l=Qr[o];l.instanceId=r,l.object=this,e.push(l)}Qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Re(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new y_(new Float32Array(s*this.count),s,this.count,Zl,wn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ic extends Wi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Eo=new q,Ao=new q,Dh=new le,Xs=new Ql,to=new Vi,ga=new q,Uh=new q;class b_ extends Yt{constructor(t=new ye,e=new ic){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Eo.fromBufferAttribute(e,s-1),Ao.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Eo.distanceTo(Ao);t.setAttribute("lineDistance",new te(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(s),to.radius+=r,t.ray.intersectsSphere(to)===!1)return;Dh.copy(s).invert(),Xs.copy(t.ray).applyMatrix4(Dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),M=Math.min(u.count,o.start+o.count);for(let x=m,g=M-1;x<g;x+=h){const d=u.getX(x),b=u.getX(x+1),w=eo(this,t,Xs,l,d,b);w&&e.push(w)}if(this.isLineLoop){const x=u.getX(M-1),g=u.getX(m),d=eo(this,t,Xs,l,x,g);d&&e.push(d)}}else{const m=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let x=m,g=M-1;x<g;x+=h){const d=eo(this,t,Xs,l,x,x+1);d&&e.push(d)}if(this.isLineLoop){const x=eo(this,t,Xs,l,M-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function eo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(Eo.fromBufferAttribute(o,s),Ao.fromBufferAttribute(o,r),e.distanceSqToSegment(Eo,Ao,ga,Uh)>i)return;ga.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ga);if(!(l<t.near||l>t.far))return{distance:l,point:Uh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Nh=new q,Fh=new q;class mf extends b_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Nh.fromBufferAttribute(e,s),Fh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nh.distanceTo(Fh);t.setAttribute("lineDistance",new te(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sc extends Wi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zh=new le,Tl=new Ql,no=new Vi,io=new q;class gf extends Yt{constructor(t=new ye,e=new sc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(s),no.radius+=r,t.ray.intersectsSphere(no)===!1)return;zh.copy(s).invert(),Tl.copy(t.ray).applyMatrix4(zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let M=p,x=m;M<x;M++){const g=h.getX(M);io.fromBufferAttribute(f,g),Oh(io,g,l,s,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let M=p,x=m;M<x;M++)io.fromBufferAttribute(f,M),Oh(io,M,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oh(n,t,e,i,s,r,o){const a=Tl.distanceSqToPoint(n);if(a<e){const l=new q;Tl.closestPointToPoint(n,l),l.applyMatrix4(i);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Rl extends Ye{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],p=i[s+1]-u,m=(o-u)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Et:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new q,s=[],r=[],o=[],a=new q,l=new le;for(let m=0;m<=t;m++){const M=m/t;s[m]=this.getTangentAt(M,new q)}r[0]=new q,o[0]=new q;let h=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=h&&(h=u,i.set(1,0,0)),f<=h&&(h=f,i.set(0,1,0)),p<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const M=Math.acos(ze(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,M))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ze(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let M=1;M<=t;M++)r[M].applyMatrix4(l.makeRotationAxis(s[M],m*M)),o[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rc extends Rn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Et){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,m=h-this.aY;l=p*u-m*f+this.aX,h=p*f+m*u+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class w_ extends rc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,f){let p=(o-r)/h-(a-r)/(h+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+f)+(l-a)/f;p*=u,m*=u,s(o,a,p,m)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const so=new q,Ma=new oc,_a=new oc,xa=new oc;class Ri extends Rn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new q){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(so.subVectors(s[0],s[1]).add(s[0]),h=so);const f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(so.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=so),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(u),m);x<1e-4&&(x=1),M<1e-4&&(M=x),g<1e-4&&(g=x),Ma.initNonuniformCatmullRom(h.x,f.x,p.x,u.x,M,x,g),_a.initNonuniformCatmullRom(h.y,f.y,p.y,u.y,M,x,g),xa.initNonuniformCatmullRom(h.z,f.z,p.z,u.z,M,x,g)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(h.x,f.x,p.x,u.x,this.tension),_a.initCatmullRom(h.y,f.y,p.y,u.y,this.tension),xa.initCatmullRom(h.z,f.z,p.z,u.z,this.tension));return i.set(Ma.calc(l),_a.calc(l),xa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function E_(n,t){const e=1-n;return e*e*t}function A_(n,t){return 2*(1-n)*n*t}function T_(n,t){return n*n*t}function cr(n,t,e,i){return E_(n,t)+A_(n,e)+T_(n,i)}function R_(n,t){const e=1-n;return e*e*e*t}function C_(n,t){const e=1-n;return 3*e*e*n*t}function P_(n,t){return 3*(1-n)*n*n*t}function L_(n,t){return n*n*n*t}function hr(n,t,e,i,s){return R_(n,t)+C_(n,e)+P_(n,i)+L_(n,s)}class Mf extends Rn{constructor(t=new Et,e=new Et,i=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Et){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class I_ extends Rn{constructor(t=new q,e=new q,i=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new q){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y),hr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _f extends Rn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D_ extends Rn{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xf extends Rn{constructor(t=new Et,e=new Et,i=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Et){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(cr(t,s.x,r.x,o.x),cr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends Rn{constructor(t=new q,e=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new q){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(cr(t,s.x,r.x,o.x),cr(t,s.y,r.y,o.y),cr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yf extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Bh(a,l.x,h.x,u.x,f.x),Bh(a,l.y,h.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var To=Object.freeze({__proto__:null,ArcCurve:w_,CatmullRomCurve3:Ri,CubicBezierCurve:Mf,CubicBezierCurve3:I_,EllipseCurve:rc,LineCurve:_f,LineCurve3:D_,QuadraticBezierCurve:xf,QuadraticBezierCurve3:vf,SplineCurve:yf});class U_ extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const u=l[h];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new To[s.type]().fromJSON(s))}return this}}class gr extends U_{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new _f(this.currentPoint.clone(),new Et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new xf(this.currentPoint.clone(),new Et(t,e),new Et(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Mf(this.currentPoint.clone(),new Et(t,e),new Et(i,s),new Et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new yf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const h=new rc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ac extends ye{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],h=[],u=1/e,f=new q,p=new Et,m=new q,M=new q,x=new q;let g=0,d=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,d=t[b+1].y-t[b].y,m.x=d*1,m.y=-g,m.z=d*0,x.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[b+1].x-t[b].x,d=t[b+1].y-t[b].y,m.x=d*1,m.y=-g,m.z=d*0,M.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),l.push(m.x,m.y,m.z),x.copy(M)}for(let b=0;b<=e;b++){const w=i+b*u*s,_=Math.sin(w),R=Math.cos(w);for(let y=0;y<=t.length-1;y++){f.x=t[y].x*_,f.y=t[y].y,f.z=t[y].x*R,o.push(f.x,f.y,f.z),p.x=b/e,p.y=y/(t.length-1),a.push(p.x,p.y);const E=l[3*y+0]*_,A=l[3*y+1],v=l[3*y+0]*R;h.push(E,A,v)}}for(let b=0;b<e;b++)for(let w=0;w<t.length-1;w++){const _=w+b*t.length,R=_,y=_+t.length,E=_+t.length+1,A=_+1;r.push(R,y,A),r.push(E,A,y)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.points,t.segments,t.phiStart,t.phiLength)}}class Wn extends ac{constructor(t=1,e=1,i=4,s=8){const r=new gr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Wn(t.radius,t.length,t.capSegments,t.radialSegments)}}class lc extends ye{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],h=new q,u=new Et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=e;f++,p+=3){const m=i+f/e*s;h.x=t*Math.cos(m),h.y=t*Math.sin(m),o.push(h.x,h.y,h.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Gn extends ye{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],p=[],m=[];let M=0;const x=[],g=i/2;let d=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(p,3)),this.setAttribute("uv",new te(m,2));function b(){const _=new q,R=new q;let y=0;const E=(e-t)/i;for(let A=0;A<=r;A++){const v=[],S=A/r,T=S*(e-t)+t;for(let I=0;I<=s;I++){const U=I/s,V=U*l+a,H=Math.sin(V),W=Math.cos(V);R.x=T*H,R.y=-S*i+g,R.z=T*W,f.push(R.x,R.y,R.z),_.set(H,E,W).normalize(),p.push(_.x,_.y,_.z),m.push(U,1-S),v.push(M++)}x.push(v)}for(let A=0;A<s;A++)for(let v=0;v<r;v++){const S=x[v][A],T=x[v+1][A],I=x[v+1][A+1],U=x[v][A+1];(t>0||v!==0)&&(u.push(S,T,U),y+=3),(e>0||v!==r-1)&&(u.push(T,I,U),y+=3)}h.addGroup(d,y,0),d+=y}function w(_){const R=M,y=new Et,E=new q;let A=0;const v=_===!0?t:e,S=_===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,g*S,0),p.push(0,S,0),m.push(.5,.5),M++;const T=M;for(let I=0;I<=s;I++){const V=I/s*l+a,H=Math.cos(V),W=Math.sin(V);E.x=v*W,E.y=g*S,E.z=v*H,f.push(E.x,E.y,E.z),p.push(0,S,0),y.x=H*.5+.5,y.y=W*.5*S+.5,m.push(y.x,y.y),M++}for(let I=0;I<s;I++){const U=R+I,V=T+I;_===!0?u.push(V,V+1,U):u.push(V+1,V,U),A+=3}h.addGroup(d,A,_===!0?1:2),d+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cc extends ye{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),h(i),u(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const w=new q,_=new q,R=new q;for(let y=0;y<e.length;y+=3)m(e[y+0],w),m(e[y+1],_),m(e[y+2],R),l(w,_,R,b)}function l(b,w,_,R){const y=R+1,E=[];for(let A=0;A<=y;A++){E[A]=[];const v=b.clone().lerp(_,A/y),S=w.clone().lerp(_,A/y),T=y-A;for(let I=0;I<=T;I++)I===0&&A===y?E[A][I]=v:E[A][I]=v.clone().lerp(S,I/T)}for(let A=0;A<y;A++)for(let v=0;v<2*(y-A)-1;v++){const S=Math.floor(v/2);v%2===0?(p(E[A][S+1]),p(E[A+1][S]),p(E[A][S])):(p(E[A][S+1]),p(E[A+1][S+1]),p(E[A+1][S]))}}function h(b){const w=new q;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(b),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function u(){const b=new q;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];const _=g(b)/2/Math.PI+.5,R=d(b)/Math.PI+.5;o.push(_,1-R)}M(),f()}function f(){for(let b=0;b<o.length;b+=6){const w=o[b+0],_=o[b+2],R=o[b+4],y=Math.max(w,_,R),E=Math.min(w,_,R);y>.9&&E<.1&&(w<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),R<.2&&(o[b+4]+=1))}}function p(b){r.push(b.x,b.y,b.z)}function m(b,w){const _=b*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function M(){const b=new q,w=new q,_=new q,R=new q,y=new Et,E=new Et,A=new Et;for(let v=0,S=0;v<r.length;v+=9,S+=6){b.set(r[v+0],r[v+1],r[v+2]),w.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),y.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),R.copy(b).add(w).add(_).divideScalar(3);const T=g(R);x(y,S+0,b,T),x(E,S+2,w,T),x(A,S+4,_,T)}}function x(b,w,_,R){R<0&&b.x===1&&(o[w]=b.x-1),_.x===0&&_.z===0&&(o[w]=R/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.vertices,t.indices,t.radius,t.details)}}class Ke extends gr{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new gr().fromJSON(s))}return this}}const N_={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Sf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h,u,f,p,m;if(i&&(r=G_(n,t,r,e)),n.length>80*e){a=h=n[0],l=u=n[1];for(let M=e;M<s;M+=e)f=n[M],p=n[M+1],f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p);m=Math.max(h-a,u-l),m=m!==0?32767/m:0}return Mr(r,o,e,a,l,m,0),o}};function Sf(n,t,e,i,s){let r,o;if(s===$_(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Gh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Gh(r,n[r],n[r+1],o);return o&&zo(o,o.next)&&(xr(o),o=o.next),o}function Bi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(zo(e,e.next)||ve(e.prev,e,e.next)===0)){if(xr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Mr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&X_(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?z_(n,i,s,r):F_(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),xr(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=O_(Bi(n),t,e),Mr(n,t,e,i,s,r,2)):o===2&&B_(n,t,e,i,s,r):Mr(Bi(n),t,e,i,s,r,1);break}}}function F_(n){const t=n.prev,e=n,i=n.next;if(ve(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,u=s<r?s<o?s:o:r<o?r:o,f=a<l?a<h?a:h:l<h?l:h,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>h?a:h:l>h?l:h;let M=i.next;for(;M!==t;){if(M.x>=u&&M.x<=p&&M.y>=f&&M.y<=m&&Ms(s,a,r,l,o,h,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function z_(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ve(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,u=s.y,f=r.y,p=o.y,m=a<l?a<h?a:h:l<h?l:h,M=u<f?u<p?u:p:f<p?f:p,x=a>l?a>h?a:h:l>h?l:h,g=u>f?u>p?u:p:f>p?f:p,d=Cl(m,M,t,e,i),b=Cl(x,g,t,e,i);let w=n.prevZ,_=n.nextZ;for(;w&&w.z>=d&&_&&_.z<=b;){if(w.x>=m&&w.x<=x&&w.y>=M&&w.y<=g&&w!==s&&w!==o&&Ms(a,u,l,f,h,p,w.x,w.y)&&ve(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=m&&_.x<=x&&_.y>=M&&_.y<=g&&_!==s&&_!==o&&Ms(a,u,l,f,h,p,_.x,_.y)&&ve(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=d;){if(w.x>=m&&w.x<=x&&w.y>=M&&w.y<=g&&w!==s&&w!==o&&Ms(a,u,l,f,h,p,w.x,w.y)&&ve(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=b;){if(_.x>=m&&_.x<=x&&_.y>=M&&_.y<=g&&_!==s&&_!==o&&Ms(a,u,l,f,h,p,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function O_(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!zo(s,r)&&bf(s,i,i.next,r)&&_r(s,r)&&_r(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),xr(i),xr(i.next),i=n=r),i=i.next}while(i!==n);return Bi(i)}function B_(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Z_(o,a)){let l=wf(o,a);o=Bi(o,o.next),l=Bi(l,l.next),Mr(o,t,e,i,s,r,0),Mr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function G_(n,t,e,i){const s=[];let r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=Sf(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(q_(h));for(s.sort(H_),r=0;r<s.length;r++)e=k_(s[r],e);return e}function H_(n,t){return n.x-t.x}function k_(n,t){const e=V_(n,t);if(!e)return t;const i=wf(e,n);return Bi(i,i.next),Bi(e,e.next)}function V_(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>i&&(i=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,h=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ms(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),_r(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&W_(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function W_(n,t){return ve(n.prev,n,t.prev)<0&&ve(t.next,n,n.next)<0}function X_(n,t,e,i){let s=n;do s.z===0&&(s.z=Cl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Y_(s)}function Y_(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function Cl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function q_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ms(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Z_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!J_(n,t)&&(_r(n,t)&&_r(t,n)&&K_(n,t)&&(ve(n.prev,n,t.prev)||ve(n,t.prev,t))||zo(n,t)&&ve(n.prev,n,n.next)>0&&ve(t.prev,t,t.next)>0)}function ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function zo(n,t){return n.x===t.x&&n.y===t.y}function bf(n,t,e,i){const s=oo(ve(n,t,e)),r=oo(ve(n,t,i)),o=oo(ve(e,i,n)),a=oo(ve(e,i,t));return!!(s!==r&&o!==a||s===0&&ro(n,e,t)||r===0&&ro(n,i,t)||o===0&&ro(e,n,i)||a===0&&ro(e,t,i))}function ro(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function oo(n){return n>0?1:n<0?-1:0}function J_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&bf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function _r(n,t){return ve(n.prev,n,n.next)<0?ve(n,t,n.next)>=0&&ve(n,n.prev,t)>=0:ve(n,t,n.prev)<0||ve(n,n.next,t)<0}function K_(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function wf(n,t){const e=new Pl(n.i,n.x,n.y),i=new Pl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Gh(n,t,e,i){const s=new Pl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Pl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $_(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class ur{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return ur.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Hh(t),kh(i,t);let o=t.length;e.forEach(Hh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,kh(i,e[l]);const a=N_.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Hh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function kh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Mn extends ye{constructor(t=new Ke([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,M=e.bevelSize!==void 0?e.bevelSize:m-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:j_;let w,_=!1,R,y,E,A;d&&(w=d.getSpacedPoints(u),_=!0,p=!1,R=d.computeFrenetFrames(u,!1),y=new q,E=new q,A=new q),p||(g=0,m=0,M=0,x=0);const v=a.extractPoints(h);let S=v.shape;const T=v.holes;if(!ur.isClockWise(S)){S=S.reverse();for(let Y=0,K=T.length;Y<K;Y++){const N=T[Y];ur.isClockWise(N)&&(T[Y]=N.reverse())}}const U=ur.triangulateShape(S,T),V=S;for(let Y=0,K=T.length;Y<K;Y++){const N=T[Y];S=S.concat(N)}function H(Y,K,N){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(K,N)}const W=S.length,Z=U.length;function X(Y,K,N){let vt,ut,yt;const mt=Y.x-K.x,At=Y.y-K.y,St=N.x-Y.x,O=N.y-Y.y,L=mt*mt+At*At,it=mt*O-At*St;if(Math.abs(it)>Number.EPSILON){const ht=Math.sqrt(L),Mt=Math.sqrt(St*St+O*O),pt=K.x-At/ht,Dt=K.y+mt/ht,Tt=N.x-O/Mt,Ft=N.y+St/Mt,at=((Tt-pt)*O-(Ft-Dt)*St)/(mt*O-At*St);vt=pt+mt*at-Y.x,ut=Dt+At*at-Y.y;const Q=vt*vt+ut*ut;if(Q<=2)return new Et(vt,ut);yt=Math.sqrt(Q/2)}else{let ht=!1;mt>Number.EPSILON?St>Number.EPSILON&&(ht=!0):mt<-Number.EPSILON?St<-Number.EPSILON&&(ht=!0):Math.sign(At)===Math.sign(O)&&(ht=!0),ht?(vt=-At,ut=mt,yt=Math.sqrt(L)):(vt=mt,ut=At,yt=Math.sqrt(L/2))}return new Et(vt/yt,ut/yt)}const $=[];for(let Y=0,K=V.length,N=K-1,vt=Y+1;Y<K;Y++,N++,vt++)N===K&&(N=0),vt===K&&(vt=0),$[Y]=X(V[Y],V[N],V[vt]);const rt=[];let ot,st=$.concat();for(let Y=0,K=T.length;Y<K;Y++){const N=T[Y];ot=[];for(let vt=0,ut=N.length,yt=ut-1,mt=vt+1;vt<ut;vt++,yt++,mt++)yt===ut&&(yt=0),mt===ut&&(mt=0),ot[vt]=X(N[vt],N[yt],N[mt]);rt.push(ot),st=st.concat(ot)}for(let Y=0;Y<g;Y++){const K=Y/g,N=m*Math.cos(K*Math.PI/2),vt=M*Math.sin(K*Math.PI/2)+x;for(let ut=0,yt=V.length;ut<yt;ut++){const mt=H(V[ut],$[ut],vt);G(mt.x,mt.y,-N)}for(let ut=0,yt=T.length;ut<yt;ut++){const mt=T[ut];ot=rt[ut];for(let At=0,St=mt.length;At<St;At++){const O=H(mt[At],ot[At],vt);G(O.x,O.y,-N)}}}const J=M+x;for(let Y=0;Y<W;Y++){const K=p?H(S[Y],st[Y],J):S[Y];_?(E.copy(R.normals[0]).multiplyScalar(K.x),y.copy(R.binormals[0]).multiplyScalar(K.y),A.copy(w[0]).add(E).add(y),G(A.x,A.y,A.z)):G(K.x,K.y,0)}for(let Y=1;Y<=u;Y++)for(let K=0;K<W;K++){const N=p?H(S[K],st[K],J):S[K];_?(E.copy(R.normals[Y]).multiplyScalar(N.x),y.copy(R.binormals[Y]).multiplyScalar(N.y),A.copy(w[Y]).add(E).add(y),G(A.x,A.y,A.z)):G(N.x,N.y,f/u*Y)}for(let Y=g-1;Y>=0;Y--){const K=Y/g,N=m*Math.cos(K*Math.PI/2),vt=M*Math.sin(K*Math.PI/2)+x;for(let ut=0,yt=V.length;ut<yt;ut++){const mt=H(V[ut],$[ut],vt);G(mt.x,mt.y,f+N)}for(let ut=0,yt=T.length;ut<yt;ut++){const mt=T[ut];ot=rt[ut];for(let At=0,St=mt.length;At<St;At++){const O=H(mt[At],ot[At],vt);_?G(O.x,O.y+w[u-1].y,w[u-1].x+N):G(O.x,O.y,f+N)}}}C(),P();function C(){const Y=s.length/3;if(p){let K=0,N=W*K;for(let vt=0;vt<Z;vt++){const ut=U[vt];D(ut[2]+N,ut[1]+N,ut[0]+N)}K=u+g*2,N=W*K;for(let vt=0;vt<Z;vt++){const ut=U[vt];D(ut[0]+N,ut[1]+N,ut[2]+N)}}else{for(let K=0;K<Z;K++){const N=U[K];D(N[2],N[1],N[0])}for(let K=0;K<Z;K++){const N=U[K];D(N[0]+W*u,N[1]+W*u,N[2]+W*u)}}i.addGroup(Y,s.length/3-Y,0)}function P(){const Y=s.length/3;let K=0;z(V,K),K+=V.length;for(let N=0,vt=T.length;N<vt;N++){const ut=T[N];z(ut,K),K+=ut.length}i.addGroup(Y,s.length/3-Y,1)}function z(Y,K){let N=Y.length;for(;--N>=0;){const vt=N;let ut=N-1;ut<0&&(ut=Y.length-1);for(let yt=0,mt=u+g*2;yt<mt;yt++){const At=W*yt,St=W*(yt+1),O=K+vt+At,L=K+ut+At,it=K+ut+St,ht=K+vt+St;B(O,L,it,ht)}}}function G(Y,K,N){l.push(Y),l.push(K),l.push(N)}function D(Y,K,N){k(Y),k(K),k(N);const vt=s.length/3,ut=b.generateTopUV(i,s,vt-3,vt-2,vt-1);nt(ut[0]),nt(ut[1]),nt(ut[2])}function B(Y,K,N,vt){k(Y),k(K),k(vt),k(K),k(N),k(vt);const ut=s.length/3,yt=b.generateSideWallUV(i,s,ut-6,ut-3,ut-2,ut-1);nt(yt[0]),nt(yt[1]),nt(yt[3]),nt(yt[1]),nt(yt[2]),nt(yt[3])}function k(Y){s.push(l[Y*3+0]),s.push(l[Y*3+1]),s.push(l[Y*3+2])}function nt(Y){r.push(Y.x),r.push(Y.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Q_(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new To[s.type]().fromJSON(s)),new Mn(i,t.options)}}const j_={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],u=t[s*3+1];return[new Et(r,o),new Et(a,l),new Et(h,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],u=t[i*3+1],f=t[i*3+2],p=t[s*3],m=t[s*3+1],M=t[s*3+2],x=t[r*3],g=t[r*3+1],d=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new Et(o,1-l),new Et(h,1-f),new Et(p,1-M),new Et(x,1-d)]:[new Et(a,1-l),new Et(u,1-f),new Et(m,1-M),new Et(g,1-d)]}};function Q_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hc extends cc{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hc(t.radius,t.detail)}}class vr extends ye{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],h=[],u=[];let f=t;const p=(e-t)/s,m=new q,M=new Et;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){const d=r+g/i*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),h.push(0,0,1),M.x=(m.x/e+1)/2,M.y=(m.y/e+1)/2,u.push(M.x,M.y)}f+=p}for(let x=0;x<s;x++){const g=x*(i+1);for(let d=0;d<i;d++){const b=d+g,w=b,_=b+i+1,R=b+i+2,y=b+1;a.push(w,_,y),a.push(_,R,y)}}this.setIndex(a),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vt extends ye{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let h=0;const u=[],f=new q,p=new q,m=[],M=[],x=[],g=[];for(let d=0;d<=i;d++){const b=[],w=d/i;let _=0;d===0&&o===0?_=.5/e:d===i&&l===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const y=R/e;f.x=-t*Math.cos(s+y*r)*Math.sin(o+w*a),f.y=t*Math.cos(o+w*a),f.z=t*Math.sin(s+y*r)*Math.sin(o+w*a),M.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),g.push(y+_,1-w),b.push(h++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<e;b++){const w=u[d][b+1],_=u[d][b],R=u[d+1][b],y=u[d+1][b+1];(d!==0||o>0)&&m.push(w,_,y),(d!==i-1||l<Math.PI)&&m.push(_,R,y)}this.setIndex(m),this.setAttribute("position",new te(M,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class we extends ye{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],h=[],u=new q,f=new q,p=new q;for(let m=0;m<=i;m++)for(let M=0;M<=s;M++){const x=M/s*r,g=m/i*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(x),f.y=(t+e*Math.cos(g))*Math.sin(x),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),p.subVectors(f,u).normalize(),l.push(p.x,p.y,p.z),h.push(M/s),h.push(m/i)}for(let m=1;m<=i;m++)for(let M=1;M<=s;M++){const x=(s+1)*m+M-1,g=(s+1)*(m-1)+M-1,d=(s+1)*(m-1)+M,b=(s+1)*m+M;o.push(x,g,b),o.push(g,d,b)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ri extends ye{constructor(t=new vf(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new q,l=new q,h=new Et;let u=new q;const f=[],p=[],m=[],M=[];x(),this.setIndex(M),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(p,3)),this.setAttribute("uv",new te(m,2));function x(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),b(),d()}function g(w){u=t.getPointAt(w/e,u);const _=o.normals[w],R=o.binormals[w];for(let y=0;y<=s;y++){const E=y/s*Math.PI*2,A=Math.sin(E),v=-Math.cos(E);l.x=v*_.x+A*R.x,l.y=v*_.y+A*R.y,l.z=v*_.z+A*R.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function d(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){const R=(s+1)*(w-1)+(_-1),y=(s+1)*w+(_-1),E=(s+1)*w+_,A=(s+1)*(w-1)+_;M.push(R,y,A),M.push(y,E,A)}}function b(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)h.x=w/e,h.y=_/s,m.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ri(new To[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class tx extends Wi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uc extends Yt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const va=new le,Vh=new q,Wh=new q;class Ef{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vh),Wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wh),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xh=new le,Ys=new q,ya=new q;class ex extends Ef{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ys.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ys),ya.copy(i.position),ya.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ya),i.updateMatrixWorld(),s.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Xh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh)}}class Ll extends uc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ex}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class nx extends Ef{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yh extends uc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new nx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ix extends uc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);const Af=64;function Sn(n,t,e=Af){return Number.isFinite(n)&&Number.isFinite(t)&&n>=e&&t>=e}function rn(n,t,e=0,i=0,s=Af){return Sn(n,t,s)?{w:n,h:t}:Sn(e,i,s)?{w:e,h:i}:{w:Math.max(n||0,s),h:Math.max(t||0,s)}}function Qt(n,t,e,i,s){const{w:r,h:o}=rn(i,s);return new q(n-r*.5,o*.5-t,e||0)}function Xn(n){n.traverse(t=>{t.geometry&&t.geometry.dispose();const e=t.material;if(!e)return;const i=Array.isArray(e)?e:[e];for(const s of i)s.map&&s.map.dispose(),s.dispose()})}function oi(n){for(;n.children.length;){const t=n.children[0];n.remove(t),Xn(t)}}function pe(n,t=10){const e=new ye,i=new Float32Array(n*3),s=new Float32Array(n*3);e.setAttribute("position",new Le(i,3)),e.setAttribute("color",new Le(s,3)),e.setDrawRange(0,0);const r=new sc({size:t,map:sx(),vertexColors:!0,transparent:!0,opacity:.95,blending:jt,depthWrite:!1,sizeAttenuation:!0}),o=new gf(e,r);return o.frustumCulled=!1,{points:o,geo:e,mat:r,positions:i,colors:s}}function sx(){const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(.7,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const i=new Rl(n);return i.needsUpdate=!0,i}function He(n){return[n.r/255,n.g/255,n.b/255]}function Tr(n,t,e,i,s){if(!(n!=null&&n.length)||!Sn(i,s))return;if(!Sn(t,e)){const a=Cn(n.length,i,s);for(let l=0;l<n.length;l++)n[l].x=a[l][0],n[l].y=a[l][1];return}const r=i/t,o=s/e;for(const a of n)a.x*=r,a.y*=o}function rx(n){if(!n||n.length<6)return 0;const t=n.length/3;let e=1/0,i=-1/0,s=1/0,r=-1/0;for(let o=0;o<t;o++){const a=n[o*3],l=n[o*3+1];!Number.isFinite(a)||!Number.isFinite(l)||(a<e&&(e=a),a>i&&(i=a),l<s&&(s=l),l>r&&(r=l))}return Number.isFinite(e)?Math.max(i-e,r-s):0}function Ro(n,t=48){return rx(n)>=t}function Il(n,t=48){if(!n||n.length<6)return!0;const e=n.length/3,i=new Set;for(let r=0;r<e;r++){const o=n[r*3],a=n[r*3+1];!Number.isFinite(o)||!Number.isFinite(a)||i.add(`${Math.round(o*2)/2},${Math.round(a*2)/2}`)}const s=Math.min(e,Math.max(t,Math.floor(e*.18)));return i.size<s}function Dl(n,t=48){if(!n||n.length<6||!Ro(n,t))return!0;const e=n.length/3;let i=0,s=0,r=0;for(let l=0;l<e;l++){const h=n[l*3],u=n[l*3+1];!Number.isFinite(h)||!Number.isFinite(u)||(i+=h,s+=u,r++)}if(r<2)return!0;i/=r,s/=r;let o=0;for(let l=0;l<e;l++){const h=n[l*3],u=n[l*3+1];if(!Number.isFinite(h)||!Number.isFinite(u))continue;const f=h-i,p=u-s;o=Math.max(o,f*f+p*p)}const a=t*.28;return o<a*a}function Tf(n,t,e=48){const{w:i,h:s}=rn(n,t);return Math.max(e,Math.min(i,s)*.22)}function fc(n,t,e,i,s=null){const{w:r,h:o}=rn(e,i),a=Tf(r,o),l=Math.min(t,Math.max(48,Math.floor(t*.18)));if(Ro(n,a)&&!Dl(n,a)&&!Il(n,l))return n;const u=(s||An)(t,r,o);return Ro(u,a)&&!Dl(u,a)&&!Il(u,l)?u:An(t,r,o)}function Cn(n,t,e,i=.06,s=null){({w:t,h:e}=rn(t,e));const r=Math.max(1,Math.ceil(Math.sqrt(n*(t/e)))),o=Math.max(1,Math.ceil(n/r)),a=t*i,l=e*i,h=s?s[0]:l,u=s?s[1]:e-l,f=(t-a*2)/r,p=(u-h)/o,m=[];let M=0;for(let x=0;x<o&&M<n;x++)for(let g=0;g<r&&M<n;g++,M++){const d=a+f*(g+.12+Math.random()*.76),b=h+p*(x+.12+Math.random()*.76);m.push([d,b])}return m}function yr(n,t,e,i,s=.14){const{w:r,h:o}=rn(e,i),a=new Float32Array(t*3),l=Math.max(1,n.length/3),h=Cn(t,r,o),u=Math.max(8,Math.min(r,o)/Math.ceil(Math.sqrt(t)));for(let f=0;f<t;f++){const p=Math.floor(Math.random()*l),m=n[p*3],M=n[p*3+1],x=n[p*3+2],[g,d]=h[f],b=Qt(g+m*s+(Math.random()-.5)*u*.42,d+M*s+(Math.random()-.5)*u*.42,x+(Math.random()-.5)*40,r,o);a[f*3]=b.x,a[f*3+1]=b.y,a[f*3+2]=b.z}return fc(a,t,r,o)}function An(n,t,e){const{w:i,h:s}=rn(t,e),r=new Float32Array(n*3),o=Cn(n,i,s),a=Math.max(8,Math.min(i,s)/Math.ceil(Math.sqrt(n)));for(let l=0;l<n;l++){const[h,u]=o[l],f=(Math.random()-.5)*a*.55,p=(Math.random()-.5)*a*.55,m=Qt(h+f,u+p,(Math.random()-.5)*80,i,s);r[l*3]=m.x,r[l*3+1]=m.y,r[l*3+2]=m.z}return r}function ox(n,t=36){return Math.max(n.size||0,t)}function Xi(n){for(const t of n)t.maxSize!=null&&(t.growth=1,t.phase="bloomed",t.size=t.maxSize*(.62+Math.random()*.32))}function Rr(n,t,e,i,s=null,r=36){const{w:o,h:a}=rn(e,i),l=s||An,h=n.length;if(h===0)return l(t,o,a);const u=new Float32Array(t*3);for(let f=0;f<t;f++){const p=n[f%h],m=ox(p,r),M=Qt(p.x+(Math.random()-.5)*m,p.y+(Math.random()-.5)*m,p.z+(Math.random()-.5)*Math.min(m,48),o,a);u[f*3]=M.x,u[f*3+1]=M.y,u[f*3+2]=M.z}return fc(u,t,o,a,l)}const qh=[[255,255,255],[180,195,255],[120,140,255],[255,182,220],[160,100,255],[160,255,190],[255,160,160],[200,170,90],[42,92,255],[26,72,255],[61,106,255],[48,96,255],[74,56,208],[90,64,224],[104,136,255]],Zh=[[1,1,1],[.85,.88,1],[1,.92,.96],[.75,1,.82],[1,.72,.72],[.9,.78,.4],[.16,.36,1],[.1,.28,1],[.24,.42,1],[.29,.22,.82],[.35,.25,.88],[.4,.53,1]],cs=8,yi=28,ax=.36,lx=.65,Jh=.8*lx;function cx(){const n=new Al,t=new No(-1,1,1,-1,0,1),e=new Vn({uniforms:{colorA:{value:new kt("#000510")},colorB:{value:new kt("#001830")}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 colorA;
      uniform vec3 colorB;
      varying vec2 vUv;
      void main() {
        float t = (vUv.x + (1.0 - vUv.y)) * 0.5;
        gl_FragColor = vec4(mix(colorA, colorB, clamp(t, 0.0, 1.0)), 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),i=new Pt(new Oi(2,2),e);i.frustumCulled=!1,n.add(i);let s=[],r=1,o=1,a=null,l=null,h=null,u=[],f=performance.now(),p=1500+Math.random()*2500;const m=new Yt,M=new kt;function x(){const D=document.createElement("canvas");D.width=256,D.height=32;const B=D.getContext("2d"),k=B.createLinearGradient(0,0,256,0);k.addColorStop(0,"rgba(255,255,255,0)"),k.addColorStop(.35,"rgba(242,246,255,0.55)"),k.addColorStop(.7,"rgba(255,255,255,0.9)"),k.addColorStop(1,"rgba(255,255,255,1)"),B.fillStyle=k,B.fillRect(0,0,256,32);const nt=new Rl(D);return nt.needsUpdate=!0,nt.colorSpace=Je,nt}const g=new Oi(1,1),d=new ee({map:x(),transparent:!0,opacity:1,blending:jt,depthWrite:!1,depthTest:!1,toneMapped:!1,side:ue}),b=new $t(g,d,cs);b.instanceColor=new Re(new Float32Array(cs*3),3),b.frustumCulled=!1,b.renderOrder=2,n.add(b);const w=new ee({map:d.map,transparent:!0,opacity:.35,blending:jt,depthWrite:!1,depthTest:!1,toneMapped:!1,side:ue}),_=new $t(g,w,cs);_.instanceColor=new Re(new Float32Array(cs*3),3),_.frustumCulled=!1,_.renderOrder=1,n.add(_);let R=[];const y=new Yt,E=new kt,A=new vr(.972,1,96),v=new ee({color:16777215,transparent:!0,opacity:1,blending:jt,depthWrite:!1,depthTest:!1,toneMapped:!1,side:ue}),S=new $t(A,v,yi);S.instanceColor=new Re(new Float32Array(yi*3),3),S.frustumCulled=!1,S.renderOrder=.5,n.add(S);const T=new vr(.945,1.02,96),I=new ee({color:16777215,transparent:!0,opacity:1,blending:jt,depthWrite:!1,depthTest:!1,toneMapped:!1,side:ue}),U=new $t(T,I,yi);U.instanceColor=new Re(new Float32Array(yi*3),3),U.frustumCulled=!1,U.renderOrder=.45,n.add(U);for(let D=0;D<yi;D++)y.position.set(0,0,10),y.scale.set(.001,.001,.001),y.rotation.set(0,0,0),y.updateMatrix(),S.setMatrixAt(D,y.matrix),U.setMatrixAt(D,y.matrix),S.setColorAt(D,E.setRGB(0,0,0)),U.setColorAt(D,E.setRGB(0,0,0));S.instanceMatrix.needsUpdate=!0,U.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),U.instanceColor&&(U.instanceColor.needsUpdate=!0);function V(D,B,k){const nt=B*Math.min(k,1-k),Y=K=>{const N=(K+D/30)%12;return k-nt*Math.max(Math.min(N-3,9-N,1),-1)};return[Y(0),Y(8),Y(4)]}function H(D,B){return Jh*(1-D/B)}function W(D,B){R.length>=yi&&R.shift();const k=185+Math.random()*25;R.push({x:D,y:B,r:0,maxR:90+Math.random()*70,speed:(1.5+Math.random()*.8)*60,alpha:Jh,rgb:V(k,.7,.72)})}function Z(D){y.position.set(0,0,10),y.scale.set(.001,.001,.001),y.rotation.set(0,0,0),y.updateMatrix(),S.setMatrixAt(D,y.matrix),U.setMatrixAt(D,y.matrix),S.setColorAt(D,E.setRGB(0,0,0)),U.setColorAt(D,E.setRGB(0,0,0))}function X(D){if(!(r<2||o<2)){Math.random()<ax*D&&W(Math.random()*r,Math.random()*o);for(let B=R.length-1;B>=0;B--){const k=R[B];k.r+=k.speed*D,k.alpha=H(k.r,k.maxR),(k.r>=k.maxR||k.alpha<=0)&&R.splice(B,1)}for(let B=0;B<yi;B++){const k=R[B];if(!k||k.r<1){Z(B);continue}const nt=rt(k.x,k.y),Y=k.r/r*2,K=k.r/o*2,N=Math.max(0,k.alpha),[vt,ut,yt]=k.rgb;y.position.set(nt.x,nt.y,0),y.rotation.set(0,0,0),y.scale.set(Math.max(Y,.001),Math.max(K,.001),1),y.updateMatrix(),S.setMatrixAt(B,y.matrix),S.setColorAt(B,E.setRGB(vt*N*.36,ut*N*.36,yt*N*.36)),y.updateMatrix(),U.setMatrixAt(B,y.matrix),U.setColorAt(B,E.setRGB(vt*N*.09,ut*N*.09,yt*N*.09))}S.instanceMatrix.needsUpdate=!0,U.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),U.instanceColor&&(U.instanceColor.needsUpdate=!0)}}function $(){const D=document.createElement("canvas");D.width=D.height=64;const B=D.getContext("2d");B.fillStyle="#ffffff",B.fillRect(24,24,16,16);const k=new Rl(D);return k.needsUpdate=!0,k.colorSpace=Je,k}function rt(D,B){return{x:D/r*2-1,y:1-B/o*2}}function ot(D=!1){if(u.length>=cs)return;const B=Math.random()<.5;let k,nt;B?(k=-150,nt=Math.random()*o*.4):(k=Math.random()*r*.5,nt=-150);const Y=(18+Math.random()*22)*Math.PI/180,K=(D?24:14)+Math.random()*6,N=Zh[Math.floor(Math.random()*Zh.length)];u.push({x:k,y:nt,vx:Math.cos(Y)*K,vy:Math.sin(Y)*K,speed:K,angle:Y,length:(D?380:120)+Math.random()*120,width:(D?3:1)+Math.random()*.8,alpha:0,fadeSpeed:D?.28:.18,targetAlpha:(D?.45:.52)+Math.random()*.12,maxLife:(D?45:20)+Math.random()*15,life:0,tint:N})}function st(D){const B=Math.max(D*60,.001),k=performance.now();k-f>=p&&(ot(),f=k,p=4e3+Math.random()*9e3);for(let nt=u.length-1;nt>=0;nt--){const Y=u[nt];Y.x+=Y.vx*B,Y.y+=Y.vy*B,Y.life+=B,Y.life>Y.maxLife*.6?Y.alpha=Y.targetAlpha*(1-(Y.life-Y.maxLife*.6)/(Y.maxLife*.4)):Y.alpha<Y.targetAlpha&&(Y.alpha=Math.min(Y.targetAlpha,Y.alpha+Y.fadeSpeed*B)),(Y.life>=Y.maxLife||Y.x<-Y.length||Y.x>r+Y.length||Y.y<-Y.length||Y.y>o+Y.length)&&u.splice(nt,1)}for(let nt=0;nt<cs;nt++){const Y=u[nt];if(!Y){m.position.set(0,0,10),m.scale.set(.001,.001,.001),m.rotation.set(0,0,0),m.updateMatrix(),b.setMatrixAt(nt,m.matrix),_.setMatrixAt(nt,m.matrix),b.setColorAt(nt,M.setRGB(0,0,0)),_.setColorAt(nt,M.setRGB(0,0,0));continue}const K=Y.x-Y.vx*(Y.length/Y.speed),N=Y.y-Y.vy*(Y.length/Y.speed),vt=(Y.x+K)*.5,ut=(Y.y+N)*.5,yt=rt(Y.x,Y.y),mt=rt(K,N),At=rt(vt,ut),St=yt.x-mt.x,O=yt.y-mt.y,L=Math.sqrt(St*St+O*O)||.001,it=Math.atan2(O,St),ht=Y.width/o*2,Mt=Math.max(0,Y.alpha),[pt,Dt,Tt]=Y.tint||[1,1,1];m.position.set(At.x,At.y,0),m.rotation.set(0,0,it),m.scale.set(L,Math.max(ht,.002),1),m.updateMatrix(),b.setMatrixAt(nt,m.matrix),b.setColorAt(nt,M.setRGB(Mt*pt,Mt*Dt,Mt*Tt)),m.scale.set(L,Math.max(ht*1.5,.003),1),m.updateMatrix(),_.setMatrixAt(nt,m.matrix),_.setColorAt(nt,M.setRGB(Mt*.35*pt,Mt*.35*Dt,Mt*.4*Tt))}b.instanceMatrix.needsUpdate=!0,_.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0),_.instanceColor&&(_.instanceColor.needsUpdate=!0)}function J(D,B){var K;r=Math.max(1,D),o=Math.max(1,B),a&&(n.remove(a),a.geometry.dispose(),(K=a.material.map)==null||K.dispose(),a.material.dispose(),a=null);const k=Math.max(120,Math.floor(r*o/1800));s=[];for(let N=0;N<k;N++){const vt=qh[Math.floor(Math.random()*qh.length)];s.push({x:Math.random()*r,y:Math.random()*o,size:.4+Math.random()*2,baseAlpha:.25+Math.random()*.65,twinkleSpeed:.004+Math.random()*.014,phase:Math.random()*Math.PI*2,rgb:vt})}l=new Float32Array(k*3),h=new Float32Array(k*3);const nt=new ye;nt.setAttribute("position",new Le(l,3)),nt.setAttribute("color",new Le(h,3));const Y=new sc({size:3.5,map:$(),vertexColors:!0,transparent:!0,opacity:1,blending:jt,depthWrite:!1,depthTest:!1,sizeAttenuation:!1,fog:!1,toneMapped:!1});a=new gf(nt,Y),a.frustumCulled=!1,a.renderOrder=0,n.add(a),C(0,null),R=[];for(let N=0;N<3;N++){W(Math.random()*r,Math.random()*o);const vt=R[R.length-1];vt.r=Math.random()*40,vt.alpha=H(vt.r,vt.maxR)}}function C(D,B){if(!a||!s.length)return;const k=r*.5,nt=o*.5,Y=B&&(B.velocity>.4||B.isDown),K=Y?(B.x-k)/Math.max(k,1):0,N=Y?(B.y-nt)/Math.max(nt,1):0;for(let vt=0;vt<s.length;vt++){const ut=s[vt];ut.phase+=ut.twinkleSpeed*(D*60||1);const yt=Math.sin(ut.phase),mt=Math.max(.15,ut.baseAlpha+yt*.22),At=K*-18*(ut.size/2),St=N*-18*(ut.size/2),O=rt(ut.x+At,ut.y+St);l[vt*3]=O.x,l[vt*3+1]=O.y,l[vt*3+2]=0,h[vt*3]=ut.rgb[0]/255*mt,h[vt*3+1]=ut.rgb[1]/255*mt,h[vt*3+2]=ut.rgb[2]/255*mt}a.geometry.attributes.position.needsUpdate=!0,a.geometry.attributes.color.needsUpdate=!0,a.material.size=Math.max(2.5,Math.min(5.5,2.2*(window.devicePixelRatio||1)))}function P(D,B,k,nt){(k!==r||nt!==o||!a)&&J(k,nt),C(D,B),st(D),X(D)}function z(D){D.render(n,t)}function G(){var D,B;a&&(n.remove(a),a.geometry.dispose(),(D=a.material.map)==null||D.dispose(),a.material.dispose(),a=null),n.remove(b,_,i,S,U),g.dispose(),(B=d.map)==null||B.dispose(),d.dispose(),w.dispose(),A.dispose(),T.dispose(),v.dispose(),I.dispose(),i.geometry.dispose(),e.dispose(),R=[]}return{bgColor:1296,resize(D,B){J(D,B)},update:P,render:z,dispose:G}}function hx(){return{x:0,y:0,prevX:0,prevY:0,isDown:!1,velocity:0}}function ux(n,t,e){const i=(s,r,o=!1)=>{if(o){t.prevX=s,t.prevY=r,t.x=s,t.y=r,t.velocity=0;return}t.prevX=t.x,t.prevY=t.y,t.x=s,t.y=r;const a=s-t.prevX,l=r-t.prevY;t.velocity=Math.sqrt(a*a+l*l)};n.addEventListener("mousemove",s=>{var r;i(s.clientX,s.clientY),(r=e.onPointerMove)==null||r.call(e,s.clientX,s.clientY,t)}),n.addEventListener("mousedown",s=>{var r;t.isDown=!0,i(s.clientX,s.clientY,!0),(r=e.onPointerDown)==null||r.call(e,s.clientX,s.clientY,t)}),window.addEventListener("mouseup",()=>{var s;t.isDown=!1,(s=e.onPointerUp)==null||s.call(e,t)}),n.addEventListener("touchstart",s=>{var o;s.preventDefault();const r=s.touches[0];t.isDown=!0,i(r.clientX,r.clientY,!0),(o=e.onPointerDown)==null||o.call(e,r.clientX,r.clientY,t)},{passive:!1}),n.addEventListener("touchmove",s=>{var o;s.preventDefault();const r=s.touches[0];i(r.clientX,r.clientY),(o=e.onPointerMove)==null||o.call(e,r.clientX,r.clientY,t)},{passive:!1}),n.addEventListener("touchend",s=>{var r;s.preventDefault(),t.isDown=!1,(r=e.onPointerUp)==null||r.call(e,t)},{passive:!1}),n.addEventListener("touchcancel",s=>{var r;s.preventDefault(),t.isDown=!1,(r=e.onPointerUp)==null||r.call(e,t)},{passive:!1})}function Sa(n){return n&&{...n,velocity:0,prevX:n.x,prevY:n.y}}class fx{constructor(t){this.canvas=t,this.renderer=new v_({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setClearColor(1296,1),this.renderer.autoClear=!1,this.renderer.outputColorSpace=Je,this.scene=new Al,this.scene.fog=new nc(1296,7e-4),this.camera=new nn(55,1,1,5e3),this.starfield=cx(),this.layer=new fe,this.scene.add(this.layer),this._bgColor=this.starfield.bgColor,this._forceClear=!0,this._fadeCamera=new No(-1,1,1,-1,0,1),this._fadeScene=new Al,this._fadeMaterial=new ee({color:this._bgColor,transparent:!0,opacity:.15,depthTest:!1,depthWrite:!1}),this._fadeScene.add(new Pt(new Oi(2,2),this._fadeMaterial));const e=new ix(9480408,.55),i=new Ll(16777215,1.6,3200);i.position.set(160,240,480);const s=new Yh(11061503,.85);s.position.set(-280,120,260);const r=new Yh(6987007,.55);r.position.set(80,-40,-320),this.scene.add(e,i,s,r),this.activePreset=null,this.running=!1,this.lastTime=0,this.frameCount=0,this._elapsed=0,this.fps=60,this._fpsTimer=0,this._fpsFrames=0,this.pointer=hx(),this.params={particleCount:1030,particleSize:15,speed:2.6,trail:.49,gravity:0,palette:"rainbow"},this.audioData={volume:0,bass:0,mid:0,treble:0,isActive:!1,frequencyData:null,waveformData:null},this.width=0,this.height=0,this._lastGoodWidth=0,this._lastGoodHeight=0,this._resizePending=!1,this._resize(),this._bindEvents()}_readViewportSize(){const t=window.visualViewport,e=Math.round((t==null?void 0:t.width)??window.innerWidth),i=Math.round((t==null?void 0:t.height)??window.innerHeight);return{w:e,h:i}}_applyViewportSize(t,e){return t<64||e<64?this._lastGoodWidth>=64&&this._lastGoodHeight>=64?{w:this._lastGoodWidth,h:this._lastGoodHeight,applied:!1}:{w:0,h:0,applied:!1}:(this._lastGoodWidth=t,this._lastGoodHeight=e,this.pointer.x===0&&this.pointer.y===0&&(this.pointer.x=t*.5,this.pointer.y=e*.5,this.pointer.prevX=this.pointer.x,this.pointer.prevY=this.pointer.y),{w:t,h:e,applied:!0})}_fitCamera(){const t=ap.degToRad(this.camera.fov);this.camera.position.set(0,0,this.height/(2*Math.tan(t/2))),this.camera.lookAt(0,0,0)}_resize(){var o,a,l,h;const t=this._readViewportSize(),{w:e,h:i,applied:s}=this._applyViewportSize(t.w,t.h);if(!s&&(e<64||i<64)){this._resizePending=!0;return}this._resizePending=!1;const r=Math.min(window.devicePixelRatio||1,2);this.width=e,this.height=i,this.renderer.setPixelRatio(r),this.renderer.setSize(this.width,this.height,!1),this.camera.aspect=this.width/Math.max(this.height,1),this.camera.updateProjectionMatrix(),this._fitCamera(),this._forceClear=!0,(a=(o=this.starfield)==null?void 0:o.resize)==null||a.call(o,this.width,this.height),(h=(l=this.activePreset)==null?void 0:l.resize)==null||h.call(l,this.width,this.height)}_bindEvents(){var i;let t;const e=()=>{clearTimeout(t),t=setTimeout(()=>this._resize(),100)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e),(i=window.visualViewport)==null||i.addEventListener("resize",e),ux(this.canvas,this.pointer,{onPointerMove:(s,r,o)=>{var a,l;(l=(a=this.activePreset)==null?void 0:a.onPointerMove)==null||l.call(a,s,r,o)},onPointerDown:(s,r,o)=>{var a,l;(l=(a=this.activePreset)==null?void 0:a.onPointerDown)==null||l.call(a,s,r,o)},onPointerUp:s=>{var r,o;(o=(r=this.activePreset)==null?void 0:r.onPointerUp)==null||o.call(r,s)}})}setPreset(t){var e,i;(e=this.activePreset)!=null&&e.destroy&&this.activePreset.destroy(),oi(this.layer),this._forceClear=!0,this.activePreset=t,(i=this.activePreset)!=null&&i.init&&this.activePreset.init(this.width,this.height,this.params,this.layer)}setParams(t){var e,i;Object.assign(this.params,t),(i=(e=this.activePreset)==null?void 0:e.setParams)==null||i.call(e,this.params)}setAudioData(t){this.audioData=t}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this._loop())}stop(){this.running=!1}_loop(){var i,s,r,o,a;if(!this.running)return;const t=performance.now(),e=Math.min((t-this.lastTime)/1e3,.05);if(this.lastTime=t,this._elapsed+=e,this._fpsFrames++,this._fpsTimer+=e,this._fpsTimer>=.5&&(this.fps=Math.round(this._fpsFrames/this._fpsTimer),this._fpsFrames=0,this._fpsTimer=0),this._resizePending){const l=this._readViewportSize(),{applied:h}=this._applyViewportSize(l.w,l.h);h&&this._resize()}(i=this.activePreset)!=null&&i.noLayerRotation?this.layer.rotation.set(0,0,0):(this.layer.rotation.y=Math.sin(this._elapsed*.17)*.28,this.layer.rotation.x=Math.sin(this._elapsed*.11)*.1),(r=(s=this.starfield)==null?void 0:s.update)==null||r.call(s,e,this.pointer,this.width,this.height),this.activePreset&&(this.activePreset.update(e,this.pointer,this.audioData,this.params),(a=(o=this.activePreset).render)==null||a.call(o,this.layer,this.width,this.height,this.params)),this._renderWithTrail(),this.frameCount++,requestAnimationFrame(()=>this._loop())}_renderWithTrail(){var i,s;const e=1-(this.params.trail??0);this._forceClear||e>=.999?(this.renderer.setClearColor(this._bgColor,1),this.renderer.clear(!0,!0,!0),this._forceClear=!1):(this.renderer.clearDepth(),e>.001&&(this._fadeMaterial.opacity=e,this.renderer.render(this._fadeScene,this._fadeCamera))),(s=(i=this.starfield)==null?void 0:i.render)==null||s.call(i,this.renderer),this.renderer.clearDepth(),this.renderer.render(this.scene,this.camera)}}const Kh={rainbow:["#f850ec","#2a5cff","#26f4b0","#3d6aff","#7a48e8","#f820b8","#30ec70","#f83058","#1a48ff","#2458ff","#2e68ff","#3868ff","#4a78ff","#1e40f0","#3060ff","#4870ff","#5878ff","#6888ff","#3a28c0","#4a38d0","#5a40e0","#6a48e8","#2a20a8","#4830c8"],clockRainbow:["#ff2a4a","#ff6a00","#ffd400","#2ee86a","#00d8ff","#3d6aff","#8b4dff","#ff2bd6"],cyberNeon:["#f850ec","#2a5cff","#26f4b0","#3d6aff","#7a48e8","#f820b8","#30ec70","#f83058","#1a48ff","#2458ff","#2e68ff","#3868ff","#4a78ff","#1e40f0","#3060ff","#4870ff","#5878ff","#6888ff","#3a28c0","#4a38d0","#5a40e0","#6a48e8","#2a20a8","#4830c8"],midnight:["#2a5cff","#1a48ff","#3d6aff","#4a38d0","#3060ff","#5a40e0"],silver:["#c8d0f8","#a0a8e8","#b8c0f0","#989fe0","#d0d8ff"],atmosphere:["#2a5cff","#1a48ff","#3d6aff","#4870ff","#3060ff"],sakura:["#f870b8","#f888c8","#28ec80","#68f4ac","#f850ac"],nebula:["#6a48e8","#4a38d0","#3a28c0","#8a60f0","#5a40e0"],crystal:["#2a5cff","#1a48ff","#3d6aff","#4870ff","#6888ff"],amber:["#f0b818","#f0a400","#f08018","#f06010","#f0c830"],shiny:["#f838ec","#b808f8","#ec80e0","#f860f0","#f828cc"]};function Be(n){return Kh[n]||Kh.rainbow}function Ee(n){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:{r:94,g:187,b:255}}function Gi(n,t=.07){const e=Math.max(n.r,n.g,n.b),i=Math.min(n.r,n.g,n.b),s=(e+i)*.5;return{r:Math.min(255,Math.max(0,Math.round(s+(n.r-s)*(1+t)))),g:Math.min(255,Math.max(0,Math.round(s+(n.g-s)*(1+t)))),b:Math.min(255,Math.max(0,Math.round(s+(n.b-s)*(1+t))))}}function dc(n){const t=Math.max(n.r,n.g,n.b),e=Math.min(n.r,n.g,n.b);if((t===0?0:(t-e)/t)>.35&&t>80)return n.b>n.r&&n.b>n.g?{r:Math.min(255,Math.round(n.r*.95)),g:Math.min(255,Math.round(n.g*.72)),b:Math.min(255,Math.round(n.b*1.08+8))}:Gi(n,.05);const s=Math.min(255,Math.round(n.b*1.08+16));return{r:Math.min(Math.round(n.r*.7),Math.round(s*.55)),g:Math.min(Math.round(n.g*.55),Math.round(s*.4)),b:s}}function dx(n){const t=Math.max(n.r,n.g,n.b),e=Math.min(n.r,n.g,n.b);return(t===0?0:(t-e)/t)>.35&&t>80?n.b>n.r&&n.b>n.g?{r:Math.min(255,Math.round(n.r*.92)),g:Math.min(255,Math.round(n.g*.78)),b:Math.min(255,Math.round(n.b*1.12+10))}:Gi(n,.04):Gi(n,.06)}function Rf(n){const t=dc(n),e=Gi(t,.05);return{r:Math.min(255,Math.round(e.r*1.06+5)),g:Math.min(255,Math.round(e.g*1.05+3)),b:Math.min(255,Math.round(e.b*1.06+5))}}function Cf(n){return Gi(dx(n),.14)}function px(n){const t=dc(n);return{r:Math.min(255,t.r+18),g:Math.min(255,t.g+14),b:Math.min(255,t.b+18)}}function Pf(n){const t=Cf(n);return{r:Math.min(255,t.r+18),g:Math.min(255,t.g+14),b:Math.min(255,t.b+18)}}function Rs(n,t=1.15){return{r:Math.min(255,Math.round(n.r*t)),g:Math.min(255,Math.round(n.g*t)),b:Math.min(255,Math.round(n.b*t))}}function ba(n,t=1){const e=Gi(dc(n),.03);return{r:Math.min(1,e.r/255*t),g:Math.min(1,e.g/255*t),b:Math.min(1,e.b/255*t)}}function Di(n,t=1){const e=Gi(n,.08);return{r:Math.min(1,e.r/255*t),g:Math.min(1,e.g/255*t),b:Math.min(1,e.b/255*t)}}function pc(n){const t=Be(n).filter(r=>{const{r:o,g:a,b:l}=Ee(r),h=o>230&&a>230&&l>230,u=o>220&&a>210&&l>180&&Math.min(o,a,l)>170;return!h&&!u}),e=t.length?t:Be(n),i=[];for(const r of e){const{r:o,g:a,b:l}=Ee(r),h=o>150&&a>110&&l<150&&o+a>l*2.4,u=l>200&&a<140&&o<120&&l>a*1.5,f=l>160&&o>40&&o<140&&a<o*.9&&l>o,p=l>150&&a>l*.7&&a>o,m=u||f?6:p||h?1:2;for(let M=0;M<m;M++)i.push(r)}const s=i.length?i:e;return s[Math.floor(Math.random()*s.length)]}function mc(n,t=Rf){const e=Be(n);return t(Ee(e[Math.floor(Math.random()*e.length)]))}function mx(n){return Rf(Ee(n))}function Lf(n){return Cf(Ee(n))}function If(){const n=Math.random();return n<.1?58+Math.random()*42:n<.28?40+Math.random()*22:20+Math.random()*24}function gx(){const n=Math.random();return n<.1?58+Math.random()*42:n<.28?40+Math.random()*22:22+Math.random()*26}function Mx(){const n=Math.random();return n<.1?58+Math.random()*42:n<.28?40+Math.random()*22:20+Math.random()*24}function _x(){const n=Math.random();return n<.12?68+Math.random()*30:n<.35?44+Math.random()*20:30+Math.random()*16}function xx(){return Math.random()<.28?32+Math.random()*16:19+Math.random()*20}function vx(){return If()*.58}function Df(n,t=90){const e=new Float32Array(n*3),i=6;for(let s=0;s<n;s++){const o=s%i/i*Math.PI*2,a=Math.random(),l=Math.pow(a,.65),h=Math.sin(Math.PI*l)*(.22+Math.random()*.12),u=(Math.random()-.5)*2,f=l*t,p=Math.sin(o)*f+Math.cos(o)*u*h*t,m=Math.cos(o)*f-Math.sin(o)*u*h*t,M=(Math.random()-.5)*18*(1-l);e[s*3]=p,e[s*3+1]=m,e[s*3+2]=M}return e}function Uf(n,t=130){const e=new Float32Array(n*3);for(let i=0;i<n;i++)if(i<n*.25){const s=Math.random()*Math.PI*2,r=(Math.random()-.5)*t*.7,o=8+Math.random()*14;e[i*3]=Math.cos(s)*o,e[i*3+1]=r,e[i*3+2]=Math.sin(s)*o*.5}else{const s=Math.random()<.5?-1:1,r=Math.random(),o=Math.sin(r*Math.PI)*t*(.35+Math.random()*.35);e[i*3]=s*(t*.12+r*t*.7),e[i*3+1]=(Math.random()-.5)*o*.9+t*.1,e[i*3+2]=(Math.random()-.5)*20-r*10}return e}function yx(){let n=[],t=[],e=[],i=0,s=0,r=0,o="rainbow",a=null,l=null,h=null,u=null,f=null;const p=new Yt,m=new kt,M=64,x=8,g=M*x,d=1.22,b=2.3,w=.85;class _{constructor(E,A,v){this.x=E,this.y=A,this.z=(Math.random()-.5)*160,this.petalCount=5+Math.floor(Math.random()*4),this.maxSize=18+Math.random()*28,this.size=0,this.growth=0,this.growthRate=(.4+Math.random()*.6)*d,this.rotation=Math.random()*Math.PI*2,this.rotSpeed=(Math.random()-.5)*.3,this.tilt=(Math.random()-.5)*.7,this.windPhase=Math.random()*Math.PI*2,this.windSpeed=.7+Math.random()*.55,this.windAmp=.12+Math.random()*.1,this.color=pc(v),this.rgb=mx(this.color),this.lifetime=0,this.maxLifetime=3.5+Math.random()*4,this.phase="growing",this.opacity=1,this.innerRgb=px(this.rgb),this.bloomedAt=null}_canShedParticles(){return this.bloomedAt==null?!1:this.lifetime-this.bloomedAt>=w}update(E){switch(this.lifetime+=E,this.rotation+=this.rotSpeed*E,this.phase){case"growing":this.growth=Math.min(1,this.growth+this.growthRate*E),this.size=this.maxSize*this._easeOutBack(this.growth),this.growth>=1&&(this.phase="bloomed",this.bloomedAt=this.lifetime);break;case"bloomed":this.bloomedAt==null&&(this.bloomedAt=this.lifetime),this._canShedParticles()&&Math.random()<E*2.4&&this._shedDust(),this.lifetime>this.maxLifetime*.5&&(this.phase="wilting");break;case"wilting":this.opacity-=E*.28,this._canShedParticles()&&Math.random()<E*5.6&&this._shedPetal(),this._canShedParticles()&&Math.random()<E*7.5&&this._shedDust();break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_easeOutBack(E){return 1+2.70158*Math.pow(E-1,3)+1.70158*Math.pow(E-1,2)}_shedPetal(){const E=2+Math.floor(Math.random()*3);for(let A=0;A<E;A++)t.push({x:this.x+(Math.random()-.5)*this.size*1.2,y:this.y+(Math.random()-.5)*this.size*1.2,z:this.z+(Math.random()-.5)*40,vx:(Math.random()-.5)*70,vy:-20-Math.random()*45,vz:(Math.random()-.5)*45,size:this.size*.18+Math.random()*8,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*6,color:this.color,rgb:Rs(this.rgb,1.2),opacity:1,glow:1.45+Math.random()*.3,kind:"petal"})}_shedDust(){const E=3+Math.floor(Math.random()*4);for(let A=0;A<E;A++)t.push({x:this.x+(Math.random()-.5)*this.size*.6,y:this.y+(Math.random()-.5)*this.size*.6,z:this.z+(Math.random()-.5)*30,vx:(Math.random()-.5)*90,vy:(Math.random()-.5)*90-10,vz:(Math.random()-.5)*60,size:2+Math.random()*5,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*8,color:this.color,rgb:Rs(this.innerRgb||this.rgb,1.25),opacity:1,glow:1.55+Math.random()*.35,kind:"dust"})}}function R(){if(!l)return;const y=Math.min(n.length,M);let E=0;for(let A=0;A<M;A++){const v=A<y?n[A]:null,S=v?Qt(v.x,v.y,v.z,i,s):null;for(let T=0;T<x;T++){if(!v||T>=v.petalCount||v.size<.5)p.position.set(0,0,-4e3),p.scale.set(.001,.001,.001);else{const I=Math.sin(r*v.windSpeed+v.windPhase),U=Math.sin(r*v.windSpeed*1.37+v.windPhase*1.2),V=I*v.windAmp,H=U*v.windAmp*.85,W=Math.sin(r*v.windSpeed*1.8+v.windPhase+T*.9)*v.windAmp*.9,Z=T/v.petalCount*Math.PI*2+v.rotation;p.position.copy(S),p.position.x+=V*v.size*.22,p.position.z+=H*v.size*.16,p.rotation.set(v.tilt+V*1.6+W,Z+H*.55,Math.PI*.35+W*1.1),p.translateY(v.size*.45),p.scale.set(v.size*.42,v.size*(.95+W*.18),1)}if(p.updateMatrix(),l.setMatrixAt(E,p.matrix),v){const I=ba(v.rgb,.75+v.opacity*.45);l.setColorAt(E,m.setRGB(I.r,I.g,I.b))}else l.setColorAt(E,m.setRGB(0,0,0));E++}if(v&&h){const T=Math.sin(r*v.windSpeed+v.windPhase),I=Math.sin(r*v.windSpeed*1.37+v.windPhase*1.2);p.position.copy(S),p.position.x+=T*v.windAmp*v.size*.16,p.position.z+=I*v.windAmp*v.size*.12,p.rotation.set(T*v.windAmp*1.1,0,I*v.windAmp*.8),p.scale.setScalar(Math.max(v.size*.18,.01)),p.updateMatrix(),h.setMatrixAt(A,p.matrix);const U=ba(v.rgb,.65);h.setColorAt(A,m.setRGB(U.r*.82,U.g*.7,U.b))}else h&&(p.position.set(0,0,-4e3),p.scale.setScalar(.001),p.updateMatrix(),h.setMatrixAt(A,p.matrix))}if(l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),h&&(h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0)),u&&(e.forEach((A,v)=>{const S=Qt(A.x,A.y,A.z,i,s);u.positions[v*3]=S.x,u.positions[v*3+1]=S.y,u.positions[v*3+2]=S.z;const T=.25+.3*Math.abs(Math.sin(r*2.8+A.phase)),I=ba(A.rgb,T);u.colors[v*3]=I.r,u.colors[v*3+1]=I.g,u.colors[v*3+2]=I.b}),u.geo.setDrawRange(0,e.length),u.geo.attributes.position.needsUpdate=!0,u.geo.attributes.color.needsUpdate=!0),f){const A=Math.min(t.length,900);for(let v=0;v<A;v++){const S=t[v],T=Qt(S.x,S.y,S.z,i,s);f.positions[v*3]=T.x,f.positions[v*3+1]=T.y,f.positions[v*3+2]=T.z;const[I,U,V]=He(S.rgb),H=(S.glow||1.4)*(.5+S.opacity*.55),W=S.kind==="dust"?.9+.1*Math.sin(r*8+S.rot*3):1;f.colors[v*3]=Math.min(1,I*H*W),f.colors[v*3+1]=Math.min(1,U*H*W),f.colors[v*3+2]=Math.min(1,V*H*W)}f.geo.setDrawRange(0,A),f.geo.attributes.position.needsUpdate=!0,f.geo.attributes.color.needsUpdate=!0}}return{init(y,E,A,v){i=y,s=E,o=A.palette||"rainbow",n=[],t=[],e=[],r=0,a=v;const S=new lc(.55,10);S.translate(0,.45,0);const T=new ee({color:16777215,transparent:!0,opacity:.9,side:ue,depthWrite:!1,blending:jt});l=new $t(S,T,g),l.instanceColor=new Re(new Float32Array(g*3),3),l.frustumCulled=!1,a.add(l);const I=new Vt(1,8,8),U=new ee({color:16777215,transparent:!0,opacity:.62,depthWrite:!1,blending:jt});h=new $t(I,U,M),h.instanceColor=new Re(new Float32Array(M*3),3),h.frustumCulled=!1,a.add(h),u=pe(160,6),f=pe(900,18),f.mat.opacity=1,a.add(u.points,f.points);for(const[V,H]of Cn(20,y,E))n.push(new _(V,H,o));Xi(n),R();for(let V=0;V<120;V++)e.push({x:Math.random()*y,y:Math.random()*E,z:(Math.random()-.5)*220,size:.5+Math.random()*1.8,speedY:-(.08+Math.random()*.25),phase:Math.random()*Math.PI*2,rgb:mc(o)})},resize(y,E){Tr(n,i,s,y,E),i=y,s=E},update(y,E,A,v){if(r+=y,o=v.palette,n=n.filter(T=>T.update(y)),E.velocity>3){const T=Math.min(2,Math.floor(E.velocity/16)+1);for(let I=0;I<T;I++)n.push(new _(E.x+(Math.random()-.5)*50,E.y+(Math.random()-.5)*50,o))}if(Math.random()<y*b*v.speed&&n.push(new _(Math.random()*i,Math.random()*s,o)),A.isActive&&A.bass>.3){const T=Math.floor(A.bass*4);for(let I=0;I<T;I++)n.push(new _(Math.random()*i,Math.random()*s,o))}t=t.filter(T=>{T.x+=T.vx*y,T.y+=T.vy*y,T.z+=T.vz*y,T.vy+=18*y,T.vx+=Math.sin(r*2.5+T.x*.008)*18*y,T.vz+=Math.cos(r*2.2+T.y*.01)*12*y,T.rot+=T.rotSpeed*y;const I=T.kind==="dust"?.14:.1;return T.opacity-=y*I,T.glow=Math.max(1.2,(T.glow||1.4)-y*.08),T.opacity>.02&&T.y<s+80}),e.forEach(T=>{T.y+=T.speedY*v.speed*72*y,T.x+=Math.sin(r*1.5+T.phase)*.25,T.y<-10&&(T.y=s+10,T.x=Math.random()*i)});const S=Math.min(M,Math.max(20,Math.floor(v.particleCount/4)));n.length>S&&n.splice(0,n.length-S),t.length>900&&t.splice(0,t.length-900)},render(){R(),l&&(l.material.opacity=.88)},onPointerDown(y,E){for(let A=0;A<6;A++)n.push(new _(y+(Math.random()-.5)*90,E+(Math.random()-.5)*90,o))},onPointerMove(){},onPointerUp(){},samplePoints(y,E=i,A=s){const{w:v,h:S}=rn(E,A,i,s);return Rr(n,y,v,S,(I,U,V)=>yr(Df(I,95),I,U,V,.12))},setParams(y){o=y.palette},destroy(){n=[],t=[],e=[],l=null,h=null,u=null,f=null,a=null}}}function ei(n){const t=Math.sin(n*127.1)*43758.5453;return t-Math.floor(t)}function hs(n,t,e){const i=Math.floor(n),s=Math.floor(t),r=Math.floor(e),o=n-i,a=t-s,l=e-r,h=o*o*(3-2*o),u=a*a*(3-2*a),f=l*l*(3-2*l),p=ei(i+s*57+r*113),m=ei(i+1+s*57+r*113),M=ei(i+(s+1)*57+r*113),x=ei(i+1+(s+1)*57+r*113),g=ei(i+s*57+(r+1)*113),d=ei(i+1+s*57+(r+1)*113),b=ei(i+(s+1)*57+(r+1)*113),w=ei(i+1+(s+1)*57+(r+1)*113),_=p*(1-h)+m*h,R=M*(1-h)+x*h,y=g*(1-h)+d*h,E=b*(1-h)+w*h,A=_*(1-u)+R*u,v=y*(1-u)+E*u;return A*(1-f)+v*f}function Sx(n,t,e,i){const r=hs(n,t+.15,e+i),o=hs(n,t-.15,e+i),a=hs(n+.15,t,e+i),l=hs(n-.15,t,e+i),h=hs(n+i*.3,t,e+.15),u=hs(n+i*.3,t,e-.15);return{x:r-o-(h-u),y:h-u-(a-l),z:a-l-(r-o)}}function bx(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function wx(n,t,e,i,s,r="swarm"){if(!t||!e||t.length!==n.length||e.length!==n.length)return;const o=n.length/3,a=Math.min(1,Math.max(0,i)),l=bx(a),h=1-Math.abs(a-.5)*2;let u=h*28;r==="burst"&&(u=h*55),r==="trail"&&(u=h*18);for(let f=0;f<o;f++){const p=f*3,m=t[p],M=t[p+1],x=t[p+2],g=e[p],d=e[p+1],b=e[p+2],w=m+(g-m)*l,_=M+(d-M)*l,R=x+(b-x)*l,y=Sx(w*.02+f*.001,_*.02,R*.02,s*.35);let E=y.x*u,A=y.y*u,v=y.z*u;if(r==="trail")A+=Math.sin(s*2+f*.05)*h*8,E+=(g-m)*h*.08;else if(r==="burst"){const S=Math.sqrt(w*w+_*_+R*R)||1;E+=w/S*h*35,A+=_/S*h*35,v+=R/S*h*20}n[p]=w+E,n[p+1]=_+A,n[p+2]=R+v}}function Ex(){let n=null;function t(){n||(n=document.createElement("div"),n.id="morphStageLabel",n.style.cssText=["position:fixed","left:50%","bottom:92px","transform:translateX(-50%)","z-index:20","pointer-events:none","font-family:Outfit,Noto Sans JP,sans-serif","font-size:13px","letter-spacing:0.12em","color:rgba(180,200,255,0.75)","text-shadow:0 0 12px rgba(42,92,255,0.45)","transition:opacity 0.4s","text-align:center","line-height:1.5"].join(";"),document.body.appendChild(n))}return{set(e,i=""){t(),n.innerHTML=i?`${e}<br><span style="font-size:11px;opacity:0.55;letter-spacing:0.06em">${i}</span>`:e},destroy(){n==null||n.remove(),n=null}}}function Yn(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ye;let h=0;for(let u=0;u<n.length;++u){const f=n[u];let p=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(f.morphAttributes[m])}if(t){let m;if(e)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,m,u),h+=m}}if(e){let u=0;const f=[];for(let p=0;p<n.length;++p){const m=n[p].index;for(let M=0;M<m.count;++M)f.push(m.getX(M)+u);u+=n[p].attributes.position.count}l.setIndex(f)}for(const u in r){const f=$h(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<f;++p){const m=[];for(let x=0;x<o[u].length;++x)m.push(o[u][x][p]);const M=$h(m);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(M)}}return l}function $h(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){const u=n[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Le(o,e,i);let l=0;for(let h=0;h<n.length;++h){const u=n[h];if(u.isInterleavedBufferAttribute){const f=l/e;for(let p=0,m=u.count;p<m;p++)for(let M=0;M<e;M++){const x=u.getComponent(p,M);a.setComponent(p+f,M,x)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function Nf({dt:n,pointer:t,audioData:e,params:i,spawn:s,pointerThreshold:r=3,pointerMax:o=2,pointerDivisor:a=16,randomRate:l=1.8,randomSpawn:h,bassThreshold:u=.3,bassMultiplier:f=4,bassSpawn:p}){if((t==null?void 0:t.velocity)>r){const m=Math.min(o,Math.floor(t.velocity/a)+1);for(let M=0;M<m;M++)s(t)}if(Math.random()<n*l*(i.speed||1)&&(h==null||h()),e!=null&&e.isActive&&e.bass>u){const m=Math.floor(e.bass*f);for(let M=0;M<m;M++)p==null||p()}}function Ff(n,t){n.length>t&&n.splice(0,n.length-t)}function zf(n,t){n.length>t&&n.splice(0,n.length-t)}function gc(n,t,e,i,s){return Tr(n,t,e,i,s),{width:i,height:s}}function Mc(n,t,e,i,s,r){const{w:o,h:a}=rn(e,i,s,r);return Rr(n,t,o,a,An)}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function Of(n){return 1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2)}function je(n,t,e,i){return n+(t-n)*(1-Math.exp(-i*e))}function us(n,t,e){let i=t-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return n+i*e}const Me=.36;function xe(n,t,e=Me,i=0,s=0,r=0,o=0){const a=new be(n,t,e);return o&&a.rotateZ(o),a.translate(i,s,r),a}function Ax(){const n=xe(.12,1.12,Me,0,0,0,Math.PI/4),t=xe(.12,1.12,Me,0,0,0,-Math.PI/4),e=xe(.16,.16,Me*1.08);return Yn([n,t,e],!1)}function Tx(){const n=xe(.12,.58,Me,0,-.27,0),t=xe(.12,.62,Me,-.2,.28,0,Math.PI/5.2),e=xe(.12,.62,Me,.2,.28,0,-Math.PI/5.2),i=xe(.14,.14,Me*1.05,0,.02,0);return Yn([n,t,e,i],!1)}function Rx(){const n=xe(.78,.12,Me,0,.48,0),t=xe(.78,.12,Me,0,-.48,0),e=xe(.12,1.05,Me,0,0,0,-Math.PI/4.6);return Yn([n,t,e],!1)}function Cx(){const n=xe(.12,1.05,Me,-.22,0,0,Math.PI/9),t=xe(.12,1.05,Me,.22,0,0,-Math.PI/9),e=xe(.42,.11,Me,0,-.05,0);return Yn([n,t,e],!1)}function Px(){const n=xe(.12,1.05,Me,-.28,0,0),t=xe(.42,.11,Me,-.02,.42,0),e=xe(.4,.11,Me,-.02,.02,0),i=xe(.42,.11,Me,-.02,-.42,0),s=xe(.11,.38,Me,.22,.22,0),r=xe(.11,.38,Me,.22,-.2,0);return Yn([n,t,e,i,s,r],!1)}function Lx(){const n=xe(.55,.11,Me,.06,.42,0),t=xe(.55,.11,Me,.06,-.42,0),e=xe(.12,.84,Me,-.24,0,0),i=xe(.18,.11,Me,.28,.42,0),s=xe(.18,.11,Me,.28,-.42,0);return Yn([n,t,e,i,s],!1)}const Ci=["a","b","c","x","y","z"],Ix={a:Cx,b:Px,c:Lx,x:Ax,y:Tx,z:Rx};function Dx(){return Ci[Math.floor(Math.random()*Ci.length)]}const jh=380,wa=2300,Ux=5,Nx=12.2,qs=1.25,ao=1.26,lo=1.58;function Fx(){let n=[],t=[],e=[],i=0,s=0,r=0,o="rainbow",a=null,l={},h=null,u=null,f=null;const p=new Yt,m=new kt,M=64,x=M;class g{constructor(E,A,v){this.x=E,this.y=A,this.z=(Math.random()-.5)*300,this.letter=Dx(),this.maxSize=Mx(),this.size=0,this.growth=0,this.growthRate=.35+Math.random()*.5,this.baseRot=(Math.random()-.5)*.7,this.tilt=(Math.random()-.5)*.65,this.yaw=(Math.random()-.5)*.8,this.windPhase=Math.random()*Math.PI*2,this.windSpeed=(.65+Math.random()*.45)*qs,this.windAmp=.08+Math.random()*.07,this.spinX=(.45+Math.random()*.35)*qs,this.spinY=(.55+Math.random()*.45)*qs,this.spinZ=(.28+Math.random()*.25)*qs,this.phaseX=Math.random()*Math.PI*2,this.phaseY=Math.random()*Math.PI*2,this.phaseZ=Math.random()*Math.PI*2,this.bobPhase=Math.random()*Math.PI*2,this.bobSpeed=(.75+Math.random()*.55)*qs,this.driftZ=(Math.random()-.5)*28,this.color=pc(v),this.rgb=Lf(this.color),this.innerRgb=Pf(this.rgb),this.lifetime=0,this.maxLifetime=4+Math.random()*4.5,this.phase="growing",this.opacity=1}update(E,A){switch(this.lifetime+=E,this.tumbleX=Math.sin(A*this.spinX+this.phaseX)*.48,this.tumbleY=Math.sin(A*this.spinY+this.phaseY)*.72,this.tumbleZ=Math.sin(A*this.spinZ+this.phaseZ)*.28,this.bob=Math.sin(A*this.bobSpeed+this.bobPhase)*28,this.phase){case"growing":this.growth=Math.min(1,this.growth+this.growthRate*E),this.size=this.maxSize*Of(this.growth),this.growth>=1&&(this.phase="bloomed");break;case"bloomed":Math.random()<E*6.5*lo&&this._shedDust(),Math.random()<E*2.8*lo&&this._shedShard(),this.lifetime>this.maxLifetime*.55&&(this.phase="wilting");break;case"wilting":this.opacity-=E*.28,Math.random()<E*10.5*lo&&this._shedShard(),Math.random()<E*12*lo&&this._shedDust();break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_shedShard(){const E=1+(Math.random()<.55?1:0);for(let A=0;A<E;A++){const v=5+Math.floor(Math.random()*6);for(let S=0;S<v;S++)t.push({x:this.x+(Math.random()-.5)*this.size*1.2,y:this.y+(Math.random()-.5)*this.size*1.2,z:this.z+(Math.random()-.5)*40,vx:(Math.random()-.5)*70,vy:-20-Math.random()*45,vz:(Math.random()-.5)*45,size:this.size*.14+Math.random()*7,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*6,rgb:Rs(this.rgb,1),opacity:1,glow:(1.52+Math.random()*.3)*ao,kind:"shard"})}}_shedDust(){const E=1+(Math.random()<.5?1:0);for(let A=0;A<E;A++){const v=9+Math.floor(Math.random()*7);for(let S=0;S<v;S++)t.push({x:this.x+(Math.random()-.5)*this.size*.6,y:this.y+(Math.random()-.5)*this.size*.6,z:this.z+(Math.random()-.5)*30,vx:(Math.random()-.5)*90,vy:(Math.random()-.5)*90-10,vz:(Math.random()-.5)*60,size:2+Math.random()*5,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*8,rgb:Rs(this.innerRgb,1.05),opacity:1,glow:(1.6+Math.random()*.32)*ao,kind:"dust"})}}}function d(y,E=1){const A=Math.sin(r*y.windSpeed+y.windPhase),v=Math.sin(r*y.windSpeed*1.37+y.windPhase*1.2),S=A*y.windAmp,T=v*y.windAmp*.85,I=Qt(y.x,y.y,y.z+(y.bob||0)+v*(y.driftZ||0),i,s);p.position.copy(I),p.position.x+=S*y.size*.28,p.position.y+=Math.sin(r*y.bobSpeed*.65+y.bobPhase)*y.size*.05,p.position.z+=T*y.size*.22,p.rotation.set(y.tilt+S*1.6+y.tumbleX,(y.yaw||0)+T*.9+y.tumbleY,y.baseRot+y.tumbleZ+v*y.windAmp*.75);const U=y.size*E;return p.scale.set(U,U,U*1.85),p.updateMatrix(),I}function b(y,E){p.position.set(0,0,-4e3),p.scale.set(.001,.001,.001),p.rotation.set(0,0,0),p.updateMatrix(),y.setMatrixAt(E,p.matrix),y.instanceColor&&y.setColorAt(E,m.setRGB(0,0,0))}function w(){if(!Ci.every(A=>l[A]))return;const y={a:[],b:[],c:[],x:[],y:[],z:[]},E=Math.min(n.length,M);for(let A=0;A<E;A++){const v=n[A];v&&v.size>=.5&&y[v.letter].push(v)}for(const A of Ci){const v=l[A],S=y[A];for(let T=0;T<x;T++){const I=S[T];if(!I){b(v.mesh,T),b(v.outline,T);continue}d(I,1),v.mesh.setMatrixAt(T,p.matrix);const U=Di(I.rgb,.82+I.opacity*.28);v.mesh.setColorAt(T,m.setRGB(U.r,U.g,U.b)),d(I,1.03),v.outline.setMatrixAt(T,p.matrix);const V=Di(I.rgb,.34);v.outline.setColorAt(T,m.setRGB(V.r*.55,V.g*.5,V.b*.75))}v.mesh.instanceMatrix.needsUpdate=!0,v.outline.instanceMatrix.needsUpdate=!0,v.mesh.instanceColor&&(v.mesh.instanceColor.needsUpdate=!0),v.outline.instanceColor&&(v.outline.instanceColor.needsUpdate=!0)}if(h){for(let A=0;A<M;A++){const v=A<E?n[A]:null;if(!v||v.size<.5)b(h,A);else{d(v,1),p.scale.set(v.size*.07,v.size*.07,v.size*.07),p.updateMatrix(),h.setMatrixAt(A,p.matrix);const S=Di(v.rgb,.28);h.setColorAt(A,m.setRGB(S.r,S.g,S.b))}}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0)}if(u&&(e.forEach((A,v)=>{const S=Qt(A.x,A.y,A.z,i,s);u.positions[v*3]=S.x,u.positions[v*3+1]=S.y,u.positions[v*3+2]=S.z;const T=.18+.2*Math.abs(Math.sin(r*2.8+A.phase)),I=Di(A.rgb,T*ao);u.colors[v*3]=I.r,u.colors[v*3+1]=I.g,u.colors[v*3+2]=I.b}),u.geo.setDrawRange(0,e.length),u.geo.attributes.position.needsUpdate=!0,u.geo.attributes.color.needsUpdate=!0),f){const A=Math.min(t.length,wa);for(let v=0;v<A;v++){const S=t[v],T=Qt(S.x,S.y,S.z,i,s);f.positions[v*3]=T.x,f.positions[v*3+1]=T.y,f.positions[v*3+2]=T.z;const[I,U,V]=He(S.rgb),H=(S.glow||1.48)*(.54+S.opacity*.58)*ao,W=S.kind==="dust"?.92+.12*Math.sin(r*8+S.rot*3):1.03;f.colors[v*3]=Math.min(1,I*H*W),f.colors[v*3+1]=Math.min(1,U*H*W),f.colors[v*3+2]=Math.min(1,V*H*W)}f.geo.setDrawRange(0,A),f.geo.attributes.position.needsUpdate=!0,f.geo.attributes.color.needsUpdate=!0}}function _(y,E){n.push(new g(y,E,o))}function R(y=.72){return new ee({color:16777215,transparent:!0,opacity:y,side:ue,depthWrite:!1,blending:Oe,toneMapped:!1})}return{init(y,E,A,v){i=y,s=E,o=A.palette||"rainbow",n=[],t=[],e=[],r=0,a=v,l={};for(const I of Ci){const U=Ix[I]();U.computeVertexNormals();const V=new $t(U,R(.72),x);V.instanceColor=new Re(new Float32Array(x*3),3),V.frustumCulled=!1,a.add(V);const H=new $t(U,new ee({color:16777215,side:Pe,transparent:!0,opacity:.16,depthWrite:!1,blending:Oe,toneMapped:!1}),x);H.instanceColor=new Re(new Float32Array(x*3),3),H.frustumCulled=!1,a.add(H),l[I]={mesh:V,outline:H,geo:U}}const S=new Vt(.08,8,8),T=new ee({color:16777215,transparent:!0,opacity:.18,depthWrite:!1,blending:Oe,toneMapped:!1});h=new $t(S,T,M),h.instanceColor=new Re(new Float32Array(M*3),3),h.frustumCulled=!1,a.add(h),u=pe(jh,Ux),f=pe(wa,Nx),u.mat.opacity=.92,f.mat.opacity=.72,a.add(u.points,f.points);for(const[I,U]of Cn(20,y,E))_(I,U);Xi(n),w();for(let I=0;I<jh;I++)e.push({x:Math.random()*y,y:Math.random()*E,z:(Math.random()-.5)*220,speedY:-(.08+Math.random()*.25),phase:Math.random()*Math.PI*2,rgb:mc(o)})},resize(y,E){({width:i,height:s}=gc(n,i,s,y,E))},update(y,E,A,v){r+=y,o=v.palette||o,n=n.filter(T=>T.update(y,r)),Nf({dt:y,pointer:E,audioData:A,params:v,spawn:T=>_(T.x+(Math.random()-.5)*50,T.y+(Math.random()-.5)*50),randomSpawn:()=>_(Math.random()*i,Math.random()*s),bassSpawn:()=>_(Math.random()*i,Math.random()*s)}),t=t.filter(T=>{T.x+=T.vx*y,T.y+=T.vy*y,T.z+=T.vz*y,T.vy+=18*y,T.vx+=Math.sin(r*2.5+T.x*.008)*18*y,T.vz+=Math.cos(r*2.2+T.y*.01)*12*y,T.rot+=T.rotSpeed*y;const I=T.kind==="dust"?.14:.1;return T.opacity-=y*I,T.glow=Math.max(1.2,(T.glow||1.4)-y*.08),T.opacity>.02&&T.y<s+80}),e.forEach(T=>{T.y+=T.speedY*(v.speed||1)*60*y,T.x+=Math.sin(r*1.5+T.phase)*.25,T.y<-10&&(T.y=s+10,T.x=Math.random()*i)});const S=Math.min(M,Math.max(20,Math.floor((v.particleCount||1030)/4)));zf(n,S),Ff(t,wa)},render(){w();for(const y of Ci)l[y]&&(l[y].mesh.material.opacity=.78)},onPointerDown(y,E){for(let A=0;A<6;A++)_(y+(Math.random()-.5)*90,E+(Math.random()-.5)*90)},onPointerMove(){},onPointerUp(){},setParams(y){o=y.palette||o},samplePoints(y,E=i,A=s){return Mc(n,y,E,A,i,s)},destroy(){var y,E;n=[],t=[],e=[];for(const A of Ci)(E=(y=l[A])==null?void 0:y.geo)==null||E.dispose();l={},h=null,u=null,f=null,a=null}}}const Ul=["#00b7ff","#0090ff","#0066ff","#3d5afe","#5b8cff","#4d7cff","#2f6bff","#7c4dff","#9d4edd","#b026ff","#d500f9","#ff00e5","#ff2bd6","#e040fb","#c026d3"],ui=["#ff1ac6","#ff2ea8","#ff00aa","#ff4dd2","#00ffff","#00e5ff","#00b8ff","#2979ff","#18d4ff","#40c4ff","#448aff","#651fff","#536dfe","#7c4dff","#9c27b0","#7b1fa2","#b388ff","#ce93d8","#ab47bc","#5e35b1","#ffd000","#ffbf00","#ffe135","#fff36a","#c44dff","#b44dff","#e040fb","#d946ef"],zx=1.32,Bf=1.42,Nl=["#00e8ff","#00e8ff","#00e8ff","#00b7ff","#00b7ff","#00b7ff","#2f6bff","#2f6bff","#2f6bff","#2f6bff","#1a48ff","#1a48ff","#1a48ff","#4d7cff","#4d7cff","#7c4dff","#ff2bd6","#b026ff"],Ox=["#00ffff","#00ffff","#00ffff","#00ffff","#00e8ff","#00e8ff","#00e8ff","#00e8ff","#00e8ff","#00b7ff","#00b7ff","#00b7ff","#00b7ff","#2f6bff","#2f6bff","#2f6bff","#1a48ff","#1a48ff","#4d7cff","#7c4dff","#ff2bd6"];function Cr(n){return n[Math.floor(Math.random()*n.length)]}function Ea(){return Cr(Ul)}function Aa(){return Cr(ui)}function Bx(){return Cr(Nl)}function Ta(){return Cr(Ox)}function Gx(n){const t=Nl.filter(e=>e!==n);return Cr(t.length?t:Nl)}function Ui(n,t={}){const e=t.greenCap??.35,i=Ee(n),s=Math.max(i.r,i.g,i.b,1);let r=Math.round(i.r/s*255),o=Math.round(i.g/s*255),a=Math.round(i.b/s*255);return o=Math.min(o,Math.round(Math.max(r,a)*e)),{r,g:o,b:a}}function _s(n,t=1.4,e={}){const i=e.greenCap??.4;let s=Math.min(1,n.r/255*t),r=Math.min(1,n.g/255*t),o=Math.min(1,n.b/255*t);return r=Math.min(r,Math.max(s,o)*i),{r:s,g:r,b:o}}function Hx(n){return{r:Math.round(n.r*.28+12),g:Math.round(Math.min(n.g,Math.max(n.r,n.b)*.22)*.4+8),b:Math.round(n.b*.65+100)}}function Zs(n){const t=ui.length,e=(Math.floor(n)%t+t)%t;return ui[e]}function _c(n){const t=Ee(n),e=Math.max(t.r,t.g,t.b,1);return{r:Math.round(t.r/e*255),g:Math.round(t.g/e*255),b:Math.round(t.b/e*255)}}function xc(n,t=zx){const e=(n.r+n.g+n.b)/3;return{r:Math.min(255,Math.max(0,Math.round(e+(n.r-e)*t))),g:Math.min(255,Math.max(0,Math.round(e+(n.g-e)*t))),b:Math.min(255,Math.max(0,Math.round(e+(n.b-e)*t)))}}function Ra(n,t=1){const e=xc(_c(n));let i=e.r/255*t,s=e.g/255*t,r=e.b/255*t;const o=Math.max(i,s,r,1e-6);return o>1&&(i/=o,s/=o,r/=o),{r:i,g:s,b:r}}function kx(n,t=1.18){const e=xc(_c(n));return{r:Math.min(1,e.r/255*t),g:Math.min(1,e.g/255*t),b:Math.min(1,e.b/255*t)}}function Co(n,t=1,e=.06){const i=xc(_c(n),Bf),s=Math.min(1,Math.max(0,e));let r=Math.min(1,i.r/255*t),o=Math.min(1,i.g/255*t),a=Math.min(1,i.b/255*t);r=r*(1-s)+s,o=o*(1-s)+s,a=a*(1-s)+s;const l=.03;return{r:Math.min(1,r*(1-l)+l),g:Math.min(1,o*(1-l)+l),b:Math.min(1,a*(1-l)+l)}}function co(n){const t=Co(n,1.65,.05);return{r:Math.round(t.r*255),g:Math.round(t.g*255),b:Math.round(t.b*255)}}function Us(n){const t=n.index?n.toNonIndexed():n.clone();t.computeVertexNormals();const e=t.attributes.position.count;return t.attributes.uv||t.setAttribute("uv",new te(new Float32Array(e*2),2)),t}function Ns(n){const t=n.map(Us),e=Yn(t,!1);return e?(e.computeVertexNormals(),e):t[0]}function Vx(n,t,e,i=0,s=0,r=0,o=0){const a=new be(n,t,e);return o&&a.rotateZ(o),a.translate(i,s,r),a}const Gf={greenCap:.22};function Js(n){return Ui(n,Gf)}function fs(n,t=1.4){return _s(n,t,Gf)}const Qh=280,ho=1250,Wx=5.5,Xx=12,tu=1.48,eu=1.4;function Yx(){const n=new Vt(.42,28,18,0,Math.PI*2,0,Math.PI*.58);return n.scale(1.18,.88,1.18),n.translate(0,.18,0),Us(n)}function qx(){const n=new we(.47,.011,6,48);return n.rotateX(Math.PI/2),n.translate(0,.01,0),Us(n)}function Zx(){const n=[];for(let t=0;t<12;t++){const e=t/12*Math.PI*2,i=new Gn(.004,.004,.38,4);i.rotateZ(Math.PI/2),i.rotateY(e),i.translate(Math.cos(e)*.19,.28,Math.sin(e)*.19),n.push(i)}for(let t=0;t<48;t++){const e=Math.random()*Math.PI*2,i=Math.random()*Math.PI*.5,s=.38,r=Math.sin(i)*Math.cos(e)*s*1.18,o=.18+Math.cos(i)*s*.88,a=Math.sin(i)*Math.sin(e)*s*1.18,l=new Vt(.012+Math.random()*.01,6,5);l.translate(r,o,a),n.push(l)}for(let t=0;t<3;t++){const e=.12+t*.12,i=.28+t*.08,s=new we(i,.0035,4,32);s.rotateX(Math.PI/2),s.translate(0,e,0),n.push(s)}return Ns(n)}function Jx(){const n=new Vt(.09,12,10);return n.scale(1.35,.7,1.35),n.translate(0,.08,0),Us(n)}function Kx(){const n=[];for(let t=0;t<4;t++){const e=t/4*Math.PI*2+Math.PI/4,i=new we(.09,.028,8,20,Math.PI*1.35);i.rotateX(Math.PI*.55),i.rotateY(e),i.translate(Math.cos(e)*.12,.22,Math.sin(e)*.12),n.push(i)}return Ns(n)}function $x(){const n=[];for(let e=0;e<48;e++){const i=e/48*Math.PI*2,s=.32+e%4*.08,r=new Wn(.0032,s,2,4),o=Math.cos(i)*.45,a=Math.sin(i)*.45;r.translate(o,-s*.42,a),n.push(r);const l=new Vt(.01,6,5);l.translate(o,-s*.85,a),n.push(l)}return Ns(n)}function jx(){const n=[];for(let e=0;e<16;e++){const i=(e+.5)/16,s=Math.sin(i*Math.PI*1.6)*.09,r=-i*1.15,o=.048*(1-i*.55),a=new we(o,.0055,5,14);a.rotateX(Math.PI/2),a.translate(s,r,0),n.push(a);const l=new Wn(.0035,.06,2,4);if(l.translate(s,r,0),n.push(l),e%2===0){const h=new Vt(.011,6,5);h.translate(s+o*.7,r,0),n.push(h)}}return Ns(n)}function Qx(){let n=[],t=[],e=[],i=0,s=0,r=0,o="rainbow",a=null,l=null,h=null,u=null,f=null,p=null,m=null,M=[],x=null,g=null,d=null,b=null,w=null,_=null,R=null,y=null,E=null;const A=new Yt,v=new Yt,S=new Yt,T=[0,1,2,3].map(()=>new Yt);A.add(v,S,...T),S.position.y=.02;for(let st=0;st<4;st++){const J=st/4*Math.PI*2;T[st].position.set(Math.cos(J)*.06,.05,Math.sin(J)*.06),T[st].rotation.y=J}const I=new Yt,U=new kt,V=72;class H{constructor(J,C,P){this.x=J,this.y=C,this.z=(Math.random()-.5)*200,this.maxSize=gx()*.95,this.size=0,this.growth=0,this.growthRate=.28+Math.random()*.35,this.baseRot=Math.random()*Math.PI*2,this.tilt=(Math.random()-.5)*.2,this.windPhase=Math.random()*Math.PI*2,this.windSpeed=.45+Math.random()*.35,this.windAmp=.06+Math.random()*.05,this.bobPhase=Math.random()*Math.PI*2,this.bobSpeed=.55+Math.random()*.35,this.pulsePhase=Math.random()*Math.PI*2,this.pulseSpeed=1.15+Math.random()*.55,this.spinY=.08+Math.random()*.12,this.phaseY=Math.random()*Math.PI*2,this.riseSpeed=(22+Math.random()*18)*tu,this.neonHex=Bx(),this.rgb=Js(this.neonHex),this.accentRgb=Js(Gx(this.neonHex)),this.fillRgb=Hx(this.rgb),this.innerRgb={r:Math.min(255,this.rgb.r+40),g:Math.min(255,this.rgb.g+20),b:Math.min(255,this.rgb.b+50)},this.lifetime=0,this.maxLifetime=20+Math.random()*25,this.phase="growing",this.opacity=1,this.pulse=0,this.sway=0,this.bob=0,this.spin=0,this._deathBursted=!1,this._finalBursted=!1}update(J,C){this.lifetime+=J,this.pulse=Math.sin(C*this.pulseSpeed+this.pulsePhase),this.bob=Math.sin(C*this.bobSpeed+this.bobPhase)*10,this.sway=Math.sin(C*this.windSpeed+this.windPhase)*this.windAmp,this.spin=Math.sin(C*this.spinY+this.phaseY)*.2;const P=this.riseSpeed*(.7+Math.max(0,this.pulse)*.45);switch(this.y-=P*J,this.x+=Math.sin(C*.55+this.windPhase)*10*J,this.z+=Math.cos(C*.4+this.bobPhase)*8*J,this.y<-120&&(this.y=s+60+Math.random()*40,this.x=Math.random()*i,this.z=(Math.random()-.5)*200),this.phase){case"growing":{this.growth=Math.min(1,this.growth+this.growthRate*J);const z=1.70158,G=z+1,D=this.growth;this.size=this.maxSize*(1+G*Math.pow(D-1,3)+z*Math.pow(D-1,2)),this.growth>=1&&(this.phase="bloomed");break}case"bloomed":if(Math.random()<J*11.5*eu&&this._neonSpark(),this.lifetime>this.maxLifetime*.72&&this.phase==="bloomed"){this.phase="wilting";for(let z=0;z<28;z++)this._neonSpark()}break;case"wilting":if(this.opacity-=J*.18,Math.random()<J*20*eu&&this._neonSpark(),Math.random()<J*18&&this._shedDust(),!this._deathBursted&&this.opacity<.42){this._deathBursted=!0;for(let z=0;z<26;z++)this._neonSpark()}if(!this._finalBursted&&this.lifetime>=this.maxLifetime*.96){this._finalBursted=!0;for(let z=0;z<18;z++)this._neonSpark()}break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_neonSpark(){const J=Js(Ta()),C=Math.random()<.25?this.accentRgb:this.rgb,P={r:Math.round(J.r*.75+C.r*.25),g:Math.min(Math.round(J.g*.7+C.g*.2),Math.round(Math.max(J.r,J.b,C.b)*.2)),b:Math.min(255,Math.round(J.b*.75+C.b*.18+10))},z=Math.random()<.5?-1:1;t.push({x:this.x+z*this.size*(.15+Math.random()*.55),y:this.y+this.size*(.05+Math.random()*.7),z:this.z+(Math.random()-.5)*50,vx:z*(8+Math.random()*28)+(Math.random()-.5)*12,vy:-12-Math.random()*28,vz:(Math.random()-.5)*24,size:2.5+Math.random()*5.5,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*5,rgb:P,opacity:1,glow:2.05+Math.random()*1.05,kind:"neon",twinkle:Math.random()*Math.PI*2})}_shedDust(){for(let J=0;J<32;J++)this._neonSpark()}}function W(st,J){I.position.set(0,0,-4e3),I.scale.set(.001,.001,.001),I.rotation.set(0,0,0),I.updateMatrix(),st.setMatrixAt(J,I.matrix),st.instanceColor&&st.setColorAt(J,U.setRGB(0,0,0))}function Z(st){const J=Qt(st.x,st.y,st.z+st.bob,i,s);A.position.copy(J),A.position.x+=st.sway*st.size*.4,A.rotation.set(st.tilt+st.sway*.7+st.pulse*.04,st.baseRot+st.spin,st.sway*.55);const C=st.size,P=1.05-st.pulse*.06,z=.92+st.pulse*.1;A.scale.set(C*P,C*z,C*P*1.15);const G=Math.sin(r*1.4+st.windPhase)*.12;S.rotation.set(G*.4,0,G);for(let D=0;D<4;D++){const B=st.pulsePhase+D*1.2,k=Math.sin(r*1.15+B)*.42,nt=Math.cos(r*.9+B*.8)*.28,Y=Math.sin(r*.75+B)*.2;T[D].rotation.x=.2+k,T[D].rotation.z=nt,T[D].rotation.y=D/4*Math.PI*2+Y,T[D].scale.set(1,1.05+Math.abs(k)*.18,1)}A.updateMatrixWorld(!0)}function X(){if(!l||!h||!u||!f||!p||!m||M.length<4)return;const st=Math.min(n.length,V);for(let C=0;C<V;C++){const P=C<st?n[C]:null;if(!P||P.size<.5){W(l,C),W(h,C),W(u,C),W(f,C),W(p,C),W(m,C);for(const nt of M)W(nt,C);continue}Z(P);const z=fs(P.fillRgb,.48+P.opacity*.15),G=fs(P.rgb,.92+P.opacity*.18),D=fs(P.innerRgb,1+.18*Math.abs(P.pulse)),B={r:Math.min(1,.34+.07*Math.abs(P.pulse)),g:Math.min(1,.46+.04*Math.abs(P.pulse)),b:Math.min(1,.64+.08*Math.abs(P.pulse))};I.matrix.copy(v.matrixWorld),l.setMatrixAt(C,I.matrix),l.setColorAt(C,U.setRGB(z.r,z.g,z.b)),I.matrix.copy(A.matrixWorld),h.setMatrixAt(C,I.matrix),h.setColorAt(C,U.setRGB(Math.min(1,D.r*.86),Math.min(1,D.g*.88),Math.min(1,D.b*.84))),I.matrix.copy(A.matrixWorld),u.setMatrixAt(C,I.matrix),u.setColorAt(C,U.setRGB(D.r,D.g,D.b)),I.matrix.copy(A.matrixWorld),f.setMatrixAt(C,I.matrix),f.setColorAt(C,U.setRGB(B.r,B.g,B.b)),I.matrix.copy(A.matrixWorld),p.setMatrixAt(C,I.matrix),p.setColorAt(C,U.setRGB(G.r,G.g,G.b));const k=fs(P.accentRgb,.82+.15*Math.abs(P.pulse));I.matrix.copy(S.matrixWorld),m.setMatrixAt(C,I.matrix),m.setColorAt(C,U.setRGB(D.r*.68+k.r*.2,D.g*.72+k.g*.16,D.b*.68+k.b*.2));for(let nt=0;nt<4;nt++){I.matrix.copy(T[nt].matrixWorld),M[nt].setMatrixAt(C,I.matrix);const Y=nt%2===0?G:k;M[nt].setColorAt(C,U.setRGB(Y.r*.82,Y.g*.78,Y.b*.86))}}const J=[l,h,u,f,p,m,...M];for(const C of J)C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0);if(x&&(e.forEach((C,P)=>{const z=Qt(C.x,C.y,C.z,i,s);x.positions[P*3]=z.x,x.positions[P*3+1]=z.y,x.positions[P*3+2]=z.z;const G=.82+.65*Math.abs(Math.sin(r*2.6+C.phase)),D=fs(C.rgb,G*1.65);x.colors[P*3]=D.r,x.colors[P*3+1]=D.g,x.colors[P*3+2]=D.b}),x.geo.setDrawRange(0,e.length),x.geo.attributes.position.needsUpdate=!0,x.geo.attributes.color.needsUpdate=!0),g){const C=Math.min(t.length,ho);for(let P=0;P<C;P++){const z=t[P],G=Qt(z.x,z.y,z.z,i,s);g.positions[P*3]=G.x,g.positions[P*3+1]=G.y,g.positions[P*3+2]=G.z;const D=.78+.42*Math.abs(Math.sin(r*6+(z.twinkle||0))),B=(z.glow||2.1)*(.58+z.opacity*.52)*D,k=fs(z.rgb,B*1.15);g.colors[P*3]=k.r,g.colors[P*3+1]=k.g,g.colors[P*3+2]=k.b}g.geo.setDrawRange(0,C),g.geo.attributes.position.needsUpdate=!0,g.geo.attributes.color.needsUpdate=!0}}function $(st){for(;n.length>st;){const J=n.findIndex(P=>P.phase==="wilting"&&P.opacity<.35);if(J>=0){n.splice(J,1);continue}const C=n.findIndex(P=>P.lifetime>=P.maxLifetime*.92);if(C>=0){n.splice(C,1);continue}n.splice(0,1)}}function rt(st,J){n.push(new H(st,J,o))}function ot(st,J=!1){return new ee({color:16777215,transparent:!0,opacity:st,side:ue,depthWrite:!1,blending:J?jt:Oe,toneMapped:!1})}return{init(st,J,C,P){i=st,s=J,o=C.palette||"rainbow",n=[],t=[],e=[],r=0,a=P,d=Yx(),b=qx(),w=Zx(),_=Jx(),R=Kx(),y=$x(),E=jx(),l=new $t(d,ot(.26,!0),V),h=new $t(b,ot(.58,!0),V),u=new $t(w,ot(.52,!0),V),f=new $t(_,ot(.54,!0),V),p=new $t(R,ot(.42,!0),V),m=new $t(y,ot(.22,!0),V),M=[0,1,2,3].map(()=>new $t(E,ot(.2,!0),V));for(const z of[l,h,u,f,p,m,...M])z.instanceColor=new Re(new Float32Array(V*3),3),z.frustumCulled=!1,a.add(z);x=pe(Qh,Wx),g=pe(ho,Xx),x.mat.blending=jt,g.mat.blending=jt,x.mat.opacity=.78,g.mat.opacity=.72,x.mat.toneMapped=!1,g.mat.toneMapped=!1,a.add(x.points,g.points);for(const[z,G]of Cn(20,st,J,.06,[J*.2,J*.95]))rt(z,G);Xi(n),X();for(let z=0;z<Qh;z++)e.push({x:Math.random()*st,y:Math.random()*J,z:(Math.random()-.5)*220,speedY:-(.05+Math.random()*.16),phase:Math.random()*Math.PI*2,rgb:Js(Ta())})},resize(st,J){Tr(n,i,s,st,J),i=st,s=J},update(st,J,C,P){if(r+=st,o=P.palette||o,n=n.filter(G=>G.update(st,r)),(J==null?void 0:J.velocity)>3){const G=Math.min(2,Math.floor(J.velocity/16)+1);for(let D=0;D<G;D++)rt(J.x+(Math.random()-.5)*50,J.y+(Math.random()-.5)*40)}if(Math.random()<st*1.2*(P.speed||1)&&rt(Math.random()*i,s+30+Math.random()*60),C!=null&&C.isActive&&C.bass>.3){const G=Math.floor(C.bass*3);for(let D=0;D<G;D++)rt(Math.random()*i,s+20)}t=t.filter(G=>(G.x+=G.vx*st,G.y+=G.vy*st,G.z+=G.vz*st,G.vx*=.985,G.vy+=(G.kind==="neon"?6:10)*st,G.opacity-=st*(G.kind==="neon"?.05:.085),G.opacity>.02&&G.y<s+80&&G.y>-100)),t.length>ho&&t.splice(0,t.length-ho),e.forEach(G=>{if(G.y+=G.speedY*(P.speed||1)*50*tu*st,G.x+=Math.sin(r*1.2+G.phase)*.2,G.y<-10)if(G.y=s+10,G.x=Math.random()*i,n.length&&Math.random()<.25){const D=n[Math.floor(Math.random()*n.length)];G.rgb={...D.rgb}}else G.rgb=Js(Ta())});const z=Math.min(V,Math.max(20,Math.floor((P.particleCount||1030)/4)));$(z),t.length>1100&&t.splice(0,t.length-1100)},render(){X()},onPointerDown(st,J){for(let C=0;C<5;C++)rt(st+(Math.random()-.5)*80,J+(Math.random()-.5)*60)},onPointerMove(){},onPointerUp(){},setParams(st){o=st.palette||o},setPalette(st){o=st},samplePoints(st,J=i,C=s){const{w:P,h:z}=rn(J,C,i,s);return Rr(n,st,P,z,An)},destroy(){n=[],t=[],e=[],d==null||d.dispose(),b==null||b.dispose(),w==null||w.dispose(),_==null||_.dispose(),R==null||R.dispose(),y==null||y.dispose(),E==null||E.dispose(),l=null,h=null,u=null,f=null,p=null,m=null,M=[],x=null,g=null,a=null}}}const Fl=Be("clockRainbow");function vc(n){const{r:t,g:e,b:i}=Ee(n),s=i>170&&e>90&&t<120,r=i>150&&i>=t*.82&&i>e,o=i>130&&t>40&&e<t;return s||r||o}function tv(){const n=new Set,t=[];for(const e of[...Fl,...Be("rainbow")]){if(n.has(e))continue;n.add(e);const{r:i,g:s,b:r}=Ee(e),a=r>200&&r>i*1.1&&s<r*.8?7:vc(e)?5:1;for(let l=0;l<a;l++)t.push(e)}return t.length?t:Fl}const zl=tv(),nu=zl.filter(n=>vc(n));function Po(n){return zl[Math.abs(n)%zl.length]}function Ol(n){const t=nu.length?nu:Fl;return t[Math.abs(n)%t.length]}function ev(n){return{wing:n%3!==2?Ol(n*2):Po(n*2),pattern:Po(n*2+3)}}function Lo(n,t=1.14){const e=(n.r+n.g+n.b)/3;return{r:Math.min(255,Math.max(0,Math.round(e+(n.r-e)*t))),g:Math.min(255,Math.max(0,Math.round(e+(n.g-e)*t))),b:Math.min(255,Math.max(0,Math.round(e+(n.b-e)*t)))}}function uo(n){let t=Ee(n);return vc(n)&&(t={r:Math.min(255,Math.round(t.r*1.02+2)),g:Math.min(255,Math.round(t.g*1.04+4)),b:Math.min(255,Math.round(t.b*1.1+10))}),Lo(t,1.15)}function iu(n,t=.55){const e={r:Math.min(255,Math.round(n.r*t+12)),g:Math.min(255,Math.round(n.g*t+12)),b:Math.min(255,Math.round(n.b*t+12))};return Lo(e,1.1)}function ds(n,t=1){return{r:Math.min(1,n.r/255*t),g:Math.min(1,n.g/255*t),b:Math.min(1,n.b/255*t)}}function nv(n,t,e){const i=Math.sin(n),s=Math.cos(n),r=Math.sin(n*2+.35),o=e*ov,a=i*.78*o+r*.03*o,h=Math.max(0,-i)*(.38+.62*Math.max(0,-s)),u=h*14*o*.9,f=h*10*o*.9,p=s*t*.54*o,m=i*.15*o+r*.02*o;return{wing:a,stroke:h,thrust:u,lift:f,flapVel:p,sway:m}}const zn=.17,iv=1.6,su=.32,sv=2.4,rv=7.8,ru=8.2,ni=[2,4.2],ms=[5,9.5],ov=1.58,av=.44,lv=[3,24],cv=[12,58],fo=1.42,ou=125,po=1600,hv=4,uv=7,fv=1.18,Si=1.22,au=3.2,dv=28;function pv(n){const t=ni[0],e=ms[1];return Ge((n-t)/(e-t),0,1)}function lu(n,t=!1){const[e,i]=t?cv:lv;return Ge((n-e)/(i-e),0,1)}function Bl(n){const t=n.index?n.toNonIndexed():n.clone();return t.computeVertexNormals(),t}function yc(n){const t=Yn(n.map(Bl),!1);return t?(t.computeVertexNormals(),t):Bl(n[0])}function cu(){const n=Math.random(),t=Math.random(),e=2*Math.PI*n,i=2*t-1,s=Math.sqrt(Math.max(0,1-i*i));return new q(s*Math.cos(e),s*Math.sin(e),i)}function mv(){const n=new Ke;return n.moveTo(.04,.05),n.bezierCurveTo(.16,.44,.52,.5,.84,.34),n.bezierCurveTo(1.05,.18,1,-.04,.78,-.12),n.bezierCurveTo(.52,-.2,.24,-.02,.1,.06),n.bezierCurveTo(.02,-.02,-.02,-.22,.14,-.38),n.bezierCurveTo(.34,-.54,.62,-.46,.66,-.24),n.bezierCurveTo(.7,-.04,.46,.1,.04,.05),n.closePath(),n}function Gl(){const n=new Mn(mv(),{depth:.14,bevelEnabled:!0,bevelThickness:.028,bevelSize:.022,bevelSegments:3,curveSegments:28});return n.translate(.02,.02,-.07),Bl(n)}function Hl(){const n=[],t=[[.42,.28,.1],[.62,.18,.08],[.28,.08,.07],[.48,-.08,.09],[.68,-.18,.06],[.22,-.22,.07],[.38,-.32,.055]];for(const[i,s,r]of t){const o=new Vt(r,12,10);o.translate(i,s,.04),n.push(o)}for(let i=0;i<4;i++){const s=.35+i*.28,r=new Wn(.012,.42+i*.08,4,6);r.rotateZ(s),r.translate(.22+i*.14,.06-i*.1,.03),n.push(r)}const e=new we(.52,.018,8,32,Math.PI*.85);return e.rotateZ(.55),e.translate(.42,.02,.02),n.push(e),yc(n)}function Hf(){const n=new Wn(.06,.2,5,10);n.rotateZ(Math.PI/2),n.translate(.02,.02,0);const t=new Wn(.045,.24,5,10);t.rotateZ(Math.PI/2),t.translate(-.2,.01,0);const e=new Vt(.052,12,10);return e.translate(.12,.03,0),yc([n,t,e])}function kf(){const n=[];for(const t of[-1,1]){const e=new Wn(.008,.2,4,6);e.rotateZ(t*.65),e.translate(.12,.05+t*.02,t*.04),n.push(e);const i=new Vt(.018,8,6);i.translate(.2,.11*t+.03,t*.08),n.push(i)}return yc(n)}function gv(){let n=[],t=[],e=[],i=0,s=0,r=0,o=null,a=null,l=null,h=null,u=null,f=null,p=null,m=null,M=null,x=null,g=null,d=null,b=null,w=null,_=null;const R=new Yt,y=new Yt,E=new Yt;R.add(y,E),y.position.set(.02,.02,-.01),E.position.set(.02,.02,-.01);const A=new Yt,v=new kt,S=new q,T=72;let I=0;const U=["arc","spiral","waltz","drift","dance"],V=()=>U[Math.floor(Math.random()*U.length)];class H{constructor(C,P){this.x=C,this.y=P,this.z=(Math.random()-.5)*360,this.maxSize=xx()*.8*fv,this.size=0,this.growth=0,this.growthRate=.34+Math.random()*.38,this.flapPhase=Math.random()*Math.PI*2,this.flapTempoTrait=Math.random(),this.flapSpeed=(ni[0]+this.flapTempoTrait*(ms[1]-ni[0])*.55)*Si,this.flapSpeedTarget=this.flapSpeed,this.flapRhythmTarget=this.flapSpeed,this.wingRhythmMul=.38+this.flapTempoTrait*.26,this.flapRhythm=this.flapTempoTrait>.52?"fast":"slow",this.flapRhythmTimer=.5+Math.random()*1.4,this.bobPhase=Math.random()*Math.PI*2,this.bobSpeed=.18+Math.random()*.16,this.windPhase=Math.random()*Math.PI*2,this.driftPhase=Math.random()*Math.PI*2,this.glidePhase=Math.random()*Math.PI*2,this.floatPhase=Math.random()*Math.PI*2,this.floatSpeed=.28+Math.random()*.38,this.driftRadius=.4+this.flapTempoTrait*1.2,this.flowAngle=Math.random()*Math.PI*2,this.pitchAngle=(Math.random()-.5)*.6,this.flowTurn=(Math.random()<.5?-1:1)*(.06+Math.random()*.16),this.style=V(),this.flutterAmp=.62+Math.random()*.48,this.glideAmp=.88+Math.random()*.62,this.wingFlapMul=this.wingRhythmMul,this.smoothRate=.72+Math.random()*.55,this.orbitR=.45+Math.random()*.75,this.orbitPhase=Math.random()*Math.PI*2,this.maxSpeed=(16+Math.random()*9)*Si,this.tiltAmp=.03+Math.random()*.04,this.rollAmp=.03+Math.random()*.05;const z=I++;this.flowAngle=Math.random()*Math.PI*2,this.pitchAngle=(Math.random()-.5)*.75,this.targetFlowAngle=this.flowAngle,this.targetPitchAngle=this.pitchAngle,this.heading=this.flowAngle;const G=(3.5+this.flapTempoTrait*10)*Si;this.vx=Math.sin(this.heading)*Math.cos(this.pitchAngle)*G,this.vy=-Math.cos(this.heading)*Math.cos(this.pitchAngle)*G,this.vz=Math.sin(this.pitchAngle)*G*.85,this.smoothMoveSpeed=G,this.rotX=0,this.rotY=Math.atan2(this.vx,-this.vy+.001),this.rotZ=0;const{wing:D,pattern:B}=ev(z);this.color=D,this.rgb=uo(D),this.pattern=iu(uo(B),.62),this.outline=iu(this.rgb,.44),this.accent=uo(z%2===0?Ol(z+7):Po(z+7)),this.lifetime=0,this.maxLifetime=14+Math.random()*10,this.phase="growing",this.opacity=1,this.flap=0,this.flapVel=0,this.smoothFlap=0,this.smoothFlapVel=0,this.sway=0,this.departing=!1,this.departTimer=.2+(1-this.flapTempoTrait)*.85,this.departDuration=0,this.departScale=1,this.departSpeed=0,this.departTempo=0,this.departDir=cu(),this.departDir.y*=.72,this.departDir.normalize(),this.bob=0,this.flutterX=0,this.flutterY=0,this.flutterZ=0,this.smoothFlutterX=0,this.smoothFlutterY=0,this.smoothFlutterZ=0,this.smoothSway=0,this.roamTimer=.6+Math.random()*1.4,this.bankX=0,this.bankY=0}_flapTempo(){return pv(this.flapSpeed)}_beginDepart(){this.departing=!0,this.departDuration=0,this.departScale=1,this.departTempo=Math.max(lu(this.smoothMoveSpeed,!0),this._flapTempo()*.45+this.flapTempoTrait*.35);const C=cu();C.y*=.55+Math.random()*.35,C.normalize(),this.departDir=C,this.departSpeed=(28+this.departTempo*38)*Si,this.maxSpeed=Math.max(this.maxSpeed,this.departSpeed+14),this.targetFlowAngle=Math.atan2(C.x,-C.y),this.targetPitchAngle=Ge(Math.asin(C.z),-.78,.78),this.flowAngle=us(this.flowAngle,this.targetFlowAngle,.62),this.pitchAngle=je(this.pitchAngle,this.targetPitchAngle,.05,5.5),this.heading=this.flowAngle;const P=this.departSpeed*(.88+this.departTempo*.1),z=6+this.departTempo*5;this.vx=je(this.vx,C.x*P,.05,z),this.vy=je(this.vy,C.y*P,.05,z),this.vz=je(this.vz,C.z*P,.05,z),this._dustBurst(dv)}_updateDepart(C){this.departDuration+=C;const P=this.departTempo,z=.2+P*.16,G=.14+P*.1;this.departScale=Math.max(.05,1-this.departDuration*G),this.opacity=Math.max(0,1-this.departDuration*z);const D=2.8+P*2.4;this.flowAngle=us(this.flowAngle,Math.atan2(this.departDir.x,-this.departDir.y),1-Math.exp(-D*C)),this.pitchAngle=je(this.pitchAngle,Ge(Math.asin(this.departDir.z),-.78,.78),C,2.8+P*1.6),this.heading=us(this.heading,this.flowAngle,1-Math.exp(-(3.2+P*2)*C));const B=this.x<-60||this.x>i+60||this.y<-60||this.y>s+60,k=.32+(1-P)*.38;return!(this.opacity<.04||this.z<-520||this.departDuration>7||B&&this.departDuration>k)}_pickRoamIntent(){this.targetFlowAngle=this.flowAngle+(Math.random()-.5)*Math.PI*1.35,this.targetPitchAngle=Ge(this.pitchAngle+(Math.random()-.5)*.72,-.72,.72),this.flowTurn=(Math.random()<.5?-1:1)*(.12+Math.random()*.22),this.roamTimer=.55+Math.random()*1.35}_updateFlapRhythm(C){if(this.flapRhythmTimer-=C,this.flapRhythmTimer<=0){const P=.28+this.flapTempoTrait*.42;if(this.flapRhythm==="slow"?this.flapRhythm=Math.random()<P?"fast":"slow":this.flapRhythm=Math.random()<.38?"slow":"fast",this.flapRhythmTimer=this.flapRhythm==="slow"?.75+Math.random()*1.8:.35+Math.random()*.95,this.flapRhythm==="slow"){const z=ni[1]-ni[0];this.flapRhythmTarget=(ni[0]+this.flapTempoTrait*z*.55+Math.random()*z*.35)*Si,this.wingRhythmMul=.4+this.flapTempoTrait*.16}else{const z=ms[1]-ms[0];this.flapRhythmTarget=(ms[0]+this.flapTempoTrait*z*.75+Math.random()*z*.35)*Si,this.wingRhythmMul=.58+this.flapTempoTrait*.28}}}_syncFlapToMotion(C){const P=lu(this.smoothMoveSpeed,this.departing),z=P*P,G=ms[1]-ni[0],D=this.departing?1.18:1,B=ni[0]+z*G*D,k=.15+z*.85;this.flapSpeedTarget=this.flapRhythmTarget*(1-k)+B*k,this.wingFlapMul=this.wingRhythmMul*(1-k*.55)+(.4+z*.54)*(k*.55+.45),this.wingFlapMul=Math.max(this.wingFlapMul,av),this.flapSpeed=je(this.flapSpeed,this.flapSpeedTarget,C,3+z*3.2)}_smoothFlapVisual(C){this.smoothFlap=je(this.smoothFlap,this.flap,C,ru),this.smoothFlapVel=je(this.smoothFlapVel,this.flapVel,C,ru*.85)}_cruiseVelocity(){if(this.departing){const G=this.departTempo,D=this.departSpeed+Math.min(this.departDuration*(8+G*10),16);return{vx:this.departDir.x*D,vy:this.departDir.y*D,vz:this.departDir.z*D}}const C=Math.cos(this.pitchAngle),P=Math.sin(this.pitchAngle),z=(8.5+this.driftRadius*2.2)*Si;return{vx:Math.sin(this.heading)*C*z,vy:-Math.cos(this.heading)*C*z,vz:P*z*.88}}_steerIntent(C,P){if(this.departing)return;this.roamTimer-=C,this.roamTimer<=0&&this._pickRoamIntent();const z=Math.sin(P*.16+this.glidePhase)*.22+Math.sin(P*.08+this.driftPhase*1.7)*.14,G=Math.sin(P*.12+this.bobPhase*1.3)*.18,D=1-Math.exp(-.28*C);switch(this.style){case"spiral":{this.orbitPhase+=C*(.1+this.orbitR*.08),this.targetFlowAngle+=(this.flowTurn+z*.08)*C*.14,this.targetPitchAngle=Ge(this.targetPitchAngle+Math.sin(this.orbitPhase)*.1*C,-.65,.65);break}case"waltz":{this.targetFlowAngle+=(this.flowTurn+z*.1)*C*.12,this.targetPitchAngle=Ge(this.targetPitchAngle+G*.08*C,-.65,.65);break}case"drift":{this.targetFlowAngle+=(this.flowTurn+z*.06)*C*.09,this.targetPitchAngle=Ge(this.targetPitchAngle+G*.06*C,-.65,.65);break}case"dance":{this.targetFlowAngle+=(this.flowTurn+z*.1)*C*(.16+Math.sin(P*.22+this.driftPhase)*.08),this.targetPitchAngle=Ge(this.targetPitchAngle+Math.sin(P*.24+this.flapPhase)*.1*C,-.65,.65);break}default:this.targetFlowAngle+=(this.flowTurn+z*.07)*C*(.14+.08*Math.sin(P*.12+this.driftPhase)),this.targetPitchAngle=Ge(this.targetPitchAngle+G*.07*C,-.65,.65)}this.flowAngle=us(this.flowAngle,this.targetFlowAngle,D),this.pitchAngle=je(this.pitchAngle,this.targetPitchAngle,C,2.2),this.pitchAngle=Ge(this.pitchAngle,-.65,.65),this.heading=us(this.heading,this.flowAngle,1-Math.exp(-.32*C))}_applyFloatDrift(C,P){const z=this.driftRadius*(this.departing?.28:.62),G=this.floatSpeed*(this.departing?1.1:.82),D=this.floatPhase,B=this._cruiseVelocity(),k=this.departing?rv+this.departTempo*3.5:sv;this.vx=je(this.vx,B.vx+Math.sin(P*G+D)*.65*z,C,k),this.vy=je(this.vy,B.vy+Math.cos(P*G*.78+D*1.4)*.55*z,C,k),this.vz=je(this.vz,B.vz+Math.sin(P*G*.58+D*.85)*.48*z,C,k)}_updateFlutter(C){const P=this.flutterAmp,z=.42;switch(this.style){case"spiral":this.flutterX=Math.cos(C*.26+this.orbitPhase)*22*P*z+Math.sin(C*.52+this.flapPhase)*8*P*z,this.flutterY=Math.sin(C*.22+this.bobPhase)*18*P*z,this.flutterZ=Math.sin(C*.24+this.orbitPhase)*16*P*z;break;case"waltz":this.flutterX=Math.sin(C*.24+this.flapPhase)*24*P*z+Math.cos(C*.48+this.driftPhase)*9*P*z,this.flutterY=Math.sin(C*.14+this.bobPhase)*20*P*z,this.flutterZ=Math.cos(C*.26+this.windPhase)*14*P*z;break;case"drift":this.flutterX=Math.sin(C*.2+this.flapPhase)*16*P*z,this.flutterY=Math.cos(C*.17+this.bobPhase)*19*P*z,this.flutterZ=Math.sin(C*.15+this.windPhase)*11*P*z;break;case"dance":this.flutterX=Math.sin(C*.32+this.flapPhase)*22*P*z+Math.sin(C*.62+this.driftPhase)*10*P*z,this.flutterY=Math.cos(C*.26+this.bobPhase)*17*P*z+Math.sin(C*.52+this.flapPhase)*7*P*z,this.flutterZ=Math.sin(C*.3+this.windPhase)*15*P*z;break;default:this.flutterX=Math.sin(C*.28+this.flapPhase)*20*P*z+Math.sin(C*.55+this.driftPhase)*9*P*z,this.flutterY=Math.cos(C*.24+this.bobPhase)*18*P*z+Math.sin(C*.46+this.flapPhase)*7*P*z,this.flutterZ=Math.sin(C*.2+this.windPhase)*14*P*z+Math.cos(C*.38+this.driftPhase)*6*P*z}this.bob=Math.sin(C*this.bobSpeed+this.bobPhase)*(12+this.flutterAmp*5),this.departing&&(this.bob+=Math.sin(C*.28+this.flapPhase)*6)}_smoothFlutter(C){const P=1-Math.exp(-3.6*C);this.smoothFlutterX+=(this.flutterX-this.smoothFlutterX)*P,this.smoothFlutterY+=(this.flutterY-this.smoothFlutterY)*P,this.smoothFlutterZ+=(this.flutterZ-this.smoothFlutterZ)*P,this.smoothSway=je(this.smoothSway,this.sway,C,5.5)}update(C,P){this.lifetime+=C,this._updateFlapRhythm(C),this._syncFlapToMotion(C),this._steerIntent(C,P),this.flapPhase+=this.flapSpeed*C;const z=nv(this.flapPhase,this.flapSpeed,this.wingFlapMul);this.flap=z.wing,this.flapVel=z.flapVel,this.sway=z.sway,this._smoothFlapVisual(C);const G=Math.cos(this.pitchAngle),D=Math.sin(this.pitchAngle),B=Math.sin(this.heading)*G,k=-Math.cos(this.heading)*G,nt=D*.88;this.vx+=B*z.thrust*C,this.vy+=k*z.thrust*C,this.vz+=nt*z.thrust*C,this.vy-=z.lift*G*C*.85,this.vy+=iv*C;const Y=Math.exp(-(this.departing?su*.55:su)*C);this.vx*=Y,this.vy*=Y,this.vz*=Y,this._applyFloatDrift(C,P),S.set(this.vx,this.vy,this.vz);const K=S.length();K>this.maxSpeed&&(S.multiplyScalar(this.maxSpeed/K),this.vx=S.x,this.vy=S.y,this.vz=S.z),this.smoothMoveSpeed=je(this.smoothMoveSpeed,K,C,5.5),this._updateFlutter(P),this._smoothFlutter(C);const N=.18;this.x+=this.vx*C+this.smoothFlutterX*C*N,this.y+=this.vy*C+this.smoothFlutterY*C*N,this.z+=this.vz*C+this.smoothFlutterZ*C*N*.75;const vt=1-Math.exp(-this.smoothRate*C),ut=this.vx+this.smoothFlutterX*N,yt=this.vy+this.smoothFlutterY*N,mt=this.vz+this.smoothFlutterZ*N*.75,At=Math.hypot(ut,yt);Math.hypot(ut,yt,mt)>.8&&(this.rotY=us(this.rotY,Math.atan2(ut,-yt+.001)+this.smoothSway*.1,vt*.52));const O=Math.atan2(-mt,At+12)*.1+this.smoothFlapVel*.007+this.smoothSway*.03,L=Ge(O,-.1,zn);this.rotX+=(L-this.rotX)*vt*.55;const it=At>1.2?Math.atan2(ut,Math.abs(yt)+28)*this.rollAmp*.18:0,ht=Ge(it+this.smoothSway*.08,-zn,zn);switch(this.rotZ+=(ht-this.rotZ)*vt*.5,this.rotX=Ge(this.rotX,-.1,zn),this.rotZ=Ge(this.rotZ,-zn,zn),this._softBounds(C),this.phase){case"growing":{this.growth=Math.min(1,this.growth+this.growthRate*C);const Mt=1.70158,pt=Mt+1,Dt=this.growth;this.size=this.maxSize*(1+pt*Math.pow(Dt-1,3)+Mt*Math.pow(Dt-1,2)),this.growth>=1&&(this.phase="bloomed");break}case"bloomed":Math.random()<C*5.2&&this._dust(),this.departTimer-=C,(this.departTimer<=0||this.roamTimer<=0)&&(this._beginDepart(),this.phase="departing");break;case"departing":if(this._updateDepart(C)===!1)return!1;Math.random()<C*8.8*au&&this._dust(2+Math.floor(Math.random()*3));break;case"wilting":this.opacity-=C*.14,Math.random()<C*6.2*au&&this._dust(2+Math.floor(Math.random()*2));break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_softBounds(C){if(this.departing)return;const P=120;(this.x<-P||this.x>i+P||this.y<-P||this.y>s+P)&&this.phase==="bloomed"&&(this._beginDepart(),this.phase="departing"),this.z<-380&&(this.z=340),this.z>380&&(this.z=-340)}_dust(C=0){const P=1+(Math.random()<.55?1:0)+C;for(let z=0;z<P;z++)t.push({x:this.x+(Math.random()-.5)*this.size*1.35,y:this.y+(Math.random()-.5)*this.size*1.35,z:this.z+(Math.random()-.5)*this.size*1.2,vx:(Math.random()-.5)*70,vy:(Math.random()-.5)*70,vz:(Math.random()-.5)*70,rgb:Lo(Math.random()<.55?this.accent:this.rgb,1.22),opacity:1,glow:(1.85+Math.random()*.85)*fo,twinkle:Math.random()*Math.PI*2})}_dustBurst(C){for(let P=0;P<C;P++)t.push({x:this.x+(Math.random()-.5)*this.size*1.8,y:this.y+(Math.random()-.5)*this.size*1.8,z:this.z+(Math.random()-.5)*this.size*1.5,vx:(Math.random()-.5)*110,vy:(Math.random()-.5)*110,vz:(Math.random()-.5)*95,rgb:Lo(P%2===0?this.accent:this.rgb,1.28),opacity:1,glow:(2.1+Math.random()*.9)*fo,twinkle:Math.random()*Math.PI*2})}}function W(J,C){A.position.set(0,0,-4e3),A.scale.set(.001,.001,.001),A.rotation.set(0,0,0),A.updateMatrix(),J.setMatrixAt(C,A.matrix),J.instanceColor&&J.setColorAt(C,v.setRGB(0,0,0))}function Z(J){const C=Qt(J.x+J.smoothFlutterX*.38,J.y+J.smoothFlutterY*.34+J.bob*.28,J.z+J.bob*.5+J.smoothFlutterZ*.35,i,s);R.position.copy(C);const P=J.smoothFlap??J.flap,z=J.smoothFlapVel??J.flapVel,G=J.smoothSway??0,D=J.wingFlapMul??1,B=Math.sin(J.flapPhase*2+.4)*.045*D;R.rotation.set(Ge(J.rotX+z*.013+G*.05,-.1,zn),J.rotY+G*.14,Ge(J.rotZ+P*.048+G*.22,-zn,zn));const k=J.size*(J.departScale??1);R.scale.set(k,k,k),y.rotation.set(.08+P*.22+G*.09,.56+P*1.14*D,.06+P*.2+B),E.rotation.set(.08+P*.22+G*.09,-.56-P*1.14*D,-.06-P*.2-B),y.scale.set(-1,1,1),E.scale.set(1,1,1),R.updateMatrixWorld(!0)}function X(){if(!a||!l||!h)return;const J=Math.min(n.length,T);for(let C=0;C<T;C++){const P=C<J?n[C]:null;if(!P||P.size<.5){for(const nt of[a,l,h,u,f,p,m,M])W(nt,C);continue}Z(P);const z=ds(P.rgb,.98+P.opacity*.27),G=ds(P.pattern,1.08+P.opacity*.22),D=ds(P.outline,.78+P.opacity*.16),B=ds(P.rgb,.72+P.opacity*.22),k=ds(P.accent,1.03+P.opacity*.17);A.matrix.copy(R.matrixWorld),a.setMatrixAt(C,A.matrix),a.setColorAt(C,v.setRGB(B.r,B.g,B.b)),A.matrix.copy(y.matrixWorld),l.setMatrixAt(C,A.matrix),l.setColorAt(C,v.setRGB(z.r,z.g,z.b)),u.setMatrixAt(C,A.matrix),u.setColorAt(C,v.setRGB(D.r,D.g,D.b)),p.setMatrixAt(C,A.matrix),p.setColorAt(C,v.setRGB(G.r,G.g,G.b)),A.matrix.copy(E.matrixWorld),h.setMatrixAt(C,A.matrix),h.setColorAt(C,v.setRGB(z.r*.97,z.g*.99,z.b)),f.setMatrixAt(C,A.matrix),f.setColorAt(C,v.setRGB(D.r*.96,D.g*.98,D.b)),m.setMatrixAt(C,A.matrix),m.setColorAt(C,v.setRGB(G.r*.95,G.g*.97,G.b)),A.matrix.copy(R.matrixWorld),M.setMatrixAt(C,A.matrix),M.setColorAt(C,v.setRGB(k.r,k.g,k.b))}for(const C of[a,l,h,u,f,p,m,M])C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0);if(x&&(e.forEach((C,P)=>{const z=Qt(C.x,C.y,C.z,i,s);x.positions[P*3]=z.x,x.positions[P*3+1]=z.y,x.positions[P*3+2]=z.z;const G=.76+.48*Math.abs(Math.sin(r*2.8+C.phase)),D=ds(C.rgb,G*fo*1.08);x.colors[P*3]=Math.min(1,D.r),x.colors[P*3+1]=Math.min(1,D.g),x.colors[P*3+2]=Math.min(1,D.b)}),x.geo.setDrawRange(0,e.length),x.geo.attributes.position.needsUpdate=!0,x.geo.attributes.color.needsUpdate=!0),g){const C=Math.min(t.length,po);for(let P=0;P<C;P++){const z=t[P],G=Qt(z.x,z.y,z.z,i,s);g.positions[P*3]=G.x,g.positions[P*3+1]=G.y,g.positions[P*3+2]=G.z;const[D,B,k]=He(z.rgb),nt=.82+.34*Math.abs(Math.sin(r*8.5+(z.twinkle||0))),Y=(z.glow||1.72)*(.64+z.opacity*.66)*nt*fo,K=.12;g.colors[P*3]=Math.min(1,D*Y*(1-K)+K),g.colors[P*3+1]=Math.min(1,B*Y*(1-K)+K),g.colors[P*3+2]=Math.min(1,k*Y*(1-K)+K)}g.geo.setDrawRange(0,C),g.geo.attributes.position.needsUpdate=!0,g.geo.attributes.color.needsUpdate=!0}}function $(J,C){const P=new H(J,C);P.x=J+(Math.random()-.5)*i*.55,P.y=C+(Math.random()-.5)*s*.45,P.z=(Math.random()-.5)*340,n.push(P)}function rt(J,C){$(J,C)}function ot(J,C=!1){return new ee({color:16777215,transparent:!0,opacity:J,side:C?Pe:ue,depthWrite:!C,blending:Oe,toneMapped:!1})}function st(J,C,P=!1){const z=new $t(J,ot(C,P),T);return z.instanceColor=new Re(new Float32Array(T*3),3),z.frustumCulled=!1,z}return{init(J,C,P,z){i=J,s=C,n=[],t=[],e=[],r=0,I=0,o=z,d=Hf(),b=Gl(),w=Hl(),_=kf(),a=st(d,.88),l=st(b,.82),h=st(b,.82),u=st(b,.35,!0),f=st(b,.35,!0),p=st(w,.92),m=st(w,.92),M=st(_,.9);for(const G of[a,l,h,u,f,p,m,M])o.add(G);x=pe(ou,hv),g=pe(po,uv),x.mat.blending=jt,g.mat.blending=jt,x.mat.opacity=.78,g.mat.opacity=.72,o.add(x.points,g.points);for(const[G,D]of Cn(30,J,C,.06,[C*.1,C*.95]))rt(G,D);Xi(n),X();for(let G=0;G<ou;G++)e.push({x:Math.random()*J,y:Math.random()*C,z:(Math.random()-.5)*320,speedX:(Math.random()-.5)*.2,speedY:(Math.random()-.5)*.2,speedZ:(Math.random()-.5)*.15,phase:Math.random()*Math.PI*2,rgb:uo(G%3!==2?Ol(G):Po(G))})},resize(J,C){Tr(n,i,s,J,C),i=J,s=C},update(J,C,P,z){if(r+=J,n=n.filter(D=>D.update(J,r)),(C==null?void 0:C.velocity)>3){const D=Math.min(5,Math.floor(C.velocity/14)+1);for(let B=0;B<D;B++)rt(C.x+(Math.random()-.5)*60,C.y+(Math.random()-.5)*50)}if(Math.random()<J*2.1*(z.speed||1)&&rt(Math.random()*i,Math.random()*s*.85),P!=null&&P.isActive&&P.bass>.3){const D=Math.floor(P.bass*3);for(let B=0;B<D;B++)rt(Math.random()*i,Math.random()*s*.85)}t=t.filter(D=>(D.x+=(D.vx||0)*J,D.y+=(D.vy||0)*J,D.z+=(D.vz||0)*J,D.opacity-=J*.14,D.opacity>.02)),t.length>po&&t.splice(0,t.length-po),e.forEach(D=>{D.x+=(D.speedX||0)*(z.speed||1)*45*J,D.y+=(D.speedY||0)*(z.speed||1)*45*J,D.z+=(D.speedZ||0)*(z.speed||1)*45*J,D.x<-20&&(D.x=i+20),D.x>i+20&&(D.x=-20),D.y<-20&&(D.y=s+20),D.y>s+20&&(D.y=-20)});const G=Math.min(T,Math.max(24,Math.floor((z.particleCount||1030)/4)));n.length>G&&n.splice(0,n.length-G)},render(){X()},onPointerDown(J,C){for(let P=0;P<8;P++)rt(J+(Math.random()-.5)*80,C+(Math.random()-.5)*60)},onPointerMove(){},onPointerUp(){},setParams(){},setPalette(){},samplePoints(J,C=i,P=s){const{w:z,h:G}=rn(C,P,i,s);return Rr(n,J,z,G,An)},destroy(){n=[],t=[],e=[],d==null||d.dispose(),b==null||b.dispose(),w==null||w.dispose(),_==null||_.dispose(),a=null,l=null,h=null,u=null,f=null,p=null,m=null,M=null,x=null,g=null,o=null}}}const Oo=Ns,Vf=Us;function Mv(){const n=new Vt(.3,28,22);n.scale(1.42,1.08,1.16),n.translate(.4,.04,0);const t=new Vt(.2,16,14);return t.scale(1.15,.82,1.02),t.translate(.34,-.06,.02),Oo([n,t])}function _v(){const n=new we(.34,.01,6,36);return n.rotateY(Math.PI/2),n.scale(1.15,1,1.08),n.translate(.4,.04,0),Vf(n)}function xv(){const n=new Vt(.1,12,10);return n.scale(1.35,.9,1.15),n.translate(.4,.04,0),Vf(n)}function vv(){const n=new Vt(.042,12,10);n.translate(.58,.1,.2);const t=new Vt(.042,12,10);return t.translate(.58,.1,-.2),Oo([n,t])}function yv(){const n=new Vt(.02,10,8);n.translate(.605,.1,.215);const t=new Vt(.02,10,8);return t.translate(.605,.1,-.215),Oo([n,t])}function Sv(){const n=new Ke;n.moveTo(.02,.02),n.quadraticCurveTo(-.2,.16,-.5,.11),n.quadraticCurveTo(-.85,.08,-1.15,.05),n.quadraticCurveTo(-1.25,.025,-1.3,.008),n.lineTo(-1.3,-.008),n.quadraticCurveTo(-1.25,-.025,-1.15,-.045),n.quadraticCurveTo(-.85,-.06,-.5,-.07),n.quadraticCurveTo(-.2,-.06,-.02,-.012),n.lineTo(.02,-.008),n.closePath();const t=new Mn(n,{depth:.045,bevelEnabled:!1,curveSegments:14});t.translate(0,.02,-.022);const e=new Gn(.028,.008,1.15,8);e.rotateZ(Math.PI/2),e.translate(-.62,.02,0);const i=[];for(let s=0;s<12;s++){const r=Math.random(),o=-.08-r*1.15,a=(Math.random()-.5)*.1*(1-r*.55)+.02,l=.01+Math.random()*.014,h=new Vt(l,6,5);h.translate(o,a,(Math.random()-.5)*.04),i.push(h)}return Oo([t,e,...i])}function bv(){const n=Math.random()*2-1,t=Math.random()*Math.PI*2,e=Math.sqrt(Math.max(0,1-n*n));return{x:e*Math.cos(t),y:e*Math.sin(t),z:n}}function wv(){let n=[],t=[],e=[],i=0,s=0,r=0,o="rainbow",a=null,l=null,h=null,u=null,f=null,p=null,m=null,M=null,x=null,g=null,d=null,b=null,w=null,_=null,R=null;const y=new Yt,E=new kt,A=new q,v=new q(1,0,0),S=new zi,T=new zi,I=new q(0,0,1),U=new q(0,1,0),V=260,H=128;class W{constructor(z,G,D){this.x=z,this.y=G,this.z=(Math.random()-.5)*V,this.maxSize=vx(),this.size=0,this.growth=0,this.growthRate=.4+Math.random()*.45;const B=bv();this.dirX=B.x,this.dirY=B.y,this.dirZ=B.z,this.speed=70+Math.random()*70,this.wagPhase=Math.random()*Math.PI*2,this.wagSpeed=28+Math.random()*12,this.tremblePhase=Math.random()*Math.PI*2,this.trembleSpeed=42+Math.random()*18;const k=[.5,1/3,.25][Math.floor(Math.random()*3)];this.wagAmp=(.75+Math.random()*.35)*k,this.trembleAmp=(.22+Math.random()*.14)*k,this.color=Ea(),this.rgb=Ui(this.color),this.innerRgb={r:Math.min(255,this.rgb.r+50),g:Math.min(255,this.rgb.g+40),b:Math.min(255,this.rgb.b+55)},this.lifetime=0,this.maxLifetime=8+Math.random()*5,this.phase="growing",this.opacity=1,this.wag=0}update(z,G){this.lifetime+=z;const D=Math.sin(G*this.wagSpeed+this.wagPhase)*this.wagAmp,B=Math.sin(G*this.trembleSpeed+this.tremblePhase)*this.trembleAmp+Math.sin(G*this.trembleSpeed*2.1+this.tremblePhase*1.4)*this.trembleAmp*.65+Math.sin(G*this.trembleSpeed*3.4+this.tremblePhase*.6)*this.trembleAmp*.35;this.wag=D+B;const k=.65+Math.abs(this.wag)*.95,nt=this.speed*k*z;this.x+=this.dirX*nt,this.y+=this.dirY*nt,this.z+=this.dirZ*nt;const Y=80;switch(this.x<-Y&&(this.x=i+Y),this.x>i+Y&&(this.x=-Y),this.y<-Y&&(this.y=s+Y),this.y>s+Y&&(this.y=-Y),this.z<-V*.5&&(this.z=V*.5),this.z>V*.5&&(this.z=-V*.5),this.phase){case"growing":{this.growth=Math.min(1,this.growth+this.growthRate*z);const K=1.70158,N=K+1,vt=this.growth;this.size=this.maxSize*(1+N*Math.pow(vt-1,3)+K*Math.pow(vt-1,2)),this.growth>=1&&(this.phase="bloomed");break}case"bloomed":this.lifetime>this.maxLifetime*.6&&(this.phase="wilting"),Math.random()<z*4.5&&this._sparkTrail();break;case"wilting":this.opacity-=z*.25,Math.random()<z*5&&this._shed(),Math.random()<z*6&&this._sparkTrail();break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_shed(){for(let z=0;z<4+Math.floor(Math.random()*4);z++){const G=Ui(Ea());t.push({x:this.x+(Math.random()-.5)*this.size,y:this.y+(Math.random()-.5)*this.size,z:this.z+(Math.random()-.5)*50,vx:(Math.random()-.5)*90,vy:-10-Math.random()*50,vz:(Math.random()-.5)*55,rgb:{r:Math.round(G.r+(255-G.r)*.72),g:Math.round(G.g+(255-G.g)*.72),b:Math.round(G.b+(255-G.b)*.72)},opacity:1,glow:1.55+Math.random()*.7,kind:"shard",twinkle:Math.random()*Math.PI*2})}}_sparkTrail(){const z=Ui(this.color);t.push({x:this.x-this.dirX*this.size*.35+(Math.random()-.5)*this.size*.4,y:this.y-this.dirY*this.size*.35+(Math.random()-.5)*this.size*.4,z:this.z-this.dirZ*12+(Math.random()-.5)*30,vx:-this.dirX*20+(Math.random()-.5)*40,vy:-this.dirY*20+(Math.random()-.5)*40,vz:-this.dirZ*20+(Math.random()-.5)*30,rgb:{r:Math.round(z.r+(255-z.r)*.78),g:Math.round(z.g+(255-z.g)*.78),b:Math.round(z.b+(255-z.b)*.78)},opacity:1,glow:1.7+Math.random()*.7,kind:"dust",twinkle:Math.random()*Math.PI*2})}}function Z(P,z){y.position.set(0,0,-4e3),y.scale.set(.001,.001,.001),y.quaternion.identity(),y.updateMatrix(),P.setMatrixAt(z,y.matrix),P.instanceColor&&P.setColorAt(z,E.setRGB(0,0,0))}function X(P,z){A.set(P.dirX,-P.dirY,P.dirZ),A.lengthSq()<1e-8?A.set(1,0,0):A.normalize(),Math.abs(A.x)>.999?(S.identity(),A.x<0&&S.setFromAxisAngle(U,Math.PI)):S.setFromUnitVectors(v,A),T.setFromAxisAngle(I,P.wag*z),y.quaternion.copy(S).multiply(T)}function $(P,z=1){const G=Qt(P.x,P.y,P.z,i,s);y.position.copy(G),X(P,.12);const D=P.size*z;y.scale.set(D,D,D),y.updateMatrix()}function rt(P,z=1){const G=Qt(P.x,P.y,P.z,i,s);y.position.copy(G),X(P,1.35);const D=P.size*z,B=1+Math.sin(r*P.trembleSpeed+P.tremblePhase)*.16+Math.sin(r*P.trembleSpeed*2.4+P.tremblePhase)*.08;y.scale.set(D*B,D/Math.sqrt(Math.max(.55,B)),D),y.updateMatrix()}function ot(){if(!l||!m||!f||!p)return;const P=Math.min(n.length,H),z=[l,h,u,f,p,m];for(let G=0;G<H;G++){const D=G<P?n[G]:null;if(!D||D.size<.5){for(const K of z)Z(K,G);continue}const B=_s(D.rgb,.95),k=_s(D.innerRgb,1.25),nt=_s(D.innerRgb,1.1),Y=_s(D.rgb,.75);$(D,1),l.setMatrixAt(G,y.matrix),l.setColorAt(G,E.setRGB(B.r*.55,B.g*.7,Math.min(1,B.b*.95))),$(D,1),h.setMatrixAt(G,y.matrix),h.setColorAt(G,E.setRGB(k.r,k.g,k.b)),$(D,.92),u.setMatrixAt(G,y.matrix),u.setColorAt(G,E.setRGB(Math.min(1,nt.r*.7+.25),Math.min(1,nt.g*.75+.3),Math.min(1,nt.b*.7+.35))),$(D,1),f.setMatrixAt(G,y.matrix),f.setColorAt(G,E.setRGB(.82,.94,1)),$(D,1),p.setMatrixAt(G,y.matrix),p.setColorAt(G,E.setRGB(.04,.06,.12)),rt(D,1),m.setMatrixAt(G,y.matrix),m.setColorAt(G,E.setRGB(Y.r*.5,Y.g*.65,Math.min(1,Y.b*.9)))}for(const G of z)G.instanceMatrix.needsUpdate=!0,G.instanceColor&&(G.instanceColor.needsUpdate=!0);if(M&&(e.forEach((G,D)=>{const B=Qt(G.x,G.y,G.z,i,s);M.positions[D*3]=B.x,M.positions[D*3+1]=B.y,M.positions[D*3+2]=B.z;const k=.55+.35*Math.abs(Math.sin(r*3.4+G.phase)),nt=G.rgb.r/255*.28+.72,Y=G.rgb.g/255*.28+.72,K=G.rgb.b/255*.28+.72;M.colors[D*3]=nt*k,M.colors[D*3+1]=Y*k,M.colors[D*3+2]=K*k}),M.geo.setDrawRange(0,e.length),M.geo.attributes.position.needsUpdate=!0,M.geo.attributes.color.needsUpdate=!0),x){const G=Math.min(t.length,700);for(let D=0;D<G;D++){const B=t[D],k=Qt(B.x,B.y,B.z,i,s);x.positions[D*3]=k.x,x.positions[D*3+1]=k.y,x.positions[D*3+2]=k.z;const[nt,Y,K]=He(B.rgb),N=nt*.3+.7,vt=Y*.3+.7,ut=K*.3+.7,yt=.7+.3*Math.abs(Math.sin(r*9+(B.twinkle||0))),mt=(B.glow||1.6)*(.55+B.opacity*.45)*yt;x.colors[D*3]=Math.min(1,N*mt),x.colors[D*3+1]=Math.min(1,vt*mt),x.colors[D*3+2]=Math.min(1,ut*mt)}x.geo.setDrawRange(0,G),x.geo.attributes.position.needsUpdate=!0,x.geo.attributes.color.needsUpdate=!0}}function st(P,z){n.push(new W(P,z,o))}function J(P,z){st(P,z),st(P+(Math.random()-.5)*100,z+(Math.random()-.5)*80)}function C(P,z=!1){return new ee({color:16777215,transparent:!0,opacity:P,side:ue,depthWrite:!1,blending:z?jt:Oe,toneMapped:!1})}return{init(P,z,G,D){i=P,s=z,o=G.palette||"rainbow",n=[],t=[],e=[],r=0,a=D,g=Mv(),d=_v(),b=xv(),w=vv(),_=yv(),R=Sv(),l=new $t(g,C(.28,!0),H),h=new $t(d,C(.85,!0),H),u=new $t(b,C(.45,!0),H),f=new $t(w,C(.95,!1),H),p=new $t(_,C(1,!1),H),m=new $t(R,C(.22,!0),H);for(const B of[l,h,u,f,p,m])B.instanceColor=new Re(new Float32Array(H*3),3),B.frustumCulled=!1,a.add(B);M=pe(80,5),x=pe(700,14),M.mat.blending=jt,x.mat.blending=jt,M.mat.opacity=.7,x.mat.opacity=.65,M.mat.toneMapped=!1,x.mat.toneMapped=!1,a.add(M.points,x.points);for(const[B,k]of Cn(40,P,z))J(B,k);Xi(n),ot();for(let B=0;B<70;B++)e.push({x:Math.random()*P,y:Math.random()*z,z:(Math.random()-.5)*220,speedY:-(.08+Math.random()*.25),phase:Math.random()*Math.PI*2,rgb:(()=>{const k=Ui(Ea());return{r:Math.round(k.r+(255-k.r)*.75),g:Math.round(k.g+(255-k.g)*.75),b:Math.round(k.b+(255-k.b)*.75)}})()})},resize(P,z){({width:i,height:s}=gc(n,i,s,P,z))},update(P,z,G,D){if(r+=P,o=D.palette||o,n=n.filter(k=>k.update(P,r)),(z==null?void 0:z.velocity)>3){const k=Math.min(4,Math.floor(z.velocity/16)+1);for(let nt=0;nt<k;nt++)st(z.x+(Math.random()-.5)*50,z.y+(Math.random()-.5)*50)}if(Math.random()<P*3.6*(D.speed||1)&&J(Math.random()*i,Math.random()*s),G!=null&&G.isActive&&G.bass>.3){const k=Math.floor(G.bass*8);for(let nt=0;nt<k;nt++)J(Math.random()*i,Math.random()*s)}t=t.filter(k=>(k.x+=k.vx*P,k.y+=k.vy*P,k.z+=k.vz*P,k.vy+=18*P,k.opacity-=P*.12,k.opacity>.02&&k.y<s+80)),e.forEach(k=>{k.y+=k.speedY*(D.speed||1)*60*P,k.y<-10&&(k.y=s+10,k.x=Math.random()*i)});const B=Math.min(H,Math.max(40,Math.floor((D.particleCount||1030)/2)));n.length>B&&n.splice(0,n.length-B)},render(){ot()},onPointerDown(P,z){for(let G=0;G<12;G++)J(P+(Math.random()-.5)*90,z+(Math.random()-.5)*90)},onPointerMove(){},onPointerUp(){},setParams(P){o=P.palette||o},samplePoints(P,z=i,G=s){return Mc(n,P,z,G,i,s)},destroy(){n=[],t=[],e=[],g==null||g.dispose(),d==null||d.dispose(),b==null||b.dispose(),w==null||w.dispose(),_==null||_.dispose(),R==null||R.dispose(),l=null,h=null,u=null,f=null,p=null,m=null,M=null,x=null,a=null}}}const Ce=.16,Ev={depth:Ce,bevelEnabled:!0,bevelThickness:.018,bevelSize:.012,bevelSegments:2,curveSegments:20},Sr=.16,br=.115,kl=-.42,wr=.038,fr=1.05;function Xe(n,t,e=Ce,i=0,s=0,r=0,o=0){const a=new be(n,t,e);return o&&a.rotateZ(o),a.translate(i,s,r),a}function Av(n){const t=n.index?n.toNonIndexed():n.clone();t.computeVertexNormals();const e=t.attributes.position.count;return t.attributes.uv||t.setAttribute("uv",new te(new Float32Array(e*2),2)),t}function _n(n){const t=n.filter(Boolean).map(Av);if(t.length===0){const i=new be(.25,.25,Ce);return i.center(),i}if(t.length===1)return t[0].center(),t[0].computeVertexNormals(),t[0];const e=Yn(t,!1);return e?(e.center(),e.computeVertexNormals(),e):(t[0].center(),t[0])}function Fs(n){return new Mn(n,Ev)}function rr(n,t=.04,e=48){const i=n.map(([s,r])=>new q(s,r,0));return new ri(new Ri(i,!1,"catmullrom",.5),e,t,8,!1)}function Tv(n,t){const e=new Ke;return e.absellipse(n,t,Sr,br,0,Math.PI*2,!1,kl),Fs(e)}function Rv(n,t){const e=new Ke;e.absellipse(n,t,Sr,br,0,Math.PI*2,!1,kl);const i=new gr;return i.absellipse(n,t,Sr*.55,br*.55,0,Math.PI*2,!0,kl),e.holes.push(i),Fs(e)}function Er(n,t){const e=n+Sr*.7,i=t+br*.25,s=i+fr;return{stemX:e,stemTop:s,stemBase:i,parts:[Tv(n,t),Xe(wr,fr,Ce,e,i+fr*.5,0)]}}function Vl(n,t,e=0){const i=t-e,s=new Ke;return s.moveTo(n+wr*.45,i),s.quadraticCurveTo(n+.22,i-.02,n+.34,i-.18),s.quadraticCurveTo(n+.38,i-.34,n+.28,i-.48),s.quadraticCurveTo(n+.2,i-.52,n+.16,i-.4),s.quadraticCurveTo(n+.24,i-.28,n+.18,i-.14),s.lineTo(n+wr*.45,i-.1),s.closePath(),Fs(s)}function Cv(){const n=rr([[.02,.72],[0,.35],[-.02,0],[0,-.35],[.04,-.55]],.045,40),t=rr([[.02,.55],[.18,.62],[.22,.48],[.1,.38],[-.02,.42],[0,.55]],.042,36),e=rr([[0,.2],[.16,.12],[.2,-.05],[.08,-.18],[-.08,-.1],[-.12,.08],[-.02,.18]],.042,44),i=rr([[.04,-.4],[.16,-.48],[.1,-.62],[-.04,-.58],[-.08,-.42],[.02,-.38]],.04,36),s=new Ke;s.absellipse(.04,-.02,.11,.14,0,Math.PI*2,!1,.2);const r=new gr;return r.absellipse(.04,-.02,.045,.06,0,Math.PI*2,!0,.2),s.holes.push(r),_n([n,t,e,i,Fs(s)])}function Pv(){return _n([Xe(.048,1.12,Ce,-.17,0,0,.06),Xe(.048,1.12,Ce,.17,0,0,.06),Xe(.56,.052,Ce,0,.2,0,.28),Xe(.56,.052,Ce,0,-.2,0,.28)])}function Lv(){const n=Xe(.048,1.15,Ce,-.16,.05,0),t=new Ke;return t.moveTo(-.16,.12),t.quadraticCurveTo(.18,.38,.2,.02),t.quadraticCurveTo(.18,-.32,-.16,-.48),t.lineTo(-.16,-.3),t.quadraticCurveTo(.04,-.2,.06,0),t.quadraticCurveTo(.04,.18,-.16,0),t.closePath(),_n([n,Fs(t)])}function Iv(){return _n([Xe(.048,.62,Ce,-.14,.28,0),Xe(.048,.62,Ce,.14,-.28,0),Xe(.36,.048,Ce,0,.18,0,.12),Xe(.36,.048,Ce,0,-.18,0,.12)])}function Dv(){return _n(Er(-.04,-.38).parts)}function Uv(){const e=-.04+Sr*.7,i=-.38+br*.25;return _n([Rv(-.04,-.38),Xe(wr,fr,Ce,e,i+fr*.5,0)])}function Nv(){return _n([Xe(.055,1.05,Ce,.06,0,0,-.12),Xe(.55,.058,Ce,-.1,.38,0,-.1),Xe(.38,.052,Ce,-.02,.05,0,-.1),rr([[.06+.02,.48],[.06+.12,.58],[.06+.04,.64]],.036,14)])}function Fv(){const t=Xe(.055,1,Ce,-.1,-.02,0,-.1),e=new Ke;return e.moveTo(-.1,.18),e.quadraticCurveTo(-.1+.38,.28,-.1+.4,-.02),e.quadraticCurveTo(-.1+.38,-.32,-.1,-.28),e.lineTo(-.1,-.14),e.quadraticCurveTo(-.1+.22,-.16,-.1+.24,-.02),e.quadraticCurveTo(-.1+.22,.12,-.1,.08),e.closePath(),_n([t,Fs(e)])}function zv(){const n=Er(-.04,-.38);return _n([...n.parts,Vl(n.stemX,n.stemTop,0)])}function Ov(){const n=Er(-.04,-.38);return _n([...n.parts,Vl(n.stemX,n.stemTop,0),Vl(n.stemX,n.stemTop,.18)])}function Wf(n){const r=Er(-.24,-.38),o=Er(.24,-.38),a=.07,l=Math.min(r.stemTop,o.stemTop)-.04,h=[...r.parts,...o.parts];for(let u=0;u<n;u++){const f=l-u*.14;h.push(Xe(.48+wr,a,Ce,0,f,0,.04))}return _n(h)}function Bv(){return Wf(1)}function Gv(){return Wf(2)}const Pi=["trebleClef","sharp","flat","natural","quarter","half","forte","piano","eighth","sixteenth","beamedEighth","beamedSixteenth"],Hv={trebleClef:Cv,sharp:Pv,flat:Lv,natural:Iv,quarter:Dv,half:Uv,forte:Nv,piano:Fv,eighth:zv,sixteenth:Ov,beamedEighth:Bv,beamedSixteenth:Gv};function kv(){return Pi[Math.floor(Math.random()*Pi.length)]}function Vv(){return kv()}const Wv=.36,Xv=.12,mo=1.2,hu=140,Ca=1200,Yv=3,qv=1.35,Zv=1.05;function Jv(){let n=[],t=[],e=[],i=0,s=0,r=0,o="rainbow",a=null,l={},h=null,u=null;const f=new Yt,p=new kt,m=new q,M=64,x=10;class g{constructor(E,A,v){this.x=E,this.y=A,this.z=(Math.random()-.5)*280,this.note=Vv(),this.maxSize=_x(),this.size=0,this.growth=0,this.growthRate=(.35+Math.random()*.5)*qv,this.baseRot=(Math.random()-.5)*.35,this.tilt=(Math.random()-.5)*.45,this.yaw=(Math.random()-.5)*.55,this.windPhase=Math.random()*Math.PI*2,this.windSpeed=.42+Math.random()*.28,this.windAmp=.07+Math.random()*.06,this.spinX=.22+Math.random()*.18,this.spinY=.28+Math.random()*.22,this.spinZ=.12+Math.random()*.1,this.phaseX=Math.random()*Math.PI*2,this.phaseY=Math.random()*Math.PI*2,this.phaseZ=Math.random()*Math.PI*2,this.bobPhase=Math.random()*Math.PI*2,this.bobSpeed=.52+Math.random()*.38,this.driftZ=(Math.random()-.5)*28,this.driftPhase=Math.random()*Math.PI*2,this.glidePhase=Math.random()*Math.PI*2,this.flowAngle=Math.random()*Math.PI*2,this.flowTurn=.18+Math.random()*.32,this.flutterAmp=.72+Math.random()*.55,this.smoothRate=.9+Math.random()*.75;const S=7+Math.random()*10;this.vx=Math.cos(this.flowAngle)*S,this.vy=-5-Math.random()*7,this.vz=(Math.random()-.5)*22,this.targetVx=this.vx,this.targetVy=this.vy,this.targetVz=this.vz,this.swayX=0,this.swayY=0,this.swayZ=0,this.color=pc(v),this.rgb=Lf(this.color),this.innerRgb=Pf(this.rgb),this.lifetime=0,this.maxLifetime=6+Math.random()*6,this.phase="growing",this.opacity=1,this.bloomedAt=null}update(E,A){this.lifetime+=E,this.flowAngle+=this.flowTurn*E*(.45+.35*Math.sin(A*.28+this.driftPhase));const v=(6+Math.sin(A*.32+this.glidePhase)*3.5)*this.flutterAmp;this.targetVx=Math.cos(this.flowAngle)*v+Math.sin(A*.4+this.phaseX)*7,this.targetVy=Math.sin(this.flowAngle)*v*.3-4.5+Math.cos(A*.3+this.bobPhase)*3.5,this.targetVz=Math.sin(A*.26+this.windPhase)*v*.42+Math.cos(this.flowAngle*1.2+this.glidePhase)*5;const S=1-Math.exp(-this.smoothRate*E);this.vx+=(this.targetVx-this.vx)*S,this.vy+=(this.targetVy-this.vy)*S,this.vz+=(this.targetVz-this.vz)*S,m.set(this.vx,this.vy,this.vz);const T=m.length();T>28&&m.multiplyScalar(28/T),T<4&&T>.01&&m.multiplyScalar(4/T),this.vx=m.x,this.vy=m.y,this.vz=m.z;const I=this.flutterAmp;switch(this.swayX=Math.sin(A*.58+this.phaseX)*22*I+Math.sin(A*1.12+this.driftPhase)*9*I,this.swayY=Math.cos(A*.46+this.bobPhase)*18*I+Math.sin(A*.92+this.phaseY)*7*I,this.swayZ=Math.sin(A*.38+this.windPhase)*16*I+Math.cos(A*.74+this.driftPhase)*8*I,this.x+=this.vx*E+this.swayX*E*.55,this.y+=this.vy*E+this.swayY*E*.55,this.z+=this.vz*E+this.swayZ*E*.48,this.tumbleX=Math.sin(A*this.spinX+this.phaseX)*.2,this.tumbleY=Math.sin(A*this.spinY+this.phaseY)*.34,this.tumbleZ=Math.sin(A*this.spinZ+this.phaseZ)*.1,this.bob=Math.sin(A*this.bobSpeed+this.bobPhase)*28,this._softBounds(E),this.phase){case"growing":this.growth=Math.min(1,this.growth+this.growthRate*E),this.size=this.maxSize*Of(this.growth),this.growth>=1&&(this.phase="bloomed",this.bloomedAt=this.lifetime);break;case"bloomed":this.bloomedAt==null&&(this.bloomedAt=this.lifetime),this.lifetime-this.bloomedAt>=Zv&&Math.random()<E*3.5&&this._shedDust(),this.lifetime>this.maxLifetime*.55&&(this.phase="wilting");break;case"wilting":this.opacity-=E*.28,Math.random()<E*7.5&&this._shedShard(),Math.random()<E*9.5&&this._shedDust();break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_softBounds(E){const v=22*E;this.x<60&&(this.vx+=v,this.flowAngle+=E*.35),this.x>i-60&&(this.vx-=v,this.flowAngle-=E*.35),this.y<60&&(this.vy+=v*.5),this.y>s-60&&(this.vy-=v*.4);const S=80;this.x<-S&&(this.x=i+S*.4),this.x>i+S&&(this.x=-S*.4),this.y<-S&&(this.y=s+S*.4),this.y>s+S&&(this.y=-S*.4),this.z<-260&&(this.z=220),this.z>260&&(this.z=-220)}_shedShard(){for(let E=0;E<3+Math.floor(Math.random()*3);E++)t.push({x:this.x+(Math.random()-.5)*this.size,y:this.y+(Math.random()-.5)*this.size,z:this.z+(Math.random()-.5)*40,vx:(Math.random()-.5)*65,vy:-18-Math.random()*40,vz:(Math.random()-.5)*42,size:this.size*.12+Math.random()*6,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*6,rgb:Rs(this.rgb,1.42),opacity:1,glow:(1.78+Math.random()*.4)*mo,kind:"shard"})}_shedDust(){for(let E=0;E<5+Math.floor(Math.random()*4);E++)t.push({x:this.x+(Math.random()-.5)*this.size*.5,y:this.y+(Math.random()-.5)*this.size*.5,z:this.z+(Math.random()-.5)*30,vx:(Math.random()-.5)*85,vy:(Math.random()-.5)*85-8,vz:(Math.random()-.5)*55,size:2+Math.random()*5,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*8,rgb:Rs(this.innerRgb,1.48),opacity:1,glow:(1.88+Math.random()*.4)*mo,kind:"dust"})}}function d(y,E=1){const A=Math.sin(r*y.windSpeed+y.windPhase),v=Math.sin(r*y.windSpeed*1.37+y.windPhase*1.2),S=Qt(y.x+y.swayX*.08,y.y+y.swayY*.08,y.z+y.bob+v*y.driftZ+y.swayZ*.1,i,s);f.position.copy(S),f.position.x+=A*y.windAmp*y.size*.32,f.position.y+=Math.sin(r*y.bobSpeed*.65+y.bobPhase)*y.size*.06,f.position.z+=v*y.windAmp*y.size*.18;const T=Math.atan2(y.vx+y.swayX*.3,y.vy+y.swayY*.3+.001)*.14;f.rotation.set(y.tilt+y.tumbleX+A*y.windAmp*.45,y.yaw+y.tumbleY+v*.12+T,y.baseRot+y.tumbleZ+v*y.windAmp*.28);const I=y.size*E;return f.scale.set(I,I,I*1.55),f.updateMatrix(),S}function b(y,E){f.position.set(0,0,-4e3),f.scale.set(.001,.001,.001),f.rotation.set(0,0,0),f.updateMatrix(),y.setMatrixAt(E,f.matrix),y.instanceColor&&y.setColorAt(E,p.setRGB(0,0,0))}function w(){if(!Pi.every(A=>l[A]))return;const y=Object.fromEntries(Pi.map(A=>[A,[]])),E=Math.min(n.length,M);for(let A=0;A<E;A++){const v=n[A];v&&v.size>=.5&&y[v.note].push(v)}for(const A of Pi){const v=l[A],S=y[A];for(let T=0;T<x;T++){const I=S[T];if(!I){b(v.mesh,T),b(v.outline,T);continue}d(I,1),v.mesh.setMatrixAt(T,f.matrix);const U=Di(I.rgb,.92+I.opacity*.32);v.mesh.setColorAt(T,p.setRGB(U.r,U.g,U.b)),d(I,1.03),v.outline.setMatrixAt(T,f.matrix);const V=Di(I.rgb,.38);v.outline.setColorAt(T,p.setRGB(V.r*.55,V.g*.5,V.b*.75))}v.mesh.instanceMatrix.needsUpdate=!0,v.outline.instanceMatrix.needsUpdate=!0,v.mesh.instanceColor&&(v.mesh.instanceColor.needsUpdate=!0),v.outline.instanceColor&&(v.outline.instanceColor.needsUpdate=!0)}if(h&&(e.forEach((A,v)=>{const S=Qt(A.x,A.y,A.z,i,s);h.positions[v*3]=S.x,h.positions[v*3+1]=S.y,h.positions[v*3+2]=S.z;const T=.26+.28*Math.abs(Math.sin(r*2.8+A.phase)),I=Di(A.rgb,T*1.28*mo);h.colors[v*3]=Math.min(1,I.r),h.colors[v*3+1]=Math.min(1,I.g),h.colors[v*3+2]=Math.min(1,I.b)}),h.geo.setDrawRange(0,e.length),h.geo.attributes.position.needsUpdate=!0,h.geo.attributes.color.needsUpdate=!0),u){const A=Math.min(t.length,Ca);for(let v=0;v<A;v++){const S=t[v],T=Qt(S.x,S.y,S.z,i,s);u.positions[v*3]=T.x,u.positions[v*3+1]=T.y,u.positions[v*3+2]=T.z;const[I,U,V]=He(S.rgb),H=(S.glow||1.68)*(.62+S.opacity*.66)*mo,W=S.kind==="dust"?.96+.14*Math.sin(r*8+S.rot*3):1.08;u.colors[v*3]=Math.min(1,I*H*W),u.colors[v*3+1]=Math.min(1,U*H*W),u.colors[v*3+2]=Math.min(1,V*H*W)}u.geo.setDrawRange(0,A),u.geo.attributes.position.needsUpdate=!0,u.geo.attributes.color.needsUpdate=!0}}function _(y,E){n.push(new g(y,E,o))}const R={color:16777215,transparent:!0,side:ue,depthWrite:!1,blending:Oe,toneMapped:!1};return{init(y,E,A,v){i=y,s=E,o=A.palette||"rainbow",n=[],t=[],e=[],r=0,a=v,l={};for(const S of Pi){let T;try{T=Hv[S]()}catch(V){console.error("[musicNoteBloom] geometry failed:",S,V),T=new be(.2,.2,Ce),T.center()}const I=new $t(T,new ee({...R,opacity:Wv,blending:jt}),x);I.instanceColor=new Re(new Float32Array(x*3),3),I.frustumCulled=!1,a.add(I);const U=new $t(T,new ee({...R,side:Pe,opacity:Xv,depthWrite:!1}),x);U.instanceColor=new Re(new Float32Array(x*3),3),U.frustumCulled=!1,a.add(U),l[S]={mesh:I,outline:U,geo:T}}h=pe(hu,5),u=pe(Ca,14),h.mat.opacity=.76,u.mat.opacity=.7,h.mat.blending=jt,u.mat.blending=jt,a.add(h.points,u.points);for(const[S,T]of Cn(28,y,E))_(S,T);Xi(n),w();for(let S=0;S<hu;S++)e.push({x:Math.random()*y,y:Math.random()*E,z:(Math.random()-.5)*220,speedY:-(.12+Math.random()*.32),phase:Math.random()*Math.PI*2,rgb:mc(o)})},resize(y,E){({width:i,height:s}=gc(n,i,s,y,E))},update(y,E,A,v){r+=y,o=v.palette||o,n=n.filter(T=>T.update(y,r)),Nf({dt:y,pointer:E,audioData:A,params:v,spawn:T=>_(T.x+(Math.random()-.5)*50,T.y+(Math.random()-.5)*50),randomSpawn:()=>_(Math.random()*i,Math.random()*s),bassSpawn:()=>_(Math.random()*i,Math.random()*s),randomRate:Yv,pointerMax:3}),t=t.filter(T=>(T.x+=T.vx*y,T.y+=T.vy*y,T.z+=T.vz*y,T.vy+=18*y,T.opacity-=y*(T.kind==="dust"?.14:.1),T.opacity>.02&&T.y<s+80)),Ff(t,Ca),e.forEach(T=>{T.y+=T.speedY*(v.speed||1)*78*y,T.y<-10&&(T.y=s+10,T.x=Math.random()*i)});const S=Math.min(M,Math.max(28,Math.floor((v.particleCount||1030)/3.2)));zf(n,S)},render(){w()},onPointerDown(y,E){for(let A=0;A<6;A++)_(y+(Math.random()-.5)*90,E+(Math.random()-.5)*90)},onPointerMove(){},onPointerUp(){},setParams(y){o=y.palette||o},samplePoints(y,E=i,A=s){return Mc(n,y,E,A,i,s)},destroy(){var y,E;n=[],t=[],e=[];for(const A of Pi)(E=(y=l[A])==null?void 0:y.geo)==null||E.dispose();l={},h=null,u=null,a=null}}}const Bo=Ns,Sc=Us;function Kv(n=.14,t=.055){const e=new Ke;for(let i=0;i<5;i++){const s=i*Math.PI*2/5-Math.PI/2,r=s+Math.PI/5,o=Math.cos(s)*n,a=Math.sin(s)*n,l=Math.cos(r)*t,h=Math.sin(r)*t;i===0?e.moveTo(o,a):e.lineTo(o,a),e.lineTo(l,h)}return e.closePath(),e}function $v(){const n=new Ke;return n.moveTo(.02,.12),n.quadraticCurveTo(.28,.38,.52,.22),n.quadraticCurveTo(.62,.08,.58,-.06),n.quadraticCurveTo(.5,-.16,.42,-.1),n.quadraticCurveTo(.34,-.2,.26,-.1),n.quadraticCurveTo(.18,-.2,.1,-.08),n.quadraticCurveTo(.04,-.02,.02,.08),n.closePath(),n}const uu={depth:.16,bevelEnabled:!0,bevelThickness:.025,bevelSize:.018,bevelSegments:2,curveSegments:18};function jv(){const n=[],t=new Vt(.18,18,14);t.translate(0,.42,.06),n.push(t);const e=new Vt(.11,12,10);e.scale(1.45,.6,.9),e.translate(.09,.55,.02),n.push(e);const i=new Ke;i.moveTo(-.11,.22),i.lineTo(.11,.22),i.lineTo(.22,-.48),i.lineTo(-.22,-.48),i.closePath();const s=new Mn(i,uu);s.translate(0,0,-uu.depth*.5),n.push(s);const r=new Mn(Kv(.1,.04),{depth:.08,bevelEnabled:!0,bevelThickness:.012,bevelSize:.01,bevelSegments:1,curveSegments:2});return r.translate(0,.02,.14),n.push(r),Bo(n)}function Xf(n,t,e=.008){const i={x:0,y:.42,z:.06},s=.168,r=Math.hypot(n,t),o=Math.sqrt(Math.max(1e-4,s*s-r*r));return[i.x+n,i.y+t,i.z+o+e]}function Qv(){const n=[];for(const t of[-1,1]){const e=new we(.054,.013,8,22,Math.PI*.92);e.scale(1,1,.34);const[i,s,r]=Xf(t*.072,.022,.012);e.translate(i,s,r),n.push(e)}return Bo(n)}function ty(){const n=new we(.036,.011,6,16,Math.PI*.72);n.rotateZ(Math.PI),n.scale(1,1,.34);const[t,e,i]=Xf(0,-.055,.012);return n.translate(t,e,i),Sc(n)}function ey(){const n=new Vt(.001,4,4);return n.translate(0,-10,0),Sc(n)}function ny(){const n=[];for(const t of[-1,1]){const e=new Vt(.03,10,8);e.scale(1.35,.7,.45),e.translate(t*.115,.39,.2),n.push(e)}return Bo(n)}function iy(){const n=new Mn($v(),{depth:.1,bevelEnabled:!0,bevelThickness:.02,bevelSize:.015,bevelSegments:2,curveSegments:18});n.scale(.98,1.02,1.08),n.translate(0,0,-.05);const t=[];for(let e=0;e<3;e++)t.push(Vx(.24-e*.035,.018,.035,.2+e*.035,.11-e*.055,.02,.2));return Bo([n,...t])}function sy(){const n=new we(.2,.028,10,32);return n.rotateX(Math.PI/2),n.translate(0,.72,0),Sc(n)}const ry=6,oy=10.5,ay=14,ly=21,fu=180,du=48,Pa=1100,La=280,pu=.28,Ks=1.68,cy=.3,hy=.66,mu=.24,gu=.58,uy=.34,fy=.8,dy=.74,Mu=.72,_u=.68,py=1.52,my=1.44,gy=1.42,My=1.62,Ia=2;function xu(n){return kx(n,My)}function _y(){let n=[],t=[],e=[],i=[],s=0,r=0,o=0,a="rainbow",l=null,h=null,u=null,f=null,p=null,m=null,M=null,x=null,g=null,d=null,b=null,w=null,_=null,R=null,y=null,E=null,A=null,v=null,S=null,T=null,I=null,U=null,V=null;const H=new Yt,W=new Yt,Z=new Yt,X=new Yt;H.add(W,Z,X),W.position.set(-.04,.1,-.1),Z.position.set(.04,.1,-.1);const $=new Yt,rt=new kt,ot=48;class st{constructor(B,k,nt){this.x=B,this.y=k,this.z=(Math.random()-.5)*280,this.maxSize=If()*.92,this.size=0,this.growth=0,this.growthRate=.32+Math.random()*.4,this.baseRot=(Math.random()-.5)*.35,this.tilt=(Math.random()-.5)*.4,this.yaw=(Math.random()-.5)*.5,this.windPhase=Math.random()*Math.PI*2,this.windSpeed=.7+Math.random()*.5,this.windAmp=.06+Math.random()*.05,this.flapPhase=Math.random()*Math.PI*2,this.flapSpeed=4.2+Math.random()*2.2,this.riseSpeed=(55+Math.random()*45)*Ia,this.bobPhase=Math.random()*Math.PI*2,this.bobSpeed=1.1+Math.random()*.7,this.spinY=.25+Math.random()*.2,this.phaseY=Math.random()*Math.PI*2,this.hueIndex=Math.floor(Math.random()*ui.length),this.color=ui[this.hueIndex],this.rgb=Ui(this.color),this.innerRgb={...this.rgb},this.lifetime=0,this.maxLifetime=7+Math.random()*5,this.phase="growing",this.opacity=1,this.flap=0}update(B,k){this.lifetime+=B,this.flap=Math.sin(k*this.flapSpeed+this.flapPhase)*.55,this.bob=Math.sin(k*this.bobSpeed+this.bobPhase)*18,this.sway=Math.sin(k*this.windSpeed+this.windPhase)*this.windAmp,this.spin=Math.sin(k*this.spinY+this.phaseY)*.35;const nt=this.riseSpeed*(.75+Math.abs(this.flap)*.55);switch(this.y-=nt*B,this.x+=Math.sin(k*.9+this.flapPhase)*18*B,this.z+=Math.cos(k*.7+this.bobPhase)*12*B,this.y<-100&&(this.y=r+80,this.x=Math.random()*s,this.z=(Math.random()-.5)*280),this.phase){case"growing":{this.growth=Math.min(1,this.growth+this.growthRate*B);const Y=1.70158,K=Y+1,N=this.growth;this.size=this.maxSize*(1+K*Math.pow(N-1,3)+Y*Math.pow(N-1,2)),this.growth>=1&&(this.phase="bloomed");break}case"bloomed":Math.random()<B*9.5&&this._sparkTrail(),this.lifetime>this.maxLifetime*.65&&(this.phase="wilting");break;case"wilting":this.opacity-=B*.22,Math.random()<B*9&&this._shed(),Math.random()<B*7.5&&this._sparkTrail();break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_sparkTrail(){const B=1+(Math.random()<.62?1:0);for(let k=0;k<B;k++){const nt=Math.random()<.5?-1:1;t.push({x:this.x+nt*this.size*(.35+Math.random()*.55),y:this.y+this.size*(.2+Math.random()*.55),z:this.z-30-Math.random()*40,vx:nt*(15+Math.random()*25)+(Math.random()-.5)*20,vy:10+Math.random()*30,vz:(Math.random()-.5)*25,rgb:co(this.color),opacity:1,glow:(1.85+Math.random()*.78)*Ks,kind:"dust",large:Math.random()<pu,twinkle:Math.random()*Math.PI*2})}}_shed(){for(let B=0;B<7;B++){const k=Math.random()<.5?-1:1,nt=Aa();t.push({x:this.x+k*this.size*(.2+Math.random()*.6),y:this.y+this.size*(.25+Math.random()*.5),z:this.z-20-Math.random()*40,vx:(Math.random()-.5)*55,vy:-45-Math.random()*45,vz:(Math.random()-.5)*45,rgb:co(nt),opacity:1,glow:(1.78+Math.random()*.72)*Ks,kind:"shard",large:Math.random()<pu,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*4,twinkle:Math.random()*Math.PI*2})}}}function J(D,B){$.position.set(0,0,-4e3),$.scale.set(.001,.001,.001),$.rotation.set(0,0,0),$.updateMatrix(),D.setMatrixAt(B,$.matrix),D.instanceColor&&D.setColorAt(B,rt.setRGB(0,0,0))}function C(D){const B=Qt(D.x,D.y,D.z+D.bob,s,r);H.position.copy(B),H.position.x+=D.sway*D.size*.35,H.rotation.set(D.tilt+D.sway*.6,D.yaw+D.spin,D.baseRot+D.sway*.4);const k=D.size;H.scale.set(k,k,k*1.75);const nt=D.flap;W.rotation.set(.12+nt*.15,.55+nt,.1+nt*.08),Z.rotation.set(.12+nt*.15,-.55-nt,-.1-nt*.08),W.scale.set(-1.14,1.14,1.14),Z.scale.set(1.14,1.14,1.14),X.rotation.z=o*.8+D.flapPhase,H.updateMatrixWorld(!0)}function P(){if(!h||!f||!p||!x||!g||!w)return;const D=Math.min(n.length,ot);for(let B=0;B<ot;B++){const k=B<D?n[B]:null;if(!k||k.size<.5){J(h,B),J(u,B),J(f,B),J(p,B),J(m,B),J(M,B),J(x,B),J(g,B),J(d,B),J(b,B),J(w,B);continue}C(k);const nt=ui.length,Y=(k.hueIndex+Math.floor(o*.35))%nt,K=Zs(Y),N=Zs(Y+1),vt=Zs(Y+2),ut=Ra(K,py),yt=Ra(N,my),mt=Ra(vt,gy),At=xu(K),St=xu(N);$.matrix.copy(H.matrixWorld),h.setMatrixAt(B,$.matrix),h.setColorAt(B,rt.setRGB(ut.r,ut.g,ut.b));const O=H.scale.x,L=H.scale.y,it=H.scale.z;H.scale.set(O*1.04,L*1.04,it*1.04),H.updateMatrixWorld(!0),$.matrix.copy(H.matrixWorld),u.setMatrixAt(B,$.matrix),u.setColorAt(B,rt.setRGB(At.r,At.g,At.b)),H.scale.set(O,L,it),H.updateMatrixWorld(!0),$.matrix.copy(W.matrixWorld),x.setMatrixAt(B,$.matrix),x.setColorAt(B,rt.setRGB(yt.r,yt.g,yt.b)),d.setMatrixAt(B,$.matrix),d.setColorAt(B,rt.setRGB(St.r,St.g,St.b)),$.matrix.copy(Z.matrixWorld),g.setMatrixAt(B,$.matrix),g.setColorAt(B,rt.setRGB(yt.r,yt.g,yt.b)),b.setMatrixAt(B,$.matrix),b.setColorAt(B,rt.setRGB(St.r,St.g,St.b)),$.matrix.copy(H.matrixWorld),w.setMatrixAt(B,$.matrix),w.setColorAt(B,rt.setRGB(mt.r,mt.g,mt.b)),$.matrix.copy(H.matrixWorld),f.setMatrixAt(B,$.matrix),f.setColorAt(B,rt.setRGB(.06,.08,.2)),$.matrix.copy(H.matrixWorld),p.setMatrixAt(B,$.matrix),p.setColorAt(B,rt.setRGB(.12,.08,.18)),J(m,B),J(M,B)}for(const B of[h,u,f,p,m,M,x,g,d,b,w])B.instanceMatrix.needsUpdate=!0,B.instanceColor&&(B.instanceColor.needsUpdate=!0);if(_&&(e.forEach((B,k)=>{const nt=Qt(B.x,B.y,B.z,s,r);_.positions[k*3]=nt.x,_.positions[k*3+1]=nt.y,_.positions[k*3+2]=nt.z;const Y=.82+.65*Math.abs(Math.sin(o*2.6+B.phase)),K=Co(Zs(B.phase*3+k*.1),1.52,.05),N=Y*Ks;_.colors[k*3]=Math.min(1,K.r*N),_.colors[k*3+1]=Math.min(1,K.g*N),_.colors[k*3+2]=Math.min(1,K.b*N)}),_.geo.setDrawRange(0,e.length),_.geo.attributes.position.needsUpdate=!0,_.geo.attributes.color.needsUpdate=!0),R&&(i.forEach((B,k)=>{const nt=Qt(B.x,B.y,B.z,s,r);R.positions[k*3]=nt.x,R.positions[k*3+1]=nt.y,R.positions[k*3+2]=nt.z;const Y=.82+.65*Math.abs(Math.sin(o*2.6+B.phase)),K=Co(Zs(B.phase*3+k*.17),1.52,.05),N=Y*Ks*.92;R.colors[k*3]=Math.min(1,K.r*N),R.colors[k*3+1]=Math.min(1,K.g*N),R.colors[k*3+2]=Math.min(1,K.b*N)}),R.geo.setDrawRange(0,i.length),R.geo.attributes.position.needsUpdate=!0,R.geo.attributes.color.needsUpdate=!0),y||E){let B=0,k=0;const nt=Math.min(t.length,Pa+La);for(let Y=0;Y<nt;Y++){const K=t[Y],N=Qt(K.x,K.y,K.z,s,r),[vt,ut,yt]=He(K.rgb),mt=.84+.38*Math.abs(Math.sin(o*9+(K.twinkle||0))),At=(K.glow||1.92)*(.66+K.opacity*.56)*mt*Ks,St=.06,O=Math.min(1,vt*At*(1-St)+St),L=Math.min(1,ut*At*(1-St)+St),it=Math.min(1,yt*At*(1-St)+St);if(K.large&&E&&k<La){const ht=k*3;E.positions[ht]=N.x,E.positions[ht+1]=N.y,E.positions[ht+2]=N.z,E.colors[ht]=O,E.colors[ht+1]=L,E.colors[ht+2]=it,k++}else if(y&&B<Pa){const ht=B*3;y.positions[ht]=N.x,y.positions[ht+1]=N.y,y.positions[ht+2]=N.z,y.colors[ht]=O,y.colors[ht+1]=L,y.colors[ht+2]=it,B++}}y&&(y.geo.setDrawRange(0,B),y.geo.attributes.position.needsUpdate=!0,y.geo.attributes.color.needsUpdate=!0),E&&(E.geo.setDrawRange(0,k),E.geo.attributes.position.needsUpdate=!0,E.geo.attributes.color.needsUpdate=!0)}}function z(D,B){n.push(new st(D,B,a))}function G(D,B={}){const{back:k=!1,additive:nt=!1}=B;return new ee({color:16777215,transparent:!0,opacity:D,side:k?Pe:ue,depthWrite:!1,blending:nt?jt:Oe,toneMapped:!1})}return{init(D,B,k,nt){s=D,r=B,a=k.palette||"rainbow",n=[],t=[],e=[],i=[],o=0,l=nt,A=jv(),v=Qv(),S=ty(),T=ey(),I=ny(),U=iy(),V=sy(),h=new $t(A,G(cy,{additive:!0}),ot),u=new $t(A,G(hy,{back:!0,additive:!0}),ot);const Y=G(fy,{additive:!1});Y.polygonOffset=!0,Y.polygonOffsetFactor=-4,Y.polygonOffsetUnits=-4,f=new $t(v,Y,ot),f.renderOrder=12;const K=G(dy,{additive:!1});K.polygonOffset=!0,K.polygonOffsetFactor=-3,K.polygonOffsetUnits=-3,p=new $t(S,K,ot),p.renderOrder=11,m=new $t(T,G(.11,{additive:!1}),ot),M=new $t(I,G(.09,{additive:!1}),ot),x=new $t(U,G(mu,{additive:!0}),ot),g=new $t(U,G(mu,{additive:!0}),ot),d=new $t(U,G(gu,{back:!0,additive:!0}),ot),b=new $t(U,G(gu,{back:!0,additive:!0}),ot),w=new $t(V,G(uy,{additive:!0}),ot);for(const N of[h,u,f,p,m,M,x,g,d,b,w])N.instanceColor=new Re(new Float32Array(ot*3),3),N.frustumCulled=!1,l.add(N);_=pe(fu,ry),R=pe(du,oy),y=pe(Pa,ay),E=pe(La,ly),_.mat.blending=jt,R.mat.blending=jt,y.mat.blending=jt,E.mat.blending=jt,_.mat.opacity=Mu,R.mat.opacity=Mu*.88,y.mat.opacity=_u,E.mat.opacity=_u*.9,_.mat.toneMapped=!1,R.mat.toneMapped=!1,y.mat.toneMapped=!1,E.mat.toneMapped=!1,l.add(_.points,R.points,y.points,E.points);for(const[N,vt]of Cn(20,D,B,.06,[B*.25,B*.95]))z(N,vt);Xi(n),P();for(let N=0;N<fu;N++)e.push({x:Math.random()*D,y:Math.random()*B,z:(Math.random()-.5)*220,speedY:-(.12+Math.random()*.32),phase:Math.random()*Math.PI*2,rgb:co(Aa())});for(let N=0;N<du;N++)i.push({x:Math.random()*D,y:Math.random()*B,z:(Math.random()-.5)*260,speedY:-(.08+Math.random()*.24),phase:Math.random()*Math.PI*2,rgb:co(Aa())})},resize(D,B){Tr(n,s,r,D,B),s=D,r=B},update(D,B,k,nt){if(o+=D,a=nt.palette||a,n=n.filter(K=>K.update(D,o)),(B==null?void 0:B.velocity)>3){const K=Math.min(2,Math.floor(B.velocity/16)+1);for(let N=0;N<K;N++)z(B.x+(Math.random()-.5)*50,B.y+(Math.random()-.5)*40)}if(Math.random()<D*1.4*(nt.speed||1)&&z(Math.random()*s,r+40+Math.random()*80),k!=null&&k.isActive&&k.bass>.3){const K=Math.floor(k.bass*3);for(let N=0;N<K;N++)z(Math.random()*s,r+20)}t=t.filter(K=>(K.x+=K.vx*D,K.y+=K.vy*D,K.z+=K.vz*D,K.vy-=25*D,K.opacity-=D*.12,K.opacity>.02&&K.y>-80)),e.forEach(K=>{K.y+=K.speedY*(nt.speed||1)*70*Ia*D,K.y<-10&&(K.y=r+10,K.x=Math.random()*s)}),i.forEach(K=>{K.y+=K.speedY*(nt.speed||1)*58*Ia*D,K.y<-10&&(K.y=r+10,K.x=Math.random()*s)});const Y=Math.min(ot,Math.max(16,Math.floor((nt.particleCount||1030)/5)));n.length>Y&&n.splice(0,n.length-Y)},render(){P()},onPointerDown(D,B){for(let k=0;k<5;k++)z(D+(Math.random()-.5)*70,B+(Math.random()-.5)*50)},onPointerMove(){},onPointerUp(){},setPalette(D){a=D},samplePoints(D,B=s,k=r){const{w:nt,h:Y}=rn(B,k,s,r);return Rr(n,D,nt,Y,(N,vt,ut)=>yr(Uf(N,130),N,vt,ut,.14),56)},destroy(){n=[],t=[],e=[],i=[],A==null||A.dispose(),v==null||v.dispose(),S==null||S.dispose(),T==null||T.dispose(),I==null||I.dispose(),U==null||U.dispose(),V==null||V.dispose(),h=null,u=null,f=null,p=null,m=null,M=null,x=null,g=null,d=null,b=null,w=null,_=null,R=null,y=null,E=null,l=null}}}const ii=20,_e=[{id:"petal",label:"花びら",hold:ii,morph:2.4,style:"swarm"},{id:"jellyfish",label:"クラゲ",hold:ii,morph:2.4,style:"trail"},{id:"letter",label:"A B C · X Y Z",hold:ii,morph:2.4,style:"swarm"},{id:"tadpole",label:"オタマ",hold:ii,morph:2.4,style:"trail"},{id:"butterfly",label:"蝶",hold:ii,morph:2.2,style:"swarm"},{id:"music",label:"♪ 音楽記号",hold:ii,morph:2.6,style:"burst"},{id:"angel",label:"天使",hold:ii,morph:2.8,style:"burst"}],Da=`${ii}秒で自動切替 · ダブルクリックでも次へ`,vu=200,xy=520,vy=3.9,or=.24,yu=.64,$s={letter:Fx,jellyfish:Qx,butterfly:gv,tadpole:wv,music:Jv,angel:_y};function yy(){let n=0,t=0,e=0,i=0;return{setSize(s,r){n=s,t=r,this.rememberStable(s,r)},get width(){return n},get height(){return t},rememberStable(s,r){return Sn(s,r)?(e=s,i=r,!0):!1},sampleDims(){return Sn(n,t)?{w:n,h:t}:Sn(e,i)?{w:e,h:i}:rn(n,t,e,i)},isReady(){const{w:s,h:r}=this.sampleDims();return Sn(s,r)},morphReady(){const{w:s,h:r}=this.sampleDims();return s>=vu&&r>=vu},realDimsArrived(s,r){return Sn(n,t)&&!Sn(s,r)}}}const Sy={letter:1,jellyfish:12,clock:2,butterfly:6,tadpole:2,music:1,brain:0,angel:8};function by(n,t=0){const e=Be(n||"rainbow");return e[(t%e.length+e.length)%e.length]}function di(n,t){return by(n,Sy[t]??0)}function cn(n){return new kt(n)}function oe(n,t=.35){const e=cn(n);return t>=0?e.lerp(cn("#ffffff"),t):e.lerp(cn("#201028"),-t),`#${e.getHexString()}`}function Te(n,t={}){const e=cn(n);return new tx({color:e,roughness:t.roughness??.62,metalness:0,emissive:e.clone().multiplyScalar(t.em??.28),emissiveIntensity:t.ei??.55,transparent:t.opacity!=null&&t.opacity<1,opacity:t.opacity??1,depthWrite:t.opacity==null||t.opacity>=.95})}function Ie(n,t){n.color.set(t),n.emissive&&n.emissive.copy(cn(t).multiplyScalar(.28))}function Yi(n){const t=new Ll(16777215,1.15,1e3);t.position.set(70,110,200);const e=new Ll(15266047,.4,750);e.position.set(-110,20,100),n.add(t,e)}function ln(n,t="#3a3050",e=1.045){const i=new Pt(n.geometry,new ee({color:cn(t),side:Pe}));return i.scale.setScalar(e),n.add(i),i}function Yf(n,t,e,i,s=4){const r=new Pt(new Vt(s,12,12),new ee({color:16777215,transparent:!0,opacity:.82}));r.position.set(t,e,i),n.add(r)}function Su(n,t,e,i,s,r=0){for(let o=0;o<n;o++){const a=Math.floor(Math.random()*6);let l=(Math.random()-.5)*t,h=(Math.random()-.5)*e,u=(Math.random()-.5)*i;a===0&&(l=t*.5),a===1&&(l=-t*.5),a===2&&(h=e*.5),a===3&&(h=-e*.5),a===4&&(u=i*.5),a===5&&(u=-i*.5);const f=(r+o)*3;s[f]=l,s[f+1]=h,s[f+2]=u}}function bu(n,t,e,i){const s=Math.cos(i),r=Math.sin(i);for(let o=0;o<e;o++){const a=(t+o)*3,l=n[a],h=n[a+1];n[a]=l*s-h*r,n[a+1]=l*r+h*s}}function wy(n="rainbow"){const t=new fe;Yi(t);const e=di(n,"letter"),i=oe(e,.22),s=Te(i,{opacity:.65,roughness:.5,ei:.28}),r=h=>{const u=new fe,f=new Pt(new be(20,100,28),h);ln(f,oe(i,-.45),1.035);const p=h,m=new Pt(new be(20,22,28),p);m.position.y=58,m.rotation.x=.35,m.scale.set(1,1,.85);const M=new Pt(new be(20,22,28),p);return M.position.y=-58,M.rotation.x=-.35,M.scale.set(1,1,.85),ln(m,oe(i,-.45),1.035),ln(M,oe(i,-.45),1.035),u.add(f,m,M),u},o=r(s),a=r(s.clone());o.rotation.z=Math.PI/4,a.rotation.z=-Math.PI/4;const l=new Pt(new be(32,32,36),Te(oe(i,.12)));return ln(l,oe(i,-.45),1.03),Yf(l,-6,8,18,5),t.add(o,a,l),{group:t,update(h,u){t.rotation.x=Math.sin(u*.55)*.7,t.rotation.y=Math.sin(u*.42)*.95,t.rotation.z=Math.sin(u*.33)*.35},setPalette(h){const u=di(h,"letter"),f=p=>{p.traverse(m=>{m.isMesh&&m.material&&m.material.side!==Pe&&Ie(m.material,m===l?oe(u,.12):u)})};f(o),f(a),Ie(l.material,oe(u,.12))},samplePoints(h){const u=new Float32Array(h*3),f=Math.floor(h/2);return Su(f,20,118,28,u,0),bu(u,0,f,Math.PI/4),Su(h-f,20,118,28,u,f),bu(u,f,h-f,-Math.PI/4),u},dispose(){Xn(t)}}}function Ey(n="rainbow"){const t=new fe;Yi(t);const e=["#00e8ff","#00b7ff","#2f6bff","#1a48ff","#4d7cff","#7c4dff","#ff2bd6","#b026ff"],i=["#00e8ff","#00e8ff","#00b7ff","#00b7ff","#2f6bff","#2f6bff","#2f6bff","#1a48ff","#1a48ff","#4d7cff","#7c4dff","#ff2bd6","#b026ff"],s=i[Math.floor(Math.random()*i.length)],r=cn(s);function o(d=.9){return new ee({color:r.clone(),transparent:!0,opacity:d,depthWrite:!1,blending:jt,toneMapped:!1,side:ue})}const a=new ee({color:new kt("#1a48ff"),transparent:!0,opacity:.38,depthWrite:!1,blending:jt,toneMapped:!1,side:ue}),l=new Pt(new Vt(52,48,36,0,Math.PI*2,0,Math.PI*.58),a);l.scale.set(1.2,.88,1.2),l.position.y=22,t.add(l);const h=new Pt(new we(58,1.15,6,48),o(1));h.rotation.x=Math.PI/2,h.position.y=2,t.add(h);const u=new fe;for(let d=0;d<12;d++){const b=d/12*Math.PI*2,w=new Pt(new Gn(.45,.45,42,4),o(.75));w.rotation.z=Math.PI/2,w.rotation.y=b,w.position.set(Math.cos(b)*22,32,Math.sin(b)*22),u.add(w)}for(let d=0;d<40;d++){const b=Math.random()*Math.PI*2,w=Math.random()*Math.PI*.5,_=46,R=new Pt(new Vt(1.4+Math.random(),6,5),o(.9));R.position.set(Math.sin(w)*Math.cos(b)*_*1.2,22+Math.cos(w)*_*.88,Math.sin(w)*Math.sin(b)*_*1.2),u.add(R)}t.add(u);const f=new Pt(new Vt(10,14,12),new ee({color:11069695,transparent:!0,opacity:.85,depthWrite:!1,blending:jt,toneMapped:!1}));f.scale.set(1.4,.7,1.4),f.position.y=8,t.add(f);const p=new fe;p.position.y=28;for(let d=0;d<4;d++){const b=d/4*Math.PI*2+Math.PI/4,w=new Pt(new we(11,2.4,8,20,Math.PI*1.35),o(.75));w.rotation.x=Math.PI*.55,w.rotation.y=b,w.position.set(Math.cos(b)*14,0,Math.sin(b)*14),p.add(w)}t.add(p);const m=new fe;m.position.y=2;const M=[];for(let d=0;d<48;d++){const b=d/48*Math.PI*2,w=34+d%4*10,_=new Pt(new Wn(.35,w,2,4),o(.35));_.position.set(Math.cos(b)*54,-w*.42,Math.sin(b)*54),_.userData={ang:b,len:w,phase:d*.2},m.add(_);const R=new Pt(new Vt(1.2,6,5),o(.55));R.position.set(Math.cos(b)*54,-w*.85,Math.sin(b)*54),m.add(R),M.push(_)}t.add(m);const x=[];for(let d=0;d<4;d++){const b=d/4*Math.PI*2,w=new fe;w.position.set(Math.cos(b)*8,6,Math.sin(b)*8),w.rotation.y=b,w.userData={phase:d*1.15};const _=(d%2===0,o(.32));d%2===1&&_.color.copy(cn(e[(d+2)%e.length]));for(let R=0;R<16;R++){const y=(R+.5)/16,E=Math.sin(y*Math.PI*1.6)*10,A=-y*100,v=5.5*(1-y*.55),S=new Pt(new we(v,.55,5,14),_.clone());if(S.rotation.x=Math.PI/2,S.position.set(E,A,0),w.add(S),R%2===0){const T=new Pt(new Vt(1.3,6,5),_.clone());T.position.set(E+v*.7,A,0),w.add(T)}}t.add(w),x.push(w)}let g=-40;return{group:t,update(d,b){g+=d*14,g>130&&(g=-50),t.position.y=g+Math.sin(b*.7)*8,t.position.x=Math.sin(b*.35)*12,t.position.z=Math.cos(b*.28)*8,t.rotation.y=Math.sin(b*.22)*.15,t.rotation.z=Math.sin(b*.48)*.08,t.rotation.x=Math.sin(b*.38)*.05;const w=Math.sin(b*1.35);l.scale.y=.88+w*.08,l.scale.x=l.scale.z=1.2-w*.05,l.material.opacity=.32+.12*Math.abs(w),h.scale.x=h.scale.z=1+w*.03,h.material.opacity=.85+.15*Math.abs(w),f.material.opacity=.7+.25*Math.abs(w),p.position.y=28+w*1.2;for(const _ of M){const{ang:R,len:y,phase:E}=_.userData,A=Math.sin(b*1.5+E)*4;_.position.set(Math.cos(R)*54+Math.cos(R+Math.PI*.5)*A,-y*.35+Math.sin(b*1.2+E)*2,Math.sin(R)*54+Math.sin(R+Math.PI*.5)*A),_.rotation.x=Math.sin(b*1.3+E)*.15}for(const _ of x){const{phase:R}=_.userData;_.rotation.x=.2+Math.sin(b*1.1+R)*.45,_.rotation.z=Math.cos(b*.9+R*.8)*.3,_.rotation.y=Math.sin(b*.7+R)*.18,_.scale.y=1.05+Math.abs(Math.sin(b*1.1+R))*.15}},setPalette(d){const b=e[Math.floor(Math.random()*e.length)],w=cn(b);h.material.color.copy(w),l.material.color.set("#1a48ff"),u.traverse(_=>{_.isMesh&&_.material.color.copy(w)}),p.children.forEach(_=>_.material.color.copy(w)),M.forEach(_=>_.material.color.copy(w)),x.forEach(_=>_.traverse(R=>{var y;R.isMesh&&((y=R.material)!=null&&y.color)&&R.material.color.copy(w)}))},samplePoints(d){const b=new Float32Array(d*3);for(let w=0;w<d;w++)if(w<d*.45){const _=Math.random()*Math.PI*2,R=Math.random()*Math.PI*.55;b[w*3]=Math.sin(R)*Math.cos(_)*52*1.2,b[w*3+1]=22+Math.cos(R)*52*.88,b[w*3+2]=Math.sin(R)*Math.sin(_)*52*1.2}else if(w<d*.7){const _=Math.random()*Math.PI*2;b[w*3]=Math.cos(_)*54,b[w*3+1]=-Math.random()*20,b[w*3+2]=Math.sin(_)*54}else{const _=Math.floor(Math.random()*4)/4*Math.PI*2,R=Math.random();b[w*3]=Math.cos(_)*8+R*R*10,b[w*3+1]=6-R*78,b[w*3+2]=Math.sin(_)*8}return b},dispose(){Xn(t)}}}function Ay(n="rainbow"){const t=new fe;t.scale.setScalar(1.45*(2/3)),Yi(t);const e=Be("clockRainbow"),i=e[Math.floor(Math.random()*e.length)],s=cn(i);function r(T=1){return new ee({color:new kt("#0a0a0c"),transparent:T<1,opacity:T,depthWrite:!0,blending:Oe,toneMapped:!1,side:ue})}function o(T=.95){return new ee({color:s.clone(),transparent:!0,opacity:T,depthWrite:!1,blending:Oe,toneMapped:!1,side:ue})}const a=new Gn(48,48,12,48);a.rotateX(Math.PI/2);const l=new Pt(a,new ee({color:new kt("#eef2f8"),transparent:!0,opacity:.1,depthWrite:!1,blending:Oe,toneMapped:!1,side:ue}));t.add(l);const h=new Gn(51,51,14,48,1,!0);h.rotateX(Math.PI/2);const u=new Pt(h,o(.85)),f=new Pt(new we(49.5,2.4,8,48),o(.95));f.position.z=6.5;const p=new Gn(46,46,4,36);p.rotateX(Math.PI/2);const m=new Pt(p,o(.7));m.position.z=-7,t.add(u,f,m);const M=new fe;for(let T=0;T<60;T++){const I=T/60*Math.PI*2,U=T%5===0,V=new Pt(new be(U?1.6:.8,U?7:3.5,2.2),r(1));V.position.set(Math.sin(I)*40,Math.cos(I)*40,7),V.rotation.z=-I,M.add(V)}for(let T=0;T<12;T++){const I=T/12*Math.PI*2,U=new Pt(new be(2.2,8,2.5),r(1));U.position.set(Math.sin(I)*34,Math.cos(I)*34,7.5),U.rotation.z=-I,M.add(U)}t.add(M);const x=new Pt(new be(3.2,26,2.4),r(1));x.position.set(0,10,9);const g=new Pt(new be(2.2,38,2),r(1));g.position.set(0,16,10);const d=new Pt(new be(1,42,1.5),r(1));d.position.set(0,14,11);const b=new Pt(new Vt(3.5,12,10),r(1));b.position.z=10;const w=new fe,_=new fe,R=new fe;w.add(x),_.add(g),R.add(d),t.add(w,_,R,b);const y=new Pt(new Gn(4,4.5,8,10),o(.9));y.position.y=58;const E=new Pt(new we(9,1.8,6,20,Math.PI*1.3),o(.9));E.rotation.z=Math.PI,E.position.y=70,t.add(y,E);const A=(Math.random()<.5?1:-1)*(.55+Math.random()*.5),v=(Math.random()-.5)*.35,S=(Math.random()-.5)*.2;return{group:t,update(T,I){t.position.y=Math.sin(I*.7)*8,t.rotation.y+=A*T,t.rotation.x+=v*T,t.rotation.z+=S*T;const U=I%60,V=I/60%60,H=I/3600%12;R.rotation.z=-(U/60)*Math.PI*2,_.rotation.z=-(V/60)*Math.PI*2,w.rotation.z=-(H/12)*Math.PI*2},setPalette(T){const I=new kt("#0a0a0c");M.traverse(U=>{U.isMesh&&U.material.color.copy(I)}),x.material.color.copy(I),g.material.color.copy(I),d.material.color.copy(I),b.material.color.copy(I),y.material.color.copy(c),E.material.color.copy(c)},samplePoints(T){const I=new Float32Array(T*3);for(let U=0;U<T;U++){const V=Math.random()*Math.PI*2,H=Math.random()*50;I[U*3]=Math.cos(V)*H,I[U*3+1]=Math.sin(V)*H,I[U*3+2]=(Math.random()-.5)*12}return I},dispose(){Xn(t)}}}function wu(n="rainbow"){const t=new fe;t.scale.setScalar(58),Yi(t);const{wing:e,pattern:i}=(()=>{const x=Be("rainbow"),g=x[Math.floor(Math.random()*x.length)];let d=x[Math.floor(Math.random()*x.length)];return d===g&&(d=x[(x.indexOf(g)+3)%x.length]),{wing:g,pattern:d}})(),s=Te(oe(e,.12),{opacity:.68,roughness:.48,ei:.72,em:.32}),r=Te(oe(i,-.2),{opacity:.88,roughness:.52,ei:.68,em:.38}),o=Te(oe(e,-.12),{opacity:.82,roughness:.6,ei:.52,em:.22}),a=new fe,l=new fe;a.position.set(.02,.02,-.01),l.position.set(.02,.02,-.01);const h=new Pt(Gl(),s),u=new Pt(Gl(),s.clone());h.scale.set(-1,1,1);const f=new Pt(Hl(),r),p=new Pt(Hl(),r.clone());h.add(f),u.add(p),a.add(h),l.add(u);const m=new Pt(Hf(),o),M=new Pt(kf(),Te(oe(e,.42),{opacity:.9,roughness:.45,ei:.85,em:.35}));return t.add(a,l,m,M),ln(h,oe(e,.45),1.015),ln(u,oe(e,.45),1.015),ln(m,oe(e,-.25),1.02),{group:t,update(x,g){const d=Math.sin(g*9.2)*.62;a.rotation.set(.1+d*.14,.68+d,.08+d*.12),l.rotation.set(.1+d*.14,-.68-d,-.08-d*.12),t.position.y=Math.sin(g*1.15)*14,t.rotation.x=Math.sin(g*.62)*.55+Math.cos(g*.41)*.35,t.rotation.y=g*.48+Math.sin(g*.32)*.35,t.rotation.z=Math.sin(g*.55)*.42+Math.cos(g*.73)*.28,t.position.x=Math.sin(g*.38)*28,t.position.z=Math.cos(g*.51)*22},setPalette(x){const g=Be("rainbow"),d=g[Math.floor(Math.random()*g.length)];let b=g[Math.floor(Math.random()*g.length)];b===d&&(b=g[(g.indexOf(d)+3)%g.length]),Ie(h.material,oe(d,.12)),Ie(u.material,oe(d,.12)),Ie(f.material,oe(b,-.2)),Ie(p.material,oe(b,-.2)),Ie(m.material,oe(d,-.12)),Ie(M.material,oe(d,.42))},samplePoints(x){const d=new Float32Array(x*3);for(let b=0;b<x;b++){const w=Math.random()<.5?-1:1;if(b<x*.72){const _=Math.random(),R=Math.random();d[b*3]=w*(.12+_*.76)*58,d[b*3+1]=(R*.52-.18)*58,d[b*3+2]=(Math.random()-.5)*10}else b<x*.9?(d[b*3]=(Math.random()-.5)*14,d[b*3+1]=(Math.random()-.5)*10,d[b*3+2]=(Math.random()-.5)*8):(d[b*3]=.1*58+(Math.random()-.5)*5,d[b*3+1]=.04*58+(Math.random()-.5)*4,d[b*3+2]=w*.05*58)}return d},dispose(){Xn(t)}}}function Ty(n="rainbow"){const t=new fe;Yi(t);const e=["#00e8ff","#00b7ff","#2f6bff","#1a48ff","#4d7cff","#7c4dff","#ff2bd6"],i=e[Math.floor(Math.random()*e.length)],s=cn(i);function r(S=.3,T=!0){return new ee({color:s.clone(),transparent:!0,opacity:S,depthWrite:!1,blending:T?jt:Oe,toneMapped:!1,side:ue})}const o=new Pt(new Vt(28,40,32),r(.28,!0));o.scale.set(1.42,1.08,1.16),o.position.set(18,2,0),t.add(o);const a=new Pt(new Vt(16,28,22),r(.2,!0));a.scale.set(1.15,.82,1.02),a.position.set(14,-6,2),t.add(a);const l=new Pt(new we(32,1.2,6,36),r(.85,!0));l.rotation.y=Math.PI/2,l.scale.set(1.15,1,1.08),l.position.set(18,2,0),t.add(l);const h=new Pt(new Vt(10,14,12),r(.5,!0));h.scale.set(1.35,.9,1.15),h.position.set(18,2,0),t.add(h);const u=new ee({color:new kt("#d0f0ff"),transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1}),f=new ee({color:new kt("#0a1018"),transparent:!1,depthWrite:!0,toneMapped:!1}),p=new Pt(new Vt(3.6,12,10),u),m=new Pt(new Vt(3.6,12,10),u.clone());p.position.set(30,8,16),m.position.set(30,8,-16);const M=new Pt(new Vt(1.7,10,8),f),x=new Pt(new Vt(1.7,10,8),f.clone());M.position.set(32,8,17),x.position.set(32,8,-17),t.add(p,m,M,x);const g=185,d=36,b=8,w=4,_=new be(g,1,1,d,b,w),R=Float32Array.from(_.attributes.position.array),y=_.attributes.position;for(let S=0;S<y.count;S++){const T=R[S*3],I=(T+g*.5)/g,U=Math.max(.03,Math.pow(1-I,.85)),V=22*U,H=5.5*U,W=R[S*3+1]/.5,Z=R[S*3+2]/.5,X=Math.sin(I*Math.PI*.7)*8+I*I*6;R[S*3]=T,R[S*3+1]=W*V+X,R[S*3+2]=Z*H}y.array.set(R),y.needsUpdate=!0,_.computeVertexNormals();const E=r(.22,!0),A=new Pt(_,E);A.position.set(-58,2,0),t.add(A);const v=r(.55,!0);for(let S=0;S<12;S++){const T=Math.random(),I=new Pt(new Vt(.9+Math.random()*1.2,8,6),v.clone());I.position.set(-58+(T-.5)*g*.92,2+Math.sin(T*Math.PI*.7)*8+(Math.random()-.5)*8*(1-T),(Math.random()-.5)*5),t.add(I)}return{group:t,update(S,T){t.position.y=Math.sin(T*1.3)*5,t.rotation.y=Math.sin(T*.4)*.08;const I=T*15,U=y.array;for(let V=0;V<y.count;V++){const H=R[V*3],W=Math.min(1,(H+g*.5)/(g+8)),Z=W*W,X=Math.sin(I-W*7)*Z*36+Math.sin(I*2.8-W*16)*Z*18+Math.sin(I*6.2-W*30)*Z*10+Math.sin(I*13-W*48)*Z*5;U[V*3]=R[V*3],U[V*3+1]=R[V*3+1]+Math.sin(I*1.8-W*5)*Z*5,U[V*3+2]=R[V*3+2]+X}y.needsUpdate=!0,_.computeVertexNormals()},setPalette(S){},samplePoints(S){const T=new Float32Array(S*3);for(let I=0;I<S;I++)if(I<S*.5){const U=Math.random()*Math.PI*2,V=Math.acos(2*Math.random()-1);T[I*3]=18+Math.sin(V)*Math.cos(U)*28*1.45,T[I*3+1]=2+Math.sin(V)*Math.sin(U)*28*1.12,T[I*3+2]=Math.cos(V)*28*1.18}else{const U=Math.random();T[I*3]=-58+(U-.5)*g,T[I*3+1]=2+Math.sin(U*Math.PI*.7)*8,T[I*3+2]=(Math.random()-.5)*5}return T},dispose(){Xn(t)}}}function Ua(n,t,e,i=0){const s=Math.sin(n*.05+i)*Math.cos(e*.04),r=Math.sin(e*.06+n*.03+1.7),o=Math.cos(n*.04-e*.05+i*.5);return{x:n*(1+s*.1+o*.06),y:t*(1+r*.08)+s*3,z:e*(1+r*.1+s*.05)}}function Ry(n="rainbow"){const t=new fe;Yi(t);const e=di(n,"brain"),i=oe(e,-.3),s=Te(e,{roughness:.72}),r=Te(i,{roughness:.68,ei:.4}),o=new Vt(52,56,40,0,Math.PI*2,0,Math.PI*.52),a=o.attributes.position;for(let g=0;g<a.count;g++){const d=a.getX(g),b=a.getY(g),w=a.getZ(g),_=Ua(d,b,w,.8);a.setXYZ(g,_.x*1.12,_.y*.92-2,_.z*1.08)}a.needsUpdate=!0,o.computeVertexNormals();const l=new Pt(o,s);ln(l,oe(e,-.42),1.02),t.add(l);const h=new Pt(new Vt(48,40,16,0,Math.PI*2,Math.PI*.42,Math.PI*.2),s),u=h.geometry.attributes.position;for(let g=0;g<u.count;g++){const d=Ua(u.getX(g),u.getY(g),u.getZ(g),1.4);u.setXYZ(g,d.x*1.1,d.y*.7-4,d.z*1.05)}u.needsUpdate=!0,h.geometry.computeVertexNormals(),t.add(h);for(let g=0;g<16;g++){const d=g/16*Math.PI*2,b=48+Math.sin(g*2.3)*6,w=new Pt(new Vt(6+g%3,12,12),s);w.position.set(Math.cos(d)*b*1.05,-4+Math.sin(g)*3,Math.sin(d)*b*.98),w.scale.set(1.15,.6,1.05),t.add(w)}const f=[],p=[],m=(g,d,b=0)=>{const w=51+b,_=Ua(Math.sin(d)*Math.cos(g)*w*1.12,Math.cos(d)*w*.92-2,Math.sin(d)*Math.sin(g)*w*1.08,g+d);return new q(_.x*1.05,_.y*1.05+1,_.z*1.05)};for(let g=0;g<28;g++){const d=g/28*Math.PI*2,b=[];for(let _=0;_<=18;_++){const R=_/18,y=R*Math.PI*.58,E=d+Math.sin(R*Math.PI*3.8+g)*.16;b.push(m(E,y,Math.sin(R*5+g)*2))}const w=new Pt(new ri(new Ri(b),32,2.5,8,!1),r.clone());t.add(w),f.push(w)}for(let g=0;g<18;g++){const d=.06+g*.055,b=[];for(let _=0;_<=40;_++){const y=_/40*Math.PI*2,E=d+Math.sin(y*4+g)*.05;b.push(m(y,E,Math.sin(y*3+g)*1.5))}b.push(b[0].clone());const w=new Pt(new ri(new Ri(b),56,2.2,8,!1),r.clone());t.add(w),f.push(w)}for(let g=0;g<32;g++){const d=g/32*Math.PI*2+.15,b=.08+g%8*.075,w=[];for(let R=0;R<=10;R++){const E=R/10*Math.PI*1.2;w.push(m(d+Math.cos(E)*.34,b+Math.sin(E)*.22,1))}const _=new Pt(new ri(new Ri(w),14,2,6,!1),r.clone());t.add(_),f.push(_)}for(let g=0;g<24;g++){const d=g/24*Math.PI*2,b=[];for(let _=0;_<=8;_++){const R=_/8,y=.42+R*.16,E=d+Math.sin(R*3+g)*.2;b.push(m(E,y,1.5))}const w=new Pt(new ri(new Ri(b),12,2.3,6,!1),r.clone());t.add(w),f.push(w)}const M=Te(oe(e,.35),{ei:.4,roughness:.55});for(let g=0;g<18;g++){const d=g/18*Math.PI*2+.12,b=[];for(let _=0;_<=12;_++){const R=_/12;b.push(m(d+Math.sin(R*4)*.1,R*Math.PI*.55,2.5))}const w=new Pt(new ri(new Ri(b),18,1.1,6,!1),M.clone());t.add(w),p.push(w)}const x=new Pt(new Vt(10,16,12),Te(i,{roughness:.85,ei:.15}));return x.position.set(3,14,10),x.scale.set(.45,.4,1.6),t.add(x),Yf(l,-14,22,30,6),{group:t,update(g,d){const b=1+Math.sin(d*2)*.02;t.scale.setScalar(b),t.rotation.y=Math.sin(d*.32)*.35,t.rotation.x=.22+Math.sin(d*.4)*.05},setPalette(g){const d=di(g,"brain"),b=oe(d,-.3),w=oe(d,.35);Ie(s,d),Ie(l.material,d),Ie(h.material,d),f.forEach(_=>Ie(_.material,b)),p.forEach(_=>Ie(_.material,w)),Ie(x.material,b)},samplePoints(g){const d=new Float32Array(g*3);for(let b=0;b<g;b++){const w=Math.random()*Math.PI*2,_=Math.random()*Math.PI*.52,R=m(w,_,0);d[b*3]=R.x,d[b*3+1]=R.y,d[b*3+2]=R.z}return d},dispose(){Xn(t)}}}function Cy(n="rainbow"){const t=new fe;Yi(t);const e=di(n,"angel"),i=oe(e,.15),s="#ffd9c4",r="#ffffff",o="#4a4450",a=new fe;a.scale.setScalar(.9),t.add(a);const l=Te(s,{opacity:.58,roughness:.65,ei:.25,em:.12}),h=new Pt(new Vt(24,32,28),l);h.position.set(0,50,6),ln(h,"#c4b0a8",1.025),a.add(h);const u=Te(i,{opacity:.65,roughness:.5,ei:.5}),f=new Pt(new Vt(13,20,16),u);f.scale.set(1.45,.58,.9),f.position.set(9,64,4),a.add(f);const p=new ee({color:cn(o),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),m={x:0,y:50,z:6},M=22.5;function x(Z,X){const $=Math.hypot(Z,X),rt=Math.sqrt(Math.max(1,M*M-$*$));return[m.x+Z,m.y+X,m.z+rt]}for(const Z of[-1,1]){const X=new Pt(new we(5.6,.9,6,18,Math.PI*.95),p.clone());X.scale.set(1,1,.28),X.position.set(...x(Z*9.2,2.5)),a.add(X)}const g=new Pt(new we(3,.75,5,12,Math.PI*.7),p.clone());g.rotation.z=Math.PI,g.scale.set(1,1,.28),g.position.set(...x(0,-7)),a.add(g);const d=new Ke;d.moveTo(-12,24),d.lineTo(12,24),d.lineTo(24,-52),d.lineTo(-24,-52),d.closePath();const b=new Mn(d,{depth:12,bevelEnabled:!0,bevelThickness:2,bevelSize:1.5,bevelSegments:1,curveSegments:4});b.translate(0,0,-6);const w=Te(r,{opacity:.52,roughness:.6,ei:.2,em:.1}),_=new Pt(b,w);_.position.y=10,ln(_,"#d0d4dc",1.02),a.add(_);const R=new Ke;R.moveTo(2,14),R.quadraticCurveTo(32,42,58,24),R.quadraticCurveTo(68,8,62,-8),R.quadraticCurveTo(54,-18,46,-10),R.quadraticCurveTo(38,-22,28,-10),R.quadraticCurveTo(18,-22,10,-8),R.quadraticCurveTo(4,0,2,10),R.closePath();const y=new Mn(R,{depth:4,bevelEnabled:!1,curveSegments:18});y.translate(0,0,-2);const E=Te(r,{opacity:.4,roughness:.5,ei:.28}),A=new Pt(y,E),v=new Pt(y,E.clone());A.position.set(-6,18,-12),v.position.set(6,18,-12),A.scale.set(-1,1,1),A.rotation.set(.05,.35,.05),v.rotation.set(.05,-.35,-.05),ln(A,"#d0d4dc",1.015),ln(v,"#d0d4dc",1.015),t.add(A,v);for(const Z of[-1,1])for(let X=0;X<3;X++){const $=new Pt(new be(22-X*4,1.6,1.2),Te("#e8ecf4",{ei:.1}));$.position.set(Z*(24+X*5),22-X*8,-10),$.rotation.z=Z*.2,a.add($)}const S=new Pt(new we(22,2,10,36),Te(i,{opacity:.7,roughness:.4,ei:.8}));S.rotation.x=Math.PI/2,S.position.set(0,88,0),a.add(S);const T=new Ke,I=12,U=5;for(let Z=0;Z<5;Z++){const X=Z*Math.PI*2/5-Math.PI/2,$=X+Math.PI/5;Z===0?T.moveTo(Math.cos(X)*I,Math.sin(X)*I):T.lineTo(Math.cos(X)*I,Math.sin(X)*I),T.lineTo(Math.cos($)*U,Math.sin($)*U)}T.closePath();const V=new Mn(T,{depth:4,bevelEnabled:!1});V.translate(0,0,-2);const H=new Pt(V,Te(i,{opacity:.7,roughness:.45,ei:.75}));H.position.set(0,12,18),a.add(H);const W=Te("#ffffff",{opacity:.95,ei:1.4,em:.55});for(let Z=0;Z<16;Z++){const X=2.5+Math.random()*4,$=new Pt(new Vt(X,8,6),W.clone()),rt=Math.random()*Math.PI*2,ot=35+Math.random()*55;$.position.set(Math.cos(rt)*ot,25+Math.random()*80,Math.sin(rt)*22-8),t.add($)}return{group:t,update(Z,X){t.position.y=Math.sin(X*1.1)*10+X*8,t.position.y>120&&(t.position.y=-40),t.rotation.y=Math.sin(X*.28)*.2;const $=Math.sin(X*5.2)*.42;A.rotation.y=.4+$,v.rotation.y=-.4-$,A.rotation.z=.08+$*.12,v.rotation.z=-.08-$*.12,A.rotation.x=.08+Math.abs($)*.1,v.rotation.x=.08+Math.abs($)*.1,S.rotation.z=X*.55,H.rotation.z=Math.sin(X*1.5)*.08,a.position.y=Math.sin(X*1.4)*6},setPalette(Z){const X=di(Z,"angel"),$=oe(X,.15);Ie(u,$),Ie(S.material,$),Ie(H.material,$)},samplePoints(Z){const X=new Float32Array(Z*3);for(let $=0;$<Z;$++)if($<Z*.35)X[$*3]=(Math.random()-.5)*50,X[$*3+1]=-30+Math.random()*100,X[$*3+2]=(Math.random()-.5)*28;else if($<Z*.7){const rt=$%2?1:-1,ot=Math.random();X[$*3]=rt*(10+ot*55),X[$*3+1]=5+Math.random()*45,X[$*3+2]=-14+(Math.random()-.5)*16}else{const rt=Math.random()*Math.PI*2;X[$*3]=Math.cos(rt)*22,X[$*3+1]=88+Math.sin(rt)*4,X[$*3+2]=Math.sin(rt)*22}return X},dispose(){Xn(t)}}}function Py(n){const t=new Float32Array(n*3);for(let e=0;e<n;e++){const i=Math.random();if(i<.32)t[e*3]=6+(Math.random()-.5)*10,t[e*3+1]=-32+(Math.random()-.5)*10,t[e*3+2]=(Math.random()-.5)*8;else if(i<.78)t[e*3]=16+(Math.random()-.5)*5,t[e*3+1]=(Math.random()-.5)*72,t[e*3+2]=(Math.random()-.5)*8;else{const s=Math.random()*Math.PI*2;t[e*3]=Math.cos(s)*14-4,t[e*3+1]=Math.sin(s)*10+8,t[e*3+2]=(Math.random()-.5)*8}}return t}function Ly(n){const t=di(n,"letter"),e=new fe,i=new Pt(new Vt(5,10,8),Te(t,{roughness:.58,opacity:.72}));i.scale.set(1.2,.85,.55),i.position.set(6,-32,0);const s=new Pt(new be(3.5,36,3.5),Te(oe(t,.2),{roughness:.62,opacity:.72}));return s.position.set(16,2,0),e.add(i,s),{group:e,update(r,o){e.rotation.z=Math.sin(o*.5)*.08},setPalette(r){const o=di(r,"letter");Ie(i.material,o),Ie(s.material,oe(o,.2))},samplePoints:Py,dispose(){Xn(e)}}}function Iy(n,t){switch(n){case"letter":return wy(t);case"jellyfish":return Ey(t);case"butterfly":return wu(t);case"clock":return wu(t);case"hourglass":return Ay(t);case"tadpole":return Ty(t);case"music":return Ly(t);case"brain":return Ry(t);case"angel":return Cy(t);default:return null}}function Io(n,t,e,i){if(!n||n.length!==t*3)return!1;for(let o=0;o<n.length;o++)if(!Number.isFinite(n[o]))return!1;const s=Tf(e,i),r=Math.min(t,Math.max(48,Math.floor(t*.18)));return Ro(n,s)&&!Dl(n,s)&&!Il(n,r)}function qf(n,t,e){return yr(Uf(n,130),n,t,e,.14)}function li(n,t,e,i,s=null){return fc(n,t,e,i,s||An)}function Na(n,t,e,i=null){const s=i||An;return li(s(n,t,e),n,t,e,s)}function Dy(n,t,e,i,s,r=null){const o=r||An;let a=n,l=t;return Io(a,e,i,s)||(a=li(o(e,i,s),e,i,s,o)),Io(l,e,i,s)||(l=li(o(e,i,s),e,i,s,o)),{fromCloud:a,toCloud:l}}function Eu(n,t,e,i,s){var h;const r=_e[n];if(r.id==="petal"){const u=Df(t,95);return yr(u,t,e,i,.12)}if(r.id==="angel")return li(qf(t,e,i),t,e,i);const o=r.id==="letter"?"letter":r.id,a=Iy(o,s);if(!a)return An(t,e,i);const l=a.samplePoints(t);return(h=a.dispose)==null||h.call(a),yr(l,t,e,i,.14)}function Uy(n){const t=new Float32Array(n*3),e=ui.length;for(let i=0;i<n;i++){const s=Co(ui[i%e],1.38,.06);t[i*3]=s.r,t[i*3+1]=s.g,t[i*3+2]=s.b}return t}function Ny(n,t){const e=new Float32Array(t*3);for(let i=0;i<t;i++){const s=_s(Ui(Ul[i%Ul.length]),1.45);e[i*3]=s.r,e[i*3+1]=s.g,e[i*3+2]=s.b}return e}function Cs(n,t){const e=Be(n),i=new Float32Array(t*3);for(let s=0;s<t;s++){const r=e[s%e.length],{r:o,g:a,b:l}=Ee(r);i[s*3]=o/255,i[s*3+1]=a/255,i[s*3+2]=l/255}return i}function Fy(n,t){const e=Cs(t,n),i=Cs(t,n);for(let s=0;s<n;s++){const r=(s*7+3)%n;i[s*3]=e[r*3],i[s*3+1]=e[r*3+1],i[s*3+2]=e[r*3+2]}return{colorA:e,colorB:i}}function zy(n,t,e){var s;const i=(s=_e[n])==null?void 0:s.id;return i==="tadpole"?Ny(e,t):i==="angel"?Uy(t):Cs(i==="butterfly"?"clockRainbow":e,t)}function Zf(n,t,e,i,s,r,o,a={}){var p,m;const l=(p=_e[i])==null?void 0:p.id,h=(m=_e[(i+1)%_e.length])==null?void 0:m.id,u=a.boostNextAngel!==!1,f=l==="angel"||u&&h==="angel";for(let M=0;M<t;M++){const x=M*3,g=f?.92+.48*(.5+.5*Math.sin(e*2.5+M*.02)):.55+.45*(.5+.5*Math.sin(e*2.5+M*.02));let d=s[x]*(1-o)+r[x]*o,b=s[x+1]*(1-o)+r[x+1]*o,w=s[x+2]*(1-o)+r[x+2]*o;if(f){d=d*(1-.06)+.06,b=b*(1-.06)+.06,w=w*(1-.06)+.06;const R=(d+b+w)/3,y=Bf;d=Math.min(1,Math.max(0,R+(d-R)*y)),b=Math.min(1,Math.max(0,R+(b-R)*y)),w=Math.min(1,Math.max(0,R+(w-R)*y))}n.colors[x]=d*g,n.colors[x+1]=b*g,n.colors[x+2]=w*g}}function ai(n){const t=Math.min(1,Math.max(0,n));return t*t*t*(t*(t*6-15)+10)}function js(n,t,e,i){const s=1-Math.exp(-Math.max(0,i)*e);return n+(t-n)*s}function Go(n,t){n&&n.traverse(e=>{const i=e.material?Array.isArray(e.material)?e.material:[e.material]:[];for(const s of i)!s||s.opacity==null||t(s)})}function Fa(n,t){if(!n)return;const e=Math.min(1,Math.max(0,t));Go(n,i=>{i.userData._dissolveBaseOpacity==null&&(i.userData._dissolveBaseOpacity=i.opacity),i.transparent=!0,i.opacity=i.userData._dissolveBaseOpacity*e,"depthWrite"in i&&(i.depthWrite=e>.88),"needsUpdate"in i&&(i.needsUpdate=!0)})}function Oy(n){n&&Go(n,t=>{t.userData._dissolveBaseOpacity!=null&&(t.opacity=t.userData._dissolveBaseOpacity,delete t.userData._dissolveBaseOpacity),"depthWrite"in t&&(t.depthWrite=!0),"needsUpdate"in t&&(t.needsUpdate=!0)})}function Au(n,t){if(!n)return;const e=Math.min(1,Math.max(0,t));n.visible=!0,Go(n,i=>{i.userData._angelIntroBase==null&&(i.userData._angelIntroBase=i.opacity),i.transparent=!0,i.opacity=i.userData._angelIntroBase*e,"needsUpdate"in i&&(i.needsUpdate=!0)})}function za(n){n&&Go(n,t=>{t.userData._angelIntroBase!=null&&(t.opacity=t.userData._angelIntroBase,delete t.userData._angelIntroBase)})}function By(n,t){const e=Math.min(1,n/yu),i=1-ai(e),s=ai(Math.min(1,n/(yu*.55))),r=1-ai(Math.max(0,(n-.22)/.78));let o=s*r,a=0;if(n>=or){const h=(n-or)/Math.max(.001,1-or),u=ai(h);a=u*u}t==="angel"&&(o*=.42+.58*ai(n/.5),n>=or&&(o*=Math.max(.08,1-a*.95),a=a*a*.82));const l=.62+.5*s*r;return{modelTarget:i,particleTarget:o,nextTarget:a,sizeTarget:l}}function Tu(n,{count:t,time:e,dissolveFromIndex:i,colorA:s,fade:r,progress:o,incomingId:a}){Zf(n,t,e,i,s,s,0,{boostNextAngel:!1});const l=ai(Math.min(1,o/.28)),h=1-ai(Math.max(0,(o-.38)/.62)),u=.68+.48*l*h,f=a==="angel"?.58:1,p=Math.max(0,r)*u*f,m=Math.max(0,.32*l*h)*(a==="angel"?.45:1);for(let M=0;M<t;M++){const x=M*3;let g=n.colors[x],d=n.colors[x+1],b=n.colors[x+2];g=g*(1-m)+m,d=d*(1-m)+m,b=b*(1-m)+m,n.colors[x]=Math.min(1,g*p*1.08),n.colors[x+1]=Math.min(1,d*p*1.08),n.colors[x+2]=Math.min(1,b*p*1.08)}}function Gy(){const n=yy(),t=Ex();let e=0,i=null,s=null,r=null,o={},a=null,l=null,h=0,u="rainbow",f=null,p=1200,m=0,M="hold",x=0,g=null,d=null,b=null,w=null,_=0,R=!1,y=!1,E=!1,A=null,v=0,S=!1,T=!1,I=[],U=null,V=1,H=0,W=0,Z=.7,X=1;function $(){var at;return((at=o.angel)==null?void 0:at.group)||null}function rt({vel:at,fadeGroups:Q=[],sizeSmooth:dt=.7,resetAngelIntro:gt=!0}={}){at!==void 0&&(A=at),S=!1,T=!1,I=Q,U=null,V=1,H=0,W=0,Z=dt,gt&&(X=1,za($()))}function ot(){var at;return(at=_e[m])==null?void 0:at.id}function st(){return ot()==="petal"&&(M==="hold"||M==="dissolve"&&S)}function J(){return!!$s[ot()]&&(M==="hold"||M==="dissolve"&&S)}function C(){var at;return((at=o[ot()])==null?void 0:at.bloom)||null}function P(at){var Q;return at==="petal"?r:((Q=o[at])==null?void 0:Q.bloom)||null}function z(at,Q,dt,gt){var j;if(M!=="dissolve")return;const bt=Sa(Q),_t=(j=_e[v])==null?void 0:j.id,It=S?ot():null,zt=new Set,Wt=Rt=>{if(!Rt||zt.has(Rt))return;const ft=P(Rt);ft!=null&&ft.update&&(ft.update(at,bt,dt,gt),zt.add(Rt))};T||Wt(_t),S&&Wt(It)}function G(){if(M==="dissolve"){if(!T)for(const at of I)Fa(at,V);if(S&&U){const at=ot();let Q=W;at==="angel"&&(Q=Q*Q*X,U.visible=Q>.05),Fa(U,Q)}}}function D(at){if(X>=.999){X!==1&&(za($()),X=1);return}ot()!=="angel"||M!=="hold"||(X=js(X,1,at,2.4),Au($(),X),X>.995&&(za($()),X=1))}function B(at=performance.now()){return at-_<xy?(Y(),_=0,!0):(_=at,!1)}function k(){const{w:at,h:Q}=n.sampleDims(),dt=(bt,_t,It)=>Na(bt,_t,It);if(ot()==="petal"&&(r!=null&&r.samplePoints))return Mt(),li(r.samplePoints(p,at,Q),p,at,Q,dt);const gt=C();return gt!=null&&gt.samplePoints?(Mt(),li(gt.samplePoints(p,at,Q),p,at,Q,dt)):li(Eu(m,p,at,Q,u),p,at,Q,dt)}function nt(){const at=[];r&&s&&at.push(s);for(const Q of Object.values(o))Q.bloom&&Q.group&&at.push(Q.group);return at}function Y(){var gt;if(M==="dissolve"||M==="morph")return;if(!n.morphReady()){R=!0;return}R=!1,E=!1,v=m,rt({fadeGroups:nt(),sizeSmooth:.65});const at=_e[m],Q=k();A=new Float32Array(p*3);for(let bt=0;bt<p;bt++){const _t=bt*3,It=Math.random()*Math.PI*2,zt=(Math.random()-.15)*.32,Wt=2.2+Math.random()*11;A[_t]=Math.cos(It)*Wt*Math.cos(zt),A[_t+1]=Math.sin(zt)*Wt*.4+1.2,A[_t+2]=Math.sin(It)*Wt*Math.cos(zt)}b=zy(v,p,u),w=b,a.positions.set(Q);const dt=(gt=_e[(v+1)%_e.length])==null?void 0:gt.id;Tu(a,{count:p,time:e,dissolveFromIndex:v,colorA:b,fade:.04,progress:0,incomingId:dt}),a.geo.setDrawRange(0,p),a.geo.attributes.position.needsUpdate=!0,a.geo.attributes.color.needsUpdate=!0,a.mat.opacity=0,a.mat.size=Math.max(4,Math.min(13,((f==null?void 0:f.particleSize)||15)*.55)),a.points.renderOrder=30,yt(!0),l&&(l.points.visible=!1,l.geo.setDrawRange(0,0)),M="dissolve",x=0,g=null,d=null,t.set(at.label,"光の粒子へ…")}function K(){var dt,gt;const at=new Set(I),Q=U;at.has(s)&&Q!==s&&At();for(const bt of Object.keys(o)){const _t=o[bt];!(_t!=null&&_t.group)||!at.has(_t.group)||_t.group!==Q&&((gt=(dt=_t.bloom)==null?void 0:dt.destroy)==null||gt.call(dt),oi(_t.group),_t.bloom=null)}I=[],T=!0}function N(at){var dt,gt,bt;if(!n.isReady())return!1;const Q=_e[at];if(m=at,Q.id==="petal")r&&(r.destroy(),r=null,s&&oi(s)),L(f,{skipStop:!0,keepFieldVisible:!0}),U=s;else if($s[Q.id]){const _t=o[Q.id];_t!=null&&_t.bloom&&((gt=(dt=_t.bloom).destroy)==null||gt.call(dt),_t.bloom=null,_t.group&&oi(_t.group)),it(Q.id,Q.label,{skipStop:!0,keepFieldVisible:!0}),U=((bt=o[Q.id])==null?void 0:bt.group)||null}else U=null;return Fa(U,0),U&&(U.renderOrder=5,Q.id==="angel"&&(U.visible=!1,X=.78)),t.set(Q.label,"現れています…"),!0}function vt(){var dt;if(A=null,R=!1,M="hold",x=0,yt(!1),l&&(l.points.visible=!1,l.geo.setDrawRange(0,0)),T||K(),!S){const gt=(v+1)%_e.length;N(gt)}Oy(U),U&&(U.visible=!0);const at=((dt=_e[m])==null?void 0:dt.id)==="angel";at&&(X=Math.min(X,.72),Au($(),X)),rt({vel:null,resetAngelIntro:!at});const Q=_e[m];t.set(Q.label,Da)}function ut(at,Q){var ft;if(!a||!A)return;x+=at;const dt=Math.min(1,x/vy),gt=(ft=_e[(v+1)%_e.length])==null?void 0:ft.id,{modelTarget:bt,particleTarget:_t,nextTarget:It,sizeTarget:zt}=By(dt,gt);V=js(V,bt,at,4.2),H=js(H,_t,at,gt==="angel"?3.2:3.8),W=js(W,It,at,gt==="angel"?1.7:2.6),Z=js(Z,zt,at,3.4);const Wt=Math.exp(-at*1.05),j=.28+.72*ai(Math.min(1,dt/.55));for(let xt=0;xt<p;xt++){const Ct=xt*3;a.positions[Ct]+=A[Ct]*at*j,a.positions[Ct+1]+=A[Ct+1]*at*j,a.positions[Ct+2]+=A[Ct+2]*at*j,A[Ct]*=Wt,A[Ct+1]=A[Ct+1]*Wt-1.6*at,A[Ct+2]*=Wt}T||V<=.02&&dt>=.78&&K(),G(),Tu(a,{count:p,time:e,dissolveFromIndex:v,colorA:b,fade:Math.max(.03,H),progress:dt,incomingId:gt}),a.mat.opacity=Math.max(0,Math.min(1,H));const Rt=Math.max(4,Math.min(13,(Q.particleSize||15)*.56));if(a.mat.size=Rt*Z,a.geo.attributes.position.needsUpdate=!0,a.geo.attributes.color.needsUpdate=!0,yt(!0),!S&&dt>=or){const xt=(v+1)%_e.length;N(xt)&&(S=!0,W=0,G())}if(dt>=1){if(!n.isReady()){R=!0;return}vt()}}function yt(at){a&&(a.points.visible=at,at||a.geo.setDrawRange(0,0),l&&(l.points.visible=at,at||l.geo.setDrawRange(0,0)))}function mt(at,Q,dt){if(!l||!at){l&&(l.points.visible=!1,l.geo.setDrawRange(0,0));return}l.points.visible=!0,l.mat.size=Math.min(18,Q*1.72),l.mat.opacity=dt*.9;let gt=0;for(let bt=0;bt<p&&gt<h;bt+=4){const _t=bt*3,It=gt*3;l.positions[It]=a.positions[_t],l.positions[It+1]=a.positions[_t+1],l.positions[It+2]=a.positions[_t+2],l.colors[It]=a.colors[_t],l.colors[It+1]=a.colors[_t+1],l.colors[It+2]=a.colors[_t+2],gt++}l.geo.setDrawRange(0,gt),l.geo.attributes.position.needsUpdate=!0,l.geo.attributes.color.needsUpdate=!0}function At(){r&&(r.destroy(),r=null),s&&oi(s)}function St(){var at,Q;for(const dt of Object.keys(o)){const gt=o[dt];(Q=(at=gt.bloom)==null?void 0:at.destroy)==null||Q.call(at),gt.group&&oi(gt.group),gt.bloom=null}}function O(){At(),St()}function L(at,Q={}){if(Q.skipStop||O(),!s||!i||!n.isReady())return;const{w:dt,h:gt}=n.sampleDims();r=yx(),r.init(dt,gt,at||f||{palette:u},s),Q.keepFieldVisible||yt(!1),t.set("花びら",Da)}function it(at,Q,dt={}){dt.skipStop||O();const gt=o[at],bt=$s[at];if(!gt||!bt||!n.isReady())return;const{w:_t,h:It}=n.sampleDims();try{gt.bloom=bt(),gt.bloom.init(_t,It,f||{palette:u},gt.group)}catch(zt){console.error("[MorphSequence] bloom init failed:",at,zt),gt.bloom=null;return}dt.keepFieldVisible||yt(!1),t.set(Q,Da)}function ht(at,Q,dt=null,gt=null){g=Na(p,at,Q,dt),gt!=null?d=li(Eu(gt,p,at,Q,u),p,at,Q,dt):d=Na(p,at,Q,dt),{fromCloud:g,toCloud:d}=Dy(g,d,p,at,Q,dt)}function Mt(){var dt,gt,bt;if(!n.isReady())return;const{w:at,h:Q}=n.sampleDims();(dt=r==null?void 0:r.resize)==null||dt.call(r,at,Q);for(const _t of Object.values(o))(bt=(gt=_t.bloom)==null?void 0:gt.resize)==null||bt.call(gt,at,Q)}function pt(at){p=at,{colorA:b,colorB:w}=Fy(p,u)}function Dt(at=m){if(!n.isReady())return y=!0,!1;y=!1,E=!1,R=!1,rt({vel:null}),M="hold",x=0,g=null,d=null;const Q=_e[at];return yt(!1),Q.id==="petal"?L(f):$s[Q.id]&&it(Q.id,Q.label),!0}function Tt(){if(!E||M!=="morph"||!n.isReady())return;const at=(m+1)%_e.length;Dt(at)&&(m=at)}function Ft(at,Q){var xt;if(!a)return;const dt=_e[m];if(M==="hold"){Number.isFinite(dt.hold)&&dt.hold>0&&(x+=at,x>=dt.hold&&Y());return}if(M==="dissolve"){ut(at,Q);return}E?x=dt.morph:x+=at*(Q.speed||1),yt(!0);const{w:gt,h:bt}=n.sampleDims(),_t=(xt=_e[(m+1)%_e.length])==null?void 0:xt.id,It=dt.id==="angel"||_t==="angel",zt=It?qf:null,Wt=(m+1)%_e.length;(!g||!d||g.length!==a.positions.length||d.length!==a.positions.length||!Io(g,p,gt,bt)||!Io(d,p,gt,bt))&&(ht(gt,bt,zt,Wt),g&&a.positions.set(g));const j=Math.min(1,x/dt.morph);g&&d&&g.length===a.positions.length&&d.length===a.positions.length&&wx(a.positions,g,d,j,e,dt.style),Zf(a,p,e,m,b,w,j),a.geo.setDrawRange(0,p),a.geo.attributes.position.needsUpdate=!0,a.geo.attributes.color.needsUpdate=!0;const Rt=It?.36:.55,ft=Math.max(4,Math.min(14,(Q.particleSize||15)*Rt));a.mat.size=ft,a.mat.opacity=It?.66:.95,mt(It,ft,a.mat.opacity),j>=1&&!E?(E=!0,x=dt.morph,Tt()):E&&Tt()}return{init(at,Q,dt,gt){n.setSize(at,Q),i=gt,e=0,m=0,M="hold",x=0,E=!1,R=!1,y=!1,rt({vel:null}),u=dt.palette||"rainbow",f={...dt},s=new fe,s.name="morphFlowerBloom",i.add(s),o={};for(const _t of Object.keys($s)){const It=new fe;It.name=`morphBloom_${_t}`,i.add(It),o[_t]={group:It,bloom:null}}const bt=Math.min(1800,Math.max(600,Math.floor((dt.particleCount||1030)*1.1)));pt(bt),h=Math.max(1,Math.floor(bt*.24)),a=pe(bt,8),a.mat.sizeAttenuation=!0,a.mat.opacity=.95,i.add(a.points),l=pe(h,12),l.mat.sizeAttenuation=!0,l.mat.opacity=.78,l.points.visible=!1,i.add(l.points),n.isReady()?Dt():y=!0},resize(at,Q){var bt,_t,It;const dt=n.width,gt=n.height;n.setSize(at,Q),(bt=r==null?void 0:r.resize)==null||bt.call(r,at,Q);for(const zt of Object.values(o))(It=(_t=zt.bloom)==null?void 0:_t.resize)==null||It.call(_t,at,Q);M==="hold"&&n.isReady()&&(y||n.realDimsArrived(dt,gt))&&Dt(m),E&&n.isReady()&&Tt(),R&&n.morphReady()&&(M==="dissolve"?vt():M==="hold"&&Y())},update(at,Q,dt,gt){var It,zt;e+=at,f=gt,u=gt.palette||u,n.isReady()&&(y&&M==="hold"&&Dt(m),E&&Tt()),n.morphReady()&&R&&(M==="dissolve"?vt():M==="hold"&&Y());const bt=Math.min(1800,Math.max(600,Math.floor((gt.particleCount||1030)*1.1)));if(bt!==p&&a&&M==="hold"&&(i.remove(a.points),a.geo.dispose(),(It=a.mat.map)==null||It.dispose(),a.mat.dispose(),l&&(i.remove(l.points),l.geo.dispose(),(zt=l.mat.map)==null||zt.dispose(),l.mat.dispose(),l=null),pt(bt),h=Math.max(1,Math.floor(p*.24)),a=pe(p,8),l=pe(h,12),l.mat.sizeAttenuation=!0,l.mat.opacity=.78,l.points.visible=!1,i.add(a.points,l.points),M==="hold"&&yt(!1)),M==="dissolve")z(at,Q,dt,gt);else{st()&&r&&r.update(at,Sa(Q),dt,gt);const Wt=C();J()&&Wt&&Wt.update(at,Sa(Q),dt,gt)}const _t=(Q==null?void 0:Q.velocity)>8&&M==="morph"?1.35:1;Ft(at*_t,gt),D(at)},render(){var Q;if(M==="dissolve"){const dt=(Q=_e[v])==null?void 0:Q.id,gt=S?ot():null,bt=new Set,_t=It=>{var zt,Wt;!It||bt.has(It)||((Wt=(zt=P(It))==null?void 0:zt.render)==null||Wt.call(zt),bt.add(It))};T||_t(dt),S&&_t(gt),G();return}st()&&r&&r.render();const at=C();J()&&at&&at.render()},onPointerDown(){},onPointerMove(){},onPointerUp(){M==="hold"&&(st()||J())&&B()},setParams(at){var Q,dt,gt;u=at.palette||u,f={...f||{},...at},p>0&&(b=Cs(u,p),w=Cs(u,p)),(Q=r==null?void 0:r.setParams)==null||Q.call(r,at);for(const bt of Object.values(o))(gt=(dt=bt.bloom)==null?void 0:dt.setParams)==null||gt.call(dt,at)},destroy(){O(),a=null,l=null,s=null,o={},i=null,t.destroy()}}}const Hy=.5*(Math.sqrt(3)-1),Qs=(3-Math.sqrt(3))/6,ky=1/3,vn=1/6,Fe=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];class Jf{constructor(t=Math.random()*2147483647){const e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;let i=Math.floor(Math.abs(t))||1;for(let s=255;s>0;s--){i=i*16807%2147483647;const r=i%(s+1);[e[s],e[r]]=[e[r],e[s]]}this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=e[s&255],this.permMod12[s]=this.perm[s]%12}noise2D(t,e){const i=(t+e)*Hy,s=Math.floor(t+i),r=Math.floor(e+i),o=(s+r)*Qs,a=t-(s-o),l=e-(r-o),h=a>l?1:0,u=a>l?0:1,f=a-h+Qs,p=l-u+Qs,m=a-1+2*Qs,M=l-1+2*Qs,x=s&255,g=r&255,d=this.permMod12[x+this.perm[g]],b=this.permMod12[x+h+this.perm[g+u]],w=this.permMod12[x+1+this.perm[g+1]];let _,R,y,E=.5-a*a-l*l;E<0?_=0:(E*=E,_=E*E*(Fe[d][0]*a+Fe[d][1]*l));let A=.5-f*f-p*p;A<0?R=0:(A*=A,R=A*A*(Fe[b][0]*f+Fe[b][1]*p));let v=.5-m*m-M*M;return v<0?y=0:(v*=v,y=v*v*(Fe[w][0]*m+Fe[w][1]*M)),70*(_+R+y)}noise3D(t,e,i){const s=(t+e+i)*ky,r=Math.floor(t+s),o=Math.floor(e+s),a=Math.floor(i+s),l=(r+o+a)*vn,h=t-(r-l),u=e-(o-l),f=i-(a-l);let p,m,M,x,g,d;h>=u?u>=f?(p=1,m=0,M=0,x=1,g=1,d=0):h>=f?(p=1,m=0,M=0,x=1,g=0,d=1):(p=0,m=0,M=1,x=1,g=0,d=1):u<f?(p=0,m=0,M=1,x=0,g=1,d=1):h<f?(p=0,m=1,M=0,x=0,g=1,d=1):(p=0,m=1,M=0,x=1,g=1,d=0);const b=h-p+vn,w=u-m+vn,_=f-M+vn,R=h-x+2*vn,y=u-g+2*vn,E=f-d+2*vn,A=h-1+3*vn,v=u-1+3*vn,S=f-1+3*vn,T=r&255,I=o&255,U=a&255,V=this.permMod12[T+this.perm[I+this.perm[U]]],H=this.permMod12[T+p+this.perm[I+m+this.perm[U+M]]],W=this.permMod12[T+x+this.perm[I+g+this.perm[U+d]]],Z=this.permMod12[T+1+this.perm[I+1+this.perm[U+1]]];let X,$,rt,ot,st=.6-h*h-u*u-f*f;X=st<0?0:(st*=st,st*st*(Fe[V][0]*h+Fe[V][1]*u+Fe[V][2]*f));let J=.6-b*b-w*w-_*_;$=J<0?0:(J*=J,J*J*(Fe[H][0]*b+Fe[H][1]*w+Fe[H][2]*_));let C=.6-R*R-y*y-E*E;rt=C<0?0:(C*=C,C*C*(Fe[W][0]*R+Fe[W][1]*y+Fe[W][2]*E));let P=.6-A*A-v*v-S*S;return ot=P<0?0:(P*=P,P*P*(Fe[Z][0]*A+Fe[Z][1]*v+Fe[Z][2]*S)),32*(X+$+rt+ot)}}function Ru(n,t,e,i,s=4,r=2,o=.5){let a=0,l=1,h=1;for(let u=0;u<s;u++)a+=l*n.noise3D(t*h,e*h,i*h),h*=r,l*=o;return a}function Vy(){const n=new Jf;let t=[],e=0,i=0,s=0,r="rainbow",o=null,a=null;const l=1500;class h{constructor(f,p){this.reset(f,p)}reset(f,p){this.x=Math.random()*f,this.y=Math.random()*p,this.z=(Math.random()-.5)*180,this.prevX=this.x,this.prevY=this.y,this.prevZ=this.z,this.vx=0,this.vy=0,this.vz=0,this.life=0,this.maxLife=1.5+Math.random()*3,this.colorIdx=Math.floor(Math.random()*5),this.size=1+Math.random()*2}update(f,p,m,M,x){this.prevX=this.x,this.prevY=this.y,this.prevZ=this.z;const g=.0018,d=Ru(n,this.x*g,this.y*g,s*.25,3)*Math.PI*4,b=Ru(n,this.z*g,this.x*g,s*.2,2),w=90*M;this.vx+=Math.cos(d)*w*f,this.vy+=Math.sin(d)*w*f,this.vz+=(b-.5)*w*.45*f,this.vy+=x*40*f,this.vx*=.97,this.vy*=.97,this.vz*=.97,this.x+=this.vx*f,this.y+=this.vy*f,this.z+=this.vz*f,this.life+=f,(this.x<-80||this.x>p+80||this.y<-80||this.y>m+80||this.life>this.maxLife)&&this.reset(p,m)}}return{init(u,f,p,m){e=u,i=f,r=p.palette||"atmosphere",s=0,t=[],o=pe(l,11),m.add(o.points);const M=new ye,x=new Float32Array(l*2*3),g=new Float32Array(l*2*3);M.setAttribute("position",new Le(x,3)),M.setAttribute("color",new Le(g,3)),M.setDrawRange(0,0);const d=new ic({vertexColors:!0,transparent:!0,blending:jt,depthWrite:!1}),b=new mf(M,d);b.frustumCulled=!1,m.add(b),a={geo:M,pos:x,col:g,lines:b};const w=Math.min(p.particleCount,l);for(let _=0;_<w;_++){const R=new h(u,f);R.life=Math.random()*R.maxLife,t.push(R)}},resize(u,f){e=u,i=f},update(u,f,p,m){s+=u,r=m.palette;const M=p.isActive?1+p.volume*2.5:1;t.forEach(g=>{if(g.update(u,e,i,m.speed*M,m.gravity),f.isDown||f.velocity>5){const d=f.x-g.x,b=f.y-g.y,w=d*d+b*b,_=220;if(w<_*_&&w>1){const R=Math.sqrt(w),y=(_-R)/_*120*u;g.vx+=d/R*y,g.vy+=b/R*y}}});const x=Math.min(m.particleCount,l);for(;t.length<x;)t.push(new h(e,i));for(;t.length>x;)t.pop()},render(u,f,p,m){if(!o)return;const M=Be(r);o.mat.size=6+m.particleSize*.9;let x=0;t.forEach((g,d)=>{const b=Ee(M[g.colorIdx%M.length]),[w,_,R]=He(b),y=g.life/g.maxLife,E=Math.sin(y*Math.PI)*.85,A=Qt(g.x,g.y,g.z,e,i);o.positions[d*3]=A.x,o.positions[d*3+1]=A.y,o.positions[d*3+2]=A.z,o.colors[d*3]=w*E,o.colors[d*3+1]=_*E,o.colors[d*3+2]=R*E;const v=Qt(g.prevX,g.prevY,g.prevZ,e,i),S=x*6;a.pos[S]=v.x,a.pos[S+1]=v.y,a.pos[S+2]=v.z,a.pos[S+3]=A.x,a.pos[S+4]=A.y,a.pos[S+5]=A.z,a.col[S]=w*E*.35,a.col[S+1]=_*E*.35,a.col[S+2]=R*E*.35,a.col[S+3]=w*E,a.col[S+4]=_*E,a.col[S+5]=R*E,x++}),o.geo.setDrawRange(0,t.length),o.geo.attributes.position.needsUpdate=!0,o.geo.attributes.color.needsUpdate=!0,a.geo.setDrawRange(0,x*2),a.geo.attributes.position.needsUpdate=!0,a.geo.attributes.color.needsUpdate=!0},onPointerDown(){},onPointerMove(){},onPointerUp(){},setParams(u){r=u.palette},destroy(){t=[],o=null,a=null}}}function Wy(){let n=[],t=[],e=0,i=0,s=0,r="rainbow",o=null,a=null;const l=800;class h{constructor(p,m){this.x=Math.random()*p,this.y=Math.random()*m,this.z=(Math.random()-.5)*200,this.vx=(Math.random()-.5)*25,this.vy=(Math.random()-.5)*25,this.vz=(Math.random()-.5)*18,this.baseSize=1+Math.random()*3,this.size=this.baseSize,this.brightness=Math.random(),this.sparklePhase=Math.random()*Math.PI*2,this.sparkleFreq=1.5+Math.random()*3,this.colorIdx=Math.floor(Math.random()*5),this.trail=[],this.maxTrail=6+Math.floor(Math.random()*8)}update(p,m,M,x,g,d,b){this.trail.push({x:this.x,y:this.y,z:this.z}),this.trail.length>this.maxTrail&&this.trail.shift();const w=x.x-this.x,_=x.y-this.y,R=w*w+_*_,y=280;if(R<y*y&&R>1){const E=Math.sqrt(R),A=(y-E)/y,v=x.isDown?180:50;this.vx+=w/E*A*v*p,this.vy+=_/E*A*v*p,this.vz+=(x.isDown?-40:8)*A*p}this.vy+=d*35*p,this.vx*=.992,this.vy*=.992,this.vz*=.992,this.x+=this.vx*g*p,this.y+=this.vy*g*p,this.z+=this.vz*g*p,this.x<0&&(this.x=0,this.vx*=-.7),this.x>m&&(this.x=m,this.vx*=-.7),this.y<0&&(this.y=0,this.vy*=-.7),this.y>M&&(this.y=M,this.vy*=-.7),this.z<-220&&(this.z=-220,this.vz*=-.7),this.z>220&&(this.z=220,this.vz*=-.7),this.brightness=.25+.75*Math.abs(Math.sin(s*this.sparkleFreq+this.sparklePhase)),this.size=b.isActive?this.baseSize*(1+b.bass*3):this.baseSize}}function u(f){t=[];const p=Math.min(n.length,160);for(let m=0;m<p;m++)for(let M=m+1;M<p;M++){const x=n[m].x-n[M].x,g=n[m].y-n[M].y,d=n[m].z-n[M].z,b=x*x+g*g+d*d;if(b<f*f&&t.push({a:n[m],b:n[M],opacity:1-Math.sqrt(b)/f}),t.length>400)return}}return{init(f,p,m,M){e=f,i=p,r=m.palette||"atmosphere",s=0,t=[],n=[],o=pe(l*4,12),M.add(o.points);const x=new ye,g=new Float32Array(400*2*3),d=new Float32Array(400*2*3);x.setAttribute("position",new Le(g,3)),x.setAttribute("color",new Le(d,3)),x.setDrawRange(0,0);const b=new ic({vertexColors:!0,transparent:!0,blending:jt,depthWrite:!1}),w=new mf(x,b);w.frustumCulled=!1,M.add(w),a={geo:x,pos:g,col:d};const _=Math.min(m.particleCount,l);for(let R=0;R<_;R++)n.push(new h(f,p))},resize(f,p){e=f,i=p},update(f,p,m,M){s+=f,r=M.palette,n.forEach(g=>g.update(f,e,i,p,M.speed,M.gravity,m)),Math.floor(s*60)%3===0&&u(70+M.particleSize*4);const x=Math.min(M.particleCount,l);for(;n.length<x;)n.push(new h(e,i));for(;n.length>x;)n.pop()},render(f,p,m,M){if(!o)return;const x=Be(r);o.mat.size=5+M.particleSize*1.4;let g=0;n.forEach(d=>{const b=Ee(x[d.colorIdx%x.length]),[w,_,R]=He(b);for(let E=0;E<d.trail.length;E++){const A=d.trail[E],S=E/d.trail.length*.35*d.brightness,T=Qt(A.x,A.y,A.z,e,i);o.positions[g*3]=T.x,o.positions[g*3+1]=T.y,o.positions[g*3+2]=T.z,o.colors[g*3]=w*S,o.colors[g*3+1]=_*S,o.colors[g*3+2]=R*S,g++}const y=Qt(d.x,d.y,d.z,e,i);o.positions[g*3]=y.x,o.positions[g*3+1]=y.y,o.positions[g*3+2]=y.z,o.colors[g*3]=Math.min(1,w*d.brightness*1.4),o.colors[g*3+1]=Math.min(1,_*d.brightness*1.4),o.colors[g*3+2]=Math.min(1,R*d.brightness*1.4),g++}),o.geo.setDrawRange(0,g),o.geo.attributes.position.needsUpdate=!0,o.geo.attributes.color.needsUpdate=!0,t.forEach((d,b)=>{const w=Ee(x[d.a.colorIdx%x.length]),[_,R,y]=He(w),E=Qt(d.a.x,d.a.y,d.a.z,e,i),A=Qt(d.b.x,d.b.y,d.b.z,e,i),v=b*6;a.pos[v]=E.x,a.pos[v+1]=E.y,a.pos[v+2]=E.z,a.pos[v+3]=A.x,a.pos[v+4]=A.y,a.pos[v+5]=A.z;const S=d.opacity*.35;a.col[v]=_*S,a.col[v+1]=R*S,a.col[v+2]=y*S,a.col[v+3]=_*S,a.col[v+4]=R*S,a.col[v+5]=y*S}),a.geo.setDrawRange(0,t.length*2),a.geo.attributes.position.needsUpdate=!0,a.geo.attributes.color.needsUpdate=!0},onPointerDown(){},onPointerMove(){},onPointerUp(){},setParams(f){r=f.palette},destroy(){n=[],t=[],o=null,a=null}}}const Xy=new q(0,1,0);function Yy(){let n=[],t=0,e=0,i=0,s="rainbow",r=8,o=0,a=null;const l=new Yt,h=new kt,u=80,f=14,p=u*f;class m{constructor(){this.angle=Math.random()*Math.PI*2,this.distance=30+Math.random()*250,this.lat=(Math.random()-.5)*.9,this.baseSize=4+Math.random()*18,this.size=this.baseSize,this.rotation=Math.random()*Math.PI*2,this.rotSpeed=(Math.random()-.5)*2.5,this.orbitSpeed=.08+Math.random()*.4,this.type=Math.floor(Math.random()*4),this.colorIdx=Math.floor(Math.random()*5),this.pulsePhase=Math.random()*Math.PI*2,this.opacity=.2+Math.random()*.45}update(x,g){this.angle+=this.orbitSpeed*g*x,this.rotation+=this.rotSpeed*g*x,this.size=this.baseSize+Math.sin(i*2+this.pulsePhase)*this.baseSize*.3}}return{init(M,x,g,d){t=M,e=x,s=g.palette||"atmosphere",i=0,n=[];const b=new hc(1,0),w=new ee({color:16777215,transparent:!0,opacity:.7,blending:jt,depthWrite:!1,wireframe:!0});a=new $t(b,w,p),a.instanceColor=new Re(new Float32Array(p*3),3),a.frustumCulled=!1,d.add(a);const _=Math.max(15,Math.floor(g.particleCount/8));for(let R=0;R<_;R++)n.push(new m)},resize(M,x){t=M,e=x},update(M,x,g,d){i+=M,s=d.palette,o=Math.atan2(x.y-e/2,x.x-t/2),Math.sqrt((x.x-t/2)**2+(x.y-e/2)**2),r=6+Math.floor(x.y/Math.max(e,1)*8);const b=g.isActive?1+g.bass*4:1;n.forEach(_=>_.update(M,d.speed*b)),g.isActive&&n.forEach(_=>{_.size=_.baseSize*(1+g.mid*2)});const w=Math.max(15,Math.min(u,Math.floor(d.particleCount/8)));for(;n.length<w;)n.push(new m);for(;n.length>w;)n.pop()},render(M,x,g,d){if(!a)return;const b=Be(s),w=Math.min(t,e)*.42;let _=0;const R=Math.min(f,Math.max(6,r));for(let y=0;y<R;y++){const E=y/R*Math.PI*2+o*.1,A=y%2===1?-1:1;n.forEach(v=>{if(_>=p)return;const S=Ee(b[v.colorIdx%b.length]),[T,I,U]=He(S),V=v.distance/250*w;l.position.set(Math.cos(v.angle)*V,Math.sin(v.lat+i*.15)*V*.45*A,Math.sin(v.angle)*V),l.position.applyAxisAngle(Xy,E),l.rotation.set(v.rotation,E,v.rotation*.4);const H=v.size*(d.particleSize/5)*.55;l.scale.setScalar(Math.max(H,.2)),l.updateMatrix(),a.setMatrixAt(_,l.matrix),h.setRGB(T,I,U).multiplyScalar(.4+v.opacity),a.setColorAt(_,h),_++})}for(;_<p;)l.position.set(0,0,-5e3),l.scale.setScalar(.001),l.updateMatrix(),a.setMatrixAt(_,l.matrix),a.setColorAt(_,h.setRGB(0,0,0)),_++;a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)},onPointerDown(){},onPointerMove(){},onPointerUp(){},setParams(M){s=M.palette},destroy(){n=[],a=null}}}function qy(){let n=[],t=[],e=0,i=0,s=0,r="rainbow",o=0,a=null,l=null;const h=new Yt,u=new kt,f=48;class p{constructor(M,x,g){this.x=M,this.y=x,this.z=(Math.random()-.5)*80,this.radius=0,this.maxRadius=180+Math.random()*320,this.speed=110+Math.random()*140,this.lineWidth=1.5+Math.random()*3,this.opacity=1,this.rings=1+Math.floor(Math.random()*3),this.tilt=(Math.random()-.5)*.8;const d=Be(g);this.color=d[Math.floor(Math.random()*d.length)],this.rgb=Ee(this.color)}update(M,x){return this.radius+=this.speed*x*M,this.opacity=Math.max(0,1-this.radius/this.maxRadius),this.opacity>.008}}return{init(m,M,x,g){e=m,i=M,r=x.palette||"atmosphere",s=0,o=0,n=[],t=[];const d=new we(1,.018,8,64),b=new ee({color:16777215,transparent:!0,opacity:.85,blending:jt,depthWrite:!1});a=new $t(d,b,f),a.instanceColor=new Re(new Float32Array(f*3),3),a.frustumCulled=!1,g.add(a),l=pe(90,8),g.add(l.points);for(let w=0;w<90;w++)t.push({x:Math.random()*m,y:Math.random()*M,z:(Math.random()-.5)*140,size:.5+Math.random()*2,sx:(Math.random()-.5)*8,sy:(Math.random()-.5)*8,sz:(Math.random()-.5)*6,phase:Math.random()*Math.PI*2,colorIdx:Math.floor(Math.random()*5)});for(let w=0;w<3;w++)n.push(new p(Math.random()*m,Math.random()*M,r))},resize(m,M){e=m,i=M},update(m,M,x,g){s+=m,r=g.palette,n=n.filter(b=>b.update(m,g.speed)),o+=m;const d=Math.max(.3,1.8/g.speed);o>d&&(o=0,n.push(new p(Math.random()*e,Math.random()*i,r))),M.isDown&&M.velocity>4&&n.push(new p(M.x,M.y,r)),x.isActive&&x.bass>.35&&n.push(new p(e/2+(Math.random()-.5)*e*.5,i/2+(Math.random()-.5)*i*.5,r)),t.forEach(b=>{b.x+=b.sx*m,b.y+=b.sy*m,b.z+=b.sz*m,n.forEach(w=>{const _=b.x-w.x,R=b.y-w.y,y=Math.sqrt(_*_+R*R);if(Math.abs(y-w.radius)<35&&w.opacity>.08){const E=w.opacity*25;b.sx+=_/(y||1)*E*m,b.sy+=R/(y||1)*E*m,b.sz+=(Math.random()-.5)*E*m}}),b.sx*=.992,b.sy*=.992,b.sz*=.992,b.x<0&&(b.x+=e),b.x>e&&(b.x-=e),b.y<0&&(b.y+=i),b.y>i&&(b.y-=i)}),n.length>f&&n.splice(0,n.length-f)},render(){if(!a)return;const m=Be(r);for(let M=0;M<f;M++){const x=n[M];if(!x||x.radius<1){h.position.set(0,0,-4e3),h.scale.setScalar(.001),h.updateMatrix(),a.setMatrixAt(M,h.matrix),a.setColorAt(M,u.setRGB(0,0,0));continue}const g=Qt(x.x,x.y,x.z,e,i);h.position.copy(g),h.rotation.set(Math.PI/2+x.tilt,0,s*.2),h.scale.set(x.radius,x.radius,x.radius*.35),h.updateMatrix(),a.setMatrixAt(M,h.matrix);const[d,b,w]=He(x.rgb);u.setRGB(d,b,w).multiplyScalar(x.opacity),a.setColorAt(M,u)}a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),t.forEach((M,x)=>{const g=Ee(m[M.colorIdx%m.length]),[d,b,w]=He(g),_=.35+.4*Math.sin(s*2.2+M.phase),R=Qt(M.x,M.y,M.z,e,i);l.positions[x*3]=R.x,l.positions[x*3+1]=R.y,l.positions[x*3+2]=R.z,l.colors[x*3]=d*_,l.colors[x*3+1]=b*_,l.colors[x*3+2]=w*_}),l.geo.setDrawRange(0,t.length),l.geo.attributes.position.needsUpdate=!0,l.geo.attributes.color.needsUpdate=!0},onPointerDown(m,M){for(let x=0;x<3;x++){const g=x*80;setTimeout(()=>{n.push(new p(m+(Math.random()-.5)*15,M+(Math.random()-.5)*15,r))},g)}},onPointerMove(m,M,x){x.velocity>10&&n.push(new p(m,M,r))},onPointerUp(){},setParams(m){r=m.palette},destroy(){n=[],t=[],a=null,l=null}}}function Zy(){let n=0,t=0,e=0,i="nebula",s=0,r=null,o=null,a=null;const l=new Yt,h=new kt,u=1600,f=2400,p=32;let m=[],M=[],x=[];class g{constructor(R,y){this.reset(R,y,!0)}reset(R,y,E=!1){const A=E?Math.sqrt(Math.random())*Math.min(R,y)*.75:Math.min(R,y)*(.6+Math.random()*.3);this.angle=Math.random()*Math.PI*2,this.dist=A,this.z=(Math.random()-.5)*360,this.spiralSpeed=(.2+Math.random()*.5)*(Math.random()<.15?-1:1),this.inwardSpeed=10+Math.random()*25,this.baseSize=1.2+Math.random()*3.2,this.sparklePhase=Math.random()*Math.PI*2,this.sparkleFreq=2+Math.random()*4,this.colorIdx=Math.floor(Math.random()*6),this.armOffset=Math.floor(Math.random()*3)*(Math.PI*2/3)}update(R,y,E,A,v,S,T){const I=v*(1+T*1.5);this.angle+=(this.spiralSpeed*.8+80/(this.dist+50))*.015*I*R,this.dist-=(this.inwardSpeed*S*.03+8)*I*R,this.dist<20&&this.reset(y,E,!1);const U=this.angle+this.armOffset+Math.log(this.dist*.02+1)*1.5;let V=y*.5+Math.cos(U)*this.dist,H=E*.5+Math.sin(U)*this.dist*.75,W=this.z+Math.sin(this.angle*2)*40;const Z=A.x-V,X=A.y-H,$=Z*Z+X*X,rt=220;if($<rt*rt&&$>10){const ot=Math.sqrt($),st=(1-ot/rt)*(A.isDown?70:30);V+=Z/ot*st,H+=X/ot*st,W+=(A.isDown?-50:25)*(1-ot/rt)}this.currentX=V,this.currentY=H,this.currentZ=W,this.brightness=.3+.7*Math.abs(Math.sin(e*this.sparkleFreq+this.sparklePhase))}}class d{constructor(R,y,E,A,v=240){this.x=R,this.y=y,this.z=E,this.radius=2,this.maxRadius=v,this.growthSpeed=120+Math.random()*150,this.opacity=1,this.tiltX=(Math.random()-.5)*1.2,this.tiltY=(Math.random()-.5)*1.2,this.color=A,this.alive=!0}update(R,y){this.radius+=this.growthSpeed*y*R,this.opacity=Math.max(0,1-Math.pow(this.radius/this.maxRadius,1.3)),(this.radius>=this.maxRadius||this.opacity<=.01)&&(this.alive=!1)}}class b{constructor(R,y,E,A=!1){this.x=R,this.y=y,this.z=(Math.random()-.5)*120,this.palette=E,this.isBig=A,this.lifetime=0,this.maxLifetime=A?6:4.2+Math.random()*2,this.growth=0,this.growthRate=A?.7:.9+Math.random()*.5,this.rotation=Math.random()*Math.PI*2,this.rotSpeed=(Math.random()-.5)*.6,this.petalsCount=A?8+Math.floor(Math.random()*4):5+Math.floor(Math.random()*3),this.maxRadius=A?130+Math.random()*90:65+Math.random()*55,this.opacity=1,this.alive=!0;const v=Be(E);this.mainColorHex=v[Math.floor(Math.random()*v.length)],this.accentColorHex=v[Math.floor(Math.random()*v.length)],this.mainRgb=Ee(this.mainColorHex),this.accentRgb=Ee(this.accentColorHex),this.particles=[];const S=A?180:85;for(let T=0;T<S;T++){const U=T%this.petalsCount/this.petalsCount*Math.PI*2,V=(Math.random()-.5)*(Math.PI/this.petalsCount)*1.4,H=U+V,W=Math.pow(Math.random(),.65),Z=25+Math.random()*70;this.particles.push({angle:H,distRatio:W,currentDist:0,zOffset:(Math.random()-.5)*60,driftSpeed:Z,phase:Math.random()*Math.PI*2,isCore:Math.random()<.25,colorMix:Math.random(),size:1.5+Math.random()*2.5})}x.push(new d(this.x,this.y,this.z,this.accentRgb,this.maxRadius*2.2)),A&&setTimeout(()=>{this.alive&&x.push(new d(this.x,this.y,this.z,this.mainRgb,this.maxRadius*3))},120)}update(R,y,E){this.lifetime+=R,this.rotation+=this.rotSpeed*y*R,this.growth<1&&(this.growth=Math.min(1,this.growth+this.growthRate*y*R));const A=this.lifetime/this.maxLifetime;if(A>.6&&(this.opacity=Math.max(0,1-(A-.6)/.4)),this.lifetime>=this.maxLifetime||this.opacity<=.005){this.alive=!1;return}const v=this._easeOutCubic(this.growth)*this.maxRadius*(1+E*.45);for(const S of this.particles)S.currentDist=S.distRatio*v+A*S.driftSpeed*.4}_easeOutCubic(R){return 1-Math.pow(1-R,3)}}function w(_,R,y,E=!1){M.length>=10&&M.shift(),M.push(new b(_,R,y,E))}return{init(_,R,y,E){n=_,t=R,i=y.palette||"nebula",e=0,s=0,m=[],M=[],x=[],r=pe(u,9),E.add(r.points),o=pe(f,13),E.add(o.points);for(let S=0;S<u;S++)m.push(new g(_,R));const A=new we(1,.015,8,64),v=new ee({color:16777215,transparent:!0,opacity:.9,blending:jt,depthWrite:!1});a=new $t(A,v,p),a.instanceColor=new Re(new Float32Array(p*3),3),a.frustumCulled=!1,E.add(a),w(_*.5,R*.5,i,!0)},update(_,R,y,E){e+=_,s+=_;const A=R.speed!==void 0?R.speed:1,v=R.gravity!==void 0?R.gravity:1,S=E!=null&&E.isActive?E.bass:0,T=E!=null&&E.isActive?2:2.8;if(s>T){s=0;const U=n*(.2+Math.random()*.6),V=t*(.2+Math.random()*.6);w(U,V,i,Math.random()<.4)}const I=Math.min(m.length,R.particleCount||1e3);for(let U=0;U<I;U++)m[U].update(_,n,t,y,A,v,S);for(let U=M.length-1;U>=0;U--)M[U].update(_,A,S),M[U].alive||M.splice(U,1);for(let U=x.length-1;U>=0;U--)x[U].update(_,A),x[U].alive||x.splice(U,1)},render(_,R,y){const A=Be(i).map(Ee),v=y!=null&&y.isActive?y.bass:0,S=Math.min(m.length,R.particleCount||1e3);let T=0;for(let U=0;U<S;U++){const V=m[U],H=Qt(V.currentX,V.currentY,V.currentZ,n,t),W=A[V.colorIdx%A.length],[Z,X,$]=He(W),rt=V.brightness*.85;r.positions[T*3]=H.x,r.positions[T*3+1]=H.y,r.positions[T*3+2]=H.z,r.colors[T*3]=Z*rt,r.colors[T*3+1]=X*rt,r.colors[T*3+2]=$*rt,T++}r.geo.setDrawRange(0,T),r.geo.attributes.position.needsUpdate=!0,r.geo.attributes.color.needsUpdate=!0;let I=0;for(const U of M){const[V,H,W]=He(U.mainRgb),[Z,X,$]=He(U.accentRgb),rt=U.rotation;for(const ot of U.particles){if(I>=f)break;const st=ot.angle+rt,J=U.x+Math.cos(st)*ot.currentDist,C=U.y+Math.sin(st)*ot.currentDist,P=U.z+ot.zOffset+Math.sin(st*3+e*2)*15,z=Qt(J,C,P,n,t);o.positions[I*3]=z.x,o.positions[I*3+1]=z.y,o.positions[I*3+2]=z.z;const G=V*(1-ot.colorMix)+Z*ot.colorMix,D=H*(1-ot.colorMix)+X*ot.colorMix,B=W*(1-ot.colorMix)+$*ot.colorMix,k=ot.isCore?1.4:1,nt=U.opacity*k*(.8+v*.4);o.colors[I*3]=Math.min(1,G*nt),o.colors[I*3+1]=Math.min(1,D*nt),o.colors[I*3+2]=Math.min(1,B*nt),I++}}if(o.geo.setDrawRange(0,I),o.geo.attributes.position.needsUpdate=!0,o.geo.attributes.color.needsUpdate=!0,a){const U=Math.min(x.length,p);for(let V=0;V<U;V++){const H=x[V],W=Qt(H.x,H.y,H.z,n,t);l.position.copy(W),l.rotation.set(H.tiltX+Math.PI/2,H.tiltY,e*.3),l.scale.set(H.radius,H.radius,H.radius*.4),l.updateMatrix(),a.setMatrixAt(V,l.matrix);const[Z,X,$]=He(H.color);h.setRGB(Z,X,$).multiplyScalar(H.opacity*.85),a.setColorAt(V,h)}a.count=U,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)}},onPointerDown(_,R){w(_,R,i,!0)},onPointerMove(_,R,y){y.velocity>18&&Math.random()<.3&&w(_,R,i,!1)},onPointerUp(){},setParams(_){_.palette&&(i=_.palette)},resize(_,R){n=_,t=R},destroy(_){M=[],m=[],x=[],_&&oi(_),r=null,o=null,a=null}}}const bi=0,tr=1,Cu=2,er=16e3,Pu=24,Jy=2.8,Ky=1.4;function $y(){let n=0,t=0,e=0,i=0,s=0,r="rainbow",o=null,a=null;const l=new Yt,h=new kt,u=new Jf;let f=Jy,p=Ky,m="",M=[];function x(H){if(H===m&&M.length>0)return;m=H,M=Be(H).map(Z=>{const X=Ee(Z);return He(X)})}const g=[];let d=0,b=[],w=!1,_=0,R=0,y=0;const E=document.createElement("canvas");E.width=1200,E.height=800;const A=E.getContext("2d",{willReadFrequently:!0});class v{constructor(){this.x=0,this.y=0,this.z=0,this.vx=0,this.vy=0,this.vz=0,this.baseX=0,this.baseY=0,this.baseZ=0,this.age=0,this.life=0,this.maxLife=4.2,this.size=5,this.colorIdx=0,this.layerType=bi,this.active=!1,this.noiseOffset=Math.random()*1e3,this.twinkleSpeed=4+Math.random()*10,this.twinkleOffset=Math.random()*6.28}spawn(W,Z,X,$,rt=bi,ot=5,st=null){this.x=W,this.y=Z,this.z=X,this.baseX=W,this.baseY=Z,this.baseZ=X,this.vx=0,this.vy=0,this.vz=0,this.age=0;const J=st!==null?st:f+p;this.life=J,this.maxLife=J,this.size=ot,this.colorIdx=$,this.layerType=rt,this.active=!0,this.noiseOffset=Math.random()*1e3}update(W,Z,X){if(this.active){if(this.age+=W,this.life-=W,this.life<=0){this.active=!1;return}if(this.age<f)this.x=this.baseX,this.y=this.baseY,this.z=this.baseZ,this.vx=0,this.vy=0,this.vz=0;else{const $=this.age-f,rt=Math.min(1,$/p),ot=u.noise2D(this.x*.003,this.y*.003+s*.15+this.noiseOffset)*Math.PI*2,st=(18+X*30)*Z*rt;this.vx+=Math.cos(ot)*st*W,this.vy+=Math.sin(ot)*st*W-12*W,this.vz+=Math.sin(ot*1.5)*(st*.3)*W;const J=Math.pow(.92,W*60);this.vx*=J,this.vy*=J,this.vz*=J,this.x+=this.vx*W,this.y+=this.vy*W,this.z+=this.vz*W}}}}class S{constructor(W,Z,X=180){this.x=W,this.y=Z,this.radius=4,this.maxRadius=X,this.speed=120+Math.random()*60,this.opacity=.85,this.alive=!0}update(W){this.radius+=this.speed*W,this.opacity=Math.max(0,.85*(1-Math.pow(this.radius/this.maxRadius,1.2))),(this.radius>=this.maxRadius||this.opacity<=.01)&&(this.alive=!1)}}function T(H,W,Z,X,$,rt,ot=null){g[d].spawn(H,W,Z,X,$,rt,ot),d=(d+1)%er}function I(H,W,Z,X,$){const rt=Z-H,ot=X-W,st=Math.hypot(rt,ot);if(st<.5)return;const J=1/st,C=-ot*J,P=rt*J,G=Math.max(1,Math.ceil(st/4)),D=1/G;for(let B=1;B<=G;B++){const k=B*D,nt=H+rt*k,Y=W+ot*k,K=1+(Math.random()<.4?1:0);for(let vt=0;vt<K;vt++){const ut=(Math.random()-.5)*6,yt=nt+C*ut+(Math.random()-.5)*3,mt=Y+P*ut+(Math.random()-.5)*3,At=(Math.random()-.5)*8;T(yt,mt,At,$,bi,5.2+Math.random()*2.2)}const N=2+Math.floor(Math.random()*2);for(let vt=0;vt<N;vt++){const ut=(Math.random()-.5)*16,yt=nt+C*ut+(Math.random()-.5)*5,mt=Y+P*ut+(Math.random()-.5)*5,At=(Math.random()-.5)*14;T(yt,mt,At,$,tr,3.2+Math.random()*1.8)}if(Math.random()<.75){const vt=(Math.random()-.5)*26,ut=nt+C*vt+(Math.random()-.5)*6,yt=Y+P*vt+(Math.random()-.5)*6,mt=(Math.random()-.5)*20;T(ut,yt,mt,$,Cu,1.8+Math.random()*1.5)}}}function U(H,W=!0){if(!H||n===0||t===0)return;const Z=E.width,X=E.height;A.clearRect(0,0,Z,X);const $=H.length;let rt=260;$===2?rt=220:$===3?rt=175:$>=4&&$<=6?rt=130:$>6&&(rt=Math.max(70,Math.floor(800/$))),A.textAlign="center",A.textBaseline="middle",A.strokeStyle="#ffffff",A.lineWidth=Math.max(8,Math.floor(rt*.09)),A.font=`600 ${rt}px "Noto Sans JP", "Outfit", -apple-system, sans-serif`,A.strokeText(H,Z*.5,X*.5),A.fillStyle="rgba(255, 255, 255, 0.45)",A.fillText(H,Z*.5,X*.5);const st=A.getImageData(0,0,Z,X).data,J=[];let C=Z,P=0,z=X,G=0;const D=3;for(let mt=0;mt<X;mt+=D)for(let At=0;At<Z;At+=D){const St=(mt*Z+At)*4;st[St+3]>60&&(J.push({x:At,y:mt}),At<C&&(C=At),At>P&&(P=At),mt<z&&(z=mt),mt>G&&(G=mt))}if(J.length===0||C>=P||z>=G)return;const B=P-C,k=G-z,nt=(C+P)*.5,Y=(z+G)*.5,K=Math.max(200,n*.65),N=Math.max(160,t*.5),vt=Math.min(K/B,N/k),ut=Math.min(J.length,1600),yt=J.length/ut;for(let mt=0;mt<ut;mt++){const At=Math.floor(mt*yt),St=J[At],O=n*.5+(St.x-nt)*vt+(Math.random()-.5)*5,L=t*.5+(St.y-Y)*vt+(Math.random()-.5)*5,it=(Math.random()-.5)*20,ht=Math.floor(mt/ut*8),Mt=mt%3===0?bi:mt%3===1?tr:Cu;T(O,L,it,ht,Mt,Mt===bi?5.5:Mt===tr?3.8:2.2)}W&&b.push(new S(n*.5,t*.5,300))}function V(){for(const H of g)if(H.active){const W=Math.random()*Math.PI*2,Z=180+Math.random()*250;H.vx+=Math.cos(W)*Z,H.vy+=Math.sin(W)*Z,H.life=Math.min(H.life,.6)}b.push(new S(n*.5,t*.5,350))}return{name:"fluidWords",noLayerRotation:!0,init(H,W,Z,X){n=H,t=W,e=H*.5,i=W*.5,r=(Z==null?void 0:Z.palette)||"rainbow",x(r),g.length=0;for(let ot=0;ot<er;ot++)g.push(new v);d=0,b=[],o=pe(er,{size:5,blending:jt,depthWrite:!1,transparent:!0}),X.add(o.points);const $=new vr(.9,1,36),rt=new ee({color:16777215,transparent:!0,opacity:.8,side:ue,blending:jt,depthWrite:!1});a=new $t($,rt,Pu),a.instanceMatrix.setUsage(Wd),a.count=0,X.add(a)},update(H,W,Z,X){s+=H,X.palette&&X.palette!==r&&(r=X.palette,x(r));const $=(Z==null?void 0:Z.volume)||0,rt=X.speed??1;w&&(I(_,R,W.x,W.y,y),_=W.x,R=W.y,Math.random()<.06&&b.push(new S(W.x,W.y,60+Math.random()*40)));for(let ot=0;ot<er;ot++){const st=g[ot];st.active&&st.update(H,rt,$)}for(let ot=b.length-1;ot>=0;ot--){const st=b[ot];st.update(H),st.alive||b.splice(ot,1)}},render(H,W,Z,X){if(!o)return;x(r);const $=M,rt=$.length||1;let ot=0;const st=o.positions,J=o.colors;for(let C=0;C<er;C++){const P=g[C];if(P.active&&P.life>0){const[z,G,D]=$[P.colorIdx%rt];let B=1;if(P.age>f){const K=Math.min(1,(P.age-f)/p);B=Math.max(0,1-K)}const k=.78+.22*Math.sin(s*P.twinkleSpeed+P.twinkleOffset),nt=B*k,Y=ot*3;if(st[Y]=P.x-e,st[Y+1]=i-P.y,st[Y+2]=P.z,P.layerType===bi){const K=.45*nt;J[Y]=Math.min(1,z*nt*.7+K),J[Y+1]=Math.min(1,G*nt*.7+K),J[Y+2]=Math.min(1,D*nt*.7+K)}else if(P.layerType===tr){const K=.15*nt;J[Y]=Math.min(1,z*nt+K),J[Y+1]=Math.min(1,G*nt+K),J[Y+2]=Math.min(1,D*nt+K)}else J[Y]=z*nt*.65,J[Y+1]=G*nt*.65,J[Y+2]=D*nt*.65;ot++}}if(o.mat.size=4.8+(X.particleSize??3.5)*.6,o.geo.setDrawRange(0,ot),o.geo.attributes.position.needsUpdate=!0,o.geo.attributes.color.needsUpdate=!0,a){const C=Math.min(b.length,Pu);for(let P=0;P<C;P++){const z=b[P];l.position.set(z.x-e,i-z.y,0),l.rotation.set(0,0,0),l.scale.set(z.radius,z.radius,1),l.updateMatrix(),a.setMatrixAt(P,l.matrix);const[G,D,B]=$[P%rt];h.setRGB(G,D,B).multiplyScalar(z.opacity*.85),a.setColorAt(P,h)}a.count=C,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)}},onPointerDown(H,W){w=!0,_=H,R=W,y=Math.floor(Math.random()*8);for(let Z=0;Z<8;Z++){const X=(Math.random()-.5)*14,$=Z<3?bi:tr,rt=Z<3?5.8:3.4;T(H+X,W+(Math.random()-.5)*14,(Math.random()-.5)*10,y,$,rt)}b.push(new S(H,W,65))},onPointerMove(H,W){w&&(I(_,R,H,W,y),_=H,R=W)},onPointerUp(){w&&(w=!1,b.push(new S(_,R,95)))},setParams(H){H&&(H.palette&&(r=H.palette,x(r)),H.trail!==void 0&&(f=1.6+H.trail*3.5,p=.8+H.trail*1.5),H.customText!==void 0&&H.customText!==null&&(U(H.customText,!0),delete H.customText),H.clear&&(V(),delete H.clear))},resize(H,W){n=H,t=W,e=H*.5,i=W*.5},clear(){V()},destroy(H){var W,Z;g.length=0,b=[],H&&oi(H),(W=o==null?void 0:o.points)!=null&&W.geometry&&o.points.geometry.dispose(),(Z=o==null?void 0:o.points)!=null&&Z.material&&o.points.material.dispose(),a!=null&&a.geometry&&a.geometry.dispose(),a!=null&&a.material&&a.material.dispose(),o=null,a=null}}}const bc={morphSequence:Gy,spaceyBloom:Zy,fluidWords:$y,fluidAurora:Vy,crystalDust:Wy,kaleidoPrism:Yy,interactiveRipples:qy};class jy{constructor(){this.audioCtx=null,this.analyser=null,this.waveformData=null,this.frequencyData=null,this.stream=null,this.isActive=!1,this.volume=0,this.bass=0,this.mid=0,this.treble=0}async startMic(){try{this.stream=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),this.audioCtx=new(window.AudioContext||window.webkitAudioContext);const t=this.audioCtx.createMediaStreamSource(this.stream);this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256,this.analyser.smoothingTimeConstant=.8,t.connect(this.analyser);const e=this.analyser.frequencyBinCount;this.waveformData=new Uint8Array(e),this.frequencyData=new Uint8Array(e),this.isActive=!0}catch(t){throw console.error("マイクアクセスエラー:",t),this.isActive=!1,t}}stop(){this.stream&&(this.stream.getTracks().forEach(t=>t.stop()),this.stream=null),this.audioCtx&&this.audioCtx.state!=="closed"&&(this.audioCtx.close().catch(()=>{}),this.audioCtx=null),this.analyser=null,this.isActive=!1,this.volume=0,this.bass=0,this.mid=0,this.treble=0}update(){if(!this.isActive||!this.analyser)return;this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.waveformData);const t=this.frequencyData.length,e=Math.floor(t/3);let i=0,s=0,r=0,o=0;for(let l=0;l<t;l++){const h=this.frequencyData[l]/255;i+=h,l<e?s+=h:l<e*2?r+=h:o+=h}const a=.3;this.volume=this.volume*(1-a)+i/t*a,this.bass=this.bass*(1-a)+s/e*a,this.mid=this.mid*(1-a)+r/e*a,this.treble=this.treble*(1-a)+o/(t-e*2)*a}getAudioData(){return{volume:this.volume,bass:this.bass,mid:this.mid,treble:this.treble,isActive:this.isActive,frequencyData:this.frequencyData,waveformData:this.waveformData}}}class Qy{constructor(t){this.canvas=t,this.mediaRecorder=null,this.chunks=[],this.isRecording=!1}captureScreenshot(t="art-capture.png"){const e=document.createElement("a");e.download=t,e.href=this.canvas.toDataURL("image/png"),document.body.appendChild(e),e.click(),document.body.removeChild(e)}startRecording(){if(!this.isRecording)try{const t=this.canvas.captureStream(60),e=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"];let i="";for(const s of e)if(MediaRecorder.isTypeSupported(s)){i=s;break}this.mediaRecorder=new MediaRecorder(t,{mimeType:i||void 0,videoBitsPerSecond:8e6}),this.chunks=[],this.mediaRecorder.ondataavailable=s=>{s.data&&s.data.size>0&&this.chunks.push(s.data)},this.mediaRecorder.onstop=()=>{const s=new Blob(this.chunks,{type:i||"video/webm"}),r=URL.createObjectURL(s),o=document.createElement("a");o.download=`art-recording-${Date.now()}.webm`,o.href=r,document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(r),5e3),this.chunks=[]},this.mediaRecorder.start(1e3),this.isRecording=!0}catch(t){console.error("録画開始エラー:",t),this.isRecording=!1}}stopRecording(){if(!(!this.isRecording||!this.mediaRecorder)){try{this.mediaRecorder.stop()}catch(t){console.error("録画停止エラー:",t)}this.isRecording=!1}}toggleRecording(){return this.isRecording?this.stopRecording():this.startRecording(),this.isRecording}}const t1="20260829-refactor-bloom-split";console.info(`[Digital Art Studio] ${t1}`);const wc=document.getElementById("artCanvas"),Tn=new fx(wc),ys=new jy,Kf=new Qy(wc);let Ps="morphSequence";Tn.setPreset(bc[Ps]());Tn.start();const e1=document.querySelectorAll(".preset-btn");e1.forEach(n=>{n.addEventListener("click",()=>{var e;const t=n.dataset.preset;t!==Ps&&((e=document.querySelector(".preset-btn.active"))==null||e.classList.remove("active"),n.classList.add("active"),Ps=t,Tn.setPreset(bc[t]()))})});const n1=[{id:"particleCount",displayId:"particleCountValue",key:"particleCount",parse:parseInt},{id:"particleSize",displayId:"particleSizeValue",key:"particleSize",parse:parseInt},{id:"speed",displayId:"speedValue",key:"speed",parse:parseFloat},{id:"trail",displayId:"trailValue",key:"trail",parse:parseFloat},{id:"gravity",displayId:"gravityValue",key:"gravity",parse:parseFloat}];n1.forEach(({id:n,displayId:t,key:e,parse:i})=>{const s=document.getElementById(n),r=document.getElementById(t);!s||!r||s.addEventListener("input",()=>{const o=i(s.value);r.textContent=s.value,Tn.setParams({[e]:o})})});const Lu=document.getElementById("paletteSection"),Oa=document.getElementById("paletteToggle");Oa&&Lu&&Oa.addEventListener("click",()=>{const n=Lu.classList.toggle("is-collapsed");Oa.setAttribute("aria-expanded",n?"false":"true")});const i1=document.querySelectorAll(".palette-swatch");i1.forEach(n=>{n.addEventListener("click",()=>{var t;(t=document.querySelector(".palette-swatch.active"))==null||t.classList.remove("active"),n.classList.add("active"),Tn.setParams({palette:n.dataset.palette})})});const Iu=document.getElementById("customColor");Iu&&Iu.addEventListener("input",()=>{});const Du=document.getElementById("textSection"),Ba=document.getElementById("textToggle");Ba&&Du&&Ba.addEventListener("click",()=>{const n=Du.classList.toggle("is-collapsed");Ba.setAttribute("aria-expanded",n?"false":"true")});const s1=document.querySelectorAll(".word-tag"),dr=document.getElementById("customWordInput"),Uu=document.getElementById("btnWordApply");function $f(n){var t;if(n){if(Ps!=="fluidWords"){(t=document.querySelector(".preset-btn.active"))==null||t.classList.remove("active");const e=document.querySelector('.preset-btn[data-preset="fluidWords"]');e==null||e.classList.add("active"),Ps="fluidWords",Tn.setPreset(bc.fluidWords())}Tn.setParams({customText:n})}}s1.forEach(n=>{n.addEventListener("click",()=>{var e;(e=document.querySelector(".word-tag.active"))==null||e.classList.remove("active"),n.classList.add("active");const t=n.dataset.word;dr&&(dr.value=""),$f(t)})});if(Uu&&dr){const n=()=>{var e;const t=dr.value.trim();t&&((e=document.querySelector(".word-tag.active"))==null||e.classList.remove("active"),$f(t))};Uu.addEventListener("click",n),dr.addEventListener("keydown",t=>{t.key==="Enter"&&n()})}const Nu=document.getElementById("btnClearCanvas");Nu&&Nu.addEventListener("click",()=>{var n;(n=document.querySelector(".word-tag.active"))==null||n.classList.remove("active"),Tn.setParams({clear:!0})});const nr=document.getElementById("btnAudio");nr.addEventListener("click",async()=>{if(ys.isActive)ys.stop(),nr.querySelector(".audio-label").textContent="マイク OFF",nr.classList.remove("active");else try{await ys.startMic(),nr.querySelector(".audio-label").textContent="マイク ON",nr.classList.add("active")}catch{alert(`マイクへのアクセスが拒否されました。
ブラウザの設定を確認してください。`)}});function jf(){ys.isActive&&(ys.update(),Tn.setAudioData(ys.getAudioData())),requestAnimationFrame(jf)}jf();document.getElementById("btnCapture").addEventListener("click",()=>{Kf.captureScreenshot(`digital-art-${Ps}-${Date.now()}.png`)});const Fu=document.getElementById("btnRecord"),r1=document.getElementById("recordingStatus");Fu.addEventListener("click",()=>{const n=Kf.toggleRecording();Fu.classList.toggle("recording",n),r1.classList.toggle("hidden",!n)});document.getElementById("btnFullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})});const Qf=document.getElementById("controlPanel"),o1=document.getElementById("panelToggle");o1.addEventListener("click",()=>{Qf.classList.toggle("collapsed")});let go=!0;const a1=[document.getElementById("toolbar"),document.getElementById("presetBar"),Qf,document.getElementById("statusBar")];wc.addEventListener("dblclick",()=>{go=!go,a1.forEach(n=>{n&&(n.style.opacity=go?"":"0",n.style.pointerEvents=go?"":"none")})});const zu=document.getElementById("fpsDisplay");setInterval(()=>{zu&&(zu.textContent=Tn.fps+" FPS")},500);
