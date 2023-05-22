import { Fragment, useEffect, useState } from "react";
import MovieList from "./MovieList";
import axios from "axios";
import { Row } from "react-bootstrap";
const Home = () => {
  const [printingData, setPrinitngData] = useState([]);
  const [singleMovie, setSingleMovie] = useState({});
  useEffect(() => {
    fetchTrendingHandler();
  }, []);
  const fetchTrendingHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_LOCAL_SERVER}trending?api_key=${process.env.API_KEY}`
      );
      console.log(res.data.message);
      setPrinitngData(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      {/* <Button onClick={fetchTrendingHandler}>Fetch Data</Button> */}
      <Row>
        {printingData.length &&
          printingData.map((dataItem) => (
            <MovieList
              key={dataItem.id}
              data={dataItem}
              setSingleMovie={setSingleMovie}
            />
          ))}
      </Row>
    </Fragment>
  );
};
export default Home;
