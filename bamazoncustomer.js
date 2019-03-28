var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Gabrielle2!",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  });

  queryAllProducts();
  
function queryAllProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      
      for (var i = 0; i < res.length; i++){
      console.log(res[i].item_id  +" | " + res[i].product_name + " | " + "$" +res[i].price + " | " + res[i].stock_quantity)
      }
      shop();
     });
     
  }
  
  var shop= function(){
    connection.query("SELECT * FROM products", function(err, res) {
    inquirer
      .prompt([
        {
        name: "item",
        type: "rawlist",
        choices: function() {
          
        
          var itemIdArr=[];
         for (var i = 0; i < res.length; i++){
             itemIdArr.push(res[i].product_name);
             
             }
            return itemIdArr; 
            
            
          },
        message: "Which item would you like to purchase? Please enter the item number."
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?"
      }
    ]).then(function(answer) {
      // get the information of the chosen item
      var chosenItem;
      for (var i = 0; i < res.length; i++) {
        if (res[i].product_name === answer.item) {
          chosenItem = res[i];
          //console.log(chosenItem);
        }
        }

    if (chosenItem < parseInt(answer.quantity)){
          console.log("Insufficient Quantity In Stock!")
    } else if (chosenItem.stock_quantity > parseInt(answer.quantity)){
      connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: (chosenItem.stock_quantity - parseInt(answer.quantity))
          },
          {
            item_id: chosenItem.item_id
          }

        ],
        function(error){
          if (error) throw err;
          console.log("Item added to your cart. Your cart Total is $" + parseInt(answer.quantity) * chosenItem.price);
        connection.end();
        }
      );
    }
  });
});

}


  
  