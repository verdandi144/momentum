const quotes = [
    {
        quote: "Don't laugh at a youth for his affectations; he is only trying on one face after another to find his own.",
        author: "Logan Pearsall Smith",
    },
    {
        quote: "We all have big changes in our lives that are more or less a second chance.",
        author: "Harrison Ford",
    },
    {
        quote: "Whenever you are asked if you can do a job, tell 'em, 'Certainly I can!' Then get busy and find out how to do it.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "To acquire knowledge, one must study; but to acquire wisdom, one must observe.",
        author: "Marilyn vos Savant",
    },
    {
        quote: "Our critics are our friends; they show us our faults.",
        author: "Benjamin Franklin",
    },
    {
        quote: "The merit of an action lies in finishing it to the end.",
        author: "Genghis Khan",
    },
    {
        quote: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
        author: "Abigail Adams",
    },
    {
        quote: "We are born charming, fresh and spontaneous and must be civilized before we are fit to participate in society.",
        author: "Judith Martin",
    },
    {
        quote: "The tragedy of life is what dies in the hearts and souls of people while they live.",
        author: "Albert Einstein",
    },
    {
        quote: "Those who are believed to be most abject and humble are usually most ambitious and envious.",
        author: "Baruch Spinoza",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;