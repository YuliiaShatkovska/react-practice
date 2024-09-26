/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';

import { UserFilters } from './components/Filters/UserFilters';
import { ProductsList } from './components/ProductsList';
import { CategoryFilter } from './components/Filters/CategoryFilter';
import { SearchFilter } from './components/Filters/SearchFilter';
import { ResetFilters } from './components/Filters/ResetFilters';
import { getVisibleProducts } from './utils/getVisibleProducts';

import './App.scss';

export const App = () => {
  const [userFilter, setUserFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [sorting, setSorting] = useState({
    column: null,
    order: 'asc',
  });

  const visibleProducts = getVisibleProducts(
    userFilter,
    searchQuery,
    categoriesFilter,
    sorting,
  );

  const handleSortProducts = column => {
    setSorting(current => {
      if (current.column === column && current.order === 'asc') {
        return {
          ...current,
          order: 'desc',
        };
      }

      if (current.order === 'desc' && current.column === column) {
        return {
          column: null,
          order: 'asc',
        };
      }

      return {
        column,
        order: 'asc',
      };
    });
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <UserFilters
              userFilter={userFilter}
              setUserFilter={setUserFilter}
            />

            <SearchFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <CategoryFilter
              categoriesFilter={categoriesFilter}
              setCategoriesFilter={setCategoriesFilter}
            />

            <ResetFilters
              setUserFilter={setUserFilter}
              setSearchQuery={setSearchQuery}
              setCategoriesFilter={setCategoriesFilter}
            />
          </nav>
        </div>

        <div className="box table-container">
          {visibleProducts.length > 0 ? (
            <ProductsList
              visibleProducts={visibleProducts}
              handleSortProducts={handleSortProducts}
              sorting={sorting}
            />
          ) : (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
