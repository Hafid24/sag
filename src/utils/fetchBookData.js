const fetchBookRating = async (baseUrl, key) => {
  try {
    const response = await fetch(`${baseUrl}/api${key}/ratings.json`);
    if (!response.ok) throw new Error("Failed to fetch rating");
    const ratingData = await response.json();
    const averageRating = ratingData?.summary?.average || 0;

    return averageRating;
  } catch (err) {
    console.error("Error fetching rating:", err);
    return 0;
  }
};

module.exports = { fetchBookRating };
