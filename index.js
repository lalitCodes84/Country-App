// Fetching data from server 

async function getData() {
    let response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries");
    let data = await response.json();
    return data;
}

// Calling getData function and then using the data to create cards
getData().then(res => {
    let data = res.data;
    for (let i in data) {
        // Creating div element for card here
        let card = document.createElement("div");
        card.setAttribute("id", "card");

        // Creating all elements for country card here
        let countryName = document.createElement("h2");
        countryName.innerText = "Country : " + data[i].country;
        let rank = document.createElement("p");
        rank.innerText = "Rank : " + data[i].Rank;
        let id = document.createElement("p");
        id.innerText = "ID : " + data[i].id;
        let population = document.createElement("p");
        population.innerText = "Population : " + data[i].population;

        // Appending all elements to card here
        card.appendChild(countryName);
        card.appendChild(rank);
        card.appendChild(id);
        card.appendChild(population);
        document.getElementById("root").append(card);
    }
});
