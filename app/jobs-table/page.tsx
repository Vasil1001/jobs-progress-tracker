'use client'
import { useEffect, useState } from 'react'
import { Job, columns } from './columns'
import { DataTable } from './data-table'

export default function Page() {
  const data = getData()
  function getData() {
    // Fetch data from your API here.
    return [
      {
        id: '1',
        title: 'Software Engineer',
        employer: 'Tech Corp',
        status: 'applied',
        appliedOn: '2022-01-01',
        pay: 60000
      },
      {
        id: '2',
        title: 'Web Developer',
        employer: 'Web Solutions',
        status: 'interviewing',
        appliedOn: '2022-01-15',
        pay: 55000
      }
    ]
  }
  useEffect(() => {}, [])
  const [jobs, setJobs] = useState<Job[]>([])
  const [showForm, setShowForm] = useState(false)
  const [newJob, setNewJob] = useState({
    id: '',
    title: '',
    employer: '',
    status: 'applied',
    pay: '',
    appliedOn: new Date().toISOString().split('T')[0]
  })

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    setNewJob({ ...newJob, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // Add code to save the new job
    console.log(newJob)
    // Generate a new id for the job
    newJob.id = (jobs.length + 1).toString()
    // Add the new job to the jobs state
    setJobs([...jobs, newJob as unknown as Job])
    // Reset the form
    setNewJob({
      id: '',
      title: '',
      employer: '',
      status: 'applied',
      pay: '',
      appliedOn: new Date().toISOString().split('T')[0]
    })
    setShowForm(false)
  }
  return (
    <div>
      <div className="my-6 text-3xl font-bold tracking-tighter">Jobs Table page</div>
      <DataTable
        columns={columns}
        data={jobs}
        showForm={showForm}
        setShowForm={setShowForm}
        handleSubmit={handleSubmit}
        newJob={{
          ...newJob,
          status: newJob.status as 'applied' | 'interviewing' | 'rejected' | 'hired',
          pay: newJob.pay as unknown as number,
          appliedOn: new Date(newJob.appliedOn)
        }}
        handleInputChange={handleInputChange}
      />
    </div>
  )
}
