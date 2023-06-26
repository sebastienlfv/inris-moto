// Remplacez "VOTRE_ID_ENTREPRISE" par l'ID de votre entreprise Google Places
var placeIds = ["ChIJVVUUfGP65UcR0jwrQ_hM2JA", "ChIJDdCORBN45kcR3SezNHamLQE"];

// Créez une requête pour récupérer les avis de chaque entreprise
var requests = placeIds.map(placeId => {
  return {
    placeId: placeId,
    fields: ["reviews"]
  };
});

// Envoyez les requêtes à l'API Google Places
var service = new google.maps.places.PlacesService(document.createElement("div"));
var reviews = [];

requests.forEach(request => {
  service.getDetails(request, function(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      // Récupérez les avis de l'entreprise
      var placeReviews = place.reviews;

      // Filtrer les avis avec une note supérieure ou égale à 4
      var filteredReviews = placeReviews.filter(review => review.rating >= 4);

      // Ajouter les avis à la liste des avis à afficher
      reviews = reviews.concat(filteredReviews);

      // Mélanger les avis pour changer l'affichage
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      shuffleArray(reviews);

      // Assigner la note à author-rating
      var authorRatings = document.querySelectorAll('.author-rating');
      for (var i = 0; i < authorRatings.length; i++) {
        var review = reviews[i];
        var rating = review.rating;
        var stars = '';
        for (var j = 0; j < rating; j++) {
          stars += '<img src="/client/src/img/etoile.png">';
        }
        authorRatings[i].innerHTML = stars;
      }

      // Affichez les avis sur votre site web
      for (var i = 0; i < Math.min(3, reviews.length); i++) {
        var review = reviews[i];

        // Assigner la photo de l'auteur à la balise author-photo
        var authorPhotos = document.querySelectorAll('.author-photo');
        authorPhotos[i].src = review.profile_photo_url;

        // Assigner le nom à author-name
        var authorNames = document.querySelectorAll('.author-name');
        authorNames[i].textContent = review.author_name;

        // Assigner le texte à author-text
        var authorTexts = document.querySelectorAll('.author-text');
        authorTexts[i].textContent = review.text;
      }

      authorTexts = document.querySelectorAll('.detail-avis .author-text');

      authorTexts.forEach(authorText => {
        if (authorText.textContent.length > 200) {
          const seeMoreLink = document.createElement('a');
          seeMoreLink.textContent = ' Voir plus...';
          seeMoreLink.classList.add('see-more-link');
          seeMoreLink.href = "https://www.google.com/maps/place/" + placeIds[i] + "?entry=ttu";
          seeMoreLink.target = 'blank'

          // Sauvegardez le texte complet pour une utilisation ultérieure
          authorText.dataset.fullText = authorText.textContent;

          // Tronquez le texte à 20 caractères et ajoutez le lien "Voir plus..."
          authorText.textContent = authorText.textContent.substring(0, 200);
          authorText.appendChild(seeMoreLink);
        }

        authorText.addEventListener('click', function() {
          if (authorText.classList.contains('hide-text')) {
            authorText.classList.remove('hide-text');
            authorText.textContent = authorText.dataset.fullText;
          }
        });
      });
    }
  });
});