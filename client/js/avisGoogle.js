// Remplacez "VOTRE_ID_ENTREPRISE" par l'ID de votre entreprise Google Places
var placeId = "ChIJVVUUfGP65UcR0jwrQ_hM2JA";

// Créez une requête pour récupérer les avis de votre entreprise
var request = {
  placeId: placeId,
  fields: ["reviews"]
};

// Envoyez la requête à l'API Google Places
var service = new google.maps.places.PlacesService(document.createElement("div"));
service.getDetails(request, function(place, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    // Récupérez les avis de votre entreprise
    var reviews = place.reviews;

    console.log('resultat', reviews);

    const authorText = document.querySelector('.author-text');
    if (authorText.textContent.length > 20) {
      const seeMoreLink = document.createElement('a');
      seeMoreLink.textContent = 'Voir plus...';
      seeMoreLink.classList.add('see-more-link');
      authorText.appendChild(seeMoreLink);
      authorText.dataset.fullText = authorText.textContent;
    }
    
    authorText.addEventListener('click', function() {
      if (authorText.classList.contains('hide-text')) {
        authorText.classList.remove('hide-text');
        authorText.textContent = authorText.dataset.fullText;
      }
    });

    // Affichez les avis sur votre site web
    // var reviewsContainer = document.getElementById("google-reviews");
    // for (var i = 0; i < reviews.length; i++) {
    //   var review = reviews[i];
    //   var reviewElement = document.createElement("div");
    //   reviewElement.innerHTML = "<h3>" + review.author_name + "</h3>" +
    //                             "<p>" + review.text + "</p>" +
    //                             "<p>Note : " + review.rating + "/5</p>";
    //   reviewsContainer.appendChild(reviewElement);
    // }
  }
});
