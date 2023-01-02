import React from "react";
import HomePage from "components/pages/Home";

import { useProducts } from "hooks/products";

const Home = () => <HomePage products={useProducts()} />;

export default Home;
