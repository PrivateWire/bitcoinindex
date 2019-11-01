import React from 'react';
import { Card, CardHeader, CardBody, CardText,ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const currencyCard = (props) => {
    if(!props.currencies.bpi){
        return <div className="loading-styles"><br/>Loading...<br/></div>
    }
    return (
        <div>
            <i>Coin:{props.currencies.chartName}. Exchange rates</i>
            <Card>
                <CardHeader></CardHeader>
                <CardBody>
                    <CardText>
                        <ListGroup>
                            <ListGroupItem>
                                {props.currencies.bpi.EUR.description} || Rate: {props.currencies.bpi.EUR.rate} || Float: {props.currencies.bpi.EUR.rate_float}
                            </ListGroupItem>
                        </ListGroup>,
                    </CardText>
                </CardBody>
            </Card>
           <i>{props.currencies.disclaimer}</i>
        </div>
    );
};
//ProtpType Validation
currencyCard.propTypes = {
    currencies: PropTypes.object
};

export default currencyCard;


