import React, { Component } from 'react'
import Card from './Card'

/* const CardList = ({robots}) => {
    const CardArray = robots.map((user, i) => {
        return (
            <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}/>
        )
    })
    return (
      <div>
        {CardArray}
      </div>
    );
} */

const CardList = ({robots}) => {
    return (
      <div>
        {
            robots.map((user, i) => {
                return (
                    <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}/>
                );
            })
        }
      </div>
    );
}

export default CardList;