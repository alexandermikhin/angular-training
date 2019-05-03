import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

export const getProducts = createSelector(
  getProductsState,
  state => state.data
);

export const getSelectedProduct = createSelector(
  getProductsState,
  state => state.selectedProduct
);

export const getProductsLoading = createSelector(
  getProductsState,
  state => state.loading
);

export const getProductEditComplete = createSelector(
  getProductsState,
  state => state.editComplete
);
