import axios from "axios";

export const loadMore = async (page) => {
  try {
    const response = await axios.get(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    );
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
