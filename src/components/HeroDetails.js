import React, { Component, createRef } from 'react';
// import { Card, CardBody, CardImg, CardTitle, CardHeader, Container, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchHeroDetails } from '../actions';
import { Link } from 'react-router-dom';

import { Container, Loader, Card, Sticky, Button, Item } from 'semantic-ui-react';
import './HeroDetails.css';

class HeroDetails extends Component {

    contextRef = createRef();

    constructor(props) {
        super(props);
        // this.state = {
        //     isLoading: false
        // }
        // console.log('props in hero details: ', props)
    }


    componentDidMount() {
        const { match, getHeroDetails } = this.props;
        getHeroDetails(match.params.id);
    }


    render() {

        const { isLoading, heroDetails } = this.props;
        console.log('heroDetails: ', heroDetails)
        if (isLoading) {
            return (
                <div>
                    <h2>Loading...</h2>
                    <Loader active inline='centered' />
                </div>
            )
        } else {
            if (heroDetails) {
                return (
                    <Container ref={this.contextRef}>
                        {/* <Card className="bg-dark text-white">
                            <Card.Img style={imgStyle} src={`${heroDetails.thumbnail.path}.${heroDetails.thumbnail.extension}`} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{heroDetails.name}</Card.Title>
                                <Card.Text>{heroDetails.description}</Card.Text>
                                <Button variant="light" size="md" onClick={() => goBack()}>Go Back</Button>
                            </Card.ImgOverlay>
                        </Card> */}
                        {/* <Card className="bg-dark text-white">
                            <h3>{heroDetails.name}</h3>
                            <CardBody>
                                <CardHeader>
                                    <CardTitle>{heroDetails.description}</CardTitle>
                                </CardHeader>
                                <CardImg src={`${heroDetails.thumbnail.path}.${heroDetails.thumbnail.extension}`} alt="Card image" />
                            </CardBody>
                        </Card> */}

                        <Sticky context={this.contextRef}>
                            <Button className="mt-3 mb-3 ml-5 float-left" as={Link} to="/" content='Go Back' icon='left arrow' labelPosition='left' />
                        </Sticky>
                        <Card
                            fluid
                            header={heroDetails.name}
                            description={heroDetails.description}
                            image={`${heroDetails.thumbnail.path}.${heroDetails.thumbnail.extension}`}
                        />

                        {/* </Card> */}


                        {/* <Item
                            image={`${heroDetails.thumbnail.path}.${heroDetails.thumbnail.extension}`}
                            header={heroDetails.name}
                            description={heroDetails.description}
                        // meta: 'Metadata',
                        // extra: 'Extra',
                        /> */}

                        {/* <Item>
                            <Item.Image size='large' src={`${heroDetails.thumbnail.path}.${heroDetails.thumbnail.extension}`} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header as='a'>{heroDetails.name}</Item.Header>
                                <Item.Description>{heroDetails.descrciption}</Item.Description>
                            </Item.Content>
                        </Item> */}


                    </Container>
                )
            } else return null;
        }


    }
}

const mapStateToProps = state => {
    return {
        heroDetails: state.character.heroDetails,
        isLoading: state.character.gettingHeroDetails
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getHeroDetails: heroId => {
            console.log('in dispatch for getting hero details.');
            dispatch(fetchHeroDetails(heroId))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HeroDetails);