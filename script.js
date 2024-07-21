const btn = document.getElementById('check-btn');
const user_inputvalue = document.getElementById('text-input');

const showResultDiv = () => {
    let getDiv = document.getElementById('result');
    getDiv.classList.remove('hide');
}

const hideResultDiv = () => {
    let getDiv = document.getElementById('result');
    getDiv.classList.add('hide');
    user_inputvalue.value = "";
}


const getUserInput = () => {
    const input_text = user_inputvalue.value;

    const checkNumPalin = (a) => { 
        let palin;
        // Converting to Lower Case
        a = a.toLowerCase();
        
        // Ignoring punctuation and spacing
        for (letter of a) {
            if (letter == " ") {
                a = a.replace(" ", "");
            } else if (letter == ".") {
                a = a.replace(".", "");
            } else {
                console.log("Ignored...")
            }
        }

        // console.log(a);

        for (let i = 0; i < a.length / 2; i++){
            
            if (a[i] == a[a.length - (i + 1)]) { 
                palin = true;
            } else {
                palin = false;
                break;
            }
        }

        if (palin === true) {
            let showResult = document.getElementById('result_text');
            showResult.innerText = "It's a palindrome";
            showResultDiv();
        } else {
            let showResult = document.getElementById('result_text');
            showResult.innerText = "It's not a palindrome";
            showResultDiv();
        }
    }


    const checkPalin = (arg) => {
        const arg_length = arg.length;
        if (arg_length > 2) {
            checkNumPalin(arg);
        } else {
            window.alert("Invaild Input")
        }
        
    }
    checkPalin(input_text);
}
btn.addEventListener('click', getUserInput);
let okBtn = document.querySelector('.button');
okBtn.addEventListener('click', hideResultDiv);