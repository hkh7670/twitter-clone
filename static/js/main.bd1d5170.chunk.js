(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(32),s=n.n(r),i=n(8),o=n(24),u=n(6),l=n(9),j=n.n(l),b=n(16),d=n(23);n(40),n(51),n(52);d.a.initializeApp({apiKey:"AIzaSyBOQBslXgL9D8cK_uvwMh00oFSAYE4XKFA",authDomain:"twitter-clone-e1a6b.firebaseapp.com",projectId:"twitter-clone-e1a6b",storageBucket:"twitter-clone-e1a6b.appspot.com",messagingSenderId:"532808539227",appId:"1:532808539227:web:c30c85b8e3ba0c1da8b37e"});var p=d.a,f=d.a.auth(),O=d.a.firestore(),h=d.a.storage(),m=n(1),x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],O=d[1],h=Object(a.useState)(""),x=Object(i.a)(h,2),g=x[0],v=x[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},y=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:y,className:"container",children:[Object(m.jsx)("input",{type:"email",placeholder:"Email",required:!0,value:n,name:"email",onChange:w,className:"authInput"}),Object(m.jsx)("input",{type:"password",placeholder:"Password",required:!0,value:o,name:"password",onChange:w,className:"authInput"}),Object(m.jsx)("input",{type:"submit",value:p?"Create Account":"Sign In",className:"authInput authSubmit"}),g&&Object(m.jsx)("span",{className:"authError",children:g})]}),Object(m.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},g=n(12),v=n(22),w=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.name,e.t0=n,e.next="google"===e.t0?4:"github"===e.t0?6:8;break;case 4:return a=new p.auth.GoogleAuthProvider,e.abrupt("break",8);case 6:return a=new p.auth.GithubAuthProvider,e.abrupt("break",8);case 8:return e.next=10,f.signInWithPopup(a);case 10:c=e.sent,console.log(c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(m.jsx)(g.a,{icon:v.b})]}),Object(m.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with GitHub ",Object(m.jsx)(g.a,{icon:v.a})]})]})]})},y=n(34),N=n(19),S=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),d=l[0],p=l[1],f=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=7;break}return e.next=4,O.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:window.alert("Delete successful!");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!window.confirm("Are you sure you want to edit this nweet?")){e.next=6;break}return e.next=5,O.doc("nweets/".concat(t.id)).update({text:d,updatedAt:Date.now()});case 5:v();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){return o((function(e){return!e}))};return Object(m.jsx)("div",{className:"nweet",children:s?Object(m.jsx)(m.Fragment,{children:n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:x,className:"container nweetEdit",children:[Object(m.jsx)("input",{value:d,onChange:function(e){var t=e.target.value;p(t)},required:!0,type:"text",maxLength:120,placeholder:"Edit your nweet",autoFocus:!0,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Edit Nweet",className:"formBtn"})]}),Object(m.jsx)("span",{onClick:v,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl}),n&&Object(m.jsxs)("div",{className:"nweet__actions",children:[Object(m.jsx)("span",{onClick:f,children:Object(m.jsx)(g.a,{icon:N.d})}),Object(m.jsx)("span",{onClick:v,children:Object(m.jsx)(g.a,{icon:N.a})})]})]})})},k=n(54),I=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",!l){e.next=12;break}return c=h.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,O.collection("nweets").add(o);case 15:s(""),d();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsxs)("label",{for:"fileSelector",className:"factoryInput__label",children:[Object(m.jsx)("span",{children:"Add Photo"}),Object(m.jsx)(g.a,{icon:N.b})]}),Object(m.jsx)("input",{id:"fileSelector",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files;if(t.length>0){var n=t[0],a=new FileReader;a.onloadend=function(e){console.log(e);var t=e.target.result;d(t)},a.readAsDataURL(n)}else d()},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"factoryForm__attachment",children:[Object(m.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(m.jsxs)("div",{className:"factoryForm__clear",onClick:function(){d(null),document.querySelector("#fileSelector").value=null},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(g.a,{icon:N.c})]})]})]})},A=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){O.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(I,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(m.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},C=function(e){var t=e.userObj;return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50,marginBottom:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(m.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"2x"})})}),Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(m.jsx)(g.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(m.jsx)("span",{style:{marginTop:10},children:t?"".concat(t.displayName,"'s Profile"):"Profile"})]})})]})})},F=function(e){var t=e.userObj,n=e.refreshUser,c=Object(u.f)(),r=Object(a.useState)(t.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt","desc").get();case 2:n=e.sent,console.log(n),console.log(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===o){e.next=6;break}return e.next=4,t.updateProfile({displayName:o});case 4:e.sent,n&&n();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:o,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),c.push("/")},children:"Log Out"})]})},B=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return console.log(a),Object(m.jsxs)(o.a,{children:[n&&Object(m.jsx)(C,{userObj:a}),Object(m.jsxs)(u.c,{children:[n?Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",display:"flex",justifyContent:"center"},children:[Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(A,{userObj:a})}),Object(m.jsx)(u.a,{exact:!0,path:"/profile",children:Object(m.jsx)(F,{userObj:a,refreshUser:t})})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(w,{})})}),";"]})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(null),j=Object(i.a)(l,2),b=j[0],d=j[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){e?(u(!0),d({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})):(u(!1),d(null)),c(!0)}))}),[]),Object(m.jsx)(a.Fragment,{children:n?Object(m.jsx)(B,{refreshUser:function(){console.log(f.currentUser);var e=f.currentUser,t={uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}};d(t)},isLoggedIn:o,userObj:b}):"Initializing..."})};n(49);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.bd1d5170.chunk.js.map