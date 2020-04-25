import React, { useCallback, useState } from 'react';
import { Card, Tabs } from '@shopify/polaris';
import PlanList from './PlanList';

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

  const items = {
    dvd: [
      {
        id: 1,
        name: 'Action',
      },
      {
        id: 2,
        name: 'Adventure',
      },
      {
        id: 3,
        name: 'Romance',
      },
      {
        id: 4,
        name: 'Comedy',
      },
      {
        id: 5,
        name: 'Drama',
      },
    ],
    books: [
      {
        id: 11,
        name: 'Action',
      },
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 13,
        name: 'Romance',
      },
      {
        id: 14,
        name: 'Comedy',
      },
      {
        id: 15,
        name: 'Drama',
      },
    ],
  };

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
