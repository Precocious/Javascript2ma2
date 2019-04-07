//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

    function menu() {
        this.meal1 = "Ham and Cheese Sandwich",
        this.meal2 = "Roastbeef Sandwich"
    }

    menu.prototype.ordre = function() {
        console.log("The menu consist of " + this.meal1 + " and " + this.meal2 + ".");
    };

    var cafe = new menu ();
    cafe.ordre();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

    var numbers = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
    ]

    console.log(numbers.slice(4, 5));

//3. Delete the last number in the array that you created above.

    numbers.pop();

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

    <p>Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.</p>
    
    var berryToBana = document.getElementsByTagName("p");
    for (var strawberry = 0; strawberry < berryToBana.length; strawberry++) {
        berryToBana[berry].innerhtml = "banana";
    }


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.


//7. Create a simple function that logs the date.

    var logDate = new Date();
    console.log(logDate);