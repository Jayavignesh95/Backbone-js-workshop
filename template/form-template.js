<script type="text/template" id="form-template">
    <% _.each(Customers, function(Customer) { %>
         <div id="Customer-Form">
                      
           <div class="form-group">
        
              <form id="user" class="container form-horizontal">
                     <label class="control-label col-xs-4">Hello</label>
                        <div class="col-xs-8">
                            <input class="form-control" type="text" id="FirstName" value="<%= Customer.get('FirstName') %>">
                        </div>
                     <label class="control-label col-xs-4">LastName</label>
                        <div class="col-xs-8">
                            <input class="form-control" type="text" id="LastName" value="<%= Customer.get('LastName') %>">
                        </div>
                      <label class="control-label col-xs-4">Email</label>
                         <div class="col-xs-8">
                             <input class="form-control" type="text" id="Email" value="<%= Customer.get('LastName') %>">
                          </div>
                    <button class="btn btn-success"  id="add" type="button">Submit</button>
                </form>
             </div>
          </div>

     <% }); %>

</script>
