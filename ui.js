class UI
{
    constructor()
    {
        this.invoice = document.getElementById('invoice');
    }

    //display invoice in UI
    showCustomerInfo(customer)
    {
        this.invoice.innerHTML = `
            <h4 class="page-heading mb-3"> Customer Details </h4>
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-3" src="${customer.picture.large}">
                        <a href="#" target="" class="btn btn-outline-info mb-4">${customer.name.title} ${customer.name.first} ${customer.name.last}</a>
                    </div>

                    <div class="col-md-9">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${customer.id.name} ${customer.id.value}</li>
                            <li class="list-group-item">DOB: ${customer.dob.date}</li>
                            <li class="list-group-item">Email: ${customer.email}</li>
                            <li class="list-group-item">Phone: ${customer.phone}</li>
                            <li class="list-group-item">Registered on: ${customer.registered.date}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h4 class="page-heading mb-3"> Bill Details </h4>
            <div id="bill"></div>
            
        `;
        //console.log(customer);
    }

    //display bill
    showBill(item)
    {
        let total = item * 20;
        document.getElementById('bill').innerHTML = `

            <table class="table table-hover">
                <tbody>
                    <tr class="table-info">
                        <th scope="row">No of items </th>
                        <td>${item}</td>
                    </tr>

                    <tr class="table-info">
                        <th scope="row">Cost of each item</th>
                        <td>$20</td>
                    </tr>

                    <tr class="table-info">
                        <th scope="row">Total</th>
                        <td>$${total}</td>
                    </tr>
                </tbody>
            </table>
        `;
    }

    //show alert message
    showAlert(message, className)
    {
        //clear any remaining alerts
        //this.clearAlert();

        //create div
        const div = document.createElement('div');
        
        //add classes
         div.className = className;

         console.log(div);

        //add text
        div.appendChild(document.createTextNode(message));

        //get a parent
        const container = document.querySelector('.searchContainer');
        console.log(container)

        //get the search box
        const search = document.querySelector('.search');

        //insert alert
        container.insertBefore(div, search);

        // timeout after 2 sec
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    //clear alert message
    clearAlert()
    {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert)
        {
            currentAlert.remove();
        }
    }

    
}