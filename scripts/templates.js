// Constants cointaining fixed data such as lists of names, items etc
// -----------------------------------------------------------------

// All possible states of an adventurer and what they mean
const adventurer_states = {
    0: 'on quest',
    1: 'available'
};

// I know what you're thinking, but listen... 
// I just don't have the time to add more complexity to this mechanic
// Maybe in a future version.
const gender = {
    0: 'female',
    1: 'male'
};

const male_first_names = [
    'Aelfred',
    'Angus',
    'Alaric',
    'Baldwin',
    'Balon',
    'Barnaby',
    'Bran',
    'Brandon',
    'Bronn',
    'Beric',
    'Cedric',
    'Conan',
    'Cyrus',
    'Daniel',
    'Doran',
    'Davos',
    'Eddard',
    'Edgar',
    'Euron',
    'Edmond',
    'Edwin',
    'Eamon',
    'Elias',
    'Ewald',
    'Eamon',
    'Felix',
    'Finnian',
    'Florian',
    'Frederick',
    'Gregor',
    'Godwyn',
    'Godrick',
    'Geoffrey',
    'Gendry',
    'Gareth',
    'Gilbert',
    'Godfrey',
    'Guy',
    'Harold',
    'Hector',
    'Hafthor',
    'Hugh',
    'Ignatius',
    'Jaime',
    'James',
    'John',
    'Jonn',
    'Jon',
    'Joffrey',
    'Jorah',
    'Julius',
    'Jonnathan',
    'Kenneth',
    'Lambert',
    'Leonard',
    'Leif',
    'Leopold',
    'Lionel',
    'Lodric',
    'Loras',
    'Louis',
    'Malachi',
    'Malcolm',
    'Martin',
    'Matthias',
    'Ned',
    'Neville',
    'Nicholas',
    'Nigel',
    'Norman',
    'Oliver',
    'Oswald',
    'Oskar',
    'Othello',
    'Oberyn',
    'Philip',
    'Rickon',
    'Rickard',
    'Richard',
    'Robb',
    'Roose',
    'Renly',
    'Robert',
    'Ragnar',
    'Ramsay',
    'Reginald',
    'Richard',
    'Sandor',
    'Sebastian',
    'Sigurd',
    'Simon',
    'Solomon',
    'Stannis',
    'Tommen',
    'Theon',
    'Tormund',
    'Tywin',
    'Tyrion',
    'Tommen',
    'Tancred',
    'Theobald',
    'Theodore',
    'Thor',
    'Ubb',
    'Ulf',
    'Ulysses',
    'Urban',
    'Vivian',
    'Walter',
    'William',
    'Wilfred',
    'Xavier',
    'Yorick',
    'Zachariah',
    'Zargothrax'
];

const female_first_names = [
    'Anna',
    'Abella',
    'Alys',
    'Alice',
    'Anya',
    'Beatrix',
    'Brienne',
    'Catrin',
    'Catherine',
    'Catarina',
    'Cecily',
    'Cersei',
    'Clarissa',
    'Constance',
    'Eleanor',
    'Elara',
    'Elizabeth',
    'Freya',
    'Guinevere',
    'Gwyneth',
    'Honor',
    'Imogen',
    'Isabel',
    'Isabella',
    'Isolde',
    'Isobel',
    'Johanna',
    'Josephine',
    'Katherine',
    'Leona',
    'Lillian',
    'Maeve',
    'Mavis',
    'Megan',
    'Miquella',
    'Margareth',
    'Margaery',
    'Malenia',
    'Myrcella',
    'Nicolette',
    'Oriana',
    'Philippa',
    'Priscilla',
    'Rosemary',
    'Sabine',
    'Seraphina',
    'Sibylla',
    'Sigrid',
    'Theodora',
    'Thyra',
    'Ursula',
    'Valentina',
    'Veronica',
    'Viola',
    'Willa',
    'Winifred',
    'Ysabel',
    'Ysolda',
    'Zenobia',
    'Beatrice',
    'Fiona',
    'Gwen',
    'Kathryn',
    'Penelope',
    'Siena',
    'Tallulah'
];

const last_names = [
    'Abernathy',
    'Ackermann',
    'Blackwood',
    'Bowyer',
    'Baylish',
    'Berethian',
    'Bjornsen',
    'Bolton',
    'Brocklehurst',
    'Chamberlain',
    'Chapman',
    'Clarke',
    'Clegain',
    'Crawford',
    'Davenport',
    'Everett',
    'Evans',
    'Falconer',
    'Farthing',
    'Fletcher',
    'Fordham',
    'Gardiner',
    'Grimes',
    'Glover',
    'Gloucester',
    'Grant',
    'Graves',
    'Greenwood',
    'Hammet',
    'Hawkins',
    'Heathcote',
    'Henderson',
    'Hilltop',
    'Howard',
    'Hetfield',
    'Hunter',
    'Jennings',
    'Knight',
    'Lancaster',
    'Lennistar',
    'Locksmith',
    'Longfellow',
    'McGregor',
    'MacKenzie',
    'Marshall',
    'Miller',
    'Manson',
    'Montgomery',
    'Moore',
    'Morgan',
    'Morris',
    'Nelson',
    'Norrington',
    'Northwind',
    'Oakley',
    'Osbourne',
    'Parker',
    'Pembroke',
    'Potter',
    'Preston',
    'Reeve',
    'Richards',
    'Riddle',
    'Robinson',
    'Rosewood',
    'Sanders',
    'Shepherd',
    'Redfield',
    'Sherwood',
    'Smith',
    'Somerset',
    'Spencer',
    'Stark',
    'Stafford',
    'Stonebridge',
    'Sullivan',
    'Sutton',
    'Talbot',
    'Taylor',
    'Thornton',
    'Townsend',
    'Underwood',
    'Umber',
    'Ulrich',
    'Villiers',
    'Valentine',
    'Valaryen',
    'Walker',
    'Wallace',
    'Ward',
    'Westbrook',
    'Whitehead',
    'Whittaker',
    'Wilkinson',
    'Williams',
    'Willowbrook',
    'Windsor',
    'Winterbottom',
    'Woodward'
];

function generateHumanName(id_gender){
    let generated_human_name = '';

    if(id_gender == 0){
        generated_human_name = female_first_names[Math.floor(Math.random() * female_first_names.length)];
    } else {
        generated_human_name = male_first_names[Math.floor(Math.random() * male_first_names.length)];
    }

    return generated_human_name + ' ' + last_names[Math.floor(Math.random() * last_names.length)];
}