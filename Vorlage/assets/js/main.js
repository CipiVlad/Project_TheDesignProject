

function hitsubscribe() {
    let confirm = document.getElementById('confirmation');
    confirm.innerHTML = 'YOUR EMAIL HAS BEEN CONFIRMED 🥳';

    let thx = document.getElementById('thx');
    thx.innerHTML = 'THANKS FOR SUBSCRIBING';
    thx.style.fontSize = '1rem';

    let plsclick = document.getElementById('pleaseclick');
    plsclick.innerHTML = 'Now we just need to confirm your email address - please click the link in the email we sent you.Thanks!';

    let email = document.getElementById('email');
    email.style.visibility = 'hidden';

    let button = document.getElementById('email').value;
    document.getElementById("button").style.visibility = 'hidden';

    let buttonBack = document.getElementById('backToheader');
    document.getElementById('backToheader').style.visibility = 'visible';

}

function hitBack() {
    let buttonBack = document.getElementById('backToheader');
    document.getElementById('header').scrollIntoView();
    document.getElementById('backToheader').style.visibility = 'visible';
    console.log(button);
}