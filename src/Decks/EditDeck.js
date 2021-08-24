import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import { DeckForm } from "./DeckForm";

export function EditDeck() {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({
    id: 0,
    name: "",
    description: "",
  });

  useEffect(() => {
    async function loadDecks() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
    }
    loadDecks();
  }, [deckId]);

  //handles edit submission when form is submitted (button)
  function submitButtonHandler(event) {
    event.preventDefault();
    updateDeck(deck).then((output) => history.push(`/decks/${output.id}`));
  }
  //change deck state when name changes
  function changeName(event) {
    setDeck({ ...deck, name: event.target.value });
  }
  //change deck state when description changes
  function changeDesc(event) {
    setDeck({ ...deck, description: event.target.value });
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
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h4>Edit Deck</h4>
      <DeckForm
        submitFunction={submitButtonHandler}
        deck={deck}
        changeName={changeName}
        changeDesc={changeDesc}
      />
    </div>
  );
}