import React from 'react'
import "./productList.css";
import Product from "../Product/Product";
import { products } from "../../data";

export default function ProductList() {
  return (
    <>
      <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">POJECTS</h1>
        <p className="pl-desc">
          Some Project which shows my technical skills.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
    </>
  )
}
