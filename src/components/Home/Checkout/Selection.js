import { Card, Tabs } from '@shopify/polaris';
import React, { useState, useEffect } from 'react';

import Collapsable from '../Collapsable';

import NumberFieldWithLabel from '~/components/NumberFieldWithLabel';

export default function Selection({ genres, handleChange }) {
  const [isOpen, setOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [genreItems, setGenres] = useState(genres);

  useEffect(() => {
    /**
     * ! DO NOT CHANGE THE REQUIRE TO ES6 IMPORT
     */
    require('@vaadin/vaadin-radio-button');
    return () => {};
  }, []);

  const updateFormCheckout = () => {
    const checkoutItems = genreItems.filter((item) => item.value > 0);

    return handleChange({ checkoutItems });
  };

  const handleOnChange = (purchasedItem) => {
    updateFormCheckout();

    return setGenres((prevState) => {
      const temp = [...prevState];
      Object.assign(temp[purchasedItem.index], purchasedItem);

      return [...temp];
    });
  };

  const handleTabChange = (tabIndex) => {
    return setSelectedTab(tabIndex);
  };

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
    },
  ];

  return (
    <Collapsable
      title="Select from book and/or DVD genres"
      open={isOpen}
      toggle={() => setOpen(!isOpen)}>
      <div className="itemsInfo">
        <span className="items">
          £2 per item, receive up to eight items per
          <span className="items"> delivery, start with a minimum of two.</span>
        </span>
      </div>
      <div className="accordion-inner-tab">
        <Tabs
          tabs={tabs}
          selected={selectedTab}
          onSelect={handleTabChange}
          fitted>
          <Card.Section>
            <div className="flex flex-row flex-wrap items-center -ml-10 justify-space-between">
              {genreItems.map(
                (item) =>
                  item.genre.id === selectedTab && (
                    <div className="numberfild-width" key={item.id.toString()}>
                      <div className="w-full p-2">
                        <NumberFieldWithLabel
                          item={item}
                          value={item.value}
                          onChange={handleOnChange}
                          isFull
                        />
                      </div>
                    </div>
                  ),
              )}
            </div>
          </Card.Section>
        </Tabs>
      </div>

      {/* <div className="mt-4 text-center">
          <RadioField />
        </div> */}

      {/* <div className="mt-4 text-center">
          <Button theme="small">Place Order</Button>
        </div> */}

      {/* <div className="mt-4 text-selection text-color-red shopping-cart">
          <div>Select 2 more items</div>
          <div style={{ display: 'flex' }}>
            <img className="" src={shopping} alt="shopping" /> 0 items - £0.00
          </div>
        </div> */}
    </Collapsable>
  );
}
