// selection part 
let text = '&times;';
let winArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [2, 5, 8],
    [4, 5, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

let winner;
let box = document.querySelectorAll('div[data-cell-index]');
let boxArray = [...box];
let btn = document.getElementById('btn');
let whoIsWinner = btn.previousElementSibling.firstElementChild;
boxArray.forEach((value) => {
    value.addEventListener('click', function _tictac(e){
        if(!e.target.innerHTML) {
            e.target.innerHTML = text;

            if (text == 'o') {
                text = '&times;'
            } else {
                text = 'o';
            }
        }
        winner = winORnot(boxArray);
        if(winner) {
            btn.parentElement.style.display = 'block';
            setTimeout(() => {
                btn.style.display = 'block';
            }, 2000)
        }
    }, true);
});

btn.addEventListener('click', (e) => {
    boxArray.forEach((v) => {
        v.innerHTML = '';
    })
    btn.parentElement.style.display = 'none';
    btn.style.display = 'none';
})

function winORnot(arr) {
    for (let i = 0; i < winArray.length; i++) {
        let keepValue = [];
        winArray[i].forEach((v) => {
            keepValue.push(arr[v - 1].innerHTML);
        });
        if (((keepValue[0] == keepValue[1]) && (keepValue[1] == keepValue[2])) && keepValue[0] != '' && keepValue[1] != '' && keepValue[2] != '') {
            result(keepValue[0]);
            return true;
        }
        keepValue.splice(0, keepValue.length)
    }
}

function result (value) {
    whoIsWinner.innerHTML = value;
}