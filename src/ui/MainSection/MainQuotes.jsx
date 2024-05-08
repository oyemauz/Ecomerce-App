import Button from "../common/Button";


function MainQuotes() {
    return (
        <div className="app_img">
            <div>
                <span>Enjoy Your Shopping</span>
                <h1>Buying Selling of <br/> goods Services </h1>
                <Button size={window.innerWidth > 768 ? 'large' : 'medium'} color="white">Shop Now</Button>
            </div>
        </div>
    )
}

export default MainQuotes

