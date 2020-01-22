import React, {Component} from 'react';
import './Header.scss';
import { faSearch, faBell, faCircle, faTimes, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class Header extends Component {

    state = {
        isSearching: false,
        searchValue: '',
    }

    toggleIsSearching = () => {
        this.setState({ isSearching: !this.state.isSearching,  searchValue: '' });
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    canShowBackButton = () => {
        return this.props.location.pathname !== '/list';
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render(){
        return(
            <div className="header">
                
                {this.canShowBackButton() && !this.state.isSearching && 
                    <div className="header__back" onClick={ this.goBack }>
                        <FontAwesomeIcon icon={ faChevronLeft } size="sm" />
                        <span className="header__back--text">Back</span>
                    </div>
                }

                <div className="header__search" style={{ flexGrow: this.state.isSearching ? 1 : 0}}>
                    {this.state.isSearching && 
                        <div className="header__search--input-container">
                            <TextField
                                style={{ width: '100%' }}
                                value={this.state.searchValue}
                                onChange={this.handleChange}
                                placeholder="Filter"
                                name="searchValue"
                                autoFocus
                            />
                        </div>
                    }
                    <button className="header__search--btn" onClick={ this.toggleIsSearching }>
                        <FontAwesomeIcon style={{ color: '#c6c6c6' }} icon={ this.state.isSearching ? faTimes : faSearch  } size="sm" />
                    </button>
                </div>
                <div className={ `header__alert ${this.state.isSearching ? 'is-searching' : ''}`}>
                    <button className="header__alert--btn">
                        <FontAwesomeIcon style={{ color: '#c6c6c6' }} icon={ faBell } size="sm" />
                    </button>
                </div>
                <div className={ `header__user ${this.state.isSearching ? 'is-searching' : ''}`}>
                    <FontAwesomeIcon style={{ color: '#9ed0fd' }} icon={ faCircle } className="header__user--status" size="lg" />
                    <span className="header__user--user-name">Thiago Diniz</span>
                </div>
            </div>
        )
    }
} 

export default withRouter(Header);