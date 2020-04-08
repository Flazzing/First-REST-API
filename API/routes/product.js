const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// get product

const Product = require("../models/product");

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "handling GET request to /products",
	});
});

router.post("/", (req, res, next) => {
	const product = {
		name: req.body.name,
		price: req.body.price,
	};

	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price,
	});
	product.save();

	res.status(201).json({
		message: "handling POST request to /products",
		createdProduct: product,
	});
});

// id should be after / in URL
router.get("/:productID", (req, res, next) => {
	const id = req.params.productID;
	if (id === "special") {
		res.status(200).json({
			message: "You discovered the special product",
			id: id,
		});
	} else {
		res.status(200).json({
			message: "You passed an ID",
		});
	}
});

router.patch("/:productID", (req, res, next) => {
	res.status(200).json({
		message: "updated product",
	});
});

router.delete("/:productID", (req, res, next) => {
	res.status(200).json({
		message: "Delete product!",
	});
});

module.exports = router;

// post for product
