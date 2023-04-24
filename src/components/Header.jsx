import React from 'react'

const Header = ({setIsShowForm}) => {

    const handleClickShowModal = () => {
        setIsShowForm((isShowForm) => !isShowForm)
    }
  return (
    <header className='grid grid-cols-2  sm:p-8 md:p-4 mx-auto  bg-slate-500  '>
      <h1 className='text-2xl font-bold'>Usuarios</h1>

      <button onClick={handleClickShowModal} className=" bg-purple-p col-end-4  text-white p-2 hover:bg-purple-p/90 cursor-pointer transition-colors text-sm"><i onClick={setIsShowForm} className=' bx bx-plus'></i>Crear nuevo usuario</button>
      
    </header>
  )
}

export default Header


