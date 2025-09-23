import React,{useState,useEffect} from 'react';
import './Menu.css';
import Category from '../category/Category.jsx';
import Content from '../content/Content.jsx';

const Menu = ({ setProducts }) => {   // ✅ destructure prop here
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleCategoryOnclick = (id) => {
    fetch("http://localhost:3001/products?catId=" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        console.log("setProducts is:", setProducts); // ✅ debug
        setProducts(data); // ✅ should work if prop passed
      })
      .catch((err) => console.error("Error fetching products:", err));
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