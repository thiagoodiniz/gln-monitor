import React from 'react';
import './List.scss';
import { Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export const List = (props) => {
    return (
        <section className="list-container">
            {props.itemList.length > 0 && 
                <Divider dashed={true} style={{ margin: '10px 0'}} />
            }
            <div className="list">
                {props.itemList.map((item, index) =>
                    <div key={index} >
                        <div className="list__item">
                            {
                                Object.keys(item).map((column) => 
                                        <span className="list__item--text">{ item[column] }</span>
                                )
                            }

                            <FontAwesomeIcon 
                                style={{ color: '#9dcffd', cursor: 'pointer' }}
                                icon={ faTrashAlt } 
                                size="sm" 
                                onClick={ props.onRemoveItem.bind(this, index)}
                            />

                        </div>
                        {props.itemList.length > index + 1 && 
                            <Divider dashed={true} style={{ margin: '10px 0'}} />
                        }
                    </div>
                )}
            </div>
        </section>
    );
}

List.propTypes = {
    itemList: PropTypes.array.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
}