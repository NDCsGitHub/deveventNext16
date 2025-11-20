'use server'


// run server side action to prevent exposing sensitive logic to client side


// in this file we practice using server actions to get similar events based on the slug of the current event
// with server actions we can skip

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    
    // Simulate fetching event data based on slug
    const similarEvent = {
      title: `Event for ${slug} from server action similar Event`,
      description: `This is a detailed description for event with slug: ${slug} from server action `,
      slug: slug,
    };

   
    return similarEvent
    

  }catch(e){
    console.error(e);
    throw new Error('Failed to fetch similar events');
  }
}