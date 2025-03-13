function validateUser() {
    const mobile = document.getElementById("mobileNumber").value;
    const password = document.getElementById("password").value;
    if (mobile.length === 10 && !isNaN(mobile)) {
        if (password.length >= 6) { 
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ contact: mobile, password: password })
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = "city.html";
                } else {
                    alert("Invalid credentials. Please try again.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred. Please try again later.");
            });
        } else {
            alert("Password must be at least 6 characters long.");
        }
    } else {
        alert("Please enter a valid 10-digit mobile number.");
    }
}

function validateUserForRegister() {
    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const password = document.getElementById("password").value.trim();
    
    const mobileRegex = /^[0-9]{10}$/;  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

    if (!name) {
        alert("Please enter a valid Name.");
        return;
    }

    if (!contact) {
        alert("Contact field cannot be empty.");
        return;
    }

    if (!(mobileRegex.test(contact) || emailRegex.test(contact))) {
        alert("Enter a valid 10-digit mobile number or a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, contact: contact, password: password })
    })
    .then(response => {
        if (response.ok) {
            alert("Registration successful!");
            window.location.href = "home.html";
        } else {
            alert("Registration failed. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
    });
}

function hideMenu() {
    navLinks.style.right="-200px"
}
document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('#bottom', { 
        origin: 'bottom', 
        distance: '80px', 
        duration: 2000,
        reset: true
    });

    ScrollReveal().reveal('#left', { 
        origin: 'left', 
        distance: '80px', 
        duration: 2000,
        reset: true
    });

    ScrollReveal().reveal('#right', { 
        origin: 'right', 
        distance: '80px', 
        duration: 2000,
        reset: true
    });

    ScrollReveal().reveal('#bottom1', { 
        origin: 'bottom', 
        distance: '80px', 
        duration: 2000,
        reset: true
    });

    ScrollReveal().reveal('#bottom2', { 
        origin: 'bottom', 
        distance: '80px', 
        duration: 2500,
        reset: true
    });

    ScrollReveal().reveal('#bottom3', { 
        origin: 'bottom', 
        distance: '80px', 
        duration: 3000,
        reset: true
    });

    ScrollReveal().reveal('#bottom4', { 
        origin: 'bottom', 
        distance: '80px', 
        duration: 3500,
        reset: true
    });

    ScrollReveal().reveal('#bottom5', { 
        origin: 'bottom', 
        distance: '80px', 
        duration: 4000,
        reset: true
    });

    ScrollReveal().reveal('#bottom6', { 
        origin: 'bottom', 
        distance: '80px', 
        duration: 4500,
        reset: true
    });
});
