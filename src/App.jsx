import React, { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState("our quote");
  // const [author, setAuthor] = useState("The author");

  // fetch data and generate a random quote
  const fetchQuote = () => {
    fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json")
      .then((resp) => resp.json())
      .then((data) => {
        let randomQuote = Math.floor(Math.random() * data.length);
        setQuote(data[randomQuote]);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <div className="quote-container">
        <h1>{quote.text}</h1>
        <p>Author: {quote.author}</p>

        <div class="button-container">
          <button className="twitter-button" id="twitter" title="Twitter">
            <i class="fab fa-twitter"></i>
          </button>
          <button onClick={fetchQuote} id="new-quote">
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
