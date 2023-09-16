import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
function Books() {
    const [books, setBooks] = useState([])
    // fetch api get all books
    const getBooks = async () => {
        const booksResponse = await axios.get('http://localhost:5000/books');
        // const myBooks = booksResponse.json();
        console.log("🚀 ~ file: Books.js:9 ~ booksAPI ~ myBooks:", booksResponse)
        setBooks(booksResponse.data.data)
    }

    useEffect(() => {
        console.log('im in useeffect') 
        try {
            getBooks();   
        } catch (error) {
            console.log("🚀 ~ file: Books.js:18 ~ useEffect ~ error:", error)
        }
    
    }, [])
    
  return (
    <>
    {books.map((item) => (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
              {item.desc}<br/>
              {item.price}
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
      
    ))}
    </>
  );
}

export default Books;