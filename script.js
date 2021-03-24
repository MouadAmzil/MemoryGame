document.querySelector('.start-game span').onclick = function () {
    let yourName = prompt("For get start the game please given you name".toUpperCase());
    if (yourName === "" || yourName === null) {
        yourName = "Unkownu";
    }
    document.querySelector('.Name span').textContent = yourName;
    document.querySelector('.start-game').remove();
}
let duration = 1000;
let MemoryGameBlock = document.querySelector('.memory-game-block');
let arrayMemory = Array.from(MemoryGameBlock.children);
let table = remplie(arrayMemory.length);
////////////////////////////////////////////////////////////////
arrayMemory.forEach((order, orderRange) => {
    order.style.order = table[orderRange];
    order.addEventListener('click', function () {
        fillep(order);
    })

});
///////////////////////////is-true////////////////////////
function checkReponse(c1, c2) {
    let check1 = c1.getAttribute('data-team');
    let check2 = c2.getAttribute('data-team');
    if (check1 === check2) {
        c1.classList.remove('is-flipped');
        c2.classList.remove('is-flipped');
        c1.classList.add('is-true');
        c2.classList.add('is-true');
    } else {
        document.querySelector('.Tries span').textContent=(parseInt(document.querySelector('.Tries span').textContent)+1).toString();
        setTimeout(() => {
            c1.classList.remove('is-flipped');
            c2.classList.remove('is-flipped');
        }, duration);
    }
}

function fillep(seclector) {

    seclector.classList.add('is-flipped');
    //arrayMemory
    let numberflipped = arrayMemory.filter(flipp => flipp.classList.contains('is-flipped'));
    if (numberflipped.length === 2) {
        stopClick();
        checkReponse(numberflipped[0], numberflipped[1])

    }
}
function stopClick() {
    MemoryGameBlock.classList.add('stop-clicking');
    setTimeout(() => {
        MemoryGameBlock.classList.remove('stop-clicking');

    }, duration);

}
function remplie(max) {
    let i = 0, nb;
    let v = [];
    while (!(i === max)) {
        // alert(i);
        nb = random();
        if (v.indexOf(nb) === -1) {
            v[i] = nb;
            i++;
        }
    }
    function random() {
        return Math.floor((max * Math.random()) + 1);
    }
    return v;
}



//file:///C:/Users/MYC/Desktop/HTML%20&%20CSS%20&%20JS/JS%20Big%20Tutorial/Js-2%20Game/index.html


