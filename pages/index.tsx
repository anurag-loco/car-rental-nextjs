import type { NextPage } from "next";
import Header from "../components/header";
import SportFilterContainer from "../components/sport-filter-container";
import LocationData from "../components/location-data";
import CatalogueCar from "../components/catalogue-car";
import MorentContainer from "../components/morent-container";
import styles from "./index.module.css";
const HFCategoryCarRent: NextPage = () => {
  return (
    <div className={styles.hfCategoryCarRent}>
      <Header />
      <div className={styles.content}>
        <SportFilterContainer />
        <div className={styles.locationDataParent}>
          <LocationData />
          <CatalogueCar />
        </div>
      </div>
      <MorentContainer />
    </div>
  );
};

export default HFCategoryCarRent;
