const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page < lastPage) {
    setPage((currentState) => currentState + 1);
    scrollTop();
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((currentState) => currentState - 1);
      scrollTop();
    }
  };

  return (
    <div className="pt-6 flex justify-center">
      <div className="join">
        <button className="join-item btn btn-warning" onClick={handlePrevPage}>
          Prev
        </button>
        <button className="join-item btn btn-warning">
          {page} of {lastPage}
        </button>
        <button className="join-item btn btn-warning" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
