import { useState } from 'react'

const inputStyle = 'w-full mt-1 p-4 rounded-xl border-2 border-line focus:border-g outline-none'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('End-to-end solutions')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault() 

    const newErrors = {}
    if (name.trim().length < 2) newErrors.name = 'Please enter your name.'
    if (!email.includes('@') || !email.includes('.')) newErrors.email = 'Please enter a valid email.'
    if (message.trim().length < 10) newErrors.message = 'Please write at least 10 characters.'

    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSent(true)
  }

  if (sent) {
    return (
      <div role="status" className="p-8 rounded-3xl bg-g/10 border border-g text-xl font-semibold">
        Thank you, {name}! We will be in touch shortly.
      </div>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-4">
      <div>
        <label htmlFor="name" className="font-bold">Name</label>
        <input id="name" className={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
        <p className="text-red-500 text-sm min-h-5">{errors.name}</p>
      </div>

      <div>
        <label htmlFor="email" className="font-bold">Work email</label>
        <input id="email" type="email" className={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
        <p className="text-red-500 text-sm min-h-5">{errors.email}</p>
      </div>

      <div>
        <label htmlFor="interest" className="font-bold">I am interested in</label>
        <select id="interest" className={inputStyle} value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option>End-to-end solutions</option>
          <option>Standalone tools</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-bold">What would you like to automate?</label>
        <textarea id="message" rows={5} className={inputStyle} value={message} onChange={(e) => setMessage(e.target.value)} />
        <p className="text-red-500 text-sm min-h-5">{errors.message}</p>
      </div>

      <button className="btn btn-main text-lg">Request a demo</button>
    </form>
  )
}