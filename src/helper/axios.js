import axios from "axios";
const serverUrl = "http://localhost:8000";
export const loginUser = async (obj) => {
  try {
    const { data } = await axios.post(serverUrl + "/user/signin", obj);

    return data;
  } catch (error) {
    console.log("Error while login", error);
  }
};
