import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import s from "./currency.module.scss";

function Currency() {
  const [usd, setUsd] = useState(2.45);
  const [euro, setEuro] = useState(2.43);

  return (
    <div>
      <div className={s.currency}>USD: {usd} BYN</div>
      <div className={s.currency}>EU: {euro} BYN</div>
    </div>
  );
}

export default Currency;
