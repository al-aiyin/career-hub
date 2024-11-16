import pic from "../../assets/hardy.png";
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <div>
                <h2 className="text-center text-5xl">Find your dream job here</h2>
                <a className="btn">Apply Now</a>
            </div>
            <img src={pic}></img>
            
        </div>
    );
};

export default Banner;