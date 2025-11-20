import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { cacheLife } from "next/cache";

// const events = [
//   { title: "event 1", description: "this is event 1 description", slug: "event-1" },
//   { title: "event 2", description: "this is event 2 description", slug: "event-2" },
// ];

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const page = async () => {

  'use cache'
  cacheLife('hours'); // cache for 1 hour
  const response = await fetch(`${BASE_URL}/api/events`);
  const result = await response.json();


  return (
    <div>
      <h1>dev event demo homepage</h1>
      <p>Hey Welcome!</p>

      <ExploreBtn />

      <div className="border border-gray-300 m-5">
        <h3>Featured Events List</h3>
        <ul>
          {result.events.map((event: { title: string; description: string; slug: string; }) => (
            <li key={event.title} className="border border-gray-300 m-5">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
