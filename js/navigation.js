console.log("Portfolio Loaded Successfully!");
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const responseMsg = document.getElementById('responseMsg');

    if (name.length < 3) {
        responseMsg.style.color = "red";
        responseMsg.innerText = "Please enter a valid name (at least 3 characters).";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        responseMsg.style.color = "red";
        responseMsg.innerText = "Please enter a valid email address.";
        return;
    }

    responseMsg.style.color = "green";
    responseMsg.innerText = "Thank you! Message sent successfully.";
    this.reset();
});
