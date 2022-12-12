const TOKEN = "625053af7b8ec3c1711c8002e14054b3a2f0263c"

export default class API {
  
    static updateMovie(movie_id, body){
        return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}/`,{
            method:'PUT',
            headers : {
                'Content-Type':'application/json',
                'Authorization':`Token ${TOKEN}`
            },
            body :JSON.stringify(body)
        }).then(resp => resp.json())
    }
}
