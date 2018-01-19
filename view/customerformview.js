var CustomerFormView = Backbone.View.extend({
	template  : _.template( $("#Customer-Form-template").html() ),

	events 	 :  {
					"click #add" : "setModel"
				},
	render 	 :  function()
				{
					this.$el.html( this.template(this.model.toJSON() ) );
					console.log(this.model.toJSON());
					console.log(this.$el.html);
					return this;
				},
	setModel :  function()
				{
					var firstName = this.$el.find("#FirstName").val();
					this.model.set("FirstName" , firstName);
					var lastName = this.$el.find("#LastName").val()
					this.model.set("LastName" , lastName);
					var email = this.$el.find("#Email").val();
					// alert(email);
					this.model.set("Email",email);
					console.log(this.model.toJSON());
					return this;

				}

});