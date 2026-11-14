(()=>{var is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},af=0,bh=1,of=2;var Ya=1,El=2,Cr=3,pi=0,Kt=1,Zt=2,Cs=0,Ir=1,Eh=2,wh=3,Th=4,lf=5;var Is=100,cf=101,hf=102,uf=103,df=104,ff=200,pf=201,mf=202,gf=203,Ah=204,Rh=205,_f=206,xf=207,yf=208,vf=209,Mf=210,Sf=211,bf=212,Ef=213,wf=214,Zo=0,Jo=1,jo=2,lr=3,Qo=4,el=5,tl=6,nl=7,wl=0,Tf=1,Af=2,mi=0,Ch=1,Ih=2,Ph=3,$a=4,Lh=5,Dh=6,Nh=7,oh="attached",Rf="detached",Uh=300,Ps=301,Pr=302,Tl=303,Al=304,oi=1e3,zn=1001,cr=1002,Xt=1003,Rl=1004;var Ls=1005;var jt=1006,Lr=1007;var Vn=1008;var Tn=1009,Oh=1010,Fh=1011,Dr=1012,Cl=1013,Qn=1014,On=1015,ei=1016,Il=1017,Pl=1018,Ds=1020,Bh=35902,kh=35899,zh=1021,Hh=1022,Wn=1023,Ii=1026,zi=1027,Ll=1028,Dl=1029,rs=1030,Nl=1031;var Ul=1033,Ka=33776,Za=33777,Ja=33778,ja=33779,Ol=35840,Fl=35841,Bl=35842,kl=35843,zl=36196,Hl=37492,Gl=37496,Vl=37488,Wl=37489,Qa=37490,Xl=37491,ql=37808,Yl=37809,$l=37810,Kl=37811,Zl=37812,Jl=37813,jl=37814,Ql=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,ac=36492,oc=36494,lc=36495,cc=36283,hc=36284,eo=36285,uc=36286;var gs=2300,_s=2301,$o=2302,lh=2303,ch=2400,hh=2401,uh=2402,Cf=2500;var Gh=0,to=1,Nr=2,If=3200;var no=0,Pf=1,Hi="",Ft="srgb",vn="srgb-linear",ha="linear",Tt="srgb";var Ko=7680;var Lf=519,Df=512,Nf=513,Uf=514,Vh=515,Of=516,Ff=517,Wh=518,Xh=519,qh=35044;var Yh="300 es",Hn=2e3,hr=2001;function Tm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Am(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){let i=ur("canvas");return i.style.display="block",i}var cd={},dr=null;function ua(...i){let e="THREE."+i.shift();dr?dr("log",e,...i):console.log(e,...i)}function kf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=kf(i);let e="THREE."+i.shift();if(dr)dr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=kf(i);let e="THREE."+i.shift();if(dr)dr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ms(...i){let e=i.join(" ");e in cd||(cd[e]=!0,qe(...i))}function zf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hf={[Zo]:Zo,[jo]:tl,[Qo]:Qo,[lr]:el,[Jo]:Jo,[tl]:jo,[nl]:nl,[el]:lr},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=1234567,ar=Math.PI/180,xs=180/Math.PI;function ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function $h(i,e){return(i%e+e)%e}function Rm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Cm(i,e,t){return i!==e?(t-i)/(e-i):0}function oa(i,e,t){return(1-t)*i+t*e}function Im(i,e,t,n){return oa(i,e,1-Math.exp(-t*n))}function Pm(i,e=1){return e-Math.abs($h(i,e*2)-e)}function Lm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Um(i,e){return i+Math.random()*(e-i)}function Om(i){return i*(.5-Math.random())}function Fm(i){i!==void 0&&(hd=i);let e=hd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bm(i){return i*ar}function km(i){return i*xs}function zm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Hm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zh(i,e){if(e.constructor===Float32Array)return i;let t=dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Jh(i,e){if(e.constructor===Float32Array)return i;let t=dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var An={DEG2RAD:ar,RAD2DEG:xs,generateUUID:ti,clamp:ct,euclideanModulo:$h,mapLinear:Rm,inverseLerp:Cm,lerp:oa,damp:Im,pingpong:Pm,smoothstep:Lm,smootherstep:Dm,randInt:Nm,randFloat:Um,randFloatSpread:Om,seededRandom:Fm,degToRad:Bm,radToDeg:km,isPowerOfTwo:zm,ceilPowerOfTwo:Hm,floorPowerOfTwo:Kh,setQuaternionFromProperEuler:Gm,normalize:Jh,denormalize:Zh},oe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*x;p<0&&(d=-d,f=-f,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),y=Math.sin(v);g=Math.sin(g*v)/y,o=Math.sin(o*v)/y,l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+x*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new R,ud=new an,it=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],p=s[3],g=s[6],v=s[1],y=s[4],M=s[7],T=s[2],S=s[5],_=s[8];return r[0]=a*x+o*v+l*T,r[3]=a*p+o*y+l*S,r[6]=a*g+o*M+l*_,r[1]=c*x+h*v+u*T,r[4]=c*p+h*y+u*S,r[7]=c*g+h*M+u*_,r[2]=d*x+f*v+m*T,r[5]=d*p+f*y+m*S,r[8]=d*g+f*M+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new it,dd=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fd=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vm(){let i={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Tt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?ha:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vn]:{primaries:e,whitePoint:n,transfer:ha,toXYZ:dd,fromXYZ:fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:dd,fromXYZ:fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var dt=Vm();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gs,il=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gs===void 0&&(Gs=ur("canvas")),Gs.width=e.width,Gs.height=e.height;let s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wm=0,fr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nc(s[a].image)):r.push(Nc(s[a]))}else r=Nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var Xm=0,Uc=new R,Qt=class i extends Jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zn,s=zn,r=jt,a=Vn,o=Wn,l=Tn,c=i.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=ti(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Uh;Qt.DEFAULT_ANISOTROPY=1;var At=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,M=(f+1)/2,T=(g+1)/2,S=(h+d)/4,_=(u+x)/4,b=(m+p)/4;return y>M&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=_/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=b/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sl=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},da=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Je=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qm,e,Ym)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Xi.crossVectors(n,Pn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Xi.crossVectors(n,Pn)),Xi.normalize(),mo.crossVectors(Pn,Xi),s[0]=Xi.x,s[4]=mo.x,s[8]=Pn.x,s[1]=Xi.y,s[5]=mo.y,s[9]=Pn.y,s[2]=Xi.z,s[6]=mo.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],v=n[3],y=n[7],M=n[11],T=n[15],S=s[0],_=s[4],b=s[8],P=s[12],C=s[1],N=s[5],F=s[9],X=s[13],D=s[2],B=s[6],Y=s[10],z=s[14],le=s[3],q=s[7],ie=s[11],ae=s[15];return r[0]=a*S+o*C+l*D+c*le,r[4]=a*_+o*N+l*B+c*q,r[8]=a*b+o*F+l*Y+c*ie,r[12]=a*P+o*X+l*z+c*ae,r[1]=h*S+u*C+d*D+f*le,r[5]=h*_+u*N+d*B+f*q,r[9]=h*b+u*F+d*Y+f*ie,r[13]=h*P+u*X+d*z+f*ae,r[2]=m*S+x*C+p*D+g*le,r[6]=m*_+x*N+p*B+g*q,r[10]=m*b+x*F+p*Y+g*ie,r[14]=m*P+x*X+p*z+g*ae,r[3]=v*S+y*C+M*D+T*le,r[7]=v*_+y*N+M*B+T*q,r[11]=v*b+y*F+M*Y+T*ie,r[15]=v*P+y*X+M*z+T*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],p=e[11],g=e[15],v=l*f-c*d,y=o*f-c*u,M=o*d-l*u,T=a*f-c*h,S=a*d-l*h,_=a*u-o*h;return t*(x*v-p*y+g*M)-n*(m*v-p*T+g*S)+s*(m*y-x*T+g*_)-r*(m*M-x*S+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],p=e[14],g=e[15],v=t*o-n*a,y=t*l-s*a,M=t*c-r*a,T=n*l-s*o,S=n*c-r*o,_=s*c-r*l,b=h*x-u*m,P=h*p-d*m,C=h*g-f*m,N=u*p-d*x,F=u*g-f*x,X=d*g-f*p,D=v*X-y*F+M*N+T*C-S*P+_*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return e[0]=(o*X-l*F+c*N)*B,e[1]=(s*F-n*X-r*N)*B,e[2]=(x*_-p*S+g*T)*B,e[3]=(d*S-u*_-f*T)*B,e[4]=(l*C-a*X-c*P)*B,e[5]=(t*X-s*C+r*P)*B,e[6]=(p*M-m*_-g*y)*B,e[7]=(h*_-d*M+f*y)*B,e[8]=(a*F-o*C+c*b)*B,e[9]=(n*C-t*F-r*b)*B,e[10]=(m*S-x*M+g*v)*B,e[11]=(u*M-h*S-f*v)*B,e[12]=(o*P-a*N-l*b)*B,e[13]=(t*N-n*P+s*b)*B,e[14]=(x*y-m*T-p*v)*B,e[15]=(h*T-u*y+d*v)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,x=a*h,p=a*u,g=o*u,v=l*c,y=l*h,M=l*u,T=n.x,S=n.y,_=n.z;return s[0]=(1-(x+g))*T,s[1]=(f+M)*T,s[2]=(m-y)*T,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(d+g))*S,s[6]=(p+v)*S,s[7]=0,s[8]=(m+y)*_,s[9]=(p-v)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),l=Vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$n.copy(this);let c=1/a,h=1/o,u=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,t.setFromRotationMatrix($n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Hn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===hr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Hn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===hr)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vs=new R,$n=new Je,qm=new R(0,0,0),Ym=new R(1,1,1),Xi=new R,mo=new R,Pn=new R,pd=new Je,md=new an,Gn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return md.setFromEuler(this),this.setFromQuaternion(md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$m=0,gd=new R,Ws=new an,bi=new Je,go=new R,$r=new R,Km=new R,Zm=new an,_d=new R(1,0,0),xd=new R(0,1,0),yd=new R(0,0,1),vd={type:"added"},Jm={type:"removed"},Xs={type:"childadded",child:null},Oc={type:"childremoved",child:null},It=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Gn,n=new an,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new it}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(_d,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(yd,e)}translateOnAxis(e,t){return gd.copy(e).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_d,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt($r,go,this.up):bi.lookAt(go,$r,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(bi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jm),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new R(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},jm={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Fc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=$h(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fc(a,r,e+1/3),this.g=Fc(a,r,e),this.b=Fc(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return dt.workingToColorSpace(pn.copy(this),e),Math.round(ct(pn.r*255,0,255))*65536+Math.round(ct(pn.g*255,0,255))*256+Math.round(ct(pn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Ft){dt.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(_o);let n=oa(qi.h,_o.h,t),s=oa(qi.s,_o.s,t),r=oa(qi.l,_o.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new He;He.NAMES=Gf;var fa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ys=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new R,Ei=new R,Bc=new R,wi=new R,qs=new R,Ys=new R,Md=new R,kc=new R,zc=new R,Hc=new R,Gc=new At,Vc=new At,Wc=new At,ri=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kn.subVectors(s,t),Ei.subVectors(n,t),Bc.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(Ei),l=Kn.dot(Bc),c=Ei.dot(Ei),h=Ei.dot(Bc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Gc.setScalar(0),Vc.setScalar(0),Wc.setScalar(0),Gc.fromBufferAttribute(e,t),Vc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Gc,r.x),a.addScaledVector(Vc,r.y),a.addScaledVector(Wc,r.z),a}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),Ei.subVectors(e,t),Kn.cross(Ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;qs.subVectors(s,n),Ys.subVectors(r,n),kc.subVectors(e,n);let l=qs.dot(kc),c=Ys.dot(kc);if(l<=0&&c<=0)return t.copy(n);zc.subVectors(e,s);let h=qs.dot(zc),u=Ys.dot(zc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(qs,a);Hc.subVectors(e,r);let f=qs.dot(Hc),m=Ys.dot(Hc);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ys,o);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Md.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Md,o);let g=1/(p+x+d);return a=x*g,o=d*g,t.copy(n).addScaledVector(qs,a).addScaledVector(Ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},on=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(r,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),yo.subVectors(this.max,Kr),$s.subVectors(e.a,Kr),Ks.subVectors(e.b,Kr),Zs.subVectors(e.c,Kr),Yi.subVectors(Ks,$s),$i.subVectors(Zs,Ks),hs.subVectors($s,Zs);let t=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-hs.z,hs.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,hs.z,0,-hs.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-hs.y,hs.x,0];return!Xc(t,$s,Ks,Zs,yo)||(t=[1,0,0,0,1,0,0,0,1],!Xc(t,$s,Ks,Zs,yo))?!1:(vo.crossVectors(Yi,$i),t=[vo.x,vo.y,vo.z],Xc(t,$s,Ks,Zs,yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new R,new R,new R,new R,new R,new R,new R,new R],Zn=new R,xo=new on,$s=new R,Ks=new R,Zs=new R,Yi=new R,$i=new R,hs=new R,Kr=new R,yo=new R,vo=new R,us=new R;function Xc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){us.fromArray(i,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),h=n.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $t=new R,Mo=new oe,Qm=0,Wt=class extends Jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qh,this.updateRanges=[],this.gpuType=On,this.version=0,this._normalizationScale=e!==void 0?dc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jh(e,this.array)}};var pa=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ma=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},eg=new on,Zr=new R,qc=new R,En=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):eg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(qc)),this.expandByPoint(Zr.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tg=0,kn=new Je,Yc=new It,Js=new R,Ln=new on,Jr=new on,rn=new R,Pt=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tm(e)?ma:pa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Ln.min,Jr.min),Ln.expandByPoint(rn),rn.addVectors(Ln.max,Jr.max),Ln.expandByPoint(rn)):(Ln.expandByPoint(Jr.min),Ln.expandByPoint(Jr.max))}Ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(e,c),rn.add(Js)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new R,l[P]=new R;let h=new R,u=new R,d=new R,f=new oe,m=new oe,x=new oe,p=new R,g=new R;function v(P,C,N){c[P]=c[C]=c[N]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,C),x.fromBufferAttribute(r,N),u.sub(h),d.sub(h),m.sub(f),x.sub(f);let F=1/(m.x*x.y-x.x*m.y);isFinite(F)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(F),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(F),o[P].add(p),o[C].add(p),o[N].add(p),l[P].add(g),l[C].add(g),l[N].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,C=y.length;P<C;++P){let N=y[P],F=N.start,X=N.count;for(let D=F,B=F+X;D<B;D+=3)v(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new R,T=new R,S=new R,_=new R;function b(P){S.fromBufferAttribute(s,P),_.copy(S);let C=o[P];M.copy(C),M.sub(S.multiplyScalar(S.dot(C))).normalize(),T.crossVectors(_,C);let F=T.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,F)}for(let P=0,C=n.count;P<C;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Wt(d,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qh,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Sd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Sd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Sd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ti()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var yn=new R,Ji=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?dc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jh(e,this.data.array)}},$c=new R,ng=new R,ig=new it,cn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$c.subVectors(n,t).cross(ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ig.getNormalMatrix(e),s=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sg=0,mn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Ir,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new cn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gr=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},js,jr=new R,Qs=new R,er=new R,tr=new oe,Qr=new oe,Vf=new Je,So=new R,ea=new R,bo=new R,bd=new oe,Kc=new oe,Ed=new oe,ga=class extends It{constructor(e=new gr){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vs(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new Ji(n,3,0,!1)),js.setAttribute("uv",new Ji(n,2,3,!1))}this.geometry=js,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),Vf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Eo(So.set(-.5,-.5,0),er,a,Qs,s,r),Eo(ea.set(.5,-.5,0),er,a,Qs,s,r),Eo(bo.set(.5,.5,0),er,a,Qs,s,r),bd.set(0,0),Kc.set(1,0),Ed.set(1,1);let o=e.ray.intersectTriangle(So,ea,bo,!1,jr);if(o===null&&(Eo(ea.set(-.5,.5,0),er,a,Qs,s,r),Kc.set(0,1),o=e.ray.intersectTriangle(So,bo,ea,!1,jr),o===null))return;let l=e.ray.origin.distanceTo(jr);l<e.near||l>e.far||t.push({distance:l,point:jr.clone(),uv:ri.getInterpolation(jr,So,ea,bo,bd,Kc,Ed,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Eo(i,e,t,n,s,r){tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Qr.x=r*tr.x-s*tr.y,Qr.y=s*tr.x+r*tr.y):Qr.copy(tr),i.copy(e),i.x+=Qr.x,i.y+=Qr.y,i.applyMatrix4(Vf)}var Ai=new R,Zc=new R,wo=new R,To=new R,li=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zc.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),To.copy(this.origin).sub(Zc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wo),o=To.dot(this.direction),l=-To.dot(wo),c=To.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zc).addScaledVector(wo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,p=t.z-a.z,g=n.x-a.x,v=n.y-a.y,y=n.z-a.z,M=Math.abs(l),T=Math.abs(c),S=Math.abs(h),_,b,P,C,N,F,X,D,B,Y,z,le;if(M>=T&&M>=S?(P=l,F=u,B=m,le=g,l>=0?(_=c,b=h,C=d,N=f,X=x,D=p,Y=v,z=y):(_=h,b=c,C=f,N=d,X=p,D=x,Y=y,z=v)):T>=S?(P=c,F=d,B=x,le=v,c>=0?(_=h,b=l,C=f,N=u,X=p,D=m,Y=y,z=g):(_=l,b=h,C=u,N=f,X=m,D=p,Y=g,z=y)):(P=h,F=f,B=p,le=y,h>=0?(_=l,b=c,C=u,N=d,X=m,D=x,Y=g,z=v):(_=c,b=l,C=d,N=u,X=x,D=m,Y=v,z=g)),P===0)return null;let q=_/P,ie=b/P,ae=1/P,Pe=C-q*F,J=N-ie*F,H=X-q*B,$=D-ie*B,ce=Y-q*le,Ae=z-ie*le,ge=ce*$-Ae*H,te=Pe*Ae-J*ce,ze=H*J-$*Pe;if(s){if(ge<0||te<0||ze<0)return null}else if((ge<0||te<0||ze<0)&&(ge>0||te>0||ze>0))return null;let Ce=ge+te+ze;if(Ce===0)return null;let be=ae*(ge*F+te*B+ze*le);return(Ce>0?be<0:be>0)?null:this.at(be/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wd=new Je,ds=new li,Ao=new En,Td=new R,Ro=new R,Co=new R,Io=new R,Jc=new R,Po=new R,Ad=new R,Lo=new R,Ue=class extends It{constructor(e=new Pt,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Jc.fromBufferAttribute(u,e),a?Po.addScaledVector(Jc,h):Po.addScaledVector(Jc.sub(t),h))}t.add(Po)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(Ao.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Ao,Td)===null||ds.origin.distanceToSquared(Td)>(e.far-e.near)**2))&&(wd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(wd),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,T=y;M<T;M+=3){let S=o.getX(M),_=o.getX(M+1),b=o.getX(M+2);s=Do(this,g,e,n,c,h,u,S,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);s=Do(this,a,e,n,c,h,u,v,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,T=y;M<T;M+=3){let S=M,_=M+1,b=M+2;s=Do(this,g,e,n,c,h,u,S,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=p,y=p+1,M=p+2;s=Do(this,a,e,n,c,h,u,v,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function rg(i,e,t,n,s,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===pi,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Lo);return c<t.near||c>t.far?null:{distance:c,point:Lo.clone(),object:i}}function Do(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ro),i.getVertexPosition(l,Co),i.getVertexPosition(c,Io);let h=rg(i,e,t,n,Ro,Co,Io,Ad);if(h){let u=new R;ri.getBarycoord(Ad,Ro,Co,Io,u),s&&(h.uv=ri.getInterpolatedAttribute(s,o,l,c,u,new oe)),r&&(h.uv1=ri.getInterpolatedAttribute(r,o,l,c,u,new oe)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};ri.getNormal(Ro,Co,Io,d.normal),h.face=d,h.barycoord=u}return h}var ta=new At,Rd=new At,Cd=new At,ag=new At,Id=new Je,No=new R,jc=new En,Pd=new Je,Qc=new li,_a=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=oh,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,No),this.boundingSphere.expandByPoint(No)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jc.copy(this.boundingSphere),jc.applyMatrix4(s),e.ray.intersectsSphere(jc)!==!1&&(Pd.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(Pd),!(this.boundingBox!==null&&Qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rf?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Rd.fromBufferAttribute(s.attributes.skinIndex,e),Cd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ta.copy(t),t.set(0,0,0,0)):(ta.set(t.x,t.y,t.z,1),t.set(0,0,0)),ta.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Cd.getComponent(r);if(a!==0){let o=Rd.getComponent(r);Id.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ag.copy(ta).applyMatrix4(Id),a)}}return t.isVector4&&(t.w=ta.w),t.applyMatrix4(this.bindMatrixInverse)}},_r=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},xr=class extends Qt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Xt,h=Xt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ld=new Je,og=new Je,xa=class i{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:og;Ld.multiplyMatrices(o,t[r]),Ld.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new xr(t,e,e,Wn,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(qe("Skeleton: No bone found with UUID:",r),a=new _r),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Pi=class extends Wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new Je,Dd=new Je,Uo=[],Nd=new on,lg=new Je,na=new Ue,ia=new En,Li=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Nd.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Nd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),ia.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(na.geometry=this.geometry,na.material=this.material,na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(n),e.ray.intersectsSphere(ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,nr),Dd.multiplyMatrices(n,nr),na.matrixWorld=Dd,na.raycast(e,Uo);for(let a=0,o=Uo.length;a<o;a++){let l=Uo[a];l.instanceId=r,l.object=this,t.push(l)}Uo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(s*this.count),s,this.count,Ll,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fs=new En,cg=new oe(.5,.5),Oo=new R,ji=class{constructor(e=new cn,t=new cn,n=new cn,s=new cn,r=new cn,a=new cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],p=r[10],g=r[11],v=r[12],y=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,g-m,T-v).normalize(),s[1].setComponents(c+a,f+h,g+m,T+v).normalize(),s[2].setComponents(c+o,f+u,g+x,T+y).normalize(),s[3].setComponents(c-o,f-u,g-x,T-y).normalize(),n)s[4].setComponents(l,d,p,M).normalize(),s[5].setComponents(c-l,f-d,g-p,T-M).normalize();else if(s[4].setComponents(c-l,f-d,g-p,T-M).normalize(),t===Hn)s[5].setComponents(c+l,f+d,g+p,T+M).normalize();else if(t===hr)s[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let t=cg.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ud=new Je,al=class i{constructor(){this.coordinateSystem=Hn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ud.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ji),n[s].setFromProjectionMatrix(Ud,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ji),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var jn=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ol=new R,ll=new R,Od=new Je,sa=new li,Fo=new En,eh=new R,Fd=new R,Ms=class extends It{constructor(e=new Pt,t=new jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ol.fromBufferAttribute(t,s-1),ll.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ol.distanceTo(ll);e.setAttribute("lineDistance",new _t(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,e.ray.intersectsSphere(Fo)===!1)return;Od.copy(s).invert(),sa.copy(e.ray).applyMatrix4(Od);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,p=m-1;x<p;x+=c){let g=h.getX(x),v=h.getX(x+1),y=Bo(this,e,sa,l,g,v,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(f),g=Bo(this,e,sa,l,x,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,p=m-1;x<p;x+=c){let g=Bo(this,e,sa,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Bo(this,e,sa,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Bo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ol.fromBufferAttribute(o,s),ll.fromBufferAttribute(o,r),t.distanceSqToSegment(ol,ll,eh,Fd)>n)return;eh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(eh);if(!(c<e.near||c>e.far))return{distance:c,point:Fd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Bd=new R,kd=new R,ci=class extends Ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Bd.fromBufferAttribute(t,s),kd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bd.distanceTo(kd);e.setAttribute("lineDistance",new _t(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ya=class extends Ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Di=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zd=new Je,dh=new li,ko=new En,zo=new R,Qi=class extends It{constructor(e=new Pt,t=new Di){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;zd.copy(s).invert(),dh.copy(e.ray).applyMatrix4(zd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){let p=c.getX(m);zo.fromBufferAttribute(u,p),Hd(zo,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)zo.fromBufferAttribute(u,m),Hd(zo,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hd(i,e,t,n,s,r,a){let o=dh.distanceSqToPoint(i);if(o<t){let l=new R;dh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var va=class extends Qt{constructor(e=[],t=Ps,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yr=class extends Qt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends Qt{constructor(e,t,n=Qn,s,r,a,o=Xt,l=Xt,c,h=Ii,u=1){if(h!==Ii&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ma=class extends Ni{constructor(e,t=Qn,n=Ps,s,r,a=Xt,o=Xt,l,c=Ii){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sa=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pt=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function m(x,p,g,v,y,M,T,S,_,b,P){let C=M/_,N=T/b,F=M/2,X=T/2,D=S/2,B=_+1,Y=b+1,z=0,le=0,q=new R;for(let ie=0;ie<Y;ie++){let ae=ie*N-X;for(let Pe=0;Pe<B;Pe++){let J=Pe*C-F;q[x]=J*v,q[p]=ae*y,q[g]=D,c.push(q.x,q.y,q.z),q[x]=0,q[p]=0,q[g]=S>0?1:-1,h.push(q.x,q.y,q.z),u.push(Pe/_),u.push(1-ie/b),z+=1}}for(let ie=0;ie<b;ie++)for(let ae=0;ae<_;ae++){let Pe=d+ae+B*ie,J=d+ae+B*(ie+1),H=d+(ae+1)+B*(ie+1),$=d+(ae+1)+B*ie;l.push(Pe,J,$),l.push(J,H,$),le+=6}o.addGroup(f,le,P),f+=le,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Nn=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],p=n/2,g=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(f,2));function v(){let M=new R,T=new R,S=0,_=(t-e)/n;for(let b=0;b<=r;b++){let P=[],C=b/r,N=C*(t-e)+e;for(let F=0;F<=s;F++){let X=F/s,D=X*l+o,B=Math.sin(D),Y=Math.cos(D);T.x=N*B,T.y=-C*n+p,T.z=N*Y,u.push(T.x,T.y,T.z),M.set(B,_,Y).normalize(),d.push(M.x,M.y,M.z),f.push(X,1-C),P.push(m++)}x.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let C=x[P][b],N=x[P+1][b],F=x[P+1][b+1],X=x[P][b+1];(e>0||P!==0)&&(h.push(C,N,X),S+=3),(t>0||P!==r-1)&&(h.push(N,F,X),S+=3)}c.addGroup(g,S,0),g+=S}function y(M){let T=m,S=new oe,_=new R,b=0,P=M===!0?e:t,C=M===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),m++;let N=m;for(let F=0;F<=s;F++){let D=F/s*l+o,B=Math.cos(D),Y=Math.sin(D);_.x=P*Y,_.y=p*C,_.z=P*B,u.push(_.x,_.y,_.z),d.push(0,C,0),S.x=B*.5+.5,S.y=Y*.5*C+.5,f.push(S.x,S.y),m++}for(let F=0;F<s;F++){let X=T+F,D=N+F;M===!0?h.push(D,D+1,X):h.push(D+1,D,X),b+=3}c.addGroup(g,b,M===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vr=class i extends Nn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ba=class i extends Pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let y=new R,M=new R,T=new R;for(let S=0;S<t.length;S+=3)f(t[S+0],y),f(t[S+1],M),f(t[S+2],T),l(y,M,T,v)}function l(v,y,M,T){let S=T+1,_=[];for(let b=0;b<=S;b++){_[b]=[];let P=v.clone().lerp(M,b/S),C=y.clone().lerp(M,b/S),N=S-b;for(let F=0;F<=N;F++)F===0&&b===S?_[b][F]=P:_[b][F]=P.clone().lerp(C,F/N)}for(let b=0;b<S;b++)for(let P=0;P<2*(S-b)-1;P++){let C=Math.floor(P/2);P%2===0?(d(_[b][C+1]),d(_[b+1][C]),d(_[b][C])):(d(_[b][C+1]),d(_[b+1][C+1]),d(_[b+1][C]))}}function c(v){let y=new R;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(v),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let v=new R;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let M=p(v)/2/Math.PI+.5,T=g(v)/Math.PI+.5;a.push(M,1-T)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){let y=a[v+0],M=a[v+2],T=a[v+4],S=Math.max(y,M,T),_=Math.min(y,M,T);S>.9&&_<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){let M=v*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function m(){let v=new R,y=new R,M=new R,T=new R,S=new oe,_=new oe,b=new oe;for(let P=0,C=0;P<r.length;P+=9,C+=6){v.set(r[P+0],r[P+1],r[P+2]),y.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),S.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),b.set(a[C+4],a[C+5]),T.copy(v).add(y).add(M).divideScalar(3);let N=p(T);x(S,C+0,v,N),x(_,C+2,y,N),x(b,C+4,M,N)}}function x(v,y,M,T){T<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Ea=class i extends ba{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ho=new R,Go=new R,th=new R,Vo=new ri,wa=class extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(ar*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:p,c:g}=Vo;if(x.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Vo.getNormal(th),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let y=(v+1)%3,M=u[v],T=u[y],S=Vo[h[v]],_=Vo[h[y]],b=`${M}_${T}`,P=`${T}_${M}`,C=d.get(P);C?(th.dot(C.normal)<=r&&(f.push(S.x,S.y,S.z),f.push(_.x,_.y,_.z)),d.set(P,null)):d.has(b)||d.set(b,{index0:c[v],index1:c[y],normal:th.clone()})}}for(let m of d.values())if(m){let{index0:x,index1:p}=m;Ho.fromBufferAttribute(o,x),Go.fromBufferAttribute(o,p),f.push(Ho.x,Ho.y,Ho.z),f.push(Go.x,Go.y,Go.z)}this.setAttribute("position",new _t(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new oe:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,s=[],r=[],a=[],o=new R,l=new Je;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Mr=class extends Un{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cl=class extends Mr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Gd=new R,Vd=new R,nh=new jh,ih=new jh,sh=new jh,Sr=class extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Vd.subVectors(s[0],s[1]).add(s[0]),c=Vd);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Gd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),nh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,p),ih.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,p),sh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(nh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ih.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),sh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(nh.calc(l),ih.calc(l),sh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function hg(i,e){let t=1-i;return t*t*e}function ug(i,e){return 2*(1-i)*i*e}function dg(i,e){return i*i*e}function la(i,e,t,n){return hg(i,e)+ug(i,t)+dg(i,n)}function fg(i,e){let t=1-i;return t*t*t*e}function pg(i,e){let t=1-i;return 3*t*t*i*e}function mg(i,e){return 3*(1-i)*i*i*e}function gg(i,e){return i*i*i*e}function ca(i,e,t,n,s){return fg(i,e)+pg(i,t)+mg(i,n)+gg(i,s)}var Ta=class extends Un{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ca(e,s.x,r.x,a.x,o.x),ca(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hl=class extends Un{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ca(e,s.x,r.x,a.x,o.x),ca(e,s.y,r.y,a.y,o.y),ca(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends Un{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ul=class extends Un{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Un{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(la(e,s.x,r.x,a.x),la(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Un{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(la(e,s.x,r.x,a.x),la(e,s.y,r.y,a.y),la(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Wd(o,l.x,c.x,h.x,u.x),Wd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},dl=Object.freeze({__proto__:null,ArcCurve:cl,CatmullRomCurve3:Sr,CubicBezierCurve:Ta,CubicBezierCurve3:hl,EllipseCurve:Mr,LineCurve:Aa,LineCurve3:ul,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:Ca,SplineCurve:Ia}),fl=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new dl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Pa=class extends fl{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Aa(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ra(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ta(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ia(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Mr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},es=class extends Pa{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Pa().fromJSON(s))}return this}};function _g(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Wf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Sg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return La(r,a,t,o,l,c,0),a}function Wf(i,e,t,n,s){let r;if(s===Dg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Xd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Xd(a/n|0,i[a],i[a+1],r);return r&&br(r,r.next)&&(Na(r),r=r.next),r}function Ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(br(t,t.next)||kt(t.prev,t,t.next)===0)){if(Na(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function La(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ag(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?yg(i,n,s,r):xg(i)){e.push(l.i,i.i,c.i),Na(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vg(Ss(i),e),La(i,e,t,n,s,r,2)):a===2&&Mg(i,e,t,n,s,r):La(Ss(i),e,t,n,s,r,1);break}}}function xg(i){let e=i.prev,t=i,n=i.next;if(kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ra(s,o,r,l,a,c,m.x,m.y)&&kt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function yg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(kt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),x=Math.max(o,l,c),p=Math.max(h,u,d),g=fh(f,m,e,t,n),v=fh(x,p,e,t,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=g&&M&&M.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&ra(o,h,l,u,c,d,y.x,y.y)&&kt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&ra(o,h,l,u,c,d,M.x,M.y)&&kt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&ra(o,h,l,u,c,d,y.x,y.y)&&kt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&ra(o,h,l,u,c,d,M.x,M.y)&&kt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!br(n,s)&&qf(n,t,t.next,s)&&Da(n,s)&&Da(s,n)&&(e.push(n.i,t.i,s.i),Na(t),Na(t.next),t=i=s),t=t.next}while(t!==i);return Ss(t)}function Mg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ig(a,o)){let l=Yf(a,o);a=Ss(a,a.next),l=Ss(l,l.next),La(a,e,t,n,s,r,0),La(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Sg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Wf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Cg(c))}s.sort(bg);for(let r=0;r<s.length;r++)t=Eg(s[r],t);return t}function bg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Eg(i,e){let t=wg(i,e);if(!t)return e;let n=Yf(t,i);return Ss(n,n.next),Ss(t,t.next)}function wg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(br(i,t))return t;do{if(br(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Xf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Da(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Tg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Tg(i,e){return kt(i.prev,i,e.prev)<0&&kt(e.next,i,i.next)<0}function Ag(i,e,t,n){let s=i;do s.z===0&&(s.z=fh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rg(s)}function Rg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function fh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Cg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ra(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Xf(i,e,t,n,s,r,a,o)}function Ig(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Pg(i,e)&&(Da(i,e)&&Da(e,i)&&Lg(i,e)&&(kt(i.prev,i,e.prev)||kt(i,e.prev,e))||br(i,e)&&kt(i.prev,i,i.next)>0&&kt(e.prev,e,e.next)>0)}function kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function br(i,e){return i.x===e.x&&i.y===e.y}function qf(i,e,t,n){let s=Xo(kt(i,e,t)),r=Xo(kt(i,e,n)),a=Xo(kt(t,n,i)),o=Xo(kt(t,n,e));return!!(s!==r&&a!==o||s===0&&Wo(i,t,e)||r===0&&Wo(i,n,e)||a===0&&Wo(t,i,n)||o===0&&Wo(t,e,n))}function Wo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Xo(i){return i>0?1:i<0?-1:0}function Pg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&qf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Da(i,e){return kt(i.prev,i,i.next)<0?kt(i,e,i.next)>=0&&kt(i,i.prev,e)>=0:kt(i,e,i.prev)<0||kt(i,i.next,e)<0}function Lg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Yf(i,e){let t=ph(i.i,i.x,i.y),n=ph(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xd(i,e,t,n){let s=ph(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Na(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ph(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var mh=class{static triangulate(e,t,n=2){return _g(e,t,n)}},ps=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];qd(e),Yd(n,e);let a=e.length;t.forEach(qd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Yd(n,t[l]);let o=mh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function qd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var bs=class i extends Pt{constructor(e=new es([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Ng,y,M=!1,T,S,_,b;if(g){y=g.getSpacedPoints(h),M=!0,d=!1;let se=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,se),S=new R,_=new R,b=new R}d||(p=0,f=0,m=0,x=0);let P=o.extractPoints(c),C=P.shape,N=P.holes;if(!ps.isClockWise(C)){C=C.reverse();for(let se=0,he=N.length;se<he;se++){let _e=N[se];ps.isClockWise(_e)&&(N[se]=_e.reverse())}}function X(se){let _e=10000000000000001e-36,Ne=se[0];for(let Ee=1;Ee<=se.length;Ee++){let tt=Ee%se.length,Ge=se[tt],ut=Ge.x-Ne.x,ot=Ge.y-Ne.y,xt=ut*ut+ot*ot,U=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(Ne.x),Math.abs(Ne.y)),Ot=_e*U*U;if(xt<=Ot){se.splice(tt,1),Ee--;continue}Ne=Ge}}X(C),N.forEach(X);let D=N.length,B=C;for(let se=0;se<D;se++){let he=N[se];C=C.concat(he)}function Y(se,he,_e){return he||et("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(he,_e)}let z=C.length;function le(se,he,_e){let Ne,Ee,tt,Ge=se.x-he.x,ut=se.y-he.y,ot=_e.x-se.x,xt=_e.y-se.y,U=Ge*Ge+ut*ut,Ot=Ge*xt-ut*ot;if(Math.abs(Ot)>Number.EPSILON){let nt=Math.sqrt(U),wt=Math.sqrt(ot*ot+xt*xt),Me=he.x-ut/nt,Dt=he.y+Ge/nt,$e=_e.x-xt/wt,Qe=_e.y+ot/wt,A=(($e-Me)*xt-(Qe-Dt)*ot)/(Ge*xt-ut*ot);Ne=Me+Ge*A-se.x,Ee=Dt+ut*A-se.y;let E=Ne*Ne+Ee*Ee;if(E<=2)return new oe(Ne,Ee);tt=Math.sqrt(E/2)}else{let nt=!1;Ge>Number.EPSILON?ot>Number.EPSILON&&(nt=!0):Ge<-Number.EPSILON?ot<-Number.EPSILON&&(nt=!0):Math.sign(ut)===Math.sign(xt)&&(nt=!0),nt?(Ne=-ut,Ee=Ge,tt=Math.sqrt(U)):(Ne=Ge,Ee=ut,tt=Math.sqrt(U/2))}return new oe(Ne/tt,Ee/tt)}let q=[];for(let se=0,he=B.length,_e=he-1,Ne=se+1;se<he;se++,_e++,Ne++)_e===he&&(_e=0),Ne===he&&(Ne=0),q[se]=le(B[se],B[_e],B[Ne]);let ie=[],ae,Pe=q.concat();for(let se=0,he=D;se<he;se++){let _e=N[se];ae=[];for(let Ne=0,Ee=_e.length,tt=Ee-1,Ge=Ne+1;Ne<Ee;Ne++,tt++,Ge++)tt===Ee&&(tt=0),Ge===Ee&&(Ge=0),ae[Ne]=le(_e[Ne],_e[tt],_e[Ge]);ie.push(ae),Pe=Pe.concat(ae)}let J;if(p===0)J=ps.triangulateShape(B,N);else{let se=[],he=[];for(let _e=0;_e<p;_e++){let Ne=_e/p,Ee=f*Math.cos(Ne*Math.PI/2),tt=m*Math.sin(Ne*Math.PI/2)+x;for(let Ge=0,ut=B.length;Ge<ut;Ge++){let ot=Y(B[Ge],q[Ge],tt);te(ot.x,ot.y,-Ee),Ne===0&&se.push(ot)}for(let Ge=0,ut=D;Ge<ut;Ge++){let ot=N[Ge];ae=ie[Ge];let xt=[];for(let U=0,Ot=ot.length;U<Ot;U++){let nt=Y(ot[U],ae[U],tt);te(nt.x,nt.y,-Ee),Ne===0&&xt.push(nt)}Ne===0&&he.push(xt)}}J=ps.triangulateShape(se,he)}let H=J.length,$=m+x;for(let se=0;se<z;se++){let he=d?Y(C[se],Pe[se],$):C[se];M?(_.copy(T.normals[0]).multiplyScalar(he.x),S.copy(T.binormals[0]).multiplyScalar(he.y),b.copy(y[0]).add(_).add(S),te(b.x,b.y,b.z)):te(he.x,he.y,0)}for(let se=1;se<=h;se++)for(let he=0;he<z;he++){let _e=d?Y(C[he],Pe[he],$):C[he];M?(_.copy(T.normals[se]).multiplyScalar(_e.x),S.copy(T.binormals[se]).multiplyScalar(_e.y),b.copy(y[se]).add(_).add(S),te(b.x,b.y,b.z)):te(_e.x,_e.y,u/h*se)}for(let se=p-1;se>=0;se--){let he=se/p,_e=f*Math.cos(he*Math.PI/2),Ne=m*Math.sin(he*Math.PI/2)+x;for(let Ee=0,tt=B.length;Ee<tt;Ee++){let Ge=Y(B[Ee],q[Ee],Ne);te(Ge.x,Ge.y,u+_e)}for(let Ee=0,tt=N.length;Ee<tt;Ee++){let Ge=N[Ee];ae=ie[Ee];for(let ut=0,ot=Ge.length;ut<ot;ut++){let xt=Y(Ge[ut],ae[ut],Ne);M?te(xt.x,xt.y+y[h-1].y,y[h-1].x+_e):te(xt.x,xt.y,u+_e)}}}ce(),Ae();function ce(){let se=s.length/3;if(d){let he=0,_e=z*he;for(let Ne=0;Ne<H;Ne++){let Ee=J[Ne];ze(Ee[2]+_e,Ee[1]+_e,Ee[0]+_e)}he=h+p*2,_e=z*he;for(let Ne=0;Ne<H;Ne++){let Ee=J[Ne];ze(Ee[0]+_e,Ee[1]+_e,Ee[2]+_e)}}else{for(let he=0;he<H;he++){let _e=J[he];ze(_e[2],_e[1],_e[0])}for(let he=0;he<H;he++){let _e=J[he];ze(_e[0]+z*h,_e[1]+z*h,_e[2]+z*h)}}n.addGroup(se,s.length/3-se,0)}function Ae(){let se=s.length/3,he=0;ge(B,he),he+=B.length;for(let _e=0,Ne=N.length;_e<Ne;_e++){let Ee=N[_e];ge(Ee,he),he+=Ee.length}n.addGroup(se,s.length/3-se,1)}function ge(se,he){let _e=se.length;for(;--_e>=0;){let Ne=_e,Ee=_e-1;Ee<0&&(Ee=se.length-1);for(let tt=0,Ge=h+p*2;tt<Ge;tt++){let ut=z*tt,ot=z*(tt+1),xt=he+Ne+ut,U=he+Ee+ut,Ot=he+Ee+ot,nt=he+Ne+ot;Ce(xt,U,Ot,nt)}}}function te(se,he,_e){l.push(se),l.push(he),l.push(_e)}function ze(se,he,_e){be(se),be(he),be(_e);let Ne=s.length/3,Ee=v.generateTopUV(n,s,Ne-3,Ne-2,Ne-1);Oe(Ee[0]),Oe(Ee[1]),Oe(Ee[2])}function Ce(se,he,_e,Ne){be(se),be(he),be(Ne),be(he),be(_e),be(Ne);let Ee=s.length/3,tt=v.generateSideWallUV(n,s,Ee-6,Ee-3,Ee-2,Ee-1);Oe(tt[0]),Oe(tt[1]),Oe(tt[3]),Oe(tt[1]),Oe(tt[2]),Oe(tt[3])}function be(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function Oe(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ug(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new dl[s.type]().fromJSON(s)),new i(n,e.options)}},Ng={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-u),new oe(d,1-m),new oe(x,1-g)]:[new oe(o,1-l),new oe(h,1-u),new oe(f,1-m),new oe(p,1-g)]}};function Ug(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ua=class i extends ba{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Mn=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let v=g*d-a;for(let y=0;y<c;y++){let M=y*u-r;m.push(M,-v,0),x.push(0,0,1),p.push(y/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let y=v+c*g,M=v+c*(g+1),T=v+1+c*(g+1),S=v+1+c*g;f.push(y,M,S),f.push(M,T,S)}this.setIndex(f),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},hi=class i extends Pt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new R,m=new oe;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let g=r+p/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let g=0;g<n;g++){let v=g+p,y=v,M=v+n+1,T=v+n+2,S=v+1;o.push(y,M,S),o.push(M,T,S)}}this.setIndex(o),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ts=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let v=[],y=g/n,M=a+y*o,T=e*Math.cos(M),S=Math.sqrt(e*e-T*T),_=0;g===0&&a===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let P=b/t,C=s+P*r;u.x=-S*Math.cos(C),u.y=T,u.z=S*Math.sin(C),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(P+_,1-y),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let y=h[g][v+1],M=h[g][v],T=h[g+1][v],S=h[g+1][v+1];(g!==0||a>0)&&f.push(y,M,S),(g!==n-1||l<Math.PI)&&f.push(M,T,S)}this.setIndex(f),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Oa=class i extends Pt{constructor(e=new Ca(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new oe,h=new R,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(f,2));function x(){for(let y=0;y<t;y++)p(y);p(r===!1?t:0),v(),g()}function p(y){h=e.getPointAt(y/t,h);let M=a.normals[y],T=a.binormals[y];for(let S=0;S<=s;S++){let _=S/s*Math.PI*2,b=Math.sin(_),P=-Math.cos(_);l.x=P*M.x+b*T.x,l.y=P*M.y+b*T.y,l.z=P*M.z+b*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let y=1;y<=t;y++)for(let M=1;M<=s;M++){let T=(s+1)*(y-1)+(M-1),S=(s+1)*y+(M-1),_=(s+1)*y+M,b=(s+1)*(y-1)+M;m.push(T,S,b),m.push(S,_,b)}}function v(){for(let y=0;y<=t;y++)for(let M=0;M<=s;M++)c.x=y/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new dl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if($d(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if($d(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=Ns(i[t]);for(let s in n)e[s]=n[s]}return e}function $d(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Og(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var $f={clone:Ns,merge:gn},Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=Og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new it().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},pl=class extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Fa=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ml=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gl=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function aa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function kg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Kd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function zg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_l=class extends di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hh:r=e,o=2*t-n;break;case uh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hh:a=e,l=2*n-t;break;case uh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,g=-d*p+2*d*x-d*m,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*p+(1.5+f)*x+.5*m,M=f*p-f*x;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+v*a[c+T]+y*a[l+T]+M*a[u+T];return r}},xl=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},yl=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vl=class extends di{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),x=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let x=a[c+m],p=a[l+m],g=f*d+m*2,v=u[g],y=u[g+1],M=e*d+m*2,T=h[M],S=h[M+1],_=Gg(n,t,v,T,s);r[m]=Kf(_,x,y,S,p)}return r}};function Kf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Hg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Gg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Kf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Hg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zi(t,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zi(e.times,Array),values:Zi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),aa(e.settings)&&(n.settings={inTangents:Zi(e.settings.inTangents,Array),outTangents:Zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case _s:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break;case lh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return _s;case this.InterpolantFactoryMethodSmooth:return $o;case this.InterpolantFactoryMethodBezier:return lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;aa(this.settings)&&(Zd(this.settings.inTangents,e),Zd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;aa(this.settings)&&(Jd(this.settings.inTangents,e),Jd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){et("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Am(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$o,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,aa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Jd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=_s;var Ui=class extends wn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=gs;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Ba.prototype.ValueTypeName="color";var Oi=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Oi.prototype.ValueTypeName="number";var Ml=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)an.slerpFlat(r,0,a,c-o,a,c,l);return r}},Fi=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends wn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=gs;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};ns.prototype.ValueTypeName="vector";var ka=class{constructor(e="",t=-1,n=[],s=Cf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Wg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(wn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=kg(l);l=Kd(l,1,h),c=Kd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Oi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Vg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oi;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return Ba;case"quaternion":return Fi;case"bool":case"boolean":return Ui;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Wg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Vg(i.type);if(i.times===void 0){let n=[],s=[];zg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),aa(i.settings)&&(t.settings={inTangents:Zi(i.settings.inTangents,Float32Array),outTangents:Zi(i.settings.outTangents,Float32Array)}),t}var ai={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(jd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!jd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function jd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Er=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zf=new Er,fi=class{constructor(e){this.manager=e!==void 0?e:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},gh=class extends Error{constructor(e,t){super(e),this.response=t}},wr=class extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ai.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:s});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ri[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,p=new ReadableStream({start(g){v();function v(){u.read().then(({done:y,value:M})=>{if(y)g.close();else{x+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let S=0,_=h.length;S<_;S++){let b=h[S];b.onProgress&&b.onProgress(T)}g.enqueue(M),v()}},y=>{g.error(y)})}}});return new Response(p)}else throw new gh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ai.add(`file:${e}`,c);let h=Ri[e];delete Ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ir=new WeakMap,Sl=class extends fi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ai.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ir.get(a);u===void 0&&(u=[],ir.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=ur("img");function l(){h(),t&&t(this);let u=ir.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ir.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ai.remove(`image:${e}`);let d=ir.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}ir.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ai.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var za=class extends fi{constructor(e){super(e)}load(e,t,n,s){let r=new Qt,a=new Sl(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Es=class extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ha=class extends Es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},rh=new Je,Qd=new R,ef=new R,Tr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qd),ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ef),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){rh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===hr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qo=new R,Yo=new an,si=new R,Ga=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qo,Yo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,si.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qo,Yo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new R,tf=new oe,nf=new oe,Jt=class extends Ga{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,tf,nf),t.subVectors(nf,tf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_h=class extends Tr{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Va=class extends Es{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},xh=class extends Tr{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}},ws=class extends Es{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ts=class extends Ga{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yh=class extends Tr{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends Es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new yh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ki=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ah=new WeakMap,Wa=class extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ai.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{ah.has(a)===!0?(s&&s(ah.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ai.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ah.set(l,c),ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ai.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var sr=-90,rr=1,Ar=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(sr,rr,e,t);s.layers=this.layers,this.add(s);let r=new Jt(sr,rr,e,t);r.layers=this.layers,this.add(r);let a=new Jt(sr,rr,e,t);a.layers=this.layers,this.add(a);let o=new Jt(sr,rr,e,t);o.layers=this.layers,this.add(o);let l=new Jt(sr,rr,e,t);l.layers=this.layers,this.add(l);let c=new Jt(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},bl=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var eu="\\[\\]\\.:\\/",Xg=new RegExp("["+eu+"]","g"),tu="[^"+eu+"]",qg="[^"+eu.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",tu),$g=/(WCOD+)?/.source.replace("WCOD",qg),Kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),Zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),Jg=new RegExp("^"+Yg+$g+Kg+Zg+"$"),jg=["material","materials","bones","map"],vh=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(e){let t=Jg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=vh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sS=new Float32Array(1);var sf=new Je,Rs=class{constructor(e,t,n=0,s=1/0){this.ray=new li(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sf),this}intersectObject(e,t=!0,n=[]){return Mh(e,this,n,t),n.sort(rf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mh(e[s],this,n,t);return n.sort(rf),n}};function rf(i,e){return i.distance-e.distance}function Mh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Mh(r[a],e,t,!0)}}var Rr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Sh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var Xa=class extends ci{constructor(e=10,t=10,n=4473924,s=8947848){n=new He(n),s=new He(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);let x=d===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new Pt;h.setAttribute("position",new _t(l,3)),h.setAttribute("color",new _t(c,3));let u=new jn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var qa=class extends Jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function nu(i,e,t,n){let s=Qg(n);switch(t){case zh:return i*e;case Ll:return i*e/s.components*s.byteLength;case Dl:return i*e/s.components*s.byteLength;case rs:return i*e*2/s.components*s.byteLength;case Nl:return i*e*2/s.components*s.byteLength;case Hh:return i*e*3/s.components*s.byteLength;case Wn:return i*e*4/s.components*s.byteLength;case Ul:return i*e*4/s.components*s.byteLength;case Ka:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:case kl:return Math.max(i,16)*Math.max(e,8)/4;case Ol:case Bl:return Math.max(i,8)*Math.max(e,8)/2;case zl:case Hl:case Vl:case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Qa:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ac:case oc:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eo:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qg(i){switch(i){case Tn:case Oh:return{byteLength:1,components:1};case Dr:case Fh:case ei:return{byteLength:2,components:1};case Il:case Pl:return{byteLength:2,components:4};case Qn:case Cl:case On:return{byteLength:4,components:1};case Bh:case kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function xp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function t0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,w0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,T0=`vec3 transformedNormal = objectNormal;
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
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Q0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e_=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u_=`#if defined( USE_POINTS_UV )
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
#endif`,d_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`#ifdef USE_MORPHTARGETS
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
#endif`,x_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
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
#endif`,w_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,P_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,k_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,z_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,H_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,V_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z_=`#ifdef USE_TRANSMISSION
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
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cx=`#define DISTANCE
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
}`,hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#include <common>
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#define LAMBERT
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
}`,xx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,yx=`#define MATCAP
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
}`,vx=`#define MATCAP
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
}`,Mx=`#define NORMAL
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
}`,Sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bx=`#define PHONG
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
}`,Ex=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,wx=`#define STANDARD
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
}`,Tx=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Ax=`#define TOON
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
}`,Rx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Cx=`uniform float size;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Lx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Dx=`uniform float rotation;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:a0,alphatest_pars_fragment:o0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:h0,batching_vertex:u0,begin_vertex:d0,beginnormal_vertex:f0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:v0,color_fragment:M0,color_pars_fragment:S0,color_pars_vertex:b0,color_vertex:E0,common:w0,defaultnormal_vertex:T0,displacementmap_pars_vertex:A0,displacementmap_vertex:R0,emissivemap_fragment:C0,emissivemap_pars_fragment:I0,colorspace_fragment:P0,colorspace_pars_fragment:L0,envmap_fragment:D0,envmap_common_pars_fragment:N0,envmap_pars_fragment:U0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:Y0,envmap_vertex:F0,fog_vertex:B0,fog_pars_vertex:k0,fog_fragment:z0,fog_pars_fragment:H0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:V0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:X0,lights_pars_begin:q0,lights_toon_fragment:$0,lights_toon_pars_fragment:K0,lights_phong_fragment:Z0,lights_phong_pars_fragment:J0,lights_physical_fragment:j0,lights_physical_pars_fragment:Q0,lights_fragment_begin:e_,lights_fragment_maps:t_,lights_fragment_end:n_,lightprobes_pars_fragment:i_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:a_,logdepthbuf_vertex:o_,map_fragment:l_,map_pars_fragment:c_,map_particle_fragment:h_,map_particle_pars_fragment:u_,metalnessmap_fragment:d_,metalnessmap_pars_fragment:f_,morphinstance_vertex:p_,morphcolor_vertex:m_,morphnormal_vertex:g_,morphtarget_pars_vertex:__,morphtarget_vertex:x_,normal_fragment_begin:y_,normal_fragment_maps:v_,normal_pars_fragment:M_,normal_pars_vertex:S_,normal_vertex:b_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:w_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:R_,opaque_fragment:C_,packing:I_,premultiplied_alpha_fragment:P_,project_vertex:L_,dithering_fragment:D_,dithering_pars_fragment:N_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:O_,shadowmap_pars_fragment:F_,shadowmap_pars_vertex:B_,shadowmap_vertex:k_,shadowmask_pars_fragment:z_,skinbase_vertex:H_,skinning_pars_vertex:G_,skinning_vertex:V_,skinnormal_vertex:W_,specularmap_fragment:X_,specularmap_pars_fragment:q_,tonemapping_fragment:Y_,tonemapping_pars_fragment:$_,transmission_fragment:K_,transmission_pars_fragment:Z_,uv_pars_fragment:J_,uv_pars_vertex:j_,uv_vertex:Q_,worldpos_vertex:ex,background_vert:tx,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:sx,cube_vert:rx,cube_frag:ax,depth_vert:ox,depth_frag:lx,distance_vert:cx,distance_frag:hx,equirect_vert:ux,equirect_frag:dx,linedashed_vert:fx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:_x,meshlambert_frag:xx,meshmatcap_vert:yx,meshmatcap_frag:vx,meshnormal_vert:Mx,meshnormal_frag:Sx,meshphong_vert:bx,meshphong_frag:Ex,meshphysical_vert:wx,meshphysical_frag:Tx,meshtoon_vert:Ax,meshtoon_frag:Rx,points_vert:Cx,points_frag:Ix,shadow_vert:Px,shadow_frag:Lx,sprite_vert:Dx,sprite_frag:Nx},Ie={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},_i={basic:{uniforms:gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:gn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:gn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new He(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:gn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:gn([Ie.points,Ie.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:gn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:gn([Ie.common,Ie.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:gn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:gn([Ie.sprite,Ie.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:gn([Ie.common,Ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:gn([Ie.lights,Ie.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};_i.physical={uniforms:gn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var fc={r:0,b:0,g:0},Ux=new Je,yp=new it;yp.set(-1,0,0,0,1,0,0,0,1);function Ox(i,e,t,n,s,r){let a=new He(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){let M=v.backgroundBlurriness>0;y=e.get(y,M)}return y}function m(v){let y=!1,M=f(v);M===null?p(a,o):M&&M.isColor&&(p(M,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,y){let M=f(y);M&&M.isCubeTexture?(c===void 0&&(c=new Ue(new pt(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Ns(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yp),c.material.toneMapped=dt.getTransfer(M.colorSpace)!==Tt,(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ue(new Mn(2,2),new ui({name:"BackgroundMaterial",uniforms:Ns(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=dt.getTransfer(M.colorSpace)!==Tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(fc,Qh(i)),t.buffers.color.setClear(fc.r,fc.g,fc.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:x,dispose:g}}function Fx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(N,F,X,D,B){let Y=!1,z=u(N,D,X,F);r!==z&&(r=z,c(r.object)),Y=f(N,D,X,B),Y&&m(N,D,X,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(N,F,X,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,F,X,D){let B=D.wireframe===!0,Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);let z=N.isInstancedMesh===!0?N.id:0,le=Y[z];le===void 0&&(le={},Y[z]=le);let q=le[X.id];q===void 0&&(q={},le[X.id]=q);let ie=q[B];return ie===void 0&&(ie=d(l()),q[B]=ie),ie}function d(N){let F=[],X=[],D=[];for(let B=0;B<t;B++)F[B]=0,X[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:D,object:N,attributes:{},index:null}}function f(N,F,X,D){let B=r.attributes,Y=F.attributes,z=0,le=X.getAttributes();for(let q in le)if(le[q].location>=0){let ae=B[q],Pe=Y[q];if(Pe===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Pe=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Pe=N.instanceColor)),ae===void 0||ae.attribute!==Pe||Pe&&ae.data!==Pe.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function m(N,F,X,D){let B={},Y=F.attributes,z=0,le=X.getAttributes();for(let q in le)if(le[q].location>=0){let ae=Y[q];ae===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor));let Pe={};Pe.attribute=ae,ae&&ae.data&&(Pe.data=ae.data),B[q]=Pe,z++}r.attributes=B,r.attributesNum=z,r.index=D}function x(){let N=r.newAttributes;for(let F=0,X=N.length;F<X;F++)N[F]=0}function p(N){g(N,0)}function g(N,F){let X=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;X[N]=1,D[N]===0&&(i.enableVertexAttribArray(N),D[N]=1),B[N]!==F&&(i.vertexAttribDivisor(N,F),B[N]=F)}function v(){let N=r.newAttributes,F=r.enabledAttributes;for(let X=0,D=F.length;X<D;X++)F[X]!==N[X]&&(i.disableVertexAttribArray(X),F[X]=0)}function y(N,F,X,D,B,Y,z){z===!0?i.vertexAttribIPointer(N,F,X,B,Y):i.vertexAttribPointer(N,F,X,D,B,Y)}function M(N,F,X,D){x();let B=D.attributes,Y=X.getAttributes(),z=F.defaultAttributeValues;for(let le in Y){let q=Y[le];if(q.location>=0){let ie=B[le];if(ie===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),ie!==void 0){let ae=ie.normalized,Pe=ie.itemSize,J=e.get(ie);if(J===void 0)continue;let H=J.buffer,$=J.type,ce=J.bytesPerElement,Ae=$===i.INT||$===i.UNSIGNED_INT||ie.gpuType===Cl;if(ie.isInterleavedBufferAttribute){let ge=ie.data,te=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,ze=ie.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Ce=0;Ce<q.locationSize;Ce++)g(q.location+Ce,ge.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)p(q.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,H);for(let Ce=0;Ce<q.locationSize;Ce++)y(q.location+Ce,Pe/q.locationSize,$,ae,te*ce,(ze+Pe/q.locationSize*Ce)*ce,Ae)}else{if(ie.isInstancedBufferAttribute){for(let ge=0;ge<q.locationSize;ge++)g(q.location+ge,ie.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ge=0;ge<q.locationSize;ge++)p(q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,H);for(let ge=0;ge<q.locationSize;ge++)y(q.location+ge,Pe/q.locationSize,$,ae,Pe*ce,Pe/q.locationSize*ge*ce,Ae)}}else if(z!==void 0){let ae=z[le];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(q.location,ae);break;case 3:i.vertexAttrib3fv(q.location,ae);break;case 4:i.vertexAttrib4fv(q.location,ae);break;default:i.vertexAttrib1fv(q.location,ae)}}}}v()}function T(){P();for(let N in n){let F=n[N];for(let X in F){let D=F[X];for(let B in D){let Y=D[B];for(let z in Y)h(Y[z].object),delete Y[z];delete D[B]}}delete n[N]}}function S(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let X in F){let D=F[X];for(let B in D){let Y=D[B];for(let z in Y)h(Y[z].object),delete Y[z];delete D[B]}}delete n[N.id]}function _(N){for(let F in n){let X=n[F];for(let D in X){let B=X[D];if(B[N.id]===void 0)continue;let Y=B[N.id];for(let z in Y)h(Y[z].object),delete Y[z];delete B[N.id]}}}function b(N){for(let F in n){let X=n[F],D=N.isInstancedMesh===!0?N.id:0,B=X[D];if(B!==void 0){for(let Y in B){let z=B[Y];for(let le in z)h(z[le].object),delete z[le];delete B[Y]}delete X[D],Object.keys(X).length===0&&delete n[F]}}}function P(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Bx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function kx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Wn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Tn&&_!==On&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:T,samples:S}}function zx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new cn,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,y=v*4,M=g.clippingState||null;l.value=M,M=h(m,d,y,f);for(let T=0;T!==y;++T)M[T]=t[T];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,M=f;y!==x;++y,M+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var ro=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new va(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pt(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Cs});r.uniforms.tEquirect.value=t;let a=new Ue(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=jt),new Ar(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Jf=256,Hx=3,Gx=20,vp=256,Mp=16,Vx=3,Wx=new R,Xx=new He,Or=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ar(1,10,null),this._boxMesh=new Ue(new pt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Wx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Xx));let p=new Ar(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jf,Kh(e))}_fromTexture(e,t){e.mapping===Ps||e.mapping===Pr?this._setSize(e.image.length===0?Jf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=jf(e,!1,!1),n=Math.log2(e)-Hx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=jf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ps||e.mapping===Pr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=qx(),this._integrationMaterial=Yx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Mp);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Vx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(vp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=$x());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function jf(i,e,t){return new ro(i,{minFilter:Vn,generateMipmaps:e,type:ei,colorSpace:vn,depthBuffer:t})}function ao(i,e,t){return new ui({name:i,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:Kt,blending:Cs,depthTest:!1,depthWrite:!1})}function qx(){return ao("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yx(){return ao("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $x(){return ao("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Qf(){return ao("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ep(){return ao("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Kx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Tl||f===Al)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new ro(m.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===Tl||f===Al,x=f===Ps||f===Pr;if(m||x){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Or(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Or(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Tl?d.mapping=Ps:f===Al&&(d.mapping=Pr),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Zx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ms("WebGLRenderer: "+n+" extension not supported."),s}}}function Jx(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)e.update(x[p],i.ARRAY_BUFFER)}function u(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,y=p.count>=65535?ma:pa,M=new y(Math.ceil(v/3)*6,1),T=M.array;if(x!==null){let _=x.array;g=x.version;for(let b=0,P=0;b<v;b+=3){let C=_[b+0],N=_[b+1],F=_[b+2];T[P++]=C,T[P++]=N,T[P++]=N,T[P++]=F,T[P++]=F,T[P++]=C}}else{g=p.version;for(let _=0,b=0;_<v;_+=3){let P=_+0,C=_+1,N=_+2;T[b++]=P,T[b++]=C,T[b++]=C,T[b++]=N,T[b++]=N,T[b++]=P}}M.version=g;let S=r.get(m);S&&e.remove(S),r.set(m,M)}function d(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function jx(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Qx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ey(i,e,t){let n=new WeakMap,s=new At;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let M=o.attributes.position.count*y,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*T*4*u),_=new da(S,M,T,u);_.type=On,_.needsUpdate=!0;let b=y*4;for(let C=0;C<u;C++){let N=p[C],F=g[C],X=v[C],D=M*T*4*C;for(let B=0;B<N.count;B++){let Y=B*b;f===!0&&(s.fromBufferAttribute(N,B),S[D+Y+0]=s.x,S[D+Y+1]=s.y,S[D+Y+2]=s.z,S[D+Y+3]=0),m===!0&&(s.fromBufferAttribute(F,B),S[D+Y+4]=s.x,S[D+Y+5]=s.y,S[D+Y+6]=s.z,S[D+Y+7]=0),x===!0&&(s.fromBufferAttribute(X,B),S[D+Y+8]=s.x,S[D+Y+9]=s.y,S[D+Y+10]=s.z,S[D+Y+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new oe(M,T)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ty(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var ny={[Ch]:"LINEAR_TONE_MAPPING",[Ih]:"REINHARD_TONE_MAPPING",[Ph]:"CINEON_TONE_MAPPING",[$a]:"ACES_FILMIC_TONE_MAPPING",[Dh]:"AGX_TONE_MAPPING",[Nh]:"NEUTRAL_TONE_MAPPING",[Lh]:"CUSTOM_TONE_MAPPING"};function iy(i,e,t,n,s,r){let a=new Dn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Pt;h.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _t([0,2,0,0,2,0],2));let u=new pl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ue(h,u),f=new Ts(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,v=null,y=[],M=!1;this.setSize=function(T,S){a.setSize(T,S),o!==null&&o.setSize(T,S),l!==null&&l.setSize(T,S);for(let _=0;_<y.length;_++){let b=y[_];b.setSize&&b.setSize(T,S)}},this.setEffects=function(T){y=T,M=y.length>0&&y[0].isRenderPass===!0;let S=a.width,_=a.height;y.length>0&&o===null&&(o=new Dn(S,_,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new Dn(S,_,{type:ei,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&y.some(P=>P.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ni(S,_),r===!0&&(c.format=zi,c.type=Ds)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let P=0;P<y.length;P++){let C=y[P];C.setSize&&C.setSize(S,_),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,S){if(p||T.toneMapping===mi&&y.length===0)return!1;if(v=S,S!==null){let _=S.width,b=S.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return M===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=mi,!0},this.hasRenderPass=function(){return M},this.end=function(T,S){T.toneMapping=g,p=!0;let _=a,b=o;for(let P=0;P<y.length;P++){let C=y[P];C.enabled!==!1&&(C.render(T,b,_,S),C.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(m!==T.outputColorSpace||x!==T.toneMapping){m=T.outputColorSpace,x=T.toneMapping,u.defines={},dt.getTransfer(m)===Tt&&(u.defines.SRGB_TRANSFER="");let P=ny[x];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(d,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Sp=new Qt,bp=new Ni(1,1),Ep=new Ma(1),wp=new da,Tp=new rl,Ap=new va,tp=[],np=[],ip=new Float32Array(16),sp=new Float32Array(9),rp=new Float32Array(4);function Fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=tp[s];if(r===void 0&&(r=new Float32Array(s),tp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gc(i,e){let t=np[e];t===void 0&&(t=new Int32Array(e),np[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function ly(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;rp.set(n),i.uniformMatrix2fv(this.addr,!1,rp),tn(t,n)}}function cy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;sp.set(n),i.uniformMatrix3fv(this.addr,!1,sp),tn(t,n)}}function hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;ip.set(n),i.uniformMatrix4fv(this.addr,!1,ip),tn(t,n)}}function uy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function my(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function _y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function _c(i){return i.version===0&&(i.compareFunction=Xh,i.needsUpdate=!0),i}function yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=_c(bp):r=Sp,t.setTexture2D(e||r,s)}function vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tp,s)}function My(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=_c(Ep):r=Ap,t.setTextureCube(e||r,s)}function Sy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wp,s)}function by(i){switch(i){case 5126:return sy;case 35664:return ry;case 35665:return ay;case 35666:return oy;case 35674:return ly;case 35675:return cy;case 35676:return hy;case 5124:case 35670:return uy;case 35667:case 35671:return dy;case 35668:case 35672:return fy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return _y;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return Sy}}function Ey(i,e){i.uniform1fv(this.addr,e)}function wy(i,e){let t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ty(i,e){let t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ay(i,e){let t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ry(i,e){let t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cy(i,e){let t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Iy(i,e){let t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Py(i,e){i.uniform1iv(this.addr,e)}function Ly(i,e){i.uniform2iv(this.addr,e)}function Dy(i,e){i.uniform3iv(this.addr,e)}function Ny(i,e){i.uniform4iv(this.addr,e)}function Uy(i,e){i.uniform1uiv(this.addr,e)}function Oy(i,e){i.uniform2uiv(this.addr,e)}function Fy(i,e){i.uniform3uiv(this.addr,e)}function By(i,e){i.uniform4uiv(this.addr,e)}function ky(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=_c(bp):a=Sp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function zy(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Tp,r[a])}function Hy(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=_c(Ep):a=Ap;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Gy(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wp,r[a])}function Vy(i){switch(i){case 5126:return Ey;case 35664:return wy;case 35665:return Ty;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Iy;case 5124:case 35670:return Py;case 35667:case 35671:return Ly;case 35668:case 35672:return Dy;case 35669:case 35673:return Ny;case 5125:return Uy;case 36294:return Oy;case 36295:return Fy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}var ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=by(t.type)}},au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vy(t.type)}},ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},iu=/(\w+)(\])?(\[|\.)?/g;function ap(i,e){i.seq.push(e),i.map[e.id]=e}function Wy(i,e,t){let n=i.name,s=n.length;for(iu.lastIndex=0;;){let r=iu.exec(n),a=iu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ap(t,c===void 0?new ru(o,i,e):new au(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ou(o),ap(t,u)),t=u}}}var Ur=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Wy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function op(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Xy=37297,qy=0;function Yy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var lp=new it;function $y(i){dt._getMatrix(lp,dt.workingColorSpace,i);let e=`mat3( ${lp.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case ha:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Yy(i.getShaderSource(e),o)}else return r}function Ky(i,e){let t=$y(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Zy={[Ch]:"Linear",[Ih]:"Reinhard",[Ph]:"Cineon",[$a]:"ACESFilmic",[Dh]:"AgX",[Nh]:"Neutral",[Lh]:"Custom"};function Jy(i,e){let t=Zy[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pc=new R;function jy(){dt.getLuminanceCoefficients(pc);let i=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function ev(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function so(i){return i!==""}function hp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function up(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(i){return i.replace(nv,iv)}function iv(i,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return lu(t)}var sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(i){return i.replace(sv,rv)}function rv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var av={[Ya]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function ov(i){return av[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lv={[Pr]:"ENVMAP_MODE_REFRACTION"};function cv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hv={[wl]:"ENVMAP_BLENDING_MULTIPLY",[Tf]:"ENVMAP_BLENDING_MIX",[Af]:"ENVMAP_BLENDING_ADD"};function uv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hv[i.combine]||"ENVMAP_BLENDING_NONE"}function dv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ov(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=cv(t),u=uv(t),d=Qy(t),f=ev(r),m=s.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(so).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(so).join(`
`),p.length>0&&(p+=`
`)):(x=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ht.tonemapping_pars_fragment:"",t.toneMapping!==mi?Jy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Ky("linearToOutputTexel",t.outputColorSpace),jy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),a=lu(a),a=hp(a,t),a=up(a,t),o=lu(o),o=hp(o,t),o=up(o,t),a=dp(a),o=dp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+x+a,y=g+p+o,M=op(s,s.VERTEX_SHADER,v),T=op(s,s.FRAGMENT_SHADER,y);s.attachShader(m,M),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function S(C){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(m)||"",F=s.getShaderInfoLog(M)||"",X=s.getShaderInfoLog(T)||"",D=N.trim(),B=F.trim(),Y=X.trim(),z=!0,le=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,T);else{let q=cp(s,M,"vertex"),ie=cp(s,T,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+q+`
`+ie)}else D!==""?qe("WebGLProgram: Program Info Log:",D):(B===""||Y==="")&&(le=!1);le&&(C.diagnostics={runnable:z,programLog:D,vertexShader:{log:B,prefix:x},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(M),s.deleteShader(T),_=new Ur(s,m),b=tv(s,m)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(m,Xy)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}var fv=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hu(e),t.set(e,n)),n}},hu=class{constructor(e){this.id=fv++,this.code=e,this.usedTimes=0}};function pv(i){return i===rs||i===Qa||i===eo}function mv(i,e,t,n,s,r){let a=new pr,o=new cu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,b,P,C,N,F){let X=C.fog,D=N.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||B,Y),le=d[_.type],q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&qe("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let ie=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ae=ie!==void 0?ie.length:0,Pe=0;D.morphAttributes.position!==void 0&&(Pe=1),D.morphAttributes.normal!==void 0&&(Pe=2),D.morphAttributes.color!==void 0&&(Pe=3);let J,H,$,ce;if(le){let Re=_i[le];J=Re.vertexShader,H=Re.fragmentShader}else{J=_.vertexShader,H=_.fragmentShader;let Re=o.getVertexShaderStage(_),St=o.getFragmentShaderStage(_);o.update(_,Re,St),$=Re.id,ce=St.id}let Ae=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),te=N.isInstancedMesh===!0,ze=N.isBatchedMesh===!0,Ce=!!_.map,be=!!_.matcap,Oe=!!z,se=Oe&&z.isPMREMTexture===!0,he=!!_.aoMap,_e=!!_.lightMap,Ne=!!_.bumpMap&&_.wireframe===!1,Ee=!!_.normalMap,tt=!!_.displacementMap,Ge=!!_.emissiveMap,ut=!!_.metalnessMap,ot=!!_.roughnessMap,xt=_.anisotropy>0,U=_.clearcoat>0,Ot=_.diffuseRoughness>0,nt=_.dispersion>0,wt=_.retroreflectivity>0,Me=_.iridescence>0,Dt=_.sheen>0,$e=_.transmission>0,Qe=xt&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,E=U&&!!_.clearcoatNormalMap,G=U&&!!_.clearcoatRoughnessMap,de=Ot&&!!_.diffuseRoughnessMap,j=Me&&!!_.iridescenceMap,me=Me&&!!_.iridescenceThicknessMap,fe=Dt&&!!_.sheenColorMap,Q=Dt&&!!_.sheenRoughnessMap,ne=!!_.specularMap,xe=!!_.specularColorMap,L=!!_.specularIntensityMap,ee=$e&&!!_.transmissionMap,Z=$e&&!!_.thicknessMap,ve=!!_.gradientMap,pe=!!_.alphaMap,ye=_.alphaTest>0,Ve=!!_.alphaHash,st=!!_.extensions,ue=mi;_.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Ye=se?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,at={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:J,fragmentShader:H,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:ze,batchingColor:ze&&N._colorsTexture!==null,instancing:te,instancingColor:te&&N.instanceColor!==null,instancingMorph:te&&N.morphTexture!==null,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ce,matcap:be,envMap:Oe,envMapMode:Oe&&z.mapping,envMapPMREM:se,envMapMaxLod:se?Ye.length-1:null,envMapSize:se?Ye[0].width:null,aoMap:he,lightMap:_e,bumpMap:Ne,normalMap:Ee,displacementMap:tt,emissiveMap:Ge,normalMapObjectSpace:Ee&&_.normalMapType===Pf,normalMapTangentSpace:Ee&&_.normalMapType===no,packedNormalMap:Ee&&_.normalMapType===no&&pv(_.normalMap.format),metalnessMap:ut,roughnessMap:ot,anisotropy:xt,anisotropyMap:Qe,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:E,clearcoatRoughnessMap:G,diffuseRoughness:Ot,diffuseRoughnessMap:de,dispersion:nt,retroreflection:wt,iridescence:Me,iridescenceMap:j,iridescenceThicknessMap:me,sheen:Dt,sheenColorMap:fe,sheenRoughnessMap:Q,specularMap:ne,specularColorMap:xe,specularIntensityMap:L,transmission:$e,transmissionMap:ee,thicknessMap:Z,gradientMap:ve,opaque:_.transparent===!1&&_.blending===Ir&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:ye,alphaHash:Ve,combine:_.combine,mapUv:Ce&&f(_.map.channel),aoMapUv:he&&f(_.aoMap.channel),lightMapUv:_e&&f(_.lightMap.channel),bumpMapUv:Ne&&f(_.bumpMap.channel),normalMapUv:Ee&&f(_.normalMap.channel),displacementMapUv:tt&&f(_.displacementMap.channel),emissiveMapUv:Ge&&f(_.emissiveMap.channel),metalnessMapUv:ut&&f(_.metalnessMap.channel),roughnessMapUv:ot&&f(_.roughnessMap.channel),anisotropyMapUv:Qe&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(_.sheenRoughnessMap.channel),specularMapUv:ne&&f(_.specularMap.channel),specularColorMapUv:xe&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:ee&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:pe&&f(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ee||xt),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(Ce||pe),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&Ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Pe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ce&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ge&&_.emissiveMap.isVideoTexture===!0&&dt.getTransfer(_.emissiveMap.colorSpace)===Tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zt,flipSided:_.side===Kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(b,_),g(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function g(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let b=d[_.type],P;if(b){let C=_i[b];P=$f.clone(C.uniforms)}else P=_.uniforms;return P}function y(_,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new dv(i,b,_,s),c.push(P),h.set(b,P)),P}function M(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function S(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:S}}function gv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function _v(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function pp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,p,g){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:g},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=p,v.group=g),e++,v}function l(d,f,m,x,p,g,v){v.reversedDepth===!0&&(p=-p);let y=o(d,f,m,x,p,g);m.transmission>0?n.push(y):m.transparent===!0?s.push(y):t.push(y)}function c(d,f,m,x,p,g){let v=o(d,f,m,x,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||_v),n.length>1&&n.sort(f||pp),s.length>1&&s.sort(f||pp)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function xv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new mp,i.set(n,[a])):s>=r.length?(a=new mp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new He};break;case"SpotLight":t={position:new R,direction:new R,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function vv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Mv=0;function Sv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bv(i){let e=new yv,t=vv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Je,a=new Je;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,v=0,y=0,M=0,T=0,S=0,_=0,b=0,P=0,C=0;c.sort(Sv);for(let F=0,X=c.length;F<X;F++){let D=c[F],B=D.color,Y=D.intensity,z=D.distance,le=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===rs?le=D.shadow.map.texture:le=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*Y,u+=B.g*Y,d+=B.b*Y;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],Y);C++}else if(D.isSunLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,ae=t.get(D);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[m]=ae,n.sunShadowMap[m]=le;let Pe=ie.getViewportCount();for(let J=0;J<Pe;J++)n.sunShadowMatrix[x+J]=ie.getMatrix(J),n.sunShadowCascade[x+J]=ie._cascadeData[J];x+=Pe,m++}n.sun[f]=q,f++}else if(D.isDirectionalLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,ae=t.get(D);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.directionalShadow[p]=ae,n.directionalShadowMap[p]=le,n.directionalShadowMatrix[p]=D.shadow.matrix,T++}n.directional[p]=q,p++}else if(D.isSpotLight){let q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(B).multiplyScalar(Y),q.distance=z,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[v]=q;let ie=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,ie.updateMatrices(D),D.castShadow&&P++),n.spotLightMatrix[v]=ie.matrix,D.castShadow){let ae=t.get(D);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.spotShadow[v]=ae,n.spotShadowMap[v]=le,_++}v++}else if(D.isRectAreaLight){let q=e.get(D);q.color.copy(B).multiplyScalar(Y),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=q,y++}else if(D.isPointLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let ie=D.shadow,ae=t.get(D);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,ae.shadowCameraNear=ie.camera.near,ae.shadowCameraFar=ie.camera.far,n.pointShadow[g]=ae,n.pointShadowMap[g]=le,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=q,g++}else if(D.isHemisphereLight){let q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(Y),q.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[M]=q,M++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==y||N.hemiLength!==M||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==S||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=y,n.point.length=g,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=y,N.hemiLength=M,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=S,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=C,n.version=Mv++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){let M=c[v];if(M.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(M.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function gp(i){let e=new bv(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ev(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new gp(i),e.set(s,[o])):r>=a.length?(o=new gp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Av=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Rv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],_p=new Je,io=new R,su=new R;function Cv(i,e,t){let n=new ji,s=new oe,r=new oe,a=new At,o=new ml,l=new gl,c={},h=t.maxTextureSize,u={[pi]:Kt,[Kt]:pi,[Zt]:Zt},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:wv,fragmentShader:Tv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Pt;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ue(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let g=this.type;this.render=function(S,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===El&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ya);let P=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Cs),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let X=g!==this.type;X&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=S.length;D<B;D++){let Y=S[D],z=Y.shadow;if(z===void 0){qe("WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let le=z.getFrameExtents();s.multiply(le),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,z.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Cr){if(Y.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Dn(s.x,s.y,{format:rs,type:ei,minFilter:jt,magFilter:jt,generateMipmaps:!1}),z.map.texture.name=Y.name+".shadowMap",z.map.depthTexture=new Ni(s.x,s.y,On),z.map.depthTexture.name=Y.name+".shadowMapDepth",z.map.depthTexture.format=Ii,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt}else Y.isPointLight?(z.map=new ro(s.x),z.map.depthTexture=new Ma(s.x,Qn)):(z.map=new Dn(s.x,s.y),z.map.depthTexture=new Ni(s.x,s.y,Qn)),z.map.depthTexture.name=Y.name+".shadowMap",z.map.depthTexture.format=Ii,this.type===Ya?(z.map.depthTexture.compareFunction=q?Wh:Vh,z.map.depthTexture.minFilter=jt,z.map.depthTexture.magFilter=jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let ie=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Y.isPointLight!==!0&&z.updateMatrices(Y,b);let ae=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let Pe=0;Pe<ie;Pe++){let J=z.getCamera(Pe);if(Y.isPointLight){let H=z.camera,$=z.matrix,ce=Y.distance||H.far;ce!==H.far&&(H.far=ce,H.updateProjectionMatrix()),io.setFromMatrixPosition(Y.matrixWorld),H.position.copy(io),su.copy(H.position),su.add(Av[Pe]),H.up.copy(Rv[Pe]),H.lookAt(su),H.updateMatrixWorld(),$.makeTranslation(-io.x,-io.y,-io.z),_p.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),z._frustum.setFromProjectionMatrix(_p,H.coordinateSystem,H.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Pe),i.clear();else{Pe===0&&(i.setRenderTarget(z.map),i.clear());let H=z.getViewport(Pe);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),F.viewport(a)}n=z.getFrustum(Pe),M(_,b,J,Y,ae,this.type)}z.isPointLightShadow!==!0&&this.type===Cr&&v(z,b),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(P,C,N)};function v(S,_){let b=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Dn(s.x,s.y,{format:rs,type:ei}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,b,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function y(S,_,b,P){let C=null,N=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)C=N;else if(C=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=C.uuid,X=_.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let B=D[X];B===void 0&&(B=C.clone(),D[X]=B,_.addEventListener("dispose",T)),C=B}if(C.visible=_.visible,C.wireframe=_.wireframe,P===Cr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=b}return C}function M(S,_,b,P,C,N){if(S.visible===!1)return;if(S.layers.test(C)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===Cr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let D=e.update(S),B=S.material;if(Array.isArray(B)){let Y=D.groups;for(let z=0,le=Y.length;z<le;z++){let q=Y[z],ie=B[q.materialIndex];if(ie&&ie.visible){let ae=y(S,ie,P,N);S.onBeforeShadow(i,S,_,b,D,ae,q),i.renderBufferDirect(b,null,D,ae,S,q),S.onAfterShadow(i,S,_,b,D,ae,q)}}}else if(B.visible){let Y=y(S,B,P,N);S.onBeforeShadow(i,S,_,b,D,Y,null),i.renderBufferDirect(b,null,D,Y,S,null),S.onAfterShadow(i,S,_,b,D,Y,null)}}let X=S.children;for(let D=0,B=X.length;D<B;D++)M(X[D],_,b,P,C,N)}function T(S){S.target.removeEventListener("dispose",T);for(let b in c){let P=c[b],C=S.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function Iv(i,e){function t(){let L=!1,ee=new At,Z=null,ve=new At(0,0,0,0);return{setMask:function(pe){Z!==pe&&!L&&(i.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){L=pe},setClear:function(pe,ye,Ve,st,ue){ue===!0&&(pe*=st,ye*=st,Ve*=st),ee.set(pe,ye,Ve,st),ve.equals(ee)===!1&&(i.clearColor(pe,ye,Ve,st),ve.copy(ee))},reset:function(){L=!1,Z=null,ve.set(-1,0,0,0)}}}function n(){let L=!1,ee=!1,Z=null,ve=null,pe=null;return{setReversed:function(ye){if(ee!==ye){let Ve=e.get("EXT_clip_control");ye?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ee=ye;let st=pe;pe=null,this.setClear(st)}},getReversed:function(){return ee},setTest:function(ye){ye?ge(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(ye){Z!==ye&&!L&&(i.depthMask(ye),Z=ye)},setFunc:function(ye){if(ee&&(ye=Hf[ye]),ve!==ye){switch(ye){case Zo:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case jo:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case tl:i.depthFunc(i.GREATER);break;case nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=ye}},setLocked:function(ye){L=ye},setClear:function(ye){pe!==ye&&(pe=ye,ee&&(ye=1-ye),i.clearDepth(ye))},reset:function(){L=!1,Z=null,ve=null,pe=null,ee=!1}}}function s(){let L=!1,ee=null,Z=null,ve=null,pe=null,ye=null,Ve=null,st=null,ue=null;return{setTest:function(Ye){L||(Ye?ge(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(Ye){ee!==Ye&&!L&&(i.stencilMask(Ye),ee=Ye)},setFunc:function(Ye,at,Re){(Z!==Ye||ve!==at||pe!==Re)&&(i.stencilFunc(Ye,at,Re),Z=Ye,ve=at,pe=Re)},setOp:function(Ye,at,Re){(ye!==Ye||Ve!==at||st!==Re)&&(i.stencilOp(Ye,at,Re),ye=Ye,Ve=at,st=Re)},setLocked:function(Ye){L=Ye},setClear:function(Ye){ue!==Ye&&(i.clearStencil(Ye),ue=Ye)},reset:function(){L=!1,ee=null,Z=null,ve=null,pe=null,ye=null,Ve=null,st=null,ue=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,y=null,M=null,T=null,S=null,_=null,b=new He(0,0,0),P=0,C=!1,N=null,F=null,X=null,D=null,B=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,le=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=le>=1):q.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=le>=2);let ie=null,ae={},Pe=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),H=new At().fromArray(Pe),$=new At().fromArray(J);function ce(L,ee,Z,ve){let pe=new Uint8Array(4),ye=i.createTexture();i.bindTexture(L,ye),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Z;Ve++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ee+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ye}let Ae={};Ae[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(lr),Ne(!1),Ee(bh),ge(i.CULL_FACE),he(Cs);function ge(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function te(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function ze(L,ee){return d[L]!==ee?(i.bindFramebuffer(L,ee),d[L]=ee,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ce(L,ee){let Z=m,ve=!1;if(L){Z=f.get(ee),Z===void 0&&(Z=[],f.set(ee,Z));let pe=L.textures;if(Z.length!==pe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ve=pe.length;ye<Ve;ye++)Z[ye]=i.COLOR_ATTACHMENT0+ye;Z.length=pe.length,ve=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ve=!0);ve&&i.drawBuffers(Z)}function be(L){return x!==L?(i.useProgram(L),x=L,!0):!1}let Oe={[Is]:i.FUNC_ADD,[cf]:i.FUNC_SUBTRACT,[hf]:i.FUNC_REVERSE_SUBTRACT};Oe[uf]=i.MIN,Oe[df]=i.MAX;let se={[ff]:i.ZERO,[pf]:i.ONE,[mf]:i.SRC_COLOR,[Ah]:i.SRC_ALPHA,[Mf]:i.SRC_ALPHA_SATURATE,[yf]:i.DST_COLOR,[_f]:i.DST_ALPHA,[gf]:i.ONE_MINUS_SRC_COLOR,[Rh]:i.ONE_MINUS_SRC_ALPHA,[vf]:i.ONE_MINUS_DST_COLOR,[xf]:i.ONE_MINUS_DST_ALPHA,[Sf]:i.CONSTANT_COLOR,[bf]:i.ONE_MINUS_CONSTANT_COLOR,[Ef]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function he(L,ee,Z,ve,pe,ye,Ve,st,ue,Ye){if(L===Cs){p===!0&&(te(i.BLEND),p=!1);return}if(p===!1&&(ge(i.BLEND),p=!0),L!==lf){if(L!==g||Ye!==C){if((v!==Is||T!==Is)&&(i.blendEquation(i.FUNC_ADD),v=Is,T=Is),Ye)switch(L){case Ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFunc(i.ONE,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",L);break}else switch(L){case Ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wh:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",L);break}y=null,M=null,S=null,_=null,b.set(0,0,0),P=0,g=L,C=Ye}return}pe=pe||ee,ye=ye||Z,Ve=Ve||ve,(ee!==v||pe!==T)&&(i.blendEquationSeparate(Oe[ee],Oe[pe]),v=ee,T=pe),(Z!==y||ve!==M||ye!==S||Ve!==_)&&(i.blendFuncSeparate(se[Z],se[ve],se[ye],se[Ve]),y=Z,M=ve,S=ye,_=Ve),(st.equals(b)===!1||ue!==P)&&(i.blendColor(st.r,st.g,st.b,ue),b.copy(st),P=ue),g=L,C=!1}function _e(L,ee){L.side===Zt?te(i.CULL_FACE):ge(i.CULL_FACE);let Z=L.side===Kt;ee&&(Z=!Z),Ne(Z),L.blending===Ir&&L.transparent===!1?he(Cs):he(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ve=L.stencilWrite;o.setTest(ve),ve&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ge(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function Ee(L){L!==af?(ge(i.CULL_FACE),L!==F&&(L===bh?i.cullFace(i.BACK):L===of?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),F=L}function tt(L){L!==X&&(z&&i.lineWidth(L),X=L)}function Ge(L,ee,Z){L?(ge(i.POLYGON_OFFSET_FILL),(D!==ee||B!==Z)&&(D=ee,B=Z,a.getReversed()&&(ee=-ee,Z=-Z),i.polygonOffset(ee,Z))):te(i.POLYGON_OFFSET_FILL)}function ut(L){L?ge(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function ot(L){L===void 0&&(L=i.TEXTURE0+Y-1),ie!==L&&(i.activeTexture(L),ie=L)}function xt(L,ee,Z){Z===void 0&&(ie===null?Z=i.TEXTURE0+Y-1:Z=ie);let ve=ae[Z];ve===void 0&&(ve={type:void 0,texture:void 0},ae[Z]=ve),(ve.type!==L||ve.texture!==ee)&&(ie!==Z&&(i.activeTexture(Z),ie=Z),i.bindTexture(L,ee||Ae[L]),ve.type=L,ve.texture=ee)}function U(){let L=ae[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ot(){try{i.compressedTexImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function wt(){try{i.texSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function Me(){try{i.texSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function Dt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function $e(){try{i.compressedTexSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function Qe(){try{i.texStorage2D(...arguments)}catch(L){et("WebGLState:",L)}}function A(){try{i.texStorage3D(...arguments)}catch(L){et("WebGLState:",L)}}function E(){try{i.texImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function G(){try{i.texImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function de(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function j(L,ee){u[L]!==ee&&(i.pixelStorei(L,ee),u[L]=ee)}function me(L){H.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),H.copy(L))}function fe(L){$.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function Q(L,ee){let Z=c.get(ee);Z===void 0&&(Z=new WeakMap,c.set(ee,Z));let ve=Z.get(L);ve===void 0&&(ve=i.getUniformBlockIndex(ee,L.name),i.uniformBlockBinding(ee,ve,ve),Z.set(L,ve))}function ne(L,ee,Z){let pe=c.get(ee).get(L);l[pe]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,Z),l[pe]=Z)}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ie=null,ae={},d={},l={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,y=null,M=null,T=null,S=null,_=null,b=new He(0,0,0),P=0,C=!1,N=null,F=null,X=null,D=null,B=null,H.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:te,bindFramebuffer:ze,drawBuffers:Ce,useProgram:be,setBlending:he,setMaterial:_e,setFlipSided:Ne,setCullFace:Ee,setLineWidth:tt,setPolygonOffset:Ge,setScissorTest:ut,activeTexture:ot,bindTexture:xt,unbindTexture:U,compressedTexImage2D:Ot,compressedTexImage3D:nt,texImage2D:E,texImage3D:G,pixelStorei:j,getParameter:de,updateUBOMapping:Q,uniformBlockBinding:ne,texStorage2D:Qe,texStorage3D:A,texSubImage2D:wt,texSubImage3D:Me,compressedTexSubImage2D:Dt,compressedTexSubImage3D:$e,scissor:me,viewport:fe,reset:xe}}function Pv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return p?new OffscreenCanvas(A,E):ur("canvas")}function v(A,E,G){let de=1,j=Qe(A);if((j.width>G||j.height>G)&&(de=G/Math.max(j.width,j.height)),de<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let me=Math.floor(de*j.width),fe=Math.floor(de*j.height);d===void 0&&(d=g(me,fe));let Q=E?g(me,fe):d;return Q.width=me,Q.height=fe,Q.getContext("2d").drawImage(A,0,0,me,fe),qe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+me+"x"+fe+")."),Q}else return"data"in A&&qe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function y(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,E,G,de,j,me=!1){if(A!==null){if(i[A]!==void 0)return i[A];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;de&&(fe=e.get("EXT_texture_norm16"),fe||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8),G===i.UNSIGNED_SHORT&&fe&&(Q=fe.R16_EXT),G===i.SHORT&&fe&&(Q=fe.R16_SNORM_EXT)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),E===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8),G===i.UNSIGNED_SHORT&&fe&&(Q=fe.RG16_EXT),G===i.SHORT&&fe&&(Q=fe.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),E===i.RGB&&(G===i.UNSIGNED_SHORT&&fe&&(Q=fe.RGB16_EXT),G===i.SHORT&&fe&&(Q=fe.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),E===i.RGBA){let ne=me?ha:dt.getTransfer(j);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=ne===Tt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&fe&&(Q=fe.RGBA16_EXT),G===i.SHORT&&fe&&(Q=fe.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(A,E){let G;return A?E===null||E===Qn||E===Ds?G=i.DEPTH24_STENCIL8:E===On?G=i.DEPTH32F_STENCIL8:E===Dr&&(G=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qn||E===Ds?G=i.DEPTH_COMPONENT24:E===On?G=i.DEPTH_COMPONENT32F:E===Dr&&(G=i.DEPTH_COMPONENT16),G}function b(A,E){return y(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==jt?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function P(A){let E=new WeakRef(A);n.get(A).__ref=E,m.add(E),x.register(A,E,E)}function C(A){let E=n.get(A).__ref;E!==void 0&&(m.delete(E),x.unregister(E))}function N(A){X(A.target)}function F(A){D(A.target)}function X(A){A.removeEventListener("dispose",N),C(A),Y(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function D(A){A.removeEventListener("dispose",F),C(A),le(A)}function B(){for(let A of m){let E=A.deref();E!==void 0&&(E.isRenderTarget===!0?D(E):X(E))}m.clear(),u.clear()}function Y(A){let E=n.get(A);if(E.__webglInit===void 0)return;let G=A.source,de=f.get(G);if(de){let j=de[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&z(A),Object.keys(de).length===0&&f.delete(G)}n.remove(A)}function z(A){let E=n.get(A);i.deleteTexture(E.__webglTexture);let G=A.source,de=f.get(G);delete de[E.__cacheKey],a.memory.textures--}function le(A){let E=n.get(A);E.__depthDisposeCallback&&E.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&X(G),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let me=0;me<E.__webglFramebuffer[j].length;me++)i.deleteFramebuffer(E.__webglFramebuffer[j][me]);else i.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)i.deleteFramebuffer(E.__webglFramebuffer[j]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let de=A.textures;for(let j=0,me=de.length;j<me;j++){let fe=n.get(de[j]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(de[j])}n.remove(A)}let q=0;function ie(){q=0}function ae(){return q}function Pe(A){q=A}function J(){let A=q;return A>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}function H(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.mipmapsAutoUpdate),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function $(A,E){let G=n.get(A);if(A.isVideoTexture&&Dt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let de=A.image;if(de===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(G,A,E);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function ce(A,E){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){_e(G,A,E);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function Ae(A,E){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){_e(G,A,E);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function ge(A,E){let G=n.get(A);if(A.version>0&&G.__version!==A.version){Ne(G,A,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}let te={[oi]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[cr]:i.MIRRORED_REPEAT},ze={[Xt]:i.NEAREST,[Rl]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[Lr]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Ce={[Df]:i.NEVER,[Xh]:i.ALWAYS,[Nf]:i.LESS,[Vh]:i.LEQUAL,[Uf]:i.EQUAL,[Wh]:i.GEQUAL,[Of]:i.GREATER,[Ff]:i.NOTEQUAL};function be(A,E){if(E.type===On&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===jt||E.magFilter===Lr||E.magFilter===Ls||E.magFilter===Vn||E.minFilter===jt||E.minFilter===Lr||E.minFilter===Ls||E.minFilter===Vn)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,te[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,te[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,te[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ze[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ze[E.minFilter]),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xt||E.minFilter!==Ls&&E.minFilter!==Vn||E.type===On&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(A,E){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",N),P(E));let de=E.source,j=f.get(de);j===void 0&&(j={},f.set(de,j));let me=H(E);if(me!==A.__cacheKey){j[me]===void 0&&(j[me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),j[me].usedTimes++;let fe=j[A.__cacheKey];fe!==void 0&&(j[A.__cacheKey].usedTimes--,fe.usedTimes===0&&z(E)),A.__cacheKey=me,A.__webglTexture=j[me].texture}return G}function se(A,E,G){return Math.floor(Math.floor(A/G)/E)}function he(A,E,G,de){let me=A.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,G,de,E.data);else{me.sort((L,ee)=>L.start-ee.start);let fe=0;for(let L=1;L<me.length;L++){let ee=me[fe],Z=me[L],ve=ee.start+ee.count,pe=se(Z.start,E.width,4),ye=se(ee.start,E.width,4);Z.start<=ve+1&&pe===ye&&se(Z.start+Z.count-1,E.width,4)===pe?ee.count=Math.max(ee.count,Z.start+Z.count-ee.start):(++fe,me[fe]=Z)}me.length=fe+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let L=0,ee=me.length;L<ee;L++){let Z=me[L],ve=Math.floor(Z.start/4),pe=Math.ceil(Z.count/4),ye=ve%E.width,Ve=Math.floor(ve/E.width),st=pe,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(i.TEXTURE_2D,0,ye,Ve,st,ue,G,de,E.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function _e(A,E,G){let de=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=i.TEXTURE_3D);let j=Oe(A,E),me=E.source;t.bindTexture(de,A.__webglTexture,i.TEXTURE0+G);let fe=n.get(me);if(me.version!==fe.__version||j===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ue=dt.getPrimaries(dt.workingColorSpace),Ye=E.colorSpace===Hi?null:dt.getPrimaries(E.colorSpace),at=E.colorSpace===Hi||ue===Ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ne=v(E.image,!1,s.maxTextureSize);ne=$e(E,ne);let xe=r.convert(E.format,E.colorSpace),L=r.convert(E.type),ee=S(E.internalFormat,xe,L,E.normalized,E.colorSpace,E.isVideoTexture);be(de,E);let Z,ve=E.mipmaps,pe=E.isVideoTexture!==!0,ye=fe.__version===void 0||j===!0,Ve=me.dataReady,st=b(E,ne);if(E.isDepthTexture)ee=_(E.format===zi,E.type),ye&&(pe?t.texStorage2D(i.TEXTURE_2D,1,ee,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ee,ne.width,ne.height,0,xe,L,null));else if(E.isDataTexture)if(ve.length>0){pe&&ye&&t.texStorage2D(i.TEXTURE_2D,st,ee,ve[0].width,ve[0].height);for(let ue=0,Ye=ve.length;ue<Ye;ue++)Z=ve[ue],pe?Ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Z.width,Z.height,xe,L,Z.data):t.texImage2D(i.TEXTURE_2D,ue,ee,Z.width,Z.height,0,xe,L,Z.data);E.generateMipmaps=!1}else pe?(ye&&t.texStorage2D(i.TEXTURE_2D,st,ee,ne.width,ne.height),Ve&&he(E,ne,xe,L)):t.texImage2D(i.TEXTURE_2D,0,ee,ne.width,ne.height,0,xe,L,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pe&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,st,ee,ve[0].width,ve[0].height,ne.depth);for(let ue=0,Ye=ve.length;ue<Ye;ue++)if(Z=ve[ue],E.format!==Wn)if(xe!==null)if(pe){if(Ve)if(E.layerUpdates.size>0){let at=nu(Z.width,Z.height,E.format,E.type);for(let Re of E.layerUpdates){let St=Z.data.subarray(Re*at/Z.data.BYTES_PER_ELEMENT,(Re+1)*at/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Re,Z.width,Z.height,1,xe,St)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Z.width,Z.height,ne.depth,xe,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ee,Z.width,Z.height,ne.depth,0,Z.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Z.width,Z.height,ne.depth,xe,L,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ee,Z.width,Z.height,ne.depth,0,xe,L,Z.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{pe&&ye&&t.texStorage2D(i.TEXTURE_2D,st,ee,ve[0].width,ve[0].height);for(let ue=0,Ye=ve.length;ue<Ye;ue++)Z=ve[ue],E.format!==Wn?xe!==null?pe?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Z.width,Z.height,xe,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ee,Z.width,Z.height,0,Z.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?Ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Z.width,Z.height,xe,L,Z.data):t.texImage2D(i.TEXTURE_2D,ue,ee,Z.width,Z.height,0,xe,L,Z.data)}else if(E.isDataArrayTexture)if(pe){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,st,ee,ne.width,ne.height,ne.depth),Ve)if(E.layerUpdates.size>0){let ue=nu(ne.width,ne.height,E.format,E.type);for(let Ye of E.layerUpdates){let at=ne.data.subarray(Ye*ue/ne.data.BYTES_PER_ELEMENT,(Ye+1)*ue/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ye,ne.width,ne.height,1,xe,L,at)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,L,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,ne.width,ne.height,ne.depth,0,xe,L,ne.data);else if(E.isData3DTexture)pe?(ye&&t.texStorage3D(i.TEXTURE_3D,st,ee,ne.width,ne.height,ne.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,L,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ee,ne.width,ne.height,ne.depth,0,xe,L,ne.data);else if(E.isFramebufferTexture){if(ye)if(pe)t.texStorage2D(i.TEXTURE_2D,st,ee,ne.width,ne.height);else{let ue=ne.width,Ye=ne.height;for(let at=0;at<st;at++)t.texImage2D(i.TEXTURE_2D,at,ee,ue,Ye,0,xe,L,null),ue>>=1,Ye>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),ne.parentNode!==ue){ue.appendChild(ne),u.add(E),ue.onpaint=Ye=>{let at=Ye.changedElements;for(let Re of u)at.includes(Re.image)&&(Re.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let at=i.RGBA,Re=i.RGBA,St=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,at,Re,St,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ve.length>0){if(pe&&ye){let ue=Qe(ve[0]);t.texStorage2D(i.TEXTURE_2D,st,ee,ue.width,ue.height)}for(let ue=0,Ye=ve.length;ue<Ye;ue++)Z=ve[ue],pe?Ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,xe,L,Z):t.texImage2D(i.TEXTURE_2D,ue,ee,xe,L,Z);E.generateMipmaps=!1}else if(pe){if(ye){let ue=Qe(ne);t.texStorage2D(i.TEXTURE_2D,st,ee,ue.width,ue.height)}Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,L,ne)}else t.texImage2D(i.TEXTURE_2D,0,ee,xe,L,ne);y(E)&&E.mipmapsAutoUpdate===!0&&M(de),fe.__version=me.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ne(A,E,G){if(E.image.length!==6)return;let de=Oe(A,E),j=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let me=n.get(j);if(j.version!==me.__version||de===!0){t.activeTexture(i.TEXTURE0+G);let fe=dt.getPrimaries(dt.workingColorSpace),Q=E.colorSpace===Hi?null:dt.getPrimaries(E.colorSpace),ne=E.colorSpace===Hi||fe===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let xe=E.isCompressedTexture||E.image[0].isCompressedTexture,L=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let Re=0;Re<6;Re++)!xe&&!L?ee[Re]=v(E.image[Re],!0,s.maxCubemapSize):ee[Re]=L?E.image[Re].image:E.image[Re],ee[Re]=$e(E,ee[Re]);let Z=ee[0],ve=r.convert(E.format,E.colorSpace),pe=r.convert(E.type),ye=S(E.internalFormat,ve,pe,E.normalized,E.colorSpace),Ve=E.isVideoTexture!==!0,st=me.__version===void 0||de===!0,ue=j.dataReady,Ye=b(E,Z);be(i.TEXTURE_CUBE_MAP,E);let at;if(E.isDepthTexture){if(ye=_(E.format===zi,E.type),st)if(Ve)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ye,Z.width,Z.height);else for(let Re=0;Re<6;Re++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ye,Z.width,Z.height,0,ve,pe,null)}else if(xe){Ve&&st&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,ye,Z.width,Z.height);for(let Re=0;Re<6;Re++){at=ee[Re].mipmaps;for(let St=0;St<at.length;St++){let Vt=at[St];E.format!==Wn?ve!==null?Ve?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,St,0,0,Vt.width,Vt.height,ve,Vt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,St,ye,Vt.width,Vt.height,0,Vt.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,St,0,0,Vt.width,Vt.height,ve,pe,Vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,St,ye,Vt.width,Vt.height,0,ve,pe,Vt.data)}}}else{if(at=E.mipmaps,Ve&&st){at.length>0&&Ye++;let Re=Qe(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,ye,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(L){Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ee[Re].width,ee[Re].height,ve,pe,ee[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ye,ee[Re].width,ee[Re].height,0,ve,pe,ee[Re].data);for(let St=0;St<at.length;St++){let qn=at[St].image[Re].image;Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,St+1,0,0,qn.width,qn.height,ve,pe,qn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,St+1,ye,qn.width,qn.height,0,ve,pe,qn.data)}}else{Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ve,pe,ee[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ye,ve,pe,ee[Re]);for(let St=0;St<at.length;St++){let Vt=at[St];Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,St+1,0,0,ve,pe,Vt.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,St+1,ye,ve,pe,Vt.image[Re])}}}y(E)&&E.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),me.__version=j.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ee(A,E,G,de,j,me){let fe=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),ne=S(G.internalFormat,fe,Q,G.normalized,G.colorSpace),xe=n.get(E),L=n.get(G);if(L.__renderTarget=E,!xe.__hasExternalTextures){let ee=Math.max(1,E.width>>me),Z=Math.max(1,E.height>>me);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,me,ne,ee,Z,E.depth,0,fe,Q,null):t.texImage2D(j,me,ne,ee,Z,0,fe,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,j,L.__webglTexture,0,wt(E)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,j,L.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(A,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer){let de=E.depthTexture,j=de&&de.isDepthTexture?de.type:null,me=_(E.stencilBuffer,j),fe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(E),me,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(E),me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,me,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,A)}else{let de=E.textures;for(let j=0;j<de.length;j++){let me=de[j],fe=r.convert(me.format,me.colorSpace),Q=r.convert(me.type),ne=S(me.internalFormat,fe,Q,me.normalized,me.colorSpace);Me(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(E),ne,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(E),ne,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ne,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(A,E,G){let de=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(E.depthTexture);j.__renderTarget=E;let me=de?E.depthTexture.image[0]:E.depthTexture.image;(!j.__webglTexture||me.width!==E.width||me.height!==E.height)&&(me.width=E.width,me.height=E.height,E.depthTexture.needsUpdate=!0),de?ge(E.depthTexture,0):$(E.depthTexture,0);let fe=j.__webglTexture,Q=wt(E),ne=de?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,xe=E.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ii)Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ne,fe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ne,fe,0);else if(E.depthTexture.format===zi)Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ne,fe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ne,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(A){let E=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let de=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){let j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",j)};de.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=de}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let de=0;de<6;de++)Ge(E.__webglFramebuffer[de],A,de);else A.texture.mipmaps.length>0?Ge(E.__webglFramebuffer[0],A,0):Ge(E.__webglFramebuffer,A,0);else if(G){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=i.createRenderbuffer(),tt(E.__webglDepthbuffer[de],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,me)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),tt(E.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(A,E,G){let de=n.get(A);E!==void 0&&Ee(de.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ut(A)}function xt(A){let E=A.texture,G=n.get(A),de=n.get(E);A.addEventListener("dispose",F),P(A);let j=A.textures,me=A.isWebGLCubeRenderTarget===!0,fe=j.length>1;if(fe||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=E.version,a.memory.textures++),me){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let ne=0;ne<E.mipmaps.length;ne++)G.__webglFramebuffer[Q][ne]=i.createFramebuffer()}else G.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)G.__webglFramebuffer[Q]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Q=0,ne=j.length;Q<ne;Q++){let xe=n.get(j[Q]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Me(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let ne=j[Q];G.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);let xe=r.convert(ne.format,ne.colorSpace),L=r.convert(ne.type),ee=S(ne.internalFormat,xe,L,ne.normalized,ne.colorSpace,A.isXRRenderTarget===!0),Z=wt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,ee,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),be(i.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)Ee(G.__webglFramebuffer[Q][ne],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Ee(G.__webglFramebuffer[Q],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);y(E)?M(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Q=0,ne=j.length;Q<ne;Q++){let xe=j[Q],L=n.get(xe),ee=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,L.__webglTexture),be(ee,xe),Ee(G.__webglFramebuffer,A,xe,i.COLOR_ATTACHMENT0+Q,ee,0),y(xe)&&M(ee)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,de.__webglTexture),be(Q,E),E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)Ee(G.__webglFramebuffer[ne],A,E,i.COLOR_ATTACHMENT0,Q,ne);else Ee(G.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,Q,0);y(E)?M(Q):E.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&ut(A)}function U(A){let E=A.textures;for(let G=0,de=E.length;G<de;G++){let j=E[G];if(y(j)&&j.mipmapsAutoUpdate===!0){let me=T(A),fe=n.get(j).__webglTexture;t.bindTexture(me,fe),M(me),t.unbindTexture()}}}let Ot=[];function nt(A){if(A.samples>0){if(Me(A)===!1){let E=A.textures,G=A.width,de=A.height,j=i.COLOR_BUFFER_BIT,me=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(A),Q=E.length>1;if(Q)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);let L=n.get(E[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,G,de,0,0,G,de,j,i.NEAREST),l===!0&&(Ot.length=0,Ot.push(i.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ot.push(me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);let L=n.get(E[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let E=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function wt(A){return Math.min(s.maxSamples,A.samples)}function Me(A){let E=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Dt(A){let E=a.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function $e(A,E){let G=A.colorSpace,de=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==vn&&G!==Hi&&(dt.getTransfer(G)===Tt?(de!==Wn||j!==Tn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",G)),E}function Qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=Pe,this.setTexture2D=$,this.setTexture2DArray=ce,this.setTexture3D=Ae,this.setTextureCube=ge,this.rebindTextures=ot,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Me,this.dispose=B}function Lv(i,e){function t(n,s=Hi){let r,a=dt.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oh)return i.BYTE;if(n===Fh)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===Cl)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===zh)return i.ALPHA;if(n===Hh)return i.RGB;if(n===Wn)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Ul)return i.RGBA_INTEGER;if(n===Ka||n===Za||n===Ja||n===ja)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Fl||n===Bl||n===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===Hl||n===Gl||n===Vl||n===Wl||n===Qa||n===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zl||n===Hl)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vl)return r.COMPRESSED_R11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qa)return r.COMPRESSED_RG11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Yl||n===$l||n===Kl||n===Zl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===oc||n===lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===hc||n===eo||n===uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nv=`
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

}`,uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ui({vertexShader:Dv,fragmentShader:Nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},du=class extends Jn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new uu,g={},v=t.getContextAttributes(),y=null,M=null,T=[],S=[],_=new oe,b=null,P=null,C=new Jt;C.viewport=new At;let N=new Jt;N.viewport=new At;let F=[C,N],X=new bl,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=T[H];return $===void 0&&($=new mr,T[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=T[H];return $===void 0&&($=new mr,T[H]=$),$.getGripSpace()},this.getHand=function(H){let $=T[H];return $===void 0&&($=new mr,T[H]=$),$.getHandSpace()};function Y(H){let $=S.indexOf(H.inputSource);if($===-1)return;let ce=T[$];ce!==void 0&&(ce.update(H.inputSource,H.frame,c||a),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",le);for(let H=0;H<T.length;H++){let $=S[H];$!==null&&(S[H]=null,T[H].disconnect($))}D=null,B=null,p.reset();for(let H in g)delete g[H];if(e.setRenderTarget(y),f=null,d=null,u=null,s=null,M=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),P!==null){let H=P.camera;H.fov=P.fov,H.zoom=P.zoom,H.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",z),s.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ae=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?zi:Ii,Ae=v.stencil?Ds:Qn);let te={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(te),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Dn(d.textureWidth,d.textureHeight,{format:Wn,type:Tn,depthTexture:new Ni(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Dn(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function le(H){for(let $=0;$<H.removed.length;$++){let ce=H.removed[$],Ae=S.indexOf(ce);Ae>=0&&(S[Ae]=null,T[Ae].disconnect(ce))}for(let $=0;$<H.added.length;$++){let ce=H.added[$],Ae=S.indexOf(ce);if(Ae===-1){for(let te=0;te<T.length;te++)if(te>=S.length){S.push(ce),Ae=te;break}else if(S[te]===null){S[te]=ce,Ae=te;break}if(Ae===-1)break}let ge=T[Ae];ge&&ge.connect(ce)}}function q(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let $=H.near,ce=H.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(ce=p.depthFar)),X.near=N.near=C.near=$,X.far=N.far=C.far=ce,(D!==X.near||B!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),D=X.near,B=X.far),X.layers.mask=H.layers.mask|6,C.layers.mask=X.layers.mask&-5,N.layers.mask=X.layers.mask&-3;let Ae=H.parent,ge=X.cameras;q(X,Ae);for(let te=0;te<ge.length;te++)q(ge[te],Ae);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&H.isPerspectiveCamera&&(P={camera:H,fov:H.fov,zoom:H.zoom}),ie(H,X,Ae)};function ie(H,$,ce){ce===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=xs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(H){return g[H]};let ae=null;function Pe(H,$){if(h=$.getViewerPose(c||a),m=$,h!==null){let ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ae=!1;ce.length!==X.cameras.length&&(X.cameras.length=0,Ae=!0);for(let Ce=0;Ce<ce.length;Ce++){let be=ce[Ce],Oe=null;if(f!==null)Oe=f.getViewport(be);else{let he=u.getViewSubImage(d,be);Oe=he.viewport,Ce===0&&(e.setRenderTargetTextures(M,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(M))}let se=F[Ce];se===void 0&&(se=new Jt,se.layers.enable(Ce),se.viewport=new At,F[Ce]=se),se.matrix.fromArray(be.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(be.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Ce===0&&(X.matrix.copy(se.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ae===!0&&X.cameras.push(se)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ce=u.getDepthInformation(ce[0]);Ce&&Ce.isValid&&Ce.texture&&p.init(Ce,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ce=0;Ce<ce.length;Ce++){let be=ce[Ce].camera;if(be){let Oe=g[be];Oe||(Oe=new Sa,g[be]=Oe);let se=u.getCameraImage(be);Oe.sourceTexture=se}}}}for(let ce=0;ce<T.length;ce++){let Ae=S[ce],ge=T[ce];Ae!==null&&ge!==void 0&&ge.update(Ae,$,c||a)}ae&&ae(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),m=null}let J=new xp;J.setAnimationLoop(Pe),this.setAnimationLoop=function(H){ae=H},this.dispose=function(){}}},Uv=new Je,Rp=new it;Rp.set(-1,0,0,0,1,0,0,0,1);function Ov(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Qh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Kt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Kt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),y=v.envMap,M=v.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Rp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fv(i,e,t,n){let s={},r={};function a(v,y){let M=y.program;n.uniformBlockBinding(v,M,s[v.id])}function o(v,y){let M=s[v.id];M===void 0&&(m(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",p));let T=y.program;n.updateUBOMapping(v,T);let S=e.render.frame;r[v.id]!==S&&(c(v),r[v.id]=S)}function l(v){let y=i.createBuffer(),M=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(v){let y=s[v.id],M=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,_=M.length;S<_;S++){let b=M[S];if(Array.isArray(b))for(let P=0,C=b.length;P<C;P++)h(b[P],S,P,T);else h(b,S,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,y,M,T){if(d(v,y,M,T)===!0){let S=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let P=0;P<_.length;P++){let C=_[P],N=x(C,!0);u(C,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,v.__data)}}function u(v,y,M){typeof v=="number"||typeof v=="boolean"?y[M]=v:v.isMatrix3?(y[M]=v.elements[0],y[M+1]=v.elements[1],y[M+2]=v.elements[2],y[M+3]=0,y[M+4]=v.elements[3],y[M+5]=v.elements[4],y[M+6]=v.elements[5],y[M+7]=0,y[M+8]=v.elements[6],y[M+9]=v.elements[7],y[M+10]=v.elements[8],y[M+11]=0):ArrayBuffer.isView(v)?y.set(v.subarray(0,y.length-M),M):v.toArray(y,M)}function d(v,y,M,T){let S=v.value,_=y+"_"+M;if(Array.isArray(S)){T[_]===void 0&&(T[_]=[]);let b=T[_],P=!1;for(let C=0;C<S.length;C++)f(S[C],b,C)===!0&&(P=!0);return P}return f(S,T,_)}function f(v,y,M){if(y[M]===void 0)return typeof v=="number"||typeof v=="boolean"?y[M]=v:ArrayBuffer.isView(v)?y[M]=v.slice():y[M]=v.clone(),!0;{let T=y[M];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return y[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let y=v.uniforms,M=0,T=16;for(let _=0,b=y.length;_<b;_++){let P=Array.isArray(y[_])?y[_]:[y[_]];for(let C=0,N=P.length;C<N;C++){let F=P[C],X=Array.isArray(F.value)?F.value:[F.value],D=Array.isArray(y[_])||Array.isArray(F.value),B=M;for(let z=0,le=X.length;z<le;z++){let q=X[z],ie=x(q,D),ae=M%T,Pe=ae%ie.boundary,J=ae+Pe;M+=Pe,J!==0&&T-J<ie.storage&&(M+=T-J),z===0&&(B=M),M+=ie.storage}let Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((M-B)/Float32Array.BYTES_PER_ELEMENT),F.__offset=B}}let S=M%T;return S>0&&(M+=T-S),v.__size=M,v.__cache={},this}function x(v,y){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",v),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(v){let y=v.target;y.removeEventListener("dispose",p),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:g}}var Bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function kv(){return gi===null&&(gi=new xr(Bv,16,16,rs,ei),gi.name="DFG_LUT",gi.minFilter=jt,gi.magFilter=jt,gi.wrapS=zn,gi.wrapT=zn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var mc=class{constructor(e={}){let{canvas:t=Bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Tn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,p=new Set([Ul,Nl,Dl]),g=new Set([Tn,Qn,Dr,Ds,Il,Pl]),v=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,S=null,_=[],b=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,F=null,X=null,D=null,B=null;this._outputColorSpace=Ft;let Y=0,z=0,le=null,q=-1,ie=null,ae=new At,Pe=new At,J=null,H=new He(0),$=0,ce=t.width,Ae=t.height,ge=1,te=null,ze=null,Ce=new At(0,0,ce,Ae),be=new At(0,0,ce,Ae),Oe=!1,se=new ji,he=new al,_e=!1,Ne=!1,Ee=new Je,tt=new R,Ge=new At,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function xt(){return le===null?ge:1}let U=n;function Ot(w,O){return t.getContext(w,O)}let nt,wt,Me,Dt,$e,Qe,A,E,G,de,j,me,fe,Q,ne,xe,L,ee,Z,ve,pe,ye,Ve;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Re,!1),U===null){let O="webgl2";if(U=Ot(O,w),U===null)throw Ot(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(w){throw t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),et("WebGLRenderer: "+w.message),w}function st(){nt=new Zx(U),nt.init(),pe=new Lv(U,nt),wt=new kx(U,nt,e,pe),Me=new Iv(U,nt),wt.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),X=U.createFramebuffer(),D=U.createFramebuffer(),B=U.createFramebuffer(),Dt=new Qx(U),$e=new gv,Qe=new Pv(U,nt,Me,$e,wt,pe,Dt),A=new Kx(C),E=new t0(U),ye=new Fx(U,E),G=new Jx(U,E,Dt,ye),de=new ty(U,G,E,ye,Dt),ee=new ey(U,wt,Qe),ne=new zx($e),j=new mv(C,A,nt,wt,ye,ne),me=new Ov(C,$e),fe=new xv,Q=new Ev(nt),L=new Ox(C,A,Me,de,m,l),xe=new Cv(C,de,wt),Ve=new Fv(U,Dt,wt,Me),Z=new Bx(U,nt,Dt),ve=new jx(U,nt,Dt),Dt.programs=j.programs,C.capabilities=wt,C.extensions=nt,C.properties=$e,C.renderLists=fe,C.shadowMap=xe,C.state=Me,C.info=Dt}x!==Tn&&(P=new iy(x,t.width,t.height,o,s,r));let ue=new du(C,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(w){w!==void 0&&(ge=w,this.setSize(ce,Ae,!1))},this.getSize=function(w){return w.set(ce,Ae)},this.setSize=function(w,O,K=!0){if(ue.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=w,Ae=O,t.width=Math.floor(w*ge),t.height=Math.floor(O*ge),K===!0&&(t.style.width=w+"px",t.style.height=O+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(ce*ge,Ae*ge).floor()},this.setDrawingBufferSize=function(w,O,K){ce=w,Ae=O,ge=K,t.width=Math.floor(w*K),t.height=Math.floor(O*K),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(x===Tn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ae)},this.getViewport=function(w){return w.copy(Ce)},this.setViewport=function(w,O,K,V){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,O,K,V),Me.viewport(ae.copy(Ce).multiplyScalar(xt()).round())},this.getScissor=function(w){return w.copy(be)},this.setScissor=function(w,O,K,V){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,O,K,V),Me.scissor(Pe.copy(be).multiplyScalar(xt()).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(w){Me.setScissorTest(Oe=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){ze=w},this.getClearColor=function(w){return w.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,K=!0){let V=0;if(w){let W=!1;if(le!==null){let Te=le.texture.format;W=p.has(Te)}if(W){let Te=le.texture.type,Fe=g.has(Te),we=L.getClearColor(),De=L.getClearAlpha(),We=we.r,rt=we.g,mt=we.b;Fe?(v[0]=We,v[1]=rt,v[2]=mt,v[3]=De,U.clearBufferuiv(U.COLOR,0,v)):(y[0]=We,y[1]=rt,y[2]=mt,y[3]=De,U.clearBufferiv(U.COLOR,0,y))}else V|=U.COLOR_BUFFER_BIT}O&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),F=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),L.dispose(),fe.dispose(),Q.dispose(),Qe.dispose(),$e.dispose(),A.dispose(),de.dispose(),G.dispose(),ye.dispose(),Ve.dispose(),j.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Xr),ue.removeEventListener("sessionend",qr),ii.stop()};function Ye(w){w.preventDefault(),ua("WebGLRenderer: Context Lost."),N=!0}function at(){ua("WebGLRenderer: Context Restored."),N=!1;let w=Dt.autoReset,O=xe.enabled,K=xe.autoUpdate,V=xe.needsUpdate,W=xe.type;st(),Dt.autoReset=w,xe.enabled=O,xe.autoUpdate=K,xe.needsUpdate=V,xe.type=W}function Re(w){et("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function St(w){let O=w.target;O.removeEventListener("dispose",St),Vt(O)}function Vt(w){qn(w),$e.remove(w)}function qn(w){let O=$e.get(w).programs;O!==void 0&&(O.forEach(function(K){j.releaseProgram(K)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,K,V,W,Te){O===null&&(O=ut);let Fe=W.isMesh&&W.matrixWorld.determinantAffine()<0,we=Yr(w,O,K,V,W);Me.setMaterial(V,Fe);let De=K.index,We=1;if(V.wireframe===!0){if(De=G.getWireframeAttribute(K),De===void 0)return;We=2}let rt=K.drawRange,mt=K.attributes.position,Be=rt.start*We,gt=(rt.start+rt.count)*We;Te!==null&&(Be=Math.max(Be,Te.start*We),gt=Math.min(gt,(Te.start+Te.count)*We)),De!==null?(Be=Math.max(Be,0),gt=Math.min(gt,De.count)):mt!=null&&(Be=Math.max(Be,0),gt=Math.min(gt,mt.count));let Yt=gt-Be;if(Yt<0||Yt===1/0)return;ye.setup(W,V,we,K,De);let Nt,Rt=Z;if(De!==null&&(Nt=E.get(De),Rt=ve,Rt.setIndex(Nt)),W.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*xt()),Rt.setMode(U.LINES)):Rt.setMode(U.TRIANGLES);else if(W.isLine){let un=V.linewidth;un===void 0&&(un=1),Me.setLineWidth(un*xt()),W.isLineSegments?Rt.setMode(U.LINES):W.isLineLoop?Rt.setMode(U.LINE_LOOP):Rt.setMode(U.LINE_STRIP)}else W.isPoints?Rt.setMode(U.POINTS):W.isSprite&&Rt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let un=W._multiDrawStarts,ke=W._multiDrawCounts,xn=W._multiDrawCount,bt=De?E.get(De).bytesPerElement:1,ls=$e.get(V).currentProgram.getUniforms();for(let dn=0;dn<xn;dn++)ls.setValue(U,"_gl_DrawID",dn),Rt.render(un[dn]/bt,ke[dn])}else if(W.isInstancedMesh)Rt.renderInstances(Be,Yt,W.count);else if(K.isInstancedBufferGeometry){let un=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ke=Math.min(K.instanceCount,un);Rt.renderInstances(Be,Yt,ke)}else Rt.render(Be,Yt)};function fo(w,O,K,V){F!==null&&w.isNodeMaterial&&F.setObject(V,w),_e===!0&&ne.setState(w,K,!1),w.transparent===!0&&w.side===Zt&&w.forceSinglePass===!1?(w.side=Kt,w.needsUpdate=!0,lt(w,O,V),w.side=pi,w.needsUpdate=!0,lt(w,O,V),w.side=Zt):lt(w,O,V)}this.compile=function(w,O,K=null){K===null&&(K=w),F!==null&&F.renderStart(w,O,K),S=Q.get(K),S.init(O),b.push(S),K.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),w!==K&&w.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),Ne=this.localClippingEnabled,_e=ne.init(this.clippingPlanes,Ne),_e===!0&&ne.setGlobalState(this.clippingPlanes,O),F!==null&&xe.render(S.state.shadowsArray,K,O);let V=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Te=W.material;if(Te)if(Array.isArray(Te))for(let Fe=0;Fe<Te.length;Fe++){let we=Te[Fe];fo(we,K,O,W),V.add(we)}else fo(Te,K,O,W),V.add(Te)}),S=b.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(w,O,K=null){let V=this.compile(w,O,K);return new Promise(W=>{function Te(){if(V.forEach(function(Fe){let De=$e.get(Fe).currentProgram;(De===void 0||De.isReady())&&V.delete(Fe)}),V.size===0){W(w);return}setTimeout(Te,10)}nt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ks=null;function zs(w){ks&&ks(w)}function Xr(){ii.stop()}function qr(){ii.start()}let ii=new xp;ii.setAnimationLoop(zs),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(w){ks=w,ue.setAnimationLoop(w),w===null?ii.stop():ii.start()},ue.addEventListener("sessionstart",Xr),ue.addEventListener("sessionend",qr),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(w,O);let K=ue.enabled===!0&&ue.isPresenting===!0,V=P!==null&&(le===null||K)&&P.begin(C,le);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,O,le),S=Q.get(w,b.length),S.init(O),S.state.textureUnits=Qe.getTextureUnits(),b.push(S),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?he.setFromArrayCamera(O):se.setFromProjectionMatrix(Ee,Hn,O.reversedDepth),Ne=this.localClippingEnabled,_e=ne.init(this.clippingPlanes,Ne),T=fe.get(w,_.length),T.init(),_.push(T),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let Fe=C.xr.getDepthSensingMesh();Fe!==null&&Hs(Fe,O,-1/0,C.sortObjects)}Hs(w,O,0,C.sortObjects),T.finish(),F!==null&&F.updateLights(S.state.lightsArray),C.sortObjects===!0&&T.sort(te,ze),ot=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ot&&L.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),_e===!0&&ne.beginShadows();let W=S.state.shadowsArray;if(xe.render(W,w,O),_e===!0&&ne.endShadows(),(V&&P.hasRenderPass())===!1){let Fe=T.opaque,we=T.transmissive;if(S.setupLights(),O.isArrayCamera){let De=O.cameras;if(we.length>0)for(let We=0,rt=De.length;We<rt;We++){let mt=De[We];k(Fe,we,w,mt)}ot&&L.render(w);for(let We=0,rt=De.length;We<rt;We++){let mt=De[We];I(T,w,mt,mt.viewport)}}else we.length>0&&k(Fe,we,w,O),ot&&L.render(w),I(T,w,O)}le!==null&&z===0&&(Qe.updateMultisampleRenderTarget(le),Qe.updateRenderTargetMipmap(le)),V&&P.end(C),w.isScene===!0&&w.onAfterRender(C,w,O),ye.resetDefaultState(),q=-1,ie=null,b.pop(),b.length>0?(S=b[b.length-1],Qe.setTextureUnits(S.state.textureUnits),_e===!0&&ne.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,F!==null&&F.renderEnd()};function Hs(w,O,K,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){let Fe=O.isArrayCamera?he:se;if(!w.frustumCulled||w.intersectsFrustum(Fe)){V&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);let we=de.update(w),De=w.material;De.visible&&T.push(w,we,De,K,Ge.z,null,O)}}else if(w.isMesh||w.isLine||w.isPoints){let Fe=O.isArrayCamera?he:se;if(!w.frustumCulled||w.intersectsFrustum(Fe)){let we=de.update(w),De=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ge.copy(we.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(De)){let We=we.groups;for(let rt=0,mt=We.length;rt<mt;rt++){let Be=We[rt],gt=De[Be.materialIndex];gt&&gt.visible&&T.push(w,we,gt,K,Ge.z,Be,O)}}else De.visible&&T.push(w,we,De,K,Ge.z,null,O)}}}let Te=w.children;for(let Fe=0,we=Te.length;Fe<we;Fe++)Hs(Te[Fe],O,K,V)}function I(w,O,K,V){let{opaque:W,transmissive:Te,transparent:Fe}=w;S.setupLightsView(K),_e===!0&&ne.setGlobalState(C.clippingPlanes,K),V&&Me.viewport(ae.copy(V)),W.length>0&&re(W,O,K),Te.length>0&&re(Te,O,K),Fe.length>0&&re(Fe,O,K),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function k(w,O,K,V){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let Be=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new Dn(1,1,{generateMipmaps:!0,type:Be?ei:Tn,minFilter:Vn,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Te=S.state.transmissionRenderTarget[V.id],Fe=V.viewport||ae;Te.setSize(Fe.z*C.transmissionResolutionScale,Fe.w*C.transmissionResolutionScale);let we=C.getRenderTarget(),De=C.getActiveCubeFace(),We=C.getActiveMipmapLevel();C.setRenderTarget(Te),C.getClearColor(H),$=C.getClearAlpha(),$<1&&C.setClearColor(16777215,.5),C.clear(),ot&&L.render(K);let rt=C.toneMapping;C.toneMapping=mi;let mt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),_e===!0&&ne.setGlobalState(C.clippingPlanes,V),re(w,K,V),Qe.updateMultisampleRenderTarget(Te),Qe.updateRenderTargetMipmap(Te),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let gt=0,Yt=O.length;gt<Yt;gt++){let Nt=O[gt],{object:Rt,geometry:un,material:ke,group:xn}=Nt;if(ke.side===Zt&&Rt.layers.test(V.layers)){let bt=ke.side;ke.side=Kt,ke.needsUpdate=!0,Le(Rt,K,V,un,ke,xn),ke.side=bt,ke.needsUpdate=!0,Be=!0}}Be===!0&&(Qe.updateMultisampleRenderTarget(Te),Qe.updateRenderTargetMipmap(Te))}C.setRenderTarget(we,De,We),C.setClearColor(H,$),mt!==void 0&&(V.viewport=mt),C.toneMapping=rt}function re(w,O,K){let V=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Te=w.length;W<Te;W++){let Fe=w[W],{object:we,geometry:De,group:We}=Fe,rt=Fe.material;rt.allowOverride===!0&&V!==null&&(rt=V),we.layers.test(K.layers)&&Le(we,O,K,De,rt,We)}}function Le(w,O,K,V,W,Te){F!==null&&W.isNodeMaterial&&F.setObject(w,W),w.onBeforeRender(C,O,K,V,W,Te),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(C,O,K,V,w,Te),W.transparent===!0&&W.side===Zt&&W.forceSinglePass===!1?(W.side=Kt,W.needsUpdate=!0,C.renderBufferDirect(K,O,V,W,w,Te),W.side=pi,W.needsUpdate=!0,C.renderBufferDirect(K,O,V,W,w,Te),W.side=Zt):C.renderBufferDirect(K,O,V,W,w,Te),w.onAfterRender(C,O,K,V,W,Te)}function Xe(w){let O=0;for(let K of w)K.texture!==null&&O++;return O}function lt(w,O,K){O.isScene!==!0&&(O=ut);let V=$e.get(w),W=S.state.lights,Te=S.state.shadowsArray,Fe=W.state.version,we=j.getParameters(w,W.state,Te,O,K,S.state.lightProbeGridArray),De=j.getProgramCacheKey(we),We=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=A.get(w.envMap||V.environment,rt),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",St),We=new Map,V.programs=We,V.programVariants=new Map);let mt=We.get(De);if(mt!==void 0){if(V.currentProgram===mt&&V.lightsStateVersion===Fe)return In(w,we),mt}else we.uniforms=j.getUniforms(w),F!==null&&w.isNodeMaterial&&F.build(w,K,we),w.onBeforeCompile(we,C),mt=j.acquireProgram(we,De),We.set(De,mt),V.uniforms=we.uniforms;let Be=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=ne.uniform),In(w,we),V.needsLights=wm(w),V.lightsStateVersion=Fe,V.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.sunLights.value=W.state.sun,Be.sunLightShadows.value=W.state.sunShadow,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.sunShadowMatrix.value=W.state.sunShadowMatrix,Be.sunShadowCascade.value=W.state.sunShadowCascade,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=Xe(S.state.lightProbeGridArray),V.currentProgram=mt,V.uniformsList=null,mt}function Cn(w,O,K,V,W){let Te=$e.get(w),Fe=Te.currentProgram.id+","+V+","+W,we=Te.programVariants.get(Fe);return we===void 0?(we=lt(w,O,K),Te.programVariants.set(Fe,we)):(Te.currentProgram=we,Te.uniformsList=null,Te.outputColorSpace=V,Te.toneMapping=W),we}function Bn(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Ur.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function In(w,O){let K=$e.get(w);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Yr(w,O,K,V,W){O.isScene!==!0&&(O=ut),Qe.resetTextureUnits();let Te=O.fog,Fe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,we=le===null?C.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:dt.workingColorSpace,De=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,We=A.get(V.envMap||Fe,De),rt=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,mt=!!K.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Be=!!K.morphAttributes.position,gt=!!K.morphAttributes.normal,Yt=!!K.morphAttributes.color,Nt=mi;V.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Nt=C.toneMapping);let Rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,un=Rt!==void 0?Rt.length:0,ke=$e.get(V),xn=S.state.lights;if(_e===!0&&(Ne===!0||w!==ie)){let Bt=w===ie&&V.id===q;ne.setState(V,w,Bt)}let bt=!1,ls=!1;V.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==xn.state.version||W.isBatchedMesh&&ke.batching===!1||!W.isBatchedMesh&&ke.batching===!0||W.isBatchedMesh&&ke.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&ke.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&ke.instancing===!1||!W.isInstancedMesh&&ke.instancing===!0||W.isSkinnedMesh&&ke.skinning===!1||!W.isSkinnedMesh&&ke.skinning===!0||W.isInstancedMesh&&ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ke.instancingMorph===!1&&W.morphTexture!==null||ke.envMap!==We||V.fog===!0&&ke.fog!==Te||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ne.numPlanes||ke.numIntersection!==ne.numIntersection)||ke.vertexAlphas!==rt||ke.vertexTangents!==mt||ke.morphTargets!==Be||ke.morphNormals!==gt||ke.morphColors!==Yt||ke.morphTargetsCount!==un||ke.numLightProbeGrids!==Xe(S.state.lightProbeGridArray)?bt=!0:(ke.outputColorSpace!==we||ke.toneMapping!==Nt)&&(ls=!0):(bt=!0,ke.__version=V.version);let dn=ke.currentProgram;(bt===!0||ls===!0)&&(dn=ls===!0?Cn(V,O,W,we,Nt):lt(V,O,W),F&&V.isNodeMaterial&&F.onUpdateProgram(V,dn,ke));let po=!1,Wi=!1,cs=!1,yt=dn.getUniforms(),ln=ke.uniforms;if(Me.useProgram(dn.program)&&(po=!0,Wi=!0,cs=!0),V.id!==q&&(q=V.id,Wi=!0),po||ie!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),yt.setValue(U,"projectionMatrix",w.projectionMatrix),yt.setValue(U,"viewMatrix",w.matrixWorldInverse);let sn=yt.map.cameraPosition;sn!==void 0&&sn.setValue(U,tt.setFromMatrixPosition(w.matrixWorld)),wt.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&yt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),ie!==w&&(ie=w,Wi=!0,cs=!0)}if(ke.needsLights&&(xn.state.sunShadowMap.length>0&&yt.setValue(U,"sunShadowMap",xn.state.sunShadowMap,Qe),xn.state.directionalShadowMap.length>0&&yt.setValue(U,"directionalShadowMap",xn.state.directionalShadowMap,Qe),xn.state.spotShadowMap.length>0&&yt.setValue(U,"spotShadowMap",xn.state.spotShadowMap,Qe),xn.state.pointShadowMap.length>0&&yt.setValue(U,"pointShadowMap",xn.state.pointShadowMap,Qe)),W.isSkinnedMesh){yt.setOptional(U,W,"bindMatrix"),yt.setOptional(U,W,"bindMatrixInverse");let Bt=W.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),yt.setValue(U,"boneTexture",Bt.boneTexture,Qe))}W.isBatchedMesh&&(yt.setOptional(U,W,"batchingTexture"),yt.setValue(U,"batchingTexture",W._matricesTexture,Qe),yt.setOptional(U,W,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",W._indirectTexture,Qe),yt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",W._colorsTexture,Qe));let Yn=K.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&ee.update(W,K,dn),(Wi||ke.receiveShadow!==W.receiveShadow)&&(ke.receiveShadow=W.receiveShadow,yt.setValue(U,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(ln.envMapIntensity.value=O.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=kv()),Wi){if(yt.setValue(U,"toneMappingExposure",C.toneMappingExposure),ke.needsLights&&Em(ln,cs),Te&&V.fog===!0&&me.refreshFogUniforms(ln,Te),me.refreshMaterialUniforms(ln,V,ge,Ae,S.state.transmissionRenderTarget[w.id]),ke.needsLights&&ke.numLightProbeGrids>0){let Bt=M,sn=0;for(let Si of S.state.lightProbeGridArray)Si.texture!==null&&(Bt.textures[sn]=Si.texture,Bt.min[sn]=Si.boundingBox.min,Bt.max[sn]=Si.boundingBox.max,Bt.resolution[sn]=Si.resolution,sn++);for(let Si in Bt)Bt[Si].length=sn;ln.probesSH.value=Bt.textures,ln.probesMin.value=Bt.min,ln.probesMax.value=Bt.max,ln.probesResolution.value=Bt.resolution}Ur.upload(U,Bn(ke),ln,Qe)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ur.upload(U,Bn(ke),ln,Qe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&yt.setValue(U,"center",W.center),yt.setValue(U,"modelViewMatrix",W.modelViewMatrix),yt.setValue(U,"normalMatrix",W.normalMatrix),yt.setValue(U,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Bt=V.uniformsGroups;for(let sn=0,Si=Bt.length;sn<Si;sn++){let ld=Bt[sn];Ve.update(ld,dn),Ve.bind(ld,dn)}}return dn}function Em(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function wm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(w,O,K){let V=$e.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),$e.get(w.texture).__webglTexture=O,$e.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:K,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let K=$e.get(w);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,K=0){le=w,Y=O,z=K;let V=null,W=!1,Te=!1;if(w){let we=$e.get(w);if(we.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(U.FRAMEBUFFER,we.__webglFramebuffer),ae.copy(w.viewport),Pe.copy(w.scissor),J=w.scissorTest,Me.viewport(ae),Me.scissor(Pe),Me.setScissorTest(J),q=-1;return}else if(we.__webglFramebuffer===void 0)Qe.setupRenderTarget(w);else if(we.__hasExternalTextures)Qe.rebindTextures(w,$e.get(w.texture).__webglTexture,$e.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let rt=w.depthTexture;if(we.__boundDepthTexture!==rt){if(rt!==null&&$e.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(w)}}let De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Te=!0);let We=$e.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[O])?V=We[O][K]:V=We[O],W=!0):w.samples>0&&Qe.useMultisampledRTT(w)===!1?V=$e.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?V=We[K]:V=We,ae.copy(w.viewport),Pe.copy(w.scissor),J=w.scissorTest}else ae.copy(Ce).multiplyScalar(ge).floor(),Pe.copy(be).multiplyScalar(ge).floor(),J=Oe;if(K!==0&&(V=X),Me.bindFramebuffer(U.FRAMEBUFFER,V)&&Me.drawBuffers(w,V),Me.viewport(ae),Me.scissor(Pe),Me.setScissorTest(J),W){let we=$e.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,K)}else if(Te){let we=O;for(let De=0;De<w.textures.length;De++){let We=$e.get(w.textures[De]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+De,We.__webglTexture,K,we)}}else if(w!==null&&K!==0){let we=$e.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,we.__webglTexture,K)}q=-1};function od(w){let O=$e.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=wt.textureFormatReadable(w.format),O.__typeReadable=wt.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,K,V,W,Te,Fe,we=0){if(!(w&&w.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=$e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(De=De[Fe],Array.isArray(De)&&(De=De[0])),De){Me.bindFramebuffer(U.FRAMEBUFFER,De);try{let We=w.textures[we],rt=We.format,mt=We.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we);let Be=od(We);if(Be.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&K>=0&&K<=w.height-W&&U.readPixels(O,K,V,W,pe.convert(rt),pe.convert(mt),Te)}finally{let We=le!==null?$e.get(le).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,O,K,V,W,Te,Fe,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=$e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(De=De[Fe],Array.isArray(De)&&(De=De[0])),De)if(O>=0&&O<=w.width-V&&K>=0&&K<=w.height-W){Me.bindFramebuffer(U.FRAMEBUFFER,De);let We=w.textures[we],rt=We.format,mt=We.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we);let Be=od(We);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.bufferData(U.PIXEL_PACK_BUFFER,Te.byteLength,U.STREAM_READ),U.readPixels(O,K,V,W,pe.convert(rt),pe.convert(mt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Yt=le!==null?$e.get(le).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Yt);let Nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await zf(U,Nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Te),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(gt),U.deleteSync(Nt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,K=0){let V=Math.pow(2,-K),W=Math.floor(w.image.width*V),Te=Math.floor(w.image.height*V),Fe=O!==null?O.x:0,we=O!==null?O.y:0;Qe.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Fe,we,W,Te),Me.unbindTexture()},this.copyTextureToTexture=function(w,O,K=null,V=null,W=0,Te=0){let Fe,we,De,We,rt,mt,Be,gt,Yt,Nt=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(K!==null)Fe=K.max.x-K.min.x,we=K.max.y-K.min.y,De=K.isBox3?K.max.z-K.min.z:1,We=K.min.x,rt=K.min.y,mt=K.isBox3?K.min.z:0;else{let yt=Math.pow(2,-W);Fe=Math.floor(Nt.width*yt),we=Math.floor(Nt.height*yt),w.isDataArrayTexture?De=Nt.depth:w.isData3DTexture?De=Math.floor(Nt.depth*yt):De=1,We=0,rt=0,mt=0}V!==null?(Be=V.x,gt=V.y,Yt=V.z):(Be=0,gt=0,Yt=0);let Rt=pe.convert(O.format),un=pe.convert(O.type),ke;O.isData3DTexture?(Qe.setTexture3D(O,0),ke=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Qe.setTexture2DArray(O,0),ke=U.TEXTURE_2D_ARRAY):(Qe.setTexture2D(O,0),ke=U.TEXTURE_2D),Me.activeTexture(U.TEXTURE0),Me.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),Me.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Me.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let xn=Me.getParameter(U.UNPACK_ROW_LENGTH),bt=Me.getParameter(U.UNPACK_IMAGE_HEIGHT),ls=Me.getParameter(U.UNPACK_SKIP_PIXELS),dn=Me.getParameter(U.UNPACK_SKIP_ROWS),po=Me.getParameter(U.UNPACK_SKIP_IMAGES);Me.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),Me.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),Me.pixelStorei(U.UNPACK_SKIP_PIXELS,We),Me.pixelStorei(U.UNPACK_SKIP_ROWS,rt),Me.pixelStorei(U.UNPACK_SKIP_IMAGES,mt);let Wi=w.isDataArrayTexture||w.isData3DTexture,cs=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let yt=$e.get(w),ln=$e.get(O),Yn=$e.get(yt.__renderTarget),Bt=$e.get(ln.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,Yn.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let sn=0;sn<De;sn++)Wi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$e.get(w).__webglTexture,W,mt+sn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$e.get(O).__webglTexture,Te,Yt+sn)),U.blitFramebuffer(We,rt,We+Fe,rt+we,Be,gt,Be+Fe,gt+we,U.DEPTH_BUFFER_BIT,U.NEAREST);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||$e.has(w)){let yt=$e.get(w),ln=$e.get(O);Me.bindFramebuffer(U.READ_FRAMEBUFFER,D),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let Yn=0;Yn<De;Yn++)Wi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,W,mt+Yn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yt.__webglTexture,W),cs?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ln.__webglTexture,Te,Yt+Yn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ln.__webglTexture,Te),W!==0?U.blitFramebuffer(We,rt,We+Fe,rt+we,Be,gt,Be+Fe,gt+we,U.COLOR_BUFFER_BIT,U.NEAREST):cs?U.copyTexSubImage3D(ke,Te,Be,gt,Yt+Yn,We,rt,Fe,we):U.copyTexSubImage2D(ke,Te,Be,gt,We,rt,Fe,we);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else cs?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(ke,Te,Be,gt,Yt,Fe,we,De,Rt,un,Nt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(ke,Te,Be,gt,Yt,Fe,we,De,Rt,Nt.data):U.texSubImage3D(ke,Te,Be,gt,Yt,Fe,we,De,Rt,un,Nt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Te,Be,gt,Fe,we,Rt,un,Nt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Te,Be,gt,Nt.width,Nt.height,Rt,Nt.data):U.texSubImage2D(U.TEXTURE_2D,Te,Be,gt,Fe,we,Rt,un,Nt);Me.pixelStorei(U.UNPACK_ROW_LENGTH,xn),Me.pixelStorei(U.UNPACK_IMAGE_HEIGHT,bt),Me.pixelStorei(U.UNPACK_SKIP_PIXELS,ls),Me.pixelStorei(U.UNPACK_SKIP_ROWS,dn),Me.pixelStorei(U.UNPACK_SKIP_IMAGES,po),Te===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&U.generateMipmap(ke),Me.unbindTexture()},this.initRenderTarget=function(w){$e.get(w).__webglFramebuffer===void 0&&Qe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Qe.setTextureCube(w,0):w.isData3DTexture?Qe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Qe.setTexture2DArray(w,0):Qe.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){Y=0,z=0,le=null,Me.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var Cp={type:"change"},pu={type:"start"},Pp={type:"end"},xc=new li,Ip=new cn,zv=Math.cos(70*An.DEG2RAD),nn=new R,Rn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fu=1e-6,yc=class extends qa{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new an,this._lastTargetPosition=new R,this._quat=new an().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rr,this._sphericalDelta=new Rr,this._scale=1,this._panOffset=new R,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new R,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gv.bind(this),this._onPointerDown=Hv.bind(this),this._onPointerUp=Vv.bind(this),this._onContextMenu=Zv.bind(this),this._onMouseWheel=qv.bind(this),this._onKeyDown=Yv.bind(this),this._onTouchStart=$v.bind(this),this._onTouchMove=Kv.bind(this),this._onMouseDown=Wv.bind(this),this._onMouseMove=Xv.bind(this),this._interceptControlDown=Jv.bind(this),this._interceptControlUp=jv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cp),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;nn.copy(t).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Rn:n>Math.PI&&(n-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),t.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=nn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xc.origin.copy(this.object.position),xc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xc.direction))<zv?this.object.lookAt(this.target):(Ip.setFromNormalAndCoplanarPoint(this.object.up,this.target),xc.intersectPlane(Ip,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fu||this._lastTargetPosition.distanceToSquared(this.target)>fu?(this.dispatchEvent(Cp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){nn.setFromMatrixColumn(t,0),nn.multiplyScalar(-e),this._panOffset.add(nn)}_panUp(e,t){this.screenSpacePanning===!0?nn.setFromMatrixColumn(t,1):(nn.setFromMatrixColumn(t,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(e),this._panOffset.add(nn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;nn.copy(s).sub(this.target);let r=nn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Hv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Gv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Vv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pp),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Wv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Et.DOLLY;break;case is.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}break;case is.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(pu)}function Xv(i){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function qv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(i.preventDefault(),this.dispatchEvent(pu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Pp))}function Yv(i){this.enabled!==!1&&this._handleKeyDown(i)}function $v(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1){this.state=Et.NONE;break}this._handleTouchStartRotate(i),this.state=Et.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1){this.state=Et.NONE;break}this._handleTouchStartPan(i),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Et.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(pu)}function Kv(i){switch(this._trackPointer(i),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Et.NONE}}function Zv(i){this.enabled!==!1&&i.preventDefault()}function Jv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var vc=class extends ys{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new pt;e.deleteAttribute("uv");let t=new Ke({side:Kt}),n=new Ke,s=new ws(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ue(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Li(e,n,6),o=new It;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ue(e,Br(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ue(e,Br(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ue(e,Br(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ue(e,Br(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ue(e,Br(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ue(e,Br(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Br(i){return new Fa({color:0,emissive:16777215,emissiveIntensity:i})}var Mc=class{constructor(e=1/60,t=5){this.step=e,this.maxSteps=t,this.accumulator=0}reset(){this.accumulator=0}advance(e,t){this.accumulator+=Math.min(Math.max(e,0),this.step*this.maxSteps);let n=0;for(;this.accumulator+1e-10>=this.step&&n<this.maxSteps;)t(this.step),this.accumulator=Math.max(0,this.accumulator-this.step),n++;return this.accumulator/this.step}};function xi(i){let e=new Set,t=new Set,n=new Set,s=new Set;i.traverse(a=>{a.geometry&&e.add(a.geometry),a.skeleton&&s.add(a.skeleton);for(let o of[].concat(a.material||[])){t.add(o);for(let l of Object.values(o))l?.isTexture&&n.add(l)}}),s.forEach(a=>a.dispose()),e.forEach(a=>a.dispose()),t.forEach(a=>a.dispose());let r=new Set;n.forEach(a=>{a.source?.data&&r.add(a.source.data),a.dispose()}),r.forEach(a=>{typeof a.close=="function"&&a.close()}),i.removeFromParent()}var Lp={low:{dpr:1,shadows:!1,shadowSize:512},balanced:{dpr:1.5,shadows:!0,shadowSize:1024},high:{dpr:2,shadows:!0,shadowSize:2048}},Dp={workshop:{background:"#16262c",fog:["#16262c",38,120],floor:!0,grid:!0,environmentIntensity:.5,sun:[12,20,8],target:[0,0,0],shadow:16,far:260,distance:[1.6,65],exposure:1.18},level:{background:"#a9bcb4",fog:["#b9c3b6",95,420],floor:!1,grid:!1,environmentIntensity:.6,sun:[90,140,20],target:[0,0,85],shadow:105,far:700,distance:[4,320],exposure:.95}},Sc=class{constructor(e,t,n){this.host=e,this.onStats=t,this.onError=n,this.systems=new Set,this.stepper=new Mc,this.disposed=!1,this.lost=!1,this.dirty=!0,this.frameId=0,this.lastTime=0,this.lastStats=0,this.environment=null,this.focusPoint=null,this.tween=null,this.keys=new Set,this.keyboardPan=!1,this.renderer=new mc({antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ft,this.renderer.toneMapping=$a,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.type=El,e.append(this.renderer.domElement),this.renderer.domElement.tabIndex=0,this.renderer.domElement.setAttribute("aria-label","\u53EF\u62D6\u52A8\u65CB\u8F6C\u548C\u7F29\u653E\u7684 3D \u573A\u666F");let s=new Or(this.renderer);this.environmentTexture=s.fromScene(new vc,.04).texture,this.scene=new ys,this.scene.environment=this.environmentTexture,this.scene.background=new He("#16262c"),this.scene.fog=new fa("#16262c",38,120),this.camera=new Jt(42,1,.1,260),this.controls=new yc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.075,this.controls.rotateSpeed=.85,this.controls.zoomSpeed=.9,this.controls.minDistance=1.6,this.controls.maxDistance=65,this.controls.maxPolarAngle=Math.PI*.495,this.controls.minPolarAngle=.02,this.controls.addEventListener("change",()=>this.invalidate()),this.scene.add(new Ha("#d8efff","#4b5141",1.55)),this.sun=new As("#fff1d5",2.8),this.sun.position.set(12,20,8),this.sun.castShadow=!0,this.sun.shadow.normalBias=.025,this.sun.shadow.bias=-4e-4,this.scene.add(this.sun),this.scene.add(this.sun.target),this.floor=new Ue(new Mn(200,200),new Ke({color:"#2b3d41",roughness:.92,metalness:.08})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor),this.grid=new Xa(80,80,"#557474","#32494c"),this.grid.position.y=.006,this.scene.add(this.grid),this.content=new vt,this.scene.add(this.content),this.onVisibility=()=>{this.lastTime=0,this.stepper.reset(),document.hidden?(cancelAnimationFrame(this.frameId),this.frameId=0):this.invalidate()},this.onLost=r=>{r.preventDefault(),this.lost=!0,cancelAnimationFrame(this.frameId),this.frameId=0,n("\u663E\u5361\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u6B63\u5728\u7B49\u5F85\u6062\u590D\u3002")},this.onRestored=()=>{this.lost=!1,this.lastTime=0,this.stepper.reset(),this.invalidate(),n("3D \u7A7A\u95F4\u5DF2\u6062\u590D\u3002")},this.onKeyDown=r=>{!this.keyboardPan||Qv(r.target)||["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE"].includes(r.code)&&(this.keys.add(r.code),this.invalidate())},this.onKeyUp=r=>{this.keys.delete(r.code)},this.onBlur=()=>this.keys.clear(),document.addEventListener("visibilitychange",this.onVisibility),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),this.renderer.domElement.addEventListener("webglcontextlost",this.onLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.onRestored),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.setQuality("balanced"),this.setEnvironment("workshop"),this.resetCamera()}setEnvironment(e){if(this.environment===e)return!1;let t=Dp[e]||Dp.workshop;return this.environment=e,this.scene.background=new He(t.background),this.scene.fog.color.set(t.fog[0]),this.scene.fog.near=t.fog[1],this.scene.fog.far=t.fog[2],this.floor.visible=t.floor,this.grid.visible=t.grid,this.sun.position.set(...t.sun),this.sun.target.position.set(...t.target),this.sun.target.updateMatrixWorld(),Object.assign(this.sun.shadow.camera,{left:-t.shadow,right:t.shadow,top:t.shadow,bottom:-t.shadow,near:1,far:t.shadow*4}),this.sun.shadow.camera.updateProjectionMatrix(),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.camera.far=t.far,this.camera.updateProjectionMatrix(),this.controls.minDistance=t.distance[0],this.controls.maxDistance=t.distance[1],this.controls.maxPolarAngle=Math.PI*.495,this.renderer.toneMappingExposure=t.exposure,this.scene.environmentIntensity=t.environmentIntensity,this.focusPoint=null,this.tween=null,!0}focusOn(e,{distance:t,height:n,duration:s=.65,azimuth:r}={}){if(!e)return;let a=e.position.clone?e.position.clone():new R(...e.position),o=e.radius||4,l=e.view||{},c=Math.max(12,o*2),h=t??l.distance??c,u=n??l.height??Math.max(5,h*.5),d=r??l.azimuth??0,f=a.clone().add(new R(Math.sin(d)*h,u,-Math.cos(d)*h));this.focusPoint={position:a.clone(),radius:o,view:l},this.tween={fromPos:this.camera.position.clone(),toPos:f,fromTarget:this.controls.target.clone(),toTarget:a,elapsed:0,duration:s},this.invalidate()}focusPointById(e,t,n){return!e||!e.has(t)?!1:(this.focusOn(e.get(t),n),!0)}setAutoRotate(e){this.controls.autoRotate=!!e,this.controls.autoRotateSpeed=.7,this.invalidate()}cancelCameraTween(){this.tween=null,this.invalidate()}setKeyboardPan(e){this.keyboardPan=!!e,e||this.keys.clear()}resetCamera(){if(this.environment==="level"&&this.focusPoint){this.focusOn(this.focusPoint,{duration:.001});return}this.environment==="level"?(this.camera.position.set(16,13,-16),this.controls.target.set(0,2,20)):(this.camera.position.set(10.5,8.4,13.2),this.controls.target.set(0,1.9,0)),this.controls.update(),this.invalidate()}resize(){let e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.invalidate()}setQuality(e){let t=Lp[e]||Lp.balanced;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.dpr)),this.renderer.shadowMap.enabled=t.shadows,this.sun.shadow.mapSize.setScalar(t.shadowSize),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.scene.traverse(n=>{for(let s of[].concat(n.material||[]))s.needsUpdate=!0}),this.resize()}addSystem(e){return this.systems.add(e),this.invalidate(),()=>{this.systems.delete(e)&&e.dispose?.()}}invalidate(){this.dirty=!0,!this.frameId&&!this.disposed&&!this.lost&&!document.hidden&&(this.frameId=requestAnimationFrame(e=>this.frame(e)))}applyKeyboardPan(e){if(!this.keyboardPan||!this.keys.size)return!1;let t=Math.max(6,this.camera.position.distanceTo(this.controls.target))*e*1.1,n=new R;this.camera.getWorldDirection(n),n.y=0,n.lengthSq()<1e-6&&n.set(0,0,-1),n.normalize();let s=new R().crossVectors(n,new R(0,1,0)).normalize(),r=new R;if(this.keys.has("KeyW")&&r.add(n),this.keys.has("KeyS")&&r.sub(n),this.keys.has("KeyD")&&r.add(s),this.keys.has("KeyA")&&r.sub(s),this.keys.has("KeyE")&&(r.y+=1),this.keys.has("KeyQ")&&(r.y-=1),r.lengthSq()===0)return!1;r.normalize().multiplyScalar(t);let a=this.controls.target.clone().add(r);a.x=An.clamp(a.x,-80,80),a.z=An.clamp(a.z,-40,230),a.y=An.clamp(a.y,0,120);let o=a.sub(this.controls.target);return this.camera.position.add(o),this.controls.target.add(o),!0}updateCameraTween(e){let t=this.tween;if(!t)return!1;t.elapsed+=e;let n=t.duration<=0?1:Math.min(1,t.elapsed/t.duration),s=n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;return this.camera.position.lerpVectors(t.fromPos,t.toPos,s),this.controls.target.lerpVectors(t.fromTarget,t.toTarget,s),this.camera.lookAt(this.controls.target),n>=1&&(this.tween=null,this.controls.update()),!0}frame(e){if(this.frameId=0,!(this.disposed||this.lost||document.hidden))try{let t=this.lastTime?Math.min((e-this.lastTime)/1e3,.1):0;this.lastTime=e;let n=this.stepper.advance(t,r=>this.systems.forEach(a=>a.fixedUpdate?.(r)));this.systems.forEach(r=>r.update?.(t,n));let s=!1;if(this.tween?s=this.updateCameraTween(t):(s=this.controls.update(),this.applyKeyboardPan(t)&&(s=!0,this.controls.update())),this.dirty||s||this.systems.size||this.controls.autoRotate){this.dirty=!1;let r=performance.now();this.renderer.render(this.scene,this.camera),(!this.systems.size||e-this.lastStats>300)&&(this.lastStats=e,this.onStats({cpuMs:performance.now()-r,...this.renderer.info.render,...this.renderer.info.memory}))}s||this.dirty||this.systems.size||this.controls.autoRotate?this.invalidate():(this.lastTime=0,this.stepper.reset())}catch(t){this.onError("\u573A\u666F\u8FD0\u884C\u5F02\u5E38\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5\u3002"),console.error(t)}}replaceContent(e){for(let t of[...this.content.children])xi(t);this.content.add(e),this.invalidate()}dispose(){this.disposed||(this.disposed=!0,cancelAnimationFrame(this.frameId),this.resizeObserver.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),this.renderer.domElement.removeEventListener("webglcontextlost",this.onLost),this.renderer.domElement.removeEventListener("webglcontextrestored",this.onRestored),this.controls.dispose(),this.systems.forEach(e=>e.dispose?.()),this.systems.clear(),xi(this.scene),this.sun.shadow.dispose(),this.environmentTexture.dispose(),this.renderer.dispose(),this.renderer.domElement.remove())}};function Qv(i){if(!i)return!1;let e=i.tagName;return e==="INPUT"||e==="TEXTAREA"||e==="SELECT"||i.isContentEditable}var kr="prototype-2";var yi=Object.freeze({infantry:{name:"\u6B65\u5766",speed:1,attack:1,rate:1,health:1,defense:1,turn:1,preferredMass:22},heavy:{name:"\u91CD\u5766",speed:.65,attack:1.35,rate:.65,health:1.5,defense:1.5,turn:.7,preferredMass:36},assassin:{name:"\u523A\u5766",speed:1.4,attack:1.2,rate:1.35,health:.75,defense:.7,turn:1.4,preferredMass:16},exotic:{name:"\u5947\u5766",speed:1,attack:1,rate:1,health:1,defense:1,turn:1,preferredMass:24},artillery:{name:"\u9AD8\u5766",speed:.8,attack:1.15,rate:.7,health:1.3,defense:.9,turn:.8,preferredMass:28}}),oo=Object.keys(yi),Ze=Object.freeze({hull:{name:"\u57FA\u7840\u8F66\u4F53",role:"hull",size:[3.4,1.2,6.4],mass:10,armor:10,health:100,cost:0,types:oo},tracks:{name:"\u5C65\u5E26\u7EC4",role:"mobility",size:[3.9,.8,6.6],mass:5,traction:32,cost:0,types:oo},engine:{name:"\u57FA\u7840\u5F15\u64CE",role:"engine",size:[1.4,.8,1.6],mass:3,power:120,cost:0,types:oo},turret:{name:"\u70AE\u5854",role:"turret",size:[2.5,.9,3.4],mass:6,armor:6,health:40,cost:0,types:oo},cannon:{name:"\u57FA\u7840\u706B\u70AE",role:"weapon",size:[1,.8,2],mass:4,damage:25,rate:1,projectile:"shell",cost:0,types:["infantry","heavy","assassin","exotic"]},mortar:{name:"\u8FEB\u51FB\u70AE",role:"weapon",size:[1.4,1,1.8],mass:6,damage:40,rate:.55,projectile:"mortar",cost:0,types:["artillery","exotic"]},armor:{name:"\u786C\u88C5\u7532\u677F",role:"armor",size:[3,1,.35],mass:6,armor:18,health:35,cost:30,types:oo},rapid:{name:"\u901F\u5C04\u70AE",role:"weapon",size:[.8,.8,2],mass:3,damage:15,rate:2,projectile:"shell",cost:40,types:["assassin","exotic"]},bomb:{name:"\u7206\u7834\u53D1\u5C04\u5668",role:"weapon",size:[1.2,.8,2],mass:5,damage:32,rate:.8,projectile:"bomb",cost:40,types:["exotic"]}}),Np=Object.freeze({shell:{launchSpeed:35,gravity:9.8,blastRadius:.15,lifetime:4,impactDelay:null},bomb:{launchSpeed:22,gravity:12,blastRadius:3,lifetime:4,impactDelay:null},mortar:{launchSpeed:28,gravity:9.8,blastRadius:5,lifetime:8,impactDelay:2.5}}),GE=Object.freeze({maxHealth:"\u751F\u547D\u503C",moveSpeed:"\u7C73/\u79D2",fireRate:"\u6B21/\u79D2",attack:"\u4F24\u5BB3/\u53D1",defense:"\u9632\u5FA1\u8BC4\u5206\uFF1A\u5B9E\u9645\u4F24\u5BB3 = \u539F\u59CB\u4F24\u5BB3 \xD7 100 / (100 + \u9632\u5FA1)",turnSpeed:"\u5F27\u5EA6/\u79D2\uFF1B\u8F66\u4F53\u8F6C\u5411",turretSpeed:"\u5F27\u5EA6/\u79D2\uFF1B\u70AE\u5854\u8F6C\u5411\uFF0C\u65E0\u70AE\u5854\u65F6\u4E0D\u9002\u7528",gravity:"\u7C73/\u79D2\xB2\uFF1B\u5B50\u5F39\u4E0B\u843D\u52A0\u901F\u5EA6\uFF0C\u4E0D\u80FD\u5355\u72EC\u51B3\u5B9A\u5C04\u7A0B",launchSpeed:"\u7C73/\u79D2\uFF1B\u4E0E\u53D1\u5C04\u89D2\u5EA6\u3001\u91CD\u529B\u3001\u51FA\u751F\u9AD8\u5EA6\u53CA\u5BFF\u547D\u5171\u540C\u51B3\u5B9A\u5F39\u9053",blastRadius:"\u7C73",impactDelay:"\u79D2\uFF1B\u8FEB\u51FB\u70AE\u8BBE\u8BA1\u547D\u4E2D\u5EF6\u8FDF\uFF0C\u540E\u7EED\u5F39\u9053\u6C42\u89E3\u5668\u9700\u8981\u6EE1\u8DB3\u6B64\u7EA6\u675F"}),Mt=Object.freeze({minSpeed:1,maxSpeed:18,maxParts:128,maxExtent:30,maxWeapons:4,contactTolerance:.16,maxTurrets:1,snapGrid:.1});function lo(i="infantry",e="starter"){if(!Object.hasOwn(yi,i))throw new Error("\u672A\u77E5\u5766\u514B\u7C7B\u578B");let t=i==="artillery"?"mortar":"cannon";return{schemaVersion:1,id:e,name:`${yi[i].name}\u539F\u578B`,type:i,revision:1,primaryWeaponId:"weapon",parts:[{id:"hull",partId:"hull",parentId:null,position:[0,1.4,0],yaw:0},{id:"tracks",partId:"tracks",parentId:"hull",position:[0,.4,0],yaw:0},{id:"engine",partId:"engine",parentId:"hull",position:[0,2.4,-2.4],yaw:0},{id:"turret",partId:"turret",parentId:"hull",position:[0,2.45,.4],yaw:0},{id:"weapon",partId:t,parentId:"turret",position:[0,i==="artillery"?2.5:2.45,i==="artillery"?3.1:3.15],yaw:0}]}}var co=(i,e,t)=>Math.min(t,Math.max(e,i)),ni=i=>Math.round(i*1e3)/1e3,Up=(i,e)=>typeof e=="string"&&Object.hasOwn(i,e);function hn(i){let e=Ze[i.partId].size,t=Math.abs(Math.cos(i.yaw)),n=Math.abs(Math.sin(i.yaw)),s=[(e[0]*t+e[2]*n)/2,e[1]/2,(e[0]*n+e[2]*t)/2];return{min:i.position.map((r,a)=>r-s[a]),max:i.position.map((r,a)=>r+s[a])}}function ho(i,e=Object.keys(Ze)){let t=[];if(!i||i.schemaVersion!==1||!Up(yi,i.type)||typeof i.id!="string"||!i.id||typeof i.name!="string"||!i.name.trim()||!Number.isInteger(i.revision)||i.revision<1)return["\u84DD\u56FE\u5934\u4FE1\u606F\u6216\u7248\u672C\u65E0\u6548"];if(!Array.isArray(i.parts)||!i.parts.length||i.parts.length>Mt.maxParts)return["\u90E8\u4EF6\u6570\u91CF\u8D85\u51FA\u8303\u56F4"];let n=new Set;for(let l of i.parts){if(!l||typeof l.id!="string"||!l.id||n.has(l.id)||!Up(Ze,l.partId)||!Array.isArray(l.position)||l.position.length!==3||!l.position.every(c=>Number.isFinite(c)&&Math.abs(c)<=Mt.maxExtent)||!Number.isFinite(l.yaw)||l.parentId!==null&&typeof l.parentId!="string"||l.scale!==void 0){t.push("\u90E8\u4EF6 ID\u3001\u5750\u6807\u6216\u53D8\u6362\u65E0\u6548\uFF08\u6682\u4E0D\u652F\u6301\u7F29\u653E\uFF09");continue}n.add(l.id),e.includes(l.partId)||t.push(`${l.id}\uFF1A\u90E8\u4EF6\u672A\u89E3\u9501`),Ze[l.partId].types.includes(i.type)||t.push(`${l.id}\uFF1A\u4E0D\u9002\u7528\u4E8E\u5F53\u524D\u5766\u514B\u7C7B\u578B`)}if(t.length)return t;let s=new Map(i.parts.map(l=>[l.id,l])),r=i.parts.filter(l=>l.parentId===null);(r.length!==1||Ze[r[0]?.partId]?.role!=="hull")&&t.push("\u9700\u8981\u552F\u4E00\u7684\u8F66\u4F53\u6839\u8282\u70B9");let a=l=>i.parts.filter(c=>Ze[c.partId].role===l).length;(a("hull")!==1||a("engine")!==1||a("mobility")!==1)&&t.push("\u9700\u8981\u4E14\u53EA\u80FD\u6709\u4E00\u4E2A\u8F66\u4F53\u3001\u4E00\u4E2A\u5F15\u64CE\u548C\u4E00\u7EC4\u5C65\u5E26"),(a("weapon")<1||a("weapon")>Mt.maxWeapons)&&t.push("\u6B66\u5668\u6570\u91CF\u5FC5\u987B\u4E3A 1\uFF5E4"),a("turret")>Mt.maxTurrets&&t.push("\u6700\u591A\u53EA\u80FD\u5B89\u88C5\u4E00\u4E2A\u70AE\u5854");let o=s.get(i.primaryWeaponId);(!o||Ze[o.partId].role!=="weapon")&&t.push("\u9700\u8981\u6307\u5B9A\u6709\u6548\u4E3B\u6B66\u5668"),i.type==="artillery"&&o?.partId!=="mortar"&&t.push("\u9AD8\u5766\u4E3B\u6B66\u5668\u5FC5\u987B\u4E3A\u8FEB\u51FB\u70AE");for(let l of i.parts){let c=new Set([l.id]),h=l.parentId;for(;h!==null;){if(!s.has(h)||c.has(h)){t.push(`${l.id}\uFF1A\u8FDE\u63A5\u7F3A\u5931\u6216\u5B58\u5728\u5FAA\u73AF`);break}c.add(h),h=s.get(h).parentId}let u=hn(l);if(u.min[1]<-.01&&t.push(`${l.id}\uFF1A\u90E8\u4EF6\u7A7F\u8FC7\u5730\u9762`),l.parentId&&s.has(l.parentId)){let d=hn(s.get(l.parentId));Math.max(...u.min.map((m,x)=>Math.max(m-d.max[x],d.min[x]-u.max[x])))>Mt.contactTolerance&&t.push(`${l.id}\uFF1A\u672A\u63A5\u89E6\u6240\u8FDE\u63A5\u7684\u90E8\u4EF6`)}}for(let l=0;l<i.parts.length;l++)for(let c=l+1;c<i.parts.length;c++){let h=hn(i.parts[l]),u=hn(i.parts[c]);h.min.every((d,f)=>Math.min(h.max[f],u.max[f])-Math.max(d,u.min[f])>.05)&&t.push(`${i.parts[l].id}/${i.parts[c].id}\uFF1A\u90E8\u4EF6\u5B9E\u4F53\u91CD\u53E0`)}return[...new Set(t)]}function Vi(i,e){let t=ho(i,e);if(t.length)return{valid:!1,rulesVersion:kr,errors:t,stats:null};let n=[...i.parts].sort((_,b)=>_.id.localeCompare(b.id,"en")),s=yi[i.type],r=_=>n.reduce((b,P)=>b+(Ze[P.partId][_]||0),0),a=r("mass"),o=[0,1,2].map(_=>n.reduce((b,P)=>b+P.position[_]*Ze[P.partId].mass,0)/a),l=n.map(hn),c=[0,1,2].map(_=>Math.min(...l.map(b=>b.min[_]))),u=[0,1,2].map(_=>Math.max(...l.map(b=>b.max[_]))).map((_,b)=>_-c[b]),d=n.find(_=>Ze[_.partId].role==="mobility"),f=hn(d),m=Math.max(Math.abs(o[0]-d.position[0])/((f.max[0]-f.min[0])/2),Math.abs(o[2]-d.position[2])/((f.max[2]-f.min[2])/2));if(m>1)return{valid:!1,rulesVersion:kr,errors:["\u91CD\u5FC3\u6295\u5F71\u8D85\u51FA\u5C65\u5E26\u652F\u6491\u8303\u56F4"],stats:null};let x=co(1-m*.4-Math.max(0,o[1]-1.5)*.12,.25,1),p=co(1-Math.abs(a-s.preferredMass)/(s.preferredMass*2),.5,1),g=.85+.15*p,v=n.find(_=>Ze[_.partId].role==="turret"),y=n.filter(_=>Ze[_.partId].role==="weapon").map(_=>{let b=Ze[_.partId];return{instanceId:_.id,partId:_.partId,position:[..._.position],yaw:_.yaw,onTurret:!!(v&&_.parentId===v.id),attack:ni(b.damage*s.attack*g),fireRate:ni(b.rate*s.rate),projectile:{kind:b.projectile,...Np[b.projectile]}}}),M=y.find(_=>_.instanceId===i.primaryWeaponId),T={maxHealth:ni(r("health")*s.health),moveSpeed:ni(co(r("power")/a*s.speed*x*g,Mt.minSpeed,Mt.maxSpeed)),turnSpeed:ni(co(2*s.turn*x/(1+a*(u[0]**2+u[2]**2)/500),.1,3)),defense:ni(r("armor")*s.defense),attack:M.attack,fireRate:M.fireRate,...v?{turretSpeed:ni(co(3.2*s.turn*x/(1+Ze[v.partId].mass*.08+a*.01),.15,3))}:{},...M.projectile},S=["\u539F\u578B\u8BC4\u4F30\uFF1A\u4F7F\u7528\u90E8\u4EF6\u5305\u56F4\u76D2\u8FD1\u4F3C\u7ED3\u6784\uFF0C\u5C1A\u672A\u9A8C\u8BC1\u70AE\u53E3\u906E\u6321\u3001\u627F\u91CD\u4E0E\u771F\u5B9E\u78B0\u649E\u3002"];return v||S.push("\u65E0\u70AE\u5854\uFF1A\u6B66\u5668\u76F4\u63A5\u56FA\u5B9A\u5728\u8F66\u4F53\u4E0A\uFF0C\u8F6C\u5411\u65F6\u65E0\u6CD5\u72EC\u7ACB\u7784\u51C6\u3002"),{valid:!0,rulesVersion:kr,blueprintRevision:i.revision,errors:[],warnings:S,stats:T,weapons:y,metrics:{mass:a,centerOfMass:o.map(ni),size:u.map(ni),stability:ni(x),typeFit:ni(p),hasTurret:!!v},explanation:{moveSpeed:"\u5F15\u64CE\u529F\u7387 / \u603B\u8D28\u91CF \xD7 \u7C7B\u578B\u7CFB\u6570 \xD7 \u7A33\u5B9A\u6027 \xD7 \u9002\u914D\u4FEE\u6B63",turnSpeed:"\u53D7\u8D28\u91CF\u3001\u6C34\u5E73\u5C3A\u5BF8\u548C\u91CD\u5FC3\u7A33\u5B9A\u6027\u5F71\u54CD",defense:"\u8F66\u4F53\u4E0E\u786C\u88C5\u7532\u8BC4\u5206\u4E4B\u548C \xD7 \u7C7B\u578B\u7CFB\u6570",attack:"\u4E3B\u6B66\u5668\u57FA\u7840\u4F24\u5BB3 \xD7 \u7C7B\u578B\u7CFB\u6570 \xD7 \u9002\u914D\u4FEE\u6B63",health:"\u8F66\u4F53\u4E0E\u88C5\u7532\u751F\u547D\u4E4B\u548C \xD7 \u7C7B\u578B\u7CFB\u6570",turretSpeed:"\u70AE\u5854\u8D28\u91CF\u4E0E\u603B\u8D28\u91CF\u8D8A\u5927\uFF0C\u70AE\u5854\u8F6C\u52A8\u8D8A\u6162\uFF1B\u65E0\u70AE\u5854\u65F6\u6CA1\u6709\u72EC\u7ACB\u7784\u51C6"}}}var eM=Object.keys(Ze),tM=(i,e)=>Math.round(i/e)*e;function Op(i,e=Mt.snapGrid){return Number(tM(i,e).toFixed(4))}function nM(i,e=Mt.snapGrid){return i.map(t=>Op(t,e))}function mu(i,e){return Math.max(...i.min.map((t,n)=>Math.max(t-e.max[n],e.min[n]-i.max[n])))}function zr(i,e){return i.parts.find(t=>t.id===e)||null}function iM(i,e){let t=new Set([e]),n=!0;for(;n;){n=!1;for(let s of i.parts)s.parentId&&t.has(s.parentId)&&!t.has(s.id)&&(t.add(s.id),n=!0)}return t}function Fp(i,e,t,n=.3){let s=zr(i,e);if(!s)return null;let r=hn({...s,position:t}),a=iM(i,e),o=null;for(let l of i.parts){if(l.id===e||a.has(l.id))continue;let c=mu(r,hn(l));c<=n&&(!o||c<o.gap)&&(o={id:l.id,gap:c})}return o}function sM(i){let e=i.parts.find(n=>Ze[n.partId].role==="hull");if(!e)return null;let t=i.parts.find(n=>Ze[n.partId].role==="turret");return{hull:e,box:hn(e),turret:t,turretBox:t?hn(t):null}}function rM(i,e){let t=Ze[e];if(!t)throw new Error("\u672A\u77E5\u90E8\u4EF6");let n=sM(i);if(!n)return[{position:[0,1.4,0],yaw:0,parentId:null}];let{hull:s,box:r,turret:a,turretBox:o}=n,[l,c,h]=t.size,u=[],d=(f,m=s.id,x=0)=>u.push({position:f.map(p=>Number(p.toFixed(3))),yaw:x,parentId:m});if(t.role==="hull")d([0,1.4,0],null);else if(t.role==="mobility")d([0,Math.max(c/2,r.min[1]-c/2),0]),d([0,Math.max(c/2,r.min[1]-c/2),r.min[2]+h/2]);else if(t.role==="engine"){let f=r.max[1]+c/2;d([0,f,r.min[2]+h/2],s.id),d([0,f,r.min[2]+h/2+.2],s.id)}else if(t.role==="turret"){let f=r.max[1]+c/2;d([0,f,(r.min[2]+r.max[2])/2+(r.max[2]-r.min[2])*.06],s.id),d([0,f,(r.min[2]+r.max[2])/2],s.id),d([0,f,r.max[2]-h/2],s.id)}else if(t.role==="armor"){let f=r.min[1]+c/2;d([0,f,r.max[2]+h/2+.05],s.id),d([r.max[0]+h/2+.05,f,0],s.id,Math.PI/2),d([r.min[0]-h/2-.05,f,0],s.id,Math.PI/2),d([0,f,r.min[2]-h/2-.05],s.id)}else if(t.role==="weapon"){let f=a?o.min[1]+c/2+.05:r.max[1]-c/2,m=a?o.max[2]:r.max[2],x=a?a.id:s.id;for(let p of[0,1.05,-1.05])d([p,f,m+h/2+.05],x);d([0,a?o.max[1]+c/2+.05:r.max[1]+c/2,a?(o.min[2]+o.max[2])/2:0],x),a||d([0,r.max[1]-c/2,r.max[2]+h/2+.05],s.id)}else d([0,r.max[1]+c/2,0],s.id);return u}function gu(i,e,t){let n=rM(i,e);for(let s of n){let r={id:t,partId:e,parentId:s.parentId,position:[...s.position],yaw:s.yaw},a={...i,parts:[...i.parts,r]};if(ho(a,eM).length===0)return{...s,position:[...s.position],parentId:s.parentId}}return n[0]}function _u(i,e,t,{grid:n=Mt.snapGrid,attach:s=!0}={}){let r=zr(i,e);if(!r)return null;let o=(n?nM(t,n):t.slice(0,3)).map(h=>Math.max(-Mt.maxExtent,Math.min(Mt.maxExtent,h))),l=s?Fp(i,e,o):null,c=l?l.id:r.parentId;if(l&&r.parentId&&l.id!==r.parentId){let h=zr(i,r.parentId);h&&mu(hn({...r,position:o}),hn(h))<=l.gap+1e-6&&(c=r.parentId)}return{position:o,parentId:c,gap:l?.gap??null}}function Bp(i,e,t,n=Mt.snapGrid){let s=zr(i,e);if(!s)return null;let r=t.slice(0,3).map(m=>{let x=Math.max(-Mt.maxExtent,Math.min(Mt.maxExtent,m));return n?Op(x,n):Number(x.toFixed(3))}),a=(()=>{let m=s.parentId?zr(i,s.parentId):null;if(m){let x=mu(hn({...s,position:r}),hn(m));if(x<=.7)return{id:m.id,gap:x}}return Fp(i,e,r,.7)})(),o=a?zr(i,a.id):null;if(!o)return r;let l=hn({...s,position:r}),c=hn(o),h=1,u=-1/0;for(let m=0;m<3;m++){let x=Math.max(l.min[m]-c.max[m],c.min[m]-l.max[m]);x>u&&(u=x,h=m)}if(!(u>0&&u<=.7))return r;let d=l.min[h]>c.max[h]?1:-1,f=[...r];return f[h]=Number((f[h]-d*u).toFixed(3)),f}var kp=["terrain","enemy-tank","player-tank"],Ec=class{constructor(e){this.repository=e}async save({id:e,name:t,category:n,blob:s}){if(typeof e!="string"||!e||typeof t!="string"||!t.trim()||!kp.includes(n))throw new Error("\u6A21\u578B\u5143\u6570\u636E\u65E0\u6548");if(!(s instanceof Blob)||s.size>64*1024*1024||s.size<20)throw new Error("\u9700\u8981 64 MB \u4EE5\u5185\u7684 GLB");let r=await s.arrayBuffer(),a=new DataView(r);if(a.getUint32(0,!0)!==1179937895||a.getUint32(4,!0)!==2||a.getUint32(8,!0)!==r.byteLength||a.getUint32(16,!0)!==1313821514||a.getUint32(12,!0)+20>r.byteLength)throw new Error("GLB \u7ED3\u6784\u65E0\u6548");let o=JSON.parse(new TextDecoder().decode(new Uint8Array(r,20,a.getUint32(12,!0))));if(o.asset?.version!=="2.0")throw new Error("\u9700\u8981 glTF 2.0 \u6A21\u578B");if([...o.buffers||[],...o.images||[]].some(u=>u.uri&&!u.uri.startsWith("data:")))throw new Error("\u8BF7\u5185\u5D4C\u6A21\u578B\u8D44\u6E90");if((o.extensionsRequired||[]).some(u=>/draco|meshopt|basisu/i.test(u)))throw new Error("\u6682\u4E0D\u652F\u6301\u538B\u7F29\u6A21\u578B");let l={schemaVersion:1,id:e,name:t.trim(),category:n,format:"glb",byteLength:s.size,blob:s};await this.repository.addAsset(l);let{blob:c,...h}=l;return h}list(e){if(e!==void 0&&!kp.includes(e))throw new Error("\u672A\u77E5\u6A21\u578B\u5206\u7C7B");return this.repository.listAssets(e)}get(e){return this.repository.getAsset(e)}};function zp(){return{schemaVersion:1,currency:{parts:0},unlockedParts:Object.keys(Ze).filter(i=>Ze[i].cost===0),blueprints:[],tanks:[]}}function xu(i){if(i.schemaVersion!==1)throw new Error("\u5B58\u6863\u7248\u672C\u4E0D\u652F\u6301\uFF1B\u4FDD\u7559\u539F\u6570\u636E\uFF0C\u7B49\u5F85\u8FC1\u79FB");if(!Number.isSafeInteger(i.currency?.parts)||i.currency.parts<0||!Array.isArray(i.unlockedParts)||!Array.isArray(i.blueprints)||!Array.isArray(i.tanks))throw new Error("\u5B58\u6863\u7ED3\u6784\u635F\u574F")}function aM(i,e){xu(i);let t=e(i);if(t?.then)throw new Error("\u5B58\u6863\u66F4\u65B0\u51FD\u6570\u5FC5\u987B\u540C\u6B65");return xu(i),{profile:i,result:t}}async function Hp(i=globalThis.indexedDB,e="steel-journey-3d"){if(!i)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u6301\u4E45\u4FDD\u5B58\u6A21\u578B\uFF1B\u8BF7\u4F7F\u7528\u672C\u5730 HTTP \u5730\u5740\u6216\u652F\u6301 IndexedDB \u7684\u6D4F\u89C8\u5668");let t=await new Promise((s,r)=>{let a=i.open(e,1),o=!1;a.onupgradeneeded=()=>{let l=a.result;l.createObjectStore("profiles"),l.createObjectStore("assets",{keyPath:"id"}).createIndex("category","category")},a.onsuccess=()=>{o?a.result.close():s(a.result)},a.onerror=()=>r(a.error),a.onblocked=()=>{o=!0,r(new Error("\u8BF7\u5173\u95ED\u5176\u4ED6\u7248\u672C\u7684\u6E38\u620F\u9875\u9762\u540E\u91CD\u8BD5"))}});t.onversionchange=()=>t.close();function n(s,r,a){return new Promise((o,l)=>{let c=t.transaction(s,r),h,u,d=f=>{u=f,c.abort()};c.oncomplete=()=>o(h),c.onabort=()=>l(u||c.error||new Error("\u5B58\u50A8\u4E8B\u52A1\u5DF2\u53D6\u6D88")),c.onerror=()=>{};try{a(c.objectStore(s),f=>{h=f},d)}catch(f){d(f)}})}return{readProfile:()=>n("profiles","readonly",(s,r,a)=>{s.get("local").onsuccess=o=>{try{let l=o.target.result||zp();xu(l),r(l)}catch(l){a(l)}}}),updateProfile:s=>n("profiles","readwrite",(r,a,o)=>{r.get("local").onsuccess=l=>{try{let{profile:c,result:h}=aM(l.target.result||zp(),s);r.put(c,"local"),a(h)}catch(c){o(c)}}}),addAsset:s=>n("assets","readwrite",r=>{r.add(s)}),getAsset:s=>n("assets","readonly",(r,a)=>{r.get(s).onsuccess=o=>a(o.target.result||null)}),listAssets:s=>n("assets","readonly",(r,a)=>{let o=[],l=s?r.index("category").openCursor(s):r.openCursor();l.onsuccess=()=>{let c=l.result;if(!c){a(o);return}let{blob:h,...u}=c.value;o.push(u),c.continue()}}),close:()=>t.close()}}var Gp={cover:[{id:"wreck-a",kind:"wreck",position:[-2.6,.6,38],size:[4.4,1.2,2.8],solid:!0},{id:"wreck-b",kind:"wreck",position:[1.9,.6,39.2],size:[3.6,1.2,2.4],solid:!0},{id:"wreck-c",kind:"wreck",position:[0,.6,41.6],size:[3,1.2,2.2],solid:!0},{id:"sandbag-l1",kind:"sandbag",position:[-9.5,.45,30],size:[8,.9,1.4],solid:!0},{id:"sandbag-r1",kind:"sandbag",position:[9.5,.45,30],size:[8,.9,1.4],solid:!0},{id:"sandbag-l2",kind:"sandbag",position:[-11,.45,54],size:[7,.9,1.4],solid:!0},{id:"sandbag-r2",kind:"sandbag",position:[11,.45,54],size:[7,.9,1.4],solid:!0},{id:"berm-left",kind:"berm",position:[-13.5,1.3,95],size:[9,2.6,3.2],solid:!0},{id:"berm-mid",kind:"berm",position:[0,1.3,95],size:[6,2.6,3.2],solid:!0},{id:"berm-right",kind:"berm",position:[13.5,1.3,95],size:[9,2.6,3.2],solid:!0},{id:"ammo-west",kind:"ammo",position:[-7,.5,170],size:[2.2,1,2.2],solid:!0,explosive:{radius:3,damage:60}},{id:"ammo-east",kind:"ammo",position:[7,.5,170],size:[2.2,1,2.2],solid:!0,explosive:{radius:3,damage:60}},{id:"crate-gate",kind:"crate",position:[-14.5,.4,150],size:[1.8,.8,1.8],solid:!0},{id:"crate-gate-b",kind:"crate",position:[14.5,.4,146],size:[1.8,.8,1.8],solid:!0}],zones:[{id:"mud-left",kind:"mud",position:[-12.5,.01,110],size:[11,30],speedFactor:.45},{id:"rubble-right",kind:"rubble",position:[12.5,.01,110],size:[11,30],speedFactor:.71}]},Vp={schemaVersion:1,id:"steel-journey-01",name:"\u94A2\u94C1\u5F81\u9014 \xB7 \u7B2C\u4E00\u5173",nextLevelId:null,map:{generator:"corridor-v2",width:36,length:180,forwardAxis:"+Z",terrainModelId:null},playerSpawn:[0,0,8],enemies:[{id:"road-1",templateId:"basic-infantry",modelId:null,position:[0,0,42],behavior:"frontal",triggerZ:25},{id:"road-2",templateId:"basic-infantry",modelId:null,position:[-11,0,120],behavior:"flank-left",triggerZ:78},{id:"road-3",templateId:"basic-infantry",modelId:null,position:[11,0,120],behavior:"flank-right",triggerZ:78},{id:"guard",templateId:"base-guard",modelId:null,position:[0,0,150],behavior:"guard",triggerZ:132}],base:{id:"enemy-base",position:[0,0,170],maxHealth:150,effects:[]},victory:{allEnemiesDestroyed:!0,baseDestroyed:!0},reward:{parts:0}};function Wp(i){let e=i||{};return e.map={...Vp.map,...e.map||{}},Array.isArray(e.map.segments)||(e.map.segments=Array.from({length:9},(t,n)=>({id:`segment-${n}`,center:[0,0,n*20+10],size:[e.map.width,20],terrainModelId:null}))),Array.isArray(e.map.cover)||(e.map.cover=Gp.cover.map(t=>structuredClone(t))),Array.isArray(e.map.zones)||(e.map.zones=Gp.zones.map(t=>structuredClone(t))),e}function yu(){let i=Wp(structuredClone(Vp));return i.map.segments=Array.from({length:9},(e,t)=>({id:`segment-${t}`,center:[0,0,t*20+10],size:[i.map.width,20],terrainModelId:null})),i}function Xp(i,e=yu()){if(!i?.assessment?.valid)throw new Error("\u5766\u514B\u672A\u901A\u8FC7\u8BC4\u4F30");return{schemaVersion:1,status:"ready",tick:0,tank:structuredClone(i),level:structuredClone(Wp(structuredClone(e))),defeatedEnemies:[],baseDestroyed:!1,playerDestroyed:!1}}function vu(i,e){if(!i||!e)throw new Error("\u5173\u5361\u72B6\u6001\u6216\u4E8B\u4EF6\u7F3A\u5931");let t=structuredClone(i);if(e.type==="start"){if(i.status!=="ready")throw new Error("\u5173\u5361\u4E0D\u80FD\u91CD\u590D\u542F\u52A8");return t.status="running",t}if(i.status!=="running")throw new Error("\u53EA\u6709\u8FD0\u884C\u4E2D\u7684\u5173\u5361\u53EF\u4EE5\u63A5\u6536\u7ED3\u679C\u4E8B\u4EF6");if(e.type==="enemy-destroyed"){if(!i.level.enemies.some(n=>n.id===e.id))throw new Error("\u672A\u77E5\u654C\u65B9\u5766\u514B");t.defeatedEnemies.includes(e.id)||t.defeatedEnemies.push(e.id)}else if(e.type==="base-destroyed")t.baseDestroyed=!0;else if(e.type==="player-destroyed")t.playerDestroyed=!0;else throw new Error("\u672A\u77E5\u5173\u5361\u4E8B\u4EF6");return t.playerDestroyed?t.status="defeat":t.baseDestroyed&&t.level.enemies.every(n=>t.defeatedEnemies.includes(n.id))&&(t.status="victory"),t}function qp(i,e,{sameTeam:t=!1,friendlyFire:n=!1}={}){if(![i,e].every(s=>Number.isFinite(s)&&s>=0))throw new Error("\u4F24\u5BB3\u548C\u9632\u5FA1\u5FC5\u987B\u4E3A\u975E\u8D1F\u6709\u9650\u6570");return t&&!n?0:i*100/(100+e)}function Yp(i){let e=new Ec(i);return{models:e,profile:()=>i.readProfile(),unlockPart:t=>i.updateProfile(n=>{if(!Object.hasOwn(Ze,t))throw new Error("\u672A\u77E5\u90E8\u4EF6");if(n.unlockedParts.includes(t))return{unlocked:!0,charged:0};let s=Ze[t].cost;if(n.currency.parts<s)throw new Error("\u96F6\u4EF6\u4E0D\u8DB3");return n.currency.parts-=s,n.unlockedParts.push(t),{unlocked:!0,charged:s}}),saveDraft:t=>i.updateProfile(n=>{if(!t||t.schemaVersion!==1||typeof t.id!="string"||!t.id||!Number.isInteger(t.revision)||t.revision<1)throw new Error("\u8349\u7A3F\u6807\u8BC6\u6216\u7248\u672C\u65E0\u6548");let s=n.blueprints.find(a=>a.id===t.id);if(s&&t.revision<=s.revision)throw new Error("\u8349\u7A3F\u7248\u672C\u51B2\u7A81\uFF0C\u8BF7\u91CD\u65B0\u8BFB\u53D6");let r=JSON.parse(JSON.stringify(t));return n.blueprints=n.blueprints.filter(a=>a.id!==r.id),n.blueprints.push(r),r}),evaluate:async t=>Vi(t,(await i.readProfile()).unlockedParts),manufacture:async({blueprintId:t,tankId:n,modelId:s=null})=>{if(typeof n!="string"||!n)throw new Error("\u5766\u514B ID \u65E0\u6548");if(s!==null){let r=await e.get(s);if(!r||r.category!=="player-tank")throw new Error("\u9700\u8981\u4ED3\u5E93\u4E2D\u7684\u73A9\u5BB6\u5766\u514B\u6A21\u578B")}return i.updateProfile(r=>{if(r.tanks.some(c=>c.id===n))throw new Error("\u5766\u514B ID \u5DF2\u5B58\u5728");let a=r.blueprints.find(c=>c.id===t),o=Vi(a,r.unlockedParts);if(!o.valid)throw new Error(`\u5236\u9020\u5931\u8D25\uFF1A${o.errors.join("\uFF1B")}`);let l={schemaVersion:1,id:n,blueprint:structuredClone(a),modelId:s,assessment:o};return r.tanks.push(l),l})},prepareFirstLevel:async t=>{let n=await i.readProfile(),s=n.tanks.find(o=>o.id===t);if(!s)throw new Error("\u5766\u514B\u4E0D\u5B58\u5728");let r=Vi(s.blueprint,n.unlockedParts);if(!r.valid)throw new Error("\u5766\u514B\u9700\u8981\u8FD4\u56DE\u8F66\u95F4\u4FEE\u6B63");let a=yu();return a.enemyTemplates=Object.fromEntries(["basic-infantry","base-guard"].map(o=>{let l=lo(o==="base-guard"?"heavy":"infantry",o);return[o,{blueprint:l,assessment:Vi(l),modelId:null}]})),Xp({...s,assessment:r,rulesVersion:kr},a)},close:()=>i.close()}}function Mu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Pt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=$p(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let m=$p(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function $p(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Wt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Su(i,e){if(e===Gh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Nr||e===to){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Nr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Kp={player:{hull:"#65714c",hullDark:"#4d5839",accent:"#b0b871",metal:"#3a4038",rubber:"#1b201e",track:"#474d44",glass:"#16242b"},enemy:{hull:"#8b7550",hullDark:"#6e5c3e",accent:"#b4543a",metal:"#443f34",rubber:"#221f1a",track:"#514a3c",glass:"#1d2a2e"},guard:{hull:"#715d48",hullDark:"#5a4937",accent:"#c24a32",metal:"#403a31",rubber:"#211e1a",track:"#4a4237",glass:"#1b272b"},wreck:{hull:"#3b3833",hullDark:"#2c2a26",accent:"#4a3a2c",metal:"#2b2925",rubber:"#171614",track:"#2e2c27",glass:"#121718"}};function oM(i="player",e=0){let t=Kp[i]||Kp.player,n=(r,a=0)=>new He(r).offsetHSL(e*.014,0,a+e*.012),s=(r,a={})=>new Ke({color:r,metalness:.32,roughness:.62,flatShading:!0,...a});return{hull:s(n(t.hull)),hullDark:s(n(t.hullDark,-.02)),accent:s(n(t.accent)),metal:s(n(t.metal),{metalness:.66,roughness:.44}),barrel:new Ke({color:n(t.metal).offsetHSL(0,0,-.03),metalness:.72,roughness:.36}),rubber:new Ke({color:t.rubber,metalness:.06,roughness:.92}),track:s(n(t.track),{metalness:.58,roughness:.5}),glass:new Ke({color:t.glass,metalness:.82,roughness:.16}),lamp:new Ke({color:"#ffe8bd",emissive:"#ffc46e",emissiveIntensity:.9,roughness:.3}),soot:new Ke({color:"#151515",metalness:.2,roughness:1}),rust:new Ke({color:"#6b3f2a",metalness:.25,roughness:.9})}}function as(i,e,t,n=[0,0,0],s=[0,0,0]){let r=new Ue(e,t);return r.position.set(...n),r.rotation.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Se(i,e,t,n,s){return as(i,new pt(...t),e,n,s)}function je(i,e,t,n,s,r,a,o){return as(i,new Nn(t,n,s,r),e,a,o)}function bu(i,e,t,n,{bevel:s=.03,position:r=[0,0,0],rotation:a=[0,0,0]}={}){let o=t.map(([h,u])=>new oe(-h,u)),l=0;for(let h=0;h<o.length;h++){let u=o[h],d=o[(h+1)%o.length];l+=u.x*d.y-d.x*u.y}l<0&&o.reverse();let c=new bs(new es(o),{depth:n,bevelEnabled:s>0,bevelSize:s,bevelThickness:s,bevelSegments:1,steps:1,curveSegments:1});return c.rotateY(Math.PI/2),c.translate(-n/2,0,0),c.computeVertexNormals(),as(i,c,e,r,a)}function Zp(i,e,t,n,s=16,r=5){let a=new Sr(t.map(o=>new R(...o)));return as(i,new Oa(a,s,n,r,!1),e)}function jp(i,e,t,n=[0,0,0],s=.035,r=.03){return je(i,e,s,s,r,6,t,n)}function Qp(i,e){let t=e[0]-i[0],n=e[1]-i[1],s=Math.hypot(t,n),r=[n/s,-t/s],a=Math.atan2(r[1],r[0]),o=[(i[0]+e[0])/2,(i[1]+e[1])/2];return{length:s,angle:a,at:(l,c,h)=>[l,o[1]+r[1]*c-Math.sin(a)*h,o[0]+r[0]*c+Math.cos(a)*h]}}function lM(i,e,t,n,s,r,a){for(let o=0;o<t;o++){let l=r[2]+((o+.5)/t-.5)*s;Se(i,e,[n,.03,s/t*.62],[r[0],r[1],l],a)}}function em(i){i.updateMatrixWorld(!0);let e=new Je().copy(i.matrixWorld).invert(),t=[];i.traverse(s=>{s.isMesh&&!s.isInstancedMesh&&t.push(s)});let n=new Map;for(let s of t){let r=s.geometry.clone();r.index&&(r=r.toNonIndexed());for(let o of Object.keys(r.attributes))["position","normal","uv"].includes(o)||r.deleteAttribute(o);r.attributes.normal||r.computeVertexNormals(),r.clearGroups(),r.applyMatrix4(new Je().multiplyMatrices(e,s.matrixWorld));let a=n.get(s.material)||[];a.push(r),n.set(s.material,a)}for(let s of t)s.removeFromParent(),s.geometry.dispose();return n}function tm(i,e,t){for(let[n,s]of e){let r=Mu(s,!1);if(s.forEach(o=>o.dispose()),!r)continue;let a=new Ue(r,n);a.castShadow=!0,a.receiveShadow=!0,a.userData.partId=t||null,i.add(a)}}function cM(i){tm(i,em(i),i.userData.partId)}function hM(i){tm(i,em(i),null);for(let e of[...i.children])e.isGroup&&e.children.length===0&&e.removeFromParent()}function uM(i,e){let[t,n,s]=Ze.hull.size,r=n/2,a=s/2,o=[a,-r+.3],l=[a-.42,r];bu(i,e.hull,[[-a,-r],[a,-r],o,l,[-a+.54,r],[-a+.06,r-.3],[-a,-.05]],t,{bevel:.03});let c=Qp(o,l),h=(d,f,m)=>c.at(d,f,m),u=[c.angle,0,0];as(i,new pt(t-.46,.055,c.length-.1),e.hullDark,h(0,.032,0),u);for(let d of[c.length/2-.22,-c.length/2+.22])for(let f of[-1.16,-.7,-.24,.24,.7,1.16])jp(i,e.metal,h(f,.072,d),u);je(i,e.hullDark,.29,.29,.055,14,h(-.64,.068,-.1),u);for(let d of[-.82,-.64,-.46])Se(i,e.glass,[.13,.055,.09],h(d,.1,-.46),u);Se(i,e.metal,[.2,.03,.03],h(-.64,.11,.1),u);for(let d of[.22,-.22])Se(i,e.track,[.26,.05,.4],h(.86,.075,d),u);for(let d of[-.86,-.42])Se(i,e.metal,[.16,.05,.07],h(d,.1,.16),u);for(let d of[-1.52,1.52]){Se(i,e.hullDark,[.22,.24,.26],[d,-r+.2,2.42]),je(i,e.lamp,.085,.085,.08,12,[d,-r+.22,2.56],[Math.PI/2,0,0]);for(let f of[-.12,.12])Se(i,e.metal,[.02,.24,.02],[d+f,-r+.24,2.56]);Se(i,e.metal,[.26,.02,.02],[d,-r+.37,2.56])}for(let d of[-1.24,1.24])je(i,e.metal,.07,.07,.08,8,[d,-r+.12,a-.02],[Math.PI/2,0,0]),Se(i,e.metal,[.22,.05,.14],[d,-r+.2,a+.02]);Se(i,e.hullDark,[t-.34,.34,.07],[0,-r+.16,a-.01]),Se(i,e.hull,[t-.5,.06,.16],[0,-r+.35,a+.03]);for(let d of[-.9,.9])Se(i,e.metal,[.18,.12,.16],[d,-r+.1,a+.04]);Se(i,e.hullDark,[2.56,.6,5.3],[0,-r-.22,.1]);for(let d of[-1,1]){let f=d*1.72;for(let[m,x]of[[2.05,1.5],[.35,1.7],[-1.5,1.6]])Se(i,e.hullDark,[.62,.055,x],[f,-r+.075,m]);Se(i,e.rubber,[.6,.38,.045],[f,-r-.11,-2.74]),Se(i,e.rubber,[.6,.24,.045],[f,-r-.04,2.74]),Se(i,e.hullDark,[.34,.32,1.3],[d*1.78,-r+.28,-1.55]),Se(i,e.metal,[.26,.035,.42],[d*1.78,-r+.45,-1.55]),Se(i,e.metal,[.03,.12,.1],[d*1.76,-r+.3,-1.05]),je(i,e.rust,.04,.04,1.15,6,[d*1.8,-r+.16,1.45],[Math.PI/2,0,0]),Se(i,e.metal,[.1,.2,.22],[d*1.8,-r+.22,1.05]),je(i,e.rust,.09,.09,1.1,8,[d*1.8,-r+.2,-.1],[Math.PI/2,0,0]);for(let m of[-2.5,2.6])Se(i,e.metal,[.1,.12,.16],[d*1.42,r+.02,m]);Se(i,e.hullDark,[.06,.03,5.4],[d*1.73,r+.005,0]),Se(i,e.metal,[.16,.04,.5],[d*1.78,-r+.24,2.1])}Se(i,e.hullDark,[t-.5,.03,.05],[0,r+.005,2.76]);for(let d of[-.5,-.05,.4])Se(i,e.track,[.05,.24,.44],[1.74,-.18,d]);Se(i,e.metal,[.03,.05,1.2],[1.76,-.02,-.05]);for(let d of[-1,1])for(let f of[-2.2,-1.1,1.2,2.3])Zp(i,e.metal,[[d*1.73,.06,f-.13],[d*1.79,.16,f],[d*1.73,.06,f+.13]],.022,8,4);Zp(i,e.rust,[[-1.62,r+.04,2.3],[-1.72,r+.04,1.5],[-1.62,r+.04,.6],[-1.7,r+.04,-.4],[-1.6,r+.04,-1.2]],.032,20,4);for(let d of[1.9,.2,-1])Se(i,e.metal,[.14,.05,.12],[-1.64,r+.02,d]);Se(i,e.hullDark,[t-.62,.42,.06],[0,-.04,-a-.02]);for(let d of[-1.16,1.16])Se(i,e.hullDark,[.16,.12,.05],[d,.16,-a-.05]),Se(i,e.lamp,[.09,.07,.03],[d,.16,-a-.08]);for(let d of[-.72,.72])Se(i,e.metal,[.16,.1,.14],[d,-.3,-a-.05]);for(let d=0;d<5;d++)Se(i,e.metal,[.86,.025,.05],[0,.3+(d-2)*.07,-a-.03]);for(let d of[-1.3,1.3])Se(i,e.metal,[.05,.05,.7],[d,r+.03,.9])}function dM(i,e,t,n){let s=i-t*2,r=Math.PI*t,a=s*2+r*2,o=[];for(let l=0;l<n;l++){let c=l/n*a,h,u,d;if(c<s)h=-s/2+c,u=-e/2,d=0;else if((c-=s)<r){let f=c/t;h=s/2+Math.sin(f)*t,u=-e/2+t-Math.cos(f)*t,d=f}else if((c-=r)<s)h=s/2-c,u=e/2,d=Math.PI;else{c-=s;let f=c/t;h=-s/2-Math.sin(f)*t,u=e/2-t+Math.cos(f)*t,d=Math.PI+f}o.push({z:h,y:u,angle:d})}return o}function fM(i,e){let[t,n,s]=Ze.tracks.size,r=n/2,a=t/2-.32,o=s-.5,l=n-.12,c=-.025,h=.3,u=dM(o,l,h,64);for(let d of[-1,1]){let f=d*a,m=u.map(g=>{let v=new pt(.52,.07,.17);return v.rotateX(g.angle),v.translate(f,g.y+c,g.z),v}),x=Mu(m,!1);m.forEach(g=>g.dispose()),x&&as(i,x,e.track);for(let g of[-1.9,-.95,0,.95,1.9]){let v=-r+.32;for(let y of[-.13,.13])je(i,e.rubber,.25,.25,.1,12,[f+y,v,g],[0,0,Math.PI/2]);je(i,e.metal,.13,.13,.3,10,[f,v,g],[0,0,Math.PI/2]),je(i,e.hullDark,.055,.055,.34,8,[f,v,g],[0,0,Math.PI/2]);for(let y=0;y<5;y++){let M=y/5*Math.PI*2;jp(i,e.metal,[f,v+Math.cos(M)*.085,g+Math.sin(M)*.085],[0,0,Math.PI/2],.018,.32)}Se(i,e.hullDark,[.1,.12,.5],[f-d*.14,-r+.36,g]),je(i,e.metal,.05,.05,.34,8,[f-d*.05,-r+.48,g-.24],[.5,0,0])}let p=o/2-h;je(i,e.metal,.3,.3,.2,14,[f,-.02,p],[0,0,Math.PI/2]),je(i,e.hullDark,.14,.14,.24,10,[f,-.02,p],[0,0,Math.PI/2]);for(let g=0;g<10;g++){let v=g/10*Math.PI*2;Se(i,e.metal,[.24,.11,.075],[f,-.02+Math.cos(v)*.31,p+Math.sin(v)*.31],[v,0,0])}je(i,e.metal,.26,.26,.2,14,[f,-.02,-p],[0,0,Math.PI/2]),je(i,e.hullDark,.13,.13,.24,10,[f,-.02,-p],[0,0,Math.PI/2]),Se(i,e.metal,[.14,.09,.5],[f,-.12,-p-.24],[.16,0,0]);for(let g of[-1.5,0,1.5])je(i,e.rubber,.1,.1,.2,10,[f,c+l/2-.135,g],[0,0,Math.PI/2]);Se(i,e.hullDark,[.56,.05,s-.3],[f,r-.03,0]);for(let[g,v]of[[2,1.42],[.42,1.6],[-1.32,1.5]])Se(i,e.hull,[.05,.34,v],[f+d*.33,r-.2,g]),Se(i,e.metal,[.06,.05,v*.94],[f+d*.325,r-.05,g]);Se(i,e.hullDark,[.6,.1,.4],[f,-.1,s/2-.14]),Se(i,e.hullDark,[.6,.1,.3],[f,-.1,-s/2+.14]),je(i,e.metal,.07,.07,.09,8,[f,-.12,-s/2+.02],[0,0,Math.PI/2])}}function pM(i,e){let[t,n,s]=Ze.engine.size,r=n/2,a=s/2;Se(i,e.hullDark,[t,n*.55,s],[0,-r+n*.28,0]),Se(i,e.hull,[t-.1,.06,s-.12],[0,-r+n*.56,0]),lM(i,e.metal,6,t-.3,s*.5,[0,-r+n*.6,-s*.22]),Se(i,e.hull,[t-.24,.12,.34],[0,-r+n*.62,-a+.26]),Se(i,e.metal,[t-.34,.03,.1],[0,-r+n*.69,-a+.26]);for(let o of[-.46,.46])je(i,e.metal,.075,.085,.62,8,[o,-r+n*.8,-a+.24],[.22,0,0]),je(i,e.soot,.088,.072,.12,8,[o,-r+n*.8+.3,-a+.3],[.22,0,0]),Se(i,e.hullDark,[.22,.3,.06],[o,-r+n*.8,-a+.4],[.22,0,0]);je(i,e.metal,.24,.24,.07,14,[0,-r+n*.6,.24]);for(let o=0;o<8;o++){let l=o/8*Math.PI*2;Se(i,e.metal,[.05,.05,.2],[Math.cos(l)*.15,-r+n*.62,.24+Math.sin(l)*.15],[0,l,0])}for(let o of[-.5,.5])je(i,e.hull,.1,.1,.05,8,[o,-r+n*.58,a-.2]);Se(i,e.hull,[.36,.16,.5],[t/2-.05,-r+n*.45,-.2]);for(let o of[-t/2+.16,t/2-.16])Se(i,e.metal,[.09,.1,.13],[o,-r+n*.6,a-.16])}function mM(i,e){let[t,n,s]=Ze.turret.size,r=n/2,a=s/2;je(i,e.hullDark,1.08,1.14,.12,18,[0,-r+.04,0]);let o=(u,d,f)=>bu(i,e.hull,u,d,{bevel:f});o([[-1.62,-.45],[1.62,-.45],[1.602,-.15],[-1.58,-.15]],t,.02),o([[-1.58,-.15],[1.602,-.15],[1.402,.15],[-1.313,.15]],t-.08,.02),o([[-1.313,.15],[1.402,.15],[1.16,.34],[.72,.45],[-.6,.45],[-1.06,.34]],t-.28,.02);let l=Qp([1.42,-.22],[1.16,.3]);as(i,new pt(1.12,.62,.52),e.hullDark,[0,0,1.62],[.16,0,0]),as(i,new pt(.92,.5,.1),e.hullDark,l.at(0,.06,.02),[l.angle,0,0]),je(i,e.rust,.26,.22,.36,14,[0,.02,1.88],[Math.PI/2,0,0]),je(i,e.metal,.2,.2,.08,12,[0,.02,2.02],[Math.PI/2,0,0]);let c=-.52,h=-.18;je(i,e.hull,.35,.38,.26,14,[c,r+.09,h]),je(i,e.hullDark,.31,.31,.06,14,[c,r+.24,h]);for(let u=0;u<4;u++){let d=u/4*Math.PI*2+Math.PI/4;Se(i,e.glass,[.16,.09,.06],[c+Math.cos(d)*.31,r+.15,h+Math.sin(d)*.31],[0,-d,0])}Se(i,e.metal,[.16,.12,.3],[c-.42,r+.22,h-.16]),je(i,e.metal,.032,.032,.62,6,[c-.42,r+.3,h+.06],[Math.PI/2-.12,0,0]),Se(i,e.metal,[.18,.14,.22],[c-.42,r+.24,h-.3]),je(i,e.hullDark,.27,.27,.06,12,[.52,r+.02,-.42]),Se(i,e.metal,[.04,.05,.26],[.52,r+.06,-.22]),Se(i,e.hullDark,[.3,.22,.44],[.44,r+.1,.34]),Se(i,e.glass,[.22,.11,.05],[.44,r+.13,.57]);for(let u of[-.68,-.36])Se(i,e.metal,[.13,.05,.08],[u,r+.28,-.47]);for(let u of[.36,.68])Se(i,e.metal,[.13,.05,.08],[u,r+.06,-.68]);for(let u of[-1,1]){Se(i,e.hullDark,[.06,.3,.5],[u*1.24,.13,.86]);for(let d of[0,1])for(let f of[0,1])je(i,e.metal,.05,.05,.26,8,[u*1.3,.06+d*.13,.72+f*.16],[Math.PI/2-.55,0,u*.16])}je(i,e.metal,.055,.065,.16,8,[-1.04,r+.02,-1.18]),je(i,e.metal,.012,.012,1.7,4,[-1.04,r+.88,-1.18],[.05,0,.04]),Se(i,e.hullDark,[t*.66,.05,.2],[0,.1,-1.68]);for(let u of[-.8,.8])Se(i,e.hullDark,[.05,.32,.05],[u,-.05,-1.76]);Se(i,e.hullDark,[t*.66,.04,.05],[0,-.2,-1.76]),Se(i,e.hull,[.66,.22,.16],[.14,.02,-1.72]),je(i,e.rust,.1,.1,1.2,8,[.42,-.02,-1.72],[0,0,Math.PI/2]);for(let u=0;u<3;u++)Se(i,e.track,[.06,.2,.44],[t/2+.04,-.05,-.6+u*.5]);Se(i,e.accent,[.02,.22,.34],[t/2-.005,.12,.4]);for(let u of[-.86,.86])Se(i,e.metal,[.1,.1,.16],[u,r+.02,-.86])}function Jp(i,e){let t=(n,s=0)=>[0,s,n];Se(i,e.hullDark,[.5,.46,.7],[0,0,-1.72]),je(i,e.metal,.17,.14,1.1,14,t(-.9),[Math.PI/2,0,0]),je(i,e.barrel,.092,.105,1.9,14,t(.6),[Math.PI/2,0,0]),je(i,e.barrel,.078,.092,1.5,14,t(2.3),[Math.PI/2,0,0]),je(i,e.metal,.135,.135,.5,14,t(1.32),[Math.PI/2,0,0]);for(let n of[-.35,.35,1,2.35])je(i,e.metal,.104,.104,.06,14,t(n),[Math.PI/2,0,0]);Se(i,e.metal,[.26,.22,.34],[0,0,3.09]);for(let n of[-1,1])Se(i,e.metal,[.05,.16,.3],[n*.13,0,3.09]);for(let n of[2.97,3.21])Se(i,e.metal,[.3,.2,.05],[0,0,n]);je(i,e.metal,.042,.042,.9,8,[.34,.14,.2],[Math.PI/2,0,0]),Se(i,e.metal,[.1,.1,.12],[.34,.14,.66]),Se(i,e.hullDark,[.16,.2,.26],[.34,.12,-.3])}function gM(i,e){for(let t of[-.14,.14])for(let n of[-.14,.14])je(i,e.barrel,.045,.045,2.7,10,[t,n,.1],[Math.PI/2,0,0]),je(i,e.metal,.07,.07,.22,10,[t,n,1.35],[Math.PI/2,0,0]);Se(i,e.hullDark,[.58,.54,.95],[0,0,-.92]),je(i,e.metal,.3,.3,.5,12,[0,.28,-.9],[0,0,Math.PI/2]),Se(i,e.metal,[.3,.08,.6],[0,-.3,-.5]),je(i,e.metal,.05,.05,.7,8,[0,.02,-1.5],[Math.PI/2,0,0])}function _M(i,e){Se(i,e.hullDark,[1.2,.86,1.5],[0,0,-.2]);for(let t of[-.34,0,.34])for(let n of[-.22,.22])je(i,e.metal,.13,.13,.34,12,[t,n,.6],[Math.PI/2,0,0]),je(i,e.soot,.1,.1,.06,12,[t,n,.78],[Math.PI/2,0,0]),je(i,e.rust,.09,.05,.3,10,[t,n,.9],[Math.PI/2,0,0]);Se(i,e.metal,[1.24,.1,.3],[0,.42,-.7]),Se(i,e.hull,[.9,.3,.4],[0,-.52,-.4]),Se(i,e.metal,[.08,.7,.5],[.62,-.1,-.5])}function xM(i,e){je(i,e.metal,.5,.54,.08,14,[0,-.44,.1]),je(i,e.barrel,.11,.13,2.3,12,[0,.32,.58],[.4,0,0]),je(i,e.metal,.16,.16,.3,12,[0,-.08,.34],[.4,0,0]);for(let t of[-1,1])je(i,e.metal,.035,.035,1.1,6,[t*.34,.12,.2],[.15,0,t*.55]),Se(i,e.metal,[.12,.06,.12],[t*.2,-.4,.02]);Se(i,e.hullDark,[.26,.2,.3],[-.36,.2,.28]),Se(i,e.glass,[.06,.12,.2],[-.5,.26,.3]);for(let t of[-.3,-.1])je(i,e.rust,.07,.07,.3,8,[t,-.34,-.55],[Math.PI/2,0,0]),je(i,e.metal,.075,.075,.06,8,[t,-.34,-.4],[Math.PI/2,0,0])}function yM(i,e){let[t,n,s]=Ze.armor.size;bu(i,e.hullDark,[[-s/2,-n/2],[s/2,-n/2],[s/2,n/2],[-s/2,n/2]],t,{bevel:.02});for(let r of[-t*.36,0,t*.36])for(let a of[-n*.3,n*.3])je(i,e.metal,.05,.05,.08,6,[r,a,s/2+.02],[Math.PI/2,0,0]);for(let r of[-n*.42,n*.42])Se(i,e.hull,[t*.92,.06,s+.03],[0,r,0]);Se(i,e.accent,[t*.4,.02,.12],[0,0,s/2+.05])}var vM={hull:uM,mobility:fM,engine:pM,turret:mM,armor:yM};function Hr(i,{faction:e="player",variant:t=0,merged:n=!1,whole:s=!1}={}){let r=new vt;r.name="tank";let a=oM(e,t),o=new Map,l=new Map;for(let c of i.parts){let h=Ze[c.partId];if(!h)continue;let u=new vt;u.name=c.id,u.userData.partId=c.id,u.userData.partRole=h.role,u.userData.partName=h.name,u.userData.partSize=h.size,u.position.set(...c.position),u.rotation.y=c.yaw,(vM[h.role]||(h.role==="weapon"?{cannon:Jp,rapid:gM,bomb:_M,mortar:xM}[c.partId]||Jp:(f,m)=>Se(f,m.hullDark,h.size,[0,0,0])))(u,a,{part:h,item:c,blueprint:i}),n&&!s&&cM(u),r.add(u),o.set(c.id,u),l.set(h.role,u)}return s&&hM(r),r.userData.parts=s?new Map:o,r.userData.byRole=s?new Map:l,r.userData.materials=a,r.userData.faction=e,r}var Gr=13,_n=-10,Fn=190;function Os(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Tc(i,e,t=[1,1]){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=i,n.height=i;let s=n.getContext("2d");if(!s)return null;e(s,i);let r=new yr(n);return r.wrapS=r.wrapT=oi,r.repeat.set(...t),r.colorSpace=Ft,r.anisotropy=4,r}function nm(i,e,t,n,s){let r=Os(s);i.fillStyle=t,i.fillRect(0,0,e,e);for(let[a,o,l,c]of n){i.fillStyle=a;for(let h=0;h<o;h++){let u=r()*e,d=r()*e,f=l+r()*(c-l);i.beginPath(),i.arc(u,d,f,0,Math.PI*2),i.fill()}}}function MM(){return Tc(256,(i,e)=>{nm(i,e,"#5f5a41",[["#6b6549",160,3,12],["#514c38",140,2,10],["#736a4d",90,1,5]],11);let t=Os(23);i.strokeStyle="#4c4834",i.lineWidth=1;for(let n=0;n<26;n++){i.beginPath();let s=t()*e,r=t()*e;i.moveTo(s,r);for(let a=0;a<5;a++)s+=(t()-.5)*26,r+=(t()-.5)*26,i.lineTo(s,r);i.stroke()}},[48,55])}function SM(){return Tc(256,(i,e)=>{nm(i,e,"#343735",[["#3d413c",200,1,5],["#292c29",180,1,6],["#484c45",60,1,3]],41);let t=Os(53);i.strokeStyle="#242723",i.lineWidth=1.4;for(let n=0;n<10;n++){i.beginPath();let s=t()*e,r=t()*e;i.moveTo(s,r);for(let a=0;a<4;a++)s+=(t()-.5)*40,r+=t()*24,i.lineTo(s,r);i.stroke()}},[2,26])}function bM(){return Tc(256,(i,e)=>{let t=i.createLinearGradient(0,0,0,e);t.addColorStop(0,"#4b6f86"),t.addColorStop(.42,"#8aa6ad"),t.addColorStop(.68,"#c4c9b6"),t.addColorStop(1,"#e0c9a2"),i.fillStyle=t,i.fillRect(0,0,e,e)})}function wu(){return Tc(128,(i,e)=>{let t=i.createRadialGradient(e/2,e/2,2,e/2,e/2,e/2);t.addColorStop(0,"rgba(230,230,225,.9)"),t.addColorStop(.45,"rgba(150,150,145,.35)"),t.addColorStop(1,"rgba(90,90,90,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)})}function wc(i,e="#d9e6c8",t=""){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=512,n.height=128;let s=n.getContext("2d");s.fillStyle="rgba(10,18,20,.72)",s.strokeStyle=e,s.lineWidth=4,s.beginPath(),s.roundRect(6,24,500,80,16),s.fill(),s.stroke(),s.fillStyle=e,s.font="bold 40px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,256,t?54:64),t&&(s.font="24px system-ui, sans-serif",s.fillStyle="#a9bdb4",s.fillText(t,256,86));let r=new yr(n);r.colorSpace=Ft;let a=new ga(new gr({map:r,transparent:!0,depthWrite:!1,depthTest:!0}));return a.scale.set(6,1.5,1),a}function Us(i,e,t,n){let s=new Li(e,t,n.length),r=new Je,a=new an,o=new R,l=new R;return n.forEach((c,h)=>{o.set(...c.position),a.setFromEuler(new Gn(...c.rotation||[0,0,0])),l.set(...c.scale||[1,1,1]),s.setMatrixAt(h,r.compose(o,a,l))}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1,i.add(s),s}function Eu(i,e,t,n,s=.45){let r=new hi(t*.82,t,40),a=new Ut({color:n,transparent:!0,opacity:s,depthWrite:!1,side:Zt}),o=new Ue(r,a);return o.rotation.x=-Math.PI/2,o.position.set(e[0],.035,e[2]),i.add(o),o}function EM(i){let e=bM(),t=new ts(420,24,16),n=e?new Ut({map:e,side:Kt,fog:!1,depthWrite:!1}):new Ut({color:"#9fb4b4",side:Kt,fog:!1,depthWrite:!1}),s=new Ue(t,n);s.name="sky",i.add(s);let r=new Ke({color:"#6a746c",roughness:1,flatShading:!0}),a=Os(7),o=[];for(let l=0;l<22;l++){let c=l/22*Math.PI*2,h=250+a()*40,u=12+a()*22;o.push({position:[Math.cos(c)*h,u/2-4,85+Math.sin(c)*h],rotation:[0,a()*Math.PI,0],scale:[18+a()*16,u,18+a()*16]})}Us(i,new vr(1,1,5),r,o)}function wM(i){let e=MM(),t=new Ke({map:e||null,color:e?"#d8d2bc":"#5f5a41",roughness:.96,metalness:0}),n=new Ue(new Mn(560,640),t);n.rotation.x=-Math.PI/2,n.position.set(0,-.02,85),n.receiveShadow=!0,n.name="ground",i.add(n);let s=SM(),r=new Ke({map:s||null,color:s?"#ffffff":"#3c3f3c",roughness:.92,metalness:.05}),a=new Ue(new Mn(Gr,Fn-_n),r);a.rotation.x=-Math.PI/2,a.position.set(0,.01,(Fn+_n)/2),a.receiveShadow=!0,a.name="road",i.add(a);let o=new Ke({color:"#6a6148",roughness:1});for(let c of[-1,1]){let h=new Ue(new Mn(2.4,Fn-_n),o);h.rotation.x=-Math.PI/2,h.position.set(c*(Gr/2+1.2),.005,(Fn+_n)/2),h.receiveShadow=!0,i.add(h);let u=new Ue(new pt(.16,.02,Fn-_n-6),new Ke({color:"#cfc9a8",roughness:.8}));u.position.set(c*(Gr/2-.5),.03,(Fn+_n)/2),u.receiveShadow=!0,i.add(u);let d=new Ue(new Mn(.7,Fn-_n-8),new Ut({color:"#2c2f2c",transparent:!0,opacity:.18,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(c*1.7,.02,(Fn+_n)/2),i.add(d)}let l=new Ke({color:"#d8d2b2",roughness:.8});for(let c=_n+6;c<Fn-4;c+=7){let h=new Ue(new pt(.2,.02,3),l);h.position.set(0,.03,c),h.receiveShadow=!0,i.add(h)}}function TM(i){let e=Os(97),t=[],n=[],s=[];for(let o=0;o<70;o++){let c=(e()<.5?-1:1)*(8+e()*22),h=_n+e()*(Fn-_n),u=.35+e()*1.5;t.push({position:[c,u*.35,h],rotation:[e()*3,e()*3,e()*3],scale:[u,u*(.5+e()*.6),u*(.7+e()*.6)]})}for(let o=0;o<44;o++){let l=e()<.5?-1:1;n.push({position:[l*(7.6+e()*12),.3,_n+e()*(Fn-_n)],rotation:[0,e()*3,0],scale:[.5+e(),.6+e()*.8,.5+e()]})}for(let o=0;o<26;o++){let l=e()<.5?-1:1;s.push({position:[l*(7.5+e()*2.5),.35,120+e()*55],rotation:[0,e()*1.6,0],scale:[.8+e()*.5,.7+e()*.5,.8+e()*.5]})}Us(i,new Ea(.5,0),new Ke({color:"#6b6656",roughness:.95,flatShading:!0}),t),Us(i,new Ua(.45,0),new Ke({color:"#4f5b3c",roughness:1,flatShading:!0}),n),Us(i,new pt(.9,.7,.9),new Ke({color:"#7c6a45",roughness:.9}),s);let r=[],a=[];for(let o=_n+10;o<Fn;o+=20)for(let l of[-1,1])r.push({position:[l*(Gr/2+.9),.5,o]}),a.push({position:[l*(Gr/2+.9),1.04,o]});Us(i,new pt(.12,1,.12),new Ke({color:"#4a4a42",roughness:.8}),r),Us(i,new pt(.16,.16,.16),new Ke({color:"#e8d58a",emissive:"#8a6a1e",emissiveIntensity:.5,roughness:.5}),a);for(let[o,l]of[[-10.5,92],[10.5,146]]){let c=new vt,h=new Ke({color:"#5b5a4d",roughness:.85,metalness:.2});for(let x of[-1.1,1.1])for(let p of[-1.1,1.1]){let g=new Ue(new pt(.18,6.4,.18),h);g.position.set(x,3.2,p),g.castShadow=!0,c.add(g)}let u=new Ue(new pt(2.8,.2,2.8),h);u.position.y=6.3,u.castShadow=!0,c.add(u);let d=new Ue(new pt(2.4,1.6,2.4),new Ke({color:"#4c5147",roughness:.9}));d.position.y=7.2,d.castShadow=!0,c.add(d);let f=new Ue(new vr(2.1,.8,4),new Ke({color:"#3f463d",roughness:.9,flatShading:!0}));f.position.y=8.4,f.rotation.y=Math.PI/4,f.castShadow=!0,c.add(f);let m=new Ue(new pt(1.6,.3,.06),new Ke({color:"#161d1c"}));m.position.set(0,7.35,1.22),c.add(m),c.position.set(o,0,l),i.add(c)}}var AM={wreck:"#5a5044",sandbag:"#8b7f5c",berm:"#6d6247",ammo:"#6b5a3a",crate:"#7c6a45",rock:"#6b6656"};function RM(i){let[e,t,n]=i.size,[s,r,a]=i.position,o=[],l=(c,h,u=[0,0,0])=>o.push({position:c,scale:h,rotation:u});if(i.kind==="sandbag"){let c=Math.max(2,Math.round(e/.66)),h=Math.max(1,Math.round(t/.3)),u=Math.max(1,Math.round(n/.4)),d=e/c,f=t/h,m=n/u;for(let x=0;x<h;x++)for(let p=0;p<c;p++)for(let g=0;g<u;g++)l([s-e/2+d*(p+.5)+(x%2?d*.16:0),r-t/2+f*(x+.5),a-n/2+m*(g+.5)],[d*.92,f*.86,m*.9],[0,(x+p)%2?.16:-.12,0])}else if(i.kind==="berm"){l([s,r-t*.12,a],[e,t*.76,n]),l([s,r+t*.34,a],[e*.98,t*.3,n*.66],[.05,0,0]);let c=Math.max(3,Math.round(e/1.6));for(let h=0;h<c;h++)l([s-e/2+(h+.5)*(e/c),r+t*.46,a+(h%2?.45:-.45)],[e/c*.9,t*.16,n*.3],[0,h*.6,0])}else if(i.kind==="wreck")l([s,r,a],[e*.72,t,n*.8],[.04,.12,.05]),l([s+e*.22,r*.55,a+n*.18],[e*.5,t*.9,n*.55],[0,-.5,.12]),l([s-e*.24,r*.5,a-n*.2],[e*.4,t*.85,n*.5],[0,.4,-.08]);else if(i.kind==="ammo"){for(let c=0;c<3;c++)l([s-.5+c*.5,r-t*.28,a],[.62,.34,.62],[0,c*.3,0]);l([s,r+t*.18,a],[e*.8,t*.3,n*.8],[0,.2,0])}else l([s,r,a],[e,t,n],[0,.08,0]);return o}function CM(i,e){let t=new Map;for(let n of e.map?.cover||[]){if(!Array.isArray(n.size)||!Array.isArray(n.position))continue;let s=t.get(n.kind)||[];s.push(...RM(n)),t.set(n.kind,s)}for(let[n,s]of t){if(!s.length)continue;let r=new Ke({color:AM[n]||"#6b6656",roughness:.96,metalness:.05,flatShading:!0});Us(i,new pt(1,1,1),r,s).name=`cover-${n}`}}function IM(i,e){let t={mud:"#463b28",rubble:"#7b776b"};for(let n of e.map?.zones||[]){let[s,r,a]=n.position,[o,l]=n.size,c=new Ue(new Mn(o,l),new Ke({color:t[n.kind]||"#5f5a41",roughness:1,transparent:!0,opacity:.72}));c.rotation.x=-Math.PI/2,c.position.set(s,r+.025,a),c.receiveShadow=!0,c.name=`zone-${n.id}`,i.add(c)}}function PM(i,e){let t=e.level.base,n=e.baseDestroyed,[s,,r]=t.position,a=new vt;a.name="enemy-base";let o=new Ue(new Mn(34,26),new Ke({color:"#5c5b50",roughness:.95}));o.rotation.x=-Math.PI/2,o.position.set(0,.02,2),o.receiveShadow=!0,a.add(o);let l=new Ke({color:n?"#4a453c":"#6c6654",roughness:.92,flatShading:!0}),c=new Ke({color:n?"#5a3b2c":"#8a7a4e",roughness:.8,metalness:.25}),h=(S,_,b=[0,0,0])=>{let P=new Ue(new pt(...S),l);return P.position.set(..._),P.rotation.set(...b),P.castShadow=!0,P.receiveShadow=!0,a.add(P),P};h([10,2.6,.8],[-11,1.3,-6]),h([10,2.6,.8],[11,1.3,-6]),h([.8,2.6,20],[-16,1.3,4]),h([.8,2.6,20],[16,1.3,4]),h([33,2.6,.8],[0,1.3,14]);for(let S of[-1,1]){let _=h([1.4,4.2,1.4],[S*6.4,2.1,-6]);_.material=c}h([14.2,.7,1.2],[0,4.4,-6]).material=c;for(let S=0;S<13;S++){let _=new Ue(new pt(.6,.34,.06),new Ke({color:S%2?"#d8c07a":"#2b2b26",roughness:.7}));_.position.set(-6+S*1,3.5,-5.36),a.add(_)}let u=new vt,d=new Ue(new pt(10,3.4,7),l);d.position.y=1.7,d.castShadow=!0,d.receiveShadow=!0,u.add(d);let f=new es([new oe(-5.6,0),new oe(5.6,0),new oe(4.4,1.1),new oe(-4.4,1.1)]),m=new bs(f,{depth:7.6,bevelEnabled:!1});m.translate(0,0,-3.8);let x=new Ue(m,l);x.position.y=4.2,x.castShadow=!0,u.add(x);let p=new Ue(new pt(6,.5,.08),new Ke({color:"#111716"}));p.position.set(0,2.2,3.53),u.add(p),u.position.set(0,0,6),a.add(u);let g=new Ue(new Nn(.08,.1,8,8),new Ke({color:"#8c8c80",metalness:.6,roughness:.4}));g.position.set(-9,4,9),g.castShadow=!0,a.add(g);let v=new Ue(new Mn(3,1.7,14,6),new Ke({color:n?"#4a3a32":"#a5432f",side:Zt,roughness:.9}));v.position.set(-7.4,7.1,9),a.add(v);let y=new vt,M=new Ue(new Nn(1.1,1.1,.12,16),new Ke({color:"#9aa39a",metalness:.5,roughness:.5,flatShading:!0}));M.rotation.x=Math.PI/2.4,M.castShadow=!0,y.add(M);let T=new Ue(new Nn(.12,.16,3.4,8),new Ke({color:"#5a5f55",metalness:.5,roughness:.5}));T.position.y=-1.6,y.add(T),y.position.set(9,5.4,6),a.add(y);for(let S=0;S<5;S++){let _=new Ue(new Nn(.4,.4,1.1,10),new Ke({color:S%2?"#5f6a4a":"#7a5c3a",roughness:.85,metalness:.2}));_.position.set(-12+S%3*.9,.55,10+Math.floor(S/3)*.9),_.castShadow=!0,a.add(_)}for(let S of[-1,1]){let _=new Ue(new pt(.9,5,.9),l);_.position.set(S*14,2.5,-2),_.castShadow=!0,a.add(_);let b=new Ue(new pt(1.4,.8,.8),new Ke({color:"#d9d2a8",emissive:"#ffd27a",emissiveIntensity:n?0:.9,roughness:.5}));b.position.set(S*14,5.2,-2),a.add(b)}return a.position.set(s,0,r-2),i.add(a),{compound:a,flag:v,radar:y,destroyed:n}}function Ac(i,e,{color:t="#8f8a80",count:n=26,size:s=3.2,speed:r=1.6,map:a=null}={}){let o=new Pt,l=new Float32Array(n*3),c=new Float32Array(n),h=Os(Math.round(e[0]*13+e[2]*7)+3);for(let f=0;f<n;f++)l[f*3]=(h()-.5)*1.4,l[f*3+1]=h()*6,l[f*3+2]=(h()-.5)*1.4,c[f]=h();o.setAttribute("position",new Wt(l,3));let u=new Di({map:a,color:t,size:s,transparent:!0,opacity:.55,depthWrite:!1,sizeAttenuation:!0}),d=new Qi(o,u);return d.position.set(...e),i.add(d),f=>{let m=o.attributes.position.array;for(let x=0;x<n;x++)m[x*3+1]+=f*r*(.6+c[x]*.8),m[x*3+1]>7&&(m[x*3+1]=0,m[x*3]=(c[x]-.5)*1.4);o.attributes.position.needsUpdate=!0}}function LM(i){let t=new Pt,n=new Float32Array(540),s=Os(311);for(let o=0;o<180;o++)n[o*3]=(s()-.5)*80,n[o*3+1]=.4+s()*9,n[o*3+2]=_n+s()*(Fn-_n);t.setAttribute("position",new Wt(n,3));let r=new Di({color:"#e8dcc0",size:.09,transparent:!0,opacity:.5,depthWrite:!1}),a=new Qi(t,r);return i.add(a),o=>{let l=t.attributes.position.array;for(let c=0;c<180;c++)l[c*3]+=o*.35,l[c*3]>40&&(l[c*3]=-40),l[c*3+1]+=Math.sin(c+performance.now()*2e-4)*o*.05;t.attributes.position.needsUpdate=!0}}function DM(i){let e=i.userData.byRole.get("turret")||null,t=i.userData.byRole.get("weapon")||null,n=new vt;return n.name="gun-pivot",t&&(e?(n.position.set(0,.05,1.45),e.add(n)):(n.position.copy(t.position),i.add(n)),i.updateMatrixWorld(!0),n.attach(t),i.updateMatrixWorld(!0)),{turret:e,weapon:t,pivot:n,hasTurret:!!e}}function NM(i,e,t,n,s,{combat:r=!1}={}){let a=e.level,o=a.enemyTemplates||{},l={player:null,enemies:new Map},c=Hr(e.tank.blueprint,{faction:"player",merged:!0,whole:!r});c.position.set(a.playerSpawn[0],0,a.playerSpawn[2]),c.name="player-tank",i.add(c),r&&(l.player={object:c,...DM(c)}),Eu(i,a.playerSpawn,2.4,"#b9d38f",.5),t.set("player",{position:new R(a.playerSpawn[0],1.6,a.playerSpawn[2]),radius:4.2,label:"\u73A9\u5BB6\u5766\u514B",view:{distance:13.5,height:3.4}}),a.enemies.forEach((u,d)=>{let f=e.defeatedEnemies.includes(u.id),x=o[u.templateId]?.blueprint||e.tank.blueprint,p=u.behavior==="guard",g=Math.PI+(u.behavior==="flank-left"?-.55:u.behavior==="flank-right"?.55:0);if(f){let v=Hr(x,{faction:"wreck",merged:!0}),y=v.userData.byRole.get("turret"),M=v.userData.byRole.get("weapon");y&&(y.position.x+=.8,y.position.y-=.1,y.rotation.z=.22,y.rotation.y+=.6),M&&(M.visible=!1),v.rotation.z=.05,v.position.set(u.position[0],0,u.position[2]),v.rotation.y=g,i.add(v),Eu(i,u.position,3,"#6b3a2a",.35),n.push(Ac(i,[u.position[0],.4,u.position[2]],{count:20,size:2.8,map:s}));let T=wc("\u5DF2\u6467\u6BC1 \xB7 "+(d===3?"\u7EC8\u70B9\u5B88\u536B":`\u9014\u4E2D\u654C\u5766 ${d+1}`),"#a9846a");T&&(T.scale.set(4.2,1.05,1),T.position.set(u.position[0],4.4,u.position[2]),i.add(T))}else{let v=Hr(x,{faction:p?"guard":"enemy",variant:d%3,merged:!0,whole:!0});v.position.set(u.position[0],0,u.position[2]),v.rotation.y=g,v.name=`enemy-${u.id}`,i.add(v),r&&l.enemies.set(u.id,v),Eu(i,u.position,3,p?"#c24a32":"#b4543a",.5);let y=["\u6B63\u9762\u5BF9\u6297","\u5DE6\u4FA7\u5077\u88AD","\u53F3\u4FA7\u5077\u88AD","\u57FA\u5730\u5B88\u536B"],M=wc(d===3?"\u7EC8\u70B9\u5B88\u536B":`\u9014\u4E2D\u654C\u5766 ${d+1}`,p?"#e0896f":"#e2a184",y[d]);if(M&&(M.scale.set(4.4,1.1,1),M.position.set(u.position[0],5.2,u.position[2]),i.add(M)),!r){let T=v.rotation.y;n.push(()=>{v.rotation.y=T+Math.sin(performance.now()*35e-5+d)*.04})}t.set(u.id,{position:new R(u.position[0],1.6,u.position[2]),radius:4.5,label:y[d],view:{distance:11,height:4.2}})}}),t.set("base",{position:new R(a.base.position[0],2.4,a.base.position[2]),radius:14,label:"\u654C\u65B9\u57FA\u5730",view:{distance:46,height:22}}),t.set("overview",{position:new R(0,6,82),radius:105,label:"\u7B2C\u4E00\u5173\u5168\u666F",view:{distance:215,height:145,azimuth:-1}});let h=wc("\u654C\u65B9\u57FA\u5730","#e8d08a","\u9700\u6467\u6BC1");return h&&(h.scale.set(5,1.25,1),h.position.set(a.base.position[0]+9,10,a.base.position[2]),i.add(h)),l}function UM(i,e){let t=new Ut({color:"#d8b06a",transparent:!0,opacity:.3,depthWrite:!1});for(let n of e.enemies){let s=new Ue(new pt(Gr-1,.02,.3),t);s.position.set(0,.04,n.triggerZ),i.add(s);let r=wc(`\u89E6\u53D1 ${n.triggerZ} m`,"#d8c58c");r&&(r.scale.set(3.6,.9,1),r.position.set(7.2,1.4,n.triggerZ),i.add(r))}}function im(i,{showLabels:e=!0,combat:t=!1}={}){let n=new vt;n.name="level-01";let s=[],r=new Map,a=i.baseDestroyed||i.defeatedEnemies.length?wu():null;EM(n),wM(n),TM(n),CM(n,i.level),IM(n,i.level);let o=PM(n,i);if(o.destroyed)s.push(Ac(n,[0,2,174],{color:"#6b625a",count:40,size:5,speed:2.2,map:a}));else{let c=o.radar.rotation.y;if(s.push(()=>{o.radar.rotation.y=c+performance.now()*6e-4}),o.flag){let h=o.flag.geometry.attributes.position;s.push(()=>{let u=performance.now()*.0022;for(let d=0;d<h.count;d++){let f=h.getX(d);h.setZ(d,Math.sin(f*1.4+u)*.22*(f/3+.5))}h.needsUpdate=!0,o.flag.geometry.computeVertexNormals()})}}let l=NM(n,i,r,s,a,{combat:t});return l.base=o.compound,UM(n,i.level),s.push(LM(n)),e||n.traverse(c=>{c.isSprite&&(c.visible=!1)}),n.userData.focus=r,n.userData.units=l,{group:n,focus:r,units:l,update(c){for(let h of s)h(c)}}}function OM(i){let e=new Ue(new Nn(5.6,5.9,.12,48),new Ke({color:"#26343a",roughness:.72,metalness:.35}));e.position.y=-.06,e.receiveShadow=!0,i.add(e);let t=new Ue(new hi(5,5.18,64),new Ut({color:"#b7ce92",transparent:!0,opacity:.55,side:Zt}));t.rotation.x=-Math.PI/2,t.position.y=.006,i.add(t);for(let n=0;n<12;n++){let s=n/12*Math.PI*2,r=new Ue(new pt(.06,.01,.5),new Ut({color:n%3===0?"#d7e8ac":"#7f9c86"}));r.position.set(Math.cos(s)*5.5,.007,Math.sin(s)*5.5),r.rotation.y=-s,i.add(r)}}function sm(i,e){let t=new vt;t.name="workshop",OM(t);let n=Hr(i,{faction:"player",merged:!0});return n.userData.selectedId=e||null,t.add(n),t.userData.tank=n,t}function rm(i,{combat:e=!1}={}){return im(i,{combat:e})}function am(i){let e=new Map,t=new Map,n=i.clone();return om(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function om(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)om(i.children[n],e.children[n],t)}var Rc=class extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Lu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Cc(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cc(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new qu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ki.extractUrlBase(e);a=ki.resolveURL(c,this.path)}else a=ki.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new wr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dm){try{a[ft.KHR_BINARY_GLTF]=new Yu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ed(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ft.KHR_MATERIALS_UNLIT:a[u]=new Iu;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[u]=new $u(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[u]=new Ku;break;case ft.KHR_MESH_QUANTIZATION:a[u]=new Zu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function FM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function zt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Cu=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new He(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],vn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new As(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ws(h),c.distance=u;break;case"spot":c=new Va(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Iu=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Ut}extendParams(e,t,n){let s=[];e.color=new He(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],vn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(s)}},Pu=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Lu=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},Du=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Nu=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Uu=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],vn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ft)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Fu=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Bu=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(r[0],r[1],r[2],vn),Promise.all(s)}},ku=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},zu=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(r[0],r[1],r[2],vn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ft)),Promise.all(s)}},Hu=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Gu=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return zt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Vu=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Wu=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Xu=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Cc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},qu=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Xn.TRIANGLES&&c.mode!==Xn.TRIANGLE_STRIP&&c.mode!==Xn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let x=new Je,p=new R,g=new an,v=new R(1,1,1),y=new Li(m.geometry,m.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,T),l.SCALE&&v.fromBufferAttribute(l.SCALE,T),y.setMatrixAt(T,x.compose(p,g,v));let M=null;for(let T in l)if(T==="_COLOR_0"){let S=l[T];y.instanceColor=new Pi(S.array,S.itemSize,S.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(M===null){let _=y.geometry;M=new Pt,M.name=_.name;for(let b in _.attributes)M.setAttribute(b,_.attributes[b]);for(let b in _.morphAttributes)M.morphAttributes[b]=_.morphAttributes[b];_.index!==null&&M.setIndex(_.index),M.morphTargetsRelative=_.morphTargetsRelative;for(let b of _.groups)M.addGroup(b.start,b.count,b.materialIndex);_.boundingBox!==null&&(M.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(M.boundingSphere=_.boundingSphere.clone()),M.drawRange.start=_.drawRange.start,M.drawRange.count=_.drawRange.count,M.userData=Object.assign({},_.userData),y.geometry=M}let S=l[T];M.setAttribute(T,new Pi(S.array,S.itemSize,S.normalized))}It.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},dm="glTF",uo=12,lm={JSON:1313821514,BIN:5130562},Yu=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-uo,r=new DataView(e,uo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===lm.JSON){let c=new Uint8Array(e,uo+a,o);this.content=n.decode(c)}else if(l===lm.BIN){let c=uo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$u=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=ju[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=ju[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Vr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],p=l[m];p!==void 0&&(x.normalized=p)}u(f)},o,c,vn,d)})})}},Ku=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Zu=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},Ic=class extends di{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,p=-2*f+3*d,g=f-d,v=1-p,y=g-d+u;for(let M=0;M!==o;M++){let T=a[x+M+o],S=a[x+M+l]*h,_=a[m+M+o],b=a[m+M]*h;r[M]=v*T+y*S+p*_+g*b}return r}},BM=new an,Ju=class extends Ic{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return BM.fromArray(r).normalize().toArray(r),r}},Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cm={9728:Xt,9729:jt,9984:Rl,9985:Lr,9986:Ls,9987:Vn},hm={33071:zn,33648:cr,10497:oi},Tu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ju={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kM={CUBICSPLINE:void 0,LINEAR:_s,STEP:gs},Au={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),i.DefaultMaterial}function Fs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function GM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VM(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ru(t.attributes):e=i.indices+":"+Ru(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ru(i.targets[n]);return e}function Ru(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Qu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var XM=new Je,ed=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new FM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new za(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Wa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Fs(r,o,s),vi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ki.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Tu[s.type],o=Vr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Wt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Tu[s.type],c=Vr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,p;if(f&&f!==u){let g=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,y=t.cache.get(v);y||(x=new c(o,g*f,s.count*f/h),y=new vs(x,f/h),t.cache.add(v,y)),p=new Ji(y,l,d%f/h,m)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),p=new Wt(x,l,m);if(s.sparse!==void 0){let g=Tu.SCALAR,v=Vr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,T=new v(a[1],y,s.sparse.count*g),S=new c(a[2],M,s.sparse.count*l);o!==null&&(p=new Wt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,b=T.length;_<b;_++){let P=T[_];if(p.setX(P,S[_*l]),l>=2&&p.setY(P,S[_*l+1]),l>=3&&p.setZ(P,S[_*l+2]),l>=4&&p.setW(P,S[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=cm[d.magFilter]||jt,h.minFilter=cm[d.minFilter]||Vn,h.wrapS=hm[d.wrapS]||oi,h.wrapT=hm[d.wrapT]||oi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xt&&h.minFilter!==jt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,m){t.parse(d,f,m)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,m){let x=f;t.isImageBitmapLoader===!0&&(x=function(p){let g=new Qt(p);g.needsUpdate=!0,f(g)}),t.load(ki.resolveURL(d,r.path),x,void 0,m)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),vi(d,a),d.userData.mimeType=a.mimeType||WM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Di,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new jn,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ke}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ft.KHR_MATERIALS_UNLIT]){let u=s[ft.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],vn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Zt);let h=r.alphaMode||Au.OPAQUE;if(h===Au.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Au.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ut&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ut&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ut){let u=r.emissiveFactor;o.emissive=new He().setRGB(u[0],u[1],u[2],vn)}return r.emissiveTexture!==void 0&&a!==Ut&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),vi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Fs(s,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return um(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=VM(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=um(new Pt,c,t),c.mode===Xn.TRIANGLE_STRIP?d=d.then(f=>Su(f,to)):c.mode===Xn.TRIANGLE_FAN&&(d=d.then(f=>Su(f,Nr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?zM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],p=a[f],g,v=c[f];if(p.mode===Xn.TRIANGLES||p.mode===Xn.TRIANGLE_STRIP||p.mode===Xn.TRIANGLE_FAN||p.mode===void 0){let y=r.isSkinnedMesh===!0,M=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");y&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=y&&M?new _a(x,v):new Ue(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===Xn.LINES)g=new ci(x,v);else if(p.mode===Xn.LINE_STRIP)g=new Ms(x,v);else if(p.mode===Xn.LINE_LOOP)g=new ya(x,v);else if(p.mode===Xn.POINTS)g=new Qi(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&GM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),vi(g,r),p.extensions&&Fs(s,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Fs(s,u[0],r),u[0];let d=new vt;r.extensions&&Fs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(An.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ts(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xa(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],x=f.target,p=x.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],p=u[4],g=[];for(let y=0,M=d.length;y<M;y++){let T=d[y],S=f[y],_=m[y],b=x[y],P=p[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let C=n._createAnimationTracks(T,S,_,b,P);if(C)for(let N=0;N<C.length;N++)g.push(C[N])}let v=new ka(r,void 0,g);return vi(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,XM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new _r:c.length>1?h=new vt:c.length===1?h=c[0]:h=new It,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),vi(h,r),r.extensions&&Fs(n,h,r),r.matrix!==void 0){let u=new Je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new vt;n.name&&(r.name=s.createUniqueName(n.name)),vi(r,n),n.extensions&&Fs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(am(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof mn||d instanceof Qt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}os[r.path]===os.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(os[r.path]){case os.weights:h=Oi;break;case os.rotation:h=Fi;break;case os.translation:case os.scale:h=ns;break;default:n.itemSize===1?h=Oi:h=ns;break}let u=s.interpolation!==void 0?kM[s.interpolation]:_s,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let x=new h(l[f]+"."+os[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Qu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Fi?Ju:Ic;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function qM(i,e,t){let n=e.attributes,s=new on;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let h=Qu(Vr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=Qu(Vr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new En;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function um(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=ju[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return dt.workingColorSpace!==vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),vi(i,e),qM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?HM(i,e.targets,t):i})}async function fm(i){if(!/\.glb$/i.test(i.name))throw new Error("\u8BF7\u9009\u62E9 .glb \u683C\u5F0F\u7684\u6A21\u578B\u3002");if(i.size>64*1024*1024)throw new Error("\u9884\u89C8\u6587\u4EF6\u8BF7\u63A7\u5236\u5728 64 MB \u4EE5\u5185\u3002");let e=await i.arrayBuffer();if(e.byteLength<20)throw new Error("GLB \u6587\u4EF6\u4E0D\u5B8C\u6574\u3002");let t=new DataView(e);if(t.getUint32(0,!0)!==1179937895||t.getUint32(4,!0)!==2||t.getUint32(8,!0)!==e.byteLength)throw new Error("\u9700\u8981\u6709\u6548\u7684 glTF 2.0 GLB \u6587\u4EF6\u3002");let n=t.getUint32(12,!0);if(t.getUint32(16,!0)!==1313821514||20+n>e.byteLength)throw new Error("\u6A21\u578B\u6570\u636E\u7ED3\u6784\u65E0\u6548\u3002");let s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,20,n)));if([...s.buffers||[],...s.images||[]].some(f=>f.uri&&!f.uri.startsWith("data:")))throw new Error("\u8BF7\u5C06\u8D34\u56FE\u548C\u7F13\u51B2\u6570\u636E\u5185\u5D4C\u5230 GLB \u540E\u518D\u5BFC\u51FA\u3002");if((s.extensionsRequired||[]).some(f=>/draco|basisu|meshopt/i.test(f)))throw new Error("\u5F53\u524D\u9884\u89C8\u6682\u4E0D\u652F\u6301\u538B\u7F29\u6269\u5C55\uFF0C\u8BF7\u5BFC\u51FA\u672A\u538B\u7F29 GLB\u3002");let r=new Er;r.setURLModifier(f=>{if(!/^(blob:|data:)/.test(f))throw new Error("\u6A21\u578B\u5F15\u7528\u4E86\u5916\u90E8\u8D44\u6E90\uFF0C\u8BF7\u5BFC\u51FA\u5185\u5D4C\u8D34\u56FE\u7684 GLB\u3002");return f});let a=await new Rc(r).parseAsync(e,""),o=new vt;o.add(a.scene);for(let f of a.scenes)f!==a.scene&&(f.visible=!1,o.add(f));let l=new on().setFromObject(a.scene),c=l.getSize(new R),h=Math.max(c.x,c.y,c.z);if(!Number.isFinite(h)||h<=0)throw xi(o),new Error("\u6A21\u578B\u6CA1\u6709\u53EF\u663E\u793A\u7684\u51E0\u4F55\u4F53\u3002");let u=l.getCenter(new R),d=6/h;return o.scale.setScalar(d),o.position.set(-u.x*d,-l.min.y*d+.02,-u.z*d),o.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),o}var td="#d7ee9a",YM="#8fc7d8",Pc={ok:"#9fd66b",overlap:"#e8b23c",invalid:"#e05c4a"},pm=new pt(1,1,1),nd=new wa(pm);function $M(){let i=new vt;i.name="selection-marker";let e=new ci(nd,new jn({color:td,transparent:!0,opacity:.95,depthTest:!1}));e.renderOrder=8;let t=new Ue(new hi(.92,1,48),new Ut({color:td,transparent:!0,opacity:.4,side:Zt,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.renderOrder=7,i.add(e,t),i.visible=!1,{group:i,edges:e,ring:t}}function KM(){let i=new vt;i.name="hover-marker";let e=new ci(nd,new jn({color:YM,transparent:!0,opacity:.5,depthTest:!1}));return e.renderOrder=6,i.add(e),i.visible=!1,{group:i,edges:e}}function ZM(){let i=new vt;i.name="drag-ghost";let e=new Ut({color:Pc.ok,transparent:!0,opacity:.3,depthWrite:!1}),t=new Ue(pm,e),n=new ci(nd,new jn({color:Pc.ok,transparent:!0,opacity:.9,depthWrite:!1}));return i.add(t,n),i.visible=!1,{group:i,body:t,edges:n,material:e}}function mm({runtime:i,getGrid:e,onSelect:t,onDragMove:n,onDragEnd:s,onHover:r,onPreview:a}){let o=i.renderer.domElement,l=i.host,c=new Rs,h=new oe,u=new cn,d=new R,f=$M(),m=KM(),x=ZM(),p=new Ue(new hi(.86,1,40),new Ut({color:td,transparent:!0,opacity:.35,side:Zt,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.renderOrder=7,p.visible=!1;let g=new Set;i.scene.add(f.group,m.group,x.group,p);let v=null,y=null,M=null,T=null,S=null,_=!0,b=!1;function P(J){if(!y)return null;let H=o.getBoundingClientRect();h.x=(J.clientX-H.left)/H.width*2-1,h.y=-((J.clientY-H.top)/H.height)*2+1,c.setFromCamera(h,i.camera);let $=c.intersectObject(y,!0);for(let ce of $){let Ae=ce.object;for(;Ae&&Ae!==y&&!Ae.userData.partId;)Ae=Ae.parent;if(Ae&&Ae.userData.partId)return{id:Ae.userData.partId,group:Ae,point:ce.point}}return null}function C(J){return y?.userData?.parts?.get(J)||null}function N(J,H){let $=Math.abs(Math.cos(H)),ce=Math.abs(Math.sin(H));return[(J[0]*$+J[2]*ce)/2,J[1]/2,(J[0]*ce+J[2]*$)/2]}function F(){let J=M?C(M):null;if(!J||!_){f.group.visible=!1;return}J.updateWorldMatrix(!0,!1);let H=new R;J.getWorldPosition(H);let $=J.userData.partSize;if(!$){f.group.visible=!1;return}let ce=N($,J.rotation.y);f.group.visible=!0,f.edges.position.copy(H),f.edges.scale.set(ce[0]*2+.04,ce[1]*2+.04,ce[2]*2+.04),f.ring.position.set(H.x,.03,H.z),f.ring.scale.setScalar(Math.max(ce[0],ce[2])*1.24+.4)}function X(){let J=T&&!S?C(T):null;if(!J||!_){m.group.visible=!1;return}J.updateWorldMatrix(!0,!1);let H=new R;J.getWorldPosition(H);let $=J.userData.partSize;if(!$){m.group.visible=!1;return}let ce=N($,J.rotation.y);m.group.visible=!0,m.edges.position.copy(H),m.edges.scale.set(ce[0]*2+.08,ce[1]*2+.08,ce[2]*2+.08)}function D(J){if(!S){x.group.visible=!1,p.visible=!1;return}let H=S.group.userData.partSize||[1,1,1],$=J?.position||S.position;x.group.visible=!0,x.group.position.set(...$),x.group.rotation.y=S.yaw,x.group.scale.set(H[0]+.03,H[1]+.03,H[2]+.03);let ce=Pc[J?.status]||Pc.ok;x.material.color.set(ce),x.edges.material.color.set(ce);let Ae=J?.parentId?C(J.parentId):null;if(Ae&&Ae.userData.partSize){let ge=new R;Ae.getWorldPosition(ge);let te=N(Ae.userData.partSize,Ae.rotation.y);p.visible=!0,p.position.set(ge.x,.04,ge.z),p.scale.setScalar(Math.max(te[0],te[2])*1.2+.3)}else p.visible=!1}function B(J){o.style.cursor=J}function Y(){x.group.visible=!1,p.visible=!1}function z(J){if(!_||b||J.button!==0)return;if(g.add(J.pointerId),g.size>1){q(),i.controls.enabled=!0;return}let H=P(J);if(!H)return;J.stopPropagation(),J.preventDefault(),t?.(H.id);let $=H.group;$.updateWorldMatrix(!0,!1);let ce=new R;$.getWorldPosition(ce),S={id:H.id,group:$,pointerId:J.pointerId,startX:J.clientX,startY:J.clientY,moved:!1,mode:J.shiftKey?"vertical":"horizontal",startPosition:ce.clone(),offset:new R().subVectors(ce,H.point),position:ce.clone(),yaw:$.rotation.y,preview:null},u.setFromNormalAndCoplanarPoint(new R(0,1,0),ce),i.controls.enabled=!1,m.group.visible=!1;try{o.setPointerCapture?.(J.pointerId)}catch{}B("grabbing")}function le(J){if(b)return;if(!S){if(!_||J.pointerType==="touch")return;let ce=P(J)?.id||null;B(ce?"grab":""),ce!==T&&(T=ce,X(),r?.(ce));return}if(!(J.pointerId!==S.pointerId||(J.stopPropagation(),Math.hypot(J.clientX-S.startX,J.clientY-S.startY)>3&&(S.moved=!0),!S.moved))){if(S.mode==="vertical")S.position.set(S.startPosition.x,S.startPosition.y-(J.clientY-S.startY)*.02,S.startPosition.z);else{let $=o.getBoundingClientRect();if(h.x=(J.clientX-$.left)/$.width*2-1,h.y=-((J.clientY-$.top)/$.height)*2+1,c.setFromCamera(h,i.camera),!c.ray.intersectPlane(u,d))return;S.position.set(d.x+S.offset.x,S.startPosition.y,d.z+S.offset.z)}S.position.set(An.clamp(S.position.x,-Mt.maxExtent,Mt.maxExtent),An.clamp(S.position.y,-Mt.maxExtent,Mt.maxExtent),An.clamp(S.position.z,-Mt.maxExtent,Mt.maxExtent)),S.group.position.set(S.position.x,S.position.y,S.position.z),S.group.rotation.y=S.yaw,S.group.updateWorldMatrix(!0,!0),S.preview=a?.(S.id,S.position.toArray(),S.yaw)||null,D(S.preview),F(),n?.(S.id,S.position.toArray()),i.invalidate()}}function q(){if(!S)return;let J=S;S=null,i.controls.enabled=!0,Y(),J.moved?s?.(J.id,J.position.toArray(),J.yaw):(F(),X());try{o.releasePointerCapture?.(J.pointerId)}catch{}B("")}function ie(J){g.delete(J.pointerId),S&&J.pointerId===S.pointerId?q():g.size||(i.controls.enabled=!0)}function ae(J){g.delete(J.pointerId),q(),i.controls.enabled=!0}function Pe(J){if(!S||!S.moved)return;J.preventDefault();let H=(J.shiftKey?5:15)*Math.PI/180;S.yaw+=J.deltaY>0?H:-H,S.group.rotation.y=S.yaw,S.group.updateWorldMatrix(!0,!0),S.preview=a?.(S.id,S.position.toArray(),S.yaw)||null,D(S.preview),F(),n?.(S.id,S.position.toArray()),i.invalidate()}return l.addEventListener("pointerdown",z,!0),l.addEventListener("pointermove",le,!0),l.addEventListener("pointerup",ie,!0),l.addEventListener("pointercancel",ae,!0),l.addEventListener("wheel",Pe,{passive:!1}),window.addEventListener("pointerup",ie),window.addEventListener("pointercancel",ae),{setRoot(J){v=J,y=J?.userData?.tank||null,T=null,S=null,i.controls.enabled=!0,Y(),F(),X()},setSelected(J){M=J,F()},getPart(J){return C(J)},refresh(){F(),X()},setEnabled(J){_=!!J,_?(F(),X()):(S=null,i.controls.enabled=!0,f.group.visible=!1,m.group.visible=!1,Y(),B(""))},update(){if(!f.group.visible)return;let J=performance.now()*.0035;f.edges.material.opacity=.65+Math.sin(J)*.25,f.ring.material.opacity=.28+Math.sin(J+1.2)*.12},dispose(){b=!0,l.removeEventListener("pointerdown",z,!0),l.removeEventListener("pointermove",le,!0),l.removeEventListener("pointerup",ie,!0),l.removeEventListener("pointercancel",ae,!0),l.removeEventListener("wheel",Pe),window.removeEventListener("pointerup",ie),window.removeEventListener("pointercancel",ae),f.group.removeFromParent(),f.edges.material.dispose(),f.ring.geometry.dispose(),f.ring.material.dispose(),m.group.removeFromParent(),m.edges.material.dispose(),x.group.removeFromParent(),x.material.dispose(),x.edges.material.dispose(),p.removeFromParent(),p.geometry.dispose(),p.material.dispose(),o.style.cursor="",v&&(v=null)}}}var Lt=Object.freeze({tick:1/60,hitRadius:.35,groundY:.12,aimPlaneY:1.2,maxProjectiles:48,tankHalf:[2,1.3,4.4],baseHalf:[17,3,11],minPitch:-.06,maxPitch:.32,arenaX:17.4,arenaZ:[-2,178]}),bn=(i,e,t)=>Math.min(t,Math.max(e,i)),Bs=i=>Math.atan2(Math.sin(i),Math.cos(i)),gm=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n));function _m(i,e,t=9.8,n=0){let s=Math.max(0,Number(i)||0),r=e*e;if(s<1e-4)return n>0?Math.PI/2:0;let a=r*r-t*(t*s*s+2*n*r);return a<0?Math.PI/4:Math.atan2(r-Math.sqrt(a),t*s)}function JM(i,e,t){return Math.hypot(Math.max(Math.abs(i-t.x)-t.half[0],0),Math.max(Math.abs(e-t.z)-t.half[2],0))}function jM(i,e,t){let n=e.half,s=Math.cos(e.yaw),r=Math.sin(e.yaw),a=i.x-e.position.x,o=i.z-e.position.z,l=a*s-o*r,c=a*r+o*s;return Math.abs(l)<=n[0]+t&&Math.abs(c)<=n[2]+t&&i.y>=-t&&i.y<=n[1]*2+t}function QM(i,e,t){return Math.abs(i.x-e.position.x)<=e.half[0]+t&&Math.abs(i.z-e.position.z)<=e.half[2]+t&&i.y>=e.position.y-e.half[1]-t&&i.y<=e.position.y+e.half[1]+t}function xm(i){let e=i.yaw+(i.turretYaw||0);return{x:i.position.x+Math.sin(e)*3.5,y:2.35,z:i.position.z+Math.cos(e)*3.5}}function ym(i){return{kind:i.kind,launchSpeed:i.launchSpeed,gravity:i.gravity,blastRadius:i.blastRadius,lifetime:i.lifetime}}var id=class{constructor({run:e,random:t=Math.random}){this.level=e.level,this.random=t,this.events=[],this.projectiles=[],this.elapsed=0,this.active=!0,this.outcome=null,this.shots=0,this.hits=0;let n=e.tank.assessment.stats;this.player={id:"player",levelId:null,team:"player",kind:"tank",position:{x:e.level.playerSpawn[0],y:0,z:e.level.playerSpawn[2]},yaw:0,turretYaw:0,pitch:0,pitchTarget:0,health:n.maxHealth,maxHealth:n.maxHealth,defense:n.defense,attack:n.attack,fireRate:n.fireRate,moveSpeed:n.moveSpeed,turnSpeed:n.turnSpeed,turretSpeed:n.turretSpeed??null,weapon:ym(n),reload:0,alive:!0,speed:0,engaged:!0,behavior:"player",triggerZ:-1,half:Lt.tankHalf};let s=e.level.enemyTemplates||{};this.enemies=e.level.enemies.map(r=>{let a=s[r.templateId]?.assessment?.stats||n;return{id:r.id,levelId:r.id,team:"enemy",kind:"tank",position:{x:r.position[0],y:0,z:r.position[2]},yaw:Math.PI,turretYaw:0,pitch:0,pitchTarget:0,health:a.maxHealth,maxHealth:a.maxHealth,defense:a.defense,attack:a.attack,fireRate:a.fireRate,moveSpeed:a.moveSpeed,turnSpeed:a.turnSpeed,turretSpeed:null,weapon:ym(a),reload:0,alive:!0,speed:0,engaged:!1,behavior:r.behavior,triggerZ:r.triggerZ,half:Lt.tankHalf}}),this.base={id:"base",levelId:e.level.base.id,team:"enemy",kind:"base",position:{x:e.level.base.position[0],y:Lt.baseHalf[1],z:e.level.base.position[2]+1},yaw:0,turretYaw:0,health:e.level.base.maxHealth,maxHealth:e.level.base.maxHealth,defense:12,attack:0,fireRate:0,moveSpeed:0,turnSpeed:0,turretSpeed:null,weapon:null,reload:0,alive:!0,speed:0,behavior:"base",triggerZ:0,half:Lt.baseHalf},this.units=[this.player,...this.enemies,this.base],this.cover=(e.level.map?.cover||[]).filter(r=>r.solid!==!1).map(r=>({id:r.id,kind:r.kind,x:r.position[0],z:r.position[2],half:[r.size[0]/2,r.size[1]/2,r.size[2]/2],top:r.position[1]+r.size[1]/2,explosive:r.explosive||null,health:r.explosive?40:1/0,alive:!0})),this.zones=e.level.map?.zones||[],this.playerAim={x:this.player.position.x,z:this.player.position.z+60}}get aliveEnemies(){return this.enemies.filter(e=>e.alive).length}get totalEnemies(){return this.enemies.length}zoneFactorAt(e,t){for(let n of this.zones){let[s,,r]=n.position,[a,o]=n.size;if(Math.abs(e-s)<=a/2&&Math.abs(t-r)<=o/2)return n.speedFactor??1}return 1}moveUnit(e,t,n){let s=bn(e.position.x+t,-Lt.arenaX,Lt.arenaX),r=bn(e.position.z+n,Lt.arenaZ[0],Lt.arenaZ[1]),a=e.half[0];for(let o=0;o<2;o++)for(let l of this.cover){if(!l.alive)continue;let c=s-l.x,h=r-l.z,u=Math.max(Math.abs(c)-l.half[0],0),d=Math.max(Math.abs(h)-l.half[2],0),f=Math.hypot(u,d);if(!(f>=a))if(f>1e-4){let m=Math.sign(c)*u/f,x=Math.sign(h)*d/f;s+=m*(a-f),r+=x*(a-f)}else{let m=l.half[0]+a-Math.abs(c),x=l.half[2]+a-Math.abs(h);m<x?s+=Math.sign(c||1)*m:r+=Math.sign(h||1)*x}}e.position.x=bn(s,-Lt.arenaX,Lt.arenaX),e.position.z=bn(r,Lt.arenaZ[0],Lt.arenaZ[1])}updatePlayer(e,t){let n=this.player;if(!n.alive)return;let s=bn(t.throttle||0,-1,1),r=bn(t.steer||0,-1,1),a=this.zoneFactorAt(n.position.x,n.position.z);n.speed=gm(n.speed,s*n.moveSpeed*a,s?2.6:3.4,e),Math.abs(n.speed)<.01&&(n.speed=0);let o=bn(Math.abs(n.speed)/(n.moveSpeed*.4),0,1);n.yaw=Bs(n.yaw+r*n.turnSpeed*a*(Math.sign(n.speed)||1)*(.45+.55*o)*e),this.moveUnit(n,Math.sin(n.yaw)*n.speed*e,Math.cos(n.yaw)*n.speed*e),t.aim&&(this.playerAim={x:t.aim.x,z:t.aim.z});let l=this.playerAim,c=Math.atan2(l.x-n.position.x,l.z-n.position.z);if(n.turretSpeed){let f=Bs(c-n.yaw-n.turretYaw),m=n.turretSpeed*e;n.turretYaw=Bs(n.turretYaw+bn(f,-m,m))}else{let f=Bs(c-n.yaw);n.yaw=Bs(n.yaw+bn(f,-n.turnSpeed*e,n.turnSpeed*e))}let h=xm(n),u=Math.hypot(l.x-h.x,l.z-h.z),d=l.kind==="unit"?l.y:Number.isFinite(l.y)?l.y+1.2:1.3;n.pitchTarget=bn(_m(u,n.weapon.launchSpeed,n.weapon.gravity,d-h.y),Lt.minPitch,Lt.maxPitch),n.pitch=gm(n.pitch,n.pitchTarget,8,e),n.reload=Math.max(0,n.reload-e),t.fire&&n.reload<=0&&(this.spawnProjectile(n,h,n.yaw+n.turretYaw,n.pitchTarget),n.reload=1/Math.max(n.fireRate,.2),this.shots++)}updateEnemies(e){for(let t of this.enemies){if(!t.alive)continue;let n=this.player.position.x-t.position.x,s=this.player.position.z-t.position.z,r=Math.hypot(n,s);if(!t.engaged)if(this.player.position.z>=t.triggerZ||r<=26)t.engaged=!0;else{t.reload=Math.max(0,t.reload-e);continue}let a=Math.atan2(n,s),o=Bs(a-t.yaw),l=t.turnSpeed*1.35*e;if(t.yaw=Bs(t.yaw+bn(o,-l,l)),t.behavior!=="guard"&&r>22&&Math.abs(o)<.6&&this.player.alive){let c=this.zoneFactorAt(t.position.x,t.position.z);this.moveUnit(t,Math.sin(t.yaw)*t.moveSpeed*.55*c*e,Math.cos(t.yaw)*t.moveSpeed*.55*c*e)}if(t.reload=Math.max(0,t.reload-e),Math.abs(o)<.16&&r<62&&t.reload<=0&&this.player.alive){let c=xm(t),h=bn(_m(Math.hypot(this.player.position.x-c.x,this.player.position.z-c.z),t.weapon.launchSpeed,t.weapon.gravity,Lt.aimPlaneY-c.y),Lt.minPitch,Lt.maxPitch),u=()=>this.random()-.5;this.spawnProjectile(t,c,t.yaw+u()*.14,bn(h+u()*.05,Lt.minPitch,Lt.maxPitch)),t.reload=1/Math.max(t.fireRate,.2)+.35+this.random()*.5}}}spawnProjectile(e,t,n,s){let r=e.weapon.launchSpeed,a=Math.cos(s)*r;this.projectiles.push({owner:e.id,team:e.team,position:{x:t.x,y:t.y,z:t.z},velocity:{x:Math.sin(n)*a,y:Math.sin(s)*r,z:Math.cos(n)*a},gravity:e.weapon.gravity,life:e.weapon.lifetime,damage:e.attack,blastRadius:e.weapon.blastRadius,kind:e.weapon.kind}),this.projectiles.length>Lt.maxProjectiles&&this.projectiles.shift(),this.events.push({type:"fired",owner:e.id,position:{...t},angle:n,pitch:s})}hitTest(e){let t=e.position;for(let n of this.cover)if(!(!n.alive||!n.explosive)&&!(t.y>n.top||t.y<0)&&Math.abs(t.x-n.x)<=n.half[0]+Lt.hitRadius&&Math.abs(t.z-n.z)<=n.half[2]+Lt.hitRadius)return{kind:"cover",cover:n};for(let n of this.units)if(!(!n.alive||n.team===e.team)){if(n.kind==="base"){if(QM(t,n,Lt.hitRadius))return{kind:"base",unit:n};continue}if(jM(t,n,Lt.hitRadius))return{kind:"unit",unit:n}}for(let n of this.cover)if(!(!n.alive||n.explosive)&&!(t.y>n.top||t.y<0)&&Math.abs(t.x-n.x)<=n.half[0]+Lt.hitRadius&&Math.abs(t.z-n.z)<=n.half[2]+Lt.hitRadius)return{kind:"cover",cover:n};return null}updateProjectiles(e){let t=[];for(let n of this.projectiles){n.life-=e,n.velocity.y-=n.gravity*e;let s=Math.hypot(n.velocity.x,n.velocity.y,n.velocity.z),r=Math.max(1,Math.min(10,Math.ceil(s*e/.4))),a=e/r,o=!1;for(let l=0;l<r&&!o;l++){n.position.x+=n.velocity.x*a,n.position.y+=n.velocity.y*a,n.position.z+=n.velocity.z*a;let c=this.hitTest(n);c?(this.impact(n,c),o=!0):n.position.y<=Lt.groundY&&(this.impact(n,{kind:"ground"}),o=!0)}!o&&n.life>0&&t.push(n)}this.projectiles=t}impact(e,t){let n={x:e.position.x,y:Math.max(e.position.y,0),z:e.position.z};t.kind==="unit"||t.kind==="base"?(e.team==="player"&&this.hits++,this.damageUnit(t.unit,e.damage)):t.kind==="cover"&&t.cover.explosive&&this.explodeCover(t.cover),e.blastRadius>.6&&this.blast(n,e.blastRadius,e.team,e.damage*.32,t.unit||null),this.events.push({type:"impact",position:n,radius:Math.max(e.blastRadius,.45),kind:t.kind})}blast(e,t,n,s,r){for(let a of this.units){if(!a.alive||a.team===n||a===r)continue;let o=a.kind==="base"?JM(e.x,e.z,a):Math.hypot(a.position.x-e.x,a.position.z-e.z);o>t||this.damageUnit(a,s*bn(1-o/(t+1),.25,1))}}explodeCover(e){if(!(!e.alive||!e.explosive)){e.alive=!1,this.events.push({type:"impact",position:{x:e.x,y:e.top,z:e.z},radius:e.explosive.radius*1.6,kind:"cover"});for(let t of this.units){if(!t.alive)continue;let n=Math.hypot(t.position.x-e.x,t.position.z-e.z);n>e.explosive.radius||this.damageUnit(t,e.explosive.damage*bn(1-n/e.explosive.radius,.3,1))}for(let t of this.cover)t===e||!t.alive||!t.explosive||Math.hypot(t.x-e.x,t.z-e.z)>e.explosive.radius+2||(t.health-=40,t.health<=0&&this.explodeCover(t))}}damageUnit(e,t){if(!e.alive||!(t>0))return;let n=qp(t,e.defense);e.health=Math.max(0,e.health-n),this.events.push({type:"hit",unit:e.id,damage:n}),!(e.health>0)&&(e.alive=!1,this.events.push({type:"destroyed",unit:e.id,team:e.team}),e.kind==="base"?this.events.push({type:"base-destroyed"}):e.team==="player"?this.events.push({type:"player-destroyed"}):this.events.push({type:"enemy-destroyed",id:e.levelId}))}checkOutcome(){if(this.active){if(!this.player.alive){this.finish("defeat");return}!this.base.alive&&this.enemies.every(e=>!e.alive)&&this.finish("victory")}}finish(e){this.active&&(this.active=!1,this.outcome=e,this.events.push({type:"combat-end",outcome:e}))}fixedUpdate(e,t={}){if(!this.active)return;let n=Math.min(Math.max(Number(e)||0,0),.05);n&&(this.elapsed+=n,this.updatePlayer(n,t),this.updateEnemies(n),this.updateProjectiles(n),this.checkOutcome())}takeEvents(){let e=this.events;return this.events=[],e}},eS=new Set(["enemy-destroyed","base-destroyed","player-destroyed","combat-end"]);function vm({runtime:i,run:e,scene:t,onEvent:n,onHud:s}){let r=new id({run:e}),a=i.host,o=t.units||{},l=new vt;l.name="combat-effects",t.group.add(l);let c=wu(),h=[],u=[],d=[],f=new ts(1,10,7),m=new ts(.17,8,6),x=new Ut({color:"#ffe2a6"});for(let te=0;te<32;te++){let ze=new Ue(m,x);ze.visible=!1,l.add(ze),d.push(ze)}for(let te=0;te<12;te++){let ze=new Ut({color:"#ffb457",transparent:!0,opacity:0,depthWrite:!1}),Ce=new Ue(f,ze);Ce.visible=!1,l.add(Ce),u.push({mesh:Ce,life:0,duration:.45,radius:2})}let p=new Set,g=!1,v=!1,y=!0,M=0,T=new Rs,S=new oe,_=new cn(new R(0,1,0),0),b=new R,P=new R(r.player.position.x,1.8,r.player.position.z),C=null;function N(te,ze){let Ce=a.getBoundingClientRect();if(!Ce.width||!Ce.height)return null;S.set((te-Ce.left)/Ce.width*2-1,-((ze-Ce.top)/Ce.height)*2+1),T.setFromCamera(S,i.camera);let be=[];for(let he of o.enemies?.values()||[])he.visible&&be.push(he);if(o.base?.visible&&be.push(o.base),be.length){let he=T.intersectObjects(be,!0);if(he.length)return{x:he[0].point.x,y:he[0].point.y,z:he[0].point.z,kind:"unit"}}if(T.ray.intersectPlane(_,b))return{x:b.x,y:b.y,z:b.z,kind:"ground"};let Oe=T.ray.direction,se=Math.hypot(Oe.x,Oe.z)||1;return{x:r.player.position.x+Oe.x/se*120,y:1.2,z:r.player.position.z+Oe.z/se*120,kind:"sky"}}let F=te=>{C=N(te.clientX,te.clientY)||C},X=te=>{te.button===0&&(C=N(te.clientX,te.clientY)||C,g=!0)},D=()=>{g=!1},B=te=>te&&(["INPUT","TEXTAREA","SELECT"].includes(te.tagName)||te.isContentEditable),Y=te=>{B(te.target)||(["KeyW","KeyA","KeyS","KeyD"].includes(te.code)&&(p.add(te.code),te.preventDefault()),te.code==="Space"&&(g=!0,te.preventDefault()))},z=te=>{p.delete(te.code),te.code==="Space"&&(g=!1)},le=()=>{p.clear(),g=!1};a.addEventListener("pointermove",F),a.addEventListener("pointerdown",X),window.addEventListener("pointerup",D),window.addEventListener("keydown",Y),window.addEventListener("keyup",z),window.addEventListener("blur",le),i.controls.enabled=!1,i.setKeyboardPan(!1);function q(te,ze,Ce){let be=u.find(Oe=>Oe.life<=0)||u[0];be.life=be.duration,be.radius=ze,be.mesh.position.set(te.x,Math.max(te.y,.3),te.z),be.mesh.material.color.set(Ce||"#ffb457"),be.mesh.visible=!0}function ie(te){if(te==="player"){o.player?.object&&(o.player.object.visible=!1);return}if(te==="base"){o.base&&(o.base.visible=!1);return}let ze=o.enemies?.get(te);ze&&(ze.visible=!1);let Ce=r.units.find(be=>be.id===te);Ce&&h.push(Ac(t.group,[Ce.position.x,.4,Ce.position.z],{count:18,size:2.6,map:c}))}function ae(){for(let te of r.takeEvents())te.type==="impact"?q(te.position,Math.max(1.2,te.radius*2.2),te.kind==="ground"?"#d9c08a":"#ffb457"):te.type==="fired"?q(te.position,.9,"#ffe7b8"):te.type==="destroyed"?(ie(te.unit),q(r.units.find(ze=>ze.id===te.unit)?.position||{x:0,y:1,z:0},4,"#ff9a4d")):eS.has(te.type)&&n?.(te)}function Pe(te){let ze=r.player,Ce=o.player?.object;Ce&&(Ce.position.set(ze.position.x,0,ze.position.z),Ce.rotation.y=ze.yaw,o.player.turret&&(o.player.turret.rotation.y=ze.turretYaw),o.player.pivot&&(o.player.pivot.rotation.x=-ze.pitch));for(let be of r.enemies){let Oe=o.enemies?.get(be.id);!Oe||!be.alive||(Oe.position.set(be.position.x,0,be.position.z),Oe.rotation.y=be.yaw)}for(let be=0;be<d.length;be++){let Oe=r.projectiles[be],se=d[be];if(!Oe){se.visible=!1;continue}se.visible=!0,se.position.set(Oe.position.x,Oe.position.y,Oe.position.z)}for(let be of u){if(be.life<=0){be.mesh.visible=!1;continue}be.life-=te;let Oe=1-Math.max(be.life,0)/be.duration;be.mesh.visible=!0,be.mesh.scale.setScalar(be.radius*(.35+Oe*.9)),be.mesh.material.opacity=Math.max(0,.85*(1-Oe))}for(let be=h.length-1;be>=0;be--)h[be](te)}function J(te){let ze=r.player,Ce=new R(ze.position.x-Math.sin(ze.yaw)*12.5,ze.position.y+6.2,ze.position.z-Math.cos(ze.yaw)*12.5),be=new R(ze.position.x+Math.sin(ze.yaw)*16,ze.position.y+2.2,ze.position.z+Math.cos(ze.yaw)*16),Oe=y?1:1-Math.exp(-4.5*te);i.camera.position.lerp(Ce,Oe),P.lerp(be,y?1:1-Math.exp(-6*te)),i.controls.target.copy(P),i.camera.lookAt(P),y=!1}function H(){return{active:r.active,health:r.player.health,maxHealth:r.player.maxHealth,reload:r.player.reload,reloadMax:1/Math.max(r.player.fireRate,.2),enemies:r.aliveEnemies,totalEnemies:r.totalEnemies,baseHealth:r.base.health,baseMax:r.base.maxHealth,outcome:r.outcome}}let $={fixedUpdate(te){r.fixedUpdate(te,{throttle:(p.has("KeyW")?1:0)-(p.has("KeyS")?1:0),steer:(p.has("KeyA")?1:0)-(p.has("KeyD")?1:0),aim:C,fire:g})},update(te){v||(ae(),!v&&(Pe(te),J(te),M+=te,M>.12&&(M=0,s?.(H()))))},dispose(){ge()}},ce=i.addSystem($),Ae=!1;function ge(){Ae||(Ae=!0,v=!0,ce?.(),a.removeEventListener("pointermove",F),a.removeEventListener("pointerdown",X),window.removeEventListener("pointerup",D),window.removeEventListener("keydown",Y),window.removeEventListener("keyup",z),window.removeEventListener("blur",le),l.removeFromParent(),i.controls.enabled=!0,i.invalidate())}return{sim:r,stop:ge,state:r,hud:H}}var qt=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Wr=i=>`${i}-${crypto.randomUUID()}`,Mi=(i,e,t)=>`<option value="${qt(i)}" ${i===t?"selected":""}>${qt(e)}</option>`,Ht=(i,e,t="")=>`<button type="button" data-action="${i}" ${t}>${e}</button>`,sd={terrain:"\u573A\u5730\u6A21\u578B","enemy-tank":"\u654C\u65B9\u5766\u514B","player-tank":"\u73A9\u5BB6\u5766\u514B"},rd={hull:"\u8F66\u4F53",mobility:"\u673A\u52A8",engine:"\u52A8\u529B",turret:"\u70AE\u5854",weapon:"\u6B66\u5668",armor:"\u9632\u62A4"},ad=new Set(["hull","mobility","engine","turret"]),Mm={hull:'<path d="M3 14h18l-2 4H5z"/><rect x="7" y="9" width="8" height="5" rx="1"/><path d="M15 11h5"/>',mobility:'<rect x="2.5" y="9" width="19" height="8" rx="4"/><circle cx="7" cy="13" r="2"/><circle cx="12" cy="13" r="2"/><circle cx="17" cy="13" r="2"/>',engine:'<rect x="4" y="7" width="11" height="10" rx="1"/><path d="M15 10h4v4h-4"/><path d="M7 7V4M12 7V4M7 20v-3M12 20v-3"/>',turret:'<path d="M6 17a6 6 0 0 1 12 0z"/><path d="M18 14h4"/><path d="M3 19h18"/>',weapon:'<path d="M3 12h12"/><path d="M15 9h6v6h-6z"/><path d="M5 12v5M9 12v5"/>',armor:'<path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z"/><path d="M12 8v7"/>'},tS=i=>{if(!i)return!1;let e=i.tagName;return e==="INPUT"||e==="TEXTAREA"||e==="SELECT"||i.isContentEditable},nS=i=>`<svg viewBox="0 0 24 24" aria-hidden="true">${Mm[i]||Mm.hull}</svg>`;async function Sm(i){let e=document.querySelector("#workspace"),t=document.querySelector("#report"),n=document.querySelector("#message"),s=document.querySelector("#sceneCaption"),r=document.querySelector("#sceneHud"),a=document.querySelector("#buildDock"),o=[...document.querySelectorAll("[data-camera]")],l,c,h,u=[],d="workshop",f=!1,m=!1,x=0,p=lo("infantry",Wr("draft")),g="weapon",v=!0,y=null,M=null,T=null,S="player-tank",_="",b=null,P=[],C=[],N=Mt.snapGrid,F=null,X=null,D=null,B=null,Y=null,z=null,le="",q="",ie=0,ae=!1,Pe=!1,J=!1,H=-1,$=(I,k=!1)=>{n.textContent=I,n.classList.toggle("error",k)},ce=()=>Vi(p,h.unlockedParts),Ae=async()=>{h=await c.profile(),u=await c.models.list()};function ge(){B?.stop(),B=null,Y=null,D?.(),D=null,X=null}function te(I,k,{reset:re=!1,pickable:Le=!0,hudValue:Xe=null}={}){z=k,le=`${k}:${I.id}:${I.revision}`,ge();let lt=sm(I,Le?g:null);if(i&&!i.disposed){let Cn=i.setEnvironment("workshop");i.replaceContent(lt),F?.setEnabled(Le),F?.setRoot(Le?lt:null),F?.setSelected(g),(re||Cn)&&i.resetCamera()}else xi(lt);s.textContent=k==="garage"?"\u6210\u54C1\u5766\u514B \xB7 \u5199\u5B9E\u4EE3\u7406\u6A21\u578B \xB7 \u5355\u4F4D\uFF1A\u7C73":"\u90E8\u4EF6\u4EE3\u7406\u9884\u89C8 \xB7 \u70B9\u51FB\u9009\u4E2D \xB7 \u62D6\u52A8\u79FB\u52A8 \xB7 \u62D6\u52A8\u7A7A\u767D\u65CB\u8F6C\u89C6\u89D2",he(Xe)}function ze({reset:I=!1,combatMode:k=!1}={}){if(!y)return null;z="level",ge();let re=rm(y,{combat:k});if(X=re,i&&!i.disposed){let Le=i.setEnvironment("level");i.replaceContent(re.group),F?.setEnabled(!1),F?.setRoot(null),D=i.addSystem({update:Xe=>re.update(Xe)}),!k&&(Le||I)&&Oe("player",{duration:I?.001:.9})}else xi(re.group);return le=Ce(),s.textContent=k?"\u7B2C\u4E00\u5173 \xB7 W/A/S/D \u9A7E\u9A76 \xB7 \u9F20\u6807\u7784\u51C6 \xB7 \u5DE6\u952E\u6216\u7A7A\u683C\u5F00\u706B":"\u7B2C\u4E00\u5173 \xB7 36 \xD7 180 \u7C73 \xB7 \u62D6\u52A8\u65CB\u8F6C\uFF0C\u53F3\u952E\u5E73\u79FB\uFF0C\u6EDA\u8F6E\u7F29\u653E",he(),re}function Ce(){return y?[y.status,y.baseDestroyed,y.playerDestroyed,y.defeatedEnemies.join(",")].join("|"):""}function be(I=!1){if(y){if(B?.state.active){he();return}if(!I&&z==="level"&&le===Ce()){he();return}ze({reset:I})}}function Oe(I,k={}){if(!i||!X)return!1;let re=i.focusPointById(X.focus,I,{duration:.8,...k});return re&&i.setAutoRotate(!1),re}function se(){if(!y)return;let I=y.level.enemies.filter(re=>!y.defeatedEnemies.includes(re.id));if(!I.length){$("\u6CA1\u6709\u5B58\u6D3B\u7684\u654C\u5766\u3002");return}H=(H+1)%I.length;let k=I[H];Oe(k.id),$(`\u89C6\u89D2\u5BF9\u51C6\uFF1A${k.behavior==="guard"?"\u7EC8\u70B9\u5B88\u536B":"\u9014\u4E2D\u654C\u5766"}`)}function he(I=null){if(!r)return;if(r.classList.toggle("battle",!!Y),d==="mission"&&y){if(Y){_e();return}let lt={ready:"\u51C6\u5907\u5C31\u7EEA",running:"\u68C0\u9A8C\u8FDB\u884C\u4E2D",victory:"\u80DC\u5229\u6761\u4EF6\u8FBE\u6210",defeat:"\u5931\u8D25\u6761\u4EF6\u8FBE\u6210"};r.innerHTML=`<strong>${qt(y.tank.blueprint.name)}</strong> \xB7 ${lt[y.status]} \xB7 \u654C\u5766 ${y.defeatedEnemies.length}/${y.level.enemies.length} \xB7 \u57FA\u5730${y.baseDestroyed?"\u5DF2\u6467\u6BC1":"\u5B58\u6D3B"}`;return}let k=I?.value||ce(),re=I?.name||p.name,Le=I?.parts??p.parts.length;if(!k.valid){r.innerHTML="<strong>\u7ED3\u6784\u5F85\u4FEE\u6B63</strong> \xB7 3D \u62D6\u52A8\u4ECD\u53EF\u4F7F\u7528";return}let Xe=k.metrics.size.map(lt=>lt.toFixed(1)).join(" \xD7 ");r.innerHTML=`<strong>${qt(re)}</strong> \xB7 \u8D28\u91CF ${k.metrics.mass} t \xB7 \u5C3A\u5BF8 ${Xe} m \xB7 ${Le} \u90E8\u4EF6 \xB7 ${k.weapons.length} \u6B66\u5668${k.metrics.hasTurret?" \xB7 \u70AE\u5854":""}`}function _e(){if(!r||!Y||!y)return;let I=Y,k=Math.max(0,Math.round(I.health)),re=I.reloadMax?Math.min(1,Math.max(0,1-I.reload/I.reloadMax)):1;r.innerHTML=`<strong>${qt(y.tank.blueprint.name)}</strong> \xB7 \u751F\u547D <b>${k}</b>/${Math.round(I.maxHealth)} \xB7 \u88C5\u586B ${Math.round(re*100)}% \xB7 \u654C\u5766 ${I.enemies}/${I.totalEnemies} \xB7 \u57FA\u5730 ${Math.max(0,Math.round(I.baseHealth))}/${Math.round(I.baseMax)}`}function Ne(){if(!y||y.status!=="ready"||!i||i.disposed)return!1;y=vu(y,{type:"start"});let I=ze({combatMode:!0});return I?(i.cancelCameraTween?.(),B=vm({runtime:i,run:y,scene:I,onEvent:Ge,onHud:k=>{Y=k,d==="mission"&&_e()}}),j(),$("\u6218\u6597\u5F00\u59CB\uFF1AW/A/S/D \u9A7E\u9A76\uFF0C\u9F20\u6807\u7784\u51C6\uFF0C\u5DE6\u952E\u6216\u7A7A\u683C\u5F00\u706B\u3002"),!0):!1}function Ee(){B?.stop(),B=null,Y=null,y&&(ze({reset:!1}),j())}function tt(I){if(!y||y.status!=="running")return!1;try{y=vu(y,I)}catch(k){return $(k.message,!0),!1}return y.status==="running"?j():Ee(),!0}function Ge(I){if(I.type==="combat-end"){B&&y&&y.status!=="running"&&Ee();return}tt(I)}function ut(){window.__steel3d&&(window.__steel3d.battle=()=>{if(!B)return null;let I=B.state;return{active:I.active,outcome:I.outcome,health:Math.round(I.player.health),maxHealth:I.player.maxHealth,position:[Number(I.player.position.x.toFixed(2)),Number(I.player.position.z.toFixed(2))],yaw:Number(I.player.yaw.toFixed(3)),turretYaw:Number(I.player.turretYaw.toFixed(3)),pitch:Number(I.player.pitch.toFixed(3)),enemies:I.aliveEnemies,total:I.totalEnemies,enemyHealth:I.enemies.map(k=>Math.round(k.health)),base:Math.round(I.base.health),projectiles:I.projectiles.length,shots:I.shots,hits:I.hits,status:y?.status||null}},window.__steel3d.enemyScreen=I=>{if(!i||i.disposed||!X?.units)return null;let k=y?.level.enemies?.[I],re=k?X.units.enemies.get(k.id):null;if(!re||!re.visible)return null;let Le=new R(re.position.x,1.4,re.position.z).project(i.camera);return{x:(Le.x+1)/2,y:(1-Le.y)/2,depth:Number(Le.z.toFixed(3))}})}function ot(I=ce()){let k=document.querySelector('[data-action="manufacture"]');if(k&&(k.disabled=!I.valid),!I.valid){t.innerHTML=`<p class="eyebrow">STRUCTURE CHECK</p><h2>\u9700\u8981\u8C03\u6574</h2><p class="subtle">\u89E3\u51B3\u4EE5\u4E0B\u95EE\u9898\u540E\u624D\u80FD\u5236\u9020\uFF1B3D \u4E2D\u4ECD\u53EF\u70B9\u9009\u548C\u62D6\u52A8\u3002</p><ul class="issues">${I.errors.map(lt=>`<li>${qt(lt)}</li>`).join("")}</ul>`;return}let re=I.stats,Le=[["\u751F\u547D\u503C",re.maxHealth],["\u79FB\u901F",`${re.moveSpeed} m/s`],["\u653B\u51FB\u529B",re.attack],["\u653B\u901F",`${re.fireRate} \u6B21/s`],["\u9632\u5FA1\u529B",re.defense],["\u8F66\u4F53\u8F6C\u5411",`${re.turnSpeed} rad/s`],...re.turretSpeed?[["\u70AE\u5854\u8F6C\u5411",`${re.turretSpeed} rad/s`]]:[],["\u5B50\u5F39\u521D\u901F",`${re.launchSpeed} m/s`],["\u7206\u70B8\u534A\u5F84",`${re.blastRadius} m`],...re.impactDelay?[["\u547D\u4E2D\u5EF6\u8FDF",`${re.impactDelay} s`]]:[]],Xe=I.metrics.size.map(lt=>lt.toFixed(2)).join(" \xD7 ");t.innerHTML=`<p class="eyebrow">TANK ASSESSMENT</p><h2>\u8BC4\u4F30\u62A5\u544A</h2><span class="pill">\u7ED3\u6784\u901A\u8FC7 \xB7 \u539F\u578B\u6570\u503C</span>
      <dl class="metrics">${Le.map(([lt,Cn])=>`<div><dt>${lt}</dt><dd>${Cn}</dd></div>`).join("")}</dl>
      <p class="subtle">\u8D28\u91CF ${I.metrics.mass} t \xB7 \u5C3A\u5BF8 ${Xe} m \xB7 \u7A33\u5B9A\u6027 ${Math.round(I.metrics.stability*100)}% \xB7 \u7C7B\u578B\u9002\u914D ${Math.round(I.metrics.typeFit*100)}%</p>
      <p class="subtle">${I.metrics.hasTurret?"\u70AE\u5854\u72EC\u7ACB\u7784\u51C6":"\u65E0\u70AE\u5854 \xB7 \u6B66\u5668\u968F\u8F66\u4F53"} \xB7 \u6B66\u5668 ${I.weapons.length} \u4EF6</p>
      <details><summary>\u8BA1\u7B97\u4F9D\u636E\u4E0E\u9650\u5236</summary>${Object.values(I.explanation).map(lt=>`<p class="subtle">${qt(lt)}</p>`).join("")}<p class="subtle">${qt(I.warnings.join(" "))}</p></details>`}function xt(I,k){let re=p.parts.some(Yr=>Yr.partId===I),Le=!h.unlockedParts.includes(I),Xe=ad.has(k.role),lt=p.parts.filter(Yr=>Ze[Yr.partId].role==="weapon").length,Cn=k.role==="weapon"&&lt>=Mt.maxWeapons,Bn=Xe&&re||Cn,In=Xe&&re?" \xB7 \u5DF2\u88C5":Cn?" \xB7 \u6B66\u5668\u5DF2\u6EE1":"";return`<button type="button" class="part-card ${re?"installed":""}" data-action="addPart" data-part="${I}" ${Bn?"disabled":""} title="${qt(k.name)}\uFF1A${rd[k.role]}${Le?` \xB7 \u89E3\u9501 ${k.cost} \u96F6\u4EF6`:""}${In}">
      <span class="part-icon">${nS(k.role)}</span>
      <span class="part-name">${qt(k.name)}</span>
      <span class="part-meta">${rd[k.role]} \xB7 ${k.mass} t${Le?` \xB7 \u89E3\u9501 ${k.cost}`:""}${In}</span>
    </button>`}function U(){let I=p.parts.find(Xe=>Xe.id===g),k=Object.entries(Ze).filter(([,Xe])=>Xe.types.includes(p.type)),re=v?"\u6709\u672A\u4FDD\u5B58\u4FEE\u6539":"\u8349\u7A3F\u5DF2\u4FDD\u5B58",Le=ce();e.innerHTML=`<p class="eyebrow">BUILD / DRAG / EVALUATE</p><h1>\u9020\u4E00\u8F86\u5766\u514B</h1>
      <p class="subtle">\u2460 \u70B9\u76EE\u5F55\u88C5\u90E8\u4EF6\u3000\u2461 \u5728 3D \u91CC\u62D6\u52A8\u6446\u4F4D\u3000\u2462 \u6570\u503C\u5408\u683C\u540E\u5236\u9020\u5165\u5E93\u3002</p>
      <label class="field">\u84DD\u56FE\u540D\u79F0<input id="blueprintName" maxlength="60" value="${qt(p.name)}"></label>
      <div class="row"><span class="pill">${yi[p.type].name}</span><span class="subtle" id="draftState">${re} \xB7 ${p.parts.length} \u90E8\u4EF6</span></div>
      <div class="row">${Ht("save","\u4FDD\u5B58\u8349\u7A3F")}${Ht("manufacture","\u5236\u9020\u5E76\u5165\u5E93",`class="primary" ${Le.valid?"":"disabled"}`)}</div>
      <h3>\u2460 \u90E8\u4EF6\u76EE\u5F55 <span class="subtle">\u96F6\u4EF6\uFF1A${h.currency.parts}</span></h3>
      <div class="palette">${k.map(([Xe,lt])=>xt(Xe,lt)).join("")}</div>
      ${h.inspectionGrantClaimed?'<p class="subtle">\u6D4B\u8BD5\u96F6\u4EF6\u5DF2\u9886\u53D6 \xB7 \u4E0E\u65E7\u6A21\u5F0F\u94B1\u5305\u72EC\u7ACB</p>':`<div class="row">${Ht("grant","\u9886\u53D6 100 \u6D4B\u8BD5\u96F6\u4EF6")}</div>`}
      <h3>\u2461 \u5F53\u524D\u90E8\u4EF6</h3>
      <div class="selection-card">
        <div class="title"><strong>${I?qt(Ze[I.partId].name):"\u672A\u9009\u4E2D"}</strong><span class="pill">${I?rd[Ze[I.partId].role]:"\u70B9\u51FB 3D \u90E8\u4EF6"}</span></div>
        ${I?`
          <div class="row">${Ht("duplicate","\u590D\u5236")}${Ht("remove","\u79FB\u9664")}${Ze[I.partId].role==="weapon"?Ht("primary",p.primaryWeaponId===I.id?"\u5F53\u524D\u4E3B\u6B66\u5668":"\u8BBE\u4E3A\u4E3B\u6B66\u5668",p.primaryWeaponId===I.id?"disabled":""):""}</div>
          <details class="dev-tools"><summary>\u7CBE\u786E\u8C03\u6574\uFF08\u5750\u6807 / \u671D\u5411 / \u8FDE\u63A5\uFF09</summary>
            <label class="field">\u9009\u62E9\u90E8\u4EF6<select id="selectedPart">${p.parts.map(Xe=>Mi(Xe.id,`${Ze[Xe.partId].name} \xB7 ${Xe.id.slice(0,8)}`,g)).join("")}</select></label>
            <div class="coordinates">${["X","Y","Z"].map((Xe,lt)=>`<label>${Xe}<input type="number" step="0.1" min="-30" max="30" data-coordinate="${lt}" value="${I.position[lt]}"></label>`).join("")}</div>
            <div class="field"><span>\u671D\u5411</span><div class="yaw-row"><input id="partYaw" type="range" min="-180" max="180" step="5" value="${Math.round(I.yaw*180/Math.PI)}"><output id="yawOutput">${Math.round(I.yaw*180/Math.PI)}\xB0</output></div></div>
            <label class="field">\u8FDE\u63A5\u5230<select id="partParent">${Mi("","\u65E0\uFF08\u8F66\u4F53\u6839\u8282\u70B9\uFF09",I.parentId||"")}${p.parts.filter(Xe=>Xe.id!==I.id).map(Xe=>Mi(Xe.id,Ze[Xe.partId].name+" \xB7 "+Xe.id.slice(0,8),I.parentId)).join("")}</select></label>
          </details>
        `:'<p class="subtle">\u5728\u5DE6\u4FA7\u76EE\u5F55\u5B89\u88C5\u90E8\u4EF6\uFF0C\u6216\u5728 3D \u4E2D\u70B9\u51FB\u4E00\u4E2A\u90E8\u4EF6\u3002</p>'}
      </div>
      <details class="dev-tools"><summary>\u9AD8\u7EA7\uFF1A\u5916\u89C2\u6A21\u578B / \u8349\u7A3F / \u6A21\u578B\u4ED3\u5E93</summary>
        <div class="row"><select id="tankType" aria-label="\u65B0\u5EFA\u5766\u514B\u7C7B\u578B">${Object.entries(yi).map(([Xe,lt])=>Mi(Xe,lt.name,p.type)).join("")}</select>${Ht("new","\u65B0\u5EFA\u84DD\u56FE")}</div>
        <label class="field">\u6210\u54C1\u5916\u89C2\u6A21\u578B\uFF08\u53EF\u9009\uFF09<select id="boundModel">${Mi("","\u4F7F\u7528\u90E8\u4EF6\u7ED3\u6784\u9884\u89C8",b||"")}${u.filter(Xe=>Xe.category==="player-tank").map(Xe=>Mi(Xe.id,Xe.name,b)).join("")}</select></label>
        <h3>\u5DF2\u4FDD\u5B58\u8349\u7A3F</h3>${h.blueprints.length?`<div class="row"><select id="savedDraft" aria-label="\u5DF2\u4FDD\u5B58\u8349\u7A3F">${h.blueprints.map(Xe=>Mi(Xe.id,`${Xe.name} \xB7 ${Xe.parts.length} \u90E8\u4EF6`,p.id)).join("")}</select>${Ht("load","\u8F7D\u5165")}</div>`:'<p class="subtle">\u5C1A\u65E0\u8349\u7A3F\uFF0C\u70B9\u51FB\u201C\u4FDD\u5B58\u8349\u7A3F\u201D\u4FDD\u7559\u5F53\u524D\u642D\u5EFA\u3002</p>'}
        <div class="row">${Ht("openModels","\u6253\u5F00\u6A21\u578B\u4ED3\u5E93")}</div>
      </details>`,ot(),he()}function Ot(){if(!a)return;a.hidden=d!=="workshop";let I=a.querySelector('[data-action="undo"]'),k=a.querySelector('[data-action="redo"]');I&&(I.disabled=!P.length),k&&(k.disabled=!C.length);let re=a.querySelector('[data-action="snap"]');re&&(re.textContent=N?`\u5438\u9644 ${N} m`:"\u81EA\u7531\u79FB\u52A8",re.classList.toggle("active",!!N))}function nt(){let I=document.querySelector("#draftState");I&&(I.textContent=`${v?"\u6709\u672A\u4FDD\u5B58\u4FEE\u6539":"\u8349\u7A3F\u5DF2\u4FDD\u5B58"} \xB7 ${p.parts.length} \u90E8\u4EF6`),Ot()}let wt="steel3d.guide.v1",Me=["\u70B9\u4E00\u4E0B\u5DE6\u4FA7\u7684\u90E8\u4EF6\uFF0C\u5B83\u5C31\u4F1A\u88C5\u5230\u8F66\u4E0A\u3002","\u5728 3D \u91CC\u62D6\u52A8\u5B83\u3002\u677E\u624B\u4F1A\u81EA\u52A8\u5438\u9644\u5230\u6700\u8FD1\u7684\u8FDE\u63A5\u70B9\u3002","\u6570\u503C\u5408\u683C\u540E\u70B9\u300C\u5236\u9020\u5E76\u5165\u5E93\u300D\uFF0C\u7136\u540E\u5C31\u80FD\u5F00\u6218\u3002"],Dt=0;function $e(){try{return localStorage.getItem(wt)==="done"}catch{return!0}}function Qe(I=0){let k=document.querySelector("#guide");if(!k)return;Dt=I;let re=document.querySelector("#guideStep"),Le=document.querySelector("#guideText");re&&(re.textContent=`\u7B2C ${I+1} \u6B65 / \u5171 3 \u6B65`),Le&&(Le.textContent=Me[I]),k.hidden=!1}function A(I=!0){let k=document.querySelector("#guide");if(k&&(k.hidden=!0),I)try{localStorage.setItem(wt,"done")}catch{}}function E(){e.innerHTML=`<div class="row">${Ht("backWorkshop","\u2190 \u8FD4\u56DE\u8F66\u95F4")}</div><p class="eyebrow">LOCAL ASSET LIBRARY</p><h1>\u6A21\u578B\u4ED3\u5E93</h1><p class="subtle">\u5185\u5D4C\u8D34\u56FE\u7684 GLB\uFF0C\u6700\u5927 64 MB\u3002\u5148\u9884\u89C8\uFF0C\u518D\u5206\u7C7B\u5165\u5E93\uFF1B\u6587\u4EF6\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002</p>
      <label class="field">\u5BFC\u5165\u5206\u7C7B<select id="modelCategory">${Object.entries(sd).map(([I,k])=>Mi(I,k,S)).join("")}</select></label>
      <label class="field">\u9009\u62E9 GLB<input id="modelFile" type="file" accept=".glb"></label>
      <p id="pendingName" class="subtle">${T?qt(T.name):"\u5C1A\u672A\u9009\u62E9\u6587\u4EF6"}</p>
      <div class="row">${Ht("storeModel","\u4FDD\u5B58\u5230\u6A21\u578B\u4ED3\u5E93",`id="storeModel" class="primary" ${T?"":"disabled"}`)}${Ht("clearModel","\u6062\u590D\u90E8\u4EF6\u9884\u89C8",'id="clearModel"')}</div>
      <label class="field">\u6D4F\u89C8\u5206\u7C7B<select id="modelFilter">${Mi("","\u5168\u90E8\u5206\u7C7B",_)}${Object.entries(sd).map(([I,k])=>Mi(I,k,_)).join("")}</select></label>
      ${u.filter(I=>!_||I.category===_).map(I=>`<article class="card"><strong>${qt(I.name)}</strong><small>${sd[I.category]} \xB7 ${(I.byteLength/1024).toFixed(1)} KB</small><div class="row">${Ht("previewAsset","\u9884\u89C8",`data-id="${qt(I.id)}"`)}</div></article>`).join("")||'<p class="subtle">\u6B64\u5206\u7C7B\u6682\u65E0\u6A21\u578B\u3002</p>'}`,t.innerHTML='<p class="eyebrow">ASSET WORKFLOW</p><h2>\u5916\u89C2\u4E0E\u80FD\u529B</h2><p>\u6A21\u578B\u63D0\u4F9B\u5916\u89C2\uFF0C\u90E8\u4EF6\u84DD\u56FE\u51B3\u5B9A\u80FD\u529B\u3002</p><p class="subtle">\u73A9\u5BB6\u6A21\u578B\u5165\u5E93\u540E\uFF0C\u53EF\u5728\u8F66\u95F4\u7684\u201C\u6210\u54C1\u5916\u89C2\u6A21\u578B\u201D\u4E2D\u7ED1\u5B9A\u3002\u573A\u5730\u4E0E\u654C\u65B9\u6A21\u578B\u76EE\u524D\u652F\u6301\u5206\u7C7B\u5B58\u50A8\u548C\u9884\u89C8\uFF0C\u5730\u56FE\u7ED1\u5B9A\u5C06\u5728\u540E\u7EED\u63A5\u5165\u3002</p><p class="subtle">\u5237\u65B0\u540E\u4ED3\u5E93\u4ECD\u4F1A\u4FDD\u7559\u3002\u4E0D\u540C\u6D4F\u89C8\u5668\u6216\u7AD9\u70B9\u5730\u5740\u7684\u5B58\u50A8\u72EC\u7ACB\u3002</p>'}function G(){e.innerHTML=`<p class="eyebrow">YOUR TANKS</p><h1>\u5766\u514B\u4ED3\u5E93</h1><p class="subtle">\u6210\u54C1\u4FDD\u7559\u5236\u9020\u65F6\u7684\u84DD\u56FE\uFF1B\u5165\u573A\u65F6\u91CD\u65B0\u8BC4\u4F30\u3002</p>${h.tanks.map(k=>`<article class="card ${k.id===M?"active":""}"><strong>${qt(k.blueprint.name)}</strong><small>${yi[k.blueprint.type].name} \xB7 ${k.blueprint.parts.length} \u90E8\u4EF6${k.modelId?" \xB7 \u5DF2\u7ED1\u5B9A\u6A21\u578B":""}</small><div class="row">${Ht("inspectTank","\u68C0\u9A8C",`data-id="${qt(k.id)}"`)}${Ht("prepare","\u51C6\u5907\u7B2C\u4E00\u5173",`class="primary" data-id="${qt(k.id)}"`)}</div></article>`).join("")||'<div class="card">\u8FD8\u6CA1\u6709\u6210\u54C1\u5766\u514B\u3002<p class="subtle">\u5148\u5728\u8F66\u95F4\u901A\u8FC7\u8BC4\u4F30\uFF0C\u518D\u70B9\u51FB\u201C\u5236\u9020\u5E76\u5165\u5E93\u201D\u3002</p></div>'}`;let I=h.tanks.find(k=>k.id===M);if(I){ot(Vi(I.blueprint,h.unlockedParts));let k=`garage:${I.id}:${I.modelId||"blueprint"}`;(z!=="garage"||q!==k)&&(q=k,te(I.blueprint,"garage",{pickable:!1,reset:!0,hudValue:{value:Vi(I.blueprint,h.unlockedParts),name:I.blueprint.name,parts:I.blueprint.parts.length}}),I.modelId&&Re(I.modelId,!1,{kind:"garage"}))}else t.innerHTML='<h2>\u68C0\u9A8C\u6210\u54C1</h2><p class="subtle">\u9009\u62E9\u4E00\u8F86\u5766\u514B\uFF0C\u67E5\u770B\u5176\u6570\u503C\u4E0E\u5916\u89C2\u3002</p>'}function de(){if(!y){e.innerHTML='<p class="eyebrow">STEEL JOURNEY / 01</p><h1>\u7B2C\u4E00\u5173</h1><p>36 \xD7 180 \u7C73\u4E09\u6BB5\u5F0F\u8D70\u5ECA\uFF1A\u63A5\u654C\u533A\u3001\u4FA7\u7FFC\u533A\u3001\u57FA\u5730\u653B\u575A\u3002</p><p class="subtle">\u5148\u5728\u5766\u514B\u4ED3\u5E93\u9009\u62E9\u6210\u54C1\uFF0C\u51C6\u5907\u7B2C\u4E00\u5173\u3002</p>'+Ht("goGarage","\u9009\u62E9\u5766\u514B",'class="primary"'),t.innerHTML='<h2>\u80DC\u5229\u6761\u4EF6</h2><p>\u6467\u6BC1\u57FA\u5730\uFF0C\u5E76\u6D88\u706D\u5168\u90E8 4 \u8F86\u654C\u5766\u3002</p><p class="subtle">\u8FDB\u5165\u7B2C\u4E00\u5173\u540E\u70B9\u300C\u5F00\u6218\u300D\u5373\u53EF\u9A7E\u9A76\u5766\u514B\uFF1B\u89C4\u5219\u81EA\u68C0\u6309\u94AE\u6536\u5728\u300C\u89C4\u5219\u81EA\u68C0\uFF08\u5F00\u53D1\u8005\uFF09\u300D\u91CC\u3002</p><div class="legend"><span style="--dot:#b9d38f">\u73A9\u5BB6\u5766\u514B</span><span style="--dot:#b4543a">\u9014\u4E2D\u654C\u5766</span><span style="--dot:#c24a32">\u7EC8\u70B9\u5B88\u536B</span><span style="--dot:#c9a873">\u654C\u65B9\u57FA\u5730</span></div>';return}let I={ready:"\u51C6\u5907\u5C31\u7EEA",running:"\u68C0\u9A8C\u8FDB\u884C\u4E2D",victory:"\u80DC\u5229\u6761\u4EF6\u8FBE\u6210",defeat:"\u5931\u8D25\u6761\u4EF6\u8FBE\u6210"},k=y.status==="running",re=!!B?.state.active;e.innerHTML=`<p class="eyebrow">STEEL JOURNEY / 01</p><h1>\u7B2C\u4E00\u5173 \xB7 \u7A81\u7834\u8D70\u5ECA</h1>
      <p class="subtle">${re?"W/A/S/D \u9A7E\u9A76 \xB7 \u9F20\u6807\u7784\u51C6 \xB7 \u5DE6\u952E\u6216\u7A7A\u683C\u5F00\u706B\u3002":"\u4E09\u6BB5\u5F0F\u573A\u5730\uFF1A\u63A5\u654C\u533A \u2192 \u4FA7\u7FFC\u533A \u2192 \u57FA\u5730\u653B\u575A\u3002\u70B9\u300C\u5F00\u6218\u300D\u76F4\u63A5\u9A7E\u9A76\u5766\u514B\u3002"}</p>
      <div class="level-status"><span class="pill">${I[y.status]}</span><span class="subtle">\u51FA\u6218\uFF1A${qt(y.tank.blueprint.name)}</span></div>
      ${y.status==="ready"?Ht("startTest","\u5F00\u6218",'class="primary" id="startBattle"'):""}
      <div class="row">${Ht("resetTest","\u91CD\u65B0\u51C6\u5907")}${Ht("goGarage","\u8FD4\u56DE\u5766\u514B\u4ED3\u5E93")}</div>
      ${y.status==="victory"?Ht("next","\u540E\u7EED\u5173\u5361\u5F85\u5F00\u53D1","disabled"):""}
      <details class="dev-tools"><summary>\u89C4\u5219\u81EA\u68C0\uFF08\u5F00\u53D1\u8005\uFF09</summary>
        <p class="subtle">\u76F4\u63A5\u5411\u72B6\u6001\u673A\u53D1\u9001\u4E8B\u4EF6\uFF0C\u4E0D\u7ECF\u8FC7\u6218\u6597\u6A21\u62DF\u3002</p>
        ${y.level.enemies.map((Le,Xe)=>`<article class="card"><strong>${Xe===3?"\u7EC8\u70B9\u5B88\u536B":`\u9014\u4E2D\u654C\u5766 ${Xe+1}`}</strong><small>${["\u6B63\u9762\u5BF9\u6297","\u5DE6\u4FA7\u5077\u88AD","\u53F3\u4FA7\u5077\u88AD","\u57FA\u5730\u5B88\u536B"][Xe]} \xB7 Z = ${Le.position[2]} m \xB7 \u89E6\u53D1 ${Le.triggerZ} m</small><div class="row">${Ht("destroyEnemy",y.defeatedEnemies.includes(Le.id)?"\u5DF2\u6D88\u706D":"\u6A21\u62DF\u6D88\u706D",`data-id="${Le.id}" ${!k||y.defeatedEnemies.includes(Le.id)?"disabled":""}`)}</div></article>`).join("")}
        <div class="row">${Ht("destroyBase",y.baseDestroyed?"\u57FA\u5730\u5DF2\u6467\u6BC1":"\u6A21\u62DF\u6467\u6BC1\u57FA\u5730",!k||y.baseDestroyed?"disabled":"")}${Ht("destroyPlayer","\u6A21\u62DF\u73A9\u5BB6\u9635\u4EA1",k?"":"disabled")}</div>
      </details>`,t.innerHTML=`<p class="eyebrow">MISSION VALIDATION</p><h2>${I[y.status]}</h2><dl class="metrics"><div><dt>\u654C\u5766\u6D88\u706D</dt><dd>${y.defeatedEnemies.length} / 4</dd></div><div><dt>\u654C\u65B9\u57FA\u5730</dt><dd>${y.baseDestroyed?"\u5DF2\u6467\u6BC1":"\u5B58\u6D3B"}</dd></div></dl><p>${y.status==="victory"?"\u4E24\u4E2A\u80DC\u5229\u6761\u4EF6\u5747\u5DF2\u6EE1\u8DB3\u3002":y.status==="defeat"?"\u73A9\u5BB6\u9635\u4EA1\uFF0C\u5173\u5361\u5931\u8D25\u3002":"\u6D88\u706D\u5168\u90E8\u654C\u5766\u4E14\u6467\u6BC1\u57FA\u5730\u540E\u624D\u80FD\u80DC\u5229\u3002"}</p><div class="legend"><span style="--dot:#b9d38f">\u73A9\u5BB6\u5766\u514B</span><span style="--dot:#b4543a">\u9014\u4E2D\u654C\u5766</span><span style="--dot:#c24a32">\u7EC8\u70B9\u5B88\u536B</span><span style="--dot:#c9a873">\u654C\u65B9\u57FA\u5730</span></div><p class="subtle">${re?"\u6218\u6597\u8FDB\u884C\u4E2D\uFF1A\u9A7E\u9A76\u3001\u7784\u51C6\u4E0E\u5F00\u706B\u7531 combat.mjs \u5B9E\u65F6\u6A21\u62DF\u3002":"\u573A\u666F\u5305\u542B\u4E09\u6BB5\u5F0F\u573A\u5730\u3001\u53EF\u78B0\u649E\u63A9\u4F53\u3001\u6CE5\u5730/\u788E\u77F3\u533A\u4E0E 5 \u8F86\u5766\u514B\uFF1B\u70B9\u300C\u5F00\u6218\u300D\u8FD0\u884C\u771F\u5B9E\u6218\u6597\u3002"}</p>`,be()}function j(){if(m)return;document.querySelectorAll("[data-tab]").forEach(re=>re.setAttribute("aria-pressed",String(re.dataset.tab===d)));let I=document.querySelector("#cameraCapsule");I&&(I.hidden=!(d==="mission"&&y&&!B?.state.active));let k=document.querySelector("#crosshair");k&&(k.hidden=!(d==="mission"&&B?.state.active)),d==="workshop"?(U(),z!=="workshop"?te(p,"workshop",{reset:!0}):(F?.setSelected(g),F?.refresh(),he())):d==="models"?E():d==="garage"?G():de(),i?.setKeyboardPan(d==="mission"&&!B?.state.active),F?.setEnabled(d==="workshop"&&z==="workshop"),Ot()}let me=()=>JSON.stringify({parts:p.parts,primaryWeaponId:p.primaryWeaponId,name:p.name,type:p.type});function fe(){P.push(me()),P.length>60&&P.shift(),C.length=0,Ot()}function Q(I){let k=JSON.parse(I);p={...p,...k},p.parts.some(re=>re.id===g)||(g=p.parts[0]?.id||null),v=!0,te(p,"workshop"),U(),nt(),L()}function ne(){P.length&&(C.push(me()),Q(P.pop()),$("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65\u642D\u5EFA\u3002"))}function xe(){C.length&&(P.push(me()),Q(C.pop()),$("\u5DF2\u91CD\u505A\u3002"))}function L(){v=!0,nt(),clearTimeout(ie),ie=setTimeout(()=>{ee(!0).catch(I=>$(`\u81EA\u52A8\u4FDD\u5B58\u5931\u8D25\uFF1A${I.message}`,!0))},900)}async function ee(I=!1){if(ae){Pe=!0;return}ae=!0;try{let k=structuredClone(p);h.blueprints.some(re=>re.id===k.id)&&k.revision++,await c.saveDraft(k),p=k,v=!1,await Ae(),nt(),I||$("\u8349\u7A3F\u5DF2\u4FDD\u5B58\uFF0C\u5237\u65B0\u540E\u53EF\u91CD\u65B0\u8F7D\u5165\u3002")}finally{ae=!1,Pe&&(Pe=!1,L())}}function Z(I){v=!0,te(p,"workshop"),U(),nt(),L(),I&&$(I)}function ve(I){let k=Ze[I];if(k){if(ad.has(k.role)&&p.parts.some(re=>Ze[re.partId].role===k.role)){$(`${k.name} \u53EA\u80FD\u5B89\u88C5\u4E00\u4E2A\u3002`,!0);return}if(!h.unlockedParts.includes(I))return c.unlockPart(I).then(async()=>{await Ae(),pe(I)}).catch(Le=>$(Le.message,!0));pe(I)}}function pe(I){let k=Wr("part"),re=gu(p,I,k);fe(),p.parts.push({id:k,partId:I,parentId:re.parentId,position:re.position,yaw:re.yaw}),g=k,Z(`\u5DF2\u5B89\u88C5 ${Ze[I].name}\uFF0C\u53EF\u5728 3D \u4E2D\u62D6\u52A8\u8C03\u6574\u3002`)}function ye(){let I=p.parts.find(re=>re.id===g);if(!I)return;if(Ze[I.partId].role==="hull"){$("\u8F66\u4F53\u662F\u6839\u8282\u70B9\uFF0C\u4E0D\u80FD\u79FB\u9664\u3002",!0);return}fe();let k=I.parentId;p.parts=p.parts.filter(re=>re.id!==g);for(let re of p.parts)re.parentId===I.id&&(re.parentId=k);if(p.primaryWeaponId===I.id){let re=p.parts.find(Le=>Ze[Le.partId].role==="weapon");p.primaryWeaponId=re?.id||null}g=p.parts[0]?.id||null,Z(`\u5DF2\u79FB\u9664 ${Ze[I.partId].name}\u3002`)}function Ve(){let I=p.parts.find(Xe=>Xe.id===g);if(!I)return;let k=Ze[I.partId].role;if(ad.has(k)){$("\u8F66\u4F53\u3001\u5C65\u5E26\u3001\u5F15\u64CE\u4E0E\u70AE\u5854\u4E0D\u80FD\u590D\u5236\u3002",!0);return}if(p.parts.length>=Mt.maxParts){$("\u90E8\u4EF6\u6570\u91CF\u5DF2\u8FBE\u4E0A\u9650\u3002",!0);return}let re=Wr("part"),Le=gu(p,I.partId,re);fe(),p.parts.push({id:re,partId:I.partId,parentId:Le.parentId,position:Le.position,yaw:Le.yaw}),g=re,Z(`\u5DF2\u590D\u5236 ${Ze[I.partId].name}\u3002`)}function st(I){let k=p.parts.find(re=>re.id===g);k&&(fe(),k.yaw=Math.round((k.yaw+I*Math.PI/180)*1e3)/1e3,Z(`\u671D\u5411\u5DF2\u8C03\u6574\u4E3A ${Math.round(k.yaw*180/Math.PI)}\xB0\u3002`))}function ue(I,k){let re=p.parts.find(Le=>Le.id===g);re&&(fe(),re.position[I]=Math.max(-Mt.maxExtent,Math.min(Mt.maxExtent,Number((re.position[I]+k).toFixed(3)))),Z())}function Ye(I,k,re){let Le=p.parts.find(Bn=>Bn.id===I);if(!Le)return;let Xe=Bp(p,I,k,N)||k,lt=_u(p,I,Xe,{grid:null});if(!lt)return;Le.position=lt.position,Number.isFinite(re)&&(Le.yaw=re),lt.parentId&&lt.parentId!==Le.parentId&&(Le.parentId=lt.parentId),v=!0,te(p,"workshop"),U(),nt(),L();let Cn=lt.gap!==null&&lt.gap!==void 0?` \xB7 \u5DF2\u8FDE\u63A5 ${Ze[p.parts.find(Bn=>Bn.id===Le.parentId)?.partId]?.name||""}`:"";$(`${Ze[Le.partId].name} \u79FB\u52A8\u5230 ${lt.position.map(Bn=>Bn.toFixed(2)).join(" / ")}${Cn}`)}function at(I,k,re){if(!p.parts.find(In=>In.id===I))return null;let Xe=_u(p,I,k,{grid:null});if(!Xe)return null;let lt={...p,parts:p.parts.map(In=>In.id===I?{...In,position:Xe.position,yaw:re}:In)},Cn=ho(lt,h.unlockedParts),Bn=Cn.length===0?"ok":Cn.some(In=>In.includes("\u91CD\u53E0"))?"overlap":"invalid";return{position:Xe.position,parentId:Xe.parentId,status:Bn}}async function Re(I,k=!0,re={}){let Le=await c.models.get(I);if(!Le)return!1;let Xe=new File([Le.blob],`${Le.name}.glb`);return await St(Xe,re),k&&$(`\u6B63\u5728\u9884\u89C8\uFF1A${Le.name}`),!0}async function St(I,{kind:k="model"}={}){let re=++x,Le=await fm(I);if(m||re!==x){xi(Le);return}i&&!i.disposed?(i.setEnvironment("workshop"),i.replaceContent(Le),F?.setEnabled(!1),F?.setRoot(null),i.resetCamera(),z=k,le=`${k}:${I.name}:${re}`):xi(Le),s.textContent=`\u6A21\u578B\u9884\u89C8 \xB7 ${I.name}`,r.innerHTML=`<strong>${qt(I.name)}</strong> \xB7 \u5916\u89C2\u9884\u89C8 \xB7 \u80FD\u529B\u4ECD\u7531\u90E8\u4EF6\u84DD\u56FE\u51B3\u5B9A`}let Vt={async new(){let I=document.querySelector("#tankType").value;v&&await ee(!0),p=lo(I,Wr("draft")),g="weapon",b=null,P=[],C=[],v=!0,z=null,q="",j(),$("\u5DF2\u65B0\u5EFA\u84DD\u56FE\uFF0C\u4E4B\u524D\u7684\u4FEE\u6539\u5DF2\u4FDD\u5B58\u4E3A\u8349\u7A3F\u3002")},async save(){await ee(!1),U()},async load(){let I=document.querySelector("#savedDraft").value;v&&await ee(!0),p=structuredClone(h.blueprints.find(k=>k.id===I)),g=p.parts[0]?.id||null,v=!1,b=null,P=[],C=[],z=null,q="",j(),$("\u5DF2\u8F7D\u5165\u4FDD\u5B58\u7684\u84DD\u56FE\u3002")},async grant(){await l.updateProfile(I=>{I.inspectionGrantClaimed||(I.currency.parts+=100,I.inspectionGrantClaimed=!0)}),await Ae(),j(),$("\u5DF2\u9886\u53D6 100 \u6D4B\u8BD5\u96F6\u4EF6\uFF0C\u4EC5\u7528\u4E8E\u65B0\u6A21\u5F0F\u539F\u578B\u68C0\u9A8C\u3002")},addPart(I){return ve(I.dataset.part)},remove(){ye()},duplicate(){Ve()},rotateLeft(){st(-15)},rotateRight(){st(15)},raise(){ue(1,N||.1)},lower(){ue(1,-(N||.1))},snap(){N=N===Mt.snapGrid?.25:N===.25?0:Mt.snapGrid,Ot(),$(N?`\u5438\u9644\u7F51\u683C\uFF1A${N} \u7C73`:"\u81EA\u7531\u79FB\u52A8\uFF1A\u4E0D\u5438\u9644\u7F51\u683C\uFF0C\u4ECD\u4F1A\u81EA\u52A8\u8FDE\u63A5\u6700\u8FD1\u90E8\u4EF6\u3002")},undo(){ne()},redo(){xe()},primary(){fe(),p.primaryWeaponId=g,v=!0,Z("\u5DF2\u8BBE\u4E3A\u4E3B\u6B66\u5668\u3002")},async manufacture(){await ee(!0);let I=await c.manufacture({blueprintId:p.id,tankId:Wr("tank"),modelId:b});await Ae(),d="garage",M=I.id,z=null,j(),$("\u5766\u514B\u5236\u9020\u5B8C\u6210\u5E76\u5DF2\u5B58\u5165\u4ED3\u5E93\uFF0C\u53EF\u4EE5\u51C6\u5907\u7B2C\u4E00\u5173\u3002")},async storeModel(){if(!T)throw new Error("\u8BF7\u5148\u9009\u62E9 GLB");await c.models.save({id:Wr("model"),name:T.name.replace(/\.glb$/i,""),category:S,blob:T}),T=null,await Ae(),E(),$("\u6A21\u578B\u5DF2\u4FDD\u5B58\u5230\u672C\u673A\u4ED3\u5E93\u3002")},clearModel(){T=null,E(),te(p,"workshop",{reset:!0}),$("\u5DF2\u6062\u590D\u90E8\u4EF6\u9884\u89C8\u3002")},openModels(){d="models",z=null,j(),$("\u6A21\u578B\u4ED3\u5E93\uFF1A\u9009\u62E9 GLB \u9884\u89C8\uFF0C\u518D\u6309\u5206\u7C7B\u4FDD\u5B58\u5230\u672C\u673A\u3002")},backWorkshop(){d="workshop",z=null,j(),$("\u5DF2\u8FD4\u56DE\u8F66\u95F4\u3002")},async previewAsset(I){await Re(I.dataset.id)},inspectTank(I){M=I.dataset.id,z=null,j()},async prepare(I){y=await c.prepareFirstLevel(I.dataset.id),d="mission",z=null,q="",j(),$("\u7B2C\u4E00\u5173\u5DF2\u51C6\u5907\u3002\u955C\u5934\u53EF\u81EA\u7531\u65CB\u8F6C\uFF0C\u4E0B\u65B9\u53EF\u5BF9\u51C6\u76EE\u6807\u3002")},startTest(){Ne()},destroyEnemy(I){tt({type:"enemy-destroyed",id:I.dataset.id})},destroyBase(){tt({type:"base-destroyed"})},destroyPlayer(){tt({type:"player-destroyed"})},async resetTest(){B?.stop(),B=null,Y=null,y=await c.prepareFirstLevel(y.tank.id),j()},goGarage(){B?.stop(),B=null,Y=null,d="garage",z=null,q="",j()},camPlayer(){if(B?.state.active)return $("\u6218\u6597\u4E2D\u955C\u5934\u8DDF\u968F\u8F66\u4F53\u3002");Oe("player")},camOverview(){if(B?.state.active)return $("\u6218\u6597\u4E2D\u955C\u5934\u8DDF\u968F\u8F66\u4F53\u3002");Oe("overview",{duration:1})},camBase(){if(B?.state.active)return $("\u6218\u6597\u4E2D\u955C\u5934\u8DDF\u968F\u8F66\u4F53\u3002");Oe("base")},camEnemy(){if(B?.state.active)return $("\u6218\u6597\u4E2D\u955C\u5934\u8DDF\u968F\u8F66\u4F53\u3002");se()},camEnemyId(I){B?.state.active||Oe(I.dataset.id)}},qn=I=>{for(let k of o)["orbit","auto"].includes(k.dataset.camera)&&k.setAttribute("aria-pressed",String(k.dataset.camera===I))},fo={orbit(){i?.setAutoRotate(!1),qn("orbit"),$("\u81EA\u7531\u89C6\u89D2\uFF1A\u5DE6\u952E\u62D6\u52A8\u65CB\u8F6C\uFF0C\u53F3\u952E\u5E73\u79FB\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF1B\u5173\u5361\u5185\u53EF\u7528 W/A/S/D \u5E73\u79FB\u3002")},auto(){i?.setAutoRotate(!0),qn("auto"),$("\u81EA\u52A8\u73AF\u7ED5\uFF1A\u955C\u5934\u4F1A\u7F13\u6162\u7ED5\u5F53\u524D\u76EE\u6807\u65CB\u8F6C\uFF0C\u518D\u6B21\u70B9\u51FB\u201C\u81EA\u7531\u89C6\u89D2\u201D\u505C\u6B62\u3002")},player(){Oe("player")||$("\u51C6\u5907\u7B2C\u4E00\u5173\u540E\u53EF\u7528\u3002")},overview(){Oe("overview",{duration:1})||$("\u51C6\u5907\u7B2C\u4E00\u5173\u540E\u53EF\u7528\u3002")},base(){Oe("base")||$("\u51C6\u5907\u7B2C\u4E00\u5173\u540E\u53EF\u7528\u3002")},enemy(){se()}};function ks(I){f=I;for(let k of[e,document.querySelector(".mode-tabs")])k.inert=I;e.setAttribute("aria-busy",String(I))}async function zs(I){if(!(f||m)){ks(!0);try{await I()}catch(k){$(k.message,!0)}finally{ks(!1)}}}let Xr=I=>{let k=I.target.closest("button");if(!(!k||k.disabled)){if(k.id==="guideNext"){Dt>=Me.length-1?A():Qe(Dt+1);return}if(k.id==="guideSkip"){A();return}if(k.dataset.camera){let re=fo[k.dataset.camera];re&&zs(()=>re());return}if(k.dataset.tab){zs(async()=>{x++,d=k.dataset.tab,z=d==="workshop"?z:null,j(),$({workshop:"\u70B9\u9009 3D \u90E8\u4EF6\uFF0C\u62D6\u52A8\u6446\u4F4D\uFF1B\u677E\u5F00\u540E\u81EA\u52A8\u5438\u9644\u5E76\u91CD\u65B0\u8FDE\u63A5\u3002",models:"\u9009\u62E9 GLB \u9884\u89C8\uFF0C\u518D\u6309\u5206\u7C7B\u4FDD\u5B58\u5230\u672C\u673A\u4ED3\u5E93\u3002",garage:"\u9009\u62E9\u6210\u54C1\u67E5\u770B\u8BC4\u4F30\uFF0C\u6216\u51C6\u5907\u7B2C\u4E00\u5173\u3002",mission:"\u62D6\u52A8\u65CB\u8F6C\u89C6\u89D2\uFF0C\u53EF\u5BF9\u51C6\u73A9\u5BB6\u3001\u654C\u5766\u6216\u57FA\u5730\uFF1B\u624B\u52A8\u4E8B\u4EF6\u53EA\u68C0\u9A8C\u80DC\u8D1F\u89C4\u5219\u3002"}[d])});return}k.dataset.action&&Vt[k.dataset.action]&&zs(()=>Vt[k.dataset.action](k))}},qr=I=>zs(async()=>{let k=I.target;if(k.id==="modelFile"){let Le=k.files[0];if(!Le)return;T=null;try{await St(Le),T=Le,$("\u5DF2\u52A0\u8F7D\u6A21\u578B\uFF0C\u786E\u8BA4\u5206\u7C7B\u540E\u4FDD\u5B58\u5165\u5E93\u3002")}catch(Xe){$(`\u5BFC\u5165\u5931\u8D25\uFF1A${Xe.message}`,!0)}finally{E()}return}if(k.id==="modelCategory"){S=k.value;return}if(k.id==="modelFilter"){_=k.value,E();return}if(k.id==="boundModel"){b=k.value||null;return}if(k.id==="selectedPart"){g=k.value,F?.setSelected(g),U();return}if(k.id==="blueprintName"){p.name=k.value,v=!0,he(),nt(),L();return}let re=p.parts.find(Le=>Le.id===g);if(re){if(k.dataset.coordinate!==void 0){let Le=k.valueAsNumber;if(!Number.isFinite(Le)||Math.abs(Le)>Mt.maxExtent)throw U(),new Error("\u8BF7\u8F93\u5165\u6709\u6548\u5750\u6807\uFF08-30\uFF5E30\uFF09");fe(),re.position[Number(k.dataset.coordinate)]=Le,v=!0,te(p,"workshop"),ot(),he(),nt(),L()}if(k.id==="partYaw"){fe(),re.yaw=Number(k.value)*Math.PI/180;let Le=document.querySelector("#yawOutput");Le&&(Le.textContent=`${k.value}\xB0`),v=!0,te(p,"workshop"),ot(),nt(),L()}k.id==="partParent"&&(fe(),re.parentId=k.value||null,v=!0,Z("\u5DF2\u4FEE\u6539\u8FDE\u63A5\u5173\u7CFB\u3002"))}}),ii=I=>{if(I.target.id==="partYaw"){let k=document.querySelector("#yawOutput");k&&(k.textContent=`${I.target.value}\xB0`);let re=F?.getPart(g);re&&(re.rotation.y=Number(I.target.value)*Math.PI/180,F.refresh(),i?.invalidate())}},Hs=I=>{if(d!=="workshop"||f||m||tS(I.target))return;let k=I.ctrlKey||I.metaKey;if(k&&I.code==="KeyZ"){I.preventDefault(),I.shiftKey?xe():ne();return}if(k&&I.code==="KeyY"){I.preventDefault(),xe();return}if(k&&I.code==="KeyD"){I.preventDefault(),Ve();return}if(I.code==="Delete"||I.code==="Backspace"){I.preventDefault(),ye();return}if(I.code==="KeyQ"){I.preventDefault(),st(-15);return}if(I.code==="KeyE"){I.preventDefault(),st(15);return}if(I.code.startsWith("Arrow")){I.preventDefault();let re=I.shiftKey?.5:N||.1;I.code==="ArrowLeft"&&ue(0,-re),I.code==="ArrowRight"&&ue(0,re),I.code==="ArrowUp"&&ue(2,re),I.code==="ArrowDown"&&ue(2,-re);return}I.code==="Escape"&&(g=null,F?.setSelected(null),U())};try{l=await Hp(),c=Yp(l),await Ae(),document.querySelector("#storageStatus").textContent="\u672C\u673A\u5B58\u6863\u5DF2\u8FDE\u63A5",i&&!i.disposed&&(F=mm({runtime:i,getGrid:()=>N,onSelect:I=>{g=I,F.setSelected(I),U()},onDragMove:()=>{J||(fe(),J=!0)},onDragEnd:(I,k,re)=>{J=!1,Ye(I,k,re)},onPreview:(I,k,re)=>at(I,k,re),onHover:I=>{let k=document.querySelector("#controlHint");if(!k)return;let re=I?p.parts.find(Le=>Le.id===I):null;k.innerHTML=re?`\u60AC\u505C\uFF1A<strong>${qt(Ze[re.partId].name)}</strong> \xB7 \u62D6\u52A8\u79FB\u52A8 \xB7 Shift+\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6<br>\u62D6\u52A8\u4E2D\u6EDA\u8F6E\u65CB\u8F6C 15\xB0\uFF08Shift 5\xB0\uFF09 \xB7 Q/E \u65CB\u8F6C \xB7 Delete \u5220\u9664 \xB7 Ctrl+Z \u64A4\u9500`:"\u62D6\u52A8\u65CB\u8F6C \xB7 \u53F3\u952E\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E<br>\u70B9\u51FB\u90E8\u4EF6\u9009\u4E2D\u5E76\u62D6\u52A8\u6446\u4F4D"}})),document.addEventListener("click",Xr),e.addEventListener("change",qr),e.addEventListener("input",ii),window.addEventListener("keydown",Hs),j(),ut(),$("\u4ECE\u8F66\u95F4\u5F00\u59CB\uFF1A\u5B89\u88C5\u90E8\u4EF6 \u2192 \u62D6\u52A8\u6446\u4F4D \u2192 \u67E5\u770B\u8BC4\u4F30 \u2192 \u5236\u9020\u5165\u5E93 \u2192 \u7B2C\u4E00\u5173\u5F00\u6218\u3002"),d==="workshop"&&!$e()&&!location.search.includes("noguide")&&Qe(0)}catch(I){l?.close(),document.querySelector("#storageStatus").textContent="\u5B58\u50A8\u4E0D\u53EF\u7528",e.innerHTML="<h2>\u65E0\u6CD5\u6253\u5F00\u672C\u673A\u4ED3\u5E93</h2><p>\u8BF7\u68C0\u67E5\u6D4F\u89C8\u5668\u5B58\u50A8\u6743\u9650\uFF0C\u6216\u901A\u8FC7\u672C\u5730 HTTP \u670D\u52A1\u6253\u5F00\u540E\u5237\u65B0\u91CD\u8BD5\u3002</p>",$(I.message,!0)}return()=>{m=!0,x++,clearTimeout(ie),document.removeEventListener("click",Xr),e.removeEventListener("change",qr),e.removeEventListener("input",ii),window.removeEventListener("keydown",Hs),ge(),F?.dispose(),F=null,l?.close()}}var iS=document.querySelector("#message"),Gt,bm;try{Gt=new Sc(document.querySelector("#viewport"),i=>{document.querySelector("#stats").textContent=`${i.calls} \u6B21\u7ED8\u5236 \xB7 ${i.triangles.toLocaleString()} \u4E09\u89D2\u5F62
CPU \u63D0\u4EA4 ${i.cpuMs.toFixed(1)} ms \xB7 ${i.geometries} \u51E0\u4F55\u4F53 \xB7 ${i.textures} \u8D34\u56FE`},i=>{iS.textContent=i}),document.querySelector("#resetCamera").addEventListener("click",()=>Gt.resetCamera()),document.querySelector("#quality").addEventListener("change",i=>Gt.setQuality(i.target.value))}catch(i){Gt?.dispose(),Gt=null,document.querySelector("#stats").textContent="3D \u4E0D\u53EF\u7528\uFF1A\u8BF7\u5F00\u542F WebGL 2 / \u786C\u4EF6\u52A0\u901F",console.error(i)}window.__steel3d={runtime:Gt,info(){if(!Gt||Gt.disposed)return{available:!1};let i=Gt.renderer.info.render,e=new on().setFromObject(Gt.content);return{available:!0,environment:Gt.environment,calls:i.calls,triangles:i.triangles,geometries:Gt.renderer.info.memory.geometries,textures:Gt.renderer.info.memory.textures,camera:Gt.camera.position.toArray().map(t=>Number(t.toFixed(2))),target:Gt.controls.target.toArray().map(t=>Number(t.toFixed(2))),contentChildren:Gt.content.children.length,contentBounds:Number.isFinite(e.min.x)?[e.min.toArray().map(t=>Number(t.toFixed(2))),e.max.toArray().map(t=>Number(t.toFixed(2)))]:null,viewport:[Gt.host.clientWidth,Gt.host.clientHeight]}},levelFocus(){let e=Gt?.content.children[0]?.userData?.focus;return e?Object.fromEntries([...e].map(([t,n])=>[t,{position:n.position.toArray(),radius:n.radius,label:n.label}])):null}};Sm(Gt).then(i=>{bm=i});window.addEventListener("pagehide",i=>{i.persisted||(bm?.(),Gt?.dispose())});window.addEventListener("pageshow",()=>Gt?.invalidate());})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
