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