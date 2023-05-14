import { API, APIIMAGES } from "../../shared/Api";
import store from "../store";

const { dispatch } = store;

const getAllUsers = async () => {
  try {
    const resultado = await API.get("users");
    const users = resultado.data;
    const usersFilterd = users.map((user) => ({
      id: user._id,
      userName: user.userName,
      image: user.image,
    }));

    dispatch({
      type: "GET_ALL_USERS",
      payload: {
        users: usersFilterd,
      },
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: {
        error: error,
      },
    });
  }
};
const login = async (datos, navigate) => {
  try {
    const resultado = await API.post("users/login", datos);
    dispatch({
      type: "LOGIN",
      payload: {
        user: resultado.data.userToLog,
        token: resultado.data.token,
      },
    });
    localStorage.setItem("token", resultado.data.token);
    navigate("/");

  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: {
        error: error.response.data,
      },
    });
  }
};

const registerUser = async (datos, navigate) => {
  try {
    const formdata = new FormData();

    formdata.append("userName", datos.userName);
    formdata.append("name", datos.name);
    formdata.append("password", datos.password);
    formdata.append("email", datos.email);
    formdata.append("image", datos.image[0]);

    APIIMAGES.post("users/register", formdata).then((resultado) => {
      const user = {
        userName: datos.userName,
        password: datos.password,
      };
      login(user, navigate);
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: {
        error: error,
      },
    });
  }
};
const checkSession = async () => {
  try {
    const resultado = await API.get("users/check");
    dispatch({
      type: "LOGIN",
      payload: {
        user: resultado.data === "No estás autorizado" ? null : resultado.data,
        token: localStorage.getItem("token"),
      },
    });
  } catch (error) {

  }
};
const logout = (navigate) => {
    try {
        localStorage.removeItem("token");
        dispatch({
          type: "LOGOUT",
        });
        navigate("/")
    } catch (error) {
        dispatch({
            type: "ERROR",
            payload: {
              error: error,
            },
          });
    }

};

export { getAllUsers, registerUser, login, checkSession, logout };
