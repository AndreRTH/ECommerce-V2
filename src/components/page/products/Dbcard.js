import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './productcard.css';



function Dbcard() {
    const [stuff, setstuff] = useState([]);

  useEffect(() => {
    const fetchAllstuff = async () => {
      try {
        const res = await axios.get("http://localhost:8800/products");

        setstuff(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllstuff();
  }, []);
    return (
        <div className="product-container">
        {stuff.map((stuff) => (
          <div className="product-card" key={stuff.id}>
            {stuff.image && <img src={stuff.image} alt="stuff" />}
            <h2>{stuff.title}</h2>
            <p>{stuff.desc}</p>
            <p>${stuff.price}</p>
          </div>
        ))}
      </div>
    )

}
export default Dbcard;