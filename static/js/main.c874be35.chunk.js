(this.webpackJsonplyubapidan=this.webpackJsonplyubapidan||[]).push([[0],{15:function(e,t,a){e.exports={profileInfo:"profileInfo_profileInfo__3r8on",descriptionBlock:"profileInfo_descriptionBlock__24mrV"}},16:function(e,t,a){e.exports={dialogs:"dialogs_dialogs__3GW9J",dialogsItems:"dialogs_dialogsItems__3COTy",active:"dialogs_active__1CNOb",dialogItem:"dialogs_dialogItem__15yip",messages:"dialogs_messages__1cNZ0"}},17:function(e,t,a){e.exports={userPhoto:"users_userPhoto__1tEe4",selectedPage:"users_selectedPage__1sfIb",page:"users_page__2aScR"}},23:function(e,t,a){e.exports={postsBlock:"myPosts_postsBlock__12CUv",posts:"myPosts_posts__3wr60"}},24:function(e,t,a){e.exports={dialogs:"dialogItem_dialogs__61QXa",active:"dialogItem_active__3C-MD",dialog:"dialogItem_dialog__3bXEd",messages:"dialogItem_messages__qgltT"}},37:function(e,t,a){e.exports=a.p+"static/media/LogoF1.48d09aeb.png"},38:function(e,t,a){e.exports={headerImg:"header_headerImg__1fXoA"}},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/LogoF2.2952645f.jpg"},42:function(e,t,a){e.exports={post:"post_post__3BeDl"}},43:function(e,t,a){e.exports=a.p+"static/media/Women1.c5901a19.jpg"},44:function(e,t,a){e.exports={message:"message_message__3BpLt"}},47:function(e,t,a){e.exports=a.p+"static/media/Women3.2574b695.jpg"},50:function(e,t,a){e.exports=a(79)},52:function(e,t,a){},57:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n);a(52),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(10),o=a(14),l=a(2),c={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442",likesCount:12},{id:2,message:"\u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442!",likesCount:21}],newPostText:"NewPostText"},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:3,message:e.newPostText,likesCount:10};return Object(l.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[a]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(l.a)({},e,{newPostText:t.newText});default:return e}},u={dialogs:[{id:1,name:"\u041b\u044e\u0431\u0430"},{id:2,name:"\u041c\u0430\u0448\u0430"},{id:3,name:"\u0414\u0430\u0448\u0430"}],messages:[{id:1,message:"\u042f \u0412\u0430\u0441 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e!"},{id:2,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:3,message:"\u0417\u0434\u043e\u0440\u043e\u0432\u043e!"}],newMessageBody:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(l.a)({},e,{newMessageBody:t.body});case"SEND-MESSAGE":var a=e.newMessageBody;return Object(l.a)({},e,{newMessageBody:"",messages:[].concat(Object(o.a)(e.messages),[{id:6,message:a}])});default:return e}},d={},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;arguments.length>1&&arguments[1];return e},g={users:[],pageSize:200,totalUsersCount:0,currentPage:1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(l.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(l.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(l.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(l.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(l.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(l.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(l.a)({},e,{totalUsersCount:t.count});default:return e}},f=Object(r.b)({profilePage:i,dialogsPage:m,sidebar:p,usersPage:E}),v=Object(r.c)(f),_=a(12),P=a.n(_),h=(a(57),a(37)),b=a.n(h),w=a(38),N=a.n(w),O=function(){return s.a.createElement("header",null,s.a.createElement("div",null,s.a.createElement("img",{className:N.a.headerImg,src:b.a,alt:"iso"})))},T=a(39),y=a.n(T),C=function(){return s.a.createElement("footer",null,s.a.createElement("p",{className:y.a.footer},"\xa9 \u041f\u0435\u0442\u0440\u043e\u0432 \u0421.\u0412."))},S=a(9),j=a.n(S),x=a(6),k=function(){return s.a.createElement("div",{className:j.a.nav},s.a.createElement("ul",{className:j.a.item},s.a.createElement("li",null,s.a.createElement(x.b,{to:"/profile",activeClassName:j.a.active},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),s.a.createElement("li",null,s.a.createElement(x.b,{to:"/dialogs",activeClassName:j.a.active},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),s.a.createElement("li",null,s.a.createElement(x.b,{to:"/users",activeClassName:j.a.active},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),s.a.createElement("li",null,s.a.createElement("a",null,"\u041c\u0443\u0437\u044b\u043a\u0430")),s.a.createElement("li",null,s.a.createElement("a",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))))},U=a(40),I=a.n(U),M=a(15),B=a.n(M),A=a(41),D=a.n(A),L=function(){return s.a.createElement("div",{className:B.a.profileInfo},s.a.createElement("div",null,s.a.createElement("img",{className:B.a.main,src:D.a,alt:"iso"})),s.a.createElement("div",{className:B.a.descriptionBlock},"ava + description"))},W=a(23),R=a.n(W),G=a(42),z=a.n(G),F=a(43),X=a.n(F),J=function(e){return s.a.createElement("div",{className:z.a.post},s.a.createElement("img",{src:X.a,alt:"iso"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"Likes:",e.likesCount)))},Y=function(e){var t=e.posts.map((function(e){return s.a.createElement(J,{key:e.id,id:e.id,message:e.message,likesCount:e.likesCount})})),a=s.a.createRef();return s.a.createElement("div",{className:R.a.postsBlock},s.a.createElement("h3",null,"My posts"),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",{onChange:function(){var t,n=null===(t=a.current)||void 0===t?void 0:t.value;e.updateNewPostText(n)},ref:a,value:e.newPostText})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.addPost()}},"Add Post"))),s.a.createElement("div",{className:R.a.posts},t))},q=a(7),Q=Object(q.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var a=function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t);e(a)},addPost:function(){e({type:"ADD-POST",postMessage:postMessage})}}}))(Y),V=function(e){return s.a.createElement("div",{className:I.a.profile},s.a.createElement(L,null),s.a.createElement(Q,{store:e.store}))},Z=a(1),$=a(16),H=a.n($),K=a(24),ee=a.n(K),te=function(e){var t="/dialogs/"+e.id;return s.a.createElement("div",{className:ee.a.dialog+" "+ee.a.active},s.a.createElement(x.b,{to:t},e.name))},ae=a(44),ne=a.n(ae),se=function(e){return s.a.createElement("div",{className:ne.a.dialogItem},e.message)},re=function(e){var t=e.dialogsPage,a=t.dialogs.map((function(e){return s.a.createElement(te,{name:e.name,id:e.id})})),n=t.messages.map((function(e){return s.a.createElement(se,{message:e.message})})),r=t.newMessageBody;return s.a.createElement("div",{className:H.a.dialogs},s.a.createElement("div",{className:H.a.dialogsItems},a),s.a.createElement("div",{className:H.a.messages},s.a.createElement("div",null,n),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",{value:r,onChange:function(t){var a=t.target.value;e.updateNewMessageBody(a)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.sendMessage()}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))))},oe=Object(q.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",body:e}}(t))},sendMessage:function(){e({type:"SEND-MESSAGE"})}}}))(re),le=a(45),ce=a(46),ie=a(48),ue=a(49),me=a(17),de=a.n(me),pe=a(47),ge=a.n(pe),Ee=a(25),fe=a.n(Ee),ve=function(e){Object(ue.a)(a,e);var t=Object(ie.a)(a);function a(){var e;Object(le.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.setCurrentPage(t),fe.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"& count=").concat(e.props.pageSize)).then((function(t){e.props.setUsers(t.data.items)}))},e}return Object(ce.a)(a,[{key:"componentDidMount",value:function(){var e=this;fe.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"& count=").concat(this.props.pageSize)).then((function(t){e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){for(var e=this,t=Math.ceil(this.props.totalUsersCount/this.props.pageSize),a=[],n=1;n<=t;n++)a.push(n);return s.a.createElement("div",null,s.a.createElement("div",null,a.map((function(t){return s.a.createElement("span",{className:e.props.currentPage===t?de.a.selectedPage:de.a.page,onClick:function(a){e.onPageChanged(t)}},t)}))),this.props.users.map((function(t){return s.a.createElement("div",{key:t.id},s.a.createElement("span",null,s.a.createElement("div",null,s.a.createElement("img",{src:null!=t.photos.small?t.photos.small:ge.a,alt:"iso",className:de.a.userPhoto})),s.a.createElement("div",null,t.followed?s.a.createElement("button",{onClick:function(){e.props.unfollow(t.id)}},"Unfollow"):s.a.createElement("button",{onClick:function(){e.props.follow(t.id)}},"follow"))),s.a.createElement("span",null,s.a.createElement("span",null,s.a.createElement("div",null,t.name),s.a.createElement("div",null,t.status)),s.a.createElement("span",null,s.a.createElement("div",null,"u.location.country"),s.a.createElement("div",null,"u.location.city"))))})))}}]),a}(s.a.Component),_e=Object(q.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage}}),(function(e){return{follow:function(t){e(function(e){return{type:"FOLLOW",userId:e}}(t))},unfollow:function(t){e(function(e){return{type:"UNFOLLOW",userId:e}}(t))},setUsers:function(t){e(function(e){return{type:"SET_USERS",users:e}}(t))},setCurrentPage:function(t){e({type:"SET_CURRENT_PAGE",currentPage:t})},setTotalUsersCount:function(t){e({type:"SET_TOTAL_USERS_COUNT",count:t})}}}))(ve),Pe=function(e){return s.a.createElement(x.a,null,s.a.createElement("div",{className:"lyubaProject"},s.a.createElement(O,null),s.a.createElement(k,null),s.a.createElement("div",{className:"lyubaProjectContent"},s.a.createElement(Z.a,{path:"/profile",render:function(){return s.a.createElement(V,{store:e.store})}}),s.a.createElement(Z.a,{path:"/dialogs",render:function(){return s.a.createElement(oe,{store:e.store})}}),s.a.createElement(Z.a,{path:"/users",render:function(){return s.a.createElement(_e,null)}})),s.a.createElement(C,null)))};P.a.render(s.a.createElement(x.a,null,s.a.createElement(s.a.StrictMode,null,s.a.createElement(q.a,{store:v},s.a.createElement(Pe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports={nav:"nav_nav__Et1Bj",item:"nav_item__3xsM5",active:"nav_active__3a-2j"}}},[[50,1,2]]]);
//# sourceMappingURL=main.c874be35.chunk.js.map