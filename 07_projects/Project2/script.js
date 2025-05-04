const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();


    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        // console.log("if")
        results.innerHTML = `please give a valid height ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        // console.log("else if")
        results.innerHTML = `please give a valid weight ${weight}`
    }
    else{
        // console.log("else")
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);

        // results.innerHTML = `<span>${bmi}</span>`
        results.style.fontSize = '34px'

        if(bmi<18.6){
            results.innerHTML = `<span>${bmi}</span> <div>You are Under the Weight</div>`
        }
        else if(bmi>18.6 && bmi<24.9){
            results.innerHTML = `<span>${bmi}</span> <div>Your Weight in Normal range</div>`
        }
        if(bmi>24.9){
            results.innerHTML = `<span>${bmi}</span> <div>You are OverWeighted</div>`
        }
    }
})