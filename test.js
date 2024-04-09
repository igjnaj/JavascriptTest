// List of image URLs
const imageList = [
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
  return imageList[Math.floor(Math.random() * imageList.length)];
}

// Function to insert the image into the HTML body
function insertImage() {
  var imageUrl = getRandomImageUrl();
  var imageHtml = '<img src="' + imageUrl + '" alt="Err: idk check the console">';
  document.body.insertAdjacentHTML('beforeend', imageHtml);
}

// Call the insertImage function to insert the random image when needed
insertImage();
