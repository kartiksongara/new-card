import "./style.css"
const ShowCard=(prop)=>{
    return(
        <div> <div className=' bg-primary d-flex mb-5 flex-column  justify-content-start' className="demo" style={{width:"300px", borderRadius:"20px"}}>
                    <img src={prop.img}/>
                    <h5>moviename :{ prop.moviename}</h5>
                    <h5>genre : {prop.genre}</h5>
                    <h5>duration : {prop.duration}</h5>
                    <h5>year : {prop.year}</h5>
                    <h5>actors : {prop.actors}</h5>
                    <h5>language : {prop.language}</h5>
                     
                </div>
                </div>
    )
}
export default ShowCard