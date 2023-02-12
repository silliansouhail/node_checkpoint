const express = require('express')
const app = express()
const port = 3000

const auth=(req, res, next) => {
    let daytime=new Date()
    let day= daytime.getDay()
    let hours= daytime.getHours()
    if(day>=0&&day<=5 && hours>=9&&hours<=18){next()}
    else{res.send("Our services are only available from Monday to Friday from 9am to 5pm")}
}
const homePath= __dirname+"/Pages/Index.html"
const aboutPath= __dirname+"/Pages/About.html"
const servicesPath= __dirname+"/Pages/Services.html"
app.use(auth)
app.get('/', (req, res) => res.sendFile(homePath))
app.get('/about', (req, res) => res.sendFile(aboutPath))
app.get('/services', (req, res) => res.sendFile(servicesPath))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))