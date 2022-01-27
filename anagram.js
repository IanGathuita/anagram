function check_anagram(string1,string2){
    if(string1.length !== string2.length){
        console.log("Strings must have the same length");
        return false;
    }
    let string_1_sorted = string1.split("").sort().join("");
    let string_2_sorted = string2.split("").sort().join("");
    if(string_1_sorted ==string_2_sorted){
        return true;        
    }
    else{
        return false;
    }

}
let is_anagram = check_anagram("triangle","integral");
console.log(is_anagram);