console.log("I use Arch btw~")

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