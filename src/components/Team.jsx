import React, { useState, useContext } from 'react';
import { MyContext } from '../contexts/Context';
import Footer from './Footer';

const Team = () => {
	const { team, setTeam } = useContext(MyContext);

	setTeam(team);

	console.log(team);

	return (
		<div>
			<h1 className="team-heading">THE TEAM</h1>
			<p></p>
			<div className="team-container">
				{team.map((team) => {
					return (
						<div key={team.id}>
							<img
								className="team-img"
								src={team.imgUrl}
								alt=""
							/>

							<h2 className="team-name">{team.name}</h2>
							<p>{team.profession}</p>
                            
                            
                           
							 <p className="team-github">Github<a className="fa-brands fa-github icon" href={team.github}  target="_blank"></a></p>
							<p className="team-linkedIn"> LinkedIn <a className="fa-brands fa-linkedin icon" href={team.linkedIn}  target="_blank"></a></p> 
						</div>
					);
				})}
			</div>
            
		</div>
	);
};

export default Team;
