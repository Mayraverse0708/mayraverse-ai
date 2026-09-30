import { NextResponse } from 'next/server';
export async function POST(req:Request){
 const b=await req.json().catch(()=>({}));
 const title=String(b.name||'Untitled Project').trim();
 if(!title) return NextResponse.json({error:'Project name is required.'},{status:400});
 const project={id:`project-${Date.now()}`,title, name:title, storyIdea:String(b.storyIdea||''),genre:String(b.genre||'Sci-Fi Mystery Thriller'),language:String(b.language||'Hindi'),episodes:Math.min(20,Math.max(1,Number(b.episodes)||9)),status:'Draft'};
 return NextResponse.json({ok:true,project});
}
