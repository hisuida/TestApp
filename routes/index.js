var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */

router.get('/search*', function(req, res) {
	var id = req.query.key;
	console.log(id);
	var userData = {};
	req.getConnection(function(err,conection){
		connection.query('USE db4d28bcf85ca347f1bc54a771012fcc51 Select o.SerialNumber_ID, o.CustomerID, o.OrderDate, o.OrderNumber, s.SiteName, p.Description, p.TypeURL from OrderData o Inner Join ProductData p ON o.Type_ID = p.ID Inner Join OrderSite s ON o.OrderSite = s.ID where o.SerialNumber_ID = ?',[id],function(err, rows) {
			if(err) {
				console.log("Error Selecting : %s", err);
			}
			else {
				if(rows)
				{
				userData.SerialNumber_ID = rows[0].SerialNumber_ID;
				userData.CustomerID = rows[0].CustomerID;
				userData.authorised = true;
				console.log(rows);
				}
				else{
					userData.authorised = false;
				}
			};
		});
	});
	res.render('index', userData);
});

router.get('/', function (req,res){
	var userData = {
		authorised: false
	};
	res.render('index',userData);
})

module.exports = router;
