import { API_URL } from "../constants/constants";

// user is an object with username, password, and email keys.
const apiLogin = async (user, navigate, setErrors, onSuccess) => {
  try {
    const response = await fetch(`${API_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Invalid username");
      } else if (response.status === 401) {
        throw new Error("Invalid password");
      } else {
        throw new Error("An error occurred. Please try again later.");
      }
    }

    const data = await response.json();
    localStorage.setItem("username", data.user.username);
    localStorage.setItem("token", data.token);

    onSuccess(); // Call the success callback

    //navigate("/");
  } catch (error) {
    console.error(error);
    setErrors(error.message);
  }
};

export default apiLogin;