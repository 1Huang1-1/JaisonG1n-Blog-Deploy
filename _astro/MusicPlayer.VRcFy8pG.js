import"./disclose-version.DwdwGuwu.js";import{$ as g,B as F,D as k,F as z,G as ye,H as De,J as se,L as ze,M as D,N as Ie,O as re,P as n,Q as Ve,R as m,S as Re,T as W,U as He,V as b,W as me,X as ee,Y as te,Z as Be,_ as qe,b as _e,c as H,d as N,f as Fe,g as Ne,j as Y,k as S,m as ke,p as Ae,q as de,r as Ke,t as Z,tt as Xe,u as pe,v as B,y as Pe,z as $}from"./client.tHjtpmvf.js";import{t as I}from"./Icon.B7vJVR5J.js";import{n as J,t as Q}from"./translation.ftzx8QFW.js";import{n as ge}from"./config.-srXNGgF.js";import{t as _}from"./musicPlayerStore.D2gghkXG.js";import{a as ve,c as je,i as We,l as Ue,n as Ye,o as Oe,r as Ge,s as Je,t as Qe}from"./SidebarTrackInfo.Dee4XqIy.js";Be();function Ze(o){const e=o-1;return e*e*e+1}function Ce(o){const e=o-1;return e*e*e+1}function be(o){const e=typeof o=="string"&&o.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[o,"px"]}function ne(o,e,t){return Number.isNaN(e)?"":`${o}: ${t*e}px;`}function $e(o,{delay:e=0,duration:t=400,easing:s=Ce,x:r=0,y:a=0,opacity:v=0}={}){const u=getComputedStyle(o),p=+u.opacity,i=u.transform==="none"?"":u.transform,c=p*(1-v),[f,y]=be(r),[w,C]=be(a);return{delay:e,duration:t,easing:s,css:(l,E)=>`
			transform: ${i} translate(${(1-l)*f}${y}, ${(1-l)*w}${C});
			opacity: ${p-c*E}`}}function et(o,{delay:e=0,duration:t=400,easing:s=Ce,axis:r="y"}={}){const a=getComputedStyle(o),v=+a.opacity,u=r==="y"?"height":"width",p=parseFloat(a[u]),i=r==="y"?["top","bottom"]:["left","right"],c=i.map(h=>`${h[0].toUpperCase()}${h.slice(1)}`),f=parseFloat(a[`padding${c[0]}`]),y=parseFloat(a[`padding${c[1]}`]),w=parseFloat(a[`margin${c[0]}`]),C=parseFloat(a[`margin${c[1]}`]),l=parseFloat(a[`border${c[0]}Width`]),E=parseFloat(a[`border${c[1]}Width`]);return{delay:e,duration:t,easing:s,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*v};`+ne(u,p,h)+ne(`padding-${i[0]}`,f,h)+ne(`padding-${i[1]}`,y,h)+ne(`margin-${i[0]}`,w,h)+ne(`margin-${i[1]}`,C,h)+ne(`border-${i[0]}-width`,l,h)+ne(`border-${i[1]}-width`,E,h)+`min-${u}: 0`}}var tt=S('<div class="fab-music-panel card-base shadow-xl rounded-2xl p-4 w-[20rem] max-w-[80vw] svelte-1lty5dg"><div class="fab-music-header svelte-1lty5dg"><!> <!></div> <!> <!> <!></div>');function nt(o,e){ee(e,!0);let t=ye(De(_.getState())),s=ye(!1);function r(L){const q=L;q.detail&&me(t,q.detail,!0)}_e(()=>{window.addEventListener("music-sidebar:state",r)}),Pe(()=>{typeof window<"u"&&window.removeEventListener("music-sidebar:state",r)});function a(){_.toggle()}function v(){_.prev()}function u(){_.next()}function p(){_.toggleMode()}function i(){me(s,!n(s))}function c(L){_.playIndex(L)}function f(L){_.seek(L)}function y(){_.toggleMute()}function w(L){_.setVolume(L)}var C=tt(),l=m(C),E=m(l);We(E,{get currentSong(){return n(t).currentSong},get isPlaying(){return n(t).isPlaying},get isLoading(){return n(t).isLoading}});var h=b(E,2);Qe(h,{get currentSong(){return n(t).currentSong},get currentTime(){return n(t).currentTime},get duration(){return n(t).duration},get volume(){return n(t).volume},get isMuted(){return n(t).isMuted},onToggleMute:y,onSetVolume:w}),g(l);var V=b(l,2);Ye(V,{get currentTime(){return n(t).currentTime},get duration(){return n(t).duration},onSeek:f});var P=b(V,2);Oe(P,{get isPlaying(){return n(t).isPlaying},get isShuffled(){return n(t).isShuffled},get repeatMode(){return n(t).isRepeating},onToggleMode:p,onPrev:v,onNext:u,onTogglePlay:a,onTogglePlaylist:i});var d=b(P,2);Ge(d,{get playlist(){return n(t).playlist},get currentIndex(){return n(t).currentIndex},get isPlaying(){return n(t).isPlaying},get show(){return n(s)},onClose:i,onPlaySong:c}),g(C),k(o,C),te()}var it=S('<div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div>'),rt=S('<div class="text-xs text-30 mt-1"> </div>'),at=S('<div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <!></div>');function he(o,e){ee(e,!0);const t=Z(e,"showTime",3,!1),s=Z(e,"size",3,"mini");function r(i){return!Number.isFinite(i)||i<0?"0:00":`${Math.floor(i/60)}:${Math.floor(i%60).toString().padStart(2,"0")}`}var a=re(),v=$(a),u=i=>{var c=it(),f=m(c),y=F(f,!0),w=b(f,2),C=F(w,!0);g(c),z(()=>{W(y,e.song.title),W(C,e.song.artist)}),k(i,c)},p=i=>{var c=at(),f=m(c),y=F(f,!0),w=b(f,2),C=F(w,!0),l=b(w,2),E=h=>{var V=rt(),P=F(V);z((d,L)=>W(P,`${d??""} / ${L??""}`),[()=>r(e.currentTime),()=>r(e.duration)]),k(h,V)};B(l,h=>{t()&&h(E)}),g(c),z(()=>{W(y,e.song.title),W(C,e.song.artist)}),k(i,c)};B(v,i=>{s()==="mini"?i(u):i(p,-1)}),k(o,a),te()}var ot=S('<!> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><!></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div>',1),lt=S('<div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div>'),st=S("<!> <!> <!>",1),ut=S("<div><!></div>");function Se(o,e){ee(e,!0);const t=Z(e,"size",3,"mini"),s=Z(e,"showControls",3,!1),r=Z(e,"showPlaylist",3,!1);var a=ut(),v=m(a),u=i=>{var c=ot(),f=$(c);ve(f,{get cover(){return e.song.cover},get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},size:"mini",interactive:!0,get onclick(){return e.onCoverClick}});var y=b(f,2),w=m(y);he(w,{get song(){return e.song},get currentTime(){return e.currentTime},get duration(){return e.duration},size:"mini"}),g(y);var C=b(y,2),l=m(C),E=m(l);I(E,{icon:"material-symbols:visibility-off",class:"text-lg"}),g(l);var h=b(l,2),V=m(h);I(V,{icon:"material-symbols:expand-less",class:"text-lg"}),g(h),g(C),z((P,d)=>{H(y,"aria-label",P),H(l,"title",d)},[()=>Q(J.musicPlayerExpand),()=>Q(J.musicPlayerHide)]),D("click",y,function(...P){e.onInfoClick?.apply(this,P)}),D("keydown",y,P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),e.onInfoClick?.())}),D("click",l,P=>{P.stopPropagation(),e.onHideClick?.()}),D("click",h,P=>{P.stopPropagation(),e.onExpandClick?.()}),k(i,c)},p=i=>{var c=st(),f=$(c);ve(f,{get cover(){return e.song.cover},get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},size:"expanded"});var y=b(f,2);he(y,{get song(){return e.song},get currentTime(){return e.currentTime},get duration(){return e.duration},showTime:!0,size:"expanded"});var w=b(y,2),C=l=>{var E=lt(),h=m(E),V=m(h);I(V,{icon:"material-symbols:visibility-off",class:"text-lg"}),g(h);var P=b(h,2);let d;var L=m(P);I(L,{icon:"material-symbols:queue-music",class:"text-lg"}),g(P),g(E),z((q,ue)=>{H(h,"title",q),d=N(P,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,d,{"text-[var(--primary)]":r()}),H(P,"title",ue)},[()=>Q(J.musicPlayerHide),()=>Q(J.musicPlayerPlaylist)]),D("click",h,function(...q){e.onHideClick?.apply(this,q)}),D("click",P,function(...q){e.onPlaylistClick?.apply(this,q)}),k(l,E)};B(w,l=>{s()&&l(C)}),k(i,c)};B(v,i=>{t()==="mini"?i(u):i(p,-1)}),g(a),z(()=>N(a,1,Fe(t()==="mini"?"flex items-center gap-3 mb-0":"flex items-center gap-4 mb-4"))),k(o,a),te()}Y(["click","keydown"]);var ct=S("<div><!></div>");function dt(o,e){var t=ct();let s;var r=m(t);Se(r,{get song(){return e.song},get currentTime(){return e.currentTime},get duration(){return e.duration},get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},size:"mini",get onCoverClick(){return e.onCoverClick},get onInfoClick(){return e.onInfoClick},get onHideClick(){return e.onHideClick},get onExpandClick(){return e.onExpandClick}}),g(t),z(()=>s=N(t,1,"mini-player card-base shadow-xl rounded-2xl p-3 absolute bottom-0 right-0 w-70 svelte-g9ac72",null,s,{"mini-enter":!e.isHidden,"mini-leave":e.isHidden,"pointer-events-none":e.isHidden})),k(o,t)}var xe=S("<button><!></button>");function we(o,e){const t=Z(e,"repeatMode",3,0),s=Z(e,"disabled",3,!1);var r=re(),a=$(r),v=p=>{var i=xe();let c;var f=m(i);I(f,{icon:"material-symbols:shuffle",class:"text-lg"}),g(i),z(()=>{c=N(i,1,"w-10 h-10 rounded-lg",null,c,{"btn-regular":e.isActive,"btn-plain":!e.isActive}),i.disabled=s()}),D("click",i,function(...y){e.onclick?.apply(this,y)}),k(p,i)},u=p=>{var i=xe();let c;var f=m(i),y=l=>{I(l,{icon:"material-symbols:repeat-one",class:"text-lg"})},w=l=>{I(l,{icon:"material-symbols:repeat",class:"text-lg"})},C=l=>{I(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};B(f,l=>{t()===1?l(y):t()===2?l(w,1):l(C,-1)}),g(i),z(()=>c=N(i,1,"w-10 h-10 rounded-lg",null,c,{"btn-regular":e.isActive,"btn-plain":!e.isActive})),D("click",i,function(...l){e.onclick?.apply(this,l)}),k(p,i)};B(a,p=>{e.mode==="shuffle"?p(v):p(u,-1)}),k(o,r)}Y(["click"]);var gt=S('<div class="controls flex items-center justify-center gap-2 mb-4"><!> <!> <!> <!> <!></div>');function mt(o,e){var t=gt(),s=m(t);we(s,{mode:"shuffle",get isActive(){return e.isShuffled},get onclick(){return e.onShuffleClick}});var r=b(s,2);Je(r,{get onclick(){return e.onPrevClick},disabled:!1});var a=b(r,2);je(a,{get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},get onclick(){return e.onPlayClick}});var v=b(a,2);Ue(v,{get onclick(){return e.onNextClick},disabled:!1});var u=b(v,2);{let p=se(()=>e.isRepeating>0);we(u,{mode:"repeat",get isActive(){return n(p)},get repeatMode(){return e.isRepeating},get onclick(){return e.onRepeatClick}})}g(t),k(o,t)}var vt=S('<div class="progress-bar flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-(--primary) rounded-full transition-all duration-100"></div></div>');function ft(o,e){ee(e,!0);var t=vt(),s=F(t);z(r=>{H(t,"aria-label",r),H(t,"aria-valuenow",e.duration>0?e.currentTime/e.duration*100:0),pe(s,`width: ${e.duration>0?e.currentTime/e.duration*100:0}%`)},[()=>Q(J.musicPlayerProgress)]),D("click",t,function(...r){e.onclick?.apply(this,r)}),D("keydown",t,function(...r){e.onkeydown?.apply(this,r)}),k(o,t),te()}Y(["click","keydown"]);var yt=S('<div class="progress-section mb-4"><!></div>');function bt(o,e){var t=yt(),s=m(t);ft(s,{get currentTime(){return e.currentTime},get duration(){return e.duration},get onclick(){return e.onProgressClick},get onkeydown(){return e.onProgressKeyDown}}),g(t),k(o,t)}var ht=S('<button class="btn-plain w-8 h-8 rounded-lg"><!></button>');function xt(o,e){var t=ht(),s=m(t),r=u=>{I(u,{icon:"material-symbols:volume-off",class:"text-lg"})},a=u=>{I(u,{icon:"material-symbols:volume-down",class:"text-lg"})},v=u=>{I(u,{icon:"material-symbols:volume-up",class:"text-lg"})};B(s,u=>{e.isMuted||e.volume===0?u(r):e.volume<.5?u(a,1):u(v,-1)}),g(t),D("click",t,function(...u){e.onclick?.apply(this,u)}),k(o,t)}Y(["click"]);var wt=S('<div class="flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div>');function _t(o,e){var t=wt(),s=m(t);let r;g(t),Ae(t,a=>e.volumeBarRef?.(a)),z(()=>{H(t,"aria-label",e.ariaLabel),H(t,"aria-valuenow",e.volume*100),r=N(s,1,"h-full bg-(--primary) rounded-full transition-all",null,r,{"duration-100":!e.isVolumeDragging,"duration-0":e.isVolumeDragging}),pe(s,`width: ${e.volume*100}%`)}),D("pointerdown",t,function(...a){e.onpointerdown?.apply(this,a)}),D("keydown",t,function(...a){e.onkeydown?.apply(this,a)}),k(o,t)}Y(["pointerdown","keydown"]);var kt=S('<div class="bottom-controls flex items-center gap-2"><!> <!> <!></div>');function pt(o,e){var t=kt(),s=m(t);xt(s,{get volume(){return e.volume},get isMuted(){return e.isMuted},get onclick(){return e.onVolumeButtonClick}});var r=b(s,2);{let v=se(()=>e.isMuted?0:e.volume);_t(r,{get volume(){return n(v)},get isVolumeDragging(){return e.isVolumeDragging},get volumeBarRef(){return e.volumeBarRef},get onpointerdown(){return e.onSliderPointerDown},get onkeydown(){return e.onSliderKeyDown},get ariaLabel(){return e.ariaLabel}})}var a=b(r,2);Re(a,()=>e.children??Xe),g(t),k(o,t)}var Pt=S('<button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button>'),Ct=S("<div><!> <!> <!> <!></div>");function St(o,e){ee(e,!0);var t=Ct();let s;var r=m(t);Se(r,{get song(){return e.song},get currentTime(){return e.currentTime},get duration(){return e.duration},get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},size:"expanded",showControls:!0,get showPlaylist(){return e.showPlaylist},get onHideClick(){return e.onHideClick},get onPlaylistClick(){return e.onPlaylistClick}});var a=b(r,2);bt(a,{get currentTime(){return e.currentTime},get duration(){return e.duration},get onProgressClick(){return e.onProgressClick},get onProgressKeyDown(){return e.onProgressKeyDown}});var v=b(a,2);mt(v,{get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},get isShuffled(){return e.isShuffled},get isRepeating(){return e.isRepeating},get canSkip(){return e.canSkip},get onPlayClick(){return e.onPlayClick},get onPrevClick(){return e.onPrevClick},get onNextClick(){return e.onNextClick},get onShuffleClick(){return e.onShuffleClick},get onRepeatClick(){return e.onRepeatClick}});var u=b(v,2);{let p=se(()=>Q(J.musicPlayerVolume));pt(u,{get volume(){return e.volume},get isMuted(){return e.isMuted},get isVolumeDragging(){return e.isVolumeDragging},get volumeBarRef(){return e.volumeBarRef},get onVolumeButtonClick(){return e.onVolumeButtonClick},get onSliderPointerDown(){return e.onSliderPointerDown},get onSliderKeyDown(){return e.onSliderKeyDown},get ariaLabel(){return n(p)},children:(i,c)=>{var f=Pt(),y=m(f);I(y,{icon:"material-symbols:expand-more",class:"text-lg"}),g(f),z(w=>H(f,"title",w),[()=>Q(J.musicPlayerCollapse)]),D("click",f,function(...w){e.onCollapseClick?.apply(this,w)}),k(i,f)},$$slots:{default:!0}})}g(t),z(()=>s=N(t,1,"expanded-player card-base shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out absolute bottom-0 right-0 w-80",null,s,{"opacity-0":e.isHidden,"scale-95":e.isHidden,"pointer-events-none":e.isHidden})),k(o,t),te()}Y(["click"]);var Tt=S('<span class="text-sm text-[var(--content-meta)]"> </span>'),Mt=S('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img decoding="async" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>');function Et(o,e){ee(e,!0);const t=Z(e,"lazy",3,!0);function s(d){return d.startsWith("http://")||d.startsWith("https://")||d.startsWith("/")?d:`/${d}`}var r=Mt();let a;var v=m(r),u=m(v),p=d=>{I(d,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},i=d=>{I(d,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},c=d=>{var L=Tt(),q=F(L,!0);z(()=>W(q,e.index+1)),k(d,L)};B(u,d=>{e.isCurrent&&e.isPlaying?d(p):e.isCurrent?d(i,1):d(c,-1)}),g(v);var f=b(v,2),y=F(f),w=b(f,2),C=m(w);let l;var E=F(C,!0),h=b(C,2);let V;var P=F(h,!0);g(w),g(r),z(d=>{a=N(r,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,a,{"bg-[var(--btn-plain-bg)]":e.isCurrent,"text-[var(--primary)]":e.isCurrent}),H(r,"aria-label",`播放 ${e.song.title??""} - ${e.song.artist??""}`),H(y,"src",d),H(y,"alt",e.song.title),H(y,"loading",t()?"lazy":"eager"),l=N(C,1,"font-medium truncate",null,l,{"text-[var(--primary)]":e.isCurrent,"text-90":!e.isCurrent}),W(E,e.song.title),V=N(h,1,"text-sm text-[var(--content-meta)] truncate",null,V,{"text-[var(--primary)]":e.isCurrent}),W(P,e.song.artist)},[()=>s(e.song.cover)]),D("click",r,function(...d){e.onclick?.apply(this,d)}),D("keydown",r,d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),e.onclick())}),k(o,r),te()}Y(["click","keydown"]);var Lt=S('<div class="playlist-panel card-base-transparent fixed bottom-70 right-4 w-80 max-h-96 overflow-hidden z-50 svelte-1v267om"><div class="playlist-header flex items-center justify-between p-4 border-b border-(--line-divider)"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar" role="presentation"></div></div>');function Dt(o,e){ee(e,!0);var t=re(),s=$(t),r=a=>{var v=Lt(),u=m(v),p=m(u),i=F(p,!0),c=b(p,2),f=m(c);I(f,{icon:"material-symbols:close",class:"text-lg"}),g(c),g(u);var y=b(u,2);Ne(y,21,()=>e.playlist,qe,(w,C,l)=>{{let E=se(()=>l===e.currentIndex);Et(w,{get song(){return n(C)},index:l,get isCurrent(){return n(E)},get isPlaying(){return e.isPlaying},onclick:()=>e.onPlaySong(l),lazy:l!==0})}}),g(y),g(v),z(w=>W(i,w),[()=>Q(J.musicPlayerPlaylist)]),D("click",c,function(...w){e.onClose?.apply(this,w)}),ke(3,v,()=>et,()=>({duration:300,axis:"y"})),k(a,v)};B(s,a=>{e.show&&a(r)}),k(o,t),te()}Y(["click"]);var zt=S('<div class="fixed bottom-20 right-4 z-60 max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),It=S('<div class="music-player-fab-anchor fixed z-55"><div class="music-player-fab-shell"><!></div></div>'),Vt=S("<div><div><!></div> <!> <!> <!></div>"),Rt=S(`<!> <!> <style>.music-player-fab-anchor {
			right: var(--fab-group-right, 1.5rem);
			bottom: calc(
				var(--fab-group-bottom, 10rem) +
					(
						var(--fab-button-size, 3rem) *
							var(--fab-visible-count, 1)
					) +
					(
						var(--fab-group-gap, 0.5rem) *
							(var(--fab-visible-count, 1) - 1)
					)
			);
			width: 0;
			height: 0;
			pointer-events: none;
		}

		.music-player-fab-shell {
			position: absolute;
			right: 0;
			bottom: 0.75rem;
			transform-origin: bottom right;
			pointer-events: auto;
			will-change: transform, opacity;
		}

		.orb-player-container {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		.orb-enter {
			animation: orbElasticIn 460ms cubic-bezier(0.22, 1.25, 0.36, 1)
				forwards;
		}

		.orb-leave {
			animation: orbElasticOut 360ms cubic-bezier(0.4, 0, 1, 1) forwards;
		}

		@keyframes orbElasticIn {
			0% {
				opacity: 0;
				transform: translateX(0) scale(0.55);
			}
			70% {
				opacity: 1;
				transform: translateX(0) scale(1.12);
			}
			100% {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
		}

		@keyframes orbElasticOut {
			0% {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
			100% {
				opacity: 0;
				transform: translateX(0) scale(0.6);
			}
		}

		.music-player.hidden-mode {
			width: 3rem;
			height: 3rem;
		}

		.music-player {
			width: 20rem;
			max-width: 20rem;
			min-width: 20rem;
			user-select: none;
		}

		:global(.mini-player) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		:global(.expanded-player) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		:global(.orb-player) {
			position: relative;
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
		}

		:global(.orb-player::before) {
			content: "";
			position: absolute;
			inset: -0.125rem;
			background: linear-gradient(
				45deg,
				var(--primary),
				transparent,
				var(--primary)
			);
			border-radius: 50%;
			z-index: -1;
			opacity: 0;
			transition: opacity 0.3s ease;
		}

		:global(.orb-player:hover::before) {
			opacity: 0.3;
			animation: rotate 2s linear infinite;
		}

		:global(.orb-player .animate-pulse) {
			animation: musicWave 1.5s ease-in-out infinite;
		}

		@keyframes rotate {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		@keyframes musicWave {
			0%,
			100% {
				transform: scaleY(0.5);
			}
			50% {
				transform: scaleY(1);
			}
		}

		:global(.animate-pulse) {
			animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		}

		@keyframes pulse {
			0%,
			100% {
				opacity: 1;
			}
			50% {
				opacity: 0.5;
			}
		}

		:global(.progress-section div:hover),
		:global(.bottom-controls > div:hover) {
			transform: scaleY(1.2);
			transition: transform 0.2s ease;
		}

		@media (width < 768px) {
			.music-player-fab-anchor {
				right: var(--fab-group-right, 0.75rem) !important;
				bottom: calc(
					var(--fab-group-bottom, 5rem) +
						(
							var(--fab-button-size, 2.75rem) *
								var(--fab-visible-count, 1)
						) +
						(
							var(--fab-group-gap, 0.5rem) *
								(var(--fab-visible-count, 1) - 1)
						)
				) !important;
			}

			.music-player-fab-shell {
				right: 0 !important;
				bottom: 0.75rem !important;
			}

			.music-player {
				width: 280px !important;
				min-width: 280px !important;
				max-width: 280px !important;
				bottom: 0.5rem !important;
				right: 0.5rem !important;
			}
			:global(.mini-player) {
				width: 280px !important;
			}
			:global(.expanded-player) {
				width: 280px !important;
				max-width: 280px !important;
			}
			.music-player.expanded {
				width: 280px !important;
				min-width: 280px !important;
				max-width: 280px !important;
				right: 0.5rem !important;
			}
			:global(.playlist-panel) {
				width: 280px !important;
				right: 0.5rem !important;
				max-width: 280px !important;
			}
			:global(.controls) {
				gap: 8px;
			}
			:global(.controls button) {
				width: 36px;
				height: 36px;
			}
			:global(.controls button:nth-child(3)) {
				width: 44px;
				height: 44px;
			}
		}

		@media (width < 480px) {
			.music-player-fab-anchor {
				right: var(--fab-group-right, 0.5rem) !important;
				bottom: calc(
					var(--fab-group-bottom, 4.5rem) +
						(
							var(--fab-button-size, 2.5rem) *
								var(--fab-visible-count, 1)
						) +
						(
							var(--fab-group-gap, 0.5rem) *
								(var(--fab-visible-count, 1) - 1)
						)
				) !important;
			}

			.music-player-fab-shell {
				right: 0 !important;
				bottom: 0.75rem !important;
			}

			.music-player {
				width: 260px !important;
				min-width: 260px !important;
				max-width: 260px !important;
			}
			:global(.expanded-player) {
				width: 260px !important;
				max-width: 260px !important;
			}
			:global(.playlist-panel) {
				width: 260px !important;
				max-width: 260px !important;
				right: 0.5rem !important;
			}
			:global(.song-title) {
				font-size: 14px;
			}
			:global(.song-artist) {
				font-size: 12px;
			}
			:global(.controls) {
				gap: 6px;
				margin-bottom: 12px;
			}
			:global(.controls button) {
				width: 32px;
				height: 32px;
			}
			:global(.controls button:nth-child(3)) {
				width: 40px;
				height: 40px;
			}
			:global(.playlist-item) {
				padding: 8px 12px;
			}
			:global(.playlist-item .w-10) {
				width: 32px;
				height: 32px;
			}
		}

		@keyframes slide-up {
			from {
				transform: translateY(100%);
				opacity: 0;
			}
			to {
				transform: translateY(0);
				opacity: 1;
			}
		}

		.animate-slide-up {
			animation: slide-up 0.3s ease-out;
		}

		@media (hover: none) and (pointer: coarse) {
			:global(.music-player button),
			:global(.playlist-item) {
				min-height: 44px;
			}
			:global(.progress-section > div),
			:global(.bottom-controls > div:nth-child(2)) {
				height: 12px;
			}
		}

		@keyframes spin-continuous {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		:global(.cover-container img) {
			animation: spin-continuous 3s linear infinite;
			animation-play-state: paused;
		}

		:global(.cover-container img.spinning) {
			animation-play-state: running;
		}

		:global(button.bg-\\\\[var\\\\(--primary\\\\)\\\\]) {
			box-shadow: 0 0 0 2px var(--primary);
			border: none;
		}</style>`,1);function jt(o,e){ee(e,!1);let t=He(_.getState());const s=ge.showFloatingPlayer,r=(ge.floatingEntryMode??"default")==="fab",a=s&&ge.enable;let v;function u(){_.toggle()}function p(){_.prev()}function i(){_.next()}function c(){_.toggleShuffle()}function f(){_.toggleRepeat()}function y(x){_.playIndex(x)}function w(x){const T=x.currentTarget;if(!T)return;const U=T.getBoundingClientRect(),X=(x.clientX-U.left)/U.width;_.setProgress(X)}function C(x){(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),_.setProgress(.5))}function l(){_.toggleMute()}function E(){_.toggleMute()}function h(x){const T=x.currentTarget;if(!T)return;const U=M=>{const A=T.getBoundingClientRect();if(A.width<=0)return;const K=Math.max(0,Math.min(1,(M-A.left)/A.width));_.setVolume(K)};U(x.clientX);const X=x.pointerId;T.setPointerCapture(X);const ae=M=>{M.pointerId===X&&U(M.clientX)},oe=()=>{T.removeEventListener("pointermove",ae),T.removeEventListener("pointerup",le),T.removeEventListener("pointercancel",R),T.hasPointerCapture(X)&&T.releasePointerCapture(X)},le=M=>{M.pointerId===X&&(U(M.clientX),oe())},R=M=>{M.pointerId===X&&oe()};T.addEventListener("pointermove",ae),T.addEventListener("pointerup",le),T.addEventListener("pointercancel",R)}function V(x){const T=x.target;if(!(T?.tagName==="INPUT"||T?.tagName==="TEXTAREA"||T?.contentEditable==="true")){if(x.key==="ArrowLeft"||x.key==="ArrowDown"){x.preventDefault(),_.setVolume(n(t).volume-.05);return}if(x.key==="ArrowRight"||x.key==="ArrowUp"){x.preventDefault(),_.setVolume(n(t).volume+.05);return}(x.key==="Enter"||x.key===" "||x.key==="m"||x.key==="M")&&(x.preventDefault(),l())}}function P(){_.togglePlaylist()}function d(){_.toggleExpanded()}function L(){_.toggleHidden()}function q(){_.hideError()}function ue(x){}function Te(){return _.canSkip()}_e(()=>{v=_.subscribe(x=>{me(t,x)}),_.initialize()}),Pe(()=>{v&&v(),_.destroy()}),Ke();var fe=re();Ie("keydown",ze,V);var Me=$(fe),Ee=x=>{var T=Rt(),U=$(T),X=R=>{var M=zt(),A=m(M),K=m(A);I(K,{icon:"material-symbols:error",class:"text-xl shrink-0"});var O=b(K,2),G=F(O,!0),j=b(O,2),ie=m(j);I(ie,{icon:"material-symbols:close",class:"text-lg"}),g(j),g(A),g(M),z(()=>W(G,n(t).errorMessage)),D("click",j,q),k(R,M)};B(U,R=>{n(t).showError&&R(X)});var ae=b(U,2),oe=R=>{var M=re(),A=$(M),K=O=>{var G=It(),j=m(G),ie=m(j);nt(ie,{}),g(j),g(G),ke(3,j,()=>$e,()=>({y:16,duration:280,opacity:.12,easing:Ze})),k(O,G)};B(A,O=>{n(t).isExpanded&&O(K)}),k(R,M)},le=R=>{var M=Vt();let A;var K=m(M),O=m(K);ve(O,{get cover(){return n(t).currentSong.cover},get isPlaying(){return n(t).isPlaying},get isLoading(){return n(t).isLoading},size:"orb",onclick:L}),g(K);var G=b(K,2);{let ce=de(()=>n(t).isExpanded||n(t).isHidden);dt(G,{get song(){return n(t).currentSong},get currentTime(){return n(t).currentTime},get duration(){return n(t).duration},get isPlaying(){return n(t).isPlaying},get isLoading(){return n(t).isLoading},get isHidden(){return n(ce)},onCoverClick:u,onInfoClick:d,onHideClick:L,onExpandClick:d})}var j=b(G,2);{let ce=de(Te),Le=de(()=>!n(t).isExpanded);St(j,{get song(){return n(t).currentSong},get currentTime(){return n(t).currentTime},get duration(){return n(t).duration},get isPlaying(){return n(t).isPlaying},get isLoading(){return n(t).isLoading},get isShuffled(){return n(t).isShuffled},get isRepeating(){return n(t).isRepeating},get showPlaylist(){return n(t).showPlaylist},get canSkip(){return n(ce)},get volume(){return n(t).volume},get isMuted(){return n(t).isMuted},isVolumeDragging:!1,get isHidden(){return n(Le)},volumeBarRef:ue,onPlayClick:u,onPrevClick:p,onNextClick:()=>i(),onShuffleClick:c,onRepeatClick:f,onProgressClick:w,onProgressKeyDown:C,onVolumeButtonClick:E,onSliderPointerDown:h,onSliderKeyDown:V,onHideClick:L,onPlaylistClick:P,onCollapseClick:d})}var ie=b(j,2);Dt(ie,{get playlist(){return n(t).playlist},get currentIndex(){return n(t).currentIndex},get isPlaying(){return n(t).isPlaying},get show(){return n(t).showPlaylist},onClose:P,onPlaySong:y}),g(M),z(()=>{A=N(M,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,A,{expanded:n(t).isExpanded,"hidden-mode":n(t).isHidden}),N(K,1,`orb-player-container ${n(t).isHidden?"orb-enter pointer-events-auto":"orb-leave pointer-events-none"}`)}),k(R,M)};B(ae,R=>{r?R(oe):R(le,-1)}),Ve(2),k(x,T)};B(Me,x=>{a&&x(Ee)}),k(o,fe),te()}Y(["click"]);export{jt as default};
