### 使用的技术

react16 + webpack2.0 + router4 + redux

### 20171102

webpack开发阶段的基础配置

### 20171103

webpack生产阶段的基础配置

### 20171106

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






