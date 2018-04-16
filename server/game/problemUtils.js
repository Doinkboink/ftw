const utils = {};

/*
READ ME BEFORE YOU EDIT PROBLEMS

Answer must be in the form of a String. This means "" + a, as opposed to just a. 

*/
utils.getProblem = function () {
    let g = Math.floor(22 * Math.random());

    if (g >= 0 && g < 3) {
        let a = Math.floor(200 * Math.random());
        let b = Math.floor(100 * Math.random());
        return {
            text: "What is the value of " + a + " + " + b + "?",
            answer: "" + (a + b)
        };
    }
    if (g >= 3 && g < 6) {
        let a = Math.floor(200 * Math.random());
        let b = Math.floor(150 * Math.random());
        return {
            text: "What is the value of " + a + " - " + b + "?",
            answer: "" + (a - b)
        };
    }
    if (g >= 6 && g < 8) {
        let a = Math.floor(30 * Math.random());
        let b = Math.floor(20 * Math.random());
        return {
            text: "What is the value of " + a + " * " + b + "?",
            answer: "" + (a * b)
        };
    }
    if (g >= 8 && g < 10) {
        let a = Math.floor(500 * Math.random());
        let b = Math.floor(11 * Math.random()) + 2;
        return {
            text: "What is the value of " + a + " mod " + b + "?",
            answer: "" + (a % b)
        };
    }
    if (g === 10) {
        let a = Math.floor(480 * Math.random()) + 20;
        let b = Math.floor(5 * Math.random()) + 2;
        return {
             text: "What is the largest integer x such that " + b + " to the x is less than " + a + "?",
            answer: "" + Math.floor(Math.log(a) / Math.log(b))
        };
    }
    if (g >= 11 && g < 13) {
        let a = Math.floor(45 * Math.random()) + 5;
        return {
            text: "What is the sum of the first " + a + " integers?",
            answer: "" + a * (a + 1) / 2
        };
    }
    if (g >= 13 && g < 16) {
        let a = Math.floor(41 * Math.random()) - 20;
        let b = Math.floor(41 * Math.random()) - 20;
        let c = Math.floor(100 * Math.random()) + 1;
        return {
            text: "Solve the equation: " + b + "X + " + c + " = " + (a * b + c),
            answer: "" + a
        };
    }
    if (g >= 16 && g < 18) {
        let a = Math.floor(35 * Math.random()) + 5;
        let b = Math.floor(10 * Math.random()) + 1;
        let c = Math.floor(15 * Math.random()) + 5;
        return {
            text: "If Bobert the builder can build " + a + " houses in " + b + " days, how many completed houses can Bobert build in " + c + " days?",
            answer: "" + Math.floor(a * c / b)
        };
    }
    if (g >= 18 && g < 20) {
        let a = Math.floor(10 * Math.random()) + 1;
        let b = Math.floor(50 * Math.random()) + a;
        let c = Math.floor(2 * Math.random());
        return {
            text: "Alex and Bobert take turns taking between 1 and " + a + " sticks from a pile starting from " + b + ". If the last person to take a stick wins, and " + ((c === 1)?"Alex":"Bobert") + " goes first, who wins?",
            answer: (b % (a + 1) === 0) ? ((c === 1)?"Alex":"Bobert") : ((c === 1)?"Bobert":"Alex")
        };
    }
    if (g >= 20 && g < 23){
        let a = 4;
        let b = 4;
        isPrime = function (n) {
            if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
            var m=Math.sqrt(n);
            for (var i=2;i<=m;i++) if (n%i==0) return false;
            return true;
        }
        while (!isPrime(a)){let a = Math.floor(50 * Math.random());}
        while (!isPrime(b) || b === a){let b = Math.floor(40 * Math.random());}
        return {
            text: "What is the sum of the prime factors of " + (a * b),
            answer: "" + (a + b)
        };
    }
    if (g >= 23 && g < 25){
        let a = 4;
        let b = 4;
        let c = 4;
        isPrime = function (n) {
            if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
            var m=Math.sqrt(n);
            for (var i=2;i<=m;i++) if (n%i==0) return false;
            return true;
        }
        while (!isPrime(a)){let a = Math.floor(20 * Math.random());}
        while (!isPrime(b) || b === a){let b = Math.floor(20 * Math.random());}
        while (!isPrime(c) || c === a || c === b){let c = Math.floor(20 * Math.random());}
        return {
            text: "What is the sum of the prime factors of " + (a * b * c),
            answer: "" + (a + b + c)
        };
    }
    //this part should never actually run?
    let a = Math.floor(100 * Math.random());
    return {
        text: "wot is " + a + "?",
        answer: "" + (a)
    };
}

module.exports = utils;
