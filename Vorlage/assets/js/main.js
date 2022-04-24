

function hitsubscribe() {
    let confirm = document.getElementById('confirmation');
    confirm.innerHTML = 'YOUR EMAIL HAS BEEN CONFIRMED';

    let thx = document.getElementById('thx');
    thx.innerHTML = 'THANKS FOR SUBSCRIBING';

    let button = document.getElementById('button');
    button.innerHTML.style.fontFamily = "courier-bold";
}