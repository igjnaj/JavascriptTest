const allowedDomains = ['facebook.com', 'instagram.com', 'discord.com', 'twitter.com', 'youtube.com', 'animevietsub.us'];

window.addEventListener('DOMContentLoaded', (event) => {
    const currentTabUrl = window.location.hostname;
    if (allowedDomains.includes(currentTabUrl)) {
        console.log('Passed');
    } else {
        window.close();
    }
});
