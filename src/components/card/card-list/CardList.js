import React, {Component} from 'react';
import {CardItem} from '../CardItem';
import './CardList.scss';

class CardList extends Component {
    MOCKMENUS = ["Live Cache status (LC10)","Process chain error (RSPC)","Number of objects in CIF (SMQ1/SMQ2)","Number of dumps (ST22)","Process chain execution that exceed time limit (RSPC)","Process chain execution that passed two standard deviation of last x execution (RSPC)","Memory consumption (SM04)","Highest processing time of one job in execution (SM50)","Log space (LC10)"];

    render() {
        return(
            <div className="card-list">
               {this.MOCKMENUS.map((menu, index) => 
                    <CardItem key={index} title={menu}></CardItem>
                )}
            </div>
        );
    }
}

export default CardList;