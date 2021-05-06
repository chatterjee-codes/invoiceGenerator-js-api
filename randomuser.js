class Randomuser
{
    

     async  getCustomer()
     {
         
         
         const customerData = await fetch(`https://api.randomuser.me/`);
         
         const data = await customerData.json();
         //console.log(data.results[0].email);
 
         return data.results[0]; //to return it as a collection
     }
}