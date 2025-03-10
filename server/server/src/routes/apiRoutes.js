const express = require("express");
const rateLimiter = require("../config/rateLimiter");
const {
  fetchBooksData,
  filterUniqueBooks,
  addRatingsToBooks,
  fetchBookRating,
} = require("../utils");

const router = express.Router();

router.use(rateLimiter);

router.use("/", async (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  try {
    const booksData = await fetchBooksData(baseUrl, req.url);
    const uniqueBooks = filterUniqueBooks(booksData.docs);
    const booksWithRatings = await addRatingsToBooks(baseUrl, uniqueBooks);

    res.json({
      books: booksWithRatings,
      num_found: booksData.numFound,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
