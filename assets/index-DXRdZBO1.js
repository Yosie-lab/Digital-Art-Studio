(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bl="170",Xf=0,Tc=1,Yf=2,Tu=1,qf=2,zn=3,hi=0,Re=1,de=2,ai=0,ze=1,Qt=2,Rc=3,Cc=4,Zf=5,bi=100,Jf=101,Kf=102,$f=103,jf=104,Qf=200,td=201,ed=202,nd=203,Na=204,Fa=205,id=206,sd=207,rd=208,od=209,ad=210,ld=211,cd=212,hd=213,ud=214,za=0,Oa=1,Ba=2,ys=3,Ga=4,Ha=5,Va=6,ka=7,Ru=0,fd=1,dd=2,li=0,pd=1,md=2,gd=3,Md=4,_d=5,xd=6,vd=7,Cu=300,Ss=301,bs=302,Wa=303,Xa=304,Co=306,Ya=1e3,Ri=1001,qa=1002,nn=1003,yd=1004,Ar=1005,bn=1006,Oo=1007,Ci=1008,Hn=1009,Pu=1010,Lu=1011,cr=1012,Gl=1013,Ii=1014,wn=1015,vr=1016,Hl=1017,Vl=1018,ws=1020,Iu=35902,Du=1021,Uu=1022,gn=1023,Nu=1024,Fu=1025,_s=1026,Es=1027,kl=1028,Wl=1029,zu=1030,Xl=1031,Yl=1033,ho=33776,uo=33777,fo=33778,po=33779,Za=35840,Ja=35841,Ka=35842,$a=35843,ja=36196,Qa=37492,tl=37496,el=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,fl=37819,dl=37820,pl=37821,mo=36492,ml=36494,gl=36495,Ou=36283,Ml=36284,_l=36285,xl=36286,Sd=3200,bd=3201,Bu=0,wd=1,ii="",qe="srgb",Cs="srgb-linear",Po="linear",ce="srgb",Yi=7680,Pc=519,Ed=512,Ad=513,Td=514,Gu=515,Rd=516,Cd=517,Pd=518,Ld=519,Lc=35044,Ic="300 es",On=2e3,Mo=2001;class Ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dc=1234567;const ir=Math.PI/180,hr=180/Math.PI;function Oi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function ql(n,t){return(n%t+t)%t}function Id(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Dd(n,t,e){return n!==t?(e-n)/(t-n):0}function sr(n,t,e){return(1-e)*n+e*t}function Ud(n,t,e,i){return sr(n,t,1-Math.exp(-e*i))}function Nd(n,t=1){return t-Math.abs(ql(n,t*2)-t)}function Fd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function zd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Od(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Bd(n,t){return n+Math.random()*(t-n)}function Gd(n){return n*(.5-Math.random())}function Hd(n){n!==void 0&&(Dc=n);let t=Dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vd(n){return n*ir}function kd(n){return n*hr}function Wd(n){return(n&n-1)===0&&n!==0}function Xd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qd(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),u=o((t+i)/2),f=r((t-i)/2),p=o((t-i)/2),m=r((i-t)/2),M=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*f,l*p,a*h);break;case"YZY":n.set(l*p,a*u,l*f,a*h);break;case"ZXZ":n.set(l*f,l*p,a*u,a*h);break;case"XZX":n.set(a*u,l*M,l*m,a*h);break;case"YXY":n.set(l*m,a*u,l*M,a*h);break;case"ZYZ":n.set(l*M,l*m,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zd={DEG2RAD:ir,RAD2DEG:hr,generateUUID:Oi,clamp:Fe,euclideanModulo:ql,mapLinear:Id,inverseLerp:Dd,lerp:sr,damp:Ud,pingpong:Nd,smoothstep:Fd,smootherstep:zd,randInt:Od,randFloat:Bd,randFloatSpread:Gd,seededRandom:Hd,degToRad:Vd,radToDeg:kd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:qd,normalize:Xe,denormalize:fs};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,s,r,o,a,l,h){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],u=i[4],f=i[7],p=i[2],m=i[5],M=i[8],_=s[0],g=s[3],d=s[6],y=s[1],w=s[4],x=s[7],R=s[2],S=s[5],E=s[8];return r[0]=o*_+a*y+l*R,r[3]=o*g+a*w+l*S,r[6]=o*d+a*x+l*E,r[1]=h*_+u*y+f*R,r[4]=h*g+u*w+f*S,r[7]=h*d+u*x+f*E,r[2]=p*_+m*y+M*R,r[5]=p*g+m*w+M*S,r[8]=p*d+m*x+M*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-i*r*u+i*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=u*o-a*h,p=a*l-u*r,m=h*r-o*l,M=e*f+i*p+s*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/M;return t[0]=f*_,t[1]=(s*h-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=p*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-h*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bo=new Zt;function Hu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jd(){const n=_o("canvas");return n.style.display="block",n}const Uc={};function Qs(n){n in Uc||(Uc[n]=!0,console.warn(n))}function Kd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function $d(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jd(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(n.r=Gn(n.r),n.g=Gn(n.g),n.b=Gn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(n.r=xs(n.r),n.g=xs(n.g),n.b=xs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ii?Po:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Nc=[.64,.33,.3,.6,.15,.06],Fc=[.2126,.7152,.0722],zc=[.3127,.329],Oc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[Cs]:{primaries:Nc,whitePoint:zc,transfer:Po,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:Fc,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:Nc,whitePoint:zc,transfer:ce,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:Fc,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});let qi;class Qd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=_o("canvas")),qi.width=t.width,qi.height=t.height;const i=qi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_o("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gn(e[i]/255)*255):e[i]=Gn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tp=0;class Vu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Go(s[o].image)):r.push(Go(s[o]))}else r=Go(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ep=0;class We extends Ps{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=Ri,s=Ri,r=bn,o=Ci,a=gn,l=Hn,h=We.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Oi(),this.name="",this.source=new Vu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ya:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ya:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Cu;We.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,h=l[0],u=l[4],f=l[8],p=l[1],m=l[5],M=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-_)<.01&&Math.abs(M-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+_)<.1&&Math.abs(M+g)<.1&&Math.abs(h+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(h+1)/2,x=(m+1)/2,R=(d+1)/2,S=(u+p)/4,E=(f+_)/4,T=(M+g)/4;return w>x&&w>R?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=E/i):x>R?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=T/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=E/r,s=T/r),this.set(i,s,r,e),this}let y=Math.sqrt((g-M)*(g-M)+(f-_)*(f-_)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(g-M)/y,this.y=(f-_)/y,this.z=(p-u)/y,this.w=Math.acos((h+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends Ps{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new We(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends np{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ku extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],u=i[s+2],f=i[s+3];const p=r[o+0],m=r[o+1],M=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=M,t[e+3]=_;return}if(f!==_||l!==p||h!==m||u!==M){let g=1-a;const d=l*p+h*m+u*M+f*_,y=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const R=Math.sqrt(w),S=Math.atan2(R,d*y);g=Math.sin(g*S)/R,a=Math.sin(a*S)/R}const x=a*y;if(l=l*g+p*x,h=h*g+m*x,u=u*g+M*x,f=f*g+_*x,g===1-a){const R=1/Math.sqrt(l*l+h*h+u*u+f*f);l*=R,h*=R,u*=R,f*=R}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o],p=r[o+1],m=r[o+2],M=r[o+3];return t[e]=a*M+u*f+l*m-h*p,t[e+1]=l*M+u*p+h*f-a*m,t[e+2]=h*M+u*m+a*p-l*f,t[e+3]=u*M-a*f-l*p-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(s/2),f=a(r/2),p=l(i/2),m=l(s/2),M=l(r/2);switch(o){case"XYZ":this._x=p*u*f+h*m*M,this._y=h*m*f-p*u*M,this._z=h*u*M+p*m*f,this._w=h*u*f-p*m*M;break;case"YXZ":this._x=p*u*f+h*m*M,this._y=h*m*f-p*u*M,this._z=h*u*M-p*m*f,this._w=h*u*f+p*m*M;break;case"ZXY":this._x=p*u*f-h*m*M,this._y=h*m*f+p*u*M,this._z=h*u*M+p*m*f,this._w=h*u*f-p*m*M;break;case"ZYX":this._x=p*u*f-h*m*M,this._y=h*m*f+p*u*M,this._z=h*u*M-p*m*f,this._w=h*u*f+p*m*M;break;case"YZX":this._x=p*u*f+h*m*M,this._y=h*m*f+p*u*M,this._z=h*u*M-p*m*f,this._w=h*u*f-p*m*M;break;case"XZY":this._x=p*u*f-h*m*M,this._y=h*m*f-p*u*M,this._z=h*u*M+p*m*f,this._w=h*u*f+p*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],f=e[10],p=i+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-h)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+h)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-h)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+h)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-i*h,this._z=r*u+o*h+i*l-s*a,this._w=o*u-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),f=Math.sin((1-e)*u)/h,p=Math.sin(e*u)/h;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*h+o*f-a*u,this.y=i+l*u+a*h-r*f,this.z=s+l*f+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new k,Gc=new Ui;class Bi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Rr.subVectors(this.max,zs),Zi.subVectors(t.a,zs),Ji.subVectors(t.b,zs),Ki.subVectors(t.c,zs),Zn.subVectors(Ji,Zi),Jn.subVectors(Ki,Ji),di.subVectors(Zi,Ki);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-di.z,di.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,di.z,0,-di.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-di.y,di.x,0];return!Vo(e,Zi,Ji,Ki,Rr)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,Zi,Ji,Ki,Rr))?!1:(Cr.crossVectors(Zn,Jn),e=[Cr.x,Cr.y,Cr.z],Vo(e,Zi,Ji,Ki,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new k,new k,new k,new k,new k,new k,new k,new k],fn=new k,Tr=new Bi,Zi=new k,Ji=new k,Ki=new k,Zn=new k,Jn=new k,di=new k,zs=new k,Rr=new k,Cr=new k,pi=new k;function Vo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){pi.fromArray(n,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),h=e.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const sp=new Bi,Os=new k,ko=new k;class Gi{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):sp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(ko)),this.expandByPoint(Os.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new k,Wo=new k,Pr=new k,Kn=new k,Xo=new k,Lr=new k,Yo=new k;class Zl{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Wo.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Wo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Pr),a=Kn.dot(this.direction),l=-Kn.dot(Pr),h=Kn.lengthSq(),u=Math.abs(1-o*o);let f,p,m,M;if(u>0)if(f=o*l-a,p=o*a-l,M=r*u,f>=0)if(p>=-M)if(p<=M){const _=1/u;f*=_,p*=_,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+h}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;else p<=-M?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h):p<=M?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+h):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Wo).addScaledVector(Pr,p),m}intersectSphere(t,e){In.subVectors(t.center,this.origin);const i=In.dot(this.direction),s=In.dot(In)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(i=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(i=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,i,s,r){Xo.subVectors(e,t),Lr.subVectors(i,t),Yo.crossVectors(Xo,Lr);let o=this.direction.dot(Yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const l=a*this.direction.dot(Lr.crossVectors(Kn,Lr));if(l<0)return null;const h=a*this.direction.dot(Xo.cross(Kn));if(h<0||l+h>o)return null;const u=-a*Kn.dot(Yo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,s,r,o,a,l,h,u,f,p,m,M,_,g){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,u,f,p,m,M,_,g)}set(t,e,i,s,r,o,a,l,h,u,f,p,m,M,_,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=h,d[6]=u,d[10]=f,d[14]=p,d[3]=m,d[7]=M,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const p=o*u,m=o*f,M=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=h,e[1]=m+M*h,e[5]=p-_*h,e[9]=-a*l,e[2]=_-p*h,e[6]=M+m*h,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,m=l*f,M=h*u,_=h*f;e[0]=p+_*a,e[4]=M*a-m,e[8]=o*h,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-M,e[6]=_+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,m=l*f,M=h*u,_=h*f;e[0]=p-_*a,e[4]=-o*f,e[8]=M+m*a,e[1]=m+M*a,e[5]=o*u,e[9]=_-p*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,m=o*f,M=a*u,_=a*f;e[0]=l*u,e[4]=M*h-m,e[8]=p*h+_,e[1]=l*f,e[5]=_*h+p,e[9]=m*h-M,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,m=o*h,M=a*l,_=a*h;e[0]=l*u,e[4]=_-p*f,e[8]=M*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=m*f+M,e[10]=p-_*f}else if(t.order==="XZY"){const p=o*l,m=o*h,M=a*l,_=a*h;e[0]=l*u,e[4]=-f,e[8]=h*u,e[1]=p*f+_,e[5]=o*u,e[9]=m*f-M,e[2]=M*f-m,e[6]=a*u,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rp,t,op)}lookAt(t,e,i){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),$n.crossVectors(i,Qe),$n.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),$n.crossVectors(i,Qe)),$n.normalize(),Ir.crossVectors(Qe,$n),s[0]=$n.x,s[4]=Ir.x,s[8]=Qe.x,s[1]=$n.y,s[5]=Ir.y,s[9]=Qe.y,s[2]=$n.z,s[6]=Ir.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],u=i[1],f=i[5],p=i[9],m=i[13],M=i[2],_=i[6],g=i[10],d=i[14],y=i[3],w=i[7],x=i[11],R=i[15],S=s[0],E=s[4],T=s[8],v=s[12],b=s[1],A=s[5],I=s[9],z=s[13],W=s[2],Y=s[6],Z=s[10],et=s[14],X=s[3],nt=s[7],pt=s[11],_t=s[15];return r[0]=o*S+a*b+l*W+h*X,r[4]=o*E+a*A+l*Y+h*nt,r[8]=o*T+a*I+l*Z+h*pt,r[12]=o*v+a*z+l*et+h*_t,r[1]=u*S+f*b+p*W+m*X,r[5]=u*E+f*A+p*Y+m*nt,r[9]=u*T+f*I+p*Z+m*pt,r[13]=u*v+f*z+p*et+m*_t,r[2]=M*S+_*b+g*W+d*X,r[6]=M*E+_*A+g*Y+d*nt,r[10]=M*T+_*I+g*Z+d*pt,r[14]=M*v+_*z+g*et+d*_t,r[3]=y*S+w*b+x*W+R*X,r[7]=y*E+w*A+x*Y+R*nt,r[11]=y*T+w*I+x*Z+R*pt,r[15]=y*v+w*z+x*et+R*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],f=t[6],p=t[10],m=t[14],M=t[3],_=t[7],g=t[11],d=t[15];return M*(+r*l*f-s*h*f-r*a*p+i*h*p+s*a*m-i*l*m)+_*(+e*l*m-e*h*p+r*o*p-s*o*m+s*h*u-r*l*u)+g*(+e*h*f-e*a*m-r*o*f+i*o*m+r*a*u-i*h*u)+d*(-s*a*u-e*l*f+e*a*p+s*o*f-i*o*p+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=t[9],p=t[10],m=t[11],M=t[12],_=t[13],g=t[14],d=t[15],y=f*g*h-_*p*h+_*l*m-a*g*m-f*l*d+a*p*d,w=M*p*h-u*g*h-M*l*m+o*g*m+u*l*d-o*p*d,x=u*_*h-M*f*h+M*a*m-o*_*m-u*a*d+o*f*d,R=M*f*l-u*_*l-M*a*p+o*_*p+u*a*g-o*f*g,S=e*y+i*w+s*x+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return t[0]=y*E,t[1]=(_*p*r-f*g*r-_*s*m+i*g*m+f*s*d-i*p*d)*E,t[2]=(a*g*r-_*l*r+_*s*h-i*g*h-a*s*d+i*l*d)*E,t[3]=(f*l*r-a*p*r-f*s*h+i*p*h+a*s*m-i*l*m)*E,t[4]=w*E,t[5]=(u*g*r-M*p*r+M*s*m-e*g*m-u*s*d+e*p*d)*E,t[6]=(M*l*r-o*g*r-M*s*h+e*g*h+o*s*d-e*l*d)*E,t[7]=(o*p*r-u*l*r+u*s*h-e*p*h-o*s*m+e*l*m)*E,t[8]=x*E,t[9]=(M*f*r-u*_*r-M*i*m+e*_*m+u*i*d-e*f*d)*E,t[10]=(o*_*r-M*a*r+M*i*h-e*_*h-o*i*d+e*a*d)*E,t[11]=(u*a*r-o*f*r-u*i*h+e*f*h+o*i*m-e*a*m)*E,t[12]=R*E,t[13]=(u*_*s-M*f*s+M*i*p-e*_*p-u*i*g+e*f*g)*E,t[14]=(M*a*s-o*_*s-M*i*l+e*_*l+o*i*g-e*a*g)*E,t[15]=(o*f*s-u*a*s+u*i*l-e*f*l-o*i*p+e*a*p)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+i,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,f=a+a,p=r*h,m=r*u,M=r*f,_=o*u,g=o*f,d=a*f,y=l*h,w=l*u,x=l*f,R=i.x,S=i.y,E=i.z;return s[0]=(1-(_+d))*R,s[1]=(m+x)*R,s[2]=(M-w)*R,s[3]=0,s[4]=(m-x)*S,s[5]=(1-(p+d))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(M+w)*E,s[9]=(g-y)*E,s[10]=(1-(p+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);const h=1/r,u=1/o,f=1/a;return dn.elements[0]*=h,dn.elements[1]*=h,dn.elements[2]*=h,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,e.setFromRotationMatrix(dn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=On){const l=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s);let m,M;if(a===On)m=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Mo)m=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=On){const l=this.elements,h=1/(e-t),u=1/(i-s),f=1/(o-r),p=(e+t)*h,m=(i+s)*u;let M,_;if(a===On)M=(o+r)*f,_=-2*f;else if(a===Mo)M=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const $i=new k,dn=new le,rp=new k(0,0,0),op=new k(1,1,1),$n=new k,Ir=new k,Qe=new k,Hc=new le,Vc=new Ui;class En{constructor(t=0,e=0,i=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Wu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ap=0;const kc=new k,ji=new Ui,Dn=new le,Dr=new k,Bs=new k,lp=new k,cp=new Ui,Wc=new k(1,0,0),Xc=new k(0,1,0),Yc=new k(0,0,1),qc={type:"added"},hp={type:"removed"},Qi={type:"childadded",child:null},qo={type:"childremoved",child:null};class Kt extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const t=new k,e=new En,i=new Ui,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(Xc,t)}rotateZ(t){return this.rotateOnAxis(Yc,t)}translateOnAxis(t,e){return kc.copy(t).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(Xc,t)}translateZ(t){return this.translateOnAxis(Yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Dr.copy(t):Dr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Bs,Dr,this.up):Dn.lookAt(Dr,Bs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Dn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hp),qo.child=t,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),m=o(t.animations),M=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),M.length>0&&(i.nodes=M)}return i.object=s,i;function o(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new k(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new k,Un=new k,Zo=new k,Nn=new k,ts=new k,es=new k,Zc=new k,Jo=new k,Ko=new k,$o=new k,jo=new he,Qo=new he,ta=new he;class mn{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),Un.subVectors(i,e),Zo.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Un),l=pn.dot(Zo),h=Un.dot(Un),u=Un.dot(Zo),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(h*l-a*u)*p,M=(o*u-a*l)*p;return r.set(1-m-M,M,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return jo.setScalar(0),Qo.setScalar(0),ta.setScalar(0),jo.fromBufferAttribute(t,e),Qo.fromBufferAttribute(t,i),ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(jo,r.x),o.addScaledVector(Qo,r.y),o.addScaledVector(ta,r.z),o}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),Un.subVectors(t,e),pn.cross(Un).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,i),es.subVectors(r,i),Jo.subVectors(t,i);const l=ts.dot(Jo),h=es.dot(Jo);if(l<=0&&h<=0)return e.copy(i);Ko.subVectors(t,s);const u=ts.dot(Ko),f=es.dot(Ko);if(u>=0&&f<=u)return e.copy(s);const p=l*f-u*h;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ts,o);$o.subVectors(t,r);const m=ts.dot($o),M=es.dot($o);if(M>=0&&m<=M)return e.copy(r);const _=m*h-l*M;if(_<=0&&h>=0&&M<=0)return a=h/(h-M),e.copy(i).addScaledVector(es,a);const g=u*M-m*f;if(g<=0&&f-u>=0&&m-M>=0)return Zc.subVectors(r,s),a=(f-u)/(f-u+(m-M)),e.copy(s).addScaledVector(Zc,a);const d=1/(g+_+p);return o=_*d,a=p*d,e.copy(i).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function ea(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=ql(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ea(o,r,t+1/3),this.g=ea(o,r,t),this.b=ea(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const i=Xu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ee.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Fe(Ve.r*255,0,255))*65536+Math.round(Fe(Ve.g*255,0,255))*256+Math.round(Fe(Ve.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ve.copy(this),e);const i=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,h;const u=(a+o)/2;if(a===o)l=0,h=0;else{const f=o-a;switch(h=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=qe){ee.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,i=Ve.g,s=Ve.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Ur);const i=sr(jn.h,Ur.h,e),s=sr(jn.s,Ur.s,e),r=sr(jn.l,Ur.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Vt;Vt.NAMES=Xu;let up=0;class Hi extends Ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Oi(),this.name="",this.blending=ze,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ze&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ie extends Hi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new k,Nr=new Et;class Ce{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}}class Yu extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class qu extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class jt extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}}let fp=0;const on=new le,na=new Kt,ns=new k,tn=new Bi,Gs=new Bi,Ue=new k;class ye extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hu(t)?qu:Yu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(tn.min,Gs.min),tn.expandByPoint(Ue),Ue.addVectors(tn.max,Gs.max),tn.expandByPoint(Ue)):(tn.expandByPoint(Gs.min),tn.expandByPoint(Gs.max))}tn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Ue.fromBufferAttribute(a,h),l&&(ns.fromBufferAttribute(t,h),Ue.add(ns)),s=Math.max(s,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<i.count;T++)a[T]=new k,l[T]=new k;const h=new k,u=new k,f=new k,p=new Et,m=new Et,M=new Et,_=new k,g=new k;function d(T,v,b){h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,b),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,v),M.fromBufferAttribute(r,b),u.sub(h),f.sub(h),m.sub(p),M.sub(p);const A=1/(m.x*M.y-M.x*m.y);isFinite(A)&&(_.copy(u).multiplyScalar(M.y).addScaledVector(f,-m.y).multiplyScalar(A),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-M.x).multiplyScalar(A),a[T].add(_),a[v].add(_),a[b].add(_),l[T].add(g),l[v].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let T=0,v=y.length;T<v;++T){const b=y[T],A=b.start,I=b.count;for(let z=A,W=A+I;z<W;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const w=new k,x=new k,R=new k,S=new k;function E(T){R.fromBufferAttribute(s,T),S.copy(R);const v=a[T];w.copy(v),w.sub(R.multiplyScalar(R.dot(v))).normalize(),x.crossVectors(S,v);const A=x.dot(l[T])<0?-1:1;o.setXYZW(T,w.x,w.y,w.z,A)}for(let T=0,v=y.length;T<v;++T){const b=y[T],A=b.start,I=b.count;for(let z=A,W=A+I;z<W;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,h=new k,u=new k,f=new k;if(t)for(let p=0,m=t.count;p<m;p+=3){const M=t.getX(p+0),_=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,M),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,g),a.add(u),l.add(u),h.add(u),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const h=a.array,u=a.itemSize,f=a.normalized,p=new h.constructor(l.length*u);let m=0,M=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)p[M++]=h[m++]}return new Ce(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,i);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let u=0,f=h.length;u<f;u++){const p=h[u],m=t(p,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let f=0,p=h.length;f<p;f++){const m=h[f];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],f=r[h];for(let p=0,m=f.length;p<m;p++)u.push(f[p].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,u=o.length;h<u;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new le,mi=new Zl,Fr=new Gi,Kc=new k,zr=new k,Or=new k,Br=new k,ia=new k,Gr=new k,$c=new k,Hr=new k;class Ct extends Kt{constructor(t=new ye,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=a[l],f=r[l];u!==0&&(ia.fromBufferAttribute(f,t),o?Gr.addScaledVector(ia,u):Gr.addScaledVector(ia.sub(e),u))}e.add(Gr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(Fr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Fr,Kc)===null||mi.origin.distanceToSquared(Kc)>(t.far-t.near)**2))&&(Jc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(Jc),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,_=p.length;M<_;M++){const g=p[M],d=o[g.materialIndex],y=Math.max(g.start,m.start),w=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let x=y,R=w;x<R;x+=3){const S=a.getX(x),E=a.getX(x+1),T=a.getX(x+2);s=Vr(this,d,t,i,h,u,f,S,E,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const M=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=M,d=_;g<d;g+=3){const y=a.getX(g),w=a.getX(g+1),x=a.getX(g+2);s=Vr(this,o,t,i,h,u,f,y,w,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,_=p.length;M<_;M++){const g=p[M],d=o[g.materialIndex],y=Math.max(g.start,m.start),w=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let x=y,R=w;x<R;x+=3){const S=x,E=x+1,T=x+2;s=Vr(this,d,t,i,h,u,f,S,E,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const M=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=M,d=_;g<d;g+=3){const y=g,w=g+1,x=g+2;s=Vr(this,o,t,i,h,u,f,y,w,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function dp(n,t,e,i,s,r,o,a){let l;if(t.side===Re?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===hi,a),l===null)return null;Hr.copy(a),Hr.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Hr);return h<e.near||h>e.far?null:{distance:h,point:Hr.clone(),object:n}}function Vr(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,zr),n.getVertexPosition(l,Or),n.getVertexPosition(h,Br);const u=dp(n,t,e,i,zr,Or,Br,$c);if(u){const f=new k;mn.getBarycoord($c,zr,Or,Br,f),s&&(u.uv=mn.getInterpolatedAttribute(s,a,l,h,f,new Et)),r&&(u.uv1=mn.getInterpolatedAttribute(r,a,l,h,f,new Et)),o&&(u.normal=mn.getInterpolatedAttribute(o,a,l,h,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c:h,normal:new k,materialIndex:0};mn.getNormal(zr,Or,Br,p.normal),u.face=p,u.barycoord=f}return u}class be extends ye{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],u=[],f=[];let p=0,m=0;M("z","y","x",-1,-1,i,e,t,o,r,0),M("z","y","x",1,-1,i,e,-t,o,r,1),M("x","z","y",1,1,t,i,e,s,o,2),M("x","z","y",1,-1,t,i,-e,s,o,3),M("x","y","z",1,-1,t,e,i,s,r,4),M("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function M(_,g,d,y,w,x,R,S,E,T,v){const b=x/E,A=R/T,I=x/2,z=R/2,W=S/2,Y=E+1,Z=T+1;let et=0,X=0;const nt=new k;for(let pt=0;pt<Z;pt++){const _t=pt*A-z;for(let ht=0;ht<Y;ht++){const K=ht*b-I;nt[_]=K*y,nt[g]=_t*w,nt[d]=W,h.push(nt.x,nt.y,nt.z),nt[_]=0,nt[g]=0,nt[d]=S>0?1:-1,u.push(nt.x,nt.y,nt.z),f.push(ht/E),f.push(1-pt/T),et+=1}}for(let pt=0;pt<T;pt++)for(let _t=0;_t<E;_t++){const ht=p+_t+Y*pt,K=p+_t+Y*(pt+1),C=p+(_t+1)+Y*(pt+1),L=p+(_t+1)+Y*pt;l.push(ht,K,L),l.push(K,C,L),X+=6}a.addGroup(m,X,v),m+=X,p+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ye(n){const t={};for(let e=0;e<n.length;e++){const i=As(n[e]);for(const s in i)t[s]=i[s]}return t}function pp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const mp={clone:As,merge:Ye};var gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Hi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ju extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new k,jc=new Et,Qc=new Et;class en extends Ju{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,jc,Qc),e.subVectors(Qc,jc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class _p extends Kt{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new en(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new en(is,ss,t,e);o.layers=this.layers,this.add(o);const a=new en(is,ss,t,e);a.layers=this.layers,this.add(a);const l=new en(is,ss,t,e);l.layers=this.layers,this.add(l);const h=new en(is,ss,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,p,m),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Ku extends We{constructor(t,e,i,s,r,o,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,i,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xp extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ku(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new be(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:ai});r.uniforms.tEquirect.value=e;const o=new Ct(s,r),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=bn),new _p(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const sa=new k,vp=new k,yp=new Zt;class yi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=sa.subVectors(i,e).cross(vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(sa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yp.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Gi,kr=new k;class Jl{constructor(t=new yi,e=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=On){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],f=s[6],p=s[7],m=s[8],M=s[9],_=s[10],g=s[11],d=s[12],y=s[13],w=s[14],x=s[15];if(i[0].setComponents(l-r,p-h,g-m,x-d).normalize(),i[1].setComponents(l+r,p+h,g+m,x+d).normalize(),i[2].setComponents(l+o,p+u,g+M,x+y).normalize(),i[3].setComponents(l-o,p-u,g-M,x-y).normalize(),i[4].setComponents(l-a,p-f,g-_,x-w).normalize(),e===On)i[5].setComponents(l+a,p+f,g+_,x+w).normalize();else if(e===Mo)i[5].setComponents(a,f,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(kr.x=s.normal.x>0?t.max.x:t.min.x,kr.y=s.normal.y>0?t.max.y:t.min.y,kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $u(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Sp(n){const t=new WeakMap;function e(a,l){const h=a.array,u=a.usage,f=h.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,h,u),a.onUploadCallback();let m;if(h instanceof Float32Array)m=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=n.SHORT;else if(h instanceof Uint32Array)m=n.UNSIGNED_INT;else if(h instanceof Int32Array)m=n.INT;else if(h instanceof Int8Array)m=n.BYTE;else if(h instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,h){const u=l.array,f=l.updateRanges;if(n.bindBuffer(h,a),f.length===0)n.bufferSubData(h,0,u);else{f.sort((m,M)=>m.start-M.start);let p=0;for(let m=1;m<f.length;m++){const M=f[p],_=f[m];_.start<=M.start+M.count+1?M.count=Math.max(M.count,_.start+_.count-M.start):(++p,f[p]=_)}f.length=p+1;for(let m=0,M=f.length;m<M;m++){const _=f[m];n.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}class Ni extends ye{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,u=l+1,f=t/a,p=e/l,m=[],M=[],_=[],g=[];for(let d=0;d<u;d++){const y=d*p-o;for(let w=0;w<h;w++){const x=w*f-r;M.push(x,-y,0),_.push(0,0,1),g.push(w/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const w=y+h*d,x=y+h*(d+1),R=y+1+h*(d+1),S=y+1+h*d;m.push(w,x,S),m.push(x,R,S)}this.setIndex(m),this.setAttribute("position",new jt(M,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
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
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h0=`#ifdef USE_GRADIENTMAP
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
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
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
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
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
#endif`,y0=`struct PhysicalMaterial {
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
}`,S0=`
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,j0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Pm=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,Gm=`#define MATCAP
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
}`,Hm=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,Ym=`#define STANDARD
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
}`,qm=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,Jm=`#define TOON
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
}`,Km=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,tg=`uniform float rotation;
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
}`,eg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:bp,alphahash_pars_fragment:wp,alphamap_fragment:Ep,alphamap_pars_fragment:Ap,alphatest_fragment:Tp,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Up,bsdfs:Np,iridescence_fragment:Fp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Hp,color_fragment:Vp,color_pars_fragment:kp,color_pars_vertex:Wp,color_vertex:Xp,common:Yp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Kp,emissivemap_fragment:$p,emissivemap_pars_fragment:jp,colorspace_fragment:Qp,colorspace_pars_fragment:t0,envmap_fragment:e0,envmap_common_pars_fragment:n0,envmap_pars_fragment:i0,envmap_pars_vertex:s0,envmap_physical_pars_fragment:m0,envmap_vertex:r0,fog_vertex:o0,fog_pars_vertex:a0,fog_fragment:l0,fog_pars_fragment:c0,gradientmap_pars_fragment:h0,lightmap_pars_fragment:u0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:g0,lights_toon_pars_fragment:M0,lights_phong_fragment:_0,lights_phong_pars_fragment:x0,lights_physical_fragment:v0,lights_physical_pars_fragment:y0,lights_fragment_begin:S0,lights_fragment_maps:b0,lights_fragment_end:w0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:A0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:R0,map_fragment:C0,map_pars_fragment:P0,map_particle_fragment:L0,map_particle_pars_fragment:I0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:U0,morphinstance_vertex:N0,morphcolor_vertex:F0,morphnormal_vertex:z0,morphtarget_pars_vertex:O0,morphtarget_vertex:B0,normal_fragment_begin:G0,normal_fragment_maps:H0,normal_pars_fragment:V0,normal_pars_vertex:k0,normal_vertex:W0,normalmap_pars_fragment:X0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:J0,opaque_fragment:K0,packing:$0,premultiplied_alpha_fragment:j0,project_vertex:Q0,dithering_fragment:tm,dithering_pars_fragment:em,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:rm,shadowmap_vertex:om,shadowmask_pars_fragment:am,skinbase_vertex:lm,skinning_pars_vertex:cm,skinning_vertex:hm,skinnormal_vertex:um,specularmap_fragment:fm,specularmap_pars_fragment:dm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:Mm,uv_pars_fragment:_m,uv_pars_vertex:xm,uv_vertex:vm,worldpos_vertex:ym,background_vert:Sm,background_frag:bm,backgroundCube_vert:wm,backgroundCube_frag:Em,cube_vert:Am,cube_frag:Tm,depth_vert:Rm,depth_frag:Cm,distanceRGBA_vert:Pm,distanceRGBA_frag:Lm,equirect_vert:Im,equirect_frag:Dm,linedashed_vert:Um,linedashed_frag:Nm,meshbasic_vert:Fm,meshbasic_frag:zm,meshlambert_vert:Om,meshlambert_frag:Bm,meshmatcap_vert:Gm,meshmatcap_frag:Hm,meshnormal_vert:Vm,meshnormal_frag:km,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:Ym,meshphysical_frag:qm,meshtoon_vert:Zm,meshtoon_frag:Jm,points_vert:Km,points_frag:$m,shadow_vert:jm,shadow_frag:Qm,sprite_vert:tg,sprite_frag:eg},Pt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},yn={basic:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ye([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ye([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ye([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ye([Pt.points,Pt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ye([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ye([Pt.common,Pt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ye([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ye([Pt.sprite,Pt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ye([Pt.common,Pt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ye([Pt.lights,Pt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};yn.physical={uniforms:Ye([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Wr={r:0,b:0,g:0},Mi=new En,ng=new le;function ig(n,t,e,i,s,r,o){const a=new Vt(0);let l=r===!0?0:1,h,u,f=null,p=0,m=null;function M(y){let w=y.isScene===!0?y.background:null;return w&&w.isTexture&&(w=(y.backgroundBlurriness>0?e:t).get(w)),w}function _(y){let w=!1;const x=M(y);x===null?d(a,l):x&&x.isColor&&(d(x,1),w=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,w){const x=M(w);x&&(x.isCubeTexture||x.mapping===Co)?(u===void 0&&(u=new Ct(new be(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:As(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Mi.copy(w.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ng.makeRotationFromEuler(Mi)),u.material.toneMapped=ee.getTransfer(x.colorSpace)!==ce,(f!==x||p!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,p=x.version,m=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Ct(new Ni(2,2),new Vn({name:"BackgroundMaterial",uniforms:As(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=ee.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=x,p=x.version,m=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function d(y,w){y.getRGB(Wr,Zu(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:_,addToRenderList:g}}function sg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,o=!1;function a(b,A,I,z,W){let Y=!1;const Z=f(z,I,A);r!==Z&&(r=Z,h(r.object)),Y=m(b,z,I,W),Y&&M(b,z,I,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(b,A,I,z),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function h(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,A,I){const z=I.wireframe===!0;let W=i[b.id];W===void 0&&(W={},i[b.id]=W);let Y=W[A.id];Y===void 0&&(Y={},W[A.id]=Y);let Z=Y[z];return Z===void 0&&(Z=p(l()),Y[z]=Z),Z}function p(b){const A=[],I=[],z=[];for(let W=0;W<e;W++)A[W]=0,I[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:z,object:b,attributes:{},index:null}}function m(b,A,I,z){const W=r.attributes,Y=A.attributes;let Z=0;const et=I.getAttributes();for(const X in et)if(et[X].location>=0){const pt=W[X];let _t=Y[X];if(_t===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(_t=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(_t=b.instanceColor)),pt===void 0||pt.attribute!==_t||_t&&pt.data!==_t.data)return!0;Z++}return r.attributesNum!==Z||r.index!==z}function M(b,A,I,z){const W={},Y=A.attributes;let Z=0;const et=I.getAttributes();for(const X in et)if(et[X].location>=0){let pt=Y[X];pt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor));const _t={};_t.attribute=pt,pt&&pt.data&&(_t.data=pt.data),W[X]=_t,Z++}r.attributes=W,r.attributesNum=Z,r.index=z}function _(){const b=r.newAttributes;for(let A=0,I=b.length;A<I;A++)b[A]=0}function g(b){d(b,0)}function d(b,A){const I=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;I[b]=1,z[b]===0&&(n.enableVertexAttribArray(b),z[b]=1),W[b]!==A&&(n.vertexAttribDivisor(b,A),W[b]=A)}function y(){const b=r.newAttributes,A=r.enabledAttributes;for(let I=0,z=A.length;I<z;I++)A[I]!==b[I]&&(n.disableVertexAttribArray(I),A[I]=0)}function w(b,A,I,z,W,Y,Z){Z===!0?n.vertexAttribIPointer(b,A,I,W,Y):n.vertexAttribPointer(b,A,I,z,W,Y)}function x(b,A,I,z){_();const W=z.attributes,Y=I.getAttributes(),Z=A.defaultAttributeValues;for(const et in Y){const X=Y[et];if(X.location>=0){let nt=W[et];if(nt===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){const pt=nt.normalized,_t=nt.itemSize,ht=t.get(nt);if(ht===void 0)continue;const K=ht.buffer,C=ht.type,L=ht.bytesPerElement,O=C===n.INT||C===n.UNSIGNED_INT||nt.gpuType===Gl;if(nt.isInterleavedBufferAttribute){const G=nt.data,U=G.stride,B=nt.offset;if(G.isInstancedInterleavedBuffer){for(let H=0;H<X.locationSize;H++)d(X.location+H,G.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let H=0;H<X.locationSize;H++)g(X.location+H);n.bindBuffer(n.ARRAY_BUFFER,K);for(let H=0;H<X.locationSize;H++)w(X.location+H,_t/X.locationSize,C,pt,U*L,(B+_t/X.locationSize*H)*L,O)}else{if(nt.isInstancedBufferAttribute){for(let G=0;G<X.locationSize;G++)d(X.location+G,nt.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let G=0;G<X.locationSize;G++)g(X.location+G);n.bindBuffer(n.ARRAY_BUFFER,K);for(let G=0;G<X.locationSize;G++)w(X.location+G,_t/X.locationSize,C,pt,_t*L,_t/X.locationSize*G*L,O)}}else if(Z!==void 0){const pt=Z[et];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(X.location,pt);break;case 3:n.vertexAttrib3fv(X.location,pt);break;case 4:n.vertexAttrib4fv(X.location,pt);break;default:n.vertexAttrib1fv(X.location,pt)}}}}y()}function R(){T();for(const b in i){const A=i[b];for(const I in A){const z=A[I];for(const W in z)u(z[W].object),delete z[W];delete A[I]}delete i[b]}}function S(b){if(i[b.id]===void 0)return;const A=i[b.id];for(const I in A){const z=A[I];for(const W in z)u(z[W].object),delete z[W];delete A[I]}delete i[b.id]}function E(b){for(const A in i){const I=i[A];if(I[b.id]===void 0)continue;const z=I[b.id];for(const W in z)u(z[W].object),delete z[W];delete I[b.id]}}function T(){v(),o=!0,r!==s&&(r=s,h(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function rg(n,t,e){let i;function s(h){i=h}function r(h,u){n.drawArrays(i,h,u),e.update(u,i,1)}function o(h,u,f){f!==0&&(n.drawArraysInstanced(i,h,u,f),e.update(u,i,f))}function a(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,f);let m=0;for(let M=0;M<f;M++)m+=u[M];e.update(m,i,1)}function l(h,u,f,p){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<h.length;M++)o(h[M],u[M],p[M]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,u,0,p,0,f);let M=0;for(let _=0;_<f;_++)M+=u[_]*p[_];e.update(M,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function og(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==gn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Hn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wn&&!T)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=M>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:M,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:R,maxSamples:S}}function ag(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new yi,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,m){const M=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!s||M===null||M.length===0||r&&!g)r?u(null):h();else{const y=r?0:i,w=y*4;let x=d.clippingState||null;l.value=x,x=u(M,p,w,m);for(let R=0;R!==w;++R)x[R]=e[R];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,p,m,M){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,M!==!0||g===null){const d=m+_*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<d)&&(g=new Float32Array(d));for(let w=0,x=m;w!==_;++w,x+=4)o.copy(f[w]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function lg(n){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=Ss:a===Xa&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new xp(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Lo extends Ju{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ms=4,th=[.125,.215,.35,.446,.526,.582],wi=20,ra=new Lo,eh=new Vt;let oa=null,aa=0,la=0,ca=!1;const Si=(1+Math.sqrt(5))/2,rs=1/Si,nh=[new k(-Si,rs,0),new k(Si,rs,0),new k(-rs,0,Si),new k(rs,0,Si),new k(0,Si,-rs),new k(0,Si,rs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class ih{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:vr,format:gn,colorSpace:Cs,depthBuffer:!1},s=sh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cg(r)),this._blurMaterial=hg(r,t,e)}return s}_compileMaterial(t){const e=new Ct(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,i,s){const a=new en(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(eh),u.toneMapping=li,u.autoClear=!1;const m=new ie({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),M=new Ct(new be,m);let _=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,_=!0):(m.color.copy(eh),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(h[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,h[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,h[d]));const w=this._cubeSize;Xr(s,y*w,d>2?w:0,w,w),u.setRenderTarget(s),_&&u.render(M,a),u.render(t,a)}M.geometry.dispose(),M.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ss||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Xr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ra)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nh[(s-r-1)%nh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ct(this._lodPlanes[s],h),p=h.uniforms,m=this._sizeLods[i]-1,M=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*wi-1),_=r/M,g=isFinite(r)?1+Math.floor(u*_):wi;g>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wi}`);const d=[];let y=0;for(let E=0;E<wi;++E){const T=E/_,v=Math.exp(-T*T/2);d.push(v),E===0?y+=v:E<g&&(y+=2*v)}for(let E=0;E<d.length;E++)d[E]=d[E]/y;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:w}=this;p.dTheta.value=M,p.mipInt.value=w-i;const x=this._sizeLods[s],R=3*x*(s>w-ms?s-w+ms:0),S=4*(this._cubeSize-x);Xr(e,R,S,3*x,2*x),l.setRenderTarget(e),l.render(f,ra)}}function cg(n){const t=[],e=[],i=[];let s=n;const r=n-ms+1+th.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ms?l=th[o-n+ms-1]:o===0&&(l=0),i.push(l);const h=1/(a-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,M=6,_=3,g=2,d=1,y=new Float32Array(_*M*m),w=new Float32Array(g*M*m),x=new Float32Array(d*M*m);for(let S=0;S<m;S++){const E=S%3*2/3-1,T=S>2?0:-1,v=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];y.set(v,_*M*S),w.set(p,g*M*S);const b=[S,S,S,S,S,S];x.set(b,d*M*S)}const R=new ye;R.setAttribute("position",new Ce(y,_)),R.setAttribute("uv",new Ce(w,g)),R.setAttribute("faceIndex",new Ce(x,d)),t.push(R),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function sh(n,t,e){const i=new Di(n,t,e);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function hg(n,t,e){const i=new Float32Array(wi),s=new k(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function rh(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function oh(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function ug(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===Wa||l===Xa,u=l===Ss||l===bs;if(h||u){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new ih(n)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return h&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new ih(n)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function fg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Qs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dg(n,t,e,i){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const M in p.attributes)t.remove(p.attributes[M]);for(const M in p.morphAttributes){const _=p.morphAttributes[M];for(let g=0,d=_.length;g<d;g++)t.remove(_[g])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const M in p)t.update(p[M],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const M in m){const _=m[M];for(let g=0,d=_.length;g<d;g++)t.update(_[g],n.ARRAY_BUFFER)}}function h(f){const p=[],m=f.index,M=f.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let w=0,x=y.length;w<x;w+=3){const R=y[w+0],S=y[w+1],E=y[w+2];p.push(R,S,S,E,E,R)}}else if(M!==void 0){const y=M.array;_=M.version;for(let w=0,x=y.length/3-1;w<x;w+=3){const R=w+0,S=w+1,E=w+2;p.push(R,S,S,E,E,R)}}else return;const g=new(Hu(p)?qu:Yu)(p,1);g.version=_;const d=r.get(f);d&&t.remove(d),r.set(f,g)}function u(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function pg(n,t,e){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){n.drawElements(i,m,r,p*o),e.update(m,i,1)}function h(p,m,M){M!==0&&(n.drawElementsInstanced(i,m,r,p*o,M),e.update(m,i,M))}function u(p,m,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,M);let g=0;for(let d=0;d<M;d++)g+=m[d];e.update(g,i,1)}function f(p,m,M,_){if(M===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)h(p[d]/o,m[d],_[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,_,0,M);let d=0;for(let y=0;y<M;y++)d+=m[y]*_[y];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function mg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function gg(n,t,e){const i=new WeakMap,s=new he;function r(o,a,l){const h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let b=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var m=b;p!==void 0&&p.texture.dispose();const M=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;M===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let R=a.attributes.position.count*x,S=1;R>t.maxTextureSize&&(S=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*S*4*f),T=new ku(E,R,S,f);T.type=wn,T.needsUpdate=!0;const v=x*4;for(let A=0;A<f;A++){const I=d[A],z=y[A],W=w[A],Y=R*S*4*A;for(let Z=0;Z<I.count;Z++){const et=Z*v;M===!0&&(s.fromBufferAttribute(I,Z),E[Y+et+0]=s.x,E[Y+et+1]=s.y,E[Y+et+2]=s.z,E[Y+et+3]=0),_===!0&&(s.fromBufferAttribute(z,Z),E[Y+et+4]=s.x,E[Y+et+5]=s.y,E[Y+et+6]=s.z,E[Y+et+7]=0),g===!0&&(s.fromBufferAttribute(W,Z),E[Y+et+8]=s.x,E[Y+et+9]=s.y,E[Y+et+10]=s.z,E[Y+et+11]=W.itemSize===4?s.w:1)}}p={count:f,texture:T,size:new Et(R,S)},i.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let M=0;for(let g=0;g<h.length;g++)M+=h[g];const _=a.morphTargetsRelative?1:1-M;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Mg(n,t,e,i){let s=new WeakMap;function r(l){const h=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class ju extends We{constructor(t,e,i,s,r,o,a,l,h,u=_s){if(u!==_s&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_s&&(i=Ii),i===void 0&&u===Es&&(i=ws),super(null,s,r,o,a,l,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qu=new We,ah=new ju(1,1),tf=new ku,ef=new ip,nf=new Ku,lh=[],ch=[],hh=new Float32Array(16),uh=new Float32Array(9),fh=new Float32Array(4);function Ls(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=lh[s];if(r===void 0&&(r=new Float32Array(s),lh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ie(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Io(n,t){let e=ch[t];e===void 0&&(e=new Int32Array(t),ch[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _g(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function yg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function Sg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;fh.set(i),n.uniformMatrix2fv(this.addr,!1,fh),De(e,i)}}function bg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;uh.set(i),n.uniformMatrix3fv(this.addr,!1,uh),De(e,i)}}function wg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;hh.set(i),n.uniformMatrix4fv(this.addr,!1,hh),De(e,i)}}function Eg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function Tg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function Rg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function Cg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function Lg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function Ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function Dg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ah.compareFunction=Gu,r=ah):r=Qu,e.setTexture2D(t||r,s)}function Ug(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ef,s)}function Ng(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nf,s)}function Fg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||tf,s)}function zg(n){switch(n){case 5126:return _g;case 35664:return xg;case 35665:return vg;case 35666:return yg;case 35674:return Sg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Ag;case 35668:case 35672:return Tg;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}function Og(n,t){n.uniform1fv(this.addr,t)}function Bg(n,t){const e=Ls(t,this.size,2);n.uniform2fv(this.addr,e)}function Gg(n,t){const e=Ls(t,this.size,3);n.uniform3fv(this.addr,e)}function Hg(n,t){const e=Ls(t,this.size,4);n.uniform4fv(this.addr,e)}function Vg(n,t){const e=Ls(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function kg(n,t){const e=Ls(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Wg(n,t){const e=Ls(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Xg(n,t){n.uniform1iv(this.addr,t)}function Yg(n,t){n.uniform2iv(this.addr,t)}function qg(n,t){n.uniform3iv(this.addr,t)}function Zg(n,t){n.uniform4iv(this.addr,t)}function Jg(n,t){n.uniform1uiv(this.addr,t)}function Kg(n,t){n.uniform2uiv(this.addr,t)}function $g(n,t){n.uniform3uiv(this.addr,t)}function jg(n,t){n.uniform4uiv(this.addr,t)}function Qg(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Qu,r[o])}function tM(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ef,r[o])}function eM(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nf,r[o])}function nM(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tf,r[o])}function iM(n){switch(n){case 5126:return Og;case 35664:return Bg;case 35665:return Gg;case 35666:return Hg;case 35674:return Vg;case 35675:return kg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return Yg;case 35668:case 35672:return qg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Kg;case 36295:return $g;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return nM}}class sM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}}class rM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iM(e.type)}}class oM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function dh(n,t){n.seq.push(t),n.map[t.id]=t}function aM(n,t,e){const i=n.name,s=i.length;for(ha.lastIndex=0;;){const r=ha.exec(i),o=ha.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){dh(e,h===void 0?new sM(a,n,t):new rM(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new oM(a),dh(e,f)),e=f}}}class go{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);aM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ph(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const lM=37297;let cM=0;function hM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const mh=new Zt;function uM(n){ee._getMatrix(mh,ee.workingColorSpace,n);const t=`mat3( ${mh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case Po:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function gh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hM(n.getShaderSource(t),o)}else return s}function fM(n,t){const e=uM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dM(n,t){let e;switch(t){case pd:e="Linear";break;case md:e="Reinhard";break;case gd:e="Cineon";break;case Md:e="ACESFilmic";break;case xd:e="AgX";break;case vd:e="Neutral";break;case _d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new k;function pM(){ee.getLuminanceCoefficients(Yr);const n=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function gM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function MM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function tr(n){return n!==""}function Mh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(n){return n.replace(_M,vM)}const xM=new Map;function vM(n,t){let e=Jt[t];if(e===void 0){const i=xM.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(n){return n.replace(yM,SM)}function SM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function bM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===qf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function wM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function EM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function AM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ru:t="ENVMAP_BLENDING_MULTIPLY";break;case fd:t="ENVMAP_BLENDING_MIX";break;case dd:t="ENVMAP_BLENDING_ADD";break}return t}function TM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function RM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bM(e),h=wM(e),u=EM(e),f=AM(e),p=TM(e),m=mM(e),M=gM(r),_=s.createProgram();let g,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(tr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(tr).join(`
`),d.length>0&&(d+=`
`)):(g=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),d=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Jt.tonemapping_pars_fragment:"",e.toneMapping!==li?dM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,fM("linearToOutputTexel",e.outputColorSpace),pM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),o=vl(o),o=Mh(o,e),o=_h(o,e),a=vl(a),a=Mh(a,e),a=_h(a,e),o=xh(o),a=xh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=y+g+o,x=y+d+a,R=ph(s,s.VERTEX_SHADER,w),S=ph(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(A){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(R).trim(),W=s.getShaderInfoLog(S).trim();let Y=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,S);else{const et=gh(s,R,"vertex"),X=gh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+et+`
`+X)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||W==="")&&(Z=!1);Z&&(A.diagnostics={runnable:Y,programLog:I,vertexShader:{log:z,prefix:g},fragmentShader:{log:W,prefix:d}})}s.deleteShader(R),s.deleteShader(S),T=new go(s,_),v=MM(s,_)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,lM)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=S,this}let CM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new LM(t),e.set(t,i)),i}}class LM{constructor(t){this.id=CM++,this.code=t,this.usedTimes=0}}function IM(n,t,e,i,s,r,o){const a=new Wu,l=new PM,h=new Set,u=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return h.add(v),v===0?"uv":`uv${v}`}function g(v,b,A,I,z){const W=I.fog,Y=z.geometry,Z=v.isMeshStandardMaterial?I.environment:null,et=(v.isMeshStandardMaterial?e:t).get(v.envMap||Z),X=et&&et.mapping===Co?et.image.height:null,nt=M[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_t=pt!==void 0?pt.length:0;let ht=0;Y.morphAttributes.position!==void 0&&(ht=1),Y.morphAttributes.normal!==void 0&&(ht=2),Y.morphAttributes.color!==void 0&&(ht=3);let K,C,L,O;if(nt){const ae=yn[nt];K=ae.vertexShader,C=ae.fragmentShader}else K=v.vertexShader,C=v.fragmentShader,l.update(v),L=l.getVertexShaderID(v),O=l.getFragmentShaderID(v);const G=n.getRenderTarget(),U=n.state.buffers.depth.getReversed(),B=z.isInstancedMesh===!0,H=z.isBatchedMesh===!0,st=!!v.map,V=!!v.matcap,J=!!et,N=!!v.aoMap,vt=!!v.lightMap,ut=!!v.bumpMap,yt=!!v.normalMap,xt=!!v.displacementMap,Ft=!!v.emissiveMap,St=!!v.metalnessMap,F=!!v.roughnessMap,P=v.anisotropy>0,tt=v.clearcoat>0,at=v.dispersion>0,Mt=v.iridescence>0,ft=v.sheen>0,It=v.transmission>0,At=P&&!!v.anisotropyMap,Nt=tt&&!!v.clearcoatMap,it=tt&&!!v.clearcoatNormalMap,$=tt&&!!v.clearcoatRoughnessMap,ct=Mt&&!!v.iridescenceMap,dt=Mt&&!!v.iridescenceThicknessMap,bt=ft&&!!v.sheenColorMap,mt=ft&&!!v.sheenRoughnessMap,Lt=!!v.specularMap,zt=!!v.specularColorMap,Wt=!!v.specularIntensityMap,q=It&&!!v.transmissionMap,Tt=It&&!!v.thicknessMap,lt=!!v.gradientMap,gt=!!v.alphaMap,Rt=v.alphaTest>0,Dt=!!v.alphaHash,Yt=!!v.extensions;let Se=li;v.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Se=n.toneMapping);const Ge={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:C,defines:v.defines,customVertexShaderID:L,customFragmentShaderID:O,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:H,batchingColor:H&&z._colorsTexture!==null,instancing:B,instancingColor:B&&z.instanceColor!==null,instancingMorph:B&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Cs,alphaToCoverage:!!v.alphaToCoverage,map:st,matcap:V,envMap:J,envMapMode:J&&et.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:vt,bumpMap:ut,normalMap:yt,displacementMap:p&&xt,emissiveMap:Ft,normalMapObjectSpace:yt&&v.normalMapType===wd,normalMapTangentSpace:yt&&v.normalMapType===Bu,metalnessMap:St,roughnessMap:F,anisotropy:P,anisotropyMap:At,clearcoat:tt,clearcoatMap:Nt,clearcoatNormalMap:it,clearcoatRoughnessMap:$,dispersion:at,iridescence:Mt,iridescenceMap:ct,iridescenceThicknessMap:dt,sheen:ft,sheenColorMap:bt,sheenRoughnessMap:mt,specularMap:Lt,specularColorMap:zt,specularIntensityMap:Wt,transmission:It,transmissionMap:q,thicknessMap:Tt,gradientMap:lt,opaque:v.transparent===!1&&v.blending===ze&&v.alphaToCoverage===!1,alphaMap:gt,alphaTest:Rt,alphaHash:Dt,combine:v.combine,mapUv:st&&_(v.map.channel),aoMapUv:N&&_(v.aoMap.channel),lightMapUv:vt&&_(v.lightMap.channel),bumpMapUv:ut&&_(v.bumpMap.channel),normalMapUv:yt&&_(v.normalMap.channel),displacementMapUv:xt&&_(v.displacementMap.channel),emissiveMapUv:Ft&&_(v.emissiveMap.channel),metalnessMapUv:St&&_(v.metalnessMap.channel),roughnessMapUv:F&&_(v.roughnessMap.channel),anisotropyMapUv:At&&_(v.anisotropyMap.channel),clearcoatMapUv:Nt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(v.sheenRoughnessMap.channel),specularMapUv:Lt&&_(v.specularMap.channel),specularColorMapUv:zt&&_(v.specularColorMap.channel),specularIntensityMapUv:Wt&&_(v.specularIntensityMap.channel),transmissionMapUv:q&&_(v.transmissionMap.channel),thicknessMapUv:Tt&&_(v.thicknessMap.channel),alphaMapUv:gt&&_(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(yt||P),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(st||gt),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:U,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:ht,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:st&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===ce,decodeVideoTextureEmissive:Ft&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===de,flipSided:v.side===Re,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Yt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&v.extensions.multiDraw===!0||H)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ge.vertexUv1s=h.has(1),Ge.vertexUv2s=h.has(2),Ge.vertexUv3s=h.has(3),h.clear(),Ge}function d(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)b.push(A),b.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(y(b,v),w(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function w(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const b=M[v.type];let A;if(b){const I=yn[b];A=mp.clone(I.uniforms)}else A=v.uniforms;return A}function R(v,b){let A;for(let I=0,z=u.length;I<z;I++){const W=u[I];if(W.cacheKey===b){A=W,++A.usedTimes;break}}return A===void 0&&(A=new RM(n,b,v,r),u.push(A)),A}function S(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),v.destroy()}}function E(v){l.remove(v)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:S,releaseShaderCache:E,programs:u,dispose:T}}function DM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function UM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function yh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Sh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,p,m,M,_,g){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:M,renderOrder:f.renderOrder,z:_,group:g},n[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=M,d.renderOrder=f.renderOrder,d.z=_,d.group=g),t++,d}function a(f,p,m,M,_,g){const d=o(f,p,m,M,_,g);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(f,p,m,M,_,g){const d=o(f,p,m,M,_,g);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function h(f,p){e.length>1&&e.sort(f||UM),i.length>1&&i.sort(p||yh),s.length>1&&s.sort(p||yh)}function u(){for(let f=t,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function NM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Sh,n.set(i,[o])):s>=r.length?(o=new Sh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function FM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Vt};break;case"SpotLight":e={position:new k,direction:new k,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function zM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let OM=0;function BM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function GM(n){const t=new FM,e=zM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new k);const s=new k,r=new le,o=new le;function a(h){let u=0,f=0,p=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let m=0,M=0,_=0,g=0,d=0,y=0,w=0,x=0,R=0,S=0,E=0;h.sort(BM);for(let v=0,b=h.length;v<b;v++){const A=h[v],I=A.color,z=A.intensity,W=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=I.r*z,f+=I.g*z,p+=I.b*z;else if(A.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(A.sh.coefficients[Z],z);E++}else if(A.isDirectionalLight){const Z=t.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const et=A.shadow,X=e.get(A);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=A.shadow.matrix,y++}i.directional[m]=Z,m++}else if(A.isSpotLight){const Z=t.get(A);Z.position.setFromMatrixPosition(A.matrixWorld),Z.color.copy(I).multiplyScalar(z),Z.distance=W,Z.coneCos=Math.cos(A.angle),Z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Z.decay=A.decay,i.spot[_]=Z;const et=A.shadow;if(A.map&&(i.spotLightMap[R]=A.map,R++,et.updateMatrices(A),A.castShadow&&S++),i.spotLightMatrix[_]=et.matrix,A.castShadow){const X=e.get(A);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=Y,x++}_++}else if(A.isRectAreaLight){const Z=t.get(A);Z.color.copy(I).multiplyScalar(z),Z.halfWidth.set(A.width*.5,0,0),Z.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=Z,g++}else if(A.isPointLight){const Z=t.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),Z.distance=A.distance,Z.decay=A.decay,A.castShadow){const et=A.shadow,X=e.get(A);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,X.shadowCameraNear=et.camera.near,X.shadowCameraFar=et.camera.far,i.pointShadow[M]=X,i.pointShadowMap[M]=Y,i.pointShadowMatrix[M]=A.shadow.matrix,w++}i.point[M]=Z,M++}else if(A.isHemisphereLight){const Z=t.get(A);Z.skyColor.copy(A.color).multiplyScalar(z),Z.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[d]=Z,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=p;const T=i.hash;(T.directionalLength!==m||T.pointLength!==M||T.spotLength!==_||T.rectAreaLength!==g||T.hemiLength!==d||T.numDirectionalShadows!==y||T.numPointShadows!==w||T.numSpotShadows!==x||T.numSpotMaps!==R||T.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=g,i.point.length=M,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=x+R-S,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=E,T.directionalLength=m,T.pointLength=M,T.spotLength=_,T.rectAreaLength=g,T.hemiLength=d,T.numDirectionalShadows=y,T.numPointShadows=w,T.numSpotShadows=x,T.numSpotMaps=R,T.numLightProbes=E,i.version=OM++)}function l(h,u){let f=0,p=0,m=0,M=0,_=0;const g=u.matrixWorldInverse;for(let d=0,y=h.length;d<y;d++){const w=h[d];if(w.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(w.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),m++}else if(w.isRectAreaLight){const x=i.rectArea[M];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),M++}else if(w.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(g),p++}else if(w.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function bh(n){const t=new GM(n),e=[],i=[];function s(u){h.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function HM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new bh(n),t.set(s,[a])):r>=o.length?(a=new bh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class VM extends Hi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kM extends Hi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XM=`uniform sampler2D shadow_pass;
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
}`;function YM(n,t,e){let i=new Jl;const s=new Et,r=new Et,o=new he,a=new VM({depthPacking:bd}),l=new kM,h={},u=e.maxTextureSize,f={[hi]:Re,[Re]:hi,[de]:de},p=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:WM,fragmentShader:XM}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const M=new ye;M.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ct(M,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let d=this.type;this.render=function(S,E,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const v=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ai),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=d!==zn&&this.type===zn,W=d===zn&&this.type!==zn;for(let Y=0,Z=S.length;Y<Z;Y++){const et=S[Y],X=et.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const nt=X.getFrameExtents();if(s.multiply(nt),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,X.mapSize.y=r.y)),X.map===null||z===!0||W===!0){const _t=this.type!==zn?{minFilter:nn,magFilter:nn}:{};X.map!==null&&X.map.dispose(),X.map=new Di(s.x,s.y,_t),X.map.texture.name=et.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const pt=X.getViewportCount();for(let _t=0;_t<pt;_t++){const ht=X.getViewport(_t);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),I.viewport(o),X.updateMatrices(et,_t),i=X.getFrustum(),x(E,T,X.camera,et,this.type)}X.isPointLightShadow!==!0&&this.type===zn&&y(X,T),X.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(v,b,A)};function y(S,E){const T=t.update(_);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Di(s.x,s.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,T,p,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,T,m,_,null)}function w(S,E,T,v){let b=null;const A=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)b=A;else if(b=T.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=b.uuid,z=E.uuid;let W=h[I];W===void 0&&(W={},h[I]=W);let Y=W[z];Y===void 0&&(Y=b.clone(),W[z]=Y,E.addEventListener("dispose",R)),b=Y}if(b.visible=E.visible,b.wireframe=E.wireframe,v===zn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:f[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=n.properties.get(b);I.light=T}return b}function x(S,E,T,v,b){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===zn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const z=t.update(S),W=S.material;if(Array.isArray(W)){const Y=z.groups;for(let Z=0,et=Y.length;Z<et;Z++){const X=Y[Z],nt=W[X.materialIndex];if(nt&&nt.visible){const pt=w(S,nt,v,b);S.onBeforeShadow(n,S,E,T,z,pt,X),n.renderBufferDirect(T,null,z,pt,S,X),S.onAfterShadow(n,S,E,T,z,pt,X)}}}else if(W.visible){const Y=w(S,W,v,b);S.onBeforeShadow(n,S,E,T,z,Y,null),n.renderBufferDirect(T,null,z,Y,S,null),S.onAfterShadow(n,S,E,T,z,Y,null)}}const I=S.children;for(let z=0,W=I.length;z<W;z++)x(I[z],E,T,v,b)}function R(S){S.target.removeEventListener("dispose",R);for(const T in h){const v=h[T],b=S.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const qM={[za]:Oa,[Ba]:Va,[Ga]:ka,[ys]:Ha,[Oa]:za,[Va]:Ba,[ka]:Ga,[Ha]:ys};function ZM(n,t){function e(){let q=!1;const Tt=new he;let lt=null;const gt=new he(0,0,0,0);return{setMask:function(Rt){lt!==Rt&&!q&&(n.colorMask(Rt,Rt,Rt,Rt),lt=Rt)},setLocked:function(Rt){q=Rt},setClear:function(Rt,Dt,Yt,Se,Ge){Ge===!0&&(Rt*=Se,Dt*=Se,Yt*=Se),Tt.set(Rt,Dt,Yt,Se),gt.equals(Tt)===!1&&(n.clearColor(Rt,Dt,Yt,Se),gt.copy(Tt))},reset:function(){q=!1,lt=null,gt.set(-1,0,0,0)}}}function i(){let q=!1,Tt=!1,lt=null,gt=null,Rt=null;return{setReversed:function(Dt){if(Tt!==Dt){const Yt=t.get("EXT_clip_control");Tt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const Se=Rt;Rt=null,this.setClear(Se)}Tt=Dt},getReversed:function(){return Tt},setTest:function(Dt){Dt?G(n.DEPTH_TEST):U(n.DEPTH_TEST)},setMask:function(Dt){lt!==Dt&&!q&&(n.depthMask(Dt),lt=Dt)},setFunc:function(Dt){if(Tt&&(Dt=qM[Dt]),gt!==Dt){switch(Dt){case za:n.depthFunc(n.NEVER);break;case Oa:n.depthFunc(n.ALWAYS);break;case Ba:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Va:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=Dt}},setLocked:function(Dt){q=Dt},setClear:function(Dt){Rt!==Dt&&(Tt&&(Dt=1-Dt),n.clearDepth(Dt),Rt=Dt)},reset:function(){q=!1,lt=null,gt=null,Rt=null,Tt=!1}}}function s(){let q=!1,Tt=null,lt=null,gt=null,Rt=null,Dt=null,Yt=null,Se=null,Ge=null;return{setTest:function(ae){q||(ae?G(n.STENCIL_TEST):U(n.STENCIL_TEST))},setMask:function(ae){Tt!==ae&&!q&&(n.stencilMask(ae),Tt=ae)},setFunc:function(ae,hn,Cn){(lt!==ae||gt!==hn||Rt!==Cn)&&(n.stencilFunc(ae,hn,Cn),lt=ae,gt=hn,Rt=Cn)},setOp:function(ae,hn,Cn){(Dt!==ae||Yt!==hn||Se!==Cn)&&(n.stencilOp(ae,hn,Cn),Dt=ae,Yt=hn,Se=Cn)},setLocked:function(ae){q=ae},setClear:function(ae){Ge!==ae&&(n.clearStencil(ae),Ge=ae)},reset:function(){q=!1,Tt=null,lt=null,gt=null,Rt=null,Dt=null,Yt=null,Se=null,Ge=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap;let u={},f={},p=new WeakMap,m=[],M=null,_=!1,g=null,d=null,y=null,w=null,x=null,R=null,S=null,E=new Vt(0,0,0),T=0,v=!1,b=null,A=null,I=null,z=null,W=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,et=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=et>=2);let nt=null,pt={};const _t=n.getParameter(n.SCISSOR_BOX),ht=n.getParameter(n.VIEWPORT),K=new he().fromArray(_t),C=new he().fromArray(ht);function L(q,Tt,lt,gt){const Rt=new Uint8Array(4),Dt=n.createTexture();n.bindTexture(q,Dt),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<lt;Yt++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(Tt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return Dt}const O={};O[n.TEXTURE_2D]=L(n.TEXTURE_2D,n.TEXTURE_2D,1),O[n.TEXTURE_CUBE_MAP]=L(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[n.TEXTURE_2D_ARRAY]=L(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),O[n.TEXTURE_3D]=L(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(n.DEPTH_TEST),o.setFunc(ys),ut(!1),yt(Tc),G(n.CULL_FACE),N(ai);function G(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function U(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function B(q,Tt){return f[q]!==Tt?(n.bindFramebuffer(q,Tt),f[q]=Tt,q===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Tt),q===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function H(q,Tt){let lt=m,gt=!1;if(q){lt=p.get(Tt),lt===void 0&&(lt=[],p.set(Tt,lt));const Rt=q.textures;if(lt.length!==Rt.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let Dt=0,Yt=Rt.length;Dt<Yt;Dt++)lt[Dt]=n.COLOR_ATTACHMENT0+Dt;lt.length=Rt.length,gt=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,gt=!0);gt&&n.drawBuffers(lt)}function st(q){return M!==q?(n.useProgram(q),M=q,!0):!1}const V={[bi]:n.FUNC_ADD,[Jf]:n.FUNC_SUBTRACT,[Kf]:n.FUNC_REVERSE_SUBTRACT};V[$f]=n.MIN,V[jf]=n.MAX;const J={[Qf]:n.ZERO,[td]:n.ONE,[ed]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[ad]:n.SRC_ALPHA_SATURATE,[rd]:n.DST_COLOR,[id]:n.DST_ALPHA,[nd]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[od]:n.ONE_MINUS_DST_COLOR,[sd]:n.ONE_MINUS_DST_ALPHA,[ld]:n.CONSTANT_COLOR,[cd]:n.ONE_MINUS_CONSTANT_COLOR,[hd]:n.CONSTANT_ALPHA,[ud]:n.ONE_MINUS_CONSTANT_ALPHA};function N(q,Tt,lt,gt,Rt,Dt,Yt,Se,Ge,ae){if(q===ai){_===!0&&(U(n.BLEND),_=!1);return}if(_===!1&&(G(n.BLEND),_=!0),q!==Zf){if(q!==g||ae!==v){if((d!==bi||x!==bi)&&(n.blendEquation(n.FUNC_ADD),d=bi,x=bi),ae)switch(q){case ze:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qt:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case ze:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,w=null,R=null,S=null,E.set(0,0,0),T=0,g=q,v=ae}return}Rt=Rt||Tt,Dt=Dt||lt,Yt=Yt||gt,(Tt!==d||Rt!==x)&&(n.blendEquationSeparate(V[Tt],V[Rt]),d=Tt,x=Rt),(lt!==y||gt!==w||Dt!==R||Yt!==S)&&(n.blendFuncSeparate(J[lt],J[gt],J[Dt],J[Yt]),y=lt,w=gt,R=Dt,S=Yt),(Se.equals(E)===!1||Ge!==T)&&(n.blendColor(Se.r,Se.g,Se.b,Ge),E.copy(Se),T=Ge),g=q,v=!1}function vt(q,Tt){q.side===de?U(n.CULL_FACE):G(n.CULL_FACE);let lt=q.side===Re;Tt&&(lt=!lt),ut(lt),q.blending===ze&&q.transparent===!1?N(ai):N(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);const gt=q.stencilWrite;a.setTest(gt),gt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ft(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):U(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(q){b!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),b=q)}function yt(q){q!==Xf?(G(n.CULL_FACE),q!==A&&(q===Tc?n.cullFace(n.BACK):q===Yf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U(n.CULL_FACE),A=q}function xt(q){q!==I&&(Z&&n.lineWidth(q),I=q)}function Ft(q,Tt,lt){q?(G(n.POLYGON_OFFSET_FILL),(z!==Tt||W!==lt)&&(n.polygonOffset(Tt,lt),z=Tt,W=lt)):U(n.POLYGON_OFFSET_FILL)}function St(q){q?G(n.SCISSOR_TEST):U(n.SCISSOR_TEST)}function F(q){q===void 0&&(q=n.TEXTURE0+Y-1),nt!==q&&(n.activeTexture(q),nt=q)}function P(q,Tt,lt){lt===void 0&&(nt===null?lt=n.TEXTURE0+Y-1:lt=nt);let gt=pt[lt];gt===void 0&&(gt={type:void 0,texture:void 0},pt[lt]=gt),(gt.type!==q||gt.texture!==Tt)&&(nt!==lt&&(n.activeTexture(lt),nt=lt),n.bindTexture(q,Tt||O[q]),gt.type=q,gt.texture=Tt)}function tt(){const q=pt[nt];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function at(){try{n.compressedTexImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{n.texSubImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(){try{n.texSubImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Nt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $(){try{n.texStorage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ct(){try{n.texImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{n.texImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(q){K.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),K.copy(q))}function mt(q){C.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),C.copy(q))}function Lt(q,Tt){let lt=h.get(Tt);lt===void 0&&(lt=new WeakMap,h.set(Tt,lt));let gt=lt.get(q);gt===void 0&&(gt=n.getUniformBlockIndex(Tt,q.name),lt.set(q,gt))}function zt(q,Tt){const gt=h.get(Tt).get(q);l.get(Tt)!==gt&&(n.uniformBlockBinding(Tt,gt,q.__bindingPointIndex),l.set(Tt,gt))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},nt=null,pt={},f={},p=new WeakMap,m=[],M=null,_=!1,g=null,d=null,y=null,w=null,x=null,R=null,S=null,E=new Vt(0,0,0),T=0,v=!1,b=null,A=null,I=null,z=null,W=null,K.set(0,0,n.canvas.width,n.canvas.height),C.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:U,bindFramebuffer:B,drawBuffers:H,useProgram:st,setBlending:N,setMaterial:vt,setFlipSided:ut,setCullFace:yt,setLineWidth:xt,setPolygonOffset:Ft,setScissorTest:St,activeTexture:F,bindTexture:P,unbindTexture:tt,compressedTexImage2D:at,compressedTexImage3D:Mt,texImage2D:ct,texImage3D:dt,updateUBOMapping:Lt,uniformBlockBinding:zt,texStorage2D:it,texStorage3D:$,texSubImage2D:ft,texSubImage3D:It,compressedTexSubImage2D:At,compressedTexSubImage3D:Nt,scissor:bt,viewport:mt,reset:Wt}}function wh(n,t,e,i){const s=JM(i);switch(e){case Du:return n*t;case Nu:return n*t;case Fu:return n*t*2;case kl:return n*t/s.components*s.byteLength;case Wl:return n*t/s.components*s.byteLength;case zu:return n*t*2/s.components*s.byteLength;case Xl:return n*t*2/s.components*s.byteLength;case Uu:return n*t*3/s.components*s.byteLength;case gn:return n*t*4/s.components*s.byteLength;case Yl:return n*t*4/s.components*s.byteLength;case ho:case uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:case $a:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Ka:return Math.max(n,8)*Math.max(t,8)/2;case ja:case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case fl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case mo:case ml:case gl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ou:case Ml:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _l:case xl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function JM(n){switch(n){case Hn:case Pu:return{byteLength:1,components:1};case cr:case Lu:case vr:return{byteLength:2,components:1};case Hl:case Vl:return{byteLength:2,components:4};case Ii:case Gl:case wn:return{byteLength:4,components:1};case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function KM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,u=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,P){return m?new OffscreenCanvas(F,P):_o("canvas")}function _(F,P,tt){let at=1;const Mt=St(F);if((Mt.width>tt||Mt.height>tt)&&(at=tt/Math.max(Mt.width,Mt.height)),at<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ft=Math.floor(at*Mt.width),It=Math.floor(at*Mt.height);f===void 0&&(f=M(ft,It));const At=P?M(ft,It):f;return At.width=ft,At.height=It,At.getContext("2d").drawImage(F,0,0,ft,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ft+"x"+It+")."),At}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),F;return F}function g(F){return F.generateMipmaps}function d(F){n.generateMipmap(F)}function y(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(F,P,tt,at,Mt=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ft=P;if(P===n.RED&&(tt===n.FLOAT&&(ft=n.R32F),tt===n.HALF_FLOAT&&(ft=n.R16F),tt===n.UNSIGNED_BYTE&&(ft=n.R8)),P===n.RED_INTEGER&&(tt===n.UNSIGNED_BYTE&&(ft=n.R8UI),tt===n.UNSIGNED_SHORT&&(ft=n.R16UI),tt===n.UNSIGNED_INT&&(ft=n.R32UI),tt===n.BYTE&&(ft=n.R8I),tt===n.SHORT&&(ft=n.R16I),tt===n.INT&&(ft=n.R32I)),P===n.RG&&(tt===n.FLOAT&&(ft=n.RG32F),tt===n.HALF_FLOAT&&(ft=n.RG16F),tt===n.UNSIGNED_BYTE&&(ft=n.RG8)),P===n.RG_INTEGER&&(tt===n.UNSIGNED_BYTE&&(ft=n.RG8UI),tt===n.UNSIGNED_SHORT&&(ft=n.RG16UI),tt===n.UNSIGNED_INT&&(ft=n.RG32UI),tt===n.BYTE&&(ft=n.RG8I),tt===n.SHORT&&(ft=n.RG16I),tt===n.INT&&(ft=n.RG32I)),P===n.RGB_INTEGER&&(tt===n.UNSIGNED_BYTE&&(ft=n.RGB8UI),tt===n.UNSIGNED_SHORT&&(ft=n.RGB16UI),tt===n.UNSIGNED_INT&&(ft=n.RGB32UI),tt===n.BYTE&&(ft=n.RGB8I),tt===n.SHORT&&(ft=n.RGB16I),tt===n.INT&&(ft=n.RGB32I)),P===n.RGBA_INTEGER&&(tt===n.UNSIGNED_BYTE&&(ft=n.RGBA8UI),tt===n.UNSIGNED_SHORT&&(ft=n.RGBA16UI),tt===n.UNSIGNED_INT&&(ft=n.RGBA32UI),tt===n.BYTE&&(ft=n.RGBA8I),tt===n.SHORT&&(ft=n.RGBA16I),tt===n.INT&&(ft=n.RGBA32I)),P===n.RGB&&tt===n.UNSIGNED_INT_5_9_9_9_REV&&(ft=n.RGB9_E5),P===n.RGBA){const It=Mt?Po:ee.getTransfer(at);tt===n.FLOAT&&(ft=n.RGBA32F),tt===n.HALF_FLOAT&&(ft=n.RGBA16F),tt===n.UNSIGNED_BYTE&&(ft=It===ce?n.SRGB8_ALPHA8:n.RGBA8),tt===n.UNSIGNED_SHORT_4_4_4_4&&(ft=n.RGBA4),tt===n.UNSIGNED_SHORT_5_5_5_1&&(ft=n.RGB5_A1)}return(ft===n.R16F||ft===n.R32F||ft===n.RG16F||ft===n.RG32F||ft===n.RGBA16F||ft===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function x(F,P){let tt;return F?P===null||P===Ii||P===ws?tt=n.DEPTH24_STENCIL8:P===wn?tt=n.DEPTH32F_STENCIL8:P===cr&&(tt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Ii||P===ws?tt=n.DEPTH_COMPONENT24:P===wn?tt=n.DEPTH_COMPONENT32F:P===cr&&(tt=n.DEPTH_COMPONENT16),tt}function R(F,P){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==nn&&F.minFilter!==bn?Math.log2(Math.max(P.width,P.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?P.mipmaps.length:1}function S(F){const P=F.target;P.removeEventListener("dispose",S),T(P),P.isVideoTexture&&u.delete(P)}function E(F){const P=F.target;P.removeEventListener("dispose",E),b(P)}function T(F){const P=i.get(F);if(P.__webglInit===void 0)return;const tt=F.source,at=p.get(tt);if(at){const Mt=at[P.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&v(F),Object.keys(at).length===0&&p.delete(tt)}i.remove(F)}function v(F){const P=i.get(F);n.deleteTexture(P.__webglTexture);const tt=F.source,at=p.get(tt);delete at[P.__cacheKey],o.memory.textures--}function b(F){const P=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(P.__webglFramebuffer[at]))for(let Mt=0;Mt<P.__webglFramebuffer[at].length;Mt++)n.deleteFramebuffer(P.__webglFramebuffer[at][Mt]);else n.deleteFramebuffer(P.__webglFramebuffer[at]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[at])}else{if(Array.isArray(P.__webglFramebuffer))for(let at=0;at<P.__webglFramebuffer.length;at++)n.deleteFramebuffer(P.__webglFramebuffer[at]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let at=0;at<P.__webglColorRenderbuffer.length;at++)P.__webglColorRenderbuffer[at]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[at]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const tt=F.textures;for(let at=0,Mt=tt.length;at<Mt;at++){const ft=i.get(tt[at]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),o.memory.textures--),i.remove(tt[at])}i.remove(F)}let A=0;function I(){A=0}function z(){const F=A;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),A+=1,F}function W(F){const P=[];return P.push(F.wrapS),P.push(F.wrapT),P.push(F.wrapR||0),P.push(F.magFilter),P.push(F.minFilter),P.push(F.anisotropy),P.push(F.internalFormat),P.push(F.format),P.push(F.type),P.push(F.generateMipmaps),P.push(F.premultiplyAlpha),P.push(F.flipY),P.push(F.unpackAlignment),P.push(F.colorSpace),P.join()}function Y(F,P){const tt=i.get(F);if(F.isVideoTexture&&xt(F),F.isRenderTargetTexture===!1&&F.version>0&&tt.__version!==F.version){const at=F.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(tt,F,P);return}}e.bindTexture(n.TEXTURE_2D,tt.__webglTexture,n.TEXTURE0+P)}function Z(F,P){const tt=i.get(F);if(F.version>0&&tt.__version!==F.version){C(tt,F,P);return}e.bindTexture(n.TEXTURE_2D_ARRAY,tt.__webglTexture,n.TEXTURE0+P)}function et(F,P){const tt=i.get(F);if(F.version>0&&tt.__version!==F.version){C(tt,F,P);return}e.bindTexture(n.TEXTURE_3D,tt.__webglTexture,n.TEXTURE0+P)}function X(F,P){const tt=i.get(F);if(F.version>0&&tt.__version!==F.version){L(tt,F,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture,n.TEXTURE0+P)}const nt={[Ya]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},pt={[nn]:n.NEAREST,[yd]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Oo]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},_t={[Ed]:n.NEVER,[Ld]:n.ALWAYS,[Ad]:n.LESS,[Gu]:n.LEQUAL,[Td]:n.EQUAL,[Pd]:n.GEQUAL,[Rd]:n.GREATER,[Cd]:n.NOTEQUAL};function ht(F,P){if(P.type===wn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===bn||P.magFilter===Oo||P.magFilter===Ar||P.magFilter===Ci||P.minFilter===bn||P.minFilter===Oo||P.minFilter===Ar||P.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,nt[P.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,nt[P.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,nt[P.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,pt[P.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,pt[P.minFilter]),P.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,_t[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===nn||P.minFilter!==Ar&&P.minFilter!==Ci||P.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(F,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function K(F,P){let tt=!1;F.__webglInit===void 0&&(F.__webglInit=!0,P.addEventListener("dispose",S));const at=P.source;let Mt=p.get(at);Mt===void 0&&(Mt={},p.set(at,Mt));const ft=W(P);if(ft!==F.__cacheKey){Mt[ft]===void 0&&(Mt[ft]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),Mt[ft].usedTimes++;const It=Mt[F.__cacheKey];It!==void 0&&(Mt[F.__cacheKey].usedTimes--,It.usedTimes===0&&v(P)),F.__cacheKey=ft,F.__webglTexture=Mt[ft].texture}return tt}function C(F,P,tt){let at=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(at=n.TEXTURE_3D);const Mt=K(F,P),ft=P.source;e.bindTexture(at,F.__webglTexture,n.TEXTURE0+tt);const It=i.get(ft);if(ft.version!==It.__version||Mt===!0){e.activeTexture(n.TEXTURE0+tt);const At=ee.getPrimaries(ee.workingColorSpace),Nt=P.colorSpace===ii?null:ee.getPrimaries(P.colorSpace),it=P.colorSpace===ii||At===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let $=_(P.image,!1,s.maxTextureSize);$=Ft(P,$);const ct=r.convert(P.format,P.colorSpace),dt=r.convert(P.type);let bt=w(P.internalFormat,ct,dt,P.colorSpace,P.isVideoTexture);ht(at,P);let mt;const Lt=P.mipmaps,zt=P.isVideoTexture!==!0,Wt=It.__version===void 0||Mt===!0,q=ft.dataReady,Tt=R(P,$);if(P.isDepthTexture)bt=x(P.format===Es,P.type),Wt&&(zt?e.texStorage2D(n.TEXTURE_2D,1,bt,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,bt,$.width,$.height,0,ct,dt,null));else if(P.isDataTexture)if(Lt.length>0){zt&&Wt&&e.texStorage2D(n.TEXTURE_2D,Tt,bt,Lt[0].width,Lt[0].height);for(let lt=0,gt=Lt.length;lt<gt;lt++)mt=Lt[lt],zt?q&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,mt.width,mt.height,ct,dt,mt.data):e.texImage2D(n.TEXTURE_2D,lt,bt,mt.width,mt.height,0,ct,dt,mt.data);P.generateMipmaps=!1}else zt?(Wt&&e.texStorage2D(n.TEXTURE_2D,Tt,bt,$.width,$.height),q&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,ct,dt,$.data)):e.texImage2D(n.TEXTURE_2D,0,bt,$.width,$.height,0,ct,dt,$.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){zt&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,bt,Lt[0].width,Lt[0].height,$.depth);for(let lt=0,gt=Lt.length;lt<gt;lt++)if(mt=Lt[lt],P.format!==gn)if(ct!==null)if(zt){if(q)if(P.layerUpdates.size>0){const Rt=wh(mt.width,mt.height,P.format,P.type);for(const Dt of P.layerUpdates){const Yt=mt.data.subarray(Dt*Rt/mt.data.BYTES_PER_ELEMENT,(Dt+1)*Rt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,Dt,mt.width,mt.height,1,ct,Yt)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,mt.width,mt.height,$.depth,ct,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,bt,mt.width,mt.height,$.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?q&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,mt.width,mt.height,$.depth,ct,dt,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,bt,mt.width,mt.height,$.depth,0,ct,dt,mt.data)}else{zt&&Wt&&e.texStorage2D(n.TEXTURE_2D,Tt,bt,Lt[0].width,Lt[0].height);for(let lt=0,gt=Lt.length;lt<gt;lt++)mt=Lt[lt],P.format!==gn?ct!==null?zt?q&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,mt.width,mt.height,ct,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,bt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?q&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,mt.width,mt.height,ct,dt,mt.data):e.texImage2D(n.TEXTURE_2D,lt,bt,mt.width,mt.height,0,ct,dt,mt.data)}else if(P.isDataArrayTexture)if(zt){if(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,bt,$.width,$.height,$.depth),q)if(P.layerUpdates.size>0){const lt=wh($.width,$.height,P.format,P.type);for(const gt of P.layerUpdates){const Rt=$.data.subarray(gt*lt/$.data.BYTES_PER_ELEMENT,(gt+1)*lt/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,$.width,$.height,1,ct,dt,Rt)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ct,dt,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,$.width,$.height,$.depth,0,ct,dt,$.data);else if(P.isData3DTexture)zt?(Wt&&e.texStorage3D(n.TEXTURE_3D,Tt,bt,$.width,$.height,$.depth),q&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ct,dt,$.data)):e.texImage3D(n.TEXTURE_3D,0,bt,$.width,$.height,$.depth,0,ct,dt,$.data);else if(P.isFramebufferTexture){if(Wt)if(zt)e.texStorage2D(n.TEXTURE_2D,Tt,bt,$.width,$.height);else{let lt=$.width,gt=$.height;for(let Rt=0;Rt<Tt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,bt,lt,gt,0,ct,dt,null),lt>>=1,gt>>=1}}else if(Lt.length>0){if(zt&&Wt){const lt=St(Lt[0]);e.texStorage2D(n.TEXTURE_2D,Tt,bt,lt.width,lt.height)}for(let lt=0,gt=Lt.length;lt<gt;lt++)mt=Lt[lt],zt?q&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,ct,dt,mt):e.texImage2D(n.TEXTURE_2D,lt,bt,ct,dt,mt);P.generateMipmaps=!1}else if(zt){if(Wt){const lt=St($);e.texStorage2D(n.TEXTURE_2D,Tt,bt,lt.width,lt.height)}q&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,dt,$)}else e.texImage2D(n.TEXTURE_2D,0,bt,ct,dt,$);g(P)&&d(at),It.__version=ft.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function L(F,P,tt){if(P.image.length!==6)return;const at=K(F,P),Mt=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+tt);const ft=i.get(Mt);if(Mt.version!==ft.__version||at===!0){e.activeTexture(n.TEXTURE0+tt);const It=ee.getPrimaries(ee.workingColorSpace),At=P.colorSpace===ii?null:ee.getPrimaries(P.colorSpace),Nt=P.colorSpace===ii||It===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const it=P.isCompressedTexture||P.image[0].isCompressedTexture,$=P.image[0]&&P.image[0].isDataTexture,ct=[];for(let gt=0;gt<6;gt++)!it&&!$?ct[gt]=_(P.image[gt],!0,s.maxCubemapSize):ct[gt]=$?P.image[gt].image:P.image[gt],ct[gt]=Ft(P,ct[gt]);const dt=ct[0],bt=r.convert(P.format,P.colorSpace),mt=r.convert(P.type),Lt=w(P.internalFormat,bt,mt,P.colorSpace),zt=P.isVideoTexture!==!0,Wt=ft.__version===void 0||at===!0,q=Mt.dataReady;let Tt=R(P,dt);ht(n.TEXTURE_CUBE_MAP,P);let lt;if(it){zt&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Lt,dt.width,dt.height);for(let gt=0;gt<6;gt++){lt=ct[gt].mipmaps;for(let Rt=0;Rt<lt.length;Rt++){const Dt=lt[Rt];P.format!==gn?bt!==null?zt?q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,Dt.width,Dt.height,bt,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,Lt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,Dt.width,Dt.height,bt,mt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,Lt,Dt.width,Dt.height,0,bt,mt,Dt.data)}}}else{if(lt=P.mipmaps,zt&&Wt){lt.length>0&&Tt++;const gt=St(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Lt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if($){zt?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ct[gt].width,ct[gt].height,bt,mt,ct[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Lt,ct[gt].width,ct[gt].height,0,bt,mt,ct[gt].data);for(let Rt=0;Rt<lt.length;Rt++){const Yt=lt[Rt].image[gt].image;zt?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,Yt.width,Yt.height,bt,mt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,Lt,Yt.width,Yt.height,0,bt,mt,Yt.data)}}else{zt?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,bt,mt,ct[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Lt,bt,mt,ct[gt]);for(let Rt=0;Rt<lt.length;Rt++){const Dt=lt[Rt];zt?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,bt,mt,Dt.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,Lt,bt,mt,Dt.image[gt])}}}g(P)&&d(n.TEXTURE_CUBE_MAP),ft.__version=Mt.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function O(F,P,tt,at,Mt,ft){const It=r.convert(tt.format,tt.colorSpace),At=r.convert(tt.type),Nt=w(tt.internalFormat,It,At,tt.colorSpace),it=i.get(P),$=i.get(tt);if($.__renderTarget=P,!it.__hasExternalTextures){const ct=Math.max(1,P.width>>ft),dt=Math.max(1,P.height>>ft);Mt===n.TEXTURE_3D||Mt===n.TEXTURE_2D_ARRAY?e.texImage3D(Mt,ft,Nt,ct,dt,P.depth,0,It,At,null):e.texImage2D(Mt,ft,Nt,ct,dt,0,It,At,null)}e.bindFramebuffer(n.FRAMEBUFFER,F),yt(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,Mt,$.__webglTexture,0,ut(P)):(Mt===n.TEXTURE_2D||Mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,Mt,$.__webglTexture,ft),e.bindFramebuffer(n.FRAMEBUFFER,null)}function G(F,P,tt){if(n.bindRenderbuffer(n.RENDERBUFFER,F),P.depthBuffer){const at=P.depthTexture,Mt=at&&at.isDepthTexture?at.type:null,ft=x(P.stencilBuffer,Mt),It=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=ut(P);yt(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,ft,P.width,P.height):tt?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,ft,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,ft,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,F)}else{const at=P.textures;for(let Mt=0;Mt<at.length;Mt++){const ft=at[Mt],It=r.convert(ft.format,ft.colorSpace),At=r.convert(ft.type),Nt=w(ft.internalFormat,It,At,ft.colorSpace),it=ut(P);tt&&yt(P)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,Nt,P.width,P.height):yt(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,Nt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Nt,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(F,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const at=i.get(P.depthTexture);at.__renderTarget=P,(!at.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),Y(P.depthTexture,0);const Mt=at.__webglTexture,ft=ut(P);if(P.depthTexture.format===_s)yt(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Mt,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Mt,0);else if(P.depthTexture.format===Es)yt(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Mt,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function B(F){const P=i.get(F),tt=F.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==F.depthTexture){const at=F.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),at){const Mt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,at.removeEventListener("dispose",Mt)};at.addEventListener("dispose",Mt),P.__depthDisposeCallback=Mt}P.__boundDepthTexture=at}if(F.depthTexture&&!P.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");U(P.__webglFramebuffer,F)}else if(tt){P.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[at]),P.__webglDepthbuffer[at]===void 0)P.__webglDepthbuffer[at]=n.createRenderbuffer(),G(P.__webglDepthbuffer[at],F,!1);else{const Mt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=P.__webglDepthbuffer[at];n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,ft)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),G(P.__webglDepthbuffer,F,!1);else{const at=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function H(F,P,tt){const at=i.get(F);P!==void 0&&O(at.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),tt!==void 0&&B(F)}function st(F){const P=F.texture,tt=i.get(F),at=i.get(P);F.addEventListener("dispose",E);const Mt=F.textures,ft=F.isWebGLCubeRenderTarget===!0,It=Mt.length>1;if(It||(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=P.version,o.memory.textures++),ft){tt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(P.mipmaps&&P.mipmaps.length>0){tt.__webglFramebuffer[At]=[];for(let Nt=0;Nt<P.mipmaps.length;Nt++)tt.__webglFramebuffer[At][Nt]=n.createFramebuffer()}else tt.__webglFramebuffer[At]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){tt.__webglFramebuffer=[];for(let At=0;At<P.mipmaps.length;At++)tt.__webglFramebuffer[At]=n.createFramebuffer()}else tt.__webglFramebuffer=n.createFramebuffer();if(It)for(let At=0,Nt=Mt.length;At<Nt;At++){const it=i.get(Mt[At]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&yt(F)===!1){tt.__webglMultisampledFramebuffer=n.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Nt=Mt[At];tt.__webglColorRenderbuffer[At]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,tt.__webglColorRenderbuffer[At]);const it=r.convert(Nt.format,Nt.colorSpace),$=r.convert(Nt.type),ct=w(Nt.internalFormat,it,$,Nt.colorSpace,F.isXRRenderTarget===!0),dt=ut(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,ct,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,tt.__webglColorRenderbuffer[At])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(tt.__webglDepthRenderbuffer=n.createRenderbuffer(),G(tt.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ft){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),ht(n.TEXTURE_CUBE_MAP,P);for(let At=0;At<6;At++)if(P.mipmaps&&P.mipmaps.length>0)for(let Nt=0;Nt<P.mipmaps.length;Nt++)O(tt.__webglFramebuffer[At][Nt],F,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Nt);else O(tt.__webglFramebuffer[At],F,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);g(P)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let At=0,Nt=Mt.length;At<Nt;At++){const it=Mt[At],$=i.get(it);e.bindTexture(n.TEXTURE_2D,$.__webglTexture),ht(n.TEXTURE_2D,it),O(tt.__webglFramebuffer,F,it,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,0),g(it)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let At=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(At=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(At,at.__webglTexture),ht(At,P),P.mipmaps&&P.mipmaps.length>0)for(let Nt=0;Nt<P.mipmaps.length;Nt++)O(tt.__webglFramebuffer[Nt],F,P,n.COLOR_ATTACHMENT0,At,Nt);else O(tt.__webglFramebuffer,F,P,n.COLOR_ATTACHMENT0,At,0);g(P)&&d(At),e.unbindTexture()}F.depthBuffer&&B(F)}function V(F){const P=F.textures;for(let tt=0,at=P.length;tt<at;tt++){const Mt=P[tt];if(g(Mt)){const ft=y(F),It=i.get(Mt).__webglTexture;e.bindTexture(ft,It),d(ft),e.unbindTexture()}}}const J=[],N=[];function vt(F){if(F.samples>0){if(yt(F)===!1){const P=F.textures,tt=F.width,at=F.height;let Mt=n.COLOR_BUFFER_BIT;const ft=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(F),At=P.length>1;if(At)for(let Nt=0;Nt<P.length;Nt++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Nt=0;Nt<P.length;Nt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Mt|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Mt|=n.STENCIL_BUFFER_BIT)),At){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[Nt]);const it=i.get(P[Nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,tt,at,0,0,tt,at,Mt,n.NEAREST),l===!0&&(J.length=0,N.length=0,J.push(n.COLOR_ATTACHMENT0+Nt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(J.push(ft),N.push(ft),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),At)for(let Nt=0;Nt<P.length;Nt++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,It.__webglColorRenderbuffer[Nt]);const it=i.get(P[Nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const P=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function ut(F){return Math.min(s.maxSamples,F.samples)}function yt(F){const P=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function xt(F){const P=o.render.frame;u.get(F)!==P&&(u.set(F,P),F.update())}function Ft(F,P){const tt=F.colorSpace,at=F.format,Mt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||tt!==Cs&&tt!==ii&&(ee.getTransfer(tt)===ce?(at!==gn||Mt!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),P}function St(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=X,this.rebindTextures=H,this.setupRenderTarget=st,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=O,this.useMultisampledRTT=yt}function $M(n,t){function e(i,s=ii){let r;const o=ee.getTransfer(s);if(i===Hn)return n.UNSIGNED_BYTE;if(i===Hl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Iu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pu)return n.BYTE;if(i===Lu)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===Gl)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===vr)return n.HALF_FLOAT;if(i===Du)return n.ALPHA;if(i===Uu)return n.RGB;if(i===gn)return n.RGBA;if(i===Nu)return n.LUMINANCE;if(i===Fu)return n.LUMINANCE_ALPHA;if(i===_s)return n.DEPTH_COMPONENT;if(i===Es)return n.DEPTH_STENCIL;if(i===kl)return n.RED;if(i===Wl)return n.RED_INTEGER;if(i===zu)return n.RG;if(i===Xl)return n.RG_INTEGER;if(i===Yl)return n.RGBA_INTEGER;if(i===ho||i===uo||i===fo||i===po)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Ka||i===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ja||i===Qa||i===tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ja||i===Qa)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===fl||i===dl||i===pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===el)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ll)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ul)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===ml||i===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===mo)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ou||i===Ml||i===_l||i===xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class jM extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ue extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),d=this._getHandJoint(h,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),m=.02,M=.005;h.inputState.pinching&&p>m+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=m-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
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

}`;class n_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Vn({vertexShader:t_,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i_ extends Ps{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,f=null,p=null,m=null,M=null;const _=new n_,g=e.getContextAttributes();let d=null,y=null;const w=[],x=[],R=new Et;let S=null;const E=new en;E.viewport=new he;const T=new en;T.viewport=new he;const v=[E,T],b=new jM;let A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let L=w[C];return L===void 0&&(L=new ua,w[C]=L),L.getTargetRaySpace()},this.getControllerGrip=function(C){let L=w[C];return L===void 0&&(L=new ua,w[C]=L),L.getGripSpace()},this.getHand=function(C){let L=w[C];return L===void 0&&(L=new ua,w[C]=L),L.getHandSpace()};function z(C){const L=x.indexOf(C.inputSource);if(L===-1)return;const O=w[L];O!==void 0&&(O.update(C.inputSource,C.frame,h||o),O.dispatchEvent({type:C.type,data:C.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let C=0;C<w.length;C++){const L=x[C];L!==null&&(x[C]=null,w[C].disconnect(L))}A=null,I=null,_.reset(),t.setRenderTarget(d),m=null,p=null,f=null,s=null,y=null,K.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(C){h=C},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const L={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,L),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Di(m.framebufferWidth,m.framebufferHeight,{format:gn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let L=null,O=null,G=null;g.depth&&(G=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=g.stencil?Es:_s,O=g.stencil?ws:Ii);const U={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(U),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new Di(p.textureWidth,p.textureHeight,{format:gn,type:Hn,depthTexture:new ju(p.textureWidth,p.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(C){for(let L=0;L<C.removed.length;L++){const O=C.removed[L],G=x.indexOf(O);G>=0&&(x[G]=null,w[G].disconnect(O))}for(let L=0;L<C.added.length;L++){const O=C.added[L];let G=x.indexOf(O);if(G===-1){for(let B=0;B<w.length;B++)if(B>=x.length){x.push(O),G=B;break}else if(x[B]===null){x[B]=O,G=B;break}if(G===-1)break}const U=w[G];U&&U.connect(O)}}const Z=new k,et=new k;function X(C,L,O){Z.setFromMatrixPosition(L.matrixWorld),et.setFromMatrixPosition(O.matrixWorld);const G=Z.distanceTo(et),U=L.projectionMatrix.elements,B=O.projectionMatrix.elements,H=U[14]/(U[10]-1),st=U[14]/(U[10]+1),V=(U[9]+1)/U[5],J=(U[9]-1)/U[5],N=(U[8]-1)/U[0],vt=(B[8]+1)/B[0],ut=H*N,yt=H*vt,xt=G/(-N+vt),Ft=xt*-N;if(L.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Ft),C.translateZ(xt),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),U[10]===-1)C.projectionMatrix.copy(L.projectionMatrix),C.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const St=H+xt,F=st+xt,P=ut-Ft,tt=yt+(G-Ft),at=V*st/F*St,Mt=J*st/F*St;C.projectionMatrix.makePerspective(P,tt,at,Mt,St,F),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function nt(C,L){L===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(L.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;let L=C.near,O=C.far;_.texture!==null&&(_.depthNear>0&&(L=_.depthNear),_.depthFar>0&&(O=_.depthFar)),b.near=T.near=E.near=L,b.far=T.far=E.far=O,(A!==b.near||I!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,I=b.far),E.layers.mask=C.layers.mask|2,T.layers.mask=C.layers.mask|4,b.layers.mask=E.layers.mask|T.layers.mask;const G=C.parent,U=b.cameras;nt(b,G);for(let B=0;B<U.length;B++)nt(U[B],G);U.length===2?X(b,E,T):b.projectionMatrix.copy(E.projectionMatrix),pt(C,b,G)};function pt(C,L,O){O===null?C.matrix.copy(L.matrixWorld):(C.matrix.copy(O.matrixWorld),C.matrix.invert(),C.matrix.multiply(L.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(L.projectionMatrix),C.projectionMatrixInverse.copy(L.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=hr*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(C){l=C,p!==null&&(p.fixedFoveation=C),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=C)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let _t=null;function ht(C,L){if(u=L.getViewerPose(h||o),M=L,u!==null){const O=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let G=!1;O.length!==b.cameras.length&&(b.cameras.length=0,G=!0);for(let B=0;B<O.length;B++){const H=O[B];let st=null;if(m!==null)st=m.getViewport(H);else{const J=f.getViewSubImage(p,H);st=J.viewport,B===0&&(t.setRenderTargetTextures(y,J.colorTexture,p.ignoreDepthValues?void 0:J.depthStencilTexture),t.setRenderTarget(y))}let V=v[B];V===void 0&&(V=new en,V.layers.enable(B),V.viewport=new he,v[B]=V),V.matrix.fromArray(H.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(H.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(st.x,st.y,st.width,st.height),B===0&&(b.matrix.copy(V.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),G===!0&&b.cameras.push(V)}const U=s.enabledFeatures;if(U&&U.includes("depth-sensing")){const B=f.getDepthInformation(O[0]);B&&B.isValid&&B.texture&&_.init(t,B,s.renderState)}}for(let O=0;O<w.length;O++){const G=x[O],U=w[O];G!==null&&U!==void 0&&U.update(G,L,h||o)}_t&&_t(C,L),L.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:L}),M=null}const K=new $u;K.setAnimationLoop(ht),this.setAnimationLoop=function(C){_t=C},this.dispose=function(){}}}const _i=new En,s_=new le;function r_(n,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Zu(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,y,w,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d)):d.isMeshStandardMaterial?(r(g,d),p(g,d),d.isMeshPhysicalMaterial&&m(g,d,x)):d.isMeshMatcapMaterial?(r(g,d),M(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),_(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,y,w):d.isSpriteMaterial?h(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Re&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Re&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const y=t.get(d),w=y.envMap,x=y.envMapRotation;w&&(g.envMap.value=w,_i.copy(x),_i.x*=-1,_i.y*=-1,_i.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),g.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(_i)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,y,w){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*y,g.scale.value=w*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,y){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Re&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function M(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const y=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function o_(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const x=w.program;i.uniformBlockBinding(y,x)}function h(y,w){let x=s[y.id];x===void 0&&(M(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",g));const R=w.program;i.updateUBOMapping(y,R);const S=t.render.frame;r[y.id]!==S&&(p(y),r[y.id]=S)}function u(y){const w=f();y.__bindingPointIndex=w;const x=n.createBuffer(),R=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const w=s[y.id],x=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let S=0,E=x.length;S<E;S++){const T=Array.isArray(x[S])?x[S]:[x[S]];for(let v=0,b=T.length;v<b;v++){const A=T[v];if(m(A,S,v,R)===!0){const I=A.__offset,z=Array.isArray(A.value)?A.value:[A.value];let W=0;for(let Y=0;Y<z.length;Y++){const Z=z[Y],et=_(Z);typeof Z=="number"||typeof Z=="boolean"?(A.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,I+W,A.__data)):Z.isMatrix3?(A.__data[0]=Z.elements[0],A.__data[1]=Z.elements[1],A.__data[2]=Z.elements[2],A.__data[3]=0,A.__data[4]=Z.elements[3],A.__data[5]=Z.elements[4],A.__data[6]=Z.elements[5],A.__data[7]=0,A.__data[8]=Z.elements[6],A.__data[9]=Z.elements[7],A.__data[10]=Z.elements[8],A.__data[11]=0):(Z.toArray(A.__data,W),W+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,w,x,R){const S=y.value,E=w+"_"+x;if(R[E]===void 0)return typeof S=="number"||typeof S=="boolean"?R[E]=S:R[E]=S.clone(),!0;{const T=R[E];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return R[E]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function M(y){const w=y.uniforms;let x=0;const R=16;for(let E=0,T=w.length;E<T;E++){const v=Array.isArray(w[E])?w[E]:[w[E]];for(let b=0,A=v.length;b<A;b++){const I=v[b],z=Array.isArray(I.value)?I.value:[I.value];for(let W=0,Y=z.length;W<Y;W++){const Z=z[W],et=_(Z),X=x%R,nt=X%et.boundary,pt=X+nt;x+=nt,pt!==0&&R-pt<et.storage&&(x+=R-pt),I.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=et.storage}}}const S=x%R;return S>0&&(x+=R-S),y.__size=x,y.__cache={},this}function _(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),w}function g(y){const w=y.target;w.removeEventListener("dispose",g);const x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:h,dispose:d}}class a_{constructor(t={}){const{canvas:e=Jd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const M=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const y=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=li,this.toneMappingExposure=1;const x=this;let R=!1,S=0,E=0,T=null,v=-1,b=null;const A=new he,I=new he;let z=null;const W=new Vt(0);let Y=0,Z=e.width,et=e.height,X=1,nt=null,pt=null;const _t=new he(0,0,Z,et),ht=new he(0,0,Z,et);let K=!1;const C=new Jl;let L=!1,O=!1;const G=new le,U=new le,B=new k,H=new he,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function J(){return T===null?X:1}let N=i;function vt(D,j){return e.getContext(D,j)}try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bl}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),N===null){const j="webgl2";if(N=vt(j,D),N===null)throw vt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ut,yt,xt,Ft,St,F,P,tt,at,Mt,ft,It,At,Nt,it,$,ct,dt,bt,mt,Lt,zt,Wt,q;function Tt(){ut=new fg(N),ut.init(),zt=new $M(N,ut),yt=new og(N,ut,t,zt),xt=new ZM(N,ut),yt.reverseDepthBuffer&&p&&xt.buffers.depth.setReversed(!0),Ft=new mg(N),St=new DM,F=new KM(N,ut,xt,St,yt,zt,Ft),P=new lg(x),tt=new ug(x),at=new Sp(N),Wt=new sg(N,at),Mt=new dg(N,at,Ft,Wt),ft=new Mg(N,Mt,at,Ft),bt=new gg(N,yt,F),$=new ag(St),It=new IM(x,P,tt,ut,yt,Wt,$),At=new r_(x,St),Nt=new NM,it=new HM(ut),dt=new ig(x,P,tt,xt,ft,m,l),ct=new YM(x,ft,yt),q=new o_(N,Ft,yt,xt),mt=new rg(N,ut,Ft),Lt=new pg(N,ut,Ft),Ft.programs=It.programs,x.capabilities=yt,x.extensions=ut,x.properties=St,x.renderLists=Nt,x.shadowMap=ct,x.state=xt,x.info=Ft}Tt();const lt=new i_(x,N);this.xr=lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const D=ut.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ut.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(D){D!==void 0&&(X=D,this.setSize(Z,et,!1))},this.getSize=function(D){return D.set(Z,et)},this.setSize=function(D,j,rt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=D,et=j,e.width=Math.floor(D*X),e.height=Math.floor(j*X),rt===!0&&(e.style.width=D+"px",e.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(Z*X,et*X).floor()},this.setDrawingBufferSize=function(D,j,rt){Z=D,et=j,X=rt,e.width=Math.floor(D*rt),e.height=Math.floor(j*rt),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy(_t)},this.setViewport=function(D,j,rt,ot){D.isVector4?_t.set(D.x,D.y,D.z,D.w):_t.set(D,j,rt,ot),xt.viewport(A.copy(_t).multiplyScalar(X).round())},this.getScissor=function(D){return D.copy(ht)},this.setScissor=function(D,j,rt,ot){D.isVector4?ht.set(D.x,D.y,D.z,D.w):ht.set(D,j,rt,ot),xt.scissor(I.copy(ht).multiplyScalar(X).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(D){xt.setScissorTest(K=D)},this.setOpaqueSort=function(D){nt=D},this.setTransparentSort=function(D){pt=D},this.getClearColor=function(D){return D.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(D=!0,j=!0,rt=!0){let ot=0;if(D){let Q=!1;if(T!==null){const wt=T.texture.format;Q=wt===Yl||wt===Xl||wt===Wl}if(Q){const wt=T.texture.type,Ut=wt===Hn||wt===Ii||wt===cr||wt===ws||wt===Hl||wt===Vl,Ot=dt.getClearColor(),Bt=dt.getClearAlpha(),Xt=Ot.r,qt=Ot.g,Gt=Ot.b;Ut?(M[0]=Xt,M[1]=qt,M[2]=Gt,M[3]=Bt,N.clearBufferuiv(N.COLOR,0,M)):(_[0]=Xt,_[1]=qt,_[2]=Gt,_[3]=Bt,N.clearBufferiv(N.COLOR,0,_))}else ot|=N.COLOR_BUFFER_BIT}j&&(ot|=N.DEPTH_BUFFER_BIT),rt&&(ot|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),Nt.dispose(),it.dispose(),St.dispose(),P.dispose(),tt.dispose(),ft.dispose(),Wt.dispose(),q.dispose(),It.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",xc),lt.removeEventListener("sessionend",vc),fi.stop()};function gt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const D=Ft.autoReset,j=ct.enabled,rt=ct.autoUpdate,ot=ct.needsUpdate,Q=ct.type;Tt(),Ft.autoReset=D,ct.enabled=j,ct.autoUpdate=rt,ct.needsUpdate=ot,ct.type=Q}function Dt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Yt(D){const j=D.target;j.removeEventListener("dispose",Yt),Se(j)}function Se(D){Ge(D),St.remove(D)}function Ge(D){const j=St.get(D).programs;j!==void 0&&(j.forEach(function(rt){It.releaseProgram(rt)}),D.isShaderMaterial&&It.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,rt,ot,Q,wt){j===null&&(j=st);const Ut=Q.isMesh&&Q.matrixWorld.determinant()<0,Ot=Vf(D,j,rt,ot,Q);xt.setMaterial(ot,Ut);let Bt=rt.index,Xt=1;if(ot.wireframe===!0){if(Bt=Mt.getWireframeAttribute(rt),Bt===void 0)return;Xt=2}const qt=rt.drawRange,Gt=rt.attributes.position;let ne=qt.start*Xt,fe=(qt.start+qt.count)*Xt;wt!==null&&(ne=Math.max(ne,wt.start*Xt),fe=Math.min(fe,(wt.start+wt.count)*Xt)),Bt!==null?(ne=Math.max(ne,0),fe=Math.min(fe,Bt.count)):Gt!=null&&(ne=Math.max(ne,0),fe=Math.min(fe,Gt.count));const pe=fe-ne;if(pe<0||pe===1/0)return;Wt.setup(Q,ot,Ot,rt,Bt);let Ke,se=mt;if(Bt!==null&&(Ke=at.get(Bt),se=Lt,se.setIndex(Ke)),Q.isMesh)ot.wireframe===!0?(xt.setLineWidth(ot.wireframeLinewidth*J()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(Q.isLine){let Ht=ot.linewidth;Ht===void 0&&(Ht=1),xt.setLineWidth(Ht*J()),Q.isLineSegments?se.setMode(N.LINES):Q.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else Q.isPoints?se.setMode(N.POINTS):Q.isSprite&&se.setMode(N.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)se.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))se.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ht=Q._multiDrawStarts,Pn=Q._multiDrawCounts,re=Q._multiDrawCount,un=Bt?at.get(Bt).bytesPerElement:1,Xi=St.get(ot).currentProgram.getUniforms();for(let je=0;je<re;je++)Xi.setValue(N,"_gl_DrawID",je),se.render(Ht[je]/un,Pn[je])}else if(Q.isInstancedMesh)se.renderInstances(ne,pe,Q.count);else if(rt.isInstancedBufferGeometry){const Ht=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Pn=Math.min(rt.instanceCount,Ht);se.renderInstances(ne,pe,Pn)}else se.render(ne,pe)};function ae(D,j,rt){D.transparent===!0&&D.side===de&&D.forceSinglePass===!1?(D.side=Re,D.needsUpdate=!0,Er(D,j,rt),D.side=hi,D.needsUpdate=!0,Er(D,j,rt),D.side=de):Er(D,j,rt)}this.compile=function(D,j,rt=null){rt===null&&(rt=D),d=it.get(rt),d.init(j),w.push(d),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),D!==rt&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),d.setupLights();const ot=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const wt=Q.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){const Ot=wt[Ut];ae(Ot,rt,Q),ot.add(Ot)}else ae(wt,rt,Q),ot.add(wt)}),w.pop(),d=null,ot},this.compileAsync=function(D,j,rt=null){const ot=this.compile(D,j,rt);return new Promise(Q=>{function wt(){if(ot.forEach(function(Ut){St.get(Ut).currentProgram.isReady()&&ot.delete(Ut)}),ot.size===0){Q(D);return}setTimeout(wt,10)}ut.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let hn=null;function Cn(D){hn&&hn(D)}function xc(){fi.stop()}function vc(){fi.start()}const fi=new $u;fi.setAnimationLoop(Cn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(D){hn=D,lt.setAnimationLoop(D),D===null?fi.stop():fi.start()},lt.addEventListener("sessionstart",xc),lt.addEventListener("sessionend",vc),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(j),j=lt.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,j,T),d=it.get(D,w.length),d.init(j),w.push(d),U.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),C.setFromProjectionMatrix(U),O=this.localClippingEnabled,L=$.init(this.clippingPlanes,O),g=Nt.get(D,y.length),g.init(),y.push(g),lt.enabled===!0&&lt.isPresenting===!0){const wt=x.xr.getDepthSensingMesh();wt!==null&&zo(wt,j,-1/0,x.sortObjects)}zo(D,j,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(nt,pt),V=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,V&&dt.addToRenderList(g,D),this.info.render.frame++,L===!0&&$.beginShadows();const rt=d.state.shadowsArray;ct.render(rt,D,j),L===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=g.opaque,Q=g.transmissive;if(d.setupLights(),j.isArrayCamera){const wt=j.cameras;if(Q.length>0)for(let Ut=0,Ot=wt.length;Ut<Ot;Ut++){const Bt=wt[Ut];Sc(ot,Q,D,Bt)}V&&dt.render(D);for(let Ut=0,Ot=wt.length;Ut<Ot;Ut++){const Bt=wt[Ut];yc(g,D,Bt,Bt.viewport)}}else Q.length>0&&Sc(ot,Q,D,j),V&&dt.render(D),yc(g,D,j);T!==null&&(F.updateMultisampleRenderTarget(T),F.updateRenderTargetMipmap(T)),D.isScene===!0&&D.onAfterRender(x,D,j),Wt.resetDefaultState(),v=-1,b=null,w.pop(),w.length>0?(d=w[w.length-1],L===!0&&$.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function zo(D,j,rt,ot){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)rt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)d.pushLight(D),D.castShadow&&d.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||C.intersectsSprite(D)){ot&&H.setFromMatrixPosition(D.matrixWorld).applyMatrix4(U);const Ut=ft.update(D),Ot=D.material;Ot.visible&&g.push(D,Ut,Ot,rt,H.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||C.intersectsObject(D))){const Ut=ft.update(D),Ot=D.material;if(ot&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),H.copy(D.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),H.copy(Ut.boundingSphere.center)),H.applyMatrix4(D.matrixWorld).applyMatrix4(U)),Array.isArray(Ot)){const Bt=Ut.groups;for(let Xt=0,qt=Bt.length;Xt<qt;Xt++){const Gt=Bt[Xt],ne=Ot[Gt.materialIndex];ne&&ne.visible&&g.push(D,Ut,ne,rt,H.z,Gt)}}else Ot.visible&&g.push(D,Ut,Ot,rt,H.z,null)}}const wt=D.children;for(let Ut=0,Ot=wt.length;Ut<Ot;Ut++)zo(wt[Ut],j,rt,ot)}function yc(D,j,rt,ot){const Q=D.opaque,wt=D.transmissive,Ut=D.transparent;d.setupLightsView(rt),L===!0&&$.setGlobalState(x.clippingPlanes,rt),ot&&xt.viewport(A.copy(ot)),Q.length>0&&wr(Q,j,rt),wt.length>0&&wr(wt,j,rt),Ut.length>0&&wr(Ut,j,rt),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Sc(D,j,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ot.id]===void 0&&(d.state.transmissionRenderTarget[ot.id]=new Di(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?vr:Hn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const wt=d.state.transmissionRenderTarget[ot.id],Ut=ot.viewport||A;wt.setSize(Ut.z,Ut.w);const Ot=x.getRenderTarget();x.setRenderTarget(wt),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),V&&dt.render(rt);const Bt=x.toneMapping;x.toneMapping=li;const Xt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),d.setupLightsView(ot),L===!0&&$.setGlobalState(x.clippingPlanes,ot),wr(D,rt,ot),F.updateMultisampleRenderTarget(wt),F.updateRenderTargetMipmap(wt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Gt=0,ne=j.length;Gt<ne;Gt++){const fe=j[Gt],pe=fe.object,Ke=fe.geometry,se=fe.material,Ht=fe.group;if(se.side===de&&pe.layers.test(ot.layers)){const Pn=se.side;se.side=Re,se.needsUpdate=!0,bc(pe,rt,ot,Ke,se,Ht),se.side=Pn,se.needsUpdate=!0,qt=!0}}qt===!0&&(F.updateMultisampleRenderTarget(wt),F.updateRenderTargetMipmap(wt))}x.setRenderTarget(Ot),x.setClearColor(W,Y),Xt!==void 0&&(ot.viewport=Xt),x.toneMapping=Bt}function wr(D,j,rt){const ot=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,wt=D.length;Q<wt;Q++){const Ut=D[Q],Ot=Ut.object,Bt=Ut.geometry,Xt=ot===null?Ut.material:ot,qt=Ut.group;Ot.layers.test(rt.layers)&&bc(Ot,j,rt,Bt,Xt,qt)}}function bc(D,j,rt,ot,Q,wt){D.onBeforeRender(x,j,rt,ot,Q,wt),D.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(x,j,rt,ot,D,wt),Q.transparent===!0&&Q.side===de&&Q.forceSinglePass===!1?(Q.side=Re,Q.needsUpdate=!0,x.renderBufferDirect(rt,j,ot,Q,D,wt),Q.side=hi,Q.needsUpdate=!0,x.renderBufferDirect(rt,j,ot,Q,D,wt),Q.side=de):x.renderBufferDirect(rt,j,ot,Q,D,wt),D.onAfterRender(x,j,rt,ot,Q,wt)}function Er(D,j,rt){j.isScene!==!0&&(j=st);const ot=St.get(D),Q=d.state.lights,wt=d.state.shadowsArray,Ut=Q.state.version,Ot=It.getParameters(D,Q.state,wt,j,rt),Bt=It.getProgramCacheKey(Ot);let Xt=ot.programs;ot.environment=D.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(D.isMeshStandardMaterial?tt:P).get(D.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,Xt===void 0&&(D.addEventListener("dispose",Yt),Xt=new Map,ot.programs=Xt);let qt=Xt.get(Bt);if(qt!==void 0){if(ot.currentProgram===qt&&ot.lightsStateVersion===Ut)return Ec(D,Ot),qt}else Ot.uniforms=It.getUniforms(D),D.onBeforeCompile(Ot,x),qt=It.acquireProgram(Ot,Bt),Xt.set(Bt,qt),ot.uniforms=Ot.uniforms;const Gt=ot.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Gt.clippingPlanes=$.uniform),Ec(D,Ot),ot.needsLights=Wf(D),ot.lightsStateVersion=Ut,ot.needsLights&&(Gt.ambientLightColor.value=Q.state.ambient,Gt.lightProbe.value=Q.state.probe,Gt.directionalLights.value=Q.state.directional,Gt.directionalLightShadows.value=Q.state.directionalShadow,Gt.spotLights.value=Q.state.spot,Gt.spotLightShadows.value=Q.state.spotShadow,Gt.rectAreaLights.value=Q.state.rectArea,Gt.ltc_1.value=Q.state.rectAreaLTC1,Gt.ltc_2.value=Q.state.rectAreaLTC2,Gt.pointLights.value=Q.state.point,Gt.pointLightShadows.value=Q.state.pointShadow,Gt.hemisphereLights.value=Q.state.hemi,Gt.directionalShadowMap.value=Q.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Gt.spotShadowMap.value=Q.state.spotShadowMap,Gt.spotLightMatrix.value=Q.state.spotLightMatrix,Gt.spotLightMap.value=Q.state.spotLightMap,Gt.pointShadowMap.value=Q.state.pointShadowMap,Gt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=qt,ot.uniformsList=null,qt}function wc(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=go.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function Ec(D,j){const rt=St.get(D);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function Vf(D,j,rt,ot,Q){j.isScene!==!0&&(j=st),F.resetTextureUnits();const wt=j.fog,Ut=ot.isMeshStandardMaterial?j.environment:null,Ot=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Cs,Bt=(ot.isMeshStandardMaterial?tt:P).get(ot.envMap||Ut),Xt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,qt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Gt=!!rt.morphAttributes.position,ne=!!rt.morphAttributes.normal,fe=!!rt.morphAttributes.color;let pe=li;ot.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pe=x.toneMapping);const Ke=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,se=Ke!==void 0?Ke.length:0,Ht=St.get(ot),Pn=d.state.lights;if(L===!0&&(O===!0||D!==b)){const rn=D===b&&ot.id===v;$.setState(ot,D,rn)}let re=!1;ot.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Pn.state.version||Ht.outputColorSpace!==Ot||Q.isBatchedMesh&&Ht.batching===!1||!Q.isBatchedMesh&&Ht.batching===!0||Q.isBatchedMesh&&Ht.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ht.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ht.instancing===!1||!Q.isInstancedMesh&&Ht.instancing===!0||Q.isSkinnedMesh&&Ht.skinning===!1||!Q.isSkinnedMesh&&Ht.skinning===!0||Q.isInstancedMesh&&Ht.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ht.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ht.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ht.instancingMorph===!1&&Q.morphTexture!==null||Ht.envMap!==Bt||ot.fog===!0&&Ht.fog!==wt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==$.numPlanes||Ht.numIntersection!==$.numIntersection)||Ht.vertexAlphas!==Xt||Ht.vertexTangents!==qt||Ht.morphTargets!==Gt||Ht.morphNormals!==ne||Ht.morphColors!==fe||Ht.toneMapping!==pe||Ht.morphTargetsCount!==se)&&(re=!0):(re=!0,Ht.__version=ot.version);let un=Ht.currentProgram;re===!0&&(un=Er(ot,j,Q));let Xi=!1,je=!1,Ns=!1;const me=un.getUniforms(),xn=Ht.uniforms;if(xt.useProgram(un.program)&&(Xi=!0,je=!0,Ns=!0),ot.id!==v&&(v=ot.id,je=!0),Xi||b!==D){xt.buffers.depth.getReversed()?(G.copy(D.projectionMatrix),$d(G),jd(G),me.setValue(N,"projectionMatrix",G)):me.setValue(N,"projectionMatrix",D.projectionMatrix),me.setValue(N,"viewMatrix",D.matrixWorldInverse);const Yn=me.map.cameraPosition;Yn!==void 0&&Yn.setValue(N,B.setFromMatrixPosition(D.matrixWorld)),yt.logarithmicDepthBuffer&&me.setValue(N,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&me.setValue(N,"isOrthographic",D.isOrthographicCamera===!0),b!==D&&(b=D,je=!0,Ns=!0)}if(Q.isSkinnedMesh){me.setOptional(N,Q,"bindMatrix"),me.setOptional(N,Q,"bindMatrixInverse");const rn=Q.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),me.setValue(N,"boneTexture",rn.boneTexture,F))}Q.isBatchedMesh&&(me.setOptional(N,Q,"batchingTexture"),me.setValue(N,"batchingTexture",Q._matricesTexture,F),me.setOptional(N,Q,"batchingIdTexture"),me.setValue(N,"batchingIdTexture",Q._indirectTexture,F),me.setOptional(N,Q,"batchingColorTexture"),Q._colorsTexture!==null&&me.setValue(N,"batchingColorTexture",Q._colorsTexture,F));const Fs=rt.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0)&&bt.update(Q,rt,un),(je||Ht.receiveShadow!==Q.receiveShadow)&&(Ht.receiveShadow=Q.receiveShadow,me.setValue(N,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(xn.envMap.value=Bt,xn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&j.environment!==null&&(xn.envMapIntensity.value=j.environmentIntensity),je&&(me.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&kf(xn,Ns),wt&&ot.fog===!0&&At.refreshFogUniforms(xn,wt),At.refreshMaterialUniforms(xn,ot,X,et,d.state.transmissionRenderTarget[D.id]),go.upload(N,wc(Ht),xn,F)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(go.upload(N,wc(Ht),xn,F),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&me.setValue(N,"center",Q.center),me.setValue(N,"modelViewMatrix",Q.modelViewMatrix),me.setValue(N,"normalMatrix",Q.normalMatrix),me.setValue(N,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const rn=ot.uniformsGroups;for(let Yn=0,qn=rn.length;Yn<qn;Yn++){const Ac=rn[Yn];q.update(Ac,un),q.bind(Ac,un)}}return un}function kf(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function Wf(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,j,rt){St.get(D.texture).__webglTexture=j,St.get(D.depthTexture).__webglTexture=rt;const ot=St.get(D);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=rt===void 0,ot.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,j){const rt=St.get(D);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,rt=0){T=D,S=j,E=rt;let ot=!0,Q=null,wt=!1,Ut=!1;if(D){const Bt=St.get(D);if(Bt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(N.FRAMEBUFFER,null),ot=!1;else if(Bt.__webglFramebuffer===void 0)F.setupRenderTarget(D);else if(Bt.__hasExternalTextures)F.rebindTextures(D,St.get(D.texture).__webglTexture,St.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Gt=D.depthTexture;if(Bt.__boundDepthTexture!==Gt){if(Gt!==null&&St.has(Gt)&&(D.width!==Gt.image.width||D.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(D)}}const Xt=D.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ut=!0);const qt=St.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(qt[j])?Q=qt[j][rt]:Q=qt[j],wt=!0):D.samples>0&&F.useMultisampledRTT(D)===!1?Q=St.get(D).__webglMultisampledFramebuffer:Array.isArray(qt)?Q=qt[rt]:Q=qt,A.copy(D.viewport),I.copy(D.scissor),z=D.scissorTest}else A.copy(_t).multiplyScalar(X).floor(),I.copy(ht).multiplyScalar(X).floor(),z=K;if(xt.bindFramebuffer(N.FRAMEBUFFER,Q)&&ot&&xt.drawBuffers(D,Q),xt.viewport(A),xt.scissor(I),xt.setScissorTest(z),wt){const Bt=St.get(D.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,rt)}else if(Ut){const Bt=St.get(D.texture),Xt=j||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.__webglTexture,rt||0,Xt)}v=-1},this.readRenderTargetPixels=function(D,j,rt,ot,Q,wt,Ut){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=St.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){xt.bindFramebuffer(N.FRAMEBUFFER,Ot);try{const Bt=D.texture,Xt=Bt.format,qt=Bt.type;if(!yt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-ot&&rt>=0&&rt<=D.height-Q&&N.readPixels(j,rt,ot,Q,zt.convert(Xt),zt.convert(qt),wt)}finally{const Bt=T!==null?St.get(T).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(D,j,rt,ot,Q,wt,Ut){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=St.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){const Bt=D.texture,Xt=Bt.format,qt=Bt.type;if(!yt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=D.width-ot&&rt>=0&&rt<=D.height-Q){xt.bindFramebuffer(N.FRAMEBUFFER,Ot);const Gt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Gt),N.bufferData(N.PIXEL_PACK_BUFFER,wt.byteLength,N.STREAM_READ),N.readPixels(j,rt,ot,Q,zt.convert(Xt),zt.convert(qt),0);const ne=T!==null?St.get(T).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,ne);const fe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Kd(N,fe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Gt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,wt),N.deleteBuffer(Gt),N.deleteSync(fe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,j=null,rt=0){D.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,D=arguments[1]);const ot=Math.pow(2,-rt),Q=Math.floor(D.image.width*ot),wt=Math.floor(D.image.height*ot),Ut=j!==null?j.x:0,Ot=j!==null?j.y:0;F.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,rt,0,0,Ut,Ot,Q,wt),xt.unbindTexture()},this.copyTextureToTexture=function(D,j,rt=null,ot=null,Q=0){D.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,D=arguments[1],j=arguments[2],Q=arguments[3]||0,rt=null);let wt,Ut,Ot,Bt,Xt,qt,Gt,ne,fe;const pe=D.isCompressedTexture?D.mipmaps[Q]:D.image;rt!==null?(wt=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,Bt=rt.min.x,Xt=rt.min.y,qt=rt.isBox3?rt.min.z:0):(wt=pe.width,Ut=pe.height,Ot=pe.depth||1,Bt=0,Xt=0,qt=0),ot!==null?(Gt=ot.x,ne=ot.y,fe=ot.z):(Gt=0,ne=0,fe=0);const Ke=zt.convert(j.format),se=zt.convert(j.type);let Ht;j.isData3DTexture?(F.setTexture3D(j,0),Ht=N.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(F.setTexture2DArray(j,0),Ht=N.TEXTURE_2D_ARRAY):(F.setTexture2D(j,0),Ht=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment);const Pn=N.getParameter(N.UNPACK_ROW_LENGTH),re=N.getParameter(N.UNPACK_IMAGE_HEIGHT),un=N.getParameter(N.UNPACK_SKIP_PIXELS),Xi=N.getParameter(N.UNPACK_SKIP_ROWS),je=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,pe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qt);const Ns=D.isDataArrayTexture||D.isData3DTexture,me=j.isDataArrayTexture||j.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const xn=St.get(D),Fs=St.get(j),rn=St.get(xn.__renderTarget),Yn=St.get(Fs.__renderTarget);xt.bindFramebuffer(N.READ_FRAMEBUFFER,rn.__webglFramebuffer),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let qn=0;qn<Ot;qn++)Ns&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(D).__webglTexture,Q,qt+qn),D.isDepthTexture?(me&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(j).__webglTexture,Q,fe+qn),N.blitFramebuffer(Bt,Xt,wt,Ut,Gt,ne,wt,Ut,N.DEPTH_BUFFER_BIT,N.NEAREST)):me?N.copyTexSubImage3D(Ht,Q,Gt,ne,fe+qn,Bt,Xt,wt,Ut):N.copyTexSubImage2D(Ht,Q,Gt,ne,fe+qn,Bt,Xt,wt,Ut);xt.bindFramebuffer(N.READ_FRAMEBUFFER,null),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else me?D.isDataTexture||D.isData3DTexture?N.texSubImage3D(Ht,Q,Gt,ne,fe,wt,Ut,Ot,Ke,se,pe.data):j.isCompressedArrayTexture?N.compressedTexSubImage3D(Ht,Q,Gt,ne,fe,wt,Ut,Ot,Ke,pe.data):N.texSubImage3D(Ht,Q,Gt,ne,fe,wt,Ut,Ot,Ke,se,pe):D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Q,Gt,ne,wt,Ut,Ke,se,pe.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Q,Gt,ne,pe.width,pe.height,Ke,pe.data):N.texSubImage2D(N.TEXTURE_2D,Q,Gt,ne,wt,Ut,Ke,se,pe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re),N.pixelStorei(N.UNPACK_SKIP_PIXELS,un),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,je),Q===0&&j.generateMipmaps&&N.generateMipmap(Ht),xt.unbindTexture()},this.copyTextureToTexture3D=function(D,j,rt=null,ot=null,Q=0){return D.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,ot=arguments[1]||null,D=arguments[2],j=arguments[3],Q=arguments[4]||0),Qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,j,rt,ot,Q)},this.initRenderTarget=function(D){St.get(D).__webglFramebuffer===void 0&&F.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?F.setTextureCube(D,0):D.isData3DTexture?F.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?F.setTexture2DArray(D,0):F.setTexture2D(D,0),xt.unbindTexture()},this.resetState=function(){S=0,E=0,T=null,xt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class $l{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new $l(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yl extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class l_ extends We{constructor(t=null,e=1,i=1,s,r,o,a,l,h=nn,u=nn,f,p){super(null,o,a,l,h,u,s,r,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Le extends Ce{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const os=new le,Eh=new le,qr=[],Ah=new Bi,c_=new le,Hs=new Ct,Vs=new Gi;class $t extends Ct{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Le(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,c_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,os),Ah.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(Ah)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,os),Vs.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(i),t.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Eh.multiplyMatrices(i,os),Hs.matrixWorld=Eh,Hs.raycast(t,qr);for(let o=0,a=qr.length;o<a;o++){const l=qr[o];l.instanceId=r,l.object=this,e.push(l)}qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Le(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new l_(new Float32Array(s*this.count),s,this.count,kl,wn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jl extends Hi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xo=new k,vo=new k,Th=new le,ks=new Zl,Zr=new Gi,fa=new k,Rh=new k;class h_ extends Kt{constructor(t=new ye,e=new jl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)xo.fromBufferAttribute(e,s-1),vo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=xo.distanceTo(vo);t.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;Th.copy(s).invert(),ks.copy(t.ray).applyMatrix4(Th);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),M=Math.min(u.count,o.start+o.count);for(let _=m,g=M-1;_<g;_+=h){const d=u.getX(_),y=u.getX(_+1),w=Jr(this,t,ks,l,d,y);w&&e.push(w)}if(this.isLineLoop){const _=u.getX(M-1),g=u.getX(m),d=Jr(this,t,ks,l,_,g);d&&e.push(d)}}else{const m=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let _=m,g=M-1;_<g;_+=h){const d=Jr(this,t,ks,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=Jr(this,t,ks,l,M-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jr(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(xo.fromBufferAttribute(o,s),vo.fromBufferAttribute(o,r),e.distanceSqToSegment(xo,vo,fa,Rh)>i)return;fa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(fa);if(!(l<t.near||l>t.far))return{distance:l,point:Rh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Ch=new k,Ph=new k;class sf extends h_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ch.fromBufferAttribute(e,s),Ph.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ch.distanceTo(Ph);t.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ql extends Hi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lh=new le,Sl=new Zl,Kr=new Gi,$r=new k;class rf extends Kt{constructor(t=new ye,e=new Ql){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Lh.copy(s).invert(),Sl.copy(t.ray).applyMatrix4(Lh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let M=p,_=m;M<_;M++){const g=h.getX(M);$r.fromBufferAttribute(f,g),Ih($r,g,l,s,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let M=p,_=m;M<_;M++)$r.fromBufferAttribute(f,M),Ih($r,M,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ih(n,t,e,i,s,r,o){const a=Sl.distanceSqToPoint(n);if(a<e){const l=new k;Sl.closestPointToPoint(n,l),l.applyMatrix4(i);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class bl extends We{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],p=i[s+1]-u,m=(o-u)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Et:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new k,s=[],r=[],o=[],a=new k,l=new le;for(let m=0;m<=t;m++){const M=m/t;s[m]=this.getTangentAt(M,new k)}r[0]=new k,o[0]=new k;let h=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=h&&(h=u,i.set(1,0,0)),f<=h&&(h=f,i.set(0,1,0)),p<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const M=Math.acos(Fe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,M))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Fe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let M=1;M<=t;M++)r[M].applyMatrix4(l.makeRotationAxis(s[M],m*M)),o[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tc extends Tn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Et){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,m=h-this.aY;l=p*u-m*f+this.aX,h=p*f+m*u+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class u_ extends tc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ec(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,f){let p=(o-r)/h-(a-r)/(h+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+f)+(l-a)/f;p*=u,m*=u,s(o,a,p,m)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const jr=new k,da=new ec,pa=new ec,ma=new ec;class Ei extends Tn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new k){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(jr.subVectors(s[0],s[1]).add(s[0]),h=jr);const f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(u),m);_<1e-4&&(_=1),M<1e-4&&(M=_),g<1e-4&&(g=_),da.initNonuniformCatmullRom(h.x,f.x,p.x,u.x,M,_,g),pa.initNonuniformCatmullRom(h.y,f.y,p.y,u.y,M,_,g),ma.initNonuniformCatmullRom(h.z,f.z,p.z,u.z,M,_,g)}else this.curveType==="catmullrom"&&(da.initCatmullRom(h.x,f.x,p.x,u.x,this.tension),pa.initCatmullRom(h.y,f.y,p.y,u.y,this.tension),ma.initCatmullRom(h.z,f.z,p.z,u.z,this.tension));return i.set(da.calc(l),pa.calc(l),ma.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function f_(n,t){const e=1-n;return e*e*t}function d_(n,t){return 2*(1-n)*n*t}function p_(n,t){return n*n*t}function rr(n,t,e,i){return f_(n,t)+d_(n,e)+p_(n,i)}function m_(n,t){const e=1-n;return e*e*e*t}function g_(n,t){const e=1-n;return 3*e*e*n*t}function M_(n,t){return 3*(1-n)*n*n*t}function __(n,t){return n*n*n*t}function or(n,t,e,i,s){return m_(n,t)+g_(n,e)+M_(n,i)+__(n,s)}class of extends Tn{constructor(t=new Et,e=new Et,i=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Et){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class x_ extends Tn{constructor(t=new k,e=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new k){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y),or(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class af extends Tn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class v_ extends Tn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lf extends Tn{constructor(t=new Et,e=new Et,i=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Et){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cf extends Tn{constructor(t=new k,e=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new k){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y),rr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hf extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Dh(a,l.x,h.x,u.x,f.x),Dh(a,l.y,h.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var yo=Object.freeze({__proto__:null,ArcCurve:u_,CatmullRomCurve3:Ei,CubicBezierCurve:of,CubicBezierCurve3:x_,EllipseCurve:tc,LineCurve:af,LineCurve3:v_,QuadraticBezierCurve:lf,QuadraticBezierCurve3:cf,SplineCurve:hf});class y_ extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const u=l[h];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new yo[s.type]().fromJSON(s))}return this}}class ur extends y_{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new af(this.currentPoint.clone(),new Et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new lf(this.currentPoint.clone(),new Et(t,e),new Et(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new of(this.currentPoint.clone(),new Et(t,e),new Et(i,s),new Et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new hf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const h=new tc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nc extends ye{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],h=[],u=1/e,f=new k,p=new Et,m=new k,M=new k,_=new k;let g=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,m.x=d*1,m.y=-g,m.z=d*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,m.x=d*1,m.y=-g,m.z=d*0,M.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(M)}for(let y=0;y<=e;y++){const w=i+y*u*s,x=Math.sin(w),R=Math.cos(w);for(let S=0;S<=t.length-1;S++){f.x=t[S].x*x,f.y=t[S].y,f.z=t[S].x*R,o.push(f.x,f.y,f.z),p.x=y/e,p.y=S/(t.length-1),a.push(p.x,p.y);const E=l[3*S+0]*x,T=l[3*S+1],v=l[3*S+0]*R;h.push(E,T,v)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){const x=w+y*t.length,R=x,S=x+t.length,E=x+t.length+1,T=x+1;r.push(R,S,T),r.push(E,T,S)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.points,t.segments,t.phiStart,t.phiLength)}}class kn extends nc{constructor(t=1,e=1,i=4,s=8){const r=new ur;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new kn(t.radius,t.length,t.capSegments,t.radialSegments)}}class ic extends ye{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],h=new k,u=new Et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=e;f++,p+=3){const m=i+f/e*s;h.x=t*Math.cos(m),h.y=t*Math.sin(m),o.push(h.x,h.y,h.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Bn extends ye{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],p=[],m=[];let M=0;const _=[],g=i/2;let d=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new jt(f,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(m,2));function y(){const x=new k,R=new k;let S=0;const E=(e-t)/i;for(let T=0;T<=r;T++){const v=[],b=T/r,A=b*(e-t)+t;for(let I=0;I<=s;I++){const z=I/s,W=z*l+a,Y=Math.sin(W),Z=Math.cos(W);R.x=A*Y,R.y=-b*i+g,R.z=A*Z,f.push(R.x,R.y,R.z),x.set(Y,E,Z).normalize(),p.push(x.x,x.y,x.z),m.push(z,1-b),v.push(M++)}_.push(v)}for(let T=0;T<s;T++)for(let v=0;v<r;v++){const b=_[v][T],A=_[v+1][T],I=_[v+1][T+1],z=_[v][T+1];(t>0||v!==0)&&(u.push(b,A,z),S+=3),(e>0||v!==r-1)&&(u.push(A,I,z),S+=3)}h.addGroup(d,S,0),d+=S}function w(x){const R=M,S=new Et,E=new k;let T=0;const v=x===!0?t:e,b=x===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,g*b,0),p.push(0,b,0),m.push(.5,.5),M++;const A=M;for(let I=0;I<=s;I++){const W=I/s*l+a,Y=Math.cos(W),Z=Math.sin(W);E.x=v*Z,E.y=g*b,E.z=v*Y,f.push(E.x,E.y,E.z),p.push(0,b,0),S.x=Y*.5+.5,S.y=Z*.5*b+.5,m.push(S.x,S.y),M++}for(let I=0;I<s;I++){const z=R+I,W=A+I;x===!0?u.push(W,W+1,z):u.push(W+1,W,z),T+=3}h.addGroup(d,T,x===!0?1:2),d+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sc extends ye{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),h(i),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const w=new k,x=new k,R=new k;for(let S=0;S<e.length;S+=3)m(e[S+0],w),m(e[S+1],x),m(e[S+2],R),l(w,x,R,y)}function l(y,w,x,R){const S=R+1,E=[];for(let T=0;T<=S;T++){E[T]=[];const v=y.clone().lerp(x,T/S),b=w.clone().lerp(x,T/S),A=S-T;for(let I=0;I<=A;I++)I===0&&T===S?E[T][I]=v:E[T][I]=v.clone().lerp(b,I/A)}for(let T=0;T<S;T++)for(let v=0;v<2*(S-T)-1;v++){const b=Math.floor(v/2);v%2===0?(p(E[T][b+1]),p(E[T+1][b]),p(E[T][b])):(p(E[T][b+1]),p(E[T+1][b+1]),p(E[T+1][b]))}}function h(y){const w=new k;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(y),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function u(){const y=new k;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];const x=g(y)/2/Math.PI+.5,R=d(y)/Math.PI+.5;o.push(x,1-R)}M(),f()}function f(){for(let y=0;y<o.length;y+=6){const w=o[y+0],x=o[y+2],R=o[y+4],S=Math.max(w,x,R),E=Math.min(w,x,R);S>.9&&E<.1&&(w<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function m(y,w){const x=y*3;w.x=t[x+0],w.y=t[x+1],w.z=t[x+2]}function M(){const y=new k,w=new k,x=new k,R=new k,S=new Et,E=new Et,T=new Et;for(let v=0,b=0;v<r.length;v+=9,b+=6){y.set(r[v+0],r[v+1],r[v+2]),w.set(r[v+3],r[v+4],r[v+5]),x.set(r[v+6],r[v+7],r[v+8]),S.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),T.set(o[b+4],o[b+5]),R.copy(y).add(w).add(x).divideScalar(3);const A=g(R);_(S,b+0,y,A),_(E,b+2,w,A),_(T,b+4,x,A)}}function _(y,w,x,R){R<0&&y.x===1&&(o[w]=y.x-1),x.x===0&&x.z===0&&(o[w]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.vertices,t.indices,t.radius,t.details)}}class Ze extends ur{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ur().fromJSON(s))}return this}}const S_={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=uf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h,u,f,p,m;if(i&&(r=T_(n,t,r,e)),n.length>80*e){a=h=n[0],l=u=n[1];for(let M=e;M<s;M+=e)f=n[M],p=n[M+1],f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p);m=Math.max(h-a,u-l),m=m!==0?32767/m:0}return fr(r,o,e,a,l,m,0),o}};function uf(n,t,e,i,s){let r,o;if(s===O_(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Uh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Uh(r,n[r],n[r+1],o);return o&&Do(o,o.next)&&(pr(o),o=o.next),o}function Fi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Do(e,e.next)||xe(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function fr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&I_(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?w_(n,i,s,r):b_(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),pr(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=E_(Fi(n),t,e),fr(n,t,e,i,s,r,2)):o===2&&A_(n,t,e,i,s,r):fr(Fi(n),t,e,i,s,r,1);break}}}function b_(n){const t=n.prev,e=n,i=n.next;if(xe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,u=s<r?s<o?s:o:r<o?r:o,f=a<l?a<h?a:h:l<h?l:h,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>h?a:h:l>h?l:h;let M=i.next;for(;M!==t;){if(M.x>=u&&M.x<=p&&M.y>=f&&M.y<=m&&gs(s,a,r,l,o,h,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function w_(n,t,e,i){const s=n.prev,r=n,o=n.next;if(xe(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,u=s.y,f=r.y,p=o.y,m=a<l?a<h?a:h:l<h?l:h,M=u<f?u<p?u:p:f<p?f:p,_=a>l?a>h?a:h:l>h?l:h,g=u>f?u>p?u:p:f>p?f:p,d=wl(m,M,t,e,i),y=wl(_,g,t,e,i);let w=n.prevZ,x=n.nextZ;for(;w&&w.z>=d&&x&&x.z<=y;){if(w.x>=m&&w.x<=_&&w.y>=M&&w.y<=g&&w!==s&&w!==o&&gs(a,u,l,f,h,p,w.x,w.y)&&xe(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=m&&x.x<=_&&x.y>=M&&x.y<=g&&x!==s&&x!==o&&gs(a,u,l,f,h,p,x.x,x.y)&&xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=d;){if(w.x>=m&&w.x<=_&&w.y>=M&&w.y<=g&&w!==s&&w!==o&&gs(a,u,l,f,h,p,w.x,w.y)&&xe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=M&&x.y<=g&&x!==s&&x!==o&&gs(a,u,l,f,h,p,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function E_(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Do(s,r)&&ff(s,i,i.next,r)&&dr(s,r)&&dr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),pr(i),pr(i.next),i=n=r),i=i.next}while(i!==n);return Fi(i)}function A_(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&N_(o,a)){let l=df(o,a);o=Fi(o,o.next),l=Fi(l,l.next),fr(o,t,e,i,s,r,0),fr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function T_(n,t,e,i){const s=[];let r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=uf(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(U_(h));for(s.sort(R_),r=0;r<s.length;r++)e=C_(s[r],e);return e}function R_(n,t){return n.x-t.x}function C_(n,t){const e=P_(n,t);if(!e)return t;const i=df(e,n);return Fi(i,i.next),Fi(e,e.next)}function P_(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>i&&(i=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,h=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&gs(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),dr(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&L_(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function L_(n,t){return xe(n.prev,n,t.prev)<0&&xe(t.next,n,n.next)<0}function I_(n,t,e,i){let s=n;do s.z===0&&(s.z=wl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,D_(s)}function D_(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function wl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function U_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function gs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function N_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!F_(n,t)&&(dr(n,t)&&dr(t,n)&&z_(n,t)&&(xe(n.prev,n,t.prev)||xe(n,t.prev,t))||Do(n,t)&&xe(n.prev,n,n.next)>0&&xe(t.prev,t,t.next)>0)}function xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Do(n,t){return n.x===t.x&&n.y===t.y}function ff(n,t,e,i){const s=to(xe(n,t,e)),r=to(xe(n,t,i)),o=to(xe(e,i,n)),a=to(xe(e,i,t));return!!(s!==r&&o!==a||s===0&&Qr(n,e,t)||r===0&&Qr(n,i,t)||o===0&&Qr(e,n,i)||a===0&&Qr(e,t,i))}function Qr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function to(n){return n>0?1:n<0?-1:0}function F_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ff(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function dr(n,t){return xe(n.prev,n,n.next)<0?xe(n,t,n.next)>=0&&xe(n,n.prev,t)>=0:xe(n,t,n.prev)<0||xe(n,n.next,t)<0}function z_(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function df(n,t){const e=new El(n.i,n.x,n.y),i=new El(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Uh(n,t,e,i){const s=new El(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function El(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O_(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class ar{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return ar.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Nh(t),Fh(i,t);let o=t.length;e.forEach(Nh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Fh(i,e[l]);const a=S_.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Nh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Fh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Mn extends ye{constructor(t=new Ze([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,M=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:B_;let w,x=!1,R,S,E,T;d&&(w=d.getSpacedPoints(u),x=!0,p=!1,R=d.computeFrenetFrames(u,!1),S=new k,E=new k,T=new k),p||(g=0,m=0,M=0,_=0);const v=a.extractPoints(h);let b=v.shape;const A=v.holes;if(!ar.isClockWise(b)){b=b.reverse();for(let V=0,J=A.length;V<J;V++){const N=A[V];ar.isClockWise(N)&&(A[V]=N.reverse())}}const z=ar.triangulateShape(b,A),W=b;for(let V=0,J=A.length;V<J;V++){const N=A[V];b=b.concat(N)}function Y(V,J,N){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(J,N)}const Z=b.length,et=z.length;function X(V,J,N){let vt,ut,yt;const xt=V.x-J.x,Ft=V.y-J.y,St=N.x-V.x,F=N.y-V.y,P=xt*xt+Ft*Ft,tt=xt*F-Ft*St;if(Math.abs(tt)>Number.EPSILON){const at=Math.sqrt(P),Mt=Math.sqrt(St*St+F*F),ft=J.x-Ft/at,It=J.y+xt/at,At=N.x-F/Mt,Nt=N.y+St/Mt,it=((At-ft)*F-(Nt-It)*St)/(xt*F-Ft*St);vt=ft+xt*it-V.x,ut=It+Ft*it-V.y;const $=vt*vt+ut*ut;if($<=2)return new Et(vt,ut);yt=Math.sqrt($/2)}else{let at=!1;xt>Number.EPSILON?St>Number.EPSILON&&(at=!0):xt<-Number.EPSILON?St<-Number.EPSILON&&(at=!0):Math.sign(Ft)===Math.sign(F)&&(at=!0),at?(vt=-Ft,ut=xt,yt=Math.sqrt(P)):(vt=xt,ut=Ft,yt=Math.sqrt(P/2))}return new Et(vt/yt,ut/yt)}const nt=[];for(let V=0,J=W.length,N=J-1,vt=V+1;V<J;V++,N++,vt++)N===J&&(N=0),vt===J&&(vt=0),nt[V]=X(W[V],W[N],W[vt]);const pt=[];let _t,ht=nt.concat();for(let V=0,J=A.length;V<J;V++){const N=A[V];_t=[];for(let vt=0,ut=N.length,yt=ut-1,xt=vt+1;vt<ut;vt++,yt++,xt++)yt===ut&&(yt=0),xt===ut&&(xt=0),_t[vt]=X(N[vt],N[yt],N[xt]);pt.push(_t),ht=ht.concat(_t)}for(let V=0;V<g;V++){const J=V/g,N=m*Math.cos(J*Math.PI/2),vt=M*Math.sin(J*Math.PI/2)+_;for(let ut=0,yt=W.length;ut<yt;ut++){const xt=Y(W[ut],nt[ut],vt);G(xt.x,xt.y,-N)}for(let ut=0,yt=A.length;ut<yt;ut++){const xt=A[ut];_t=pt[ut];for(let Ft=0,St=xt.length;Ft<St;Ft++){const F=Y(xt[Ft],_t[Ft],vt);G(F.x,F.y,-N)}}}const K=M+_;for(let V=0;V<Z;V++){const J=p?Y(b[V],ht[V],K):b[V];x?(E.copy(R.normals[0]).multiplyScalar(J.x),S.copy(R.binormals[0]).multiplyScalar(J.y),T.copy(w[0]).add(E).add(S),G(T.x,T.y,T.z)):G(J.x,J.y,0)}for(let V=1;V<=u;V++)for(let J=0;J<Z;J++){const N=p?Y(b[J],ht[J],K):b[J];x?(E.copy(R.normals[V]).multiplyScalar(N.x),S.copy(R.binormals[V]).multiplyScalar(N.y),T.copy(w[V]).add(E).add(S),G(T.x,T.y,T.z)):G(N.x,N.y,f/u*V)}for(let V=g-1;V>=0;V--){const J=V/g,N=m*Math.cos(J*Math.PI/2),vt=M*Math.sin(J*Math.PI/2)+_;for(let ut=0,yt=W.length;ut<yt;ut++){const xt=Y(W[ut],nt[ut],vt);G(xt.x,xt.y,f+N)}for(let ut=0,yt=A.length;ut<yt;ut++){const xt=A[ut];_t=pt[ut];for(let Ft=0,St=xt.length;Ft<St;Ft++){const F=Y(xt[Ft],_t[Ft],vt);x?G(F.x,F.y+w[u-1].y,w[u-1].x+N):G(F.x,F.y,f+N)}}}C(),L();function C(){const V=s.length/3;if(p){let J=0,N=Z*J;for(let vt=0;vt<et;vt++){const ut=z[vt];U(ut[2]+N,ut[1]+N,ut[0]+N)}J=u+g*2,N=Z*J;for(let vt=0;vt<et;vt++){const ut=z[vt];U(ut[0]+N,ut[1]+N,ut[2]+N)}}else{for(let J=0;J<et;J++){const N=z[J];U(N[2],N[1],N[0])}for(let J=0;J<et;J++){const N=z[J];U(N[0]+Z*u,N[1]+Z*u,N[2]+Z*u)}}i.addGroup(V,s.length/3-V,0)}function L(){const V=s.length/3;let J=0;O(W,J),J+=W.length;for(let N=0,vt=A.length;N<vt;N++){const ut=A[N];O(ut,J),J+=ut.length}i.addGroup(V,s.length/3-V,1)}function O(V,J){let N=V.length;for(;--N>=0;){const vt=N;let ut=N-1;ut<0&&(ut=V.length-1);for(let yt=0,xt=u+g*2;yt<xt;yt++){const Ft=Z*yt,St=Z*(yt+1),F=J+vt+Ft,P=J+ut+Ft,tt=J+ut+St,at=J+vt+St;B(F,P,tt,at)}}}function G(V,J,N){l.push(V),l.push(J),l.push(N)}function U(V,J,N){H(V),H(J),H(N);const vt=s.length/3,ut=y.generateTopUV(i,s,vt-3,vt-2,vt-1);st(ut[0]),st(ut[1]),st(ut[2])}function B(V,J,N,vt){H(V),H(J),H(vt),H(J),H(N),H(vt);const ut=s.length/3,yt=y.generateSideWallUV(i,s,ut-6,ut-3,ut-2,ut-1);st(yt[0]),st(yt[1]),st(yt[3]),st(yt[1]),st(yt[2]),st(yt[3])}function H(V){s.push(l[V*3+0]),s.push(l[V*3+1]),s.push(l[V*3+2])}function st(V){r.push(V.x),r.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return G_(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yo[s.type]().fromJSON(s)),new Mn(i,t.options)}}const B_={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],u=t[s*3+1];return[new Et(r,o),new Et(a,l),new Et(h,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],u=t[i*3+1],f=t[i*3+2],p=t[s*3],m=t[s*3+1],M=t[s*3+2],_=t[r*3],g=t[r*3+1],d=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new Et(o,1-l),new Et(h,1-f),new Et(p,1-M),new Et(_,1-d)]:[new Et(a,1-l),new Et(u,1-f),new Et(m,1-M),new Et(g,1-d)]}};function G_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class rc extends sc{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rc(t.radius,t.detail)}}class So extends ye{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],h=[],u=[];let f=t;const p=(e-t)/s,m=new k,M=new Et;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){const d=r+g/i*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),h.push(0,0,1),M.x=(m.x/e+1)/2,M.y=(m.y/e+1)/2,u.push(M.x,M.y)}f+=p}for(let _=0;_<s;_++){const g=_*(i+1);for(let d=0;d<i;d++){const y=d+g,w=y,x=y+i+1,R=y+i+2,S=y+1;a.push(w,x,S),a.push(x,R,S)}}this.setIndex(a),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class kt extends ye{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let h=0;const u=[],f=new k,p=new k,m=[],M=[],_=[],g=[];for(let d=0;d<=i;d++){const y=[],w=d/i;let x=0;d===0&&o===0?x=.5/e:d===i&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const S=R/e;f.x=-t*Math.cos(s+S*r)*Math.sin(o+w*a),f.y=t*Math.cos(o+w*a),f.z=t*Math.sin(s+S*r)*Math.sin(o+w*a),M.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),g.push(S+x,1-w),y.push(h++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<e;y++){const w=u[d][y+1],x=u[d][y],R=u[d+1][y],S=u[d+1][y+1];(d!==0||o>0)&&m.push(w,x,S),(d!==i-1||l<Math.PI)&&m.push(x,R,S)}this.setIndex(m),this.setAttribute("position",new jt(M,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class we extends ye{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],h=[],u=new k,f=new k,p=new k;for(let m=0;m<=i;m++)for(let M=0;M<=s;M++){const _=M/s*r,g=m/i*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),p.subVectors(f,u).normalize(),l.push(p.x,p.y,p.z),h.push(M/s),h.push(m/i)}for(let m=1;m<=i;m++)for(let M=1;M<=s;M++){const _=(s+1)*m+M-1,g=(s+1)*(m-1)+M-1,d=(s+1)*(m-1)+M,y=(s+1)*m+M;o.push(_,g,y),o.push(g,d,y)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class si extends ye{constructor(t=new cf(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,l=new k,h=new Et;let u=new k;const f=[],p=[],m=[],M=[];_(),this.setIndex(M),this.setAttribute("position",new jt(f,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(m,2));function _(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),y(),d()}function g(w){u=t.getPointAt(w/e,u);const x=o.normals[w],R=o.binormals[w];for(let S=0;S<=s;S++){const E=S/s*Math.PI*2,T=Math.sin(E),v=-Math.cos(E);l.x=v*x.x+T*R.x,l.y=v*x.y+T*R.y,l.z=v*x.z+T*R.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function d(){for(let w=1;w<=e;w++)for(let x=1;x<=s;x++){const R=(s+1)*(w-1)+(x-1),S=(s+1)*w+(x-1),E=(s+1)*w+x,T=(s+1)*(w-1)+x;M.push(R,S,T),M.push(S,E,T)}}function y(){for(let w=0;w<=e;w++)for(let x=0;x<=s;x++)h.x=w/e,h.y=x/s,m.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new si(new yo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class H_ extends Hi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bu,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oc extends Kt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ga=new le,zh=new k,Oh=new k;class pf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(zh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bh=new le,Ws=new k,Ma=new k;class V_ extends pf{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ws.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ws),Ma.copy(i.position),Ma.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ma),i.updateMatrixWorld(),s.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh)}}class Al extends oc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new V_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class k_ extends pf{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gh extends oc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new k_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class W_ extends oc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);const mf=64;function Sn(n,t,e=mf){return Number.isFinite(n)&&Number.isFinite(t)&&n>=e&&t>=e}function sn(n,t,e=0,i=0,s=mf){return Sn(n,t,s)?{w:n,h:t}:Sn(e,i,s)?{w:e,h:i}:{w:Math.max(n||0,s),h:Math.max(t||0,s)}}function te(n,t,e,i,s){const{w:r,h:o}=sn(i,s);return new k(n-r*.5,o*.5-t,e||0)}function Wn(n){n.traverse(t=>{t.geometry&&t.geometry.dispose();const e=t.material;if(!e)return;const i=Array.isArray(e)?e:[e];for(const s of i)s.map&&s.map.dispose(),s.dispose()})}function ds(n){for(;n.children.length;){const t=n.children[0];n.remove(t),Wn(t)}}function ve(n,t=10){const e=new ye,i=new Float32Array(n*3),s=new Float32Array(n*3);e.setAttribute("position",new Ce(i,3)),e.setAttribute("color",new Ce(s,3)),e.setDrawRange(0,0);const r=new Ql({size:t,map:X_(),vertexColors:!0,transparent:!0,opacity:.95,blending:Qt,depthWrite:!1,sizeAttenuation:!0}),o=new rf(e,r);return o.frustumCulled=!1,{points:o,geo:e,mat:r,positions:i,colors:s}}function X_(){const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(.7,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const i=new bl(n);return i.needsUpdate=!0,i}function cn(n){return[n.r/255,n.g/255,n.b/255]}function yr(n,t,e,i,s){if(!(n!=null&&n.length)||!Sn(i,s))return;if(!Sn(t,e)){const a=Rn(n.length,i,s);for(let l=0;l<n.length;l++)n[l].x=a[l][0],n[l].y=a[l][1];return}const r=i/t,o=s/e;for(const a of n)a.x*=r,a.y*=o}function Y_(n){if(!n||n.length<6)return 0;const t=n.length/3;let e=1/0,i=-1/0,s=1/0,r=-1/0;for(let o=0;o<t;o++){const a=n[o*3],l=n[o*3+1];!Number.isFinite(a)||!Number.isFinite(l)||(a<e&&(e=a),a>i&&(i=a),l<s&&(s=l),l>r&&(r=l))}return Number.isFinite(e)?Math.max(i-e,r-s):0}function bo(n,t=48){return Y_(n)>=t}function Tl(n,t=48){if(!n||n.length<6)return!0;const e=n.length/3,i=new Set;for(let r=0;r<e;r++){const o=n[r*3],a=n[r*3+1];!Number.isFinite(o)||!Number.isFinite(a)||i.add(`${Math.round(o*2)/2},${Math.round(a*2)/2}`)}const s=Math.min(e,Math.max(t,Math.floor(e*.18)));return i.size<s}function Rl(n,t=48){if(!n||n.length<6||!bo(n,t))return!0;const e=n.length/3;let i=0,s=0,r=0;for(let l=0;l<e;l++){const h=n[l*3],u=n[l*3+1];!Number.isFinite(h)||!Number.isFinite(u)||(i+=h,s+=u,r++)}if(r<2)return!0;i/=r,s/=r;let o=0;for(let l=0;l<e;l++){const h=n[l*3],u=n[l*3+1];if(!Number.isFinite(h)||!Number.isFinite(u))continue;const f=h-i,p=u-s;o=Math.max(o,f*f+p*p)}const a=t*.28;return o<a*a}function gf(n,t,e=48){const{w:i,h:s}=sn(n,t);return Math.max(e,Math.min(i,s)*.22)}function ac(n,t,e,i,s=null){const{w:r,h:o}=sn(e,i),a=gf(r,o),l=Math.min(t,Math.max(48,Math.floor(t*.18)));if(bo(n,a)&&!Rl(n,a)&&!Tl(n,l))return n;const u=(s||An)(t,r,o);return bo(u,a)&&!Rl(u,a)&&!Tl(u,l)?u:An(t,r,o)}function Rn(n,t,e,i=.06,s=null){({w:t,h:e}=sn(t,e));const r=Math.max(1,Math.ceil(Math.sqrt(n*(t/e)))),o=Math.max(1,Math.ceil(n/r)),a=t*i,l=e*i,h=s?s[0]:l,u=s?s[1]:e-l,f=(t-a*2)/r,p=(u-h)/o,m=[];let M=0;for(let _=0;_<o&&M<n;_++)for(let g=0;g<r&&M<n;g++,M++){const d=a+f*(g+.12+Math.random()*.76),y=h+p*(_+.12+Math.random()*.76);m.push([d,y])}return m}function mr(n,t,e,i,s=.14){const{w:r,h:o}=sn(e,i),a=new Float32Array(t*3),l=Math.max(1,n.length/3),h=Rn(t,r,o),u=Math.max(8,Math.min(r,o)/Math.ceil(Math.sqrt(t)));for(let f=0;f<t;f++){const p=Math.floor(Math.random()*l),m=n[p*3],M=n[p*3+1],_=n[p*3+2],[g,d]=h[f],y=te(g+m*s+(Math.random()-.5)*u*.42,d+M*s+(Math.random()-.5)*u*.42,_+(Math.random()-.5)*40,r,o);a[f*3]=y.x,a[f*3+1]=y.y,a[f*3+2]=y.z}return ac(a,t,r,o)}function An(n,t,e){const{w:i,h:s}=sn(t,e),r=new Float32Array(n*3),o=Rn(n,i,s),a=Math.max(8,Math.min(i,s)/Math.ceil(Math.sqrt(n)));for(let l=0;l<n;l++){const[h,u]=o[l],f=(Math.random()-.5)*a*.55,p=(Math.random()-.5)*a*.55,m=te(h+f,u+p,(Math.random()-.5)*80,i,s);r[l*3]=m.x,r[l*3+1]=m.y,r[l*3+2]=m.z}return r}function q_(n,t=36){return Math.max(n.size||0,t)}function Vi(n){for(const t of n)t.maxSize!=null&&(t.growth=1,t.phase="bloomed",t.size=t.maxSize*(.62+Math.random()*.32))}function Sr(n,t,e,i,s=null,r=36){const{w:o,h:a}=sn(e,i),l=s||An,h=n.length;if(h===0)return l(t,o,a);const u=new Float32Array(t*3);for(let f=0;f<t;f++){const p=n[f%h],m=q_(p,r),M=te(p.x+(Math.random()-.5)*m,p.y+(Math.random()-.5)*m,p.z+(Math.random()-.5)*Math.min(m,48),o,a);u[f*3]=M.x,u[f*3+1]=M.y,u[f*3+2]=M.z}return ac(u,t,o,a,l)}const Hh=[[255,255,255],[180,195,255],[120,140,255],[255,182,220],[160,100,255],[160,255,190],[255,160,160],[200,170,90],[42,92,255],[26,72,255],[61,106,255],[48,96,255],[74,56,208],[90,64,224],[104,136,255]],Vh=[[1,1,1],[.85,.88,1],[1,.92,.96],[.75,1,.82],[1,.72,.72],[.9,.78,.4],[.16,.36,1],[.1,.28,1],[.24,.42,1],[.29,.22,.82],[.35,.25,.88],[.4,.53,1]],as=8,xi=28,Z_=.36,J_=.65,kh=.8*J_;function K_(){const n=new yl,t=new Lo(-1,1,1,-1,0,1),e=new Vn({uniforms:{colorA:{value:new Vt("#000510")},colorB:{value:new Vt("#001830")}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),i=new Ct(new Ni(2,2),e);i.frustumCulled=!1,n.add(i);let s=[],r=1,o=1,a=null,l=null,h=null,u=[],f=performance.now(),p=1500+Math.random()*2500;const m=new Kt,M=new Vt;function _(){const U=document.createElement("canvas");U.width=256,U.height=32;const B=U.getContext("2d"),H=B.createLinearGradient(0,0,256,0);H.addColorStop(0,"rgba(255,255,255,0)"),H.addColorStop(.35,"rgba(242,246,255,0.55)"),H.addColorStop(.7,"rgba(255,255,255,0.9)"),H.addColorStop(1,"rgba(255,255,255,1)"),B.fillStyle=H,B.fillRect(0,0,256,32);const st=new bl(U);return st.needsUpdate=!0,st.colorSpace=qe,st}const g=new Ni(1,1),d=new ie({map:_(),transparent:!0,opacity:1,blending:Qt,depthWrite:!1,depthTest:!1,toneMapped:!1,side:de}),y=new $t(g,d,as);y.instanceColor=new Le(new Float32Array(as*3),3),y.frustumCulled=!1,y.renderOrder=2,n.add(y);const w=new ie({map:d.map,transparent:!0,opacity:.35,blending:Qt,depthWrite:!1,depthTest:!1,toneMapped:!1,side:de}),x=new $t(g,w,as);x.instanceColor=new Le(new Float32Array(as*3),3),x.frustumCulled=!1,x.renderOrder=1,n.add(x);let R=[];const S=new Kt,E=new Vt,T=new So(.972,1,96),v=new ie({color:16777215,transparent:!0,opacity:1,blending:Qt,depthWrite:!1,depthTest:!1,toneMapped:!1,side:de}),b=new $t(T,v,xi);b.instanceColor=new Le(new Float32Array(xi*3),3),b.frustumCulled=!1,b.renderOrder=.5,n.add(b);const A=new So(.945,1.02,96),I=new ie({color:16777215,transparent:!0,opacity:1,blending:Qt,depthWrite:!1,depthTest:!1,toneMapped:!1,side:de}),z=new $t(A,I,xi);z.instanceColor=new Le(new Float32Array(xi*3),3),z.frustumCulled=!1,z.renderOrder=.45,n.add(z);for(let U=0;U<xi;U++)S.position.set(0,0,10),S.scale.set(.001,.001,.001),S.rotation.set(0,0,0),S.updateMatrix(),b.setMatrixAt(U,S.matrix),z.setMatrixAt(U,S.matrix),b.setColorAt(U,E.setRGB(0,0,0)),z.setColorAt(U,E.setRGB(0,0,0));b.instanceMatrix.needsUpdate=!0,z.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0),z.instanceColor&&(z.instanceColor.needsUpdate=!0);function W(U,B,H){const st=B*Math.min(H,1-H),V=J=>{const N=(J+U/30)%12;return H-st*Math.max(Math.min(N-3,9-N,1),-1)};return[V(0),V(8),V(4)]}function Y(U,B){return kh*(1-U/B)}function Z(U,B){R.length>=xi&&R.shift();const H=185+Math.random()*25;R.push({x:U,y:B,r:0,maxR:90+Math.random()*70,speed:(1.5+Math.random()*.8)*60,alpha:kh,rgb:W(H,.7,.72)})}function et(U){S.position.set(0,0,10),S.scale.set(.001,.001,.001),S.rotation.set(0,0,0),S.updateMatrix(),b.setMatrixAt(U,S.matrix),z.setMatrixAt(U,S.matrix),b.setColorAt(U,E.setRGB(0,0,0)),z.setColorAt(U,E.setRGB(0,0,0))}function X(U){if(!(r<2||o<2)){Math.random()<Z_*U&&Z(Math.random()*r,Math.random()*o);for(let B=R.length-1;B>=0;B--){const H=R[B];H.r+=H.speed*U,H.alpha=Y(H.r,H.maxR),(H.r>=H.maxR||H.alpha<=0)&&R.splice(B,1)}for(let B=0;B<xi;B++){const H=R[B];if(!H||H.r<1){et(B);continue}const st=pt(H.x,H.y),V=H.r/r*2,J=H.r/o*2,N=Math.max(0,H.alpha),[vt,ut,yt]=H.rgb;S.position.set(st.x,st.y,0),S.rotation.set(0,0,0),S.scale.set(Math.max(V,.001),Math.max(J,.001),1),S.updateMatrix(),b.setMatrixAt(B,S.matrix),b.setColorAt(B,E.setRGB(vt*N*.36,ut*N*.36,yt*N*.36)),S.updateMatrix(),z.setMatrixAt(B,S.matrix),z.setColorAt(B,E.setRGB(vt*N*.09,ut*N*.09,yt*N*.09))}b.instanceMatrix.needsUpdate=!0,z.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0),z.instanceColor&&(z.instanceColor.needsUpdate=!0)}}function nt(){const U=document.createElement("canvas");U.width=U.height=64;const B=U.getContext("2d");B.fillStyle="#ffffff",B.fillRect(24,24,16,16);const H=new bl(U);return H.needsUpdate=!0,H.colorSpace=qe,H}function pt(U,B){return{x:U/r*2-1,y:1-B/o*2}}function _t(U=!1){if(u.length>=as)return;const B=Math.random()<.5;let H,st;B?(H=-150,st=Math.random()*o*.4):(H=Math.random()*r*.5,st=-150);const V=(18+Math.random()*22)*Math.PI/180,J=(U?24:14)+Math.random()*6,N=Vh[Math.floor(Math.random()*Vh.length)];u.push({x:H,y:st,vx:Math.cos(V)*J,vy:Math.sin(V)*J,speed:J,angle:V,length:(U?380:120)+Math.random()*120,width:(U?3:1)+Math.random()*.8,alpha:0,fadeSpeed:U?.28:.18,targetAlpha:(U?.45:.52)+Math.random()*.12,maxLife:(U?45:20)+Math.random()*15,life:0,tint:N})}function ht(U){const B=Math.max(U*60,.001),H=performance.now();H-f>=p&&(_t(),f=H,p=4e3+Math.random()*9e3);for(let st=u.length-1;st>=0;st--){const V=u[st];V.x+=V.vx*B,V.y+=V.vy*B,V.life+=B,V.life>V.maxLife*.6?V.alpha=V.targetAlpha*(1-(V.life-V.maxLife*.6)/(V.maxLife*.4)):V.alpha<V.targetAlpha&&(V.alpha=Math.min(V.targetAlpha,V.alpha+V.fadeSpeed*B)),(V.life>=V.maxLife||V.x<-V.length||V.x>r+V.length||V.y<-V.length||V.y>o+V.length)&&u.splice(st,1)}for(let st=0;st<as;st++){const V=u[st];if(!V){m.position.set(0,0,10),m.scale.set(.001,.001,.001),m.rotation.set(0,0,0),m.updateMatrix(),y.setMatrixAt(st,m.matrix),x.setMatrixAt(st,m.matrix),y.setColorAt(st,M.setRGB(0,0,0)),x.setColorAt(st,M.setRGB(0,0,0));continue}const J=V.x-V.vx*(V.length/V.speed),N=V.y-V.vy*(V.length/V.speed),vt=(V.x+J)*.5,ut=(V.y+N)*.5,yt=pt(V.x,V.y),xt=pt(J,N),Ft=pt(vt,ut),St=yt.x-xt.x,F=yt.y-xt.y,P=Math.sqrt(St*St+F*F)||.001,tt=Math.atan2(F,St),at=V.width/o*2,Mt=Math.max(0,V.alpha),[ft,It,At]=V.tint||[1,1,1];m.position.set(Ft.x,Ft.y,0),m.rotation.set(0,0,tt),m.scale.set(P,Math.max(at,.002),1),m.updateMatrix(),y.setMatrixAt(st,m.matrix),y.setColorAt(st,M.setRGB(Mt*ft,Mt*It,Mt*At)),m.scale.set(P,Math.max(at*1.5,.003),1),m.updateMatrix(),x.setMatrixAt(st,m.matrix),x.setColorAt(st,M.setRGB(Mt*.35*ft,Mt*.35*It,Mt*.4*At))}y.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,y.instanceColor&&(y.instanceColor.needsUpdate=!0),x.instanceColor&&(x.instanceColor.needsUpdate=!0)}function K(U,B){var J;r=Math.max(1,U),o=Math.max(1,B),a&&(n.remove(a),a.geometry.dispose(),(J=a.material.map)==null||J.dispose(),a.material.dispose(),a=null);const H=Math.max(120,Math.floor(r*o/1800));s=[];for(let N=0;N<H;N++){const vt=Hh[Math.floor(Math.random()*Hh.length)];s.push({x:Math.random()*r,y:Math.random()*o,size:.4+Math.random()*2,baseAlpha:.25+Math.random()*.65,twinkleSpeed:.004+Math.random()*.014,phase:Math.random()*Math.PI*2,rgb:vt})}l=new Float32Array(H*3),h=new Float32Array(H*3);const st=new ye;st.setAttribute("position",new Ce(l,3)),st.setAttribute("color",new Ce(h,3));const V=new Ql({size:3.5,map:nt(),vertexColors:!0,transparent:!0,opacity:1,blending:Qt,depthWrite:!1,depthTest:!1,sizeAttenuation:!1,fog:!1,toneMapped:!1});a=new rf(st,V),a.frustumCulled=!1,a.renderOrder=0,n.add(a),C(0,null),R=[];for(let N=0;N<3;N++){Z(Math.random()*r,Math.random()*o);const vt=R[R.length-1];vt.r=Math.random()*40,vt.alpha=Y(vt.r,vt.maxR)}}function C(U,B){if(!a||!s.length)return;const H=r*.5,st=o*.5,V=B&&(B.velocity>.4||B.isDown),J=V?(B.x-H)/Math.max(H,1):0,N=V?(B.y-st)/Math.max(st,1):0;for(let vt=0;vt<s.length;vt++){const ut=s[vt];ut.phase+=ut.twinkleSpeed*(U*60||1);const yt=Math.sin(ut.phase),xt=Math.max(.15,ut.baseAlpha+yt*.22),Ft=J*-18*(ut.size/2),St=N*-18*(ut.size/2),F=pt(ut.x+Ft,ut.y+St);l[vt*3]=F.x,l[vt*3+1]=F.y,l[vt*3+2]=0,h[vt*3]=ut.rgb[0]/255*xt,h[vt*3+1]=ut.rgb[1]/255*xt,h[vt*3+2]=ut.rgb[2]/255*xt}a.geometry.attributes.position.needsUpdate=!0,a.geometry.attributes.color.needsUpdate=!0,a.material.size=Math.max(2.5,Math.min(5.5,2.2*(window.devicePixelRatio||1)))}function L(U,B,H,st){(H!==r||st!==o||!a)&&K(H,st),C(U,B),ht(U),X(U)}function O(U){U.render(n,t)}function G(){var U,B;a&&(n.remove(a),a.geometry.dispose(),(U=a.material.map)==null||U.dispose(),a.material.dispose(),a=null),n.remove(y,x,i,b,z),g.dispose(),(B=d.map)==null||B.dispose(),d.dispose(),w.dispose(),T.dispose(),A.dispose(),v.dispose(),I.dispose(),i.geometry.dispose(),e.dispose(),R=[]}return{bgColor:1296,resize(U,B){K(U,B)},update:L,render:O,dispose:G}}function $_(){return{x:0,y:0,prevX:0,prevY:0,isDown:!1,velocity:0}}function j_(n,t,e){const i=(s,r,o=!1)=>{if(o){t.prevX=s,t.prevY=r,t.x=s,t.y=r,t.velocity=0;return}t.prevX=t.x,t.prevY=t.y,t.x=s,t.y=r;const a=s-t.prevX,l=r-t.prevY;t.velocity=Math.sqrt(a*a+l*l)};n.addEventListener("mousemove",s=>{var r;i(s.clientX,s.clientY),(r=e.onPointerMove)==null||r.call(e,s.clientX,s.clientY,t)}),n.addEventListener("mousedown",s=>{var r;t.isDown=!0,i(s.clientX,s.clientY,!0),(r=e.onPointerDown)==null||r.call(e,s.clientX,s.clientY,t)}),window.addEventListener("mouseup",()=>{var s;t.isDown=!1,(s=e.onPointerUp)==null||s.call(e,t)}),n.addEventListener("touchstart",s=>{var o;s.preventDefault();const r=s.touches[0];t.isDown=!0,i(r.clientX,r.clientY,!0),(o=e.onPointerDown)==null||o.call(e,r.clientX,r.clientY,t)},{passive:!1}),n.addEventListener("touchmove",s=>{var o;s.preventDefault();const r=s.touches[0];i(r.clientX,r.clientY),(o=e.onPointerMove)==null||o.call(e,r.clientX,r.clientY,t)},{passive:!1}),n.addEventListener("touchend",s=>{var r;s.preventDefault(),t.isDown=!1,(r=e.onPointerUp)==null||r.call(e,t)},{passive:!1})}function _a(n){return n&&{...n,velocity:0,prevX:n.x,prevY:n.y}}class Q_{constructor(t){this.canvas=t,this.renderer=new a_({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setClearColor(1296,1),this.renderer.autoClear=!1,this.renderer.outputColorSpace=qe,this.scene=new yl,this.scene.fog=new $l(1296,7e-4),this.camera=new en(55,1,1,5e3),this.starfield=K_(),this.layer=new ue,this.scene.add(this.layer),this._bgColor=this.starfield.bgColor,this._forceClear=!0,this._fadeCamera=new Lo(-1,1,1,-1,0,1),this._fadeScene=new yl,this._fadeMaterial=new ie({color:this._bgColor,transparent:!0,opacity:.15,depthTest:!1,depthWrite:!1}),this._fadeScene.add(new Ct(new Ni(2,2),this._fadeMaterial));const e=new W_(9480408,.55),i=new Al(16777215,1.6,3200);i.position.set(160,240,480);const s=new Gh(11061503,.85);s.position.set(-280,120,260);const r=new Gh(6987007,.55);r.position.set(80,-40,-320),this.scene.add(e,i,s,r),this.activePreset=null,this.running=!1,this.lastTime=0,this.frameCount=0,this._elapsed=0,this.fps=60,this._fpsTimer=0,this._fpsFrames=0,this.pointer=$_(),this.params={particleCount:1030,particleSize:15,speed:2.6,trail:.49,gravity:0,palette:"rainbow"},this.audioData={volume:0,bass:0,mid:0,treble:0,isActive:!1,frequencyData:null,waveformData:null},this.width=0,this.height=0,this._lastGoodWidth=0,this._lastGoodHeight=0,this._resizePending=!1,this._resize(),this._bindEvents()}_readViewportSize(){const t=window.visualViewport,e=Math.round((t==null?void 0:t.width)??window.innerWidth),i=Math.round((t==null?void 0:t.height)??window.innerHeight);return{w:e,h:i}}_applyViewportSize(t,e){return t<64||e<64?this._lastGoodWidth>=64&&this._lastGoodHeight>=64?{w:this._lastGoodWidth,h:this._lastGoodHeight,applied:!1}:{w:0,h:0,applied:!1}:(this._lastGoodWidth=t,this._lastGoodHeight=e,this.pointer.x===0&&this.pointer.y===0&&(this.pointer.x=t*.5,this.pointer.y=e*.5,this.pointer.prevX=this.pointer.x,this.pointer.prevY=this.pointer.y),{w:t,h:e,applied:!0})}_fitCamera(){const t=Zd.degToRad(this.camera.fov);this.camera.position.set(0,0,this.height/(2*Math.tan(t/2))),this.camera.lookAt(0,0,0)}_resize(){var o,a,l,h;const t=this._readViewportSize(),{w:e,h:i,applied:s}=this._applyViewportSize(t.w,t.h);if(!s&&(e<64||i<64)){this._resizePending=!0;return}this._resizePending=!1;const r=Math.min(window.devicePixelRatio||1,2);this.width=e,this.height=i,this.renderer.setPixelRatio(r),this.renderer.setSize(this.width,this.height,!1),this.camera.aspect=this.width/Math.max(this.height,1),this.camera.updateProjectionMatrix(),this._fitCamera(),this._forceClear=!0,(a=(o=this.starfield)==null?void 0:o.resize)==null||a.call(o,this.width,this.height),(h=(l=this.activePreset)==null?void 0:l.resize)==null||h.call(l,this.width,this.height)}_bindEvents(){var i;let t;const e=()=>{clearTimeout(t),t=setTimeout(()=>this._resize(),100)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e),(i=window.visualViewport)==null||i.addEventListener("resize",e),j_(this.canvas,this.pointer,{onPointerMove:(s,r,o)=>{var a,l;(l=(a=this.activePreset)==null?void 0:a.onPointerMove)==null||l.call(a,s,r,o)},onPointerDown:(s,r,o)=>{var a,l;(l=(a=this.activePreset)==null?void 0:a.onPointerDown)==null||l.call(a,s,r,o)},onPointerUp:s=>{var r,o;(o=(r=this.activePreset)==null?void 0:r.onPointerUp)==null||o.call(r,s)}})}setPreset(t){var e,i;(e=this.activePreset)!=null&&e.destroy&&this.activePreset.destroy(),ds(this.layer),this._forceClear=!0,this.activePreset=t,(i=this.activePreset)!=null&&i.init&&this.activePreset.init(this.width,this.height,this.params,this.layer)}setParams(t){var e,i;Object.assign(this.params,t),(i=(e=this.activePreset)==null?void 0:e.setParams)==null||i.call(e,this.params)}setAudioData(t){this.audioData=t}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this._loop())}stop(){this.running=!1}_loop(){var i,s,r,o;if(!this.running)return;const t=performance.now(),e=Math.min((t-this.lastTime)/1e3,.05);if(this.lastTime=t,this._elapsed+=e,this._fpsFrames++,this._fpsTimer+=e,this._fpsTimer>=.5&&(this.fps=Math.round(this._fpsFrames/this._fpsTimer),this._fpsFrames=0,this._fpsTimer=0),this._resizePending){const a=this._readViewportSize(),{applied:l}=this._applyViewportSize(a.w,a.h);l&&this._resize()}this.layer.rotation.y=Math.sin(this._elapsed*.17)*.28,this.layer.rotation.x=Math.sin(this._elapsed*.11)*.1,(s=(i=this.starfield)==null?void 0:i.update)==null||s.call(i,e,this.pointer,this.width,this.height),this.activePreset&&(this.activePreset.update(e,this.pointer,this.audioData,this.params),(o=(r=this.activePreset).render)==null||o.call(r,this.layer,this.width,this.height,this.params)),this._renderWithTrail(),this.frameCount++,requestAnimationFrame(()=>this._loop())}_renderWithTrail(){var i,s;const e=1-(this.params.trail??0);this._forceClear||e>=.999?(this.renderer.setClearColor(this._bgColor,1),this.renderer.clear(!0,!0,!0),this._forceClear=!1):(this.renderer.clearDepth(),e>.001&&(this._fadeMaterial.opacity=e,this.renderer.render(this._fadeScene,this._fadeCamera))),(s=(i=this.starfield)==null?void 0:i.render)==null||s.call(i,this.renderer),this.renderer.clearDepth(),this.renderer.render(this.scene,this.camera)}}const Wh={rainbow:["#f850ec","#2a5cff","#26f4b0","#3d6aff","#7a48e8","#f820b8","#30ec70","#f83058","#1a48ff","#2458ff","#2e68ff","#3868ff","#4a78ff","#1e40f0","#3060ff","#4870ff","#5878ff","#6888ff","#3a28c0","#4a38d0","#5a40e0","#6a48e8","#2a20a8","#4830c8"],clockRainbow:["#ff2a4a","#ff6a00","#ffd400","#2ee86a","#00d8ff","#3d6aff","#8b4dff","#ff2bd6"],cyberNeon:["#f850ec","#2a5cff","#26f4b0","#3d6aff","#7a48e8","#f820b8","#30ec70","#f83058","#1a48ff","#2458ff","#2e68ff","#3868ff","#4a78ff","#1e40f0","#3060ff","#4870ff","#5878ff","#6888ff","#3a28c0","#4a38d0","#5a40e0","#6a48e8","#2a20a8","#4830c8"],midnight:["#2a5cff","#1a48ff","#3d6aff","#4a38d0","#3060ff","#5a40e0"],silver:["#c8d0f8","#a0a8e8","#b8c0f0","#989fe0","#d0d8ff"],atmosphere:["#2a5cff","#1a48ff","#3d6aff","#4870ff","#3060ff"],sakura:["#f870b8","#f888c8","#28ec80","#68f4ac","#f850ac"],nebula:["#6a48e8","#4a38d0","#3a28c0","#8a60f0","#5a40e0"],crystal:["#2a5cff","#1a48ff","#3d6aff","#4870ff","#6888ff"],amber:["#f0b818","#f0a400","#f08018","#f06010","#f0c830"],shiny:["#f838ec","#b808f8","#ec80e0","#f860f0","#f828cc"]};function Je(n){return Wh[n]||Wh.rainbow}function Be(n){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:{r:94,g:187,b:255}}function zi(n,t=.07){const e=Math.max(n.r,n.g,n.b),i=Math.min(n.r,n.g,n.b),s=(e+i)*.5;return{r:Math.min(255,Math.max(0,Math.round(s+(n.r-s)*(1+t)))),g:Math.min(255,Math.max(0,Math.round(s+(n.g-s)*(1+t)))),b:Math.min(255,Math.max(0,Math.round(s+(n.b-s)*(1+t))))}}function lc(n){const t=Math.max(n.r,n.g,n.b),e=Math.min(n.r,n.g,n.b);if((t===0?0:(t-e)/t)>.35&&t>80)return n.b>n.r&&n.b>n.g?{r:Math.min(255,Math.round(n.r*.95)),g:Math.min(255,Math.round(n.g*.72)),b:Math.min(255,Math.round(n.b*1.08+8))}:zi(n,.05);const s=Math.min(255,Math.round(n.b*1.08+16));return{r:Math.min(Math.round(n.r*.7),Math.round(s*.55)),g:Math.min(Math.round(n.g*.55),Math.round(s*.4)),b:s}}function tx(n){const t=Math.max(n.r,n.g,n.b),e=Math.min(n.r,n.g,n.b);return(t===0?0:(t-e)/t)>.35&&t>80?n.b>n.r&&n.b>n.g?{r:Math.min(255,Math.round(n.r*.92)),g:Math.min(255,Math.round(n.g*.78)),b:Math.min(255,Math.round(n.b*1.12+10))}:zi(n,.04):zi(n,.06)}function Mf(n){const t=lc(n),e=zi(t,.05);return{r:Math.min(255,Math.round(e.r*1.06+5)),g:Math.min(255,Math.round(e.g*1.05+3)),b:Math.min(255,Math.round(e.b*1.06+5))}}function _f(n){return zi(tx(n),.14)}function ex(n){const t=lc(n);return{r:Math.min(255,t.r+18),g:Math.min(255,t.g+14),b:Math.min(255,t.b+18)}}function xf(n){const t=_f(n);return{r:Math.min(255,t.r+18),g:Math.min(255,t.g+14),b:Math.min(255,t.b+18)}}function Ts(n,t=1.15){return{r:Math.min(255,Math.round(n.r*t)),g:Math.min(255,Math.round(n.g*t)),b:Math.min(255,Math.round(n.b*t))}}function xa(n,t=1){const e=zi(lc(n),.03);return{r:Math.min(1,e.r/255*t),g:Math.min(1,e.g/255*t),b:Math.min(1,e.b/255*t)}}function Pi(n,t=1){const e=zi(n,.08);return{r:Math.min(1,e.r/255*t),g:Math.min(1,e.g/255*t),b:Math.min(1,e.b/255*t)}}function cc(n){const t=Je(n).filter(r=>{const{r:o,g:a,b:l}=Be(r),h=o>230&&a>230&&l>230,u=o>220&&a>210&&l>180&&Math.min(o,a,l)>170;return!h&&!u}),e=t.length?t:Je(n),i=[];for(const r of e){const{r:o,g:a,b:l}=Be(r),h=o>150&&a>110&&l<150&&o+a>l*2.4,u=l>200&&a<140&&o<120&&l>a*1.5,f=l>160&&o>40&&o<140&&a<o*.9&&l>o,p=l>150&&a>l*.7&&a>o,m=u||f?6:p||h?1:2;for(let M=0;M<m;M++)i.push(r)}const s=i.length?i:e;return s[Math.floor(Math.random()*s.length)]}function hc(n,t=Mf){const e=Je(n);return t(Be(e[Math.floor(Math.random()*e.length)]))}function nx(n){return Mf(Be(n))}function vf(n){return _f(Be(n))}function yf(){const n=Math.random();return n<.1?58+Math.random()*42:n<.28?40+Math.random()*22:20+Math.random()*24}function ix(){const n=Math.random();return n<.1?58+Math.random()*42:n<.28?40+Math.random()*22:22+Math.random()*26}function sx(){const n=Math.random();return n<.1?58+Math.random()*42:n<.28?40+Math.random()*22:20+Math.random()*24}function rx(){const n=Math.random();return n<.12?68+Math.random()*30:n<.35?44+Math.random()*20:30+Math.random()*16}function ox(){return Math.random()<.28?32+Math.random()*16:19+Math.random()*20}function ax(){return yf()*.58}function Sf(n,t=90){const e=new Float32Array(n*3),i=6;for(let s=0;s<n;s++){const o=s%i/i*Math.PI*2,a=Math.random(),l=Math.pow(a,.65),h=Math.sin(Math.PI*l)*(.22+Math.random()*.12),u=(Math.random()-.5)*2,f=l*t,p=Math.sin(o)*f+Math.cos(o)*u*h*t,m=Math.cos(o)*f-Math.sin(o)*u*h*t,M=(Math.random()-.5)*18*(1-l);e[s*3]=p,e[s*3+1]=m,e[s*3+2]=M}return e}function bf(n,t=130){const e=new Float32Array(n*3);for(let i=0;i<n;i++)if(i<n*.25){const s=Math.random()*Math.PI*2,r=(Math.random()-.5)*t*.7,o=8+Math.random()*14;e[i*3]=Math.cos(s)*o,e[i*3+1]=r,e[i*3+2]=Math.sin(s)*o*.5}else{const s=Math.random()<.5?-1:1,r=Math.random(),o=Math.sin(r*Math.PI)*t*(.35+Math.random()*.35);e[i*3]=s*(t*.12+r*t*.7),e[i*3+1]=(Math.random()-.5)*o*.9+t*.1,e[i*3+2]=(Math.random()-.5)*20-r*10}return e}function lx(){let n=[],t=[],e=[],i=0,s=0,r=0,o="rainbow",a=null,l=null,h=null,u=null,f=null;const p=new Kt,m=new Vt,M=64,_=8,g=M*_,d=1.22,y=2.3,w=.85;class x{constructor(E,T,v){this.x=E,this.y=T,this.z=(Math.random()-.5)*160,this.petalCount=5+Math.floor(Math.random()*4),this.maxSize=18+Math.random()*28,this.size=0,this.growth=0,this.growthRate=(.4+Math.random()*.6)*d,this.rotation=Math.random()*Math.PI*2,this.rotSpeed=(Math.random()-.5)*.3,this.tilt=(Math.random()-.5)*.7,this.windPhase=Math.random()*Math.PI*2,this.windSpeed=.7+Math.random()*.55,this.windAmp=.12+Math.random()*.1,this.color=cc(v),this.rgb=nx(this.color),this.lifetime=0,this.maxLifetime=3.5+Math.random()*4,this.phase="growing",this.opacity=1,this.innerRgb=ex(this.rgb),this.bloomedAt=null}_canShedParticles(){return this.bloomedAt==null?!1:this.lifetime-this.bloomedAt>=w}update(E){switch(this.lifetime+=E,this.rotation+=this.rotSpeed*E,this.phase){case"growing":this.growth=Math.min(1,this.growth+this.growthRate*E),this.size=this.maxSize*this._easeOutBack(this.growth),this.growth>=1&&(this.phase="bloomed",this.bloomedAt=this.lifetime);break;case"bloomed":this.bloomedAt==null&&(this.bloomedAt=this.lifetime),this._canShedParticles()&&Math.random()<E*2.4&&this._shedDust(),this.lifetime>this.maxLifetime*.5&&(this.phase="wilting");break;case"wilting":this.opacity-=E*.28,this._canShedParticles()&&Math.random()<E*5.6&&this._shedPetal(),this._canShedParticles()&&Math.random()<E*7.5&&this._shedDust();break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_easeOutBack(E){return 1+2.70158*Math.pow(E-1,3)+1.70158*Math.pow(E-1,2)}_shedPetal(){const E=2+Math.floor(Math.random()*3);for(let T=0;T<E;T++)t.push({x:this.x+(Math.random()-.5)*this.size*1.2,y:this.y+(Math.random()-.5)*this.size*1.2,z:this.z+(Math.random()-.5)*40,vx:(Math.random()-.5)*70,vy:-20-Math.random()*45,vz:(Math.random()-.5)*45,size:this.size*.18+Math.random()*8,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*6,color:this.color,rgb:Ts(this.rgb,1.2),opacity:1,glow:1.45+Math.random()*.3,kind:"petal"})}_shedDust(){const E=3+Math.floor(Math.random()*4);for(let T=0;T<E;T++)t.push({x:this.x+(Math.random()-.5)*this.size*.6,y:this.y+(Math.random()-.5)*this.size*.6,z:this.z+(Math.random()-.5)*30,vx:(Math.random()-.5)*90,vy:(Math.random()-.5)*90-10,vz:(Math.random()-.5)*60,size:2+Math.random()*5,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*8,color:this.color,rgb:Ts(this.innerRgb||this.rgb,1.25),opacity:1,glow:1.55+Math.random()*.35,kind:"dust"})}}function R(){if(!l)return;const S=Math.min(n.length,M);let E=0;for(let T=0;T<M;T++){const v=T<S?n[T]:null,b=v?te(v.x,v.y,v.z,i,s):null;for(let A=0;A<_;A++){if(!v||A>=v.petalCount||v.size<.5)p.position.set(0,0,-4e3),p.scale.set(.001,.001,.001);else{const I=Math.sin(r*v.windSpeed+v.windPhase),z=Math.sin(r*v.windSpeed*1.37+v.windPhase*1.2),W=I*v.windAmp,Y=z*v.windAmp*.85,Z=Math.sin(r*v.windSpeed*1.8+v.windPhase+A*.9)*v.windAmp*.9,et=A/v.petalCount*Math.PI*2+v.rotation;p.position.copy(b),p.position.x+=W*v.size*.22,p.position.z+=Y*v.size*.16,p.rotation.set(v.tilt+W*1.6+Z,et+Y*.55,Math.PI*.35+Z*1.1),p.translateY(v.size*.45),p.scale.set(v.size*.42,v.size*(.95+Z*.18),1)}if(p.updateMatrix(),l.setMatrixAt(E,p.matrix),v){const I=xa(v.rgb,.75+v.opacity*.45);l.setColorAt(E,m.setRGB(I.r,I.g,I.b))}else l.setColorAt(E,m.setRGB(0,0,0));E++}if(v&&h){const A=Math.sin(r*v.windSpeed+v.windPhase),I=Math.sin(r*v.windSpeed*1.37+v.windPhase*1.2);p.position.copy(b),p.position.x+=A*v.windAmp*v.size*.16,p.position.z+=I*v.windAmp*v.size*.12,p.rotation.set(A*v.windAmp*1.1,0,I*v.windAmp*.8),p.scale.setScalar(Math.max(v.size*.18,.01)),p.updateMatrix(),h.setMatrixAt(T,p.matrix);const z=xa(v.rgb,.65);h.setColorAt(T,m.setRGB(z.r*.82,z.g*.7,z.b))}else h&&(p.position.set(0,0,-4e3),p.scale.setScalar(.001),p.updateMatrix(),h.setMatrixAt(T,p.matrix))}if(l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),h&&(h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0)),u&&(e.forEach((T,v)=>{const b=te(T.x,T.y,T.z,i,s);u.positions[v*3]=b.x,u.positions[v*3+1]=b.y,u.positions[v*3+2]=b.z;const A=.25+.3*Math.abs(Math.sin(r*2.8+T.phase)),I=xa(T.rgb,A);u.colors[v*3]=I.r,u.colors[v*3+1]=I.g,u.colors[v*3+2]=I.b}),u.geo.setDrawRange(0,e.length),u.geo.attributes.position.needsUpdate=!0,u.geo.attributes.color.needsUpdate=!0),f){const T=Math.min(t.length,900);for(let v=0;v<T;v++){const b=t[v],A=te(b.x,b.y,b.z,i,s);f.positions[v*3]=A.x,f.positions[v*3+1]=A.y,f.positions[v*3+2]=A.z;const[I,z,W]=cn(b.rgb),Y=(b.glow||1.4)*(.5+b.opacity*.55),Z=b.kind==="dust"?.9+.1*Math.sin(r*8+b.rot*3):1;f.colors[v*3]=Math.min(1,I*Y*Z),f.colors[v*3+1]=Math.min(1,z*Y*Z),f.colors[v*3+2]=Math.min(1,W*Y*Z)}f.geo.setDrawRange(0,T),f.geo.attributes.position.needsUpdate=!0,f.geo.attributes.color.needsUpdate=!0}}return{init(S,E,T,v){i=S,s=E,o=T.palette||"rainbow",n=[],t=[],e=[],r=0,a=v;const b=new ic(.55,10);b.translate(0,.45,0);const A=new ie({color:16777215,transparent:!0,opacity:.9,side:de,depthWrite:!1,blending:Qt});l=new $t(b,A,g),l.instanceColor=new Le(new Float32Array(g*3),3),l.frustumCulled=!1,a.add(l);const I=new kt(1,8,8),z=new ie({color:16777215,transparent:!0,opacity:.62,depthWrite:!1,blending:Qt});h=new $t(I,z,M),h.instanceColor=new Le(new Float32Array(M*3),3),h.frustumCulled=!1,a.add(h),u=ve(160,6),f=ve(900,18),f.mat.opacity=1,a.add(u.points,f.points);for(const[W,Y]of Rn(20,S,E))n.push(new x(W,Y,o));Vi(n),R();for(let W=0;W<120;W++)e.push({x:Math.random()*S,y:Math.random()*E,z:(Math.random()-.5)*220,size:.5+Math.random()*1.8,speedY:-(.08+Math.random()*.25),phase:Math.random()*Math.PI*2,rgb:hc(o)})},resize(S,E){yr(n,i,s,S,E),i=S,s=E},update(S,E,T,v){if(r+=S,o=v.palette,n=n.filter(A=>A.update(S)),E.velocity>3){const A=Math.min(2,Math.floor(E.velocity/16)+1);for(let I=0;I<A;I++)n.push(new x(E.x+(Math.random()-.5)*50,E.y+(Math.random()-.5)*50,o))}if(Math.random()<S*y*v.speed&&n.push(new x(Math.random()*i,Math.random()*s,o)),T.isActive&&T.bass>.3){const A=Math.floor(T.bass*4);for(let I=0;I<A;I++)n.push(new x(Math.random()*i,Math.random()*s,o))}t=t.filter(A=>{A.x+=A.vx*S,A.y+=A.vy*S,A.z+=A.vz*S,A.vy+=18*S,A.vx+=Math.sin(r*2.5+A.x*.008)*18*S,A.vz+=Math.cos(r*2.2+A.y*.01)*12*S,A.rot+=A.rotSpeed*S;const I=A.kind==="dust"?.14:.1;return A.opacity-=S*I,A.glow=Math.max(1.2,(A.glow||1.4)-S*.08),A.opacity>.02&&A.y<s+80}),e.forEach(A=>{A.y+=A.speedY*v.speed*72*S,A.x+=Math.sin(r*1.5+A.phase)*.25,A.y<-10&&(A.y=s+10,A.x=Math.random()*i)});const b=Math.min(M,Math.max(20,Math.floor(v.particleCount/4)));n.length>b&&n.splice(0,n.length-b),t.length>900&&t.splice(0,t.length-900)},render(){R(),l&&(l.material.opacity=.88)},onPointerDown(S,E){for(let T=0;T<6;T++)n.push(new x(S+(Math.random()-.5)*90,E+(Math.random()-.5)*90,o))},onPointerMove(){},onPointerUp(){},samplePoints(S,E=i,T=s){const{w:v,h:b}=sn(E,T,i,s);return Sr(n,S,v,b,(I,z,W)=>mr(Sf(I,95),I,z,W,.12))},setParams(S){o=S.palette},destroy(){n=[],t=[],e=[],l=null,h=null,u=null,f=null,a=null}}}function ti(n){const t=Math.sin(n*127.1)*43758.5453;return t-Math.floor(t)}function ls(n,t,e){const i=Math.floor(n),s=Math.floor(t),r=Math.floor(e),o=n-i,a=t-s,l=e-r,h=o*o*(3-2*o),u=a*a*(3-2*a),f=l*l*(3-2*l),p=ti(i+s*57+r*113),m=ti(i+1+s*57+r*113),M=ti(i+(s+1)*57+r*113),_=ti(i+1+(s+1)*57+r*113),g=ti(i+s*57+(r+1)*113),d=ti(i+1+s*57+(r+1)*113),y=ti(i+(s+1)*57+(r+1)*113),w=ti(i+1+(s+1)*57+(r+1)*113),x=p*(1-h)+m*h,R=M*(1-h)+_*h,S=g*(1-h)+d*h,E=y*(1-h)+w*h,T=x*(1-u)+R*u,v=S*(1-u)+E*u;return T*(1-f)+v*f}function cx(n,t,e,i){const r=ls(n,t+.15,e+i),o=ls(n,t-.15,e+i),a=ls(n+.15,t,e+i),l=ls(n-.15,t,e+i),h=ls(n+i*.3,t,e+.15),u=ls(n+i*.3,t,e-.15);return{x:r-o-(h-u),y:h-u-(a-l),z:a-l-(r-o)}}function hx(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function ux(n,t,e,i,s,r="swarm"){if(!t||!e||t.length!==n.length||e.length!==n.length)return;const o=n.length/3,a=Math.min(1,Math.max(0,i)),l=hx(a),h=1-Math.abs(a-.5)*2;let u=h*28;r==="burst"&&(u=h*55),r==="trail"&&(u=h*18);for(let f=0;f<o;f++){const p=f*3,m=t[p],M=t[p+1],_=t[p+2],g=e[p],d=e[p+1],y=e[p+2],w=m+(g-m)*l,x=M+(d-M)*l,R=_+(y-_)*l,S=cx(w*.02+f*.001,x*.02,R*.02,s*.35);let E=S.x*u,T=S.y*u,v=S.z*u;if(r==="trail")T+=Math.sin(s*2+f*.05)*h*8,E+=(g-m)*h*.08;else if(r==="burst"){const b=Math.sqrt(w*w+x*x+R*R)||1;E+=w/b*h*35,T+=x/b*h*35,v+=R/b*h*20}n[p]=w+E,n[p+1]=x+T,n[p+2]=R+v}}function fx(){let n=null;function t(){n||(n=document.createElement("div"),n.id="morphStageLabel",n.style.cssText=["position:fixed","left:50%","bottom:92px","transform:translateX(-50%)","z-index:20","pointer-events:none","font-family:Outfit,Noto Sans JP,sans-serif","font-size:13px","letter-spacing:0.12em","color:rgba(180,200,255,0.75)","text-shadow:0 0 12px rgba(42,92,255,0.45)","transition:opacity 0.4s","text-align:center","line-height:1.5"].join(";"),document.body.appendChild(n))}return{set(e,i=""){t(),n.innerHTML=i?`${e}<br><span style="font-size:11px;opacity:0.55;letter-spacing:0.06em">${i}</span>`:e},destroy(){n==null||n.remove(),n=null}}}function Xn(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ye;let h=0;for(let u=0;u<n.length;++u){const f=n[u];let p=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(f.morphAttributes[m])}if(t){let m;if(e)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,m,u),h+=m}}if(e){let u=0;const f=[];for(let p=0;p<n.length;++p){const m=n[p].index;for(let M=0;M<m.count;++M)f.push(m.getX(M)+u);u+=n[p].attributes.position.count}l.setIndex(f)}for(const u in r){const f=Xh(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<f;++p){const m=[];for(let _=0;_<o[u].length;++_)m.push(o[u][_][p]);const M=Xh(m);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(M)}}return l}function Xh(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){const u=n[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Ce(o,e,i);let l=0;for(let h=0;h<n.length;++h){const u=n[h];if(u.isInterleavedBufferAttribute){const f=l/e;for(let p=0,m=u.count;p<m;p++)for(let M=0;M<e;M++){const _=u.getComponent(p,M);a.setComponent(p+f,M,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function wf({dt:n,pointer:t,audioData:e,params:i,spawn:s,pointerThreshold:r=3,pointerMax:o=2,pointerDivisor:a=16,randomRate:l=1.8,randomSpawn:h,bassThreshold:u=.3,bassMultiplier:f=4,bassSpawn:p}){if((t==null?void 0:t.velocity)>r){const m=Math.min(o,Math.floor(t.velocity/a)+1);for(let M=0;M<m;M++)s(t)}if(Math.random()<n*l*(i.speed||1)&&(h==null||h()),e!=null&&e.isActive&&e.bass>u){const m=Math.floor(e.bass*f);for(let M=0;M<m;M++)p==null||p()}}function Ef(n,t){n.length>t&&n.splice(0,n.length-t)}function Af(n,t){n.length>t&&n.splice(0,n.length-t)}function uc(n,t,e,i,s){return yr(n,t,e,i,s),{width:i,height:s}}function fc(n,t,e,i,s,r){const{w:o,h:a}=sn(e,i,s,r);return Sr(n,t,o,a,An)}function Oe(n,t,e){return Math.max(t,Math.min(e,n))}function Tf(n){return 1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2)}function $e(n,t,e,i){return n+(t-n)*(1-Math.exp(-i*e))}function cs(n,t,e){let i=t-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return n+i*e}const ge=.36;function _e(n,t,e=ge,i=0,s=0,r=0,o=0){const a=new be(n,t,e);return o&&a.rotateZ(o),a.translate(i,s,r),a}function dx(){const n=_e(.12,1.12,ge,0,0,0,Math.PI/4),t=_e(.12,1.12,ge,0,0,0,-Math.PI/4),e=_e(.16,.16,ge*1.08);return Xn([n,t,e],!1)}function px(){const n=_e(.12,.58,ge,0,-.27,0),t=_e(.12,.62,ge,-.2,.28,0,Math.PI/5.2),e=_e(.12,.62,ge,.2,.28,0,-Math.PI/5.2),i=_e(.14,.14,ge*1.05,0,.02,0);return Xn([n,t,e,i],!1)}function mx(){const n=_e(.78,.12,ge,0,.48,0),t=_e(.78,.12,ge,0,-.48,0),e=_e(.12,1.05,ge,0,0,0,-Math.PI/4.6);return Xn([n,t,e],!1)}function gx(){const n=_e(.12,1.05,ge,-.22,0,0,Math.PI/9),t=_e(.12,1.05,ge,.22,0,0,-Math.PI/9),e=_e(.42,.11,ge,0,-.05,0);return Xn([n,t,e],!1)}function Mx(){const n=_e(.12,1.05,ge,-.28,0,0),t=_e(.42,.11,ge,-.02,.42,0),e=_e(.4,.11,ge,-.02,.02,0),i=_e(.42,.11,ge,-.02,-.42,0),s=_e(.11,.38,ge,.22,.22,0),r=_e(.11,.38,ge,.22,-.2,0);return Xn([n,t,e,i,s,r],!1)}function _x(){const n=_e(.55,.11,ge,.06,.42,0),t=_e(.55,.11,ge,.06,-.42,0),e=_e(.12,.84,ge,-.24,0,0),i=_e(.18,.11,ge,.28,.42,0),s=_e(.18,.11,ge,.28,-.42,0);return Xn([n,t,e,i,s],!1)}const Ai=["a","b","c","x","y","z"],xx={a:gx,b:Mx,c:_x,x:dx,y:px,z:mx};function vx(){return Ai[Math.floor(Math.random()*Ai.length)]}const Yh=380,va=2300,yx=5,Sx=12.2,Xs=1.25,eo=1.26,no=1.58;function bx(){let n=[],t=[],e=[],i=0,s=0,r=0,o="rainbow",a=null,l={},h=null,u=null,f=null;const p=new Kt,m=new Vt,M=64,_=M;class g{constructor(E,T,v){this.x=E,this.y=T,this.z=(Math.random()-.5)*300,this.letter=vx(),this.maxSize=sx(),this.size=0,this.growth=0,this.growthRate=.35+Math.random()*.5,this.baseRot=(Math.random()-.5)*.7,this.tilt=(Math.random()-.5)*.65,this.yaw=(Math.random()-.5)*.8,this.windPhase=Math.random()*Math.PI*2,this.windSpeed=(.65+Math.random()*.45)*Xs,this.windAmp=.08+Math.random()*.07,this.spinX=(.45+Math.random()*.35)*Xs,this.spinY=(.55+Math.random()*.45)*Xs,this.spinZ=(.28+Math.random()*.25)*Xs,this.phaseX=Math.random()*Math.PI*2,this.phaseY=Math.random()*Math.PI*2,this.phaseZ=Math.random()*Math.PI*2,this.bobPhase=Math.random()*Math.PI*2,this.bobSpeed=(.75+Math.random()*.55)*Xs,this.driftZ=(Math.random()-.5)*28,this.color=cc(v),this.rgb=vf(this.color),this.innerRgb=xf(this.rgb),this.lifetime=0,this.maxLifetime=4+Math.random()*4.5,this.phase="growing",this.opacity=1}update(E,T){switch(this.lifetime+=E,this.tumbleX=Math.sin(T*this.spinX+this.phaseX)*.48,this.tumbleY=Math.sin(T*this.spinY+this.phaseY)*.72,this.tumbleZ=Math.sin(T*this.spinZ+this.phaseZ)*.28,this.bob=Math.sin(T*this.bobSpeed+this.bobPhase)*28,this.phase){case"growing":this.growth=Math.min(1,this.growth+this.growthRate*E),this.size=this.maxSize*Tf(this.growth),this.growth>=1&&(this.phase="bloomed");break;case"bloomed":Math.random()<E*6.5*no&&this._shedDust(),Math.random()<E*2.8*no&&this._shedShard(),this.lifetime>this.maxLifetime*.55&&(this.phase="wilting");break;case"wilting":this.opacity-=E*.28,Math.random()<E*10.5*no&&this._shedShard(),Math.random()<E*12*no&&this._shedDust();break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_shedShard(){const E=1+(Math.random()<.55?1:0);for(let T=0;T<E;T++){const v=5+Math.floor(Math.random()*6);for(let b=0;b<v;b++)t.push({x:this.x+(Math.random()-.5)*this.size*1.2,y:this.y+(Math.random()-.5)*this.size*1.2,z:this.z+(Math.random()-.5)*40,vx:(Math.random()-.5)*70,vy:-20-Math.random()*45,vz:(Math.random()-.5)*45,size:this.size*.14+Math.random()*7,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*6,rgb:Ts(this.rgb,1),opacity:1,glow:(1.52+Math.random()*.3)*eo,kind:"shard"})}}_shedDust(){const E=1+(Math.random()<.5?1:0);for(let T=0;T<E;T++){const v=9+Math.floor(Math.random()*7);for(let b=0;b<v;b++)t.push({x:this.x+(Math.random()-.5)*this.size*.6,y:this.y+(Math.random()-.5)*this.size*.6,z:this.z+(Math.random()-.5)*30,vx:(Math.random()-.5)*90,vy:(Math.random()-.5)*90-10,vz:(Math.random()-.5)*60,size:2+Math.random()*5,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*8,rgb:Ts(this.innerRgb,1.05),opacity:1,glow:(1.6+Math.random()*.32)*eo,kind:"dust"})}}}function d(S,E=1){const T=Math.sin(r*S.windSpeed+S.windPhase),v=Math.sin(r*S.windSpeed*1.37+S.windPhase*1.2),b=T*S.windAmp,A=v*S.windAmp*.85,I=te(S.x,S.y,S.z+(S.bob||0)+v*(S.driftZ||0),i,s);p.position.copy(I),p.position.x+=b*S.size*.28,p.position.y+=Math.sin(r*S.bobSpeed*.65+S.bobPhase)*S.size*.05,p.position.z+=A*S.size*.22,p.rotation.set(S.tilt+b*1.6+S.tumbleX,(S.yaw||0)+A*.9+S.tumbleY,S.baseRot+S.tumbleZ+v*S.windAmp*.75);const z=S.size*E;return p.scale.set(z,z,z*1.85),p.updateMatrix(),I}function y(S,E){p.position.set(0,0,-4e3),p.scale.set(.001,.001,.001),p.rotation.set(0,0,0),p.updateMatrix(),S.setMatrixAt(E,p.matrix),S.instanceColor&&S.setColorAt(E,m.setRGB(0,0,0))}function w(){if(!Ai.every(T=>l[T]))return;const S={a:[],b:[],c:[],x:[],y:[],z:[]},E=Math.min(n.length,M);for(let T=0;T<E;T++){const v=n[T];v&&v.size>=.5&&S[v.letter].push(v)}for(const T of Ai){const v=l[T],b=S[T];for(let A=0;A<_;A++){const I=b[A];if(!I){y(v.mesh,A),y(v.outline,A);continue}d(I,1),v.mesh.setMatrixAt(A,p.matrix);const z=Pi(I.rgb,.82+I.opacity*.28);v.mesh.setColorAt(A,m.setRGB(z.r,z.g,z.b)),d(I,1.03),v.outline.setMatrixAt(A,p.matrix);const W=Pi(I.rgb,.34);v.outline.setColorAt(A,m.setRGB(W.r*.55,W.g*.5,W.b*.75))}v.mesh.instanceMatrix.needsUpdate=!0,v.outline.instanceMatrix.needsUpdate=!0,v.mesh.instanceColor&&(v.mesh.instanceColor.needsUpdate=!0),v.outline.instanceColor&&(v.outline.instanceColor.needsUpdate=!0)}if(h){for(let T=0;T<M;T++){const v=T<E?n[T]:null;if(!v||v.size<.5)y(h,T);else{d(v,1),p.scale.set(v.size*.07,v.size*.07,v.size*.07),p.updateMatrix(),h.setMatrixAt(T,p.matrix);const b=Pi(v.rgb,.28);h.setColorAt(T,m.setRGB(b.r,b.g,b.b))}}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0)}if(u&&(e.forEach((T,v)=>{const b=te(T.x,T.y,T.z,i,s);u.positions[v*3]=b.x,u.positions[v*3+1]=b.y,u.positions[v*3+2]=b.z;const A=.18+.2*Math.abs(Math.sin(r*2.8+T.phase)),I=Pi(T.rgb,A*eo);u.colors[v*3]=I.r,u.colors[v*3+1]=I.g,u.colors[v*3+2]=I.b}),u.geo.setDrawRange(0,e.length),u.geo.attributes.position.needsUpdate=!0,u.geo.attributes.color.needsUpdate=!0),f){const T=Math.min(t.length,va);for(let v=0;v<T;v++){const b=t[v],A=te(b.x,b.y,b.z,i,s);f.positions[v*3]=A.x,f.positions[v*3+1]=A.y,f.positions[v*3+2]=A.z;const[I,z,W]=cn(b.rgb),Y=(b.glow||1.48)*(.54+b.opacity*.58)*eo,Z=b.kind==="dust"?.92+.12*Math.sin(r*8+b.rot*3):1.03;f.colors[v*3]=Math.min(1,I*Y*Z),f.colors[v*3+1]=Math.min(1,z*Y*Z),f.colors[v*3+2]=Math.min(1,W*Y*Z)}f.geo.setDrawRange(0,T),f.geo.attributes.position.needsUpdate=!0,f.geo.attributes.color.needsUpdate=!0}}function x(S,E){n.push(new g(S,E,o))}function R(S=.72){return new ie({color:16777215,transparent:!0,opacity:S,side:de,depthWrite:!1,blending:ze,toneMapped:!1})}return{init(S,E,T,v){i=S,s=E,o=T.palette||"rainbow",n=[],t=[],e=[],r=0,a=v,l={};for(const I of Ai){const z=xx[I]();z.computeVertexNormals();const W=new $t(z,R(.72),_);W.instanceColor=new Le(new Float32Array(_*3),3),W.frustumCulled=!1,a.add(W);const Y=new $t(z,new ie({color:16777215,side:Re,transparent:!0,opacity:.16,depthWrite:!1,blending:ze,toneMapped:!1}),_);Y.instanceColor=new Le(new Float32Array(_*3),3),Y.frustumCulled=!1,a.add(Y),l[I]={mesh:W,outline:Y,geo:z}}const b=new kt(.08,8,8),A=new ie({color:16777215,transparent:!0,opacity:.18,depthWrite:!1,blending:ze,toneMapped:!1});h=new $t(b,A,M),h.instanceColor=new Le(new Float32Array(M*3),3),h.frustumCulled=!1,a.add(h),u=ve(Yh,yx),f=ve(va,Sx),u.mat.opacity=.92,f.mat.opacity=.72,a.add(u.points,f.points);for(const[I,z]of Rn(20,S,E))x(I,z);Vi(n),w();for(let I=0;I<Yh;I++)e.push({x:Math.random()*S,y:Math.random()*E,z:(Math.random()-.5)*220,speedY:-(.08+Math.random()*.25),phase:Math.random()*Math.PI*2,rgb:hc(o)})},resize(S,E){({width:i,height:s}=uc(n,i,s,S,E))},update(S,E,T,v){r+=S,o=v.palette||o,n=n.filter(A=>A.update(S,r)),wf({dt:S,pointer:E,audioData:T,params:v,spawn:A=>x(A.x+(Math.random()-.5)*50,A.y+(Math.random()-.5)*50),randomSpawn:()=>x(Math.random()*i,Math.random()*s),bassSpawn:()=>x(Math.random()*i,Math.random()*s)}),t=t.filter(A=>{A.x+=A.vx*S,A.y+=A.vy*S,A.z+=A.vz*S,A.vy+=18*S,A.vx+=Math.sin(r*2.5+A.x*.008)*18*S,A.vz+=Math.cos(r*2.2+A.y*.01)*12*S,A.rot+=A.rotSpeed*S;const I=A.kind==="dust"?.14:.1;return A.opacity-=S*I,A.glow=Math.max(1.2,(A.glow||1.4)-S*.08),A.opacity>.02&&A.y<s+80}),e.forEach(A=>{A.y+=A.speedY*(v.speed||1)*60*S,A.x+=Math.sin(r*1.5+A.phase)*.25,A.y<-10&&(A.y=s+10,A.x=Math.random()*i)});const b=Math.min(M,Math.max(20,Math.floor((v.particleCount||1030)/4)));Af(n,b),Ef(t,va)},render(){w();for(const S of Ai)l[S]&&(l[S].mesh.material.opacity=.78)},onPointerDown(S,E){for(let T=0;T<6;T++)x(S+(Math.random()-.5)*90,E+(Math.random()-.5)*90)},onPointerMove(){},onPointerUp(){},setParams(S){o=S.palette||o},samplePoints(S,E=i,T=s){return fc(n,S,E,T,i,s)},destroy(){var S,E;n=[],t=[],e=[];for(const T of Ai)(E=(S=l[T])==null?void 0:S.geo)==null||E.dispose();l={},h=null,u=null,f=null,a=null}}}const Cl=["#00b7ff","#0090ff","#0066ff","#3d5afe","#5b8cff","#4d7cff","#2f6bff","#7c4dff","#9d4edd","#b026ff","#d500f9","#ff00e5","#ff2bd6","#e040fb","#c026d3"],ci=["#ff1ac6","#ff2ea8","#ff00aa","#ff4dd2","#00ffff","#00e5ff","#00b8ff","#2979ff","#18d4ff","#40c4ff","#448aff","#651fff","#536dfe","#7c4dff","#9c27b0","#7b1fa2","#b388ff","#ce93d8","#ab47bc","#5e35b1","#ffd000","#ffbf00","#ffe135","#fff36a","#c44dff","#b44dff","#e040fb","#d946ef"],wx=1.32,Rf=1.42,Pl=["#00e8ff","#00e8ff","#00e8ff","#00b7ff","#00b7ff","#00b7ff","#2f6bff","#2f6bff","#2f6bff","#2f6bff","#1a48ff","#1a48ff","#1a48ff","#4d7cff","#4d7cff","#7c4dff","#ff2bd6","#b026ff"],Ex=["#00ffff","#00ffff","#00ffff","#00ffff","#00e8ff","#00e8ff","#00e8ff","#00e8ff","#00e8ff","#00b7ff","#00b7ff","#00b7ff","#00b7ff","#2f6bff","#2f6bff","#2f6bff","#1a48ff","#1a48ff","#4d7cff","#7c4dff","#ff2bd6"];function br(n){return n[Math.floor(Math.random()*n.length)]}function ya(){return br(Cl)}function Sa(){return br(ci)}function Ax(){return br(Pl)}function ba(){return br(Ex)}function Tx(n){const t=Pl.filter(e=>e!==n);return br(t.length?t:Pl)}function Li(n,t={}){const e=t.greenCap??.35,i=Be(n),s=Math.max(i.r,i.g,i.b,1);let r=Math.round(i.r/s*255),o=Math.round(i.g/s*255),a=Math.round(i.b/s*255);return o=Math.min(o,Math.round(Math.max(r,a)*e)),{r,g:o,b:a}}function Ms(n,t=1.4,e={}){const i=e.greenCap??.4;let s=Math.min(1,n.r/255*t),r=Math.min(1,n.g/255*t),o=Math.min(1,n.b/255*t);return r=Math.min(r,Math.max(s,o)*i),{r:s,g:r,b:o}}function Rx(n){return{r:Math.round(n.r*.28+12),g:Math.round(Math.min(n.g,Math.max(n.r,n.b)*.22)*.4+8),b:Math.round(n.b*.65+100)}}function Ys(n){const t=ci.length,e=(Math.floor(n)%t+t)%t;return ci[e]}function dc(n){const t=Be(n),e=Math.max(t.r,t.g,t.b,1);return{r:Math.round(t.r/e*255),g:Math.round(t.g/e*255),b:Math.round(t.b/e*255)}}function pc(n,t=wx){const e=(n.r+n.g+n.b)/3;return{r:Math.min(255,Math.max(0,Math.round(e+(n.r-e)*t))),g:Math.min(255,Math.max(0,Math.round(e+(n.g-e)*t))),b:Math.min(255,Math.max(0,Math.round(e+(n.b-e)*t)))}}function wa(n,t=1){const e=pc(dc(n));let i=e.r/255*t,s=e.g/255*t,r=e.b/255*t;const o=Math.max(i,s,r,1e-6);return o>1&&(i/=o,s/=o,r/=o),{r:i,g:s,b:r}}function Cx(n,t=1.18){const e=pc(dc(n));return{r:Math.min(1,e.r/255*t),g:Math.min(1,e.g/255*t),b:Math.min(1,e.b/255*t)}}function wo(n,t=1,e=.06){const i=pc(dc(n),Rf),s=Math.min(1,Math.max(0,e));let r=Math.min(1,i.r/255*t),o=Math.min(1,i.g/255*t),a=Math.min(1,i.b/255*t);r=r*(1-s)+s,o=o*(1-s)+s,a=a*(1-s)+s;const l=.03;return{r:Math.min(1,r*(1-l)+l),g:Math.min(1,o*(1-l)+l),b:Math.min(1,a*(1-l)+l)}}function io(n){const t=wo(n,1.65,.05);return{r:Math.round(t.r*255),g:Math.round(t.g*255),b:Math.round(t.b*255)}}function Is(n){const t=n.index?n.toNonIndexed():n.clone();t.computeVertexNormals();const e=t.attributes.position.count;return t.attributes.uv||t.setAttribute("uv",new jt(new Float32Array(e*2),2)),t}function Ds(n){const t=n.map(Is),e=Xn(t,!1);return e?(e.computeVertexNormals(),e):t[0]}function Px(n,t,e,i=0,s=0,r=0,o=0){const a=new be(n,t,e);return o&&a.rotateZ(o),a.translate(i,s,r),a}const Cf={greenCap:.22};function qs(n){return Li(n,Cf)}function hs(n,t=1.4){return Ms(n,t,Cf)}const qh=280,so=1250,Lx=5.5,Ix=12,Zh=1.48,Jh=1.4;function Dx(){const n=new kt(.42,28,18,0,Math.PI*2,0,Math.PI*.58);return n.scale(1.18,.88,1.18),n.translate(0,.18,0),Is(n)}function Ux(){const n=new we(.47,.011,6,48);return n.rotateX(Math.PI/2),n.translate(0,.01,0),Is(n)}function Nx(){const n=[];for(let t=0;t<12;t++){const e=t/12*Math.PI*2,i=new Bn(.004,.004,.38,4);i.rotateZ(Math.PI/2),i.rotateY(e),i.translate(Math.cos(e)*.19,.28,Math.sin(e)*.19),n.push(i)}for(let t=0;t<48;t++){const e=Math.random()*Math.PI*2,i=Math.random()*Math.PI*.5,s=.38,r=Math.sin(i)*Math.cos(e)*s*1.18,o=.18+Math.cos(i)*s*.88,a=Math.sin(i)*Math.sin(e)*s*1.18,l=new kt(.012+Math.random()*.01,6,5);l.translate(r,o,a),n.push(l)}for(let t=0;t<3;t++){const e=.12+t*.12,i=.28+t*.08,s=new we(i,.0035,4,32);s.rotateX(Math.PI/2),s.translate(0,e,0),n.push(s)}return Ds(n)}function Fx(){const n=new kt(.09,12,10);return n.scale(1.35,.7,1.35),n.translate(0,.08,0),Is(n)}function zx(){const n=[];for(let t=0;t<4;t++){const e=t/4*Math.PI*2+Math.PI/4,i=new we(.09,.028,8,20,Math.PI*1.35);i.rotateX(Math.PI*.55),i.rotateY(e),i.translate(Math.cos(e)*.12,.22,Math.sin(e)*.12),n.push(i)}return Ds(n)}function Ox(){const n=[];for(let e=0;e<48;e++){const i=e/48*Math.PI*2,s=.32+e%4*.08,r=new kn(.0032,s,2,4),o=Math.cos(i)*.45,a=Math.sin(i)*.45;r.translate(o,-s*.42,a),n.push(r);const l=new kt(.01,6,5);l.translate(o,-s*.85,a),n.push(l)}return Ds(n)}function Bx(){const n=[];for(let e=0;e<16;e++){const i=(e+.5)/16,s=Math.sin(i*Math.PI*1.6)*.09,r=-i*1.15,o=.048*(1-i*.55),a=new we(o,.0055,5,14);a.rotateX(Math.PI/2),a.translate(s,r,0),n.push(a);const l=new kn(.0035,.06,2,4);if(l.translate(s,r,0),n.push(l),e%2===0){const h=new kt(.011,6,5);h.translate(s+o*.7,r,0),n.push(h)}}return Ds(n)}function Gx(){let n=[],t=[],e=[],i=0,s=0,r=0,o="rainbow",a=null,l=null,h=null,u=null,f=null,p=null,m=null,M=[],_=null,g=null,d=null,y=null,w=null,x=null,R=null,S=null,E=null;const T=new Kt,v=new Kt,b=new Kt,A=[0,1,2,3].map(()=>new Kt);T.add(v,b,...A),b.position.y=.02;for(let ht=0;ht<4;ht++){const K=ht/4*Math.PI*2;A[ht].position.set(Math.cos(K)*.06,.05,Math.sin(K)*.06),A[ht].rotation.y=K}const I=new Kt,z=new Vt,W=72;class Y{constructor(K,C,L){this.x=K,this.y=C,this.z=(Math.random()-.5)*200,this.maxSize=ix()*.95,this.size=0,this.growth=0,this.growthRate=.28+Math.random()*.35,this.baseRot=Math.random()*Math.PI*2,this.tilt=(Math.random()-.5)*.2,this.windPhase=Math.random()*Math.PI*2,this.windSpeed=.45+Math.random()*.35,this.windAmp=.06+Math.random()*.05,this.bobPhase=Math.random()*Math.PI*2,this.bobSpeed=.55+Math.random()*.35,this.pulsePhase=Math.random()*Math.PI*2,this.pulseSpeed=1.15+Math.random()*.55,this.spinY=.08+Math.random()*.12,this.phaseY=Math.random()*Math.PI*2,this.riseSpeed=(22+Math.random()*18)*Zh,this.neonHex=Ax(),this.rgb=qs(this.neonHex),this.accentRgb=qs(Tx(this.neonHex)),this.fillRgb=Rx(this.rgb),this.innerRgb={r:Math.min(255,this.rgb.r+40),g:Math.min(255,this.rgb.g+20),b:Math.min(255,this.rgb.b+50)},this.lifetime=0,this.maxLifetime=20+Math.random()*25,this.phase="growing",this.opacity=1,this.pulse=0,this.sway=0,this.bob=0,this.spin=0,this._deathBursted=!1,this._finalBursted=!1}update(K,C){this.lifetime+=K,this.pulse=Math.sin(C*this.pulseSpeed+this.pulsePhase),this.bob=Math.sin(C*this.bobSpeed+this.bobPhase)*10,this.sway=Math.sin(C*this.windSpeed+this.windPhase)*this.windAmp,this.spin=Math.sin(C*this.spinY+this.phaseY)*.2;const L=this.riseSpeed*(.7+Math.max(0,this.pulse)*.45);switch(this.y-=L*K,this.x+=Math.sin(C*.55+this.windPhase)*10*K,this.z+=Math.cos(C*.4+this.bobPhase)*8*K,this.y<-120&&(this.y=s+60+Math.random()*40,this.x=Math.random()*i,this.z=(Math.random()-.5)*200),this.phase){case"growing":{this.growth=Math.min(1,this.growth+this.growthRate*K);const O=1.70158,G=O+1,U=this.growth;this.size=this.maxSize*(1+G*Math.pow(U-1,3)+O*Math.pow(U-1,2)),this.growth>=1&&(this.phase="bloomed");break}case"bloomed":if(Math.random()<K*11.5*Jh&&this._neonSpark(),this.lifetime>this.maxLifetime*.72&&this.phase==="bloomed"){this.phase="wilting";for(let O=0;O<28;O++)this._neonSpark()}break;case"wilting":if(this.opacity-=K*.18,Math.random()<K*20*Jh&&this._neonSpark(),Math.random()<K*18&&this._shedDust(),!this._deathBursted&&this.opacity<.42){this._deathBursted=!0;for(let O=0;O<26;O++)this._neonSpark()}if(!this._finalBursted&&this.lifetime>=this.maxLifetime*.96){this._finalBursted=!0;for(let O=0;O<18;O++)this._neonSpark()}break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_neonSpark(){const K=qs(ba()),C=Math.random()<.25?this.accentRgb:this.rgb,L={r:Math.round(K.r*.75+C.r*.25),g:Math.min(Math.round(K.g*.7+C.g*.2),Math.round(Math.max(K.r,K.b,C.b)*.2)),b:Math.min(255,Math.round(K.b*.75+C.b*.18+10))},O=Math.random()<.5?-1:1;t.push({x:this.x+O*this.size*(.15+Math.random()*.55),y:this.y+this.size*(.05+Math.random()*.7),z:this.z+(Math.random()-.5)*50,vx:O*(8+Math.random()*28)+(Math.random()-.5)*12,vy:-12-Math.random()*28,vz:(Math.random()-.5)*24,size:2.5+Math.random()*5.5,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*5,rgb:L,opacity:1,glow:2.05+Math.random()*1.05,kind:"neon",twinkle:Math.random()*Math.PI*2})}_shedDust(){for(let K=0;K<32;K++)this._neonSpark()}}function Z(ht,K){I.position.set(0,0,-4e3),I.scale.set(.001,.001,.001),I.rotation.set(0,0,0),I.updateMatrix(),ht.setMatrixAt(K,I.matrix),ht.instanceColor&&ht.setColorAt(K,z.setRGB(0,0,0))}function et(ht){const K=te(ht.x,ht.y,ht.z+ht.bob,i,s);T.position.copy(K),T.position.x+=ht.sway*ht.size*.4,T.rotation.set(ht.tilt+ht.sway*.7+ht.pulse*.04,ht.baseRot+ht.spin,ht.sway*.55);const C=ht.size,L=1.05-ht.pulse*.06,O=.92+ht.pulse*.1;T.scale.set(C*L,C*O,C*L*1.15);const G=Math.sin(r*1.4+ht.windPhase)*.12;b.rotation.set(G*.4,0,G);for(let U=0;U<4;U++){const B=ht.pulsePhase+U*1.2,H=Math.sin(r*1.15+B)*.42,st=Math.cos(r*.9+B*.8)*.28,V=Math.sin(r*.75+B)*.2;A[U].rotation.x=.2+H,A[U].rotation.z=st,A[U].rotation.y=U/4*Math.PI*2+V,A[U].scale.set(1,1.05+Math.abs(H)*.18,1)}T.updateMatrixWorld(!0)}function X(){if(!l||!h||!u||!f||!p||!m||M.length<4)return;const ht=Math.min(n.length,W);for(let C=0;C<W;C++){const L=C<ht?n[C]:null;if(!L||L.size<.5){Z(l,C),Z(h,C),Z(u,C),Z(f,C),Z(p,C),Z(m,C);for(const st of M)Z(st,C);continue}et(L);const O=hs(L.fillRgb,.48+L.opacity*.15),G=hs(L.rgb,.92+L.opacity*.18),U=hs(L.innerRgb,1+.18*Math.abs(L.pulse)),B={r:Math.min(1,.34+.07*Math.abs(L.pulse)),g:Math.min(1,.46+.04*Math.abs(L.pulse)),b:Math.min(1,.64+.08*Math.abs(L.pulse))};I.matrix.copy(v.matrixWorld),l.setMatrixAt(C,I.matrix),l.setColorAt(C,z.setRGB(O.r,O.g,O.b)),I.matrix.copy(T.matrixWorld),h.setMatrixAt(C,I.matrix),h.setColorAt(C,z.setRGB(Math.min(1,U.r*.86),Math.min(1,U.g*.88),Math.min(1,U.b*.84))),I.matrix.copy(T.matrixWorld),u.setMatrixAt(C,I.matrix),u.setColorAt(C,z.setRGB(U.r,U.g,U.b)),I.matrix.copy(T.matrixWorld),f.setMatrixAt(C,I.matrix),f.setColorAt(C,z.setRGB(B.r,B.g,B.b)),I.matrix.copy(T.matrixWorld),p.setMatrixAt(C,I.matrix),p.setColorAt(C,z.setRGB(G.r,G.g,G.b));const H=hs(L.accentRgb,.82+.15*Math.abs(L.pulse));I.matrix.copy(b.matrixWorld),m.setMatrixAt(C,I.matrix),m.setColorAt(C,z.setRGB(U.r*.68+H.r*.2,U.g*.72+H.g*.16,U.b*.68+H.b*.2));for(let st=0;st<4;st++){I.matrix.copy(A[st].matrixWorld),M[st].setMatrixAt(C,I.matrix);const V=st%2===0?G:H;M[st].setColorAt(C,z.setRGB(V.r*.82,V.g*.78,V.b*.86))}}const K=[l,h,u,f,p,m,...M];for(const C of K)C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0);if(_&&(e.forEach((C,L)=>{const O=te(C.x,C.y,C.z,i,s);_.positions[L*3]=O.x,_.positions[L*3+1]=O.y,_.positions[L*3+2]=O.z;const G=.82+.65*Math.abs(Math.sin(r*2.6+C.phase)),U=hs(C.rgb,G*1.65);_.colors[L*3]=U.r,_.colors[L*3+1]=U.g,_.colors[L*3+2]=U.b}),_.geo.setDrawRange(0,e.length),_.geo.attributes.position.needsUpdate=!0,_.geo.attributes.color.needsUpdate=!0),g){const C=Math.min(t.length,so);for(let L=0;L<C;L++){const O=t[L],G=te(O.x,O.y,O.z,i,s);g.positions[L*3]=G.x,g.positions[L*3+1]=G.y,g.positions[L*3+2]=G.z;const U=.78+.42*Math.abs(Math.sin(r*6+(O.twinkle||0))),B=(O.glow||2.1)*(.58+O.opacity*.52)*U,H=hs(O.rgb,B*1.15);g.colors[L*3]=H.r,g.colors[L*3+1]=H.g,g.colors[L*3+2]=H.b}g.geo.setDrawRange(0,C),g.geo.attributes.position.needsUpdate=!0,g.geo.attributes.color.needsUpdate=!0}}function nt(ht){for(;n.length>ht;){const K=n.findIndex(L=>L.phase==="wilting"&&L.opacity<.35);if(K>=0){n.splice(K,1);continue}const C=n.findIndex(L=>L.lifetime>=L.maxLifetime*.92);if(C>=0){n.splice(C,1);continue}n.splice(0,1)}}function pt(ht,K){n.push(new Y(ht,K,o))}function _t(ht,K=!1){return new ie({color:16777215,transparent:!0,opacity:ht,side:de,depthWrite:!1,blending:K?Qt:ze,toneMapped:!1})}return{init(ht,K,C,L){i=ht,s=K,o=C.palette||"rainbow",n=[],t=[],e=[],r=0,a=L,d=Dx(),y=Ux(),w=Nx(),x=Fx(),R=zx(),S=Ox(),E=Bx(),l=new $t(d,_t(.26,!0),W),h=new $t(y,_t(.58,!0),W),u=new $t(w,_t(.52,!0),W),f=new $t(x,_t(.54,!0),W),p=new $t(R,_t(.42,!0),W),m=new $t(S,_t(.22,!0),W),M=[0,1,2,3].map(()=>new $t(E,_t(.2,!0),W));for(const O of[l,h,u,f,p,m,...M])O.instanceColor=new Le(new Float32Array(W*3),3),O.frustumCulled=!1,a.add(O);_=ve(qh,Lx),g=ve(so,Ix),_.mat.blending=Qt,g.mat.blending=Qt,_.mat.opacity=.78,g.mat.opacity=.72,_.mat.toneMapped=!1,g.mat.toneMapped=!1,a.add(_.points,g.points);for(const[O,G]of Rn(20,ht,K,.06,[K*.2,K*.95]))pt(O,G);Vi(n),X();for(let O=0;O<qh;O++)e.push({x:Math.random()*ht,y:Math.random()*K,z:(Math.random()-.5)*220,speedY:-(.05+Math.random()*.16),phase:Math.random()*Math.PI*2,rgb:qs(ba())})},resize(ht,K){yr(n,i,s,ht,K),i=ht,s=K},update(ht,K,C,L){if(r+=ht,o=L.palette||o,n=n.filter(G=>G.update(ht,r)),(K==null?void 0:K.velocity)>3){const G=Math.min(2,Math.floor(K.velocity/16)+1);for(let U=0;U<G;U++)pt(K.x+(Math.random()-.5)*50,K.y+(Math.random()-.5)*40)}if(Math.random()<ht*1.2*(L.speed||1)&&pt(Math.random()*i,s+30+Math.random()*60),C!=null&&C.isActive&&C.bass>.3){const G=Math.floor(C.bass*3);for(let U=0;U<G;U++)pt(Math.random()*i,s+20)}t=t.filter(G=>(G.x+=G.vx*ht,G.y+=G.vy*ht,G.z+=G.vz*ht,G.vx*=.985,G.vy+=(G.kind==="neon"?6:10)*ht,G.opacity-=ht*(G.kind==="neon"?.05:.085),G.opacity>.02&&G.y<s+80&&G.y>-100)),t.length>so&&t.splice(0,t.length-so),e.forEach(G=>{if(G.y+=G.speedY*(L.speed||1)*50*Zh*ht,G.x+=Math.sin(r*1.2+G.phase)*.2,G.y<-10)if(G.y=s+10,G.x=Math.random()*i,n.length&&Math.random()<.25){const U=n[Math.floor(Math.random()*n.length)];G.rgb={...U.rgb}}else G.rgb=qs(ba())});const O=Math.min(W,Math.max(20,Math.floor((L.particleCount||1030)/4)));nt(O),t.length>1100&&t.splice(0,t.length-1100)},render(){X()},onPointerDown(ht,K){for(let C=0;C<5;C++)pt(ht+(Math.random()-.5)*80,K+(Math.random()-.5)*60)},onPointerMove(){},onPointerUp(){},setParams(ht){o=ht.palette||o},setPalette(ht){o=ht},samplePoints(ht,K=i,C=s){const{w:L,h:O}=sn(K,C,i,s);return Sr(n,ht,L,O,An)},destroy(){n=[],t=[],e=[],d==null||d.dispose(),y==null||y.dispose(),w==null||w.dispose(),x==null||x.dispose(),R==null||R.dispose(),S==null||S.dispose(),E==null||E.dispose(),l=null,h=null,u=null,f=null,p=null,m=null,M=[],_=null,g=null,a=null}}}const Ll=Je("clockRainbow");function mc(n){const{r:t,g:e,b:i}=Be(n),s=i>170&&e>90&&t<120,r=i>150&&i>=t*.82&&i>e,o=i>130&&t>40&&e<t;return s||r||o}function Hx(){const n=new Set,t=[];for(const e of[...Ll,...Je("rainbow")]){if(n.has(e))continue;n.add(e);const{r:i,g:s,b:r}=Be(e),a=r>200&&r>i*1.1&&s<r*.8?7:mc(e)?5:1;for(let l=0;l<a;l++)t.push(e)}return t.length?t:Ll}const Il=Hx(),Kh=Il.filter(n=>mc(n));function Eo(n){return Il[Math.abs(n)%Il.length]}function Dl(n){const t=Kh.length?Kh:Ll;return t[Math.abs(n)%t.length]}function Vx(n){return{wing:n%3!==2?Dl(n*2):Eo(n*2),pattern:Eo(n*2+3)}}function Ao(n,t=1.14){const e=(n.r+n.g+n.b)/3;return{r:Math.min(255,Math.max(0,Math.round(e+(n.r-e)*t))),g:Math.min(255,Math.max(0,Math.round(e+(n.g-e)*t))),b:Math.min(255,Math.max(0,Math.round(e+(n.b-e)*t)))}}function ro(n){let t=Be(n);return mc(n)&&(t={r:Math.min(255,Math.round(t.r*1.02+2)),g:Math.min(255,Math.round(t.g*1.04+4)),b:Math.min(255,Math.round(t.b*1.1+10))}),Ao(t,1.15)}function $h(n,t=.55){const e={r:Math.min(255,Math.round(n.r*t+12)),g:Math.min(255,Math.round(n.g*t+12)),b:Math.min(255,Math.round(n.b*t+12))};return Ao(e,1.1)}function us(n,t=1){return{r:Math.min(1,n.r/255*t),g:Math.min(1,n.g/255*t),b:Math.min(1,n.b/255*t)}}function kx(n,t,e){const i=Math.sin(n),s=Math.cos(n),r=Math.sin(n*2+.35),o=e*qx,a=i*.78*o+r*.03*o,h=Math.max(0,-i)*(.38+.62*Math.max(0,-s)),u=h*14*o*.9,f=h*10*o*.9,p=s*t*.54*o,m=i*.15*o+r*.02*o;return{wing:a,stroke:h,thrust:u,lift:f,flapVel:p,sway:m}}const Fn=.17,Wx=1.6,jh=.32,Xx=2.4,Yx=7.8,Qh=8.2,ei=[2,4.2],ps=[5,9.5],qx=1.58,Zx=.44,Jx=[3,24],Kx=[12,58],oo=1.42,tu=125,ao=1600,$x=4,jx=7,Qx=1.18,vi=1.22,eu=3.2,tv=28;function ev(n){const t=ei[0],e=ps[1];return Oe((n-t)/(e-t),0,1)}function nu(n,t=!1){const[e,i]=t?Kx:Jx;return Oe((n-e)/(i-e),0,1)}function Ul(n){const t=n.index?n.toNonIndexed():n.clone();return t.computeVertexNormals(),t}function gc(n){const t=Xn(n.map(Ul),!1);return t?(t.computeVertexNormals(),t):Ul(n[0])}function iu(){const n=Math.random(),t=Math.random(),e=2*Math.PI*n,i=2*t-1,s=Math.sqrt(Math.max(0,1-i*i));return new k(s*Math.cos(e),s*Math.sin(e),i)}function nv(){const n=new Ze;return n.moveTo(.04,.05),n.bezierCurveTo(.16,.44,.52,.5,.84,.34),n.bezierCurveTo(1.05,.18,1,-.04,.78,-.12),n.bezierCurveTo(.52,-.2,.24,-.02,.1,.06),n.bezierCurveTo(.02,-.02,-.02,-.22,.14,-.38),n.bezierCurveTo(.34,-.54,.62,-.46,.66,-.24),n.bezierCurveTo(.7,-.04,.46,.1,.04,.05),n.closePath(),n}function Nl(){const n=new Mn(nv(),{depth:.14,bevelEnabled:!0,bevelThickness:.028,bevelSize:.022,bevelSegments:3,curveSegments:28});return n.translate(.02,.02,-.07),Ul(n)}function Fl(){const n=[],t=[[.42,.28,.1],[.62,.18,.08],[.28,.08,.07],[.48,-.08,.09],[.68,-.18,.06],[.22,-.22,.07],[.38,-.32,.055]];for(const[i,s,r]of t){const o=new kt(r,12,10);o.translate(i,s,.04),n.push(o)}for(let i=0;i<4;i++){const s=.35+i*.28,r=new kn(.012,.42+i*.08,4,6);r.rotateZ(s),r.translate(.22+i*.14,.06-i*.1,.03),n.push(r)}const e=new we(.52,.018,8,32,Math.PI*.85);return e.rotateZ(.55),e.translate(.42,.02,.02),n.push(e),gc(n)}function Pf(){const n=new kn(.06,.2,5,10);n.rotateZ(Math.PI/2),n.translate(.02,.02,0);const t=new kn(.045,.24,5,10);t.rotateZ(Math.PI/2),t.translate(-.2,.01,0);const e=new kt(.052,12,10);return e.translate(.12,.03,0),gc([n,t,e])}function Lf(){const n=[];for(const t of[-1,1]){const e=new kn(.008,.2,4,6);e.rotateZ(t*.65),e.translate(.12,.05+t*.02,t*.04),n.push(e);const i=new kt(.018,8,6);i.translate(.2,.11*t+.03,t*.08),n.push(i)}return gc(n)}function iv(){let n=[],t=[],e=[],i=0,s=0,r=0,o=null,a=null,l=null,h=null,u=null,f=null,p=null,m=null,M=null,_=null,g=null,d=null,y=null,w=null,x=null;const R=new Kt,S=new Kt,E=new Kt;R.add(S,E),S.position.set(.02,.02,-.01),E.position.set(.02,.02,-.01);const T=new Kt,v=new Vt,b=new k,A=72;let I=0;const z=["arc","spiral","waltz","drift","dance"],W=()=>z[Math.floor(Math.random()*z.length)];class Y{constructor(C,L){this.x=C,this.y=L,this.z=(Math.random()-.5)*360,this.maxSize=ox()*.8*Qx,this.size=0,this.growth=0,this.growthRate=.34+Math.random()*.38,this.flapPhase=Math.random()*Math.PI*2,this.flapTempoTrait=Math.random(),this.flapSpeed=(ei[0]+this.flapTempoTrait*(ps[1]-ei[0])*.55)*vi,this.flapSpeedTarget=this.flapSpeed,this.flapRhythmTarget=this.flapSpeed,this.wingRhythmMul=.38+this.flapTempoTrait*.26,this.flapRhythm=this.flapTempoTrait>.52?"fast":"slow",this.flapRhythmTimer=.5+Math.random()*1.4,this.bobPhase=Math.random()*Math.PI*2,this.bobSpeed=.18+Math.random()*.16,this.windPhase=Math.random()*Math.PI*2,this.driftPhase=Math.random()*Math.PI*2,this.glidePhase=Math.random()*Math.PI*2,this.floatPhase=Math.random()*Math.PI*2,this.floatSpeed=.28+Math.random()*.38,this.driftRadius=.4+this.flapTempoTrait*1.2,this.flowAngle=Math.random()*Math.PI*2,this.pitchAngle=(Math.random()-.5)*.6,this.flowTurn=(Math.random()<.5?-1:1)*(.06+Math.random()*.16),this.style=W(),this.flutterAmp=.62+Math.random()*.48,this.glideAmp=.88+Math.random()*.62,this.wingFlapMul=this.wingRhythmMul,this.smoothRate=.72+Math.random()*.55,this.orbitR=.45+Math.random()*.75,this.orbitPhase=Math.random()*Math.PI*2,this.maxSpeed=(16+Math.random()*9)*vi,this.tiltAmp=.03+Math.random()*.04,this.rollAmp=.03+Math.random()*.05;const O=I++;this.flowAngle=Math.random()*Math.PI*2,this.pitchAngle=(Math.random()-.5)*.75,this.targetFlowAngle=this.flowAngle,this.targetPitchAngle=this.pitchAngle,this.heading=this.flowAngle;const G=(3.5+this.flapTempoTrait*10)*vi;this.vx=Math.sin(this.heading)*Math.cos(this.pitchAngle)*G,this.vy=-Math.cos(this.heading)*Math.cos(this.pitchAngle)*G,this.vz=Math.sin(this.pitchAngle)*G*.85,this.smoothMoveSpeed=G,this.rotX=0,this.rotY=Math.atan2(this.vx,-this.vy+.001),this.rotZ=0;const{wing:U,pattern:B}=Vx(O);this.color=U,this.rgb=ro(U),this.pattern=$h(ro(B),.62),this.outline=$h(this.rgb,.44),this.accent=ro(O%2===0?Dl(O+7):Eo(O+7)),this.lifetime=0,this.maxLifetime=14+Math.random()*10,this.phase="growing",this.opacity=1,this.flap=0,this.flapVel=0,this.smoothFlap=0,this.smoothFlapVel=0,this.sway=0,this.departing=!1,this.departTimer=.2+(1-this.flapTempoTrait)*.85,this.departDuration=0,this.departScale=1,this.departSpeed=0,this.departTempo=0,this.departDir=iu(),this.departDir.y*=.72,this.departDir.normalize(),this.bob=0,this.flutterX=0,this.flutterY=0,this.flutterZ=0,this.smoothFlutterX=0,this.smoothFlutterY=0,this.smoothFlutterZ=0,this.smoothSway=0,this.roamTimer=.6+Math.random()*1.4,this.bankX=0,this.bankY=0}_flapTempo(){return ev(this.flapSpeed)}_beginDepart(){this.departing=!0,this.departDuration=0,this.departScale=1,this.departTempo=Math.max(nu(this.smoothMoveSpeed,!0),this._flapTempo()*.45+this.flapTempoTrait*.35);const C=iu();C.y*=.55+Math.random()*.35,C.normalize(),this.departDir=C,this.departSpeed=(28+this.departTempo*38)*vi,this.maxSpeed=Math.max(this.maxSpeed,this.departSpeed+14),this.targetFlowAngle=Math.atan2(C.x,-C.y),this.targetPitchAngle=Oe(Math.asin(C.z),-.78,.78),this.flowAngle=cs(this.flowAngle,this.targetFlowAngle,.62),this.pitchAngle=$e(this.pitchAngle,this.targetPitchAngle,.05,5.5),this.heading=this.flowAngle;const L=this.departSpeed*(.88+this.departTempo*.1),O=6+this.departTempo*5;this.vx=$e(this.vx,C.x*L,.05,O),this.vy=$e(this.vy,C.y*L,.05,O),this.vz=$e(this.vz,C.z*L,.05,O),this._dustBurst(tv)}_updateDepart(C){this.departDuration+=C;const L=this.departTempo,O=.2+L*.16,G=.14+L*.1;this.departScale=Math.max(.05,1-this.departDuration*G),this.opacity=Math.max(0,1-this.departDuration*O);const U=2.8+L*2.4;this.flowAngle=cs(this.flowAngle,Math.atan2(this.departDir.x,-this.departDir.y),1-Math.exp(-U*C)),this.pitchAngle=$e(this.pitchAngle,Oe(Math.asin(this.departDir.z),-.78,.78),C,2.8+L*1.6),this.heading=cs(this.heading,this.flowAngle,1-Math.exp(-(3.2+L*2)*C));const B=this.x<-60||this.x>i+60||this.y<-60||this.y>s+60,H=.32+(1-L)*.38;return!(this.opacity<.04||this.z<-520||this.departDuration>7||B&&this.departDuration>H)}_pickRoamIntent(){this.targetFlowAngle=this.flowAngle+(Math.random()-.5)*Math.PI*1.35,this.targetPitchAngle=Oe(this.pitchAngle+(Math.random()-.5)*.72,-.72,.72),this.flowTurn=(Math.random()<.5?-1:1)*(.12+Math.random()*.22),this.roamTimer=.55+Math.random()*1.35}_updateFlapRhythm(C){if(this.flapRhythmTimer-=C,this.flapRhythmTimer<=0){const L=.28+this.flapTempoTrait*.42;if(this.flapRhythm==="slow"?this.flapRhythm=Math.random()<L?"fast":"slow":this.flapRhythm=Math.random()<.38?"slow":"fast",this.flapRhythmTimer=this.flapRhythm==="slow"?.75+Math.random()*1.8:.35+Math.random()*.95,this.flapRhythm==="slow"){const O=ei[1]-ei[0];this.flapRhythmTarget=(ei[0]+this.flapTempoTrait*O*.55+Math.random()*O*.35)*vi,this.wingRhythmMul=.4+this.flapTempoTrait*.16}else{const O=ps[1]-ps[0];this.flapRhythmTarget=(ps[0]+this.flapTempoTrait*O*.75+Math.random()*O*.35)*vi,this.wingRhythmMul=.58+this.flapTempoTrait*.28}}}_syncFlapToMotion(C){const L=nu(this.smoothMoveSpeed,this.departing),O=L*L,G=ps[1]-ei[0],U=this.departing?1.18:1,B=ei[0]+O*G*U,H=.15+O*.85;this.flapSpeedTarget=this.flapRhythmTarget*(1-H)+B*H,this.wingFlapMul=this.wingRhythmMul*(1-H*.55)+(.4+O*.54)*(H*.55+.45),this.wingFlapMul=Math.max(this.wingFlapMul,Zx),this.flapSpeed=$e(this.flapSpeed,this.flapSpeedTarget,C,3+O*3.2)}_smoothFlapVisual(C){this.smoothFlap=$e(this.smoothFlap,this.flap,C,Qh),this.smoothFlapVel=$e(this.smoothFlapVel,this.flapVel,C,Qh*.85)}_cruiseVelocity(){if(this.departing){const G=this.departTempo,U=this.departSpeed+Math.min(this.departDuration*(8+G*10),16);return{vx:this.departDir.x*U,vy:this.departDir.y*U,vz:this.departDir.z*U}}const C=Math.cos(this.pitchAngle),L=Math.sin(this.pitchAngle),O=(8.5+this.driftRadius*2.2)*vi;return{vx:Math.sin(this.heading)*C*O,vy:-Math.cos(this.heading)*C*O,vz:L*O*.88}}_steerIntent(C,L){if(this.departing)return;this.roamTimer-=C,this.roamTimer<=0&&this._pickRoamIntent();const O=Math.sin(L*.16+this.glidePhase)*.22+Math.sin(L*.08+this.driftPhase*1.7)*.14,G=Math.sin(L*.12+this.bobPhase*1.3)*.18,U=1-Math.exp(-.28*C);switch(this.style){case"spiral":{this.orbitPhase+=C*(.1+this.orbitR*.08),this.targetFlowAngle+=(this.flowTurn+O*.08)*C*.14,this.targetPitchAngle=Oe(this.targetPitchAngle+Math.sin(this.orbitPhase)*.1*C,-.65,.65);break}case"waltz":{this.targetFlowAngle+=(this.flowTurn+O*.1)*C*.12,this.targetPitchAngle=Oe(this.targetPitchAngle+G*.08*C,-.65,.65);break}case"drift":{this.targetFlowAngle+=(this.flowTurn+O*.06)*C*.09,this.targetPitchAngle=Oe(this.targetPitchAngle+G*.06*C,-.65,.65);break}case"dance":{this.targetFlowAngle+=(this.flowTurn+O*.1)*C*(.16+Math.sin(L*.22+this.driftPhase)*.08),this.targetPitchAngle=Oe(this.targetPitchAngle+Math.sin(L*.24+this.flapPhase)*.1*C,-.65,.65);break}default:this.targetFlowAngle+=(this.flowTurn+O*.07)*C*(.14+.08*Math.sin(L*.12+this.driftPhase)),this.targetPitchAngle=Oe(this.targetPitchAngle+G*.07*C,-.65,.65)}this.flowAngle=cs(this.flowAngle,this.targetFlowAngle,U),this.pitchAngle=$e(this.pitchAngle,this.targetPitchAngle,C,2.2),this.pitchAngle=Oe(this.pitchAngle,-.65,.65),this.heading=cs(this.heading,this.flowAngle,1-Math.exp(-.32*C))}_applyFloatDrift(C,L){const O=this.driftRadius*(this.departing?.28:.62),G=this.floatSpeed*(this.departing?1.1:.82),U=this.floatPhase,B=this._cruiseVelocity(),H=this.departing?Yx+this.departTempo*3.5:Xx;this.vx=$e(this.vx,B.vx+Math.sin(L*G+U)*.65*O,C,H),this.vy=$e(this.vy,B.vy+Math.cos(L*G*.78+U*1.4)*.55*O,C,H),this.vz=$e(this.vz,B.vz+Math.sin(L*G*.58+U*.85)*.48*O,C,H)}_updateFlutter(C){const L=this.flutterAmp,O=.42;switch(this.style){case"spiral":this.flutterX=Math.cos(C*.26+this.orbitPhase)*22*L*O+Math.sin(C*.52+this.flapPhase)*8*L*O,this.flutterY=Math.sin(C*.22+this.bobPhase)*18*L*O,this.flutterZ=Math.sin(C*.24+this.orbitPhase)*16*L*O;break;case"waltz":this.flutterX=Math.sin(C*.24+this.flapPhase)*24*L*O+Math.cos(C*.48+this.driftPhase)*9*L*O,this.flutterY=Math.sin(C*.14+this.bobPhase)*20*L*O,this.flutterZ=Math.cos(C*.26+this.windPhase)*14*L*O;break;case"drift":this.flutterX=Math.sin(C*.2+this.flapPhase)*16*L*O,this.flutterY=Math.cos(C*.17+this.bobPhase)*19*L*O,this.flutterZ=Math.sin(C*.15+this.windPhase)*11*L*O;break;case"dance":this.flutterX=Math.sin(C*.32+this.flapPhase)*22*L*O+Math.sin(C*.62+this.driftPhase)*10*L*O,this.flutterY=Math.cos(C*.26+this.bobPhase)*17*L*O+Math.sin(C*.52+this.flapPhase)*7*L*O,this.flutterZ=Math.sin(C*.3+this.windPhase)*15*L*O;break;default:this.flutterX=Math.sin(C*.28+this.flapPhase)*20*L*O+Math.sin(C*.55+this.driftPhase)*9*L*O,this.flutterY=Math.cos(C*.24+this.bobPhase)*18*L*O+Math.sin(C*.46+this.flapPhase)*7*L*O,this.flutterZ=Math.sin(C*.2+this.windPhase)*14*L*O+Math.cos(C*.38+this.driftPhase)*6*L*O}this.bob=Math.sin(C*this.bobSpeed+this.bobPhase)*(12+this.flutterAmp*5),this.departing&&(this.bob+=Math.sin(C*.28+this.flapPhase)*6)}_smoothFlutter(C){const L=1-Math.exp(-3.6*C);this.smoothFlutterX+=(this.flutterX-this.smoothFlutterX)*L,this.smoothFlutterY+=(this.flutterY-this.smoothFlutterY)*L,this.smoothFlutterZ+=(this.flutterZ-this.smoothFlutterZ)*L,this.smoothSway=$e(this.smoothSway,this.sway,C,5.5)}update(C,L){this.lifetime+=C,this._updateFlapRhythm(C),this._syncFlapToMotion(C),this._steerIntent(C,L),this.flapPhase+=this.flapSpeed*C;const O=kx(this.flapPhase,this.flapSpeed,this.wingFlapMul);this.flap=O.wing,this.flapVel=O.flapVel,this.sway=O.sway,this._smoothFlapVisual(C);const G=Math.cos(this.pitchAngle),U=Math.sin(this.pitchAngle),B=Math.sin(this.heading)*G,H=-Math.cos(this.heading)*G,st=U*.88;this.vx+=B*O.thrust*C,this.vy+=H*O.thrust*C,this.vz+=st*O.thrust*C,this.vy-=O.lift*G*C*.85,this.vy+=Wx*C;const V=Math.exp(-(this.departing?jh*.55:jh)*C);this.vx*=V,this.vy*=V,this.vz*=V,this._applyFloatDrift(C,L),b.set(this.vx,this.vy,this.vz);const J=b.length();J>this.maxSpeed&&(b.multiplyScalar(this.maxSpeed/J),this.vx=b.x,this.vy=b.y,this.vz=b.z),this.smoothMoveSpeed=$e(this.smoothMoveSpeed,J,C,5.5),this._updateFlutter(L),this._smoothFlutter(C);const N=.18;this.x+=this.vx*C+this.smoothFlutterX*C*N,this.y+=this.vy*C+this.smoothFlutterY*C*N,this.z+=this.vz*C+this.smoothFlutterZ*C*N*.75;const vt=1-Math.exp(-this.smoothRate*C),ut=this.vx+this.smoothFlutterX*N,yt=this.vy+this.smoothFlutterY*N,xt=this.vz+this.smoothFlutterZ*N*.75,Ft=Math.hypot(ut,yt);Math.hypot(ut,yt,xt)>.8&&(this.rotY=cs(this.rotY,Math.atan2(ut,-yt+.001)+this.smoothSway*.1,vt*.52));const F=Math.atan2(-xt,Ft+12)*.1+this.smoothFlapVel*.007+this.smoothSway*.03,P=Oe(F,-.1,Fn);this.rotX+=(P-this.rotX)*vt*.55;const tt=Ft>1.2?Math.atan2(ut,Math.abs(yt)+28)*this.rollAmp*.18:0,at=Oe(tt+this.smoothSway*.08,-Fn,Fn);switch(this.rotZ+=(at-this.rotZ)*vt*.5,this.rotX=Oe(this.rotX,-.1,Fn),this.rotZ=Oe(this.rotZ,-Fn,Fn),this._softBounds(C),this.phase){case"growing":{this.growth=Math.min(1,this.growth+this.growthRate*C);const Mt=1.70158,ft=Mt+1,It=this.growth;this.size=this.maxSize*(1+ft*Math.pow(It-1,3)+Mt*Math.pow(It-1,2)),this.growth>=1&&(this.phase="bloomed");break}case"bloomed":Math.random()<C*5.2&&this._dust(),this.departTimer-=C,(this.departTimer<=0||this.roamTimer<=0)&&(this._beginDepart(),this.phase="departing");break;case"departing":if(this._updateDepart(C)===!1)return!1;Math.random()<C*8.8*eu&&this._dust(2+Math.floor(Math.random()*3));break;case"wilting":this.opacity-=C*.14,Math.random()<C*6.2*eu&&this._dust(2+Math.floor(Math.random()*2));break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_softBounds(C){if(this.departing)return;const L=120;(this.x<-L||this.x>i+L||this.y<-L||this.y>s+L)&&this.phase==="bloomed"&&(this._beginDepart(),this.phase="departing"),this.z<-380&&(this.z=340),this.z>380&&(this.z=-340)}_dust(C=0){const L=1+(Math.random()<.55?1:0)+C;for(let O=0;O<L;O++)t.push({x:this.x+(Math.random()-.5)*this.size*1.35,y:this.y+(Math.random()-.5)*this.size*1.35,z:this.z+(Math.random()-.5)*this.size*1.2,vx:(Math.random()-.5)*70,vy:(Math.random()-.5)*70,vz:(Math.random()-.5)*70,rgb:Ao(Math.random()<.55?this.accent:this.rgb,1.22),opacity:1,glow:(1.85+Math.random()*.85)*oo,twinkle:Math.random()*Math.PI*2})}_dustBurst(C){for(let L=0;L<C;L++)t.push({x:this.x+(Math.random()-.5)*this.size*1.8,y:this.y+(Math.random()-.5)*this.size*1.8,z:this.z+(Math.random()-.5)*this.size*1.5,vx:(Math.random()-.5)*110,vy:(Math.random()-.5)*110,vz:(Math.random()-.5)*95,rgb:Ao(L%2===0?this.accent:this.rgb,1.28),opacity:1,glow:(2.1+Math.random()*.9)*oo,twinkle:Math.random()*Math.PI*2})}}function Z(K,C){T.position.set(0,0,-4e3),T.scale.set(.001,.001,.001),T.rotation.set(0,0,0),T.updateMatrix(),K.setMatrixAt(C,T.matrix),K.instanceColor&&K.setColorAt(C,v.setRGB(0,0,0))}function et(K){const C=te(K.x+K.smoothFlutterX*.38,K.y+K.smoothFlutterY*.34+K.bob*.28,K.z+K.bob*.5+K.smoothFlutterZ*.35,i,s);R.position.copy(C);const L=K.smoothFlap??K.flap,O=K.smoothFlapVel??K.flapVel,G=K.smoothSway??0,U=K.wingFlapMul??1,B=Math.sin(K.flapPhase*2+.4)*.045*U;R.rotation.set(Oe(K.rotX+O*.013+G*.05,-.1,Fn),K.rotY+G*.14,Oe(K.rotZ+L*.048+G*.22,-Fn,Fn));const H=K.size*(K.departScale??1);R.scale.set(H,H,H),S.rotation.set(.08+L*.22+G*.09,.56+L*1.14*U,.06+L*.2+B),E.rotation.set(.08+L*.22+G*.09,-.56-L*1.14*U,-.06-L*.2-B),S.scale.set(-1,1,1),E.scale.set(1,1,1),R.updateMatrixWorld(!0)}function X(){if(!a||!l||!h)return;const K=Math.min(n.length,A);for(let C=0;C<A;C++){const L=C<K?n[C]:null;if(!L||L.size<.5){for(const st of[a,l,h,u,f,p,m,M])Z(st,C);continue}et(L);const O=us(L.rgb,.98+L.opacity*.27),G=us(L.pattern,1.08+L.opacity*.22),U=us(L.outline,.78+L.opacity*.16),B=us(L.rgb,.72+L.opacity*.22),H=us(L.accent,1.03+L.opacity*.17);T.matrix.copy(R.matrixWorld),a.setMatrixAt(C,T.matrix),a.setColorAt(C,v.setRGB(B.r,B.g,B.b)),T.matrix.copy(S.matrixWorld),l.setMatrixAt(C,T.matrix),l.setColorAt(C,v.setRGB(O.r,O.g,O.b)),u.setMatrixAt(C,T.matrix),u.setColorAt(C,v.setRGB(U.r,U.g,U.b)),p.setMatrixAt(C,T.matrix),p.setColorAt(C,v.setRGB(G.r,G.g,G.b)),T.matrix.copy(E.matrixWorld),h.setMatrixAt(C,T.matrix),h.setColorAt(C,v.setRGB(O.r*.97,O.g*.99,O.b)),f.setMatrixAt(C,T.matrix),f.setColorAt(C,v.setRGB(U.r*.96,U.g*.98,U.b)),m.setMatrixAt(C,T.matrix),m.setColorAt(C,v.setRGB(G.r*.95,G.g*.97,G.b)),T.matrix.copy(R.matrixWorld),M.setMatrixAt(C,T.matrix),M.setColorAt(C,v.setRGB(H.r,H.g,H.b))}for(const C of[a,l,h,u,f,p,m,M])C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0);if(_&&(e.forEach((C,L)=>{const O=te(C.x,C.y,C.z,i,s);_.positions[L*3]=O.x,_.positions[L*3+1]=O.y,_.positions[L*3+2]=O.z;const G=.76+.48*Math.abs(Math.sin(r*2.8+C.phase)),U=us(C.rgb,G*oo*1.08);_.colors[L*3]=Math.min(1,U.r),_.colors[L*3+1]=Math.min(1,U.g),_.colors[L*3+2]=Math.min(1,U.b)}),_.geo.setDrawRange(0,e.length),_.geo.attributes.position.needsUpdate=!0,_.geo.attributes.color.needsUpdate=!0),g){const C=Math.min(t.length,ao);for(let L=0;L<C;L++){const O=t[L],G=te(O.x,O.y,O.z,i,s);g.positions[L*3]=G.x,g.positions[L*3+1]=G.y,g.positions[L*3+2]=G.z;const[U,B,H]=cn(O.rgb),st=.82+.34*Math.abs(Math.sin(r*8.5+(O.twinkle||0))),V=(O.glow||1.72)*(.64+O.opacity*.66)*st*oo,J=.12;g.colors[L*3]=Math.min(1,U*V*(1-J)+J),g.colors[L*3+1]=Math.min(1,B*V*(1-J)+J),g.colors[L*3+2]=Math.min(1,H*V*(1-J)+J)}g.geo.setDrawRange(0,C),g.geo.attributes.position.needsUpdate=!0,g.geo.attributes.color.needsUpdate=!0}}function nt(K,C){const L=new Y(K,C);L.x=K+(Math.random()-.5)*i*.55,L.y=C+(Math.random()-.5)*s*.45,L.z=(Math.random()-.5)*340,n.push(L)}function pt(K,C){nt(K,C)}function _t(K,C=!1){return new ie({color:16777215,transparent:!0,opacity:K,side:C?Re:de,depthWrite:!C,blending:ze,toneMapped:!1})}function ht(K,C,L=!1){const O=new $t(K,_t(C,L),A);return O.instanceColor=new Le(new Float32Array(A*3),3),O.frustumCulled=!1,O}return{init(K,C,L,O){i=K,s=C,n=[],t=[],e=[],r=0,I=0,o=O,d=Pf(),y=Nl(),w=Fl(),x=Lf(),a=ht(d,.88),l=ht(y,.82),h=ht(y,.82),u=ht(y,.35,!0),f=ht(y,.35,!0),p=ht(w,.92),m=ht(w,.92),M=ht(x,.9);for(const G of[a,l,h,u,f,p,m,M])o.add(G);_=ve(tu,$x),g=ve(ao,jx),_.mat.blending=Qt,g.mat.blending=Qt,_.mat.opacity=.78,g.mat.opacity=.72,o.add(_.points,g.points);for(const[G,U]of Rn(30,K,C,.06,[C*.1,C*.95]))pt(G,U);Vi(n),X();for(let G=0;G<tu;G++)e.push({x:Math.random()*K,y:Math.random()*C,z:(Math.random()-.5)*320,speedX:(Math.random()-.5)*.2,speedY:(Math.random()-.5)*.2,speedZ:(Math.random()-.5)*.15,phase:Math.random()*Math.PI*2,rgb:ro(G%3!==2?Dl(G):Eo(G))})},resize(K,C){yr(n,i,s,K,C),i=K,s=C},update(K,C,L,O){if(r+=K,n=n.filter(U=>U.update(K,r)),(C==null?void 0:C.velocity)>3){const U=Math.min(5,Math.floor(C.velocity/14)+1);for(let B=0;B<U;B++)pt(C.x+(Math.random()-.5)*60,C.y+(Math.random()-.5)*50)}if(Math.random()<K*2.1*(O.speed||1)&&pt(Math.random()*i,Math.random()*s*.85),L!=null&&L.isActive&&L.bass>.3){const U=Math.floor(L.bass*3);for(let B=0;B<U;B++)pt(Math.random()*i,Math.random()*s*.85)}t=t.filter(U=>(U.x+=(U.vx||0)*K,U.y+=(U.vy||0)*K,U.z+=(U.vz||0)*K,U.opacity-=K*.14,U.opacity>.02)),t.length>ao&&t.splice(0,t.length-ao),e.forEach(U=>{U.x+=(U.speedX||0)*(O.speed||1)*45*K,U.y+=(U.speedY||0)*(O.speed||1)*45*K,U.z+=(U.speedZ||0)*(O.speed||1)*45*K,U.x<-20&&(U.x=i+20),U.x>i+20&&(U.x=-20),U.y<-20&&(U.y=s+20),U.y>s+20&&(U.y=-20)});const G=Math.min(A,Math.max(24,Math.floor((O.particleCount||1030)/4)));n.length>G&&n.splice(0,n.length-G)},render(){X()},onPointerDown(K,C){for(let L=0;L<8;L++)pt(K+(Math.random()-.5)*80,C+(Math.random()-.5)*60)},onPointerMove(){},onPointerUp(){},setParams(){},setPalette(){},samplePoints(K,C=i,L=s){const{w:O,h:G}=sn(C,L,i,s);return Sr(n,K,O,G,An)},destroy(){n=[],t=[],e=[],d==null||d.dispose(),y==null||y.dispose(),w==null||w.dispose(),x==null||x.dispose(),a=null,l=null,h=null,u=null,f=null,p=null,m=null,M=null,_=null,g=null,o=null}}}const Uo=Ds,If=Is;function sv(){const n=new kt(.3,28,22);n.scale(1.42,1.08,1.16),n.translate(.4,.04,0);const t=new kt(.2,16,14);return t.scale(1.15,.82,1.02),t.translate(.34,-.06,.02),Uo([n,t])}function rv(){const n=new we(.34,.01,6,36);return n.rotateY(Math.PI/2),n.scale(1.15,1,1.08),n.translate(.4,.04,0),If(n)}function ov(){const n=new kt(.1,12,10);return n.scale(1.35,.9,1.15),n.translate(.4,.04,0),If(n)}function av(){const n=new kt(.042,12,10);n.translate(.58,.1,.2);const t=new kt(.042,12,10);return t.translate(.58,.1,-.2),Uo([n,t])}function lv(){const n=new kt(.02,10,8);n.translate(.605,.1,.215);const t=new kt(.02,10,8);return t.translate(.605,.1,-.215),Uo([n,t])}function cv(){const n=new Ze;n.moveTo(.02,.02),n.quadraticCurveTo(-.2,.16,-.5,.11),n.quadraticCurveTo(-.85,.08,-1.15,.05),n.quadraticCurveTo(-1.25,.025,-1.3,.008),n.lineTo(-1.3,-.008),n.quadraticCurveTo(-1.25,-.025,-1.15,-.045),n.quadraticCurveTo(-.85,-.06,-.5,-.07),n.quadraticCurveTo(-.2,-.06,-.02,-.012),n.lineTo(.02,-.008),n.closePath();const t=new Mn(n,{depth:.045,bevelEnabled:!1,curveSegments:14});t.translate(0,.02,-.022);const e=new Bn(.028,.008,1.15,8);e.rotateZ(Math.PI/2),e.translate(-.62,.02,0);const i=[];for(let s=0;s<12;s++){const r=Math.random(),o=-.08-r*1.15,a=(Math.random()-.5)*.1*(1-r*.55)+.02,l=.01+Math.random()*.014,h=new kt(l,6,5);h.translate(o,a,(Math.random()-.5)*.04),i.push(h)}return Uo([t,e,...i])}function hv(){const n=Math.random()*2-1,t=Math.random()*Math.PI*2,e=Math.sqrt(Math.max(0,1-n*n));return{x:e*Math.cos(t),y:e*Math.sin(t),z:n}}function uv(){let n=[],t=[],e=[],i=0,s=0,r=0,o="rainbow",a=null,l=null,h=null,u=null,f=null,p=null,m=null,M=null,_=null,g=null,d=null,y=null,w=null,x=null,R=null;const S=new Kt,E=new Vt,T=new k,v=new k(1,0,0),b=new Ui,A=new Ui,I=new k(0,0,1),z=new k(0,1,0),W=260,Y=128;class Z{constructor(O,G,U){this.x=O,this.y=G,this.z=(Math.random()-.5)*W,this.maxSize=ax(),this.size=0,this.growth=0,this.growthRate=.4+Math.random()*.45;const B=hv();this.dirX=B.x,this.dirY=B.y,this.dirZ=B.z,this.speed=70+Math.random()*70,this.wagPhase=Math.random()*Math.PI*2,this.wagSpeed=28+Math.random()*12,this.tremblePhase=Math.random()*Math.PI*2,this.trembleSpeed=42+Math.random()*18;const H=[.5,1/3,.25][Math.floor(Math.random()*3)];this.wagAmp=(.75+Math.random()*.35)*H,this.trembleAmp=(.22+Math.random()*.14)*H,this.color=ya(),this.rgb=Li(this.color),this.innerRgb={r:Math.min(255,this.rgb.r+50),g:Math.min(255,this.rgb.g+40),b:Math.min(255,this.rgb.b+55)},this.lifetime=0,this.maxLifetime=8+Math.random()*5,this.phase="growing",this.opacity=1,this.wag=0}update(O,G){this.lifetime+=O;const U=Math.sin(G*this.wagSpeed+this.wagPhase)*this.wagAmp,B=Math.sin(G*this.trembleSpeed+this.tremblePhase)*this.trembleAmp+Math.sin(G*this.trembleSpeed*2.1+this.tremblePhase*1.4)*this.trembleAmp*.65+Math.sin(G*this.trembleSpeed*3.4+this.tremblePhase*.6)*this.trembleAmp*.35;this.wag=U+B;const H=.65+Math.abs(this.wag)*.95,st=this.speed*H*O;this.x+=this.dirX*st,this.y+=this.dirY*st,this.z+=this.dirZ*st;const V=80;switch(this.x<-V&&(this.x=i+V),this.x>i+V&&(this.x=-V),this.y<-V&&(this.y=s+V),this.y>s+V&&(this.y=-V),this.z<-W*.5&&(this.z=W*.5),this.z>W*.5&&(this.z=-W*.5),this.phase){case"growing":{this.growth=Math.min(1,this.growth+this.growthRate*O);const J=1.70158,N=J+1,vt=this.growth;this.size=this.maxSize*(1+N*Math.pow(vt-1,3)+J*Math.pow(vt-1,2)),this.growth>=1&&(this.phase="bloomed");break}case"bloomed":this.lifetime>this.maxLifetime*.6&&(this.phase="wilting"),Math.random()<O*4.5&&this._sparkTrail();break;case"wilting":this.opacity-=O*.25,Math.random()<O*5&&this._shed(),Math.random()<O*6&&this._sparkTrail();break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_shed(){for(let O=0;O<4+Math.floor(Math.random()*4);O++){const G=Li(ya());t.push({x:this.x+(Math.random()-.5)*this.size,y:this.y+(Math.random()-.5)*this.size,z:this.z+(Math.random()-.5)*50,vx:(Math.random()-.5)*90,vy:-10-Math.random()*50,vz:(Math.random()-.5)*55,rgb:{r:Math.round(G.r+(255-G.r)*.72),g:Math.round(G.g+(255-G.g)*.72),b:Math.round(G.b+(255-G.b)*.72)},opacity:1,glow:1.55+Math.random()*.7,kind:"shard",twinkle:Math.random()*Math.PI*2})}}_sparkTrail(){const O=Li(this.color);t.push({x:this.x-this.dirX*this.size*.35+(Math.random()-.5)*this.size*.4,y:this.y-this.dirY*this.size*.35+(Math.random()-.5)*this.size*.4,z:this.z-this.dirZ*12+(Math.random()-.5)*30,vx:-this.dirX*20+(Math.random()-.5)*40,vy:-this.dirY*20+(Math.random()-.5)*40,vz:-this.dirZ*20+(Math.random()-.5)*30,rgb:{r:Math.round(O.r+(255-O.r)*.78),g:Math.round(O.g+(255-O.g)*.78),b:Math.round(O.b+(255-O.b)*.78)},opacity:1,glow:1.7+Math.random()*.7,kind:"dust",twinkle:Math.random()*Math.PI*2})}}function et(L,O){S.position.set(0,0,-4e3),S.scale.set(.001,.001,.001),S.quaternion.identity(),S.updateMatrix(),L.setMatrixAt(O,S.matrix),L.instanceColor&&L.setColorAt(O,E.setRGB(0,0,0))}function X(L,O){T.set(L.dirX,-L.dirY,L.dirZ),T.lengthSq()<1e-8?T.set(1,0,0):T.normalize(),Math.abs(T.x)>.999?(b.identity(),T.x<0&&b.setFromAxisAngle(z,Math.PI)):b.setFromUnitVectors(v,T),A.setFromAxisAngle(I,L.wag*O),S.quaternion.copy(b).multiply(A)}function nt(L,O=1){const G=te(L.x,L.y,L.z,i,s);S.position.copy(G),X(L,.12);const U=L.size*O;S.scale.set(U,U,U),S.updateMatrix()}function pt(L,O=1){const G=te(L.x,L.y,L.z,i,s);S.position.copy(G),X(L,1.35);const U=L.size*O,B=1+Math.sin(r*L.trembleSpeed+L.tremblePhase)*.16+Math.sin(r*L.trembleSpeed*2.4+L.tremblePhase)*.08;S.scale.set(U*B,U/Math.sqrt(Math.max(.55,B)),U),S.updateMatrix()}function _t(){if(!l||!m||!f||!p)return;const L=Math.min(n.length,Y),O=[l,h,u,f,p,m];for(let G=0;G<Y;G++){const U=G<L?n[G]:null;if(!U||U.size<.5){for(const J of O)et(J,G);continue}const B=Ms(U.rgb,.95),H=Ms(U.innerRgb,1.25),st=Ms(U.innerRgb,1.1),V=Ms(U.rgb,.75);nt(U,1),l.setMatrixAt(G,S.matrix),l.setColorAt(G,E.setRGB(B.r*.55,B.g*.7,Math.min(1,B.b*.95))),nt(U,1),h.setMatrixAt(G,S.matrix),h.setColorAt(G,E.setRGB(H.r,H.g,H.b)),nt(U,.92),u.setMatrixAt(G,S.matrix),u.setColorAt(G,E.setRGB(Math.min(1,st.r*.7+.25),Math.min(1,st.g*.75+.3),Math.min(1,st.b*.7+.35))),nt(U,1),f.setMatrixAt(G,S.matrix),f.setColorAt(G,E.setRGB(.82,.94,1)),nt(U,1),p.setMatrixAt(G,S.matrix),p.setColorAt(G,E.setRGB(.04,.06,.12)),pt(U,1),m.setMatrixAt(G,S.matrix),m.setColorAt(G,E.setRGB(V.r*.5,V.g*.65,Math.min(1,V.b*.9)))}for(const G of O)G.instanceMatrix.needsUpdate=!0,G.instanceColor&&(G.instanceColor.needsUpdate=!0);if(M&&(e.forEach((G,U)=>{const B=te(G.x,G.y,G.z,i,s);M.positions[U*3]=B.x,M.positions[U*3+1]=B.y,M.positions[U*3+2]=B.z;const H=.55+.35*Math.abs(Math.sin(r*3.4+G.phase)),st=G.rgb.r/255*.28+.72,V=G.rgb.g/255*.28+.72,J=G.rgb.b/255*.28+.72;M.colors[U*3]=st*H,M.colors[U*3+1]=V*H,M.colors[U*3+2]=J*H}),M.geo.setDrawRange(0,e.length),M.geo.attributes.position.needsUpdate=!0,M.geo.attributes.color.needsUpdate=!0),_){const G=Math.min(t.length,700);for(let U=0;U<G;U++){const B=t[U],H=te(B.x,B.y,B.z,i,s);_.positions[U*3]=H.x,_.positions[U*3+1]=H.y,_.positions[U*3+2]=H.z;const[st,V,J]=cn(B.rgb),N=st*.3+.7,vt=V*.3+.7,ut=J*.3+.7,yt=.7+.3*Math.abs(Math.sin(r*9+(B.twinkle||0))),xt=(B.glow||1.6)*(.55+B.opacity*.45)*yt;_.colors[U*3]=Math.min(1,N*xt),_.colors[U*3+1]=Math.min(1,vt*xt),_.colors[U*3+2]=Math.min(1,ut*xt)}_.geo.setDrawRange(0,G),_.geo.attributes.position.needsUpdate=!0,_.geo.attributes.color.needsUpdate=!0}}function ht(L,O){n.push(new Z(L,O,o))}function K(L,O){ht(L,O),ht(L+(Math.random()-.5)*100,O+(Math.random()-.5)*80)}function C(L,O=!1){return new ie({color:16777215,transparent:!0,opacity:L,side:de,depthWrite:!1,blending:O?Qt:ze,toneMapped:!1})}return{init(L,O,G,U){i=L,s=O,o=G.palette||"rainbow",n=[],t=[],e=[],r=0,a=U,g=sv(),d=rv(),y=ov(),w=av(),x=lv(),R=cv(),l=new $t(g,C(.28,!0),Y),h=new $t(d,C(.85,!0),Y),u=new $t(y,C(.45,!0),Y),f=new $t(w,C(.95,!1),Y),p=new $t(x,C(1,!1),Y),m=new $t(R,C(.22,!0),Y);for(const B of[l,h,u,f,p,m])B.instanceColor=new Le(new Float32Array(Y*3),3),B.frustumCulled=!1,a.add(B);M=ve(80,5),_=ve(700,14),M.mat.blending=Qt,_.mat.blending=Qt,M.mat.opacity=.7,_.mat.opacity=.65,M.mat.toneMapped=!1,_.mat.toneMapped=!1,a.add(M.points,_.points);for(const[B,H]of Rn(40,L,O))K(B,H);Vi(n),_t();for(let B=0;B<70;B++)e.push({x:Math.random()*L,y:Math.random()*O,z:(Math.random()-.5)*220,speedY:-(.08+Math.random()*.25),phase:Math.random()*Math.PI*2,rgb:(()=>{const H=Li(ya());return{r:Math.round(H.r+(255-H.r)*.75),g:Math.round(H.g+(255-H.g)*.75),b:Math.round(H.b+(255-H.b)*.75)}})()})},resize(L,O){({width:i,height:s}=uc(n,i,s,L,O))},update(L,O,G,U){if(r+=L,o=U.palette||o,n=n.filter(H=>H.update(L,r)),(O==null?void 0:O.velocity)>3){const H=Math.min(4,Math.floor(O.velocity/16)+1);for(let st=0;st<H;st++)ht(O.x+(Math.random()-.5)*50,O.y+(Math.random()-.5)*50)}if(Math.random()<L*3.6*(U.speed||1)&&K(Math.random()*i,Math.random()*s),G!=null&&G.isActive&&G.bass>.3){const H=Math.floor(G.bass*8);for(let st=0;st<H;st++)K(Math.random()*i,Math.random()*s)}t=t.filter(H=>(H.x+=H.vx*L,H.y+=H.vy*L,H.z+=H.vz*L,H.vy+=18*L,H.opacity-=L*.12,H.opacity>.02&&H.y<s+80)),e.forEach(H=>{H.y+=H.speedY*(U.speed||1)*60*L,H.y<-10&&(H.y=s+10,H.x=Math.random()*i)});const B=Math.min(Y,Math.max(40,Math.floor((U.particleCount||1030)/2)));n.length>B&&n.splice(0,n.length-B)},render(){_t()},onPointerDown(L,O){for(let G=0;G<12;G++)K(L+(Math.random()-.5)*90,O+(Math.random()-.5)*90)},onPointerMove(){},onPointerUp(){},setParams(L){o=L.palette||o},samplePoints(L,O=i,G=s){return fc(n,L,O,G,i,s)},destroy(){n=[],t=[],e=[],g==null||g.dispose(),d==null||d.dispose(),y==null||y.dispose(),w==null||w.dispose(),x==null||x.dispose(),R==null||R.dispose(),l=null,h=null,u=null,f=null,p=null,m=null,M=null,_=null,a=null}}}const Te=.16,fv={depth:Te,bevelEnabled:!0,bevelThickness:.018,bevelSize:.012,bevelSegments:2,curveSegments:20},gr=.16,Mr=.115,zl=-.42,_r=.038,lr=1.05;function ke(n,t,e=Te,i=0,s=0,r=0,o=0){const a=new be(n,t,e);return o&&a.rotateZ(o),a.translate(i,s,r),a}function dv(n){const t=n.index?n.toNonIndexed():n.clone();t.computeVertexNormals();const e=t.attributes.position.count;return t.attributes.uv||t.setAttribute("uv",new jt(new Float32Array(e*2),2)),t}function _n(n){const t=n.filter(Boolean).map(dv);if(t.length===0){const i=new be(.25,.25,Te);return i.center(),i}if(t.length===1)return t[0].center(),t[0].computeVertexNormals(),t[0];const e=Xn(t,!1);return e?(e.center(),e.computeVertexNormals(),e):(t[0].center(),t[0])}function Us(n){return new Mn(n,fv)}function er(n,t=.04,e=48){const i=n.map(([s,r])=>new k(s,r,0));return new si(new Ei(i,!1,"catmullrom",.5),e,t,8,!1)}function pv(n,t){const e=new Ze;return e.absellipse(n,t,gr,Mr,0,Math.PI*2,!1,zl),Us(e)}function mv(n,t){const e=new Ze;e.absellipse(n,t,gr,Mr,0,Math.PI*2,!1,zl);const i=new ur;return i.absellipse(n,t,gr*.55,Mr*.55,0,Math.PI*2,!0,zl),e.holes.push(i),Us(e)}function xr(n,t){const e=n+gr*.7,i=t+Mr*.25,s=i+lr;return{stemX:e,stemTop:s,stemBase:i,parts:[pv(n,t),ke(_r,lr,Te,e,i+lr*.5,0)]}}function Ol(n,t,e=0){const i=t-e,s=new Ze;return s.moveTo(n+_r*.45,i),s.quadraticCurveTo(n+.22,i-.02,n+.34,i-.18),s.quadraticCurveTo(n+.38,i-.34,n+.28,i-.48),s.quadraticCurveTo(n+.2,i-.52,n+.16,i-.4),s.quadraticCurveTo(n+.24,i-.28,n+.18,i-.14),s.lineTo(n+_r*.45,i-.1),s.closePath(),Us(s)}function gv(){const n=er([[.02,.72],[0,.35],[-.02,0],[0,-.35],[.04,-.55]],.045,40),t=er([[.02,.55],[.18,.62],[.22,.48],[.1,.38],[-.02,.42],[0,.55]],.042,36),e=er([[0,.2],[.16,.12],[.2,-.05],[.08,-.18],[-.08,-.1],[-.12,.08],[-.02,.18]],.042,44),i=er([[.04,-.4],[.16,-.48],[.1,-.62],[-.04,-.58],[-.08,-.42],[.02,-.38]],.04,36),s=new Ze;s.absellipse(.04,-.02,.11,.14,0,Math.PI*2,!1,.2);const r=new ur;return r.absellipse(.04,-.02,.045,.06,0,Math.PI*2,!0,.2),s.holes.push(r),_n([n,t,e,i,Us(s)])}function Mv(){return _n([ke(.048,1.12,Te,-.17,0,0,.06),ke(.048,1.12,Te,.17,0,0,.06),ke(.56,.052,Te,0,.2,0,.28),ke(.56,.052,Te,0,-.2,0,.28)])}function _v(){const n=ke(.048,1.15,Te,-.16,.05,0),t=new Ze;return t.moveTo(-.16,.12),t.quadraticCurveTo(.18,.38,.2,.02),t.quadraticCurveTo(.18,-.32,-.16,-.48),t.lineTo(-.16,-.3),t.quadraticCurveTo(.04,-.2,.06,0),t.quadraticCurveTo(.04,.18,-.16,0),t.closePath(),_n([n,Us(t)])}function xv(){return _n([ke(.048,.62,Te,-.14,.28,0),ke(.048,.62,Te,.14,-.28,0),ke(.36,.048,Te,0,.18,0,.12),ke(.36,.048,Te,0,-.18,0,.12)])}function vv(){return _n(xr(-.04,-.38).parts)}function yv(){const e=-.04+gr*.7,i=-.38+Mr*.25;return _n([mv(-.04,-.38),ke(_r,lr,Te,e,i+lr*.5,0)])}function Sv(){return _n([ke(.055,1.05,Te,.06,0,0,-.12),ke(.55,.058,Te,-.1,.38,0,-.1),ke(.38,.052,Te,-.02,.05,0,-.1),er([[.06+.02,.48],[.06+.12,.58],[.06+.04,.64]],.036,14)])}function bv(){const t=ke(.055,1,Te,-.1,-.02,0,-.1),e=new Ze;return e.moveTo(-.1,.18),e.quadraticCurveTo(-.1+.38,.28,-.1+.4,-.02),e.quadraticCurveTo(-.1+.38,-.32,-.1,-.28),e.lineTo(-.1,-.14),e.quadraticCurveTo(-.1+.22,-.16,-.1+.24,-.02),e.quadraticCurveTo(-.1+.22,.12,-.1,.08),e.closePath(),_n([t,Us(e)])}function wv(){const n=xr(-.04,-.38);return _n([...n.parts,Ol(n.stemX,n.stemTop,0)])}function Ev(){const n=xr(-.04,-.38);return _n([...n.parts,Ol(n.stemX,n.stemTop,0),Ol(n.stemX,n.stemTop,.18)])}function Df(n){const r=xr(-.24,-.38),o=xr(.24,-.38),a=.07,l=Math.min(r.stemTop,o.stemTop)-.04,h=[...r.parts,...o.parts];for(let u=0;u<n;u++){const f=l-u*.14;h.push(ke(.48+_r,a,Te,0,f,0,.04))}return _n(h)}function Av(){return Df(1)}function Tv(){return Df(2)}const Ti=["trebleClef","sharp","flat","natural","quarter","half","forte","piano","eighth","sixteenth","beamedEighth","beamedSixteenth"],Rv={trebleClef:gv,sharp:Mv,flat:_v,natural:xv,quarter:vv,half:yv,forte:Sv,piano:bv,eighth:wv,sixteenth:Ev,beamedEighth:Av,beamedSixteenth:Tv};function Cv(){return Ti[Math.floor(Math.random()*Ti.length)]}function Pv(){return Cv()}const Lv=.36,Iv=.12,lo=1.2,su=140,Ea=1200,Dv=3,Uv=1.35,Nv=1.05;function Fv(){let n=[],t=[],e=[],i=0,s=0,r=0,o="rainbow",a=null,l={},h=null,u=null;const f=new Kt,p=new Vt,m=new k,M=64,_=10;class g{constructor(E,T,v){this.x=E,this.y=T,this.z=(Math.random()-.5)*280,this.note=Pv(),this.maxSize=rx(),this.size=0,this.growth=0,this.growthRate=(.35+Math.random()*.5)*Uv,this.baseRot=(Math.random()-.5)*.35,this.tilt=(Math.random()-.5)*.45,this.yaw=(Math.random()-.5)*.55,this.windPhase=Math.random()*Math.PI*2,this.windSpeed=.42+Math.random()*.28,this.windAmp=.07+Math.random()*.06,this.spinX=.22+Math.random()*.18,this.spinY=.28+Math.random()*.22,this.spinZ=.12+Math.random()*.1,this.phaseX=Math.random()*Math.PI*2,this.phaseY=Math.random()*Math.PI*2,this.phaseZ=Math.random()*Math.PI*2,this.bobPhase=Math.random()*Math.PI*2,this.bobSpeed=.52+Math.random()*.38,this.driftZ=(Math.random()-.5)*28,this.driftPhase=Math.random()*Math.PI*2,this.glidePhase=Math.random()*Math.PI*2,this.flowAngle=Math.random()*Math.PI*2,this.flowTurn=.18+Math.random()*.32,this.flutterAmp=.72+Math.random()*.55,this.smoothRate=.9+Math.random()*.75;const b=7+Math.random()*10;this.vx=Math.cos(this.flowAngle)*b,this.vy=-5-Math.random()*7,this.vz=(Math.random()-.5)*22,this.targetVx=this.vx,this.targetVy=this.vy,this.targetVz=this.vz,this.swayX=0,this.swayY=0,this.swayZ=0,this.color=cc(v),this.rgb=vf(this.color),this.innerRgb=xf(this.rgb),this.lifetime=0,this.maxLifetime=6+Math.random()*6,this.phase="growing",this.opacity=1,this.bloomedAt=null}update(E,T){this.lifetime+=E,this.flowAngle+=this.flowTurn*E*(.45+.35*Math.sin(T*.28+this.driftPhase));const v=(6+Math.sin(T*.32+this.glidePhase)*3.5)*this.flutterAmp;this.targetVx=Math.cos(this.flowAngle)*v+Math.sin(T*.4+this.phaseX)*7,this.targetVy=Math.sin(this.flowAngle)*v*.3-4.5+Math.cos(T*.3+this.bobPhase)*3.5,this.targetVz=Math.sin(T*.26+this.windPhase)*v*.42+Math.cos(this.flowAngle*1.2+this.glidePhase)*5;const b=1-Math.exp(-this.smoothRate*E);this.vx+=(this.targetVx-this.vx)*b,this.vy+=(this.targetVy-this.vy)*b,this.vz+=(this.targetVz-this.vz)*b,m.set(this.vx,this.vy,this.vz);const A=m.length();A>28&&m.multiplyScalar(28/A),A<4&&A>.01&&m.multiplyScalar(4/A),this.vx=m.x,this.vy=m.y,this.vz=m.z;const I=this.flutterAmp;switch(this.swayX=Math.sin(T*.58+this.phaseX)*22*I+Math.sin(T*1.12+this.driftPhase)*9*I,this.swayY=Math.cos(T*.46+this.bobPhase)*18*I+Math.sin(T*.92+this.phaseY)*7*I,this.swayZ=Math.sin(T*.38+this.windPhase)*16*I+Math.cos(T*.74+this.driftPhase)*8*I,this.x+=this.vx*E+this.swayX*E*.55,this.y+=this.vy*E+this.swayY*E*.55,this.z+=this.vz*E+this.swayZ*E*.48,this.tumbleX=Math.sin(T*this.spinX+this.phaseX)*.2,this.tumbleY=Math.sin(T*this.spinY+this.phaseY)*.34,this.tumbleZ=Math.sin(T*this.spinZ+this.phaseZ)*.1,this.bob=Math.sin(T*this.bobSpeed+this.bobPhase)*28,this._softBounds(E),this.phase){case"growing":this.growth=Math.min(1,this.growth+this.growthRate*E),this.size=this.maxSize*Tf(this.growth),this.growth>=1&&(this.phase="bloomed",this.bloomedAt=this.lifetime);break;case"bloomed":this.bloomedAt==null&&(this.bloomedAt=this.lifetime),this.lifetime-this.bloomedAt>=Nv&&Math.random()<E*3.5&&this._shedDust(),this.lifetime>this.maxLifetime*.55&&(this.phase="wilting");break;case"wilting":this.opacity-=E*.28,Math.random()<E*7.5&&this._shedShard(),Math.random()<E*9.5&&this._shedDust();break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_softBounds(E){const v=22*E;this.x<60&&(this.vx+=v,this.flowAngle+=E*.35),this.x>i-60&&(this.vx-=v,this.flowAngle-=E*.35),this.y<60&&(this.vy+=v*.5),this.y>s-60&&(this.vy-=v*.4);const b=80;this.x<-b&&(this.x=i+b*.4),this.x>i+b&&(this.x=-b*.4),this.y<-b&&(this.y=s+b*.4),this.y>s+b&&(this.y=-b*.4),this.z<-260&&(this.z=220),this.z>260&&(this.z=-220)}_shedShard(){for(let E=0;E<3+Math.floor(Math.random()*3);E++)t.push({x:this.x+(Math.random()-.5)*this.size,y:this.y+(Math.random()-.5)*this.size,z:this.z+(Math.random()-.5)*40,vx:(Math.random()-.5)*65,vy:-18-Math.random()*40,vz:(Math.random()-.5)*42,size:this.size*.12+Math.random()*6,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*6,rgb:Ts(this.rgb,1.42),opacity:1,glow:(1.78+Math.random()*.4)*lo,kind:"shard"})}_shedDust(){for(let E=0;E<5+Math.floor(Math.random()*4);E++)t.push({x:this.x+(Math.random()-.5)*this.size*.5,y:this.y+(Math.random()-.5)*this.size*.5,z:this.z+(Math.random()-.5)*30,vx:(Math.random()-.5)*85,vy:(Math.random()-.5)*85-8,vz:(Math.random()-.5)*55,size:2+Math.random()*5,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*8,rgb:Ts(this.innerRgb,1.48),opacity:1,glow:(1.88+Math.random()*.4)*lo,kind:"dust"})}}function d(S,E=1){const T=Math.sin(r*S.windSpeed+S.windPhase),v=Math.sin(r*S.windSpeed*1.37+S.windPhase*1.2),b=te(S.x+S.swayX*.08,S.y+S.swayY*.08,S.z+S.bob+v*S.driftZ+S.swayZ*.1,i,s);f.position.copy(b),f.position.x+=T*S.windAmp*S.size*.32,f.position.y+=Math.sin(r*S.bobSpeed*.65+S.bobPhase)*S.size*.06,f.position.z+=v*S.windAmp*S.size*.18;const A=Math.atan2(S.vx+S.swayX*.3,S.vy+S.swayY*.3+.001)*.14;f.rotation.set(S.tilt+S.tumbleX+T*S.windAmp*.45,S.yaw+S.tumbleY+v*.12+A,S.baseRot+S.tumbleZ+v*S.windAmp*.28);const I=S.size*E;return f.scale.set(I,I,I*1.55),f.updateMatrix(),b}function y(S,E){f.position.set(0,0,-4e3),f.scale.set(.001,.001,.001),f.rotation.set(0,0,0),f.updateMatrix(),S.setMatrixAt(E,f.matrix),S.instanceColor&&S.setColorAt(E,p.setRGB(0,0,0))}function w(){if(!Ti.every(T=>l[T]))return;const S=Object.fromEntries(Ti.map(T=>[T,[]])),E=Math.min(n.length,M);for(let T=0;T<E;T++){const v=n[T];v&&v.size>=.5&&S[v.note].push(v)}for(const T of Ti){const v=l[T],b=S[T];for(let A=0;A<_;A++){const I=b[A];if(!I){y(v.mesh,A),y(v.outline,A);continue}d(I,1),v.mesh.setMatrixAt(A,f.matrix);const z=Pi(I.rgb,.92+I.opacity*.32);v.mesh.setColorAt(A,p.setRGB(z.r,z.g,z.b)),d(I,1.03),v.outline.setMatrixAt(A,f.matrix);const W=Pi(I.rgb,.38);v.outline.setColorAt(A,p.setRGB(W.r*.55,W.g*.5,W.b*.75))}v.mesh.instanceMatrix.needsUpdate=!0,v.outline.instanceMatrix.needsUpdate=!0,v.mesh.instanceColor&&(v.mesh.instanceColor.needsUpdate=!0),v.outline.instanceColor&&(v.outline.instanceColor.needsUpdate=!0)}if(h&&(e.forEach((T,v)=>{const b=te(T.x,T.y,T.z,i,s);h.positions[v*3]=b.x,h.positions[v*3+1]=b.y,h.positions[v*3+2]=b.z;const A=.26+.28*Math.abs(Math.sin(r*2.8+T.phase)),I=Pi(T.rgb,A*1.28*lo);h.colors[v*3]=Math.min(1,I.r),h.colors[v*3+1]=Math.min(1,I.g),h.colors[v*3+2]=Math.min(1,I.b)}),h.geo.setDrawRange(0,e.length),h.geo.attributes.position.needsUpdate=!0,h.geo.attributes.color.needsUpdate=!0),u){const T=Math.min(t.length,Ea);for(let v=0;v<T;v++){const b=t[v],A=te(b.x,b.y,b.z,i,s);u.positions[v*3]=A.x,u.positions[v*3+1]=A.y,u.positions[v*3+2]=A.z;const[I,z,W]=cn(b.rgb),Y=(b.glow||1.68)*(.62+b.opacity*.66)*lo,Z=b.kind==="dust"?.96+.14*Math.sin(r*8+b.rot*3):1.08;u.colors[v*3]=Math.min(1,I*Y*Z),u.colors[v*3+1]=Math.min(1,z*Y*Z),u.colors[v*3+2]=Math.min(1,W*Y*Z)}u.geo.setDrawRange(0,T),u.geo.attributes.position.needsUpdate=!0,u.geo.attributes.color.needsUpdate=!0}}function x(S,E){n.push(new g(S,E,o))}const R={color:16777215,transparent:!0,side:de,depthWrite:!1,blending:ze,toneMapped:!1};return{init(S,E,T,v){i=S,s=E,o=T.palette||"rainbow",n=[],t=[],e=[],r=0,a=v,l={};for(const b of Ti){let A;try{A=Rv[b]()}catch(W){console.error("[musicNoteBloom] geometry failed:",b,W),A=new be(.2,.2,Te),A.center()}const I=new $t(A,new ie({...R,opacity:Lv,blending:Qt}),_);I.instanceColor=new Le(new Float32Array(_*3),3),I.frustumCulled=!1,a.add(I);const z=new $t(A,new ie({...R,side:Re,opacity:Iv,depthWrite:!1}),_);z.instanceColor=new Le(new Float32Array(_*3),3),z.frustumCulled=!1,a.add(z),l[b]={mesh:I,outline:z,geo:A}}h=ve(su,5),u=ve(Ea,14),h.mat.opacity=.76,u.mat.opacity=.7,h.mat.blending=Qt,u.mat.blending=Qt,a.add(h.points,u.points);for(const[b,A]of Rn(28,S,E))x(b,A);Vi(n),w();for(let b=0;b<su;b++)e.push({x:Math.random()*S,y:Math.random()*E,z:(Math.random()-.5)*220,speedY:-(.12+Math.random()*.32),phase:Math.random()*Math.PI*2,rgb:hc(o)})},resize(S,E){({width:i,height:s}=uc(n,i,s,S,E))},update(S,E,T,v){r+=S,o=v.palette||o,n=n.filter(A=>A.update(S,r)),wf({dt:S,pointer:E,audioData:T,params:v,spawn:A=>x(A.x+(Math.random()-.5)*50,A.y+(Math.random()-.5)*50),randomSpawn:()=>x(Math.random()*i,Math.random()*s),bassSpawn:()=>x(Math.random()*i,Math.random()*s),randomRate:Dv,pointerMax:3}),t=t.filter(A=>(A.x+=A.vx*S,A.y+=A.vy*S,A.z+=A.vz*S,A.vy+=18*S,A.opacity-=S*(A.kind==="dust"?.14:.1),A.opacity>.02&&A.y<s+80)),Ef(t,Ea),e.forEach(A=>{A.y+=A.speedY*(v.speed||1)*78*S,A.y<-10&&(A.y=s+10,A.x=Math.random()*i)});const b=Math.min(M,Math.max(28,Math.floor((v.particleCount||1030)/3.2)));Af(n,b)},render(){w()},onPointerDown(S,E){for(let T=0;T<6;T++)x(S+(Math.random()-.5)*90,E+(Math.random()-.5)*90)},onPointerMove(){},onPointerUp(){},setParams(S){o=S.palette||o},samplePoints(S,E=i,T=s){return fc(n,S,E,T,i,s)},destroy(){var S,E;n=[],t=[],e=[];for(const T of Ti)(E=(S=l[T])==null?void 0:S.geo)==null||E.dispose();l={},h=null,u=null,a=null}}}const No=Ds,Mc=Is;function zv(n=.14,t=.055){const e=new Ze;for(let i=0;i<5;i++){const s=i*Math.PI*2/5-Math.PI/2,r=s+Math.PI/5,o=Math.cos(s)*n,a=Math.sin(s)*n,l=Math.cos(r)*t,h=Math.sin(r)*t;i===0?e.moveTo(o,a):e.lineTo(o,a),e.lineTo(l,h)}return e.closePath(),e}function Ov(){const n=new Ze;return n.moveTo(.02,.12),n.quadraticCurveTo(.28,.38,.52,.22),n.quadraticCurveTo(.62,.08,.58,-.06),n.quadraticCurveTo(.5,-.16,.42,-.1),n.quadraticCurveTo(.34,-.2,.26,-.1),n.quadraticCurveTo(.18,-.2,.1,-.08),n.quadraticCurveTo(.04,-.02,.02,.08),n.closePath(),n}const ru={depth:.16,bevelEnabled:!0,bevelThickness:.025,bevelSize:.018,bevelSegments:2,curveSegments:18};function Bv(){const n=[],t=new kt(.18,18,14);t.translate(0,.42,.06),n.push(t);const e=new kt(.11,12,10);e.scale(1.45,.6,.9),e.translate(.09,.55,.02),n.push(e);const i=new Ze;i.moveTo(-.11,.22),i.lineTo(.11,.22),i.lineTo(.22,-.48),i.lineTo(-.22,-.48),i.closePath();const s=new Mn(i,ru);s.translate(0,0,-ru.depth*.5),n.push(s);const r=new Mn(zv(.1,.04),{depth:.08,bevelEnabled:!0,bevelThickness:.012,bevelSize:.01,bevelSegments:1,curveSegments:2});return r.translate(0,.02,.14),n.push(r),No(n)}function Uf(n,t,e=.008){const i={x:0,y:.42,z:.06},s=.168,r=Math.hypot(n,t),o=Math.sqrt(Math.max(1e-4,s*s-r*r));return[i.x+n,i.y+t,i.z+o+e]}function Gv(){const n=[];for(const t of[-1,1]){const e=new we(.054,.013,8,22,Math.PI*.92);e.scale(1,1,.34);const[i,s,r]=Uf(t*.072,.022,.012);e.translate(i,s,r),n.push(e)}return No(n)}function Hv(){const n=new we(.036,.011,6,16,Math.PI*.72);n.rotateZ(Math.PI),n.scale(1,1,.34);const[t,e,i]=Uf(0,-.055,.012);return n.translate(t,e,i),Mc(n)}function Vv(){const n=new kt(.001,4,4);return n.translate(0,-10,0),Mc(n)}function kv(){const n=[];for(const t of[-1,1]){const e=new kt(.03,10,8);e.scale(1.35,.7,.45),e.translate(t*.115,.39,.2),n.push(e)}return No(n)}function Wv(){const n=new Mn(Ov(),{depth:.1,bevelEnabled:!0,bevelThickness:.02,bevelSize:.015,bevelSegments:2,curveSegments:18});n.scale(.98,1.02,1.08),n.translate(0,0,-.05);const t=[];for(let e=0;e<3;e++)t.push(Px(.24-e*.035,.018,.035,.2+e*.035,.11-e*.055,.02,.2));return No([n,...t])}function Xv(){const n=new we(.2,.028,10,32);return n.rotateX(Math.PI/2),n.translate(0,.72,0),Mc(n)}const Yv=6,qv=10.5,Zv=14,Jv=21,ou=180,au=48,Aa=1100,Ta=280,lu=.28,Zs=1.68,Kv=.3,$v=.66,cu=.24,hu=.58,jv=.34,Qv=.8,ty=.74,uu=.72,fu=.68,ey=1.52,ny=1.44,iy=1.42,sy=1.62,Ra=2;function du(n){return Cx(n,sy)}function ry(){let n=[],t=[],e=[],i=[],s=0,r=0,o=0,a="rainbow",l=null,h=null,u=null,f=null,p=null,m=null,M=null,_=null,g=null,d=null,y=null,w=null,x=null,R=null,S=null,E=null,T=null,v=null,b=null,A=null,I=null,z=null,W=null;const Y=new Kt,Z=new Kt,et=new Kt,X=new Kt;Y.add(Z,et,X),Z.position.set(-.04,.1,-.1),et.position.set(.04,.1,-.1);const nt=new Kt,pt=new Vt,_t=48;class ht{constructor(B,H,st){this.x=B,this.y=H,this.z=(Math.random()-.5)*280,this.maxSize=yf()*.92,this.size=0,this.growth=0,this.growthRate=.32+Math.random()*.4,this.baseRot=(Math.random()-.5)*.35,this.tilt=(Math.random()-.5)*.4,this.yaw=(Math.random()-.5)*.5,this.windPhase=Math.random()*Math.PI*2,this.windSpeed=.7+Math.random()*.5,this.windAmp=.06+Math.random()*.05,this.flapPhase=Math.random()*Math.PI*2,this.flapSpeed=4.2+Math.random()*2.2,this.riseSpeed=(55+Math.random()*45)*Ra,this.bobPhase=Math.random()*Math.PI*2,this.bobSpeed=1.1+Math.random()*.7,this.spinY=.25+Math.random()*.2,this.phaseY=Math.random()*Math.PI*2,this.hueIndex=Math.floor(Math.random()*ci.length),this.color=ci[this.hueIndex],this.rgb=Li(this.color),this.innerRgb={...this.rgb},this.lifetime=0,this.maxLifetime=7+Math.random()*5,this.phase="growing",this.opacity=1,this.flap=0}update(B,H){this.lifetime+=B,this.flap=Math.sin(H*this.flapSpeed+this.flapPhase)*.55,this.bob=Math.sin(H*this.bobSpeed+this.bobPhase)*18,this.sway=Math.sin(H*this.windSpeed+this.windPhase)*this.windAmp,this.spin=Math.sin(H*this.spinY+this.phaseY)*.35;const st=this.riseSpeed*(.75+Math.abs(this.flap)*.55);switch(this.y-=st*B,this.x+=Math.sin(H*.9+this.flapPhase)*18*B,this.z+=Math.cos(H*.7+this.bobPhase)*12*B,this.y<-100&&(this.y=r+80,this.x=Math.random()*s,this.z=(Math.random()-.5)*280),this.phase){case"growing":{this.growth=Math.min(1,this.growth+this.growthRate*B);const V=1.70158,J=V+1,N=this.growth;this.size=this.maxSize*(1+J*Math.pow(N-1,3)+V*Math.pow(N-1,2)),this.growth>=1&&(this.phase="bloomed");break}case"bloomed":Math.random()<B*9.5&&this._sparkTrail(),this.lifetime>this.maxLifetime*.65&&(this.phase="wilting");break;case"wilting":this.opacity-=B*.22,Math.random()<B*9&&this._shed(),Math.random()<B*7.5&&this._sparkTrail();break}return this.opacity>.01&&this.lifetime<this.maxLifetime}_sparkTrail(){const B=1+(Math.random()<.62?1:0);for(let H=0;H<B;H++){const st=Math.random()<.5?-1:1;t.push({x:this.x+st*this.size*(.35+Math.random()*.55),y:this.y+this.size*(.2+Math.random()*.55),z:this.z-30-Math.random()*40,vx:st*(15+Math.random()*25)+(Math.random()-.5)*20,vy:10+Math.random()*30,vz:(Math.random()-.5)*25,rgb:io(this.color),opacity:1,glow:(1.85+Math.random()*.78)*Zs,kind:"dust",large:Math.random()<lu,twinkle:Math.random()*Math.PI*2})}}_shed(){for(let B=0;B<7;B++){const H=Math.random()<.5?-1:1,st=Sa();t.push({x:this.x+H*this.size*(.2+Math.random()*.6),y:this.y+this.size*(.25+Math.random()*.5),z:this.z-20-Math.random()*40,vx:(Math.random()-.5)*55,vy:-45-Math.random()*45,vz:(Math.random()-.5)*45,rgb:io(st),opacity:1,glow:(1.78+Math.random()*.72)*Zs,kind:"shard",large:Math.random()<lu,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*4,twinkle:Math.random()*Math.PI*2})}}}function K(U,B){nt.position.set(0,0,-4e3),nt.scale.set(.001,.001,.001),nt.rotation.set(0,0,0),nt.updateMatrix(),U.setMatrixAt(B,nt.matrix),U.instanceColor&&U.setColorAt(B,pt.setRGB(0,0,0))}function C(U){const B=te(U.x,U.y,U.z+U.bob,s,r);Y.position.copy(B),Y.position.x+=U.sway*U.size*.35,Y.rotation.set(U.tilt+U.sway*.6,U.yaw+U.spin,U.baseRot+U.sway*.4);const H=U.size;Y.scale.set(H,H,H*1.75);const st=U.flap;Z.rotation.set(.12+st*.15,.55+st,.1+st*.08),et.rotation.set(.12+st*.15,-.55-st,-.1-st*.08),Z.scale.set(-1.14,1.14,1.14),et.scale.set(1.14,1.14,1.14),X.rotation.z=o*.8+U.flapPhase,Y.updateMatrixWorld(!0)}function L(){if(!h||!f||!p||!_||!g||!w)return;const U=Math.min(n.length,_t);for(let B=0;B<_t;B++){const H=B<U?n[B]:null;if(!H||H.size<.5){K(h,B),K(u,B),K(f,B),K(p,B),K(m,B),K(M,B),K(_,B),K(g,B),K(d,B),K(y,B),K(w,B);continue}C(H);const st=ci.length,V=(H.hueIndex+Math.floor(o*.35))%st,J=Ys(V),N=Ys(V+1),vt=Ys(V+2),ut=wa(J,ey),yt=wa(N,ny),xt=wa(vt,iy),Ft=du(J),St=du(N);nt.matrix.copy(Y.matrixWorld),h.setMatrixAt(B,nt.matrix),h.setColorAt(B,pt.setRGB(ut.r,ut.g,ut.b));const F=Y.scale.x,P=Y.scale.y,tt=Y.scale.z;Y.scale.set(F*1.04,P*1.04,tt*1.04),Y.updateMatrixWorld(!0),nt.matrix.copy(Y.matrixWorld),u.setMatrixAt(B,nt.matrix),u.setColorAt(B,pt.setRGB(Ft.r,Ft.g,Ft.b)),Y.scale.set(F,P,tt),Y.updateMatrixWorld(!0),nt.matrix.copy(Z.matrixWorld),_.setMatrixAt(B,nt.matrix),_.setColorAt(B,pt.setRGB(yt.r,yt.g,yt.b)),d.setMatrixAt(B,nt.matrix),d.setColorAt(B,pt.setRGB(St.r,St.g,St.b)),nt.matrix.copy(et.matrixWorld),g.setMatrixAt(B,nt.matrix),g.setColorAt(B,pt.setRGB(yt.r,yt.g,yt.b)),y.setMatrixAt(B,nt.matrix),y.setColorAt(B,pt.setRGB(St.r,St.g,St.b)),nt.matrix.copy(Y.matrixWorld),w.setMatrixAt(B,nt.matrix),w.setColorAt(B,pt.setRGB(xt.r,xt.g,xt.b)),nt.matrix.copy(Y.matrixWorld),f.setMatrixAt(B,nt.matrix),f.setColorAt(B,pt.setRGB(.06,.08,.2)),nt.matrix.copy(Y.matrixWorld),p.setMatrixAt(B,nt.matrix),p.setColorAt(B,pt.setRGB(.12,.08,.18)),K(m,B),K(M,B)}for(const B of[h,u,f,p,m,M,_,g,d,y,w])B.instanceMatrix.needsUpdate=!0,B.instanceColor&&(B.instanceColor.needsUpdate=!0);if(x&&(e.forEach((B,H)=>{const st=te(B.x,B.y,B.z,s,r);x.positions[H*3]=st.x,x.positions[H*3+1]=st.y,x.positions[H*3+2]=st.z;const V=.82+.65*Math.abs(Math.sin(o*2.6+B.phase)),J=wo(Ys(B.phase*3+H*.1),1.52,.05),N=V*Zs;x.colors[H*3]=Math.min(1,J.r*N),x.colors[H*3+1]=Math.min(1,J.g*N),x.colors[H*3+2]=Math.min(1,J.b*N)}),x.geo.setDrawRange(0,e.length),x.geo.attributes.position.needsUpdate=!0,x.geo.attributes.color.needsUpdate=!0),R&&(i.forEach((B,H)=>{const st=te(B.x,B.y,B.z,s,r);R.positions[H*3]=st.x,R.positions[H*3+1]=st.y,R.positions[H*3+2]=st.z;const V=.82+.65*Math.abs(Math.sin(o*2.6+B.phase)),J=wo(Ys(B.phase*3+H*.17),1.52,.05),N=V*Zs*.92;R.colors[H*3]=Math.min(1,J.r*N),R.colors[H*3+1]=Math.min(1,J.g*N),R.colors[H*3+2]=Math.min(1,J.b*N)}),R.geo.setDrawRange(0,i.length),R.geo.attributes.position.needsUpdate=!0,R.geo.attributes.color.needsUpdate=!0),S||E){let B=0,H=0;const st=Math.min(t.length,Aa+Ta);for(let V=0;V<st;V++){const J=t[V],N=te(J.x,J.y,J.z,s,r),[vt,ut,yt]=cn(J.rgb),xt=.84+.38*Math.abs(Math.sin(o*9+(J.twinkle||0))),Ft=(J.glow||1.92)*(.66+J.opacity*.56)*xt*Zs,St=.06,F=Math.min(1,vt*Ft*(1-St)+St),P=Math.min(1,ut*Ft*(1-St)+St),tt=Math.min(1,yt*Ft*(1-St)+St);if(J.large&&E&&H<Ta){const at=H*3;E.positions[at]=N.x,E.positions[at+1]=N.y,E.positions[at+2]=N.z,E.colors[at]=F,E.colors[at+1]=P,E.colors[at+2]=tt,H++}else if(S&&B<Aa){const at=B*3;S.positions[at]=N.x,S.positions[at+1]=N.y,S.positions[at+2]=N.z,S.colors[at]=F,S.colors[at+1]=P,S.colors[at+2]=tt,B++}}S&&(S.geo.setDrawRange(0,B),S.geo.attributes.position.needsUpdate=!0,S.geo.attributes.color.needsUpdate=!0),E&&(E.geo.setDrawRange(0,H),E.geo.attributes.position.needsUpdate=!0,E.geo.attributes.color.needsUpdate=!0)}}function O(U,B){n.push(new ht(U,B,a))}function G(U,B={}){const{back:H=!1,additive:st=!1}=B;return new ie({color:16777215,transparent:!0,opacity:U,side:H?Re:de,depthWrite:!1,blending:st?Qt:ze,toneMapped:!1})}return{init(U,B,H,st){s=U,r=B,a=H.palette||"rainbow",n=[],t=[],e=[],i=[],o=0,l=st,T=Bv(),v=Gv(),b=Hv(),A=Vv(),I=kv(),z=Wv(),W=Xv(),h=new $t(T,G(Kv,{additive:!0}),_t),u=new $t(T,G($v,{back:!0,additive:!0}),_t);const V=G(Qv,{additive:!1});V.polygonOffset=!0,V.polygonOffsetFactor=-4,V.polygonOffsetUnits=-4,f=new $t(v,V,_t),f.renderOrder=12;const J=G(ty,{additive:!1});J.polygonOffset=!0,J.polygonOffsetFactor=-3,J.polygonOffsetUnits=-3,p=new $t(b,J,_t),p.renderOrder=11,m=new $t(A,G(.11,{additive:!1}),_t),M=new $t(I,G(.09,{additive:!1}),_t),_=new $t(z,G(cu,{additive:!0}),_t),g=new $t(z,G(cu,{additive:!0}),_t),d=new $t(z,G(hu,{back:!0,additive:!0}),_t),y=new $t(z,G(hu,{back:!0,additive:!0}),_t),w=new $t(W,G(jv,{additive:!0}),_t);for(const N of[h,u,f,p,m,M,_,g,d,y,w])N.instanceColor=new Le(new Float32Array(_t*3),3),N.frustumCulled=!1,l.add(N);x=ve(ou,Yv),R=ve(au,qv),S=ve(Aa,Zv),E=ve(Ta,Jv),x.mat.blending=Qt,R.mat.blending=Qt,S.mat.blending=Qt,E.mat.blending=Qt,x.mat.opacity=uu,R.mat.opacity=uu*.88,S.mat.opacity=fu,E.mat.opacity=fu*.9,x.mat.toneMapped=!1,R.mat.toneMapped=!1,S.mat.toneMapped=!1,E.mat.toneMapped=!1,l.add(x.points,R.points,S.points,E.points);for(const[N,vt]of Rn(20,U,B,.06,[B*.25,B*.95]))O(N,vt);Vi(n),L();for(let N=0;N<ou;N++)e.push({x:Math.random()*U,y:Math.random()*B,z:(Math.random()-.5)*220,speedY:-(.12+Math.random()*.32),phase:Math.random()*Math.PI*2,rgb:io(Sa())});for(let N=0;N<au;N++)i.push({x:Math.random()*U,y:Math.random()*B,z:(Math.random()-.5)*260,speedY:-(.08+Math.random()*.24),phase:Math.random()*Math.PI*2,rgb:io(Sa())})},resize(U,B){yr(n,s,r,U,B),s=U,r=B},update(U,B,H,st){if(o+=U,a=st.palette||a,n=n.filter(J=>J.update(U,o)),(B==null?void 0:B.velocity)>3){const J=Math.min(2,Math.floor(B.velocity/16)+1);for(let N=0;N<J;N++)O(B.x+(Math.random()-.5)*50,B.y+(Math.random()-.5)*40)}if(Math.random()<U*1.4*(st.speed||1)&&O(Math.random()*s,r+40+Math.random()*80),H!=null&&H.isActive&&H.bass>.3){const J=Math.floor(H.bass*3);for(let N=0;N<J;N++)O(Math.random()*s,r+20)}t=t.filter(J=>(J.x+=J.vx*U,J.y+=J.vy*U,J.z+=J.vz*U,J.vy-=25*U,J.opacity-=U*.12,J.opacity>.02&&J.y>-80)),e.forEach(J=>{J.y+=J.speedY*(st.speed||1)*70*Ra*U,J.y<-10&&(J.y=r+10,J.x=Math.random()*s)}),i.forEach(J=>{J.y+=J.speedY*(st.speed||1)*58*Ra*U,J.y<-10&&(J.y=r+10,J.x=Math.random()*s)});const V=Math.min(_t,Math.max(16,Math.floor((st.particleCount||1030)/5)));n.length>V&&n.splice(0,n.length-V)},render(){L()},onPointerDown(U,B){for(let H=0;H<5;H++)O(U+(Math.random()-.5)*70,B+(Math.random()-.5)*50)},onPointerMove(){},onPointerUp(){},setPalette(U){a=U},samplePoints(U,B=s,H=r){const{w:st,h:V}=sn(B,H,s,r);return Sr(n,U,st,V,(N,vt,ut)=>mr(bf(N,130),N,vt,ut,.14),56)},destroy(){n=[],t=[],e=[],i=[],T==null||T.dispose(),v==null||v.dispose(),b==null||b.dispose(),A==null||A.dispose(),I==null||I.dispose(),z==null||z.dispose(),W==null||W.dispose(),h=null,u=null,f=null,p=null,m=null,M=null,_=null,g=null,d=null,y=null,w=null,x=null,R=null,S=null,E=null,l=null}}}const ni=20,Me=[{id:"petal",label:"花びら",hold:ni,morph:2.4,style:"swarm"},{id:"jellyfish",label:"クラゲ",hold:ni,morph:2.4,style:"trail"},{id:"letter",label:"A B C · X Y Z",hold:ni,morph:2.4,style:"swarm"},{id:"tadpole",label:"オタマ",hold:ni,morph:2.4,style:"trail"},{id:"butterfly",label:"蝶",hold:ni,morph:2.2,style:"swarm"},{id:"music",label:"♪ 音楽記号",hold:ni,morph:2.6,style:"burst"},{id:"angel",label:"天使",hold:ni,morph:2.8,style:"burst"}],Ca=`${ni}秒で自動切替 · ダブルクリックでも次へ`,pu=200,oy=520,ay=3.9,nr=.24,mu=.64,Js={letter:bx,jellyfish:Gx,butterfly:iv,tadpole:uv,music:Fv,angel:ry};function ly(){let n=0,t=0,e=0,i=0;return{setSize(s,r){n=s,t=r,this.rememberStable(s,r)},get width(){return n},get height(){return t},rememberStable(s,r){return Sn(s,r)?(e=s,i=r,!0):!1},sampleDims(){return Sn(n,t)?{w:n,h:t}:Sn(e,i)?{w:e,h:i}:sn(n,t,e,i)},isReady(){const{w:s,h:r}=this.sampleDims();return Sn(s,r)},morphReady(){const{w:s,h:r}=this.sampleDims();return s>=pu&&r>=pu},realDimsArrived(s,r){return Sn(n,t)&&!Sn(s,r)}}}const cy={letter:1,jellyfish:12,clock:2,butterfly:6,tadpole:2,music:1,brain:0,angel:8};function hy(n,t=0){const e=Je(n||"rainbow");return e[(t%e.length+e.length)%e.length]}function ui(n,t){return hy(n,cy[t]??0)}function ln(n){return new Vt(n)}function oe(n,t=.35){const e=ln(n);return t>=0?e.lerp(ln("#ffffff"),t):e.lerp(ln("#201028"),-t),`#${e.getHexString()}`}function Ae(n,t={}){const e=ln(n);return new H_({color:e,roughness:t.roughness??.62,metalness:0,emissive:e.clone().multiplyScalar(t.em??.28),emissiveIntensity:t.ei??.55,transparent:t.opacity!=null&&t.opacity<1,opacity:t.opacity??1,depthWrite:t.opacity==null||t.opacity>=.95})}function Pe(n,t){n.color.set(t),n.emissive&&n.emissive.copy(ln(t).multiplyScalar(.28))}function ki(n){const t=new Al(16777215,1.15,1e3);t.position.set(70,110,200);const e=new Al(15266047,.4,750);e.position.set(-110,20,100),n.add(t,e)}function an(n,t="#3a3050",e=1.045){const i=new Ct(n.geometry,new ie({color:ln(t),side:Re}));return i.scale.setScalar(e),n.add(i),i}function Nf(n,t,e,i,s=4){const r=new Ct(new kt(s,12,12),new ie({color:16777215,transparent:!0,opacity:.82}));r.position.set(t,e,i),n.add(r)}function gu(n,t,e,i,s,r=0){for(let o=0;o<n;o++){const a=Math.floor(Math.random()*6);let l=(Math.random()-.5)*t,h=(Math.random()-.5)*e,u=(Math.random()-.5)*i;a===0&&(l=t*.5),a===1&&(l=-t*.5),a===2&&(h=e*.5),a===3&&(h=-e*.5),a===4&&(u=i*.5),a===5&&(u=-i*.5);const f=(r+o)*3;s[f]=l,s[f+1]=h,s[f+2]=u}}function Mu(n,t,e,i){const s=Math.cos(i),r=Math.sin(i);for(let o=0;o<e;o++){const a=(t+o)*3,l=n[a],h=n[a+1];n[a]=l*s-h*r,n[a+1]=l*r+h*s}}function uy(n="rainbow"){const t=new ue;ki(t);const e=ui(n,"letter"),i=oe(e,.22),s=Ae(i,{opacity:.65,roughness:.5,ei:.28}),r=h=>{const u=new ue,f=new Ct(new be(20,100,28),h);an(f,oe(i,-.45),1.035);const p=h,m=new Ct(new be(20,22,28),p);m.position.y=58,m.rotation.x=.35,m.scale.set(1,1,.85);const M=new Ct(new be(20,22,28),p);return M.position.y=-58,M.rotation.x=-.35,M.scale.set(1,1,.85),an(m,oe(i,-.45),1.035),an(M,oe(i,-.45),1.035),u.add(f,m,M),u},o=r(s),a=r(s.clone());o.rotation.z=Math.PI/4,a.rotation.z=-Math.PI/4;const l=new Ct(new be(32,32,36),Ae(oe(i,.12)));return an(l,oe(i,-.45),1.03),Nf(l,-6,8,18,5),t.add(o,a,l),{group:t,update(h,u){t.rotation.x=Math.sin(u*.55)*.7,t.rotation.y=Math.sin(u*.42)*.95,t.rotation.z=Math.sin(u*.33)*.35},setPalette(h){const u=ui(h,"letter"),f=p=>{p.traverse(m=>{m.isMesh&&m.material&&m.material.side!==Re&&Pe(m.material,m===l?oe(u,.12):u)})};f(o),f(a),Pe(l.material,oe(u,.12))},samplePoints(h){const u=new Float32Array(h*3),f=Math.floor(h/2);return gu(f,20,118,28,u,0),Mu(u,0,f,Math.PI/4),gu(h-f,20,118,28,u,f),Mu(u,f,h-f,-Math.PI/4),u},dispose(){Wn(t)}}}function fy(n="rainbow"){const t=new ue;ki(t);const e=["#00e8ff","#00b7ff","#2f6bff","#1a48ff","#4d7cff","#7c4dff","#ff2bd6","#b026ff"],i=["#00e8ff","#00e8ff","#00b7ff","#00b7ff","#2f6bff","#2f6bff","#2f6bff","#1a48ff","#1a48ff","#4d7cff","#7c4dff","#ff2bd6","#b026ff"],s=i[Math.floor(Math.random()*i.length)],r=ln(s);function o(d=.9){return new ie({color:r.clone(),transparent:!0,opacity:d,depthWrite:!1,blending:Qt,toneMapped:!1,side:de})}const a=new ie({color:new Vt("#1a48ff"),transparent:!0,opacity:.38,depthWrite:!1,blending:Qt,toneMapped:!1,side:de}),l=new Ct(new kt(52,48,36,0,Math.PI*2,0,Math.PI*.58),a);l.scale.set(1.2,.88,1.2),l.position.y=22,t.add(l);const h=new Ct(new we(58,1.15,6,48),o(1));h.rotation.x=Math.PI/2,h.position.y=2,t.add(h);const u=new ue;for(let d=0;d<12;d++){const y=d/12*Math.PI*2,w=new Ct(new Bn(.45,.45,42,4),o(.75));w.rotation.z=Math.PI/2,w.rotation.y=y,w.position.set(Math.cos(y)*22,32,Math.sin(y)*22),u.add(w)}for(let d=0;d<40;d++){const y=Math.random()*Math.PI*2,w=Math.random()*Math.PI*.5,x=46,R=new Ct(new kt(1.4+Math.random(),6,5),o(.9));R.position.set(Math.sin(w)*Math.cos(y)*x*1.2,22+Math.cos(w)*x*.88,Math.sin(w)*Math.sin(y)*x*1.2),u.add(R)}t.add(u);const f=new Ct(new kt(10,14,12),new ie({color:11069695,transparent:!0,opacity:.85,depthWrite:!1,blending:Qt,toneMapped:!1}));f.scale.set(1.4,.7,1.4),f.position.y=8,t.add(f);const p=new ue;p.position.y=28;for(let d=0;d<4;d++){const y=d/4*Math.PI*2+Math.PI/4,w=new Ct(new we(11,2.4,8,20,Math.PI*1.35),o(.75));w.rotation.x=Math.PI*.55,w.rotation.y=y,w.position.set(Math.cos(y)*14,0,Math.sin(y)*14),p.add(w)}t.add(p);const m=new ue;m.position.y=2;const M=[];for(let d=0;d<48;d++){const y=d/48*Math.PI*2,w=34+d%4*10,x=new Ct(new kn(.35,w,2,4),o(.35));x.position.set(Math.cos(y)*54,-w*.42,Math.sin(y)*54),x.userData={ang:y,len:w,phase:d*.2},m.add(x);const R=new Ct(new kt(1.2,6,5),o(.55));R.position.set(Math.cos(y)*54,-w*.85,Math.sin(y)*54),m.add(R),M.push(x)}t.add(m);const _=[];for(let d=0;d<4;d++){const y=d/4*Math.PI*2,w=new ue;w.position.set(Math.cos(y)*8,6,Math.sin(y)*8),w.rotation.y=y,w.userData={phase:d*1.15};const x=(d%2===0,o(.32));d%2===1&&x.color.copy(ln(e[(d+2)%e.length]));for(let R=0;R<16;R++){const S=(R+.5)/16,E=Math.sin(S*Math.PI*1.6)*10,T=-S*100,v=5.5*(1-S*.55),b=new Ct(new we(v,.55,5,14),x.clone());if(b.rotation.x=Math.PI/2,b.position.set(E,T,0),w.add(b),R%2===0){const A=new Ct(new kt(1.3,6,5),x.clone());A.position.set(E+v*.7,T,0),w.add(A)}}t.add(w),_.push(w)}let g=-40;return{group:t,update(d,y){g+=d*14,g>130&&(g=-50),t.position.y=g+Math.sin(y*.7)*8,t.position.x=Math.sin(y*.35)*12,t.position.z=Math.cos(y*.28)*8,t.rotation.y=Math.sin(y*.22)*.15,t.rotation.z=Math.sin(y*.48)*.08,t.rotation.x=Math.sin(y*.38)*.05;const w=Math.sin(y*1.35);l.scale.y=.88+w*.08,l.scale.x=l.scale.z=1.2-w*.05,l.material.opacity=.32+.12*Math.abs(w),h.scale.x=h.scale.z=1+w*.03,h.material.opacity=.85+.15*Math.abs(w),f.material.opacity=.7+.25*Math.abs(w),p.position.y=28+w*1.2;for(const x of M){const{ang:R,len:S,phase:E}=x.userData,T=Math.sin(y*1.5+E)*4;x.position.set(Math.cos(R)*54+Math.cos(R+Math.PI*.5)*T,-S*.35+Math.sin(y*1.2+E)*2,Math.sin(R)*54+Math.sin(R+Math.PI*.5)*T),x.rotation.x=Math.sin(y*1.3+E)*.15}for(const x of _){const{phase:R}=x.userData;x.rotation.x=.2+Math.sin(y*1.1+R)*.45,x.rotation.z=Math.cos(y*.9+R*.8)*.3,x.rotation.y=Math.sin(y*.7+R)*.18,x.scale.y=1.05+Math.abs(Math.sin(y*1.1+R))*.15}},setPalette(d){const y=e[Math.floor(Math.random()*e.length)],w=ln(y);h.material.color.copy(w),l.material.color.set("#1a48ff"),u.traverse(x=>{x.isMesh&&x.material.color.copy(w)}),p.children.forEach(x=>x.material.color.copy(w)),M.forEach(x=>x.material.color.copy(w)),_.forEach(x=>x.traverse(R=>{var S;R.isMesh&&((S=R.material)!=null&&S.color)&&R.material.color.copy(w)}))},samplePoints(d){const y=new Float32Array(d*3);for(let w=0;w<d;w++)if(w<d*.45){const x=Math.random()*Math.PI*2,R=Math.random()*Math.PI*.55;y[w*3]=Math.sin(R)*Math.cos(x)*52*1.2,y[w*3+1]=22+Math.cos(R)*52*.88,y[w*3+2]=Math.sin(R)*Math.sin(x)*52*1.2}else if(w<d*.7){const x=Math.random()*Math.PI*2;y[w*3]=Math.cos(x)*54,y[w*3+1]=-Math.random()*20,y[w*3+2]=Math.sin(x)*54}else{const x=Math.floor(Math.random()*4)/4*Math.PI*2,R=Math.random();y[w*3]=Math.cos(x)*8+R*R*10,y[w*3+1]=6-R*78,y[w*3+2]=Math.sin(x)*8}return y},dispose(){Wn(t)}}}function dy(n="rainbow"){const t=new ue;t.scale.setScalar(1.45*(2/3)),ki(t);const e=Je("clockRainbow"),i=e[Math.floor(Math.random()*e.length)],s=ln(i);function r(A=1){return new ie({color:new Vt("#0a0a0c"),transparent:A<1,opacity:A,depthWrite:!0,blending:ze,toneMapped:!1,side:de})}function o(A=.95){return new ie({color:s.clone(),transparent:!0,opacity:A,depthWrite:!1,blending:ze,toneMapped:!1,side:de})}const a=new Bn(48,48,12,48);a.rotateX(Math.PI/2);const l=new Ct(a,new ie({color:new Vt("#eef2f8"),transparent:!0,opacity:.1,depthWrite:!1,blending:ze,toneMapped:!1,side:de}));t.add(l);const h=new Bn(51,51,14,48,1,!0);h.rotateX(Math.PI/2);const u=new Ct(h,o(.85)),f=new Ct(new we(49.5,2.4,8,48),o(.95));f.position.z=6.5;const p=new Bn(46,46,4,36);p.rotateX(Math.PI/2);const m=new Ct(p,o(.7));m.position.z=-7,t.add(u,f,m);const M=new ue;for(let A=0;A<60;A++){const I=A/60*Math.PI*2,z=A%5===0,W=new Ct(new be(z?1.6:.8,z?7:3.5,2.2),r(1));W.position.set(Math.sin(I)*40,Math.cos(I)*40,7),W.rotation.z=-I,M.add(W)}for(let A=0;A<12;A++){const I=A/12*Math.PI*2,z=new Ct(new be(2.2,8,2.5),r(1));z.position.set(Math.sin(I)*34,Math.cos(I)*34,7.5),z.rotation.z=-I,M.add(z)}t.add(M);const _=new Ct(new be(3.2,26,2.4),r(1));_.position.set(0,10,9);const g=new Ct(new be(2.2,38,2),r(1));g.position.set(0,16,10);const d=new Ct(new be(1,42,1.5),r(1));d.position.set(0,14,11);const y=new Ct(new kt(3.5,12,10),r(1));y.position.z=10;const w=new ue,x=new ue,R=new ue;w.add(_),x.add(g),R.add(d),t.add(w,x,R,y);const S=new Ct(new Bn(4,4.5,8,10),o(.9));S.position.y=58;const E=new Ct(new we(9,1.8,6,20,Math.PI*1.3),o(.9));E.rotation.z=Math.PI,E.position.y=70,t.add(S,E);const T=(Math.random()<.5?1:-1)*(.55+Math.random()*.5),v=(Math.random()-.5)*.35,b=(Math.random()-.5)*.2;return{group:t,update(A,I){t.position.y=Math.sin(I*.7)*8,t.rotation.y+=T*A,t.rotation.x+=v*A,t.rotation.z+=b*A;const z=I%60,W=I/60%60,Y=I/3600%12;R.rotation.z=-(z/60)*Math.PI*2,x.rotation.z=-(W/60)*Math.PI*2,w.rotation.z=-(Y/12)*Math.PI*2},setPalette(A){const I=new Vt("#0a0a0c");M.traverse(z=>{z.isMesh&&z.material.color.copy(I)}),_.material.color.copy(I),g.material.color.copy(I),d.material.color.copy(I),y.material.color.copy(I),S.material.color.copy(c),E.material.color.copy(c)},samplePoints(A){const I=new Float32Array(A*3);for(let z=0;z<A;z++){const W=Math.random()*Math.PI*2,Y=Math.random()*50;I[z*3]=Math.cos(W)*Y,I[z*3+1]=Math.sin(W)*Y,I[z*3+2]=(Math.random()-.5)*12}return I},dispose(){Wn(t)}}}function _u(n="rainbow"){const t=new ue;t.scale.setScalar(58),ki(t);const{wing:e,pattern:i}=(()=>{const _=Je("rainbow"),g=_[Math.floor(Math.random()*_.length)];let d=_[Math.floor(Math.random()*_.length)];return d===g&&(d=_[(_.indexOf(g)+3)%_.length]),{wing:g,pattern:d}})(),s=Ae(oe(e,.12),{opacity:.68,roughness:.48,ei:.72,em:.32}),r=Ae(oe(i,-.2),{opacity:.88,roughness:.52,ei:.68,em:.38}),o=Ae(oe(e,-.12),{opacity:.82,roughness:.6,ei:.52,em:.22}),a=new ue,l=new ue;a.position.set(.02,.02,-.01),l.position.set(.02,.02,-.01);const h=new Ct(Nl(),s),u=new Ct(Nl(),s.clone());h.scale.set(-1,1,1);const f=new Ct(Fl(),r),p=new Ct(Fl(),r.clone());h.add(f),u.add(p),a.add(h),l.add(u);const m=new Ct(Pf(),o),M=new Ct(Lf(),Ae(oe(e,.42),{opacity:.9,roughness:.45,ei:.85,em:.35}));return t.add(a,l,m,M),an(h,oe(e,.45),1.015),an(u,oe(e,.45),1.015),an(m,oe(e,-.25),1.02),{group:t,update(_,g){const d=Math.sin(g*9.2)*.62;a.rotation.set(.1+d*.14,.68+d,.08+d*.12),l.rotation.set(.1+d*.14,-.68-d,-.08-d*.12),t.position.y=Math.sin(g*1.15)*14,t.rotation.x=Math.sin(g*.62)*.55+Math.cos(g*.41)*.35,t.rotation.y=g*.48+Math.sin(g*.32)*.35,t.rotation.z=Math.sin(g*.55)*.42+Math.cos(g*.73)*.28,t.position.x=Math.sin(g*.38)*28,t.position.z=Math.cos(g*.51)*22},setPalette(_){const g=Je("rainbow"),d=g[Math.floor(Math.random()*g.length)];let y=g[Math.floor(Math.random()*g.length)];y===d&&(y=g[(g.indexOf(d)+3)%g.length]),Pe(h.material,oe(d,.12)),Pe(u.material,oe(d,.12)),Pe(f.material,oe(y,-.2)),Pe(p.material,oe(y,-.2)),Pe(m.material,oe(d,-.12)),Pe(M.material,oe(d,.42))},samplePoints(_){const d=new Float32Array(_*3);for(let y=0;y<_;y++){const w=Math.random()<.5?-1:1;if(y<_*.72){const x=Math.random(),R=Math.random();d[y*3]=w*(.12+x*.76)*58,d[y*3+1]=(R*.52-.18)*58,d[y*3+2]=(Math.random()-.5)*10}else y<_*.9?(d[y*3]=(Math.random()-.5)*14,d[y*3+1]=(Math.random()-.5)*10,d[y*3+2]=(Math.random()-.5)*8):(d[y*3]=.1*58+(Math.random()-.5)*5,d[y*3+1]=.04*58+(Math.random()-.5)*4,d[y*3+2]=w*.05*58)}return d},dispose(){Wn(t)}}}function py(n="rainbow"){const t=new ue;ki(t);const e=["#00e8ff","#00b7ff","#2f6bff","#1a48ff","#4d7cff","#7c4dff","#ff2bd6"],i=e[Math.floor(Math.random()*e.length)],s=ln(i);function r(b=.3,A=!0){return new ie({color:s.clone(),transparent:!0,opacity:b,depthWrite:!1,blending:A?Qt:ze,toneMapped:!1,side:de})}const o=new Ct(new kt(28,40,32),r(.28,!0));o.scale.set(1.42,1.08,1.16),o.position.set(18,2,0),t.add(o);const a=new Ct(new kt(16,28,22),r(.2,!0));a.scale.set(1.15,.82,1.02),a.position.set(14,-6,2),t.add(a);const l=new Ct(new we(32,1.2,6,36),r(.85,!0));l.rotation.y=Math.PI/2,l.scale.set(1.15,1,1.08),l.position.set(18,2,0),t.add(l);const h=new Ct(new kt(10,14,12),r(.5,!0));h.scale.set(1.35,.9,1.15),h.position.set(18,2,0),t.add(h);const u=new ie({color:new Vt("#d0f0ff"),transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1}),f=new ie({color:new Vt("#0a1018"),transparent:!1,depthWrite:!0,toneMapped:!1}),p=new Ct(new kt(3.6,12,10),u),m=new Ct(new kt(3.6,12,10),u.clone());p.position.set(30,8,16),m.position.set(30,8,-16);const M=new Ct(new kt(1.7,10,8),f),_=new Ct(new kt(1.7,10,8),f.clone());M.position.set(32,8,17),_.position.set(32,8,-17),t.add(p,m,M,_);const g=185,d=36,y=8,w=4,x=new be(g,1,1,d,y,w),R=Float32Array.from(x.attributes.position.array),S=x.attributes.position;for(let b=0;b<S.count;b++){const A=R[b*3],I=(A+g*.5)/g,z=Math.max(.03,Math.pow(1-I,.85)),W=22*z,Y=5.5*z,Z=R[b*3+1]/.5,et=R[b*3+2]/.5,X=Math.sin(I*Math.PI*.7)*8+I*I*6;R[b*3]=A,R[b*3+1]=Z*W+X,R[b*3+2]=et*Y}S.array.set(R),S.needsUpdate=!0,x.computeVertexNormals();const E=r(.22,!0),T=new Ct(x,E);T.position.set(-58,2,0),t.add(T);const v=r(.55,!0);for(let b=0;b<12;b++){const A=Math.random(),I=new Ct(new kt(.9+Math.random()*1.2,8,6),v.clone());I.position.set(-58+(A-.5)*g*.92,2+Math.sin(A*Math.PI*.7)*8+(Math.random()-.5)*8*(1-A),(Math.random()-.5)*5),t.add(I)}return{group:t,update(b,A){t.position.y=Math.sin(A*1.3)*5,t.rotation.y=Math.sin(A*.4)*.08;const I=A*15,z=S.array;for(let W=0;W<S.count;W++){const Y=R[W*3],Z=Math.min(1,(Y+g*.5)/(g+8)),et=Z*Z,X=Math.sin(I-Z*7)*et*36+Math.sin(I*2.8-Z*16)*et*18+Math.sin(I*6.2-Z*30)*et*10+Math.sin(I*13-Z*48)*et*5;z[W*3]=R[W*3],z[W*3+1]=R[W*3+1]+Math.sin(I*1.8-Z*5)*et*5,z[W*3+2]=R[W*3+2]+X}S.needsUpdate=!0,x.computeVertexNormals()},setPalette(b){},samplePoints(b){const A=new Float32Array(b*3);for(let I=0;I<b;I++)if(I<b*.5){const z=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);A[I*3]=18+Math.sin(W)*Math.cos(z)*28*1.45,A[I*3+1]=2+Math.sin(W)*Math.sin(z)*28*1.12,A[I*3+2]=Math.cos(W)*28*1.18}else{const z=Math.random();A[I*3]=-58+(z-.5)*g,A[I*3+1]=2+Math.sin(z*Math.PI*.7)*8,A[I*3+2]=(Math.random()-.5)*5}return A},dispose(){Wn(t)}}}function Pa(n,t,e,i=0){const s=Math.sin(n*.05+i)*Math.cos(e*.04),r=Math.sin(e*.06+n*.03+1.7),o=Math.cos(n*.04-e*.05+i*.5);return{x:n*(1+s*.1+o*.06),y:t*(1+r*.08)+s*3,z:e*(1+r*.1+s*.05)}}function my(n="rainbow"){const t=new ue;ki(t);const e=ui(n,"brain"),i=oe(e,-.3),s=Ae(e,{roughness:.72}),r=Ae(i,{roughness:.68,ei:.4}),o=new kt(52,56,40,0,Math.PI*2,0,Math.PI*.52),a=o.attributes.position;for(let g=0;g<a.count;g++){const d=a.getX(g),y=a.getY(g),w=a.getZ(g),x=Pa(d,y,w,.8);a.setXYZ(g,x.x*1.12,x.y*.92-2,x.z*1.08)}a.needsUpdate=!0,o.computeVertexNormals();const l=new Ct(o,s);an(l,oe(e,-.42),1.02),t.add(l);const h=new Ct(new kt(48,40,16,0,Math.PI*2,Math.PI*.42,Math.PI*.2),s),u=h.geometry.attributes.position;for(let g=0;g<u.count;g++){const d=Pa(u.getX(g),u.getY(g),u.getZ(g),1.4);u.setXYZ(g,d.x*1.1,d.y*.7-4,d.z*1.05)}u.needsUpdate=!0,h.geometry.computeVertexNormals(),t.add(h);for(let g=0;g<16;g++){const d=g/16*Math.PI*2,y=48+Math.sin(g*2.3)*6,w=new Ct(new kt(6+g%3,12,12),s);w.position.set(Math.cos(d)*y*1.05,-4+Math.sin(g)*3,Math.sin(d)*y*.98),w.scale.set(1.15,.6,1.05),t.add(w)}const f=[],p=[],m=(g,d,y=0)=>{const w=51+y,x=Pa(Math.sin(d)*Math.cos(g)*w*1.12,Math.cos(d)*w*.92-2,Math.sin(d)*Math.sin(g)*w*1.08,g+d);return new k(x.x*1.05,x.y*1.05+1,x.z*1.05)};for(let g=0;g<28;g++){const d=g/28*Math.PI*2,y=[];for(let x=0;x<=18;x++){const R=x/18,S=R*Math.PI*.58,E=d+Math.sin(R*Math.PI*3.8+g)*.16;y.push(m(E,S,Math.sin(R*5+g)*2))}const w=new Ct(new si(new Ei(y),32,2.5,8,!1),r.clone());t.add(w),f.push(w)}for(let g=0;g<18;g++){const d=.06+g*.055,y=[];for(let x=0;x<=40;x++){const S=x/40*Math.PI*2,E=d+Math.sin(S*4+g)*.05;y.push(m(S,E,Math.sin(S*3+g)*1.5))}y.push(y[0].clone());const w=new Ct(new si(new Ei(y),56,2.2,8,!1),r.clone());t.add(w),f.push(w)}for(let g=0;g<32;g++){const d=g/32*Math.PI*2+.15,y=.08+g%8*.075,w=[];for(let R=0;R<=10;R++){const E=R/10*Math.PI*1.2;w.push(m(d+Math.cos(E)*.34,y+Math.sin(E)*.22,1))}const x=new Ct(new si(new Ei(w),14,2,6,!1),r.clone());t.add(x),f.push(x)}for(let g=0;g<24;g++){const d=g/24*Math.PI*2,y=[];for(let x=0;x<=8;x++){const R=x/8,S=.42+R*.16,E=d+Math.sin(R*3+g)*.2;y.push(m(E,S,1.5))}const w=new Ct(new si(new Ei(y),12,2.3,6,!1),r.clone());t.add(w),f.push(w)}const M=Ae(oe(e,.35),{ei:.4,roughness:.55});for(let g=0;g<18;g++){const d=g/18*Math.PI*2+.12,y=[];for(let x=0;x<=12;x++){const R=x/12;y.push(m(d+Math.sin(R*4)*.1,R*Math.PI*.55,2.5))}const w=new Ct(new si(new Ei(y),18,1.1,6,!1),M.clone());t.add(w),p.push(w)}const _=new Ct(new kt(10,16,12),Ae(i,{roughness:.85,ei:.15}));return _.position.set(3,14,10),_.scale.set(.45,.4,1.6),t.add(_),Nf(l,-14,22,30,6),{group:t,update(g,d){const y=1+Math.sin(d*2)*.02;t.scale.setScalar(y),t.rotation.y=Math.sin(d*.32)*.35,t.rotation.x=.22+Math.sin(d*.4)*.05},setPalette(g){const d=ui(g,"brain"),y=oe(d,-.3),w=oe(d,.35);Pe(s,d),Pe(l.material,d),Pe(h.material,d),f.forEach(x=>Pe(x.material,y)),p.forEach(x=>Pe(x.material,w)),Pe(_.material,y)},samplePoints(g){const d=new Float32Array(g*3);for(let y=0;y<g;y++){const w=Math.random()*Math.PI*2,x=Math.random()*Math.PI*.52,R=m(w,x,0);d[y*3]=R.x,d[y*3+1]=R.y,d[y*3+2]=R.z}return d},dispose(){Wn(t)}}}function gy(n="rainbow"){const t=new ue;ki(t);const e=ui(n,"angel"),i=oe(e,.15),s="#ffd9c4",r="#ffffff",o="#4a4450",a=new ue;a.scale.setScalar(.9),t.add(a);const l=Ae(s,{opacity:.58,roughness:.65,ei:.25,em:.12}),h=new Ct(new kt(24,32,28),l);h.position.set(0,50,6),an(h,"#c4b0a8",1.025),a.add(h);const u=Ae(i,{opacity:.65,roughness:.5,ei:.5}),f=new Ct(new kt(13,20,16),u);f.scale.set(1.45,.58,.9),f.position.set(9,64,4),a.add(f);const p=new ie({color:ln(o),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),m={x:0,y:50,z:6},M=22.5;function _(et,X){const nt=Math.hypot(et,X),pt=Math.sqrt(Math.max(1,M*M-nt*nt));return[m.x+et,m.y+X,m.z+pt]}for(const et of[-1,1]){const X=new Ct(new we(5.6,.9,6,18,Math.PI*.95),p.clone());X.scale.set(1,1,.28),X.position.set(..._(et*9.2,2.5)),a.add(X)}const g=new Ct(new we(3,.75,5,12,Math.PI*.7),p.clone());g.rotation.z=Math.PI,g.scale.set(1,1,.28),g.position.set(..._(0,-7)),a.add(g);const d=new Ze;d.moveTo(-12,24),d.lineTo(12,24),d.lineTo(24,-52),d.lineTo(-24,-52),d.closePath();const y=new Mn(d,{depth:12,bevelEnabled:!0,bevelThickness:2,bevelSize:1.5,bevelSegments:1,curveSegments:4});y.translate(0,0,-6);const w=Ae(r,{opacity:.52,roughness:.6,ei:.2,em:.1}),x=new Ct(y,w);x.position.y=10,an(x,"#d0d4dc",1.02),a.add(x);const R=new Ze;R.moveTo(2,14),R.quadraticCurveTo(32,42,58,24),R.quadraticCurveTo(68,8,62,-8),R.quadraticCurveTo(54,-18,46,-10),R.quadraticCurveTo(38,-22,28,-10),R.quadraticCurveTo(18,-22,10,-8),R.quadraticCurveTo(4,0,2,10),R.closePath();const S=new Mn(R,{depth:4,bevelEnabled:!1,curveSegments:18});S.translate(0,0,-2);const E=Ae(r,{opacity:.4,roughness:.5,ei:.28}),T=new Ct(S,E),v=new Ct(S,E.clone());T.position.set(-6,18,-12),v.position.set(6,18,-12),T.scale.set(-1,1,1),T.rotation.set(.05,.35,.05),v.rotation.set(.05,-.35,-.05),an(T,"#d0d4dc",1.015),an(v,"#d0d4dc",1.015),t.add(T,v);for(const et of[-1,1])for(let X=0;X<3;X++){const nt=new Ct(new be(22-X*4,1.6,1.2),Ae("#e8ecf4",{ei:.1}));nt.position.set(et*(24+X*5),22-X*8,-10),nt.rotation.z=et*.2,a.add(nt)}const b=new Ct(new we(22,2,10,36),Ae(i,{opacity:.7,roughness:.4,ei:.8}));b.rotation.x=Math.PI/2,b.position.set(0,88,0),a.add(b);const A=new Ze,I=12,z=5;for(let et=0;et<5;et++){const X=et*Math.PI*2/5-Math.PI/2,nt=X+Math.PI/5;et===0?A.moveTo(Math.cos(X)*I,Math.sin(X)*I):A.lineTo(Math.cos(X)*I,Math.sin(X)*I),A.lineTo(Math.cos(nt)*z,Math.sin(nt)*z)}A.closePath();const W=new Mn(A,{depth:4,bevelEnabled:!1});W.translate(0,0,-2);const Y=new Ct(W,Ae(i,{opacity:.7,roughness:.45,ei:.75}));Y.position.set(0,12,18),a.add(Y);const Z=Ae("#ffffff",{opacity:.95,ei:1.4,em:.55});for(let et=0;et<16;et++){const X=2.5+Math.random()*4,nt=new Ct(new kt(X,8,6),Z.clone()),pt=Math.random()*Math.PI*2,_t=35+Math.random()*55;nt.position.set(Math.cos(pt)*_t,25+Math.random()*80,Math.sin(pt)*22-8),t.add(nt)}return{group:t,update(et,X){t.position.y=Math.sin(X*1.1)*10+X*8,t.position.y>120&&(t.position.y=-40),t.rotation.y=Math.sin(X*.28)*.2;const nt=Math.sin(X*5.2)*.42;T.rotation.y=.4+nt,v.rotation.y=-.4-nt,T.rotation.z=.08+nt*.12,v.rotation.z=-.08-nt*.12,T.rotation.x=.08+Math.abs(nt)*.1,v.rotation.x=.08+Math.abs(nt)*.1,b.rotation.z=X*.55,Y.rotation.z=Math.sin(X*1.5)*.08,a.position.y=Math.sin(X*1.4)*6},setPalette(et){const X=ui(et,"angel"),nt=oe(X,.15);Pe(u,nt),Pe(b.material,nt),Pe(Y.material,nt)},samplePoints(et){const X=new Float32Array(et*3);for(let nt=0;nt<et;nt++)if(nt<et*.35)X[nt*3]=(Math.random()-.5)*50,X[nt*3+1]=-30+Math.random()*100,X[nt*3+2]=(Math.random()-.5)*28;else if(nt<et*.7){const pt=nt%2?1:-1,_t=Math.random();X[nt*3]=pt*(10+_t*55),X[nt*3+1]=5+Math.random()*45,X[nt*3+2]=-14+(Math.random()-.5)*16}else{const pt=Math.random()*Math.PI*2;X[nt*3]=Math.cos(pt)*22,X[nt*3+1]=88+Math.sin(pt)*4,X[nt*3+2]=Math.sin(pt)*22}return X},dispose(){Wn(t)}}}function My(n){const t=new Float32Array(n*3);for(let e=0;e<n;e++){const i=Math.random();if(i<.32)t[e*3]=6+(Math.random()-.5)*10,t[e*3+1]=-32+(Math.random()-.5)*10,t[e*3+2]=(Math.random()-.5)*8;else if(i<.78)t[e*3]=16+(Math.random()-.5)*5,t[e*3+1]=(Math.random()-.5)*72,t[e*3+2]=(Math.random()-.5)*8;else{const s=Math.random()*Math.PI*2;t[e*3]=Math.cos(s)*14-4,t[e*3+1]=Math.sin(s)*10+8,t[e*3+2]=(Math.random()-.5)*8}}return t}function _y(n){const t=ui(n,"letter"),e=new ue,i=new Ct(new kt(5,10,8),Ae(t,{roughness:.58,opacity:.72}));i.scale.set(1.2,.85,.55),i.position.set(6,-32,0);const s=new Ct(new be(3.5,36,3.5),Ae(oe(t,.2),{roughness:.62,opacity:.72}));return s.position.set(16,2,0),e.add(i,s),{group:e,update(r,o){e.rotation.z=Math.sin(o*.5)*.08},setPalette(r){const o=ui(r,"letter");Pe(i.material,o),Pe(s.material,oe(o,.2))},samplePoints:My,dispose(){Wn(e)}}}function xy(n,t){switch(n){case"letter":return uy(t);case"jellyfish":return fy(t);case"butterfly":return _u(t);case"clock":return _u(t);case"hourglass":return dy(t);case"tadpole":return py(t);case"music":return _y(t);case"brain":return my(t);case"angel":return gy(t);default:return null}}function To(n,t,e,i){if(!n||n.length!==t*3)return!1;for(let o=0;o<n.length;o++)if(!Number.isFinite(n[o]))return!1;const s=gf(e,i),r=Math.min(t,Math.max(48,Math.floor(t*.18)));return bo(n,s)&&!Rl(n,s)&&!Tl(n,r)}function Ff(n,t,e){return mr(bf(n,130),n,t,e,.14)}function oi(n,t,e,i,s=null){return ac(n,t,e,i,s||An)}function La(n,t,e,i=null){const s=i||An;return oi(s(n,t,e),n,t,e,s)}function vy(n,t,e,i,s,r=null){const o=r||An;let a=n,l=t;return To(a,e,i,s)||(a=oi(o(e,i,s),e,i,s,o)),To(l,e,i,s)||(l=oi(o(e,i,s),e,i,s,o)),{fromCloud:a,toCloud:l}}function xu(n,t,e,i,s){var h;const r=Me[n];if(r.id==="petal"){const u=Sf(t,95);return mr(u,t,e,i,.12)}if(r.id==="angel")return oi(Ff(t,e,i),t,e,i);const o=r.id==="letter"?"letter":r.id,a=xy(o,s);if(!a)return An(t,e,i);const l=a.samplePoints(t);return(h=a.dispose)==null||h.call(a),mr(l,t,e,i,.14)}function yy(n){const t=new Float32Array(n*3),e=ci.length;for(let i=0;i<n;i++){const s=wo(ci[i%e],1.38,.06);t[i*3]=s.r,t[i*3+1]=s.g,t[i*3+2]=s.b}return t}function Sy(n,t){const e=new Float32Array(t*3);for(let i=0;i<t;i++){const s=Ms(Li(Cl[i%Cl.length]),1.45);e[i*3]=s.r,e[i*3+1]=s.g,e[i*3+2]=s.b}return e}function Rs(n,t){const e=Je(n),i=new Float32Array(t*3);for(let s=0;s<t;s++){const r=e[s%e.length],{r:o,g:a,b:l}=Be(r);i[s*3]=o/255,i[s*3+1]=a/255,i[s*3+2]=l/255}return i}function by(n,t){const e=Rs(t,n),i=Rs(t,n);for(let s=0;s<n;s++){const r=(s*7+3)%n;i[s*3]=e[r*3],i[s*3+1]=e[r*3+1],i[s*3+2]=e[r*3+2]}return{colorA:e,colorB:i}}function wy(n,t,e){var s;const i=(s=Me[n])==null?void 0:s.id;return i==="tadpole"?Sy(e,t):i==="angel"?yy(t):Rs(i==="butterfly"?"clockRainbow":e,t)}function zf(n,t,e,i,s,r,o,a={}){var p,m;const l=(p=Me[i])==null?void 0:p.id,h=(m=Me[(i+1)%Me.length])==null?void 0:m.id,u=a.boostNextAngel!==!1,f=l==="angel"||u&&h==="angel";for(let M=0;M<t;M++){const _=M*3,g=f?.92+.48*(.5+.5*Math.sin(e*2.5+M*.02)):.55+.45*(.5+.5*Math.sin(e*2.5+M*.02));let d=s[_]*(1-o)+r[_]*o,y=s[_+1]*(1-o)+r[_+1]*o,w=s[_+2]*(1-o)+r[_+2]*o;if(f){d=d*(1-.06)+.06,y=y*(1-.06)+.06,w=w*(1-.06)+.06;const R=(d+y+w)/3,S=Rf;d=Math.min(1,Math.max(0,R+(d-R)*S)),y=Math.min(1,Math.max(0,R+(y-R)*S)),w=Math.min(1,Math.max(0,R+(w-R)*S))}n.colors[_]=d*g,n.colors[_+1]=y*g,n.colors[_+2]=w*g}}function ri(n){const t=Math.min(1,Math.max(0,n));return t*t*t*(t*(t*6-15)+10)}function Ks(n,t,e,i){const s=1-Math.exp(-Math.max(0,i)*e);return n+(t-n)*s}function Fo(n,t){n&&n.traverse(e=>{const i=e.material?Array.isArray(e.material)?e.material:[e.material]:[];for(const s of i)!s||s.opacity==null||t(s)})}function Ia(n,t){if(!n)return;const e=Math.min(1,Math.max(0,t));Fo(n,i=>{i.userData._dissolveBaseOpacity==null&&(i.userData._dissolveBaseOpacity=i.opacity),i.transparent=!0,i.opacity=i.userData._dissolveBaseOpacity*e,"depthWrite"in i&&(i.depthWrite=e>.88),"needsUpdate"in i&&(i.needsUpdate=!0)})}function Ey(n){n&&Fo(n,t=>{t.userData._dissolveBaseOpacity!=null&&(t.opacity=t.userData._dissolveBaseOpacity,delete t.userData._dissolveBaseOpacity),"depthWrite"in t&&(t.depthWrite=!0),"needsUpdate"in t&&(t.needsUpdate=!0)})}function vu(n,t){if(!n)return;const e=Math.min(1,Math.max(0,t));n.visible=!0,Fo(n,i=>{i.userData._angelIntroBase==null&&(i.userData._angelIntroBase=i.opacity),i.transparent=!0,i.opacity=i.userData._angelIntroBase*e,"needsUpdate"in i&&(i.needsUpdate=!0)})}function Da(n){n&&Fo(n,t=>{t.userData._angelIntroBase!=null&&(t.opacity=t.userData._angelIntroBase,delete t.userData._angelIntroBase)})}function Ay(n,t){const e=Math.min(1,n/mu),i=1-ri(e),s=ri(Math.min(1,n/(mu*.55))),r=1-ri(Math.max(0,(n-.22)/.78));let o=s*r,a=0;if(n>=nr){const h=(n-nr)/Math.max(.001,1-nr),u=ri(h);a=u*u}t==="angel"&&(o*=.42+.58*ri(n/.5),n>=nr&&(o*=Math.max(.08,1-a*.95),a=a*a*.82));const l=.62+.5*s*r;return{modelTarget:i,particleTarget:o,nextTarget:a,sizeTarget:l}}function yu(n,{count:t,time:e,dissolveFromIndex:i,colorA:s,fade:r,progress:o,incomingId:a}){zf(n,t,e,i,s,s,0,{boostNextAngel:!1});const l=ri(Math.min(1,o/.28)),h=1-ri(Math.max(0,(o-.38)/.62)),u=.68+.48*l*h,f=a==="angel"?.58:1,p=Math.max(0,r)*u*f,m=Math.max(0,.32*l*h)*(a==="angel"?.45:1);for(let M=0;M<t;M++){const _=M*3;let g=n.colors[_],d=n.colors[_+1],y=n.colors[_+2];g=g*(1-m)+m,d=d*(1-m)+m,y=y*(1-m)+m,n.colors[_]=Math.min(1,g*p*1.08),n.colors[_+1]=Math.min(1,d*p*1.08),n.colors[_+2]=Math.min(1,y*p*1.08)}}function Ty(){const n=ly(),t=fx();let e=0,i=null,s=null,r=null,o={},a=null,l=null,h=0,u="rainbow",f=null,p=1200,m=0,M="hold",_=0,g=null,d=null,y=null,w=null,x=0,R=!1,S=!1,E=!1,T=null,v=0,b=!1,A=!1,I=[],z=null,W=1,Y=0,Z=0,et=.7,X=1;function nt(){var it;return((it=o.angel)==null?void 0:it.group)||null}function pt({vel:it,fadeGroups:$=[],sizeSmooth:ct=.7,resetAngelIntro:dt=!0}={}){it!==void 0&&(T=it),b=!1,A=!1,I=$,z=null,W=1,Y=0,Z=0,et=ct,dt&&(X=1,Da(nt()))}function _t(){var it;return(it=Me[m])==null?void 0:it.id}function ht(){return _t()==="petal"&&(M==="hold"||M==="dissolve"&&b)}function K(){return!!Js[_t()]&&(M==="hold"||M==="dissolve"&&b)}function C(){var it;return((it=o[_t()])==null?void 0:it.bloom)||null}function L(it){var $;return it==="petal"?r:(($=o[it])==null?void 0:$.bloom)||null}function O(it,$,ct,dt){var q;if(M!=="dissolve")return;const bt=_a($),mt=(q=Me[v])==null?void 0:q.id,Lt=b?_t():null,zt=new Set,Wt=Tt=>{if(!Tt||zt.has(Tt))return;const lt=L(Tt);lt!=null&&lt.update&&(lt.update(it,bt,ct,dt),zt.add(Tt))};A||Wt(mt),b&&Wt(Lt)}function G(){if(M==="dissolve"){if(!A)for(const it of I)Ia(it,W);if(b&&z){const it=_t();let $=Z;it==="angel"&&($=$*$*X,z.visible=$>.05),Ia(z,$)}}}function U(it){if(X>=.999){X!==1&&(Da(nt()),X=1);return}_t()!=="angel"||M!=="hold"||(X=Ks(X,1,it,2.4),vu(nt(),X),X>.995&&(Da(nt()),X=1))}function B(it=performance.now()){return it-x<oy?(V(),x=0,!0):(x=it,!1)}function H(){const{w:it,h:$}=n.sampleDims(),ct=(bt,mt,Lt)=>La(bt,mt,Lt);if(_t()==="petal"&&(r!=null&&r.samplePoints))return Mt(),oi(r.samplePoints(p,it,$),p,it,$,ct);const dt=C();return dt!=null&&dt.samplePoints?(Mt(),oi(dt.samplePoints(p,it,$),p,it,$,ct)):oi(xu(m,p,it,$,u),p,it,$,ct)}function st(){const it=[];r&&s&&it.push(s);for(const $ of Object.values(o))$.bloom&&$.group&&it.push($.group);return it}function V(){var dt;if(M==="dissolve"||M==="morph")return;if(!n.morphReady()){R=!0;return}R=!1,E=!1,v=m,pt({fadeGroups:st(),sizeSmooth:.65});const it=Me[m],$=H();T=new Float32Array(p*3);for(let bt=0;bt<p;bt++){const mt=bt*3,Lt=Math.random()*Math.PI*2,zt=(Math.random()-.15)*.32,Wt=2.2+Math.random()*11;T[mt]=Math.cos(Lt)*Wt*Math.cos(zt),T[mt+1]=Math.sin(zt)*Wt*.4+1.2,T[mt+2]=Math.sin(Lt)*Wt*Math.cos(zt)}y=wy(v,p,u),w=y,a.positions.set($);const ct=(dt=Me[(v+1)%Me.length])==null?void 0:dt.id;yu(a,{count:p,time:e,dissolveFromIndex:v,colorA:y,fade:.04,progress:0,incomingId:ct}),a.geo.setDrawRange(0,p),a.geo.attributes.position.needsUpdate=!0,a.geo.attributes.color.needsUpdate=!0,a.mat.opacity=0,a.mat.size=Math.max(4,Math.min(13,((f==null?void 0:f.particleSize)||15)*.55)),a.points.renderOrder=30,yt(!0),l&&(l.points.visible=!1,l.geo.setDrawRange(0,0)),M="dissolve",_=0,g=null,d=null,t.set(it.label,"光の粒子へ…")}function J(){var ct,dt;const it=new Set(I),$=z;it.has(s)&&$!==s&&Ft();for(const bt of Object.keys(o)){const mt=o[bt];!(mt!=null&&mt.group)||!it.has(mt.group)||mt.group!==$&&((dt=(ct=mt.bloom)==null?void 0:ct.destroy)==null||dt.call(ct),ds(mt.group),mt.bloom=null)}I=[],A=!0}function N(it){var ct,dt,bt;if(!n.isReady())return!1;const $=Me[it];if(m=it,$.id==="petal")r&&(r.destroy(),r=null,s&&ds(s)),P(f,{skipStop:!0,keepFieldVisible:!0}),z=s;else if(Js[$.id]){const mt=o[$.id];mt!=null&&mt.bloom&&((dt=(ct=mt.bloom).destroy)==null||dt.call(ct),mt.bloom=null,mt.group&&ds(mt.group)),tt($.id,$.label,{skipStop:!0,keepFieldVisible:!0}),z=((bt=o[$.id])==null?void 0:bt.group)||null}else z=null;return Ia(z,0),z&&(z.renderOrder=5,$.id==="angel"&&(z.visible=!1,X=.78)),t.set($.label,"現れています…"),!0}function vt(){var ct;if(T=null,R=!1,M="hold",_=0,yt(!1),l&&(l.points.visible=!1,l.geo.setDrawRange(0,0)),A||J(),!b){const dt=(v+1)%Me.length;N(dt)}Ey(z),z&&(z.visible=!0);const it=((ct=Me[m])==null?void 0:ct.id)==="angel";it&&(X=Math.min(X,.72),vu(nt(),X)),pt({vel:null,resetAngelIntro:!it});const $=Me[m];t.set($.label,Ca)}function ut(it,$){var lt;if(!a||!T)return;_+=it;const ct=Math.min(1,_/ay),dt=(lt=Me[(v+1)%Me.length])==null?void 0:lt.id,{modelTarget:bt,particleTarget:mt,nextTarget:Lt,sizeTarget:zt}=Ay(ct,dt);W=Ks(W,bt,it,4.2),Y=Ks(Y,mt,it,dt==="angel"?3.2:3.8),Z=Ks(Z,Lt,it,dt==="angel"?1.7:2.6),et=Ks(et,zt,it,3.4);const Wt=Math.exp(-it*1.05),q=.28+.72*ri(Math.min(1,ct/.55));for(let gt=0;gt<p;gt++){const Rt=gt*3;a.positions[Rt]+=T[Rt]*it*q,a.positions[Rt+1]+=T[Rt+1]*it*q,a.positions[Rt+2]+=T[Rt+2]*it*q,T[Rt]*=Wt,T[Rt+1]=T[Rt+1]*Wt-1.6*it,T[Rt+2]*=Wt}A||W<=.02&&ct>=.78&&J(),G(),yu(a,{count:p,time:e,dissolveFromIndex:v,colorA:y,fade:Math.max(.03,Y),progress:ct,incomingId:dt}),a.mat.opacity=Math.max(0,Math.min(1,Y));const Tt=Math.max(4,Math.min(13,($.particleSize||15)*.56));if(a.mat.size=Tt*et,a.geo.attributes.position.needsUpdate=!0,a.geo.attributes.color.needsUpdate=!0,yt(!0),!b&&ct>=nr){const gt=(v+1)%Me.length;N(gt)&&(b=!0,Z=0,G())}if(ct>=1){if(!n.isReady()){R=!0;return}vt()}}function yt(it){a&&(a.points.visible=it,it||a.geo.setDrawRange(0,0),l&&(l.points.visible=it,it||l.geo.setDrawRange(0,0)))}function xt(it,$,ct){if(!l||!it){l&&(l.points.visible=!1,l.geo.setDrawRange(0,0));return}l.points.visible=!0,l.mat.size=Math.min(18,$*1.72),l.mat.opacity=ct*.9;let dt=0;for(let bt=0;bt<p&&dt<h;bt+=4){const mt=bt*3,Lt=dt*3;l.positions[Lt]=a.positions[mt],l.positions[Lt+1]=a.positions[mt+1],l.positions[Lt+2]=a.positions[mt+2],l.colors[Lt]=a.colors[mt],l.colors[Lt+1]=a.colors[mt+1],l.colors[Lt+2]=a.colors[mt+2],dt++}l.geo.setDrawRange(0,dt),l.geo.attributes.position.needsUpdate=!0,l.geo.attributes.color.needsUpdate=!0}function Ft(){r&&(r.destroy(),r=null),s&&ds(s)}function St(){var it,$;for(const ct of Object.keys(o)){const dt=o[ct];($=(it=dt.bloom)==null?void 0:it.destroy)==null||$.call(it),dt.group&&ds(dt.group),dt.bloom=null}}function F(){Ft(),St()}function P(it,$={}){if($.skipStop||F(),!s||!i||!n.isReady())return;const{w:ct,h:dt}=n.sampleDims();r=lx(),r.init(ct,dt,it||f||{palette:u},s),$.keepFieldVisible||yt(!1),t.set("花びら",Ca)}function tt(it,$,ct={}){ct.skipStop||F();const dt=o[it],bt=Js[it];if(!dt||!bt||!n.isReady())return;const{w:mt,h:Lt}=n.sampleDims();try{dt.bloom=bt(),dt.bloom.init(mt,Lt,f||{palette:u},dt.group)}catch(zt){console.error("[MorphSequence] bloom init failed:",it,zt),dt.bloom=null;return}ct.keepFieldVisible||yt(!1),t.set($,Ca)}function at(it,$,ct=null,dt=null){g=La(p,it,$,ct),dt!=null?d=oi(xu(dt,p,it,$,u),p,it,$,ct):d=La(p,it,$,ct),{fromCloud:g,toCloud:d}=vy(g,d,p,it,$,ct)}function Mt(){var ct,dt,bt;if(!n.isReady())return;const{w:it,h:$}=n.sampleDims();(ct=r==null?void 0:r.resize)==null||ct.call(r,it,$);for(const mt of Object.values(o))(bt=(dt=mt.bloom)==null?void 0:dt.resize)==null||bt.call(dt,it,$)}function ft(it){p=it,{colorA:y,colorB:w}=by(p,u)}function It(it=m){if(!n.isReady())return S=!0,!1;S=!1,E=!1,R=!1,pt({vel:null}),M="hold",_=0,g=null,d=null;const $=Me[it];return yt(!1),$.id==="petal"?P(f):Js[$.id]&&tt($.id,$.label),!0}function At(){if(!E||M!=="morph"||!n.isReady())return;const it=(m+1)%Me.length;It(it)&&(m=it)}function Nt(it,$){var gt;if(!a)return;const ct=Me[m];if(M==="hold"){Number.isFinite(ct.hold)&&ct.hold>0&&(_+=it,_>=ct.hold&&V());return}if(M==="dissolve"){ut(it,$);return}E?_=ct.morph:_+=it*($.speed||1),yt(!0);const{w:dt,h:bt}=n.sampleDims(),mt=(gt=Me[(m+1)%Me.length])==null?void 0:gt.id,Lt=ct.id==="angel"||mt==="angel",zt=Lt?Ff:null,Wt=(m+1)%Me.length;(!g||!d||g.length!==a.positions.length||d.length!==a.positions.length||!To(g,p,dt,bt)||!To(d,p,dt,bt))&&(at(dt,bt,zt,Wt),g&&a.positions.set(g));const q=Math.min(1,_/ct.morph);g&&d&&g.length===a.positions.length&&d.length===a.positions.length&&ux(a.positions,g,d,q,e,ct.style),zf(a,p,e,m,y,w,q),a.geo.setDrawRange(0,p),a.geo.attributes.position.needsUpdate=!0,a.geo.attributes.color.needsUpdate=!0;const Tt=Lt?.36:.55,lt=Math.max(4,Math.min(14,($.particleSize||15)*Tt));a.mat.size=lt,a.mat.opacity=Lt?.66:.95,xt(Lt,lt,a.mat.opacity),q>=1&&!E?(E=!0,_=ct.morph,At()):E&&At()}return{init(it,$,ct,dt){n.setSize(it,$),i=dt,e=0,m=0,M="hold",_=0,E=!1,R=!1,S=!1,pt({vel:null}),u=ct.palette||"rainbow",f={...ct},s=new ue,s.name="morphFlowerBloom",i.add(s),o={};for(const mt of Object.keys(Js)){const Lt=new ue;Lt.name=`morphBloom_${mt}`,i.add(Lt),o[mt]={group:Lt,bloom:null}}const bt=Math.min(1800,Math.max(600,Math.floor((ct.particleCount||1030)*1.1)));ft(bt),h=Math.max(1,Math.floor(bt*.24)),a=ve(bt,8),a.mat.sizeAttenuation=!0,a.mat.opacity=.95,i.add(a.points),l=ve(h,12),l.mat.sizeAttenuation=!0,l.mat.opacity=.78,l.points.visible=!1,i.add(l.points),n.isReady()?It():S=!0},resize(it,$){var bt,mt,Lt;const ct=n.width,dt=n.height;n.setSize(it,$),(bt=r==null?void 0:r.resize)==null||bt.call(r,it,$);for(const zt of Object.values(o))(Lt=(mt=zt.bloom)==null?void 0:mt.resize)==null||Lt.call(mt,it,$);M==="hold"&&n.isReady()&&(S||n.realDimsArrived(ct,dt))&&It(m),E&&n.isReady()&&At(),R&&n.morphReady()&&(M==="dissolve"?vt():M==="hold"&&V())},update(it,$,ct,dt){var Lt,zt;e+=it,f=dt,u=dt.palette||u,n.isReady()&&(S&&M==="hold"&&It(m),E&&At()),n.morphReady()&&R&&(M==="dissolve"?vt():M==="hold"&&V());const bt=Math.min(1800,Math.max(600,Math.floor((dt.particleCount||1030)*1.1)));if(bt!==p&&a&&M==="hold"&&(i.remove(a.points),a.geo.dispose(),(Lt=a.mat.map)==null||Lt.dispose(),a.mat.dispose(),l&&(i.remove(l.points),l.geo.dispose(),(zt=l.mat.map)==null||zt.dispose(),l.mat.dispose(),l=null),ft(bt),h=Math.max(1,Math.floor(p*.24)),a=ve(p,8),l=ve(h,12),l.mat.sizeAttenuation=!0,l.mat.opacity=.78,l.points.visible=!1,i.add(a.points,l.points),M==="hold"&&yt(!1)),M==="dissolve")O(it,$,ct,dt);else{ht()&&r&&r.update(it,_a($),ct,dt);const Wt=C();K()&&Wt&&Wt.update(it,_a($),ct,dt)}const mt=($==null?void 0:$.velocity)>8&&M==="morph"?1.35:1;Nt(it*mt,dt),U(it)},render(){var $;if(M==="dissolve"){const ct=($=Me[v])==null?void 0:$.id,dt=b?_t():null,bt=new Set,mt=Lt=>{var zt,Wt;!Lt||bt.has(Lt)||((Wt=(zt=L(Lt))==null?void 0:zt.render)==null||Wt.call(zt),bt.add(Lt))};A||mt(ct),b&&mt(dt),G();return}ht()&&r&&r.render();const it=C();K()&&it&&it.render()},onPointerDown(){},onPointerMove(){},onPointerUp(){M==="hold"&&(ht()||K())&&B()},setParams(it){var $,ct,dt;u=it.palette||u,f={...f||{},...it},p>0&&(y=Rs(u,p),w=Rs(u,p)),($=r==null?void 0:r.setParams)==null||$.call(r,it);for(const bt of Object.values(o))(dt=(ct=bt.bloom)==null?void 0:ct.setParams)==null||dt.call(ct,it)},destroy(){F(),a=null,l=null,s=null,o={},i=null,t.destroy()}}}const Ry=.5*(Math.sqrt(3)-1),$s=(3-Math.sqrt(3))/6,Cy=1/3,vn=1/6,Ne=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];class Py{constructor(t=Math.random()*2147483647){const e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;let i=Math.floor(Math.abs(t))||1;for(let s=255;s>0;s--){i=i*16807%2147483647;const r=i%(s+1);[e[s],e[r]]=[e[r],e[s]]}this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=e[s&255],this.permMod12[s]=this.perm[s]%12}noise2D(t,e){const i=(t+e)*Ry,s=Math.floor(t+i),r=Math.floor(e+i),o=(s+r)*$s,a=t-(s-o),l=e-(r-o),h=a>l?1:0,u=a>l?0:1,f=a-h+$s,p=l-u+$s,m=a-1+2*$s,M=l-1+2*$s,_=s&255,g=r&255,d=this.permMod12[_+this.perm[g]],y=this.permMod12[_+h+this.perm[g+u]],w=this.permMod12[_+1+this.perm[g+1]];let x,R,S,E=.5-a*a-l*l;E<0?x=0:(E*=E,x=E*E*(Ne[d][0]*a+Ne[d][1]*l));let T=.5-f*f-p*p;T<0?R=0:(T*=T,R=T*T*(Ne[y][0]*f+Ne[y][1]*p));let v=.5-m*m-M*M;return v<0?S=0:(v*=v,S=v*v*(Ne[w][0]*m+Ne[w][1]*M)),70*(x+R+S)}noise3D(t,e,i){const s=(t+e+i)*Cy,r=Math.floor(t+s),o=Math.floor(e+s),a=Math.floor(i+s),l=(r+o+a)*vn,h=t-(r-l),u=e-(o-l),f=i-(a-l);let p,m,M,_,g,d;h>=u?u>=f?(p=1,m=0,M=0,_=1,g=1,d=0):h>=f?(p=1,m=0,M=0,_=1,g=0,d=1):(p=0,m=0,M=1,_=1,g=0,d=1):u<f?(p=0,m=0,M=1,_=0,g=1,d=1):h<f?(p=0,m=1,M=0,_=0,g=1,d=1):(p=0,m=1,M=0,_=1,g=1,d=0);const y=h-p+vn,w=u-m+vn,x=f-M+vn,R=h-_+2*vn,S=u-g+2*vn,E=f-d+2*vn,T=h-1+3*vn,v=u-1+3*vn,b=f-1+3*vn,A=r&255,I=o&255,z=a&255,W=this.permMod12[A+this.perm[I+this.perm[z]]],Y=this.permMod12[A+p+this.perm[I+m+this.perm[z+M]]],Z=this.permMod12[A+_+this.perm[I+g+this.perm[z+d]]],et=this.permMod12[A+1+this.perm[I+1+this.perm[z+1]]];let X,nt,pt,_t,ht=.6-h*h-u*u-f*f;X=ht<0?0:(ht*=ht,ht*ht*(Ne[W][0]*h+Ne[W][1]*u+Ne[W][2]*f));let K=.6-y*y-w*w-x*x;nt=K<0?0:(K*=K,K*K*(Ne[Y][0]*y+Ne[Y][1]*w+Ne[Y][2]*x));let C=.6-R*R-S*S-E*E;pt=C<0?0:(C*=C,C*C*(Ne[Z][0]*R+Ne[Z][1]*S+Ne[Z][2]*E));let L=.6-T*T-v*v-b*b;return _t=L<0?0:(L*=L,L*L*(Ne[et][0]*T+Ne[et][1]*v+Ne[et][2]*b)),32*(X+nt+pt+_t)}}function Su(n,t,e,i,s=4,r=2,o=.5){let a=0,l=1,h=1;for(let u=0;u<s;u++)a+=l*n.noise3D(t*h,e*h,i*h),h*=r,l*=o;return a}function Ly(){const n=new Py;let t=[],e=0,i=0,s=0,r="rainbow",o=null,a=null;const l=1500;class h{constructor(f,p){this.reset(f,p)}reset(f,p){this.x=Math.random()*f,this.y=Math.random()*p,this.z=(Math.random()-.5)*180,this.prevX=this.x,this.prevY=this.y,this.prevZ=this.z,this.vx=0,this.vy=0,this.vz=0,this.life=0,this.maxLife=1.5+Math.random()*3,this.colorIdx=Math.floor(Math.random()*5),this.size=1+Math.random()*2}update(f,p,m,M,_){this.prevX=this.x,this.prevY=this.y,this.prevZ=this.z;const g=.0018,d=Su(n,this.x*g,this.y*g,s*.25,3)*Math.PI*4,y=Su(n,this.z*g,this.x*g,s*.2,2),w=90*M;this.vx+=Math.cos(d)*w*f,this.vy+=Math.sin(d)*w*f,this.vz+=(y-.5)*w*.45*f,this.vy+=_*40*f,this.vx*=.97,this.vy*=.97,this.vz*=.97,this.x+=this.vx*f,this.y+=this.vy*f,this.z+=this.vz*f,this.life+=f,(this.x<-80||this.x>p+80||this.y<-80||this.y>m+80||this.life>this.maxLife)&&this.reset(p,m)}}return{init(u,f,p,m){e=u,i=f,r=p.palette||"atmosphere",s=0,t=[],o=ve(l,11),m.add(o.points);const M=new ye,_=new Float32Array(l*2*3),g=new Float32Array(l*2*3);M.setAttribute("position",new Ce(_,3)),M.setAttribute("color",new Ce(g,3)),M.setDrawRange(0,0);const d=new jl({vertexColors:!0,transparent:!0,blending:Qt,depthWrite:!1}),y=new sf(M,d);y.frustumCulled=!1,m.add(y),a={geo:M,pos:_,col:g,lines:y};const w=Math.min(p.particleCount,l);for(let x=0;x<w;x++){const R=new h(u,f);R.life=Math.random()*R.maxLife,t.push(R)}},resize(u,f){e=u,i=f},update(u,f,p,m){s+=u,r=m.palette;const M=p.isActive?1+p.volume*2.5:1;t.forEach(g=>{if(g.update(u,e,i,m.speed*M,m.gravity),f.isDown||f.velocity>5){const d=f.x-g.x,y=f.y-g.y,w=d*d+y*y,x=220;if(w<x*x&&w>1){const R=Math.sqrt(w),S=(x-R)/x*120*u;g.vx+=d/R*S,g.vy+=y/R*S}}});const _=Math.min(m.particleCount,l);for(;t.length<_;)t.push(new h(e,i));for(;t.length>_;)t.pop()},render(u,f,p,m){if(!o)return;const M=Je(r);o.mat.size=6+m.particleSize*.9;let _=0;t.forEach((g,d)=>{const y=Be(M[g.colorIdx%M.length]),[w,x,R]=cn(y),S=g.life/g.maxLife,E=Math.sin(S*Math.PI)*.85,T=te(g.x,g.y,g.z,e,i);o.positions[d*3]=T.x,o.positions[d*3+1]=T.y,o.positions[d*3+2]=T.z,o.colors[d*3]=w*E,o.colors[d*3+1]=x*E,o.colors[d*3+2]=R*E;const v=te(g.prevX,g.prevY,g.prevZ,e,i),b=_*6;a.pos[b]=v.x,a.pos[b+1]=v.y,a.pos[b+2]=v.z,a.pos[b+3]=T.x,a.pos[b+4]=T.y,a.pos[b+5]=T.z,a.col[b]=w*E*.35,a.col[b+1]=x*E*.35,a.col[b+2]=R*E*.35,a.col[b+3]=w*E,a.col[b+4]=x*E,a.col[b+5]=R*E,_++}),o.geo.setDrawRange(0,t.length),o.geo.attributes.position.needsUpdate=!0,o.geo.attributes.color.needsUpdate=!0,a.geo.setDrawRange(0,_*2),a.geo.attributes.position.needsUpdate=!0,a.geo.attributes.color.needsUpdate=!0},onPointerDown(){},onPointerMove(){},onPointerUp(){},setParams(u){r=u.palette},destroy(){t=[],o=null,a=null}}}function Iy(){let n=[],t=[],e=0,i=0,s=0,r="rainbow",o=null,a=null;const l=800;class h{constructor(p,m){this.x=Math.random()*p,this.y=Math.random()*m,this.z=(Math.random()-.5)*200,this.vx=(Math.random()-.5)*25,this.vy=(Math.random()-.5)*25,this.vz=(Math.random()-.5)*18,this.baseSize=1+Math.random()*3,this.size=this.baseSize,this.brightness=Math.random(),this.sparklePhase=Math.random()*Math.PI*2,this.sparkleFreq=1.5+Math.random()*3,this.colorIdx=Math.floor(Math.random()*5),this.trail=[],this.maxTrail=6+Math.floor(Math.random()*8)}update(p,m,M,_,g,d,y){this.trail.push({x:this.x,y:this.y,z:this.z}),this.trail.length>this.maxTrail&&this.trail.shift();const w=_.x-this.x,x=_.y-this.y,R=w*w+x*x,S=280;if(R<S*S&&R>1){const E=Math.sqrt(R),T=(S-E)/S,v=_.isDown?180:50;this.vx+=w/E*T*v*p,this.vy+=x/E*T*v*p,this.vz+=(_.isDown?-40:8)*T*p}this.vy+=d*35*p,this.vx*=.992,this.vy*=.992,this.vz*=.992,this.x+=this.vx*g*p,this.y+=this.vy*g*p,this.z+=this.vz*g*p,this.x<0&&(this.x=0,this.vx*=-.7),this.x>m&&(this.x=m,this.vx*=-.7),this.y<0&&(this.y=0,this.vy*=-.7),this.y>M&&(this.y=M,this.vy*=-.7),this.z<-220&&(this.z=-220,this.vz*=-.7),this.z>220&&(this.z=220,this.vz*=-.7),this.brightness=.25+.75*Math.abs(Math.sin(s*this.sparkleFreq+this.sparklePhase)),this.size=y.isActive?this.baseSize*(1+y.bass*3):this.baseSize}}function u(f){t=[];const p=Math.min(n.length,160);for(let m=0;m<p;m++)for(let M=m+1;M<p;M++){const _=n[m].x-n[M].x,g=n[m].y-n[M].y,d=n[m].z-n[M].z,y=_*_+g*g+d*d;if(y<f*f&&t.push({a:n[m],b:n[M],opacity:1-Math.sqrt(y)/f}),t.length>400)return}}return{init(f,p,m,M){e=f,i=p,r=m.palette||"atmosphere",s=0,t=[],n=[],o=ve(l*4,12),M.add(o.points);const _=new ye,g=new Float32Array(400*2*3),d=new Float32Array(400*2*3);_.setAttribute("position",new Ce(g,3)),_.setAttribute("color",new Ce(d,3)),_.setDrawRange(0,0);const y=new jl({vertexColors:!0,transparent:!0,blending:Qt,depthWrite:!1}),w=new sf(_,y);w.frustumCulled=!1,M.add(w),a={geo:_,pos:g,col:d};const x=Math.min(m.particleCount,l);for(let R=0;R<x;R++)n.push(new h(f,p))},resize(f,p){e=f,i=p},update(f,p,m,M){s+=f,r=M.palette,n.forEach(g=>g.update(f,e,i,p,M.speed,M.gravity,m)),Math.floor(s*60)%3===0&&u(70+M.particleSize*4);const _=Math.min(M.particleCount,l);for(;n.length<_;)n.push(new h(e,i));for(;n.length>_;)n.pop()},render(f,p,m,M){if(!o)return;const _=Je(r);o.mat.size=5+M.particleSize*1.4;let g=0;n.forEach(d=>{const y=Be(_[d.colorIdx%_.length]),[w,x,R]=cn(y);for(let E=0;E<d.trail.length;E++){const T=d.trail[E],b=E/d.trail.length*.35*d.brightness,A=te(T.x,T.y,T.z,e,i);o.positions[g*3]=A.x,o.positions[g*3+1]=A.y,o.positions[g*3+2]=A.z,o.colors[g*3]=w*b,o.colors[g*3+1]=x*b,o.colors[g*3+2]=R*b,g++}const S=te(d.x,d.y,d.z,e,i);o.positions[g*3]=S.x,o.positions[g*3+1]=S.y,o.positions[g*3+2]=S.z,o.colors[g*3]=Math.min(1,w*d.brightness*1.4),o.colors[g*3+1]=Math.min(1,x*d.brightness*1.4),o.colors[g*3+2]=Math.min(1,R*d.brightness*1.4),g++}),o.geo.setDrawRange(0,g),o.geo.attributes.position.needsUpdate=!0,o.geo.attributes.color.needsUpdate=!0,t.forEach((d,y)=>{const w=Be(_[d.a.colorIdx%_.length]),[x,R,S]=cn(w),E=te(d.a.x,d.a.y,d.a.z,e,i),T=te(d.b.x,d.b.y,d.b.z,e,i),v=y*6;a.pos[v]=E.x,a.pos[v+1]=E.y,a.pos[v+2]=E.z,a.pos[v+3]=T.x,a.pos[v+4]=T.y,a.pos[v+5]=T.z;const b=d.opacity*.35;a.col[v]=x*b,a.col[v+1]=R*b,a.col[v+2]=S*b,a.col[v+3]=x*b,a.col[v+4]=R*b,a.col[v+5]=S*b}),a.geo.setDrawRange(0,t.length*2),a.geo.attributes.position.needsUpdate=!0,a.geo.attributes.color.needsUpdate=!0},onPointerDown(){},onPointerMove(){},onPointerUp(){},setParams(f){r=f.palette},destroy(){n=[],t=[],o=null,a=null}}}const Dy=new k(0,1,0);function Uy(){let n=[],t=0,e=0,i=0,s="rainbow",r=8,o=0,a=null;const l=new Kt,h=new Vt,u=80,f=14,p=u*f;class m{constructor(){this.angle=Math.random()*Math.PI*2,this.distance=30+Math.random()*250,this.lat=(Math.random()-.5)*.9,this.baseSize=4+Math.random()*18,this.size=this.baseSize,this.rotation=Math.random()*Math.PI*2,this.rotSpeed=(Math.random()-.5)*2.5,this.orbitSpeed=.08+Math.random()*.4,this.type=Math.floor(Math.random()*4),this.colorIdx=Math.floor(Math.random()*5),this.pulsePhase=Math.random()*Math.PI*2,this.opacity=.2+Math.random()*.45}update(_,g){this.angle+=this.orbitSpeed*g*_,this.rotation+=this.rotSpeed*g*_,this.size=this.baseSize+Math.sin(i*2+this.pulsePhase)*this.baseSize*.3}}return{init(M,_,g,d){t=M,e=_,s=g.palette||"atmosphere",i=0,n=[];const y=new rc(1,0),w=new ie({color:16777215,transparent:!0,opacity:.7,blending:Qt,depthWrite:!1,wireframe:!0});a=new $t(y,w,p),a.instanceColor=new Le(new Float32Array(p*3),3),a.frustumCulled=!1,d.add(a);const x=Math.max(15,Math.floor(g.particleCount/8));for(let R=0;R<x;R++)n.push(new m)},resize(M,_){t=M,e=_},update(M,_,g,d){i+=M,s=d.palette,o=Math.atan2(_.y-e/2,_.x-t/2),Math.sqrt((_.x-t/2)**2+(_.y-e/2)**2),r=6+Math.floor(_.y/Math.max(e,1)*8);const y=g.isActive?1+g.bass*4:1;n.forEach(x=>x.update(M,d.speed*y)),g.isActive&&n.forEach(x=>{x.size=x.baseSize*(1+g.mid*2)});const w=Math.max(15,Math.min(u,Math.floor(d.particleCount/8)));for(;n.length<w;)n.push(new m);for(;n.length>w;)n.pop()},render(M,_,g,d){if(!a)return;const y=Je(s),w=Math.min(t,e)*.42;let x=0;const R=Math.min(f,Math.max(6,r));for(let S=0;S<R;S++){const E=S/R*Math.PI*2+o*.1,T=S%2===1?-1:1;n.forEach(v=>{if(x>=p)return;const b=Be(y[v.colorIdx%y.length]),[A,I,z]=cn(b),W=v.distance/250*w;l.position.set(Math.cos(v.angle)*W,Math.sin(v.lat+i*.15)*W*.45*T,Math.sin(v.angle)*W),l.position.applyAxisAngle(Dy,E),l.rotation.set(v.rotation,E,v.rotation*.4);const Y=v.size*(d.particleSize/5)*.55;l.scale.setScalar(Math.max(Y,.2)),l.updateMatrix(),a.setMatrixAt(x,l.matrix),h.setRGB(A,I,z).multiplyScalar(.4+v.opacity),a.setColorAt(x,h),x++})}for(;x<p;)l.position.set(0,0,-5e3),l.scale.setScalar(.001),l.updateMatrix(),a.setMatrixAt(x,l.matrix),a.setColorAt(x,h.setRGB(0,0,0)),x++;a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)},onPointerDown(){},onPointerMove(){},onPointerUp(){},setParams(M){s=M.palette},destroy(){n=[],a=null}}}function Ny(){let n=[],t=[],e=0,i=0,s=0,r="rainbow",o=0,a=null,l=null;const h=new Kt,u=new Vt,f=48;class p{constructor(M,_,g){this.x=M,this.y=_,this.z=(Math.random()-.5)*80,this.radius=0,this.maxRadius=180+Math.random()*320,this.speed=110+Math.random()*140,this.lineWidth=1.5+Math.random()*3,this.opacity=1,this.rings=1+Math.floor(Math.random()*3),this.tilt=(Math.random()-.5)*.8;const d=Je(g);this.color=d[Math.floor(Math.random()*d.length)],this.rgb=Be(this.color)}update(M,_){return this.radius+=this.speed*_*M,this.opacity=Math.max(0,1-this.radius/this.maxRadius),this.opacity>.008}}return{init(m,M,_,g){e=m,i=M,r=_.palette||"atmosphere",s=0,o=0,n=[],t=[];const d=new we(1,.018,8,64),y=new ie({color:16777215,transparent:!0,opacity:.85,blending:Qt,depthWrite:!1});a=new $t(d,y,f),a.instanceColor=new Le(new Float32Array(f*3),3),a.frustumCulled=!1,g.add(a),l=ve(90,8),g.add(l.points);for(let w=0;w<90;w++)t.push({x:Math.random()*m,y:Math.random()*M,z:(Math.random()-.5)*140,size:.5+Math.random()*2,sx:(Math.random()-.5)*8,sy:(Math.random()-.5)*8,sz:(Math.random()-.5)*6,phase:Math.random()*Math.PI*2,colorIdx:Math.floor(Math.random()*5)});for(let w=0;w<3;w++)n.push(new p(Math.random()*m,Math.random()*M,r))},resize(m,M){e=m,i=M},update(m,M,_,g){s+=m,r=g.palette,n=n.filter(y=>y.update(m,g.speed)),o+=m;const d=Math.max(.3,1.8/g.speed);o>d&&(o=0,n.push(new p(Math.random()*e,Math.random()*i,r))),M.isDown&&M.velocity>4&&n.push(new p(M.x,M.y,r)),_.isActive&&_.bass>.35&&n.push(new p(e/2+(Math.random()-.5)*e*.5,i/2+(Math.random()-.5)*i*.5,r)),t.forEach(y=>{y.x+=y.sx*m,y.y+=y.sy*m,y.z+=y.sz*m,n.forEach(w=>{const x=y.x-w.x,R=y.y-w.y,S=Math.sqrt(x*x+R*R);if(Math.abs(S-w.radius)<35&&w.opacity>.08){const E=w.opacity*25;y.sx+=x/(S||1)*E*m,y.sy+=R/(S||1)*E*m,y.sz+=(Math.random()-.5)*E*m}}),y.sx*=.992,y.sy*=.992,y.sz*=.992,y.x<0&&(y.x+=e),y.x>e&&(y.x-=e),y.y<0&&(y.y+=i),y.y>i&&(y.y-=i)}),n.length>f&&n.splice(0,n.length-f)},render(){if(!a)return;const m=Je(r);for(let M=0;M<f;M++){const _=n[M];if(!_||_.radius<1){h.position.set(0,0,-4e3),h.scale.setScalar(.001),h.updateMatrix(),a.setMatrixAt(M,h.matrix),a.setColorAt(M,u.setRGB(0,0,0));continue}const g=te(_.x,_.y,_.z,e,i);h.position.copy(g),h.rotation.set(Math.PI/2+_.tilt,0,s*.2),h.scale.set(_.radius,_.radius,_.radius*.35),h.updateMatrix(),a.setMatrixAt(M,h.matrix);const[d,y,w]=cn(_.rgb);u.setRGB(d,y,w).multiplyScalar(_.opacity),a.setColorAt(M,u)}a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),t.forEach((M,_)=>{const g=Be(m[M.colorIdx%m.length]),[d,y,w]=cn(g),x=.35+.4*Math.sin(s*2.2+M.phase),R=te(M.x,M.y,M.z,e,i);l.positions[_*3]=R.x,l.positions[_*3+1]=R.y,l.positions[_*3+2]=R.z,l.colors[_*3]=d*x,l.colors[_*3+1]=y*x,l.colors[_*3+2]=w*x}),l.geo.setDrawRange(0,t.length),l.geo.attributes.position.needsUpdate=!0,l.geo.attributes.color.needsUpdate=!0},onPointerDown(m,M){for(let _=0;_<3;_++){const g=_*80;setTimeout(()=>{n.push(new p(m+(Math.random()-.5)*15,M+(Math.random()-.5)*15,r))},g)}},onPointerMove(m,M,_){_.velocity>10&&n.push(new p(m,M,r))},onPointerUp(){},setParams(m){r=m.palette},destroy(){n=[],t=[],a=null,l=null}}}const Of={morphSequence:Ty,fluidAurora:Ly,crystalDust:Iy,kaleidoPrism:Uy,interactiveRipples:Ny};class Fy{constructor(){this.audioCtx=null,this.analyser=null,this.waveformData=null,this.frequencyData=null,this.stream=null,this.isActive=!1,this.volume=0,this.bass=0,this.mid=0,this.treble=0}async startMic(){try{this.stream=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),this.audioCtx=new(window.AudioContext||window.webkitAudioContext);const t=this.audioCtx.createMediaStreamSource(this.stream);this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256,this.analyser.smoothingTimeConstant=.8,t.connect(this.analyser);const e=this.analyser.frequencyBinCount;this.waveformData=new Uint8Array(e),this.frequencyData=new Uint8Array(e),this.isActive=!0}catch(t){throw console.error("マイクアクセスエラー:",t),this.isActive=!1,t}}stop(){this.stream&&(this.stream.getTracks().forEach(t=>t.stop()),this.stream=null),this.audioCtx&&this.audioCtx.state!=="closed"&&(this.audioCtx.close().catch(()=>{}),this.audioCtx=null),this.analyser=null,this.isActive=!1,this.volume=0,this.bass=0,this.mid=0,this.treble=0}update(){if(!this.isActive||!this.analyser)return;this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.waveformData);const t=this.frequencyData.length,e=Math.floor(t/3);let i=0,s=0,r=0,o=0;for(let l=0;l<t;l++){const h=this.frequencyData[l]/255;i+=h,l<e?s+=h:l<e*2?r+=h:o+=h}const a=.3;this.volume=this.volume*(1-a)+i/t*a,this.bass=this.bass*(1-a)+s/e*a,this.mid=this.mid*(1-a)+r/e*a,this.treble=this.treble*(1-a)+o/(t-e*2)*a}getAudioData(){return{volume:this.volume,bass:this.bass,mid:this.mid,treble:this.treble,isActive:this.isActive,frequencyData:this.frequencyData,waveformData:this.waveformData}}}class zy{constructor(t){this.canvas=t,this.mediaRecorder=null,this.chunks=[],this.isRecording=!1}captureScreenshot(t="art-capture.png"){const e=document.createElement("a");e.download=t,e.href=this.canvas.toDataURL("image/png"),document.body.appendChild(e),e.click(),document.body.removeChild(e)}startRecording(){if(!this.isRecording)try{const t=this.canvas.captureStream(60),e=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"];let i="";for(const s of e)if(MediaRecorder.isTypeSupported(s)){i=s;break}this.mediaRecorder=new MediaRecorder(t,{mimeType:i||void 0,videoBitsPerSecond:8e6}),this.chunks=[],this.mediaRecorder.ondataavailable=s=>{s.data&&s.data.size>0&&this.chunks.push(s.data)},this.mediaRecorder.onstop=()=>{const s=new Blob(this.chunks,{type:i||"video/webm"}),r=URL.createObjectURL(s),o=document.createElement("a");o.download=`art-recording-${Date.now()}.webm`,o.href=r,document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(r),5e3),this.chunks=[]},this.mediaRecorder.start(1e3),this.isRecording=!0}catch(t){console.error("録画開始エラー:",t),this.isRecording=!1}}stopRecording(){if(!(!this.isRecording||!this.mediaRecorder)){try{this.mediaRecorder.stop()}catch(t){console.error("録画停止エラー:",t)}this.isRecording=!1}}toggleRecording(){return this.isRecording?this.stopRecording():this.startRecording(),this.isRecording}}const Oy="20260829-refactor-bloom-split";console.info(`[Digital Art Studio] ${Oy}`);const _c=document.getElementById("artCanvas"),Wi=new Q_(_c),vs=new Fy,Bf=new zy(_c);let Ro="morphSequence";Wi.setPreset(Of[Ro]());Wi.start();const By=document.querySelectorAll(".preset-btn");By.forEach(n=>{n.addEventListener("click",()=>{var e;const t=n.dataset.preset;t!==Ro&&((e=document.querySelector(".preset-btn.active"))==null||e.classList.remove("active"),n.classList.add("active"),Ro=t,Wi.setPreset(Of[t]()))})});const Gy=[{id:"particleCount",displayId:"particleCountValue",key:"particleCount",parse:parseInt},{id:"particleSize",displayId:"particleSizeValue",key:"particleSize",parse:parseInt},{id:"speed",displayId:"speedValue",key:"speed",parse:parseFloat},{id:"trail",displayId:"trailValue",key:"trail",parse:parseFloat},{id:"gravity",displayId:"gravityValue",key:"gravity",parse:parseFloat}];Gy.forEach(({id:n,displayId:t,key:e,parse:i})=>{const s=document.getElementById(n),r=document.getElementById(t);!s||!r||s.addEventListener("input",()=>{const o=i(s.value);r.textContent=s.value,Wi.setParams({[e]:o})})});const bu=document.getElementById("paletteSection"),Ua=document.getElementById("paletteToggle");Ua&&bu&&Ua.addEventListener("click",()=>{const n=bu.classList.toggle("is-collapsed");Ua.setAttribute("aria-expanded",n?"false":"true")});const Hy=document.querySelectorAll(".palette-swatch");Hy.forEach(n=>{n.addEventListener("click",()=>{var t;(t=document.querySelector(".palette-swatch.active"))==null||t.classList.remove("active"),n.classList.add("active"),Wi.setParams({palette:n.dataset.palette})})});const wu=document.getElementById("customColor");wu&&wu.addEventListener("input",()=>{});const js=document.getElementById("btnAudio");js.addEventListener("click",async()=>{if(vs.isActive)vs.stop(),js.querySelector(".audio-label").textContent="マイク OFF",js.classList.remove("active");else try{await vs.startMic(),js.querySelector(".audio-label").textContent="マイク ON",js.classList.add("active")}catch{alert(`マイクへのアクセスが拒否されました。
ブラウザの設定を確認してください。`)}});function Gf(){vs.isActive&&(vs.update(),Wi.setAudioData(vs.getAudioData())),requestAnimationFrame(Gf)}Gf();document.getElementById("btnCapture").addEventListener("click",()=>{Bf.captureScreenshot(`digital-art-${Ro}-${Date.now()}.png`)});const Eu=document.getElementById("btnRecord"),Vy=document.getElementById("recordingStatus");Eu.addEventListener("click",()=>{const n=Bf.toggleRecording();Eu.classList.toggle("recording",n),Vy.classList.toggle("hidden",!n)});document.getElementById("btnFullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})});const Hf=document.getElementById("controlPanel"),ky=document.getElementById("panelToggle");ky.addEventListener("click",()=>{Hf.classList.toggle("collapsed")});let co=!0;const Wy=[document.getElementById("toolbar"),document.getElementById("presetBar"),Hf,document.getElementById("statusBar")];_c.addEventListener("dblclick",()=>{co=!co,Wy.forEach(n=>{n&&(n.style.opacity=co?"":"0",n.style.pointerEvents=co?"":"none")})});const Au=document.getElementById("fpsDisplay");setInterval(()=>{Au&&(Au.textContent=Wi.fps+" FPS")},500);
