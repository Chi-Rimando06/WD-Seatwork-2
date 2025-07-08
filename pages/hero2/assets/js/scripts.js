const launchBtn = document.querySelector(".launch-btn");
const rocket = document.querySelector(".rocket");

launchBtn.addEventListener("click", () => {
    launchBtn.style.visibility = "hidden";
    launchBtn.style.opacity = "0";

    rocket.style.display = "block";
    rocket.classList.add("fly");

    setTimeout(() => {
        rocket.classList.remove("fly");
        rocket.style.display = "none";

        launchBtn.style.visibility = "visible";
        launchBtn.style.opacity = "1";
    }, 2000);
});