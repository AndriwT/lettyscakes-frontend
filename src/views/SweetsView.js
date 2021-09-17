import { useState, useEffect } from "react";
import { getSweetsFromApi } from "../services/sweetService";
import SweetCard from "../components/SweetCard";
import "../App.css";

const SweetsView = () => {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    getSweets();
  }, []);

  const getSweets = async () => {
    try {
      const response = await getSweetsFromApi();
      setSweets(response.data);
    } catch (error) {
      console.log("Server not working");
    }
  };

  return (
    <div className="section2">
      <h1>Gallery of Desserts</h1>
      {sweets &&
        sweets.map((sweet) => (
          <div key={sweet._id} className="col" className="reviews-container">
            <SweetCard props={sweet} />
          </div>
        ))}
    </div>
  );
};

export default SweetsView;
