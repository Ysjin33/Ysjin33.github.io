// TODO: Create toggleMenu()
function toggleMenu() {
    const menu = document.querySelector(' .menu-links');
    const icon = document.querySelector(' .hamburger.icon');
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}
 
// TODO: Create sendEmail()
function sendEmail() {
    var name = document.getElementById
    value
    var email = document.getElementById
    value
    var message = document.getElementById
    ("message").value;

    email.send({
        //Host doesn't work with gmail
        Host: "smtp.gmail.com",
        Username: "ysjin6251@gmail.com",
        Password: "password",
        To: "ysjin6251@gmail.com",
        From: email,
        Subject: "New Website Enquiry rom ${name}",
        Body: message
    })  .then(function(message){
        // Reset form after successful submission
        alert("Email sent successfully!")
    })

    }
}

// TODO: Create reset()
