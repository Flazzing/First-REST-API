const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// get product

const Product = require("../models/product");

router.get("/", (req, res, next) => {
	Product.find()
		.exec()
		.then((docs) => {
			console.log(docs);
			if (docs.length >= 0) {
				res.status(200).json(docs);
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

router.post("/", (req, res, next) => {
	// create new object and save it. Save is a mehtod to save into the database

	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price,
	});

	product
		.save()
		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			console.log(err);
		});

	res.status(201).json({
		message: "handling POST request to /products",
		createdProduct: product,
	});
});

// id should be after / in URL
router.get("/:productID", (req, res, next) => {
	const id = req.params.productID;

	Product.findById(id)
		.exec()
		.then((doc) => {
			console.log(doc);
			res.status(200).json(doc);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
});

router.patch("/:productID", (req, res, next) => {
	const id = req.params.productID;
	const updateOperation = {};

	for (const ops of req.body) {
		updateOperation[ops.propName] = ops.value;
	}

	Product.update({ _id: id }, { $set: updateOperation })
		.exec()
		.then((result) => {
			console.log(result);
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: err });
		});
});

router.delete("/:productID", (req, res, next) => {
	const id = req.params.productID;
	Product.remove({ _id: id })
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((error) => {
			res.status(500).json({
				error: error,
			});
		});
});

module.exports = router;

// post for product
