const { TARGET_API } = require("../config/env");

const fetchFromAPI = async (endpoint, method = "GET", headers = {}) => {
  try {
    const url = `${TARGET_API}/${endpoint}`;

    console.log(url);

    const options = {
      method,
      headers: {
        ...headers,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${data.message}`);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = { fetchFromAPI };
