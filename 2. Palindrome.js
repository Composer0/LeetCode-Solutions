function palindromeChecker(arr) {
    //fill in here
    arr.forEach(element => {
        element = element.toLowerCase();
        element = element.replace(/\s/g, '');
        newElement = element.split('').reverse().join('');

        if(newElement == element) {
            console.log("palindrome found")
            return true;
        } else {
            console.log("doesn't match specifications")
            return false;
        }
    });
}

arr = ["The quick brown fox jumped over the sleeping dog", "Oozy rat in a sanitary zoo", "Carla loves chocolate"]

palindromeChecker(arr);