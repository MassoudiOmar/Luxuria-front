import React from "react";
import "./Pannier.css";
import { useParams, Link } from "react-router-dom";

export default function Pannier() {
  return (
    <div className="pannier">
      <div className="pannier-Product">
        <div className="panier-title">

        <span>Panier</span> 
        </div>

        <div className="pannier-Product2">
            <div style={{flex:2}}>
          <div className="image-title">
            <img className="image" src="https://cdn.donmai.us/sample/8a/1e/__cynthia_lucario_garchomp_milotic_togekiss_and_2_more_pokemon_and_2_more_drawn_by_burnt_green_tea__sample-8a1e9eea44161da5d254b2e0e9683501.jpg" />
          </div>
          <input type="submit" className="suprimer" value="SUPPRIMER" />

            </div>
            <span className="product-title-panier">cynthia, lucario, garchomp, milotic, togekiss, and 2 more (pokemon and 2 more) drawn by...</span>

          <div className="price-quantity">
            <span>19.55 TND</span>
            <span>9.55 TND</span>
            <div>
            <button>-</button>
            <span>5</span>
            <button>+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="final-command">
      <div className="panier-title">

<span>Final command</span> 
</div>
      </div>
    </div>
  );
}
