function Portfoli() {

    const posts = [
        {
            id: 1,
            title: 'PopSms - Bulk SMS.',
            image: '/image/bulksms_rtqb7f.jpg',
            content: 'Experience seamless communication with our bulk SMS and email servic'  },
        {
            id: 2,
            title: 'M-Tumbler',
            image: '/image/Mtumbler_gh88qs.png',
            content: 'Instant Bonga Points to cash converter'},
        {
            id: 3,
            title: 'NextAuth.js Documentation',
            image: '/image/nextauth_icotjb.webp',
            content: 'Documentation on how to use NextAuth.js'},
        {
            id: 4,
            title: '.Dr Floor',
            image: '/image/dr_x4yqnh.avif',
            content: 'Site that allows you to view and purchase flooring materials' 
        },
        
    ];

    return (
        <div className='Portfolio-text'>
                    <h2 className='Portfolio-title'>Portfoli</h2>
                    <p> Our Projects</p>
                    <div/>
        <div className='Portfolio'>
            <div className='grid-container'>
                {posts.map((post) => (
                    <div key={post.id} className='card'>
                        <img src={post.image} alt={post.title} className='Portfolio-image' />
                        <div className='post-text'>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Portfoli;