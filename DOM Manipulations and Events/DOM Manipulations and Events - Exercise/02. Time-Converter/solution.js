function attachEventsListeners() {
    let timeObj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    Array.from(document.querySelectorAll('input[type="button"]')).forEach((x) =>
        x.addEventListener('click', (event) => {
            const input = event.target.parentElement.querySelector('input[type="text"]');
            const timeConvert = convert(input.value, input.id);

            for (let key in timeConvert) document.getElementById(key).value = timeConvert[key];
        }));

    function convert(value, id) {
        const day = value / timeObj[id]
        return {
            days: day,
            hours: day * timeObj.hours,
            minutes: day * timeObj.minutes,
            seconds: day * timeObj.seconds,
        };
    };
}