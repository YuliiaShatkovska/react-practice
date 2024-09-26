import cn from 'classnames';
import categoriesFromServer from '../../api/categories';

export const CategoryFilter = ({ categoriesFilter, setCategoriesFilter }) => {
  const handleChangeCategory = id => {
    setCategoriesFilter(current => {
      if (current.includes(id)) {
        return current.filter(currentId => currentId !== id);
      }

      return [...current, id];
    });
  };

  return (
    <div className="panel-block is-flex-wrap-wrap">
      <a
        href="#/"
        data-cy="AllCategories"
        className={cn('button is-success mr-6 ', {
          'is-outlined':
            categoriesFilter.length &&
            categoriesFilter.length !== categoriesFromServer.length,
        })}
        onClick={() => setCategoriesFilter([])}
      >
        All
      </a>
      {categoriesFromServer.map(({ id, title }) => (
        <a
          data-cy="Category"
          className={cn('button mr-2 my-1 ', {
            'is-info': categoriesFilter.includes(id),
          })}
          href="#/"
          key={id}
          onClick={() => handleChangeCategory(id)}
        >
          {title}
        </a>
      ))}
    </div>
  );
};
