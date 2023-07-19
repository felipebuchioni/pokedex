const form = document.getElementById('searchForm')
const pokeImage = document.getElementById('pokeImage')
const pokeNumber = document.getElementById('pokeNumber')
const pokeName = document.getElementById('pokeName')
let searchPokemon = 1

const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const pokeInput = event.target[0]
  const pokeConvert = pokeInput.value.toLowerCase()

  buscarPokemon(pokeConvert)

  pokeInput.value = ''
})

async function buscarPokemon(pokemon) {

  pokeImage.src = '../img/pokeball-giff.gif'

    const pokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(pokeAPI)

    if (pokeAPI['ok'] == false) {
      alert('Nome ou número inserido inexistênte!')
      pokeNumber.innerText = ''
      pokeName.innerText = ''
      pokeImage.src = ''
    }

    const APIResponse = await pokeAPI.json()

    searchPokemon = APIResponse.id
    pokeNumber.innerText = APIResponse.id
    pokeName.innerText = APIResponse.name.toUpperCase()
    pokeImage.src = APIResponse['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
  
}

prevBtn.addEventListener('click', () => {
  searchPokemon -= 1
  buscarPokemon(searchPokemon)
})

nextBtn.addEventListener('click', () => {
  searchPokemon += 1
  buscarPokemon(searchPokemon)
})

