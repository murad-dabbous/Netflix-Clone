import Movie from "./Movie";

const MovieList = ({ data, setSingleMovie }) =>
  // return <Movie data={data} setSingleMovie={setSingleMovie} />;

  data.length &&
  data.map((dataItem) => (
    <Movie key={dataItem.id} data={dataItem} setSingleMovie={setSingleMovie} />
  ));
export default MovieList;
