window.onload = () => {
    const cell1 = document.querySelector('#cell1');
    const cell2 = document.querySelector('#cell2');
    const cell3 = document.querySelector('#cell3');

    const endDate = getEndDate();

    const updateDisplay = () => {
        const now = new Date();
        const diff = endDate.getTime() - now.getTime();

        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)));

        cell1.textContent = hours < 10 ? '0' + hours : hours;
        cell2.textContent = minutes < 10 ? '0' + minutes : minutes;
        cell3.textContent = seconds < 10 ? '0' + seconds : seconds;
    }


    setInterval(() => {
        updateDisplay();
    }, 1000);

    updateDisplay();
}

const getEndDate = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
}

