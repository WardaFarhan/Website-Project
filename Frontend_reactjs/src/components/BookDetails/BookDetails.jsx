import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Card, CardActions, CardContent, Typography, CardMedia} from '@material-ui/core';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";
const Recommendation_URL = "http://127.0.0.1.5000"

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [recommendBooks, setRecommendedBooks] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }

    async function getRecommendedBooks(){
      try {
        {/*// TODO: fetch user prev books from backend server
         const userId = `645665ab60aef345ace8e675`;
        const userPrevBooks = await fetch(`http://mongodb+srv://warda:12345@requirelogin.bhn90gr.mongodb.net/?retryWrites=true&w=majority/api/users/fetchUserBooks?userId=${userId}`
          //'http:localhost:27017/api/routes/book_route_call/fetchUserBooks?userId=');
        //['message in a bottle'];
        //const response = await fetch(`http://127.0.0.1:5000/books/recommend?books=[%27harry%20potter%27,%27message%20in%20a%20bottle%27,%27spider%20man%27]`);
        const response = await fetch(`${Recommendation_URL}/books/recommend?books=[...${userPrevBooks}]`);
      */}

        // TODO: fetch userId from localstorage which was saved on signup/login
        const userId = window.localstorage.getItem('user');
        let userPrevBooksData = await fetch(
          //`http://localhost:8080/api/users/fetchUserBooks?userId=${userId}`
          'http://localhost:3200/api/book_route_call/fetchUserBooks?userId=${userId}'
        );
        userPrevBooksData = await userPrevBooksData.json();
        const userPrevBooks = userPrevBooksData ? userPrevBooksData.books.map(book => book?.title || '') : []
        
        const response = await fetch(`${Recommendation_URL}/books/recommend?books=[${userPrevBooks.map(b=>`'${b}'`)}]`);
        const data = await response.json();
        console.log(data);
        if (data && data.recommendations) {
          setRecommendedBooks(data.recommendations);
        }
      } catch(error){
        console.log(error);
      }
    }
  
  
    getBookDetails();
    getRecommendedBooks();
  }, [id]);

  if(loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book?.cover_img} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>


            {
              recommendBooks?.map((book) => {
                return(
                <>
                <Card style="cardMain" key={book.id}>
                <CardContent >
              <Typography gutterBottom variant="h3" component="div">
               Recommended Books
              </Typography>
              </CardContent>

                 <CardActions>
                 <CardMedia style = "cardImage">{book.cover_img}</CardMedia>

                <CardContent >
                 <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                 </Typography>
                 </CardContent>
                 </CardActions>
                  
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {book.author.join(", ")}
                </Typography>
              </CardContent>

               <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {book.edition_count}
                </Typography>
              </CardContent>

               <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {book.first_publish_year}
                </Typography>
              </CardContent>
                </Card>
                </>
               ) }) }
        </div>
      </div>
    </section>
  )
}

export default BookDetails