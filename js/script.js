function toggleLoginForm() {
    var form = document.getElementById("loginForm");
    
    // Check the current display status and toggle it
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
document.addEventListener("DOMContentLoaded", () => {
  const plantItems = document.querySelectorAll(".dh-plant-item");
  const lightbox = document.createElement("div");

  //struktura e lightbox-it
  lightbox.id = "lightbox";
  lightbox.style.position = "fixed";
  lightbox.style.top = "0";
  lightbox.style.left = "0";
  lightbox.style.width = "100%";
  lightbox.style.height = "100%";
  lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  lightbox.style.display = "none";
  lightbox.style.justifyContent = "center";
  lightbox.style.alignItems = "center";
  lightbox.style.zIndex = "1000";
  lightbox.style.flexDirection = "column";
  document.body.appendChild(lightbox);

  // Close the lightbox when clicking outside the content
  lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
  });

  // Handle each plant item click
  plantItems.forEach((item) => {
      const image = item.querySelector("img");
      const title = item.querySelector(".dh-plant-title").innerText;
      const description = item.querySelector(".dh-plant-description").innerText;

      image.addEventListener("click", (event) => {
          // Prevent lightbox close when clicking on the content
          event.stopPropagation();

          // Populate the lightbox with image and description
          lightbox.innerHTML = `
              <img src="${image.src}" alt="${title}" style="max-width: 80%; max-height: 60%; margin-bottom: 20px;">
              <h2 style="color: white; margin: 10px 0;">${title}</h2>
              <p style="color: white; text-align: center; max-width: 80%;">${description}</p>
          `;

          // Show the lightbox
          lightbox.style.display = "flex";
      });
  });
});
