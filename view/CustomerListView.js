var CustomerListView =  Backbone.View.extend({
    tagName : "ul",
    className : "list-group-item",



initialize   :  function()
					{
						//this.render();
					    this.model.on("add",this.onAdd,this);

					},
	render 		 :  function()
					{
						var self = this;
						self.$el.html("");
					
						this.model.each(function(Customer)
						{
							var custView = new CustomerView({model:Customer});

						   	self.$el.append(custView.render().el );

						});
						this.showDetail(this.model.at(0));
						return this;
					},
	
	onAdd 		 :  function(newmodel)
					{
						
							var custView = new CustomerView({model:newmodel});
							console.log(newmodel);
							
						   	this.$el.prepend(custView.render().el );

						
						this.showDetail(newmodel);
						
					},
	showDetail	: 	function(model)
    				{
    					console.log(model);
                    	var customerFormView = new CustomerFormView({model:model});
                        $("#Customer-Form").html(customerFormView.render().el);
    				},



});



