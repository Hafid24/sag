const express = require("express");

const rateLimiter = require("../config/rateLimiter");
const { fetchBookRating } = require("../utils/fetchBookData.js");

const router = express.Router();

router.use(rateLimiter);

router.use("/", async (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  try {
    const response = await fetch(`${baseUrl}/search${req.url}`);
    if (!response.ok) throw new Error("Failed to fetch books data");
    const booksData = await response.json();

    const seenBooks = new Set();

    const uniqueBooks = booksData.docs.filter((book) => {
      const key = `${book.title}_${book.author_name.join(", ")}`;
      if (seenBooks.has(key)) return false;
      seenBooks.add(key);
      return true;
    });
    booksData.docs = uniqueBooks;

    const booksWithRatings = await Promise.allSettled(
      booksData.docs.map(async (book) => ({
        ...book,
        rating: await fetchBookRating(baseUrl, book.key),
      }))
    );

    const result = {
      books: booksWithRatings
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value),
      num_found: booksData.numFound,
    };
    res.json(result);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
