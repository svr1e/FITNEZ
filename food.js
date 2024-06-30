// Function to add food item and calories to the list and calculate total calories
// Function to add food item and calories to the list and calculate total calories
// Function to add food item and calories to the list and calculate total calories
// Function to send email with the total calories
// Function to add food item and calories to the list and calculate total calories
// Function to add food item and calories to the list and calculate total calories
function addFood() {
    // Get input values
    var foodName = document.getElementById('food-name').value;
    var calories = parseInt(document.getElementById('calories').value);

    // Validate input
    if (foodName === '' || isNaN(calories)) {
        alert('Please enter valid food name and calories.');
        return;
    }

    // Create list item element
    var listItem = document.createElement('li');
    listItem.textContent = foodName + ': ' + calories + ' calories';

    // Append list item to food list
    document.getElementById('food-list').appendChild(listItem);

    // Calculate total calories
    var totalElement = document.getElementById('total');
    var currentTotal = parseInt(totalElement.textContent);
    totalElement.textContent = currentTotal + calories;

    // Clear input fields
    document.getElementById('food-name').value = '';
    document.getElementById('calories').value = '';
}

// Function to send email with the total calories
function sendEmail() {
    // Get total calories and email input
    var totalCalories = document.getElementById('total').textContent;
    var email = document.getElementById('email').value;

    // Validate email input
    if (email === '') {
        alert('Please enter a valid email.');
        return;
    }

    // Configure EmailJS
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
    var templateParams = {
        to_email: 'sai1253806@gmail.com', // Your email for testing
        total_calories: totalCalories
    };

    emailjs.send('service_agsb3ci', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Email sent successfully!');
        }, function(error) {
            alert('sent succesfully ' + JSON.stringify(error));
        });
}
