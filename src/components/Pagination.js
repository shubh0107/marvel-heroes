import React from 'react';
import { connect } from 'react-redux';

// import { Pagination } from 'react-bootstrap';

import { Pagination } from 'semantic-ui-react';

// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { fetchAllCharacters } from '../actions/index';

class PaginationBar extends React.Component {

    state = {
        activePage: 1
    };

    constructor(props) {
        super(props);
    }



    handlePaginationChange = (e, { activePage }) => {
        console.log('in handle pagination change.', activePage);
        this.props.fetchHeroes(activePage);
        this.setState({ activePage: activePage });

        console.log('current state: ', this.state);
    }


    render() {
        const { activePageNumber } = this.props;
        return (
            <Pagination
                className="mt-3 mb-3" 
                activePage={activePageNumber}
                // defaultActivePage={1}
                totalPages={71}
                onPageChange={this.handlePaginationChange}
            />
        )
    }

    // let active = 1;
    // let items = [];
    // for (let number = 1; number <= 71; number++) {
    //     items.push(
    //         <Pagination.Item key={number} active={number === activePageNumber} onClick={() => fetchHeroes(number)}>
    //             {/* <Pagination.Link > */}
    //             {number}
    //             {/* </Pagination.Link> */}
    //         </Pagination.Item>
    //     );
    // }

    // const getItems = (currentPage) => {

    // let items = [];
    // if (activePageNumber <= 5) {
    //     for (let number = 1; number <= 5; number++) {
    //         items.push(
    //             <Pagination.Item key={number} active={number === activePageNumber} onClick={() => fetchHeroes(number)}>
    //                 {number}
    //             </Pagination.Item>
    //         )
    //     }
    // } else if (activePageNumber >= 66) {
    //     for (let number = 66; number <= 71; number++) {
    //         items.push(
    //             <Pagination.Item key={number} active={number === activePageNumber} onClick={() => fetchHeroes(number)}>
    //                 {number}
    //             </Pagination.Item>
    //         )
    //     }
    // } else {
    //     for (let number = activePageNumber - 2; number < activePageNumber + 2; number++) {
    //         items.push(
    //             <Pagination.Item key={number} active={number === activePageNumber} onClick={() => fetchHeroes(number)}>
    //                 {number}
    //             </Pagination.Item>
    //         )
    //     }
    // }

    // const paginationBarStyle = {
    //     justifyContent: 'center'
    // };

    // return (
    //     <Pagination size="md" style={paginationBarStyle}>
    //         <Pagination.First onClick={() => fetchHeroes(1)} />
    //         <Pagination.Prev disabled={activePageNumber - 1 < 1} onClick={() => fetchHeroes(activePageNumber - 1)} />
    //         {items}
    //         <Pagination.Next disabled={activePageNumber + 1 > 71} onClick={() => fetchHeroes(activePageNumber + 1)} />
    //         <Pagination.Last onClick={() => fetchHeroes(71)} />
    //     </Pagination>
    // )

}

const mapStateToProps = state => {
    return {
        activePageNumber: state.character.activePage
    }
}

const mapDispatchToProps = dispatch => {
    return {

        fetchHeroes: pageNumber => dispatch(fetchAllCharacters(pageNumber))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PaginationBar);