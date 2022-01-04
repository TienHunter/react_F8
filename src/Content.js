import { useState, useEffect } from 'react'
const tabs = ['posts', 'albums', 'todos']
function Content() {
   const [title, setTile] = useState('')
   const [posts, setPosts] = useState([])
   const [type, setType] = useState('posts')
   const [showOnScroll, setShowOnScroll] = useState(false)
   document.title = title
   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
         .then(res => res.json())
         .then(posts => {
            setPosts(posts);
         })
   }, [type])

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY >= 200) {
            //show
            setShowOnScroll(true)
         } else {
            //Hide
            setShowOnScroll(false)
         }
      }

      window.addEventListener('scroll', handleScroll)

      //cleanup function
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   })
   return (
      <div>
         {tabs.map(tab =>
            <button
               key={tab}
               onClick={() => setType(tab)}
               style={tab === type ? { background: '#ccc', color: '#fff' } : {}}
            >
               {tab}
            </button>
         )}
         <input
            value={title}
            onChange={e => setTile(e.target.value)}
         />
         <ul>
            {posts.map(post =>
               <li key={post.id}>{post.title}</li>
            )}
         </ul>

         {showOnScroll &&
            <button
               onClick={() => {
                  window.scrollTo(0, 0)
                  setShowOnScroll(false)
               }}
               style={{
                  position: 'fixed',
                  right: 20,
                  bottom: 20
               }}
            >

               Go to top

            </button>
         }
      </div>
   )
}

export default Content;
