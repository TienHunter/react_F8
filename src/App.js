import { useState } from 'react';

function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    return storageJobs
  })
  const [id, setId] = useState();
  const [edit, setEdit] = useState(false);
  const handleSubmit = () => {
    if (job) {
      if (edit) {
        handleUpdate();
      } else {
        setJobs(prev => {
          const newJobs = [...prev, job];
          localStorage.setItem('jobs', JSON.stringify(newJobs));
          return newJobs
        })
      }
    }
    setJob('')
  }
  const handleUpdate = () => {
    jobs[id] = job;
    setEdit(false)
    setJobs(() => {
      localStorage.setItem('jobs', JSON.stringify(jobs));
      return jobs;
    })
  }
  const handleRemove = (index) => {
    console.log(index);
    setJobs(prev => {
      const newJobs = prev.filter((item, id) => id !== index)
      console.log(newJobs);
      localStorage.setItem('jobs', JSON.stringify(newJobs));
      return newJobs
    })
  }
  const handleEdit = (index) => {
    setEdit(true)
    setJob(jobs[index]);
    setId(index);
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <input
        value={job}
        onChange={(e) => setJob(e.target.value)}
        placeholder='Input your work'
      />
      <button onClick={handleSubmit}>{edit ? 'Change' : 'Add'}</button>
      <ul>
        {
          jobs.map((job, index) => {

            return (
              <li key={index}>
                {job}
                <button onClick={() => handleRemove(index)}>Remove</button>
                <button onClick={() => handleEdit(index)}>Edit</button>

              </li>
            )
          })
        }
      </ul>
    </div >
  );
}

export default App;
