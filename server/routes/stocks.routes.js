const Stock = require('../controllers/stocks.controller')

module.exports = (app) => {
    app.get("/api/stocks", Stock.findAll)
    app.get("/api/stocks/:id", Stock.findOne)
    app.post("/api/stocks", Stock.create)
    app.put("/api/stocks/:id", Stock.update)
    app.delete("/api/stocks/:id", Stock.delete)
}