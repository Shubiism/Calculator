let str = '';
let buttons = document.querySelectorAll('.btns');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if (e.target.innerHTML == 'C') {
            str = "";
            document.querySelector('input').value = str;
        }
        else {
            str = str + e.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
})

let bt = document.getElementById('btn');
let inpt = document.getElementById('inpt');
let con = document.getElementById('co');
let hd = document.getElementById('head');
bt.addEventListener('click', function () {
    document.body.classList.toggle('darkmode');
    document.body.style.transitionDuration = '1s';
    bt.classList.toggle('light-dark');
    if (document.body.classList.toggle('dark-mode')) {
        // buttons.classList.remove('btns')
        // buttons.classList.add('btns-black');
        Array.from(buttons).forEach((btn) => {
            btn.classList.remove('btns')
            btn.classList.add('btns-black');
        })
        // inpt.classList.remove('lg');
        document.querySelector('input').classList.remove('lg');
        document.querySelector('input').classList.add('inpt-black');
        con.classList.remove('cont');
        con.classList.add('cont-black');
        hd.classList.remove('hd');
        hd.classList.add('hd-black');
    }
    else {
        Array.from(buttons).forEach((btn) => {
            btn.classList.remove('btns-black');
            btn.classList.add('btns')
        })
        // inpt.classList.remove('lg');
        document.querySelector('input').classList.remove('inpt-black');
        document.querySelector('input').classList.add('lg');
        con.classList.remove('cont-black');
        con.classList.add('cont');
        hd.classList.remove('hd-black');
        hd.classList.add('hd');
    }
}
)