async function validateUser() {
    const mobile = document.getElementById("mobileNumber").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, password })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("userMobile", data.user.mobile); // Store user details
        window.location.href = "city.html"; // Redirect to next page
    } else {
        alert(data.message);
    }
}


async function validateUserForRegister() {
    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || contact.length !== 10 || isNaN(contact) || password.length < 6) {
        alert("Please enter valid details.");
        return;
    }

    const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, mobile: contact, password })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Registration successful!");
        window.location.href = "home.html";
    } else {
        alert(data.message);
    }
}

function searchHotels() {
    let location = document.getElementById("location").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    if (!location) {
        alert("Please select a location.");
        return;
    }

    let pageMap = {
        "DELHI": "delhi.html",
        "BANGALORE": "bangalore.html",
        "HYDERABAD": "hyderabad.html",
    };

    let destinationPage = pageMap[location];
    
    if (destinationPage) {
        window.location.href = `${destinationPage}?checkin=${checkin}&checkout=${checkout}`;
    } else {
        alert("Page not found for the selected location.");
    }
}
const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const header = document.getElementById('header');
        let lastScrollY = window.scrollY;
    
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    
        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY) {
                header.style.opacity = '0';
            } else {
                header.style.opacity = '1';
            }
            lastScrollY = window.scrollY;
        });
var navLinks=document.getElementById("navlinks")
function showMenu() {
    navLinks.style.right="0"
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
