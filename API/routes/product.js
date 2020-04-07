const express = require("express");
const router = express.Router();

// get product

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "handling GET request to /products",
	});
});

router.post("/", (req, res, next) => {
	res.status(200).json({
		message: "handling POST request to /products",
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
