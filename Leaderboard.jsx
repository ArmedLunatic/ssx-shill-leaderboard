import React, { useEffect, useState } from 'react';

export default function Leaderboard(){
  const [rows, setRows] = useState([]);
  useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL + '/api/leaderboard')
      .then(r=>r.json())
      .then(setRows)
      .catch(console.error);
  },[]);
  return (
    <div style={{fontFamily:'system-ui',padding:20,background:'#020617',color:'#fff',minHeight:'100vh'}}>
      <h1 style={{fontSize:28}}>🏆 SSX Shill Leaderboard</h1>
      <ol>
        {rows.map((r,i)=> (
          <li key={i} style={{margin:'12px 0'}}>
            <strong>{r.username || 'anon'}</strong> — {r.points} pts
            <div style={{fontSize:12,opacity:0.8}}>{r.referral_code}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}