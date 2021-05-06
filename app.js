//init randomuser
const randomuser = new Randomuser;

//init ui
const ui = new UI;


// get variables
const userInput = document.getElementById('itemBought'),
      submitBtn = document.getElementById('submit-btn');


// submit event listener
submitBtn.addEventListener('click', (e) => {
    //console.log(itemBought.value);

    //get user input
    let noOfItemBought = userInput.value;
    console.log(noOfItemBought);

    if(noOfItemBought !== '')
    {
        //make http call
        randomuser.getCustomer()
            .then(data => {
                //show data in invoice through ui.js
                ui.showCustomerInfo(data);
                ui.showBill(noOfItemBought);
            })
    }
    if(noOfItemBought === '')
    {
        //dsplay nothing entered
        ui.showAlert('Kindly enter number of items bought', 'alert alert-dismissible alert-danger');
    }
});









//randomuser.getCustomer();
