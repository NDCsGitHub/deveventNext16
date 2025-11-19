import { NextRequest, NextResponse } from "next/server"

// can directly call database or external API here
// for this example we just gonna console log the request body and return a success response

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    console.log(data)
    return NextResponse.json({ message: "event created successfully" })
  } catch (e) { 
    console.error(e)
    return NextResponse.json({ message: "event creation failed", error: e instanceof Error ? e.message : 'Unknown error' })
  }
}