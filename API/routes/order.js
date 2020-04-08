const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Product were found",
	});
});

router.post("/", (req, res, next) => {
	const order = {
		productID: req.body.productID,
		quantity: req.body.quantity,
	};

	res.status(201).json({
		message: "Product was created",
		order: order,
	});
});

router.get("/:orderID", (req, res, next) => {
	res.status(200).json({
		message: "Order Details",
		orderID: req.params.orderID,
	});
});

router.delete("/:orderID", (req, res, next) => {
	res.status(200).json({
		message: "Order deleted",
	});
});

module.exports = router;
