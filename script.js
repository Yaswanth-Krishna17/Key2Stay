function validateUser() {
    const mobile = document.getElementById("mobileNumber").value;
    const password = document.getElementById("password").value;
    if (mobile.length === 10 && !isNaN(mobile)) {
        if (password.length >= 6) { 
            localStorage.setItem("userMobile", mobile);
            window.location.href = "city.html";
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

    const mobileRegex = /^[0-9]{10}$/;  // 10-digit mobile number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Email format

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
    if (localStorage.getItem("userData")) {
        alert("Thankyou for Registering! Redirecting to home.");
        window.location.href = "city.html";
        return;
    }
    localStorage.setItem("userData", JSON.stringify({ name, contact }));
    alert("Registration successful!");
    window.location.href = "home.html";
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
