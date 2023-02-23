/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';

import { IGames } from '../../../contentful';
import { useAppStore } from '../../../store/store';
import GamesCardItem from '../../components/GamesCard/GamesCardItem';
import PurchaseModal from '../../components/PurchaseModal/PurchaseModal';

import { GamesContent } from '../../styles/Games';
import { EmptyCart } from '../../styles/GamesCardItem';

const ProductCard = () => {
  const { cart } = useAppStore();
  const [cartItems, setCartItems] = useState<IGames[]>();
  const cartIsEmpty = cart.length > 0;
  const [modalStatus, setModalStatus] = useState(false);
  const openModal = () => {
    setModalStatus(true);
  };

  useEffect(() => {
    setCartItems(cart);
  });

  return (
    <GamesContent>
      {cartItems && !cartIsEmpty ? (
        <EmptyCart>Cart is Empty</EmptyCart>
      ) : (
        cartItems?.map((item) => (
          <GamesCardItem key={item.fields.name} game={item} showModal={() => openModal()} />
        ))
      )}
      <PurchaseModal
        show={modalStatus}
        hideModal={() => {
          setModalStatus(false);
        }}
      />
    </GamesContent>
  );
};

export default ProductCard;
