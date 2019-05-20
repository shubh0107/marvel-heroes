import React, { createRef } from 'react';
import { connect } from 'react-redux';

import Hero from '../Hero';
import Pagination from '../Pagination';
import { fetchAllCharacters, showingHeroDetails, gotoHomePage } from '../../actions/index';

import { Container } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { Card, Menu, Sticky } from 'semantic-ui-react';



class HeroList extends React.Component {
    // console.log('herolist in herolist component: ', heroList);

    // console.log('loading here in herolist: ', loading);


    constructor(props) {
        super(props)
    }

    contextRef = createRef();



    render() {
        const { heroList, fetchHeroes, loading, showingHeroDetails, showHeroDetails, gotoHomePage } = this.props;
        if (!heroList.length || loading) {
            return (
                <Container ref={this.contextRef}>
                    <Sticky context={this.contextRef}>
                        <Pagination />
                    </Sticky>
                    <Spinner animation="grow" />
                </Container>
            )
        }
        if (!loading && !showingHeroDetails) {
            // return (
            // <Container>
            //     <Card.Group itemsPerRow={3}>
            //         {heroList.map(hero => {
            //             // if (hero.description !== '' && hero.thumbnail.path.split('/')[hero.thumbnail.path.split('/').length - 1] !== 'image_not_available') {
            //             // if (true) {
            //             return (
            //                 // <Col xs="6" md="4" lg="3" key={hero.id}>
            //                 <Hero key={hero.id} hero={hero} showHeroDetails={showHeroDetails} key={hero.id} />
            //                 /* </Col> */
            //             );
            //             // } else {
            //             //     return null;
            //             // }
            //         })}
            //     </Card.Group>
            //     <Pagination fetchHeroes={fetchHeroes} />
            // </Container>

            return (
                <Container ref={this.contextRef}>
                    <Sticky context={this.contextRef}>
                        <Pagination />
                    </Sticky>
                    <Card.Group itemsPerRow={4}>
                        {heroList.map(hero => {
                            return (
                                <Hero key={hero.id} hero={hero} />
                            )
                        })}
                    </Card.Group>
                </Container>

                // <Card.Group items={items} />

            )
        }
    }


    // if (showingHeroDetails) {
    //     return (
    //         <HeroDetails goBack={gotoHomePage} />
    //     )
    // }
}


const mapStateToProps = state => {
    // console.log('state in mapStateToProps: ', state);
    return {
        heroList: state.character.characterList,
        loading: state.character.fetchingCharacters,
        showingHeroDetails: state.character.showingHeroDetails
    }
}

const mapDispatchToProps = dispatch => {
    // console.log('in dispatch of herolist:');
    return {
        fetchHeroes: pageNumber => {
            console.log('got page number in herolist: ', pageNumber)
            dispatch(fetchAllCharacters(pageNumber))
        },
        showHeroDetails: heroData => {
            console.log('hero data found: ', heroData)
            dispatch(showingHeroDetails(heroData, true))
        },
        gotoHomePage: data => {
            console.log('in dispatch for going back');
            dispatch(gotoHomePage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);

