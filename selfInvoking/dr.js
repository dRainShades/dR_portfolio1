const list1 =[ "programmer.....😀", "backend developer.....😉", "frontend developer.....😄" ];
let count = 0;
let list2 = 0;
let current = '';
let words = '';

(function ngetik(){
   
    if(count == list1.length){
        count=0;
    }

    current = list1[count];

    words = current.slice(0, ++list2);
    document.querySelector('.writing').textContent = words;

     if(words.length == current.length){
         count++;
         list2 = 0;
     }

    setTimeout(ngetik,120)

})();