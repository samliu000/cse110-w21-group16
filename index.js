let didShowMessage = false;

function showMessage() {
    const message = 'I like logs';

    for (let i = 0; i < 5; i++) {
        console.log(message);
    }
}

showMessage();