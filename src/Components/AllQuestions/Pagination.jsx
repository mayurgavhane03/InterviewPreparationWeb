import { useEffect, useState } from "react";
import { questions } from "../AllQueAnsData";
import MainDisplay from "../MainDisplay";
import QuestionDisplay from "../QuestionDisplay";

const Page = () => {
  const [data, setData] = useState([]); // Initialize state to an empty array
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = "https://dummyjson.com/products?limit=100";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.products); // Update state with the fetched data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  const SelectPageHandler = (selectedPage) => {
    const totalPages = Math.ceil(data.length / 10); // Should use data.length instead of products.length
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      // Check data.length
      setPage(selectedPage);
    }
  };

  return (
    <div className="flex flex-wrap">
      {data.length > 0 && (
        <div className="flex flex-wrap">
          {data.slice(page * 10 - 10, page * 10).map((pro) => (
            <div key={pro.id} className="p-4 w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
              <div className="border rounded-lg overflow-hidden">
                <img
                  className="w-full cursor-pointer h-48 object-cover"
                  src={pro.thumbnail}
                  alt={pro.title}
                />
                <h1 className="font-bold text-center mt-2">{pro.title}</h1>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.length > 0 && (
        <div className="items-center justify-center relative flex">
          <span
            onClick={() => SelectPageHandler(page - 1)}
            className={
              "cursor-pointer " + (page === 1 ? "text-gray-400" : "text-black")
            }
          >
            ⬅️
          </span>
          <span className="text-white flex">
            {[...Array(Math.ceil(data.length / 10))].map((_, i) => (
              <span
                onClick={() => SelectPageHandler(i + 1)}
                className={
                  "m-2 rounded items-center justify-center p-2 cursor-pointer " +
                  (page === i + 1
                    ? "bg-gray-50 text-black"
                    : "bg-black text-white")
                }
                key={i}
              >
                {i + 1}
              </span>
            ))}
          </span>
          <span
            onClick={() => SelectPageHandler(page + 1)}
            className={
              "cursor-pointer " +
              (page === Math.ceil(data.length / 10)
                ? "text-gray-400"
                : "text-black")
            }
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="ml-[200px]">
      <QuestionDisplay question={questions.Pagination.QuestionName} />
      <MainDisplay code={questions.Pagination.QuestionAnswer} Output={Page} />
    </div>
  );
};

export default Pagination;
