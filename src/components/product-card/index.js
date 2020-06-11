import React, { Component } from 'react';
import './product-card.scss';
import PropTypes from 'prop-types';
import { getNounPluralForm } from "../../helpers";
import CatImg from '../../images/cat.png';

export class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      checked: props.product.checked,
      disabled: props.product.disabled,
      classProductCard: props.product.checked ? 'product-card__input product-card__input_selected' : 'product-card__input'
    }

    this.state = this.initialState;
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.onMouseOutLabel = this.onMouseOutLabel.bind(this);
  }

  componentDidMount() {
    this.setState((state) => ({ isSetClass: !state.isSetClass }));
  }

  render(){
    const { product } = this.props;
    const { checked, disabled, classProductCard } = this.state;
    
    return (
      <React.Fragment>
        <input 
          onChange={this.onChangeInput} 
          id={`item-${product.id}`} name="product" type="checkbox" 
          className={classProductCard} 
          checked={checked} 
          disabled={disabled} />
        <label onMouseLeave={this.onMouseOutLabel} htmlFor={`item-${product.id}`} className="product-card__label">
          <span className="product-card__upper-left-corner"></span>
          <span className="product-card__title-promo">Сказочное заморское яство</span>
          <span className="product-card__cat-not-approve">Котэ не одобряет?</span>
          <span className="product-card__title">Нямушка</span>
          <span className="product-card__subtitle">c {product.subtitle}</span>
          <span className="product-card__about-goods">
            <span className="product-card__about-goods-row">
              <b>{product.portion}</b> {getNounPluralForm(product.portion, 'порция', 'порции', 'порций')}
            </span>
            <span className="product-card__about-goods-row">
              <b>{product.mouse}</b> {getNounPluralForm(product.mouse, 'мышь', 'мыши', 'мышей')} в подарок
          </span>
            {product.additionalField ? <span className="product-card__about-goods-row">заказчик доволен</span> : ''}
          </span>
          <span className="product-card__weight">
            <span className="visually-hidden">Вес</span>
            <span className="product-card__num">{product.num}</span>
            <span className="product-card__unit">кг</span>
          </span>
          <img src={CatImg} width="316" height="269" alt="Фото кота" title="Картинка кота" className="product-card__img" />
        </label>
        <p className="product-card__description product-card__description_default">
          Чего сидишь? Порадуй котэ,
          &nbsp;
        <button onClick={this.onClickBtn} type="button" data-id={product.id} aria-label={`Купи Нямушка c ${product.subtitle}`} title="Выбрать этот товар для покупки" className="product-card__btn-bye text-blue text-decor-style-dashed ">купи.</button>
        </p>
        <p className="product-card__description product-card__description_selected">{product.buySelected}</p>
        <p className="product-card__description product-card__description_disabled">Печалька, с {product.buyNo} закончился.</p>
      </React.Fragment>
    )
  }

  onChangeInput() {
    this.setState((state) => ({ 
      checked: !state.checked
    }))
  }

  onMouseOutLabel() {
    if (this.state.checked) {
      this.setState({ classProductCard: 'product-card__input product-card__input_selected'});
    } else {
      this.setState({ classProductCard: 'product-card__input' });
    }
  }

  onClickBtn() {
    this.setState((state) => ({ 
      checked: true,
      classProductCard: 'product-card__input product-card__input_selected'
    }))
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};