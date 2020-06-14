import React, { Component } from 'react';
import { Loading } from './components/loading';
import { Main } from './components/main';
import { Form } from './components/form';
import { List } from './components/list';
import { ListItem } from './components/list-item';
import { ProductCard } from './components/product-card';
import { getProducts } from './data';

class App extends Component {
  constructor() {
    super();

    this.initialState = {
      products: null,
      isLoading: true
    }

    this.state = this.initialState;
  }

  componentDidMount() {
    document.title = "Главная - Ты сегодня покормил кота?";
      getProducts()
        .then(data => {
          this.setState({
            products: data.products,
            isLoading: false
          })
        })
        .finally(() => {
          this.setState({
            isLoading: false
          })
        });
  }

  render() {
    const { isLoading, products } = this.state;

    if (isLoading) {
      return <Loading />
    }
    
    if (!products) {
      return (
        <Main middle={true}>
          <p>Данные по продуктам не загрузились.</p>
        </Main>
      ) 
    }

    return (
      <Main middle={true}>
        <Form 
          title={'Ты сегодня покормил кота?'}
          >
          <fieldset className="form__fieldset">
            <legend className="visually-hidden">Выбрасть товар для покупки</legend>
            <List classNameList={'form__list'}>
              {
                products.map((product) => {
                  return (
                    <ListItem key={product.id} classNameLi={'product-card'}>
                      <ProductCard product={product} />
                    </ListItem>
                  )
                })
              }
            </List>
          </fieldset>
          <button type="submit" hidden></button>
        </Form>
      </Main>
    )
  }
}

export default App;
