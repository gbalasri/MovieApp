let url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d0b5b05e6bb0d6fcc5dab43520d466a4";
let api_key="d0b5b05e6bb0d6fcc5dab43520d466a4";

let imgurl="https://image.tmdb.org/t/p/w500/";
async function getMovieData()
{
    var res=await fetch(url);
    var data=await res.json();
    console.log(data.results);
    showmovies(data.results)
}
getMovieData();
let maindiv=document.getElementById("maindiv");
console.log(maindiv);
function showmovies(movie)
{
    //maindiv.innerHTML="";
    movie.map((element)=>{
        console.log(element);
        let moviediv=document.createElement('div');
    moviediv.classList.add("col","movie");
    moviediv.innerHTML=`<div class="card h-100">
    <img src=${imgurl+element.poster_path} class="card-img-top" alt="...">
    <div class="card-body">
        <div class="d-flex justify-content-between">
      <h5 class="card-title">${element.title}</h5>
      <h5 class='${colourvote(element.vote_average)}'>${element.vote_average}</h5>
      </div>
      
      <div class="card card-header overview">
        <div> Overview</div>
        <p>${element.overview}</p>
      </div>
    </div>
  </div>`
  maindiv.append(moviediv);

    })
      
}
function colourvote(vote)
{
    if (vote>=7)
    return "green";
    else if(vote>=6)
    return "orange";
    else if(vote>=5)
    return "red";
}