import Movie from "./Movie";

const MovieList = ({ data, setSingleMovie }) => {
  return <Movie data={data} setSingleMovie={setSingleMovie} />;
};
export default MovieList;
