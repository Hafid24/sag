import React, { useState } from "react";
import { Box, Paper, Divider } from "@mui/material";

import HeaderRow from "./HeaderRow";
import Pagination from "../molecules/Pagination";
import Row from "../molecules/Row";
const Table = () => {
  const createData = (id, title, author, publish, rating, first) => {
    return { id, title, author, publish, rating, first };
  };

  const allRows = [
    createData(
      1,
      "The Catcher in the Rye",
      "J.D. Salinger",
      1951,
      4.2,
      "If you really want to hear about it, the first thing you'll probably want to know is where I was born and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth.",
      "$5,000"
    ),
    createData(
      2,
      "To Kill a Mockingbird",
      "Harper Lee",
      1960,
      4.5,
      "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
      "$3,500"
    ),
    createData(
      3,
      "1984",
      "George Orwell",
      1949,
      4.3,
      "It was a bright cold day in April, and the clocks were striking thirteen.",
      "$2,800"
    ),
    createData(
      4,
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      1925,
      4.4,
      "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
      "$4,200"
    ),
    createData(
      5,
      "Pride and Prejudice",
      "Jane Austen",
      1813,
      4.4,
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      "$6,100"
    ),
    createData(
      6,
      "The Lord of the Rings",
      "J.R.R. Tolkien",
      1954,
      4.3,
      "When Mr. Bilbo Baggins of Bag-End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.",
      "$2,900"
    ),
    createData(
      7,
      "The Little Prince",
      "Antoine de Saint-Exup ry",
      1943,
      4.4,
      "In the desert, you see, I am beautifully dressed.",
      "$3,700"
    ),
    createData(
      8,
      "The Cat in the Hat",
      "Dr. Seuss",
      1957,
      4.2,
      "The sun did not shine. It was too wet to play. So we sat in the house all that cold, cold, wet day.",
      "$5,300"
    ),
    createData(
      9,
      "The Wizard of Oz",
      "L. Frank Baum",
      1900,
      4.2,
      "Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife.",
      "$4,800"
    ),
    createData(
      10,
      "Alice's Adventures in Wonderland",
      "Lewis Carroll",
      1865,
      4.2,
      "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?'",
      "$3,200"
    ),
    createData(
      11,
      "The Picture of Dorian Gray",
      "Oscar Wilde",
      1890,
      4.3,
      "The studio was filled with the rich odor of roses, and when the light summer breeze stirred amidst the trees of the garden there came through the open window the sweet murmur of the fountain, or the more distant note of a bird.",
      "$4,100"
    ),
    createData(
      12,
      "Wuthering Heights",
      "Emily Bront ",
      1847,
      4.2,
      "1801. I have just returned from a visit to my landlord the solitary neighbour that I shall be troubled with.",
      "$5,700"
    ),
    createData(
      13,
      "Jane Eyre",
      "Charlotte Bront ",
      1847,
      4.4,
      "There was no possibility of taking a walk that day.",
      "$4,400"
    ),
  ];

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = allRows.slice(startIndex, endIndex);

  return (
    <Box>
      <Box sx={{ padding: "16px" }}>
        <Paper
          elevation={0}
          sx={{
            overflow: "hidden",
          }}
        >
          <HeaderRow />
          <Divider />
          {displayedRows.map((row, index) => (
            <Row
              key={row.id}
              row={row}
              index={index}
              length={displayedRows.length}
            />
          ))}
          <Pagination
            page={page}
            rowsPerPage={rowsPerPage}
            allRowsLength={allRows.length}
            handleChangePage={setPage}
            handleChangeRowsPerPage={setRowsPerPage}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default Table;
