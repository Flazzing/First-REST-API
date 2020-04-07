const express = require("express");
const app = express();

const productRoutes = require("./API/routes/product");
const orderRoutes = require("./API/routes/order");

// app.use((req, res, next) => {
// 	res.status(200).json({
// 		message: "It works",
// 	});
// });

app.use("/products", productRoutes);
app.use("/orders", productRoutes);

module.exports = app;
