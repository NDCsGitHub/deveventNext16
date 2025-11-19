import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";

const events = [
  { title: "event 1", description: "this is event 1 description", slug: "event-1" },
  { title: "event 2", description: "this is event 2 description", slug: "event-2" },
];

const page = () => {
  return (
    <div>
      <h1>dev event demo homepage</h1>
      <p>Hey Welcome!</p>

      <ExploreBtn />

      <div className="border border-gray-300 m-5">
        <h3>Featured Events List</h3>
        <ul>
          {events.map((event) => (
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
