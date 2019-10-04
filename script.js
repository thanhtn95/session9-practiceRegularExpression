let result = document.getElementById("result");

function check() {
    let regex = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/;
    let input = document.getElementById("inp");
    if (regex.test(input.value)) {
        result.innerText = " Valid";
    } else result.innerText = " Invalid";
    input.focus();
}

function check2() {
    let count = 0;
    let input = document.getElementById("inp").value;
    let regex = /^[0-9]$/;
    for (let i = 0; i < input.length; i++) {
        if (!regex.test(input[i])) {
            count++;
        }
    }
    result.innerText = count;
}

function check3() {
    let input = document.getElementById("inp").value;
    let count1 = 0;
    let count2 = 0;
    let regex = /^[oeaiuAOEIU]$/;
    for (let i = 0; i < input.length; i++) {
        if (regex.test(input[i])) {
            count1++;
        } else count2++;
    }
    result.innerText = "vowel: " + count1 + " , consonant: " + count2;
}

function check4() {
    let input = document.getElementById("inp").value;
    let regex = /^[0-9]{6}$/;
    if (regex.test(input)) {
        result.innerText = "Valid";
    } else result.innerText = "InValid";
}