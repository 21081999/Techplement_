
const quotes = {
    "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
    "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
    "- Will Rogers": '"Don not Let Yesterday Take Up Too Much Of Today."',
    "- Matthew Hagee": '"It takes more courage to be humble than it does to be prideful."',
    "- Vince Lombardi": '"It is Not Whether You Get Knocked Down, It is Whether You Get Up."',
    "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
    "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
    "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
    "- Babe Ruth": '"Every strike brings me closer to the next home run."',
    "- John Lennon": '"Life is what happens to you while you are busy making other plans."',
    "- Earl Nightingale": '"We become what we think about."',
    "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
    "- Woody Allen": '"Eighty percent of success is showing up."',
    "- Steve Jobs": '"Your time is limited, so don not waste it living someone else life."',
    "- Vince Lombardi": '"Winning is not everything, but wanting to win is."',
    "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
    "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    "- Maya Angelou": '"I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    "- Jim Rohn": '"Either you run the day, or the day runs you."',
    "- Frank Sinatra": '"The best revenge is massive success."',
    "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
    "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."',
    "- Rick Warren": '"True humility is not thinking less of yourself; it is thinking of yourself less."'
};


document.querySelector("#generate").addEventListener("click", () => {
    generate();
});

function generate() {
    // grab all the keys in the dictionary (authors) and store in an array
    const authors = Object.keys(quotes);
    // grab a random key (author) and store it in author
    const author = authors[Math.floor(Math.random() * authors.length)];
    // grab the value(quote) that belongs to that key
    const quote = quotes[author]

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
}

window.onload = function () {
    generate()
}
