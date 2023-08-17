import type { NextPage } from "next";
import Header from "../components/header";
import SportFilterContainer from "../components/sport-filter-container";
import PickUpContainer from "../components/pick-up-container";
import CatalogCard from "../components/catalog-card";
import MorentContainer from "../components/morent-container";
import styles from "./index.module.css";
const HFCategoryCarRent: NextPage = () => {
  return (
    <div className={styles.hfCategoryCarRent}>
      <Header />
      <div className={styles.content}>
        <SportFilterContainer />
        <div className={styles.locationDataParent}>
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
          <div className={styles.catalogueCar}>
            <div className={styles.catalogue}>
              <CatalogCard
                koenigsegg="Koenigsegg"
                sport="Sport"
                vuesaxboldheart="/vuesaxboldheart3.svg"
                car="/car@2x.png"
                vuesaxboldgasStation="/vuesaxboldgasstation1.svg"
                l="90L"
                car1="/car1.svg"
                vuesaxboldprofile2user="/vuesaxboldprofile2user1.svg"
                people="2 People"
              />
              <CatalogCard
                koenigsegg="Nissan GT - R"
                sport="Sport"
                vuesaxboldheart="/vuesaxlinearheart1.svg"
                car="/car2@2x.png"
                vuesaxboldgasStation="/vuesaxboldgasstation2.svg"
                l="80L"
                car1="/car3.svg"
                vuesaxboldprofile2user="/vuesaxboldprofile2user2.svg"
                people="2 People"
                propWidth="228px"
                propHeight="72px"
              />
              <CatalogCard
                koenigsegg="Nissan GT - R"
                sport="Sport"
                vuesaxboldheart="/vuesaxlinearheart1.svg"
                car="/car4@2x.png"
                vuesaxboldgasStation="/vuesaxboldgasstation2.svg"
                l="70L"
                car1="/car3.svg"
                vuesaxboldprofile2user="/vuesaxboldprofile2user3.svg"
                people="4 People"
                propWidth="244px"
                propHeight="76px"
              />
              <CatalogCard
                koenigsegg="All New Rush"
                sport="SUV"
                vuesaxboldheart="/vuesaxlinearheart2.svg"
                car="/car5@2x.png"
                vuesaxboldgasStation="/vuesaxboldgasstation2.svg"
                l="70L"
                car1="/car3.svg"
                vuesaxboldprofile2user="/vuesaxboldprofile2user4.svg"
                people="6 People"
                propWidth="252px"
                propHeight="112px"
              />
              <CatalogCard
                koenigsegg="CR-V"
                sport="SUV"
                vuesaxboldheart="/vuesaxlinearheart2.svg"
                car="/car6@2x.png"
                vuesaxboldgasStation="/vuesaxboldgasstation2.svg"
                l="85L"
                car1="/car3.svg"
                vuesaxboldprofile2user="/vuesaxboldprofile2user4.svg"
                people="6 People"
                propWidth="254px"
                propHeight="102px"
              />
              <div className={styles.catalog9}>
                <div className={styles.carNameParent}>
                  <div className={styles.carName}>
                    <b className={styles.allNewTerios}>All New Terios</b>
                    <b className={styles.suv}>SUV</b>
                  </div>
                  <img
                    className={styles.vuesaxlinearheartIcon}
                    alt=""
                    src="/vuesaxlinearheart2.svg"
                  />
                </div>
                <img className={styles.carIcon} alt="" src="/car7@2x.png" />
                <div className={styles.spesification}>
                  <div className={styles.gasoline}>
                    <img
                      className={styles.vuesaxlinearheartIcon}
                      alt=""
                      src="/vuesaxboldgasstation1.svg"
                    />
                    <div className={styles.l}>90L</div>
                  </div>
                  <div className={styles.gasoline}>
                    <img className={styles.carIcon1} alt="" src="/car1.svg" />
                    <div className={styles.l}>Manual</div>
                  </div>
                  <div className={styles.capacity}>
                    <img
                      className={styles.vuesaxlinearheartIcon}
                      alt=""
                      src="/vuesaxboldprofile2user5.svg"
                    />
                    <div className={styles.l}>6 People</div>
                  </div>
                </div>
                <div className={styles.purchaseWrapper}>
                  <div className={styles.price}>
                    <b className={styles.day}>
                      <span className={styles.dayTxt}>
                        <span>{`$74.00/ `}</span>
                        <span className={styles.day1}>day</span>
                      </span>
                    </b>
                  </div>
                  <div className={styles.buttonRental}>
                    <div className={styles.rentNow}>Rent Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MorentContainer />
    </div>
  );
};

export default HFCategoryCarRent;
