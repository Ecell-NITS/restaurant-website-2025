// src/pages/Menu/Menu.jsx
import React, { useEffect, useState } from "react";
import styles from "./menu.module.css"; // keep module css in same folder
import menuData from "../../data/menuData.json";
import foodImg from "../../assets/images/food.jpg"; // fallback if JSON uses filenames
// import other images as needed

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // If you have a backend, you can fetch. For now, load from JSON:
    setMenuItems(menuData.map(item => {
      // if JSON stores filename only, map to imported image here
      if (item.image && item.image.includes("food.jpg")) {
        return { ...item, image: foodImg };
      }
      // if item.image already is a path or URL, keep it
      return item;
    }));
  }, []);

  const handleIncrease = (id) => setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const handleDecrease = (id) => setQuantities(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));

  return (
    <div className={styles.App}>
      <section className={styles.menuSection}>
        <h3>Main Course</h3>
        <div className={styles.menuItems}>
          {menuItems.filter(item => item.category === "main").map(item => (
            <div className={styles.menuCard} key={item._id}>
              <img src={item.image} alt={item.name} />
              <div className={styles.foodDetails}>
                <p>{item.description}</p>
                <span>₹{item.price}</span>
              </div>
              <div className={styles.counterBox}>
                <button onClick={() => handleDecrease(item._id)}>-</button>
                <span>{quantities[item._id] || 0}</span>
                <button onClick={() => handleIncrease(item._id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.menuSection}>
        <h3>Beverages</h3>
        <div className={styles.menuItems}>
          {menuItems.filter(item => item.category === "beverage").map(item => (
            <div className={styles.menuCard} key={item._id}>
              <img src={item.image} alt={item.name} />
              <div className={styles.foodDetails}>
                <p>{item.description}</p>
                <span>₹{item.price}</span>
              </div>
              <div className={styles.counterBox}>
                <button onClick={() => handleDecrease(item._id)}>-</button>
                <span>{quantities[item._id] || 0}</span>
                <button onClick={() => handleIncrease(item._id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;