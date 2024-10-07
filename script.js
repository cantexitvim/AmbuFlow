// Newsletter form submission handler
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const emailInput = document.getElementById('email');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Optionally send the email to your backend
    const email = emailInput.value;

    // Simulate a successful submission (you could replace this with an actual API call)
    console.log(`Email submitted: ${email}`); // For debugging

    // Display the confirmation message
    confirmationMessage.textContent = 'Thank you for subscribing! Please check your email for further instructions.';
    confirmationMessage.classList.remove('hidden');

    // Clear the form
    emailInput.value = '';
});

// Accordion functionality
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
    const header = accordion.querySelector(".accordion__header");
    const content = accordion.querySelector(".accordion__content");
    const icon = accordion.querySelector(".accordion__icon i");

    header.addEventListener("click", () => {
        const isOpen = content.style.height === `${content.scrollHeight}px`;

        accordions.forEach((a, i) => {
            const c = a.querySelector(".accordion__content");
            const ic = a.querySelector(".accordion__icon i");

            if (i === index) {
                c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
                ic.classList.toggle("ri-add-line", isOpen);
                ic.classList.toggle("ri-subtract-fill", !isOpen);
            } else {
                c.style.height = "0px";
                ic.classList.add("ri-add-line");
                ic.classList.remove("ri-subtract-fill");
            }
        });
    });
});
