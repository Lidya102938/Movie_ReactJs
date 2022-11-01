const Card = ({ title, year, poster }) => {
  return (
    <div className="">
      <a href="#">
        <img src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="image"
          width={"250px"}
          className="border-2 border-[gray] rounded-[20px] duration-500 hover:scale-110"
        />
        <h1 className="font-bold ">{title}</h1>
        <p className="">{year}</p>
      </a>
    </div>
  );
};

export default Card