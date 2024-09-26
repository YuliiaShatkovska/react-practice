import usersFromServer from '../api/users';
import categoriesFromServer from '../api/categories';
import productsFromServer from '../api/products';

const getCategoryById = id => {
  return categoriesFromServer.find(category => category.id === id);
};

const getUserById = id => {
  return usersFromServer.find(user => user.id === id);
};

export const products = productsFromServer.map(product => {
  const category = getCategoryById(product.categoryId) || null;
  const user = getUserById(category.ownerId) || null;

  return {
    ...product,
    category,
    user,
  };
});

export const columns = ['ID', 'Product', 'Category', 'User'];
