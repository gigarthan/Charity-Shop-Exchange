import React, { useCallback, useState } from 'react';
import { Card, Tabs } from '@shopify/polaris';
import PlanList from './PlanList';
import items from '../../import/planList';

export default function PlanSelection() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'dvd',
      content: 'DVD',
      panelID: 'DVD',
    },
    {
      id: 'books',
      content: 'Books',
      panelID: 'Books',
    },
  ];

  const resourceNames = {
    dvd: {
      singular: 'DVD',
      plural: "DVD's",
    },
    books: {
      singular: 'Book',
      plural: 'Books',
    },
  };

  return (
    <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
        <Card.Section title={'Select a genre for ' + tabs[selected].content}>
          <PlanList items={items[tabs[selected].id]} resourceName={resourceNames[tabs[selected].id]}></PlanList>
        </Card.Section>
      </Tabs>
    </Card>
  );
}
