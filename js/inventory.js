function addToInventory() {
    var nameInput = document.getElementById("name").value;
    var amountInput = document.getElementById("amount").value;
    var expYearInput = document.getElementById("expiration-year").value;
    var expMonthInput = document.getElementById("expiration-month").value;
    var expDayInput = document.getElementById("expiration-day").value;

    console.log(nameInput, amountInput, expDayInput, expDayInput, expYearInput);
    

    if(!nameInput || !amountInput || !expYearInput || !expMonthInput || !expDayInput){
        window.alert("Please provide information for all the fields.")
    }else{
        // Clear the input values
        document.getElementById("name").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("expiration-year").value = "";
        document.getElementById("expiration-month").value = "";
        document.getElementById("expiration-day").value = "";

        // Display the entered data in a list
        var inventoryList = document.getElementById("inventoryList");
        var listItem = document.createElement("li");
        listItem.innerHTML = 
        `Name: ${nameInput}<br> 
        Amount: ${amountInput}<br>  
        Expiration Year: ${expYearInput}<br>  
        Expiration Month: ${expMonthInput}<br>  
        Expiration Day: ${expDayInput}<br><br> `
        inventoryList.appendChild(listItem);
    }
  }