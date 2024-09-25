export const getVisibleProduct = (
  products,
  { userFilter, searchFilter, categoryFilter },
) => {
  let visibleProducts = [...products];

  if (userFilter !== 'all') {
    visibleProducts = visibleProducts.filter(
      product => product.user.name === userFilter,
    );
  }

  const normilizedSearchFilter = searchFilter.toLowerCase().trim();

  if (normilizedSearchFilter) {
    visibleProducts = visibleProducts.filter(product => {
      const normilizedProductName = product.name.toLowerCase().trim();

      return normilizedProductName.includes(normilizedSearchFilter);
    });
  }

  if (categoryFilter !== 'all') {
    visibleProducts = visibleProducts.filter(
      product => product.category.title === categoryFilter,
    );
  }

  return visibleProducts;
};
