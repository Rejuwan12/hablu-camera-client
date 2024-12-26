// import { useEffect, useState } from "react";
import FilterBar from "../../components/products/FilterBar/FilterBar";
import SortByPrice from "../../components/products/Sort/SortByPrice";
import SearchBar from "./../../components/products/SearchBar/SearchBar";
import axios from "axios";
import LoadingPage from "./../Loading/LoadingPage";

import { useState } from "react";
import { useEffect } from "react";
import ProductCard from './../../components/FeaturedProduct/ProductCard';

const ProductPage = () => {
  const [ products, setProducts ] = useState([]);
  const [loading, setLoading]  = useState(false);
  const [search, setSearch]  = useState("");
  const [sort, setSort]  = useState("asc");
  const [brand, setBrand]  = useState("");
  const [category, setCategory]  = useState("");

  console.log(brand, category)

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/all-products?title=${search}&sort=${sort}$brand=${brand}&category${category}`);
            setProducts(res.data);
          } catch (error) {
            console.error("Error fetching products:", error);
          } finally {
            setLoading(false);
          }
    };
    fetch();
  }, [search,sort,brand,category]);
  
  const handleSearch = e =>{
    e.preventDefault();
    setSearch(e.target.search.value) 
    e.target.search.value =""
  };

  const handleReset =()=>{
    setSearch('')
    setBrand('')
    setSort('asc')
    setCategory('')
    window.location.reload();
  }
  
  return (
    <div className="container mx-auto">
      <h2 className="my-4 text-2xl text-center f-bold">All Products</h2>
      <div className="items-center justify-between w-full mb-4 lg:flex">
        <SearchBar handleSearch={handleSearch}/>
        <SortByPrice setSort={setSort} />
      </div>

      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <FilterBar setBrand={setBrand} setCategory={setCategory} handleReset={handleReset}/>
        </div>
        <div className="col-span-10">
          {loading ? (
            <LoadingPage />
          ) : (
            <>
              {products?.length === 0 ? (
                <div className="flex items-center justify-center w-full h-full">
                  <h2 className="text-3xl font-bold">Products Not Found!</h2>
                </div>
              ) : (
                <div className="grid min-h-screen grid-cols-3 gap-2">
                  {products?.map((product) => {
                  return <ProductCard key={product._id} product={product}/>
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
