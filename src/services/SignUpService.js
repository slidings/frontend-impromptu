import { API_URL } from "../constants/constants";

const apiSignUp = async (user, navigate, setErrors) => {
  try {
    const response = await fetch(`${API_URL}/signup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    });

    const data = await response.json();
    if (!response.ok) {
      if (response.status === 400) {
        throw new Error(data.username || data.email || data.password);
      } else {
        throw new Error("An error occurred. Please try again later.");
      }
    }

    localStorage.setItem("username", data.user.username);
    localStorage.setItem("token", data.token);

    navigate("/");
  } catch (error) {
    console.error(error);
    setErrors(error.message);
  }
};

export default apiSignUp;
