import { MyContext } from './Context';

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const Container = ({ children }) => {
    let child = '';

    //  const [id] = useState([{id: uuidv4}])

    const [team, setTeam] = useState([
        {
            id: uuid(),
            name: 'CHRISTIANA',
            profession: 'Web Developer',
            imgUrl: './team-photos/christiana.jpg',
            github: 'https://github.com/Christyjonah',
            linkedIn: 'https://www.linkedin.com/in/christiana-jonah-a00442241',
        },
        {
            id: uuid(),
            name: 'LUDO',
            profession: 'Web Developer',
            imgUrl: './team-photos/ls.jpg',
            github: 'https://github.com/Ludovil',
            linkedIn: 'https://www.linkedin.com/in/ludovic-saule-106019250/',
        },

        {
            id: uuid(),
            name: 'MAURO ',
            profession: 'Web Developer',
            imgUrl: './team-photos/mauro.jpg',
            github: 'https://github.com/maurofilippifarmar',
            linkedIn: 'https://www.linkedin.com/in/mauro-filippi-farmar-978326248/',
        },
        {
            id: uuid(),
            name: 'EMAN',
            profession: 'Web Developer',
            imgUrl: './team-photos/eman.jpg',
            github: 'https://github.com/dolce-emmy',
            linkedIn: 'https://www.linkedin.com/in/eman-yassin-525278239/',
        },
    ]);

    const [about, setAbout] = useState([
        {
            imageUrl:'./about/camera.jpg',
        }
    ])
    // console.log(articles);
    return (
        <MyContext.Provider value={{ team, setTeam }}>
            {children}
        </MyContext.Provider>
    );
};

export default Container;
