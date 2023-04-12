import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../App';
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  function getData(e) {
    console.log(e.Target.value);
  }
 

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form in-collapsible-mode' onSubmit={handleSubmit} action="/submit" method='get'>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' onchange={getData} placeholder='The Lost World ...' ref = {searchText} />
              <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-purple' size = {32} />
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm

 {/*}  <div className="dropdown">
          {data.filter((item) => {
              const searchTerm = searchText.toLowerCase();
              const book_name = searchText.book.title.toLowerCase();

              return ( searchTerm && book_name.startsWith(searchTerm) && book_name !== searchTerm );
            })
            .slice(0, 10)
            .map((item, index) => (
              <div onClick={() => SearchForm(item.book_name)}
                className="dropdown-row"
               // key={item.book.id}
              >
              <Book key = {index} {...item} />
               {item.book_name}
              </div>
            ))}
            </div> */}