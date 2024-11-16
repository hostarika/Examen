import { movies } from './movies.js';
const qidiruvInp = document.getElementById("qidiruv")
const ota = document.getElementById("ota")
const selectAll = document.getElementById("all")
const selectSort = document.getElementById("sort")
const button = document.getElementById("Search")

console.log(movies[0]);

function moviesView(data) {
    ota.innerHTML = "";
    data.forEach(e => {
        const div = document.createElement("div");
        div.classList.add("bola_card");
        div.innerHTML = `
<img class="movie" src="./img/1200x675mf.jpg.png" alt="movie">
                        <h4>${e.title}</h4>
                        <div class="ota_p">
                            <p class="red">${e.score}  |</p>
                            <p class="yellow">${e.year}  |</p>
                            <p class="green">${e.duration}</p>
                        </div>
                        <p>${e.genre}</p>
                        <button>More info</button>
             `;
        ota.appendChild(div)
    });
}
moviesView(movies)


Search.addEventListener("click", () => {
    if (qidiruvInp.value.trim().length < 1) {
        alert("Hurmatli User biror narsa yozing aks holda you can have problems!!!")
    } else {
        let searchPk = movies.filter(e => e.title.toLowerCase().includes(qidiruvInp.value.toLowerCase().trim()));
        moviesView(searchPk);
    }
})


all.addEventListener("change", () => {
    if (all.value == "All") {
        moviesView(movies)
    } else {
        let searchPk = movies.filter(e => e.genre.toString().includes(all.value));
        moviesView(searchPk)
    }
})

sort.addEventListener("click", () => {
    if (sort.value == "A-Z") {
        let changePokemons = movies.sort((pk1, pk2) => pk1.title.localeCompare(pk2.title));
        moviesView(changePokemons)
    } else {
        let changePokemons = movies.sort((pk1, pk2) => pk2.title.localeCompare(pk1.title));
        moviesView(changePokemons)
    }
})
