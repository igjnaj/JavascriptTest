var element = document.querySelector('footer p.Copy a');

// Check if the element exists before making changes
if (element) {
    // Change the HTML content of the element
    element.innerHTML = "<bold>Modified by klemplus<bold/> 🔥<br>©️ Copyright 2024 Animevietsub. All rights reserved.";
}
// Change the tab name
document.title = "Animevietsub ❤️";
// Change the favicon to a custom icon using a URL
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'icon';
link.href = 'https://raw.githubusercontent.com/igjnaj/JavascriptTest/main/B6F35539-8CC4-419D-B676-970B78B357D9.png';
document.getElementsByTagName('head')[0].appendChild(link);
