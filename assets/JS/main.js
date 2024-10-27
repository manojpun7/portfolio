// ==========================Email js============================
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //serviceId - templateId - form - publickey
  emailjs
    .sendForm(
      "service_qlahh2f",
      "template_gtnxzab",
      "#contact-form",
      "sw9fmppb4JwPyV6ph"
    )
    .then(
      () => {
        //show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        //remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //clear input fields
        contactForm.reset();
      },
      () => {
        //show error message
        contactMessage.textContent = " Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

//===================Show Scroll Up ====================
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// =========================Scroll sections active link=============
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__list a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);


//======================scroll reveal animation=================
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:300,
  //reset: true, //Animations repeat
})
sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`,{origin:'left',delay:900})
sr.reveal(`.skills`,{origin:'left',delay:900})
sr.reveal(`.about`,{origin:'right',delay:900})
sr.reveal(`.projects__card, .services__card, .experience__card`,{interval:100})