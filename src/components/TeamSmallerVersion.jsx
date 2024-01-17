import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../contexts/Context';

const TeamSmallerVersion = () => {
    const navigate = useNavigate();

    const { team, setTeam } = useContext(MyContext);

    setTeam(team);

    console.log(team);

    const clickHandler = () => {
        navigate('/team');
    };

    return (
        <div>
            <h2 className="teamSmallerVersion-heading">THE TEAM</h2>
            <div className="teamSmallerVersion-container">
                {team.map((team) => {
                    return (
                        <div key={team.id}>
                            <img
                                className="teamSmallerVersion-img"
                                src={team.imgUrl}
                                alt=""
                            />

                            <h2 className="teamSmallerVersion-name">
                                {team.name}
                            </h2>
                        </div>
                    );
                })}
            </div>
            <div className="teamSmallerVersion-container-button">
                <button
                    className="teamSmallerVersion-btn"
                    onClick={clickHandler}
                >
                    TO PILOT CODER TEAM{' '}
                </button>
            </div>
        </div>
    );
};

export default TeamSmallerVersion;
