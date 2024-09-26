import cn from 'classnames';
import { columns } from '../utils/products';

export const ProductsList = ({
  visibleProducts,
  handleSortProducts,
  sorting,
}) => {
  return (
    <table
      data-cy="ProductTable"
      className="table is-striped is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          {columns.map(column => {
            const isSelectedColumn = sorting.column === column;

            return (
              <th key={column}>
                <span className="is-flex is-flex-wrap-nowrap">
                  {column}
                  <a href="#/" onClick={() => handleSortProducts(column)}>
                    <span className="icon">
                      <i
                        data-cy="SortIcon"
                        className={cn('fas ', {
                          'fa-sort-down':
                            isSelectedColumn && sorting.order === 'asc',
                          'fa-sort-up':
                            isSelectedColumn && sorting.order === 'desc',
                          'fa-sort': !isSelectedColumn,
                        })}
                      />
                    </span>
                  </a>
                </span>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {visibleProducts.map(product => {
          const { id, name, category, user } = product;

          return (
            <tr data-cy="Product" key={id}>
              <td className="has-text-weight-bold" data-cy="ProductId">
                {id}
              </td>

              <td data-cy="ProductName">{name}</td>
              <td data-cy="ProductCategory">
                {category.icon} - {category.title}
              </td>

              <td
                data-cy="ProductUser"
                className={
                  user.sex === 'm' ? 'has-text-link' : 'has-text-danger'
                }
              >
                {user.name}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
