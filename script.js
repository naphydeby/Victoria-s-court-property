// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('contact-form');
  
//     form.addEventListener('submit', (event) => {
//       event.preventDefault();
//       const name = document.getElementById('name').value;
//       const email = document.getElementById('email').value;
//       const message = document.getElementById('message').value;
  
//       const submittedData = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  
//       // Send form data to client's email using mailto link
//       window.location.href = `mailto:naphydeby@gmail.com?subject=New%20Contact%20Form%20Submission&body=${submittedData}`;
  
//       alert('Form submitted successfully! Your details have been sent to the client.');
//       form.reset();
//     });
//   });
  


// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contact-form");
//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     const formData = new FormData(form);

//     try {
//       const response = await fetch("https://formsubmit.co/ajax/naphydeby@gmail.com", {
//         method: "POST",
//         headers: {
//           'Accept': 'application/json'
//         },
//         body: formData
//       });

//       if (response.ok) {
//         alert("Your message has been sent successfully!");
//         form.reset();
//       } else {
//         alert("There was an error sending your message. Please ensure your email is verified with FormSubmit.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to send message.");
//     }
//   });
// });