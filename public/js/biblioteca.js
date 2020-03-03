
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

    let route = `/${tabN}/get/?focus:''`;
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
                    <p> ${ele.description}</p>
                    <a href='${ele.link}'> Video</a>
                    <p> Hiciste este ejercicio hoy?</p>
                    <svg viewBox="0 0 80 80" class="ap-4"  style=" fill:#F5DE93">
                         <use xlink:href="/icons/add.svg#add"></use>
                     </svg>
                </div>
            </div>`;
            else if (tabN == 'routines') {
                resultado += `<div class="col-xl-4 col-md-6 col-12">
                    <div class="card items-lista">
                        <h3 >${ele.name}</h3>
                        <h5>${ele.focus}  </h5>
                    <p> Hiciste esta rutina hoy?</p>
                        <svg viewBox="0 0 80 80" class="ap-4"  style=" fill:#F5DE93">
                         <use xlink:href="/icons/add.svg#add"></use>
                     </svg>
                    </div>
                </div>`;
            }
            else {
                resultado += `<div class="col-xl-4 col-md-6 col-12">
                    <div class="card items-lista">
                        <h3 >${ele.name}</h3>
                        <h5>${ele.focus} nivel: ${ele.difficulty}</h5>
                        <h5> ${ele.routines.size} rutinas </h5>
                    <p> Hiciste este entrenamiento hoy?</p>
                        <svg viewBox="0 0 80 80" class="ap-4"  style=" fill:#F5DE93">
                         <use xlink:href="/icons/add.svg#add"></use>
                     </svg>
                    </div>
                </div>`;
            }
        })
        list.innerHTML = resultado;

    })
}
changeTab(document.querySelector('#bibliotecaTabs .nav-link'));


