(() => {
    const number = document.querySelectorAll('.number');
    // covert to array
    const array = Array.from(number);
    // select array element
    array.map((item) => {
        // data layer
        let counterInnerText = item.textContent;

        let count = 1;
        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
})()


// Carrousel des avis

const reviews = [
    {
        problematique: "Mon lave-vaisselle Bosch SMS46KI01E ne démarrait plus et affichait un code erreur E24.",
        reparation: "L'intervention a été rapide et efficace. Le technicien a remplacé la pompe de vidange et a effectué un nettoyage complet des conduits.",
        resultat: "Je suis très satisfaite ! Mon lave-vaisselle fonctionne parfaitement maintenant. La réparation a pris seulement 1 heure et le coût était très raisonnable, 150€.",
        nom: "Natalie F. - 24/6/2024"
    },
    {
        problematique: "Mon réfrigérateur Samsung ne refroidissait plus correctement.",
        reparation: "Le technicien a remplacé le compresseur défectueux et a rechargé le gaz réfrigérant.",
        resultat: "Mon réfrigérateur fonctionne de nouveau parfaitement. Intervention rapide et professionnelle.",
        nom: "Paul H. - 12/5/2024"
    },
    {
        problematique: "La machine à laver Whirlpool ne terminait pas les cycles de lavage.",
        reparation: "Le technicien a diagnostiqué un problème avec la carte électronique et l'a remplacée.",
        resultat: "Service excellent, ma machine fonctionne comme neuve maintenant.",
        nom: "Emily R. - 30/4/2024"
    },
    {
        problematique: "Mon four Bosch ne chauffait plus correctement.",
        reparation: "Le technicien a remplacé l'élément chauffant et a recalibré le thermostat.",
        resultat: "Mon four est de nouveau opérationnel, très satisfait du service.",
        nom: "John D. - 18/3/2024"
    },
    {
        problematique: "Le sèche-linge LG faisait un bruit étrange et ne séchait plus bien.",
        reparation: "Le technicien a remplacé la courroie et les rouleaux de support.",
        resultat: "Le sèche-linge fonctionne parfaitement, intervention rapide et efficace.",
        nom: "Sarah W. - 5/2/2024"
    }
];

let currentReviewIndex = 0;

const problematiqueText = document.getElementById('problematiqueText');
const reparationText = document.getElementById('reparationText');
const resultatText = document.getElementById('resultatText');
const nomAvis = document.getElementById('nomAvis');
const images = document.querySelectorAll('.image_testimony img');

function updateReview() {
    const review = reviews[currentReviewIndex];
    problematiqueText.textContent = review.problematique;
    reparationText.textContent = review.reparation;
    resultatText.textContent = review.resultat;
    nomAvis.textContent = review.nom;

    // Mettre à jour les indicateurs
    const indicators = document.querySelectorAll('.carousel__indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('current-slide', index === currentReviewIndex);
    });

    // Mettre à jour l'image
    images.forEach((image, index) => {
        image.classList.toggle('hidden', index !== currentReviewIndex);
    });
}

document.getElementById('prevArrow').addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    updateReview();
});

document.getElementById('nextArrow').addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateReview();
});

updateReview();
