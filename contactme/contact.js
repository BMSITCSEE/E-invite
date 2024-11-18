emailjs.init("_-cY4dC9DZ_E6Iy_z"); // Replace with your actual User ID

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const params = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs
        .send("service_5driozt", "template_fdb44vm", params)
        .then((response) => {
            alert("Email sent successfully!");
            console.log("SUCCESS:", response.status, response.text);
        })
        .catch((error) => {
            alert("Failed to send email. Please try again.");
            console.error("FAILED:", error);
            console.error("Error details:", error.text); // More detailed error
        });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.querySelector("#sendBtn").addEventListener("click", sendEmail);
