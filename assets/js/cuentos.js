const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('mostrar');
        }
        else{
            entry.target.classList.remove('mostrar');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".Cuento1, .Cuento2").forEach((seccion) =>{
    observer.observe(seccion);
});