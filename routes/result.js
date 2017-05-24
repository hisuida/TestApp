var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */

router.get('/result*', function (req, res) {
	var id = req.query.key;

	req.getConnection(function(err,conection){

		connection.query('USE db4d28bcf85ca347f1bc54a771012fcc51');
		connection.query('Select o.SerialNumber_ID, o.CustomerID, o.OrderDate, o.OrderNumber, s.SiteName, p.Description, p.TypeURL from OrderData o Inner Join ProductData p ON o.Type_ID = p.ID Inner Join OrderSite s ON o.OrderSite = s.ID where o.SerialNumber_ID = ?',[id],function(err, rows) {
			if(err) {
				console.log("Error Selecting : %s", err);
			}
			else {
				res.render('result', {page_title:"OrderData", data:rows});
				console.log(rows);
			};

		});
	});
});


module.exports = router;

