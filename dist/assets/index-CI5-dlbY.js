(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const g of o)if(g.type==="childList")for(const s of g.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const g={};return o.integrity&&(g.integrity=o.integrity),o.referrerPolicy&&(g.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?g.credentials="include":o.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(o){if(o.ep)return;o.ep=!0;const g=e(o);fetch(o.href,g)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(t,a,e=[])=>{const c=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(a).forEach(o=>{c.setAttribute(o,String(a[o]))}),e.length&&e.forEach(o=>{const g=$(...o);c.appendChild(g)}),c};var V=([t,a,e])=>$(t,a,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t=>Array.from(t.attributes).reduce((a,e)=>(a[e.name]=e.value,a),{}),H=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",D=t=>t.flatMap(H).map(e=>e.trim()).filter(Boolean).filter((e,c,o)=>o.indexOf(e)===c).join(" "),R=t=>t.replace(/(\w)(\w*)(_|-|\s*)/g,(a,e,c)=>e.toUpperCase()+c.toLowerCase()),M=(t,{nameAttr:a,icons:e,attrs:c})=>{var C;const o=t.getAttribute(a);if(o==null)return;const g=R(o),s=e[g];if(!s)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const l=N(t),[u,p,I]=s,b={...p,"data-lucide":o,...c,...l},S=D(["lucide",`lucide-${o}`,l,c]);S&&Object.assign(b,{class:S});const O=V([u,b,I]);return(C=t.parentNode)==null?void 0:C.replaceChild(O,t)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=["svg",i,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=["svg",i,[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=["svg",i,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=["svg",i,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=["svg",i,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=["svg",i,[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=["svg",i,[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"}],["path",{d:"M16 8 2 22"}],["path",{d:"M17.5 15H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=["svg",i,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=["svg",i,[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=["svg",i,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=["svg",i,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=["svg",i,[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=["svg",i,[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=["svg",i,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=["svg",i,[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=["svg",i,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=["svg",i,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=["svg",i,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=["svg",i,[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=({icons:t={},nameAttr:a="data-lucide",attrs:e={}}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const c=document.querySelectorAll(`[${a}]`);if(Array.from(c).forEach(o=>M(o,{nameAttr:a,icons:t,attrs:e})),a==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(g=>M(g,{nameAttr:"icon-name",icons:t,attrs:e})))}},ct=[{tag:"精神状态",text:`OwO 不是 wink
哦，是被生活揍得眼睛睁不开了 ᵕ—ᴗ—`},{tag:"近期碎片",text:`冒个泡 🫧 𓂃𓈒𓏸
惬意的最近，很 Nice 🍃˖⁺`},{tag:"拍照",text:`Kaca 🖼️⁺9 · 📱
——三、剪刀手 ✌︎ 看镜头 📸`},{tag:"随手发",text:`⛅ 今日状态：随便拍，随便发
快乐不必有参考答案 ૮ ˶ᵔ ᵕ ᵔ˶ ა`},{tag:"周末",text:`📍周末出逃计划
不赶时间，只赶快乐 𓂃🚲`},{tag:"生活",text:`𝙈𝙤𝙢𝙚𝙣𝙩𝙨 𓂃𓈒𓏸
把普通的日子，过得浪漫一点 ◡̈`},{tag:"早午餐",text:`Brunch time ☕️🍞
睡到自然醒，再认真吃一顿`},{tag:"黄昏",text:`落日是免费的橘子汽水 ◌
今天也有被天空好好安慰`},{tag:"朋友",text:`👭 碰头成功 𓂃 ࣪˖
见面就是快乐的快捷键`},{tag:"散步",text:`晚风散步小分队 ༄
走慢一点，月亮不会催我们`},{tag:"咖啡",text:`今日续命液：☕️
苦一点没关系，清醒就很浪漫`},{tag:"雨天",text:`窗外在下雨 𓂃☂︎
屋里适合发呆和听旧歌`},{tag:"晴天",text:`太阳准时来打卡啦 ☀︎
本人也勉强开始营业`},{tag:"海边",text:`去看海的那天 𓆝 𓆟
风很大，烦恼没站稳`},{tag:"山野",text:`山里信号不好 ⛰︎
刚好收不到生活的催促`},{tag:"出发",text:`✈︎ 下一站，未知但期待
行李很轻，心情很满`},{tag:"车窗",text:`窗外正在播放公路电影 🚞
而我是今天唯一的观众`},{tag:"宅家",text:`Home mode 已开启 ⌂
门外世界很大，沙发也不小`},{tag:"下厨",text:`厨房实验今日开机 🍳
卖相随缘，香味负责挽尊`},{tag:"深夜",text:`夜猫子频道 𝙤𝙣 𓅯
白天没想通的，晚上继续不想`},{tag:"运动",text:`运动记录 +1 🏃
先不管效果，态度已经很累了`},{tag:"Citywalk",text:`Citywalk 随机路线 📍
拐进陌生小巷，捡到一点新鲜`},{tag:"看展",text:`在展览里安静半天 🖼️
艺术没看懂，心倒是慢下来了`},{tag:"现场",text:`Live night 🎧⋆｡
这一晚的心跳有专属节拍`},{tag:"花",text:`今日份花花送达 𓆸
生活偶尔也会偷偷撒糖`},{tag:"春日",text:`春天正在输入中… 🌱
风一软，心情也跟着解冻`},{tag:"夏日",text:`夏日加载到 99% 🧊
剩下 1% 留给冰西瓜`},{tag:"秋天",text:`秋日来信已签收 🍂
内容是：天凉，记得快乐`},{tag:"冬天",text:`冬日保暖计划 ❄︎
围巾、热饮，还有一点好心情`},{tag:"周一",text:`Monday 身体已到岗
灵魂还在周末排队返程`},{tag:"周五",text:`Friday 进度条满格 ████
下班以后，世界恢复彩色`},{tag:"新发型",text:`头发剪短，烦恼没剪完 ✂︎
但镜子里的我确实新鲜了一点`},{tag:"穿搭",text:`今日穿搭存档 ◻︎
普通衣服，被心情穿得很好看`},{tag:"自拍",text:`前置摄像头突击检查 📷
状态一般，但可爱超标`},{tag:"阅读",text:`阅读进度：慢慢翻页 📖
在别人的故事里，休息一会儿`},{tag:"电影",text:`电影散场，情绪未散场 🎞️
字幕结束了，故事还在心里走`},{tag:"甜品",text:`甜品负责今日售后 🍰
生活有点苦，奶油表示不服`},{tag:"火锅",text:`咕嘟咕嘟开会中 🍲
议题只有一个：下一盘下什么`},{tag:"小确幸",text:`捕捉到微小好运 ✦
没有大事发生，也值得庆祝`},{tag:"生日",text:`新一岁按下开始键 🎂
继续自由、真诚，也继续可爱`},{tag:"重逢",text:`好久不见，见面依然话多
时间走了很远，我们没有走散`},{tag:"独处",text:`一个人的松弛时刻 𓂃
不必热闹，也能把自己照顾好`},{tag:"天台",text:`去天台吹了一会儿风 ༄
城市很吵，天空什么也没说`},{tag:"自驾",text:`Road trip 正在发生 🚗
导航负责方向，我们负责跑偏`},{tag:"睡觉",text:`晚安申请已提交 ᶻ 𝗓 𐰁
明天的事情交给明天的我`},{tag:"情绪",text:`心情偶尔有点皱巴巴
晒晒太阳，很快又会蓬松起来`},{tag:"照片墙",text:`相册随机掉落 𓂃📎
没有主题，都是舍不得删的日子`},{tag:"下班",text:`下班后的空气比较甜 ◡̈
步子轻了，耳机里的歌也好听了`},{tag:"无主题",text:`没什么特别的标题
只是这一刻，突然很想记录`},{tag:"月末",text:`本月碎片打包完毕 📦
有点忙乱，也有很多值得`}],rt=[{tag:"深夜",text:"后来我才明白，真正让人难过的不是那场告别，而是告别以后，我遇见了很多相似的黄昏，却再也没有一个人可以分享。"},{tag:"遗憾",text:"我们差一点就走到很远的地方了。差的不是爱，是那些没有说出口的话、没有低下去的头，和以为还有明天的那一点倔强。"},{tag:"沉默",text:"我不是突然不说话了，只是终于发现，我解释过的委屈你没有听见，我没解释的沉默你也从来没有读懂。"},{tag:"错过",text:"那年我以为来日方长，所以没有好好拥抱，也没有认真告别。后来才知道，有些人的最后一面，和平常的每一面没有任何区别。"},{tag:"失去",text:"失去你以后，我没有想象中那样崩溃。只是买到好吃的会停一下，走到熟悉的路口会慢一点，然后若无其事地继续生活。"},{tag:"旧事",text:"时间没有替我忘记什么，它只是教会我在想起你的时候，不再让任何人看出那一瞬间的失神。"},{tag:"告别",text:"你走的那天很普通，天没有下雨，风也不大。可后来每一个阴天，我都觉得那场没来得及下的雨，终于落在了我身上。"},{tag:"清醒",text:"我当然知道你没有那么好。可感情最无能为力的地方就在这里：道理替我看清了你，心却不肯放过从前。"},{tag:"无果",text:"我认真设想过我们的以后，连争吵和和好都想得很具体。只是故事还没开始往后写，你就先把我从未来里删掉了。"},{tag:"想念",text:"想念最难熬的时候，不是夜深人静，而是我在人群里忽然听见一句像你会说的话，下意识回头，却只看见陌生人的背影。"},{tag:"释怀",text:"我说已经放下了，不是假话。只是放下不等于忘记，而是终于可以带着那段回忆往前走，不再期待你从身后叫住我。"},{tag:"被替代",text:"最难过的不是你身边有了别人，而是那些我以为只属于我们的称呼、习惯和温柔，原来换一个人也可以照常发生。"},{tag:"独角戏",text:"我把你的每一次回应都当成例外，后来才发现，那只是你的礼貌，而我用这点礼貌，独自完成了一整场盛大的喜欢。"},{tag:"回忆",text:"相册舍不得删，聊天记录也没有勇气翻。它们像一间停电很久的房子，我知道里面有什么，却不敢再推开门。"},{tag:"疲惫",text:"我不是不爱了，我只是太累了。一次次把碎掉的信任拼回去，手上全是伤口，你却还问我为什么握不紧你。"},{tag:"失望",text:"失望从来不是一瞬间发生的。是我一次次替你找理由，又一次次在凌晨把那些理由推翻，最后连眼泪都觉得重复。"},{tag:"重逢",text:"我也想过重逢时要说什么。可真的看见你以后，那些准备了很久的话全都散了，只剩一句很轻的：原来你也会变老。"},{tag:"陌生",text:"我们曾经熟悉到只听呼吸就知道彼此的情绪，后来却礼貌得像刚认识，连一句最近好吗，都怕问得太深。"},{tag:"未发送",text:"输入框里的那句话改了很多遍，最后还是全部删掉。不是没有话说，是忽然不知道，我还应该以什么身份关心你。"},{tag:"后来",text:"后来我过得也不错，认识了新的人，看了新的风景。只是偶尔还是会想，如果那时的我们都再勇敢一点，会不会不是现在这样。"},{tag:"长大",text:"长大以后才发现，有些委屈没有人替你撑腰，有些告别没有正式仪式，有些人说了再见，就真的再也见不到了。"},{tag:"雨夜",text:"雨落在窗上的声音很像那晚。你说以后别联系了，我握着手机坐到天亮，竟然还在担心你回去有没有淋湿。"},{tag:"生日",text:"今年生日没有等到你的祝福。零点过去很久，我才承认，原来那个记得我所有小事的人，真的已经不在我的生活里了。"},{tag:"梦里",text:"梦里的你还是从前的样子，会回头，会等我，会笑着问我怎么走得这么慢。醒来以后房间很安静，我才知道你已经走了很多年。"},{tag:"亏欠",text:"我一直以为是你亏欠了我，后来反复想起才发现，我们都在最不懂爱的时候，用自以为正确的方式伤害了最想留下的人。"},{tag:"不甘",text:"我不甘心的不是分开，是我们明明那么认真地相爱过，最后却只能用一句不合适，轻轻盖住所有拼命靠近的日子。"},{tag:"单向",text:"你偶尔给一点温柔，我就舍不得离开。像在漫长冬天里守着一盏快熄灭的灯，明知道不会天亮，还是不肯松手。"},{tag:"离场",text:"我没有闹，也没有问你为什么。只是安静地退出你的生活，把所有舍不得都收好，像一个终于知道自己不该久留的客人。"},{tag:"习惯",text:"最难戒掉的不是你，是那些和你有关的习惯。走哪条路，买什么口味，睡前说什么话，生活处处都是你留下的肌肉记忆。"},{tag:"身份",text:"我们什么都做过，什么都说过，最后却没有一个合适的身份可以留下。朋友太浅，爱人太远，陌生人又太可惜。"},{tag:"晚风",text:"那晚的风很温柔，你说的话却很冷。我站在原地看你越走越远，第一次觉得，原来夏天也可以这么漫长。"},{tag:"旧歌",text:"不敢再听那首歌，不是因为歌词多伤感，而是前奏一响，我就会回到你还爱我的那几分钟里。"},{tag:"体面",text:"我努力把告别做得体面，没有挽留，没有失态。只是转过身以后走了很久，才发现自己一直没有呼吸。"},{tag:"年月",text:"这些年我终于学会不再提起你，可每当有人问我有没有真心爱过谁，我还是会在沉默里重新经过那段年月。"},{tag:"退路",text:"我把所有退路都留给了你，以为只要我足够理解，你总会回头。后来你真的走远了，我才发现自己无路可退。"},{tag:"冬天",text:"你离开后的第一个冬天，我换了新的围巾，去了新的城市。只有手还是习惯性地伸向旁边，像在等一个不会再牵住我的人。"},{tag:"答案",text:"我追问了很久，为什么不爱了，为什么偏偏是我。后来终于没有答案也能睡着，只是心里那块地方，再也没有恢复原样。"},{tag:"克制",text:"我忍住了联系你，忍住了去看你的近况，也忍住了在共同朋友面前提起你。可我没有忍住，在每个相似的人身上找你。"},{tag:"空位",text:"生活好像已经回到正轨，工作、吃饭、睡觉，一切都很正常。只是心里始终有一个空位，没有人坐，也舍不得撤掉。"},{tag:"车站",text:"车开走以后，我隔着玻璃看你越来越小。那时我不知道，缩成一个点的不只是你的身影，还有我们再见面的可能。"},{tag:"聊天记录",text:"最后一条消息停在“早点睡”。后来我们都睡过无数个夜晚，却再也没有人问对方，今天过得好不好。"},{tag:"如果",text:"如果当时我没有赌气，如果你愿意多解释一句，如果我们都没有把沉默当成答案。可惜人生最擅长的，就是不给如果第二次机会。"},{tag:"落差",text:"你曾经把我捧得很高，所以后来那一点点冷淡，都像从很高的地方掉下来。我不是怕疼，只是没想到推我的人会是你。"},{tag:"归还",text:"我把你的东西都还了，钥匙、外套、那本没看完的书。只有那些被你改变的习惯，不知道应该寄到哪里。"},{tag:"等候",text:"我等过你的消息，等过你的解释，也等过你忽然想明白。等到最后，唯一等来的，是自己终于不想等了。"},{tag:"偏爱",text:"最让我怀念的不是你对我有多好，是那段时间里，我真的相信自己会被坚定地选择，会成为谁无可替代的偏爱。"},{tag:"散场",text:"故事散场以后，我一个人把沿途的回忆捡了很久。捡到最后才发现，原来只有我还把它们当作故事。"},{tag:"未完成",text:"我们还有那么多没去的地方，没兑现的约定，没说完的话。可感情停止的时候，从来不会等一切都刚好完成。"},{tag:"祝福",text:"我是真的希望你以后幸福，也是真的希望那份幸福里原本应该有我。这两句话并不矛盾，只是放在一起特别难过。"},{tag:"余生",text:"你只陪我走了很短的一段路，却让我在往后很长的日子里，都要重新学习怎么不带着你生活。"}],gt=[{tag:"精神状态",text:"我的精神状态非常稳定，稳定地在正常、发疯和假装正常之间每秒切换八百次。"},{tag:"人生规划",text:"人生规划已经做好了：有钱以后躺平，没钱继续躺着想办法有钱。整个计划形成闭环，非常成熟。"},{tag:"睡眠研究",text:"专家建议每天睡够八小时，我认真算了一下，决定上班睡四小时，下班再补四小时，科学战胜职场。"},{tag:"自律",text:"我这个人特别自律，说不吃夜宵就不吃夜宵，说从明天开始就一定从明天开始，今天绝不擅自开始。"},{tag:"情绪管理",text:"以前遇到事情会崩溃，现在成熟了，遇到事情先说没事，然后找一个没有人的地方进行高清崩溃。"},{tag:"逻辑",text:"只要我没有道德，别人就无法道德绑架我；只要我没有期待，生活就只能算随机攻击。"},{tag:"经济状况",text:"银行卡和我关系很纯粹，它负责卡，我负责贫。我们互不打扰，余额偶尔出来提醒我尊重现实。"},{tag:"起床",text:"闹钟响的时候，我的大脑已经醒了，身体也醒了，只有我本人还没同意参加今天。"},{tag:"社交",text:"我不是社恐，我只是对人类这个大型连续剧暂时失去追更兴趣。"},{tag:"减肥",text:"减肥最大的进展，是我已经从“吃完再减”升级成“边吃边思考怎么减”，思想明显变瘦。"},{tag:"天赋",text:"我有一个隐藏天赋：任何事情只要交给我，我都能立刻发现自己还有别的事情没做。"},{tag:"发呆",text:"刚才发呆不是浪费时间，我在给大脑安装更新。虽然最后显示更新失败，但过程很有科技感。"},{tag:"礼貌",text:"我对生活一直很有礼貌，它打我一巴掌，我立刻把另一边脸转过去，不是让它打，是看看谁在偷拍。"},{tag:"拖延",text:"拖延症不是懒，是我对未来的自己有充分信任。我相信他能力很强，什么烂摊子都能收。"},{tag:"愿望",text:"我的愿望很简单：希望钱能像烦恼一样不请自来，希望烦恼能像工资一样月底才出现。"},{tag:"记忆力",text:"记忆力越来越差，但好处是每次翻冰箱都像开盲盒，每次看余额都像第一次受伤。"},{tag:"成熟",text:"成熟就是以前偷偷哭，现在先确认防水做得怎么样，毕竟情绪可以失控，装修不能。"},{tag:"命运",text:"命运掐住我的喉咙，我顺势给它做了个颈部按摩。气氛突然变得专业，命运不知道下一步该怎么办。"},{tag:"学习",text:"知识进入脑子的速度很慢，离开的速度却很快。可能我的大脑是景区，只允许短暂停留。"},{tag:"独立",text:"我已经是个独立的大人了，遇到问题会独立地搜索，独立地看不懂，然后独立地放弃。"},{tag:"休息",text:"休息五分钟以后果然精神多了，现在可以更有精神地继续休息。"},{tag:"好运",text:"好运正在派送，快递员说地址太偏找不到我。我告诉他放驿站，他说驿站也倒闭了。"},{tag:"健康",text:"体检报告说我要少熬夜、多运动、保持心情愉快。我看完笑了一整天，至少完成了一项。"},{tag:"时间管理",text:"我的时间管理非常精准：上午想下午做，下午想晚上做，晚上想明天做，环环相扣，滴水不漏。"},{tag:"现实",text:"理想很丰满，现实很骨感，而我夹在中间，主要负责给现实点外卖。"},{tag:"脑内会议",text:"大脑刚才召开紧急会议，理智缺席，情绪迟到，食欲全票当选新一任负责人。"},{tag:"人格",text:"我的身体里住着很多个我：想努力的我、想躺平的我，以及负责看他们吵架的我。"},{tag:"周末",text:"周末两天安排得很满，第一天用来恢复体力，第二天用来为周一提前失去体力。"},{tag:"清醒",text:"我当然清醒，只是清醒地知道事情很糟，然后选择用不清醒的方式处理。"},{tag:"自我介绍",text:"本人优点很多，缺点暂时想不起来，可能最大的缺点就是太谦虚，不愿意一次说完所有优点。"},{tag:"消费观",text:"钱没有消失，只是换了一种方式陪伴我，比如快递、奶茶和下个月的账单。"},{tag:"专注",text:"我的专注力特别强，一旦开始玩手机，天塌下来我都会先看完这条视频。"},{tag:"天气",text:"今天的风很大，把我的发型、计划和本就不多的体面一起吹走了。"},{tag:"预判",text:"我预判了生活的预判，生活没有预判，直接换了个方向撞我。"},{tag:"能量",text:"当前能量不足，请靠近插座。靠近以后发现不是手机没电，是本人没电。"},{tag:"稳定",text:"别人情绪稳定是遇事不慌，我情绪稳定是每天都慌，所以没有波动。"},{tag:"努力",text:"努力不一定有结果，但不努力一定很舒服。为了长期发展，我决定先研究舒服。"},{tag:"边界感",text:"我很有边界感，别人的事我不管，我的事也希望大家尽量别告诉我。"},{tag:"开会",text:"刚参加完一个很重要的会议，会议确定了下次会议的时间，工作取得阶段性胜利。"},{tag:"宇宙",text:"宇宙那么大，应该能容得下一个不回消息、不想上班、偶尔还想吃夜宵的我。"},{tag:"玄学",text:"大师说我命里有一劫，我问什么时候，他说每天早上八点半。我说那不是劫，那是打卡。"},{tag:"人工智能",text:"人工智能可能会取代很多工作，我一点都不担心，因为我的工作现在也没人想做。"},{tag:"反思",text:"睡前认真反思了今天，结论是今天不适合反思，建议明天再重新评估。"},{tag:"生活技巧",text:"学会了一个快速解决烦恼的方法：把烦恼写在纸上，然后把纸折成飞机，让问题具有飞行能力。"},{tag:"保护机制",text:"大脑为了保护我，已经自动屏蔽了压力、责任和部分常识，目前运行非常流畅。"},{tag:"审美",text:"我的审美一直在线，经济条件偶尔掉线，二者属于异地恋，见面机会不多。"},{tag:"礼物",text:"生活送了我一份礼物，我打开一看是教训。包装挺精致，下次别送了。"},{tag:"计划外",text:"一切都在计划之中，除了计划本身还没有做，以及事情已经结束。"},{tag:"沟通",text:"我和世界沟通得很好：世界负责出题，我负责沉默，双方都觉得对方不讲道理。"},{tag:"结论",text:"经过多年观察，我发现人生没有白走的路，但有很多路走完以后确实没什么用。"}],it=[{tag:"时空管理",text:"紧急通知：由于地球自转太快，今天本来要从星期三直接甩到星期五。本人徒手拽住时间管理局的门把手，拼死抢救回一个星期四。目前手腕轻微扭伤，宇宙秩序已经恢复。别问医药费，先V我50，我去肯德基确认一下日期。"},{tag:"学术研究",text:`《炸鸡对当代青年精神稳定性的影响研究》
实验组：吃疯狂星期四；对照组：看别人吃。
结果显示，实验组情绪稳定，对照组开始攻击实验报告。综上，本研究急需50元追加经费，否则作者本人将加入对照组。`},{tag:"职场事故",text:"今天开会，老板深情地说：“公司就是大家的家。”我听完很感动，当场脱鞋躺在会议室沙发上，问他晚上吃什么、房贷谁还。十分钟后保安来了，说家里来客人了。现在我和保安都饿了，V我50，家庭聚餐。"},{tag:"古风奏折",text:"臣夜观天象，见西北有红白二气冲天，掐指一算，乃酥皮与鸡翅隔空相召。太史令大惊，御膳房沉默，满朝文武无人敢言。臣斗胆启奏：今日宜炸鸡，忌空腹开会。若陛下V臣50，此劫可解。"},{tag:"情感反转",text:"她突然说：“我们不合适，还是分开吧。”我站在雨里没有挽留，只问了一句为什么。她红着眼说：“你每次都点原味鸡，我喜欢香辣的，我们根本不是一路人。”我正准备转身，她又追出来：“所以疯狂星期四到底拼不拼？”"},{tag:"悬疑案件",text:"凌晨三点，门外传来规律的敲门声。我屏住呼吸走到玄关，猫眼里一个人都没有，地上却多了一张油渍斑斑的纸条。我颤抖着翻过来，上面只有一行字：别害怕，是我，星期四，记得凑单。"},{tag:"未来考古",text:"公元3026年，考古队出土了一部保存完好的手机。专家花费十年破解密码，发现机主每隔七天都会给不同的人发送同一句“V我50”。学界因此认定，古人通过定期转账完成一种神秘的宗教仪式。直到有人翻到日历，发现那天是星期四。"},{tag:"赛博玄学",text:"大师看了我的生辰八字，脸色突然变得很难看。他说我五行缺金，命里缺鸡，人生还少一块吮指原味。我问该如何化解，大师默默打开付款码：“天机不可泄露，但疯狂星期四可以拼单。”那一刻，我悟了，他也饿了。"},{tag:"人工智能",text:"我让人工智能分析自己为什么不快乐。它读取了我的聊天记录、消费账单和凌晨三点的搜索历史，运算整整一夜，机房温度一度升到八十度。早上屏幕终于亮起，上面只有一句诊断结果：不是情绪问题，是今天星期四而你还没下单。"},{tag:"宇宙售后",text:"您好，这里是宇宙售后。系统检测到您本周的快乐额度尚未到账，原因是投胎时勾选了“普通人生基础版”，不包含炸鸡服务。现在补交50元即可升级为“疯狂星期四尊享版”，赠送薯条，来世也能继承。回复TD没有用，我们不退订。"},{tag:"平行世界",text:"我意外穿越到一个没有疯狂星期四的平行世界。那里的人每天按时睡觉、认真工作、情绪稳定，却总觉得生活少了点什么。我用最后一格电打开肯德基小程序，全城警报突然响起，所有人同时望向天空：预言中的疯子，终于带着优惠券来了。"},{tag:"存在主义",text:"我问哲学教授，人生的意义究竟是什么。他沉默了三个小时，在黑板上写满存在、虚无、自由和选择，最后擦掉一切，只留下八个字：存在先于本质，付款先于取餐。然后他看了眼手机，说今天星期四，问我要不要一起把理论变成实践。"},{tag:"法庭实录",text:"法官敲下法槌：“被告，你为何在群里连续发送二十七次V我50？”我整理了一下衣领：“因为前二十六次，正义都没有得到回应。”旁听席掌声雷动，法官擦了擦眼泪，宣布休庭半小时，先去过疯狂星期四。"},{tag:"新闻快讯",text:"本台刚刚收到消息，一名市民在周四中午突然情绪高涨，频繁查看手机，并向亲友发送不明数字。专家提醒，请勿惊慌，这是季节性炸鸡渴望，通常在收到50元后自行缓解。下面请看记者从肯德基门口发回的拥堵画面。"},{tag:"天气预报",text:"今日全国大部地区有小到中度饥饿，部分办公室将出现强烈馋意，午后伴随薯条香气。专家建议随身携带付款码，谨防同事突然发起拼单。预计今晚八点后，疯狂星期四将逐渐转为疯狂加班，请抓紧避险。"},{tag:"紧急广播",text:"请全体居民注意，城市上空发现巨大不明圆桶，正以每小时五十元的速度接近地面。防空部门已确认桶内装有炸鸡，对公共安全暂无威胁，对空腹人群威胁极大。请立即打开群聊，寻找四十九名热心市民。"},{tag:"病例报告",text:"患者每逢周四出现心跳加速、口腔分泌增加、手指自动打开外卖软件等症状。经会诊，排除恋爱可能，确诊为急性疯狂星期四。治疗方案：一日三次查看菜单，饭前转账50元。若仍未好转，请加一份蛋挞。"},{tag:"特工任务",text:"总部呼叫代号“薯条”的特工。目标已于十分钟前进入肯德基，携带机密优惠券一张。你的任务是伪装成普通顾客与其接头，暗号：“今天星期几？”对方回答“疯狂”后，立即出示付款码。注意，经费需要自行筹集。"},{tag:"博物馆",text:"馆内新到一件当代艺术品：一只空荡荡的炸鸡桶。策展人解释，它象征消费主义下的欲望、虚无与人类永恒的饥饿。我凝视良久，问桶里的鸡去哪了。策展人擦擦嘴，说艺术已经被他消化了，今天星期四嘛。"},{tag:"创业融资",text:"我准备做一个颠覆行业的项目：用户给我50元，我替用户承受点单时的选择困难，并亲自完成食物测试。项目已完成商业闭环，目前只缺天使投资人。今天正好星期四，谁先打款，谁就是联合创始人。"},{tag:"武林秘闻",text:"江湖传言，得“疯狂星期四”者可号令群聊。各大门派为争夺优惠券打得天昏地暗，唯有我站在山巅纹丝不动。众人问我为何如此淡定，我缓缓亮出收款码：“因为真正的高手，从不自己出经费。”"},{tag:"太空任务",text:"飞船即将驶出太阳系，指挥中心问宇航员还有什么未了心愿。他望着蔚蓝的地球，轻声说：“我忘了今天是星期四。”全体科学家沉默三秒，立刻中止发射。人类可以探索宇宙，但不能带着没吃到的遗憾离开。"},{tag:"游戏任务",text:"系统提示：隐藏任务“周四的召唤”已开启。请在十二点前集齐金币50枚、好友一名和空腹状态。完成后可获得史诗级道具“脆皮炸鸡”，并解锁称号“群聊里最先开口的人”。是否接受？你没有拒绝选项。"},{tag:"神秘菜谱",text:"祖传秘方记载：先将星期四洗净切段，加入少许疯狂，小火炖至群聊冒泡，再倒入50元充分搅拌。待朋友回复“滚”时即可出锅。此菜名为“人情冷暖”，建议搭配炸鸡食用，风味更佳。"},{tag:"家族群聊",text:"家族群突然收到一封匿名家书：“孩儿在外一切都好，勿念。只是今日风大，吹得口袋空空；又逢星期四，炸鸡香气扰乱军心。”沉默许久，二姨发来一张养生文章，外婆直接转了50。还是外婆懂战略。"},{tag:"房产广告",text:"稀缺核心地段，步行三分钟直达肯德基，坐北朝南，每周四采光尤其疯狂。户型虽小，但付款码展示空间充足。现诚意出售本人午餐梦想，总价50元，无中介费，支持朋友全款帮购。"},{tag:"银行风控",text:"银行来电询问我为何每周四都有50元异常入账。我说那不是钱，是朋友对我生活的认可，是社会互助精神的数字化表达。客服沉默半天，问能不能把她也拉进群，她今天也没吃。"},{tag:"获奖感言",text:"感谢大家把“年度最会要钱奖”颁给我。这个奖不只属于我，也属于每一个看见V我50却假装没看见的人。是你们的冷漠让我不断创新，是你们的沉默让我文案越来越长。最后补充一句，今天星期四。"},{tag:"赛事解说",text:"比赛进入最后十秒，选手打开群聊，迅速打出“疯狂星期四谁请客”。对方已读不回，防守相当严密！选手突然甩出一篇八百字苦情长文，群友心理防线崩溃，50元到账！漂亮的绝杀！"},{tag:"黑色侦探",text:"这座城市从不睡觉，雨水把霓虹冲进下水道。我点燃一根不存在的烟，调查一宗离奇失踪案：我的50元到底去了哪里。线索最终指向肯德基柜台。店员推来一桶炸鸡，说答案一直在我手里。"},{tag:"毕业论文",text:"答辩老师问：“你的论文核心贡献是什么？”我指着最后一页：“证明了星期四在心理层面可以持续七天。”老师冷笑：“数据呢？”我打开收款码：“只要您提供50元研究经费，实证结果十分钟后送到。”"},{tag:"机场广播",text:"请乘坐KFC50次航班的旅客注意，您的登机口已变更为疯狂星期四群聊。请携带优惠券和付款能力登机，行李可以托运，饥饿不予托运。尚未转账的旅客将被安排在闻得到但吃不到区域。"},{tag:"时间旅行",text:"未来的我穿越回来，满脸疲惫地告诉我：“千万不要在今天做那个决定，否则你会后悔一生。”我紧张地问什么决定。他握住我的手：“不要以为晚点再点也来得及，疯狂星期四八点就结束了。”"},{tag:"离奇梦境",text:"昨晚梦见自己继承了巨额遗产，豪宅、跑车、私人飞机应有尽有。我激动地问律师遗产有多少，他递给我一张券：“满50减5。”醒来以后枕头湿了，不知道是感动还是觉得力度太小。"},{tag:"电梯惊魂",text:"电梯停在不存在的十三楼，门外一片漆黑，只有远处亮着一块红色招牌。手机忽然收到陌生消息：“往前走，不要回头。”我壮着胆子走过去，柜台人员微笑问我：“疯狂星期四，堂食还是带走？”"},{tag:"兰亭鸡序",text:"岁在周四，时值疯狂。群贤毕至，好友咸集。此地有炸鸡之香，又有可乐之畅饮。仰观优惠之大，俯察余额之少，足以极视听之娱。虽无丝竹管弦之盛，V我五十，亦可乐也。"},{tag:"投诉工单",text:"本人投诉星期四虚假宣传。所谓“疯狂”，我从早上等到下午，既没有人尖叫，也没有人起飞，只有同事安静地问我拼不拼。直到我打开余额，才发现真正疯狂的是我居然想自己付款。"},{tag:"招聘启事",text:"现招聘疯狂星期四首席体验官一名。要求：胃口稳定，转账迅速，能够承受朋友已读不回。工作内容包括点餐、拍照、向没吃到的人描述口感。薪资面议，但入职前需先向公司缴纳50元设备费。"},{tag:"保险条款",text:"本公司推出“周四意外饥饿险”。若您在周四因无人请客导致情绪低落，可获炸鸡照片一张；若群聊无人回复，可获安慰表情包两个。仅需保费50元，现在投保，我立刻替您验证理赔流程。"},{tag:"公司公告",text:"经管理层慎重研究，决定将本周四调整为周五前一天，全体员工照常上班。考虑到大家情绪，我们允许午休期间短暂疯狂。疯狂所需经费不在报销范围，请自行联系财务，也就是群里最有钱的那位。"},{tag:"成功学",text:"老师说想成功就要走出舒适区。我立刻离开沙发，走进肯德基。老师说要学会向优秀的人靠近，我打开群聊找到余额最多的朋友。老师又说要敢于提出需求。于是，V我50，知识终于完成闭环。"},{tag:"拍卖现场",text:"拍卖师举起最后一件藏品：“这是一份尚未被领取的疯狂星期四套餐，起拍价50。”全场无人举牌。我缓缓抬手，众人倒吸一口凉气。拍卖师落槌：“成交，请先付款。”我说我举手只是想问能不能众筹。"},{tag:"婚礼现场",text:"司仪问新郎：“无论贫穷富贵，你都愿意与她分享一切吗？”新郎坚定地说愿意。新娘含泪补充：“包括疯狂星期四吗？”全场安静，新郎看了一眼套餐价格，婚姻第一次迎来现实考验。"},{tag:"交友简介",text:"本人性格稳定、三观端正、每周四偶尔疯狂。理想对象不要求有房有车，只希望拥有良好付款习惯，面对V我50时不逃避、不冷战。若有意请直接转账，文字介绍容易造假，到账记录不会。"},{tag:"校园通知",text:"教务处通知：近期有学生以“研究当代餐饮文化”为由集体前往肯德基。经调查，该活动学术含量较高，涉及经济学、心理学与群体传播学。学校原则上支持探索，但50元课题经费请勿向辅导员申请。"},{tag:"防诈提醒",text:"警方提醒：近期出现新型诈骗，对方先用长文获取同情，最后诱导您转账50元。请大家提高警惕，认准正规渠道。比如直接转给我，我不编故事，坦诚说明今天疯狂星期四，诚信比套路更珍贵。"},{tag:"石碑铭文",text:"考古人员在荒地发现一块石碑，上刻：“后世之人若见此字，速备五十，周四将至。”专家认为这是古代灾难预警。我仔细研究后发现石碑背面还有小字：“要香辣，不要原味。”历史突然有了温度。"},{tag:"生存指南",text:"《现代都市周四生存指南》第一条：不要在十一点半空腹打开群聊。第二条：不要相信“我就看看菜单”。第三条：提前确认谁愿意拼单。若以上全部违反，请执行最终预案：接受命运，并把付款码发得体面一点。"},{tag:"星座运势",text:"今日星象显示，十二星座均有破财风险。白羊容易冲动点单，金牛会纠结优惠，双子同时加入两个拼单群，其余星座统一表现为想吃。幸运数字是50，幸运方位是最近的肯德基，宜转账，忌装没看见。"},{tag:"疯狂宣言",text:"我决定不再被世俗定义。别人问我今天星期几，我不说周四，我说这是炸鸡与命运短暂握手的日子，是付款码与人性正面交锋的时刻，是五十元检验友谊纯度的伟大实验。好了，实验对象们，谁先来？"}],st=[{tag:"心动",text:"喜欢你以后，世界没有突然变好，只是风吹过来的时候，我总觉得里面藏着你的名字。"},{tag:"初见",text:"第一次见你没有电影里的慢镜头，只有我说错了一句话，回家以后却反复想了很多遍。"},{tag:"甜蜜",text:"你在身边的时候，连等红灯都不觉得浪费时间。原来喜欢一个人，会让所有空白都变成相处。"},{tag:"日常",text:"我们没有每天制造浪漫，只是买菜时记得对方不吃什么，回家时顺手带一份喜欢的东西。爱慢慢变成了生活的本能。"},{tag:"偏爱",text:"我喜欢的不是你对所有人都温柔，是你在人群里看见我以后，眼神会多停留一秒。"},{tag:"安心",text:"真正的安全感不是你随时汇报行程，是我知道就算我们各自忙碌，也没有人会轻易松开这段关系。"},{tag:"开心",text:"和你恋爱以后，快乐变得特别具体：是分享欲被接住，是烂梗有人笑，是回头的时候你还在。"},{tag:"告白",text:"我没有准备很漂亮的话，只是想认真告诉你：以后遇见的好天气、坏情绪和漫长晚餐，我都想分你一半。"},{tag:"陪伴",text:"你不用每次都解决我的问题。很多时候，我只是希望那些难熬的时刻里，有人愿意坐在旁边，不催我振作。"},{tag:"浪漫",text:"浪漫不是把日子过成电影，是我们看完电影走回家的路上，仍然有说不完的话。"},{tag:"小事",text:"爱藏在很多不值得发朋友圈的小事里：温好的牛奶、留着的最后一口、和一句到家告诉我。"},{tag:"拥抱",text:"拥抱你的时候，我终于不用解释今天为什么累。你什么都没问，却像替我关掉了世界的噪音。"},{tag:"吃醋",text:"我说没关系的时候，其实很有关系。只是怕自己的在意太重，压得你觉得爱是一种负担。"},{tag:"酸涩",text:"喜欢让人变得贪心。得到一句晚安以后，开始想要早安；拥有今天以后，又偷偷期待很久以后。"},{tag:"争吵",text:"我们吵架时都在证明自己受了伤，却忘了站在对面的不是敌人，是那个最不想失去的人。"},{tag:"冷战",text:"冷战最难受的不是不说话，是明明都在等对方靠近，却用沉默把彼此推得更远。"},{tag:"道歉",text:"对不起不应该是一场输赢。真正的道歉，是我愿意放下辩解，先看见你的眼泪为什么掉下来。"},{tag:"沟通",text:"我希望我们以后不要靠猜。难过可以说，失望可以说，想被抱一下也可以直接说。爱不该是一场阅读理解。"},{tag:"脾气",text:"最亲近的人往往接住了我们最坏的脾气。后来才懂，确定不会离开，不是伤害对方的通行证。"},{tag:"倔强",text:"那天只要有一个人回头，我们就不会走散。可我们都太想证明自己不在乎，于是真的失去了彼此。"},{tag:"和好",text:"和好不是把争吵翻过去，而是愿意一起把刺拔出来，承认我们都疼，也都还想继续。"},{tag:"异地",text:"异地恋是把拥抱换成视频，把陪伴换成消息，把所有想念都存起来，等见面时一次性归还。"},{tag:"距离",text:"地图上两座城市只隔着一条线，可我想见你的时候，那条线比任何山海都长。"},{tag:"想念",text:"我们每天都聊天，可想念还是没有减少。声音能穿过网络，体温不能。"},{tag:"视频通话",text:"隔着屏幕陪你睡着以后，我舍不得挂断。那一点微弱的呼吸声，是我离你最近的时候。"},{tag:"车票",text:"异地恋最浪漫的情书不是长篇大论，是一张已经买好的车票，和一句我来见你。"},{tag:"时差",text:"你那边天亮的时候，我这里刚刚入夜。我们把一天错开，却还是努力在彼此的时间里留一盏灯。"},{tag:"未来",text:"异地最难的不是距离，是不知道这样的日子还要多久。所以我们一遍遍谈未来，让等待有一个可以抵达的名字。"},{tag:"遗憾",text:"我们不是没有爱过，只是爱得太早，懂得太晚。等终于学会怎么珍惜，对方已经不在原地。"},{tag:"错过",text:"你出现的时候我还不懂爱，我懂爱的时候，你已经学会了不再等我。"},{tag:"时机",text:"最遗憾的不是遇见错的人，是在最想安定的时候，遇见一个只能陪你走一段的人。"},{tag:"分开",text:"分开以后我才发现，原来爱一个人不只存在于相处时，也存在于那些想联系却忍住的瞬间里。"},{tag:"约定",text:"我们说过很多以后，后来一个也没有发生。可当时说出口的那一刻，我相信你是真的。"},{tag:"差一点",text:"差一点见家长，差一点住在一起，差一点把名字写进同一本户口。原来差一点，也可以差一生。"},{tag:"不回头",text:"你离开以后没有回头，我也没有追。不是不爱，是我们都知道，追上去还会在同一个地方走散。"},{tag:"失望",text:"我对你的失望不是因为一件大事，是许多次需要你的时候，你都恰好有更重要的事情。"},{tag:"失落",text:"以前你会追问我怎么了，后来我说没事，你就真的相信了。感情变淡，常常从少问一句开始。"},{tag:"被替代",text:"看到你把曾经给我的偏爱给了别人，我才明白，原来不是那些事特别，是当时的我以为自己特别。"},{tag:"变淡",text:"我们没有激烈地结束，只是消息越来越短，见面越来越少，最后默契地退出了彼此的生活。"},{tag:"单向",text:"我一直在为我们的未来努力，后来才发现你只是站在原地，看我一个人把两个人的路走得很累。"},{tag:"疲惫",text:"爱不应该每次都靠一个人低头续命。当我连难过都懒得说的时候，其实已经在心里离开很多次了。"},{tag:"难过",text:"你说过不会让我一个人，可最后最漫长的那些夜晚，都是我自己熬过去的。"},{tag:"雨天",text:"我们在雨里争吵，你转身走了。我站了很久，不是在等雨停，是在等你像从前一样回来找我。"},{tag:"生日",text:"生日那天收到很多祝福，却还是因为少了你的那一句，觉得整天都不完整。"},{tag:"重逢",text:"再次见面，我们都比从前温柔。可那份温柔里没有爱了，只有对旧人的客气和对往事的体谅。"},{tag:"复合",text:"重新在一起不是回到从前，是承认从前有问题，然后用新的方式再爱一次。"},{tag:"成长",text:"好的爱情不是把彼此变成理想的样子，是允许两个人带着不同慢慢成长，又始终愿意并肩。"},{tag:"长久",text:"长久不是永远不厌倦，是看过对方普通、脆弱和难相处的一面以后，仍然愿意认真更新这段关系。"},{tag:"热烈",text:"我喜欢你不是温吞的喜欢，是看见你就想奔过去，是吵完架还想抱你，是明知道爱会受伤也不想后退。"},{tag:"滋味",text:"爱情大概就是这样：有糖分，也有眼泪；会让人变勇敢，也会暴露所有软弱。可因为是你，我还是愿意尝遍其中的酸甜苦辣。"}],xt=[{tag:"周一",text:"周一不是新的一周，是上周没死心，换了个名字继续回来找我。"},{tag:"起床",text:"每天早上叫醒我的不是梦想，是闹钟、房租和银行卡联合发来的最后通牒。"},{tag:"通勤",text:"地铁把我从生活运到工位，再从工位运回生活。本人只是一个每天往返传输的压缩文件。"},{tag:"打卡",text:"打卡成功说明肉体已到公司，灵魂位置暂时未知，系统建议下班后重新定位。"},{tag:"老板",text:"我一直不愿意说老板像傻逼，因为这样对傻逼不太公平，至少傻逼不会半夜问我睡了吗。"},{tag:"开会",text:"开会的意义，是让所有能独立浪费时间的人聚在一起，团队化地浪费时间。"},{tag:"人际关系",text:"我不是不会处理职场人际关系，我只是认为成年人最好的关系是：有事发文件，没事别寒暄。"},{tag:"同事",text:"同事问我周末去哪玩，我说在家。他露出同情的眼神，却不知道我也在同情周末还要社交的他。"},{tag:"工作群",text:"工作群一响，我的心跳会自动切换成防空警报。点开之前怕有事，点开以后果然有事。"},{tag:"HR",text:"HR说公司氛围年轻有活力，入职以后发现确实年轻，因为干两年的人看起来已经老了十岁。"},{tag:"绩效",text:"绩效面谈像一场玄学仪式：我带着事实进去，领导带着感觉出来，最后工资相信了领导。"},{tag:"加班",text:"加班最大的意义，是让我深刻理解这座城市的夜景为什么免费，因为看的人根本回不了家。"},{tag:"工资",text:"工资到账时像一位多年不见的朋友，匆匆来过，帮我还完欠款，又继续去别人的账户生活。"},{tag:"辞职",text:"辞职信已经在心里写到第八季，情节跌宕起伏，唯一的问题是主演还背着房贷，不敢杀青。"},{tag:"团建",text:"团建说是增进同事感情，实际效果是让大家在休息日更加确定，平时不熟是有原因的。"},{tag:"周报",text:"周报的核心技术，是把三件做完的事写成八件，把五件没做的事写成持续推进。"},{tag:"PPT",text:"真正的职场魔法，是把一句话拆成三十页PPT，再由领导用一句话总结回去。"},{tag:"截止日期",text:"截止日期是一种神奇的生命体，离我越近跑得越快，等我做完以后又立刻繁殖出新的。"},{tag:"情绪稳定",text:"职场要求情绪稳定，我做到了：每天都处在同样程度的不想上班里，没有任何波动。"},{tag:"客户",text:"客户说需求很简单，我就知道事情不简单；客户说只改一点，我就知道今晚只能睡一点。"},{tag:"邮件",text:"邮件里的“烦请”不一定烦请，“建议”也不一定建议，但“尽快”通常是真的想让我立刻消失。"},{tag:"午饭",text:"上午工作的终点是午饭，下午工作的起点是等下班。工作本身夹在中间，显得很多余。"},{tag:"午休",text:"午休趴下时觉得人生还有希望，抬头发现只过了十二分钟，希望走得比我早。"},{tag:"摸鱼",text:"摸鱼不是背叛公司，是我在高压环境下进行的个人生态保护工程。"},{tag:"打印机",text:"办公室最有原则的是打印机，它不想工作的时候，领导来了也没用。我很尊敬它。"},{tag:"工牌",text:"工牌挂在脖子上像一个温柔的提醒：别跑，你的身份和门禁都在这里。"},{tag:"电梯",text:"上班电梯里没人说话，因为大家都在进行同一场无声的心理建设：来都来了。"},{tag:"居家办公",text:"居家办公最大的好处是不用通勤，最大的坏处是公司发现省下的通勤时间也可以拿来开会。"},{tag:"升职",text:"领导说要给我更多成长空间，后来我发现空间是工作量撑出来的，成长是白头发证明的。"},{tag:"责任心",text:"我很有责任心，每次想辞职都会认真考虑：我走了以后，这些破事爱谁做谁做。"},{tag:"企业文化",text:"老板说公司是家，我问能不能在家里睡到十点、穿睡衣开会、月底找家长要生活费。他说我不懂企业文化。"},{tag:"办公室政治",text:"办公室政治太复杂，我选择保持中立：谁来吐槽我都点头，谁问立场我都说打印机没纸了。"},{tag:"社交",text:"工作已经拿走我八小时，不应该再要求我用下班时间思考怎么回复同事的哈哈哈哈。"},{tag:"寒暄",text:"茶水间最难的问题不是咖啡选哪种，是遇见不熟的领导以后，三十秒应该聊几次天气。"},{tag:"咖啡",text:"咖啡不是为了提高效率，是为了让我睁着眼睛见证效率到底有多低。"},{tag:"排期",text:"项目排期很科学：需求今天提出，方案昨天完成，问题明天再说，责任永远现在就要确认。"},{tag:"年会",text:"年会抽奖前我相信公司不会亏待努力的人，抽奖后我明白公司主要是不想亏待运气好的人。"},{tag:"培训",text:"公司培训我如何提升主人翁意识，我认真听完，决定先问问主人今年有没有分红。"},{tag:"领导力",text:"领导力就是把一个没人知道怎么做的任务交给下属，然后在完成后指出早就知道可以更好。"},{tag:"优化",text:"公司说要优化流程，我以为终于能少干点，后来流程多了一张表，用来统计我们为什么觉得流程太多。"},{tag:"OKR",text:"我的OKR非常清晰：O是活到周五，KR是少开两场会、准时吃午饭、下班时电脑不要叫住我。"},{tag:"请假",text:"请假理由写身体不适，其实身体很好，主要是身体里的我对公司产生了强烈排异反应。"},{tag:"周五",text:"周五下午的我工作效率极高，能在三秒内关闭所有窗口，并准确判断领导什么时候离开办公室。"},{tag:"周日晚",text:"周日晚上的焦虑不是因为明天要上班，是因为明天上班这件事居然每周都会发生。"},{tag:"离职幻想",text:"我每天路过老板办公室都很平静，因为脑子里已经离职八百次，还顺便把公司收购了三次。"},{tag:"工位",text:"工位是肉体的停泊港、腰椎的训练场，也是灵魂每天失联八小时的最后位置。"},{tag:"向上管理",text:"所谓向上管理，就是用老板听得懂的方式解释：这个想法确实很有创意，但落地以后大家会一起完蛋。"},{tag:"职业素养",text:"职业素养让我学会微笑着回复“收到”，至于收到以后想了什么，不在公司服务范围内。"},{tag:"下班",text:"下班不是一天的结束，是本人结束托管、重新获得自由意志的庄严时刻。"},{tag:"职场宣言",text:"我上班不是为了实现老板的梦想，也不是为了寻找人生价值。我来这里的目标朴素而坚定：按月拿钱，尽量少内耗，活着等到下班。"}],dt=[{tag:"山水",text:"山不解释自己的高，水也不辩解去向。人走到开阔处，许多执念便自然显得轻了。"},{tag:"月色",text:"月光落在旧屋檐上，像一封没有署名的信。读到最后，都是故乡。"},{tag:"人间",text:"人间值得，并不是因为事事圆满，而是裂缝里也会长出花，风雨后仍有人替你留灯。"},{tag:"时序",text:"春有迟来的花，秋有早归的雁。万物都有自己的时序，不必拿别人的盛开责怪自己的缓慢。"},{tag:"清醒",text:"看清世事以后仍肯温柔，不是天真，是一个人对自己品格最后的守护。"},{tag:"松弛",text:"茶要慢慢煮，书要随意翻，日子不必时时有答案。庭前风过，已经是很好的下午。"},{tag:"归途",text:"走得再远，心里总有一条路通向旧门、灯火和等你吃饭的人。那条路叫归途。"},{tag:"相逢",text:"人与人的相逢像两条河流短暂交汇。能共看一段山色，已经是命运慷慨。"},{tag:"离别",text:"离别并非把一切带走。它留下口音、习惯和某个黄昏，让一个人往后经过许多年仍会忽然回头。"},{tag:"书信",text:"从前书信很慢，一句话要走过山川。也因此，每一个字抵达时，都带着路途和郑重。"},{tag:"春雨",text:"春雨不急着把世界淋透，只在夜里轻轻落下。第二天推窗，旧枝便多了一层新绿。"},{tag:"夏夜",text:"夏夜把白日的喧闹慢慢收起，风从树梢经过，远处灯火如同散落的人间星辰。"},{tag:"秋声",text:"秋意最先落在声音里：一阵风，一片叶，一场比往日更早结束的黄昏。"},{tag:"冬藏",text:"冬天教人收藏。收藏谷物、旧信和没有说尽的话，等春风替我们重新启封。"},{tag:"纸窗",text:"纸窗留不住风，却把月色滤得温柔。世间许多缺憾，也因为不圆满而有了余韵。"},{tag:"茶烟",text:"茶烟升起的时候，屋里没有大事发生。可这样的无事，正是许多人走遍半生想寻的安稳。"},{tag:"灯火",text:"万家灯火并不宏大，不过是有人晚归，有人等候，有人把寻常日子认真过完。"},{tag:"旧城",text:"旧城的路窄，故事却很长。青石记得脚步，屋檐记得雨，只有经过的人误以为往事已经散了。"},{tag:"风骨",text:"所谓风骨，不是永远锋利，而是在漫长岁月里有所不为，也有所必为。"},{tag:"读书",text:"读书不是为了替生活找到标准答案，是为了在命运发问时，心中多几种从容的语言。"},{tag:"历史",text:"史书写兴亡只用寥寥数行，落在普通人身上，却是一生的炊烟、奔波与离散。"},{tag:"故纸",text:"旧纸泛黄，不是文字老了，是岁月在字缝间住得太久，留下了自己的颜色。"},{tag:"长安",text:"每个人心里都有一座长安。未必繁华，却盛放着少年时相信过的一切。"},{tag:"江南",text:"江南不只在地图上，也在细雨、乌篷和一句说得很轻的等你回来里。"},{tag:"塞外",text:"大漠把人的影子拉得很长，风吹过千里，不问来路。站在辽阔里，心事终于有地方安放。"},{tag:"故乡",text:"故乡是离开以后才学会的称呼。小时候只觉得普通，后来每一种相似的味道都能让人沉默。"},{tag:"少年",text:"少年心气并非不知天高地厚，而是在知道路远以后，仍愿意把第一步走得响亮。"},{tag:"中年",text:"人到中途，才懂得真正的从容不是拥有许多，而是知道什么值得珍惜，什么可以放下。"},{tag:"老去",text:"老去不是忽然发生的。是某天翻到旧照片，发现记忆里年轻的人，已经陪自己走了很远。"},{tag:"无常",text:"世事无常并非劝人悲观，而是提醒我们：花开时看花，相见时好好相见。"},{tag:"选择",text:"人生很少有完全正确的选择。我们只是选择一条路，然后用往后的认真，让它渐渐正确。"},{tag:"沉默",text:"沉默有时比语言更丰盛。山川不言，却让赶路的人在它面前想起辽阔。"},{tag:"孤独",text:"孤独不是无人同行，是终于有一段路只属于自己，可以听见心里真正的声音。"},{tag:"宽容",text:"宽容不是忘记受过的伤，是不让那些伤决定自己往后成为怎样的人。"},{tag:"自由",text:"自由并非想去哪里就去哪里，而是面对喧哗时，仍能听从内心安静的方向。"},{tag:"克制",text:"真正的克制不是没有欲望，是看见繁华以后，依然知道自己要回哪一盏灯下。"},{tag:"知己",text:"知己不必时时相见。他懂你话里的停顿，也懂你沉默时没有说出的山河。"},{tag:"爱情",text:"好的感情不是把两个人困在彼此身边，是让他们见过更大的世界以后，仍愿意并肩回家。"},{tag:"亲情",text:"亲人的爱往往没有华丽措辞，只是碗里多出来的一筷菜，和出门后那句慢点走。"},{tag:"烟火",text:"烟火气并不俗。米在锅里沸腾，灯在窗前亮起，这些细小声音构成了人间最可靠的秩序。"},{tag:"晨光",text:"晨光先照见尘埃，再照见花。它不挑选值得明亮的事物，只平等地把新的一天交给众人。"},{tag:"黄昏",text:"黄昏像一天写到末尾的跋。没有总结得太满，只留一片余光，让人慢慢回想。"},{tag:"深夜",text:"深夜适合与自己谈话。白天顾不得承认的疲惫，到了灯下，终于可以被温柔地看见。"},{tag:"时间",text:"时间不回答问题，只把答案藏进皱纹、旧物和某天忽然释怀的心里。"},{tag:"命运",text:"命运像一条看不清全貌的河。我们能做的不是命令水流，而是在每一次转弯处握稳自己的桨。"},{tag:"修行",text:"人生的修行，不在远山古寺，而在每一次被误解后仍不刻薄，被辜负后仍不轻贱真心。"},{tag:"留白",text:"画留白，诗不尽言，人与人之间也该留一寸余地。太满的东西，往往最先失去呼吸。"},{tag:"初心",text:"初心不是永远停在出发时，而是走过复杂以后，仍认得当初为什么上路。"},{tag:"远方",text:"远方未必能解决眼前的一切，却能让人知道，眼前并不是世界的全部。"},{tag:"余生",text:"愿往后的日子不必轰轰烈烈，只需心有所安，行有所向，回首时不辜负自己走过的每一程。"}],E=[{id:"all",name:"全部",icon:"layout-grid",color:"#f2f0eb",description:"从日常、情绪到荒诞与文学，收集不同心境下真正值得复制的表达。"},{id:"moments",name:"朋友圈",icon:"aperture",color:"#84d5ca",description:"轻松、鲜活、有排版感的生活碎片，允许颜文字、符号、停顿和一点小古怪。"},{id:"emo",name:"EMO",icon:"cloud-rain",color:"#8eb7e8",description:"深情、克制、细腻；写失去、错过、沉默和无法重来的余痛，让情绪慢慢落下来。"},{id:"abstract",name:"抽象",icon:"waves",color:"#c5a5f4",description:"认真地胡说八道，让逻辑突然拐弯，用荒诞、反差和意外制造真正的笑点。"},{id:"kfc",name:"疯狂星期四",icon:"drumstick",color:"#ff8b7b",description:"用长篇铺垫、跨类型叙事和出其不意的结尾，把星期四写成一场无法预测的事故。"},{id:"love",name:"恋爱",icon:"heart",color:"#f39cc2",description:"覆盖酸甜苦辣：心动、甜蜜、争吵、异地、失落、遗憾、和好与终于学会相爱。"},{id:"work",name:"职场",icon:"briefcase-business",color:"#edc96f",description:"不想上班、不想社交，也看不懂老板；用抽象幽默消解会议、加班和人际关系的枯燥。"},{id:"literary",name:"文学",icon:"feather",color:"#a9cf88",description:"有文化感但不堆辞藻，以山水、时序、人间和思考写出耐读、含蓄而有余韵的句子。"}],lt=[["moments",ct],["emo",rt],["abstract",gt],["kfc",it],["love",st],["work",xt],["literary",dt]],x=lt.flatMap(([t,a],e)=>a.map((c,o)=>({id:`${t}-${String(o+1).padStart(2,"0")}`,category:t,copies:c.copies??1600+(o*1379+e*911)%10400,featured:o<2,...c}))),ut={Aperture:P,BriefcaseBusiness:B,Check:F,CloudRain:K,Copy:j,Drumstick:z,Feather:U,Heart:G,House:Q,LayoutGrid:J,Quote:X,Search:Y,SearchX:Z,Shuffle:_,Sparkles:tt,Sun:et,Moon:W,TrendingUp:at,Waves:ot},m=new Map(E.map(t=>[t.id,t])),q="wordium-favorites",k="wordium-theme",pt=new Set(x.map(t=>t.id)),ht=JSON.parse(localStorage.getItem(q)||"[]"),n={category:"all",view:"all",query:"",favorites:new Set(ht.map(String).filter(t=>pt.has(t)))},r={categoryScroll:document.querySelector("#category-scroll"),copyGrid:document.querySelector("#copy-grid"),searchInput:document.querySelector("#search-input"),allCount:document.querySelector("#all-count"),favoriteCount:document.querySelector("#favorite-count"),resultCount:document.querySelector("#result-count"),feedTitle:document.querySelector("#feed-title"),feedKicker:document.querySelector("#feed-kicker"),feedDescription:document.querySelector("#feed-description"),emptyState:document.querySelector("#empty-state"),trendingTags:document.querySelector("#trending-tags"),toast:document.querySelector("#toast")};let L;function w(){nt({icons:ut,attrs:{"stroke-width":1.7}})}function mt(t){return t>=1e4?`${(t/1e4).toFixed(1)}w`:t>=1e3?`${(t/1e3).toFixed(1)}k`:String(t)}function ft(){r.categoryScroll.innerHTML=E.map(t=>{const a=t.id==="all"?x.length:x.filter(e=>e.category===t.id).length;return`
      <button
        class="category-chip ${n.category===t.id?"active":""}"
        type="button"
        data-category="${t.id}"
        style="--category-color: ${t.color}"
      >
        <i data-lucide="${t.icon}" aria-hidden="true"></i>
        <span>${t.name}</span>
        <b>${a}</b>
      </button>
    `}).join("")}function yt(){const a=[...x.reduce((e,c)=>e.set(c.tag,(e.get(c.tag)||0)+c.copies),new Map).entries()].sort((e,c)=>c[1]-e[1]).slice(0,7);r.trendingTags.innerHTML=a.map(([e])=>`<button class="trending-tag" type="button" data-tag="${e}"># ${e}</button>`).join("")}function f(){const t=n.query.trim().toLocaleLowerCase("zh-CN");return x.filter(a=>{const e=m.get(a.category),c=n.category==="all"||a.category===n.category,o=n.view!=="favorites"||n.favorites.has(a.id),g=!t||`${a.text} ${a.tag} ${e.name}`.toLocaleLowerCase("zh-CN").includes(t);return c&&o&&g})}function T(){const t=f(),a=m.get(n.category);r.resultCount.textContent=t.length,r.favoriteCount.textContent=n.favorites.size,r.allCount.textContent=x.length,r.emptyState.hidden=t.length>0,r.copyGrid.hidden=t.length===0,n.view==="favorites"?(r.feedTitle.textContent="我的收藏",r.feedKicker.textContent="SAVED WORDS",r.feedDescription.textContent="那些被你留下的句子，会在需要表达的时候重新出现。"):n.query?(r.feedTitle.textContent=`“${n.query}”的结果`,r.feedKicker.textContent="SEARCH RESULTS",r.feedDescription.textContent=`正在全部分类中寻找与“${n.query}”有关的表达。`):(r.feedTitle.textContent=n.category==="all"?"全部灵感":a.name,r.feedKicker.textContent=n.category==="all"?"CURATED FOR YOU":"MOOD COLLECTION",r.feedDescription.textContent=a.description),r.copyGrid.innerHTML=t.map(e=>{const c=m.get(e.category),o=n.favorites.has(e.id),g=e.text.length>58,s=e.category==="moments",l=s?e.text.split(`
`).map((u,p)=>`<span class="copy-line copy-line--${p===0?"lead":"support"}">${u}</span>`).join(""):e.text;return`
      <article
        class="copy-card category-${e.category} ${g?"long":""} ${s?"formatted":""}"
        data-copy-id="${e.id}"
        tabindex="0"
        role="button"
        aria-label="复制文案：${e.text}"
        style="--category-color: ${c.color}"
      >
        <div class="card-top">
          <span class="card-category"><span></span>${c.name}</span>
          <button
            class="favorite-button ${o?"active":""}"
            type="button"
            data-favorite-id="${e.id}"
            data-tooltip="${o?"取消收藏":"收藏"}"
            aria-label="${o?"取消收藏":"收藏"}"
          ><i data-lucide="heart" aria-hidden="true"></i></button>
        </div>
        <p class="card-text">${l}</p>
        <div class="card-bottom">
          <span class="card-tag"># ${e.tag}</span>
          <div class="card-actions">
            <span class="copy-count"><i data-lucide="trending-up" aria-hidden="true"></i>${mt(e.copies)}</span>
            <button class="copy-button" type="button" data-copy-button="${e.id}" data-tooltip="复制" aria-label="复制文案">
              <i data-lucide="copy" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </article>
    `}).join(""),w()}function vt(){document.querySelectorAll("[data-view]").forEach(t=>{t.classList.toggle("active",t.dataset.view===n.view)}),document.querySelectorAll("[data-mobile-view]").forEach(t=>{t.classList.toggle("active",t.dataset.mobileView===n.view)})}function d(){ft(),T(),vt(),w()}function y(t="已复制到剪贴板"){r.toast.querySelector("span:last-child").textContent=t,r.toast.classList.add("show"),window.clearTimeout(L),L=window.setTimeout(()=>r.toast.classList.remove("show"),2200)}async function A(t,a){let e=!1;try{navigator.clipboard&&window.isSecureContext&&(await navigator.clipboard.writeText(t),e=!0)}catch{e=!1}if(!e){const c=o=>{o.clipboardData.setData("text/plain",t),o.preventDefault()};document.addEventListener("copy",c),e=document.execCommand("copy"),document.removeEventListener("copy",c)}y(e?a:"复制失败，请重试")}function v(t){const a=x.find(e=>e.id===t);a&&A(a.text)}function wt(t){n.favorites.has(t)?(n.favorites.delete(t),y("已从收藏中移除")):(n.favorites.add(t),y("已收藏这句话")),localStorage.setItem(q,JSON.stringify([...n.favorites])),T()}function bt(t){n.view=t,t==="favorites"&&(n.category="all"),d(),document.querySelector(".feed").scrollIntoView({behavior:"smooth",block:"start"})}function St(){const t=f().length?f():x,a=t[Math.floor(Math.random()*t.length)];n.category=a.category,n.view="all",n.query="",r.searchInput.value="",d(),window.setTimeout(()=>{const e=document.querySelector(`[data-copy-id="${a.id}"]`);e==null||e.scrollIntoView({behavior:"smooth",block:"center"}),e==null||e.classList.add("is-highlighted"),window.setTimeout(()=>e==null?void 0:e.classList.remove("is-highlighted"),1e3)},30),A(a.text,"随机灵感已复制")}document.addEventListener("click",t=>{const a=t.target.closest("[data-category]");if(a){n.category=a.dataset.category,n.view="all",d();return}const e=t.target.closest("[data-favorite-id]");if(e){t.stopPropagation(),wt(e.dataset.favoriteId);return}const c=t.target.closest("[data-copy-button]");if(c){t.stopPropagation(),v(c.dataset.copyButton);return}const o=t.target.closest("[data-copy-id]");if(o){v(o.dataset.copyId);return}const g=t.target.closest("[data-view], [data-mobile-view]");if(g){bt(g.dataset.view||g.dataset.mobileView);return}const s=t.target.closest("[data-tag]");if(s){n.query=s.dataset.tag,n.category="all",n.view="all",r.searchInput.value=n.query,d();return}t.target.closest(".random-button, [data-mobile-random]")&&St()});document.addEventListener("keydown",t=>{const a=t.target.closest("[data-copy-id]");a&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),v(a.dataset.copyId)),t.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)&&(t.preventDefault(),document.querySelector(".search-field").classList.add("search-open"),r.searchInput.focus()),t.key==="Escape"&&document.activeElement===r.searchInput&&(r.searchInput.blur(),document.querySelector(".search-field").classList.remove("search-open"))});r.searchInput.addEventListener("input",t=>{n.query=t.target.value,n.category="all",n.view="all",d()});document.querySelector(".search-field").addEventListener("click",()=>{document.querySelector(".search-field").classList.add("search-open")});document.querySelector(".theme-button").addEventListener("click",()=>{const t=document.documentElement.dataset.theme==="light",a=t?"dark":"light";document.documentElement.dataset.theme=a,localStorage.setItem(k,a),document.querySelector(".theme-button").innerHTML=`<i data-lucide="${t?"sun":"moon"}" aria-hidden="true"></i>`,w()});document.querySelector("#clear-filter").addEventListener("click",()=>{n.category="all",n.view="all",n.query="",r.searchInput.value="",d()});const h=localStorage.getItem(k);h&&(document.documentElement.dataset.theme=h,h==="light"&&(document.querySelector(".theme-button").innerHTML='<i data-lucide="moon" aria-hidden="true"></i>'));yt();d();
