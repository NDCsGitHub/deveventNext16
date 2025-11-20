import { NextRequest, NextResponse } from "next/server"

// can directly call database or external API here

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const events = [
      { title: "event 1", description: "this is event 1 description", slug: "event-1" },
      { title: "event 2", description: "this is event 2 description", slug: "event-2" },
    ];

    return NextResponse.json({ events }, { status: 200 })

  } catch (e) { 
    console.error(e)
    return NextResponse.json({ message: "event creation failed", error: e instanceof Error ? e.message : 'Unknown error' })
  }
}