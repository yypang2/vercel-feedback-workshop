export async function POST(request) { 
  try { 
    const { name, message } = await request.json(); 
    if ( 
      typeof name !== "string" || typeof message !== "string" || 
!name.trim() || !message.trim() 
) { 
return Response.json( 
{ message: "Please complete all fields." }, 
{ status: 400 } 
); 
}
return Response.json({ 
message: `Thank you, ${name.trim()}! Feedback received.` 
}); 
} catch (error) { 
return Response.json( 
{ message: "Invalid request." }, 
{ status: 400 } 
); 
}
}
