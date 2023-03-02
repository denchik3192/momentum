import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function QuotesSettings() {
  const lastQuotes = useSelector((state) => state.quote.lastQuotes);
  const quotesList = lastQuotes.map((quote, index) => (
    //fix inline styles
  <p style={{textAlign: 'left'}}>
      {index + 1}. "{quote}""
    </p>
  ));
  return (
    <Fragment>
      <h2>Last Qoutes</h2>
      {quotesList}
    </Fragment>
  );
}

export default QuotesSettings;
