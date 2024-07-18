const jokeEl = document.getElementById('joke')
const btn = document.getElementById('jokebtn')
const audio = document.getElementById('laugh')

// generateJoke()

btn.addEventListener('click',generateJoke)


async function generateJoke(){
    const config = {
        headers:{
            'Accept': 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com',config)
    const data = await response.json()
    jokeEl.innerHTML = data.joke

    setTimeout(function(){
        audio.play()
    },3000)
}


/*
function generateJoke(){
    const config = {
        headers:{
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com',config).then(response=> response.json()).then(data=> {
        jokeEl.innerHTML = data.joke
    })
}

*/