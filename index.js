// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(Ralph) {
    cats.push("Ralph")
    console.log(Ralph)
}

(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
    console.log(Bob)
  }
(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveLastCat(){
    cats.pop()
    console.log(cats)
  }

  (function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveFirstCat() {
    cats.shift()
    console.log(cats)
  }

  (function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
  });

  function appendCat(Broom) {
    const appendCat = [...cats, "Broom"];
     return appendCat;
  }

  (function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
  });

  function prependCat(Arnold) {
     const prependCat = ["Arnold", ...cats];
     return prependCat;
  }


  (function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
  });


  function removeLastCat() {
    cats.slice(0, -1);
    return cats.slice(0, -1)
  }

  (function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
  });

  function removeFirstCat() {
    cats.slice(1);
    return cats.slice(1)
  }
