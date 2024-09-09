var jobs = document.querySelectorAll(".job");
jobs.forEach(function (job) {
    var toggleButton = document.createElement("button");
    toggleButton.textContent = "Show Details";
    job.appendChild(toggleButton);
    toggleButton.addEventListener("click", function () {
        var details = job.querySelectorAll("p");
        details.forEach(function (detail) {
            if (detail.style.display === "none") {
                detail.style.display = "block";
                toggleButton.textContent = "Hide Details";
            }
            else {
                detail.style.display = "none";
                toggleButton.textContent = "Show Details";
            }
        });
    });
});
