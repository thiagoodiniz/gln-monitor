import React, {Component} from 'react';
import {CardItem} from '../CardItem';
import './CardList.css';

class CardList extends Component {
    render() {
        return(
            <div className="card-list">
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>

            </div>
        );
    }
}

export default CardList;