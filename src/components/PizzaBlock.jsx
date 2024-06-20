import React, { useState } from 'react'
import Modal from './Modal'

function PizzaBlock ({img, title, price, dough, size, description}) {
  const [details, setDetails] = useState()
  
  return (
    <>
      <div className="pizza-block" >
        <img
          className="pizza-block__image"
            src={`https://react-pizza-v2-psi.vercel.app/assets/img/products/${img}`}
              alt="Pizza" onClick={() => setDetails(true)}
        />
        <h4 className="pizza-block__title" onClick={() => setDetails(true)}>{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            <li className="active">{dough[1]}</li>
            <li>{dough[0]}</li>
          </ul>
          <ul>
            <li className="active">{size[0]}</li>
            <li>{size[1]}</li>
            <li>{size[2]}</li>
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>2</i>
          </div>
        </div>
        <Modal open={details} setOpen={setDetails}>
          <img
            className="pizza-block__image"
            src={`https://react-pizza-v2-psi.vercel.app/assets/img/products/${img}`}
          />
          <h4 className="pizza-block__title">{title}</h4>
          <p className='description'><b>Описание: </b>{description}</p>
          <p className='description'><b>Виды: </b>{dough[1]} и {dough[0]}</p>
          <p className='description'><b>Размеры: </b>{size[0]}, {size[1]} и {size[2]}</p>
          <p className='description'><b>Цена: </b> от {price} ₽</p>
        </Modal>
      </div>
    </>
  )
}

export default PizzaBlock