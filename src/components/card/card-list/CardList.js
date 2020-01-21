import React, {Component} from 'react';
import CardItem from '../CardItem';
import './CardList.scss';
import { connect } from 'react-redux';
import { healthCheck } from '../../../core/healthCheck'

class CardList extends Component {

    possibleItems = healthCheck;

    render() {
        return(
            <div className="card-list">
               {this.props.healthCheck.apohealthcheck.map((item, index) =>                 
                    <CardItem 
                        key= {index} 
                        title= { this.possibleItems[Object.keys(item)[0]].title } 
                        content= { Object.values(item)[0]}
                        cardType= { Object.keys(item)[0]}
                    >
                    </CardItem>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    healthCheck: state.healthCheck,
});


export default connect(mapStateToProps, null)(CardList);