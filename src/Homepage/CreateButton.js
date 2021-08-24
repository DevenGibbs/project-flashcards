import React from "react";
import { useHistory } from "react-router";

export function CreateButton() {
  const history = useHistory();

  return (
    <button
      className="btn btn-secondary bi bi-plus-lg"
      type="button"
      onClick={() => history.push("/decks/new")}
    >
      Create New Deck
    </button>
  );
}