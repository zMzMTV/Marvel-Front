import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import ReactPaginate from "react-paginate";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 100;
  const [pageMax, setPageMax] = useState(0);

  const handleClickPage = (event) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get("https://localhost:3001/comics");
      setData(response.data);
      setIsLoading(false);
    };
    fecthData();
  }, []);
  return isLoading ? (
    <Loader
      className="loader"
      type="TailSpin"
      color="red"
      height={200}
      width={200}
      timeout={3000}
    />
  ) : (
    <div className="home-card-wrapper">
      {data.data.results.map((comic, index) => {
        return (
          <div key={index}>
            <div className="card-container">
              <span className="char-name">{comic.title}</span>
              <img
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt="Marvel characters"
                className="marvel-char"
              />
            </div>
          </div>
        );
      })}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageMax}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handleClickPage}
        containerClassName={"pagination"}
        subContainerClassName={"pages"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Comics;
