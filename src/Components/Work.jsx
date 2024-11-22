
function Work (){

    
        const  posts  = [
            {   id:1,
                title: ' codekazi', 
                ImageUrl:"/image/image 2.avif",
                 content: 'React is a powerful JavaScript library for building user interfaces',
                  author: 'John Doe',
                   Date:'18/06/2024'
                },
    
               { id:2,
                title: 'Getting Started with codekazi', 
                ImageUrl:'/image/image 3.jpg',
                content: 'Vite makes development fast and simple'   ,
                 author: 'Jane Smith', 
                 Date:'21/6/2024'
                },
            ]
    return(
        eturn (
            <div className='post'>
        {posts.map((post) => (
          <div key={post.id} className='card'>
            <img src={post.imageUrl} alt={post.title} />
            <div className='post-header'>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
           )
        )
    }   

   

export default Work;