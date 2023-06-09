const form = document.querySelector("form"); //grab the form
form.addEventListener("submit", convertUSDtoWon) //listen for submit or onsubmit

function convertUSDtoWon(event) { //conversion
    event.preventDefault() //stop form from refreshing page
    const usd = (event.target.usd.value) //get form value
    const won = usd / 0.00078 // convert to won
    //Now display on page:
    document.querySelector('h2').innerText =  
    "$ " + usd.toLocaleString("en-US") + " USD is equal to " + won.toLocaleString(2) + " Korean Won " //.toFixed(2) format a number to a specific decimal place.
}
