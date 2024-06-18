export type MovieData = {
  id: number;
  title: string;
  slug: string;
  order: number;
  date: string;
  duration: number;
  synopsis: string;
  details: string;
  coverImage: string;
  images: string[];
};

export const MOVIES: MovieData[] = [
  {
    id: 1,
    order: 4,
    title: "Épisode IV - Un nouvel espoir",
    slug: "iv-un-nouvel-espoir",
    date: "1977-05-25",
    duration: 121,
    synopsis:
      "La galaxie est en proie à la guerre civile. Les forces rebelles, dirigées par la princesse Leia, dérobent les plans de l'Étoile de la Mort, une station spatiale capable de détruire des planètes entières. Capturée par les forces impériales, Leia cache les plans dans le droïde R2-D2, qui s'échappe avec son compagnon C-3PO.",
    details:
      "<p><strong>Un nouvel espoir</strong> commence avec la princesse Leia capturée par l'Empire. Les plans volés de l'Étoile de la Mort sont cachés dans le droïde R2-D2. Ce dernier, avec son compagnon C-3PO, finit sur la planète Tatooine où ils rencontrent Luke Skywalker.</p><p>Luke, guidé par le message de Leia, rejoint le Jedi Obi-Wan Kenobi. Ensemble, ils recrutent Han Solo et Chewbacca pour les aider à délivrer la princesse. Ils finissent par détruire l'Étoile de la Mort grâce à un tir précis de Luke, assisté par la Force.</p><p>Le film se termine par une cérémonie de remise de médailles pour les héros de l'Alliance Rebelle. Ce premier film établit l'univers de Star Wars avec ses personnages iconiques et ses thèmes épiques de lutte entre le bien et le mal.</p>",
    coverImage: "/ep-4/cover.png",
    images: [
      "/ep-4/img-1.jpg",
      "/ep-4/img-2.jpg",
      "/ep-4/img-3.jpg",
    ],
  },
  {
    id: 2,
    order: 5,
    title: "Épisode V - L'Empire contre-attaque",
    slug: "v-empire-contre-attaque",
    date: "1980-05-21",
    duration: 124,
    synopsis:
      "Après la destruction de l'Étoile de la Mort, l'Empire contre-attaque. Les forces rebelles sont chassées de leur base sur la planète glacée Hoth. Luke Skywalker, sur les conseils de l'esprit d'Obi-Wan Kenobi, se rend sur Dagobah pour y être formé par le maître Jedi Yoda.",
    details:
      "<p><strong>L'Empire contre-attaque</strong> débute sur la planète glacée Hoth, où les rebelles sont attaqués par l'Empire. Luke reçoit une vision de l'esprit d'Obi-Wan Kenobi qui lui dit de se rendre sur Dagobah pour être formé par Yoda.</p><p>Han Solo, Leia, Chewbacca et C-3PO fuient à bord du Faucon Millenium et se réfugient chez Lando Calrissian à Bespin. Ils sont trahis par Lando et capturés par Dark Vador. Han est emprisonné dans de la carbonite et remis au chasseur de primes Boba Fett.</p><p>Le film culmine avec le duel entre Luke et Vador, au cours duquel Vador révèle être le père de Luke. Luke s'échappe mais perd une main. Le film se termine sur une note sombre, avec les héros dispersés et l'Empire en position de force.</p>",
      coverImage: "/ep-5/cover.png",
      images: [
        "/ep-5/img-1.jpg",
        "/ep-5/img-2.jpg",
        "/ep-5/img-3.jpg",
      ],
  },
  {
    id: 3,
    order: 6,
    title: "Épisode VI - Le Retour du Jedi",
    slug: "vi-le-retour-du-jedi",
    date: "1983-05-25",
    duration: 131,
    synopsis:
      "L'Empire Galactique construit une nouvelle Étoile de la Mort. Luke Skywalker tente de sauver Han Solo des griffes de Jabba le Hutt. Avec ses amis, il lance une attaque finale contre l'Empire. Luke confronte Dark Vador et l'Empereur dans un duel décisif.",
    details:
      "<p><strong>Le Retour du Jedi</strong> commence avec la mission de sauvetage de Han Solo des griffes de Jabba le Hutt sur Tatooine. Luke, Leia, Chewbacca et Lando réussissent à libérer Han et à détruire la barge de Jabba.</p><p>Les rebelles découvrent la construction d'une nouvelle Étoile de la Mort. Ils montent une mission pour détruire cette arme avant qu'elle ne soit opérationnelle. Pendant ce temps, Luke se rend sur Endor pour affronter son père, Dark Vador, et l'Empereur Palpatine.</p><p>Le duel entre Luke et Vador est intense, culminant avec la rédemption de Vador qui tue l'Empereur pour sauver son fils. L'Étoile de la Mort est détruite par les forces rebelles, marquant la chute de l'Empire et la fin de la guerre.</p>",
      coverImage: "/ep-6/cover.png",
      images: [
        "/ep-6/img-1.jpg",
        "/ep-6/img-2.jpg",
        "/ep-6/img-3.jpg",
      ],
  },
  {
    id: 4,
    order: 1,
    title: "Épisode I - La Menace fantôme",
    slug: "i-la-menace-fantome",
    date: "1999-05-19",
    duration: 136,
    synopsis:
      "Deux Jedi, Qui-Gon Jinn et son apprenti Obi-Wan Kenobi, sont envoyés pour résoudre un conflit commercial. Ils rencontrent Anakin Skywalker, un jeune esclave doté de la Force. Ils découvrent une menace sombre grandissante.",
    details:
      "<p><strong>La Menace fantôme</strong> se déroule des décennies avant les événements de la trilogie originale. Les Jedi Qui-Gon Jinn et Obi-Wan Kenobi sont envoyés pour négocier un traité de paix mais découvrent une invasion de la planète Naboo par la Fédération du Commerce.</p><p>Fuyant vers Tatooine, ils rencontrent Anakin Skywalker, un jeune esclave incroyablement doué avec la Force. Ils croient qu'il est l'Élu, destiné à apporter l'équilibre à la Force. Ils emmènent Anakin avec eux pour qu'il soit formé en tant que Jedi.</p><p>Le film se termine par une bataille décisive sur Naboo, où les forces de la planète, aidées par les Gungans, affrontent la Fédération du Commerce. Qui-Gon est tué par le Seigneur Sith Dark Maul, mais Obi-Wan venge son maître et tue Maul.</p>",
    coverImage: "/ep-1/cover.jpg",
    images: [
      "/ep-1/img-1.jpg",
      "/ep-1/img-2.jpg",
      "/ep-1/img-3.jpg",
    ],
  },
  {
    id: 5,
    order: 2,
    title: "Épisode II - L'Attaque des clones",
    slug: "ii-attaque-des-clones",
    date: "2002-05-16",
    duration: 142,
    synopsis:
      "Dix ans après les événements de La Menace fantôme, la galaxie est au bord de la guerre civile. Anakin Skywalker, devenu un Jedi, est assigné à la protection de la sénatrice Padmé Amidala. Une romance naît entre eux tandis qu'une menace grandissante se profile.",
    details:
      "<p><strong>L'Attaque des clones</strong> se déroule dix ans après La Menace fantôme. La galaxie est en proie à une instabilité croissante. Anakin Skywalker, maintenant un Padawan, est chargé de protéger la sénatrice Padmé Amidala après une tentative d'assassinat.</p><p>Anakin et Padmé tombent amoureux, malgré les interdits du Code Jedi. Pendant ce temps, Obi-Wan Kenobi enquête sur une mystérieuse armée de clones créée pour la République. Il découvre que le Seigneur Sith, Dark Sidious, manipule les événements pour semer le chaos.</p><p>Le film culmine avec la Bataille de Géonosis, où les Jedi et les clones affrontent les forces séparatistes. Anakin perd une main dans un duel avec le Comte Dooku. Le film se termine avec l'instauration des guerres des clones, une période sombre pour la galaxie.</p>",
      coverImage: "/ep-2/cover.jpg",
      images: [
        "/ep-2/img-1.jpg",
        "/ep-2/img-2.jpg",
        "/ep-2/img-3.jpg",
      ],
  },
  {
    id: 6,
    title: "Épisode III - La Revanche des Sith",
    order: 3,
    slug: "iii-la-revanche-des-sith",
    date: "2005-05-19",
    duration: 140,
    synopsis:
      "Les guerres des clones font rage. Anakin Skywalker, en proie à des visions de la mort de Padmé, se tourne vers le côté obscur de la Force et devient Dark Vador. Les Jedi sont exterminés et l'Empire Galactique est instauré.",
    details:
      "<p><strong>La Revanche des Sith</strong> commence avec le sauvetage du Chancelier Palpatine par Anakin et Obi-Wan. Anakin est en proie à des visions de la mort de Padmé, ce qui le pousse à se tourner vers le côté obscur de la Force sous la tutelle de Palpatine, qui révèle être le Seigneur Sith Dark Sidious.</p><p>Anakin devient Dark Vador après avoir prêté allégeance à Sidious. Il participe à l'extermination des Jedi, orchestrée par l'ordre 66. Obi-Wan confronte Anakin sur Mustafar dans un duel épique qui se termine par la défaite d'Anakin, gravement blessé et laissé pour mort.</p><p>Padmé donne naissance à Luke et Leia avant de mourir. L'Empire Galactique est proclamé, marquant la fin de la République. Le film se termine avec Obi-Wan et Yoda se cachant, tandis que les enfants de Padmé sont cachés pour leur protection.</p>",
      coverImage: "/ep-3/cover.jpg",
      images: [
        "/ep-3/img-1.jpg",
        "/ep-3/img-2.jpg",
        "/ep-3/img-3.jpg",
      ],
  },
  {
    id: 7,
    title: "Le Réveil de la Force",
    date: "2015-12-18",
    order: 7,
    slug: "le-reveil-de-la-force",
    duration: 138,
    synopsis:
      "Trente ans après la chute de l'Empire, une nouvelle menace se lève sous la forme du Premier Ordre. Rey, une jeune pilleuse d'épaves, et Finn, un ex-stormtrooper, doivent s'unir à Han Solo et Chewbacca pour retrouver Luke Skywalker, le dernier espoir de la galaxie.",
    details:
      "<p>Trente ans après la destruction de la deuxième Étoile de la Mort, le Premier Ordre, dirigé par le mystérieux Snoke et son apprenti Kylo Ren, a émergé des cendres de l'Empire. La Résistance, menée par la Générale Leia Organa, tente de contrer cette menace croissante. Rey, une pilleuse d'épaves sur la planète désertique Jakku, découvre BB-8, un droïde contenant une carte menant à Luke Skywalker, le dernier Jedi disparu.</p><p>En parallèle, Finn, un stormtrooper désabusé, s'échappe du Premier Ordre et fait équipe avec Poe Dameron, un pilote de la Résistance. Ensemble, ils rejoignent Rey et Han Solo dans leur quête pour retrouver Luke. Le groupe fait face à de nombreux dangers, notamment Kylo Ren, qui révèle être le fils de Leia et Han, autrefois connu sous le nom de Ben Solo.</p><p>Au cours de leurs aventures, Rey découvre qu'elle est sensible à la Force et commence à développer ses pouvoirs. La bataille finale se déroule sur la base Starkiller, une super-arme capable de détruire des systèmes entiers. La Résistance réussit à détruire la base, mais Kylo Ren parvient à s'échapper, laissant la quête de Rey pour retrouver Luke et comprendre son destin à peine commencée.</p>",
      coverImage: "/ep-7/cover.jpg",
      images: [
        "/ep-7/img-1.jpg",
        "/ep-7/img-2.jpg",
        "/ep-7/img-3.jpg",
      ],
  },
  {
    id: 8,
    title: "Les Derniers Jedi",
    slug: "les-derniers-jedi",
    order: 8,
    date: "2017-12-15",
    duration: 152,
    synopsis:
      "Rey trouve Luke Skywalker, mais il est réticent à l'entraîner. Pendant ce temps, le Premier Ordre poursuit la Résistance, qui tente de survivre et de trouver une nouvelle base.",
    details:
      "<p>Rey arrive sur Ahch-To pour rencontrer Luke Skywalker, espérant qu'il rejoindra la Résistance et l'aidera à comprendre ses nouvelles capacités avec la Force. Cependant, Luke est réticent, hanté par son échec avec Kylo Ren, son ancien apprenti. Pendant ce temps, le Premier Ordre poursuit la Résistance, qui est en fuite et cherche désespérément une nouvelle base.</p><p>Leaders de la Résistance, Leia Organa et Poe Dameron, luttent pour maintenir l'espoir vivant alors que leurs forces sont décimées. Finn et une nouvelle alliée, Rose, partent en mission pour désactiver le dispositif de suivi du Premier Ordre afin de permettre à la flotte de s'échapper. Leur mission les conduit à Canto Bight, une planète casino, où ils rencontrent des personnages douteux et apprennent les complexités de la guerre et du commerce des armes.</p><p>En parallèle, Rey et Kylo Ren commencent à établir une connexion mystérieuse à travers la Force, menant à des échanges émotionnels intenses et révélant des vérités sur leur passé respectif. La confrontation finale se déroule sur la planète Crait, où la Résistance fait face à un assaut massif du Premier Ordre. Luke apparaît sous une forme astrale pour distraire Kylo Ren, permettant aux survivants de la Résistance de s'échapper et de continuer le combat.</p>",
      coverImage: "/ep-8/cover.jpg",
      images: [
        "/ep-8/img-1.jpg",
        "/ep-8/img-2.jpg",
        "/ep-8/img-3.jpg",
      ],
  },
  {
    id: 9,
    order: 9,
    title: "L'Ascension de Skywalker",
    slug: "ascension-de-skywalker",
    date: "2019-12-20",
    duration: 142,
    synopsis:
      "La Résistance affronte le Premier Ordre une dernière fois tandis que Rey découvre des vérités sur ses origines et le combat final entre les forces du bien et du mal se déroule.",
    details:
      "<p>Dans le dernier chapitre de la saga Skywalker, la Résistance se regroupe pour un dernier affrontement contre le Premier Ordre. Rey, ayant terminé sa formation de Jedi, est en quête de découvrir la vérité sur ses origines. Ses recherches la mènent à des révélations surprenantes qui changent le cours de sa destinée.</p><p>Le mystérieux empereur Palpatine refait surface, menaçant de détruire ce qu'il reste de la Résistance. Rey, Finn, Poe et leurs alliés se lancent dans une mission périlleuse pour détruire cette nouvelle menace et restaurer la paix dans la galaxie. Le lien entre Rey et Kylo Ren devient de plus en plus complexe, culminant dans un duel épique qui décidera du sort de la galaxie.</p><p>La bataille finale se déroule sur Exegol, une planète cachée, où la flotte de la Résistance affronte les forces massives de Palpatine. Grâce à l'aide des amis et alliés venus des quatre coins de la galaxie, la Résistance parvient à renverser la vapeur. Rey, en utilisant toute la puissance des Jedi qui l'ont précédée, affronte Palpatine dans une confrontation décisive.</p><p>À la fin, la victoire est obtenue, mais à un coût élevé. Rey adopte le nom de Skywalker, honorant le legacy des Skywalker tout en forgeant son propre chemin. La galaxie commence à se reconstruire, avec l'espoir d'un avenir meilleur et plus lumineux.</p>",
      coverImage: "/ep-9/cover.jpg",
      images: [
        "/ep-9/img-1.jpg",
        "/ep-9/img-2.jpg",
        "/ep-9/img-3.jpg",
      ],
  },
  {
    id: 10,
    order: 3.5,
    title: "Rogue One: A Star Wars Story",
    slug: "rogue-one",
    date: "2016-12-14",
    duration: 136,
    synopsis:
      "Un groupe de héros improbables s'unit pour voler les plans de l'Étoile de la Mort, l'arme de destruction ultime de l'Empire.",
    details:
      "<p>Le scientifique Galen Erso et sa famille se cachent sur la planète Lah'mu lorsque l'agent impérial Orson Krennic arrive pour le forcer à achever l'Étoile de la Mort, une superarme capable de détruire des planètes. La femme de Galen, Lyra, est tuée pendant la confrontation tandis que leur fille Jyn s'échappe et est secourue par le rebelle extrémiste Saw Gerrera.</p><p>Quinze ans plus tard, le pilote Bodhi Rook fait défection de l'Empire, apportant un message holographique enregistré par Galen à Gerrera sur la lune désertique Jedha. L'agent de renseignement de l'Alliance rebelle Cassian Andor apprend la défection de Rook et l'existence de l'Étoile de la Mort grâce à un informateur. Jyn est libérée d'un camp de travail impérial et est amenée devant les leaders rebelles Bail Organa et Mon Mothma, qui la convainquent de retrouver et de sauver Galen pour que l'Alliance puisse en savoir plus sur la superarme.</p><p>Jyn, Cassian et l'ancien droïde impérial reprogrammé K-2SO se rendent sur Jedha, où l'Empire extrait des cristaux kyber pour alimenter l'Étoile de la Mort. Avec l'aide du guerrier spirituel aveugle Chirrut Îmwe et de son ami mercenaire Baze Malbus, Jyn entre en contact avec Gerrera, qui détient Rook captif. Gerrera montre à Jyn le message dans lequel Galen révèle qu'il a secrètement intégré une vulnérabilité dans l'Étoile de la Mort. Les plans détaillant cette vulnérabilité se trouvent dans une banque de données impériale sur la planète Scarif.</p><p>Jyn propose un plan pour voler les plans de l'Étoile de la Mort à la flotte rebelle, mais elle ne parvient pas à obtenir l'approbation du Conseil de l'Alliance, qui estime que la victoire contre l'Empire est maintenant impossible. Frustrée par leur inaction, Jyn mène un petit groupe de volontaires rebelles dans un raid sur la banque de données. L'Alliance apprend le raid et déploie sa flotte en soutien. Grâce à des sacrifices héroïques, Jyn et Cassian parviennent à transmettre les plans à la flotte rebelle, permettant à la rébellion de gagner un avantage crucial contre l'Empire.</p>",
    coverImage: "/rogue-one/cover.jpeg",
    images: [
      "/rogue-one/img-1.jpg",
      "/rogue-one/img-2.jpg",
      "/rogue-one/img-3.jpg",
    ],
  },
];
