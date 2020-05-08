import React, { useState, useCallback } from 'react';
import { Card, Tabs } from '@shopify/polaris';
import Collapsable from '../Collapsable';
import NumberFieldWithLabel from '../../NumberFieldWithLabel';
import genres from '../../../import/planList'; 
import openBook from '../../../assets/img/open-book.svg';

export default function Selection() {
  const [isOpen, setisOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'books',
      content: 'Books',
      panelID: 'Books',
    },    
    {
      id: 'dvd',
      content: 'DVDs',
      panelID: 'DVD',
    }
  ];  

  return (
    <Collapsable
      title="Select from book and/or DVD genres"
      open={isOpen}
      toggle={() => setisOpen(!isOpen)}
    >

    <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
        <Card.Section title={'Select a genre for ' + tabs[selected].content}>
          {
            genres[tabs[selected].id].map(genre => 
              <div><NumberFieldWithLabel label={genre.name}/></div>
            )
          }
        </Card.Section>
      </Tabs>
    </Card>

    </Collapsable>
  );
}
