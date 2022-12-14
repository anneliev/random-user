import React from 'react';
import Loader from '../uiCompontents/Loader';
import useFetch from '../services/useFetch';
import PageNotFound from '../uiCompontents/PageNotFound';

export default function UserList(props) {
  const {
    data: users,
    loading,
    error,
  } = useFetch('?results=' + props.quantity);

  function renderUserList(u) {
    return (
      <div
        key={u.registered.date}
        className="flex w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-8"
      >
        <div className="w-full border-2 rounded-sm">
          <div className="flex image justify-center py-4">
            <img
              src={u.picture.large}
              alt={u.name.first + u.name.last}
              className="w-2/3"
            />
          </div>
          <div className="truncate content w-full m-w-full p-4">
            <h2 className="truncate text-lg">
              {u.name.title} {u.name.first} {u.name.last}
            </h2>
            <a
              href={`mailto:${u.email}`}
              className="underline hover:text-green-900 focus:text-green-900"
            >
              {u.email}
            </a>
            <p>From {u.location.city}</p>
            <p>{u.registered.age} years old</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) throw error;
  if (loading) return <Loader />;
  if (users.length === 0) return <PageNotFound />;

  return (
    <>
      <section id="users" className="flex flex-wrap mx-auto md:mx-10 xl:mx-20">
        {users.results.map(renderUserList)}
      </section>
    </>
  );
}
