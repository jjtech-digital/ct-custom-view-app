export const data = {
  id: '1',
  version: 'v1',
  orderNumber: '123ABC',
  lineItems: [
    {
      id: '1',
      productId: 'productId',
      name: 'Mask',
      productType: {
        id: '1',
        typeId: 'productTypeId',
      },
      variant: {
        id: 'variantId',
      },
      price: {
        id: 'priceId',
        value: '100',
      },
      quantity: 1,
      totalPrice: {
        centAmount: '20000',
        currencyCode: 'AUD',
        type: 'centPrecision',
        fractionDigits: '2',
      },
      discountedPricePerQuantity: {
        quantity: 1,
        discountedPrice: {
          value: {
            centAmount: '',
            currencyCode: '',
            type: '',
            fractionDigits: '',
          },
          includedDiscounts: [
            {
              discount: '',
              discountedAmount: {
                centAmount: '',
                currencyCode: '',
                type: '',
                fractionDigits: '',
              },
            },
          ],
        },
      },
      taxedPricePortions: [
        {
          shippingMethodKey: '',
        },
      ],
      state: {
        quantity: 1,
        state: {
          id: '1',
          typeId: 'state',
        },
      },
      perMethodTaxRate: [
        {
          shippingMethodKey: ''
        }
      ],
    },
  ],
  customLineItems: [
    {
      id: '',
      name: {
        en: 'dog food',
      },
      money: {
        centAmount: '',
        currencyCode: '',
        type: '',
        fractionDigits: '',
      },
      taxedPricePortions: [
        {
          shippingMethodKey: '',
        },
      ],
      totalPrice: {
        centAmount: '',
        currencyCode: '',
        type: '',
        fractionDigits: '',
      },
      slug: '',
      quantity: 1,
      state: {
        quantity: 1,
        state: {
          id: '1',
          typeId: 'state',
        },
      },
      perMethodTaxRate: [
        {
          shippingMethodKey: '',
        },
      ],
      discountedPricePerQuantity: [
        {
          quantity: 1,
          discountedPrice: {
            value: {
              centAmount: '',
              currencyCode: '',
              type: '',
              fractionDigits: '',
            },
            includedDiscounts: [
              {
                discount: {
                  id: '1',
                  typeId: 'dicsount',
                },
                discountedAmount: {
                  centAmount: '',
                  currencyCode: '',
                  type: '',
                  fractionDigits: '',
                },
              },
            ],
          },
        },
      ],
      priceMode: {},
    },
  ],
  totalPrice: {
    centAmount: '',
    currencyCode: '',
    type: '',
    fractionDigits: '',
  },
  shippingMode: 'Single',
  shipping: [
    {
      shippingKey: '',
      shippingInfo: '',
      shippingAddress: '',
    },
  ],
  origin: 'Customer',
  orderState: 'Confirmed',
  createdAt: '2023-02-10'
};
