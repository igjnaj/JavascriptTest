// List of image URLs
const imageUrls = [
  'https://raw.githubusercontent.com/igjnaj/JavascriptTest/main/1493-yuukafumo.png',
  'https://raw.githubusercontent.com/igjnaj/JavascriptTest/main/1694-yuyukofumo.png',
  'https://raw.githubusercontent.com/igjnaj/JavascriptTest/main/1896-cirnofumo%202.png',
  'https://raw.githubusercontent.com/igjnaj/JavascriptTest/main/1954-patchoulifumo.png',
  'https://raw.githubusercontent.com/igjnaj/JavascriptTest/main/2863-tenshifumo.png',
  'https://raw.githubusercontent.com/igjnaj/JavascriptTest/main/5227-tewifumo.png',
  'https://raw.githubusercontent.com/igjnaj/JavascriptTest/main/5227-yukarifumo.png',
  'https://raw.githubusercontent.com/igjnaj/JavascriptTest/main/5595-alicefumo.png',
];

// Function to pick a random image URL
function getRandomImageUrl() {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}

// Function to insert the random image at the very end of the page
function insertRandomImage() {
  const imageUrl = getRandomImageUrl();
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  document.body.appendChild(imgElement);
}

// Call the function to insert the random image when the page finishes loading
window.addEventListener('load', insertRandomImage);
