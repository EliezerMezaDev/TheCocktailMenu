import { useEffect, useState } from "react";
import axios from "axios";

import { endpoints } from "../../assets/data";

export const Categories = () => {
  useEffect(() => {
    const fetchData = async () => {
      axios.get(endpoints.getAllCategories).then((resp) => {
      });
    };

    // fetchData();
  }, []);

  return <section className="categories">asd</section>;
};
