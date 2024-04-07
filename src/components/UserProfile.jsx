import PropTypes from "prop-types";


function UserProfile(props) {
    const { user } = props;
    return ( <div>
        <p>Bejelentkezve: {user.name}</p>
        <button type="button">Kijelentkezés</button>
        <button type="button">Kijelentkezés mindenhonnan</button>
    </div> );
}

UserProfile.propTypes = {
    user: PropTypes.object.isRequired
}


export default UserProfile;