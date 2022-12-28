const CardSearch = ({ poster, title, year }) => {
  return (
    <div className="text-black flex items-center gap-2 cursor-pointer">
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} width="80px"/>
      <div>
        <h1>{title}</h1>
        <p>{year}</p>
      </div>
    </div>
  )
}

export default CardSearch