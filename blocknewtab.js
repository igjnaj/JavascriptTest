// Override window.open function
window.open = function(url, target, features) {
    // Block new tabs
    return null;
};
