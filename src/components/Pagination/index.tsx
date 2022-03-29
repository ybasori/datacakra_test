import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  setPage,
}) => {
  const pagination = (curPage: number, toPage: number) => {
    let distancePage = 1;
    let firstNumbPage = curPage - distancePage;
    if (firstNumbPage <= 0) {
      firstNumbPage = 1;
    }
    let lastNumbPage = curPage + distancePage;

    if (lastNumbPage > toPage) {
      lastNumbPage = toPage;
    }

    let startNumbPage: string[] = [];

    for (let i = 1; i <= 3; i++) {
      startNumbPage = [...startNumbPage, `${i}`];
    }

    let midNumbPage: string[] = [];

    for (let i = firstNumbPage; i <= lastNumbPage; i++) {
      midNumbPage = [...midNumbPage, `${i}`];
    }

    let endNumbPage: string[] = [];

    for (let i = toPage - distancePage; i <= toPage; i++) {
      endNumbPage = [...endNumbPage, `${i}`];
    }

    let numbPage = [...startNumbPage, ...midNumbPage, ...endNumbPage].filter(
      (item, index, self) => self.indexOf(item) === index
    );

    return numbPage;
  };
  return (
    <>
      <nav className="pagination" role="navigation" aria-label="pagination">
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`pagination-previous ${
            currentPage === 1 && "is-disabled"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === totalPage}
          className={`pagination-next ${
            currentPage === totalPage && "is-disabled"
          }`}
        >
          Next page
        </button>
        <ul className="pagination-list">
          {pagination(currentPage, totalPage).map((item, index, self) => (
            <React.Fragment key={`pagination-${index + 1}`}>
              {index !== 0 && Number(self[index - 1]) !== Number(item) - 1 && (
                <li>
                  <span className="pagination-ellipsis">&hellip;</span>
                </li>
              )}
              <li>
                {" "}
                <button
                  onClick={() => setPage(Number(item))}
                  className={`pagination-link ${
                    currentPage === Number(item) && "is-current"
                  }`}
                >
                  {item}
                </button>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
