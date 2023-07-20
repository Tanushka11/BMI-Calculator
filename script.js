const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height  = parseInt(document.querySelector('#height').value);
    const weight  = parseInt(document.querySelector('#weight').value);
    const results  = document.querySelector('#results');
    const conclusion  = document.querySelector('#conclusion');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML =`please give valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML =`please give valid weight ${weight}`
    }
    else{
        const  bmi = (weight/((height * height )/1000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.6){
            conclusion.innerHTML = "YOU ARE UNDER WEIGHT"
        }else if(bmi > 18.6 && bmi < 24.9){
            conclusion.innerHTML = "YOU ARE UNDER NORMAL"
        }
        else if(bmi > 24.9){
            conclusion.innerHTML = "YOU ARE OVERWEIGHT"
        }
    }
    
       
    });