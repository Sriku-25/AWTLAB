const fetchmovies = ()=>{
    fetch("https://imdb-api.com/en/API/MostPopularMovies/k_8m59m55i")
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        //data.items.forEach(ele=>{
         //   console.log(movies.title)
          //  console.log(movies.imbdrating)
       // })
       console.log(data)
    })
    .catch(err=>{
        console.log(err);
    })  
}