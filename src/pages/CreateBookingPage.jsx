function CreateBookingPage() {

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (<form on onSubmit={handleSubmit}>
        <h2>új Foglalás felvétele</h2>
        <div>
            <button type="submit" classname="btn btn-primary"></button>
        </div>
       
    </form>);
}

export default CreateBookingPage;