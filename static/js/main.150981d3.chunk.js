(window["webpackJsonpfile-tree"]=window["webpackJsonpfile-tree"]||[]).push([[0],[,function(e,t,n){e.exports={container:"file-tree_container__1qFXh",header:"file-tree_header__3kziy",footer:"file-tree_footer__1vi1n",icon:"file-tree_icon__5ntK1",text:"file-tree_text__3gAaZ",content:"file-tree_content__1Pnsc",fileTreeContainer:"file-tree_fileTreeContainer__3y0h3",bucketContainer:"file-tree_bucketContainer__2eV4h",createIconsContainer:"file-tree_createIconsContainer__1DcHi",createFile:"file-tree_createFile___c5Pl",createFolder:"file-tree_createFolder__2nL_e",minimizeFileTree:"file-tree_minimizeFileTree__2Miti",settings:"file-tree_settings__3DwPW"}},function(e,t,n){e.exports={container:"bucket_container__3fje5",line:"bucket_line__16upy",content:"bucket_content__1tnTS",iconContainer:"bucket_iconContainer__2HWwr",icon:"bucket_icon__1JoJr",barContainer:"bucket_barContainer__1euIy",barWrapper:"bucket_barWrapper__1BiwZ",bar:"bucket_bar__3hZ51",subscription:"bucket_subscription__380k4",percent:"bucket_percent__1puzH"}},,,,,,,function(e,t,n){e.exports={container:"file-tree-node_container__y_z_8",item:"file-tree-node_item__1qmQu",icon:"file-tree-node_icon__3Zvm0",icon__opened:"file-tree-node_icon__opened__ZtAEv",title:"file-tree-node_title__38XN3",title__file:"file-tree-node_title__file__3BQ2V",children:"file-tree-node_children__3JB3-"}},,function(e,t,n){e.exports={container:"disable-bgd_container__31fci",container__hidden:"disable-bgd_container__hidden__144y8",content:"disable-bgd_content__kcO4B"}},function(e,t,n){e.exports={container:"App_container___P6pN",fileTreeContainer:"App_fileTreeContainer__2eGzn"}},,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),c=n(14),l=n.n(c),o=n(3),s=n(4),d=n(6),_=n(5),f=n(7),u=n(8),h=n.n(u),p=n(10);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e[e.Folder=0]="Folder",e[e.File=1]="File"}(a||(a={}));var v="/",j=function e(t,n){var r=t.title;if(function(e){return e.type===a.Folder}(t)){var i="".concat(n).concat(r).concat(v);return b({},t,{path:i,children:t.children.map((function(t){return e(t,i)}))})}return b({},t,{path:"".concat(n).concat(r)})},y=n(9),O=n.n(y),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={isOpened:!1},n.handleItemClick=function(e){return function(){var t=n.props.onNodeSelect;n.setState((function(e){return{isOpened:!e.isOpened}}),(function(){t(e.path)}))}},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,n=e.data,r=e.outPadding,c=e.onNodeSelect,l=this.state.isOpened,o=n.type===a.File,s=r||10,d=h()(O.a.icon,Object(p.a)({},O.a.icon__opened,l&&!o)),_=h()(O.a.title,Object(p.a)({},O.a.title__file,o));return i.a.createElement("div",{className:O.a.container},i.a.createElement("div",{className:O.a.item,style:{paddingLeft:s},onClick:this.handleItemClick(n)},!o&&i.a.createElement("div",{className:d}),i.a.createElement("div",{className:_},n.title)),n.children&&l&&i.a.createElement("div",{className:O.a.children},n.children.map((function(e,n){return i.a.createElement(t,{key:e.path,data:e,outPadding:s+20,onNodeSelect:c})}))))}}]),t}(i.a.PureComponent),E=n(11),N=n.n(E),F=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.shown,t=h()(N.a.container,Object(p.a)({},N.a.container__hidden,!e));return i.a.createElement("div",{className:t},i.a.createElement("div",{className:N.a.content},"Not Connected"))}}]),t}(i.a.PureComponent),k=n(1),C=n.n(k),w=n(2),P=n.n(w),S=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.percent,n=e.onTrashActivate;return i.a.createElement("div",{className:P.a.container},i.a.createElement("div",{className:P.a.line}),i.a.createElement("div",{className:P.a.content},i.a.createElement("div",{className:P.a.iconContainer},i.a.createElement("div",{className:P.a.icon,onClick:n})),i.a.createElement("div",{className:P.a.barContainer},i.a.createElement("div",{className:P.a.barWrapper},i.a.createElement("div",{className:P.a.bar,style:{width:"".concat(t,"%")}})),i.a.createElement("div",{className:P.a.subscription},i.a.createElement("div",{className:P.a.percent},"".concat(t,"/100"))))))}}]),t}(i.a.PureComponent),T=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(i)))).state={nodes:n.props.data,selectedPath:v},n.handleCreate=function(e){return function(){var t=e===a.File,n=window.prompt("Please write a title for ".concat(t?"file":"folder"),"new ".concat(t?"file":"folder"));console.log(n)}},n.handleNodeSelect=function(e){console.log(e),n.setState({selectedPath:e})},n.handleMinimize=function(e){return function(){console.log(e)}},n.handleSettingsActivate=function(){console.log("handleSettingsActivate")},n.handleTrashActivate=function(){console.log("handleTrashActivate")},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.nodes,n=this.props,r=n.isDisabled,c=n.bucketPercent,l=h()(C.a.icon,C.a.createFile),o=h()(C.a.icon,C.a.createFolder),s=h()(C.a.icon,C.a.minimizeFileTree),d=h()(C.a.icon,C.a.settings),_=t.map((function(e){return j(e,v)}));return i.a.createElement("div",{className:C.a.container},i.a.createElement(F,{shown:r}),i.a.createElement("div",{className:C.a.header},i.a.createElement("div",{className:C.a.text},"Files"),i.a.createElement("div",{className:C.a.createIconsContainer},i.a.createElement("div",{className:l,onClick:this.handleCreate(a.File)}),i.a.createElement("div",{className:o,onClick:this.handleCreate(a.Folder)}),i.a.createElement("div",{className:s,onClick:this.handleMinimize("i am a useless slug to workaround TS")}))),i.a.createElement("div",{className:C.a.content},i.a.createElement("div",{className:C.a.fileTreeContainer},_.map((function(t){return i.a.createElement(g,{key:t.path,data:t,onNodeSelect:e.handleNodeSelect})}))),i.a.createElement("div",{className:C.a.bucketContainer},i.a.createElement(S,{percent:c,onTrashActivate:this.handleTrashActivate}))),i.a.createElement("div",{className:C.a.footer},i.a.createElement("div",{className:C.a.text},"Settings"),i.a.createElement("div",{className:C.a.createIconsContainer},i.a.createElement("div",{className:d,onClick:this.handleSettingsActivate}))))}}]),t}(i.a.PureComponent),A=[{type:a.Folder,title:"closed_folder",children:[]},{type:a.Folder,title:"folder1",children:[{type:a.Folder,title:"sub_folder",children:[{type:a.File,title:"activeFileshdgfjashgdfjhasgdjfhagsdjhfgasjdhfgjsahdgfjhs.txt"},{type:a.Folder,title:"closed_folder",children:[]},{type:a.Folder,title:"folder1",children:[{type:a.Folder,title:"sub_folder",children:[{type:a.File,title:"activeFileshdgfjashgdfjhasgdjfhagsdjhfgasjdhfgjsahdgfjhs.txt"}]}]},{type:a.Folder,title:"folder2",children:[{type:a.File,title:"addwindow.html"}]},{type:a.Folder,title:"folder3",children:[{type:a.File,title:"addwindow.html"}]}]}]},{type:a.Folder,title:"folder2",children:[{type:a.File,title:"addwindow.html"}]},{type:a.Folder,title:"folder3",children:[{type:a.File,title:"addwindow.html"}]}],x=n(12),z=n.n(x),D=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Math.floor(100*Math.random());return i.a.createElement("div",{className:z.a.container},i.a.createElement("div",{className:z.a.fileTreeContainer},i.a.createElement(T,{data:A,isDisabled:!1,bucketPercent:e})))}}]),t}(i.a.PureComponent);n(20);l.a.render(i.a.createElement(D,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.150981d3.chunk.js.map