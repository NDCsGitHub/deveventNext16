import BookEvent from '@/components/BookEvent';
import { getSimilarEventsBySlug } from '@/lib/actions/event.action';
import React from 'react'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";


// in this page we simulate: page passes url slug into params, then it can be used to fetch event details from api route
// if no event found, return notFound page from next/navigation which takes user to 404

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;

  const response = await fetch(`${BASE_URL}/api/events/${slug}`)
  const result = await response.json()
  

  const similarEvent = await getSimilarEventsBySlug(slug);


  return (
    <div>
      <h1>Event Details Page</h1>
      <h2>{result.eventData.title}</h2>
      <p className='mb-5'>{result.eventData.description}</p>

      <BookEvent />



      <div className='mt-5'>
        <h2>{similarEvent.title}</h2>
        <p>{similarEvent.description}</p>
      </div>

    </div>
  )
}

export default EventDetailsPage