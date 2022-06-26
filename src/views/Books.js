import { Container, Grid } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { fetchAllBooks } from "../services/book";
import "./Books.css";

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
      <Nav>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </Nav>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Container className="bookview">
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
                gap={6}
              >
                {getBookImage(book.resources)}
                <text item xs={1} colSpan={1} w="100%" h="10">
                  <img
                    alt={book.title}
                    height={80}
                    width={60}
                    src="https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg"
                  />
                </text>
                <text>
                  <text fontSize="sm">{book.title}</text>
                  <text fontSize="xm">by {book.agents[0].person}</text>
                </text>
                <text colSpan={5} w="100%" h="10">
                  <text color="green" fontSize="xl">
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
