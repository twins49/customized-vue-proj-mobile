(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{65:function(t,e,i){},66:function(t,e,i){},67:function(t,e,i){},68:function(t,e,i){},69:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"all-wraper"},[e("div",{staticClass:"header-box"},[e("img",{staticClass:"back-button",attrs:{src:i(71),alt:"图标"},on:{click:this.goBack}}),e("p",{staticClass:"title-name"},[this._v(this._s(this.titleName))]),e("p",{staticClass:"place-holder"})])])};s._withStripped=!0;i(62);var a={name:"headcommon",props:{title:String},data:function(){return{titleName:this.title}},methods:{goBack:function(){history.length>1?this.$router.go(-1):this.$router.replace("/")}}},n=(i(72),i(20)),o=Object(n.a)(a,s,[],!1,null,null,null);o.options.__file="src/components/header/HeadCommon.vue";e.a=o.exports},70:function(t,e,i){t.exports=i.p+"images/erer434345.cddb.gif"},71:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAmCAYAAADEO7urAAACA0lEQVRIS7XWPYgTQRQH8P/MRSEWWoiFeI1YGYuQebudx4kcCApXKGgrgtppoa0W2mqhYCGC2J4ggoVwIKJot3kbUhgrsTjFQiy0MCC5ebIhK5PxYjZ3zy0H3m/n472ZZ7DFL0mSZRG5B0CstRfMVjwiOgHgKYBtI+fTpsEkSY6IyHMA9WBSa5sC0zRNvfcvAOwMsHUROT0zmKbpIe/9awC7A0xE5GKe5w9mAonoAIA3APZGe3+VmW8XY5XBZrO5r1arFdj+CLvJzNfLsUpgq9XaY60tlnkwwu4y8+VwbCpIRLsAvATgIuwRM58r8q8ySEQ7AKwCOBwGiciTPM/PAFiP83jiDBuNxvZ6vf4MwLEoaLXf7y/3er1fGxXFJHDOObdijDkVBb0tfsDMPydV2EagIaKHAM5GQTmAo8z8/V/l+hdIRHcAXIqC3nvvFzudztdptT8GEtENANeioI+DwWCh2+1+noaNJTYRXQFwKwr6AmCBmT9Uwf6Azrnzxpj7UeV8s9YuZln2rio2BJ1zJ40xjwHMBYE/rLVLWZZls2BDkIjWAMwHgX1jzPF2u/1qVuz/gOpLLqapeijlPqmmTYDqJXaA6pXeCNW9HEao6vU1NLUv2CGq+gQEh6T3SJWo6jNaoqoPfbB8vVakRFWbpQDVa+dKVLXhDPZUryUOZjrWtP8GKhn/szxJL9sAAAAASUVORK5CYII="},72:function(t,e,i){"use strict";var s=i(65);i.n(s).a},73:function(t,e,i){"use strict";var s=i(66);i.n(s).a},74:function(t,e,i){"use strict";var s=i(67);i.n(s).a},75:function(t,e,i){"use strict";var s=i(68);i.n(s).a},76:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"all-wraper"},[e("HeadCommon",{attrs:{title:"首页"}}),e("img",{attrs:{src:i(70),alt:"动图"}}),e("hr"),this._m(0),e("hr"),e("div",{staticClass:"bg-test"}),e("hr"),e("button",{on:{click:this.jumpToRouterTest}},[this._v("路由测试")]),e("button",{on:{click:this.jumpToVantTest}},[this._v("vant组件测试")]),e("hr"),e("img",{staticClass:"static-test",attrs:{src:"static/bg_test.png",alt:"图片"}})],1)};s._withStripped=!0;var a={name:"home",data:function(){return{}},components:{HeadCommon:i(69).a},mounted:function(){},methods:{jumpToRouterTest:function(){this.$router.push("/routertest")},jumpToVantTest:function(){this.$router.push("/vanttest")}}},n=(i(73),i(20)),o=Object(n.a)(a,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("p",{staticClass:"text"},[this._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias accusamus officiis officia dignissimos repudiandae, consequuntur debitis architecto sit rem odio ipsum quod ad sunt, dicta incidunt natus itaque similique? Veritatis.")])])}],!1,null,"fae5bece",null);o.options.__file="src/views/Home.vue";e.default=o.exports},77:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"all-wraper"},[e("HeadCommon",{attrs:{title:"路由测试"}}),e("p",{staticClass:"text"},[this._v("路由测试")]),e("p",{staticClass:"text-lorem"},[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis excepturi unde praesentium voluptatum dolorum iure odit expedita temporibus, nemo sequi delectus saepe commodi, a, mollitia vel asperiores architecto aperiam.")])],1)};s._withStripped=!0;var a={name:"RouterTest",data:function(){return{}},components:{HeadCommon:i(69).a}},n=(i(74),i(20)),o=Object(n.a)(a,s,[],!1,null,"64d17fb5",null);o.options.__file="src/views/RouterTest.vue";e.default=o.exports},78:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"all-wraper"},[e("HeadCommon",{attrs:{title:"vant测试"}}),e("p",{staticClass:"text"},[this._v("测试页面")]),e("div",{staticClass:"vant-test"},[e("van-button",{attrs:{type:"primary"},on:{click:this.openDialog}},[this._v("打开dialog")]),e("p",{staticClass:"demo"},[this._v("点击返回发")])],1)],1)};s._withStripped=!0;i(63);var a=i(64),n={name:"RouterTest",data:function(){return{}},components:{HeadCommon:i(69).a},methods:{openDialog:function(){a.a.alert({title:"提示",message:"hello"}).then((function(){}))}}},o=(i(75),i(20)),r=Object(o.a)(n,s,[],!1,null,"108d7e9d",null);r.options.__file="src/views/VantTest.vue";e.default=r.exports}}]);