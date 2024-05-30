import React from 'react';
import styles from './OrderDetails.module.css';
import PropTypes from 'prop-types';
import { FormModalPage } from '@commercetools-frontend/application-components';

const OrderDetails = (props) => {
  return (
    <FormModalPage title="Order Details" isOpen onClose={props.onClose}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.orderTitle}>Order CT-171123101059</p>
          <p>
            <b>Date:</b> 17 Nov 2023
          </p>
        </div>
        <div className={styles.orderDetailsContainer}>
          <div className={styles.orderDetailsContainerOne}>
            <div>
              <h5 className={styles.title}>Order Information</h5>
              <div>
                <ul className={styles.list}>
                  <li className={styles.listChild}>Delivery address</li>
                  <li className={styles.listChildTwo}>Dan Admin</li>
                  <li className={styles.listChildTwo}>59 North Beach Place </li>
                  <li className={styles.listChildTwo}></li>
                  <li className={styles.listChildTwo}> 04564</li>
                  <li className={styles.listChildTwo}>0423121203</li>
                </ul>
                <ul className={styles.list}>
                  <li className={styles.listChild}>Billing address</li>
                  <p className={styles.listChildTwo}>Same as delivery</p>
                </ul>
                <div className={styles.list}>
                  <p className={styles.listChild}> Company name</p>
                  <p className={styles.listChildTwo}>
                    OD Test Org Sandpit - Medium
                  </p>
                </div>
                <ul className={styles.list}>
                  <li className={styles.listChild}>Payment</li>
                  <li
                    className={styles.listChildTwo}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>CreditCard</div>
                    <div>$1246.78</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.orderDetailsContainerOne}>
            <div>
              <h5 className={styles.title}>Order summary</h5>
              <div className={styles.subTotal}>
                <p className="font-[Inter] font-bold text-base leading-140pr mb-2">
                  Subtotal(incl. Tax) (3 items)
                </p>
                <span className=" font-poppins text-xl leading-[150%]">
                  $1118.44
                </span>
              </div>
              <ul className={styles.list}>
                <li className={styles.STDDelivery}>
                  <div>
                    <div className={styles.title}>STD delivery to 04564</div>
                    <div className={styles.text}>3 items</div>
                  </div>
                  <div>$16.50</div>
                </li>
              </ul>
              <div className={styles.flex}>
                <div className={styles.gst}>
                  <div>GST</div>
                  <div>$111.84</div>
                </div>
                <div className={styles.total}>
                  <div>Total (incl. Tax)</div>
                  <div>$1246.78</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.title}>Items</div>
          <div>
            <h2 className={styles.packageTitle}>Package 1</h2>
            <div className={styles.packageWrapper}>
              <div className={styles.container}>
                <div className={styles.packageSTDDelivery}>
                  <span>STD delivery</span>
                </div>
                <div>
                  <span className={styles.status}>Status:&nbsp;</span>
                  <span className={styles.statusText}>Pending</span>
                </div>
              </div>
              <div>
                <div className={styles.orderItem}>
                  <div className={styles.orderItemWrapper}>
                    <div className={styles.orderItemImage}>
                      <a href="/">
                        <img
                          alt="product"
                          src="https://safety-culture-storefront-omega-uat.vercel.app/_next/image?url=https%3A%2F%2Fd391mcivvz321f.cloudfront.net%2F3M%2F3M-52000044579%2Fimages%2F085-12-00P.jpg&w=3840&q=75"
                          width="76"
                          height="100"
                        />
                      </a>
                    </div>
                    <div className={styles.orderItemContent}>
                      <div>
                        <a href="/" className={styles.orderItemLink}>
                          3M™ Jupiter™ IS Battery Pack &amp; Pouch 085-12-00P
                        </a>
                      </div>
                      <div className={styles.orderItemPrice}>$1109.24</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormModalPage>
  );
};
OrderDetails.displayName = 'OrderDetails';
OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default OrderDetails;
