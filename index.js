// نمبر گیس گیم کا کوڈ
function guess() {
    let luckyNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = document.getElementById('numInp').value;
    let resultDisplay = document.getElementById('res1');
    
    if(userGuess == "") {
        resultDisplay.innerHTML = "براہ کرم کوئی نمبر لکھیں!";
        return;
    }

    if(userGuess == luckyNumber) {
        resultDisplay.innerHTML = "🎉 مبارک ہو! آپ جیت گئے۔ نمبر " + luckyNumber + " ہی تھا۔";
        resultDisplay.style.color = "green";
    } else {
        resultDisplay.innerHTML = "❌ اوہ! غلط جواب۔ صحیح نمبر " + luckyNumber + " تھا۔";
        resultDisplay.style.color = "red";
    }
}

// چیٹ بوٹ کا کوڈ
function chat() {
    let message = document.getElementById('chatInp').value.toLowerCase();
    let responseDisplay = document.getElementById('res2');
    
    if(message.includes("salam") || message.includes("سلام")) {
        responseDisplay.innerHTML = "بوٹ: وعلیکم السلام! میں آپ کی کیا مدد کر سکتا ہوں؟";
    } else if(message.includes("hal") || message.includes("حال")) {
        responseDisplay.innerHTML = "بوٹ: میں بالکل ٹھیک ہوں، شکریہ! آپ کیسے ہیں؟";
    } else if(message.includes("naam") || message.includes("نام")) {
        responseDisplay.innerHTML = "بوٹ: میرا نام گیمر بوٹ ہے۔";
    } else {
        responseDisplay.innerHTML = "بوٹ: سن کر اچھا لگا! کچھ اور پوچھنا چاہتے ہیں؟";
    }
}
