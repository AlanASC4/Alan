var list = ["converse", "van", "levi", "air jordan", "nike", "yeezys", "addidas", "rebox", "bew balance", "polo", "pucci", "crocs", "payless", "sperry", "dc"];

console.log(list.sort());
console.log(binarySearch("air jordan", list));

// perform a binarysearch to find the position in the array
function binarySearch(searchElement, searchArray) {
    'use strict';

   var stop = searchArray.length;
    var last, p = 0,
        delta = 0;

   do {
        last = p;

       if (searchArray[p] > searchElement) {
            stop = p + 1;
            p -= delta;
        } else if (searchArray[p] === searchElement) {
            // FOUND A MATCH!
            return p;
        }

       delta = Math.floor((stop - p) / 2);
        p += delta; //if delta = 0, p is not modified and loop exits

   }while (last !== p);

   return -1; //nothing found

};