window.addEventListener('beforeunload', function(event) {
    // Close any new tabs that were opened
    window.open('', '_self').close();
});
