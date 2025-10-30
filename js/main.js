function loadPartial(url, elemntId, callback){
    fetch(url)
        .then(response => response.text())
        .then(data =>{
            document.getElementById(elemntId).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => {
            console.error('Error al cargar el archivo: ', error);
        })
}

document.addEventListener('DOMContentLoaded', function(){
    loadPartial('partials/header.html', 'header');
    loadPartial('partials/navbar.html','navbar');
        // SOLO una vez y con callback
    loadPartial('partials/sectionProfile.html','section1', function(){
        particlesJS.load('particles-js', './particles/particlesjs-config.json', function() {
            console.log('✨ Partículas cargadas correctamente');
        });
    });
    loadPartial('/partials/sectionProfile.html','section1');
    loadPartial('/partials/sectionSkills.html','section2');
    loadPartial('/partials/sectionProjects.html','section3');

})