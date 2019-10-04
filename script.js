const url = `https://api.openbrewerydb.org/breweries?`;
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const input = document.querySelector("input")
const button = document.querySelector("button")
// const brewery_type = document.querySelector("");
const beerList = document.querySelector(".beer-list")


button.addEventListener('click', async function () {

  const response = await axios.get(`${url}by_state=${input.value}`)
  console.log(response);
  let beerData = response.data

  renderBeerList(beerData);
})



const renderBeerList = (beers) => {

  beerList.innerHTML = "";

  beers.forEach((beer) => {
    let elem = document.createElement("div")
    elem.className = "content";
    elem.innerHTML = `
    <h2>${beer.name}</h2> 
    <h2>State ${beer.state}</h2>
     <a href=${beer.website_url} target="_blank">Link</a>`;

    beerList.append(elem)
  });
};

