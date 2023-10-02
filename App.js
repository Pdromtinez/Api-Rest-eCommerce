import express from "express";
import cors from 'cors'
import db from "./Controllers/database/database.js";
import router from "./routes/UsersRouter.js";
import Shoesrouter from "./routes/ShoesRouter.js";
import Brandrouter from "./routes/BrandRouter.js";
import Categoriesrouter from "./routes/CategoryRouter.js";
import Ordersrouter from "./routes/OrdersRouter.js";
import SoldItemsrouter from "./routes/SolditemsRouter.js";



export const app = express()
app.get('/', (_req, res) =>{
 res.send('Hola Api')
})

app.use(cors())
app.use(express.json())
app.use('/Shoes', Shoesrouter)
app.use('/Users', router)
app.use('/Brand', Brandrouter)
app.use('/Category', Categoriesrouter)
app.use('/Orders', Ordersrouter)
app.use('/SoldItems', SoldItemsrouter)


try{
	await db.authenticate()
		console.log('conected to database')
	await db.sync()
	}catch(error){
		console.log(`error:' ${error}`)
	}

//👀 importante este paso para poder parar el servidor dentro de los test
export const server = app.listen(8090,() =>{
console.log('🚀server up in http://localhost:8090/')
} )