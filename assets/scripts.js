function submitForm() {
    // User Registration Data
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Profile Picture Data
    const profilePicture = document.getElementById("profilePicture").value;

    // Contact Number Data
    const contactNumber = document.getElementById("contactNumber").value;

    var pattern = /^[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;

      if (pattern.test(contactNumber)) {
        console.log("ok");
      } else {
        alert("invalid number")
      }
    
    // Hotel Reservation Data
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);

  

    // Client-side validation for date overlap
    if (startDate >= endDate) {
        document.getElementById("dateError").innerText = "End date must be greater than start date";
        return;
    }

    const existingStartDate = new Date('2023-12-01');
    const existingEndDate = new Date('2023-12-24');
    console.log(existingStartDate);
    console.log(existingEndDate);

    if (!(endDate <= existingStartDate || startDate >= existingEndDate)) {
        alert("Selected dates overlap with an existing reservation. The next available reservation starts on " + existingEndDate);
        return;
    }
    

    // Client-side validation
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match!");
        return;
    }

    // Display Data in a Table
    const displayTable = document.getElementById("displayTable");
    displayTable.innerHTML = `
        <tr><td><strong>Username:</strong></td><td>${username}</td></tr>
        <tr><td><strong>Profile Picture:</strong></td><td>${profilePicture}</td></tr>
        <tr><td><strong>Reservation Date Range:</strong></td><td>${startDate} to ${endDate}</td></tr>
        <tr><td><strong>Contact Number:</strong></td><td>${contactNumber}</td></tr>
    `;
}