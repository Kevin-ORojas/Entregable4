import React from "react";

const Modal = ({
  isShowForm,
  handleSubmit,
  register,
  setIsShowForm,
  submit,
  reset,
  setisUserIdToEdit,
  isUserIdToEdit,
  errors,
}) => {
  const handleClickCloseModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
    reset({
      firt_name: "",
      last_name: "",
      email: "",
      password: "",
      birtday: "",
      image_url: "",
    });
    setisUserIdToEdit();
  };

  return (
    <section
      className={`absolute top-0 left-0 bottom-0 
    right-0 bg-black/50 flex justify-center items-center transition-opasity ${
      isShowForm ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[300px] relative bg-white p-4 grid gap-4"
      >
        <h3 className="text-2xl font-bold">
          {isUserIdToEdit ? "Editar Usuario" : "Nuevo Usuario"}
        </h3>
        <div className="grid gap-1">
          <label className="text-xs font-semibold " htmlFor="first_name">
            Nombre<span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="first_name"
            type="text"
            {...register("first_name")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold " htmlFor="last_name">
            Apellidos<span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="last_name"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold " htmlFor="email">
            Correo<span className="text-red-500">*</span></label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="email"
            type="text"
            {...register("email")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold " htmlFor="password">
            Contraseña<span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="password"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold " htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold " htmlFor="image_url">
            URL
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="image_url"
            type="text"
            {...register("image_url", {
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpg|jpeg)/,
                message: "El formato de Url es invalida",
              },
            })}
          />
          <span>{errors.image_url && errors.image_url.message}</span>
        </div>
        <i
          onClick={handleClickCloseModal}
          className="bx bx-x absolute top-2 right-2 
            text-2xl hover:text-red-500 cursor-pointer"
        ></i>
        <button
          className="bg-purple-p text-white p-2 hover:bg-purple-p/80
             transition-colors text-sm"
        >
          {isUserIdToEdit ? "Guardar cambios" : "Agregar nuevo usuario"}
        </button>
      </form>
    </section>
  );
};

export default Modal;
