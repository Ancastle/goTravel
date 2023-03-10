import axios from "axios";

export const getPlacesData = async (
  bottomLeftLatitude,
  bottomLeftLongitude,
  topRightLatitude,
  topRightLongitude,
  category
) => {
  try {
    const { data } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${category}/list-in-boundary`,
      {
        params: {
          bl_latitude: bottomLeftLatitude,
          bl_longitude: bottomLeftLongitude,
          tr_longitude: topRightLongitude,
          tr_latitude: topRightLatitude,
          limit: "30",
          currency: "USD",
          subcategory: "hotel,bb,specialty",
          adults: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            "9c9edd36b6msh4bea1cd90c28ff8p1e6c90jsn4310d19fd0a1",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data.data;
  } catch (error) {
    return null;
  }
};
