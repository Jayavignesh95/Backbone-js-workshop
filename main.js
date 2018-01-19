$(document).ready(function()
{	
	// var CustList = new CustomerList();
 // $(document).on('click', "#add", function() 
 //    {
 //    	//alert("Clicked");
 //    	var cust =  {
 //      					"FirstName" : $("#FirstName").val(),
 //     					"LastName" : $("#LastName").val(),
 //    					 "Email" : $("#Email").val()
 // 					  };
 // 		var c1 = new Customer(cust);
 //        console.log(c1.toJSON());
 //        CustList.add(c1);
 //        var custListView = new CustomerListView({model : CustList});

//    });

	$("#addnew").on("click",function(){
		var customer = new Customer();
		console.log(customer.isNew());
		customercollection.add([customer.toJSON()]);
	});

	var customercollection = new CustomerList();
	 var cus1 = {FirstName:"Jaya",LastName:"Vignesh"};
	// var cus2 = {FirstName:"Jaya",LastName:"Vignesh"};
	// var cus3 = {FirstName:"Jaya",LastName:"Vignesh"};

	customercollection.add([cus1]);

  	var custListView = new CustomerListView({model : customercollection});

  	$("#CustomerList-div").html(custListView.render().el);

});