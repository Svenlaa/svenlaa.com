const app = () => {
    const date = new Date();

    const currentTimeInMinutes = date.getHours() * 60 + date.getMinutes();
    const aoUnadjusted = currentTimeInMinutes - 60 * 7;
    const aoTime = aoUnadjusted < 0 ? aoUnadjusted + 24 * 60 : aoUnadjusted;

    const aoStringTime = aoTime > 999 ? 'O' + (aoTime - 1000) : 'A' + aoTime;

    const timeFormatter = new Intl.DateTimeFormat('nl-NL', {
        timeStyle: 'short',
    });
    document.querySelector('#time-local').innerHTML = timeFormatter.format(date);
    document.querySelector('#time-local-ao').innerHTML = aoStringTime;

    const waketime = document.querySelector('input[name="waketime"]').value;

    const split = waketime.split(':');
    const waketimeInMinutes = +split[0] * 60 + +split[1]; // local timezone
    if (!waketimeInMinutes) return;
    const minutesInADay = 24 * 60;

    const nonOffsetMinutesAwake = currentTimeInMinutes - waketimeInMinutes;
    const minutesAwake = nonOffsetMinutesAwake < 0 ? nonOffsetMinutesAwake + minutesInADay : nonOffsetMinutesAwake;

    document.querySelector('#awake-minutes').innerHTML = minutesAwake;
};

document.addEventListener('DOMContentLoaded', (e) => {
    app();

    const second = 1000;
    setInterval(() => {
        app();
    }, second);
});
