(()=>{var as={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cf=0,Ah=1,hf=2;var Za=1,Tl=2,Pr=3,_i=0,en=1,tn=2,Ds=0,Lr=1,Rh=2,Ch=3,Ih=4,uf=5;var Ns=100,df=101,ff=102,pf=103,mf=104,gf=200,_f=201,xf=202,yf=203,Ph=204,Lh=205,vf=206,Mf=207,Sf=208,bf=209,Ef=210,wf=211,Tf=212,Af=213,Rf=214,jo=0,Qo=1,el=2,hr=3,tl=4,nl=5,il=6,sl=7,Al=0,Cf=1,If=2,xi=0,Dh=1,Nh=2,Uh=3,Ja=4,Oh=5,Fh=6,Bh=7,uh="attached",Pf="detached",kh=300,Us=301,Dr=302,Rl=303,Cl=304,hi=1e3,Gn=1001,ur=1002,Jt=1003,Il=1004;var Os=1005;var sn=1006,Nr=1007;var Xn=1008;var In=1009,zh=1010,Hh=1011,Ur=1012,Pl=1013,ti=1014,kn=1015,ni=1016,Ll=1017,Dl=1018,Fs=1020,Gh=35902,Vh=35899,Wh=1021,Xh=1022,qn=1023,Di=1026,Vi=1027,Nl=1028,Ul=1029,ls=1030,Ol=1031;var Fl=1033,ja=33776,Qa=33777,eo=33778,to=33779,Bl=35840,kl=35841,zl=35842,Hl=35843,Gl=36196,Vl=37492,Wl=37496,Xl=37488,ql=37489,no=37490,$l=37491,Yl=37808,Kl=37809,Zl=37810,Jl=37811,jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,ac=37820,oc=37821,lc=36492,cc=36494,hc=36495,uc=36283,dc=36284,io=36285,fc=36286;var vs=2300,Ms=2301,Zo=2302,dh=2303,fh=2400,ph=2401,mh=2402,Lf=2500;var qh=0,so=1,Or=2,Df=3200;var ro=0,Nf=1,Wi="",Gt="srgb",wn="srgb-linear",fa="linear",It="srgb";var Jo=7680;var Uf=519,Of=512,Ff=513,Bf=514,$h=515,kf=516,zf=517,Yh=518,Kh=519,Zh=35044;var Jh="300 es",Vn=2e3,dr=2001;function Rm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hf(){let i=fr("canvas");return i.style.display="block",i}var dd={},pr=null;function pa(...i){let e="THREE."+i.shift();pr?pr("log",e,...i):console.log(e,...i)}function Gf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=Gf(i);let e="THREE."+i.shift();if(pr)pr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=Gf(i);let e="THREE."+i.shift();if(pr)pr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ys(...i){let e=i.join(" ");e in dd||(dd[e]=!0,qe(...i))}function Vf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wf={[jo]:jo,[el]:il,[tl]:tl,[hr]:nl,[Qo]:Qo,[il]:el,[sl]:sl,[nl]:hr},Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=1234567,lr=Math.PI/180,Ss=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function jh(i,e){return(i%e+e)%e}function Im(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Pm(i,e,t){return i!==e?(t-i)/(e-i):0}function ha(i,e,t){return(1-t)*i+t*e}function Lm(i,e,t,n){return ha(i,e,1-Math.exp(-t*n))}function Dm(i,e=1){return e-Math.abs(jh(i,e*2)-e)}function Nm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Um(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Om(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fm(i,e){return i+Math.random()*(e-i)}function Bm(i){return i*(.5-Math.random())}function km(i){i!==void 0&&(fd=i);let e=fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zm(i){return i*lr}function Hm(i){return i*Ss}function Gm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function eu(i,e){if(e.constructor===Float32Array)return i;let t=pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function tu(i,e){if(e.constructor===Float32Array)return i;let t=pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Pn={DEG2RAD:lr,RAD2DEG:Ss,generateUUID:ii,clamp:ut,euclideanModulo:jh,mapLinear:Im,inverseLerp:Pm,lerp:ha,damp:Lm,pingpong:Dm,smoothstep:Nm,smootherstep:Um,randInt:Om,randFloat:Fm,randFloatSpread:Bm,seededRandom:km,degToRad:zm,radToDeg:Hm,isPowerOfTwo:Gm,ceilPowerOfTwo:Vm,floorPowerOfTwo:Qh,setQuaternionFromProperEuler:Wm,normalize:tu,denormalize:eu},oe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),y=Math.sin(v);g=Math.sin(g*v)/y,o=Math.sin(o*v)/y,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new C,pd=new un,rt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],v=s[1],y=s[4],M=s[7],T=s[2],S=s[5],_=s[8];return r[0]=a*x+o*v+l*T,r[3]=a*m+o*y+l*S,r[6]=a*g+o*M+l*_,r[1]=c*x+h*v+d*T,r[4]=c*m+h*y+d*S,r[7]=c*g+h*M+d*_,r[2]=u*x+f*v+p*T,r[5]=u*m+f*y+p*S,r[8]=u*g+f*M+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fc.makeScale(e,t)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fc.makeRotation(-e)),this}translate(e,t){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fc=new rt,md=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xm(){let i={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===It&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wn]:{primaries:e,whitePoint:n,transfer:fa,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:It,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var mt=Xm();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ws,rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ws===void 0&&(Ws=fr("canvas")),Ws.width=e.width,Ws.height=e.height;let s=Ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qm=0,mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bc(s[a].image)):r.push(Bc(s[a]))}else r=Bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var $m=0,kc=new C,rn=class i extends Qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=sn,a=Xn,o=qn,l=In,c=i.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=ii(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=kh;rn.DEFAULT_ANISOTROPY=1;var Pt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,M=(f+1)/2,T=(g+1)/2,S=(h+u)/4,_=(d+x)/4,b=(p+m)/4;return y>M&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=_/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=b/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends Qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new rn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ma=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ol=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Qe=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,p,x,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ym,e,Km)}lookAt(e,t,n){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Yi.crossVectors(n,Nn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Yi.crossVectors(n,Nn)),Yi.normalize(),_o.crossVectors(Nn,Yi),s[0]=Yi.x,s[4]=_o.x,s[8]=Nn.x,s[1]=Yi.y,s[5]=_o.y,s[9]=Nn.y,s[2]=Yi.z,s[6]=_o.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],y=n[7],M=n[11],T=n[15],S=s[0],_=s[4],b=s[8],P=s[12],I=s[1],N=s[5],F=s[9],z=s[13],L=s[2],H=s[6],G=s[10],V=s[14],se=s[3],K=s[7],te=s[11],re=s[15];return r[0]=a*S+o*I+l*L+c*se,r[4]=a*_+o*N+l*H+c*K,r[8]=a*b+o*F+l*G+c*te,r[12]=a*P+o*z+l*V+c*re,r[1]=h*S+d*I+u*L+f*se,r[5]=h*_+d*N+u*H+f*K,r[9]=h*b+d*F+u*G+f*te,r[13]=h*P+d*z+u*V+f*re,r[2]=p*S+x*I+m*L+g*se,r[6]=p*_+x*N+m*H+g*K,r[10]=p*b+x*F+m*G+g*te,r[14]=p*P+x*z+m*V+g*re,r[3]=v*S+y*I+M*L+T*se,r[7]=v*_+y*N+M*H+T*K,r[11]=v*b+y*F+M*G+T*te,r[15]=v*P+y*z+M*V+T*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*f-c*u,y=o*f-c*d,M=o*u-l*d,T=a*f-c*h,S=a*u-l*h,_=a*d-o*h;return t*(x*v-m*y+g*M)-n*(p*v-m*T+g*S)+s*(p*y-x*T+g*_)-r*(p*M-x*S+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*o-n*a,y=t*l-s*a,M=t*c-r*a,T=n*l-s*o,S=n*c-r*o,_=s*c-r*l,b=h*x-d*p,P=h*m-u*p,I=h*g-f*p,N=d*m-u*x,F=d*g-f*x,z=u*g-f*m,L=v*z-y*F+M*N+T*I-S*P+_*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return e[0]=(o*z-l*F+c*N)*H,e[1]=(s*F-n*z-r*N)*H,e[2]=(x*_-m*S+g*T)*H,e[3]=(u*S-d*_-f*T)*H,e[4]=(l*I-a*z-c*P)*H,e[5]=(t*z-s*I+r*P)*H,e[6]=(m*M-p*_-g*y)*H,e[7]=(h*_-u*M+f*y)*H,e[8]=(a*F-o*I+c*b)*H,e[9]=(n*I-t*F-r*b)*H,e[10]=(p*S-x*M+g*v)*H,e[11]=(d*M-h*S-f*v)*H,e[12]=(o*P-a*N-l*b)*H,e[13]=(t*N-n*P+s*b)*H,e[14]=(x*y-p*T-m*v)*H,e[15]=(h*T-d*y+u*v)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,m=a*d,g=o*d,v=l*c,y=l*h,M=l*d,T=n.x,S=n.y,_=n.z;return s[0]=(1-(x+g))*T,s[1]=(f+M)*T,s[2]=(p-y)*T,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(u+g))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(p+y)*_,s[9]=(m-v)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Xs.set(s[0],s[1],s[2]).length(),o=Xs.set(s[4],s[5],s[6]).length(),l=Xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let c=1/a,h=1/o,d=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Vn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Vn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===dr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Vn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===dr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xs=new C,Zn=new Qe,Ym=new C(0,0,0),Km=new C(1,1,1),Yi=new C,_o=new C,Nn=new C,_d=new Qe,xd=new un,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xd.setFromEuler(this),this.setFromQuaternion(xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zm=0,yd=new C,qs=new un,Ti=new Qe,xo=new C,Jr=new C,Jm=new C,jm=new un,vd=new C(1,0,0),Md=new C(0,1,0),Sd=new C(0,0,1),bd={type:"added"},Qm={type:"removed"},$s={type:"childadded",child:null},zc={type:"childremoved",child:null},Ut=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Wn,n=new un,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new rt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(Md,e)}rotateZ(e){return this.rotateOnAxis(Sd,e)}translateOnAxis(e,t){return yd.copy(e).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(Md,e)}translateZ(e){return this.translateOnAxis(Sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Jr,xo,this.up):Ti.lookAt(xo,Jr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Ti),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bd),$s.child=e,this.dispatchEvent($s),$s.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qm),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bd),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,Jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new C(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},eg={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Hc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=jh(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Hc(a,r,e+1/3),this.g=Hc(a,r,e),this.b=Hc(a,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=Xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return mt.workingToColorSpace(yn.copy(this),e),Math.round(ut(yn.r*255,0,255))*65536+Math.round(ut(yn.g*255,0,255))*256+Math.round(ut(yn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(yn.copy(this),t);let n=yn.r,s=yn.g,r=yn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Gt){mt.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,s=yn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(yo);let n=ha(Ki.h,yo.h,t),s=ha(Ki.s,yo.s,t),r=ha(Ki.l,yo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Ge;Ge.NAMES=Xf;var ga=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bs=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jn=new C,Ai=new C,Gc=new C,Ri=new C,Ys=new C,Ks=new C,Ed=new C,Vc=new C,Wc=new C,Xc=new C,qc=new Pt,$c=new Pt,Yc=new Pt,li=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jn.subVectors(s,t),Ai.subVectors(n,t),Gc.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Ai),l=Jn.dot(Gc),c=Ai.dot(Ai),h=Ai.dot(Gc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return qc.setScalar(0),$c.setScalar(0),Yc.setScalar(0),qc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),Yc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(qc,r.x),a.addScaledVector($c,r.y),a.addScaledVector(Yc,r.z),a}static isFrontFacing(e,t,n,s){return Jn.subVectors(n,t),Ai.subVectors(e,t),Jn.cross(Ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ys.subVectors(s,n),Ks.subVectors(r,n),Vc.subVectors(e,n);let l=Ys.dot(Vc),c=Ks.dot(Vc);if(l<=0&&c<=0)return t.copy(n);Wc.subVectors(e,s);let h=Ys.dot(Wc),d=Ks.dot(Wc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ys,a);Xc.subVectors(e,r);let f=Ys.dot(Xc),p=Ks.dot(Xc);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ks,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Ed.subVectors(r,s),o=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Ed,o);let g=1/(m+x+u);return a=x*g,o=u*g,t.copy(n).addScaledVector(Ys,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Mo.subVectors(this.max,jr),Zs.subVectors(e.a,jr),Js.subVectors(e.b,jr),js.subVectors(e.c,jr),Zi.subVectors(Js,Zs),Ji.subVectors(js,Js),ps.subVectors(Zs,js);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-ps.z,ps.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,ps.z,0,-ps.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-ps.y,ps.x,0];return!Kc(t,Zs,Js,js,Mo)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,Zs,Js,js,Mo))?!1:(So.crossVectors(Zi,Ji),t=[So.x,So.y,So.z],Kc(t,Zs,Js,js,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new C,new C,new C,new C,new C,new C,new C,new C],jn=new C,vo=new dn,Zs=new C,Js=new C,js=new C,Zi=new C,Ji=new C,ps=new C,jr=new C,Mo=new C,So=new C,ms=new C;function Kc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ms.fromArray(i,r);let o=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qt=new C,bo=new oe,tg=0,Zt=class extends Qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=kn,this.version=0,this._normalizationScale=e!==void 0?pc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):eu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tu(e,this.array)}};var _a=class extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xa=class extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vt=class extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ng=new dn,Qr=new C,Zc=new C,Rn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ng.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Zc)),this.expandByPoint(Qr.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ig=0,Hn=new Qe,Jc=new Ut,Qs=new C,Un=new dn,ea=new dn,hn=new C,Ot=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rm(e)?xa:_a)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Un.min,ea.min),Un.expandByPoint(hn),hn.addVectors(Un.max,ea.max),Un.expandByPoint(hn)):(Un.expandByPoint(ea.min),Un.expandByPoint(ea.max))}Un.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hn.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(e,c),hn.add(Qs)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;let h=new C,d=new C,u=new C,f=new oe,p=new oe,x=new oe,m=new C,g=new C;function v(P,I,N){c[P]=c[I]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,I),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,I),x.fromBufferAttribute(r,N),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(F),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(F),o[P].add(m),o[I].add(m),o[N].add(m),l[P].add(g),l[I].add(g),l[N].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,I=y.length;P<I;++P){let N=y[P],F=N.start,z=N.count;for(let L=F,H=F+z;L<H;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let M=new C,T=new C,S=new C,_=new C;function b(P){S.fromBufferAttribute(s,P),_.copy(S);let I=o[P];M.copy(I),M.sub(S.multiplyScalar(S.dot(I))).normalize(),T.crossVectors(_,I);let F=T.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,F)}for(let P=0,I=n.count;P<I;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Zt(u,h,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Es=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function wd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ii()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var En=new C,es=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?pc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):eu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tu(e,this.data.array)}},jc=new C,sg=new C,rg=new rt,pn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jc.subVectors(n,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(jc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rg.getNormalMatrix(e),s=this.coplanarPoint(jc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ag=0,vn=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Lr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Lh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xr=class extends vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},er,ta=new C,tr=new C,nr=new C,ir=new oe,na=new oe,qf=new Qe,Eo=new C,ia=new C,wo=new C,Td=new oe,Qc=new oe,Ad=new oe,ya=class extends Ut{constructor(e=new xr){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Es(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new es(n,3,0,!1)),er.setAttribute("uv",new es(n,2,3,!1))}this.geometry=er,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),qf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;To(Eo.set(-.5,-.5,0),nr,a,tr,s,r),To(ia.set(.5,-.5,0),nr,a,tr,s,r),To(wo.set(.5,.5,0),nr,a,tr,s,r),Td.set(0,0),Qc.set(1,0),Ad.set(1,1);let o=e.ray.intersectTriangle(Eo,ia,wo,!1,ta);if(o===null&&(To(ia.set(-.5,.5,0),nr,a,tr,s,r),Qc.set(0,1),o=e.ray.intersectTriangle(Eo,wo,ia,!1,ta),o===null))return;let l=e.ray.origin.distanceTo(ta);l<e.near||l>e.far||t.push({distance:l,point:ta.clone(),uv:li.getInterpolation(ta,Eo,ia,wo,Td,Qc,Ad,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function To(i,e,t,n,s,r){ir.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(na.x=r*ir.x-s*ir.y,na.y=s*ir.x+r*ir.y):na.copy(ir),i.copy(e),i.x+=na.x,i.y+=na.y,i.applyMatrix4(qf)}var Ii=new C,eh=new C,Ao=new C,Ro=new C,ui=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){eh.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),Ro.copy(this.origin).sub(eh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ao),o=Ro.dot(this.direction),l=-Ro.dot(Ao),c=Ro.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(eh).addScaledVector(Ao,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,m=t.z-a.z,g=n.x-a.x,v=n.y-a.y,y=n.z-a.z,M=Math.abs(l),T=Math.abs(c),S=Math.abs(h),_,b,P,I,N,F,z,L,H,G,V,se;if(M>=T&&M>=S?(P=l,F=d,H=p,se=g,l>=0?(_=c,b=h,I=u,N=f,z=x,L=m,G=v,V=y):(_=h,b=c,I=f,N=u,z=m,L=x,G=y,V=v)):T>=S?(P=c,F=u,H=x,se=v,c>=0?(_=h,b=l,I=f,N=d,z=m,L=p,G=y,V=g):(_=l,b=h,I=d,N=f,z=p,L=m,G=g,V=y)):(P=h,F=f,H=m,se=y,h>=0?(_=l,b=c,I=d,N=u,z=p,L=x,G=g,V=v):(_=c,b=l,I=u,N=d,z=x,L=p,G=v,V=g)),P===0)return null;let K=_/P,te=b/P,re=1/P,Le=I-K*F,j=N-te*F,W=z-K*H,le=L-te*H,J=G-K*se,Ie=V-te*se,_e=J*le-Ie*W,ze=Le*Ie-j*J,xt=W*j-le*Le;if(s){if(_e<0||ze<0||xt<0)return null}else if((_e<0||ze<0||xt<0)&&(_e>0||ze>0||xt>0))return null;let $e=_e+ze+xt;if($e===0)return null;let ot=re*(_e*F+ze*H+xt*se);return($e>0?ot<0:ot>0)?null:this.at(ot/$e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bt=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rd=new Qe,gs=new ui,Co=new Rn,Cd=new C,Io=new C,Po=new C,Lo=new C,th=new C,Do=new C,Id=new C,No=new C,Fe=class extends Ut{constructor(e=new Ot,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(th.fromBufferAttribute(d,e),a?Do.addScaledVector(th,h):Do.addScaledVector(th.sub(t),h))}t.add(Do)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(Co.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Co,Cd)===null||gs.origin.distanceToSquared(Cd)>(e.far-e.near)**2))&&(Rd.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Rd),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,T=y;M<T;M+=3){let S=o.getX(M),_=o.getX(M+1),b=o.getX(M+2);s=Uo(this,g,e,n,c,h,d,S,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);s=Uo(this,a,e,n,c,h,d,v,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,T=y;M<T;M+=3){let S=M,_=M+1,b=M+2;s=Uo(this,g,e,n,c,h,d,S,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=m,y=m+1,M=m+2;s=Uo(this,a,e,n,c,h,d,v,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function og(i,e,t,n,s,r,a,o){let l;if(e.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===_i,o),l===null)return null;No.copy(o),No.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:i}}function Uo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Io),i.getVertexPosition(l,Po),i.getVertexPosition(c,Lo);let h=og(i,e,t,n,Io,Po,Lo,Id);if(h){let d=new C;li.getBarycoord(Id,Io,Po,Lo,d),s&&(h.uv=li.getInterpolatedAttribute(s,o,l,c,d,new oe)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,l,c,d,new oe)),a&&(h.normal=li.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};li.getNormal(Io,Po,Lo,u.normal),h.face=u,h.barycoord=d}return h}var sa=new Pt,Pd=new Pt,Ld=new Pt,lg=new Pt,Dd=new Qe,Oo=new C,nh=new Rn,Nd=new Qe,ih=new ui,va=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uh,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oo),this.boundingBox.expandByPoint(Oo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oo),this.boundingSphere.expandByPoint(Oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nh.copy(this.boundingSphere),nh.applyMatrix4(s),e.ray.intersectsSphere(nh)!==!1&&(Nd.copy(s).invert(),ih.copy(e.ray).applyMatrix4(Nd),!(this.boundingBox!==null&&ih.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ih)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pf?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Pd.fromBufferAttribute(s.attributes.skinIndex,e),Ld.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(sa.copy(t),t.set(0,0,0,0)):(sa.set(t.x,t.y,t.z,1),t.set(0,0,0)),sa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Ld.getComponent(r);if(a!==0){let o=Pd.getComponent(r);Dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(lg.copy(sa).applyMatrix4(Dd),a)}}return t.isVector4&&(t.w=sa.w),t.applyMatrix4(this.bindMatrixInverse)}},yr=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},vr=class extends rn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Jt,h=Jt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ud=new Qe,cg=new Qe,Ma=class i{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:cg;Ud.multiplyMatrices(o,t[r]),Ud.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vr(t,e,e,qn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(qe("Skeleton: No bone found with UUID:",r),a=new yr),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ni=class extends Zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sr=new Qe,Od=new Qe,Fo=[],Fd=new dn,hg=new Qe,ra=new Fe,aa=new Rn,Ui=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),Fd.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(Fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),aa.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(n),e.ray.intersectsSphere(aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),Od.multiplyMatrices(n,sr),ra.matrixWorld=Od,ra.raycast(e,Fo);for(let a=0,o=Fo.length;a<o;a++){let l=Fo[a];l.instanceId=r,l.object=this,t.push(l)}Fo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,Nl,kn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new Rn,ug=new oe(.5,.5),Bo=new C,ts=class{constructor(e=new pn,t=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],y=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,g-p,T-v).normalize(),s[1].setComponents(c+a,f+h,g+p,T+v).normalize(),s[2].setComponents(c+o,f+d,g+x,T+y).normalize(),s[3].setComponents(c-o,f-d,g-x,T-y).normalize(),n)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,g-m,T-M).normalize();else if(s[4].setComponents(c-l,f-u,g-m,T-M).normalize(),t===Vn)s[5].setComponents(c+l,f+u,g+m,T+M).normalize();else if(t===dr)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);let t=ug.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Bo.x=s.normal.x>0?e.max.x:e.min.x,Bo.y=s.normal.y>0?e.max.y:e.min.y,Bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bd=new Qe,ll=class i{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Bd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ts),n[s].setFromProjectionMatrix(Bd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ts),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ei=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cl=new C,hl=new C,kd=new Qe,oa=new ui,ko=new Rn,sh=new C,zd=new C,ws=class extends Ut{constructor(e=new Ot,t=new ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)cl.fromBufferAttribute(t,s-1),hl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=cl.distanceTo(hl);e.setAttribute("lineDistance",new vt(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;kd.copy(s).invert(),oa.copy(e.ray).applyMatrix4(kd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),v=h.getX(x+1),y=zo(this,e,oa,l,g,v,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=zo(this,e,oa,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=zo(this,e,oa,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=zo(this,e,oa,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(cl.fromBufferAttribute(o,s),hl.fromBufferAttribute(o,r),t.distanceSqToSegment(cl,hl,sh,zd)>n)return;sh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(sh);if(!(c<e.near||c>e.far))return{distance:c,point:zd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Hd=new C,Gd=new C,di=class extends ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hd.fromBufferAttribute(t,s),Gd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hd.distanceTo(Gd);e.setAttribute("lineDistance",new vt(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Sa=class extends ws{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Oi=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vd=new Qe,gh=new ui,Ho=new Rn,Go=new C,ns=class extends Ut{constructor(e=new Ot,t=new Oi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;Vd.copy(s).invert(),gh.copy(e.ray).applyMatrix4(Vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);Go.fromBufferAttribute(d,m),Wd(Go,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)Go.fromBufferAttribute(d,p),Wd(Go,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wd(i,e,t,n,s,r,a){let o=gh.distanceSqToPoint(i);if(o<t){let l=new C;gh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ba=class extends rn{constructor(e=[],t=Us,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mr=class extends rn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends rn{constructor(e,t,n=ti,s,r,a,o=Jt,l=Jt,c,h=Di,d=1){if(h!==Di&&h!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ea=class extends Fi{constructor(e,t=ti,n=Us,s,r,a=Jt,o=Jt,l,c=Di){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wa=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_t=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function p(x,m,g,v,y,M,T,S,_,b,P){let I=M/_,N=T/b,F=M/2,z=T/2,L=S/2,H=_+1,G=b+1,V=0,se=0,K=new C;for(let te=0;te<G;te++){let re=te*N-z;for(let Le=0;Le<H;Le++){let j=Le*I-F;K[x]=j*v,K[m]=re*y,K[g]=L,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[g]=S>0?1:-1,h.push(K.x,K.y,K.z),d.push(Le/_),d.push(1-te/b),V+=1}}for(let te=0;te<b;te++)for(let re=0;re<_;re++){let Le=u+re+H*te,j=u+re+H*(te+1),W=u+(re+1)+H*(te+1),le=u+(re+1)+H*te;l.push(Le,j,le),l.push(j,W,le),se+=6}o.addGroup(f,se,P),f+=se,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Fn=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=n/2,g=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function v(){let M=new C,T=new C,S=0,_=(t-e)/n;for(let b=0;b<=r;b++){let P=[],I=b/r,N=I*(t-e)+e;for(let F=0;F<=s;F++){let z=F/s,L=z*l+o,H=Math.sin(L),G=Math.cos(L);T.x=N*H,T.y=-I*n+m,T.z=N*G,d.push(T.x,T.y,T.z),M.set(H,_,G).normalize(),u.push(M.x,M.y,M.z),f.push(z,1-I),P.push(p++)}x.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let I=x[P][b],N=x[P+1][b],F=x[P+1][b+1],z=x[P][b+1];(e>0||P!==0)&&(h.push(I,N,z),S+=3),(t>0||P!==r-1)&&(h.push(N,F,z),S+=3)}c.addGroup(g,S,0),g+=S}function y(M){let T=p,S=new oe,_=new C,b=0,P=M===!0?e:t,I=M===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),p++;let N=p;for(let F=0;F<=s;F++){let L=F/s*l+o,H=Math.cos(L),G=Math.sin(L);_.x=P*G,_.y=m*I,_.z=P*H,d.push(_.x,_.y,_.z),u.push(0,I,0),S.x=H*.5+.5,S.y=G*.5*I+.5,f.push(S.x,S.y),p++}for(let F=0;F<s;F++){let z=T+F,L=N+F;M===!0?h.push(L,L+1,z):h.push(L+1,L,z),b+=3}c.addGroup(g,b,M===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sr=class i extends Fn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ta=class i extends Ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let y=new C,M=new C,T=new C;for(let S=0;S<t.length;S+=3)f(t[S+0],y),f(t[S+1],M),f(t[S+2],T),l(y,M,T,v)}function l(v,y,M,T){let S=T+1,_=[];for(let b=0;b<=S;b++){_[b]=[];let P=v.clone().lerp(M,b/S),I=y.clone().lerp(M,b/S),N=S-b;for(let F=0;F<=N;F++)F===0&&b===S?_[b][F]=P:_[b][F]=P.clone().lerp(I,F/N)}for(let b=0;b<S;b++)for(let P=0;P<2*(S-b)-1;P++){let I=Math.floor(P/2);P%2===0?(u(_[b][I+1]),u(_[b+1][I]),u(_[b][I])):(u(_[b][I+1]),u(_[b+1][I+1]),u(_[b+1][I]))}}function c(v){let y=new C;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(v),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let v=new C;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let M=m(v)/2/Math.PI+.5,T=g(v)/Math.PI+.5;a.push(M,1-T)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){let y=a[v+0],M=a[v+2],T=a[v+4],S=Math.max(y,M,T),_=Math.min(y,M,T);S>.9&&_<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,y){let M=v*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function p(){let v=new C,y=new C,M=new C,T=new C,S=new oe,_=new oe,b=new oe;for(let P=0,I=0;P<r.length;P+=9,I+=6){v.set(r[P+0],r[P+1],r[P+2]),y.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),S.set(a[I+0],a[I+1]),_.set(a[I+2],a[I+3]),b.set(a[I+4],a[I+5]),T.copy(v).add(y).add(M).divideScalar(3);let N=m(T);x(S,I+0,v,N),x(_,I+2,y,N),x(b,I+4,M,N)}}function x(v,y,M,T){T<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Aa=class i extends Ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Vo=new C,Wo=new C,rh=new C,Xo=new li,Ra=class extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(lr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:m,c:g}=Xo;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Xo.getNormal(rh),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let y=(v+1)%3,M=d[v],T=d[y],S=Xo[h[v]],_=Xo[h[y]],b=`${M}_${T}`,P=`${T}_${M}`,I=u.get(P);I?(rh.dot(I.normal)<=r&&(f.push(S.x,S.y,S.z),f.push(_.x,_.y,_.z)),u.set(P,null)):u.has(b)||u.set(b,{index0:c[v],index1:c[y],normal:rh.clone()})}}for(let p of u.values())if(p){let{index0:x,index1:m}=p;Vo.fromBufferAttribute(o,x),Wo.fromBufferAttribute(o,m),f.push(Vo.x,Vo.y,Vo.z),f.push(Wo.x,Wo.y,Wo.z)}this.setAttribute("position",new vt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new oe:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new Qe;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},br=class extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ul=class extends br{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Xd=new C,qd=new C,ah=new nu,oh=new nu,lh=new nu,Er=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qd.subVectors(s[0],s[1]).add(s[0]),c=qd);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),ah.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),oh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),lh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(ah.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),oh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),lh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ah.calc(l),oh.calc(l),lh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $d(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function dg(i,e){let t=1-i;return t*t*e}function fg(i,e){return 2*(1-i)*i*e}function pg(i,e){return i*i*e}function ua(i,e,t,n){return dg(i,e)+fg(i,t)+pg(i,n)}function mg(i,e){let t=1-i;return t*t*t*e}function gg(i,e){let t=1-i;return 3*t*t*i*e}function _g(i,e){return 3*(1-i)*i*i*e}function xg(i,e){return i*i*i*e}function da(i,e,t,n,s){return mg(i,e)+gg(i,t)+_g(i,n)+xg(i,s)}var Ca=class extends Bn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(da(e,s.x,r.x,a.x,o.x),da(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dl=class extends Bn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(da(e,s.x,r.x,a.x,o.x),da(e,s.y,r.y,a.y,o.y),da(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ia=class extends Bn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fl=class extends Bn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends Bn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ua(e,s.x,r.x,a.x),ua(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends Bn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ua(e,s.x,r.x,a.x),ua(e,s.y,r.y,a.y),ua(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set($d(o,l.x,c.x,h.x,d.x),$d(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},pl=Object.freeze({__proto__:null,ArcCurve:ul,CatmullRomCurve3:Er,CubicBezierCurve:Ca,CubicBezierCurve3:dl,EllipseCurve:br,LineCurve:Ia,LineCurve3:fl,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:La,SplineCurve:Da}),ml=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new pl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Na=class extends ml{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ia(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Pa(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ca(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Da(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new br(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},is=class extends Na{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Na().fromJSON(s))}return this}};function yg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=$f(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Eg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ua(r,a,t,o,l,c,0),a}function $f(i,e,t,n,s){let r;if(s===Ug(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Yd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Yd(a/n|0,i[a],i[a+1],r);return r&&wr(r,r.next)&&(Fa(r),r=r.next),r}function Ts(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(wr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Fa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ua(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Cg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Mg(i,n,s,r):vg(i)){e.push(l.i,i.i,c.i),Fa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Sg(Ts(i),e),Ua(i,e,t,n,s,r,2)):a===2&&bg(i,e,t,n,s,r):Ua(Ts(i),e,t,n,s,r,1);break}}}function vg(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&la(s,o,r,l,a,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Mg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),g=_h(f,p,e,t,n),v=_h(x,m,e,t,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=g&&M&&M.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&la(o,h,l,d,c,u,y.x,y.y)&&Wt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&la(o,h,l,d,c,u,M.x,M.y)&&Wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&la(o,h,l,d,c,u,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&la(o,h,l,d,c,u,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Sg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!wr(n,s)&&Kf(n,t,t.next,s)&&Oa(n,s)&&Oa(s,n)&&(e.push(n.i,t.i,s.i),Fa(t),Fa(t.next),t=i=s),t=t.next}while(t!==i);return Ts(t)}function bg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lg(a,o)){let l=Zf(a,o);a=Ts(a,a.next),l=Ts(l,l.next),Ua(a,e,t,n,s,r,0),Ua(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Eg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=$f(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pg(c))}s.sort(wg);for(let r=0;r<s.length;r++)t=Tg(s[r],t);return t}function wg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Tg(i,e){let t=Ag(i,e);if(!t)return e;let n=Zf(t,i);return Ts(n,n.next),Ts(t,t.next)}function Ag(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(wr(i,t))return t;do{if(wr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Yf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Oa(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Rg(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Rg(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function Cg(i,e,t,n){let s=i;do s.z===0&&(s.z=_h(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ig(s)}function Ig(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function _h(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Pg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Yf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function la(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Yf(i,e,t,n,s,r,a,o)}function Lg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Dg(i,e)&&(Oa(i,e)&&Oa(e,i)&&Ng(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||wr(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wr(i,e){return i.x===e.x&&i.y===e.y}function Kf(i,e,t,n){let s=$o(Wt(i,e,t)),r=$o(Wt(i,e,n)),a=$o(Wt(t,n,i)),o=$o(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&qo(i,t,e)||r===0&&qo(i,n,e)||a===0&&qo(t,i,n)||o===0&&qo(t,e,n))}function qo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function $o(i){return i>0?1:i<0?-1:0}function Dg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Kf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Oa(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function Ng(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Zf(i,e){let t=xh(i.i,i.x,i.y),n=xh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yd(i,e,t,n){let s=xh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ug(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yh=class{static triangulate(e,t,n=2){return yg(e,t,n)}},xs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Kd(e),Zd(n,e);let a=e.length;t.forEach(Kd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Zd(n,t[l]);let o=yh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Kd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var As=class i extends Ot{constructor(e=new is([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Og,y,M=!1,T,S,_,b;if(g){y=g.getSpacedPoints(h),M=!0,u=!1;let ne=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,ne),S=new C,_=new C,b=new C}u||(m=0,f=0,p=0,x=0);let P=o.extractPoints(c),I=P.shape,N=P.holes;if(!xs.isClockWise(I)){I=I.reverse();for(let ne=0,ve=N.length;ne<ve;ne++){let fe=N[ne];xs.isClockWise(fe)&&(N[ne]=fe.reverse())}}function z(ne){let fe=10000000000000001e-36,Ne=ne[0];for(let $=1;$<=ne.length;$++){let Ae=$%ne.length,me=ne[Ae],Re=me.x-Ne.x,Be=me.y-Ne.y,nt=Re*Re+Be*Be,O=Math.max(Math.abs(me.x),Math.abs(me.y),Math.abs(Ne.x),Math.abs(Ne.y)),kt=fe*O*O;if(nt<=kt){ne.splice(Ae,1),$--;continue}Ne=me}}z(I),N.forEach(z);let L=N.length,H=I;for(let ne=0;ne<L;ne++){let ve=N[ne];I=I.concat(ve)}function G(ne,ve,fe){return ve||tt("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ve,fe)}let V=I.length;function se(ne,ve,fe){let Ne,$,Ae,me=ne.x-ve.x,Re=ne.y-ve.y,Be=fe.x-ne.x,nt=fe.y-ne.y,O=me*me+Re*Re,kt=me*nt-Re*Be;if(Math.abs(kt)>Number.EPSILON){let Je=Math.sqrt(O),Tt=Math.sqrt(Be*Be+nt*nt),xe=ve.x-Re/Je,zt=ve.y+me/Je,Ye=fe.x-nt/Tt,je=fe.y+Be/Tt,A=((Ye-xe)*nt-(je-zt)*Be)/(me*nt-Re*Be);Ne=xe+me*A-ne.x,$=zt+Re*A-ne.y;let w=Ne*Ne+$*$;if(w<=2)return new oe(Ne,$);Ae=Math.sqrt(w/2)}else{let Je=!1;me>Number.EPSILON?Be>Number.EPSILON&&(Je=!0):me<-Number.EPSILON?Be<-Number.EPSILON&&(Je=!0):Math.sign(Re)===Math.sign(nt)&&(Je=!0),Je?(Ne=-Re,$=me,Ae=Math.sqrt(O)):(Ne=me,$=Re,Ae=Math.sqrt(O/2))}return new oe(Ne/Ae,$/Ae)}let K=[];for(let ne=0,ve=H.length,fe=ve-1,Ne=ne+1;ne<ve;ne++,fe++,Ne++)fe===ve&&(fe=0),Ne===ve&&(Ne=0),K[ne]=se(H[ne],H[fe],H[Ne]);let te=[],re,Le=K.concat();for(let ne=0,ve=L;ne<ve;ne++){let fe=N[ne];re=[];for(let Ne=0,$=fe.length,Ae=$-1,me=Ne+1;Ne<$;Ne++,Ae++,me++)Ae===$&&(Ae=0),me===$&&(me=0),re[Ne]=se(fe[Ne],fe[Ae],fe[me]);te.push(re),Le=Le.concat(re)}let j;if(m===0)j=xs.triangulateShape(H,N);else{let ne=[],ve=[];for(let fe=0;fe<m;fe++){let Ne=fe/m,$=f*Math.cos(Ne*Math.PI/2),Ae=p*Math.sin(Ne*Math.PI/2)+x;for(let me=0,Re=H.length;me<Re;me++){let Be=G(H[me],K[me],Ae);ze(Be.x,Be.y,-$),Ne===0&&ne.push(Be)}for(let me=0,Re=L;me<Re;me++){let Be=N[me];re=te[me];let nt=[];for(let O=0,kt=Be.length;O<kt;O++){let Je=G(Be[O],re[O],Ae);ze(Je.x,Je.y,-$),Ne===0&&nt.push(Je)}Ne===0&&ve.push(nt)}}j=xs.triangulateShape(ne,ve)}let W=j.length,le=p+x;for(let ne=0;ne<V;ne++){let ve=u?G(I[ne],Le[ne],le):I[ne];M?(_.copy(T.normals[0]).multiplyScalar(ve.x),S.copy(T.binormals[0]).multiplyScalar(ve.y),b.copy(y[0]).add(_).add(S),ze(b.x,b.y,b.z)):ze(ve.x,ve.y,0)}for(let ne=1;ne<=h;ne++)for(let ve=0;ve<V;ve++){let fe=u?G(I[ve],Le[ve],le):I[ve];M?(_.copy(T.normals[ne]).multiplyScalar(fe.x),S.copy(T.binormals[ne]).multiplyScalar(fe.y),b.copy(y[ne]).add(_).add(S),ze(b.x,b.y,b.z)):ze(fe.x,fe.y,d/h*ne)}for(let ne=m-1;ne>=0;ne--){let ve=ne/m,fe=f*Math.cos(ve*Math.PI/2),Ne=p*Math.sin(ve*Math.PI/2)+x;for(let $=0,Ae=H.length;$<Ae;$++){let me=G(H[$],K[$],Ne);ze(me.x,me.y,d+fe)}for(let $=0,Ae=N.length;$<Ae;$++){let me=N[$];re=te[$];for(let Re=0,Be=me.length;Re<Be;Re++){let nt=G(me[Re],re[Re],Ne);M?ze(nt.x,nt.y+y[h-1].y,y[h-1].x+fe):ze(nt.x,nt.y,d+fe)}}}J(),Ie();function J(){let ne=s.length/3;if(u){let ve=0,fe=V*ve;for(let Ne=0;Ne<W;Ne++){let $=j[Ne];xt($[2]+fe,$[1]+fe,$[0]+fe)}ve=h+m*2,fe=V*ve;for(let Ne=0;Ne<W;Ne++){let $=j[Ne];xt($[0]+fe,$[1]+fe,$[2]+fe)}}else{for(let ve=0;ve<W;ve++){let fe=j[ve];xt(fe[2],fe[1],fe[0])}for(let ve=0;ve<W;ve++){let fe=j[ve];xt(fe[0]+V*h,fe[1]+V*h,fe[2]+V*h)}}n.addGroup(ne,s.length/3-ne,0)}function Ie(){let ne=s.length/3,ve=0;_e(H,ve),ve+=H.length;for(let fe=0,Ne=N.length;fe<Ne;fe++){let $=N[fe];_e($,ve),ve+=$.length}n.addGroup(ne,s.length/3-ne,1)}function _e(ne,ve){let fe=ne.length;for(;--fe>=0;){let Ne=fe,$=fe-1;$<0&&($=ne.length-1);for(let Ae=0,me=h+m*2;Ae<me;Ae++){let Re=V*Ae,Be=V*(Ae+1),nt=ve+Ne+Re,O=ve+$+Re,kt=ve+$+Be,Je=ve+Ne+Be;$e(nt,O,kt,Je)}}}function ze(ne,ve,fe){l.push(ne),l.push(ve),l.push(fe)}function xt(ne,ve,fe){ot(ne),ot(ve),ot(fe);let Ne=s.length/3,$=v.generateTopUV(n,s,Ne-3,Ne-2,Ne-1);ht($[0]),ht($[1]),ht($[2])}function $e(ne,ve,fe,Ne){ot(ne),ot(ve),ot(Ne),ot(ve),ot(fe),ot(Ne);let $=s.length/3,Ae=v.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);ht(Ae[0]),ht(Ae[1]),ht(Ae[3]),ht(Ae[1]),ht(Ae[2]),ht(Ae[3])}function ot(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function ht(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new pl[s.type]().fromJSON(s)),new i(n,e.options)}},Og={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-d),new oe(u,1-p),new oe(x,1-g)]:[new oe(o,1-l),new oe(h,1-d),new oe(f,1-p),new oe(m,1-g)]}};function Fg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ba=class i extends Ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Tn=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*u-a;for(let y=0;y<c;y++){let M=y*d-r;p.push(M,-v,0),x.push(0,0,1),m.push(y/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let y=v+c*g,M=v+c*(g+1),T=v+1+c*(g+1),S=v+1+c*g;f.push(y,M,S),f.push(M,T,S)}this.setIndex(f),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},fi=class i extends Ot{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new C,p=new oe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let g=r+m/n*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<s;x++){let m=x*(n+1);for(let g=0;g<n;g++){let v=g+m,y=v,M=v+n+1,T=v+n+2,S=v+1;o.push(y,M,S),o.push(M,T,S)}}this.setIndex(o),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ss=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new C,u=new C,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],y=g/n,M=a+y*o,T=e*Math.cos(M),S=Math.sqrt(e*e-T*T),_=0;g===0&&a===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let P=b/t,I=s+P*r;d.x=-S*Math.cos(I),d.y=T,d.z=S*Math.sin(I),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(P+_,1-y),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let y=h[g][v+1],M=h[g][v],T=h[g+1][v],S=h[g+1][v+1];(g!==0||a>0)&&f.push(y,M,S),(g!==n-1||l<Math.PI)&&f.push(M,T,S)}this.setIndex(f),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ka=class i extends Ot{constructor(e=new La(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new oe,h=new C,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),g()}function m(y){h=e.getPointAt(y/t,h);let M=a.normals[y],T=a.binormals[y];for(let S=0;S<=s;S++){let _=S/s*Math.PI*2,b=Math.sin(_),P=-Math.cos(_);l.x=P*M.x+b*T.x,l.y=P*M.y+b*T.y,l.z=P*M.z+b*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let y=1;y<=t;y++)for(let M=1;M<=s;M++){let T=(s+1)*(y-1)+(M-1),S=(s+1)*y+(M-1),_=(s+1)*y+M,b=(s+1)*(y-1)+M;p.push(T,S,b),p.push(S,_,b)}}function v(){for(let y=0;y<=t;y++)for(let M=0;M<=s;M++)c.x=y/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new pl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Bs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Jd(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Jd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Mn(i){let e={};for(let t=0;t<i.length;t++){let n=Bs(i[t]);for(let s in n)e[s]=n[s]}return e}function Jd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function iu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Jf={clone:Bs,merge:Mn},kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},gl=class extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ze=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},An=class extends Ze{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var za=class extends vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Al,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_l=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xl=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ca(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Hg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function jd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Gg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yl=class extends mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ph:r=e,o=2*t-n;break;case mh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:a=e,l=2*n-t;break;case mh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,y=(-1-f)*m+(1.5+f)*x+.5*p,M=f*m-f*x;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+v*a[c+T]+y*a[l+T]+M*a[d+T];return r}},vl=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Ml=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Sl=class extends mi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=f*u+p*2,v=d[g],y=d[g+1],M=e*u+p*2,T=h[M],S=h[M+1],_=Wg(n,t,v,T,s);r[p]=jf(_,x,y,S,m)}return r}};function jf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Vg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Wg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=jf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Vg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qi(t,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qi(e.times,Array),values:Qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ca(e.settings)&&(n.settings={inTangents:Qi(e.settings.inTangents,Array),outTangents:Qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case Ms:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break;case dh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return Ms;case this.InterpolantFactoryMethodSmooth:return Zo;case this.InterpolantFactoryMethodBezier:return dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ca(this.settings)&&(Qd(this.settings.inTangents,e),Qd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ca(this.settings)&&(ef(this.settings.inTangents,e),ef(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){tt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Cm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ca(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function ef(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ms;var Bi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=vs;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};Ha.prototype.ValueTypeName="color";var ki=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};ki.prototype.ValueTypeName="number";var bl=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)un.slerpFlat(r,0,a,c-o,a,c,l);return r}},zi=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}};zi.prototype.ValueTypeName="quaternion";zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=vs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};rs.prototype.ValueTypeName="vector";var Ga=class{constructor(e="",t=-1,n=[],s=Lf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(qg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Hg(l);l=jd(l,1,h),c=jd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ki(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Xg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return rs;case"color":return Ha;case"quaternion":return zi;case"bool":case"boolean":return Bi;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function qg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Xg(i.type);if(i.times===void 0){let n=[],s=[];Gg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ca(i.settings)&&(t.settings={inTangents:Qi(i.settings.inTangents,Float32Array),outTangents:Qi(i.settings.outTangents,Float32Array)}),t}var ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(tf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!tf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function tf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Tr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qf=new Tr,gi=class{constructor(e){this.manager=e!==void 0?e:Qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pi={},vh=class extends Error{constructor(e,t){super(e),this.response=t}},Ar=class extends gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:s});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Pi[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,m=new ReadableStream({start(g){v();function v(){d.read().then(({done:y,value:M})=>{if(y)g.close();else{x+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let S=0,_=h.length;S<_;S++){let b=h[S];b.onProgress&&b.onProgress(T)}g.enqueue(M),v()}},y=>{g.error(y)})}}});return new Response(m)}else throw new vh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ci.add(`file:${e}`,c);let h=Pi[e];delete Pi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Pi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Pi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var rr=new WeakMap,El=class extends gi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=rr.get(a);d===void 0&&(d=[],rr.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=fr("img");function l(){h(),t&&t(this);let d=rr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}rr.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),ci.remove(`image:${e}`);let u=rr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}rr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ci.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Va=class extends gi{constructor(e){super(e)}load(e,t,n,s){let r=new rn,a=new El(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Rs=class extends Ut{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wa=class extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ch=new Qe,nf=new C,sf=new C,Rr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ch,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yo=new C,Ko=new un,oi=new C,Xa=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yo,Ko,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,Ko,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yo,Ko,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,Ko,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new C,rf=new oe,af=new oe,nn=class extends Xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,rf,af),t.subVectors(af,rf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mh=class extends Rr{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ss*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},qa=class extends Rs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Sh=class extends Rr{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},Cs=class extends Rs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Is=class extends Xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bh=class extends Rr{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Gi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var hh=new WeakMap,$a=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ci.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{hh.has(a)===!0?(s&&s(hh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),hh.set(l,c),ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ar=-90,or=1,Cr=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(ar,or,e,t);s.layers=this.layers,this.add(s);let r=new nn(ar,or,e,t);r.layers=this.layers,this.add(r);let a=new nn(ar,or,e,t);a.layers=this.layers,this.add(a);let o=new nn(ar,or,e,t);o.layers=this.layers,this.add(o);let l=new nn(ar,or,e,t);l.layers=this.layers,this.add(l);let c=new nn(ar,or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},wl=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var su="\\[\\]\\.:\\/",$g=new RegExp("["+su+"]","g"),ru="[^"+su+"]",Yg="[^"+su.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",ru),Zg=/(WCOD+)?/.source.replace("WCOD",Yg),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),Qg=new RegExp("^"+Kg+Zg+Jg+jg+"$"),e0=["material","materials","bones","map"],Eh=class{constructor(e,t,n){let s=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($g,"")}static parseTrackName(e){let t=Qg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);e0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Eh;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lS=new Float32Array(1);var of=new Qe,Ls=class{constructor(e,t,n=0,s=1/0){this.ray=new ui(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return of.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(e,t=!0,n=[]){return wh(e,this,n,t),n.sort(lf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wh(e[s],this,n,t);return n.sort(lf),n}};function lf(i,e){return i.distance-e.distance}function wh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)wh(r[a],e,t,!0)}}var Ir=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Th=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var Ya=class extends di{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ge(n),s=new Ge(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let x=u===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new Ot;h.setAttribute("position",new vt(l,3)),h.setAttribute("color",new vt(c,3));let d=new ei({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Ka=class extends Qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function au(i,e,t,n){let s=t0(n);switch(t){case Wh:return i*e;case Nl:return i*e/s.components*s.byteLength;case Ul:return i*e/s.components*s.byteLength;case ls:return i*e*2/s.components*s.byteLength;case Ol:return i*e*2/s.components*s.byteLength;case Xh:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case Fl:return i*e*4/s.components*s.byteLength;case ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:case Hl:return Math.max(i,16)*Math.max(e,8)/4;case Bl:case zl:return Math.max(i,8)*Math.max(e,8)/2;case Gl:case Vl:case Xl:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wl:case no:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case io:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t0(i){switch(i){case In:case zh:return{byteLength:1,components:1};case Ur:case Hh:case ni:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case ti:case Pl:case kn:return{byteLength:4,components:1};case Gh:case Vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Mp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function i0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
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
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
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
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_0=`#ifdef USE_IRIDESCENCE
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
#endif`,x0=`#ifdef USE_BUMPMAP
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,A0=`#define PI 3.141592653589793
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
} // validated`,R0=`vec3 transformedNormal = objectNormal;
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
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,K0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e_=`PhysicalMaterial material;
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
#endif`,t_=`uniform sampler2D dfgLUT;
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
}`,n_=`
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
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
#endif`,s_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f_=`#if defined( USE_POINTS_UV )
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
#endif`,p_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
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
#endif`,x_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`#ifdef USE_MORPHTARGETS
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
#endif`,v_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T_=`#ifdef USE_NORMALMAP
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
#endif`,A_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G_=`float getShadowMask() {
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
}`,V_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,$_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform float backgroundBlurriness;
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,hx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,Mx=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Ix=`#define TOON
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
}`,Px=`uniform float size;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:s0,alphahash_pars_fragment:r0,alphamap_fragment:a0,alphamap_pars_fragment:o0,alphatest_fragment:l0,alphatest_pars_fragment:c0,aomap_fragment:h0,aomap_pars_fragment:u0,batching_pars_vertex:d0,batching_vertex:f0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:_0,bumpmap_pars_fragment:x0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:S0,color_fragment:b0,color_pars_fragment:E0,color_pars_vertex:w0,color_vertex:T0,common:A0,defaultnormal_vertex:R0,displacementmap_pars_vertex:C0,displacementmap_vertex:I0,emissivemap_fragment:P0,emissivemap_pars_fragment:L0,colorspace_fragment:D0,colorspace_pars_fragment:N0,envmap_fragment:U0,envmap_common_pars_fragment:O0,envmap_pars_fragment:F0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:K0,envmap_vertex:k0,fog_vertex:z0,fog_pars_vertex:H0,fog_fragment:G0,fog_pars_fragment:V0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:$0,lights_pars_begin:Y0,lights_toon_fragment:Z0,lights_toon_pars_fragment:J0,lights_phong_fragment:j0,lights_phong_pars_fragment:Q0,lights_physical_fragment:e_,lights_physical_pars_fragment:t_,lights_fragment_begin:n_,lights_fragment_maps:i_,lights_fragment_end:s_,lightprobes_pars_fragment:r_,logdepthbuf_fragment:a_,logdepthbuf_pars_fragment:o_,logdepthbuf_pars_vertex:l_,logdepthbuf_vertex:c_,map_fragment:h_,map_pars_fragment:u_,map_particle_fragment:d_,map_particle_pars_fragment:f_,metalnessmap_fragment:p_,metalnessmap_pars_fragment:m_,morphinstance_vertex:g_,morphcolor_vertex:__,morphnormal_vertex:x_,morphtarget_pars_vertex:y_,morphtarget_vertex:v_,normal_fragment_begin:M_,normal_fragment_maps:S_,normal_pars_fragment:b_,normal_pars_vertex:E_,normal_vertex:w_,normalmap_pars_fragment:T_,clearcoat_normal_fragment_begin:A_,clearcoat_normal_fragment_maps:R_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:I_,opaque_fragment:P_,packing:L_,premultiplied_alpha_fragment:D_,project_vertex:N_,dithering_fragment:U_,dithering_pars_fragment:O_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:B_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:z_,shadowmap_vertex:H_,shadowmask_pars_fragment:G_,skinbase_vertex:V_,skinning_pars_vertex:W_,skinning_vertex:X_,skinnormal_vertex:q_,specularmap_fragment:$_,specularmap_pars_fragment:Y_,tonemapping_fragment:K_,tonemapping_pars_fragment:Z_,transmission_fragment:J_,transmission_pars_fragment:j_,uv_pars_fragment:Q_,uv_pars_vertex:ex,uv_vertex:tx,worldpos_vertex:nx,background_vert:ix,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ax,cube_vert:ox,cube_frag:lx,depth_vert:cx,depth_frag:hx,distance_vert:ux,distance_frag:dx,equirect_vert:fx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:_x,meshbasic_frag:xx,meshlambert_vert:yx,meshlambert_frag:vx,meshmatcap_vert:Mx,meshmatcap_frag:Sx,meshnormal_vert:bx,meshnormal_frag:Ex,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:Ix,points_vert:Px,points_frag:Lx,shadow_vert:Dx,shadow_frag:Nx,sprite_vert:Ux,sprite_frag:Ox},De={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},vi={basic:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Mn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Mn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Mn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Mn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Mn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Mn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Mn([De.common,De.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Mn([De.lights,De.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};vi.physical={uniforms:Mn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var mc={r:0,b:0,g:0},Fx=new Qe,Sp=new rt;Sp.set(-1,0,0,0,1,0,0,0,1);function Bx(i,e,t,n,s,r){let a=new Ge(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){let M=v.backgroundBlurriness>0;y=e.get(y,M)}return y}function p(v){let y=!1,M=f(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,y){let M=f(y);M&&M.isCubeTexture?(c===void 0&&(c=new Fe(new _t(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Bs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sp),c.material.toneMapped=mt.getTransfer(M.colorSpace)!==It,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Fe(new Tn(2,2),new pi({name:"BackgroundMaterial",uniforms:Bs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=mt.getTransfer(M.colorSpace)!==It,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(mc,iu(i)),t.buffers.color.setClear(mc.r,mc.g,mc.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:x,dispose:g}}function kx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,F,z,L,H){let G=!1,V=d(N,L,z,F);r!==V&&(r=V,c(r.object)),G=f(N,L,z,H),G&&p(N,L,z,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(N,F,z,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,F,z,L){let H=L.wireframe===!0,G=n[F.id];G===void 0&&(G={},n[F.id]=G);let V=N.isInstancedMesh===!0?N.id:0,se=G[V];se===void 0&&(se={},G[V]=se);let K=se[z.id];K===void 0&&(K={},se[z.id]=K);let te=K[H];return te===void 0&&(te=u(l()),K[H]=te),te}function u(N){let F=[],z=[],L=[];for(let H=0;H<t;H++)F[H]=0,z[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,F,z,L){let H=r.attributes,G=F.attributes,V=0,se=z.getAttributes();for(let K in se)if(se[K].location>=0){let re=H[K],Le=G[K];if(Le===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Le=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Le=N.instanceColor)),re===void 0||re.attribute!==Le||Le&&re.data!==Le.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function p(N,F,z,L){let H={},G=F.attributes,V=0,se=z.getAttributes();for(let K in se)if(se[K].location>=0){let re=G[K];re===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));let Le={};Le.attribute=re,re&&re.data&&(Le.data=re.data),H[K]=Le,V++}r.attributes=H,r.attributesNum=V,r.index=L}function x(){let N=r.newAttributes;for(let F=0,z=N.length;F<z;F++)N[F]=0}function m(N){g(N,0)}function g(N,F){let z=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;z[N]=1,L[N]===0&&(i.enableVertexAttribArray(N),L[N]=1),H[N]!==F&&(i.vertexAttribDivisor(N,F),H[N]=F)}function v(){let N=r.newAttributes,F=r.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==N[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function y(N,F,z,L,H,G,V){V===!0?i.vertexAttribIPointer(N,F,z,H,G):i.vertexAttribPointer(N,F,z,L,H,G)}function M(N,F,z,L){x();let H=L.attributes,G=z.getAttributes(),V=F.defaultAttributeValues;for(let se in G){let K=G[se];if(K.location>=0){let te=H[se];if(te===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){let re=te.normalized,Le=te.itemSize,j=e.get(te);if(j===void 0)continue;let W=j.buffer,le=j.type,J=j.bytesPerElement,Ie=le===i.INT||le===i.UNSIGNED_INT||te.gpuType===Pl;if(te.isInterleavedBufferAttribute){let _e=te.data,ze=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,xt=te.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let $e=0;$e<K.locationSize;$e++)g(K.location+$e,_e.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let $e=0;$e<K.locationSize;$e++)m(K.location+$e);i.bindBuffer(i.ARRAY_BUFFER,W);for(let $e=0;$e<K.locationSize;$e++)y(K.location+$e,Le/K.locationSize,le,re,ze*J,(xt+Le/K.locationSize*$e)*J,Ie)}else{if(te.isInstancedBufferAttribute){for(let _e=0;_e<K.locationSize;_e++)g(K.location+_e,te.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<K.locationSize;_e++)m(K.location+_e);i.bindBuffer(i.ARRAY_BUFFER,W);for(let _e=0;_e<K.locationSize;_e++)y(K.location+_e,Le/K.locationSize,le,re,Le*J,Le/K.locationSize*_e*J,Ie)}}else if(V!==void 0){let re=V[se];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(K.location,re);break;case 3:i.vertexAttrib3fv(K.location,re);break;case 4:i.vertexAttrib4fv(K.location,re);break;default:i.vertexAttrib1fv(K.location,re)}}}}v()}function T(){P();for(let N in n){let F=n[N];for(let z in F){let L=F[z];for(let H in L){let G=L[H];for(let V in G)h(G[V].object),delete G[V];delete L[H]}}delete n[N]}}function S(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let z in F){let L=F[z];for(let H in L){let G=L[H];for(let V in G)h(G[V].object),delete G[V];delete L[H]}}delete n[N.id]}function _(N){for(let F in n){let z=n[F];for(let L in z){let H=z[L];if(H[N.id]===void 0)continue;let G=H[N.id];for(let V in G)h(G[V].object),delete G[V];delete H[N.id]}}}function b(N){for(let F in n){let z=n[F],L=N.isInstancedMesh===!0?N.id:0,H=z[L];if(H!==void 0){for(let G in H){let V=H[G];for(let se in V)h(V[se].object),delete V[se];delete H[G]}delete z[L],Object.keys(z).length===0&&delete n[F]}}}function P(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function zx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==qn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==In&&_!==kn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:T,samples:S}}function Gx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new pn,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,y=v*4,M=g.clippingState||null;l.value=M,M=h(p,u,y,f);for(let T=0;T!==y;++T)M[T]=t[T];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=f;y!==x;++y,M+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var lo=class extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ba(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _t(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Ds});r.uniforms.tEquirect.value=t;let a=new Fe(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=sn),new Cr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ep=256,Vx=3,Wx=20,bp=256,Ep=16,Xx=3,qx=new C,$x=new Ge,Br=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Cr(1,10,null),this._boxMesh=new Fe(new _t(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=qx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor($x));let m=new Cr(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ep,Qh(e))}_fromTexture(e,t){e.mapping===Us||e.mapping===Dr?this._setSize(e.image.length===0?ep:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=tp(e,!1,!1),n=Math.log2(e)-Vx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=tp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Us||e.mapping===Dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=np()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Yx(),this._integrationMaterial=Kx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ep);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Xx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(bp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Zx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function tp(i,e,t){return new lo(i,{minFilter:Xn,generateMipmaps:e,type:ni,colorSpace:wn,depthBuffer:t})}function co(i,e,t){return new pi({name:i,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:en,blending:Ds,depthTest:!1,depthWrite:!1})}function Yx(){return co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bp}u

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
	`)}function Kx(){return co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ep}},`

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
	`)}function Zx(){return co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Wx}
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
	`)}function np(){return co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ip(){return co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Rl||f===Cl)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new lo(p.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Rl||f===Cl,x=f===Us||f===Dr;if(p||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Br(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Br(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Rl?u.mapping=Us:f===Cl&&(u.mapping=Dr),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function jx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ys("WebGLRenderer: "+n+" extension not supported."),s}}}function Qx(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,y=m.count>=65535?xa:_a,M=new y(Math.ceil(v/3)*6,1),T=M.array;if(x!==null){let _=x.array;g=x.version;for(let b=0,P=0;b<v;b+=3){let I=_[b+0],N=_[b+1],F=_[b+2];T[P++]=I,T[P++]=N,T[P++]=N,T[P++]=F,T[P++]=F,T[P++]=I}}else{g=m.version;for(let _=0,b=0;_<v;_+=3){let P=_+0,I=_+1,N=_+2;T[b++]=P,T[b++]=I,T[b++]=I,T[b++]=N,T[b++]=N,T[b++]=P}}M.version=g;let S=r.get(p);S&&e.remove(S),r.set(p,M)}function u(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function ey(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ty(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ny(i,e,t){let n=new WeakMap,s=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let M=o.attributes.position.count*y,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*T*4*d),_=new ma(S,M,T,d);_.type=kn,_.needsUpdate=!0;let b=y*4;for(let I=0;I<d;I++){let N=m[I],F=g[I],z=v[I],L=M*T*4*I;for(let H=0;H<N.count;H++){let G=H*b;f===!0&&(s.fromBufferAttribute(N,H),S[L+G+0]=s.x,S[L+G+1]=s.y,S[L+G+2]=s.z,S[L+G+3]=0),p===!0&&(s.fromBufferAttribute(F,H),S[L+G+4]=s.x,S[L+G+5]=s.y,S[L+G+6]=s.z,S[L+G+7]=0),x===!0&&(s.fromBufferAttribute(z,H),S[L+G+8]=s.x,S[L+G+9]=s.y,S[L+G+10]=s.z,S[L+G+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new oe(M,T)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function iy(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var sy={[Dh]:"LINEAR_TONE_MAPPING",[Nh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[Ja]:"ACES_FILMIC_TONE_MAPPING",[Fh]:"AGX_TONE_MAPPING",[Bh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};function ry(i,e,t,n,s,r){let a=new On(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ot;h.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new vt([0,2,0,0,2,0],2));let d=new gl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Fe(h,d),f=new Is(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,y=[],M=!1;this.setSize=function(T,S){a.setSize(T,S),o!==null&&o.setSize(T,S),l!==null&&l.setSize(T,S);for(let _=0;_<y.length;_++){let b=y[_];b.setSize&&b.setSize(T,S)}},this.setEffects=function(T){y=T,M=y.length>0&&y[0].isRenderPass===!0;let S=a.width,_=a.height;y.length>0&&o===null&&(o=new On(S,_,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new On(S,_,{type:ni,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&y.some(P=>P.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Fi(S,_),r===!0&&(c.format=Vi,c.type=Fs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let P=0;P<y.length;P++){let I=y[P];I.setSize&&I.setSize(S,_),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(T,S){if(m||T.toneMapping===xi&&y.length===0)return!1;if(v=S,S!==null){let _=S.width,b=S.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return M===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=xi,!0},this.hasRenderPass=function(){return M},this.end=function(T,S){T.toneMapping=g,m=!0;let _=a,b=o;for(let P=0;P<y.length;P++){let I=y[P];I.enabled!==!1&&(I.render(T,b,_,S),I.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,d.defines={},mt.getTransfer(p)===It&&(d.defines.SRGB_TRANSFER="");let P=sy[x];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(u,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var wp=new rn,Tp=new Fi(1,1),Ap=new Ea(1),Rp=new ma,Cp=new ol,Ip=new ba,sp=[],rp=[],ap=new Float32Array(16),op=new Float32Array(9),lp=new Float32Array(4);function kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=sp[s];if(r===void 0&&(r=new Float32Array(s),sp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xc(i,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ay(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;lp.set(n),i.uniformMatrix2fv(this.addr,!1,lp),on(t,n)}}function uy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;op.set(n),i.uniformMatrix3fv(this.addr,!1,op),on(t,n)}}function dy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;ap.set(n),i.uniformMatrix4fv(this.addr,!1,ap),on(t,n)}}function fy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function _y(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function yc(i){return i.version===0&&(i.compareFunction=Kh,i.needsUpdate=!0),i}function My(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=yc(Tp):r=wp,t.setTexture2D(e||r,s)}function Sy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cp,s)}function by(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=yc(Ap):r=Ip,t.setTextureCube(e||r,s)}function Ey(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rp,s)}function wy(i){switch(i){case 5126:return ay;case 35664:return oy;case 35665:return ly;case 35666:return cy;case 35674:return hy;case 35675:return uy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return _y;case 36294:return xy;case 36295:return yy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return Ey}}function Ty(i,e){i.uniform1fv(this.addr,e)}function Ay(i,e){let t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ry(i,e){let t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function Cy(i,e){let t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function Iy(i,e){let t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Py(i,e){let t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ly(i,e){let t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dy(i,e){i.uniform1iv(this.addr,e)}function Ny(i,e){i.uniform2iv(this.addr,e)}function Uy(i,e){i.uniform3iv(this.addr,e)}function Oy(i,e){i.uniform4iv(this.addr,e)}function Fy(i,e){i.uniform1uiv(this.addr,e)}function By(i,e){i.uniform2uiv(this.addr,e)}function ky(i,e){i.uniform3uiv(this.addr,e)}function zy(i,e){i.uniform4uiv(this.addr,e)}function Hy(i,e,t){let n=this.cache,s=e.length,r=xc(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=yc(Tp):a=wp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Gy(i,e,t){let n=this.cache,s=e.length,r=xc(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cp,r[a])}function Vy(i,e,t){let n=this.cache,s=e.length,r=xc(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=yc(Ap):a=Ip;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Wy(i,e,t){let n=this.cache,s=e.length,r=xc(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rp,r[a])}function Xy(i){switch(i){case 5126:return Ty;case 35664:return Ay;case 35665:return Ry;case 35666:return Cy;case 35674:return Iy;case 35675:return Py;case 35676:return Ly;case 5124:case 35670:return Dy;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Oy;case 5125:return Fy;case 36294:return By;case 36295:return ky;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Wy}}var cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wy(t.type)}},hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xy(t.type)}},uu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ou=/(\w+)(\])?(\[|\.)?/g;function cp(i,e){i.seq.push(e),i.map[e.id]=e}function qy(i,e,t){let n=i.name,s=n.length;for(ou.lastIndex=0;;){let r=ou.exec(n),a=ou.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cp(t,c===void 0?new cu(o,i,e):new hu(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new uu(o),cp(t,d)),t=d}}}var Fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);qy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function hp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $y=37297,Yy=0;function Ky(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var up=new rt;function Zy(i){mt._getMatrix(up,mt.workingColorSpace,i);let e=`mat3( ${up.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case fa:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ky(i.getShaderSource(e),o)}else return r}function Jy(i,e){let t=Zy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var jy={[Dh]:"Linear",[Nh]:"Reinhard",[Uh]:"Cineon",[Ja]:"ACESFilmic",[Fh]:"AgX",[Bh]:"Neutral",[Oh]:"Custom"};function Qy(i,e){let t=jy[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gc=new C;function ev(){mt.getLuminanceCoefficients(gc);let i=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function nv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function oo(i){return i!==""}function fp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function pp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(i){return i.replace(sv,rv)}function rv(i,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return du(t)}var av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(i){return i.replace(av,ov)}function ov(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var lv={[Za]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function cv(i){return lv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hv={[Dr]:"ENVMAP_MODE_REFRACTION"};function uv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":hv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dv={[Al]:"ENVMAP_BLENDING_MULTIPLY",[Cf]:"ENVMAP_BLENDING_MIX",[If]:"ENVMAP_BLENDING_ADD"};function fv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dv[i.combine]||"ENVMAP_BLENDING_NONE"}function pv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=cv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=uv(t),d=fv(t),u=tv(t),f=nv(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(oo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(oo).join(`
`),m.length>0&&(m+=`
`)):(x=[gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),m=[gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?ft.tonemapping_pars_fragment:"",t.toneMapping!==xi?Qy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Jy("linearToOutputTexel",t.outputColorSpace),ev(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),a=du(a),a=fp(a,t),a=pp(a,t),o=du(o),o=fp(o,t),o=pp(o,t),a=mp(a),o=mp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+x+a,y=g+m+o,M=hp(s,s.VERTEX_SHADER,v),T=hp(s,s.FRAGMENT_SHADER,y);s.attachShader(p,M),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(M)||"",z=s.getShaderInfoLog(T)||"",L=N.trim(),H=F.trim(),G=z.trim(),V=!0,se=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,T);else{let K=dp(s,M,"vertex"),te=dp(s,T,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+K+`
`+te)}else L!==""?qe("WebGLProgram: Program Info Log:",L):(H===""||G==="")&&(se=!1);se&&(I.diagnostics={runnable:V,programLog:L,vertexShader:{log:H,prefix:x},fragmentShader:{log:G,prefix:m}})}s.deleteShader(M),s.deleteShader(T),_=new Fr(s,p),b=iv(s,p)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,$y)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}var mv=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pu(e),t.set(e,n)),n}},pu=class{constructor(e){this.id=mv++,this.code=e,this.usedTimes=0}};function gv(i){return i===ls||i===no||i===io}function _v(i,e,t,n,s,r){let a=new gr,o=new fu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,P,I,N,F){let z=I.fog,L=N.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||H,G),se=u[_.type],K=n.precision;_.precision!==null&&(K=n.getMaxPrecision(_.precision),K!==_.precision&&qe("WebGLProgram.getParameters:",_.precision,"not supported, using",K,"instead."));let te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,re=te!==void 0?te.length:0,Le=0;L.morphAttributes.position!==void 0&&(Le=1),L.morphAttributes.normal!==void 0&&(Le=2),L.morphAttributes.color!==void 0&&(Le=3);let j,W,le,J;if(se){let Pe=vi[se];j=Pe.vertexShader,W=Pe.fragmentShader}else{j=_.vertexShader,W=_.fragmentShader;let Pe=o.getVertexShaderStage(_),At=o.getFragmentShaderStage(_);o.update(_,Pe,At),le=Pe.id,J=At.id}let Ie=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,xt=N.isBatchedMesh===!0,$e=!!_.map,ot=!!_.matcap,ht=!!V,ne=ht&&V.isPMREMTexture===!0,ve=!!_.aoMap,fe=!!_.lightMap,Ne=!!_.bumpMap&&_.wireframe===!1,$=!!_.normalMap,Ae=!!_.displacementMap,me=!!_.emissiveMap,Re=!!_.metalnessMap,Be=!!_.roughnessMap,nt=_.anisotropy>0,O=_.clearcoat>0,kt=_.diffuseRoughness>0,Je=_.dispersion>0,Tt=_.retroreflectivity>0,xe=_.iridescence>0,zt=_.sheen>0,Ye=_.transmission>0,je=nt&&!!_.anisotropyMap,A=O&&!!_.clearcoatMap,w=O&&!!_.clearcoatNormalMap,X=O&&!!_.clearcoatRoughnessMap,ue=kt&&!!_.diffuseRoughnessMap,ae=xe&&!!_.iridescenceMap,Se=xe&&!!_.iridescenceThicknessMap,de=zt&&!!_.sheenColorMap,ee=zt&&!!_.sheenRoughnessMap,Q=!!_.specularMap,be=!!_.specularColorMap,D=!!_.specularIntensityMap,ie=Ye&&!!_.transmissionMap,Z=Ye&&!!_.thicknessMap,ye=!!_.gradientMap,pe=!!_.alphaMap,Ee=_.alphaTest>0,We=!!_.alphaHash,ct=!!_.extensions,ge=xi;_.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(ge=i.toneMapping);let Xe=ne?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,it={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:j,fragmentShader:W,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:K,batching:xt,batchingColor:xt&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:$e,matcap:ot,envMap:ht,envMapMode:ht&&V.mapping,envMapPMREM:ne,envMapMaxLod:ne?Xe.length-1:null,envMapSize:ne?Xe[0].width:null,aoMap:ve,lightMap:fe,bumpMap:Ne,normalMap:$,displacementMap:Ae,emissiveMap:me,normalMapObjectSpace:$&&_.normalMapType===Nf,normalMapTangentSpace:$&&_.normalMapType===ro,packedNormalMap:$&&_.normalMapType===ro&&gv(_.normalMap.format),metalnessMap:Re,roughnessMap:Be,anisotropy:nt,anisotropyMap:je,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:w,clearcoatRoughnessMap:X,diffuseRoughness:kt,diffuseRoughnessMap:ue,dispersion:Je,retroreflection:Tt,iridescence:xe,iridescenceMap:ae,iridescenceThicknessMap:Se,sheen:zt,sheenColorMap:de,sheenRoughnessMap:ee,specularMap:Q,specularColorMap:be,specularIntensityMap:D,transmission:Ye,transmissionMap:ie,thicknessMap:Z,gradientMap:ye,opaque:_.transparent===!1&&_.blending===Lr&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ee,alphaHash:We,combine:_.combine,mapUv:$e&&f(_.map.channel),aoMapUv:ve&&f(_.aoMap.channel),lightMapUv:fe&&f(_.lightMap.channel),bumpMapUv:Ne&&f(_.bumpMap.channel),normalMapUv:$&&f(_.normalMap.channel),displacementMapUv:Ae&&f(_.displacementMap.channel),emissiveMapUv:me&&f(_.emissiveMap.channel),metalnessMapUv:Re&&f(_.metalnessMap.channel),roughnessMapUv:Be&&f(_.roughnessMap.channel),anisotropyMapUv:je&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:be&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:ie&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:pe&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&($||nt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&($e||pe),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&$===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Le,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:$e&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===It,decodeVideoTextureEmissive:me&&_.emissiveMap.isVideoTexture===!0&&mt.getTransfer(_.emissiveMap.colorSpace)===It,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===tn,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||xt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(b,_),g(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function g(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let b=u[_.type],P;if(b){let I=vi[b];P=Jf.clone(I.uniforms)}else P=_.uniforms;return P}function y(_,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new pv(i,b,_,s),c.push(P),h.set(b,P)),P}function M(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function S(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:S}}function xv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function yv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,m,g){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=g),e++,v}function l(u,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let y=o(u,f,p,x,m,g);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):t.push(y)}function c(u,f,p,x,m,g){let v=o(u,f,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||yv),n.length>1&&n.sort(f||_p),s.length>1&&s.sort(f||_p)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function vv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new xp,i.set(n,[a])):s>=r.length?(a=new xp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Ge};break;case"SpotLight":t={position:new C,direction:new C,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Sv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var bv=0;function Ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wv(i){let e=new Mv,t=Sv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Qe,a=new Qe;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,y=0,M=0,T=0,S=0,_=0,b=0,P=0,I=0;c.sort(Ev);for(let F=0,z=c.length;F<z;F++){let L=c[F],H=L.color,G=L.intensity,V=L.distance,se=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ls?se=L.shadow.map.texture:se=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*G,d+=H.g*G,u+=H.b*G;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],G);I++}else if(L.isSunLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,re=t.get(L);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[p]=re,n.sunShadowMap[p]=se;let Le=te.getViewportCount();for(let j=0;j<Le;j++)n.sunShadowMatrix[x+j]=te.getMatrix(j),n.sunShadowCascade[x+j]=te._cascadeData[j];x+=Le,p++}n.sun[f]=K,f++}else if(L.isDirectionalLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,re=t.get(L);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=L.shadow.matrix,T++}n.directional[m]=K,m++}else if(L.isSpotLight){let K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(H).multiplyScalar(G),K.distance=V,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[v]=K;let te=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,te.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[v]=te.matrix,L.castShadow){let re=t.get(L);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,n.spotShadow[v]=re,n.spotShadowMap[v]=se,_++}v++}else if(L.isRectAreaLight){let K=e.get(L);K.color.copy(H).multiplyScalar(G),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=K,y++}else if(L.isPointLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let te=L.shadow,re=t.get(L);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,re.shadowCameraNear=te.camera.near,re.shadowCameraFar=te.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=K,g++}else if(L.isHemisphereLight){let K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(G),K.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[M]=K,M++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==y||N.hemiLength!==M||N.numSunShadows!==p||N.numDirectionalShadows!==T||N.numPointShadows!==S||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=y,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,N.sunLength=f,N.directionalLength=m,N.pointLength=g,N.spotLength=v,N.rectAreaLength=y,N.hemiLength=M,N.numSunShadows=p,N.numDirectionalShadows=T,N.numPointShadows=S,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=I,n.version=bv++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){let M=c[v];if(M.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),d++}else if(M.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),u++}else if(M.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function yp(i){let e=new wv(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Tv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new yp(i),e.set(s,[o])):r>=a.length?(o=new yp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rv=`uniform sampler2D shadow_pass;
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
}`,Cv=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Iv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],vp=new Qe,ao=new C,lu=new C;function Pv(i,e,t){let n=new ts,s=new oe,r=new oe,a=new Pt,o=new _l,l=new xl,c={},h=t.maxTextureSize,d={[_i]:en,[en]:_i,[tn]:tn},u=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Av,fragmentShader:Rv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ot;p.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let g=this.type;this.render=function(S,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Tl&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Za);let P=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ds),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=g!==this.type;z&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=S.length;L<H;L++){let G=S[L],V=G.shadow;if(V===void 0){qe("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let se=V.getFrameExtents();s.multiply(se),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,V.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=K,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Pr){if(G.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new On(s.x,s.y,{format:ls,type:ni,minFilter:sn,magFilter:sn,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new Fi(s.x,s.y,kn),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=Di,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Jt,V.map.depthTexture.magFilter=Jt}else G.isPointLight?(V.map=new lo(s.x),V.map.depthTexture=new Ea(s.x,ti)):(V.map=new On(s.x,s.y),V.map.depthTexture=new Fi(s.x,s.y,ti)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=Di,this.type===Za?(V.map.depthTexture.compareFunction=K?Yh:$h,V.map.depthTexture.minFilter=sn,V.map.depthTexture.magFilter=sn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Jt,V.map.depthTexture.magFilter=Jt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let te=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();G.isPointLight!==!0&&V.updateMatrices(G,b);let re=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let Le=0;Le<te;Le++){let j=V.getCamera(Le);if(G.isPointLight){let W=V.camera,le=V.matrix,J=G.distance||W.far;J!==W.far&&(W.far=J,W.updateProjectionMatrix()),ao.setFromMatrixPosition(G.matrixWorld),W.position.copy(ao),lu.copy(W.position),lu.add(Cv[Le]),W.up.copy(Iv[Le]),W.lookAt(lu),W.updateMatrixWorld(),le.makeTranslation(-ao.x,-ao.y,-ao.z),vp.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),V._frustum.setFromProjectionMatrix(vp,W.coordinateSystem,W.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Le),i.clear();else{Le===0&&(i.setRenderTarget(V.map),i.clear());let W=V.getViewport(Le);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),F.viewport(a)}n=V.getFrustum(Le),M(_,b,j,G,re,this.type)}V.isPointLightShadow!==!0&&this.type===Pr&&v(V,b),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(P,I,N)};function v(S,_){let b=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new On(s.x,s.y,{format:ls,type:ni}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function y(S,_,b,P){let I=null,N=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)I=N;else if(I=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=I.uuid,z=_.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let H=L[z];H===void 0&&(H=I.clone(),L[z]=H,_.addEventListener("dispose",T)),I=H}if(I.visible=_.visible,I.wireframe=_.wireframe,P===Pr?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:d[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=b}return I}function M(S,_,b,P,I,N){if(S.visible===!1)return;if(S.layers.test(I)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===Pr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let L=e.update(S),H=S.material;if(Array.isArray(H)){let G=L.groups;for(let V=0,se=G.length;V<se;V++){let K=G[V],te=H[K.materialIndex];if(te&&te.visible){let re=y(S,te,P,N);S.onBeforeShadow(i,S,_,b,L,re,K),i.renderBufferDirect(b,null,L,re,S,K),S.onAfterShadow(i,S,_,b,L,re,K)}}}else if(H.visible){let G=y(S,H,P,N);S.onBeforeShadow(i,S,_,b,L,G,null),i.renderBufferDirect(b,null,L,G,S,null),S.onAfterShadow(i,S,_,b,L,G,null)}}let z=S.children;for(let L=0,H=z.length;L<H;L++)M(z[L],_,b,P,I,N)}function T(S){S.target.removeEventListener("dispose",T);for(let b in c){let P=c[b],I=S.target.uuid;I in P&&(P[I].dispose(),delete P[I])}}}function Lv(i,e){function t(){let D=!1,ie=new Pt,Z=null,ye=new Pt(0,0,0,0);return{setMask:function(pe){Z!==pe&&!D&&(i.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){D=pe},setClear:function(pe,Ee,We,ct,ge){ge===!0&&(pe*=ct,Ee*=ct,We*=ct),ie.set(pe,Ee,We,ct),ye.equals(ie)===!1&&(i.clearColor(pe,Ee,We,ct),ye.copy(ie))},reset:function(){D=!1,Z=null,ye.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,Z=null,ye=null,pe=null;return{setReversed:function(Ee){if(ie!==Ee){let We=e.get("EXT_clip_control");Ee?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ie=Ee;let ct=pe;pe=null,this.setClear(ct)}},getReversed:function(){return ie},setTest:function(Ee){Ee?_e(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Ee){Z!==Ee&&!D&&(i.depthMask(Ee),Z=Ee)},setFunc:function(Ee){if(ie&&(Ee=Wf[Ee]),ye!==Ee){switch(Ee){case jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case el:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case tl:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=Ee}},setLocked:function(Ee){D=Ee},setClear:function(Ee){pe!==Ee&&(pe=Ee,ie&&(Ee=1-Ee),i.clearDepth(Ee))},reset:function(){D=!1,Z=null,ye=null,pe=null,ie=!1}}}function s(){let D=!1,ie=null,Z=null,ye=null,pe=null,Ee=null,We=null,ct=null,ge=null;return{setTest:function(Xe){D||(Xe?_e(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Xe){ie!==Xe&&!D&&(i.stencilMask(Xe),ie=Xe)},setFunc:function(Xe,it,Pe){(Z!==Xe||ye!==it||pe!==Pe)&&(i.stencilFunc(Xe,it,Pe),Z=Xe,ye=it,pe=Pe)},setOp:function(Xe,it,Pe){(Ee!==Xe||We!==it||ct!==Pe)&&(i.stencilOp(Xe,it,Pe),Ee=Xe,We=it,ct=Pe)},setLocked:function(Xe){D=Xe},setClear:function(Xe){ge!==Xe&&(i.clearStencil(Xe),ge=Xe)},reset:function(){D=!1,ie=null,Z=null,ye=null,pe=null,Ee=null,We=null,ct=null,ge=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,y=null,M=null,T=null,S=null,_=null,b=new Ge(0,0,0),P=0,I=!1,N=null,F=null,z=null,L=null,H=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,se=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=se>=1):K.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=se>=2);let te=null,re={},Le=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),W=new Pt().fromArray(Le),le=new Pt().fromArray(j);function J(D,ie,Z,ye){let pe=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(D,Ee),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<Z;We++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ie+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Ee}let Ie={};Ie[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(hr),Ne(!1),$(Ah),_e(i.CULL_FACE),ve(Ds);function _e(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function ze(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function xt(D,ie){return u[D]!==ie?(i.bindFramebuffer(D,ie),u[D]=ie,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function $e(D,ie){let Z=p,ye=!1;if(D){Z=f.get(ie),Z===void 0&&(Z=[],f.set(ie,Z));let pe=D.textures;if(Z.length!==pe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,We=pe.length;Ee<We;Ee++)Z[Ee]=i.COLOR_ATTACHMENT0+Ee;Z.length=pe.length,ye=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ye=!0);ye&&i.drawBuffers(Z)}function ot(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let ht={[Ns]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};ht[pf]=i.MIN,ht[mf]=i.MAX;let ne={[gf]:i.ZERO,[_f]:i.ONE,[xf]:i.SRC_COLOR,[Ph]:i.SRC_ALPHA,[Ef]:i.SRC_ALPHA_SATURATE,[Sf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[yf]:i.ONE_MINUS_SRC_COLOR,[Lh]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[Mf]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Tf]:i.ONE_MINUS_CONSTANT_COLOR,[Af]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(D,ie,Z,ye,pe,Ee,We,ct,ge,Xe){if(D===Ds){m===!0&&(ze(i.BLEND),m=!1);return}if(m===!1&&(_e(i.BLEND),m=!0),D!==uf){if(D!==g||Xe!==I){if((v!==Ns||T!==Ns)&&(i.blendEquation(i.FUNC_ADD),v=Ns,T=Ns),Xe)switch(D){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rh:i.blendFunc(i.ONE,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",D);break}else switch(D){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ch:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",D);break}y=null,M=null,S=null,_=null,b.set(0,0,0),P=0,g=D,I=Xe}return}pe=pe||ie,Ee=Ee||Z,We=We||ye,(ie!==v||pe!==T)&&(i.blendEquationSeparate(ht[ie],ht[pe]),v=ie,T=pe),(Z!==y||ye!==M||Ee!==S||We!==_)&&(i.blendFuncSeparate(ne[Z],ne[ye],ne[Ee],ne[We]),y=Z,M=ye,S=Ee,_=We),(ct.equals(b)===!1||ge!==P)&&(i.blendColor(ct.r,ct.g,ct.b,ge),b.copy(ct),P=ge),g=D,I=!1}function fe(D,ie){D.side===tn?ze(i.CULL_FACE):_e(i.CULL_FACE);let Z=D.side===en;ie&&(Z=!Z),Ne(Z),D.blending===Lr&&D.transparent===!1?ve(Ds):ve(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ye=D.stencilWrite;o.setTest(ye),ye&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function $(D){D!==cf?(_e(i.CULL_FACE),D!==F&&(D===Ah?i.cullFace(i.BACK):D===hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),F=D}function Ae(D){D!==z&&(V&&i.lineWidth(D),z=D)}function me(D,ie,Z){D?(_e(i.POLYGON_OFFSET_FILL),(L!==ie||H!==Z)&&(L=ie,H=Z,a.getReversed()&&(ie=-ie,Z=-Z),i.polygonOffset(ie,Z))):ze(i.POLYGON_OFFSET_FILL)}function Re(D){D?_e(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function Be(D){D===void 0&&(D=i.TEXTURE0+G-1),te!==D&&(i.activeTexture(D),te=D)}function nt(D,ie,Z){Z===void 0&&(te===null?Z=i.TEXTURE0+G-1:Z=te);let ye=re[Z];ye===void 0&&(ye={type:void 0,texture:void 0},re[Z]=ye),(ye.type!==D||ye.texture!==ie)&&(te!==Z&&(i.activeTexture(Z),te=Z),i.bindTexture(D,ie||Ie[D]),ye.type=D,ye.texture=ie)}function O(){let D=re[te];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function kt(){try{i.compressedTexImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function Je(){try{i.compressedTexImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function Tt(){try{i.texSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function xe(){try{i.texSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function zt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function Ye(){try{i.compressedTexSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function je(){try{i.texStorage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function A(){try{i.texStorage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function w(){try{i.texImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function X(){try{i.texImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function ue(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function ae(D,ie){d[D]!==ie&&(i.pixelStorei(D,ie),d[D]=ie)}function Se(D){W.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),W.copy(D))}function de(D){le.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),le.copy(D))}function ee(D,ie){let Z=c.get(ie);Z===void 0&&(Z=new WeakMap,c.set(ie,Z));let ye=Z.get(D);ye===void 0&&(ye=i.getUniformBlockIndex(ie,D.name),i.uniformBlockBinding(ie,ye,ye),Z.set(D,ye))}function Q(D,ie,Z){let pe=c.get(ie).get(D);l[pe]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,Z),l[pe]=Z)}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},te=null,re={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,y=null,M=null,T=null,S=null,_=null,b=new Ge(0,0,0),P=0,I=!1,N=null,F=null,z=null,L=null,H=null,W.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:ze,bindFramebuffer:xt,drawBuffers:$e,useProgram:ot,setBlending:ve,setMaterial:fe,setFlipSided:Ne,setCullFace:$,setLineWidth:Ae,setPolygonOffset:me,setScissorTest:Re,activeTexture:Be,bindTexture:nt,unbindTexture:O,compressedTexImage2D:kt,compressedTexImage3D:Je,texImage2D:w,texImage3D:X,pixelStorei:ae,getParameter:ue,updateUBOMapping:ee,uniformBlockBinding:Q,texStorage2D:je,texStorage3D:A,texSubImage2D:Tt,texSubImage3D:xe,compressedTexSubImage2D:zt,compressedTexSubImage3D:Ye,scissor:Se,viewport:de,reset:be}}function Dv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return m?new OffscreenCanvas(A,w):fr("canvas")}function v(A,w,X){let ue=1,ae=je(A);if((ae.width>X||ae.height>X)&&(ue=X/Math.max(ae.width,ae.height)),ue<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Se=Math.floor(ue*ae.width),de=Math.floor(ue*ae.height);u===void 0&&(u=g(Se,de));let ee=w?g(Se,de):u;return ee.width=Se,ee.height=de,ee.getContext("2d").drawImage(A,0,0,Se,de),qe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Se+"x"+de+")."),ee}else return"data"in A&&qe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),A;return A}function y(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,w,X,ue,ae,Se=!1){if(A!==null){if(i[A]!==void 0)return i[A];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de;ue&&(de=e.get("EXT_texture_norm16"),de||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=w;if(w===i.RED&&(X===i.FLOAT&&(ee=i.R32F),X===i.HALF_FLOAT&&(ee=i.R16F),X===i.UNSIGNED_BYTE&&(ee=i.R8),X===i.UNSIGNED_SHORT&&de&&(ee=de.R16_EXT),X===i.SHORT&&de&&(ee=de.R16_SNORM_EXT)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.R8UI),X===i.UNSIGNED_SHORT&&(ee=i.R16UI),X===i.UNSIGNED_INT&&(ee=i.R32UI),X===i.BYTE&&(ee=i.R8I),X===i.SHORT&&(ee=i.R16I),X===i.INT&&(ee=i.R32I)),w===i.RG&&(X===i.FLOAT&&(ee=i.RG32F),X===i.HALF_FLOAT&&(ee=i.RG16F),X===i.UNSIGNED_BYTE&&(ee=i.RG8),X===i.UNSIGNED_SHORT&&de&&(ee=de.RG16_EXT),X===i.SHORT&&de&&(ee=de.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RG8UI),X===i.UNSIGNED_SHORT&&(ee=i.RG16UI),X===i.UNSIGNED_INT&&(ee=i.RG32UI),X===i.BYTE&&(ee=i.RG8I),X===i.SHORT&&(ee=i.RG16I),X===i.INT&&(ee=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),X===i.UNSIGNED_INT&&(ee=i.RGB32UI),X===i.BYTE&&(ee=i.RGB8I),X===i.SHORT&&(ee=i.RGB16I),X===i.INT&&(ee=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),X===i.UNSIGNED_INT&&(ee=i.RGBA32UI),X===i.BYTE&&(ee=i.RGBA8I),X===i.SHORT&&(ee=i.RGBA16I),X===i.INT&&(ee=i.RGBA32I)),w===i.RGB&&(X===i.UNSIGNED_SHORT&&de&&(ee=de.RGB16_EXT),X===i.SHORT&&de&&(ee=de.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),w===i.RGBA){let Q=Se?fa:mt.getTransfer(ae);X===i.FLOAT&&(ee=i.RGBA32F),X===i.HALF_FLOAT&&(ee=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ee=Q===It?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&de&&(ee=de.RGBA16_EXT),X===i.SHORT&&de&&(ee=de.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(A,w){let X;return A?w===null||w===ti||w===Fs?X=i.DEPTH24_STENCIL8:w===kn?X=i.DEPTH32F_STENCIL8:w===Ur&&(X=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ti||w===Fs?X=i.DEPTH_COMPONENT24:w===kn?X=i.DEPTH_COMPONENT32F:w===Ur&&(X=i.DEPTH_COMPONENT16),X}function b(A,w){return y(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function P(A){let w=new WeakRef(A);n.get(A).__ref=w,p.add(w),x.register(A,w,w)}function I(A){let w=n.get(A).__ref;w!==void 0&&(p.delete(w),x.unregister(w))}function N(A){z(A.target)}function F(A){L(A.target)}function z(A){A.removeEventListener("dispose",N),I(A),G(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function L(A){A.removeEventListener("dispose",F),I(A),se(A)}function H(){for(let A of p){let w=A.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):z(w))}p.clear(),d.clear()}function G(A){let w=n.get(A);if(w.__webglInit===void 0)return;let X=A.source,ue=f.get(X);if(ue){let ae=ue[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&V(A),Object.keys(ue).length===0&&f.delete(X)}n.remove(A)}function V(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let X=A.source,ue=f.get(X);delete ue[w.__cacheKey],a.memory.textures--}function se(A){let w=n.get(A);w.__depthDisposeCallback&&w.__depthDisposeCallback();let X=A.depthTexture;if(X&&X.renderTarget===A&&z(X),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let Se=0;Se<w.__webglFramebuffer[ae].length;Se++)i.deleteFramebuffer(w.__webglFramebuffer[ae][Se]);else i.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)i.deleteFramebuffer(w.__webglFramebuffer[ae]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ue=A.textures;for(let ae=0,Se=ue.length;ae<Se;ae++){let de=n.get(ue[ae]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(ue[ae])}n.remove(A)}let K=0;function te(){K=0}function re(){return K}function Le(A){K=A}function j(){let A=K;return A>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,A}function W(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.mipmapsAutoUpdate),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function le(A,w){let X=n.get(A);if(A.isVideoTexture&&zt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&X.__version!==A.version){let ue=A.image;if(ue===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(X,A,w);return}}else A.isExternalTexture&&(X.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function J(A,w){let X=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){fe(X,A,w);return}else A.isExternalTexture&&(X.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function Ie(A,w){let X=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){fe(X,A,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function _e(A,w){let X=n.get(A);if(A.version>0&&X.__version!==A.version){Ne(X,A,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}let ze={[hi]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[ur]:i.MIRRORED_REPEAT},xt={[Jt]:i.NEAREST,[Il]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},$e={[Of]:i.NEVER,[Kh]:i.ALWAYS,[Ff]:i.LESS,[$h]:i.LEQUAL,[Bf]:i.EQUAL,[Yh]:i.GEQUAL,[kf]:i.GREATER,[zf]:i.NOTEQUAL};function ot(A,w){if(w.type===kn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===sn||w.magFilter===Nr||w.magFilter===Os||w.magFilter===Xn||w.minFilter===sn||w.minFilter===Nr||w.minFilter===Os||w.minFilter===Xn)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ze[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ze[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ze[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,xt[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,xt[w.minFilter]),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,$e[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==Os&&w.minFilter!==Xn||w.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ht(A,w){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",N),P(w));let ue=w.source,ae=f.get(ue);ae===void 0&&(ae={},f.set(ue,ae));let Se=W(w);if(Se!==A.__cacheKey){ae[Se]===void 0&&(ae[Se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ae[Se].usedTimes++;let de=ae[A.__cacheKey];de!==void 0&&(ae[A.__cacheKey].usedTimes--,de.usedTimes===0&&V(w)),A.__cacheKey=Se,A.__webglTexture=ae[Se].texture}return X}function ne(A,w,X){return Math.floor(Math.floor(A/X)/w)}function ve(A,w,X,ue){let Se=A.updateRanges;if(Se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,X,ue,w.data);else{Se.sort((D,ie)=>D.start-ie.start);let de=0;for(let D=1;D<Se.length;D++){let ie=Se[de],Z=Se[D],ye=ie.start+ie.count,pe=ne(Z.start,w.width,4),Ee=ne(ie.start,w.width,4);Z.start<=ye+1&&pe===Ee&&ne(Z.start+Z.count-1,w.width,4)===pe?ie.count=Math.max(ie.count,Z.start+Z.count-ie.start):(++de,Se[de]=Z)}Se.length=de+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let D=0,ie=Se.length;D<ie;D++){let Z=Se[D],ye=Math.floor(Z.start/4),pe=Math.ceil(Z.count/4),Ee=ye%w.width,We=Math.floor(ye/w.width),ct=pe,ge=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,We),t.texSubImage2D(i.TEXTURE_2D,0,Ee,We,ct,ge,X,ue,w.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function fe(A,w,X){let ue=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=i.TEXTURE_3D);let ae=ht(A,w),Se=w.source;t.bindTexture(ue,A.__webglTexture,i.TEXTURE0+X);let de=n.get(Se);if(Se.version!==de.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ge=mt.getPrimaries(mt.workingColorSpace),Xe=w.colorSpace===Wi?null:mt.getPrimaries(w.colorSpace),it=w.colorSpace===Wi||ge===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let Q=v(w.image,!1,s.maxTextureSize);Q=Ye(w,Q);let be=r.convert(w.format,w.colorSpace),D=r.convert(w.type),ie=S(w.internalFormat,be,D,w.normalized,w.colorSpace,w.isVideoTexture);ot(ue,w);let Z,ye=w.mipmaps,pe=w.isVideoTexture!==!0,Ee=de.__version===void 0||ae===!0,We=Se.dataReady,ct=b(w,Q);if(w.isDepthTexture)ie=_(w.format===Vi,w.type),Ee&&(pe?t.texStorage2D(i.TEXTURE_2D,1,ie,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ie,Q.width,Q.height,0,be,D,null));else if(w.isDataTexture)if(ye.length>0){pe&&Ee&&t.texStorage2D(i.TEXTURE_2D,ct,ie,ye[0].width,ye[0].height);for(let ge=0,Xe=ye.length;ge<Xe;ge++)Z=ye[ge],pe?We&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Z.width,Z.height,be,D,Z.data):t.texImage2D(i.TEXTURE_2D,ge,ie,Z.width,Z.height,0,be,D,Z.data);w.generateMipmaps=!1}else pe?(Ee&&t.texStorage2D(i.TEXTURE_2D,ct,ie,Q.width,Q.height),We&&ve(w,Q,be,D)):t.texImage2D(i.TEXTURE_2D,0,ie,Q.width,Q.height,0,be,D,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){pe&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ie,ye[0].width,ye[0].height,Q.depth);for(let ge=0,Xe=ye.length;ge<Xe;ge++)if(Z=ye[ge],w.format!==qn)if(be!==null)if(pe){if(We)if(w.layerUpdates.size>0){let it=au(Z.width,Z.height,w.format,w.type);for(let Pe of w.layerUpdates){let At=Z.data.subarray(Pe*it/Z.data.BYTES_PER_ELEMENT,(Pe+1)*it/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,Pe,Z.width,Z.height,1,be,At)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Z.width,Z.height,Q.depth,be,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,ie,Z.width,Z.height,Q.depth,0,Z.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?We&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Z.width,Z.height,Q.depth,be,D,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,ie,Z.width,Z.height,Q.depth,0,be,D,Z.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{pe&&Ee&&t.texStorage2D(i.TEXTURE_2D,ct,ie,ye[0].width,ye[0].height);for(let ge=0,Xe=ye.length;ge<Xe;ge++)Z=ye[ge],w.format!==qn?be!==null?pe?We&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Z.width,Z.height,be,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,ie,Z.width,Z.height,0,Z.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?We&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Z.width,Z.height,be,D,Z.data):t.texImage2D(i.TEXTURE_2D,ge,ie,Z.width,Z.height,0,be,D,Z.data)}else if(w.isDataArrayTexture)if(pe){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ie,Q.width,Q.height,Q.depth),We)if(w.layerUpdates.size>0){let ge=au(Q.width,Q.height,w.format,w.type);for(let Xe of w.layerUpdates){let it=Q.data.subarray(Xe*ge/Q.data.BYTES_PER_ELEMENT,(Xe+1)*ge/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xe,Q.width,Q.height,1,be,D,it)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,be,D,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,Q.width,Q.height,Q.depth,0,be,D,Q.data);else if(w.isData3DTexture)pe?(Ee&&t.texStorage3D(i.TEXTURE_3D,ct,ie,Q.width,Q.height,Q.depth),We&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,be,D,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ie,Q.width,Q.height,Q.depth,0,be,D,Q.data);else if(w.isFramebufferTexture){if(Ee)if(pe)t.texStorage2D(i.TEXTURE_2D,ct,ie,Q.width,Q.height);else{let ge=Q.width,Xe=Q.height;for(let it=0;it<ct;it++)t.texImage2D(i.TEXTURE_2D,it,ie,ge,Xe,0,be,D,null),ge>>=1,Xe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let ge=i.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),Q.parentNode!==ge){ge.appendChild(Q),d.add(w),ge.onpaint=Xe=>{let it=Xe.changedElements;for(let Pe of d)it.includes(Pe.image)&&(Pe.needsUpdate=!0)},ge.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let it=i.RGBA,Pe=i.RGBA,At=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,Pe,At,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(pe&&Ee){let ge=je(ye[0]);t.texStorage2D(i.TEXTURE_2D,ct,ie,ge.width,ge.height)}for(let ge=0,Xe=ye.length;ge<Xe;ge++)Z=ye[ge],pe?We&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,be,D,Z):t.texImage2D(i.TEXTURE_2D,ge,ie,be,D,Z);w.generateMipmaps=!1}else if(pe){if(Ee){let ge=je(Q);t.texStorage2D(i.TEXTURE_2D,ct,ie,ge.width,ge.height)}We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,D,Q)}else t.texImage2D(i.TEXTURE_2D,0,ie,be,D,Q);y(w)&&w.mipmapsAutoUpdate===!0&&M(ue),de.__version=Se.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ne(A,w,X){if(w.image.length!==6)return;let ue=ht(A,w),ae=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let Se=n.get(ae);if(ae.version!==Se.__version||ue===!0){t.activeTexture(i.TEXTURE0+X);let de=mt.getPrimaries(mt.workingColorSpace),ee=w.colorSpace===Wi?null:mt.getPrimaries(w.colorSpace),Q=w.colorSpace===Wi||de===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let be=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,ie=[];for(let Pe=0;Pe<6;Pe++)!be&&!D?ie[Pe]=v(w.image[Pe],!0,s.maxCubemapSize):ie[Pe]=D?w.image[Pe].image:w.image[Pe],ie[Pe]=Ye(w,ie[Pe]);let Z=ie[0],ye=r.convert(w.format,w.colorSpace),pe=r.convert(w.type),Ee=S(w.internalFormat,ye,pe,w.normalized,w.colorSpace),We=w.isVideoTexture!==!0,ct=Se.__version===void 0||ue===!0,ge=ae.dataReady,Xe=b(w,Z);ot(i.TEXTURE_CUBE_MAP,w);let it;if(w.isDepthTexture){if(Ee=_(w.format===Vi,w.type),ct)if(We)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ee,Z.width,Z.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ee,Z.width,Z.height,0,ye,pe,null)}else if(be){We&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Ee,Z.width,Z.height);for(let Pe=0;Pe<6;Pe++){it=ie[Pe].mipmaps;for(let At=0;At<it.length;At++){let Kt=it[At];w.format!==qn?ye!==null?We?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,At,0,0,Kt.width,Kt.height,ye,Kt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,At,Ee,Kt.width,Kt.height,0,Kt.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,At,0,0,Kt.width,Kt.height,ye,pe,Kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,At,Ee,Kt.width,Kt.height,0,ye,pe,Kt.data)}}}else{if(it=w.mipmaps,We&&ct){it.length>0&&Xe++;let Pe=je(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Ee,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(D){We?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ie[Pe].width,ie[Pe].height,ye,pe,ie[Pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ee,ie[Pe].width,ie[Pe].height,0,ye,pe,ie[Pe].data);for(let At=0;At<it.length;At++){let Yn=it[At].image[Pe].image;We?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,At+1,0,0,Yn.width,Yn.height,ye,pe,Yn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,At+1,Ee,Yn.width,Yn.height,0,ye,pe,Yn.data)}}else{We?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ye,pe,ie[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ee,ye,pe,ie[Pe]);for(let At=0;At<it.length;At++){let Kt=it[At];We?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,At+1,0,0,ye,pe,Kt.image[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,At+1,Ee,ye,pe,Kt.image[Pe])}}}y(w)&&w.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),Se.__version=ae.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function $(A,w,X,ue,ae,Se){let de=r.convert(X.format,X.colorSpace),ee=r.convert(X.type),Q=S(X.internalFormat,de,ee,X.normalized,X.colorSpace),be=n.get(w),D=n.get(X);if(D.__renderTarget=w,!be.__hasExternalTextures){let ie=Math.max(1,w.width>>Se),Z=Math.max(1,w.height>>Se);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Se,Q,ie,Z,w.depth,0,de,ee,null):t.texImage2D(ae,Se,Q,ie,Z,0,de,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),xe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ae,D.__webglTexture,0,Tt(w)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ae,D.__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(A,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer){let ue=w.depthTexture,ae=ue&&ue.isDepthTexture?ue.type:null,Se=_(w.stencilBuffer,ae),de=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(w),Se,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(w),Se,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Se,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,A)}else{let ue=w.textures;for(let ae=0;ae<ue.length;ae++){let Se=ue[ae],de=r.convert(Se.format,Se.colorSpace),ee=r.convert(Se.type),Q=S(Se.internalFormat,de,ee,Se.normalized,Se.colorSpace);xe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(w),Q,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(w),Q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Q,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(A,w,X){let ue=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(w.depthTexture);ae.__renderTarget=w;let Se=ue?w.depthTexture.image[0]:w.depthTexture.image;(!ae.__webglTexture||Se.width!==w.width||Se.height!==w.height)&&(Se.width=w.width,Se.height=w.height,w.depthTexture.needsUpdate=!0),ue?_e(w.depthTexture,0):le(w.depthTexture,0);let de=ae.__webglTexture,ee=Tt(w),Q=ue?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,be=w.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Di)xe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,Q,de,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,be,Q,de,0);else if(w.depthTexture.format===Vi)xe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,Q,de,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,be,Q,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Re(A){let w=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let ue=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){let ae=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",ae)};ue.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=ue}if(A.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let ue=0;ue<6;ue++)me(w.__webglFramebuffer[ue],A,ue);else A.texture.mipmaps.length>0?me(w.__webglFramebuffer[0],A,0):me(w.__webglFramebuffer,A,0);else if(X){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=i.createRenderbuffer(),Ae(w.__webglDepthbuffer[ue],A,!1);else{let ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=w.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Se)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ae(w.__webglDepthbuffer,A,!1);else{let ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(A,w,X){let ue=n.get(A);w!==void 0&&$(ue.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Re(A)}function nt(A){let w=A.texture,X=n.get(A),ue=n.get(w);A.addEventListener("dispose",F),P(A);let ae=A.textures,Se=A.isWebGLCubeRenderTarget===!0,de=ae.length>1;if(de||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=w.version,a.memory.textures++),Se){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(w.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let Q=0;Q<w.mipmaps.length;Q++)X.__webglFramebuffer[ee][Q]=i.createFramebuffer()}else X.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<w.mipmaps.length;ee++)X.__webglFramebuffer[ee]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(de)for(let ee=0,Q=ae.length;ee<Q;ee++){let be=n.get(ae[ee]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&xe(A)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<ae.length;ee++){let Q=ae[ee];X.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);let be=r.convert(Q.format,Q.colorSpace),D=r.convert(Q.type),ie=S(Q.internalFormat,be,D,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),Z=Tt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),ot(i.TEXTURE_CUBE_MAP,w);for(let ee=0;ee<6;ee++)if(w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)$(X.__webglFramebuffer[ee][Q],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Q);else $(X.__webglFramebuffer[ee],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);y(w)?M(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(de){for(let ee=0,Q=ae.length;ee<Q;ee++){let be=ae[ee],D=n.get(be),ie=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,D.__webglTexture),ot(ie,be),$(X.__webglFramebuffer,A,be,i.COLOR_ATTACHMENT0+ee,ie,0),y(be)&&M(ie)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,ue.__webglTexture),ot(ee,w),w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)$(X.__webglFramebuffer[Q],A,w,i.COLOR_ATTACHMENT0,ee,Q);else $(X.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,ee,0);y(w)?M(ee):w.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Re(A)}function O(A){let w=A.textures;for(let X=0,ue=w.length;X<ue;X++){let ae=w[X];if(y(ae)&&ae.mipmapsAutoUpdate===!0){let Se=T(A),de=n.get(ae).__webglTexture;t.bindTexture(Se,de),M(Se),t.unbindTexture()}}}let kt=[];function Je(A){if(A.samples>0){if(xe(A)===!1){let w=A.textures,X=A.width,ue=A.height,ae=i.COLOR_BUFFER_BIT,Se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(A),ee=w.length>1;if(ee)for(let be=0;be<w.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let be=0;be<w.length;be++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[be]);let D=n.get(w[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,X,ue,0,0,X,ue,ae,i.NEAREST),l===!0&&(kt.length=0,kt.push(i.COLOR_ATTACHMENT0+be),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&kt.push(Se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let be=0;be<w.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,de.__webglColorRenderbuffer[be]);let D=n.get(w[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Tt(A){return Math.min(s.maxSamples,A.samples)}function xe(A){let w=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function zt(A){let w=a.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function Ye(A,w){let X=A.colorSpace,ue=A.format,ae=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==wn&&X!==Wi&&(mt.getTransfer(X)===It?(ue!==qn||ae!==In)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",X)),w}function je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=te,this.getTextureUnits=re,this.setTextureUnits=Le,this.setTexture2D=le,this.setTexture2DArray=J,this.setTexture3D=Ie,this.setTextureCube=_e,this.rebindTextures=Be,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=$,this.useMultisampledRTT=xe,this.dispose=H}function Nv(i,e){function t(n,s=Wi){let r,a=mt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return i.BYTE;if(n===Hh)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===ni)return i.HALF_FLOAT;if(n===Wh)return i.ALPHA;if(n===Xh)return i.RGB;if(n===qn)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===Ul)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===Ol)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===ja||n===Qa||n===eo||n===to)if(a===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bl||n===kl||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===no||n===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Vl)return a===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xl)return r.COMPRESSED_R11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===no)return r.COMPRESSED_RG11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yl||n===Kl||n===Zl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ac)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===cc||n===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lc)return a===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===dc||n===io||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ov=`
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

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new wa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pi({vertexShader:Uv,fragmentShader:Ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends Qn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new mu,g={},v=t.getContextAttributes(),y=null,M=null,T=[],S=[],_=new oe,b=null,P=null,I=new nn;I.viewport=new Pt;let N=new nn;N.viewport=new Pt;let F=[I,N],z=new wl,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let le=T[W];return le===void 0&&(le=new _r,T[W]=le),le.getTargetRaySpace()},this.getControllerGrip=function(W){let le=T[W];return le===void 0&&(le=new _r,T[W]=le),le.getGripSpace()},this.getHand=function(W){let le=T[W];return le===void 0&&(le=new _r,T[W]=le),le.getHandSpace()};function G(W){let le=S.indexOf(W.inputSource);if(le===-1)return;let J=T[le];J!==void 0&&(J.update(W.inputSource,W.frame,c||a),J.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",se);for(let W=0;W<T.length;W++){let le=S[W];le!==null&&(S[W]=null,T[W].disconnect(le))}L=null,H=null,m.reset();for(let W in g)delete g[W];if(e.setRenderTarget(y),f=null,u=null,d=null,s=null,M=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),P!==null){let W=P.camera;W.fov=P.fov,W.zoom=P.zoom,W.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",V),s.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,Ie=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=v.stencil?Vi:Di,Ie=v.stencil?Fs:ti);let ze={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new On(u.textureWidth,u.textureHeight,{format:qn,type:In,depthTexture:new Fi(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let J={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new On(f.framebufferWidth,f.framebufferHeight,{format:qn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(W){for(let le=0;le<W.removed.length;le++){let J=W.removed[le],Ie=S.indexOf(J);Ie>=0&&(S[Ie]=null,T[Ie].disconnect(J))}for(let le=0;le<W.added.length;le++){let J=W.added[le],Ie=S.indexOf(J);if(Ie===-1){for(let ze=0;ze<T.length;ze++)if(ze>=S.length){S.push(J),Ie=ze;break}else if(S[ze]===null){S[ze]=J,Ie=ze;break}if(Ie===-1)break}let _e=T[Ie];_e&&_e.connect(J)}}function K(W,le){le===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(le.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let le=W.near,J=W.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(J=m.depthFar)),z.near=N.near=I.near=le,z.far=N.far=I.far=J,(L!==z.near||H!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,H=z.far),z.layers.mask=W.layers.mask|6,I.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let Ie=W.parent,_e=z.cameras;K(z,Ie);for(let ze=0;ze<_e.length;ze++)K(_e[ze],Ie);z.projectionMatrix.copy(I.projectionMatrix),z.projectionMatrixInverse.copy(I.projectionMatrixInverse),P===null&&W.isPerspectiveCamera&&(P={camera:W,fov:W.fov,zoom:W.zoom}),te(W,z,Ie)};function te(W,le,J){J===null?W.matrix.copy(le.matrixWorld):(W.matrix.copy(J.matrixWorld),W.matrix.invert(),W.matrix.multiply(le.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(le.projectionMatrix),W.projectionMatrixInverse.copy(le.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ss*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(W){return g[W]};let re=null;function Le(W,le){if(h=le.getViewerPose(c||a),p=le,h!==null){let J=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ie=!1;J.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let $e=0;$e<J.length;$e++){let ot=J[$e],ht=null;if(f!==null)ht=f.getViewport(ot);else{let ve=d.getViewSubImage(u,ot);ht=ve.viewport,$e===0&&(e.setRenderTargetTextures(M,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(M))}let ne=F[$e];ne===void 0&&(ne=new nn,ne.layers.enable($e),ne.viewport=new Pt,F[$e]=ne),ne.matrix.fromArray(ot.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ot.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ht.x,ht.y,ht.width,ht.height),$e===0&&(z.matrix.copy(ne.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(ne)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let $e=d.getDepthInformation(J[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let $e=0;$e<J.length;$e++){let ot=J[$e].camera;if(ot){let ht=g[ot];ht||(ht=new wa,g[ot]=ht);let ne=d.getCameraImage(ot);ht.sourceTexture=ne}}}}for(let J=0;J<T.length;J++){let Ie=S[J],_e=T[J];Ie!==null&&_e!==void 0&&_e.update(Ie,le,c||a)}re&&re(W,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),p=null}let j=new Mp;j.setAnimationLoop(Le),this.setAnimationLoop=function(W){re=W},this.dispose=function(){}}},Fv=new Qe,Pp=new rt;Pp.set(-1,0,0,0,1,0,0,0,1);function Bv(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,iu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===en&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===en&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kv(i,e,t,n){let s={},r={};function a(v,y){let M=y.program;n.uniformBlockBinding(v,M,s[v.id])}function o(v,y){let M=s[v.id];M===void 0&&(p(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",m));let T=y.program;n.updateUBOMapping(v,T);let S=e.render.frame;r[v.id]!==S&&(c(v),r[v.id]=S)}function l(v){let y=i.createBuffer(),M=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(v){let y=s[v.id],M=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,_=M.length;S<_;S++){let b=M[S];if(Array.isArray(b))for(let P=0,I=b.length;P<I;P++)h(b[P],S,P,T);else h(b,S,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,y,M,T){if(u(v,y,M,T)===!0){let S=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let P=0;P<_.length;P++){let I=_[P],N=x(I,!0);d(I,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,v.__data)}}function d(v,y,M){typeof v=="number"||typeof v=="boolean"?y[M]=v:v.isMatrix3?(y[M]=v.elements[0],y[M+1]=v.elements[1],y[M+2]=v.elements[2],y[M+3]=0,y[M+4]=v.elements[3],y[M+5]=v.elements[4],y[M+6]=v.elements[5],y[M+7]=0,y[M+8]=v.elements[6],y[M+9]=v.elements[7],y[M+10]=v.elements[8],y[M+11]=0):ArrayBuffer.isView(v)?y.set(v.subarray(0,y.length-M),M):v.toArray(y,M)}function u(v,y,M,T){let S=v.value,_=y+"_"+M;if(Array.isArray(S)){T[_]===void 0&&(T[_]=[]);let b=T[_],P=!1;for(let I=0;I<S.length;I++)f(S[I],b,I)===!0&&(P=!0);return P}return f(S,T,_)}function f(v,y,M){if(y[M]===void 0)return typeof v=="number"||typeof v=="boolean"?y[M]=v:ArrayBuffer.isView(v)?y[M]=v.slice():y[M]=v.clone(),!0;{let T=y[M];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return y[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let y=v.uniforms,M=0,T=16;for(let _=0,b=y.length;_<b;_++){let P=Array.isArray(y[_])?y[_]:[y[_]];for(let I=0,N=P.length;I<N;I++){let F=P[I],z=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(y[_])||Array.isArray(F.value),H=M;for(let V=0,se=z.length;V<se;V++){let K=z[V],te=x(K,L),re=M%T,Le=re%te.boundary,j=re+Le;M+=Le,j!==0&&T-j<te.storage&&(M+=T-j),V===0&&(H=M),M+=te.storage}let G=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new G((M-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}let S=M%T;return S>0&&(M+=T-S),v.__size=M,v.__cache={},this}function x(v,y){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",v),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(v){let y=v.target;y.removeEventListener("dispose",m),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:g}}var zv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function Hv(){return yi===null&&(yi=new vr(zv,16,16,ls,ni),yi.name="DFG_LUT",yi.minFilter=sn,yi.magFilter=sn,yi.wrapS=Gn,yi.wrapT=Gn,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var _c=class{constructor(e={}){let{canvas:t=Hf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=In}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,m=new Set([Fl,Ol,Ul]),g=new Set([In,ti,Ur,Fs,Ll,Dl]),v=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,S=null,_=[],b=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,F=null,z=null,L=null,H=null;this._outputColorSpace=Gt;let G=0,V=0,se=null,K=-1,te=null,re=new Pt,Le=new Pt,j=null,W=new Ge(0),le=0,J=t.width,Ie=t.height,_e=1,ze=null,xt=null,$e=new Pt(0,0,J,Ie),ot=new Pt(0,0,J,Ie),ht=!1,ne=new ts,ve=new ll,fe=!1,Ne=!1,$=new Qe,Ae=new C,me=new Pt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function nt(){return se===null?_e:1}let O=n;function kt(E,U){return t.getContext(E,U)}let Je,Tt,xe,zt,Ye,je,A,w,X,ue,ae,Se,de,ee,Q,be,D,ie,Z,ye,pe,Ee,We;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),O===null){let U="webgl2";if(O=kt(U,E),O===null)throw kt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(E){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),tt("WebGLRenderer: "+E.message),E}function ct(){Je=new jx(O),Je.init(),pe=new Nv(O,Je),Tt=new Hx(O,Je,e,pe),xe=new Lv(O,Je),Tt.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),z=O.createFramebuffer(),L=O.createFramebuffer(),H=O.createFramebuffer(),zt=new ty(O),Ye=new xv,je=new Dv(O,Je,xe,Ye,Tt,pe,zt),A=new Jx(I),w=new i0(O),Ee=new kx(O,w),X=new Qx(O,w,zt,Ee),ue=new iy(O,X,w,Ee,zt),ie=new ny(O,Tt,je),Q=new Gx(Ye),ae=new _v(I,A,Je,Tt,Ee,Q),Se=new Bv(I,Ye),de=new vv,ee=new Tv(Je),D=new Bx(I,A,xe,ue,p,l),be=new Pv(I,ue,Tt),We=new kv(O,zt,Tt,xe),Z=new zx(O,Je,zt),ye=new ey(O,Je,zt),zt.programs=ae.programs,I.capabilities=Tt,I.extensions=Je,I.properties=Ye,I.renderLists=de,I.shadowMap=be,I.state=xe,I.info=zt}x!==In&&(P=new ry(x,t.width,t.height,o,s,r));let ge=new gu(I,O);this.xr=ge,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(E){E!==void 0&&(_e=E,this.setSize(J,Ie,!1))},this.getSize=function(E){return E.set(J,Ie)},this.setSize=function(E,U,Y=!0){if(ge.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,Ie=U,t.width=Math.floor(E*_e),t.height=Math.floor(U*_e),Y===!0&&(t.style.width=E+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(J*_e,Ie*_e).floor()},this.setDrawingBufferSize=function(E,U,Y){J=E,Ie=U,_e=Y,t.width=Math.floor(E*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===In){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(re)},this.getViewport=function(E){return E.copy($e)},this.setViewport=function(E,U,Y,k){E.isVector4?$e.set(E.x,E.y,E.z,E.w):$e.set(E,U,Y,k),xe.viewport(re.copy($e).multiplyScalar(nt()).round())},this.getScissor=function(E){return E.copy(ot)},this.setScissor=function(E,U,Y,k){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,U,Y,k),xe.scissor(Le.copy(ot).multiplyScalar(nt()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(E){xe.setScissorTest(ht=E)},this.setOpaqueSort=function(E){ze=E},this.setTransparentSort=function(E){xt=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Y=!0){let k=0;if(E){let q=!1;if(se!==null){let we=se.texture.format;q=m.has(we)}if(q){let we=se.texture.type,Oe=g.has(we),Me=D.getClearColor(),Ce=D.getClearAlpha(),He=Me.r,st=Me.g,lt=Me.b;Oe?(v[0]=He,v[1]=st,v[2]=lt,v[3]=Ce,O.clearBufferuiv(O.COLOR,0,v)):(y[0]=He,y[1]=st,y[2]=lt,y[3]=Ce,O.clearBufferiv(O.COLOR,0,y))}else k|=O.COLOR_BUFFER_BIT}U&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),D.dispose(),de.dispose(),ee.dispose(),je.dispose(),Ye.dispose(),A.dispose(),ue.dispose(),X.dispose(),Ee.dispose(),We.dispose(),ae.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Yr),ge.removeEventListener("sessionend",us),ai.stop()};function Xe(E){E.preventDefault(),pa("WebGLRenderer: Context Lost."),N=!0}function it(){pa("WebGLRenderer: Context Restored."),N=!1;let E=zt.autoReset,U=be.enabled,Y=be.autoUpdate,k=be.needsUpdate,q=be.type;ct(),zt.autoReset=E,be.enabled=U,be.autoUpdate=Y,be.needsUpdate=k,be.type=q}function Pe(E){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function At(E){let U=E.target;U.removeEventListener("dispose",At),Kt(U)}function Kt(E){Yn(E),Ye.remove(E)}function Yn(E){let U=Ye.get(E).programs;U!==void 0&&(U.forEach(function(Y){ae.releaseProgram(Y)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Y,k,q,we){U===null&&(U=Re);let Oe=q.isMesh&&q.matrixWorld.determinantAffine()<0,Me=yt(E,U,Y,k,q);xe.setMaterial(k,Oe);let Ce=Y.index,He=1;if(k.wireframe===!0){if(Ce=X.getWireframeAttribute(Y),Ce===void 0)return;He=2}let st=Y.drawRange,lt=Y.attributes.position,Ue=st.start*He,dt=(st.start+st.count)*He;we!==null&&(Ue=Math.max(Ue,we.start*He),dt=Math.min(dt,(we.start+we.count)*He)),Ce!==null?(Ue=Math.max(Ue,0),dt=Math.min(dt,Ce.count)):lt!=null&&(Ue=Math.max(Ue,0),dt=Math.min(dt,lt.count));let bt=dt-Ue;if(bt<0||bt===1/0)return;Ee.setup(q,k,Me,Y,Ce);let Ft,Dt=Z;if(Ce!==null&&(Ft=w.get(Ce),Dt=ye,Dt.setIndex(Ft)),q.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*nt()),Dt.setMode(O.LINES)):Dt.setMode(O.TRIANGLES);else if(q.isLine){let gn=k.linewidth;gn===void 0&&(gn=1),xe.setLineWidth(gn*nt()),q.isLineSegments?Dt.setMode(O.LINES):q.isLineLoop?Dt.setMode(O.LINE_LOOP):Dt.setMode(O.LINE_STRIP)}else q.isPoints?Dt.setMode(O.POINTS):q.isSprite&&Dt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))Dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let gn=q._multiDrawStarts,ke=q._multiDrawCounts,bn=q._multiDrawCount,Rt=Ce?w.get(Ce).bytesPerElement:1,ds=Ye.get(k).currentProgram.getUniforms();for(let _n=0;_n<bn;_n++)ds.setValue(O,"_gl_DrawID",_n),Dt.render(gn[_n]/Rt,ke[_n])}else if(q.isInstancedMesh)Dt.renderInstances(Ue,bt,q.count);else if(Y.isInstancedBufferGeometry){let gn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ke=Math.min(Y.instanceCount,gn);Dt.renderInstances(Ue,bt,ke)}else Dt.render(Ue,bt)};function $r(E,U,Y,k){F!==null&&E.isNodeMaterial&&F.setObject(k,E),fe===!0&&Q.setState(E,Y,!1),E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,he(E,U,k),E.side=_i,E.needsUpdate=!0,he(E,U,k),E.side=tn):he(E,U,k)}this.compile=function(E,U,Y=null){Y===null&&(Y=E),F!==null&&F.renderStart(E,U,Y),S=ee.get(Y),S.init(U),b.push(S),Y.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),E!==Y&&E.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),Ne=this.localClippingEnabled,fe=Q.init(this.clippingPlanes,Ne),fe===!0&&Q.setGlobalState(this.clippingPlanes,U),F!==null&&be.render(S.state.shadowsArray,Y,U);let k=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let we=q.material;if(we)if(Array.isArray(we))for(let Oe=0;Oe<we.length;Oe++){let Me=we[Oe];$r(Me,Y,U,q),k.add(Me)}else $r(we,Y,U,q),k.add(we)}),S=b.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(E,U,Y=null){let k=this.compile(E,U,Y);return new Promise(q=>{function we(){if(k.forEach(function(Oe){let Ce=Ye.get(Oe).currentProgram;(Ce===void 0||Ce.isReady())&&k.delete(Oe)}),k.size===0){q(E);return}setTimeout(we,10)}Je.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Gs=null;function Uc(E){Gs&&Gs(E)}function Yr(){ai.stop()}function us(){ai.start()}let ai=new Mp;ai.setAnimationLoop(Uc),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(E){Gs=E,ge.setAnimationLoop(E),E===null?ai.stop():ai.start()},ge.addEventListener("sessionstart",Yr),ge.addEventListener("sessionend",us),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(E,U);let Y=ge.enabled===!0&&ge.isPresenting===!0,k=P!==null&&(se===null||Y)&&P.begin(I,se);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(U),U=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,U,se),S=ee.get(E,b.length),S.init(U),S.state.textureUnits=je.getTextureUnits(),b.push(S),$.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ve.setFromArrayCamera(U):ne.setFromProjectionMatrix($,Vn,U.reversedDepth),Ne=this.localClippingEnabled,fe=Q.init(this.clippingPlanes,Ne),T=de.get(E,_.length),T.init(),_.push(T),this.info.render.frame++,ge.enabled===!0&&ge.isPresenting===!0){let Oe=I.xr.getDepthSensingMesh();Oe!==null&&Vs(Oe,U,-1/0,I.sortObjects)}Vs(E,U,0,I.sortObjects),T.finish(),F!==null&&F.updateLights(S.state.lightsArray),I.sortObjects===!0&&T.sort(ze,xt),Be=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Be&&D.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),fe===!0&&Q.beginShadows();let q=S.state.shadowsArray;if(be.render(q,E,U),fe===!0&&Q.endShadows(),(k&&P.hasRenderPass())===!1){let Oe=T.opaque,Me=T.transmissive;if(S.setupLights(),U.isArrayCamera){let Ce=U.cameras;if(Me.length>0)for(let He=0,st=Ce.length;He<st;He++){let lt=Ce[He];Zr(Oe,Me,E,lt)}Be&&D.render(E);for(let He=0,st=Ce.length;He<st;He++){let lt=Ce[He];Kr(T,E,lt,lt.viewport)}}else Me.length>0&&Zr(Oe,Me,E,U),Be&&D.render(E),Kr(T,E,U)}se!==null&&V===0&&(je.updateMultisampleRenderTarget(se),je.updateRenderTargetMipmap(se)),k&&P.end(I),E.isScene===!0&&E.onAfterRender(I,E,U),Ee.resetDefaultState(),K=-1,te=null,b.pop(),b.length>0?(S=b[b.length-1],je.setTextureUnits(S.state.textureUnits),fe===!0&&Q.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,F!==null&&F.renderEnd()};function Vs(E,U,Y,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){let Oe=U.isArrayCamera?ve:ne;if(!E.frustumCulled||E.intersectsFrustum(Oe)){k&&me.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);let Me=ue.update(E),Ce=E.material;Ce.visible&&T.push(E,Me,Ce,Y,me.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){let Oe=U.isArrayCamera?ve:ne;if(!E.frustumCulled||E.intersectsFrustum(Oe)){let Me=ue.update(E),Ce=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),me.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),me.copy(Me.boundingSphere.center)),me.applyMatrix4(E.matrixWorld).applyMatrix4($)),Array.isArray(Ce)){let He=Me.groups;for(let st=0,lt=He.length;st<lt;st++){let Ue=He[st],dt=Ce[Ue.materialIndex];dt&&dt.visible&&T.push(E,Me,dt,Y,me.z,Ue,U)}}else Ce.visible&&T.push(E,Me,Ce,Y,me.z,null,U)}}}let we=E.children;for(let Oe=0,Me=we.length;Oe<Me;Oe++)Vs(we[Oe],U,Y,k)}function Kr(E,U,Y,k){let{opaque:q,transmissive:we,transparent:Oe}=E;S.setupLightsView(Y),fe===!0&&Q.setGlobalState(I.clippingPlanes,Y),k&&xe.viewport(re.copy(k)),q.length>0&&R(q,U,Y),we.length>0&&R(we,U,Y),Oe.length>0&&R(Oe,U,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Zr(E,U,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[k.id]===void 0){let Ue=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[k.id]=new On(1,1,{generateMipmaps:!0,type:Ue?ni:In,minFilter:Xn,samples:Math.max(4,Tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let we=S.state.transmissionRenderTarget[k.id],Oe=k.viewport||re;we.setSize(Oe.z*I.transmissionResolutionScale,Oe.w*I.transmissionResolutionScale);let Me=I.getRenderTarget(),Ce=I.getActiveCubeFace(),He=I.getActiveMipmapLevel();I.setRenderTarget(we),I.getClearColor(W),le=I.getClearAlpha(),le<1&&I.setClearColor(16777215,.5),I.clear(),Be&&D.render(Y);let st=I.toneMapping;I.toneMapping=xi;let lt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),S.setupLightsView(k),fe===!0&&Q.setGlobalState(I.clippingPlanes,k),R(E,Y,k),je.updateMultisampleRenderTarget(we),je.updateRenderTargetMipmap(we),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let dt=0,bt=U.length;dt<bt;dt++){let Ft=U[dt],{object:Dt,geometry:gn,material:ke,group:bn}=Ft;if(ke.side===tn&&Dt.layers.test(k.layers)){let Rt=ke.side;ke.side=en,ke.needsUpdate=!0,B(Dt,Y,k,gn,ke,bn),ke.side=Rt,ke.needsUpdate=!0,Ue=!0}}Ue===!0&&(je.updateMultisampleRenderTarget(we),je.updateRenderTargetMipmap(we))}I.setRenderTarget(Me,Ce,He),I.setClearColor(W,le),lt!==void 0&&(k.viewport=lt),I.toneMapping=st}function R(E,U,Y){let k=U.isScene===!0?U.overrideMaterial:null;for(let q=0,we=E.length;q<we;q++){let Oe=E[q],{object:Me,geometry:Ce,group:He}=Oe,st=Oe.material;st.allowOverride===!0&&k!==null&&(st=k),Me.layers.test(Y.layers)&&B(Me,U,Y,Ce,st,He)}}function B(E,U,Y,k,q,we){F!==null&&q.isNodeMaterial&&F.setObject(E,q),E.onBeforeRender(I,U,Y,k,q,we),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(I,U,Y,k,E,we),q.transparent===!0&&q.side===tn&&q.forceSinglePass===!1?(q.side=en,q.needsUpdate=!0,I.renderBufferDirect(Y,U,k,q,E,we),q.side=_i,q.needsUpdate=!0,I.renderBufferDirect(Y,U,k,q,E,we),q.side=tn):I.renderBufferDirect(Y,U,k,q,E,we),E.onAfterRender(I,U,Y,k,q,we)}function ce(E){let U=0;for(let Y of E)Y.texture!==null&&U++;return U}function he(E,U,Y){U.isScene!==!0&&(U=Re);let k=Ye.get(E),q=S.state.lights,we=S.state.shadowsArray,Oe=q.state.version,Me=ae.getParameters(E,q.state,we,U,Y,S.state.lightProbeGridArray),Ce=ae.getProgramCacheKey(Me),He=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let st=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=A.get(E.envMap||k.environment,st),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",At),He=new Map,k.programs=He,k.programVariants=new Map);let lt=He.get(Ce);if(lt!==void 0){if(k.currentProgram===lt&&k.lightsStateVersion===Oe)return St(E,Me),lt}else Me.uniforms=ae.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,Y,Me),E.onBeforeCompile(Me,I),lt=ae.acquireProgram(Me,Ce),He.set(Ce,lt),k.uniforms=Me.uniforms;let Ue=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=Q.uniform),St(E,Me),k.needsLights=Ht(E),k.lightsStateVersion=Oe,k.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.sunLights.value=q.state.sun,Ue.sunLightShadows.value=q.state.sunShadow,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.sunShadowMatrix.value=q.state.sunShadowMatrix,Ue.sunShadowCascade.value=q.state.sunShadowCascade,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix),k.numLightProbeGrids=ce(S.state.lightProbeGridArray),k.currentProgram=lt,k.uniformsList=null,lt}function at(E,U,Y,k,q){let we=Ye.get(E),Oe=we.currentProgram.id+","+k+","+q,Me=we.programVariants.get(Oe);return Me===void 0?(Me=he(E,U,Y),we.programVariants.set(Oe,Me)):(we.currentProgram=Me,we.uniformsList=null,we.outputColorSpace=k,we.toneMapping=q),Me}function pt(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Fr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function St(E,U){let Y=Ye.get(E);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function yt(E,U,Y,k,q){U.isScene!==!0&&(U=Re),je.resetTextureUnits();let we=U.fog,Oe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,Me=se===null?I.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:mt.workingColorSpace,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,He=A.get(k.envMap||Oe,Ce),st=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,lt=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ue=!!Y.morphAttributes.position,dt=!!Y.morphAttributes.normal,bt=!!Y.morphAttributes.color,Ft=xi;k.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ft=I.toneMapping);let Dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gn=Dt!==void 0?Dt.length:0,ke=Ye.get(k),bn=S.state.lights;if(fe===!0&&(Ne===!0||E!==te)){let Vt=E===te&&k.id===K;Q.setState(k,E,Vt)}let Rt=!1,ds=!1;k.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==bn.state.version||q.isBatchedMesh&&ke.batching===!1||!q.isBatchedMesh&&ke.batching===!0||q.isBatchedMesh&&ke.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&ke.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||q.isInstancedMesh&&ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ke.instancingMorph===!1&&q.morphTexture!==null||ke.envMap!==He||k.fog===!0&&ke.fog!==we||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Q.numPlanes||ke.numIntersection!==Q.numIntersection)||ke.vertexAlphas!==st||ke.vertexTangents!==lt||ke.morphTargets!==Ue||ke.morphNormals!==dt||ke.morphColors!==bt||ke.morphTargetsCount!==gn||ke.numLightProbeGrids!==ce(S.state.lightProbeGridArray)?Rt=!0:(ke.outputColorSpace!==Me||ke.toneMapping!==Ft)&&(ds=!0):(Rt=!0,ke.__version=k.version);let _n=ke.currentProgram;(Rt===!0||ds===!0)&&(_n=ds===!0?at(k,U,q,Me,Ft):he(k,U,q),F&&k.isNodeMaterial&&F.onUpdateProgram(k,_n,ke));let go=!1,$i=!1,fs=!1,Et=_n.getUniforms(),fn=ke.uniforms;if(xe.useProgram(_n.program)&&(go=!0,$i=!0,fs=!0),k.id!==K&&(K=k.id,$i=!0),go||te!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Et.setValue(O,"projectionMatrix",E.projectionMatrix),Et.setValue(O,"viewMatrix",E.matrixWorldInverse);let cn=Et.map.cameraPosition;cn!==void 0&&cn.setValue(O,Ae.setFromMatrixPosition(E.matrixWorld)),Tt.logarithmicDepthBuffer&&Et.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),te!==E&&(te=E,$i=!0,fs=!0)}if(ke.needsLights&&(bn.state.sunShadowMap.length>0&&Et.setValue(O,"sunShadowMap",bn.state.sunShadowMap,je),bn.state.directionalShadowMap.length>0&&Et.setValue(O,"directionalShadowMap",bn.state.directionalShadowMap,je),bn.state.spotShadowMap.length>0&&Et.setValue(O,"spotShadowMap",bn.state.spotShadowMap,je),bn.state.pointShadowMap.length>0&&Et.setValue(O,"pointShadowMap",bn.state.pointShadowMap,je)),q.isSkinnedMesh){Et.setOptional(O,q,"bindMatrix"),Et.setOptional(O,q,"bindMatrixInverse");let Vt=q.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Et.setValue(O,"boneTexture",Vt.boneTexture,je))}q.isBatchedMesh&&(Et.setOptional(O,q,"batchingTexture"),Et.setValue(O,"batchingTexture",q._matricesTexture,je),Et.setOptional(O,q,"batchingIdTexture"),Et.setValue(O,"batchingIdTexture",q._indirectTexture,je),Et.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Et.setValue(O,"batchingColorTexture",q._colorsTexture,je));let Kn=Y.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&ie.update(q,Y,_n),($i||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,Et.setValue(O,"receiveShadow",q.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(fn.envMapIntensity.value=U.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=Hv()),$i){if(Et.setValue(O,"toneMappingExposure",I.toneMappingExposure),ke.needsLights&&jt(fn,fs),we&&k.fog===!0&&Se.refreshFogUniforms(fn,we),Se.refreshMaterialUniforms(fn,k,_e,Ie,S.state.transmissionRenderTarget[E.id]),ke.needsLights&&ke.numLightProbeGrids>0){let Vt=M,cn=0;for(let wi of S.state.lightProbeGridArray)wi.texture!==null&&(Vt.textures[cn]=wi.texture,Vt.min[cn]=wi.boundingBox.min,Vt.max[cn]=wi.boundingBox.max,Vt.resolution[cn]=wi.resolution,cn++);for(let wi in Vt)Vt[wi].length=cn;fn.probesSH.value=Vt.textures,fn.probesMin.value=Vt.min,fn.probesMax.value=Vt.max,fn.probesResolution.value=Vt.resolution}Fr.upload(O,pt(ke),fn,je)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Fr.upload(O,pt(ke),fn,je),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(O,"center",q.center),Et.setValue(O,"modelViewMatrix",q.modelViewMatrix),Et.setValue(O,"normalMatrix",q.normalMatrix),Et.setValue(O,"modelMatrix",q.matrixWorld),k.uniformsGroups!==void 0){let Vt=k.uniformsGroups;for(let cn=0,wi=Vt.length;cn<wi;cn++){let ud=Vt[cn];We.update(ud,_n),We.bind(ud,_n)}}return _n}function jt(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Ht(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(E,U,Y){let k=Ye.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ye.get(E.texture).__webglTexture=U,Ye.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let Y=Ye.get(E);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Y=0){se=E,G=U,V=Y;let k=null,q=!1,we=!1;if(E){let Me=Ye.get(E);if(Me.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(O.FRAMEBUFFER,Me.__webglFramebuffer),re.copy(E.viewport),Le.copy(E.scissor),j=E.scissorTest,xe.viewport(re),xe.scissor(Le),xe.setScissorTest(j),K=-1;return}else if(Me.__webglFramebuffer===void 0)je.setupRenderTarget(E);else if(Me.__hasExternalTextures)je.rebindTextures(E,Ye.get(E.texture).__webglTexture,Ye.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let st=E.depthTexture;if(Me.__boundDepthTexture!==st){if(st!==null&&Ye.has(st)&&(E.width!==st.image.width||E.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(E)}}let Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(we=!0);let He=Ye.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[U])?k=He[U][Y]:k=He[U],q=!0):E.samples>0&&je.useMultisampledRTT(E)===!1?k=Ye.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[Y]:k=He,re.copy(E.viewport),Le.copy(E.scissor),j=E.scissorTest}else re.copy($e).multiplyScalar(_e).floor(),Le.copy(ot).multiplyScalar(_e).floor(),j=ht;if(Y!==0&&(k=z),xe.bindFramebuffer(O.FRAMEBUFFER,k)&&xe.drawBuffers(E,k),xe.viewport(re),xe.scissor(Le),xe.setScissorTest(j),q){let Me=Ye.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,Y)}else if(we){let Me=U;for(let Ce=0;Ce<E.textures.length;Ce++){let He=Ye.get(E.textures[Ce]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ce,He.__webglTexture,Y,Me)}}else if(E!==null&&Y!==0){let Me=Ye.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Me.__webglTexture,Y)}K=-1};function Ke(E){let U=Ye.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=Tt.textureFormatReadable(E.format),U.__typeReadable=Tt.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,Y,k,q,we,Oe,Me=0){if(!(E&&E.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ce=Ce[Oe],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){xe.bindFramebuffer(O.FRAMEBUFFER,Ce);try{let He=E.textures[Me],st=He.format,lt=He.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Me);let Ue=Ke(He);if(Ue.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&Y>=0&&Y<=E.height-q&&O.readPixels(U,Y,k,q,pe.convert(st),pe.convert(lt),we)}finally{let He=se!==null?Ye.get(se).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(E,U,Y,k,q,we,Oe,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ce=Ce[Oe],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(U>=0&&U<=E.width-k&&Y>=0&&Y<=E.height-q){xe.bindFramebuffer(O.FRAMEBUFFER,Ce);let He=E.textures[Me],st=He.format,lt=He.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Me);let Ue=Ke(He);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),O.readPixels(U,Y,k,q,pe.convert(st),pe.convert(lt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let bt=se!==null?Ye.get(se).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,bt);let Ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Vf(O,Ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(dt),O.deleteSync(Ft),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Y=0){let k=Math.pow(2,-Y),q=Math.floor(E.image.width*k),we=Math.floor(E.image.height*k),Oe=U!==null?U.x:0,Me=U!==null?U.y:0;je.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Oe,Me,q,we),xe.unbindTexture()},this.copyTextureToTexture=function(E,U,Y=null,k=null,q=0,we=0){let Oe,Me,Ce,He,st,lt,Ue,dt,bt,Ft=E.isCompressedTexture?E.mipmaps[we]:E.image;if(Y!==null)Oe=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,He=Y.min.x,st=Y.min.y,lt=Y.isBox3?Y.min.z:0;else{let Et=Math.pow(2,-q);Oe=Math.floor(Ft.width*Et),Me=Math.floor(Ft.height*Et),E.isDataArrayTexture?Ce=Ft.depth:E.isData3DTexture?Ce=Math.floor(Ft.depth*Et):Ce=1,He=0,st=0,lt=0}k!==null?(Ue=k.x,dt=k.y,bt=k.z):(Ue=0,dt=0,bt=0);let Dt=pe.convert(U.format),gn=pe.convert(U.type),ke;U.isData3DTexture?(je.setTexture3D(U,0),ke=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(je.setTexture2DArray(U,0),ke=O.TEXTURE_2D_ARRAY):(je.setTexture2D(U,0),ke=O.TEXTURE_2D),xe.activeTexture(O.TEXTURE0),xe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),xe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),xe.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let bn=xe.getParameter(O.UNPACK_ROW_LENGTH),Rt=xe.getParameter(O.UNPACK_IMAGE_HEIGHT),ds=xe.getParameter(O.UNPACK_SKIP_PIXELS),_n=xe.getParameter(O.UNPACK_SKIP_ROWS),go=xe.getParameter(O.UNPACK_SKIP_IMAGES);xe.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,He),xe.pixelStorei(O.UNPACK_SKIP_ROWS,st),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,lt);let $i=E.isDataArrayTexture||E.isData3DTexture,fs=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Et=Ye.get(E),fn=Ye.get(U),Kn=Ye.get(Et.__renderTarget),Vt=Ye.get(fn.__renderTarget);xe.bindFramebuffer(O.READ_FRAMEBUFFER,Kn.__webglFramebuffer),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let cn=0;cn<Ce;cn++)$i&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.get(E).__webglTexture,q,lt+cn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.get(U).__webglTexture,we,bt+cn)),O.blitFramebuffer(He,st,He+Oe,st+Me,Ue,dt,Ue+Oe,dt+Me,O.DEPTH_BUFFER_BIT,O.NEAREST);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||Ye.has(E)){let Et=Ye.get(E),fn=Ye.get(U);xe.bindFramebuffer(O.READ_FRAMEBUFFER,L),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let Kn=0;Kn<Ce;Kn++)$i?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.__webglTexture,q,lt+Kn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Et.__webglTexture,q),fs?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,fn.__webglTexture,we,bt+Kn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fn.__webglTexture,we),q!==0?O.blitFramebuffer(He,st,He+Oe,st+Me,Ue,dt,Ue+Oe,dt+Me,O.COLOR_BUFFER_BIT,O.NEAREST):fs?O.copyTexSubImage3D(ke,we,Ue,dt,bt+Kn,He,st,Oe,Me):O.copyTexSubImage2D(ke,we,Ue,dt,He,st,Oe,Me);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else fs?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(ke,we,Ue,dt,bt,Oe,Me,Ce,Dt,gn,Ft.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(ke,we,Ue,dt,bt,Oe,Me,Ce,Dt,Ft.data):O.texSubImage3D(ke,we,Ue,dt,bt,Oe,Me,Ce,Dt,gn,Ft):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,Ue,dt,Oe,Me,Dt,gn,Ft.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,Ue,dt,Ft.width,Ft.height,Dt,Ft.data):O.texSubImage2D(O.TEXTURE_2D,we,Ue,dt,Oe,Me,Dt,gn,Ft);xe.pixelStorei(O.UNPACK_ROW_LENGTH,bn),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Rt),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,ds),xe.pixelStorei(O.UNPACK_SKIP_ROWS,_n),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,go),we===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(ke),xe.unbindTexture()},this.initRenderTarget=function(E){Ye.get(E).__webglFramebuffer===void 0&&je.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?je.setTextureCube(E,0):E.isData3DTexture?je.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?je.setTexture2DArray(E,0):je.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){G=0,V=0,se=null,xe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var Lp={type:"change"},xu={type:"start"},Np={type:"end"},vc=new ui,Dp=new pn,Gv=Math.cos(70*Pn.DEG2RAD),ln=new C,Ln=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_u=1e-6,Mc=class extends Ka{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new un,this._lastTargetPosition=new C,this._quat=new un().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ir,this._sphericalDelta=new Ir,this._scale=1,this._panOffset=new C,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new C,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wv.bind(this),this._onPointerDown=Vv.bind(this),this._onPointerUp=Xv.bind(this),this._onContextMenu=jv.bind(this),this._onMouseWheel=Yv.bind(this),this._onKeyDown=Kv.bind(this),this._onTouchStart=Zv.bind(this),this._onTouchMove=Jv.bind(this),this._onMouseDown=qv.bind(this),this._onMouseMove=$v.bind(this),this._interceptControlDown=Qv.bind(this),this._interceptControlUp=eM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ct.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lp),this.update(),this.state=Ct.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ln:n>Math.PI&&(n-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ln.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vc.origin.copy(this.object.position),vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vc.direction))<Gv?this.object.lookAt(this.target):(Dp.setFromNormalAndCoplanarPoint(this.object.up,this.target),vc.intersectPlane(Dp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_u||this._lastTargetPosition.distanceToSquared(this.target)>_u?(this.dispatchEvent(Lp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ln/60*this.autoRotateSpeed*e:Ln/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Vv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Wv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Xv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Np),this.state=Ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case as.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case as.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(xu)}function $v(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Yv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(xu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Np))}function Kv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Zv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1){this.state=Ct.NONE;break}this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1){this.state=Ct.NONE;break}this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(xu)}function Jv(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function jv(i){this.enabled!==!1&&i.preventDefault()}function Qv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Sc=class extends bs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new _t;e.deleteAttribute("uv");let t=new Ze({side:en}),n=new Ze,s=new Cs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Fe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ui(e,n,6),o=new Ut;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Fe(e,zr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Fe(e,zr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Fe(e,zr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Fe(e,zr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Fe(e,zr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Fe(e,zr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function zr(i){return new za({color:0,emissive:16777215,emissiveIntensity:i})}var bc=class{constructor(e=1/60,t=5){this.step=e,this.maxSteps=t,this.accumulator=0}reset(){this.accumulator=0}advance(e,t){this.accumulator+=Math.min(Math.max(e,0),this.step*this.maxSteps);let n=0;for(;this.accumulator+1e-10>=this.step&&n<this.maxSteps;)t(this.step),this.accumulator=Math.max(0,this.accumulator-this.step),n++;return this.accumulator/this.step}};function Mi(i){let e=new Set,t=new Set,n=new Set,s=new Set;i.traverse(a=>{a.geometry&&e.add(a.geometry),a.skeleton&&s.add(a.skeleton);for(let o of[].concat(a.material||[])){t.add(o);for(let l of Object.values(o))l?.isTexture&&n.add(l)}}),s.forEach(a=>a.dispose()),e.forEach(a=>a.dispose()),t.forEach(a=>a.dispose());let r=new Set;n.forEach(a=>{a.source?.data&&r.add(a.source.data),a.dispose()}),r.forEach(a=>{typeof a.close=="function"&&a.close()}),i.removeFromParent()}var Up={low:{dpr:1,shadows:!1,shadowSize:512},balanced:{dpr:1.5,shadows:!0,shadowSize:1024},high:{dpr:2,shadows:!0,shadowSize:2048}},Op={workshop:{background:"#16262c",fog:["#16262c",38,120],floor:!0,grid:!0,environmentIntensity:.5,sun:[12,20,8],target:[0,0,0],shadow:16,far:260,distance:[1.6,65],exposure:1.18},level:{background:"#a9bcb4",fog:["#b9c3b6",95,420],floor:!1,grid:!1,environmentIntensity:.6,sun:[90,140,20],target:[0,0,85],shadow:105,far:700,distance:[4,320],exposure:.95}},Ec=class{constructor(e,t,n){this.host=e,this.onStats=t,this.onError=n,this.systems=new Set,this.stepper=new bc,this.disposed=!1,this.lost=!1,this.dirty=!0,this.frameId=0,this.lastTime=0,this.lastStats=0,this.environment=null,this.focusPoint=null,this.tween=null,this.cameraLocked=!1,this.keys=new Set,this.keyboardPan=!1,this.renderer=new _c({antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Gt,this.renderer.toneMapping=Ja,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.type=Tl,e.append(this.renderer.domElement),this.renderer.domElement.tabIndex=0,this.renderer.domElement.setAttribute("aria-label","\u53EF\u62D6\u52A8\u65CB\u8F6C\u548C\u7F29\u653E\u7684 3D \u573A\u666F");let s=new Br(this.renderer);this.environmentTexture=s.fromScene(new Sc,.04).texture,this.scene=new bs,this.scene.environment=this.environmentTexture,this.scene.background=new Ge("#16262c"),this.scene.fog=new ga("#16262c",38,120),this.camera=new nn(42,1,.1,260),this.controls=new Mc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.075,this.controls.rotateSpeed=.85,this.controls.zoomSpeed=.9,this.controls.minDistance=1.6,this.controls.maxDistance=65,this.controls.maxPolarAngle=Math.PI*.495,this.controls.minPolarAngle=.02,this.controls.addEventListener("change",()=>this.invalidate()),this.scene.add(new Wa("#d8efff","#4b5141",1.55)),this.sun=new Ps("#fff1d5",2.8),this.sun.position.set(12,20,8),this.sun.castShadow=!0,this.sun.shadow.normalBias=.025,this.sun.shadow.bias=-4e-4,this.scene.add(this.sun),this.scene.add(this.sun.target),this.floor=new Fe(new Tn(200,200),new Ze({color:"#2b3d41",roughness:.92,metalness:.08})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor),this.grid=new Ya(80,80,"#557474","#32494c"),this.grid.position.y=.006,this.scene.add(this.grid),this.content=new wt,this.scene.add(this.content),this.onVisibility=()=>{this.lastTime=0,this.stepper.reset(),document.hidden?(cancelAnimationFrame(this.frameId),this.frameId=0):this.invalidate()},this.onLost=r=>{r.preventDefault(),this.lost=!0,cancelAnimationFrame(this.frameId),this.frameId=0,n("\u663E\u5361\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u6B63\u5728\u7B49\u5F85\u6062\u590D\u3002")},this.onRestored=()=>{this.lost=!1,this.lastTime=0,this.stepper.reset(),this.invalidate(),n("3D \u7A7A\u95F4\u5DF2\u6062\u590D\u3002")},this.onKeyDown=r=>{!this.keyboardPan||tM(r.target)||["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE"].includes(r.code)&&(this.keys.add(r.code),this.invalidate())},this.onKeyUp=r=>{this.keys.delete(r.code)},this.onBlur=()=>this.keys.clear(),document.addEventListener("visibilitychange",this.onVisibility),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),this.renderer.domElement.addEventListener("webglcontextlost",this.onLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.onRestored),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.setQuality("balanced"),this.setEnvironment("workshop"),this.resetCamera()}setEnvironment(e){if(this.environment===e)return!1;let t=Op[e]||Op.workshop;return this.environment=e,this.scene.background=new Ge(t.background),this.scene.fog.color.set(t.fog[0]),this.scene.fog.near=t.fog[1],this.scene.fog.far=t.fog[2],this.floor.visible=t.floor,this.grid.visible=t.grid,this.sun.position.set(...t.sun),this.sun.target.position.set(...t.target),this.sun.target.updateMatrixWorld(),Object.assign(this.sun.shadow.camera,{left:-t.shadow,right:t.shadow,top:t.shadow,bottom:-t.shadow,near:1,far:t.shadow*4}),this.sun.shadow.camera.updateProjectionMatrix(),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.camera.far=t.far,this.camera.updateProjectionMatrix(),this.controls.minDistance=t.distance[0],this.controls.maxDistance=t.distance[1],this.controls.maxPolarAngle=Math.PI*.495,this.renderer.toneMappingExposure=t.exposure,this.scene.environmentIntensity=t.environmentIntensity,this.focusPoint=null,this.tween=null,!0}focusOn(e,{distance:t,height:n,duration:s=.65,azimuth:r}={}){if(!e||this.cameraLocked)return!1;let a=e.position.clone?e.position.clone():new C(...e.position),o=e.radius||4,l=e.view||{},c=Math.max(12,o*2),h=t??l.distance??c,d=n??l.height??Math.max(5,h*.5),u=r??l.azimuth??0,f=a.clone().add(new C(Math.sin(u)*h,d,-Math.cos(u)*h));return this.focusPoint={position:a.clone(),radius:o,view:l},this.tween={fromPos:this.camera.position.clone(),toPos:f,fromTarget:this.controls.target.clone(),toTarget:a,elapsed:0,duration:s},this.invalidate(),!0}focusPointById(e,t,n){return!e||!e.has(t)?!1:this.focusOn(e.get(t),n)}setAutoRotate(e){this.cameraLocked||(this.controls.autoRotate=!!e,this.controls.autoRotateSpeed=.7,this.invalidate())}cancelCameraTween(){this.tween=null,this.invalidate()}lockCamera(e){this.cameraLocked=!!e,this.cameraLocked&&(this.tween=null,this.controls.autoRotate=!1),this.invalidate()}setKeyboardPan(e){this.keyboardPan=!!e,e||this.keys.clear()}resetCamera(){if(!this.cameraLocked){if(this.environment==="level"&&this.focusPoint){this.focusOn(this.focusPoint,{duration:.001});return}this.environment==="level"?(this.camera.position.set(16,13,-16),this.controls.target.set(0,2,20)):(this.camera.position.set(7.6,6.2,9.6),this.controls.target.set(0,1.7,0)),this.controls.update(),this.invalidate()}}resize(){let e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.invalidate()}setQuality(e){let t=Up[e]||Up.balanced;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.dpr)),this.renderer.shadowMap.enabled=t.shadows,this.sun.shadow.mapSize.setScalar(t.shadowSize),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.scene.traverse(n=>{for(let s of[].concat(n.material||[]))s.needsUpdate=!0}),this.resize()}addSystem(e){return this.systems.add(e),this.invalidate(),()=>{this.systems.delete(e)&&e.dispose?.()}}invalidate(){this.dirty=!0,!this.frameId&&!this.disposed&&!this.lost&&!document.hidden&&(this.frameId=requestAnimationFrame(e=>this.frame(e)))}applyKeyboardPan(e){if(!this.keyboardPan||!this.keys.size)return!1;let t=Math.max(6,this.camera.position.distanceTo(this.controls.target))*e*1.1,n=new C;this.camera.getWorldDirection(n),n.y=0,n.lengthSq()<1e-6&&n.set(0,0,-1),n.normalize();let s=new C().crossVectors(n,new C(0,1,0)).normalize(),r=new C;if(this.keys.has("KeyW")&&r.add(n),this.keys.has("KeyS")&&r.sub(n),this.keys.has("KeyD")&&r.add(s),this.keys.has("KeyA")&&r.sub(s),this.keys.has("KeyE")&&(r.y+=1),this.keys.has("KeyQ")&&(r.y-=1),r.lengthSq()===0)return!1;r.normalize().multiplyScalar(t);let a=this.controls.target.clone().add(r);a.x=Pn.clamp(a.x,-80,80),a.z=Pn.clamp(a.z,-40,230),a.y=Pn.clamp(a.y,0,120);let o=a.sub(this.controls.target);return this.camera.position.add(o),this.controls.target.add(o),!0}updateCameraTween(e){let t=this.tween;if(!t)return!1;if(this.cameraLocked)return this.tween=null,!1;t.elapsed+=e;let n=t.duration<=0?1:Math.min(1,t.elapsed/t.duration),s=n*n*n*(n*(n*6-15)+10);return this.camera.position.lerpVectors(t.fromPos,t.toPos,s),this.controls.target.lerpVectors(t.fromTarget,t.toTarget,s),this.camera.lookAt(this.controls.target),n>=1&&(this.tween=null,this.controls.update()),!0}frame(e){if(this.frameId=0,!(this.disposed||this.lost||document.hidden))try{let t=this.lastTime?Math.min((e-this.lastTime)/1e3,.1):0;this.lastTime=e;let n=this.stepper.advance(t,r=>this.systems.forEach(a=>a.fixedUpdate?.(r)));this.systems.forEach(r=>r.update?.(t,n));let s=!1;if(this.tween?s=this.updateCameraTween(t):(s=this.controls.update(),this.applyKeyboardPan(t)&&(s=!0,this.controls.update())),this.dirty||s||this.systems.size||this.controls.autoRotate){this.dirty=!1;let r=performance.now();this.renderer.render(this.scene,this.camera),(!this.systems.size||e-this.lastStats>300)&&(this.lastStats=e,this.onStats({cpuMs:performance.now()-r,...this.renderer.info.render,...this.renderer.info.memory}))}s||this.dirty||this.systems.size||this.controls.autoRotate?this.invalidate():(this.lastTime=0,this.stepper.reset())}catch(t){this.onError("\u573A\u666F\u8FD0\u884C\u5F02\u5E38\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5\u3002"),console.error(t)}}replaceContent(e){for(let t of[...this.content.children])Mi(t);this.content.add(e),this.invalidate()}dispose(){this.disposed||(this.disposed=!0,cancelAnimationFrame(this.frameId),this.resizeObserver.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),this.renderer.domElement.removeEventListener("webglcontextlost",this.onLost),this.renderer.domElement.removeEventListener("webglcontextrestored",this.onRestored),this.controls.dispose(),this.systems.forEach(e=>e.dispose?.()),this.systems.clear(),Mi(this.scene),this.sun.shadow.dispose(),this.environmentTexture.dispose(),this.renderer.dispose(),this.renderer.domElement.remove())}};function tM(i){if(!i)return!1;let e=i.tagName;return e==="INPUT"||e==="TEXTAREA"||e==="SELECT"||i.isContentEditable}var Hr="prototype-3";var Si=Object.freeze({infantry:{name:"\u6B65\u5766",speed:1,attack:1,rate:1,health:1,defense:1,turn:1,preferredMass:22},heavy:{name:"\u91CD\u5766",speed:.65,attack:1.35,rate:.65,health:1.5,defense:1.5,turn:.7,preferredMass:36},assassin:{name:"\u523A\u5766",speed:1.4,attack:1.2,rate:1.35,health:.75,defense:.7,turn:1.4,preferredMass:16},exotic:{name:"\u5947\u5766",speed:1,attack:1,rate:1,health:1,defense:1,turn:1,preferredMass:24},artillery:{name:"\u9AD8\u5766",speed:.8,attack:1.15,rate:.7,health:1.3,defense:.9,turn:.8,preferredMass:28}}),ho=Object.keys(Si),Ve=Object.freeze({hull:{name:"\u57FA\u7840\u8F66\u4F53",role:"hull",size:[3.4,1.2,6.4],mass:10,armor:10,health:100,cost:0,types:ho},tracks:{name:"\u5C65\u5E26\u7EC4",role:"mobility",size:[3.9,.8,6.6],mass:5,traction:32,cost:0,types:ho},engine:{name:"\u57FA\u7840\u5F15\u64CE",role:"engine",size:[1.4,.8,1.6],mass:3,power:120,cost:0,types:ho},turret:{name:"\u70AE\u5854",role:"turret",size:[2.5,.9,3.4],mass:6,armor:6,health:40,cost:0,types:ho},cannon:{name:"\u57FA\u7840\u706B\u70AE",role:"weapon",size:[1,.8,2],mass:4,damage:25,rate:1,projectile:"shell",cost:0,types:["infantry","heavy","assassin","exotic"]},mortar:{name:"\u8FEB\u51FB\u70AE",role:"weapon",size:[1.4,1,1.8],mass:6,damage:40,rate:.55,projectile:"mortar",cost:0,types:["artillery","exotic"]},armor:{name:"\u786C\u88C5\u7532\u677F",role:"armor",size:[3,1,.35],mass:6,armor:18,health:35,cost:30,types:ho},rapid:{name:"\u901F\u5C04\u70AE",role:"weapon",size:[.8,.8,2],mass:3,damage:15,rate:2,projectile:"shell",cost:40,types:["assassin","exotic"]},bomb:{name:"\u7206\u7834\u53D1\u5C04\u5668",role:"weapon",size:[1.2,.8,2],mass:5,damage:32,rate:.8,projectile:"bomb",cost:40,types:["exotic"]}}),Fp=Object.freeze({shell:{launchSpeed:110,gravity:0,blastRadius:.15,lifetime:2,impactDelay:null,straight:!0},bomb:{launchSpeed:42,gravity:11,blastRadius:3,lifetime:3,impactDelay:null},mortar:{launchSpeed:32,gravity:9.8,blastRadius:5,lifetime:6,impactDelay:2.5}}),qE=Object.freeze({maxHealth:"\u751F\u547D\u503C",moveSpeed:"\u7C73/\u79D2",fireRate:"\u6B21/\u79D2",attack:"\u4F24\u5BB3/\u53D1",defense:"\u9632\u5FA1\u8BC4\u5206\uFF1A\u5B9E\u9645\u4F24\u5BB3 = \u539F\u59CB\u4F24\u5BB3 \xD7 100 / (100 + \u9632\u5FA1)",turnSpeed:"\u5F27\u5EA6/\u79D2\uFF1B\u8F66\u4F53\u8F6C\u5411",turretSpeed:"\u5F27\u5EA6/\u79D2\uFF1B\u70AE\u5854\u8F6C\u5411\uFF0C\u65E0\u70AE\u5854\u65F6\u4E0D\u9002\u7528",gravity:"\u7C73/\u79D2\xB2\uFF1B\u5B50\u5F39\u4E0B\u843D\u52A0\u901F\u5EA6\uFF0C\u4E0D\u80FD\u5355\u72EC\u51B3\u5B9A\u5C04\u7A0B",launchSpeed:"\u7C73/\u79D2\uFF1B\u4E0E\u53D1\u5C04\u89D2\u5EA6\u3001\u91CD\u529B\u3001\u51FA\u751F\u9AD8\u5EA6\u53CA\u5BFF\u547D\u5171\u540C\u51B3\u5B9A\u5F39\u9053",blastRadius:"\u7C73",impactDelay:"\u79D2\uFF1B\u8FEB\u51FB\u70AE\u8BBE\u8BA1\u547D\u4E2D\u5EF6\u8FDF\uFF0C\u540E\u7EED\u5F39\u9053\u6C42\u89E3\u5668\u9700\u8981\u6EE1\u8DB3\u6B64\u7EA6\u675F"}),Mt=Object.freeze({minSpeed:1,maxSpeed:18,maxParts:128,maxExtent:30,maxWeapons:4,contactTolerance:.16,maxTurrets:1,snapGrid:.1});function uo(i="infantry",e="starter"){if(!Object.hasOwn(Si,i))throw new Error("\u672A\u77E5\u5766\u514B\u7C7B\u578B");let t=i==="artillery"?"mortar":"cannon";return{schemaVersion:1,id:e,name:`${Si[i].name}\u539F\u578B`,type:i,revision:1,primaryWeaponId:"weapon",parts:[{id:"hull",partId:"hull",parentId:null,position:[0,1.4,0],yaw:0},{id:"tracks",partId:"tracks",parentId:"hull",position:[0,.4,0],yaw:0},{id:"engine",partId:"engine",parentId:"hull",position:[0,2.4,-2.4],yaw:0},{id:"turret",partId:"turret",parentId:"hull",position:[0,2.45,.4],yaw:0},{id:"weapon",partId:t,parentId:"turret",position:[0,i==="artillery"?2.5:2.45,i==="artillery"?3.1:3.15],yaw:0}]}}var fo=(i,e,t)=>Math.min(t,Math.max(e,i)),si=i=>Math.round(i*1e3)/1e3,Bp=(i,e)=>typeof e=="string"&&Object.hasOwn(i,e),yu=Object.freeze({speed:2.8,turn:4.2,turret:1.5});function mn(i){let e=Ve[i.partId].size,t=Math.abs(Math.cos(i.yaw)),n=Math.abs(Math.sin(i.yaw)),s=[(e[0]*t+e[2]*n)/2,e[1]/2,(e[0]*n+e[2]*t)/2];return{min:i.position.map((r,a)=>r-s[a]),max:i.position.map((r,a)=>r+s[a])}}function po(i,e=Object.keys(Ve)){let t=[];if(!i||i.schemaVersion!==1||!Bp(Si,i.type)||typeof i.id!="string"||!i.id||typeof i.name!="string"||!i.name.trim()||!Number.isInteger(i.revision)||i.revision<1)return["\u84DD\u56FE\u5934\u4FE1\u606F\u6216\u7248\u672C\u65E0\u6548"];if(!Array.isArray(i.parts)||!i.parts.length||i.parts.length>Mt.maxParts)return["\u90E8\u4EF6\u6570\u91CF\u8D85\u51FA\u8303\u56F4"];let n=new Set;for(let l of i.parts){if(!l||typeof l.id!="string"||!l.id||n.has(l.id)||!Bp(Ve,l.partId)||!Array.isArray(l.position)||l.position.length!==3||!l.position.every(c=>Number.isFinite(c)&&Math.abs(c)<=Mt.maxExtent)||!Number.isFinite(l.yaw)||l.parentId!==null&&typeof l.parentId!="string"||l.scale!==void 0){t.push("\u90E8\u4EF6 ID\u3001\u5750\u6807\u6216\u53D8\u6362\u65E0\u6548\uFF08\u6682\u4E0D\u652F\u6301\u7F29\u653E\uFF09");continue}n.add(l.id),e.includes(l.partId)||t.push(`${l.id}\uFF1A\u90E8\u4EF6\u672A\u89E3\u9501`),Ve[l.partId].types.includes(i.type)||t.push(`${l.id}\uFF1A\u4E0D\u9002\u7528\u4E8E\u5F53\u524D\u5766\u514B\u7C7B\u578B`)}if(t.length)return t;let s=new Map(i.parts.map(l=>[l.id,l])),r=i.parts.filter(l=>l.parentId===null);(r.length!==1||Ve[r[0]?.partId]?.role!=="hull")&&t.push("\u9700\u8981\u552F\u4E00\u7684\u8F66\u4F53\u6839\u8282\u70B9");let a=l=>i.parts.filter(c=>Ve[c.partId].role===l).length;(a("hull")!==1||a("engine")!==1||a("mobility")!==1)&&t.push("\u9700\u8981\u4E14\u53EA\u80FD\u6709\u4E00\u4E2A\u8F66\u4F53\u3001\u4E00\u4E2A\u5F15\u64CE\u548C\u4E00\u7EC4\u5C65\u5E26"),(a("weapon")<1||a("weapon")>Mt.maxWeapons)&&t.push("\u6B66\u5668\u6570\u91CF\u5FC5\u987B\u4E3A 1\uFF5E4"),a("turret")>Mt.maxTurrets&&t.push("\u6700\u591A\u53EA\u80FD\u5B89\u88C5\u4E00\u4E2A\u70AE\u5854");let o=s.get(i.primaryWeaponId);(!o||Ve[o.partId].role!=="weapon")&&t.push("\u9700\u8981\u6307\u5B9A\u6709\u6548\u4E3B\u6B66\u5668"),i.type==="artillery"&&o?.partId!=="mortar"&&t.push("\u9AD8\u5766\u4E3B\u6B66\u5668\u5FC5\u987B\u4E3A\u8FEB\u51FB\u70AE");for(let l of i.parts){let c=new Set([l.id]),h=l.parentId;for(;h!==null;){if(!s.has(h)||c.has(h)){t.push(`${l.id}\uFF1A\u8FDE\u63A5\u7F3A\u5931\u6216\u5B58\u5728\u5FAA\u73AF`);break}c.add(h),h=s.get(h).parentId}let d=mn(l);if(d.min[1]<-.01&&t.push(`${l.id}\uFF1A\u90E8\u4EF6\u7A7F\u8FC7\u5730\u9762`),l.parentId&&s.has(l.parentId)){let u=mn(s.get(l.parentId));Math.max(...d.min.map((p,x)=>Math.max(p-u.max[x],u.min[x]-d.max[x])))>Mt.contactTolerance&&t.push(`${l.id}\uFF1A\u672A\u63A5\u89E6\u6240\u8FDE\u63A5\u7684\u90E8\u4EF6`)}}for(let l=0;l<i.parts.length;l++)for(let c=l+1;c<i.parts.length;c++){let h=mn(i.parts[l]),d=mn(i.parts[c]);h.min.every((u,f)=>Math.min(h.max[f],d.max[f])-Math.max(u,d.min[f])>.05)&&t.push(`${i.parts[l].id}/${i.parts[c].id}\uFF1A\u90E8\u4EF6\u5B9E\u4F53\u91CD\u53E0`)}return[...new Set(t)]}function qi(i,e){let t=po(i,e);if(t.length)return{valid:!1,rulesVersion:Hr,errors:t,stats:null};let n=[...i.parts].sort((_,b)=>_.id.localeCompare(b.id,"en")),s=Si[i.type],r=_=>n.reduce((b,P)=>b+(Ve[P.partId][_]||0),0),a=r("mass"),o=[0,1,2].map(_=>n.reduce((b,P)=>b+P.position[_]*Ve[P.partId].mass,0)/a),l=n.map(mn),c=[0,1,2].map(_=>Math.min(...l.map(b=>b.min[_]))),d=[0,1,2].map(_=>Math.max(...l.map(b=>b.max[_]))).map((_,b)=>_-c[b]),u=n.find(_=>Ve[_.partId].role==="mobility"),f=mn(u),p=Math.max(Math.abs(o[0]-u.position[0])/((f.max[0]-f.min[0])/2),Math.abs(o[2]-u.position[2])/((f.max[2]-f.min[2])/2));if(p>1)return{valid:!1,rulesVersion:Hr,errors:["\u91CD\u5FC3\u6295\u5F71\u8D85\u51FA\u5C65\u5E26\u652F\u6491\u8303\u56F4"],stats:null};let x=fo(1-p*.4-Math.max(0,o[1]-1.5)*.12,.25,1),m=fo(1-Math.abs(a-s.preferredMass)/(s.preferredMass*2),.5,1),g=.85+.15*m,v=n.find(_=>Ve[_.partId].role==="turret"),y=n.filter(_=>Ve[_.partId].role==="weapon").map(_=>{let b=Ve[_.partId];return{instanceId:_.id,partId:_.partId,position:[..._.position],yaw:_.yaw,onTurret:!!(v&&_.parentId===v.id),attack:si(b.damage*s.attack*g),fireRate:si(b.rate*s.rate),projectile:{kind:b.projectile,...Fp[b.projectile]}}}),M=y.find(_=>_.instanceId===i.primaryWeaponId),T={maxHealth:si(r("health")*s.health),moveSpeed:si(fo(r("power")/a*s.speed*x*g*yu.speed,Mt.minSpeed,Mt.maxSpeed)),turnSpeed:si(fo(2*s.turn*x/(1+a*(d[0]**2+d[2]**2)/500)*yu.turn,.1,3)),defense:si(r("armor")*s.defense),attack:M.attack,fireRate:M.fireRate,...v?{turretSpeed:si(fo(3.2*s.turn*x/(1+Ve[v.partId].mass*.08+a*.01)*yu.turret,.15,3))}:{},...M.projectile},S=["\u539F\u578B\u8BC4\u4F30\uFF1A\u4F7F\u7528\u90E8\u4EF6\u5305\u56F4\u76D2\u8FD1\u4F3C\u7ED3\u6784\uFF0C\u5C1A\u672A\u9A8C\u8BC1\u70AE\u53E3\u906E\u6321\u3001\u627F\u91CD\u4E0E\u771F\u5B9E\u78B0\u649E\u3002"];return v||S.push("\u65E0\u70AE\u5854\uFF1A\u6B66\u5668\u76F4\u63A5\u56FA\u5B9A\u5728\u8F66\u4F53\u4E0A\uFF0C\u8F6C\u5411\u65F6\u65E0\u6CD5\u72EC\u7ACB\u7784\u51C6\u3002"),{valid:!0,rulesVersion:Hr,blueprintRevision:i.revision,errors:[],warnings:S,stats:T,weapons:y,metrics:{mass:a,centerOfMass:o.map(si),size:d.map(si),stability:si(x),typeFit:si(m),hasTurret:!!v},explanation:{moveSpeed:"\u5F15\u64CE\u529F\u7387 / \u603B\u8D28\u91CF \xD7 \u7C7B\u578B\u7CFB\u6570 \xD7 \u7A33\u5B9A\u6027 \xD7 \u9002\u914D\u4FEE\u6B63 \xD7 \u8857\u673A\u7CFB\u6570\uFF08\u9762\u677F\u503C\u4E0E\u6218\u573A\u5B9E\u9645\u4E00\u81F4\uFF09",turnSpeed:"\u53D7\u8D28\u91CF\u3001\u6C34\u5E73\u5C3A\u5BF8\u548C\u91CD\u5FC3\u7A33\u5B9A\u6027\u5F71\u54CD\uFF0C\u518D\u4E58\u8857\u673A\u7CFB\u6570",defense:"\u8F66\u4F53\u4E0E\u786C\u88C5\u7532\u8BC4\u5206\u4E4B\u548C \xD7 \u7C7B\u578B\u7CFB\u6570",attack:"\u4E3B\u6B66\u5668\u57FA\u7840\u4F24\u5BB3 \xD7 \u7C7B\u578B\u7CFB\u6570 \xD7 \u9002\u914D\u4FEE\u6B63",health:"\u8F66\u4F53\u4E0E\u88C5\u7532\u751F\u547D\u4E4B\u548C \xD7 \u7C7B\u578B\u7CFB\u6570",turretSpeed:"\u70AE\u5854\u8D28\u91CF\u4E0E\u603B\u8D28\u91CF\u8D8A\u5927\uFF0C\u70AE\u5854\u8F6C\u52A8\u8D8A\u6162\uFF1B\u518D\u4E58\u8857\u673A\u7CFB\u6570\uFF0C\u65E0\u70AE\u5854\u65F6\u6CA1\u6709\u72EC\u7ACB\u7784\u51C6"}}}var nM=Object.keys(Ve),iM=(i,e)=>Math.round(i/e)*e;function kp(i,e=Mt.snapGrid){return Number(iM(i,e).toFixed(4))}function sM(i,e=Mt.snapGrid){return i.map(t=>kp(t,e))}function vu(i,e){return Math.max(...i.min.map((t,n)=>Math.max(t-e.max[n],e.min[n]-i.max[n])))}function Gr(i,e){return i.parts.find(t=>t.id===e)||null}function rM(i,e){let t=new Set([e]),n=!0;for(;n;){n=!1;for(let s of i.parts)s.parentId&&t.has(s.parentId)&&!t.has(s.id)&&(t.add(s.id),n=!0)}return t}function zp(i,e,t,n=.3){let s=Gr(i,e);if(!s)return null;let r=mn({...s,position:t}),a=rM(i,e),o=null;for(let l of i.parts){if(l.id===e||a.has(l.id))continue;let c=vu(r,mn(l));c<=n&&(!o||c<o.gap)&&(o={id:l.id,gap:c})}return o}function aM(i){let e=i.parts.find(n=>Ve[n.partId].role==="hull");if(!e)return null;let t=i.parts.find(n=>Ve[n.partId].role==="turret");return{hull:e,box:mn(e),turret:t,turretBox:t?mn(t):null}}function oM(i,e){let t=Ve[e];if(!t)throw new Error("\u672A\u77E5\u90E8\u4EF6");let n=aM(i);if(!n)return[{position:[0,1.4,0],yaw:0,parentId:null}];let{hull:s,box:r,turret:a,turretBox:o}=n,[l,c,h]=t.size,d=[],u=(f,p=s.id,x=0)=>d.push({position:f.map(m=>Number(m.toFixed(3))),yaw:x,parentId:p});if(t.role==="hull")u([0,1.4,0],null);else if(t.role==="mobility")u([0,Math.max(c/2,r.min[1]-c/2),0]),u([0,Math.max(c/2,r.min[1]-c/2),r.min[2]+h/2]);else if(t.role==="engine"){let f=r.max[1]+c/2;u([0,f,r.min[2]+h/2],s.id),u([0,f,r.min[2]+h/2+.2],s.id)}else if(t.role==="turret"){let f=r.max[1]+c/2;u([0,f,(r.min[2]+r.max[2])/2+(r.max[2]-r.min[2])*.06],s.id),u([0,f,(r.min[2]+r.max[2])/2],s.id),u([0,f,r.max[2]-h/2],s.id)}else if(t.role==="armor"){let f=r.min[1]+c/2;u([0,f,r.max[2]+h/2+.05],s.id),u([r.max[0]+h/2+.05,f,0],s.id,Math.PI/2),u([r.min[0]-h/2-.05,f,0],s.id,Math.PI/2),u([0,f,r.min[2]-h/2-.05],s.id)}else if(t.role==="weapon"){let f=a?o.min[1]+c/2+.05:r.max[1]-c/2,p=a?o.max[2]:r.max[2],x=a?a.id:s.id;for(let m of[0,1.05,-1.05])u([m,f,p+h/2+.05],x);u([0,a?o.max[1]+c/2+.05:r.max[1]+c/2,a?(o.min[2]+o.max[2])/2:0],x),a||u([0,r.max[1]-c/2,r.max[2]+h/2+.05],s.id)}else u([0,r.max[1]+c/2,0],s.id);return d}function Mu(i,e,t){let n=oM(i,e);for(let s of n){let r={id:t,partId:e,parentId:s.parentId,position:[...s.position],yaw:s.yaw},a={...i,parts:[...i.parts,r]};if(po(a,nM).length===0)return{...s,position:[...s.position],parentId:s.parentId}}return n[0]}function Su(i,e,t,{grid:n=Mt.snapGrid,attach:s=!0}={}){let r=Gr(i,e);if(!r)return null;let o=(n?sM(t,n):t.slice(0,3)).map(h=>Math.max(-Mt.maxExtent,Math.min(Mt.maxExtent,h))),l=s?zp(i,e,o):null,c=l?l.id:r.parentId;if(l&&r.parentId&&l.id!==r.parentId){let h=Gr(i,r.parentId);h&&vu(mn({...r,position:o}),mn(h))<=l.gap+1e-6&&(c=r.parentId)}return{position:o,parentId:c,gap:l?.gap??null}}function Hp(i,e,t,n=Mt.snapGrid){let s=Gr(i,e);if(!s)return null;let r=t.slice(0,3).map(p=>{let x=Math.max(-Mt.maxExtent,Math.min(Mt.maxExtent,p));return n?kp(x,n):Number(x.toFixed(3))}),a=(()=>{let p=s.parentId?Gr(i,s.parentId):null;if(p){let x=vu(mn({...s,position:r}),mn(p));if(x<=.7)return{id:p.id,gap:x}}return zp(i,e,r,.7)})(),o=a?Gr(i,a.id):null;if(!o)return r;let l=mn({...s,position:r}),c=mn(o),h=1,d=-1/0;for(let p=0;p<3;p++){let x=Math.max(l.min[p]-c.max[p],c.min[p]-l.max[p]);x>d&&(d=x,h=p)}if(!(d>0&&d<=.7))return r;let u=l.min[h]>c.max[h]?1:-1,f=[...r];return f[h]=Number((f[h]-u*d).toFixed(3)),f}var Gp=["terrain","enemy-tank","player-tank"],Tc=class{constructor(e){this.repository=e}async save({id:e,name:t,category:n,blob:s}){if(typeof e!="string"||!e||typeof t!="string"||!t.trim()||!Gp.includes(n))throw new Error("\u6A21\u578B\u5143\u6570\u636E\u65E0\u6548");if(!(s instanceof Blob)||s.size>64*1024*1024||s.size<20)throw new Error("\u9700\u8981 64 MB \u4EE5\u5185\u7684 GLB");let r=await s.arrayBuffer(),a=new DataView(r);if(a.getUint32(0,!0)!==1179937895||a.getUint32(4,!0)!==2||a.getUint32(8,!0)!==r.byteLength||a.getUint32(16,!0)!==1313821514||a.getUint32(12,!0)+20>r.byteLength)throw new Error("GLB \u7ED3\u6784\u65E0\u6548");let o=JSON.parse(new TextDecoder().decode(new Uint8Array(r,20,a.getUint32(12,!0))));if(o.asset?.version!=="2.0")throw new Error("\u9700\u8981 glTF 2.0 \u6A21\u578B");if([...o.buffers||[],...o.images||[]].some(d=>d.uri&&!d.uri.startsWith("data:")))throw new Error("\u8BF7\u5185\u5D4C\u6A21\u578B\u8D44\u6E90");if((o.extensionsRequired||[]).some(d=>/draco|meshopt|basisu/i.test(d)))throw new Error("\u6682\u4E0D\u652F\u6301\u538B\u7F29\u6A21\u578B");let l={schemaVersion:1,id:e,name:t.trim(),category:n,format:"glb",byteLength:s.size,blob:s};await this.repository.addAsset(l);let{blob:c,...h}=l;return h}list(e){if(e!==void 0&&!Gp.includes(e))throw new Error("\u672A\u77E5\u6A21\u578B\u5206\u7C7B");return this.repository.listAssets(e)}get(e){return this.repository.getAsset(e)}};function Vp(){return{schemaVersion:1,currency:{parts:0},unlockedParts:Object.keys(Ve).filter(i=>Ve[i].cost===0),blueprints:[],tanks:[]}}function bu(i){if(i.schemaVersion!==1)throw new Error("\u5B58\u6863\u7248\u672C\u4E0D\u652F\u6301\uFF1B\u4FDD\u7559\u539F\u6570\u636E\uFF0C\u7B49\u5F85\u8FC1\u79FB");if(!Number.isSafeInteger(i.currency?.parts)||i.currency.parts<0||!Array.isArray(i.unlockedParts)||!Array.isArray(i.blueprints)||!Array.isArray(i.tanks))throw new Error("\u5B58\u6863\u7ED3\u6784\u635F\u574F")}function Wp(i){let e=Object.keys(Ve).filter(t=>Ve[t].cost===0);return i.unlockedParts=[...new Set([...i.unlockedParts,...e])],i}function lM(i,e){bu(i),Wp(i);let t=e(i);if(t?.then)throw new Error("\u5B58\u6863\u66F4\u65B0\u51FD\u6570\u5FC5\u987B\u540C\u6B65");return bu(i),{profile:i,result:t}}async function Xp(i=globalThis.indexedDB,e="steel-journey-3d"){if(!i)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u6301\u4E45\u4FDD\u5B58\u6A21\u578B\uFF1B\u8BF7\u4F7F\u7528\u672C\u5730 HTTP \u5730\u5740\u6216\u652F\u6301 IndexedDB \u7684\u6D4F\u89C8\u5668");let t=await new Promise((s,r)=>{let a=i.open(e,1),o=!1;a.onupgradeneeded=()=>{let l=a.result;l.createObjectStore("profiles"),l.createObjectStore("assets",{keyPath:"id"}).createIndex("category","category")},a.onsuccess=()=>{o?a.result.close():s(a.result)},a.onerror=()=>r(a.error),a.onblocked=()=>{o=!0,r(new Error("\u8BF7\u5173\u95ED\u5176\u4ED6\u7248\u672C\u7684\u6E38\u620F\u9875\u9762\u540E\u91CD\u8BD5"))}});t.onversionchange=()=>t.close();function n(s,r,a){return new Promise((o,l)=>{let c=t.transaction(s,r),h,d,u=f=>{d=f,c.abort()};c.oncomplete=()=>o(h),c.onabort=()=>l(d||c.error||new Error("\u5B58\u50A8\u4E8B\u52A1\u5DF2\u53D6\u6D88")),c.onerror=()=>{};try{a(c.objectStore(s),f=>{h=f},u)}catch(f){u(f)}})}return{readProfile:()=>n("profiles","readonly",(s,r,a)=>{s.get("local").onsuccess=o=>{try{let l=Wp(o.target.result||Vp());bu(l),r(l)}catch(l){a(l)}}}),updateProfile:s=>n("profiles","readwrite",(r,a,o)=>{r.get("local").onsuccess=l=>{try{let{profile:c,result:h}=lM(l.target.result||Vp(),s);r.put(c,"local"),a(h)}catch(c){o(c)}}}),addAsset:s=>n("assets","readwrite",r=>{r.add(s)}),getAsset:s=>n("assets","readonly",(r,a)=>{r.get(s).onsuccess=o=>a(o.target.result||null)}),listAssets:s=>n("assets","readonly",(r,a)=>{let o=[],l=s?r.index("category").openCursor(s):r.openCursor();l.onsuccess=()=>{let c=l.result;if(!c){a(o);return}let{blob:h,...d}=c.value;o.push(d),c.continue()}}),close:()=>t.close()}}var qp={cover:[{id:"wreck-a",kind:"wreck",position:[-2.6,.6,38],size:[4.4,1.2,2.8],solid:!0},{id:"wreck-b",kind:"wreck",position:[1.9,.6,39.2],size:[3.6,1.2,2.4],solid:!0},{id:"wreck-c",kind:"wreck",position:[0,.6,41.6],size:[3,1.2,2.2],solid:!0},{id:"sandbag-l1",kind:"sandbag",position:[-9.5,.45,30],size:[8,.9,1.4],solid:!0},{id:"sandbag-r1",kind:"sandbag",position:[9.5,.45,30],size:[8,.9,1.4],solid:!0},{id:"sandbag-l2",kind:"sandbag",position:[-11,.45,54],size:[7,.9,1.4],solid:!0},{id:"sandbag-r2",kind:"sandbag",position:[11,.45,54],size:[7,.9,1.4],solid:!0},{id:"berm-left",kind:"berm",position:[-13.5,1.3,95],size:[9,2.6,3.2],solid:!0},{id:"berm-mid",kind:"berm",position:[0,1.3,95],size:[6,2.6,3.2],solid:!0},{id:"berm-right",kind:"berm",position:[13.5,1.3,95],size:[9,2.6,3.2],solid:!0},{id:"ammo-west",kind:"ammo",position:[-7,.5,170],size:[2.2,1,2.2],solid:!0,explosive:{radius:3,damage:60}},{id:"ammo-east",kind:"ammo",position:[7,.5,170],size:[2.2,1,2.2],solid:!0,explosive:{radius:3,damage:60}},{id:"crate-gate",kind:"crate",position:[-14.5,.4,150],size:[1.8,.8,1.8],solid:!0},{id:"crate-gate-b",kind:"crate",position:[14.5,.4,146],size:[1.8,.8,1.8],solid:!0}],zones:[{id:"mud-left",kind:"mud",position:[-12.5,.01,110],size:[11,30],speedFactor:.45},{id:"rubble-right",kind:"rubble",position:[12.5,.01,110],size:[11,30],speedFactor:.71}]},$p={schemaVersion:1,id:"steel-journey-01",name:"\u94A2\u94C1\u5F81\u9014 \xB7 \u7B2C\u4E00\u5173",nextLevelId:null,map:{generator:"corridor-v2",width:36,length:180,forwardAxis:"+Z",terrainModelId:null},playerSpawn:[0,0,8],enemies:[{id:"road-1",templateId:"basic-infantry",modelId:null,position:[0,0,42],behavior:"frontal",triggerZ:25},{id:"road-2",templateId:"basic-infantry",modelId:null,position:[-11,0,120],behavior:"flank-left",triggerZ:78},{id:"road-3",templateId:"basic-infantry",modelId:null,position:[11,0,120],behavior:"flank-right",triggerZ:78},{id:"guard",templateId:"base-guard",modelId:null,position:[0,0,150],behavior:"guard",triggerZ:132}],base:{id:"enemy-base",position:[0,0,170],maxHealth:150,effects:[]},victory:{allEnemiesDestroyed:!0,baseDestroyed:!0},reward:{parts:0}};function Yp(i){let e=i||{};return e.map={...$p.map,...e.map||{}},Array.isArray(e.map.segments)||(e.map.segments=Array.from({length:9},(t,n)=>({id:`segment-${n}`,center:[0,0,n*20+10],size:[e.map.width,20],terrainModelId:null}))),Array.isArray(e.map.cover)||(e.map.cover=qp.cover.map(t=>structuredClone(t))),Array.isArray(e.map.zones)||(e.map.zones=qp.zones.map(t=>structuredClone(t))),e}function Eu(){let i=Yp(structuredClone($p));return i.map.segments=Array.from({length:9},(e,t)=>({id:`segment-${t}`,center:[0,0,t*20+10],size:[i.map.width,20],terrainModelId:null})),i}function Kp(i,e=Eu()){if(!i?.assessment?.valid)throw new Error("\u5766\u514B\u672A\u901A\u8FC7\u8BC4\u4F30");return{schemaVersion:1,status:"ready",tick:0,tank:structuredClone(i),level:structuredClone(Yp(structuredClone(e))),defeatedEnemies:[],baseDestroyed:!1,playerDestroyed:!1}}function wu(i,e){if(!i||!e)throw new Error("\u5173\u5361\u72B6\u6001\u6216\u4E8B\u4EF6\u7F3A\u5931");let t=structuredClone(i);if(e.type==="start"){if(i.status!=="ready")throw new Error("\u5173\u5361\u4E0D\u80FD\u91CD\u590D\u542F\u52A8");return t.status="running",t}if(i.status!=="running")throw new Error("\u53EA\u6709\u8FD0\u884C\u4E2D\u7684\u5173\u5361\u53EF\u4EE5\u63A5\u6536\u7ED3\u679C\u4E8B\u4EF6");if(e.type==="enemy-destroyed"){if(!i.level.enemies.some(n=>n.id===e.id))throw new Error("\u672A\u77E5\u654C\u65B9\u5766\u514B");t.defeatedEnemies.includes(e.id)||t.defeatedEnemies.push(e.id)}else if(e.type==="base-destroyed")t.baseDestroyed=!0;else if(e.type==="player-destroyed")t.playerDestroyed=!0;else throw new Error("\u672A\u77E5\u5173\u5361\u4E8B\u4EF6");return t.playerDestroyed?t.status="defeat":t.baseDestroyed&&t.level.enemies.every(n=>t.defeatedEnemies.includes(n.id))&&(t.status="victory"),t}function Zp(i,e,{sameTeam:t=!1,friendlyFire:n=!1}={}){if(![i,e].every(s=>Number.isFinite(s)&&s>=0))throw new Error("\u4F24\u5BB3\u548C\u9632\u5FA1\u5FC5\u987B\u4E3A\u975E\u8D1F\u6709\u9650\u6570");return t&&!n?0:i*100/(100+e)}function Jp(i){let e=new Tc(i);return{models:e,profile:()=>i.readProfile(),unlockPart:t=>i.updateProfile(n=>{if(!Object.hasOwn(Ve,t))throw new Error("\u672A\u77E5\u90E8\u4EF6");if(n.unlockedParts.includes(t))return{unlocked:!0,charged:0};let s=Ve[t].cost;if(n.currency.parts<s)throw new Error("\u96F6\u4EF6\u4E0D\u8DB3");return n.currency.parts-=s,n.unlockedParts.push(t),{unlocked:!0,charged:s}}),saveDraft:t=>i.updateProfile(n=>{if(!t||t.schemaVersion!==1||typeof t.id!="string"||!t.id||!Number.isInteger(t.revision)||t.revision<1)throw new Error("\u8349\u7A3F\u6807\u8BC6\u6216\u7248\u672C\u65E0\u6548");let s=n.blueprints.find(a=>a.id===t.id);if(s&&t.revision<=s.revision)throw new Error("\u8349\u7A3F\u7248\u672C\u51B2\u7A81\uFF0C\u8BF7\u91CD\u65B0\u8BFB\u53D6");let r=JSON.parse(JSON.stringify(t));return n.blueprints=n.blueprints.filter(a=>a.id!==r.id),n.blueprints.push(r),r}),evaluate:async t=>qi(t,(await i.readProfile()).unlockedParts),manufacture:async({blueprintId:t,tankId:n,modelId:s=null})=>{if(typeof n!="string"||!n)throw new Error("\u5766\u514B ID \u65E0\u6548");if(s!==null){let r=await e.get(s);if(!r||r.category!=="player-tank")throw new Error("\u9700\u8981\u4ED3\u5E93\u4E2D\u7684\u73A9\u5BB6\u5766\u514B\u6A21\u578B")}return i.updateProfile(r=>{if(r.tanks.some(c=>c.id===n))throw new Error("\u5766\u514B ID \u5DF2\u5B58\u5728");let a=r.blueprints.find(c=>c.id===t),o=qi(a,r.unlockedParts);if(!o.valid)throw new Error(`\u5236\u9020\u5931\u8D25\uFF1A${o.errors.join("\uFF1B")}`);let l={schemaVersion:1,id:n,blueprint:structuredClone(a),modelId:s,assessment:o};return r.tanks.push(l),l})},prepareFirstLevel:async t=>{let n=await i.readProfile(),s=n.tanks.find(o=>o.id===t);if(!s)throw new Error("\u5766\u514B\u4E0D\u5B58\u5728");let r=qi(s.blueprint,n.unlockedParts);if(!r.valid)throw new Error("\u5766\u514B\u9700\u8981\u8FD4\u56DE\u8F66\u95F4\u4FEE\u6B63");let a=Eu();return a.enemyTemplates=Object.fromEntries(["basic-infantry","base-guard"].map(o=>{let l=uo(o==="base-guard"?"heavy":"infantry",o);return[o,{blueprint:l,assessment:qi(l),modelId:null}]})),Kp({...s,assessment:r,rulesVersion:Hr},a)},close:()=>i.close()}}function Tu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ot;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=jp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=jp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function jp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Zt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Au(i,e){if(e===qh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Or||e===so){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Or)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Qp={player:{hull:"#65714c",hullDark:"#4d5839",accent:"#b0b871",metal:"#3a4038",rubber:"#1b201e",track:"#474d44",glass:"#16242b"},enemy:{hull:"#8b7550",hullDark:"#6e5c3e",accent:"#b4543a",metal:"#443f34",rubber:"#221f1a",track:"#514a3c",glass:"#1d2a2e"},guard:{hull:"#715d48",hullDark:"#5a4937",accent:"#c24a32",metal:"#403a31",rubber:"#211e1a",track:"#4a4237",glass:"#1b272b"},wreck:{hull:"#3b3833",hullDark:"#2c2a26",accent:"#4a3a2c",metal:"#2b2925",rubber:"#171614",track:"#2e2c27",glass:"#121718"}};function cM(i="player",e=0){let t=Qp[i]||Qp.player,n=(r,a=0)=>new Ge(r).offsetHSL(e*.014,0,a+e*.012),s=(r,a={})=>new Ze({color:r,metalness:.32,roughness:.62,flatShading:!0,...a});return{hull:s(n(t.hull)),hullDark:s(n(t.hullDark,-.02)),accent:s(n(t.accent)),metal:s(n(t.metal),{metalness:.66,roughness:.44}),barrel:new Ze({color:n(t.metal).offsetHSL(0,0,-.03),metalness:.72,roughness:.36}),rubber:new Ze({color:t.rubber,metalness:.06,roughness:.92}),track:s(n(t.track),{metalness:.58,roughness:.5}),glass:new Ze({color:t.glass,metalness:.82,roughness:.16}),lamp:new Ze({color:"#ffe8bd",emissive:"#ffc46e",emissiveIntensity:.9,roughness:.3}),soot:new Ze({color:"#151515",metalness:.2,roughness:1}),rust:new Ze({color:"#6b3f2a",metalness:.25,roughness:.9})}}function cs(i,e,t,n=[0,0,0],s=[0,0,0]){let r=new Fe(e,t);return r.position.set(...n),r.rotation.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Te(i,e,t,n,s){return cs(i,new _t(...t),e,n,s)}function et(i,e,t,n,s,r,a,o){return cs(i,new Fn(t,n,s,r),e,a,o)}function Ru(i,e,t,n,{bevel:s=.03,position:r=[0,0,0],rotation:a=[0,0,0]}={}){let o=t.map(([h,d])=>new oe(-h,d)),l=0;for(let h=0;h<o.length;h++){let d=o[h],u=o[(h+1)%o.length];l+=d.x*u.y-u.x*d.y}l<0&&o.reverse();let c=new As(new is(o),{depth:n,bevelEnabled:s>0,bevelSize:s,bevelThickness:s,bevelSegments:1,steps:1,curveSegments:1});return c.rotateY(Math.PI/2),c.translate(-n/2,0,0),c.computeVertexNormals(),cs(i,c,e,r,a)}function em(i,e,t,n,s=16,r=5){let a=new Er(t.map(o=>new C(...o)));return cs(i,new ka(a,s,n,r,!1),e)}function nm(i,e,t,n=[0,0,0],s=.035,r=.03){return et(i,e,s,s,r,6,t,n)}function im(i,e){let t=e[0]-i[0],n=e[1]-i[1],s=Math.hypot(t,n),r=[n/s,-t/s],a=Math.atan2(r[1],r[0]),o=[(i[0]+e[0])/2,(i[1]+e[1])/2];return{length:s,angle:a,at:(l,c,h)=>[l,o[1]+r[1]*c-Math.sin(a)*h,o[0]+r[0]*c+Math.cos(a)*h]}}function hM(i,e,t,n,s,r,a){for(let o=0;o<t;o++){let l=r[2]+((o+.5)/t-.5)*s;Te(i,e,[n,.03,s/t*.62],[r[0],r[1],l],a)}}function sm(i){i.updateMatrixWorld(!0);let e=new Qe().copy(i.matrixWorld).invert(),t=[];i.traverse(s=>{s.isMesh&&!s.isInstancedMesh&&t.push(s)});let n=new Map;for(let s of t){let r=s.geometry.clone();r.index&&(r=r.toNonIndexed());for(let o of Object.keys(r.attributes))["position","normal","uv"].includes(o)||r.deleteAttribute(o);r.attributes.normal||r.computeVertexNormals(),r.clearGroups(),r.applyMatrix4(new Qe().multiplyMatrices(e,s.matrixWorld));let a=n.get(s.material)||[];a.push(r),n.set(s.material,a)}for(let s of t)s.removeFromParent(),s.geometry.dispose();return n}function rm(i,e,t){for(let[n,s]of e){let r=Tu(s,!1);if(s.forEach(o=>o.dispose()),!r)continue;let a=new Fe(r,n);a.castShadow=!0,a.receiveShadow=!0,a.userData.partId=t||null,i.add(a)}}function uM(i){rm(i,sm(i),i.userData.partId)}function dM(i){rm(i,sm(i),null);for(let e of[...i.children])e.isGroup&&e.children.length===0&&e.removeFromParent()}function fM(i,e){let[t,n,s]=Ve.hull.size,r=n/2,a=s/2,o=[a,-r+.3],l=[a-.42,r];Ru(i,e.hull,[[-a,-r],[a,-r],o,l,[-a+.54,r],[-a+.06,r-.3],[-a,-.05]],t,{bevel:.03});let c=im(o,l),h=(u,f,p)=>c.at(u,f,p),d=[c.angle,0,0];cs(i,new _t(t-.46,.055,c.length-.1),e.hullDark,h(0,.032,0),d);for(let u of[c.length/2-.22,-c.length/2+.22])for(let f of[-1.16,-.7,-.24,.24,.7,1.16])nm(i,e.metal,h(f,.072,u),d);et(i,e.hullDark,.29,.29,.055,14,h(-.64,.068,-.1),d);for(let u of[-.82,-.64,-.46])Te(i,e.glass,[.13,.055,.09],h(u,.1,-.46),d);Te(i,e.metal,[.2,.03,.03],h(-.64,.11,.1),d);for(let u of[.22,-.22])Te(i,e.track,[.26,.05,.4],h(.86,.075,u),d);for(let u of[-.86,-.42])Te(i,e.metal,[.16,.05,.07],h(u,.1,.16),d);for(let u of[-1.52,1.52]){Te(i,e.hullDark,[.22,.24,.26],[u,-r+.2,2.42]),et(i,e.lamp,.085,.085,.08,12,[u,-r+.22,2.56],[Math.PI/2,0,0]);for(let f of[-.12,.12])Te(i,e.metal,[.02,.24,.02],[u+f,-r+.24,2.56]);Te(i,e.metal,[.26,.02,.02],[u,-r+.37,2.56])}for(let u of[-1.24,1.24])et(i,e.metal,.07,.07,.08,8,[u,-r+.12,a-.02],[Math.PI/2,0,0]),Te(i,e.metal,[.22,.05,.14],[u,-r+.2,a+.02]);Te(i,e.hullDark,[t-.34,.34,.07],[0,-r+.16,a-.01]),Te(i,e.hull,[t-.5,.06,.16],[0,-r+.35,a+.03]);for(let u of[-.9,.9])Te(i,e.metal,[.18,.12,.16],[u,-r+.1,a+.04]);Te(i,e.hullDark,[2.56,.6,5.3],[0,-r-.22,.1]);for(let u of[-1,1]){let f=u*1.72;for(let[p,x]of[[2.05,1.5],[.35,1.7],[-1.5,1.6]])Te(i,e.hullDark,[.62,.055,x],[f,-r+.075,p]);Te(i,e.rubber,[.6,.38,.045],[f,-r-.11,-2.74]),Te(i,e.rubber,[.6,.24,.045],[f,-r-.04,2.74]),Te(i,e.hullDark,[.34,.32,1.3],[u*1.78,-r+.28,-1.55]),Te(i,e.metal,[.26,.035,.42],[u*1.78,-r+.45,-1.55]),Te(i,e.metal,[.03,.12,.1],[u*1.76,-r+.3,-1.05]),et(i,e.rust,.04,.04,1.15,6,[u*1.8,-r+.16,1.45],[Math.PI/2,0,0]),Te(i,e.metal,[.1,.2,.22],[u*1.8,-r+.22,1.05]),et(i,e.rust,.09,.09,1.1,8,[u*1.8,-r+.2,-.1],[Math.PI/2,0,0]);for(let p of[-2.5,2.6])Te(i,e.metal,[.1,.12,.16],[u*1.42,r+.02,p]);Te(i,e.hullDark,[.06,.03,5.4],[u*1.73,r+.005,0]),Te(i,e.metal,[.16,.04,.5],[u*1.78,-r+.24,2.1])}Te(i,e.hullDark,[t-.5,.03,.05],[0,r+.005,2.76]);for(let u of[-.5,-.05,.4])Te(i,e.track,[.05,.24,.44],[1.74,-.18,u]);Te(i,e.metal,[.03,.05,1.2],[1.76,-.02,-.05]);for(let u of[-1,1])for(let f of[-2.2,-1.1,1.2,2.3])em(i,e.metal,[[u*1.73,.06,f-.13],[u*1.79,.16,f],[u*1.73,.06,f+.13]],.022,8,4);em(i,e.rust,[[-1.62,r+.04,2.3],[-1.72,r+.04,1.5],[-1.62,r+.04,.6],[-1.7,r+.04,-.4],[-1.6,r+.04,-1.2]],.032,20,4);for(let u of[1.9,.2,-1])Te(i,e.metal,[.14,.05,.12],[-1.64,r+.02,u]);Te(i,e.hullDark,[t-.62,.42,.06],[0,-.04,-a-.02]);for(let u of[-1.16,1.16])Te(i,e.hullDark,[.16,.12,.05],[u,.16,-a-.05]),Te(i,e.lamp,[.09,.07,.03],[u,.16,-a-.08]);for(let u of[-.72,.72])Te(i,e.metal,[.16,.1,.14],[u,-.3,-a-.05]);for(let u=0;u<5;u++)Te(i,e.metal,[.86,.025,.05],[0,.3+(u-2)*.07,-a-.03]);for(let u of[-1.3,1.3])Te(i,e.metal,[.05,.05,.7],[u,r+.03,.9])}function pM(i,e,t,n){let s=i-t*2,r=Math.PI*t,a=s*2+r*2,o=[];for(let l=0;l<n;l++){let c=l/n*a,h,d,u;if(c<s)h=-s/2+c,d=-e/2,u=0;else if((c-=s)<r){let f=c/t;h=s/2+Math.sin(f)*t,d=-e/2+t-Math.cos(f)*t,u=f}else if((c-=r)<s)h=s/2-c,d=e/2,u=Math.PI;else{c-=s;let f=c/t;h=-s/2-Math.sin(f)*t,d=e/2-t+Math.cos(f)*t,u=Math.PI+f}o.push({z:h,y:d,angle:u})}return o}function mM(i,e){let[t,n,s]=Ve.tracks.size,r=n/2,a=t/2-.32,o=s-.5,l=n-.12,c=-.025,h=.3,d=pM(o,l,h,64);for(let u of[-1,1]){let f=u*a,p=d.map(g=>{let v=new _t(.52,.07,.17);return v.rotateX(g.angle),v.translate(f,g.y+c,g.z),v}),x=Tu(p,!1);p.forEach(g=>g.dispose()),x&&cs(i,x,e.track);for(let g of[-1.9,-.95,0,.95,1.9]){let v=-r+.32;for(let y of[-.13,.13])et(i,e.rubber,.25,.25,.1,12,[f+y,v,g],[0,0,Math.PI/2]);et(i,e.metal,.13,.13,.3,10,[f,v,g],[0,0,Math.PI/2]),et(i,e.hullDark,.055,.055,.34,8,[f,v,g],[0,0,Math.PI/2]);for(let y=0;y<5;y++){let M=y/5*Math.PI*2;nm(i,e.metal,[f,v+Math.cos(M)*.085,g+Math.sin(M)*.085],[0,0,Math.PI/2],.018,.32)}Te(i,e.hullDark,[.1,.12,.5],[f-u*.14,-r+.36,g]),et(i,e.metal,.05,.05,.34,8,[f-u*.05,-r+.48,g-.24],[.5,0,0])}let m=o/2-h;et(i,e.metal,.3,.3,.2,14,[f,-.02,m],[0,0,Math.PI/2]),et(i,e.hullDark,.14,.14,.24,10,[f,-.02,m],[0,0,Math.PI/2]);for(let g=0;g<10;g++){let v=g/10*Math.PI*2;Te(i,e.metal,[.24,.11,.075],[f,-.02+Math.cos(v)*.31,m+Math.sin(v)*.31],[v,0,0])}et(i,e.metal,.26,.26,.2,14,[f,-.02,-m],[0,0,Math.PI/2]),et(i,e.hullDark,.13,.13,.24,10,[f,-.02,-m],[0,0,Math.PI/2]),Te(i,e.metal,[.14,.09,.5],[f,-.12,-m-.24],[.16,0,0]);for(let g of[-1.5,0,1.5])et(i,e.rubber,.1,.1,.2,10,[f,c+l/2-.135,g],[0,0,Math.PI/2]);Te(i,e.hullDark,[.56,.05,s-.3],[f,r-.03,0]);for(let[g,v]of[[2,1.42],[.42,1.6],[-1.32,1.5]])Te(i,e.hull,[.05,.34,v],[f+u*.33,r-.2,g]),Te(i,e.metal,[.06,.05,v*.94],[f+u*.325,r-.05,g]);Te(i,e.hullDark,[.6,.1,.4],[f,-.1,s/2-.14]),Te(i,e.hullDark,[.6,.1,.3],[f,-.1,-s/2+.14]),et(i,e.metal,.07,.07,.09,8,[f,-.12,-s/2+.02],[0,0,Math.PI/2])}}function gM(i,e){let[t,n,s]=Ve.engine.size,r=n/2,a=s/2;Te(i,e.hullDark,[t,n*.55,s],[0,-r+n*.28,0]),Te(i,e.hull,[t-.1,.06,s-.12],[0,-r+n*.56,0]),hM(i,e.metal,6,t-.3,s*.5,[0,-r+n*.6,-s*.22]),Te(i,e.hull,[t-.24,.12,.34],[0,-r+n*.62,-a+.26]),Te(i,e.metal,[t-.34,.03,.1],[0,-r+n*.69,-a+.26]);for(let o of[-.46,.46])et(i,e.metal,.075,.085,.62,8,[o,-r+n*.8,-a+.24],[.22,0,0]),et(i,e.soot,.088,.072,.12,8,[o,-r+n*.8+.3,-a+.3],[.22,0,0]),Te(i,e.hullDark,[.22,.3,.06],[o,-r+n*.8,-a+.4],[.22,0,0]);et(i,e.metal,.24,.24,.07,14,[0,-r+n*.6,.24]);for(let o=0;o<8;o++){let l=o/8*Math.PI*2;Te(i,e.metal,[.05,.05,.2],[Math.cos(l)*.15,-r+n*.62,.24+Math.sin(l)*.15],[0,l,0])}for(let o of[-.5,.5])et(i,e.hull,.1,.1,.05,8,[o,-r+n*.58,a-.2]);Te(i,e.hull,[.36,.16,.5],[t/2-.05,-r+n*.45,-.2]);for(let o of[-t/2+.16,t/2-.16])Te(i,e.metal,[.09,.1,.13],[o,-r+n*.6,a-.16])}function _M(i,e){let[t,n,s]=Ve.turret.size,r=n/2,a=s/2;et(i,e.hullDark,1.08,1.14,.12,18,[0,-r+.04,0]);let o=(d,u,f)=>Ru(i,e.hull,d,u,{bevel:f});o([[-1.62,-.45],[1.62,-.45],[1.602,-.15],[-1.58,-.15]],t,.02),o([[-1.58,-.15],[1.602,-.15],[1.402,.15],[-1.313,.15]],t-.08,.02),o([[-1.313,.15],[1.402,.15],[1.16,.34],[.72,.45],[-.6,.45],[-1.06,.34]],t-.28,.02);let l=im([1.42,-.22],[1.16,.3]);cs(i,new _t(1.12,.62,.52),e.hullDark,[0,0,1.62],[.16,0,0]),cs(i,new _t(.92,.5,.1),e.hullDark,l.at(0,.06,.02),[l.angle,0,0]),et(i,e.rust,.26,.22,.36,14,[0,.02,1.88],[Math.PI/2,0,0]),et(i,e.metal,.2,.2,.08,12,[0,.02,2.02],[Math.PI/2,0,0]);let c=-.52,h=-.18;et(i,e.hull,.35,.38,.26,14,[c,r+.09,h]),et(i,e.hullDark,.31,.31,.06,14,[c,r+.24,h]);for(let d=0;d<4;d++){let u=d/4*Math.PI*2+Math.PI/4;Te(i,e.glass,[.16,.09,.06],[c+Math.cos(u)*.31,r+.15,h+Math.sin(u)*.31],[0,-u,0])}Te(i,e.metal,[.16,.12,.3],[c-.42,r+.22,h-.16]),et(i,e.metal,.032,.032,.62,6,[c-.42,r+.3,h+.06],[Math.PI/2-.12,0,0]),Te(i,e.metal,[.18,.14,.22],[c-.42,r+.24,h-.3]),et(i,e.hullDark,.27,.27,.06,12,[.52,r+.02,-.42]),Te(i,e.metal,[.04,.05,.26],[.52,r+.06,-.22]),Te(i,e.hullDark,[.3,.22,.44],[.44,r+.1,.34]),Te(i,e.glass,[.22,.11,.05],[.44,r+.13,.57]);for(let d of[-.68,-.36])Te(i,e.metal,[.13,.05,.08],[d,r+.28,-.47]);for(let d of[.36,.68])Te(i,e.metal,[.13,.05,.08],[d,r+.06,-.68]);for(let d of[-1,1]){Te(i,e.hullDark,[.06,.3,.5],[d*1.24,.13,.86]);for(let u of[0,1])for(let f of[0,1])et(i,e.metal,.05,.05,.26,8,[d*1.3,.06+u*.13,.72+f*.16],[Math.PI/2-.55,0,d*.16])}et(i,e.metal,.055,.065,.16,8,[-1.04,r+.02,-1.18]),et(i,e.metal,.012,.012,1.7,4,[-1.04,r+.88,-1.18],[.05,0,.04]),Te(i,e.hullDark,[t*.66,.05,.2],[0,.1,-1.68]);for(let d of[-.8,.8])Te(i,e.hullDark,[.05,.32,.05],[d,-.05,-1.76]);Te(i,e.hullDark,[t*.66,.04,.05],[0,-.2,-1.76]),Te(i,e.hull,[.66,.22,.16],[.14,.02,-1.72]),et(i,e.rust,.1,.1,1.2,8,[.42,-.02,-1.72],[0,0,Math.PI/2]);for(let d=0;d<3;d++)Te(i,e.track,[.06,.2,.44],[t/2+.04,-.05,-.6+d*.5]);Te(i,e.accent,[.02,.22,.34],[t/2-.005,.12,.4]);for(let d of[-.86,.86])Te(i,e.metal,[.1,.1,.16],[d,r+.02,-.86])}function tm(i,e){let t=(n,s=0)=>[0,s,n];Te(i,e.hullDark,[.5,.46,.7],[0,0,-1.72]),et(i,e.metal,.17,.14,1.1,14,t(-.9),[Math.PI/2,0,0]),et(i,e.barrel,.092,.105,1.9,14,t(.6),[Math.PI/2,0,0]),et(i,e.barrel,.078,.092,1.5,14,t(2.3),[Math.PI/2,0,0]),et(i,e.metal,.135,.135,.5,14,t(1.32),[Math.PI/2,0,0]);for(let n of[-.35,.35,1,2.35])et(i,e.metal,.104,.104,.06,14,t(n),[Math.PI/2,0,0]);Te(i,e.metal,[.26,.22,.34],[0,0,3.09]);for(let n of[-1,1])Te(i,e.metal,[.05,.16,.3],[n*.13,0,3.09]);for(let n of[2.97,3.21])Te(i,e.metal,[.3,.2,.05],[0,0,n]);et(i,e.metal,.042,.042,.9,8,[.34,.14,.2],[Math.PI/2,0,0]),Te(i,e.metal,[.1,.1,.12],[.34,.14,.66]),Te(i,e.hullDark,[.16,.2,.26],[.34,.12,-.3])}function xM(i,e){for(let t of[-.14,.14])for(let n of[-.14,.14])et(i,e.barrel,.045,.045,2.7,10,[t,n,.1],[Math.PI/2,0,0]),et(i,e.metal,.07,.07,.22,10,[t,n,1.35],[Math.PI/2,0,0]);Te(i,e.hullDark,[.58,.54,.95],[0,0,-.92]),et(i,e.metal,.3,.3,.5,12,[0,.28,-.9],[0,0,Math.PI/2]),Te(i,e.metal,[.3,.08,.6],[0,-.3,-.5]),et(i,e.metal,.05,.05,.7,8,[0,.02,-1.5],[Math.PI/2,0,0])}function yM(i,e){Te(i,e.hullDark,[1.2,.86,1.5],[0,0,-.2]);for(let t of[-.34,0,.34])for(let n of[-.22,.22])et(i,e.metal,.13,.13,.34,12,[t,n,.6],[Math.PI/2,0,0]),et(i,e.soot,.1,.1,.06,12,[t,n,.78],[Math.PI/2,0,0]),et(i,e.rust,.09,.05,.3,10,[t,n,.9],[Math.PI/2,0,0]);Te(i,e.metal,[1.24,.1,.3],[0,.42,-.7]),Te(i,e.hull,[.9,.3,.4],[0,-.52,-.4]),Te(i,e.metal,[.08,.7,.5],[.62,-.1,-.5])}function vM(i,e){et(i,e.metal,.5,.54,.08,14,[0,-.44,.1]),et(i,e.barrel,.11,.13,2.3,12,[0,.32,.58],[.4,0,0]),et(i,e.metal,.16,.16,.3,12,[0,-.08,.34],[.4,0,0]);for(let t of[-1,1])et(i,e.metal,.035,.035,1.1,6,[t*.34,.12,.2],[.15,0,t*.55]),Te(i,e.metal,[.12,.06,.12],[t*.2,-.4,.02]);Te(i,e.hullDark,[.26,.2,.3],[-.36,.2,.28]),Te(i,e.glass,[.06,.12,.2],[-.5,.26,.3]);for(let t of[-.3,-.1])et(i,e.rust,.07,.07,.3,8,[t,-.34,-.55],[Math.PI/2,0,0]),et(i,e.metal,.075,.075,.06,8,[t,-.34,-.4],[Math.PI/2,0,0])}function MM(i,e){let[t,n,s]=Ve.armor.size;Ru(i,e.hullDark,[[-s/2,-n/2],[s/2,-n/2],[s/2,n/2],[-s/2,n/2]],t,{bevel:.02});for(let r of[-t*.36,0,t*.36])for(let a of[-n*.3,n*.3])et(i,e.metal,.05,.05,.08,6,[r,a,s/2+.02],[Math.PI/2,0,0]);for(let r of[-n*.42,n*.42])Te(i,e.hull,[t*.92,.06,s+.03],[0,r,0]);Te(i,e.accent,[t*.4,.02,.12],[0,0,s/2+.05])}var SM={hull:fM,mobility:mM,engine:gM,turret:_M,armor:MM};function Vr(i,{faction:e="player",variant:t=0,merged:n=!1,whole:s=!1}={}){let r=new wt;r.name="tank";let a=cM(e,t),o=new Map,l=new Map;for(let c of i.parts){let h=Ve[c.partId];if(!h)continue;let d=new wt;d.name=c.id,d.userData.partId=c.id,d.userData.partRole=h.role,d.userData.partName=h.name,d.userData.partSize=h.size,d.position.set(...c.position),d.rotation.y=c.yaw,(SM[h.role]||(h.role==="weapon"?{cannon:tm,rapid:xM,bomb:yM,mortar:vM}[c.partId]||tm:(f,p)=>Te(f,p.hullDark,h.size,[0,0,0])))(d,a,{part:h,item:c,blueprint:i}),n&&!s&&uM(d),r.add(d),o.set(c.id,d),l.set(h.role,d)}return s&&dM(r),r.userData.parts=s?new Map:o,r.userData.byRole=s?new Map:l,r.userData.materials=a,r.userData.faction=e,r}var Wr=13,Sn=-10,zn=190;function zs(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Rc(i,e,t=[1,1]){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=i,n.height=i;let s=n.getContext("2d");if(!s)return null;e(s,i);let r=new Mr(n);return r.wrapS=r.wrapT=hi,r.repeat.set(...t),r.colorSpace=Gt,r.anisotropy=4,r}function am(i,e,t,n,s){let r=zs(s);i.fillStyle=t,i.fillRect(0,0,e,e);for(let[a,o,l,c]of n){i.fillStyle=a;for(let h=0;h<o;h++){let d=r()*e,u=r()*e,f=l+r()*(c-l);i.beginPath(),i.arc(d,u,f,0,Math.PI*2),i.fill()}}}function bM(){return Rc(256,(i,e)=>{am(i,e,"#5f5a41",[["#6b6549",160,3,12],["#514c38",140,2,10],["#736a4d",90,1,5]],11);let t=zs(23);i.strokeStyle="#4c4834",i.lineWidth=1;for(let n=0;n<26;n++){i.beginPath();let s=t()*e,r=t()*e;i.moveTo(s,r);for(let a=0;a<5;a++)s+=(t()-.5)*26,r+=(t()-.5)*26,i.lineTo(s,r);i.stroke()}},[48,55])}function EM(){return Rc(256,(i,e)=>{am(i,e,"#343735",[["#3d413c",200,1,5],["#292c29",180,1,6],["#484c45",60,1,3]],41);let t=zs(53);i.strokeStyle="#242723",i.lineWidth=1.4;for(let n=0;n<10;n++){i.beginPath();let s=t()*e,r=t()*e;i.moveTo(s,r);for(let a=0;a<4;a++)s+=(t()-.5)*40,r+=t()*24,i.lineTo(s,r);i.stroke()}},[2,26])}function wM(){return Rc(256,(i,e)=>{let t=i.createLinearGradient(0,0,0,e);t.addColorStop(0,"#4b6f86"),t.addColorStop(.42,"#8aa6ad"),t.addColorStop(.68,"#c4c9b6"),t.addColorStop(1,"#e0c9a2"),i.fillStyle=t,i.fillRect(0,0,e,e)})}function Iu(){return Rc(128,(i,e)=>{let t=i.createRadialGradient(e/2,e/2,2,e/2,e/2,e/2);t.addColorStop(0,"rgba(230,230,225,.9)"),t.addColorStop(.45,"rgba(150,150,145,.35)"),t.addColorStop(1,"rgba(90,90,90,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)})}function Ac(i,e="#d9e6c8",t=""){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=512,n.height=128;let s=n.getContext("2d");s.fillStyle="rgba(10,18,20,.72)",s.strokeStyle=e,s.lineWidth=4,s.beginPath(),s.roundRect(6,24,500,80,16),s.fill(),s.stroke(),s.fillStyle=e,s.font="bold 40px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,256,t?54:64),t&&(s.font="24px system-ui, sans-serif",s.fillStyle="#a9bdb4",s.fillText(t,256,86));let r=new Mr(n);r.colorSpace=Gt;let a=new ya(new xr({map:r,transparent:!0,depthWrite:!1,depthTest:!0}));return a.scale.set(6,1.5,1),a}function ks(i,e,t,n){let s=new Ui(e,t,n.length),r=new Qe,a=new un,o=new C,l=new C;return n.forEach((c,h)=>{o.set(...c.position),a.setFromEuler(new Wn(...c.rotation||[0,0,0])),l.set(...c.scale||[1,1,1]),s.setMatrixAt(h,r.compose(o,a,l))}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1,i.add(s),s}function Cu(i,e,t,n,s=.45){let r=new fi(t*.82,t,40),a=new Bt({color:n,transparent:!0,opacity:s,depthWrite:!1,side:tn}),o=new Fe(r,a);return o.rotation.x=-Math.PI/2,o.position.set(e[0],.035,e[2]),i.add(o),o}function TM(i){let e=wM(),t=new ss(420,24,16),n=e?new Bt({map:e,side:en,fog:!1,depthWrite:!1}):new Bt({color:"#9fb4b4",side:en,fog:!1,depthWrite:!1}),s=new Fe(t,n);s.name="sky",i.add(s);let r=new Ze({color:"#6a746c",roughness:1,flatShading:!0}),a=zs(7),o=[];for(let l=0;l<22;l++){let c=l/22*Math.PI*2,h=250+a()*40,d=12+a()*22;o.push({position:[Math.cos(c)*h,d/2-4,85+Math.sin(c)*h],rotation:[0,a()*Math.PI,0],scale:[18+a()*16,d,18+a()*16]})}ks(i,new Sr(1,1,5),r,o)}function AM(i){let e=bM(),t=new Ze({map:e||null,color:e?"#d8d2bc":"#5f5a41",roughness:.96,metalness:0}),n=new Fe(new Tn(560,640),t);n.rotation.x=-Math.PI/2,n.position.set(0,-.02,85),n.receiveShadow=!0,n.name="ground",i.add(n);let s=EM(),r=new Ze({map:s||null,color:s?"#ffffff":"#3c3f3c",roughness:.92,metalness:.05}),a=new Fe(new Tn(Wr,zn-Sn),r);a.rotation.x=-Math.PI/2,a.position.set(0,.01,(zn+Sn)/2),a.receiveShadow=!0,a.name="road",i.add(a);let o=new Ze({color:"#6a6148",roughness:1});for(let c of[-1,1]){let h=new Fe(new Tn(2.4,zn-Sn),o);h.rotation.x=-Math.PI/2,h.position.set(c*(Wr/2+1.2),.005,(zn+Sn)/2),h.receiveShadow=!0,i.add(h);let d=new Fe(new _t(.16,.02,zn-Sn-6),new Ze({color:"#cfc9a8",roughness:.8}));d.position.set(c*(Wr/2-.5),.03,(zn+Sn)/2),d.receiveShadow=!0,i.add(d);let u=new Fe(new Tn(.7,zn-Sn-8),new Bt({color:"#2c2f2c",transparent:!0,opacity:.18,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.set(c*1.7,.02,(zn+Sn)/2),i.add(u)}let l=new Ze({color:"#d8d2b2",roughness:.8});for(let c=Sn+6;c<zn-4;c+=7){let h=new Fe(new _t(.2,.02,3),l);h.position.set(0,.03,c),h.receiveShadow=!0,i.add(h)}}function RM(i){let e=zs(97),t=[],n=[],s=[];for(let o=0;o<70;o++){let c=(e()<.5?-1:1)*(8+e()*22),h=Sn+e()*(zn-Sn),d=.35+e()*1.5;t.push({position:[c,d*.35,h],rotation:[e()*3,e()*3,e()*3],scale:[d,d*(.5+e()*.6),d*(.7+e()*.6)]})}for(let o=0;o<44;o++){let l=e()<.5?-1:1;n.push({position:[l*(7.6+e()*12),.3,Sn+e()*(zn-Sn)],rotation:[0,e()*3,0],scale:[.5+e(),.6+e()*.8,.5+e()]})}for(let o=0;o<26;o++){let l=e()<.5?-1:1;s.push({position:[l*(7.5+e()*2.5),.35,120+e()*55],rotation:[0,e()*1.6,0],scale:[.8+e()*.5,.7+e()*.5,.8+e()*.5]})}ks(i,new Aa(.5,0),new Ze({color:"#6b6656",roughness:.95,flatShading:!0}),t),ks(i,new Ba(.45,0),new Ze({color:"#4f5b3c",roughness:1,flatShading:!0}),n),ks(i,new _t(.9,.7,.9),new Ze({color:"#7c6a45",roughness:.9}),s);let r=[],a=[];for(let o=Sn+10;o<zn;o+=20)for(let l of[-1,1])r.push({position:[l*(Wr/2+.9),.5,o]}),a.push({position:[l*(Wr/2+.9),1.04,o]});ks(i,new _t(.12,1,.12),new Ze({color:"#4a4a42",roughness:.8}),r),ks(i,new _t(.16,.16,.16),new Ze({color:"#e8d58a",emissive:"#8a6a1e",emissiveIntensity:.5,roughness:.5}),a);for(let[o,l]of[[-10.5,92],[10.5,146]]){let c=new wt,h=new Ze({color:"#5b5a4d",roughness:.85,metalness:.2});for(let x of[-1.1,1.1])for(let m of[-1.1,1.1]){let g=new Fe(new _t(.18,6.4,.18),h);g.position.set(x,3.2,m),g.castShadow=!0,c.add(g)}let d=new Fe(new _t(2.8,.2,2.8),h);d.position.y=6.3,d.castShadow=!0,c.add(d);let u=new Fe(new _t(2.4,1.6,2.4),new Ze({color:"#4c5147",roughness:.9}));u.position.y=7.2,u.castShadow=!0,c.add(u);let f=new Fe(new Sr(2.1,.8,4),new Ze({color:"#3f463d",roughness:.9,flatShading:!0}));f.position.y=8.4,f.rotation.y=Math.PI/4,f.castShadow=!0,c.add(f);let p=new Fe(new _t(1.6,.3,.06),new Ze({color:"#161d1c"}));p.position.set(0,7.35,1.22),c.add(p),c.position.set(o,0,l),i.add(c)}}var CM={wreck:"#5a5044",sandbag:"#8b7f5c",berm:"#6d6247",ammo:"#6b5a3a",crate:"#7c6a45",rock:"#6b6656"};function IM(i){let[e,t,n]=i.size,[s,r,a]=i.position,o=[],l=(c,h,d=[0,0,0])=>o.push({position:c,scale:h,rotation:d});if(i.kind==="sandbag"){let c=Math.max(2,Math.round(e/.66)),h=Math.max(1,Math.round(t/.3)),d=Math.max(1,Math.round(n/.4)),u=e/c,f=t/h,p=n/d;for(let x=0;x<h;x++)for(let m=0;m<c;m++)for(let g=0;g<d;g++)l([s-e/2+u*(m+.5)+(x%2?u*.16:0),r-t/2+f*(x+.5),a-n/2+p*(g+.5)],[u*.92,f*.86,p*.9],[0,(x+m)%2?.16:-.12,0])}else if(i.kind==="berm"){l([s,r-t*.12,a],[e,t*.76,n]),l([s,r+t*.34,a],[e*.98,t*.3,n*.66],[.05,0,0]);let c=Math.max(3,Math.round(e/1.6));for(let h=0;h<c;h++)l([s-e/2+(h+.5)*(e/c),r+t*.46,a+(h%2?.45:-.45)],[e/c*.9,t*.16,n*.3],[0,h*.6,0])}else if(i.kind==="wreck")l([s,r,a],[e*.72,t,n*.8],[.04,.12,.05]),l([s+e*.22,r*.55,a+n*.18],[e*.5,t*.9,n*.55],[0,-.5,.12]),l([s-e*.24,r*.5,a-n*.2],[e*.4,t*.85,n*.5],[0,.4,-.08]);else if(i.kind==="ammo"){for(let c=0;c<3;c++)l([s-.5+c*.5,r-t*.28,a],[.62,.34,.62],[0,c*.3,0]);l([s,r+t*.18,a],[e*.8,t*.3,n*.8],[0,.2,0])}else l([s,r,a],[e,t,n],[0,.08,0]);return o}function PM(i,e){let t=new Map;for(let n of e.map?.cover||[]){if(!Array.isArray(n.size)||!Array.isArray(n.position))continue;let s=t.get(n.kind)||[];s.push(...IM(n)),t.set(n.kind,s)}for(let[n,s]of t){if(!s.length)continue;let r=new Ze({color:CM[n]||"#6b6656",roughness:.96,metalness:.05,flatShading:!0});ks(i,new _t(1,1,1),r,s).name=`cover-${n}`}}function LM(i,e){let t={mud:"#463b28",rubble:"#7b776b"};for(let n of e.map?.zones||[]){let[s,r,a]=n.position,[o,l]=n.size,c=new Fe(new Tn(o,l),new Ze({color:t[n.kind]||"#5f5a41",roughness:1,transparent:!0,opacity:.72}));c.rotation.x=-Math.PI/2,c.position.set(s,r+.025,a),c.receiveShadow=!0,c.name=`zone-${n.id}`,i.add(c)}}function DM(i,e){let t=e.level.base,n=e.baseDestroyed,[s,,r]=t.position,a=new wt;a.name="enemy-base";let o=new Fe(new Tn(34,26),new Ze({color:"#5c5b50",roughness:.95}));o.rotation.x=-Math.PI/2,o.position.set(0,.02,2),o.receiveShadow=!0,a.add(o);let l=new Ze({color:n?"#4a453c":"#6c6654",roughness:.92,flatShading:!0}),c=new Ze({color:n?"#5a3b2c":"#8a7a4e",roughness:.8,metalness:.25}),h=(S,_,b=[0,0,0])=>{let P=new Fe(new _t(...S),l);return P.position.set(..._),P.rotation.set(...b),P.castShadow=!0,P.receiveShadow=!0,a.add(P),P};h([10,2.6,.8],[-11,1.3,-6]),h([10,2.6,.8],[11,1.3,-6]),h([.8,2.6,20],[-16,1.3,4]),h([.8,2.6,20],[16,1.3,4]),h([33,2.6,.8],[0,1.3,14]);for(let S of[-1,1]){let _=h([1.4,4.2,1.4],[S*6.4,2.1,-6]);_.material=c}h([14.2,.7,1.2],[0,4.4,-6]).material=c;for(let S=0;S<13;S++){let _=new Fe(new _t(.6,.34,.06),new Ze({color:S%2?"#d8c07a":"#2b2b26",roughness:.7}));_.position.set(-6+S*1,3.5,-5.36),a.add(_)}let d=new wt,u=new Fe(new _t(10,3.4,7),l);u.position.y=1.7,u.castShadow=!0,u.receiveShadow=!0,d.add(u);let f=new is([new oe(-5.6,0),new oe(5.6,0),new oe(4.4,1.1),new oe(-4.4,1.1)]),p=new As(f,{depth:7.6,bevelEnabled:!1});p.translate(0,0,-3.8);let x=new Fe(p,l);x.position.y=4.2,x.castShadow=!0,d.add(x);let m=new Fe(new _t(6,.5,.08),new Ze({color:"#111716"}));m.position.set(0,2.2,3.53),d.add(m),d.position.set(0,0,6),a.add(d);let g=new Fe(new Fn(.08,.1,8,8),new Ze({color:"#8c8c80",metalness:.6,roughness:.4}));g.position.set(-9,4,9),g.castShadow=!0,a.add(g);let v=new Fe(new Tn(3,1.7,14,6),new Ze({color:n?"#4a3a32":"#a5432f",side:tn,roughness:.9}));v.position.set(-7.4,7.1,9),a.add(v);let y=new wt,M=new Fe(new Fn(1.1,1.1,.12,16),new Ze({color:"#9aa39a",metalness:.5,roughness:.5,flatShading:!0}));M.rotation.x=Math.PI/2.4,M.castShadow=!0,y.add(M);let T=new Fe(new Fn(.12,.16,3.4,8),new Ze({color:"#5a5f55",metalness:.5,roughness:.5}));T.position.y=-1.6,y.add(T),y.position.set(9,5.4,6),a.add(y);for(let S=0;S<5;S++){let _=new Fe(new Fn(.4,.4,1.1,10),new Ze({color:S%2?"#5f6a4a":"#7a5c3a",roughness:.85,metalness:.2}));_.position.set(-12+S%3*.9,.55,10+Math.floor(S/3)*.9),_.castShadow=!0,a.add(_)}for(let S of[-1,1]){let _=new Fe(new _t(.9,5,.9),l);_.position.set(S*14,2.5,-2),_.castShadow=!0,a.add(_);let b=new Fe(new _t(1.4,.8,.8),new Ze({color:"#d9d2a8",emissive:"#ffd27a",emissiveIntensity:n?0:.9,roughness:.5}));b.position.set(S*14,5.2,-2),a.add(b)}return a.position.set(s,0,r-2),i.add(a),{compound:a,flag:v,radar:y,destroyed:n}}function Cc(i,e,{color:t="#8f8a80",count:n=26,size:s=3.2,speed:r=1.6,map:a=null}={}){let o=new Ot,l=new Float32Array(n*3),c=new Float32Array(n),h=zs(Math.round(e[0]*13+e[2]*7)+3);for(let f=0;f<n;f++)l[f*3]=(h()-.5)*1.4,l[f*3+1]=h()*6,l[f*3+2]=(h()-.5)*1.4,c[f]=h();o.setAttribute("position",new Zt(l,3));let d=new Oi({map:a,color:t,size:s,transparent:!0,opacity:.55,depthWrite:!1,sizeAttenuation:!0}),u=new ns(o,d);return u.position.set(...e),i.add(u),f=>{let p=o.attributes.position.array;for(let x=0;x<n;x++)p[x*3+1]+=f*r*(.6+c[x]*.8),p[x*3+1]>7&&(p[x*3+1]=0,p[x*3]=(c[x]-.5)*1.4);o.attributes.position.needsUpdate=!0}}function NM(i){let t=new Ot,n=new Float32Array(540),s=zs(311);for(let o=0;o<180;o++)n[o*3]=(s()-.5)*80,n[o*3+1]=.4+s()*9,n[o*3+2]=Sn+s()*(zn-Sn);t.setAttribute("position",new Zt(n,3));let r=new Oi({color:"#e8dcc0",size:.09,transparent:!0,opacity:.5,depthWrite:!1}),a=new ns(t,r);return i.add(a),o=>{let l=t.attributes.position.array;for(let c=0;c<180;c++)l[c*3]+=o*.35,l[c*3]>40&&(l[c*3]=-40),l[c*3+1]+=Math.sin(c+performance.now()*2e-4)*o*.05;t.attributes.position.needsUpdate=!0}}function UM(i){let e=i.userData.byRole.get("turret")||null,t=i.userData.byRole.get("weapon")||null,n=new wt;return n.name="gun-pivot",t&&(e?(n.position.set(0,.05,1.45),e.add(n)):(n.position.copy(t.position),i.add(n)),i.updateMatrixWorld(!0),n.attach(t),i.updateMatrixWorld(!0)),{turret:e,weapon:t,pivot:n,hasTurret:!!e}}function OM(i,e,t,n,s,{combat:r=!1,playerPose:a=null}={}){let o=e.level,l=o.enemyTemplates||{},c={player:null,enemies:new Map},h=a?{x:a.x,z:a.z}:{x:o.playerSpawn[0],z:o.playerSpawn[2]},d=a?.yaw||0,u=Vr(e.tank.blueprint,{faction:"player",merged:!0,whole:!r});u.position.set(h.x,0,h.z),u.rotation.y=d,u.name="player-tank",i.add(u),r&&(c.player={object:u,...UM(u)}),Cu(i,[h.x,0,h.z],2.4,"#b9d38f",.5),t.set("player",{position:new C(h.x,1.6,h.z),radius:4.2,label:"\u73A9\u5BB6\u5766\u514B",view:{distance:13.5,height:3.4}}),o.enemies.forEach((p,x)=>{let m=e.defeatedEnemies.includes(p.id),v=l[p.templateId]?.blueprint||e.tank.blueprint,y=p.behavior==="guard",M=Math.PI+(p.behavior==="flank-left"?-.55:p.behavior==="flank-right"?.55:0);if(m){let T=Vr(v,{faction:"wreck",merged:!0}),S=T.userData.byRole.get("turret"),_=T.userData.byRole.get("weapon");S&&(S.position.x+=.8,S.position.y-=.1,S.rotation.z=.22,S.rotation.y+=.6),_&&(_.visible=!1),T.rotation.z=.05,T.position.set(p.position[0],0,p.position[2]),T.rotation.y=M,i.add(T),Cu(i,p.position,3,"#6b3a2a",.35),n.push(Cc(i,[p.position[0],.4,p.position[2]],{count:20,size:2.8,map:s}));let b=Ac("\u5DF2\u6467\u6BC1 \xB7 "+(x===3?"\u7EC8\u70B9\u5B88\u536B":`\u9014\u4E2D\u654C\u5766 ${x+1}`),"#a9846a");b&&(b.scale.set(4.2,1.05,1),b.position.set(p.position[0],4.4,p.position[2]),i.add(b))}else{let T=Vr(v,{faction:y?"guard":"enemy",variant:x%3,merged:!0,whole:!0});T.position.set(p.position[0],0,p.position[2]),T.rotation.y=M,T.name=`enemy-${p.id}`,i.add(T),r&&c.enemies.set(p.id,T),Cu(i,p.position,3,y?"#c24a32":"#b4543a",.5);let S=["\u6B63\u9762\u5BF9\u6297","\u5DE6\u4FA7\u5077\u88AD","\u53F3\u4FA7\u5077\u88AD","\u57FA\u5730\u5B88\u536B"],_=Ac(x===3?"\u7EC8\u70B9\u5B88\u536B":`\u9014\u4E2D\u654C\u5766 ${x+1}`,y?"#e0896f":"#e2a184",S[x]);if(_&&(_.scale.set(4.4,1.1,1),_.position.set(p.position[0],5.2,p.position[2]),i.add(_)),!r){let b=T.rotation.y;n.push(()=>{T.rotation.y=b+Math.sin(performance.now()*35e-5+x)*.04})}t.set(p.id,{position:new C(p.position[0],1.6,p.position[2]),radius:4.5,label:S[x],view:{distance:11,height:4.2}})}}),t.set("base",{position:new C(o.base.position[0],2.4,o.base.position[2]),radius:14,label:"\u654C\u65B9\u57FA\u5730",view:{distance:46,height:22}}),t.set("overview",{position:new C(0,6,82),radius:105,label:"\u7B2C\u4E00\u5173\u5168\u666F",view:{distance:215,height:145,azimuth:-1}});let f=Ac("\u654C\u65B9\u57FA\u5730","#e8d08a","\u9700\u6467\u6BC1");return f&&(f.scale.set(5,1.25,1),f.position.set(o.base.position[0]+9,10,o.base.position[2]),i.add(f)),c}function FM(i,e){let t=new Bt({color:"#d8b06a",transparent:!0,opacity:.3,depthWrite:!1});for(let n of e.enemies){let s=new Fe(new _t(Wr-1,.02,.3),t);s.position.set(0,.04,n.triggerZ),i.add(s);let r=Ac(`\u89E6\u53D1 ${n.triggerZ} m`,"#d8c58c");r&&(r.scale.set(3.6,.9,1),r.position.set(7.2,1.4,n.triggerZ),i.add(r))}}function om(i,{showLabels:e=!0,combat:t=!1,playerPose:n=null}={}){let s=new wt;s.name="level-01";let r=[],a=new Map,o=i.baseDestroyed||i.defeatedEnemies.length?Iu():null;TM(s),AM(s),RM(s),PM(s,i.level),LM(s,i.level);let l=DM(s,i);if(l.destroyed)r.push(Cc(s,[0,2,174],{color:"#6b625a",count:40,size:5,speed:2.2,map:o}));else{let h=l.radar.rotation.y;if(r.push(()=>{l.radar.rotation.y=h+performance.now()*6e-4}),l.flag){let d=l.flag.geometry.attributes.position;r.push(()=>{let u=performance.now()*.0022;for(let f=0;f<d.count;f++){let p=d.getX(f);d.setZ(f,Math.sin(p*1.4+u)*.22*(p/3+.5))}d.needsUpdate=!0,l.flag.geometry.computeVertexNormals()})}}let c=OM(s,i,a,r,o,{combat:t,playerPose:n});return c.base=l.compound,FM(s,i.level),r.push(NM(s)),e||s.traverse(h=>{h.isSprite&&(h.visible=!1)}),s.userData.focus=a,s.userData.units=c,{group:s,focus:a,units:c,update(h){for(let d of r)d(h)}}}function BM(i){let e=new Fe(new Fn(5.6,5.9,.12,48),new Ze({color:"#26343a",roughness:.72,metalness:.35}));e.position.y=-.06,e.receiveShadow=!0,i.add(e);let t=new Fe(new fi(5,5.18,64),new Bt({color:"#b7ce92",transparent:!0,opacity:.55,side:tn}));t.rotation.x=-Math.PI/2,t.position.y=.006,i.add(t);for(let n=0;n<12;n++){let s=n/12*Math.PI*2,r=new Fe(new _t(.06,.01,.5),new Bt({color:n%3===0?"#d7e8ac":"#7f9c86"}));r.position.set(Math.cos(s)*5.5,.007,Math.sin(s)*5.5),r.rotation.y=-s,i.add(r)}}function lm(i,e){let t=new wt;t.name="workshop",BM(t);let n=Vr(i,{faction:"player",merged:!0});return n.userData.selectedId=e||null,t.add(n),t.userData.tank=n,t}function cm(i,{combat:e=!1,playerPose:t=null}={}){return om(i,{combat:e,playerPose:t})}function hm(i){let e=new Map,t=new Map,n=i.clone();return um(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function um(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)um(i.children[n],e.children[n],t)}var Ic=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Pc(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pc(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ju(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Gi.extractUrlBase(e);a=Gi.resolveURL(c,this.path)}else a=Gi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ar(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===gm){try{a[gt.KHR_BINARY_GLTF]=new ju(e)}catch(d){s&&s(d);return}r=JSON.parse(a[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new rd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case gt.KHR_MATERIALS_UNLIT:a[d]=new Uu;break;case gt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Qu(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:a[d]=new ed;break;case gt.KHR_MESH_QUANTIZATION:a[d]=new td;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function kM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Xt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Nu=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ge(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],wn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ps(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cs(h),c.distance=d;break;case"spot":c=new qa(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Uu=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){let s=[];e.color=new Ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],wn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Fu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},Bu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},ku=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},zu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Hu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],wn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Gt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Gu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Vu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(r[0],r[1],r[2],wn),Promise.all(s)}},Wu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Xu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(r[0],r[1],r[2],wn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Gt)),Promise.all(s)}},qu=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},$u=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Yu=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ku=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Zu=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Pc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},Ju=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==$n.TRIANGLES&&c.mode!==$n.TRIANGLE_STRIP&&c.mode!==$n.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let p of d){let x=new Qe,m=new C,g=new un,v=new C(1,1,1),y=new Ui(p.geometry,p.material,u);for(let T=0;T<u;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,T),l.SCALE&&v.fromBufferAttribute(l.SCALE,T),y.setMatrixAt(T,x.compose(m,g,v));let M=null;for(let T in l)if(T==="_COLOR_0"){let S=l[T];y.instanceColor=new Ni(S.array,S.itemSize,S.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(M===null){let _=y.geometry;M=new Ot,M.name=_.name;for(let b in _.attributes)M.setAttribute(b,_.attributes[b]);for(let b in _.morphAttributes)M.morphAttributes[b]=_.morphAttributes[b];_.index!==null&&M.setIndex(_.index),M.morphTargetsRelative=_.morphTargetsRelative;for(let b of _.groups)M.addGroup(b.start,b.count,b.materialIndex);_.boundingBox!==null&&(M.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(M.boundingSphere=_.boundingSphere.clone()),M.drawRange.start=_.drawRange.start,M.drawRange.count=_.drawRange.count,M.userData=Object.assign({},_.userData),y.geometry=M}let S=l[T];M.setAttribute(T,new Ni(S.array,S.itemSize,S.normalized))}Ut.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},gm="glTF",mo=12,dm={JSON:1313821514,BIN:5130562},ju=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,mo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-mo,r=new DataView(e,mo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===dm.JSON){let c=new Uint8Array(e,mo+a,o);this.content=n.decode(c)}else if(l===dm.BIN){let c=mo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let d=id[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=id[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Xr[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}d(f)},o,c,wn,u)})})}},ed=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},td=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},Lc=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,p=e*c,x=p-c,m=-2*f+3*u,g=f-u,v=1-m,y=g-u+d;for(let M=0;M!==o;M++){let T=a[x+M+o],S=a[x+M+l]*h,_=a[p+M+o],b=a[p+M]*h;r[M]=v*T+y*S+m*_+g*b}return r}},zM=new un,nd=class extends Lc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return zM.fromArray(r).normalize().toArray(r),r}},$n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fm={9728:Jt,9729:sn,9984:Il,9985:Nr,9986:Os,9987:Xn},pm={33071:Gn,33648:ur,10497:hi},Pu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},HM={CUBICSPLINE:void 0,LINEAR:Ms,STEP:vs},Lu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ze({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),i.DefaultMaterial}function Hs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function WM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XM(i){let e,t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Du(t.attributes):e=i.indices+":"+Du(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Du(i.targets[n]);return e}function Du(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function sd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var $M=new Qe,rd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new Va(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new $a(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ar(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Hs(r,o,s),bi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Gi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Pu[s.type],o=Xr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Zt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Pu[s.type],c=Xr[s.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(f&&f!==d){let g=Math.floor(u/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,y=t.cache.get(v);y||(x=new c(o,g*f,s.count*f/h),y=new Es(x,f/h),t.cache.add(v,y)),m=new es(y,l,u%f/h,p)}else o===null?x=new c(s.count*l):x=new c(o,u,s.count*l),m=new Zt(x,l,p);if(s.sparse!==void 0){let g=Pu.SCALAR,v=Xr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,T=new v(a[1],y,s.sparse.count*g),S=new c(a[2],M,s.sparse.count*l);o!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,b=T.length;_<b;_++){let P=T[_];if(m.setX(P,S[_*l]),l>=2&&m.setY(P,S[_*l+1]),l>=3&&m.setZ(P,S[_*l+2]),l>=4&&m.setW(P,S[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=fm[u.magFilter]||sn,h.minFilter=fm[u.minFilter]||Xn,h.wrapS=pm[u.wrapS]||hi,h.wrapT=pm[u.wrapT]||hi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Jt&&h.minFilter!==sn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(u){return new Promise(function(f,p){t.parse(u,f,p)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let g=new rn(m);g.needsUpdate=!0,f(g)}),t.load(Gi.resolveURL(u,r.path),x,void 0,p)})})}let d=h.then(function(u){return c===!0&&o.revokeObjectURL(l),bi(u,a),u.userData.mimeType=a.mimeType||qM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Oi,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ei,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ze}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){let d=s[gt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Ge(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],wn),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Gt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=tn);let h=r.alphaMode||Lu.OPAQUE;if(h===Lu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Lu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Bt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Bt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Bt){let d=r.emissiveFactor;o.emissive=new Ge().setRGB(d[0],d[1],d[2],wn)}return r.emissiveTexture!==void 0&&a!==Bt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),bi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Hs(s,d,r),d})}createUniqueName(e){let t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return mm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=XM(c),d=s[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=mm(new Ot,c,t),c.mode===$n.TRIANGLE_STRIP?u=u.then(f=>Au(f,so)):c.mode===$n.TRIANGLE_FAN&&(u=u.then(f=>Au(f,Or))),s[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?GM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],m=a[f],g,v=c[f];if(m.mode===$n.TRIANGLES||m.mode===$n.TRIANGLE_STRIP||m.mode===$n.TRIANGLE_FAN||m.mode===void 0){let y=r.isSkinnedMesh===!0,M=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");y&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=y&&M?new va(x,v):new Fe(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===$n.LINES)g=new di(x,v);else if(m.mode===$n.LINE_STRIP)g=new ws(x,v);else if(m.mode===$n.LINE_LOOP)g=new Sa(x,v);else if(m.mode===$n.POINTS)g=new ns(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&WM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),bi(g,r),m.extensions&&Hs(s,g,m),t.assignFinalMaterial(g),d.push(g)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Hs(s,d[0],r),d[0];let u=new wt;r.extensions&&Hs(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(Pn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Is(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let d=a[c];if(d){o.push(d);let u=new Qe;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ma(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],p=s.samplers[f.sampler],x=f.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],p=d[2],x=d[3],m=d[4],g=[];for(let y=0,M=u.length;y<M;y++){let T=u[y],S=f[y],_=p[y],b=x[y],P=m[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let I=n._createAnimationTracks(T,S,_,b,P);if(I)for(let N=0;N<I.length;N++)g.push(I[N])}let v=new Ga(r,void 0,g);return bi(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,$M)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,p=d[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new yr:c.length>1?h=new wt:c.length===1?h=c[0]:h=new Ut,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),bi(h,r),r.extensions&&Hs(n,h,r),r.matrix!==void 0){let d=new Qe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new wt;n.name&&(r.name=s.createUniqueName(n.name)),bi(r,n),n.extensions&&Hs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?r.add(hm(u)):r.add(u)}let c=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof vn||u instanceof rn)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}hs[r.path]===hs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(hs[r.path]){case hs.weights:h=ki;break;case hs.rotation:h=zi;break;case hs.translation:case hs.scale:h=rs;break;default:n.itemSize===1?h=ki:h=rs;break}let d=s.interpolation!==void 0?HM[s.interpolation]:Ms,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new h(l[f]+"."+hs[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=sd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof zi?nd:Lc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function YM(i,e,t){let n=e.attributes,s=new dn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){let h=sd(Xr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new C,l=new C;for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let x=sd(Xr[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Rn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function mm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=id[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return mt.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),bi(i,e),YM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?VM(i,e.targets,t):i})}async function _m(i){if(!/\.glb$/i.test(i.name))throw new Error("\u8BF7\u9009\u62E9 .glb \u683C\u5F0F\u7684\u6A21\u578B\u3002");if(i.size>64*1024*1024)throw new Error("\u9884\u89C8\u6587\u4EF6\u8BF7\u63A7\u5236\u5728 64 MB \u4EE5\u5185\u3002");let e=await i.arrayBuffer();if(e.byteLength<20)throw new Error("GLB \u6587\u4EF6\u4E0D\u5B8C\u6574\u3002");let t=new DataView(e);if(t.getUint32(0,!0)!==1179937895||t.getUint32(4,!0)!==2||t.getUint32(8,!0)!==e.byteLength)throw new Error("\u9700\u8981\u6709\u6548\u7684 glTF 2.0 GLB \u6587\u4EF6\u3002");let n=t.getUint32(12,!0);if(t.getUint32(16,!0)!==1313821514||20+n>e.byteLength)throw new Error("\u6A21\u578B\u6570\u636E\u7ED3\u6784\u65E0\u6548\u3002");let s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,20,n)));if([...s.buffers||[],...s.images||[]].some(f=>f.uri&&!f.uri.startsWith("data:")))throw new Error("\u8BF7\u5C06\u8D34\u56FE\u548C\u7F13\u51B2\u6570\u636E\u5185\u5D4C\u5230 GLB \u540E\u518D\u5BFC\u51FA\u3002");if((s.extensionsRequired||[]).some(f=>/draco|basisu|meshopt/i.test(f)))throw new Error("\u5F53\u524D\u9884\u89C8\u6682\u4E0D\u652F\u6301\u538B\u7F29\u6269\u5C55\uFF0C\u8BF7\u5BFC\u51FA\u672A\u538B\u7F29 GLB\u3002");let r=new Tr;r.setURLModifier(f=>{if(!/^(blob:|data:)/.test(f))throw new Error("\u6A21\u578B\u5F15\u7528\u4E86\u5916\u90E8\u8D44\u6E90\uFF0C\u8BF7\u5BFC\u51FA\u5185\u5D4C\u8D34\u56FE\u7684 GLB\u3002");return f});let a=await new Ic(r).parseAsync(e,""),o=new wt;o.add(a.scene);for(let f of a.scenes)f!==a.scene&&(f.visible=!1,o.add(f));let l=new dn().setFromObject(a.scene),c=l.getSize(new C),h=Math.max(c.x,c.y,c.z);if(!Number.isFinite(h)||h<=0)throw Mi(o),new Error("\u6A21\u578B\u6CA1\u6709\u53EF\u663E\u793A\u7684\u51E0\u4F55\u4F53\u3002");let d=l.getCenter(new C),u=6/h;return o.scale.setScalar(u),o.position.set(-d.x*u,-l.min.y*u+.02,-d.z*u),o.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),o}var ad="#e0a13a",KM="#8fb0c8",Dc={ok:"#9fd66b",overlap:"#e8b23c",invalid:"#e05c4a"},xm=new _t(1,1,1),od=new Ra(xm);function ZM(){let i=new wt;i.name="selection-marker";let e=new di(od,new ei({color:ad,transparent:!0,opacity:.95,depthTest:!1}));e.renderOrder=8;let t=new Fe(new fi(.92,1,48),new Bt({color:ad,transparent:!0,opacity:.4,side:tn,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.renderOrder=7,i.add(e,t),i.visible=!1,{group:i,edges:e,ring:t}}function JM(){let i=new wt;i.name="hover-marker";let e=new di(od,new ei({color:KM,transparent:!0,opacity:.5,depthTest:!1}));return e.renderOrder=6,i.add(e),i.visible=!1,{group:i,edges:e}}function jM(){let i=new wt;i.name="drag-ghost";let e=new Bt({color:Dc.ok,transparent:!0,opacity:.3,depthWrite:!1}),t=new Fe(xm,e),n=new di(od,new ei({color:Dc.ok,transparent:!0,opacity:.9,depthWrite:!1}));return i.add(t,n),i.visible=!1,{group:i,body:t,edges:n,material:e}}function ym({runtime:i,getGrid:e,onSelect:t,onDragMove:n,onDragEnd:s,onHover:r,onPreview:a}){let o=i.renderer.domElement,l=i.host,c=new Ls,h=new oe,d=new pn,u=new C,f=ZM(),p=JM(),x=jM(),m=new Fe(new fi(.86,1,40),new Bt({color:ad,transparent:!0,opacity:.35,side:tn,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.renderOrder=7,m.visible=!1;let g=new Set;i.scene.add(f.group,p.group,x.group,m);let v=null,y=null,M=null,T=null,S=null,_=!0,b=!1;function P(j){if(!y)return null;let W=o.getBoundingClientRect();h.x=(j.clientX-W.left)/W.width*2-1,h.y=-((j.clientY-W.top)/W.height)*2+1,c.setFromCamera(h,i.camera);let le=c.intersectObject(y,!0);for(let J of le){let Ie=J.object;for(;Ie&&Ie!==y&&!Ie.userData.partId;)Ie=Ie.parent;if(Ie&&Ie.userData.partId)return{id:Ie.userData.partId,group:Ie,point:J.point}}return null}function I(j){return y?.userData?.parts?.get(j)||null}function N(j,W){let le=Math.abs(Math.cos(W)),J=Math.abs(Math.sin(W));return[(j[0]*le+j[2]*J)/2,j[1]/2,(j[0]*J+j[2]*le)/2]}function F(){let j=M?I(M):null;if(!j||!_){f.group.visible=!1;return}j.updateWorldMatrix(!0,!1);let W=new C;j.getWorldPosition(W);let le=j.userData.partSize;if(!le){f.group.visible=!1;return}let J=N(le,j.rotation.y);f.group.visible=!0,f.edges.position.copy(W),f.edges.scale.set(J[0]*2+.04,J[1]*2+.04,J[2]*2+.04),f.ring.position.set(W.x,.03,W.z),f.ring.scale.setScalar(Math.max(J[0],J[2])*1.24+.4)}function z(){let j=T&&!S?I(T):null;if(!j||!_){p.group.visible=!1;return}j.updateWorldMatrix(!0,!1);let W=new C;j.getWorldPosition(W);let le=j.userData.partSize;if(!le){p.group.visible=!1;return}let J=N(le,j.rotation.y);p.group.visible=!0,p.edges.position.copy(W),p.edges.scale.set(J[0]*2+.08,J[1]*2+.08,J[2]*2+.08)}function L(j){if(!S){x.group.visible=!1,m.visible=!1;return}let W=S.group.userData.partSize||[1,1,1],le=j?.position||S.position;x.group.visible=!0,x.group.position.set(...le),x.group.rotation.y=S.yaw,x.group.scale.set(W[0]+.03,W[1]+.03,W[2]+.03);let J=Dc[j?.status]||Dc.ok;x.material.color.set(J),x.edges.material.color.set(J);let Ie=j?.parentId?I(j.parentId):null;if(Ie&&Ie.userData.partSize){let _e=new C;Ie.getWorldPosition(_e);let ze=N(Ie.userData.partSize,Ie.rotation.y);m.visible=!0,m.position.set(_e.x,.04,_e.z),m.scale.setScalar(Math.max(ze[0],ze[2])*1.2+.3)}else m.visible=!1}function H(j){o.style.cursor=j}function G(){x.group.visible=!1,m.visible=!1}function V(j){if(!_||b||j.button!==0)return;if(g.add(j.pointerId),g.size>1){K(),i.controls.enabled=!0;return}let W=P(j);if(!W)return;j.stopPropagation(),j.preventDefault(),t?.(W.id);let le=W.group;le.updateWorldMatrix(!0,!1);let J=new C;le.getWorldPosition(J),S={id:W.id,group:le,pointerId:j.pointerId,startX:j.clientX,startY:j.clientY,moved:!1,mode:j.shiftKey?"vertical":"horizontal",startPosition:J.clone(),offset:new C().subVectors(J,W.point),position:J.clone(),yaw:le.rotation.y,preview:null},d.setFromNormalAndCoplanarPoint(new C(0,1,0),J),i.controls.enabled=!1,p.group.visible=!1;try{o.setPointerCapture?.(j.pointerId)}catch{}H("grabbing")}function se(j){if(b)return;if(!S){if(!_||j.pointerType==="touch")return;let J=P(j)?.id||null;H(J?"grab":""),J!==T&&(T=J,z(),r?.(J));return}if(!(j.pointerId!==S.pointerId||(j.stopPropagation(),Math.hypot(j.clientX-S.startX,j.clientY-S.startY)>3&&(S.moved=!0),!S.moved))){if(S.mode==="vertical")S.position.set(S.startPosition.x,S.startPosition.y-(j.clientY-S.startY)*.02,S.startPosition.z);else{let le=o.getBoundingClientRect();if(h.x=(j.clientX-le.left)/le.width*2-1,h.y=-((j.clientY-le.top)/le.height)*2+1,c.setFromCamera(h,i.camera),!c.ray.intersectPlane(d,u))return;S.position.set(u.x+S.offset.x,S.startPosition.y,u.z+S.offset.z)}S.position.set(Pn.clamp(S.position.x,-Mt.maxExtent,Mt.maxExtent),Pn.clamp(S.position.y,-Mt.maxExtent,Mt.maxExtent),Pn.clamp(S.position.z,-Mt.maxExtent,Mt.maxExtent)),S.group.position.set(S.position.x,S.position.y,S.position.z),S.group.rotation.y=S.yaw,S.group.updateWorldMatrix(!0,!0),S.preview=a?.(S.id,S.position.toArray(),S.yaw)||null,L(S.preview),F(),n?.(S.id,S.position.toArray()),i.invalidate()}}function K(){if(!S)return;let j=S;S=null,i.controls.enabled=!0,G(),j.moved?s?.(j.id,j.position.toArray(),j.yaw):(F(),z());try{o.releasePointerCapture?.(j.pointerId)}catch{}H("")}function te(j){g.delete(j.pointerId),S&&j.pointerId===S.pointerId?K():g.size||(i.controls.enabled=!0)}function re(j){g.delete(j.pointerId),K(),i.controls.enabled=!0}function Le(j){if(!S||!S.moved)return;j.preventDefault();let W=(j.shiftKey?5:15)*Math.PI/180;S.yaw+=j.deltaY>0?W:-W,S.group.rotation.y=S.yaw,S.group.updateWorldMatrix(!0,!0),S.preview=a?.(S.id,S.position.toArray(),S.yaw)||null,L(S.preview),F(),n?.(S.id,S.position.toArray()),i.invalidate()}return l.addEventListener("pointerdown",V,!0),l.addEventListener("pointermove",se,!0),l.addEventListener("pointerup",te,!0),l.addEventListener("pointercancel",re,!0),l.addEventListener("wheel",Le,{passive:!1}),window.addEventListener("pointerup",te),window.addEventListener("pointercancel",re),{setRoot(j){v=j,y=j?.userData?.tank||null,T=null,S=null,i.controls.enabled=!0,G(),F(),z()},setSelected(j){M=j,F()},getPart(j){return I(j)},refresh(){F(),z()},setEnabled(j){_=!!j,_?(F(),z()):(S=null,i.controls.enabled=!0,f.group.visible=!1,p.group.visible=!1,G(),H(""))},update(){if(!f.group.visible)return;let j=performance.now()*.0035;f.edges.material.opacity=.65+Math.sin(j)*.25,f.ring.material.opacity=.28+Math.sin(j+1.2)*.12},dispose(){b=!0,l.removeEventListener("pointerdown",V,!0),l.removeEventListener("pointermove",se,!0),l.removeEventListener("pointerup",te,!0),l.removeEventListener("pointercancel",re,!0),l.removeEventListener("wheel",Le),window.removeEventListener("pointerup",te),window.removeEventListener("pointercancel",re),f.group.removeFromParent(),f.edges.material.dispose(),f.ring.geometry.dispose(),f.ring.material.dispose(),p.group.removeFromParent(),p.edges.material.dispose(),x.group.removeFromParent(),x.material.dispose(),x.edges.material.dispose(),m.removeFromParent(),m.geometry.dispose(),m.material.dispose(),o.style.cursor="",v&&(v=null)}}}var Lt=Object.freeze({tick:1/60,hitRadius:.35,groundY:.12,aimPlaneY:1.2,maxProjectiles:48,tankHalf:[2,1.3,4.4],baseHalf:[17,3,11],minPitch:-.2,maxPitch:1.15,arenaX:17.4,arenaZ:[-2,178],camera:Object.freeze({distance:13.2,height:6.1,lookAhead:14,lookHeight:2,yawLambda:6.5,positionLambda:10,targetLambda:12,entryTime:.6})}),Dn=(i,e,t)=>Math.min(t,Math.max(e,i)),ri=i=>Math.atan2(Math.sin(i),Math.cos(i)),vm=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n));function QM(i,e,t=9.8,n=0){let s=Math.max(0,Number(i)||0),r=e*e;if(s<1e-4)return n>0?Math.PI/2:0;let a=r*r-t*(t*s*s+2*n*r);return a<0?Math.PI/4:Math.atan2(r-Math.sqrt(a),t*s)}function eS(i,e,t,{lambda:n=Lt.camera.yawLambda}={}){let s=ri(e-i);return ri(i+s*(1-Math.exp(-n*Math.max(0,t))))}function Mm(i,e,t){let n=Math.hypot(t.x-e.x,t.z-e.z),s=t.y-e.y,r=i.straight?Math.atan2(s,Math.max(n,.001)):QM(n,i.launchSpeed,i.gravity,s);return Dn(r,Lt.minPitch,Lt.maxPitch)}function tS(i,e,t){return Math.hypot(Math.max(Math.abs(i-t.x)-t.half[0],0),Math.max(Math.abs(e-t.z)-t.half[2],0))}function nS(i,e,t){let n=e.half,s=Math.cos(e.yaw),r=Math.sin(e.yaw),a=i.x-e.position.x,o=i.z-e.position.z,l=a*s-o*r,c=a*r+o*s;return Math.abs(l)<=n[0]+t&&Math.abs(c)<=n[2]+t&&i.y>=-t&&i.y<=n[1]*2+t}function iS(i,e,t){return Math.abs(i.x-e.position.x)<=e.half[0]+t&&Math.abs(i.z-e.position.z)<=e.half[2]+t&&i.y>=e.position.y-e.half[1]-t&&i.y<=e.position.y+e.half[1]+t}function Sm(i){let e=i.yaw+(i.turretYaw||0);return{x:i.position.x+Math.sin(e)*3.5,y:2.35,z:i.position.z+Math.cos(e)*3.5}}function bm(i){return{kind:i.kind,launchSpeed:i.launchSpeed,gravity:i.gravity,blastRadius:i.blastRadius,lifetime:i.lifetime,straight:!!i.straight}}var ld=class{constructor({run:e,random:t=Math.random}){this.level=e.level,this.random=t,this.events=[],this.projectiles=[],this.elapsed=0,this.active=!0,this.outcome=null,this.shots=0,this.hits=0;let n=e.tank.assessment.stats;this.player={id:"player",levelId:null,team:"player",kind:"tank",position:{x:e.level.playerSpawn[0],y:0,z:e.level.playerSpawn[2]},yaw:0,turretYaw:0,pitch:0,pitchTarget:0,health:n.maxHealth,maxHealth:n.maxHealth,defense:n.defense,attack:n.attack,fireRate:n.fireRate,moveSpeed:n.moveSpeed,turnSpeed:n.turnSpeed,turretSpeed:n.turretSpeed??null,weapon:bm(n),reload:0,alive:!0,speed:0,engaged:!0,behavior:"player",triggerZ:-1,half:Lt.tankHalf};let s=e.level.enemyTemplates||{};this.enemies=e.level.enemies.map(r=>{let a=s[r.templateId]?.assessment?.stats||n;return{id:r.id,levelId:r.id,team:"enemy",kind:"tank",position:{x:r.position[0],y:0,z:r.position[2]},yaw:Math.PI,turretYaw:0,pitch:0,pitchTarget:0,health:a.maxHealth,maxHealth:a.maxHealth,defense:a.defense,attack:a.attack,fireRate:a.fireRate,moveSpeed:a.moveSpeed,turnSpeed:a.turnSpeed,turretSpeed:null,weapon:bm(a),reload:0,alive:!0,speed:0,engaged:!1,behavior:r.behavior,triggerZ:r.triggerZ,half:Lt.tankHalf}}),this.base={id:"base",levelId:e.level.base.id,team:"enemy",kind:"base",position:{x:e.level.base.position[0],y:Lt.baseHalf[1],z:e.level.base.position[2]+1},yaw:0,turretYaw:0,health:e.level.base.maxHealth,maxHealth:e.level.base.maxHealth,defense:12,attack:0,fireRate:0,moveSpeed:0,turnSpeed:0,turretSpeed:null,weapon:null,reload:0,alive:!0,speed:0,behavior:"base",triggerZ:0,half:Lt.baseHalf},this.units=[this.player,...this.enemies,this.base],this.cover=(e.level.map?.cover||[]).filter(r=>r.solid!==!1).map(r=>({id:r.id,kind:r.kind,x:r.position[0],z:r.position[2],half:[r.size[0]/2,r.size[1]/2,r.size[2]/2],top:r.position[1]+r.size[1]/2,explosive:r.explosive||null,health:r.explosive?40:1/0,alive:!0})),this.zones=e.level.map?.zones||[],this.playerAim={x:this.player.position.x,z:this.player.position.z+60}}get aliveEnemies(){return this.enemies.filter(e=>e.alive).length}get totalEnemies(){return this.enemies.length}zoneFactorAt(e,t){for(let n of this.zones){let[s,,r]=n.position,[a,o]=n.size;if(Math.abs(e-s)<=a/2&&Math.abs(t-r)<=o/2)return n.speedFactor??1}return 1}moveUnit(e,t,n){let s=Dn(e.position.x+t,-Lt.arenaX,Lt.arenaX),r=Dn(e.position.z+n,Lt.arenaZ[0],Lt.arenaZ[1]),a=e.half[0];for(let o=0;o<2;o++)for(let l of this.cover){if(!l.alive)continue;let c=s-l.x,h=r-l.z,d=Math.max(Math.abs(c)-l.half[0],0),u=Math.max(Math.abs(h)-l.half[2],0),f=Math.hypot(d,u);if(!(f>=a))if(f>1e-4){let p=Math.sign(c)*d/f,x=Math.sign(h)*u/f;s+=p*(a-f),r+=x*(a-f)}else{let p=l.half[0]+a-Math.abs(c),x=l.half[2]+a-Math.abs(h);p<x?s+=Math.sign(c||1)*p:r+=Math.sign(h||1)*x}}e.position.x=Dn(s,-Lt.arenaX,Lt.arenaX),e.position.z=Dn(r,Lt.arenaZ[0],Lt.arenaZ[1])}updatePlayer(e,t){let n=this.player;if(!n.alive)return;let s=Dn(t.throttle||0,-1,1),r=Dn(t.steer||0,-1,1),a=this.zoneFactorAt(n.position.x,n.position.z);n.speed=vm(n.speed,s*n.moveSpeed*a,s?4.4:5.2,e),Math.abs(n.speed)<.01&&(n.speed=0);let o=Dn(Math.abs(n.speed)/(n.moveSpeed*.4),0,1);n.yaw=ri(n.yaw+r*n.turnSpeed*a*(Math.sign(n.speed)||1)*(.62+.38*o)*e),this.moveUnit(n,Math.sin(n.yaw)*n.speed*e,Math.cos(n.yaw)*n.speed*e),t.aim&&(this.playerAim={x:t.aim.x,y:t.aim.y,z:t.aim.z,kind:t.aim.kind});let l=this.playerAim,c={x:l.x,y:Number.isFinite(l.y)?l.y:Lt.aimPlaneY,z:l.z},h=Math.atan2(c.x-n.position.x,c.z-n.position.z);if(n.turretSpeed){let u=ri(h-n.yaw-n.turretYaw),f=n.turretSpeed*e;n.turretYaw=ri(n.turretYaw+Dn(u,-f,f))}else{let u=ri(h-n.yaw);n.yaw=ri(n.yaw+Dn(u,-n.turnSpeed*e,n.turnSpeed*e))}let d=Sm(n);n.pitchTarget=Mm(n.weapon,d,c),n.pitch=vm(n.pitch,n.pitchTarget,14,e),n.reload=Math.max(0,n.reload-e),t.fire&&n.reload<=0&&(n.pitch=n.pitchTarget,this.spawnProjectile(n,d,n.yaw+n.turretYaw,n.pitchTarget),n.reload=1/Math.max(n.fireRate,.2),this.shots++)}updateEnemies(e){for(let t of this.enemies){if(!t.alive)continue;let n=this.player.position.x-t.position.x,s=this.player.position.z-t.position.z,r=Math.hypot(n,s);if(!t.engaged)if(this.player.position.z>=t.triggerZ||r<=26)t.engaged=!0;else{t.reload=Math.max(0,t.reload-e);continue}let a=Math.atan2(n,s),o=ri(a-t.yaw),l=t.turnSpeed*1.35*e;if(t.yaw=ri(t.yaw+Dn(o,-l,l)),t.behavior!=="guard"&&r>22&&Math.abs(o)<.6&&this.player.alive){let c=this.zoneFactorAt(t.position.x,t.position.z);this.moveUnit(t,Math.sin(t.yaw)*t.moveSpeed*.55*c*e,Math.cos(t.yaw)*t.moveSpeed*.55*c*e)}if(t.reload=Math.max(0,t.reload-e),Math.abs(o)<.16&&r<62&&t.reload<=0&&this.player.alive){let c=Sm(t),h={x:this.player.position.x,y:Lt.aimPlaneY,z:this.player.position.z},d=Mm(t.weapon,c,h),u=()=>this.random()-.5,f=t.weapon.straight?.42:.14;this.spawnProjectile(t,c,t.yaw+u()*f,Dn(d+u()*(t.weapon.straight?.02:.05),Lt.minPitch,Lt.maxPitch)),t.reload=1/Math.max(t.fireRate,.2)+.35+this.random()*.5}}}spawnProjectile(e,t,n,s){let r=e.weapon,a=r.launchSpeed,o=Math.cos(s)*a,l=!!r.straight;this.projectiles.push({owner:e.id,team:e.team,position:{x:t.x,y:t.y,z:t.z},velocity:{x:Math.sin(n)*o,y:Math.sin(s)*a,z:Math.cos(n)*o},gravity:l?0:r.gravity,straight:l,speed:a,life:r.lifetime,damage:e.attack,blastRadius:r.blastRadius,kind:r.kind}),this.projectiles.length>Lt.maxProjectiles&&this.projectiles.shift(),this.events.push({type:"fired",owner:e.id,position:{...t},angle:n,pitch:s})}hitTest(e){let t=e.position;for(let n of this.cover)if(!(!n.alive||!n.explosive)&&!(t.y>n.top||t.y<0)&&Math.abs(t.x-n.x)<=n.half[0]+Lt.hitRadius&&Math.abs(t.z-n.z)<=n.half[2]+Lt.hitRadius)return{kind:"cover",cover:n};for(let n of this.units)if(!(!n.alive||n.team===e.team)){if(n.kind==="base"){if(iS(t,n,Lt.hitRadius))return{kind:"base",unit:n};continue}if(nS(t,n,Lt.hitRadius))return{kind:"unit",unit:n}}for(let n of this.cover)if(!(!n.alive||n.explosive)&&!(t.y>n.top||t.y<0)&&Math.abs(t.x-n.x)<=n.half[0]+Lt.hitRadius&&Math.abs(t.z-n.z)<=n.half[2]+Lt.hitRadius)return{kind:"cover",cover:n};return null}updateProjectiles(e){let t=[];for(let n of this.projectiles){n.life-=e,n.straight||(n.velocity.y-=n.gravity*e);let s=Math.hypot(n.velocity.x,n.velocity.y,n.velocity.z),r=Math.max(1,Math.min(10,Math.ceil(s*e/.4))),a=e/r,o=!1;for(let l=0;l<r&&!o;l++){n.position.x+=n.velocity.x*a,n.position.y+=n.velocity.y*a,n.position.z+=n.velocity.z*a;let c=this.hitTest(n);c?(this.impact(n,c),o=!0):n.position.y<=Lt.groundY&&(this.impact(n,{kind:"ground"}),o=!0)}!o&&n.life>0&&t.push(n)}this.projectiles=t}impact(e,t){let n={x:e.position.x,y:Math.max(e.position.y,0),z:e.position.z};t.kind==="unit"||t.kind==="base"?(e.team==="player"&&this.hits++,this.damageUnit(t.unit,e.damage)):t.kind==="cover"&&t.cover.explosive&&this.explodeCover(t.cover),e.blastRadius>.6&&this.blast(n,e.blastRadius,e.team,e.damage*.32,t.unit||null),this.events.push({type:"impact",position:n,radius:Math.max(e.blastRadius,.45),kind:t.kind})}blast(e,t,n,s,r){for(let a of this.units){if(!a.alive||a.team===n||a===r)continue;let o=a.kind==="base"?tS(e.x,e.z,a):Math.hypot(a.position.x-e.x,a.position.z-e.z);o>t||this.damageUnit(a,s*Dn(1-o/(t+1),.25,1))}}explodeCover(e){if(!(!e.alive||!e.explosive)){e.alive=!1,this.events.push({type:"impact",position:{x:e.x,y:e.top,z:e.z},radius:e.explosive.radius*1.6,kind:"cover"});for(let t of this.units){if(!t.alive)continue;let n=Math.hypot(t.position.x-e.x,t.position.z-e.z);n>e.explosive.radius||this.damageUnit(t,e.explosive.damage*Dn(1-n/e.explosive.radius,.3,1))}for(let t of this.cover)t===e||!t.alive||!t.explosive||Math.hypot(t.x-e.x,t.z-e.z)>e.explosive.radius+2||(t.health-=40,t.health<=0&&this.explodeCover(t))}}damageUnit(e,t){if(!e.alive||!(t>0))return;let n=Zp(t,e.defense);e.health=Math.max(0,e.health-n),this.events.push({type:"hit",unit:e.id,damage:n}),!(e.health>0)&&(e.alive=!1,this.events.push({type:"destroyed",unit:e.id,team:e.team}),e.kind==="base"?this.events.push({type:"base-destroyed"}):e.team==="player"?this.events.push({type:"player-destroyed"}):this.events.push({type:"enemy-destroyed",id:e.levelId}))}checkOutcome(){if(this.active){if(!this.player.alive){this.finish("defeat");return}!this.base.alive&&this.enemies.every(e=>!e.alive)&&this.finish("victory")}}finish(e){this.active&&(this.active=!1,this.outcome=e,this.events.push({type:"combat-end",outcome:e}))}fixedUpdate(e,t={}){if(!this.active)return;let n=Math.min(Math.max(Number(e)||0,0),.05);n&&(this.elapsed+=n,this.updatePlayer(n,t),this.updateEnemies(n),this.updateProjectiles(n),this.checkOutcome())}takeEvents(){let e=this.events;return this.events=[],e}},sS=new Set(["enemy-destroyed","base-destroyed","player-destroyed","combat-end"]);function Em({runtime:i,run:e,scene:t,onEvent:n,onHud:s}){let r=new ld({run:e}),a=i.host,o=t.units||{},l=new wt;l.name="combat-effects",t.group.add(l);let c=Iu(),h=[],d=[],u=[],f=new ss(1,10,7),p=new ss(.17,8,6),x=new Bt({color:"#ffe2a6"});for(let $=0;$<32;$++){let Ae=new Fe(p,x);Ae.visible=!1,l.add(Ae),u.push(Ae)}for(let $=0;$<12;$++){let Ae=new Bt({color:"#ffb457",transparent:!0,opacity:0,depthWrite:!1}),me=new Fe(f,Ae);me.visible=!1,l.add(me),d.push({mesh:me,life:0,duration:.45,radius:2})}let m=new Set,g=!1,v=!1,y=0,M=new Ls,T=new oe,S=new pn(new C(0,1,0),0),_=new C,b=new C(r.player.position.x,1.8,r.player.position.z),P=new C,I=new C(0,0,1),N=document.querySelector("#crosshair"),F=r.player.yaw,z=0,L=!1,H=null;function G($,Ae){let me=a.getBoundingClientRect();if(!me.width||!me.height)return null;T.set(($-me.left)/me.width*2-1,-((Ae-me.top)/me.height)*2+1),M.setFromCamera(T,i.camera);let Re=[];for(let O of o.enemies?.values()||[])O.visible&&Re.push(O);if(o.base?.visible&&Re.push(o.base),Re.length){let O=M.intersectObjects(Re,!0);if(O.length)return{x:O[0].point.x,y:O[0].point.y,z:O[0].point.z,kind:"unit"}}if(M.ray.intersectPlane(S,_))return{x:_.x,y:_.y,z:_.z,kind:"ground"};let Be=M.ray.direction,nt=Math.hypot(Be.x,Be.z)||1;return{x:r.player.position.x+Be.x/nt*120,y:1.2,z:r.player.position.z+Be.z/nt*120,kind:"sky"}}function V($,Ae){N&&(N.style.left=`${$}px`,N.style.top=`${Ae}px`)}let se=$=>{V($.clientX,$.clientY),H=G($.clientX,$.clientY)||H},K=$=>{$.button===0&&(V($.clientX,$.clientY),H=G($.clientX,$.clientY)||H,g=!0)},te=()=>{g=!1},re=$=>$&&(["INPUT","TEXTAREA","SELECT"].includes($.tagName)||$.isContentEditable),Le=$=>{re($.target)||(["KeyW","KeyA","KeyS","KeyD"].includes($.code)&&(m.add($.code),$.preventDefault()),$.code==="Space"&&(g=!0,$.preventDefault()))},j=$=>{m.delete($.code),$.code==="Space"&&(g=!1)},W=()=>{m.clear(),g=!1};a.addEventListener("pointermove",se),a.addEventListener("pointerdown",K),window.addEventListener("pointerup",te),window.addEventListener("keydown",Le),window.addEventListener("keyup",j),window.addEventListener("blur",W),i.controls.enabled=!1,i.setKeyboardPan(!1),i.setAutoRotate(!1),i.lockCamera(!0);let le=a.getBoundingClientRect(),J=le.left+le.width/2,Ie=le.top+le.height/2;V(J,Ie),H=G(J,Ie)||H,a.style.cursor="none";function _e($,Ae,me){let Re=d.find(Be=>Be.life<=0)||d[0];Re.life=Re.duration,Re.radius=Ae,Re.mesh.position.set($.x,Math.max($.y,.3),$.z),Re.mesh.material.color.set(me||"#ffb457"),Re.mesh.visible=!0}function ze($){if($==="player"){o.player?.object&&(o.player.object.visible=!1);return}if($==="base"){o.base&&(o.base.visible=!1);return}let Ae=o.enemies?.get($);Ae&&(Ae.visible=!1);let me=r.units.find(Re=>Re.id===$);me&&h.push(Cc(t.group,[me.position.x,.4,me.position.z],{count:18,size:2.6,map:c}))}function xt(){for(let $ of r.takeEvents())$.type==="impact"?_e($.position,Math.max(1.2,$.radius*2.2),$.kind==="ground"?"#d9c08a":"#ffb457"):$.type==="fired"?_e($.position,.9,"#ffe7b8"):$.type==="destroyed"?(ze($.unit),_e(r.units.find(Ae=>Ae.id===$.unit)?.position||{x:0,y:1,z:0},4,"#ff9a4d")):sS.has($.type)&&n?.($)}function $e($){let Ae=r.player,me=o.player?.object;me&&(me.position.set(Ae.position.x,0,Ae.position.z),me.rotation.y=Ae.yaw,o.player.turret&&(o.player.turret.rotation.y=Ae.turretYaw),o.player.pivot&&(o.player.pivot.rotation.x=-Ae.pitch));for(let Re of r.enemies){let Be=o.enemies?.get(Re.id);!Be||!Re.alive||(Be.position.set(Re.position.x,0,Re.position.z),Be.rotation.y=Re.yaw)}for(let Re=0;Re<u.length;Re++){let Be=r.projectiles[Re],nt=u[Re];if(!Be){nt.visible=!1;continue}nt.visible=!0,nt.position.set(Be.position.x,Be.position.y,Be.position.z),P.set(Be.velocity.x,Be.velocity.y,Be.velocity.z);let O=P.length();O>1e-4&&(P.multiplyScalar(1/O),nt.quaternion.setFromUnitVectors(I,P),nt.scale.set(1,1,Be.straight?4.2:2.2))}for(let Re of d){if(Re.life<=0){Re.mesh.visible=!1;continue}Re.life-=$;let Be=1-Math.max(Re.life,0)/Re.duration;Re.mesh.visible=!0,Re.mesh.scale.setScalar(Re.radius*(.35+Be*.9)),Re.mesh.material.opacity=Math.max(0,.85*(1-Be))}for(let Re=h.length-1;Re>=0;Re--)h[Re]($)}function ot($){let Ae=r.player,me=Lt.camera;if(!L){let O=i.camera.position.x-Ae.position.x,kt=i.camera.position.z-Ae.position.z,Je=Math.hypot(O,kt)>2?ri(Math.atan2(-O,-kt)):Ae.yaw;F=Math.abs(ri(Ae.yaw-Je))<Math.PI*.5?Ae.yaw:Je,L=!0}z=Math.min(1,z+$/me.entryTime);let Re=z*z*(3-2*z);F=eS(F,Ae.yaw,$,{lambda:me.yawLambda*(.7+.3*Re)});let Be=new C(Ae.position.x-Math.sin(F)*me.distance,Ae.position.y+me.height,Ae.position.z-Math.cos(F)*me.distance);i.camera.position.lerp(Be,1-Math.exp(-me.positionLambda*(.12+.88*Re)*$));let nt=new C(Ae.position.x+Math.sin(F)*me.lookAhead,Ae.position.y+me.lookHeight,Ae.position.z+Math.cos(F)*me.lookAhead);b.lerp(nt,1-Math.exp(-me.targetLambda*$)),i.controls.target.copy(b),i.camera.lookAt(b)}function ht(){return{active:r.active,health:r.player.health,maxHealth:r.player.maxHealth,reload:r.player.reload,reloadMax:1/Math.max(r.player.fireRate,.2),enemies:r.aliveEnemies,totalEnemies:r.totalEnemies,baseHealth:r.base.health,baseMax:r.base.maxHealth,outcome:r.outcome}}let ne={fixedUpdate($){r.fixedUpdate($,{throttle:(m.has("KeyW")?1:0)-(m.has("KeyS")?1:0),steer:(m.has("KeyA")?1:0)-(m.has("KeyD")?1:0),aim:H,fire:g})},update($){v||(xt(),!v&&($e($),ot($),y+=$,y>.12&&(y=0,s?.(ht()))))},dispose(){Ne()}},ve=i.addSystem(ne),fe=!1;function Ne(){fe||(fe=!0,v=!0,ve?.(),a.removeEventListener("pointermove",se),a.removeEventListener("pointerdown",K),window.removeEventListener("pointerup",te),window.removeEventListener("keydown",Le),window.removeEventListener("keyup",j),window.removeEventListener("blur",W),a.style.cursor="",N&&(N.style.left="",N.style.top=""),l.removeFromParent(),i.lockCamera(!1),i.controls.enabled=!0,i.controls.target.set(r.player.position.x,1.6,r.player.position.z),i.controls.update(),i.invalidate())}return{sim:r,stop:Ne,state:r,hud:ht}}var $t=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),qr=i=>`${i}-${crypto.randomUUID()}`,Ei=(i,e,t)=>`<option value="${$t(i)}" ${i===t?"selected":""}>${$t(e)}</option>`,qt=(i,e,t="")=>`<button type="button" data-action="${i}" ${t}>${e}</button>`,cd={terrain:"\u573A\u5730\u6A21\u578B","enemy-tank":"\u654C\u65B9\u5766\u514B","player-tank":"\u73A9\u5BB6\u5766\u514B"},hd={hull:"\u8F66\u4F53",mobility:"\u673A\u52A8",engine:"\u52A8\u529B",turret:"\u70AE\u5854",weapon:"\u6B66\u5668",armor:"\u9632\u62A4"},Nc=new Set(["hull","mobility","engine","turret"]),wm={hull:'<path d="M3 14h18l-2 4H5z"/><rect x="7" y="9" width="8" height="5" rx="1"/><path d="M15 11h5"/>',mobility:'<rect x="2.5" y="9" width="19" height="8" rx="4"/><circle cx="7" cy="13" r="2"/><circle cx="12" cy="13" r="2"/><circle cx="17" cy="13" r="2"/>',engine:'<rect x="4" y="7" width="11" height="10" rx="1"/><path d="M15 10h4v4h-4"/><path d="M7 7V4M12 7V4M7 20v-3M12 20v-3"/>',turret:'<path d="M6 17a6 6 0 0 1 12 0z"/><path d="M18 14h4"/><path d="M3 19h18"/>',weapon:'<path d="M3 12h12"/><path d="M15 9h6v6h-6z"/><path d="M5 12v5M9 12v5"/>',armor:'<path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z"/><path d="M12 8v7"/>'},rS=i=>{if(!i)return!1;let e=i.tagName;return e==="INPUT"||e==="TEXTAREA"||e==="SELECT"||i.isContentEditable},aS=i=>`<svg viewBox="0 0 24 24" aria-hidden="true">${wm[i]||wm.hull}</svg>`;async function Tm(i){let e=document.querySelector("#workspace"),t=document.querySelector("#report"),n=document.querySelector("#message"),s=document.querySelector("#sceneCaption"),r=document.querySelector("#sceneHud"),a=document.querySelector("#buildDock"),o=[...document.querySelectorAll("[data-camera]")],l,c,h,d=[],u="workshop",f=!1,p=!1,x=0,m=uo("infantry",qr("draft")),g="weapon",v=!0,y=null,M=null,T=null,S="player-tank",_="",b=null,P=null,I=[],N=[],F=Mt.snapGrid,z=null,L=null,H=null,G=null,V=null,se=null,K="",te="",re=0,Le=!1,j=!1,W=!1,le=-1,J=(R,B=!1)=>{n.textContent=R,n.classList.toggle("error",B)},Ie=()=>qi(m,h.unlockedParts),_e=async()=>{h=await c.profile(),d=await c.models.list()};function ze(){G?.stop(),G=null,V=null,H?.(),H=null,L=null}function xt(R,B,{reset:ce=!1,pickable:he=!0,hudValue:at=null}={}){se=B,K=`${B}:${R.id}:${R.revision}`,ze();let pt=lm(R,he?g:null);if(i&&!i.disposed){let St=i.setEnvironment("workshop");i.replaceContent(pt),z?.setEnabled(he),z?.setRoot(he?pt:null),z?.setSelected(g),(ce||St)&&i.resetCamera()}else Mi(pt);s.textContent=B==="garage"?"\u6210\u54C1\u5766\u514B \xB7 \u5199\u5B9E\u4EE3\u7406\u6A21\u578B \xB7 \u5355\u4F4D\uFF1A\u7C73":"\u90E8\u4EF6\u7ED3\u6784\u9884\u89C8",fe(at)}function $e({reset:R=!1,combatMode:B=!1,pose:ce=P}={}){if(!y)return null;se="level",ze();let he=cm(y,{combat:B,playerPose:B?null:ce});if(L=he,i&&!i.disposed){let at=i.setEnvironment("level");i.replaceContent(he.group),z?.setEnabled(!1),z?.setRoot(null),H=i.addSystem({update:pt=>he.update(pt)}),!B&&(at||R)&&ne("player",{duration:R?.001:.9})}else Mi(he.group);return K=ot(),s.textContent=B?"\u7B2C\u4E00\u5173 \xB7 W/A/S/D \u9A7E\u9A76 \xB7 \u9F20\u6807\u7784\u51C6 \xB7 \u5DE6\u952E\u6216\u7A7A\u683C\u5F00\u706B":"\u7B2C\u4E00\u5173 \xB7 36 \xD7 180 \u7C73 \xB7 \u62D6\u52A8\u65CB\u8F6C\uFF0C\u53F3\u952E\u5E73\u79FB\uFF0C\u6EDA\u8F6E\u7F29\u653E",fe(),he}function ot(){return y?[y.status,y.baseDestroyed,y.playerDestroyed,y.defeatedEnemies.join(",")].join("|"):""}function ht(R=!1){if(y){if(G?.state.active){fe();return}if(!R&&se==="level"&&K===ot()){fe();return}$e({reset:R})}}function ne(R,B={}){if(!i||!L)return!1;let ce=i.focusPointById(L.focus,R,{duration:.8,...B});return ce&&i.setAutoRotate(!1),ce}function ve(){if(!y)return;let R=y.level.enemies.filter(ce=>!y.defeatedEnemies.includes(ce.id));if(!R.length){J("\u6CA1\u6709\u5B58\u6D3B\u7684\u654C\u5766\u3002");return}le=(le+1)%R.length;let B=R[le];ne(B.id),J(`\u89C6\u89D2\u5BF9\u51C6\uFF1A${B.behavior==="guard"?"\u7EC8\u70B9\u5B88\u536B":"\u9014\u4E2D\u654C\u5766"}`)}function fe(R=null){if(!r)return;if(r.classList.toggle("battle",!!V),u==="mission"&&y){if(V){Ne();return}let pt={ready:"\u51C6\u5907\u5C31\u7EEA",running:"\u68C0\u9A8C\u8FDB\u884C\u4E2D",victory:"\u80DC\u5229\u6761\u4EF6\u8FBE\u6210",defeat:"\u5931\u8D25\u6761\u4EF6\u8FBE\u6210"};r.innerHTML=`<strong>${$t(y.tank.blueprint.name)}</strong> \xB7 ${pt[y.status]} \xB7 \u654C\u5766 ${y.defeatedEnemies.length}/${y.level.enemies.length} \xB7 \u57FA\u5730${y.baseDestroyed?"\u5DF2\u6467\u6BC1":"\u5B58\u6D3B"}`;return}let B=R?.value||Ie(),ce=R?.name||m.name,he=R?.parts??m.parts.length;if(!B.valid){r.innerHTML="<strong>\u7ED3\u6784\u5F85\u4FEE\u6B63</strong> \xB7 3D \u62D6\u52A8\u4ECD\u53EF\u4F7F\u7528";return}let at=B.metrics.size.map(pt=>pt.toFixed(1)).join(" \xD7 ");r.innerHTML=`<strong>${$t(ce)}</strong> \xB7 \u8D28\u91CF ${B.metrics.mass} t \xB7 \u5C3A\u5BF8 ${at} m \xB7 ${he} \u90E8\u4EF6 \xB7 ${B.weapons.length} \u6B66\u5668${B.metrics.hasTurret?" \xB7 \u70AE\u5854":""}`}function Ne(){if(!r||!V||!y)return;let R=V,B=Math.max(0,Math.round(R.health)),ce=R.reloadMax?Math.min(1,Math.max(0,1-R.reload/R.reloadMax)):1;r.innerHTML=`<strong>${$t(y.tank.blueprint.name)}</strong> \xB7 \u751F\u547D <b>${B}</b>/${Math.round(R.maxHealth)} \xB7 \u88C5\u586B ${Math.round(ce*100)}% \xB7 \u654C\u5766 ${R.enemies}/${R.totalEnemies} \xB7 \u57FA\u5730 ${Math.max(0,Math.round(R.baseHealth))}/${Math.round(R.baseMax)}`}function $(){if(!y||y.status!=="ready"||!i||i.disposed)return!1;y=wu(y,{type:"start"});let R=$e({combatMode:!0});return R?(i.cancelCameraTween?.(),G=Em({runtime:i,run:y,scene:R,onEvent:Re,onHud:B=>{V=B,u==="mission"&&Ne()}}),de(),J("\u6218\u6597\u5F00\u59CB\uFF1AW/A/S/D \u9A7E\u9A76\uFF0C\u9F20\u6807\u7784\u51C6\uFF0C\u5DE6\u952E\u6216\u7A7A\u683C\u5F00\u706B\u3002"),!0):!1}function Ae(){let R=G?.state?.player,B=R?{x:R.position.x,z:R.position.z,yaw:R.yaw,turretYaw:R.turretYaw,pitch:R.pitch}:null;G?.stop(),G=null,V=null,y&&(P=B,$e({reset:!1}),ne("player",{duration:.8}),de())}function me(R){if(!y||y.status!=="running")return!1;try{y=wu(y,R)}catch(B){return J(B.message,!0),!1}return y.status==="running"?de():Ae(),!0}function Re(R){if(R.type==="combat-end"){G&&y&&y.status!=="running"&&Ae();return}me(R)}function Be(){window.__steel3d&&(window.__steel3d.battle=()=>{if(!G)return null;let R=G.state;return{active:R.active,outcome:R.outcome,health:Math.round(R.player.health),maxHealth:R.player.maxHealth,position:[Number(R.player.position.x.toFixed(2)),Number(R.player.position.z.toFixed(2))],yaw:Number(R.player.yaw.toFixed(3)),turretYaw:Number(R.player.turretYaw.toFixed(3)),aim:[Number(R.playerAim.x.toFixed(2)),Number(R.playerAim.z.toFixed(2))],pitch:Number(R.player.pitch.toFixed(3)),enemies:R.aliveEnemies,total:R.totalEnemies,enemyHealth:R.enemies.map(B=>Math.round(B.health)),base:Math.round(R.base.health),projectiles:R.projectiles.length,shots:R.shots,hits:R.hits,status:y?.status||null}},window.__steel3d.enemyScreen=R=>{if(!i||i.disposed||!L?.units)return null;let B=y?.level.enemies?.[R],ce=B?L.units.enemies.get(B.id):null;if(!ce||!ce.visible)return null;let he=new C(ce.position.x,1.4,ce.position.z).project(i.camera);return{x:(he.x+1)/2,y:(1-he.y)/2,depth:Number(he.z.toFixed(3))}})}function nt(R=Ie(),B=m){let ce=document.querySelector('[data-action="manufacture"]');if(ce&&(ce.disabled=!R.valid),!R.valid){t.innerHTML=`<h2>\u9700\u8981\u8C03\u6574</h2><p class="subtle">\u89E3\u51B3\u4EE5\u4E0B\u95EE\u9898\u540E\u624D\u80FD\u5236\u9020\uFF1B3D \u4E2D\u4ECD\u53EF\u70B9\u9009\u548C\u62D6\u52A8\u3002</p><ul class="issues">${R.errors.map(Ht=>`<li>${$t(Ht)}</li>`).join("")}</ul>`;return}let he=R.stats,at=R.metrics,pt=at.size.map(Ht=>Ht.toFixed(2)),St=B.parts.filter(Ht=>Ht.parentId||Ve[Ht.partId]?.role==="hull").length,yt=[["\u7ED3\u6784\u6821\u9A8C",'<b class="ok">\u901A\u8FC7 \u2713</b>'],["\u8FDE\u63A5\u5B8C\u6574\u6027",`<b>${St} / ${B.parts.length}</b>`],["\u6574\u8F66\u8D28\u91CF",`<b>${at.mass}<em>t</em></b>`],["\u6700\u5927\u5916\u5F62",`<b>${pt[2]}<em>m</em></b>`],["\u6B66\u5668\u6302\u8F7D",`<b>${R.weapons.length}<em>/ ${Mt.maxWeapons}</em></b>`],["\u7A33\u5B9A\u6027",`<span class="circled"><b class="warn">${Math.round(at.stability*100)}<em>%</em></b>
        <svg viewBox="0 0 76 44"><g fill="none" stroke="#a5332a" stroke-width="1.8" stroke-linecap="round" opacity=".85" filter="url(#roughRing)">
        <path d="M8 24 C 6 12, 26 5, 44 7 C 62 9, 72 18, 68 28 C 64 38, 40 41, 24 37 C 12 34, 9 30, 8 24"/>
        <path d="M10 20 C 12 9, 30 6, 48 8"/></g></svg></span>`],["\u7C7B\u578B\u9002\u914D",`<b>${Math.round(at.typeFit*100)}<em>%</em></b>`],["\u751F\u547D / \u79FB\u901F",`<b>${he.maxHealth}<em>\xB7 ${Math.round(he.moveSpeed*3.6)} km/h</em></b>`]],jt=[["\u653B\u51FB\u529B",he.attack],["\u653B\u901F",`${he.fireRate} <small>\u6B21/s</small>`],["\u9632\u5FA1\u529B",he.defense],["\u8F66\u4F53\u8F6C\u5411",`${he.turnSpeed} <small>${Math.round(he.turnSpeed*180/Math.PI)}\xB0/s</small>`],...he.turretSpeed?[["\u70AE\u5854\u8F6C\u5411",`${he.turretSpeed} <small>${Math.round(he.turretSpeed*180/Math.PI)}\xB0/s</small>`]]:[],["\u5B50\u5F39\u521D\u901F",`${he.launchSpeed} <small>m/s</small>`],["\u7206\u70B8\u534A\u5F84",`${he.blastRadius} <small>m</small>`],...he.impactDelay?[["\u547D\u4E2D\u5EF6\u8FDF",`${he.impactDelay} <small>s</small>`]]:[]];t.innerHTML=`<h2>\u9A8C\u6536\u5355 <em>GT-03-0117</em></h2>
      <span class="pill">\u7ED3\u6784\u901A\u8FC7 \xB7 \u539F\u578B\u6570\u503C</span>
      ${yt.map(([Ht,Ke])=>`<div class="vrow"><span>${Ht}</span>${Ke}</div>`).join("")}
      <p class="review">${at.hasTurret?"\u70AE\u5854\u72EC\u7ACB\u7784\u51C6":"\u65E0\u70AE\u5854 \xB7 \u6B66\u5668\u968F\u8F66\u4F53"}\uFF0C\u6B66\u5668 ${R.weapons.length} \u4EF6\u3002<br>\u7ED3\u6784\u53EF\u4EA4\u4ED8\uFF0C\u7A33\u5B9A\u6027\u4E0E\u9002\u914D\u968F\u4E0B\u4E00\u6B21\u590D\u6821\u4E00\u5E76\u590D\u6838\u3002</p>
      <div class="seal-wrap"><div class="seal">\u7ED3\u6784\u5408\u683C<small>\u4E09 \u8F66 \u95F4</small></div></div>
      <p class="doc-sign"><span>\u590D\u6838 <i></i></span><span>\u65E5\u671F ${new Date().getMonth()+1}.${new Date().getDate()}</span></p>
      <details class="dev-tools"><summary>\u5168\u90E8\u6570\u503C\u4E0E\u8BA1\u7B97\u4F9D\u636E</summary>
        <dl class="metrics">${jt.map(([Ht,Ke])=>`<div><dt>${Ht}</dt><dd>${Ke}</dd></div>`).join("")}</dl>
        <p class="subtle">\u5C3A\u5BF8 ${pt.join(" \xD7 ")} m</p>
        ${Object.values(R.explanation).map(Ht=>`<p class="subtle">${$t(Ht)}</p>`).join("")}
        <p class="subtle">${$t(R.warnings.join(" "))}</p>
      </details>
      <svg width="0" height="0" aria-hidden="true"><defs><filter id="roughRing"><feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="2"/><feDisplacementMap in="SourceGraphic" scale="2"/></filter></defs></svg>`}function O(R=Ie()){let B=document.querySelector("#sketch");if(!B)return;if(!R.valid||u!=="workshop"){B.innerHTML="";return}let ce=R.metrics,he=Math.max(.1,ce.size[0]),at=Math.max(.1,ce.size[2]),pt=Math.min(330/at,128/he),St=300,yt=74,jt=at*pt,Ht=he*pt,Ke=jt/2,E=Ht/2,U=Math.max(9,Ht*.2),Y=Math.max(12,Ht-U*2-7),k=m.parts.find(bt=>Ve[bt.partId]?.role==="turret"),q=m.parts.find(bt=>bt.id===m.primaryWeaponId)||m.parts.find(bt=>Ve[bt.partId]?.role==="weapon"),we=k?Ve[k.partId].size:null,Oe=k?St+(k.position[2]||0)*pt:St,Me=k?yt+(k.position[0]||0)*pt:yt,Ce=we?we[2]*pt/2:0,He=we?we[0]*pt/2:0,st=q?(Ve[q.partId].size[2]||2)*pt*1.8:0,lt=yt+E+22,Ue=St-Ke-24,dt="";for(let bt=St-Ke+9;bt<St+Ke-6;bt+=19)dt+=`M${bt.toFixed(1)} ${(yt-E+3).toFixed(1)} L ${bt.toFixed(1)} ${(yt-E+U-3).toFixed(1)} `,dt+=`M${bt.toFixed(1)} ${(yt+E-U+3).toFixed(1)} L ${bt.toFixed(1)} ${(yt+E-3).toFixed(1)} `;B.innerHTML=`<svg viewBox="0 0 600 176">
      <defs><filter id="roughPlan" x="-12%" y="-12%" width="124%" height="124%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="4"/>
        <feDisplacementMap in="SourceGraphic" scale="2.6"/>
      </filter></defs>
      <g filter="url(#roughPlan)" fill="none" stroke="#3a3226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="${(St-Ke).toFixed(1)}" y="${(yt-E).toFixed(1)}" width="${jt.toFixed(1)}" height="${U.toFixed(1)}" rx="4"/>
        <rect x="${(St-Ke).toFixed(1)}" y="${(yt+E-U).toFixed(1)}" width="${jt.toFixed(1)}" height="${U.toFixed(1)}" rx="4"/>
        <rect x="${(St-Ke*.94).toFixed(1)}" y="${(yt-Y/2).toFixed(1)}" width="${(jt*.94).toFixed(1)}" height="${Y.toFixed(1)}" rx="5"/>
        ${k?`<ellipse cx="${Oe.toFixed(1)}" cy="${Me.toFixed(1)}" rx="${Ce.toFixed(1)}" ry="${He.toFixed(1)}"/>`:""}
        ${st?`<path d="M${(Oe+Ce*.4).toFixed(1)} ${(Me-1.6).toFixed(1)} L ${(Oe+Ce*.4+st).toFixed(1)} ${(Me-1.6).toFixed(1)} M ${(Oe+Ce*.4).toFixed(1)} ${(Me+1.6).toFixed(1)} L ${(Oe+Ce*.4+st).toFixed(1)} ${(Me+1.6).toFixed(1)}"/>`:""}
        <path d="${dt}"/>
      </g>
      <g fill="none" stroke="#2f4f7a" stroke-width="1.1" stroke-linecap="round" opacity=".9">
        <path d="M${(St-Ke).toFixed(1)} ${lt} L ${(St+Ke).toFixed(1)} ${lt}"/>
        <path d="M${(St-Ke).toFixed(1)} ${lt-5} L ${(St-Ke).toFixed(1)} ${lt+5} M ${(St+Ke).toFixed(1)} ${lt-5} L ${(St+Ke).toFixed(1)} ${lt+5}"/>
        <path d="M${Ue} ${(yt-E).toFixed(1)} L ${Ue} ${(yt+E).toFixed(1)}"/>
        <path d="M${Ue-5} ${(yt-E).toFixed(1)} L ${Ue+5} ${(yt-E).toFixed(1)} M ${Ue-5} ${(yt+E).toFixed(1)} L ${Ue+5} ${(yt+E).toFixed(1)}"/>
      </g>
      <text x="${St}" y="${lt+15}" text-anchor="middle" fill="#2f4f7a" font-family="KaiTi, serif" font-size="13">${at.toFixed(2)} m</text>
      <text x="${Ue-7}" y="${yt}" text-anchor="middle" fill="#2f4f7a" font-family="KaiTi, serif" font-size="13" transform="rotate(-90 ${Ue-7} ${yt})">${he.toFixed(2)} m</text>
      <text x="8" y="16" fill="#8a7c63" font-family="KaiTi, serif" font-size="12" letter-spacing="1">\u56FE 3-3\u3000\u5E73\u9762\u5E03\u7F6E</text>
    </svg>`}function kt(R,B){let ce=m.parts.some(Ht=>Ht.partId===R),he=!h.unlockedParts.includes(R),at=Nc.has(B.role),pt=m.parts.filter(Ht=>Ve[Ht.partId].role==="weapon").length,St=B.role==="weapon"&&pt>=Mt.maxWeapons,yt=at&&ce||St,jt=`${hd[B.role]} \xB7 ${B.mass} t${he?` \xB7 \u89E3\u9501 ${B.cost}`:""}${St?" \xB7 \u6B66\u5668\u5DF2\u6EE1":""}`;return`<button type="button" class="part-card ${at&&ce?"installed":""}" data-action="addPart" data-part="${R}" ${yt?"disabled":""} title="${$t(B.name)}\uFF1A${hd[B.role]}${he?` \xB7 \u89E3\u9501 ${B.cost} \u96F6\u4EF6`:""}">
      <span class="part-icon">${aS(B.role)}</span>
      <span class="part-name">${$t(B.name)}</span>
      <span class="part-meta">${jt}</span>
    </button>`}function Je(){let R=m.parts.find(Ke=>Ke.id===g),ce=Object.entries(Ve).filter(([,Ke])=>Ke.types.includes(m.type)).filter(([Ke,E])=>!(Nc.has(E.role)&&m.parts.some(U=>U.partId===Ke))),he=v?"\u6709\u672A\u4FDD\u5B58\u4FEE\u6539":"\u8349\u7A3F\u5DF2\u4FDD\u5B58",at=Ie(),pt=m.parts.reduce((Ke,E)=>Ke+(Ve[E.partId]?.mass||0),0),St=document.querySelector("#docTitle");St&&(St.textContent=`${m.name}\u3000\u6539\u88C5\u65B9\u6848`);let yt=document.querySelector("#docSub");yt&&(yt.textContent=`${Si[m.type].name} \xB7 \u7B2C ${m.revision||1} \u7A3F`);let jt=m.parts.map((Ke,E)=>{let U=Ve[Ke.partId],Y=U.size.map(k=>Number(k).toFixed(1)).join("\xD7");return`<tr><td class="idx">${String(E+1).padStart(2,"0")}</td>
        <td class="nm">${$t(U.name)}</td><td class="sp">${Y}</td>
        <td class="wt">${U.mass} t</td>
        <td class="st${Ke.id===g?" wait":""}">${Ke.id===g?"\u9009\u4E2D":"\u5DF2\u88C5"}</td></tr>`}).join("");e.innerHTML=`<h2>\u90E8\u4EF6\u6E05\u5355 <em>${String(m.parts.length).padStart(2,"0")} \u4EF6 / ${pt} t</em></h2>
      <p class="subtle" id="draftState">${he} \xB7 ${m.parts.length} \u90E8\u4EF6</p>
      <table class="ledger">
        <thead><tr><th class="idx"></th><th>\u540D \u79F0</th><th>\u89C4 \u683C</th><th class="wt">\u91CD\u91CF</th><th class="st">\u72B6\u6001</th></tr></thead>
        <tbody>${jt}</tbody>
      </table>
      <div class="total"><span>\u5408\u8BA1\u3000${m.parts.length} \u4EF6</span><span><b>${pt} t</b></span></div>

      <h3>\u53EF\u88C5\u90E8\u4EF6 <span class="subtle" style="font-family:'Ink Free',serif">\u96F6\u4EF6\uFF1A${h.currency.parts}</span></h3>
      <div class="palette">${ce.map(([Ke,E])=>kt(Ke,E)).join("")||'<p class="subtle">\u8BE5\u7C7B\u578B\u7684\u90E8\u4EF6\u90FD\u5DF2\u88C5\u4E0A\u3002</p>'}</div>
      ${h.inspectionGrantClaimed?'<p class="subtle">\u6D4B\u8BD5\u96F6\u4EF6\u5DF2\u9886\u53D6 \xB7 \u4E0E\u65E7\u6A21\u5F0F\u94B1\u5305\u72EC\u7ACB</p>':`<div class="row">${qt("grant","\u9886\u53D6 100 \u6D4B\u8BD5\u96F6\u4EF6")}</div>`}

      <h3>\u5F53\u524D\u90E8\u4EF6</h3>
      <div class="selection-card">
        <div class="title"><strong>${R?$t(Ve[R.partId].name):"\u672A\u9009\u4E2D"}</strong><span class="pill">${R?hd[Ve[R.partId].role]:"\u70B9\u51FB 3D \u90E8\u4EF6"}</span></div>
        ${R?`
          <div class="row">${qt("duplicate","\u590D\u5236")}${qt("remove","\u79FB\u9664")}${Ve[R.partId].role==="weapon"?qt("primary",m.primaryWeaponId===R.id?"\u5F53\u524D\u4E3B\u6B66\u5668":"\u8BBE\u4E3A\u4E3B\u6B66\u5668",m.primaryWeaponId===R.id?"disabled":""):""}</div>
          <details class="dev-tools"><summary>\u7CBE\u786E\u8C03\u6574\uFF08\u5750\u6807 / \u671D\u5411 / \u8FDE\u63A5\uFF09</summary>
            <label class="field">\u9009\u62E9\u90E8\u4EF6<select id="selectedPart">${m.parts.map(Ke=>Ei(Ke.id,`${Ve[Ke.partId].name} \xB7 ${Ke.id.slice(0,8)}`,g)).join("")}</select></label>
            <div class="coordinates">${["X","Y","Z"].map((Ke,E)=>`<label>${Ke}<input type="number" step="0.1" min="-30" max="30" data-coordinate="${E}" value="${R.position[E]}"></label>`).join("")}</div>
            <div class="field"><span>\u671D\u5411</span><div class="yaw-row"><input id="partYaw" type="range" min="-180" max="180" step="5" value="${Math.round(R.yaw*180/Math.PI)}"><output id="yawOutput">${Math.round(R.yaw*180/Math.PI)}\xB0</output></div></div>
            <label class="field">\u8FDE\u63A5\u5230<select id="partParent">${Ei("","\u65E0\uFF08\u8F66\u4F53\u6839\u8282\u70B9\uFF09",R.parentId||"")}${m.parts.filter(Ke=>Ke.id!==R.id).map(Ke=>Ei(Ke.id,Ve[Ke.partId].name+" \xB7 "+Ke.id.slice(0,8),R.parentId)).join("")}</select></label>
          </details>
        `:'<p class="subtle">\u5728 3D \u91CC\u70B9\u4E00\u4E2A\u90E8\u4EF6\uFF0C\u6216\u5728\u4E0A\u9762\u76EE\u5F55\u91CC\u88C5\u4E00\u4E2A\u3002</p>'}
      </div>

      <h3>\u5907\u6CE8</h3>
      <div class="memo">
        <p>\u2460 \u5EA7\u5708\u6CBF\u7528\u65E7\u4EF6\uFF0C\u8F6C\u901F\u504F\u9AD8\uFF0C\u51FA\u5382\u524D\u590D\u6821\u3002</p>
        <p>\u2461 \u786C\u57FA\u88C5\u7532\u5F85\u88C5\uFF0C\u91CD\u5FC3\u540E\u79FB\u7EA6 0.12 m\u3002</p>
        <p>\u2462 \u5C65\u5E26\u5F20\u529B\u6309 500 mm \u6807\u51C6\uFF0C\u52FF\u518D\u4E0A\u8C03\u3002</p>
      </div>

      <details class="dev-tools"><summary>\u9644\u9875\uFF1A\u84DD\u56FE / \u5916\u89C2 / \u8349\u7A3F / \u6A21\u578B\u4ED3\u5E93</summary>
        <label class="field">\u84DD\u56FE\u540D\u79F0<input id="blueprintName" maxlength="60" value="${$t(m.name)}"></label>
        <div class="row"><select id="tankType" aria-label="\u65B0\u5EFA\u5766\u514B\u7C7B\u578B">${Object.entries(Si).map(([Ke,E])=>Ei(Ke,E.name,m.type)).join("")}</select>${qt("new","\u65B0\u5EFA\u84DD\u56FE")}</div>
        <label class="field">\u6210\u54C1\u5916\u89C2\u6A21\u578B\uFF08\u53EF\u9009\uFF09<select id="boundModel">${Ei("","\u4F7F\u7528\u90E8\u4EF6\u7ED3\u6784\u9884\u89C8",b||"")}${d.filter(Ke=>Ke.category==="player-tank").map(Ke=>Ei(Ke.id,Ke.name,b)).join("")}</select></label>
        <h3>\u5DF2\u4FDD\u5B58\u8349\u7A3F</h3>${h.blueprints.length?`<div class="row"><select id="savedDraft" aria-label="\u5DF2\u4FDD\u5B58\u8349\u7A3F">${h.blueprints.map(Ke=>Ei(Ke.id,`${Ke.name} \xB7 ${Ke.parts.length} \u90E8\u4EF6`,m.id)).join("")}</select>${qt("load","\u8F7D\u5165")}</div>`:'<p class="subtle">\u5C1A\u65E0\u8349\u7A3F\uFF0C\u70B9\u51FB\u201C\u4FDD\u5B58\u8349\u7A3F\u201D\u4FDD\u7559\u5F53\u524D\u642D\u5EFA\u3002</p>'}
        <div class="row">${qt("openModels","\u6253\u5F00\u6A21\u578B\u4ED3\u5E93")}</div>
      </details>`;let Ht=document.querySelector("#docFoot");Ht&&(Ht.innerHTML=`<div class="mint-row">${qt("save","\u4FDD\u5B58\u8349\u7A3F")}${qt("manufacture","\u5236\u9020\u5E76\u5165\u5E93",`class="primary" ${at.valid?"":"disabled"}`)}</div>
      <div class="doc-sign"><span>\u8BB0\u5F55\u4EBA <i></i></span><span>GT-03-0117 \xB7 \u7B2C 12 \u9875</span></div>`),nt(),O(at),fe()}function Tt(){if(!a)return;a.hidden=u!=="workshop";let R=a.closest(".ops");R&&(R.hidden=u!=="workshop");let B=a.querySelector('[data-action="undo"]'),ce=a.querySelector('[data-action="redo"]');B&&(B.disabled=!I.length),ce&&(ce.disabled=!N.length);let he=a.querySelector('[data-action="snap"]');he&&(he.textContent=F?`\u5438\u9644 ${F} m`:"\u81EA\u7531\u79FB\u52A8",he.classList.toggle("active",!!F))}function xe(){let R=document.querySelector("#draftState");R&&(R.textContent=`${v?"\u6709\u672A\u4FDD\u5B58\u4FEE\u6539":"\u8349\u7A3F\u5DF2\u4FDD\u5B58"} \xB7 ${m.parts.length} \u90E8\u4EF6`),Tt()}let zt="steel3d.guide.v1",Ye=["\u70B9\u4E00\u4E0B\u5DE6\u4FA7\u7684\u90E8\u4EF6\uFF0C\u5B83\u5C31\u4F1A\u88C5\u5230\u8F66\u4E0A\u3002","\u5728 3D \u91CC\u62D6\u52A8\u5B83\u3002\u677E\u624B\u4F1A\u81EA\u52A8\u5438\u9644\u5230\u6700\u8FD1\u7684\u8FDE\u63A5\u70B9\u3002","\u6570\u503C\u5408\u683C\u540E\u70B9\u300C\u5236\u9020\u5E76\u5165\u5E93\u300D\uFF0C\u7136\u540E\u5C31\u80FD\u5F00\u6218\u3002"],je=0;function A(){try{return localStorage.getItem(zt)==="done"}catch{return!0}}function w(R=0){let B=document.querySelector("#guide");if(!B)return;je=R;let ce=document.querySelector("#guideStep"),he=document.querySelector("#guideText");ce&&(ce.textContent=`\u7B2C ${R+1} \u6B65 / \u5171 3 \u6B65`),he&&(he.textContent=Ye[R]),B.hidden=!1}function X(R=!0){let B=document.querySelector("#guide");if(B&&(B.hidden=!0),R)try{localStorage.setItem(zt,"done")}catch{}}function ue(){e.innerHTML=`<div class="row">${qt("backWorkshop","\u2190 \u8FD4\u56DE\u8F66\u95F4")}</div><p class="eyebrow">LOCAL ASSET LIBRARY</p><h1>\u6A21\u578B\u4ED3\u5E93</h1><p class="subtle">\u5185\u5D4C\u8D34\u56FE\u7684 GLB\uFF0C\u6700\u5927 64 MB\u3002\u5148\u9884\u89C8\uFF0C\u518D\u5206\u7C7B\u5165\u5E93\uFF1B\u6587\u4EF6\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002</p>
      <label class="field">\u5BFC\u5165\u5206\u7C7B<select id="modelCategory">${Object.entries(cd).map(([R,B])=>Ei(R,B,S)).join("")}</select></label>
      <label class="field">\u9009\u62E9 GLB<input id="modelFile" type="file" accept=".glb"></label>
      <p id="pendingName" class="subtle">${T?$t(T.name):"\u5C1A\u672A\u9009\u62E9\u6587\u4EF6"}</p>
      <div class="row">${qt("storeModel","\u4FDD\u5B58\u5230\u6A21\u578B\u4ED3\u5E93",`id="storeModel" class="primary" ${T?"":"disabled"}`)}${qt("clearModel","\u6062\u590D\u90E8\u4EF6\u9884\u89C8",'id="clearModel"')}</div>
      <label class="field">\u6D4F\u89C8\u5206\u7C7B<select id="modelFilter">${Ei("","\u5168\u90E8\u5206\u7C7B",_)}${Object.entries(cd).map(([R,B])=>Ei(R,B,_)).join("")}</select></label>
      ${d.filter(R=>!_||R.category===_).map(R=>`<article class="card"><strong>${$t(R.name)}</strong><small>${cd[R.category]} \xB7 ${(R.byteLength/1024).toFixed(1)} KB</small><div class="row">${qt("previewAsset","\u9884\u89C8",`data-id="${$t(R.id)}"`)}</div></article>`).join("")||'<p class="subtle">\u6B64\u5206\u7C7B\u6682\u65E0\u6A21\u578B\u3002</p>'}`,t.innerHTML='<p class="eyebrow">ASSET WORKFLOW</p><h2>\u5916\u89C2\u4E0E\u80FD\u529B</h2><p>\u6A21\u578B\u63D0\u4F9B\u5916\u89C2\uFF0C\u90E8\u4EF6\u84DD\u56FE\u51B3\u5B9A\u80FD\u529B\u3002</p><p class="subtle">\u73A9\u5BB6\u6A21\u578B\u5165\u5E93\u540E\uFF0C\u53EF\u5728\u8F66\u95F4\u7684\u201C\u6210\u54C1\u5916\u89C2\u6A21\u578B\u201D\u4E2D\u7ED1\u5B9A\u3002\u573A\u5730\u4E0E\u654C\u65B9\u6A21\u578B\u76EE\u524D\u652F\u6301\u5206\u7C7B\u5B58\u50A8\u548C\u9884\u89C8\uFF0C\u5730\u56FE\u7ED1\u5B9A\u5C06\u5728\u540E\u7EED\u63A5\u5165\u3002</p><p class="subtle">\u5237\u65B0\u540E\u4ED3\u5E93\u4ECD\u4F1A\u4FDD\u7559\u3002\u4E0D\u540C\u6D4F\u89C8\u5668\u6216\u7AD9\u70B9\u5730\u5740\u7684\u5B58\u50A8\u72EC\u7ACB\u3002</p>'}function ae(){e.innerHTML=`<p class="eyebrow">YOUR TANKS</p><h1>\u5766\u514B\u4ED3\u5E93</h1><p class="subtle">\u6210\u54C1\u4FDD\u7559\u5236\u9020\u65F6\u7684\u84DD\u56FE\uFF1B\u5165\u573A\u65F6\u91CD\u65B0\u8BC4\u4F30\u3002</p>${h.tanks.map(B=>`<article class="card ${B.id===M?"active":""}"><strong>${$t(B.blueprint.name)}</strong><small>${Si[B.blueprint.type].name} \xB7 ${B.blueprint.parts.length} \u90E8\u4EF6${B.modelId?" \xB7 \u5DF2\u7ED1\u5B9A\u6A21\u578B":""}</small><div class="row">${qt("inspectTank","\u68C0\u9A8C",`data-id="${$t(B.id)}"`)}${qt("prepare","\u51C6\u5907\u7B2C\u4E00\u5173",`class="primary" data-id="${$t(B.id)}"`)}</div></article>`).join("")||'<div class="card">\u8FD8\u6CA1\u6709\u6210\u54C1\u5766\u514B\u3002<p class="subtle">\u5148\u5728\u8F66\u95F4\u901A\u8FC7\u8BC4\u4F30\uFF0C\u518D\u70B9\u51FB\u201C\u5236\u9020\u5E76\u5165\u5E93\u201D\u3002</p></div>'}`;let R=h.tanks.find(B=>B.id===M);if(R){nt(qi(R.blueprint,h.unlockedParts),R.blueprint);let B=`garage:${R.id}:${R.modelId||"blueprint"}`;(se!=="garage"||te!==B)&&(te=B,xt(R.blueprint,"garage",{pickable:!1,reset:!0,hudValue:{value:qi(R.blueprint,h.unlockedParts),name:R.blueprint.name,parts:R.blueprint.parts.length}}),R.modelId&&Kt(R.modelId,!1,{kind:"garage"}))}else t.innerHTML='<h2>\u68C0\u9A8C\u6210\u54C1</h2><p class="subtle">\u9009\u62E9\u4E00\u8F86\u5766\u514B\uFF0C\u67E5\u770B\u5176\u6570\u503C\u4E0E\u5916\u89C2\u3002</p>'}function Se(){if(!y){e.innerHTML='<p class="eyebrow">STEEL JOURNEY / 01</p><h1>\u7B2C\u4E00\u5173</h1><p>36 \xD7 180 \u7C73\u4E09\u6BB5\u5F0F\u8D70\u5ECA\uFF1A\u63A5\u654C\u533A\u3001\u4FA7\u7FFC\u533A\u3001\u57FA\u5730\u653B\u575A\u3002</p><p class="subtle">\u5148\u5728\u5766\u514B\u4ED3\u5E93\u9009\u62E9\u6210\u54C1\uFF0C\u51C6\u5907\u7B2C\u4E00\u5173\u3002</p>'+qt("goGarage","\u9009\u62E9\u5766\u514B",'class="primary"'),t.innerHTML='<h2>\u80DC\u5229\u6761\u4EF6</h2><p>\u6467\u6BC1\u57FA\u5730\uFF0C\u5E76\u6D88\u706D\u5168\u90E8 4 \u8F86\u654C\u5766\u3002</p><p class="subtle">\u8FDB\u5165\u7B2C\u4E00\u5173\u540E\u70B9\u300C\u5F00\u6218\u300D\u5373\u53EF\u9A7E\u9A76\u5766\u514B\uFF1B\u89C4\u5219\u81EA\u68C0\u6309\u94AE\u6536\u5728\u300C\u89C4\u5219\u81EA\u68C0\uFF08\u5F00\u53D1\u8005\uFF09\u300D\u91CC\u3002</p><div class="legend"><span style="--dot:#b9d38f">\u73A9\u5BB6\u5766\u514B</span><span style="--dot:#b4543a">\u9014\u4E2D\u654C\u5766</span><span style="--dot:#c24a32">\u7EC8\u70B9\u5B88\u536B</span><span style="--dot:#c9a873">\u654C\u65B9\u57FA\u5730</span></div>';return}let R={ready:"\u51C6\u5907\u5C31\u7EEA",running:"\u68C0\u9A8C\u8FDB\u884C\u4E2D",victory:"\u80DC\u5229\u6761\u4EF6\u8FBE\u6210",defeat:"\u5931\u8D25\u6761\u4EF6\u8FBE\u6210"},B=y.status==="running",ce=!!G?.state.active;e.innerHTML=`<p class="eyebrow">STEEL JOURNEY / 01</p><h1>\u7B2C\u4E00\u5173 \xB7 \u7A81\u7834\u8D70\u5ECA</h1>
      <p class="subtle">${ce?"W/A/S/D \u9A7E\u9A76 \xB7 \u9F20\u6807\u7784\u51C6 \xB7 \u5DE6\u952E\u6216\u7A7A\u683C\u5F00\u706B\u3002":"\u4E09\u6BB5\u5F0F\u573A\u5730\uFF1A\u63A5\u654C\u533A \u2192 \u4FA7\u7FFC\u533A \u2192 \u57FA\u5730\u653B\u575A\u3002\u70B9\u300C\u5F00\u6218\u300D\u76F4\u63A5\u9A7E\u9A76\u5766\u514B\u3002"}</p>
      <div class="level-status"><span class="pill">${R[y.status]}</span><span class="subtle">\u51FA\u6218\uFF1A${$t(y.tank.blueprint.name)}</span></div>
      ${y.status==="ready"?qt("startTest","\u5F00\u6218",'class="primary" id="startBattle"'):""}
      <div class="row">${qt("resetTest","\u91CD\u65B0\u51C6\u5907")}${qt("goGarage","\u8FD4\u56DE\u5766\u514B\u4ED3\u5E93")}</div>
      ${y.status==="victory"?qt("next","\u540E\u7EED\u5173\u5361\u5F85\u5F00\u53D1","disabled"):""}
      <details class="dev-tools"><summary>\u89C4\u5219\u81EA\u68C0\uFF08\u5F00\u53D1\u8005\uFF09</summary>
        <p class="subtle">\u76F4\u63A5\u5411\u72B6\u6001\u673A\u53D1\u9001\u4E8B\u4EF6\uFF0C\u4E0D\u7ECF\u8FC7\u6218\u6597\u6A21\u62DF\u3002</p>
        ${y.level.enemies.map((he,at)=>`<article class="card"><strong>${at===3?"\u7EC8\u70B9\u5B88\u536B":`\u9014\u4E2D\u654C\u5766 ${at+1}`}</strong><small>${["\u6B63\u9762\u5BF9\u6297","\u5DE6\u4FA7\u5077\u88AD","\u53F3\u4FA7\u5077\u88AD","\u57FA\u5730\u5B88\u536B"][at]} \xB7 Z = ${he.position[2]} m \xB7 \u89E6\u53D1 ${he.triggerZ} m</small><div class="row">${qt("destroyEnemy",y.defeatedEnemies.includes(he.id)?"\u5DF2\u6D88\u706D":"\u6A21\u62DF\u6D88\u706D",`data-id="${he.id}" ${!B||y.defeatedEnemies.includes(he.id)?"disabled":""}`)}</div></article>`).join("")}
        <div class="row">${qt("destroyBase",y.baseDestroyed?"\u57FA\u5730\u5DF2\u6467\u6BC1":"\u6A21\u62DF\u6467\u6BC1\u57FA\u5730",!B||y.baseDestroyed?"disabled":"")}${qt("destroyPlayer","\u6A21\u62DF\u73A9\u5BB6\u9635\u4EA1",B?"":"disabled")}</div>
      </details>`,t.innerHTML=`<p class="eyebrow">MISSION VALIDATION</p><h2>${R[y.status]}</h2><dl class="metrics"><div><dt>\u654C\u5766\u6D88\u706D</dt><dd>${y.defeatedEnemies.length} / 4</dd></div><div><dt>\u654C\u65B9\u57FA\u5730</dt><dd>${y.baseDestroyed?"\u5DF2\u6467\u6BC1":"\u5B58\u6D3B"}</dd></div></dl><p>${y.status==="victory"?"\u4E24\u4E2A\u80DC\u5229\u6761\u4EF6\u5747\u5DF2\u6EE1\u8DB3\u3002":y.status==="defeat"?"\u73A9\u5BB6\u9635\u4EA1\uFF0C\u5173\u5361\u5931\u8D25\u3002":"\u6D88\u706D\u5168\u90E8\u654C\u5766\u4E14\u6467\u6BC1\u57FA\u5730\u540E\u624D\u80FD\u80DC\u5229\u3002"}</p><div class="legend"><span style="--dot:#b9d38f">\u73A9\u5BB6\u5766\u514B</span><span style="--dot:#b4543a">\u9014\u4E2D\u654C\u5766</span><span style="--dot:#c24a32">\u7EC8\u70B9\u5B88\u536B</span><span style="--dot:#c9a873">\u654C\u65B9\u57FA\u5730</span></div><p class="subtle">${ce?"\u6218\u6597\u8FDB\u884C\u4E2D\uFF1A\u9A7E\u9A76\u3001\u7784\u51C6\u4E0E\u5F00\u706B\u7531 combat.mjs \u5B9E\u65F6\u6A21\u62DF\u3002":"\u573A\u666F\u5305\u542B\u4E09\u6BB5\u5F0F\u573A\u5730\u3001\u53EF\u78B0\u649E\u63A9\u4F53\u3001\u6CE5\u5730/\u788E\u77F3\u533A\u4E0E 5 \u8F86\u5766\u514B\uFF1B\u70B9\u300C\u5F00\u6218\u300D\u8FD0\u884C\u771F\u5B9E\u6218\u6597\u3002"}</p>`,ht()}function de(){if(p)return;if(document.querySelectorAll("[data-tab]").forEach(ce=>ce.setAttribute("aria-pressed",String(ce.dataset.tab===u))),u!=="workshop"){let ce=document.querySelector("#docFoot");ce&&(ce.innerHTML="");let he=document.querySelector("#sketch");he&&(he.innerHTML="");let at=document.querySelector("#guide");at&&(at.hidden=!0)}let R=document.querySelector("#cameraCapsule");R&&(R.hidden=!(u==="mission"&&y&&!G?.state.active));let B=document.querySelector("#crosshair");B&&(B.hidden=!(u==="mission"&&G?.state.active)),u==="workshop"?(Je(),se!=="workshop"?xt(m,"workshop",{reset:!0}):(z?.setSelected(g),z?.refresh(),fe())):u==="models"?ue():u==="garage"?ae():Se(),i?.setKeyboardPan(u==="mission"&&!G?.state.active),z?.setEnabled(u==="workshop"&&se==="workshop"),Tt()}let ee=()=>JSON.stringify({parts:m.parts,primaryWeaponId:m.primaryWeaponId,name:m.name,type:m.type});function Q(){I.push(ee()),I.length>60&&I.shift(),N.length=0,Tt()}function be(R){let B=JSON.parse(R);m={...m,...B},m.parts.some(ce=>ce.id===g)||(g=m.parts[0]?.id||null),v=!0,xt(m,"workshop"),Je(),xe(),Z()}function D(){I.length&&(N.push(ee()),be(I.pop()),J("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65\u642D\u5EFA\u3002"))}function ie(){N.length&&(I.push(ee()),be(N.pop()),J("\u5DF2\u91CD\u505A\u3002"))}function Z(){v=!0,xe(),clearTimeout(re),re=setTimeout(()=>{ye(!0).catch(R=>J(`\u81EA\u52A8\u4FDD\u5B58\u5931\u8D25\uFF1A${R.message}`,!0))},900)}async function ye(R=!1){if(Le){j=!0;return}Le=!0;try{let B=structuredClone(m);h.blueprints.some(ce=>ce.id===B.id)&&B.revision++,await c.saveDraft(B),m=B,v=!1,await _e(),xe(),R||J("\u8349\u7A3F\u5DF2\u4FDD\u5B58\uFF0C\u5237\u65B0\u540E\u53EF\u91CD\u65B0\u8F7D\u5165\u3002")}finally{Le=!1,j&&(j=!1,Z())}}function pe(R){v=!0,xt(m,"workshop"),Je(),xe(),Z(),R&&J(R)}function Ee(R){let B=Ve[R];if(B){if(Nc.has(B.role)&&m.parts.some(ce=>Ve[ce.partId].role===B.role)){J(`${B.name} \u53EA\u80FD\u5B89\u88C5\u4E00\u4E2A\u3002`,!0);return}if(!h.unlockedParts.includes(R))return c.unlockPart(R).then(async()=>{await _e(),We(R)}).catch(he=>J(he.message,!0));We(R)}}function We(R){let B=qr("part"),ce=Mu(m,R,B);Q(),m.parts.push({id:B,partId:R,parentId:ce.parentId,position:ce.position,yaw:ce.yaw}),g=B,pe(`\u5DF2\u5B89\u88C5 ${Ve[R].name}\uFF0C\u53EF\u5728 3D \u4E2D\u62D6\u52A8\u8C03\u6574\u3002`)}function ct(){let R=m.parts.find(ce=>ce.id===g);if(!R)return;if(Ve[R.partId].role==="hull"){J("\u8F66\u4F53\u662F\u6839\u8282\u70B9\uFF0C\u4E0D\u80FD\u79FB\u9664\u3002",!0);return}Q();let B=R.parentId;m.parts=m.parts.filter(ce=>ce.id!==g);for(let ce of m.parts)ce.parentId===R.id&&(ce.parentId=B);if(m.primaryWeaponId===R.id){let ce=m.parts.find(he=>Ve[he.partId].role==="weapon");m.primaryWeaponId=ce?.id||null}g=m.parts[0]?.id||null,pe(`\u5DF2\u79FB\u9664 ${Ve[R.partId].name}\u3002`)}function ge(){let R=m.parts.find(at=>at.id===g);if(!R)return;let B=Ve[R.partId].role;if(Nc.has(B)){J("\u8F66\u4F53\u3001\u5C65\u5E26\u3001\u5F15\u64CE\u4E0E\u70AE\u5854\u4E0D\u80FD\u590D\u5236\u3002",!0);return}if(m.parts.length>=Mt.maxParts){J("\u90E8\u4EF6\u6570\u91CF\u5DF2\u8FBE\u4E0A\u9650\u3002",!0);return}let ce=qr("part"),he=Mu(m,R.partId,ce);Q(),m.parts.push({id:ce,partId:R.partId,parentId:he.parentId,position:he.position,yaw:he.yaw}),g=ce,pe(`\u5DF2\u590D\u5236 ${Ve[R.partId].name}\u3002`)}function Xe(R){let B=m.parts.find(ce=>ce.id===g);B&&(Q(),B.yaw=Math.round((B.yaw+R*Math.PI/180)*1e3)/1e3,pe(`\u671D\u5411\u5DF2\u8C03\u6574\u4E3A ${Math.round(B.yaw*180/Math.PI)}\xB0\u3002`))}function it(R,B){let ce=m.parts.find(he=>he.id===g);ce&&(Q(),ce.position[R]=Math.max(-Mt.maxExtent,Math.min(Mt.maxExtent,Number((ce.position[R]+B).toFixed(3)))),pe())}function Pe(R,B,ce){let he=m.parts.find(yt=>yt.id===R);if(!he)return;let at=Hp(m,R,B,F)||B,pt=Su(m,R,at,{grid:null});if(!pt)return;he.position=pt.position,Number.isFinite(ce)&&(he.yaw=ce),pt.parentId&&pt.parentId!==he.parentId&&(he.parentId=pt.parentId),v=!0,xt(m,"workshop"),Je(),xe(),Z();let St=pt.gap!==null&&pt.gap!==void 0?` \xB7 \u5DF2\u8FDE\u63A5 ${Ve[m.parts.find(yt=>yt.id===he.parentId)?.partId]?.name||""}`:"";J(`${Ve[he.partId].name} \u79FB\u52A8\u5230 ${pt.position.map(yt=>yt.toFixed(2)).join(" / ")}${St}`)}function At(R,B,ce){if(!m.parts.find(jt=>jt.id===R))return null;let at=Su(m,R,B,{grid:null});if(!at)return null;let pt={...m,parts:m.parts.map(jt=>jt.id===R?{...jt,position:at.position,yaw:ce}:jt)},St=po(pt,h.unlockedParts),yt=St.length===0?"ok":St.some(jt=>jt.includes("\u91CD\u53E0"))?"overlap":"invalid";return{position:at.position,parentId:at.parentId,status:yt}}async function Kt(R,B=!0,ce={}){let he=await c.models.get(R);if(!he)return!1;let at=new File([he.blob],`${he.name}.glb`);return await Yn(at,ce),B&&J(`\u6B63\u5728\u9884\u89C8\uFF1A${he.name}`),!0}async function Yn(R,{kind:B="model"}={}){let ce=++x,he=await _m(R);if(p||ce!==x){Mi(he);return}i&&!i.disposed?(i.setEnvironment("workshop"),i.replaceContent(he),z?.setEnabled(!1),z?.setRoot(null),i.resetCamera(),se=B,K=`${B}:${R.name}:${ce}`):Mi(he),s.textContent=`\u6A21\u578B\u9884\u89C8 \xB7 ${R.name}`,r.innerHTML=`<strong>${$t(R.name)}</strong> \xB7 \u5916\u89C2\u9884\u89C8 \xB7 \u80FD\u529B\u4ECD\u7531\u90E8\u4EF6\u84DD\u56FE\u51B3\u5B9A`}let $r={async new(){let R=document.querySelector("#tankType").value;v&&await ye(!0),m=uo(R,qr("draft")),g="weapon",b=null,I=[],N=[],v=!0,se=null,te="",de(),J("\u5DF2\u65B0\u5EFA\u84DD\u56FE\uFF0C\u4E4B\u524D\u7684\u4FEE\u6539\u5DF2\u4FDD\u5B58\u4E3A\u8349\u7A3F\u3002")},async save(){await ye(!1),Je()},async load(){let R=document.querySelector("#savedDraft").value;v&&await ye(!0),m=structuredClone(h.blueprints.find(B=>B.id===R)),g=m.parts[0]?.id||null,v=!1,b=null,I=[],N=[],se=null,te="",de(),J("\u5DF2\u8F7D\u5165\u4FDD\u5B58\u7684\u84DD\u56FE\u3002")},async grant(){await l.updateProfile(R=>{R.inspectionGrantClaimed||(R.currency.parts+=100,R.inspectionGrantClaimed=!0)}),await _e(),de(),J("\u5DF2\u9886\u53D6 100 \u6D4B\u8BD5\u96F6\u4EF6\uFF0C\u4EC5\u7528\u4E8E\u65B0\u6A21\u5F0F\u539F\u578B\u68C0\u9A8C\u3002")},addPart(R){return Ee(R.dataset.part)},remove(){ct()},duplicate(){ge()},rotateLeft(){Xe(-15)},rotateRight(){Xe(15)},raise(){it(1,F||.1)},lower(){it(1,-(F||.1))},snap(){F=F===Mt.snapGrid?.25:F===.25?0:Mt.snapGrid,Tt(),J(F?`\u5438\u9644\u7F51\u683C\uFF1A${F} \u7C73`:"\u81EA\u7531\u79FB\u52A8\uFF1A\u4E0D\u5438\u9644\u7F51\u683C\uFF0C\u4ECD\u4F1A\u81EA\u52A8\u8FDE\u63A5\u6700\u8FD1\u90E8\u4EF6\u3002")},undo(){D()},redo(){ie()},primary(){Q(),m.primaryWeaponId=g,v=!0,pe("\u5DF2\u8BBE\u4E3A\u4E3B\u6B66\u5668\u3002")},async manufacture(){await ye(!0);let R=await c.manufacture({blueprintId:m.id,tankId:qr("tank"),modelId:b});await _e(),u="garage",M=R.id,se=null,de(),J("\u5766\u514B\u5236\u9020\u5B8C\u6210\u5E76\u5DF2\u5B58\u5165\u4ED3\u5E93\uFF0C\u53EF\u4EE5\u51C6\u5907\u7B2C\u4E00\u5173\u3002")},async storeModel(){if(!T)throw new Error("\u8BF7\u5148\u9009\u62E9 GLB");await c.models.save({id:qr("model"),name:T.name.replace(/\.glb$/i,""),category:S,blob:T}),T=null,await _e(),ue(),J("\u6A21\u578B\u5DF2\u4FDD\u5B58\u5230\u672C\u673A\u4ED3\u5E93\u3002")},clearModel(){T=null,ue(),xt(m,"workshop",{reset:!0}),J("\u5DF2\u6062\u590D\u90E8\u4EF6\u9884\u89C8\u3002")},openModels(){u="models",se=null,de(),J("\u6A21\u578B\u4ED3\u5E93\uFF1A\u9009\u62E9 GLB \u9884\u89C8\uFF0C\u518D\u6309\u5206\u7C7B\u4FDD\u5B58\u5230\u672C\u673A\u3002")},backWorkshop(){u="workshop",se=null,de(),J("\u5DF2\u8FD4\u56DE\u8F66\u95F4\u3002")},async previewAsset(R){await Kt(R.dataset.id)},inspectTank(R){M=R.dataset.id,se=null,de()},async prepare(R){P=null,y=await c.prepareFirstLevel(R.dataset.id),u="mission",se=null,te="",de(),J("\u7B2C\u4E00\u5173\u5DF2\u51C6\u5907\u3002\u955C\u5934\u53EF\u81EA\u7531\u65CB\u8F6C\uFF0C\u4E0B\u65B9\u53EF\u5BF9\u51C6\u76EE\u6807\u3002")},startTest(){P=null,$()},destroyEnemy(R){me({type:"enemy-destroyed",id:R.dataset.id})},destroyBase(){me({type:"base-destroyed"})},destroyPlayer(){me({type:"player-destroyed"})},async resetTest(){G?.stop(),G=null,V=null,P=null,y=await c.prepareFirstLevel(y.tank.id),de()},goGarage(){G?.stop(),G=null,V=null,u="garage",se=null,te="",de()},camPlayer(){if(G?.state.active)return J("\u6218\u6597\u4E2D\u955C\u5934\u8DDF\u968F\u8F66\u4F53\u3002");ne("player")},camOverview(){if(G?.state.active)return J("\u6218\u6597\u4E2D\u955C\u5934\u8DDF\u968F\u8F66\u4F53\u3002");ne("overview",{duration:1})},camBase(){if(G?.state.active)return J("\u6218\u6597\u4E2D\u955C\u5934\u8DDF\u968F\u8F66\u4F53\u3002");ne("base")},camEnemy(){if(G?.state.active)return J("\u6218\u6597\u4E2D\u955C\u5934\u8DDF\u968F\u8F66\u4F53\u3002");ve()},camEnemyId(R){G?.state.active||ne(R.dataset.id)}},Gs=R=>{for(let B of o)["orbit","auto"].includes(B.dataset.camera)&&B.setAttribute("aria-pressed",String(B.dataset.camera===R))},Uc={orbit(){i?.setAutoRotate(!1),Gs("orbit"),J("\u81EA\u7531\u89C6\u89D2\uFF1A\u5DE6\u952E\u62D6\u52A8\u65CB\u8F6C\uFF0C\u53F3\u952E\u5E73\u79FB\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF1B\u5173\u5361\u5185\u53EF\u7528 W/A/S/D \u5E73\u79FB\u3002")},auto(){i?.setAutoRotate(!0),Gs("auto"),J("\u81EA\u52A8\u73AF\u7ED5\uFF1A\u955C\u5934\u4F1A\u7F13\u6162\u7ED5\u5F53\u524D\u76EE\u6807\u65CB\u8F6C\uFF0C\u518D\u6B21\u70B9\u51FB\u201C\u81EA\u7531\u89C6\u89D2\u201D\u505C\u6B62\u3002")},player(){ne("player")||J("\u51C6\u5907\u7B2C\u4E00\u5173\u540E\u53EF\u7528\u3002")},overview(){ne("overview",{duration:1})||J("\u51C6\u5907\u7B2C\u4E00\u5173\u540E\u53EF\u7528\u3002")},base(){ne("base")||J("\u51C6\u5907\u7B2C\u4E00\u5173\u540E\u53EF\u7528\u3002")},enemy(){ve()}};function Yr(R){f=R;for(let B of[e,document.querySelector(".mode-tabs")])B.inert=R;e.setAttribute("aria-busy",String(R))}async function us(R){if(!(f||p)){Yr(!0);try{await R()}catch(B){J(B.message,!0)}finally{Yr(!1)}}}let ai=R=>{let B=R.target.closest("button");if(!(!B||B.disabled)){if(B.id==="guideNext"){je>=Ye.length-1?X():w(je+1);return}if(B.id==="guideSkip"){X();return}if(B.dataset.camera){let ce=Uc[B.dataset.camera];ce&&us(()=>ce());return}if(B.dataset.tab){us(async()=>{x++,u=B.dataset.tab,se=u==="workshop"?se:null,de(),J({workshop:"\u70B9\u9009 3D \u90E8\u4EF6\uFF0C\u62D6\u52A8\u6446\u4F4D\uFF1B\u677E\u5F00\u540E\u81EA\u52A8\u5438\u9644\u5E76\u91CD\u65B0\u8FDE\u63A5\u3002",models:"\u9009\u62E9 GLB \u9884\u89C8\uFF0C\u518D\u6309\u5206\u7C7B\u4FDD\u5B58\u5230\u672C\u673A\u4ED3\u5E93\u3002",garage:"\u9009\u62E9\u6210\u54C1\u67E5\u770B\u8BC4\u4F30\uFF0C\u6216\u51C6\u5907\u7B2C\u4E00\u5173\u3002",mission:"\u62D6\u52A8\u65CB\u8F6C\u89C6\u89D2\uFF0C\u53EF\u5BF9\u51C6\u73A9\u5BB6\u3001\u654C\u5766\u6216\u57FA\u5730\uFF1B\u624B\u52A8\u4E8B\u4EF6\u53EA\u68C0\u9A8C\u80DC\u8D1F\u89C4\u5219\u3002"}[u])});return}B.dataset.action&&$r[B.dataset.action]&&us(()=>$r[B.dataset.action](B))}},Vs=R=>us(async()=>{let B=R.target;if(B.id==="modelFile"){let he=B.files[0];if(!he)return;T=null;try{await Yn(he),T=he,J("\u5DF2\u52A0\u8F7D\u6A21\u578B\uFF0C\u786E\u8BA4\u5206\u7C7B\u540E\u4FDD\u5B58\u5165\u5E93\u3002")}catch(at){J(`\u5BFC\u5165\u5931\u8D25\uFF1A${at.message}`,!0)}finally{ue()}return}if(B.id==="modelCategory"){S=B.value;return}if(B.id==="modelFilter"){_=B.value,ue();return}if(B.id==="boundModel"){b=B.value||null;return}if(B.id==="selectedPart"){g=B.value,z?.setSelected(g),Je();return}if(B.id==="blueprintName"){m.name=B.value,v=!0,fe(),xe(),Z();return}let ce=m.parts.find(he=>he.id===g);if(ce){if(B.dataset.coordinate!==void 0){let he=B.valueAsNumber;if(!Number.isFinite(he)||Math.abs(he)>Mt.maxExtent)throw Je(),new Error("\u8BF7\u8F93\u5165\u6709\u6548\u5750\u6807\uFF08-30\uFF5E30\uFF09");Q(),ce.position[Number(B.dataset.coordinate)]=he,v=!0,xt(m,"workshop"),nt(),fe(),xe(),Z()}if(B.id==="partYaw"){Q(),ce.yaw=Number(B.value)*Math.PI/180;let he=document.querySelector("#yawOutput");he&&(he.textContent=`${B.value}\xB0`),v=!0,xt(m,"workshop"),nt(),xe(),Z()}B.id==="partParent"&&(Q(),ce.parentId=B.value||null,v=!0,pe("\u5DF2\u4FEE\u6539\u8FDE\u63A5\u5173\u7CFB\u3002"))}}),Kr=R=>{if(R.target.id==="partYaw"){let B=document.querySelector("#yawOutput");B&&(B.textContent=`${R.target.value}\xB0`);let ce=z?.getPart(g);ce&&(ce.rotation.y=Number(R.target.value)*Math.PI/180,z.refresh(),i?.invalidate())}},Zr=R=>{if(u!=="workshop"||f||p||rS(R.target))return;let B=R.ctrlKey||R.metaKey;if(B&&R.code==="KeyZ"){R.preventDefault(),R.shiftKey?ie():D();return}if(B&&R.code==="KeyY"){R.preventDefault(),ie();return}if(B&&R.code==="KeyD"){R.preventDefault(),ge();return}if(R.code==="Delete"||R.code==="Backspace"){R.preventDefault(),ct();return}if(R.code==="KeyQ"){R.preventDefault(),Xe(-15);return}if(R.code==="KeyE"){R.preventDefault(),Xe(15);return}if(R.code.startsWith("Arrow")){R.preventDefault();let ce=R.shiftKey?.5:F||.1;R.code==="ArrowLeft"&&it(0,-ce),R.code==="ArrowRight"&&it(0,ce),R.code==="ArrowUp"&&it(2,ce),R.code==="ArrowDown"&&it(2,-ce);return}R.code==="Escape"&&(g=null,z?.setSelected(null),Je())};try{l=await Xp(),c=Jp(l),await _e(),document.querySelector("#storageStatus").textContent="\u672C\u673A\u5B58\u6863\u5DF2\u8FDE\u63A5";let R=document.querySelector("#docDate");if(R){let B=new Date;R.textContent=`${B.getFullYear()}.${String(B.getMonth()+1).padStart(2,"0")}.${String(B.getDate()).padStart(2,"0")}`}i&&!i.disposed&&(z=ym({runtime:i,getGrid:()=>F,onSelect:B=>{g=B,z.setSelected(B),Je()},onDragMove:()=>{W||(Q(),W=!0)},onDragEnd:(B,ce,he)=>{W=!1,Pe(B,ce,he)},onPreview:(B,ce,he)=>At(B,ce,he),onHover:B=>{let ce=document.querySelector("#controlHint");if(!ce)return;let he=B?m.parts.find(at=>at.id===B):null;ce.innerHTML=he?`\u60AC\u505C\uFF1A<strong>${$t(Ve[he.partId].name)}</strong> \xB7 \u62D6\u52A8\u79FB\u52A8 \xB7 Shift+\u62D6\u52A8\u8C03\u6574\u9AD8\u5EA6<br>\u62D6\u52A8\u4E2D\u6EDA\u8F6E\u65CB\u8F6C 15\xB0\uFF08Shift 5\xB0\uFF09 \xB7 Q/E \u65CB\u8F6C \xB7 Delete \u5220\u9664 \xB7 Ctrl+Z \u64A4\u9500`:"\u62D6\u52A8\u65CB\u8F6C \xB7 \u53F3\u952E\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E<br>\u70B9\u51FB\u90E8\u4EF6\u9009\u4E2D\u5E76\u62D6\u52A8\u6446\u4F4D"}})),document.addEventListener("click",ai),e.addEventListener("change",Vs),e.addEventListener("input",Kr),window.addEventListener("keydown",Zr),de(),Be(),J("\u4ECE\u8F66\u95F4\u5F00\u59CB\uFF1A\u5B89\u88C5\u90E8\u4EF6 \u2192 \u62D6\u52A8\u6446\u4F4D \u2192 \u67E5\u770B\u8BC4\u4F30 \u2192 \u5236\u9020\u5165\u5E93 \u2192 \u7B2C\u4E00\u5173\u5F00\u6218\u3002"),u==="workshop"&&!A()&&!location.search.includes("noguide")&&w(0)}catch(R){l?.close(),document.querySelector("#storageStatus").textContent="\u5B58\u50A8\u4E0D\u53EF\u7528",e.innerHTML="<h2>\u65E0\u6CD5\u6253\u5F00\u672C\u673A\u4ED3\u5E93</h2><p>\u8BF7\u68C0\u67E5\u6D4F\u89C8\u5668\u5B58\u50A8\u6743\u9650\uFF0C\u6216\u901A\u8FC7\u672C\u5730 HTTP \u670D\u52A1\u6253\u5F00\u540E\u5237\u65B0\u91CD\u8BD5\u3002</p>",J(R.message,!0)}return()=>{p=!0,x++,clearTimeout(re),document.removeEventListener("click",ai),e.removeEventListener("change",Vs),e.removeEventListener("input",Kr),window.removeEventListener("keydown",Zr),ze(),z?.dispose(),z=null,l?.close()}}var oS=document.querySelector("#message"),Yt,Am;try{Yt=new Ec(document.querySelector("#viewport"),i=>{document.querySelector("#stats").textContent=`${i.calls} \u6B21\u7ED8\u5236 \xB7 ${i.triangles.toLocaleString()} \u4E09\u89D2\u5F62
CPU \u63D0\u4EA4 ${i.cpuMs.toFixed(1)} ms \xB7 ${i.geometries} \u51E0\u4F55\u4F53 \xB7 ${i.textures} \u8D34\u56FE`},i=>{oS.textContent=i}),document.querySelector("#resetCamera").addEventListener("click",()=>Yt.resetCamera()),document.querySelector("#quality").addEventListener("change",i=>Yt.setQuality(i.target.value))}catch(i){Yt?.dispose(),Yt=null,document.querySelector("#stats").textContent="3D \u4E0D\u53EF\u7528\uFF1A\u8BF7\u5F00\u542F WebGL 2 / \u786C\u4EF6\u52A0\u901F",console.error(i)}window.__steel3d={runtime:Yt,info(){if(!Yt||Yt.disposed)return{available:!1};let i=Yt.renderer.info.render,e=new dn().setFromObject(Yt.content);return{available:!0,environment:Yt.environment,calls:i.calls,triangles:i.triangles,geometries:Yt.renderer.info.memory.geometries,textures:Yt.renderer.info.memory.textures,camera:Yt.camera.position.toArray().map(t=>Number(t.toFixed(2))),target:Yt.controls.target.toArray().map(t=>Number(t.toFixed(2))),contentChildren:Yt.content.children.length,contentBounds:Number.isFinite(e.min.x)?[e.min.toArray().map(t=>Number(t.toFixed(2))),e.max.toArray().map(t=>Number(t.toFixed(2)))]:null,viewport:[Yt.host.clientWidth,Yt.host.clientHeight]}},levelFocus(){let e=Yt?.content.children[0]?.userData?.focus;return e?Object.fromEntries([...e].map(([t,n])=>[t,{position:n.position.toArray(),radius:n.radius,label:n.label}])):null}};Tm(Yt).then(i=>{Am=i});window.addEventListener("pagehide",i=>{i.persisted||(Am?.(),Yt?.dispose())});window.addEventListener("pageshow",()=>Yt?.invalidate());})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
