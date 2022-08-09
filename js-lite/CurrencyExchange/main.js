{
    let optionSelect = document.getElementById('option-select')
    let bt = document.getElementById('submit-btn')

    bt.addEventListener('click', function() {
        let option = optionSelect.value
        let currency = document.getElementById('currency').value
        let result = document.getElementById('result')

        // console.log(currency + option)

        if(isNaN(currency) === true || currency === ''){
            result.innerHTML = '<h4>ERROR!!</h4>'
        }else{
            if(option === 'nt2us'){
                currency = parseFloat(currency) / 30
                result.innerHTML = '<h4>US' + currency.toFixed(2) + '</h4>'
            }else{
                currency = parseFloat(currency) * 30
                result.innerHTML = '<h4>NT' + currency.toFixed(2) + '</h4>'
            }
        }
    })
}