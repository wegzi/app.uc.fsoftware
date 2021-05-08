import React from 'react';
import styled from 'styled-components';
import { Label } from '../../Components/Typography';

export default function Home() {
  return (
    <div className='p-3'>
      <div>
        <Label className='text-center' text='[Nome do site]' size='3.5' />
      </div>
      <div class='grid grid-cols-3 gap-4'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <CardService className='rounded-lg p-3'>
      <CardImage className='p-3 rounded-full mx-auto'></CardImage>
      <div>
        <p className='overflow-ellipsis overflow-hidden mt-3'>
          Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de
          bebadis, arcu quam euismod magna. Sapien in monti palavris qui num
          significa nadis i pareci latim. In elementis mé pra quem é amistosis
        </p>
      </div>
    </CardService>
  );
}

const CardImage = styled.div`
  width: 70%;
  height: 120px;
  background-color: ${props => props.theme.primary};
`;
const CardService = styled.div`
  min-height: 390px;
  background-color: ${props => props.theme.light};
`;
