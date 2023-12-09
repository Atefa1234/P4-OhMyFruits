

const imageContainer1 = document.getElementById('imageContainer1');
let puntuation = 0


// ARRAY Lista de imágenes o url

const watermelon = './public/img/WatermelonHappyBig.png';
const orange = './public/img/OrangeangryBig.png';
const cherry = './public/img/CherryHappy.png';

const imageUrls = [watermelon, orange, cherry];

// Función aleatorio, para obtener imagen del array aleatorio
function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

// Función para crear y mostrar imágenes aleatorias
function showRandomImages() {
    imageContainer1.innerHTML = ''; // Limpiar imágenes anteriores
    const numImages = 300;  // Ajusta el número de imágenes mostradas, puede cambiar con la dificultad

    const existingImages = imageContainer1.querySelectorAll('.image-fruit');  // Clonar las imágenes existentes para hacer la secuencia infinita
    existingImages.forEach((existingImage) => {
        const clone = existingImage.cloneNode(true);
        imageContainer1.appendChild(clone);
    });

    // Agregar nuevas imágenes
    for (let i = 0; i < numImages; i++) {
        const imageUrl = getRandomImageUrl();
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.classList.add('image-fruit');

        if (imageUrl === watermelon) {
            imageElement.classList.add('watermelon');

        } else if (imageUrl === cherry) {
            imageElement.classList.add('cherry');
        } else {
            imageElement.classList.add('orange');
        };

        imageContainer1.appendChild(imageElement);
        imageElement.style.animation = "move 30s linear infinite";

        
    }
}




// Mostrar imágenes aleatorias inicialmente y luego actualizar cada x segundos
showRandomImages();
setInterval(() => {
    showRandomImages();
}, 30000);


/////// !! constante y funcion de derrivar fruta  y puntuacion Hay que hacer condicional      ///////       /////// 
const shootSuceess = document.querySelectorAll(".image-fruit");



/////// !! FUNCION y funcion de derrivar fruta  y puntuacion Hay que hacer condicional 
// esto se puede modular pero no se como XD
//aqui al no eliminar el elemento, sigue podiendose hacer click sobre él y no vale, hay que cambialre la clase

// IMPORTANTE cuando inicia la partida poner totalScore=0
let totalScore = 0;

shootSuceess.forEach(function (shootDown) {
    shootDown.addEventListener("click", function (shootClick) {
        const clickX = shootClick.clientX;
        const clickY = shootClick.clientY;
        this.style.opacity = "0";

        if (shootDown.classList.contains("watermelon")) {
            totalScore += 1
            console.log(`Es una sandía (watermelon)! ${totalScore}`);

        } else if (shootDown.classList.contains("cherry")) {
            totalScore += 5
            console.log(`Es una sandía (cherry)! ${totalScore}`);

        } else if (shootDown.classList.contains("orange")) {
            totalScore += 3
            console.log(`Es una sandía (orange)! ${totalScore}`);

        }

        const starImage = document.createElement("img");
        // Asigna nueva imagen
        starImage.src = "./public/img/star.png"; // ruta de star


        // Establece algunos estilos para la nueva imagen
        starImage.style.position = "absolute";
        starImage.style.left = clickX + "px";
        starImage.style.top = clickY + "px";
        starImage.style.opacity = "0";
        starImage.style.width = "150px";
        starImage.style.animation = "starSlideUp 1s ease-in-out"; // Ajusta la duración y la función de temporización según sea necesario

        // Agrega la nueva imagen al documento
        document.body.appendChild(starImage);

        //elimina la Imagen
        setTimeout(function () {
            addEventListener
            document.body.removeChild(starImage);
        }, 1100);

    });
});



//========================exito y fallo
/// aqui implementar mejor lo de la estrella del apartado anterior

const displayGame = document.getElementById('displayGame');
const fruta = document.querySelectorAll(".image-fruit");
// const equis = document.getElementById('equis');

displayGame.addEventListener('click', function (event) {
    const clickedElement = event.target;

    // Verificar si el clic fue en una imagen dentro del contenedor
    if (clickedElement.classList.contains("image-fruit")) {
         console.log("exito");
    } else {
        totalScore -= 1
        console.log(`Fallo -1! ${totalScore}`);
    }
    console.log(puntuation);
    if (puntuation <= 0){
        puntuation = 0
    }
});



//========================MAKE TARGET END