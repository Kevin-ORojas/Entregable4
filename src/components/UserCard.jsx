const UserCard = ({ user , deleteUser, handleClickEdit }) => {
  return (
    <article className="border-[2px] py-2 rounded-xl">
      <div className="">
        <img className="w-[100px] aspect-[3/5] object-cover mx-auto rounded-md" src={user.image_url ? user.image_url : "/images/noImage.jpg"} alt="User image" />
      </div>
      <h3 className="font-bold px-2">
        {user.first_name} {user.last_name}
        <hr />
      </h3>
      <ul className="text-bold">
        <li>
          <h4 className="text-[#D3D3D3] text-sm px-2">CORREO</h4>
          <span className="text-sm font-semibold px-2">{user.email}</span>
        </li>
        <li>
          <h4 className="text-[#D3D3D3] px-2">Cumpleaños</h4>
          <span className="text-sm">
            <i className="bx bx-gift px-2"></i>
            {user.birthday}
            <hr />
          </span>
        </li>
      </ul>
      <div className="flex justify-end gap-2 px-2 py-4 ">
        <button className=" w-8  text-white rounded-[4px] bg-red-500 border-[2px]" onClick={() => deleteUser(user.id)}>
          <i className="bx bx-trash text-md  "></i>
        </button>
        <button className="bg-[#BDBDBD] rounded-[4px]  border-[2px] text-white w-8"  onClick={() => handleClickEdit(user)}>
        <i className="bx bxs-pencil  "></i>
        </button>
      </div>

   
    </article>
  );
};

export default UserCard;






