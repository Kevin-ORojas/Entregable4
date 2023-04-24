import axios from "axios";
import "./App.css";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UsersList from "./components/UsersList";

const BASE_URL = "https://users-crud.academlo.tech";

const DEFAULT_VALUES = {
  firt_name: "",
  last_name: "",
  email: "",
  password: "",
  birtday: "",
  image_url: "",
};

function App() {
  const [users, setUsers] = useState([]);
  const [isUserIdToEdit, setisUserIdToEdit] = useState();
  const [isShowForm, setIsShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (!data.birthday) {
      data.birthday = null;
    }

    if (!data.image_url) {
      data.image_url = null;
    }

    if (isUserIdToEdit) {
      editUser(data);
    } else {
      createUser(data);
    }
  };

  const createUser = (data) => {
    const URL = BASE_URL + "/users/";

    axios
      .post(URL, data)
      .then(() => {
        getAllUsers();
        reset({
          firt_name: "",
          last_name: "",
          email: "",
          password: "",
          birtday: "",
          image_url: "",
        });
        setIsShowForm(!isShowForm);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`;

    axios
      .delete(URL)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`;
    axios
      .patch(URL, data)
      .then(() => {
        getAllUsers();
        reset(DEFAULT_VALUES);
        setIsShowForm(!setIsShowForm);
        setisUserIdToEdit();
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/";

    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const handleClickEdit = (data) => {
    setIsShowForm((isShowForm) => !isShowForm); //se setea el estado con funcion callback/estado verdadero falso y estado en negacion verdadero
    reset(data);
    setisUserIdToEdit(data.id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <main className="font-sans bg-black/40">
      <Modal
        register={register}
        handleSubmit={handleSubmit}
        isShowForm={isShowForm}
        setIsShowForm={setIsShowForm}
        submit={submit}
        reset={reset}
        setisUserIdToEdit={setisUserIdToEdit}
        isUserIdToEdit={isUserIdToEdit}
        errors={errors}
      />
      <Header setIsShowForm={setIsShowForm} />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        handleClickEdit={handleClickEdit}
      />

      <footer className="flex gap-2 px- justify-center ">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/NozoDev">
          <i className="bx bxl-github text-4xl "></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kevin-oswaldo-rojas-velandia-73a343241/">
          <i className="bx bxl-linkedin text-4xl "></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kevinrojasxd/">
          <i className="bx bxl-instagram text-4xl"></i>
        </a>
      </footer>
    </main>
  );
}

export default App;
