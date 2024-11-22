import './Blog.css';

function Blog() {
    const posts = [
        {
            id: 1,
            title: 'Web Development',
            image: '/image/photo-1617472592135-72a181d04b27.avif',
            content: 'We craft responsive and scalable websites and progressive web apps with modern technologies such as HTML5, CSS3, JavaScript (ES6+), and frameworks like Django, Rails, Springboot, Next.js, React, Angular, and Vue.js. Our focus is on ensuring cross-browser compatibility and optimal performance across various devices.'
        },
        {
            id: 2,
            title: 'Mobile App Development',
            image: '/image/image 2.jpg',
            content: 'We develop user-friendly mobile applications for both iOS and Android platforms using native languages (Java, Swift, Kotlin) or cross-platform frameworks (React Native, Flutter, KMM). We prioritize intuitive UI/UX design, smooth performance, and seamless backend integration.'
        },
        {
            id: 3,
            title: 'Custom Software Solutions',
            image: '/image/image 33.avif',
            content: 'We create and design bespoke software solutions to meet specific business needs, ranging from enterprise-level applications to niche market products. Our agile methodology ensures timely delivery and adaptability to changing requirements.'
        },
        {
            id: 4,
            title: 'UI/UX Design',
            image: '/image/image.44.avif',
            content: 'We create and design bespoke software solutions to meet specific business needs, ranging from enterprise-level applications to niche market products. Our agile methodology ensures timely delivery and adaptability to changing requirements.'
        },
        {
            id: 5,
            title: 'Hiring Designers and Developers',
            image: '/image/image 5.jpg',
            content: 'We create and design bespoke software solutions to meet specific business needs, ranging from enterprise-level applications to niche market products. Our agile methodology ensures timely delivery and adaptability to changing requirements.'
        },
        {
            id: 6,
            title: 'Technical Writing',
            image: '/image/image 6.jpg',
            content: 'We help you communicate complex technical information in a clear and concise manner. We use a variety of tools and techniques to create technical documents, such as user manuals, technical reports, whitepapers, and online help systems.'
        },
        {
            id: 7,
            title: 'Digital Marketing',
            image: '/image/image 55.jpg',
            content: 'We execute comprehensive digital marketing strategies to enhance online presence and drive traffic. Our expertise includes SEO, SEM, social media marketing, content creation, email campaigns, and analytics to optimize marketing efforts and achieve business goals'
        },
        {
            id: 8,
            title: 'Hardware Programming',
            image: '/image/image 77.jpg',
            content: 'We design and program embedded systems and IoT devices using microcontrollers (e.g., Arduino, STM32), single-board computers (e.g., Raspberry Pi), and specialized hardware (e.g., Zebras FX9600). Our expertise includes firmware development, sensor integration, real-time operating systems (RTOS), and hardware-software interfacing to create robust and efficient embedded solutions.'
        }
    ];

    return (
        <div className='Blog'>
            <div className='grid-container'>
                {posts.map((post) => (
                    <div key={post.id} className='card'>
                        <img src={post.image} alt={post.title} className='Blog-image' />
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

export default Blog;