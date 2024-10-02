// 1. 
var customerName = 'bob';

// 2. 
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); 
}

// 3. 
function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

// 4. 
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; 
}

// 5. 
const leastFavoriteCustomer = 'John Doe';

// 6. 
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane Doe'; 

//Testing
upperCaseCustomerName(); 
console.log(customerName);

setBestCustomer(); 
console.log(bestCustomer); 

overwriteBestCustomer(); 
console.log(bestCustomer); 

console.log(leastFavoriteCustomer); 
changeLeastFavoriteCustomer(); 
