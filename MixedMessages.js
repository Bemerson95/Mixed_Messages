//Arrays that stores adjectives, nouns and verbs to create a random joke
let adjective = ["Short","chubby","lazy", "Stumpy"]
let noun = ["Girl","Cat","Corgi"];
let verb = ["Jump", "Run", "Fetch"];

//Function that displays different jokes everytime it's run
let mixedMessages = (adj, noun, verb) => {
   const randomAdjective = Math.floor(Math.random() * adj.length)
   const randomNoun = Math.floor(Math.random() * noun.length)
   const randomVerb = Math.floor(Math.random() * verb.length)

   console.log(`The ${noun[randomNoun]} is trying to ${verb[randomVerb]} but it's too ${adj[randomAdjective]} to do so.`)
};

mixedMessages(adjective, noun, verb);