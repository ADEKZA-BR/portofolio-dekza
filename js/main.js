document.addEventListener("DOMContentLoaded", () => {
  const roles = ["WEB DEVELOPER", "UI DESIGNER", "JUNIOR IT SUPPORT"];
  let index = 0;
  let charIndex = 0;
  let deleting = false;

  const typing = document.getElementById("typing");
  if (!typing) return;

  function typeEffect() {
    const current = roles[index];

    if (!deleting) {
      typing.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        return setTimeout(typeEffect, 1500);
      }
    } else {
      typing.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        index = (index + 1) % roles.length;
        charIndex = 0;
      }
    }

    setTimeout(typeEffect, deleting ? 60 : 90);
  }

  typeEffect();
});
