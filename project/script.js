
const RATE = 90;

/*------------------------------inr into usd-------------------------------------*/


function convertCurrency() {
    const inr = document.getElementById("inr").value;
    const result = document.getElementById("usdResult");

    if (inr === "") {
        result.innerText = "Please enter amount";
        return;
    }

    const usd = (inr / RATE).toFixed(2);
    result.innerText = `USD: $${usd}`;
}


/*------------------------------BMI -------------------------------------*/


function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const heightCm = document.getElementById("height").value;
    const result = document.getElementById("bmiResult");

    if (weight === "" || heightCm === "") {
        result.innerText = "Enter weight and height";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);

    result.innerText = `BMI: ${bmi}`;
}
