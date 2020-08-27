import { Card, Tabs } from '@shopify/polaris';
import React, { Component } from 'react';

import NumberFieldWithLabel from '../../NumberFieldWithLabel';
import Collapsable from '../Collapsable';

export default class Selection extends Component {
  constructor(props) {
    require('@vaadin/vaadin-radio-button');
    super(props);
    this.state = {
      isOpen: true,
      selected: 0,
      genresItems: props.genres,
      checkOutItems: {
        dvd: [],
        books: [],
      },
    };
  }

  componentDidMount() {
      const { genres, formData} = this.props
    const genreItems = genres;
    const {checkoutItems} = formData;

    const keys = ['dvd', 'books'];

    for (const key of keys) {
      const checkoutKeyItems = checkoutItems[key];
      const genreKeyItems = genreItems[key];

      for (const item of checkoutKeyItems) {
        if (item.quantity > 0) {
          const index = genreKeyItems.findIndex((elem) => elem.id === item.id);
          if (index !== -1) {
            genreKeyItems[index].value = item.quantity;
          }
        }
      }
    }

    this.setState({
      checkOutItems: checkoutItems,
      genresItems: genreItems,
    });
  }

  handleTabChange (selectedTabIndex){ 
    this.setState({ selected: selectedTabIndex });
  }

  handleOnChange  (selectedId, value, tabSelected) {
    const { checkOutItems, genresItems} = this.state
    const { handleChange} = this.props
    const tempCheckoutObj = { ...checkOutItems };

    const index = tempCheckoutObj[tabSelected].findIndex((x) => {
      return x.id === selectedId;
    });

    if (index === -1) {
      const temp = {
        id: selectedId,
        quantity: parseInt(value),
      };

      tempCheckoutObj[tabSelected].push(temp);
    } else {
      tempCheckoutObj[tabSelected][index].quantity = value;
    }

    const tempGenresObj = { ...genresItems };
    const elementIndex = tempGenresObj[tabSelected].findIndex(
      (element) => element.id === selectedId,
    );
    const updateGenreArray = [...tempGenresObj[tabSelected]];
    updateGenreArray[elementIndex] = {
      ...updateGenreArray[elementIndex],
      value: parseInt(value),
    };

    this.setState(
      (prevState) => {
        return {
          ...prevState,
          genresItems: {
            ...prevState.genresItems,
            [tabSelected]: updateGenreArray,
          },
          checkOutItems: tempCheckoutObj,
        };
      },
      () => {
        handleChange({
          keyToUpdate: 'checkoutItems.dvd',
          value: checkOutItems && checkOutItems.dvd,
        });
        handleChange({
          keyToUpdate: 'checkoutItems.books',
          value: checkOutItems && checkOutItems.books,
        });
      },
    );
    
  };

  render() {
    const { isOpen, genresItems, selected } = this.state;

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
        toggle={() => this.setState({ isOpen: !isOpen })}>
        <div className="itemsInfo">
          <span className="items">
            £2 per item, receive up to eight items per
            <span className="items">
              {' '}
              delivery, start with a minimum of two.
            </span>
          </span>
        </div>
        <div className="accordion-inner-tab">
          <Tabs
            tabs={tabs}
            selected={selected}
            onSelect={this.handleTabChange}
            fitted>
            <Card.Section>
              <div className="flex flex-row flex-wrap items-center -ml-10 justify-space-between">
                {genresItems[tabs[selected].id].map((genre) => {
                  return (
                    <div className="numberfild-width" key={genre.id}>
                      <div className="w-full p-2">
                        <NumberFieldWithLabel
                          selectedTab={tabs[selected].id}
                          id={genre.id}
                          label={genre.name}
                          value={genre.value}
                          onChange={this.handleOnChange}
                          isFull
                        />
                      </div>
                    </div>
                  );
                })}
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
}
