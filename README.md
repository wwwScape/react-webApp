## 使用的技术

react16 + webpack2.0 + router4 + redux

## 20171102

webpack开发阶段的基础配置

## 20171103

webpack生产阶段的基础配置

## 20171106

react-router配置

	npm i react-router react-router-dom -S

    // 启动本地服务
    devServer:{
        contentBase:__dirname+'/dist',
        port:3000,
        inline:true,
        hot:true,
        historyApiFallback:true（必须加上）
    },

什么是路由？

路由就是指随着浏览器地址栏的变化，展示给用户的页面也不相同。

传统的网页根据用户访问的不同的地址，浏览器从服务器获取对应页面的内容展示给用户。这样造成服务器压力比较大，而且用户访问速度也比较慢。

在这种场景下，出现了单页应用。

单页应用，就是只有一个页面，用户访问一个网址，服务器返回的页面始终只有一个，不管用户改变了浏览器地址栏的内容或者在页面内发生了跳转，

服务器不会重新返回新的页面，而是通过相应的js操作来实现页面的更改。而地址栏内容的改变，显示不同的页面，实现的手段就是前端路由。

前端路由实现的两种方式：

1. location.hash+hashchange事件

	使用hash，兼容性较好

2. history.pushState()+popState事件
	
	使用了H5的新属性history


使用 this.props.match.params.id 获取路径参数



## 20171107 fetch 获取/提交数据，以及开发环境下的数据 Mock

#### fetch是基于promise的

	安装：npm i whatwg-fetch es6-promise --S（解决低版本浏览器的兼容性的问题）

promise用于解决callback回调的问题，同时，generator，es7中的async/await也能解决	

fetch/test.js

	import 'whatwg-fetch'
	import 'es6-promise'
	
	// 获取数据
	export function getData() {
	
	    // 获取字符串
	    let result = fetch('/api/1',{
	        credentials:'include',
	        headers:{
	            'Accept':'application/json,text/plain,*/*'
	        }
	    });
	    result.then(res=>{
	        return res.text()
	    }).then(text=>{
	        console.log(text)
	    });
	
	
	    // 获取json
	    let result2 = fetch('/api/2',{
	        credentials:'include',
	        headers:{
	            'Accept':'application/json,text/plain,*/*'
	        }
	    });
	    result2.then(res=>{
	        return res.json()
	    }).then(text=>{
	        console.log(text)
	    })
	}
	
	// 提交数据
	export function postData() {
	
	    let result = fetch('/api/post',{
	        credentials:'include',
	        method:'POST',
	        headers:{
	            'Accept': 'application/json,text/plain,*/*',
	            'Content-Type':'application/x-www-form-urlencoded'
	        },
	        body:"a=100&b=50"
	    });
	    result.then(res=>{
	        return res.json()
	    }).then(json=>{
	        console.log(json)
	    })
	
	}
	


#### koa2

	安装：npm i koa koa-router -D

	路由插件：koa-router

package.json中增加：(npm run mock)

	"scripts": { "mock": "node --harmony ./mock/server.js", }


mock/server.js

	const Koa = require('koa');
	const app = new Koa();
	const Router = require('koa-router');// 路由插件
	const router = new Router();
	
	router.get('/api',function (ctx) {
	    ctx.body = 'hello Koa'
	});
	
	// get请求数据:接口 /api/1,返回字符串
	router.get('/api/1',function (ctx) {
	    ctx.body = 'get请求返回的字符串text()：test data string'
	});
	
	// get请求数据:接口 /api/2,返回json对象
	router.get('/api/2',function (ctx) {
	    ctx.body = {name:'Jack',age:'12',text:'get请求返回的json对象json()'}
	});
	
	
	// post提交数据:接口 /api/post
	router.post('/api/post',function (ctx) {
	    ctx.body = {name:'张三',age:16,text:"post请求返回的json对象"}
	})
	
	app.use(router.routes())
	    .use(router.allowedMethods());
	
	app.listen(3000);

webpack.config.js

    // 启动本地服务
    devServer:{
        proxy:{
            '/api':'http://localhost:3000'
        },
        port:9000,
        contentBase:__dirname+'/dist',
        inline:true,
        hot:true,
        historyApiFallback:true
    },





