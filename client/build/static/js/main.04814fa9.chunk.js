(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,s){},32:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),l=s(17),i=s.n(l),r=(s(31),s(32),s(3)),c=s(26),o=s(4),u=s(11),d=s(6),b="/api/v1",j={login:{url:"".concat(b,"/auth/signin")},signUp:{url:"".concat(b,"/auth/signup")},getUser:{url:"".concat(b,"/user/currentUser")},articles:{add:{url:"".concat(b,"/article/")},getAll:{url:"".concat(b,"/p/articles")},getUserArticles:{url:"".concat(b,"/article")},likeArticle:{url:function(e){return"".concat(b,"/article/like/").concat(e)}},unlikeArticle:{url:function(e){return"".concat(b,"/article/unlike/").concat(e)}},getSingleArticle:{url:function(e){return"".concat(b,"/p/article/").concat(e)}},deleteArticle:{url:function(e){return"".concat(b,"/article/").concat(e)}}}},m=function(e){window.location.pathname=e},p=function(e,t){return t.headers&&(t.headers.Authorization="Bearer ".concat(localStorage.getItem("auth_token"))),console.log("here are options:",t),fetch(e,Object(r.a)(Object(r.a)({},t),{},{mode:"cors"})).then((function(e){return e.json()||e})).then((function(e){return e})).catch((function(e){return{err:e}}))},h=s(5),x=s(10),f=s(0),O=s(22),g=function(e){var t=e.thumbnail,s=e.title,a=e.description,n=e.likesCount,l=e.authorName,i=e.authorProfile,r=e.publishedTime,c=e.slug,o=e.history,u=e.is_private,d=e.deleteArticleAction,b=e.user,j=e.author,m=e.context;return Object(f.jsxs)("div",{className:"max-w-xl w-full px-4 py-3 bg-white shadow-md rounded-md my-8 cursor-pointer",children:[Object(f.jsxs)("div",{className:"flex justify-between items-center",children:[Object(f.jsxs)("div",{className:"text-sm font-light flex flex-row gap-2 items-center",children:[Object(f.jsx)("span",{className:"w-full",children:Object(f.jsx)("img",{className:"w-7",src:i,alt:"author_profile"})}),Object(f.jsx)("span",{className:"w-16",style:{minWidth:"120px"},children:l})]}),Object(f.jsxs)("div",{className:"flex gap-3",children:[m&&"my"===m&&(null===j||void 0===j?void 0:j._id)&&(null===b||void 0===b?void 0:b._id)&&(null===b||void 0===b?void 0:b._id)===j._id?Object(f.jsx)("span",{onClick:d,children:Object(f.jsx)("img",{className:"w-5",src:"https://res.cloudinary.com/mgdeveloper/image/upload/v1630854601/trash_gumczn.png",alt:"delete_icon"})}):null,u?Object(f.jsx)("span",{className:"text-xs ml-2 bg-yellow-600 p-1 rounded-md text-white",children:"Private"}):Object(f.jsx)("span",{className:"text-xs ml-2 bg-green-600 p-1 rounded-md text-white",children:"Public"}),Object(f.jsx)("span",{className:"bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full uppercase text-xs",children:"Tags"})]})]}),Object(f.jsxs)("div",{onClick:function(){return o.push("/article/".concat(c))},className:"flex flex-row flex-auto mt-3 items-center justify-between gap-4",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"text-lg font-semibold mt-2 max-w-full",style:{textOverflow:"ellipsis",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:2,display:"-webkit-box",wordWrap:"break-all",wordBreak:"break-all"},children:s}),Object(f.jsx)("p",{className:"text-gray-600 text-sm mt-2 overflow-ellipsis max-w-full",style:{textOverflow:"ellipsis",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:5,display:"-webkit-box",wordWrap:"break-all",wordBreak:"break-all"},children:a})]}),Object(f.jsxs)("div",{className:"mt-3 flex justify-between",children:[Object(f.jsxs)("span",{className:"text-xs",children:[Object(f.jsx)("label",{className:"text-gray-400 font-bold",children:"Published:"})," ",O(r).fromNow()]}),Object(f.jsx)("span",{className:"text-xs text-blue-800 font-bold",children:n>0?"Likes ".concat(n):null})]})]}),Object(f.jsx)("div",{className:"min-w-1/5",children:Object(f.jsx)("img",{alt:"thumbnail",style:{height:"180px"},className:"m-auto",src:t||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFSgdhQvBlZO6I8s-jtKIYOED1NqEs4xEjA&usqp=CAU"})})]})]})},v=function(e){var t=e.articles;return Object(f.jsxs)("div",{className:"w-4/5 flex flex-wrap flex-col gap-4 m-auto p-20 font-mono",children:[Object(f.jsx)("h1",{className:"text-blue-500 font-bold text-3xl mb-4",children:e.message}),Object(f.jsx)("div",{className:"flex flex-wrap gap-6 justify-center",children:(t.data||[]).map((function(t){var s,a,n,l,i,r,c;return Object(f.jsx)(g,(c={thumbnail:t.thumbnail,title:t.title,description:t.description,likesCount:(null===t||void 0===t||null===(s=t.likes)||void 0===s?void 0:s.length)||0,authorName:(null===(a=t.author)||void 0===a?void 0:a.name)||(null===(n=t.author)||void 0===n?void 0:n.user_name),authorProfile:null===(l=t.author)||void 0===l?void 0:l.profile_image,author:t.author,publishedTime:t.createdAt,slug:t.slug,history:e.history,is_private:t.is_private},Object(x.a)(c,"likesCount",null===t||void 0===t||null===(i=t.likes)||void 0===i?void 0:i.length),Object(x.a)(c,"deleteArticleAction",(function(){return e.deleteArticleAction({id:t._id})})),Object(x.a)(c,"user",null===e||void 0===e||null===(r=e.user)||void 0===r?void 0:r.data),Object(x.a)(c,"context",e.context),c),t._id)}))})]})},E=Object(d.b)((function(e){return{articles:e.articlesState.publicArticles}}),{getAllPublicArticles:function(e){return function(e){e({type:"GET_PUBLIC_ARTICLES",status:0}),p(j.articles.getAll.url,{method:"GET",headers:{}}).then((function(t){200===t.statusCode||201===t.statusCode?e({type:"SET_PUBLIC_ARTICLES",response:null===t||void 0===t?void 0:t.response,status:1}):e({type:"SET_PUBLIC_ARTICLES",response:"Oops, Something bad happened",status:-1})})).catch((function(t){e({type:"SET_PUBLIC_ARTICLES",response:"Oops Something bad happened",status:-1})}))}}})((function(e){var t=e.getAllPublicArticles,s=e.articles;return Object(a.useEffect)((function(){s.data&&s.data.length||t()}),[]),0===(null===s||void 0===s?void 0:s.status)?Object(f.jsx)("h1",{children:"Loading..."}):s&&s.data&&s.data.length?Object(f.jsx)(v,Object(r.a)(Object(r.a)({},e),{},{message:"Explore articles from great authors"})):Object(f.jsx)("div",{className:"w-4/5 flex flex-wrap flex-col gap-4 m-auto p-20 font-mono",children:Object(f.jsx)("h1",{className:"text-black-500 font-bold text-3xl mb-4",children:"No articles found!"})})})),A=function(e){var t=e.isAuthenticated,s=e.logoutAction,a=e.user;return Object(f.jsxs)("nav",{className:"flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono",role:"navigation",children:[Object(f.jsxs)(u.b,{to:"/",className:"pl-8",children:[t&&a&&a.data&&a.data.name?Object(f.jsx)("span",{className:"text-blue-500 font-bold",children:"Welcome ".concat(a.data.name,"! ")}):null,"Publish Article with ease!"]}),Object(f.jsx)("div",{className:"px-4 cursor-pointer md:hidden",children:Object(f.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})}),Object(f.jsx)("div",{className:"pr-8 md:block hidden",children:t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.b,{to:"/create",className:"p-4 text-blue-600 font-bold",children:"Publish new"}),Object(f.jsx)(u.b,{to:"/my",className:"p-4 text-blue font-bold",children:"My Articles"}),Object(f.jsx)("a",{href:"#",onClick:s,className:"text-primary font-bold",children:"Log Out"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.b,{to:"/login",className:"p-4",children:"Login"}),Object(f.jsx)(u.b,{to:"/signup",className:"p-4",children:"Signup"})]})})]})},S=s(12),_=function(e){var t=e.file,s=e.removeAction;return Object(f.jsxs)("div",{className:"relative",children:[Object(f.jsx)("img",{className:"relative mt-3",src:URL.createObjectURL(t),alt:t.name}),Object(f.jsx)("span",{onClick:s,className:"absolute top-6 right-4 bg-blue text-white px-2 rounded-xl",children:" X "})]})},y=Object(d.b)((function(e){return{addArticle:e.articlesState.addArticle}}),{addNewArticle:function(e){return function(t){t({type:"ADD_ARTICLE",status:0}),h.b.loading("Saving Article"),p(j.articles.add.url,{method:"POST",headers:{},body:e}).then((function(e){200===e.statusCode||201===e.statusCode?(t({type:"SET_ADD_ARTICLE",response:null===e||void 0===e?void 0:e.response,status:1}),h.b.success("New Article Published Successfully"),m("/")):t({type:"SET_ADD_ARTICLE",response:"Oops, Something bad happened",status:-1})})).catch((function(e){t({type:"SET_ADD_ARTICLE",response:"Oops Something bad happened",status:-1})}))}}})((function(e){var t=e.addNewArticle,s=e.addArticle,n=Object(a.useState)(""),l=Object(S.a)(n,2),i=l[0],r=l[1],c=Object(a.useState)(""),o=Object(S.a)(c,2),u=o[0],d=o[1],b=Object(a.useState)(""),j=Object(S.a)(b,2),m=j[0],p=j[1],x=Object(a.useState)(!1),O=Object(S.a)(x,2),g=O[0],v=O[1],E=function(e){var t=e.target,s=t.name,a=t.value;if("title"===s){if(a.length>100)return;r(a)}if("description"===s){if(a.length>2e3)return;d(a)}};return Object(a.useEffect)((function(){s&&-1===s.status&&h.b.error((null===s||void 0===s?void 0:s.data)||"Oops something bad happened")}),[s]),Object(f.jsxs)("div",{className:"w-1/2 m-auto p-20 font-mono ".concat(0===(null===s||void 0===s?void 0:s.status)?"pointer-events-none":""),children:[Object(f.jsxs)("div",{className:"flex flex-col mb-20",children:[Object(f.jsx)("label",{className:"text-gray-700 text-3xl font-bold mb-5",children:"Thumbnail:"}),Object(f.jsx)("input",{type:"file",accept:"image/png, image/gif, image/jpeg",onChange:function(e){var t=Object(S.a)(e.target.files,1)[0];p(t)}}),m&&Object(f.jsx)(_,{file:m,removeAction:function(){return p("")}})]}),Object(f.jsxs)("div",{className:"flex flex-col mb-20",children:[Object(f.jsx)("label",{className:"text-gray-700 text-3xl font-bold mb-5",children:"Title(Max 100):"}),Object(f.jsx)("textarea",{className:"h-20 py-4 px-2 border-solid border-1 border-grey rounded",style:{resize:"none",border:"1px solid #dadada"},placeholder:"Enter title",onChange:E,name:"title",value:i,disabled:0===(null===s||void 0===s?void 0:s.status)})]}),Object(f.jsxs)("div",{className:"flex flex-col",children:[Object(f.jsx)("label",{className:"text-gray-700 text-3xl font-bold mb-5",children:"Description:"}),Object(f.jsx)("textarea",{className:"h-60 py-4 px-2 rounded",style:{resize:"none",border:"1px solid #dadada"},placeholder:"Enter description",onChange:E,name:"description",value:u,disabled:0===(null===s||void 0===s?void 0:s.status)})]}),Object(f.jsxs)("div",{className:"flex flex-row gap-2 items-baseline mt-2",children:[Object(f.jsx)("input",{type:"checkbox",checked:g,onChange:function(e){return v(e.target.checked)}}),Object(f.jsx)("label",{className:"text-gray-700 text-small font-bold mb-5",children:"Do you want to make this private:"})]}),Object(f.jsx)("div",{className:"flex flex-col",children:Object(f.jsx)("button",{className:"w-1/2 m-auto bg-blue-500 py-2 px-4 text-sm text-white rounded border border-blue mt-10 focus:outline-none focus:border-green-dark",onClick:function(){if(i&&u&&m){var e=new FormData;e.append("title",i),e.append("description",u),e.append("thumbnail",m),e.append("is_private",g),t(e)}else h.b.error("Please provide all the fields")},disabled:0===(null===s||void 0===s?void 0:s.status),children:0===(null===s||void 0===s?void 0:s.status)?"Saving Article":"Save Article"})})]})})),T=function(e){return Object(f.jsx)("div",{className:"w-4/5 flex flex-wrap flex-col gap-4 m-auto p-20 font-mono",children:Object(f.jsx)("h1",{className:"text-black-500 font-bold text-3xl mb-4",children:e.message})})},N=s(22),L=Object(d.b)((function(e){return{article:e.articlesState.article,likeArticleData:e.articlesState.likeArticle,unLikeArticleData:e.articlesState.unlikeArticle,user:e.userState.user_info}}),{getSingleArticle:function(e){return function(t){t({type:"GET_SINGLE_ARTICLE",status:0}),p(j.articles.getSingleArticle.url(e.slug),{method:"GET",headers:{}}).then((function(e){200===e.statusCode||201===e.statusCode?t({type:"SET_SINGLE_ARTICLE",response:null===e||void 0===e?void 0:e.response,status:1}):t({type:"SET_SINGLE_ARTICLE",response:"Oops, Something bad happened",status:-1})})).catch((function(e){t({type:"SET_SINGLE_ARTICLE",response:"Oops Something bad happened",status:-1})}))}},likeArticle:function(e){return function(t){t({type:"LIKE_ARTICLE",status:0}),p(j.articles.likeArticle.url(e.id),{method:"PUT",headers:{}}).then((function(e){200===e.statusCode?t({type:"SET_LIKE_ARTICLE",response:null===e||void 0===e?void 0:e.response,status:1}):t({type:"SET_LIKE_ARTICLE",response:"Oops, Something bad happened",status:-1})})).catch((function(e){t({type:"SET_LIKE_ARTICLE",response:"Oops Something bad happened",status:-1})}))}},unLikeArticle:function(e){return function(t){t({type:"UNLIKE_ARTICLE",status:0}),p(j.articles.unlikeArticle.url(e.id),{method:"PUT",headers:{}}).then((function(e){200===e.statusCode?t({type:"SET_UNLIKE_ARTICLE",response:null===e||void 0===e?void 0:e.response,status:1}):t({type:"SET_UNLIKE_ARTICLE",response:"Oops, Something bad happened",status:-1})})).catch((function(e){t({type:"SET_UNLIKE_ARTICLE",response:"Oops Something bad happened",status:-1})}))}}})((function(e){var t,s,n=e.getSingleArticle,l=e.article,i=e.match.params,r=e.likeArticle,c=e.likeArticleData,o=e.unLikeArticle,u=e.unLikeArticleData,d=e.user,b=Object(a.useState)(null),j=Object(S.a)(b,2),m=j[0],p=j[1];if(Object(a.useEffect)((function(){n({slug:i.id})}),[]),Object(a.useEffect)((function(){c&&1===c.status&&c.data&&p("like")}),[c]),Object(a.useEffect)((function(){u&&1===u.status&&u.data&&p("unlike")}),[u]),Object(a.useEffect)((function(){var t,s,a,n;l.data&&(null===(t=l.data)||void 0===t||null===(s=t.likes)||void 0===s?void 0:s.includes(null===(a=e.user)||void 0===a||null===(n=a.data)||void 0===n?void 0:n._id))?p("like"):p(!1)}),[l]),l&&0===l.status)return Object(f.jsx)(T,{message:"Fetching details..."});var x=function(t){var s,a,n;e.isAuthenticated&&(null===(s=e.user)||void 0===s?void 0:s.data)?"like"===t?r({id:null===l||void 0===l||null===(a=l.data)||void 0===a?void 0:a._id}):o({id:null===l||void 0===l||null===(n=l.data)||void 0===n?void 0:n._id}):h.b.error("Please Sign in yourself to like this article")};if(!l||!l.data)return Object(f.jsx)(T,{message:"Something wrong happened..."});var O=null===l||void 0===l?void 0:l.data,g=O.thumbnail,v=O.title,E=O.description,A=O.createdAt,_=O.author;return Object(f.jsxs)("div",{className:"w-1/2 m-auto p-20 font-mono",children:[Object(f.jsx)("div",{className:"mb-8",children:Object(f.jsx)("img",{className:"max-h-96 w-full object-cover",src:g,alt:"thumbnail"})}),Object(f.jsx)("div",{className:"mb-12 mt-4 text-4xl font-bold",children:v}),Object(f.jsxs)("div",{className:"flex flex-col gap-1",children:[Object(f.jsxs)("div",{className:"flex flex-col",children:[Object(f.jsxs)("span",{className:"text-base italic",children:[Object(f.jsx)("label",{className:"text-gray-400 font-bold mr-2",children:"Published by:"}),Object(f.jsx)("span",{className:"".concat((null===d||void 0===d||null===(t=d.data)||void 0===t?void 0:t._id)===(null===_||void 0===_?void 0:_._id)?"bg-green-500":"bg-blue-500"," text-white rounded p-1"),children:(null===d||void 0===d||null===(s=d.data)||void 0===s?void 0:s._id)===(null===_||void 0===_?void 0:_._id)?"You":null===_||void 0===_?void 0:_.name})]}),Object(f.jsx)("br",{})]}),Object(f.jsxs)("div",{className:"flex flex-row gap-4",children:[Object(f.jsxs)("span",{className:"text-base italic",children:[Object(f.jsx)("label",{className:"text-gray-400 font-bold",children:"Published:"})," ",N(A).fromNow()]}),function(){var t;return!(!e.user||!e.user.data)&&!(!(null===(t=l.data)||void 0===t?void 0:t.author)||e.user.data._id!==l.data.author._id)}()?null:"like"===m?Object(f.jsx)("button",{onClick:function(){return x("unlike")},className:"",title:"Unlike this",children:Object(f.jsx)("img",{className:"w-6",src:"https://res.cloudinary.com/mgdeveloper/image/upload/v1630764039/like_2_k5y4fu.png",alt:"unlike_image"})}):Object(f.jsx)("button",{onClick:function(){return x("like")},className:"",title:"Like this",children:Object(f.jsx)("img",{className:"w-6",src:"https://res.cloudinary.com/mgdeveloper/image/upload/v1630761338/like_ikau7c.png",alt:"like_image"})})]})]}),Object(f.jsx)("div",{className:"mt-4 text-gray-500 leading-loose",children:E})]})})),w=Object(d.b)((function(e){return{articles:e.articlesState.articles}}),{getUserArticles:function(e){return function(e){e({type:"GET_ALL_ARTICLES",status:0}),p(j.articles.getUserArticles.url,{method:"GET",headers:{}}).then((function(t){200===t.statusCode||201===t.statusCode?e({type:"SET_ALL_ARTICLES",response:null===t||void 0===t?void 0:t.response,status:1}):e({type:"SET_ALL_ARTICLES",response:"Oops, Something bad happened",status:-1})})).catch((function(t){e({type:"SET_ALL_ARTICLES",response:"Oops Something bad happened",status:-1})}))}},deleteArtcile:function(e){return function(t){t({type:"DELETE_ARTICLE",status:0}),p(j.articles.deleteArticle.url(e.id),{method:"DELETE",headers:{}}).then((function(s){200===s.statusCode?(t({type:"SET_DELETE_ARTICLE",response:null===s||void 0===s?void 0:s.response,status:1}),t({type:"UPDATE_ARTICLE_LIST",toDelete:e,status:1})):t({type:"SET_DELETE_ARTICLE",response:"Oops, Something bad happened",status:-1})})).catch((function(e){t({type:"SET_DELETE_ARTICLE",response:"Oops Something bad happened",status:-1})}))}}})((function(e){var t=e.getUserArticles,s=e.articles,n=e.deleteArtcile;return Object(a.useEffect)((function(){s.data&&s.data.length||t()}),[]),0===(null===s||void 0===s?void 0:s.status)?Object(f.jsx)("h1",{children:"Loading..."}):s&&s.data&&s.data.length?Object(f.jsx)(v,Object(r.a)(Object(r.a)({articles:s.data||[]},e),{},{message:"My Articles",deleteArticleAction:n,context:"my"})):Object(f.jsx)("div",{className:"w-4/5 flex flex-wrap flex-col gap-4 m-auto p-20 font-mono",children:Object(f.jsx)("h1",{className:"text-black-500 font-bold text-3xl mb-4",children:"No articles found!"})})})),C=function(e){var t=e.type;return Object(f.jsxs)("div",{className:"w-full h-screen",children:[Object(f.jsx)(A,Object(r.a)({},e)),"explore"===t?Object(f.jsx)(E,Object(r.a)({},e)):null,"create"===t?Object(f.jsx)(y,Object(r.a)({},e)):null,"article"===t?Object(f.jsx)(L,Object(r.a)({},e)):null,"my_articles"===t?Object(f.jsx)(w,Object(r.a)({},e)):null]})},k=function(){return function(e){e({type:"USER_AUTH"})}},I=Object(d.b)((function(e){return{authState:e.userState.authState}}),{login:function(e){return function(t){t({type:"USER_AUTH"}),p(j.login.url,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){if(200===e.statusCode){t({type:"SET_USER_AUTH",isError:!1,message:"Successfully Logged in"});var s=null===e||void 0===e?void 0:e.response;localStorage.setItem("auth_token",s.token),h.b.success("Logged In"),m("/")}else t({type:"SET_USER_AUTH",isError:!0,message:e.message})})).catch((function(e){var s,a,n=(null===e||void 0===e||null===(s=e.response)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.response)||"Oops Something bad happened";t({type:"SET_USER_AUTH",message:n,isError:!0})}))}},resetState:k})((function(e){var t=e.authState,s=e.login,n=e.resetState;return Object(a.useEffect)((function(){n()}),[]),Object(a.useEffect)((function(){t.isError&&h.b.error(null===t||void 0===t?void 0:t.message)}),[t]),Object(f.jsx)("div",{className:"h-screen flex bg-gray-bg1",children:Object(f.jsxs)("div",{className:"w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",children:[Object(f.jsx)("h1",{className:"text-2xl font-medium text-blue mt-4 mb-12 text-center",children:"Log in to your account \ud83d\udd10"}),Object(f.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault();var a=null===(t=e.target)||void 0===t?void 0:t.elements,n=a.email,l=a.password;n.value&&l.value?s({email:n.value,password:l.value}):h.b.error("Please fill all the required fields")},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{type:"email",className:"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4",id:"email",placeholder:"Your Email"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{type:"password",className:"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4",id:"password",placeholder:"Your Password"})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center mt-6 flex-col gap-3",children:[Object(f.jsx)("button",{className:"bg-blue-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark",children:"Login"}),Object(f.jsx)("a",{className:"blue",onClick:function(){return e.history.push("/signup")},children:"Create a new account"})]})]})]})})})),R=Object(d.b)((function(e){return{authState:e.userState.authState}}),{register:function(e){return function(t){t({type:"USER_AUTH"}),p(j.signUp.url,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){if(200===e.statusCode){t({type:"SET_USER_AUTH",isError:!1,message:"Successfully Registered in"});var s=null===e||void 0===e?void 0:e.response;localStorage.setItem("auth_token",s.token),h.b.success("Successfully registered!"),m("/")}else t({type:"SET_USER_AUTH",isError:!0,message:e.message})})).catch((function(e){var s,a,n=(null===e||void 0===e||null===(s=e.response)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.response)||"Oops Something bad happened";t({type:"SET_USER_AUTH",message:n,isError:!0})}))}},resetState:k})((function(e){var t=e.authState,s=e.register,n=e.resetState;return Object(a.useEffect)((function(){n()}),[]),Object(a.useEffect)((function(){t.isError&&h.b.error(null===t||void 0===t?void 0:t.message)}),[t]),Object(f.jsx)("div",{className:"h-screen flex bg-gray-bg1",children:Object(f.jsxs)("div",{className:"w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",children:[Object(f.jsxs)("h3",{className:"text-md font-bold text-blue mt-4 text-center",children:[" Publish Articles with ease",Object(f.jsx)("br",{})]}),Object(f.jsx)("h1",{className:"text-2xl font-medium text-primary mt-4 mb-12 text-center",children:"Create a new account"}),Object(f.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault();var a=null===(t=e.target)||void 0===t?void 0:t.elements,n=a.name,l=a.email,i=a.password,r=a.username,c={name:n.value,email:l.value,password:i.value,user_name:r.value};c.name&&c.email&&c.password&&c.user_name?s(c):h.b.error("Please fill all the required fields")},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"email",children:"Name"}),Object(f.jsx)("input",{type:"text",className:"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4",id:"name",placeholder:"Your Name"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{type:"email",className:"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4",id:"email",placeholder:"Your Email"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"email",children:"User Name"}),Object(f.jsx)("input",{type:"text",className:"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4",id:"username",placeholder:"Choose username"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{type:"password",className:"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4",id:"password",placeholder:"Your Password"})]}),Object(f.jsxs)("div",{className:"flex justify-center items-center mt-6 flex-col gap-3",children:[Object(f.jsx)("button",{className:"bg-blue-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark",children:"Register"}),Object(f.jsx)("a",{className:"text-blue",onClick:function(){return e.history.push("/login")},children:"Login ?"})]})]})]})})})),U={isAuthenticated:function(){return!!localStorage.getItem("auth_token")}},P=["component"],D=function(e){var t=e.component,s=Object(c.a)(e,P);return Object(f.jsx)(o.b,Object(r.a)(Object(r.a)({},s),{},{render:function(e){return U.isAuthenticated()?Object(f.jsx)(t,Object(r.a)({},e)):Object(f.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},F=Object(d.b)((function(e){return{user:e.userState.user_info}}),{getCurrentUser:function(e){return function(e){e({type:"GET_USER_PROFILE",status:0}),p(j.getUser.url,{method:"GET",headers:{}}).then((function(t){var s=null===t||void 0===t?void 0:t.response;200===t.statusCode&&e({type:"SET_USER_PROFILE",response:s,status:1}),401===t.statusCode&&(e({type:"SET_USER_PROFILE",isError:!0}),localStorage.removeItem("auth_token"),m("/login"))})).catch((function(t){e({type:"SET_USER_PROFILE",response:"Oops Something bad happened",status:-1})}))}},logOut:function(){return function(e){e({type:"LOGOUT"}),e({type:"RESET"}),localStorage.clear(),m("/login")}}})((function(e){var t=e.user,s=e.getCurrentUser,n=e.logOut;if(Object(a.useEffect)((function(){U.isAuthenticated()&&s()}),[]),t&&0===t.status)return Object(f.jsx)("div",{className:"w-full h-full justify-content-center align-center bg-white text-black font-mono",children:Object(f.jsx)("h1",{className:"text-3xl font-medium mt-4 mb-12 text-center",children:"Loading..."})});var l=!(!U.isAuthenticated()||!(null===t||void 0===t?void 0:t.data));return Object(f.jsx)("div",{className:"w-full h-screen bg-gray-80",children:Object(f.jsx)(u.a,{children:Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",component:function(e){return Object(f.jsx)(C,Object(r.a)({isAuthenticated:l,type:"explore",user:t,logoutAction:n},e))}}),Object(f.jsx)(D,{exact:!0,path:"/my",component:function(e){return Object(f.jsx)(C,Object(r.a)({isAuthenticated:l,type:"my_articles",user:t},e))}}),Object(f.jsx)(o.b,{exact:!0,path:"/article/:id",component:function(e){return Object(f.jsx)(C,Object(r.a)(Object(r.a)({i:!0,isAuthenticated:l,type:"article"},e),{},{user:t}))}}),Object(f.jsx)(D,{exact:!0,path:"/create",component:function(){return Object(f.jsx)(C,{type:"create",user:t,isAuthenticated:l,logoutAction:n})}}),U.isAuthenticated()?Object(f.jsx)(o.a,{to:"/"}):Object(f.jsx)(o.b,{exact:!0,path:"/signup",component:R,history:Object(o.g)()}),U.isAuthenticated()?Object(f.jsx)(o.a,{to:"/"}):Object(f.jsx)(o.b,{exact:!0,path:"/login",component:I,history:Object(o.g)()})]})})})})),G=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),l(e),i(e)}))},B=(s(44),s(15)),K=s(25),H={user_info:{data:null,status:null},authState:{inProgress:!1,isError:!1,message:""}},W="GET_USER_PROFILE",Y="SET_USER_PROFILE",M="USER_AUTH",q="SET_USER_AUTH",z="LOGOUT",J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object.assign({},e,{user_info:{data:null,status:t.status}});case Y:return Object.assign({},e,{user_info:{data:t.response,status:t.status}});case M:return Object.assign({},e,{authState:Object(r.a)(Object(r.a)({},e.authState),{},{inProgress:!0,isError:!1})});case q:return Object.assign({},e,{authState:Object(r.a)(Object(r.a)({},e.authState),{},{inProgress:!1,isError:t.isError,message:t.message})});case z:var s={user_info:{data:null,status:null},authState:{inProgress:!1,isError:!1,message:""}};return Object.assign({},s);default:return e}},Q={articles:{data:null,status:null},article:{data:null,status:null},addArticle:{data:null,status:null},publicArticles:{data:null,status:null},likeArticle:{data:null,status:null},unlikeArticle:{data:null,status:null},deleteArticle:{status:null,data:null}},X="GET_ALL_ARTICLES",Z="SET_ALL_ARTICLES",V="GET_PUBLIC_ARTICLES",$="SET_PUBLIC_ARTICLES",ee="GET_SINGLE_ARTICLE",te="SET_SINGLE_ARTICLE",se="ADD_ARTICLE",ae="SET_ADD_ARTICLE",ne="RESET",le="LIKE_ARTICLE",ie="SET_LIKE_ARTICLE",re="UNLIKE_ARTICLE",ce="SET_UNLIKE_ARTICLE",oe="DELETE_ARTICLE",ue="SET_DELETE_ARTICLE",de="UPDATE_ARTICLE_LIST",be=function(){var e,t,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case X:return Object.assign({},s,{articles:{data:null,status:0}});case Z:if(null===a||void 0===a||null===(e=a.toDelete)||void 0===e?void 0:e.id){var n,l=null===(n=s.articles)||void 0===n?void 0:n.data;if(l&&l.length){var i=l.filter((function(e){return e._id!==a.toDelete.id}));return Object.assign({},s,{articles:{data:i,status:a.status}})}}return Object.assign({},s,{articles:{data:a.response,status:a.status}});case ee:return Object.assign({},s,{article:{data:null,status:0}});case te:return Object.assign({},s,{article:{data:a.response,status:a.status}});case se:return Object.assign({},s,{addArticle:{data:null,status:0}});case ae:return Object.assign({},s,{addArticle:{data:a.response,status:a.status}});case V:return Object.assign({},s,{publicArticles:{data:null,status:0}});case $:return Object.assign({},s,{publicArticles:{data:a.response,status:a.status}});case ne:return Object.assign({},{articles:{data:null,status:null},article:{data:null,status:null},addArticle:{data:null,status:null},publicArticles:{data:null,status:null}});case le:return Object.assign({},s,{likeArticle:{data:null,status:0}});case ie:return Object.assign({},s,{likeArticle:{data:a.response,status:a.status}});case re:return Object.assign({},s,{unlikeArticle:{data:null,status:0}});case ce:return Object.assign({},s,{unlikeArticle:{data:a.response,status:a.status}});case oe:return Object.assign({},s,{deleteArticle:{data:null,status:0}});case ue:return Object.assign({},s,{deleteArticle:{data:a.response,status:a.status}});case de:var r;if(null===a||void 0===a||null===(t=a.toDelete)||void 0===t?void 0:t.id){var c,o,u,d,b=null===s||void 0===s||null===(c=s.articles)||void 0===c||null===(o=c.data)||void 0===o?void 0:o.filter((function(e){var t;return e._id!==(null===a||void 0===a||null===(t=a.toDelete)||void 0===t?void 0:t.id)})),j=null===(u=s.publicArticles)||void 0===u||null===(d=u.data)||void 0===d?void 0:d.filter((function(e){var t;return e._id!==(null===a||void 0===a||null===(t=a.toDelete)||void 0===t?void 0:t.id)}));return console.log({myArticles:b,publicArticles:j,action:a}),b&&(r=Object.assign(s,{articles:{data:b,status:1}})),j&&(r=Object.assign(s,{publicArticles:{data:j,status:1}})),Object.assign({},s,r)}default:return s}},je=Object(B.b)({userState:J,articlesState:be});i.a.render(Object(f.jsxs)(n.a.StrictMode,{children:[Object(f.jsx)(d.a,{store:Object(B.c)(je,Object(B.a)(K.a)),children:Object(f.jsx)(F,{})}),Object(f.jsx)(h.a,{})]}),document.getElementById("root")),G()}},[[45,1,2]]]);
//# sourceMappingURL=main.04814fa9.chunk.js.map