import React, { useState } from 'react';

const Tabs2 = ({ tabs2 }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className="tabs">
        {tabs2.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <p>Content for {tabs2[activeTab].title}</p>
      </div>
    </div>
  );
};

export default Tabs2;