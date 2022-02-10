const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = process.env.PORT || 3000;
const sendGrid = require('@sendgrid/mail')
const mongoose = require('mongoose');
const req = require('express/lib/request');
const Schema = mongoose.Schema
 async function connectToMongoose(){
    try{
        // await mongoose.connect('mongodb+srv://btilly:2022@cluster0.cpoyx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        await mongoose.connect('mongodb+srv://ventasBTHN:US50Uo0CsfbpnyfM@bakertillytesting.lsiny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log('Successfully connected')
    }catch(e){
        console.log(e,'Not connected')
    }
}

sendGrid.setApiKey('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')
const ContactDetailsSchema = new Schema({
    plan:String,
    firstName:String,
    lastName:String,
    companyPosition:String,
    email:String,
    companyCategory:String,
    rtn:Number,
    companyCategory:String,
    companyAddress:String
})
const ContactDetails= mongoose.model('contactDetails',ContactDetailsSchema)
connectToMongoose()
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
app.post('/calendly', async (req,res)=>{
    try{
        const message = {
            to:req.body.email,
            from:'btilly611@gmail.com',
            subject:`Hola ${req.body.firstName}, gracias por suscribirte`,
            text:'Gracias por suscribirte a Baker Tilly HN.'
        }        
      
        let contact = new ContactDetails(req.body)
        console.log(req.body.email)
        await contact.save()
        await sendGrid.send(message)
        res.status(201).send('Message sent')
        // res.render('calendly',{layout:false})
    }catch(e){
        res.status(404).send(e)
    }
})
// app.post('/payment',(req,res)=>{
//     res.redirect('/form')
// })
