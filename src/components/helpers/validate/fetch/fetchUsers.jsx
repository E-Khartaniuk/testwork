import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`
    );
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
