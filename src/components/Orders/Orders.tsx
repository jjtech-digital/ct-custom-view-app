import React, { useState } from 'react';
import OrderDrawer from '../OrderDrawer';
import styles from './Orders.module.css'

const Orders = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className={styles.root}
      >
        Show Orders
      </button>

      <OrderDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Orders;
