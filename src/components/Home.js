import React, { useEffect } from "react";
import FindParts from "./FindParts";
import BannersBlock from "./BannersBlock";
import BrandsBlock from "./BrandsBlock";
import CategoryBlock from "./CategoryBlock";
import FeatureBlock from "./FeatureBlock";
import {
  getHomeData,
  getHome,
  getAllProducts,
  getProducts,
} from "../features/home/homeSlice";
import { useDispatch, useSelector } from "react-redux";

import StaticSection from "./StaticSection";
import FindByCategory from "./FindByCategory";
import FindByBrands from "./FindByBrands";
import Topcat from "./Topcat";
import Brandicon from "./Brandicon";
import Poster from "./Poster";


const Home = () => {
  // document.title = 'Red Parts — Home'

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHome());
    dispatch(getProducts());
  }, [dispatch]);
  const home_data = useSelector(getHomeData);
  const products = useSelector(getAllProducts);
  // console.log(home_data);
  return (
    <>
      <FindParts banner={home_data.banners} />
      <Topcat  categories={home_data.categories}/>
     {/*<FindByCategory categories={home_data.categories}/>*/}
      <Poster/>
      <FindByBrands brands={home_data.brand}/>
      
      
      <Brandicon/>
     
     
    </>
  );
};

export default Home;
