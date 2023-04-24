import React from 'react'
import UserCard from './UserCard'

const UsersList = ({users, deleteUser, handleClickEdit}) => {
  return (
    <section className="grid bg-black/40 min-h-full py-8 gap-10 auto-rows-auto 
    grid-cols-[repeat(auto-fill,_250px)] border-[2px] justify-center">
      {
        users.map((user) => (
        <UserCard key={user.id} user={user} deleteUser={deleteUser} handleClickEdit={handleClickEdit}/>
        ))}
    </section>
  );
};

export default UsersList