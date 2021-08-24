import React from "react";
import { Link } from "react-router-dom";

export function NotEnoughCards({ deck }) {
  if (
    //if there is no deck object, display Loading...
    !deck
  ) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="bi bi-house-door-fill"></i> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deck.Id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h4>Study: {deck.name}</h4>
      <h5>There are not enough cards.</h5>
      <p>You must have at least 3 cards to study.</p>
      <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary">
        Add Cards
      </Link>
    </div>
  );
}