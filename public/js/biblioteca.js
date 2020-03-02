
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
                <div class="card items-lista" onclick="buscarEjercicios('${ele}')">
                    <h3 class=" centrado-v">${ele}</h3>
                </div>
            </div>`;
    })
    list.innerHTML = resultado;


}
const buscarEjercicios = (categoria) => {
    let tabN = document.querySelector('#bibliotecaTabs .nav-link.active').name;

    let route = `/${tabN}/get/?muscle:''`;
    let list = document.querySelector('.biblioteca-list');

    fetch(route).then(res => res.json()).then((lista) => {
        let resultado = '';
        list.innerHTML = '';
        lista.forEach(ele => {
            resultado += `
            <div class="col-xl-4 col-md-6 col-12">
                <div class="card items-lista">
                    <h3 class=" centrado-v">${ele}</h3>
                </div>
            </div>`;
        })
        list.innerHTML = resultado;

    })
}
changeTab(document.querySelector('#bibliotecaTabs .nav-link'));


