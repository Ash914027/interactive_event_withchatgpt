// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the RSVP form
    const rsvpForm = document.getElementById("rsvp-form");

    // Add event listener for form submission
    rsvpForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the value of the attendance field
        const attendanceField = document.getElementById("attendance");
        const attendance = attendanceField.value;

        // Get the confirmation message element
        const confirmationMessage = document.getElementById("confirmation-message");

        // Check if the user selected 'attending'
        if (attendance === "yes") {
            // Display party emoji and positive message
            confirmationMessage.innerHTML = "&#127881; Woohoo! See you at the party!";
        } else {
            // Display message for non-attendees
            confirmationMessage.innerHTML = "Thank you for letting us know. Maybe next time!";
        }

        // Show the confirmation message
        confirmationMessage.style.display = "block";
    });
});
