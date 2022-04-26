// class is a blueprint, defines the methods and the properties that the object CAN have, but it doesn't give it any data or information
// object is an instance of a class. A specific version of a class that has all the extra info filled in such as the different values for the property and what all the methods are going to return.
// new keyword. how we take a class and turn it into an object. To do that we use the constructor inside the class


// https://youtu.be/5AWRivBk0Gw
class House {
    constructor(color, price) {
        this.color = color
        this.price = price
    }

    getFurniture() {
        return 'sofa'
    }
}

const houseObject = new House('red', 228.000);
const houseObject2 = new House('blue')

// console.log(houseObject.color);
// console.log(houseObject.getFurniture());
// console.log(houseObject2.color);
// console.log(houseObject2.getFurniture());








///https://www.youtube.com/watch?v=gvicrj31JOM


const video = {
    title: 'a',
    //play is a method in the video object
    play() {
        //'this' represents the object itself
        console.log(this);
    }
};

video.play();
//------------------------------------------
//stop is a method in the video object. 
video.stop = function () {
    console.log(this);
}

video.stop();

//------------------------------------------
// when dealing with a regular function: this keyword by default references to the global object

function playVideo() {
    //this will return a global
    console.log(this);
}

console.log(playVideo);


// constructor function
function Videoo(title) {
    this.title = title;
    console.log(this);
}

//if you call a function using the new operator (which is the case for construction functions) this will reference a new empty object.
const v = new Videoo('the movie');

const tape = {
    title: 'the tape',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this)
    }
}

tape.showTags();