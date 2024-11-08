
import {  db, doc,getDoc, query, updateDoc,
    setDoc,     signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    OAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    where, getDocs, storage, collection, auth, analytics } from 'https://shutterworx.co/js/firebaseConfig.js';


   /* 
// Check if the current page is not 'admin-login' or 'admin-login.html'
const currentPath = window.location.pathname;
if (!currentPath.endsWith('admin-login') && !currentPath.endsWith('admin-login.html')) {
    // Authenticate admin
    auth.onAuthStateChanged(user => {
        if (!user || user.role !== 'admin') {
            window.location = './admin-login'; // Redirect to login if not authenticated
        }
    });
}
*/


    console.log("Page loaded admin ?????????????");


function replaceNavbarNav() { 
    // Select the .admin-header element
    const adminHeader = document.querySelector('.admin-header');

    // If .admin-header is found, check for .navbar-nav within it
    if (adminHeader) {
        const navbarNav = adminHeader.querySelector('.navbar-nav');

        // If .navbar-nav is found, proceed
        if (navbarNav) {
            // Define the new list items for .navbar-nav
            const newNavItemsHTML = `
                <li class="nav-item"><a class="nav-link" href="../index">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="../admin/dashboard">Dashboard</a></li>
                <li class="nav-item"><a class="nav-link" href="design">Design</a></li>
                <li class="nav-item"><a class="nav-link" href="images">Images</a></li>
                <li class="nav-item"><a class="nav-link" href="analytics">Analytics</a></li>
                <li class="nav-item"><a class="nav-link" href="purchases">Purchases</a></li>
                <li class="nav-item"><a class="nav-link" href="appointments">Appointments</a></li>
                <li class="nav-item"><a class="nav-link" href="settings">Settings</a></li>
            `;

            // Replace the contents of .navbar-nav with the new items
            navbarNav.innerHTML = newNavItemsHTML;
        } else {
            console.warn("The .navbar-nav element was not found within .admin-header.");
        }
    } 
}


// Run the function to replace the .navbar-nav content
replaceNavbarNav();

// Get the elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');




        // Logout function
        function logout() {
            firebase.auth().signOut()
                .then(() => {
                    // Clear local storage
                    localStorage.removeItem('adminEmail');

                    // Redirect to the login page
                    window.location.href = '../';
                })
                .catch(error => {
                    console.error("Error during logout:", error);
                });
        }
if(document.getElementById('logoutBtn')){
        // Attach logout function to the button
        document.getElementById('logoutBtn').addEventListener('click', logout);
}

if(loginForm){
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    // Firebase sign-in
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully signed in
            window.location.href = 'admin/dashboard'; // Redirect to admin dashboard
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessageText = error.message;
            errorMessage.textContent = errorMessageText; // Display error message
        });
});

}
// Function to set user preferences in local storage
function setUserPreferences(preferences) {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

// Toast Notification Function
function showToast(message, type = 'info', duration = 3000) {
   
    // Create a div for the toast
    const toast = document.createElement('div');
    
    // Set inline styles for the toast
    toast.style.position = 'fixed';
    toast.style.bottom = '20px'; // Position from the bottom
    toast.style.left = '50%'; // Center horizontally
    toast.style.transform = 'translateX(-50%)'; // Centering
    toast.style.padding = '15px 20px'; // Padding for the toast
    toast.style.borderRadius = '5px'; // Rounded corners
    toast.style.color = 'white'; // Text color
    toast.style.fontSize = '16px'; // Font size
    toast.style.zIndex = '9999'; // Ensure it appears above other elements
    toast.style.transition = 'opacity 0.5s ease'; // Fade transition
    
    // Set background color based on toast type
    switch (type) {
        case 'success':
            toast.style.backgroundColor = '#4CAF50'; // Green for success
            break;
        case 'error':
            toast.style.backgroundColor = '#F44336'; // Red for error
            break;
        case 'info':
            toast.style.backgroundColor = '#2196F3'; // Blue for info
            break;
        case 'warning':
            toast.style.backgroundColor = '#FF9800'; // Orange for warning
            break;
        default:
            toast.style.backgroundColor = '#2196F3'; // Default to info
    }

   

    toast.className = `toast toast-${type}`; // Add classes for styling
    toast.innerText = message; // Set the message text

    // Append the toast to the body
    document.body.appendChild(toast);

    // Set a timer to remove the toast after the specified duration
    setTimeout(() => {
        toast.classList.add('fade-out'); // Add fade-out effect
        setTimeout(() => {
            document.body.removeChild(toast); // Remove toast from DOM
        }, 500); // Time to wait for fade-out animation
    }, duration);
}

// Example usage: Replace alerts with showToast
// showToast('This is a success message!', 'success');
// showToast('This is an error message!', 'error');
// showToast('This is an info message!', 'info');
// showToast('This is a warning message!', 'warning');


