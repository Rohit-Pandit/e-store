import React,{useState,useEffect} from 'react';
import './Menu.css';
import Category from '../category/Category.jsx';
import Fetcher from '../fetch/Fetcher.jsx';

const Menu = ({ setProducts }) => {   
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await Fetcher("/categories");   // ✅ wait for API
        console.log("categories:", data);
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    loadCategories();
  }, []);

    const handleCategoryOnclick = async (id) => {
      try {
        const data = await Fetcher("/products?catId=" + id); // ✅ wait for API
        console.log("products:", data);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
  };


  return (
    <div className="menu">
      {categories.map((d) => (
        <Category
          key={d.id}
          id={d.id}
          title={d.title}
          cateogryClick={() => handleCategoryOnclick(d.id)}
        />
      ))}
    </div>
  );
};

export default Menu