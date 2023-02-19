import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

export default function PokemonCard(props) {
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className="card" key={id}>
        <Link to={"/pokemon/" + name} className="link">
          <div className="image">
            <img src={image} alt={"null"} />
          </div>

          <div className="header">
            <h1>{name}</h1>
          </div>
        </Link>
      </div>
    </Suspense>
  );
}
