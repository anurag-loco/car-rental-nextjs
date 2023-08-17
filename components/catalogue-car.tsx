import type { NextPage } from "next";
import CatalogCard from "./catalog-card";
import styles from "./catalogue-car.module.css";
const CatalogueCar: NextPage = () => {
  return (
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
          catalog1Width="unset"
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
          catalog1Width="unset"
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
          catalog1Width="316px"
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
          catalog1Width="316px"
        />
        <CatalogCard
          koenigsegg="All New Terios"
          sport="SUV"
          vuesaxboldheart="/vuesaxlinearheart2.svg"
          car="/car7@2x.png"
          vuesaxboldgasStation="/vuesaxboldgasstation1.svg"
          l="90L"
          car1="/car1.svg"
          vuesaxboldprofile2user="/vuesaxboldprofile2user5.svg"
          people="6 People"
          prop1="$74.00/ "
          propWidth="252px"
          propHeight="112px"
          catalog1Width="316px"
        />
      </div>
    </div>
  );
};

export default CatalogueCar;
