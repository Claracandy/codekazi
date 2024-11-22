import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-content'>
                <img src='/image/image 0.jpg' alt='Home' className='home-image' />
                <div className='home-text'>
                    <h1 className='home-title'>The Leading Mobile/Web Design & Development Company</h1>
                    <p>
                        We specialize in developing a cohesive mobile and web presence that drives tangible returns on investment for your business. Our strategy involves increasing traffic to both your website and mobile applications by enhancing your online visibility. Subsequently, we focus on efficiently converting this increased traffic into valuable leads and sales for your company.
                    </p>
                    <button type='button' className='home-button'>Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Home;