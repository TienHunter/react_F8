import { useState, useEffect } from 'react'

const courses = [
   {
      id: 1,
      name: 'HTML/CSS'
   },
   {
      id: 2,
      name: 'Javascript'
   },
   {
      id: 3,
      name: 'React'
   }
]
function Content() {
   const [courseId, setCourseId] = useState(1)

   useEffect(() => {
      const handleComment = ({ detail }) => {
         console.log(detail);
      }

      window.addEventListener(`course-${courseId}`, handleComment)

      return () => {
         window.removeEventListener(`course-${courseId}`, handleComment)
      }
   }, [courseId])
   return (
      <div>
         <ul>
            {courses.map((course) =>
               <li
                  key={course.id}
                  style={{ color: courseId === course.id ? 'red' : '#ccc' }}
                  onClick={() => setCourseId(course.id)}
               >
                  {course.name}
               </li>
            )}
         </ul>
      </div>
   )
}

export default Content;
