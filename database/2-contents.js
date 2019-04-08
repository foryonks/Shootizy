const conn = new Mongo();
const db = conn.getDB("shootizy");

db.contents.insert([
  {
    contentId: "home-key-prices",
    tags: ["price", "home"],
    items: [
      {
        qty: 45,
        unit: "min",
        of: "de Shooting",
        html: "Shooting photo en studio <br>avec un pro : <strong>0€</strong>",
      },
      {
        qty: 150,
        unit: "€",
        of: "le Pack",
        html: "Jusqu'à 150 photos, <br><strong>soit 1€ la photo</strong>",
      },
      {
        qty: 20,
        unit: "€",
        of: "la photo",
        html: "<strong>un prix à l'unité</strong><br>Pour les petites envies",
      },
    ],
  },
  {
    contentId: "home-detail-prices",
    tags: ["price", "home"],
    items: [
      {
        icon: "o-clock",
        title: "Shooting de 45 min = 0 €",
        text:
          "Oui, zéro euro \u{1F601}<br><br>Mais nous sommes sûrs que vous choisirez au moins une photo...",
      },
      {
        icon: "love",
        title: "Pack de 150 photos = 150 €,<br> soit 1 € la photo<br> ou photo à l'unité = 20 €",
        text: "Rearement un billet de vingt vous aura fait <strong>autant de bien ;-)</strong>",
      },
      {
        icon: "like",
        title: "Le temps de choisir = 0 €",
        text:
          "Sitôt votre séance terminée, découvrez vos photos.<br><br>Prenez votre temps, <strong>Aucune obligation d'achat. Payez seulement les images qui vous plaisent.",
      },
    ],
  },
  {
    contentId: "themes",
    tags: ["themes"],
    items: [
      {
        image: "/assets/photos/themes/book-modele.jpg",
        title: "Book modèle / Artistes Comédien",
        sharelink: "http://foobarbook.com",
        description:
          "Votre carte de visite professionnelle, c’est votre book. Pas besoin de surchauffer",
        price: "20€",
      },
      {
        image: "/assets/photos/themes/social-rencontres.jpg",
        title: "Réseaux sociaux / Rencontres",
        sharelink: "http://foobarbook.com",
        description:
          "Comparez la qualité d’un selfie et celle d’un portrait de qualité pro. Il n’y a pas photo",
        price: "20€",
      },
      {
        image: "/assets/photos/themes/couples-duo.jpg",
        title: "Couples / Duo",
        sharelink: "http://foobarbook.com",
        description:
          "Un cadeau de Saint Valentin, l’anniversaire de votre relation ? Un coup de folie douce, en mode coup de cœur ?",
        price: "20€",
      },
      {
        image: "/assets/photos/themes/famille.jpg",
        title: "Familles",
        sharelink: "http://foobarbook.com",
        description:
          "Future maman ? Nous réalisons régulièrement des séances photos, en général entre le 6ème et le 8ème mois de grossesse",
        price: "20€",
      },

      {
        image: "/assets/photos/themes/carrieres.jpg",
        title: "Carrières / CV LinkedIn",
        sharelink: "http://foobarbook.com",
        description:
          "Faites vraiment la différence, dans votre présentation personnelle et auprès de vos relations personnelles et...",
        price: "20€",
      },

      {
        image: "/assets/photos/themes/groupes.jpg",
        title: "Groupes",
        sharelink: "http://foobarbook.com",
        description:
          "Associations, clubs, chorales, orchestres…  Plus on est de fous, plus on Shootizy.",
        price: "20€",
      },
      {
        image: "/assets/photos/themes/fetes-anniversaires.jpg",
        title: "Fêtes / Anniversaires / Mariages",
        sharelink: "http://foobarbook.com",
        description:
          "Sitôt votre séance terminée, découvrez vos photos. Prenez votre temps, prenons-le ensemble au",
        price: "20€",
      },
      {
        image: "/assets/photos/themes/evjf.jpg",
        title: "Enterrements de vie de jeune Fille / Garçon",
        sharelink: "http://foobarbook.com",
        description:
          "Sitôt votre séance terminée, découvrez vos photos. Prenez votre temps, prenons-le ensemble au studio.",
        price: "20€",
      },
      {
        image: "/assets/photos/themes/grossesses.jpg",
        title: "Grossesses / Naissances",
        sharelink: "http://foobarbook.com",
        description: "Sitôt votre séance terminée, découvrez vos photos. Prenez votre tempsv",
        price: "20€",
      },
    ],
  },
]);

// Create index for fast search
db.contents.createIndex({ contentId: 1 }, { unique: true });
