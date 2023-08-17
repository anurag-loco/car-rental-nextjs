import type { NextPage } from "next";
import PickUpContainer from "./pick-up-container";
import styles from "./location-data.module.css";
const LocationData: NextPage = () => {
  return (
    <div className={styles.locationData}>
      <PickUpContainer locationLabel="Pick - Up" />
      <PickUpContainer
        locationLabel="Drop - Off"
        propJustifyContent="flex-start"
        propAlignSelf="stretch"
        propBackgroundColor="rgba(92, 175, 252, 0.3)"
        propBackgroundColor1="#54a6ff"
        propWidth="80px"
      />
    </div>
  );
};

export default LocationData;
