(this["webpackJsonpdw-tap-app"]=this["webpackJsonpdw-tap-app"]||[]).push([[0],{1433:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(50),i=a.n(o),s=(a(610),a(215)),l=a(164),c=a(227),p=a(225),m=(a(611),a(1461)),u=a(1462),d=a(1458),h=a(1463),f=a(596),b=a.n(f),g=a(216),k=a(597),E=a.n(k),y=a(96),w=a.n(y),v=a(42),S=a.n(v),W=a(599),j=a.n(W),N=function(e){return Object(g.usePromiseTracker)().promiseInProgress&&r.a.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",zIndex:"9999",transform:"translate(-50%, -50%)"}},r.a.createElement(j.a,{type:"ThreeDots",color:"grey",height:"100",width:"100"}))},O=a(600),R=a(1459),x=a(1464),z=a(1460),C=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e.state={open:!1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(R.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:this.state.open,onClose:this.handleClose,closeAfterTransition:!0,BackdropComponent:x.a,BackdropProps:{timeout:500}},r.a.createElement(z.a,{in:this.state.open},r.a.createElement("div",{className:e.paper,id:"plotly"}))))}}]),a}(n.Component),I=Object(O.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))(C);var P=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).markerRef=Object(n.createRef)(),e.mapRef=Object(n.createRef)(),e.modalRef=Object(n.createRef)(),e.handleLoad=function(){e.markerRef.current.leafletElement.openPopup()},e.handleClick=function(t){e.markerRef.current.leafletElement.setLatLng(t.latlng),e.updatePosition()},e.updatePosition=function(){var t=e.markerRef.current.leafletElement,a=t.getLatLng();e.setState({lat:a.lat,lng:a.lng}),e.mapRef.current.leafletElement.panTo(a),Object(g.trackPromise)(b.a.get("http://localhost:8080/v1/windrose?height=67.00m&lat="+e.state.lat.toString()+"&lon="+e.state.lng.toString()+"&start_date=20070101&stop_date=20070301&vertical_interpolation=nearest&spatial_interpolation=idw").then((function(e){var n=S.a.popup().setContent("You clicked the map at "+a.toString());t.bindPopup(n).openPopup(),function(e,t,a){var n=[{r:w.a.zipWith(w.a.zipWith(e[">20 m/s"],e["10-20 m/s"],e["5-10 m/s"],e["<5 m/s"],(function(e,t,a,n){return e+t+a+n})),e.Any,(function(e,t){return e*(t/100)})),theta:["North","N-E","East","S-E","South","S-W","West","N-W"],name:"> 20 m/s",marker:{color:"rgb(106,81,163)"},type:"barpolar"},{r:w.a.zipWith(w.a.zipWith(e["10-20 m/s"],e["5-10 m/s"],e["<5 m/s"],(function(e,t,a){return e+t+a})),e.Any,(function(e,t){return e*(t/100)})),theta:["North","N-E","East","S-E","South","S-W","West","N-W"],name:"10-20 m/s",marker:{color:"rgb(158,154,200)"},type:"barpolar"},{r:w.a.zipWith(w.a.zipWith(e["5-10 m/s"],e["<5 m/s"],(function(e,t){return e+t})),e.Any,(function(e,t){return e*(t/100)})),theta:["North","N-E","East","S-E","South","S-W","West","N-W"],name:"5-10 m/s",marker:{color:"rgb(203,201,226)"},type:"barpolar"},{r:w.a.zipWith(e["<5 m/s"],e.Any,(function(e,t){return e*(t/100)})),theta:["North","N-E","East","S-E","South","S-W","West","N-W"],name:"< 5 m/s",marker:{color:"rgb(242,240,247)"},type:"barpolar"}];E.a.newPlot("plotly",n,{title:"Wind Speed Distribution",font:{size:12},legend:{font:{size:10}},polar:{barmode:"overlay",bargap:0,radialaxis:{ticksuffix:"%",angle:45,dtick:20},angularaxis:{direction:"clockwise"}}})}(e.data)})).catch((function(e){console.log(e)}))),e.modalRef.current.handleOpen()},e.state={lat:39.9140131,lng:-105.2176275,zoom:13,openModal:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad)}}]),Object(l.a)(a,[{key:"render",value:function(){var e=[this.state.lat,this.state.lng];return r.a.createElement("div",{className:"map-container"},r.a.createElement(m.a,{center:e,zoom:this.state.zoom,ref:this.mapRef,onClick:this.handleClick},r.a.createElement(u.a,{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',url:"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"}),r.a.createElement(d.a,{position:e,draggable:"true",onDragend:this.updatePosition,ref:this.markerRef},r.a.createElement(h.a,null,"To display the wind resource at a location, click somewhere on the map or drag this marker."))),r.a.createElement(N,null),r.a.createElement(I,{ref:this.modalRef}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},605:function(e,t,a){e.exports=a(1433)},610:function(e,t,a){},611:function(e,t,a){},905:function(e,t){}},[[605,1,2]]]);
//# sourceMappingURL=main.979f4e70.chunk.js.map