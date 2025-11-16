import { useEffect, useState } from 'react'

export default function Test(){
  const [msg, setMsg] = useState('loading...')
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(()=>{
    fetch(`${backend}/api/hello`).then(r=>r.json()).then(d=> setMsg(d.message)).catch(() => setMsg('backend not reachable'))
  },[backend])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="p-8 rounded-xl border border-white/10 bg-white/5">
        <p>Backend says: {msg}</p>
      </div>
    </div>
  )
}
