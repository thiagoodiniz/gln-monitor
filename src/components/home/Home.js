import React, { Component } from "react";
import SideMenu from "../side-menu/SideMenu";
import Header from "../header/Header";
import CardList from "../card/card-list/CardList";
import "./Home.scss";
import { Creators as HealthCheckActions } from "../../store/actions/health-check";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CircularProgress } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

class Home extends Component {

    componentDidMount = () => {
        this.props.getHealthCheckData();
    }

    canShowCards = () => {
        const hc = this.props.healthCheck;
        return !hc.loading 
            && !hc.error
            && hc.apohealthcheck.length > 0;
    }

    render(){
        return (
            <div className="home">
                <div className="home__content">
                    <SideMenu></SideMenu>

                    <div className="home__content--center">
                        <Header></Header>

                        {this.canShowCards() &&
                            <CardList></CardList>
                        }

                        {!this.canShowCards() &&
                            <div className="info-content">
                                {this.props.healthCheck.loading  &&
                                    <CircularProgress disableShrink />
                                }

                                {this.props.healthCheck.error && 
                                    <Alert variant="filled" severity="error">
                                        An error occurred while trying to obtain the Health Check data. Try again later. 
                                    </Alert>
                                }
                            </div>
                        }
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    healthCheck: state.healthCheck,
});


const mapDispatchToProps = dispatch => bindActionCreators(HealthCheckActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);