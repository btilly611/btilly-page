const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = process.env.PORT || 3000;
app.set('views','./views')
app.set('view engine','handlebars')
app.engine('handlebars',exphbs.create({}).engine)
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.listen(port,()=>{
    console.log("Listening on" + port)
})
app.get('/',(req,res)=>{
    res.render('index',{layout:false},function(err,html){
        if(err){
            return console.log('A rendering error was found')
        }
        res.status(200).send(html)
    })
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
app.get('/carreras',(req,res)=>{
    res.render('carreras',{layout:false})
})
app.get('/contactanos',(req,res)=>{
    res.render('contactanos',{layout:false})
})

app.get('/landing-p-1',(req,res)=>{
    res.render('landing-page',{layout:false})
})

app.get('/form',(req,res)=>{
    res.render('form-page',{layout:false})
})

app.post('/payment',(req,res)=>{
    res.redirect('/form')
})
