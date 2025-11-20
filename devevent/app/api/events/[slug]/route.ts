import { NextRequest, NextResponse } from "next/server";

type RouteParams = {
  params: Promise<{ slug: string }>;
};

// request api format : /api/events/[slug]

// in this file we simulate how to use dynamic route to get the event base on the slug from the url
// happens when user clicks on the event on the main page on clientside, then it sends api request to this route to get the event data
// once returned the event data can be used to render the event details page

export async function GET(req: NextRequest, { params }: RouteParams): Promise<NextResponse> {
  try {
    const { slug } = await params;

    console.log("Fetching event with slug:");

    // Simulate fetching event data based on slug
    const eventData = {
      title: `Event for ${slug} from api`,
      description: `This is a detailed description for event with slug: ${slug} from api`,
      slug: slug,
    };

    return NextResponse.json({eventData}, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Failed to fetch event", error: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 }
    );
  }
}
