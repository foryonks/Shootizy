db = db.getSiblingDB("shootizy");

db.contents.insert([
  {
    contentId: "home-key-prices",
    tags: ["price", "home"],
    items: [
      {
        html: {
          pre: "RDV",
          title: "Le Shooting",
          button: "45 minutes",
          text: "Shooting photo de 45 min<br>en studio avec un Pro !",
        },
      },
      ,
      {
        html: {
          pre: "Choix n°1",
          title: "La Photo",
          button: "20 €/photo",
          text: "Shooting photo de 45 min<br>en studio avec un Pro !",
        },
        className: "block-or",
      },
      {
        html: {
          pre: "Choix n°2",
          title: "Le Pack 150",
          button: "150 €",
          text: "Contenant jusqu’à 150 photos<br> (soit 1€ la photo).",
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
        title: "Shooting de 45 min = 0€",
        text:
          "Oui, zéro euro \u{1F601}<br><br>Mais nous sommes sûrs que vous choisirez au moins une photo...",
      },
      {
        icon: "love",
        title: "Pack de 150 photos = 150€,<br> soit 1€ la photo<br> ou photo à l'unité = 20€",
        text: "Rearement un billet de vingt vous aura fait <strong>autant de bien ;-)</strong>",
      },
      {
        icon: "like",
        title: "Le temps de choisir = 0€",
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
        contentLink: "/shooting-studio/produit-theme-fete",
        buttonLink: "/shooting-studio/produit-theme-fete",
        buttonText: "En savoir plus",
        text: "Avec Shootizy payez seulement les photos que vous aimez !",
        img: "/assets/photos/visuel1.jpg",
        themeId: "produit-theme-fete",
      },
      {
        title: "Relancer sa carrière avec<br><strong>Shootizy, c'est so Easy !</strong>",
        contentLink: "/shooting-studio/produit-theme-carriere",
        buttonLink: "/shooting-studio/produit-theme-carriere",
        buttonText: "En savoir plus",
        text: "Avec Shootizy payez seulement les photos que vous aimez !",
        img: "/assets/photos/visuel2.jpg",
        themeId: "produit-theme-carriere",
      },
    ],
  },
]);

// Create index for fast search
db.contents.createIndex({ contentId: 1 }, { unique: true });
