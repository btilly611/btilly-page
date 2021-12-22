const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = process.env.PORT || 3000;

app.set('views','./views')
app.set('view engine','handlebars')
app.engine('handlebars',exphbs.create({}).engine)

app.use(express.static('public'))
app.listen(port,()=>{
    console.log("Listening on" + port)
})

app.get('/',(req,res)=>{
    res.render('index',{layout:false})
})

app.get('/auditoria',(req,res)=>{
    res.render('auditoria',{layout:false})
})

app.get('/contabilidad',(req,res)=>{
    res.render('contabilidad',{layout:false})
})

app.get('/consultoria',(req,res)=>{
    res.render('consultoria',{layout:false})
})

app.get('/asesoria',(req,res)=>{
    res.render('asesoria',{layout:false})
})

app.get('/tributarios',(req,res)=>{
    res.render('tributarios',{layout:false})
})

app.get('/btilly-h',(req,res)=>{
    res.render('btilly-h',{layout:false})
})



