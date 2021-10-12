window.onload = () => {
    let button = document.querySelector('#search-button');
    let input = document.querySelector('#input');

    button.onclick = function() {
        let value = input.value.toUpperCase();
        let select = document.querySelector('#select')
        let list = [...document.getElementsByClassName(select.value)];
        let listTable = [...document.getElementsByClassName('cell')];
        let count = 0;

        listTable.forEach(elem => {
            elem.classList.remove('found');
        });

        if (value) {
            list.forEach(elem => {
                if (elem.innerText.toUpperCase().indexOf(value) > -1) {
                    elem.classList.add ('found');
                    count++;
                }
            });
        } 

        let counter = document.getElementById('count');
        if (count == 0) {
            counter.innerText = 'Ничего не найдено';
        } else {
            counter.innerText = `Количество совпадений: ${count}`;
        }
    };
};