const jobs = document.querySelectorAll(".job");
jobs.forEach(job => {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Show Details";
  job.appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    const details = job.querySelectorAll("p");
    details.forEach(detail => {
      if (detail.style.display === "none") {
        detail.style.display = "block";
        toggleButton.textContent = "Hide Details";
      } else {
        detail.style.display = "none";
        toggleButton.textContent = "Show Details";
      }
    });
  });
});
