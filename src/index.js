import express from 'express'
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'
//agrege type:module en el package.json para usar cualqueir express
const app = express()

import indexRoutes from './routes/index.js'


const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname , "/views")
//esto es para obtener la ruta absoluta
app.set('views',join(__dirname, 'views') )
//join para usar en cualquier pc
app.set('view engine', 'ejs')

app.use(indexRoutes)
// app.get('/',(req , res)=>  res.render('index'))

// app.get('/about',(req , res)=>  res.render('about'))

// app.get('/contact',(req , res)=>  res.render('contact'))
app.use(express.static(join(__dirname,'public')))
app.listen(3000)
console.log('server is listening on port', 3000)