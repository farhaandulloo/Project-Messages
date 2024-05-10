// array of UFC fighters
const fighterList = ['Anderson Silva', 'Jon Jones', 'GSP', 'Demetrious Johnson', 'Khabib', 'Conor McGregor', 'Usman', 'Bisping'];

//array of location actions
const locationAction = ['once went to',
                        'once stayed in',
                        'once travelled through',
                        'once performed in'];

// array of locations
const locationList = ['England', 'France', 'Germany', 'Spain', 'Portugal', 'Brazil', 'South Africa', 'Mauritius'];

// array of verbs
const verbList = ['smoked',
                'ate chocolate off',
                'received extremely poor-quality oral sex from',
                 'gave an unwanted sensual massage to',
                'invented Science with',
                'very ineffectually punched',
                'pretended to be',
                'ran away in love with',
               'played Fifa with',
                'roundly insulted',
                'defenstrated',
              'played naked mud wrestling with'];

// array of leaders
const worldLeader = ['Winston Churchill', 
                    'Gandhi', 'Nelson Mandela', 
                    'Julius Caesar', 'Abraham Lincoln', 
                    'Alexander the Great', 'Napoleon', 
                    'Albert Einstein'];

//start of function to create random text
function fighterFacts() {
    //create a random number based on the input array
    function getRandNum(array){
        return Math.floor(Math.random() * array.length);
    }
// choosing random indexes from the different arrays
let fighter = fighterList[getRandNum(fighterList)];
let locationVerb = locationAction[getRandNum(locationAction)];
let location = locationList[getRandNum(locationList)];
let verb = verbList[getRandNum(verbList)];
let leader = worldLeader[getRandNum(worldLeader)];

// add it all together
let fullSentence = `${fighter} ${locationVerb} ${location} and ${verb} ${leader}`;
console.log("Interesting fact:");
console.log(fullSentence);

};

fighterFacts();