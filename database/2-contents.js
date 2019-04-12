db = db.getSiblingDB("shootizy");

db.contents.insert([
  {
    contentId: "home-key-prices",
    tags: ["price", "home"],
    items: [
      {
        qty: 45,
        unit: "min",
        of: "de Shooting",
        html: {
          home: "Shooting photo en studio <br>avec un pro : <strong>0€</strong>",
          product: "de Shooting = <strong>0€</strong>",
        },
      },
      {
        qty: 150,
        unit: "€",
        of: "le Pack",
        html: {
          home: "Jusqu'à 150 photos, <br><strong>soit 1€ la photo</strong>",
          product: "les 150 photos",
        },
      },
      {
        qty: 20,
        unit: "€",
        of: "la photo",
        html: {
          home: "<strong>un prix à l'unité</strong><br>Pour les petites envies",
          product: "la photo",
        },
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
    contentId: "home-carousel",
    tags: ["carousel", "home"],
    items: [
      {
        title: "Léa est venue chez nous<br><strong>pour ses 24 Printemps !</strong>",
        buttonText: "Je réserve mon Shooting",
        text: "Avec Shootizy payez seulement les photos que vous aimez !",
        img: "/assets/photos/visuel1.jpg",
      },
      {
        title: "Relancer sa carrière avec<br><strong>Shootizy, c'est so Easy !</strong>",
        buttonText: "Je réserve mon Shooting",
        text: "Avec Shootizy payez seulement les photos que vous aimez !",
        img: "/assets/photos/visuel2.jpg",
      },
    ],
  },
]);

// Create index for fast search
db.contents.createIndex({ contentId: 1 }, { unique: true });
