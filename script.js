console.log("Read if cute")

document.getElementById("toggle-dark-white").addEventListener("click", function() {
    const html = document.getElementById("host-dark-white");
    const button = document.getElementById("toggle-dark-white");
    const htmlClass = html.className;

    if (htmlClass.includes("dark-mode")) {
        html.className = htmlClass.replace("dark-mode", "white-mode")
        button.textContent = "󰖙"
    } else {
        html.className = htmlClass.replace("white-mode", "dark-mode")
        button.textContent = ""
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('left').innerHTML = '<img src="clubmate.png" alt="Club Mate">'
});