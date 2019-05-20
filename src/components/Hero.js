import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Card } from 'semantic-ui-react';

import './Hero.css';


function Hero({ hero, showHeroDetails }) {
    // console.log('hero here: ', hero);
    return (
        // <div>
        //     <h3>{hero.hero.name}</h3>
        // </div>

        // <Card style={{ width: '18rem' }}>
        //     <Card.Img style={{ height: '300px' }} variant="top" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
        //     <Card.Body>
        //         <Card.Title>{hero.name}</Card.Title>
        //         {/* <Card.Text>{hero.description}</Card.Text> */}
        //         <Link to={`/hero/${hero.id}`}>
        //             <Button variant="primary">Know more</Button>
        //         </Link>
        //     </Card.Body>
        // </Card>

        <Card
            as={Link}
            to={`/hero/${hero.id}`}
            link
            image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            header={hero.name}
        // meta='Description'
        // description={hero.description}
        // extra={extra}
        />


    )
}

// const mapStateToProps = state => {
// }


export default Hero;



