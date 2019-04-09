db = db.getSiblingDB("shootizy");

db.products.insert([
  {
    productId: "produit-theme-artiste",
    tags: ["theme"],
    image: "/assets/photos/themes/book-model.jpg",
    title: "Book modèle / Artistes Comédien",
    sharelink: "http://foobarbook.com",
    description:
      "Votre carte de visite professionnelle, c’est votre book. Pas besoin de surchauffer",
    price: "20€",
  },
  {
    productId: "produit-theme-social",
    tags: ["theme"],
    image: "/assets/photos/themes/social-rencontres.jpg",
    title: "Réseaux sociaux / Rencontres",
    sharelink: "http://foobarbook.com",
    description:
      "Comparez la qualité d’un selfie et celle d’un portrait de qualité pro. Il n’y a pas photo.",
    price: "20€",
  },
  {
    productId: "produit-theme-couple",
    tags: ["theme"],
    image: "/assets/photos/themes/couples-duo.jpg",
    title: "Couples / Duo",
    sharelink: "http://foobarbook.com",
    description:
      "Un cadeau de Saint Valentin, l’anniversaire de votre relation ? Un coup de folie douce, en mode coup de cœur ?",
    price: "20€",
  },
  {
    productId: "produit-theme-famille",
    tags: ["theme"],
    image: "/assets/photos/themes/famille.jpg",
    title: "Familles",
    sharelink: "http://foobarbook.com",
    description:
      "Future maman ? Nous réalisons régulièrement des séances photos, en général entre le 6ème et le 8ème mois de grossesse.",
    price: "20€",
  },

  {
    productId: "produit-theme-carriere",
    tags: ["theme"],
    image: "/assets/photos/themes/carrieres.jpg",
    title: "Carrières / CV LinkedIn",
    sharelink: "http://foobarbook.com",
    description:
      "Faites vraiment la différence, dans votre présentation personnelle et auprès de vos relations personnelles et...",
    price: "20€",
  },

  {
    productId: "produit-theme-groupe",
    tags: ["theme"],
    image: "/assets/photos/themes/groupes.jpg",
    title: "Groupes",
    sharelink: "http://foobarbook.com",
    description:
      "Associations, clubs, chorales, orchestres…  Plus on est de fous, plus on Shootizy.",
    price: "20€",
  },
  {
    productId: "produit-theme-fete",
    tags: ["theme"],
    image: "/assets/photos/themes/fetes-anniversaires.jpg",
    title: "Fêtes / Anniversaires / Mariages",
    sharelink: "http://foobarbook.com",
    description:
      "Sitôt votre séance terminée, découvrez vos photos. Prenez votre temps, prenons-le ensemble au studio.",
    price: "20€",
  },
  {
    productId: "produit-theme-evjf",
    tags: ["theme"],
    image: "/assets/photos/themes/evjf.jpg",
    title: "Enterrements de vie de jeune Fille / Garçon",
    sharelink: "http://foobarbook.com",
    description:
      "Sitôt votre séance terminée, découvrez vos photos. Prenez votre temps, prenons-le ensemble au studio.",
    price: "20€",
  },
  {
    productId: "produit-theme-naissance",
    tags: ["theme"],
    image: "/assets/photos/themes/grossesses.jpg",
    title: "Grossesses / Naissances",
    sharelink: "http://foobarbook.com",
    description: "Sitôt votre séance terminée, découvrez vos photos. Prenez votre temps.",
    price: "20€",
  },
]);

// Create index for fast search
db.products.createIndex({ productId: 1 }, { unique: true });
