async function getPokemons(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json()).then(data => {
            resolve(data)
        });
    });
}

export default getPokemons;