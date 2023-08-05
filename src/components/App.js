import React from 'react';
import Tabs from './Tabs';
import Tabs2 from './Tabs2';
const App = () => {
  const tabs = [
          {title: 'Tab 1'},
           {title: 'Tab 2'},
          {title: 'Tab 3'},
  ];
  const tabs2 = [
    {title: 'Tab A'},
     {title: 'Tab B'},
    {title: 'Tab C'},
];
  return (
    <div>
      <Tabs tabs={tabs} />
      <Tabs2 tabs2={tabs2} />
    </div>
  );
};

export default App;