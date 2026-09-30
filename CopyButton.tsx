'use client';
import {useState} from 'react';
export default function CopyButton({value}:{value:string}){const[done,setDone]=useState(false);return <button onClick={async()=>{await navigator.clipboard.writeText(value);setDone(true);setTimeout(()=>setDone(false),1200)}} className="mt-3 rounded-xl border border-zinc-700 py-2 text-sm w-full">{done?'Copied ✓':'Copy'}</button>}
