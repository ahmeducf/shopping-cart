import { productsReducer } from 'reducers';
import { describe, it } from 'vitest';

describe('products reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      products: [],
      isLoading: true,
      error: null,
    };
  });

  it('should throw an error with an unsupported type', () => {
    expect(() => {
      productsReducer(initialState, { type: 'UNSUPPORTED_ACTION_TYPE' });
    }).toThrowError('Unhandled action type: UNSUPPORTED_ACTION_TYPE');
  });

  it('should set state correctly when FETCHED_PRODUCTS_SUCCESS is dispatched', () => {
    const action = {
      type: 'FETCHED_PRODUCTS_SUCCESS',
      payload: [{ id: 1, name: 'Product 1' }],
    };

    const expectedState = {
      products: [{ id: 1, name: 'Product 1' }],
      isLoading: false,
      error: null,
    };

    expect(productsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set state correctly when FETCHED_PRODUCTS_FAILURE is dispatched', () => {
    const action = {
      type: 'FETCHED_PRODUCTS_FAILURE',
      error: 'Error fetching products',
    };

    const expectedState = {
      products: [],
      isLoading: false,
      error: 'Error fetching products',
    };

    expect(productsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should set state correctly when FETCHED_PRODUCTS_COMPLETE is dispatched', () => {
    const action = {
      type: 'FETCHED_PRODUCTS_COMPLETE',
    };

    const expectedState = {
      products: [],
      isLoading: false,
      error: null,
    };

    expect(productsReducer(initialState, action)).toEqual(expectedState);
  });
});
