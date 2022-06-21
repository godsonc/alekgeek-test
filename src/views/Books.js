import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAllBooks } from "../services/book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllBooks()
      .then((res) => {
        setBooks(res.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getBookImage = (resource) => {
    let obj = resource.find((o) => o.type === "image/jpeg");
    console.log(obj);

    return "";
  };

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Container>
          {books.map((book, index) => {
            return (
              <Grid
                container
                spacing={3}
                item
                xs="auto"
                key={index}
                my={5}
                templateColumns="repeat(5, 1fr)"
                gap={3}
              >
                {getBookImage(book.resources)}
                <text item xs={1} colSpan={1} w="100%" h="10">
                  <img
                    alt={book.title}
                    height={80}
                    width={60}
                    src="https://www.gutenberg.org/cache/epub/84/pg84.cover.small.jpg"
                  />
                </text>
                <text>
                  <text fontSize="sm">{book.title}</text>
                  <text fontSize="xs">by {book.agents[0].person}</text>
                </text>
                <text colSpan={5} w="100%" h="10">
                  <text color="blue.400" fontSize="xm">
                    View
                  </text>
                </text>
              </Grid>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default Books;
