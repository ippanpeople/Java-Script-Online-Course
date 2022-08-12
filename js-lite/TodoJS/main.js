let submit = document.getElementById('submit')
let result = document.getElementById('result')

submit.addEventListener('click', function(){
    let input = document.getElementById('input').value

    // console.log(input)
    
    if(input !== ''){
        let list = document.createElement('li')
        list.innerHTML = input + "<button>delete</button>"
        result.appendChild(list)
        document.getElementById('input').value = ''
    }else{
        alert("value is empty !!")
    }
})

//在父元素（ul）上綁定動態事件
result.addEventListener('click', function(e){
    console.log(e.target.parentNode.parentNode)
    e.target.parentNode.parentNode.removeChild(e.target.parentNode)
})
