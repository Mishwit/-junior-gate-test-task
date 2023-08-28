import React from "react";
import Image from "next/image";

import { Button } from "../Button";
import { Link } from "../Link";

import { cardContent } from "../../utils/data/card-content";

import styles from "./styles.module.scss";

export const Card = () => (
  <div className={styles.productCard}>
    <Image
      src={cardContent.img}
      alt="Headphones"
      width={258}
      height={258}
      className={styles.cardImg}
    />
    <div className={styles.cardInfo}>
      <span className={styles.cardPrice}>${cardContent.price}</span>
      <h2 className={styles.cardTitle}>{cardContent.title}</h2>
      <p className={styles.cardSubtitle}>{cardContent.subtitle}</p>
      <p className={styles.cardChooseColor}>Choose your colour</p>
      <div className={styles.colorButtonsWrapper}>
        <Button
          type="button"
          variant="pickColor"
          onClick={() => console.log("change color")}
          color="var(--COLOR_RED)"
          isChecked={true}
        />
        <Button
          type="button"
          variant="pickColor"
          onClick={() => console.log("change color")}
          color="var(--COLOR_BLUE)"
          isChecked={false}
        />
        <Button
          type="button"
          variant="pickColor"
          onClick={() => console.log("change color")}
          color="var(--COLOR_BLACK)"
          isChecked={false}
        />
      </div>
      <div className={styles.buttonsWrapper}>
        <Button
          type="submit"
          text="Add to cart"
          variant="yellow"
          onClick={() => alert("Added to cart!")}
        />
        <Button
          type="submit"
          text="Buy now"
          variant="white"
          onClick={() => alert("Thanks for buying!")}
        />
      </div>

      <Link href="#">Read reviews</Link>
    </div>
  </div>
);
