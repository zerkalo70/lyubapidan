(this.webpackJsonplyubapidan=this.webpackJsonplyubapidan||[]).push([[0],[,,,,,,function(e,a,t){e.exports={nav:"nav_nav__Et1Bj",item:"nav_item__3xsM5",active:"nav_active__3a-2j"}},function(e,a,t){e.exports={profileInfo:"profileInfo_profileInfo__3r8on",descriptionBlock:"profileInfo_descriptionBlock__24mrV"}},function(e,a,t){e.exports={dialogs:"dialogs_dialogs__3GW9J",dialogsItems:"dialogs_dialogsItems__3COTy",active:"dialogs_active__1CNOb",dialogItem:"dialogs_dialogItem__15yip",messages:"dialogs_messages__1cNZ0"}},,,,,function(e,a,t){e.exports={postsBlock:"myPosts_postsBlock__12CUv",posts:"myPosts_posts__3wr60"}},function(e,a,t){e.exports={dialogs:"dialogItem_dialogs__61QXa",active:"dialogItem_active__3C-MD",dialog:"dialogItem_dialog__3bXEd",messages:"dialogItem_messages__qgltT"}},,,,function(e,a,t){e.exports=t.p+"static/media/LogoF1.48d09aeb.png"},function(e,a,t){e.exports={headerImg:"header_headerImg__1fXoA"}},function(e,a,t){},,function(e,a,t){},function(e,a,t){e.exports={post:"post_post__3BeDl"}},function(e,a,t){e.exports=t.p+"static/media/Women1.c5901a19.jpg"},function(e,a,t){e.exports=t.p+"static/media/LogoF2.2952645f.jpg"},function(e,a,t){e.exports={message:"message_message__3BpLt"}},function(e,a,t){e.exports=t(39)},,function(e,a,t){},,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a),t.d(a,"rerenderEntireTree",(function(){return K}));var n=t(0),s=t.n(n);t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=function(e){console.log("State")},l={profilePage:{posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442",likesCount:12},{id:2,message:"\u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442!",likesCount:21}],newPostText:"NewPostText"},dialogsPage:{dialogs:[{id:1,name:"\u041b\u044e\u0431\u0430"},{id:2,name:"\u041c\u0430\u0448\u0430"},{id:3,name:"\u0414\u0430\u0448\u0430"}],messages:[{id:1,message:"\u042f \u0412\u0430\u0441 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e!"},{id:2,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:3,message:"\u0417\u0434\u043e\u0440\u043e\u0432\u043e!"}]},sidebar:{}},i=function(e){var a={id:3,message:e,likesCount:0};l.profilePage.posts.push(a),l.profilePage.newPostText="",o(l)},r=function(e){l.profilePage.newPostText=e,o(l)},c=l,m=t(17),d=t.n(m),u=(t(33),t(18)),g=t.n(u),p=t(19),f=t.n(p),E=function(){return s.a.createElement("header",null,s.a.createElement("div",null,s.a.createElement("img",{className:f.a.headerImg,src:g.a,alt:"iso"})))},_=t(20),v=t.n(_),P=function(){return s.a.createElement("footer",null,s.a.createElement("p",{className:v.a.footer},"\xa9 \u041f\u0435\u0442\u0440\u043e\u0432 \u0421.\u0412."))},x=t(6),N=t.n(x),w=t(4),h=function(){return s.a.createElement("div",{className:N.a.nav},s.a.createElement("ul",{className:N.a.item},s.a.createElement("li",null,s.a.createElement(w.b,{to:"/profile",activeClassName:N.a.active},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),s.a.createElement("li",null,s.a.createElement(w.b,{to:"/dialogs",activeClassName:N.a.active},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),s.a.createElement("li",null,s.a.createElement("a",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),s.a.createElement("li",null,s.a.createElement("a",null,"\u041c\u0443\u0437\u044b\u043a\u0430")),s.a.createElement("li",null,s.a.createElement("a",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))))},T=t(22),k=t.n(T),I=t(13),C=t.n(I),b=t(23),y=t.n(b),B=t(24),j=t.n(B),L=function(e){return s.a.createElement("div",{className:y.a.post},s.a.createElement("img",{src:j.a,alt:"iso"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"Likes:",e.likesCount)))},M=function(e){var a=e.posts.map((function(e){return s.a.createElement(L,{key:e.id,id:e.id,message:e.message,likesCount:e.likesCount})}));return s.a.createElement("div",{className:C.a.postsBlock},s.a.createElement("h3",null,"My posts"),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",{onChange:function(a){e.updateNewPostText(a.currentTarget.value)},value:e.newPostText})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.addPost(e.newPostText)}},"Add Post"))),s.a.createElement("div",{className:C.a.posts},a))},W=t(7),J=t.n(W),X=t(25),A=t.n(X),D=function(){return s.a.createElement("div",{className:J.a.profileInfo},s.a.createElement("div",null,s.a.createElement("img",{className:J.a.main,src:A.a,alt:"iso"})),s.a.createElement("div",{className:J.a.descriptionBlock},"ava + description"))},F=function(e){return s.a.createElement("div",{className:k.a.profile},s.a.createElement(D,null),s.a.createElement(M,{posts:e.posts,updateNewPostText:e.updateNewPostText,newPostText:e.newPostText,addPost:e.addPost}))},O=t(8),S=t.n(O),q=t(14),G=t.n(q),Q=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:G.a.dialog+" "+G.a.active},s.a.createElement(w.b,{to:a},e.name))},U=t(26),V=t.n(U),Z=function(e){return s.a.createElement("div",{className:V.a.dialogItem},e.message)},$=function(e){var a=e.dialogs.map((function(e){return s.a.createElement(Q,{name:e.name,id:e.id})})),t=e.messages.map((function(e){return s.a.createElement(Z,{message:e.message})}));return s.a.createElement("div",{className:S.a.dialogs},s.a.createElement("div",{className:S.a.dialogsItems},a),s.a.createElement("div",{className:S.a.messages},t))},z=t(1),H=function(e){return s.a.createElement(w.a,null,s.a.createElement("div",{className:"lyubaProject"},s.a.createElement(E,null),s.a.createElement(h,null),s.a.createElement("div",{className:"lyubaProjectContent"},s.a.createElement(z.a,{path:"/profile",render:function(){return s.a.createElement(F,{posts:e.state.profilePage.posts,updateNewPostText:e.updateNewPostText,newPostText:e.state.profilePage.newPostText,addPost:e.addPost})}}),s.a.createElement(z.a,{path:"/dialogs",render:function(){return s.a.createElement($,{dialogs:e.state.dialogsPage.dialogs,messages:e.state.dialogsPage.messages})}})),s.a.createElement(P,null)))},K=function(e){d.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(H,{state:e,addPost:i,updateNewPostText:r})),document.getElementById("root"))};K(c),o=K,"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.de30dca4.chunk.js.map