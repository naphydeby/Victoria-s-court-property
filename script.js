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
//   const messageContainer = document.getElementById("form-message");

//   if (!form || !messageContainer) return; // Prevent errors if elements don't exist

//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     const formData = new FormData(form);

//     try {
//       const response = await fetch("https://formspree.io/f/xovjgvdg", {
//         method: "POST",
//         headers: { 'Accept': 'application/json' },
//         body: formData
//       });

//       if (response.ok) {
//         messageContainer.innerText = "✅ Your message has been sent successfully!";
//         messageContainer.classList.remove("hidden", "text-red-500");
//         messageContainer.classList.add("text-green-500");
//         form.reset();
//       } else {
//         messageContainer.innerText = "❌ Error sending message. Please verify your email with FormSubmit.";
//         messageContainer.classList.remove("hidden", "text-green-500");
//         messageContainer.classList.add("text-red-500");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       messageContainer.innerText = "⚠️ Failed to send message. Please try again later.";
//       messageContainer.classList.remove("hidden", "text-green-500");
//       messageContainer.classList.add("text-red-500");
//     }
//   });
// });

document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formMessage = document.getElementById('form-message');

  try {
      const response = await fetch("https://formspree.io/f/xanewlvw", {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
      });

      if (response.ok) {
          formMessage.textContent = 'Thank you! Your message has been sent.';
          formMessage.classList.remove('hidden');
          formMessage.classList.add('text-green-500');
          form.reset();
      } else {
          formMessage.textContent = 'Oops! Something went wrong. Please try again.';
          formMessage.classList.remove('hidden');
          formMessage.classList.add('text-red-500');
      }
  } catch (error) {
      formMessage.textContent = 'Network error. Please check your connection and try again.';
      formMessage.classList.remove('hidden');
      formMessage.classList.add('text-red-500');
  }
});