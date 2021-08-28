import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {motion} from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cards from '../components/cards.js';
import Header from '../components/header.js';
import '../css/home.css';

function Home() {

  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

const [todos, setTodos] = useState([]);
const fetchApi = async ()=>{
  await axios.get('http://cruce-app.herokuapp.com/products')
  .then(response => {
    setTodos(response.data);
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  });
};

useEffect(()=>{
  fetchApi();
}, [])

  return (
    <React.Fragment>
    <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

      <Header/>

      <div className='f'>
        <div className='container'>
          <div className='row'>
            {!todos ? (
              '...cargando'
            ) : (
              <Cards todos={todos}/>
            )}
          </div>
        </div>
      </div>
      </motion.div>
    </React.Fragment>
  );
}

export default Home;
