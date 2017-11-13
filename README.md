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
	


## koa2

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


## 20171108 redux数据状态管理插件

解决组件之间数据传递

	安装： npm i redux react-redux -S

 Redux 的适用场景：多交互、多数据源

#### Store

Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。

Redux 提供createStore这个函数，用来生成 Store。

	import {createStore} from 'redux'
	
	const store = createStore(reducer) 

#### State

Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。

当前时刻的 State，可以通过store.getState()拿到。

Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。

	store.getState()

#### Action

State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。

所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。

Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置

Action 描述当前发生的事情。**改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store**。

	store.dispatch(action)

store.dispatch()是 View 发出 Action 的唯一方法。

#### reducer

Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。

Reducer 是一个纯函数（只要是同样的输入，必定得到同样的输出。），它接受 Action 和当前 State 作为参数，返回一个新的 State。

    function reducer(state = 0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            default:
                return state
        }
    }

#### store.subscribe()

Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。

	store.subscribe(listener);

store.subscribe方法返回一个函数，调用这个函数就可以解除监听。

	let unsubscribe = store.subscribe(() =>
	  console.log(store.getState())
	);
	
	unsubscribe();



