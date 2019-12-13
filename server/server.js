const koa = require("koa")

let app = new koa();

app.use(async ctx=>{
    console.log("ctx",ctx)
    ctx.body = "你好"
})

app.listen(4000)