import axios from "axios";

export const fetchToken = async () => {
  try {
    const response = await axios.get(
      `https://frontend-test-assignment-api.abz.agency/api/v1/token`
    );
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
