var CustomerView = Backbone.View.extend({
	tagName     :  "li",
    events 		:   {
    					"click"    :  "showDetail"
    				},
    initialize 	: 	function()
    				{
    					console.log(this.model);
                        this.render();
    				    this.model.on("change",this.render,this);
    				},
    showDetail	: 	function()
    				{
                         alert("BackN");
                         console.log(this.model);
                    	var customerFormView = new CustomerFormView({model:this.model});
                        $("#Customer-Form").html(customerFormView.render().el);
    				},
	render 		: 	function() 
					  {
                        console.log(this.model.get("FirstName"));
                    	this.$el.html("<p>"+this.model.get("FirstName")+"</p>");
						console.log(this.el);
						return this;
					  }

});