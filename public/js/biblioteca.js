"use strict";
const changeTab = (tab) => {
    const grupoMuscular = ['Pierna', 'Abdomen', 'Pecho', 'Espalda', 'Hombro', 'Brazo', 'Ver Todo'];
    const enfoques = ['Masa Muscular', 'Perdida de Peso', 'Resistencia', 'Ver Todo'];
    document.querySelector('#bibliotecaTabs .nav-link.active').classList.toggle('active');
    tab.classList.toggle('active');
    let list = document.querySelector('.biblioteca-list');
    let lista = []
    if (tab.name == 'exercises') {
        lista = grupoMuscular
    } else {
        lista = enfoques
    }
    list.innerHTML = '';
    let resultado = '';
    lista.forEach(ele => {
        resultado += `
            <div class="col-xl-4 col-md-6 col-12">
                <div class="card items-lista" style='height:150px' onclick="buscarEjercicios('${ele}')">
                    <h3 class=" centrado-v" >${ele}</h3>
                </div>
            </div>`;
    })
    list.innerHTML = resultado;


}
const buscarEjercicios = (categoria) => {
    let tabN = document.querySelector('#bibliotecaTabs .nav-link.active').name;

    let route = `/${tabN}/get/?focus:'${categoria}'`;
    let list = document.querySelector('.biblioteca-list');

    fetch(route).then(res => res.json()).then((lista) => {
        let resultado = '';
        list.innerHTML = '';
        lista.forEach(ele => {
            console.log(ele)
            if (tabN == 'exercises')
                resultado += `
            <div class="col-xl-4 col-md-6 col-12">
                <div class="card items-lista">
                    <h3 >${ele.name}</h3>
                    <h5>${ele.muscle} nivel: ${ele.difficulty} </h5>
                    <a href='${ele.link}'> Video</a>
                    <p> ${ele.description}</p>
                    <svg viewBox="0 0 80 80" class="ap-4"  style=" fill:#F5DE93"  onclick="guardarHistorico('${ele.name}', 'ejercicio')">
                    <use xlink:href="/icons/add.svg#add"></use>
                    </svg>
                    <p> Hiciste este ejercicio hoy?</p>
                </div>
            </div>`;
            else if (tabN == 'routines') {
                resultado += `<div class="col-xl-4 col-md-6 col-12">
                    <div class="card items-lista">
                        <h3 >${ele.name}</h3>
                        <h5>${ele.focus}  </h5>
                        <svg viewBox="0 0 80 80" class="ap-4"  style=" fill:#F5DE93" onclick="guardarHistorico('${ele.name}','rutina')">
                        <use xlink:href="/icons/add.svg#add"></use>
                        </svg>
                        <p> Hiciste esta rutina hoy?</p>
                    </div>
                </div>`;
            }
            else {
                resultado += `<div class="col-xl-4 col-md-6 col-12">
                    <div class="card items-lista">
                        <h3 >${ele.name}</h3>
                        <h5>${ele.focus} nivel: ${ele.difficulty}</h5>
                        <h5> ${ele.routines.size} rutinas </h5>
                        <svg viewBox="0 0 80 80" class="ap-4"  style=" fill:#F5DE93" onclick="guardarHistorico('${ele.name}', 'entrenamiento')">
                        <use xlink:href="/icons/add.svg#add"></use>
                        <p> Hiciste este entrenamiento hoy?</p>
                        </svg>
                    </div>
                </div>`;
            }
        })
        list.innerHTML = resultado;

    })
}
const guardarHistorico = (item, event) => {
    let hoy = new Date();
    console.log(event);
    fetch('/historicals/add', {
        method: 'POST',
        body: JSON.stringify({
            date: `${hoy.getDate()}/${hoy.getMonth() + 1}/2020`,
            event: event,
            data: item,
            user: '5e5d9f054b929500175edae0'
        }),
        headers: { "Content-Type": "application/json" }
    })
}
changeTab(document.querySelector('#bibliotecaTabs .nav-link'));


