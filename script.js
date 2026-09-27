
/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    if (mainNav.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll("#mainNav a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");
        menuToggle.innerHTML = "☰";

    });

});


/* =====================================================
   QUOTE FORM
   EMAIL + WHATSAPP
===================================================== */

const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

quoteForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const company =
        document.getElementById("company").value.trim();

    const contactPerson =
        document.getElementById("contactPerson").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const service =
        document.getElementById("service").value;

    const workers =
        document.getElementById("workers").value;

    const startDate =
        document.getElementById("startDate").value;

    const duration =
        document.getElementById("duration").value;

    const message =
        document.getElementById("message").value.trim();


    /* ================================================
       WHATSAPP
    ================================================ */

    const whatsappNumber = "6591234567";

    const whatsappMessage =
        "Hello, I would like to request a quote.\n\n" +

        "*Company:* " +
        company + "\n" +

        "*Contact Person:* " +
        contactPerson + "\n" +

        "*Phone:* " +
        phone + "\n" +

        "*Email:* " +
        (email || "Not provided") + "\n" +

        "*Service:* " +
        service + "\n" +

        "*Number of Workers:* " +
        (workers || "Not specified") + "\n" +

        "*Start Date:* " +
        (startDate || "Not specified") + "\n" +

        "*Contract Duration:* " +
        (duration || "Not specified") + "\n" +

        "*Additional Requirements:* " +
        (message || "None");


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    /* ================================================
       SHOW MESSAGE
    ================================================ */

    formMessage.innerHTML =
        "Sending your enquiry...";

    formMessage.style.color = "#1769aa";


    /* ================================================
       SEND EMAIL
    ================================================ */

    const formData = new FormData(quoteForm);


    fetch(quoteForm.action, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Email sending failed.");
        }

        return response.json().catch(() => ({}));

    })

    .then(() => {

        formMessage.innerHTML =
            "Thank you! Your enquiry has been sent. Opening WhatsApp...";

        formMessage.style.color = "#16a34a";


        /* Open WhatsApp after email submission */

        setTimeout(() => {

            window.open(
                whatsappURL,
                "_blank"
            );

        }, 1000);


        /* Clear form */

        quoteForm.reset();

    })

    .catch(error => {

        console.error(error);

        formMessage.innerHTML =
            "There was a problem sending your enquiry. Please contact us by WhatsApp or phone.";

        formMessage.style.color = "#dc2626";

    });

});
```
