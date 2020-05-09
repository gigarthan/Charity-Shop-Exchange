import React, { Component } from 'react';
import { Card, Tabs } from '@shopify/polaris';
import Collapsable from '../Collapsable';
import Button from '../../Button';
import NumberFieldWithLabel from '../../NumberFieldWithLabel';

import shopping from '../../../assets/img/shopping.png';

import '@vaadin/vaadin-radio-button';
import RadioField from '../../RadioField';

export default class Selection extends Component {

  constructor(props){
    super(props);
    this.state = {
      isOpen: true,
      selected: 0,
      genresItems: props.genres,
      checkOutItems: {
        dvd: [],
        books: []
      },
    }
  }

  handleTabChange = (selectedTabIndex) => this.setState({ selected: selectedTabIndex })

  handleOnChange = (selectedId, value, tabSelected) => {

    let tempCheckoutObj = { ...this.state.checkOutItems };

    let index = tempCheckoutObj[tabSelected].findIndex((x) => {
      return x.id === selectedId
    });

    if(index === -1) {
      let temp = {
        'id': selectedId,
        'quantity': parseInt(value)
      }

      tempCheckoutObj[tabSelected].push(temp);
    } else {
      tempCheckoutObj[tabSelected][index]['quantity'] = tempCheckoutObj[tabSelected][index]['quantity'] + 1;
    }

    let tempGenresObj = { ...this.state.genresItems };
    const elementIndex = tempGenresObj[tabSelected].findIndex(element => element.id == selectedId);
    let updateGenreArray = [...tempGenresObj[tabSelected]];
    updateGenreArray[elementIndex] = { ...updateGenreArray[elementIndex], value: parseInt(value) }

    this.setState((prevState) => {
      return {
        ...prevState,
        genresItems: {
          ...prevState.genresItems,
          [tabSelected]: updateGenreArray
        },
        checkOutItems: tempCheckoutObj
      }
    });
  }

  render() {
    const { isOpen, genresItems, selected } = this.state; 

    console.log('checkOutItemscheckOutItems', this.state.checkOutItems);
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
        toggle={() => this.setState({ isOpen: !isOpen})}
      >
  
        <Tabs tabs={tabs} selected={selected} onSelect={this.handleTabChange} fitted>
          <Card.Section>
            <div className="vaadin-number">
              {
                genresItems[tabs[selected].id].map((genre, index) => {
                  return (
                      <NumberFieldWithLabel 
                        selectedTab={tabs[selected].id} 
                        id={genre.id} 
                        label={genre.name}
                        value={genre.value}
                        onChange={this.handleOnChange}
                      />
                  )
                })
              }
            </div>
          </Card.Section>
        </Tabs>

        <div className="mt-4 text-center">
          <RadioField />
        </div>

        <div className="mt-4 text-center">
          <Button theme="small">
            Place Order
          </Button>
        </div>

        <div className="mt-4 text-selection text-color-red shopping-cart" >
          <div>
            Select 2 more items
          </div>
          <div style={{ display: 'flex' }}>
            <img className="" src={shopping} alt="shopping" /> 0 items - £0.00
          </div> 
        </div>
      </Collapsable>
    );
  }
}
