//Inspirtaional space quotes that will be used on this project.
let spaceQuotes = ["That's one small step for a man, one giant leap for mankind.", "The stars don't look bigger, but they do look brighter.",
"The Universe is under no obligation to make sense to you."];

//Function that displays different messages everytime it's run
let mixedMessages = Array => {
    const messages = Math.floor(Math.random() * Array.length)
    return Array[messages]
};

console.log(mixedMessages(spaceQuotes));node