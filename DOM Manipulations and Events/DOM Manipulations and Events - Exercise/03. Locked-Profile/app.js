function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach((buttons) => buttons.addEventListener('click',
        (event) => {
            const profile = event.target.parentElement;
            const isActive = profile.querySelector('input[value="unlock"]').checked;
            if (isActive) {
                const infoField = Array.from(profile.querySelectorAll('div')).find(element => element.id.includes('HiddenFields'));
                (event.target.textContent === "Show more") ?
                (event.target.textContent = "Hide it", infoField.style.display = "block") 
                :(event.target.textContent = "Show more", infoField.style.display = "none");
            };
        }));
}