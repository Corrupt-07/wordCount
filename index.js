console.log("this is index.js")

function checkFunc() {
    console.log("typing");
    const enteredWords = document.querySelector('#enteredWords').value;
    // const dispWordsCount = 
    let result1 = [];
    let result2 = [];
    // console.log(enteredWords);
    var dataStatments = enteredWords.split(" ");
    var dataWords = enteredWords.split("");
    if (enteredWords != "") {
        for (let el1 of dataStatments) {
            if (/[a-zA-Z0-9]+/.test(el1)) {
                result1.push(el1);
                // console.log(result1.length);
            }
        }
            for (let el2 of dataWords) {
                if (/[a-zA-Z0-9]+/.test(el2)) {
                    result2.push(el2);
                    // console.log(result2.length);
                }
            }
            document.querySelector('#dispWordsCount').innerText = `No Words in above statements are ${result1.length} and letters are ${result2.length}`;
    }
    else {
        document.querySelector('#dispWordsCount').innerText = `No Words in above statements are 0  and letters are 0`;
    }


}
