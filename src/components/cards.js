import React, {useState, useEffect} from 'react';
import Card from "./card";

const Cards = ({ todos }) => todos.map((item) => <Card key={item.id} item={item} />)

export default Cards;
