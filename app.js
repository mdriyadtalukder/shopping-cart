function as(a, b, p, t) {
    if (b == true) {
        document.getElementById(a).value = parseFloat(document.getElementById(a).value) + 1;
        document.getElementById(t).innerText = parseFloat(document.getElementById(a).value) * p;
    }
    else {
        document.getElementById(a).value = parseFloat(document.getElementById(a).value) - 1;
        document.getElementById(t).innerText = parseFloat(document.getElementById(a).value) * p;
    }

    document.getElementById('sub').innerText = (parseFloat(document.getElementById('inp').value) * 1234) + (parseFloat(document.getElementById('inp2').value) * 59);

    document.getElementById('tx').innerText = (parseFloat(document.getElementById('sub').innerText) / 10);


    document.getElementById('tot').innerText = parseFloat(document.getElementById('tx').innerText) + parseFloat(document.getElementById('sub').innerText)


}

document.getElementById('plus').addEventListener('click', function () {
    as('inp', true, 1234, 'tk');
});
document.getElementById('minus').addEventListener('click', function () {
    as('inp', false, 1234, 'tk');
})

document.getElementById('plus2').addEventListener('click', function () {
    as('inp2', true, 59, 'tk2');
});
document.getElementById('minus2').addEventListener('click', function () {
    as('inp2', false, 59, 'tk2');
})