import Axios from "axios";
import React, {useState , useEffect} from 'react';
import {Pet} from './Pet'
import './Card.css';

export const Card = () => {
			const [dogs, setDogs] = useState([]);
			const fetchDogs= async () => {
			const { data } = await Axios.get(

				"https://petstore.swagger.io/v2/pet/findByStatus?status=available"
				)

				const dogs = data;
				setDogs(dogs);
				console.log(dogs);
			};
		
			useEffect(() => {
				fetchDogs();
			}, []);
		
			return (
				<div className ='card-container'>
					< Pet />
					{dogs.map((dog) => (

						<h1 key={dog.id}
						onClick={() => {
							setDogs(dog);
        }}
						> {dog.status} {dog.name} </h1>
				