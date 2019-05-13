window.onload = () => {
    const cell1 = document.querySelector('#cell1');
    const cell2 = document.querySelector('#cell2');
    const cell3 = document.querySelector('#cell3');

    const endDate = new Date(2019, 4, 13, 16);

    const updateDisplay = () => {
        const now = new Date();
        const diff = endDate.getTime() - now.getTime();

        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)));

        cell1.textContent = hours;
        cell2.textContent = minutes;
        cell3.textContent = seconds;
    }


    setInterval(() => {
        updateDisplay();
    }, 1000);

    updateDisplay();
}

