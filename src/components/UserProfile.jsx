import PropTypes from "prop-types";


function UserProfile(props) {
    const { user, logoutClick, logoutEverywhereClick } = props;
    return ( <div>
        <p>Bejelentkezve: {user.nev}</p>
        <button type="button" onClick={() => logoutClick()}>Kijelentkezés</button>
        <button type="button"onClick={() => logoutEverywhereClick()}>Kijelentkezés mindenhonnan</button>
    </div> );
}

UserProfile.propTypes = {
    user: PropTypes.object.isRequired,
    logoutClick: PropTypes.func.isRequired,
    logoutEverywhereClick: PropTypes.func.isRequired
}


export default UserProfile;