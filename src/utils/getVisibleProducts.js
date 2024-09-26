import { products } from './products';

export const getVisibleProducts = (
  userFilter,
  searchQuery,
  categoriesFilter,
  sorting,
) => {
  let visibleProducts = [...products];

  // USER FILTER

  if (userFilter) {
    visibleProducts = visibleProducts.filter(
      product => product.user.id === userFilter,
    );
  }

  // SEARCH FILTER

  const normilizedQuery = searchQuery.trim().toLowerCase();

  if (normilizedQuery) {
    visibleProducts = visibleProducts.filter(product => {
      const normilizedProductName = product.name.trim().toLowerCase();

      return normilizedProductName.includes(normilizedQuery);
    });
  }

  // CATEGORY FILTER

  if (categoriesFilter.length > 0) {
    visibleProducts = visibleProducts.filter(
      product => categoriesFilter.includes(product.category.id),
      // eslint-disable-next-line comma-dangle
    );
  }

  // SORT

  if (sorting.column) {
    visibleProducts.sort((first, second) => {
      switch (sorting.column) {
        case 'ID':
          return first.id - second.id;

        case 'Product':
          return first.name.localeCompare(second.name);

        case 'Category':
          return first.category.title.localeCompare(second.category.title);

        case 'User':
          return first.user.name.localeCompare(second.user.name);

        default:
          return 0;
      }
    });
  }

  if (sorting.order === 'desc') {
    visibleProducts.reverse();
  }

  return visibleProducts;
};
