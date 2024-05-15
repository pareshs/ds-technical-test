import bannerImage from '/images/ford-ranger_rd5m4t.jpg';
import Button from './shared/Button';

function Banner() {
    return (
        <div className="hero-banner">
            <img
                src={bannerImage}
                alt="Welcome to G Automotive"
                className="img-fluid"
            ></img>
            <div className="content">
                <div className="container">
                    <div className="content-inner">
                        <h1>Welcome to G Automotive</h1>
                        <div className="hero-banner-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga quam, laudantium
                                consectetur velit facere deleniti officiis quod.
                                Dolor blanditiis exercitationem nostrum tenetur
                                dolorum ratione rem sunt illum! Reiciendis,
                                officiis voluptates! Lorem ipsum dolor sit, amet
                                consectetur adipisicing elit. Ratione,
                                doloremque temporibus! Consequatur iusto
                                voluptas repellendus illum officia voluptatibus
                                nesciunt voluptatem.
                            </p>
                        </div>
                        <Button version="primary" type="button">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
