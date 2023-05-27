function attachEventsListeners() {

    let timeObj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }
    const daysInput = document.getElementById('days');
    const minutesInput = document.getElementById('minutes');
    const hoursInput = document.getElementById('hours');
    const secondsInput = document.getElementById('seconds')

    Array.from(document.querySelectorAll('input[type="button"]')).forEach((x) => x
        .addEventListener('click', (event) => {
            const input = event.target.parentElement.querySelector('input[type="text"]')
            const inputValue = Number(input.value);
            const idInput = input.id

            const timeConvert = convert(inputValue, idInput);

            daysInput.value = timeConvert.days;
            hoursInput.value = timeConvert.hours;
            minutesInput.value = timeConvert.minutes;
            secondsInput.value = timeConvert.seconds;

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
    Array.from(document.querySelectorAll('input[type="text"]')).forEach((x)=>x.value = "");
}