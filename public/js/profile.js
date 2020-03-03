
const getHistory = (day) => {
    document.querySelector('.number.selected').classList.toggle('selected');
    day.classList.toggle('selected');
    resum.innerHTML = '';
    let load = document.createElement("li");
    load.classList.add('list-group-item')
    load.textContent = 'loading';
    resum.append(load);
    fetch(`/historicals/get/?user=userId&date=${day.textContent}-2-2020`).then(res => res.json()).then((list) => {
        resum.innerHTML = '';
        list.forEach(element => {
            let display = document.createElement("li");
            display.classList.add('list-group-item')
            display.textContent = element.name;
            resum.append(display)
        });
    })

}
const resum = document.getElementById('infoHistory');
