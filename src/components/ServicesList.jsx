import PropTypes from 'prop-types';
import ServiceCard1 from './ServiceCard1';

function ServicesList(props) {
    const { szolgaltatasok } = props;
    return (<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3'>
        {szolgaltatasok.map((szolgaltatas) => <ServiceCard1 key={szolgaltatas.szolgaltatasid} szolgaltatas={szolgaltatas}/>)};
    </div>)
}


ServicesList.propTypes = {
    szolgaltatasok: PropTypes.array
}

ServicesList.defaultProps = {
    szolgaltatasok: []
}

export default ServicesList;