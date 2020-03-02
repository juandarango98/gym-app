

const changeTab=(tab)=>{
    document.querySelector('#bibliotecaTabs .nav-link .active').classList.toggle('active');
        tab.classList.toggle('active');
        let route=`/${tab.value}/list`;
        fetch(route).then(list=>{
            
        })
}