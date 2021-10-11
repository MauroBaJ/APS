document.addEventListener('DOMContentLoaded', function () {
    year = document.querySelector('#year');
    y = new Date();
    year.innerHTML = y.getFullYear();
    InsertMap();
    

})


function InsertMap() {
    try{
        let mapa = document.querySelector('#map');
        let desktop = 968;
        let tablet = 768;
        let phone = 498;
        let size = window.screen.width
    
        let smMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.7369384769372!2d-103.35628685297851!3d20.650291268858325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b2095119759f%3A0x11cd64cd9f709dc9!2sArtefactos%20Pernos%20y%20Seguros%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1629905604210!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        let mdMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.7369384769372!2d-103.35628685297851!3d20.650291268858325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b2095119759f%3A0x11cd64cd9f709dc9!2sArtefactos%20Pernos%20y%20Seguros%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1629905604210!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        let lgMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.7369384769372!2d-103.35628685297851!3d20.650291268858325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b2095119759f%3A0x11cd64cd9f709dc9!2sArtefactos%20Pernos%20y%20Seguros%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1629905604210!5m2!1ses-419!2smx" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    
    
        if (size < phone) {
            mapa.innerHTML = smMap;
        }
        if(size > phone && size < tablet){
            mapa.innerHTML = mdMap;
        }
        if(size >= tablet){
            mapa.innerHTML = lgMap;
        }
    }
    catch(error){
        console.log(error);
    }
}


