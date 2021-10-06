import React from 'react';

import './Date.scss';


let data = new window.Date()

let dia = data.getDate()

let mes = data.getMonth()

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]
  

export default function Date() {
  return (
    <section>
      <h1>{`${dia}`.padStart(2, '0')}/{months[mes]}</h1>
      
    </section>
  )
}
