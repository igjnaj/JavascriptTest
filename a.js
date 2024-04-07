var element = document.querySelector('footer p.Copy a');

// Check if the element exists before making changes
if (element) {
    // Change the HTML content of the element
    element.innerHTML = "<bold>Modified by klemplus<bold/> 🔥<br>©️ Copyright 2024 Animevietsub. All rights reserved.";
}
// Change the tab name
document.title = "Animevietsub ❤️";
// Change the favicon to a custom icon using a URL
document.querySelector("link[rel='icon']").href = "https://raw.githubusercontent.com/igjnaj/JavascriptTest/main/B6F35539-8CC4-419D-B676-970B78B357D9.png";
