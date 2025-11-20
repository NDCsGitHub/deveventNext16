import Link from "next/link";


interface props {
  title: string;
  description: string;
  slug: string;
}


const EventCard = ({title, description, slug}:props) => {
  return (
    <Link  href={`/Events/${slug}`} id="event-card" className="m-5">
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  )
}

export default EventCard