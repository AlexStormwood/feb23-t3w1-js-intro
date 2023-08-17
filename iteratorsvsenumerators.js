
let pokemonTeam = [
	"pikachu",
	"squirtle",
	"bulbasaur",
	"charmander"
]

// iterator 
for (let index = 0; index < pokemonTeam; index++) {
	console.log("moving through the list of pokemon: " + index);
	console.log("pokemon: " + pokemonTeam[index]);
}

// enumerator
for (const pokemon of pokemonTeam) {
	console.log("pokemon: " + pokemon)
}

