const koa = require("koa")
const Router = require("koa-router")
const request = require("request")
const  bodyParser = require("koa-bodyparser")
// const serve = require("koa-static")
const router = new Router()
const weatherUrl ="https://free-api.heweather.net/s6/weather/now?location=shanghai&key=b9d7fde48e9b41a19096569eb98e01da"

let app = new koa();

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods());


router.get("/weather", (ctx,next)=>{
    return new Promise((resolve, reject) => {
        request.get(weatherUrl,function (err,response,body) {
            if(body){
                ctx.response.body = body
                resolve(ctx.response.body)
            }else {
                reject(err)
            }
        })
    })


})



app.listen(4000)