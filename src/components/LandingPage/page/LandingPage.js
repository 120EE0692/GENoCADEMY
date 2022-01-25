import React from 'react';
import Hero from '../Hero';
import Products from '../Products';
import {productDataTwo } from '../Products/data';
import Statistics from '../Statistics';
import Features from '../Features';
import {productData } from '../Features/data';
import SimpleForm from "./SimpleForm"

export default function LandingPage() {
    return (
        <div>
      <Hero />
      <Products heading='Join Us Today!' data={productDataTwo} />
      <Statistics />
      <Features heading='What Do We Offer?' data={productData} />
      <SimpleForm/>
      </div>
    );
}