import { useEffect, useState } from "react";
import styles from "./menu.module.css";

function Menu() {
  const [menuItems, setMenuItems] = useState([
    {
      _id: 1,
      name: "Veg Pizza",
      description:
        "Loaded with cheese and veggies. Large string chicken fresh deep pie. Roll black sautéed rib burnt tomatoes.",
      price: 250,
      category: "main",
      image: "/food.jpg",
    },
    {
      _id: 2,
      name: "Burger Deluxe",
      description:
        "Juicy grilled patty with melted cheese and crispy lettuce served with fries.",
      price: 180,
      category: "main",
      image: "/food.jpg",
    },
    {
      _id: 3,
      name: "Cold Coffee",
      description:
        "Chilled creamy coffee with ice cream. Perfectly brewed and served cold.",
      price: 120,
      category: "beverage",
      image: "/food.jpg",
    },
  ]);

  const [quantities, setQuantities] = useState({});

  const handleIncrease = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  return (
    <div className={styles.menuPage}>
      {/* MAIN COURSE */}
      <section className={styles.menuSection}>
        <h3>Main Course</h3>
        <div className={styles.menuList}>
          {menuItems
            .filter((item) => item.category === "main")
            .map((item) => (
              <div className={styles.menuBox} key={item._id}>
                <img src={item.image} alt={item.name} className={styles.foodImg} />
                <div className={styles.foodDetails}>
                  <p>{item.description}</p>
                </div>
                <div className={styles.foodRight}>
                  <span>₹{item.price}</span>
                  <div className={styles.counterBox}>
                    <button onClick={() => handleDecrease(item._id)}>-</button>
                    <span>{quantities[item._id] || 0}</span>
                    <button onClick={() => handleIncrease(item._id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* BEVERAGES */}
      <section className={styles.menuSection}>
        <h3>Beverages</h3>
        <div className={styles.menuList}>
          {menuItems
            .filter((item) => item.category === "beverage")
            .map((item) => (
              <div className={styles.menuBox} key={item._id}>
                <img src={item.image} alt={item.name} className={styles.foodImg} />
                <div className={styles.foodDetails}>
                  <p>{item.description}</p>
                </div>
                <div className={styles.foodRight}>
                  <span>₹{item.price}</span>
                  <div className={styles.counterBox}>
                    <button onClick={() => handleDecrease(item._id)}>-</button>
                    <span>{quantities[item._id] || 0}</span>
                    <button onClick={() => handleIncrease(item._id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;