import './Services.css';

function Services() {
    const posts = [
        {
            id: 1,
            title: 'Web Development',
            image: '/images/photo-1551288049-bebda4e38f71.avif',
            content: 'We craft responsive and scalable websites and progressive web apps with modern technologies such as HTML5, CSS3, JavaScript (ES6+), and frameworks like Django, Rails, Springboot, Next.js, React, Angular, and Vue.js. Our focus is on ensuring cross-browser compatibility and optimal performance across various devices.'
        },
        {
            id: 2,
            title: 'Mobile App Development',
            image: '/images/photo-1557838923-2985c318be48.avif',
            content: 'We develop user-friendly mobile applications for both iOS and Android platforms using native languages (Java, Swift, Kotlin) or cross-platform frameworks (React Native, Flutter, KMM). We prioritize intuitive UI/UX design, smooth performance, and seamless backend integration.'
        },
        {
            id: 3,
            title: 'Custom Software Solutions',
            image: '/images/photo-1507537064587-464384459bb7.avif',
            content: 'We create and design bespoke software solutions to meet specific business needs, ranging from enterprise-level applications to niche market products. Our agile methodology ensures timely delivery and adaptability to changing requirements.'
        },
        {
            id: 4,
            title: 'UI/UX Design',
            image: '/images/photo-1628277613967-6abca504d0ac.avif',
            content: 'We create and design bespoke software solutions to meet specific business needs, ranging from enterprise-level applications to niche market products. Our agile methodology ensures timely delivery and adaptability to changing requirements.'
        },
        {
            id: 5,
            title: 'Hiring Designers and Developers',
            image: '/images/photo-1667372335937-d03be6fb0a9c.avif',
            content: 'We create and design bespoke software solutions to meet specific business needs, ranging from enterprise-level applications to niche market products. Our agile methodology ensures timely delivery and adaptability to changing requirements.'
        },
        {
            id: 6,
            title: 'Technical Writing',
            image: '/images/techwriting_crmxqx.jpg',
            content: 'We help you communicate complex technical information in a clear and concise manner. We use a variety of tools and techniques to create technical documents, such as user manuals, technical reports, whitepapers, and online help systems.'
        },
    ];

    return (
        <div className='services'>
            <div className='grid-container'>
                {posts.map((post) => (
                    <div key={post.id} className='card'>
                        <img src={post.image} alt={post.title} className='service-image' />
                        <div className='post-text'>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;