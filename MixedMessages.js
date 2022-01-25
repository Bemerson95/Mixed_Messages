//Arrays that stores adjectives, nouns and verbs to create a random joke
let adjective = ["Short","chubby","lazy", "Stumpy"]
let noun = ["Girl","Cat","Corgi"];
let verb = ["Jump", "Run", "Fetch"];

//Function that displays different jokes everytime it's run by taking a adjective, noun and verb from 3 different arrays.
let mixedMessages = (adj, noun, verb) => {
    //thsese variables take in a specific parameter which hols an array, and then stores a random index number.
   const randomAdjective = Math.floor(Math.random() * adj.length)
   const randomNoun = Math.floor(Math.random() * noun.length)
   const randomVerb = Math.floor(Math.random() * verb.length)
    
   console.log(`The ${noun[randomNoun]} is trying to ${verb[randomVerb]} but it's too ${adj[randomAdjective]} to do so.`)
};

mixedMessages(adjective, noun, verb);