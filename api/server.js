import express from 'express'

const app = express()

app.set("PORT", process.env.PORT || 5000)

const env = process.env.NODE_ENV

const TOPPINGS = [
	{ "id": 1, "nombre": "Leche", "precio": 5 },
	{ "id": 2, "nombre": "Chocolate", "precio": 15 },
	{ "id": 3, "nombre": "Ron", "precio": 20 },
	{ "id": 4, "nombre": "Cacao", "precio": 10 }

];

const CAFE = 50;

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

if(env === 'production'){
	app.use('/', express.static(`${__dirname}/cafe-app/build`))
}

app.get("/toppings", (req, res) => {
	res.send(TOPPINGS);
})

var bodyParser = require('body-parser').json();
app.post('/selected', bodyParser, (req,res)=> {
	
	let lista = req.body["list"];
	let total=CAFE;

	lista.map((elem) => {
		let result = TOPPINGS.filter(x => x.id === elem)
		total = total + result[0].precio
	})

	res.send(total.toString())

});


app.listen(app.get("PORT"), ()=>{
	console.log(`API running at: localhost:${app.get("PORT")}`)	
})

