function searchGoogle() {
    const query = document.querySelector(".search-box").value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".search-box").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            searchGoogle();
        }
    });
    
    document.querySelector(".btn:first-child").addEventListener("click", searchGoogle);
    
    document.querySelector(".btn:last-child").addEventListener("click", function() {
        window.location.href = "https://www.google.com/doodles";
    });
});