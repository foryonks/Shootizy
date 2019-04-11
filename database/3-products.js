db = db.getSiblingDB("shootizy");

db.products.insert([
  {
    productId: "produit-theme-bookmodel",
    tags: ["theme", "book-model"],
    image: "/assets/photos/themes/book-artiste/thumb.jpg",
    imageLarge: "/assets/photos/themes/book-artiste/large.jpg",
    title: "Book modèle / Artistes Comédien",
    descTitle: "Faites de votre book un visa professionnel pour vos succès !",
    description: `Votre carte de visite professionnelle, c’est votre book. Pas besoin de surchauffer votre carte bancaire pour le créer, l’actualiser ou l’optimiser.<br><br>
  <strong>À 150 euros pour 150 photos, nos prix restent sages comme des images. Avouez que cela tombe plutôt bien pour votre métier ;-)</strong><br><br>
  Notre studio et nos photographes travaillent pour le cinéma, toute l’année et depuis longtemps. Chez Shootizy, <strong>vous savez où vous mettez les pieds, avant de brûler les planches et de crever l’écran.</strong>`,
    price: "20€",
  },
  {
    productId: "produit-theme-social",
    tags: ["theme", "social"],
    image: "/assets/photos/themes/social-rencontres/thumb.jpg",
    imageLarge: "/assets/photos/themes/social-rencontres/large.jpg",
    title: "Réseaux sociaux / Rencontres",
    descTitle: "Un cliché de haut niveau vous fait vraiment sortir du lot !",
    description: `Comparez la qualité d’un selfie et celle d’un portrait de qualité pro. Il n’y a pas photo. Pourtant, sur le web social, sur les sites de rencontres et même sur des plateformes de type LinkedIn, l’amateurisme reste majoritaire. Dans cette multitude, <strong>un cliché de haut niveau vous fait vraiment sortir du lot.</strong><br><br>
<strong>Question de budget ? Réponse Shootizy : faites vraiment la différence, dans votre présentation personnelle et auprès de vos relations personnelles et professionnelles, pour un prix qui défie la concurrence et l’ordinaire.</strong>`,
    price: "20€",
  },

  {
    productId: "produit-theme-couple",
    tags: ["theme", "couple"],
    image: "/assets/photos/themes/couples-duo/thumb.jpg",
    imageLarge: "/assets/photos/themes/book-artiste/large.jpg",
    title: "Couples / Duo",
    descTitle: "Offrez à votre histoire d’amour des images à la mesure de sa force.",
    description: `Un cadeau de Saint Valentin, l’anniversaire de votre relation ? Un coup de folie douce, en mode coup de cœur ?<br><br>
<strong>Offrez à votre histoire d’amour des images à la mesure de sa force</strong>. Inscrivez votre duo dans le temps. On ne peut pas encadrer une conversation téléphonique ou faire un poster avec un thread de SMS... <br><br>
Pour les sessions romantiques, Shootizy personnalise spécialement son approche. <strong>Nous apportons un soin particulier à créer un style naturel, non posé</strong>.<br>
<strong>Pour les amoureux de l’Unique et les amoureux tout court.</strong>`,
    price: "20€",
  },

  {
    productId: "produit-theme-famille",
    tags: ["theme", "famille"],
    image: "/assets/photos/themes/familles/thumb.jpg",
    imageLarge: "/assets/photos/themes/book-artiste/large.jpg",
    title: "Familles",
    descTitle: "Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong>",
    description: `Cras gravida eget arcu in auctor. Donec rutrum tempus diam, eget ultrices erat convallis nec. Vivamus elementum tempus lorem. Nam vel elit eget nisi pulvinar sodales quis a leo. Morbi iaculis viverra arcu, ac tempus purus faucibus nec. In at urna nisl.
<br><br>
<strong>Quisque nec augue quis libero tempor ornare. Aliquam sed mi ut velit euismod bibendum faucibus ut ante. Etiam placerat placerat velit non rhoncus. Quisque felis erat, venenatis non justo ut, faucibus convallis mauris</strong>.
`,
    price: "20€",
  },

  {
    productId: "produit-theme-carriere",
    tags: ["theme"],
    image: "/assets/photos/themes/carrieres/thumb.jpg",
    imageLarge: "/assets/photos/themes/book-artiste/large.jpg",
    title: "Carrières / CV LinkedIn",
    descTitle:
      "<strong>Faites vraiment la différence</strong>, dans votre présentation professionnelle",
    description: `Comparez la qualité d’un selfie et celle d’un portrait de qualité pro. Il n’y a pas photo. Pourtant, sur le web social, sur les sites de rencontres et même sur des plateformes de type LinkedIn, l’amateurisme reste majoritaire. Dans cette multitude, un cliché de haut niveau vous fait vraiment sortir du lot.</br><br>
Question de budget ? Réponse Shootizy : <strong>faites vraiment la différence, dans votre présentation personnelle et auprès de vos relations personnelles et professionnelles, pour un prix qui défie la concurrence et l’ordinaire</strong>.
`,
    price: "20€",
  },

  {
    productId: "produit-theme-groupe",
    tags: ["theme"],
    image: "/assets/photos/themes/groupes/thumb.jpg",
    imageLarge: "/assets/photos/themes/book-artiste/large.jpg",
    title: "Groupes",
    descTitle: "Plus on est de fous, <strong>plus on Shootizy ^^</strong>",
    description: `Associations, clubs, chorales, orchestres…  <strong>Plus on est de fous, plus on Shootizy</strong>. Le photo-portrait de groupe, en studio ou en extérieur, compte parmi nos spécialités.<br><br>
Cet exercice suppose un savoir-faire spécifique. Par exemple, dans un collectif à photographier, il n’y a pas toujours un personnage principal. Or, en principe, la mise au point d’un groupe se fait sur le visage du sujet principal. Lorsqu’il n’existe pas, il faut faire la mise au point sur la personne située au milieu du premier rang.
Autre astuce de pro. Quand la photo de groupe est prise, tout le monde se détend, libéré de la contrainte de poser, et ne prête plus attention au photographe. Ce dernier doit savoir saisir ce moment et continuer à shooter en se rapprochant du groupe. <strong>Car c’est l’instant où des scènes de complicité privilégiées surviennent</strong>.
`,
    price: "20€",
  },

  {
    productId: "produit-theme-fete",
    tags: ["theme"],
    image: "/assets/photos/themes/fetes-anniversaires/thumb.jpg",
    imageLarge: "/assets/photos/themes/book-artiste/large.jpg",
    title: "Fêtes / Anniversaires / Mariages",
    descTitle: "Donnez à vos festivités la marque de l’inoubliable !",
    description: `Du mariage à l’arbre de Noël, en passant les anniversaires, les soirées costumées ou les cérémonies en tout genre... <strong>Donnez à vos festivités la marque de l’Inoubliable</strong>.<br><br>
Bien sûr, le mariage occupe une place à part dans le registre de vos célébrations. Ce jour-là, votre photographe est un acteur-clé par excellence. Préparez sereinement ce jour J avec votre interlocuteur Shootizy. Pour un reportage complet, ou juste une photo de groupe, un portrait en couple...`,
    price: "20€",
  },
  {
    productId: "produit-theme-evjf",
    tags: ["theme"],
    image: "/assets/photos/themes/evjf/thumb.jpg",
    imageLarge: "/assets/photos/themes/book-artiste/large.jpg",
    title: "Enterrements de vie de jeune Fille / Garçon",
    descTitle: "Ce qui se passe à Shootizy<br><br><strong>reste chez Shootizy !</strong>",
    description: `Et si c’était l’un des jours les plus fous de votre vie ? Sans de belles images, ce serait dommage d’en perdre la trace.<br><br>
La plupart du temps, ce sont les ami(e)s de la future épouse ou du nouveau marié qui organisent cet événement pas comme les autres… Nous avons l’habitude. Nous avons prévu une prestation spécifique pour filmer, photographier, accompagner ces situations à base de gages coquins ou loufoques dans notre studio.<br><br>
Ne vous embêtez plus avec les soucis techniques : <strong>batteries smartphone à recharger, caméra à se procurer, photographe-vidéaste expert à impliquer...</strong><br><br>
La prestation Shootizy, toujours à prix mini, permet aux participants de se concentrer sur l’action et la folie douce de cette circonstance créative et coquine. <strong>Pour le reste, soyez sans crainte. Ce qui se passe à Shootizy reste chez Shootizy</strong>.`,
    price: "20€",
  },
  {
    productId: "produit-theme-naissance",
    tags: ["theme"],
    image: "/assets/photos/themes/grossesses/thumb.jpg",
    imageLarge: "/assets/photos/themes/book-artiste/large.jpg",
    title: "Grossesses / Naissances",
    descTitle:
      "Future Maman ? Bébé est déjà né ?<br><strong> Shooting est fait pour vous !</strong>",
    description: `<strong>Future maman ?</strong> Nous réalisons régulièrement des séances photos, en général entre le 6ème et le 8ème mois de grossesse, le plus photogénique. En studio, en extérieur, à domicile. Dites-nous vos préférences. Le papa est le bienvenu. Les frères et sœurs aussi.<br><br>
<strong>Bébé est déjà né ?</strong> Certains parents adorent immortaliser les premiers jours leur bout de chou, ces moments où il dort. D’autres préfèrent attendre au moins 3 mois, pour capter les risettes. Aux alentours du 12ème mois, <strong>un Must : la séance du premier pas. En photo ou en vidéo</strong>.<br><br>
Au delà des naissances, quelle que soit votre tribu, <strog>nnous créons avec vous des souvenirs pleins d’avenir</strong>.
Le portrait de famille : <strong>Un cadeau à haute teneur émotionnelle, à l’épreuve du temps, à offrir et à s’offrir.</strong>`,
    price: "20€",
  },
]);

// Create index for fast search
db.products.createIndex({ productId: 1 }, { unique: true });
