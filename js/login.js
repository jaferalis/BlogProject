
// Get the form element
var form = document.getElementById("loginfrm");
// var logout =  document.getElementById("logout");
// Attach an event listener to the form's submit event
form.addEventListener("submit", function() {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input field values
    var input1 = document.getElementById("email").value;
    var input2 = document.getElementById("password").value;

    // Validate the form data
    if (input1 === "" || input2 === "") {
        alert("Please fill in all fields!");
    } else {
        // Submit the form
        form.submit();
        window.location.href = './blogs.html';
    }
});