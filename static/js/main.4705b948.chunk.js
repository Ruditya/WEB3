(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{130:function(e,a,t){e.exports=t(215)},135:function(e,a,t){},136:function(e,a,t){},137:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},203:function(e,a,t){e.exports=t.p+"static/media/tea-cup.fdeea1ed.svg"},214:function(e,a,t){},215:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(3),l=t.n(r),c=(t(135),t(7)),o=t(8),s=t(10),m=t(9),d=t(11),u=(t(136),t(219)),h=(t(137),t(222)),p=t(223),b=t(224),f=t(35),E=u.a.SubMenu,g=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={current:"mail"},t.handleClick=function(e){console.log("click ",e),t.setState({current:e.key})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"menuBar"},i.a.createElement(u.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},i.a.createElement(u.a.Item,{key:"mail"},i.a.createElement(h.a,null),i.a.createElement(f.b,{to:"/"},"Profile")),i.a.createElement(u.a.Item,{key:"app"},i.a.createElement(p.a,null),i.a.createElement(f.b,{to:"/portofolio"},"Portofolio")),i.a.createElement(E,{title:i.a.createElement("span",{className:"submenu-title-wrapper"},i.a.createElement(b.a,null),"Team Work")},i.a.createElement(u.a.ItemGroup,{title:"Team Working"},i.a.createElement(u.a.Item,{key:"komsay"},"Komsay"),i.a.createElement(u.a.Item,{key:"Fungky"},'Fungi Fungky"'))),i.a.createElement(u.a.Item,{key:"alipay"},i.a.createElement("a",{href:"https://github.com/Ruditya",target:"_blank",rel:"noopener noreferrer"},"Repositori Github"))))}}]),a}(n.Component),y=t(30),k=t(217),v=t(220),O=t(221),j=t(218),N=(t(199),t(56));t(200);var w=function(e){var a=e.type,t=e.text,n=e.disabled,r=e.borderRadius,l=void 0===r?25:r,c=e.background,o=void 0===c?"#ffa64d":c,s=e.textColor,m=void 0===s?"white":s,d=e.border,u=void 0===d?"none":d,h=e.margin,p=void 0===h?"0px":h,b=e.marginLeft,f=e.marginRight,E=e.marginTop,g=e.marginBottom,y=e.className,k=e.onClick;return i.a.createElement(N.a,{type:a,className:y,disabled:n,style:{backgroundColor:o,color:m,borderRadius:l,border:u,margin:p,marginLeft:b,marginRight:f,marginTop:E,marginBottom:g},onClick:k},t)},C=k.a.Content,x=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=t(203),a=this.props,n=a.initialData,r=a.showModal,l=a.handleOk,c=a.handleCancel;return i.a.createElement(k.a,{className:"landing-container"},i.a.createElement(C,{style:{overflow:"hidden"}},i.a.createElement(v.a,{className:"section-container"},i.a.createElement(O.a,{lg:12,md:12,sm:12},i.a.createElement("div",{className:"image-big-container"},i.a.createElement("img",{src:e,alt:"Home 1",style:{maxWidth:"80%"}}))),i.a.createElement(O.a,{lg:12,md:12,sm:12},i.a.createElement(v.a,null,i.a.createElement(O.a,{span:24},i.a.createElement("div",{className:"title-container"},i.a.createElement("span",{className:"text-soft-blue title-biggest bold"},"Namaku "),i.a.createElement("br",null),i.a.createElement("span",{className:"text-soft-blue title-big bold"},"Ruditya Candra"))),i.a.createElement(O.a,{span:24},i.a.createElement("div",{className:"image-hidden"},i.a.createElement("img",{src:e,alt:"Home 1",style:{maxWidth:"100%"}})),i.a.createElement("div",{className:"description-container desc-medium"},"Just ordinary people with ordinary life in the extraordinary mind.")),i.a.createElement(O.a,{span:24},i.a.createElement("div",{className:"button-section-1-container"},i.a.createElement(w,{text:"Contact Me",className:"button-participate",onClick:r}),i.a.createElement(w,{text:"Another Information",background:"white",textColor:"#ffa64d",border:"1px solid #ffa64d",marginLeft:16,className:"button-participate"}))),i.a.createElement(j.a,{title:"Contact",visible:n.visible,onOk:l,onCancel:c,className:"modal-notif"},i.a.createElement("p",{className:"text-notif"},"Find and text me at rudityacandra@mail.ugm.ac.id")))))))}}]),a}(n.Component),M=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={visible:!1},t.showModal=function(){t.setState({visible:!0})},t.handleOk=function(e){console.log(e),t.setState({visible:!1})},t.handleCancel=function(e){console.log(e),t.setState({visible:!1})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(x,{initialData:this.state,showModal:this.showModal,handleCancel:this.handleCancel,handleOk:this.handleOk})}}]),a}(n.Component),S=(t(214),k.a.Content),I=[{title:"PMW UGM 2019",description:"Ikut serta dalam Program Mahasiswa Wiarausaha UGM pada periode tahun 2019, sebuah program yang mendidik dan melatih  generasi muda untuk menjadi wirausahawan yang baik."},{title:"PPSMB UNIVERSAL 2019",description:"Koordinator bidang Operasional PPSMB Universal 2019 di Departemen Teknik Elektro Dan Informatika Sekolah Vokasi UGM"},{title:"Tech Enthusiast Day ",description:"Menjadi staff bidang operasional pada acara TED(Tech Enthusiast Day) 2019"}],W=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(k.a,{className:"landing-container"},i.a.createElement(S,{style:{overflow:"hidden"}},i.a.createElement(v.a,{className:"section-container"},i.a.createElement(O.a,{lg:24},i.a.createElement("div",{className:"text-soft-blue title-big bold discover-container"},"Apa yang pernah dilakukan?")),i.a.createElement(O.a,{lg:24},i.a.createElement("div",{className:"text-black description-discover"},"Something I did past year :")),i.a.createElement(O.a,{lg:24},i.a.createElement("hr",{style:{minHeight:8,backgroundColor:"#ffa64d",border:"none",maxWidth:150,borderRadius:26}})),i.a.createElement(O.a,{lg:24,className:"mt-20"},i.a.createElement(v.a,{type:"flex",justify:"center",className:"card-why-container"},I.map((function(e){return i.a.createElement(O.a,{lg:8,md:12,sm:12,className:""},i.a.createElement("div",{className:"card-why-content"},i.a.createElement("img",{src:e.image,className:"card-why-image"}),i.a.createElement("div",{className:"text-soft-blue semi-bold mt-10"},e.title),i.a.createElement("div",{className:"mt-10",style:{maxWidth:"260px"}},e.description)))})))))))}}]),a}(n.Component),D=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={visible:!1},t.showModal=function(){t.setState({visible:!0})},t.handleOk=function(e){console.log(e),t.setState({visible:!1})},t.handleCancel=function(e){console.log(e),t.setState({visible:!1})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(W,{initialData:this.state,showModal:this.showModal,handleCancel:this.handleCancel,handleOk:this.handleOk})}}]),a}(n.Component),R=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(y.c,null,i.a.createElement(y.a,{exact:!0,path:"/",component:M}),i.a.createElement(y.a,{path:"/portofolio",component:D}))}}]),a}(n.Component),B=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null),i.a.createElement(R,null))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(f.a,{basename:"/WEB3"},i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.4705b948.chunk.js.map