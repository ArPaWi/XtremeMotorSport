import React from "react";
import styles from "./Loading.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerItem}></div>
      <div className={styles.spinnerItem}></div>
      <div className={styles.spinnerItem}></div>
      <div className={styles.spinnerItem}></div>
    </div>
  );
};

export default LoadingSpinner;