import React from 'react';

const CATEGORIES = ['Electronics', 'Computers', 'Home', 'Pets', 'Fashion']

const MenuButton = ({category, setCategory, active}) => (
  <li className="nav-item">
    <button
      className={`text-start nav-link text-white w-100 ${active ? 'active' : ''}`}
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
  </li>
)

const SideMenu = ({ activeCategory, setCategory }) => {
  return (
    <div className="SideMenu shadow-lg bg-secondary min-vh-100 p-3" style={{ width: 200 }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <MenuButton
          active={!activeCategory}
          category="All"
          setCategory={() => setCategory('')}
        />
        {CATEGORIES.map((category, i) => (
          <MenuButton
            key={i}
            active={activeCategory === category}
            category={category}
            setCategory={() => setCategory(category)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;