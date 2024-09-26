import cn from 'classnames';
import usersFromServer from '../../api/users';

export const UserFilters = ({ userFilter, setUserFilter }) => {
  return (
    <p className="panel-tabs has-text-weight-bold">
      <a
        data-cy="FilterAllUsers"
        href="#/"
        className={cn({ 'is-active': !userFilter })}
        onClick={() => setUserFilter(null)}
      >
        All
      </a>

      {usersFromServer.map(({ id, name }) => (
        <a
          data-cy="FilterUser"
          href="#/"
          key={id}
          className={cn({ 'is-active': userFilter === id })}
          onClick={() => setUserFilter(id)}
        >
          {name}
        </a>
      ))}
    </p>
  );
};
