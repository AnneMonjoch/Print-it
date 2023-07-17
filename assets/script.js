const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

let imageIndex = 0; //fixer l'image à 0 au début
let picture = document.querySelector('.banner-img');
let banner = document.getElementById("banner");
let paragraph = banner.querySelector("p");
let delay = 700;
//delais de transition entre les images

function carrousel() {
	const parent = document.querySelector('.dots');
	parent.innerHTML = '';
	//vider le HTML

	//création de ma boucle i set à 0 tant qu'elle est plus petite que slide + 1 à chaque fois

	for (let i = 0; i < slides.length; i += 1) {
		const icone = document.createElement('div');
		icone.classList.add('dot');
		//ajout de la class dot trouvé dans le css et création de la div. 
		parent.appendChild(icone);

		if (i === imageIndex) {
			icone.classList.add('dot_selected')
		}

		icone.addEventListener('click', function () {
			
			if (i !== imageIndex || i !== imageAnime) {
				imageIndex = i;
				imageAnime = i;
				picture.src = slides[imageIndex].image;
				paragraph.innerHTML = slides[imageAnime].tagLine;
				carrousel();
			}
		});

	};
};
function dots() {
	const parent = document.querySelector('.dots');
	const dots = parent.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
		if (i === imageIndex) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

carrousel();

arrow_left.addEventListener('click', function () {
	console.log('ok');
	imageIndex--;
	if (imageIndex <= -1) {
		imageIndex = slides.length - 1;
	}
	paragraph.innerHTML = slides[imageIndex].tagLine;

	picture.src = slides[imageIndex].image;
	dots();
	carrousel();
});
arrow_right.addEventListener('click', function () {
	console.log("ok");
	imageIndex++;
	if (imageIndex >= slides.length) {
		imageIndex = 0;
	}
	paragraph.innerHTML = slides[imageIndex].tagLine;

	picture.src = slides[imageIndex].image;
	dots();
	carrousel();
});


