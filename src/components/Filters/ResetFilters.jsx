export const ResetFilters = ({
  setUserFilter,
  setSearchQuery,
  setCategoriesFilter,
}) => {
  const handleReset = () => {
    setSearchQuery('');
    setUserFilter(null);
    setCategoriesFilter([]);
  };

  return (
    <div className="panel-block">
      <a
        data-cy="ResetAllButton"
        href="#/"
        className="button is-link is-outlined is-fullwidth"
        onClick={() => handleReset()}
      >
        Reset all filters
      </a>
    </div>
  );
};
