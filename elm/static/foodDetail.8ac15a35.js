/*! bytedance inc ltd */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+Hdi":function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i});var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rating_container"},[e("section",{staticClass:"star_container"},this._l(5,function(t){return e("svg",{key:t,staticClass:"grey_fill"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#star"}})])})),this._v(" "),e("div",{staticClass:"star_overflow",style:"width:"+2*this.rating/5+"rem"},[e("section",{staticClass:"star_container"},this._l(5,function(t){return e("svg",{key:t,staticClass:"orange_fill"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#star"}})])}))])])},i=[]},"/f1G":function(t,e,a){t.exports={default:a("nhzr"),__esModule:!0}},"8Yfd":function(t,e,a){(t.exports=a("I1BE")()).push([t.i,".cart_module .add_icon[data-v-2eb40632]{position:relative;z-index:999}.cart_module .cart_button[data-v-2eb40632]{display:flex;align-items:center}.cart_module svg[data-v-2eb40632]{width:.9rem;height:.9rem;fill:#3190e8}.cart_module .specs_reduce_icon[data-v-2eb40632]{fill:#999}.cart_module .cart_num[data-v-2eb40632]{font-size:.65rem;color:#666;min-width:1rem;text-align:center;font-family:Helvetica Neue,Tahoma}.cart_module .choose_specification .choose_icon_container[data-v-2eb40632]{display:flex;align-items:center}.cart_module .choose_specification .choose_icon_container .show_chooselist[data-v-2eb40632]{display:block;font-size:.55rem;color:#fff;padding:.1rem .2rem;background-color:#3190e8;border-radius:.2rem;border:1px solid #3190e8}.showReduce-enter-active[data-v-2eb40632],.showReduce-leave-active[data-v-2eb40632]{transition:all .3s ease-out}.showReduce-enter[data-v-2eb40632],.showReduce-leave-active[data-v-2eb40632]{opacity:0;transform:translateX(1rem)}.fade-enter-active[data-v-2eb40632],.fade-leave-active[data-v-2eb40632]{transition:all .3s}.fade-enter[data-v-2eb40632],.fade-leave-active[data-v-2eb40632]{opacity:0}.fadeBounce-enter-active[data-v-2eb40632],.fadeBounce-leave-active[data-v-2eb40632]{transition:all .3s}.fadeBounce-enter[data-v-2eb40632],.fadeBounce-leave-active[data-v-2eb40632]{opacity:0;transform:scale(.7)}",""])},"8wBH":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImgPath=e.loadMore=void 0;var o=a("P1W/");a("Ub41"),e.loadMore={directives:{"load-more":{bind:function(t,e){var a=window.screen.height,i=void 0,n=void 0,s=void 0,r=void 0,d=void 0,c=void 0,l=void 0,f=void 0,u=t.attributes.type&&t.attributes.type.value;2==u?(l=t,f=t.children[0]):(l=document.body,f=t),t.addEventListener("touchstart",function(){i=f.clientHeight,2==u&&(i=i),n=t.offsetTop,s=(0,o.getStyle)(t,"paddingBottom"),r=(0,o.getStyle)(t,"marginBottom")},!1),t.addEventListener("touchmove",function(){_()},!1),t.addEventListener("touchend",function(){c=l.scrollTop,p()},!1);var p=function t(){d=requestAnimationFrame(function(){l.scrollTop!=c?(c=l.scrollTop,t()):(cancelAnimationFrame(d),i=f.clientHeight,_())})},_=function(){l.scrollTop+a>=i+n+s+r-2&&e.value()}}}}},e.getImgPath={methods:{getImgPath:function(t){var e=void 0;return t?(e=-1!==t.indexOf("jpeg")?".jpeg":".png","https://fuss10.elemecdn.com/"+t.substr(0,1)+"/"+t.substr(1,2)+"/"+t.substr(3)+e):"http://test.fe.ptdev.cn/elm/elmlogo.jpeg"}}}},Bk7V:function(t,e,a){(t.exports=a("I1BE")()).push([t.i,"#head_top[data-v-3a98f49d]{background-color:#3190e8;position:fixed;z-index:100;left:0;top:0;width:100%;height:1.95rem}.head_goback[data-v-3a98f49d]{left:.4rem;width:.6rem;height:1rem;line-height:2.2rem;margin-left:.4rem}.head_login[data-v-3a98f49d]{right:.55rem;font-size:.65rem;color:#fff;position:absolute;top:50%;transform:translateY(-50%)}.head_login .login_span[data-v-3a98f49d]{color:#fff}.head_login .user_avatar[data-v-3a98f49d]{fill:#fff;width:.8rem;height:.8rem}.title_head[data-v-3a98f49d]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:50%;color:#fff;text-align:center}.title_head .title_text[data-v-3a98f49d]{font-size:.8rem;color:#fff;text-align:center;font-weight:700}",""])},E8gZ:function(t,e,a){var o=a("w6GO"),i=a("NsO/"),n=a("NV0k").f;t.exports=function(t){return function(e){for(var a,s=i(e),r=o(s),d=r.length,c=0,l=[];d>c;)n.call(s,a=r[c++])&&l.push(t?[a,s[a]]:s[a]);return l}}},HGwy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=(o=a("QbLZ"))&&o.__esModule?o:{default:o},n=a("L2JU");e.default={data:function(){return{}},mounted:function(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:(0,i.default)({},(0,n.mapState)(["userInfo"])),methods:(0,i.default)({},(0,n.mapActions)(["getUserInfo"]))}},Km1l:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=d(a("xEAn")),i=a("8wBH"),n=d(a("lYsU")),s=d(a("MZ9M")),r=a("Ub41");function d(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{image_path:null,description:null,month_sales:null,name:null,rating:null,rating_count:null,satisfy_rate:null,foods:null,shopId:null,imgBaseUrl:r.imgBaseUrl}},created:function(){this.image_path=this.$route.query.image_path,this.description=this.$route.query.description,this.month_sales=this.$route.query.month_sales,this.name=this.$route.query.name,this.rating=this.$route.query.rating,this.rating_count=this.$route.query.rating_count,this.satisfy_rate=this.$route.query.satisfy_rate,this.foods=this.$route.query.foods,this.shopId=this.$route.query.shopId},mixins:[i.getImgPath],components:{headTop:o.default,ratingStar:n.default,buyCart:s.default},props:[],methods:{}}},MZ9M:function(t,e,a){"use strict";a.r(e);var o=a("dVpd"),i=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);var s=a("ROmA"),r=a("JFUb"),d=Object(r.a)(i.a,s.a,s.b,!1,function(t){a("lrnp")},"data-v-2eb40632",null);e.default=d.exports},ROmA:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"cart_module"},[t.foods.specifications.length?a("section",{staticClass:"choose_specification"},[a("section",{staticClass:"choose_icon_container"},[a("transition",{attrs:{name:"showReduce"}},[t.foodNum?a("svg",{staticClass:"specs_reduce_icon",on:{click:t.showReduceTip}},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-minus"}})]):t._e()]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.foodNum?a("span",{staticClass:"cart_num"},[t._v(t._s(t.foodNum))]):t._e()]),t._v(" "),a("span",{staticClass:"show_chooselist",on:{click:function(e){t.showChooseList(t.foods)}}},[t._v("选规格")])],1)]):a("section",{staticClass:"cart_button"},[a("transition",{attrs:{name:"showReduce"}},[t.foodNum?a("span",{on:{click:function(e){t.removeOutCart(t.foods.category_id,t.foods.item_id,t.foods.specfoods[0].food_id,t.foods.specfoods[0].name,t.foods.specfoods[0].price,"",t.foods.specfoods[0].packing_fee,t.foods.specfoods[0].sku_id,t.foods.specfoods[0].stock)}}},[a("svg",[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-minus"}})])]):t._e()]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.foodNum?a("span",{staticClass:"cart_num"},[t._v(t._s(t.foodNum))]):t._e()]),t._v(" "),a("svg",{staticClass:"add_icon",on:{touchstart:function(e){t.addToCart(t.foods.category_id,t.foods.item_id,t.foods.specfoods[0].food_id,t.foods.specfoods[0].name,t.foods.specfoods[0].price,"",t.foods.specfoods[0].packing_fee,t.foods.specfoods[0].sku_id,t.foods.specfoods[0].stock,e)}}},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-add"}})])],1)])},i=[]},V8XU:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{attrs:{id:"head_top"}},[t._t("logo"),t._v(" "),t._t("search"),t._v(" "),t.goBack?a("section",{staticClass:"head_goback",on:{click:function(e){t.$router.go(-1)}}},[a("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[a("polyline",{staticStyle:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"},attrs:{points:"12,18 4,9 12,0"}})])]):t._e(),t._v(" "),t.signinUp?a("router-link",{staticClass:"head_login",attrs:{to:t.userInfo?"/profile":"/login"}},[t.userInfo?a("svg",{staticClass:"user_avatar"},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"}})]):a("span",{staticClass:"login_span"},[t._v("登录|注册")])]):t._e(),t._v(" "),t.headTitle?a("section",{staticClass:"title_head ellipsis"},[a("span",{staticClass:"title_text"},[t._v(t._s(t.headTitle))])]):t._e(),t._v(" "),t._t("edit"),t._v(" "),t._t("msite-title"),t._v(" "),t._t("changecity"),t._v(" "),t._t("changeLogin")],2)},i=[]},VUjO:function(t,e,a){(t.exports=a("I1BE")()).push([t.i,".rating_container[data-v-149e3d30]{position:relative;top:.2rem;width:2rem;height:.4rem}.rating_container .star_overflow[data-v-149e3d30]{overflow:hidden;position:relative;height:100%}.rating_container .star_container[data-v-149e3d30]{position:absolute;display:flex;width:2rem;height:.4rem;top:-.02rem;left:-.02rem}.rating_container .star_container .grey_fill[data-v-149e3d30]{fill:#d1d1d1}.rating_container .star_container .orange_fill[data-v-149e3d30]{fill:#ff9a0d}",""])},Vp6h:function(t,e,a){var o=a("Bk7V");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,a("L7LK").default)("3cfe9719",o,!0,{})},dVpd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(a("/f1G")),i=r(a("P2sY")),n=r(a("QbLZ")),s=a("L2JU");function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{showMoveDot:[]}},mounted:function(){},computed:(0,n.default)({},(0,s.mapState)(["cartList"]),{shopCart:function(){return(0,i.default)({},this.cartList[this.shopId])},foodNum:function(){var t=this.foods.category_id,e=this.foods.item_id;if(this.shopCart&&this.shopCart[t]&&this.shopCart[t][e]){var a=0;return(0,o.default)(this.shopCart[t][e]).forEach(function(t,e){a+=t.num}),a}return 0}}),props:["foods","shopId"],methods:(0,n.default)({},(0,s.mapMutations)(["ADD_CART","REDUCE_CART"]),{removeOutCart:function(t,e,a,o,i,n,s,r,d){this.foodNum>0&&this.REDUCE_CART({shopid:this.shopId,category_id:t,item_id:e,food_id:a,name:o,price:i,specs:n,packing_fee:s,sku_id:r,stock:d})},addToCart:function(t,e,a,o,i,n,s,r,d,c){this.ADD_CART({shopid:this.shopId,category_id:t,item_id:e,food_id:a,name:o,price:i,specs:n,packing_fee:s,sku_id:r,stock:d});var l=c.target.getBoundingClientRect().left,f=c.target.getBoundingClientRect().bottom;this.showMoveDot.push(!0),this.$emit("showMoveDot",this.showMoveDot,l,f)},showChooseList:function(t){this.$emit("showChooseList",t)},showReduceTip:function(){this.$emit("showReduceTip")}})}},fW1p:function(t,e,a){var o=a("Y7ZC"),i=a("E8gZ")(!1);o(o.S,"Object",{values:function(t){return i(t)}})},fz30:function(t,e,a){var o=a("VUjO");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,a("L7LK").default)("1f944c72",o,!0,{})},iujO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},mounted:function(){},props:["rating"]}},jcCR:function(t,e,a){"use strict";a.r(e);var o=a("Km1l"),i=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);var s=a("yKwg"),r=a("JFUb"),d=Object(r.a)(i.a,s.a,s.b,!1,function(t){a("yWCH")},"data-v-6107aa12",null);e.default=d.exports},lYsU:function(t,e,a){"use strict";a.r(e);var o=a("iujO"),i=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);var s=a("+Hdi"),r=a("JFUb"),d=Object(r.a)(i.a,s.a,s.b,!1,function(t){a("fz30")},"data-v-149e3d30",null);e.default=d.exports},lrnp:function(t,e,a){var o=a("8Yfd");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,a("L7LK").default)("070bb46b",o,!0,{})},mkvM:function(t,e,a){(t.exports=a("I1BE")()).push([t.i,".rating_page[data-v-6107aa12]{position:absolute;top:0;left:0;right:0;bottom:0;background-color:#fff;z-index:12;padding-top:1.95rem}.rating_page p[data-v-6107aa12],.rating_page span[data-v-6107aa12]{font-family:Helvetica Neue,Tahoma,Arial}.header_img[data-v-6107aa12]{position:relative}.header_img .food_img[data-v-6107aa12]{width:100%;display:block}.header_img .cover[data-v-6107aa12]{position:absolute;width:100%;height:100%;top:0;left:0}.description[data-v-6107aa12]{font-size:.6rem;color:#666;margin-top:.5rem;line-height:.8rem;bottom:.2rem;padding:0 .4rem}.detail_container[data-v-6107aa12]{padding:.5rem;display:flex;justify-content:space-between;align-items:center}.detail_container .detail_left p[data-v-6107aa12]:first-of-type{font-size:.7rem;color:#333;margin-bottom:.2rem}.detail_container .detail_left .rating_sale[data-v-6107aa12]{display:flex;align-items:center}.detail_container .detail_left .rating_sale span[data-v-6107aa12]:first-of-type{font-size:.6rem;color:#666;margin-right:.2rem}.detail_container .detail_left .rating_sale span[data-v-6107aa12]:nth-of-type(2){font-size:.55rem;color:#f60;margin-left:.2rem}.detail_container .detail_left .rating_sale span[data-v-6107aa12]:nth-of-type(3){font-size:.6rem;color:#666;margin-left:.4rem}.detail_container .detail_left p[data-v-6107aa12]:nth-of-type(2){font-size:0;margin-top:.3rem}.detail_container .detail_left p:nth-of-type(2) span[data-v-6107aa12]:first-of-type{font-size:.6rem;color:#666;margin-right:.4rem}.detail_container .detail_left p:nth-of-type(2) span[data-v-6107aa12]:nth-of-type(2),.detail_container .detail_left p:nth-of-type(2) span[data-v-6107aa12]:nth-of-type(3){font-size:.6rem;color:#f60;margin-right:.2rem}.detail_container .detail_left p:nth-of-type(3) span[data-v-6107aa12]{font-size:.6rem;color:#666}",""])},nhzr:function(t,e,a){a("fW1p"),t.exports=a("WEpk").Object.values},xEAn:function(t,e,a){"use strict";a.r(e);var o=a("HGwy"),i=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);var s=a("V8XU"),r=a("JFUb"),d=Object(r.a)(i.a,s.a,s.b,!1,function(t){a("Vp6h")},"data-v-3a98f49d",null);e.default=d.exports},yKwg:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rating_page"},[a("head-top",{attrs:{"head-title":t.name,"go-back":"true"}}),t._v(" "),a("section",{staticClass:"header_img"},[a("img",{staticClass:"food_img",attrs:{src:t.imgBaseUrl+t.image_path}}),t._v(" "),a("div",{staticClass:"cover"})]),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),a("section",{staticClass:"detail_container"},[a("section",{staticClass:"detail_left"},[a("p",[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"rating_sale"},[a("span",[t._v("评分")]),t._v(" "),a("rating-star",{attrs:{rating:t.rating}}),t._v(" "),a("span",[t._v(t._s(t.rating.toFixed(1)))])],1),t._v(" "),a("p",[a("span",[t._v("月售 "+t._s(t.month_sales)+"单")]),t._v(" "),a("span",[t._v("售价 ¥"+t._s(t.foods.specfoods[0].price))]),t._v(" "),t.foods.specfoods.length?a("span",[t._v("起")]):t._e()]),t._v(" "),a("p",[a("span",[t._v("评论数 "+t._s(t.rating_count))]),t._v(" "),a("span",[t._v("好评率 "+t._s(t.satisfy_rate)+"%")])])])])],1)},i=[]},yWCH:function(t,e,a){var o=a("mkvM");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,a("L7LK").default)("b57e56c0",o,!0,{})}}]);
//# sourceMappingURL=foodDetail.8ac15a35.js.map