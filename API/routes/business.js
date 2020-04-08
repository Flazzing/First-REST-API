const express = require("express");
const router = express.Router();

router.get("", (res, req, next) => {
	res.status(200).json({
		businessID: "",
		businessName: "",
		businessAddress: "",
		businessCity: "",
		businessState: "",
		businessZIP: "",
		businessPhone: "",
		businessPhone: {
			category: "",
			subcategory: "",
		},
	});
});

router.delete("/:orderID", (req, res, next) => {
	res.status(200).json({
		message: "Order deleted",
	});
});
