(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(3),r=s(4),c=s(7),i=s(6),o=s(1),u=s.n(o),l=s(5),d=s.n(l),h=(s(13),{summer:{text:"Let's hit the beach",iconName:"sun"},winter:{text:"Burr! It's cold",iconName:"snowflake"}}),j=function(e){var t,s,a=(t=e.lat,(s=(new Date).getMonth())>2&&s<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=h[a],c=r.text,i=r.iconName;return Object(n.jsxs)("div",{className:"season-display ".concat(a),children:[Object(n.jsx)("i",{className:"".concat(i," massive icon iconLeft")}),Object(n.jsx)("h1",{children:c}),Object(n.jsx)("i",{className:"".concat(i," massive icon iconRight")})]})},m=function(e){return Object(n.jsx)("div",{className:"ui active dimmer",children:Object(n.jsx)("div",{className:"ui big text loader",children:e.message})})};m.defaultProps={message:"Loading..."};var b=m,v=function(e){Object(c.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lat:null,errorMessage:""},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){e.setState({lat:t.coords.latitude})}),(function(t){e.setState({errorMessage:t.message})}))}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?Object(n.jsxs)("div",{children:["Error : ",this.state.errorMessage]}):!this.state.errorMessage&&this.state.lat?Object(n.jsx)(j,{lat:this.state.lat}):Object(n.jsx)(b,{message:"Please Accept Location Request"})}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.renderContent()})}}]),s}(u.a.Component);d.a.render(Object(n.jsx)(v,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.76a78aed.chunk.js.map