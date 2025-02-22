'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Check, Star, StarHalf } from 'lucide-react';

export default function testimonials() {
  const TestimonialData = [
    {
      id: 1,
      name: 'Naseem Ansari',
      userImg: '/users/testimonials/user1.png',
      rating: 5,
      comment:
        'SBA exceeded our expectations with their architectural planning and structural design. Our commercial project was completed on time, and the final result was beyond what we imagined.',
      secondComment: 'Highly recommend their services!',
      highlighted: 'exceeded our expectations',
    },
    {
      id: 2,
      name: 'Anand Mutha',
      userImg: '/users/testimonials/user2.png',
      rating: 4,
      halfrating: 1,
      comment:
        'We entrusted SBA with the project management consultancy for our residential development. Their attention to detail and commitment to timelines were impressive. We couldn’t be happier.',
      secondComment: 'Thank you, SBA!',
      highlighted: 'commitment to timelines',
    },
    {
      id: 3,
      name: 'Mukund Joshi',
      userImg: '/users/testimonials/user3.png',
      rating: 5,
      comment:
        'Working with SBA for the structural design of our industrial project was a great experience. They provided innovative solutions and ensured everything was in line with our budget.',
      secondComment: 'Great experience!',
      highlighted: 'innovative solutions',
    },
    {
      id: 4,
      name: 'Prafful Deore',
      userImg: '/users/testimonials/user4.png',
      rating: 5,
      comment:
        'SBA’s property valuation services were spot on. They provided a detailed and accurate assessment for our commercial property, helping us make informed decisions.',
      secondComment: 'Will definitely use their services again!',
      highlighted: 'detailed and accurate assessment',
    },
    {
      id: 5,
      name: 'Aftab Ansari',
      userImg: '/users/testimonials/user5.png',
      rating: 4,
      comment:
        'SBA handled the architectural planning and structural design for our residential project in Nashik. The entire process was smooth, and the end result was a beautifully designed home.',
      secondComment: 'Highly satisfied with their work!',
      highlighted: 'beautifully designed home',
    },
  ];

  return (
    <section className=' h-full py-10'>
      <h1 className='bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl lg:text-5xl font-medium tracking-tight text-transparent'>
        Kind Words from Satisfied Clients
      </h1>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}
        className='w-full z-30 mt-20 '
      >
        <CarouselContent className='-ml-1 hover:cursor-grab select-none	'>
          {TestimonialData.map((item) => (
            <CarouselItem
              key={item.id}
              className='pl-1 md:basis-1/2 lg:basis-1/3 rounded-lg'
            >
              <div className='p-1'>
                <Card>
                  <CardContent className='bg-black flex  md:aspect-square rounded-lg items-center justify-center p-6'>
                    <div className='flex flex-auto flex-col gap-4 '>
                      <div className='flex gap-0.5 mb-2'>
                        {Array.from({ length: item.rating }).map((_, index) => (
                          <Star
                            className='h-5 w-5 text-green-600 fill-green-600'
                            key={index}
                          />
                        ))}
                        {item.halfrating !== undefined &&
                          item.halfrating > 0 &&
                          Array.from({ length: item.halfrating }).map(
                            (_, index_half) => (
                              <StarHalf
                                className='h-5 w-5 text-green-600 fill-green-600'
                                key={index_half}
                              />
                            )
                          )}
                      </div>
                      <div className='text-base leading-6 2xl:leading-7 2xl:text-lg'>
                        <p>
                          &quot;
                          {item.comment}
                          <span className='p-0.5 bg-slate-800 text-white'>
                            {item.secondComment}
                          </span>
                          &quot;
                        </p>
                      </div>
                      <div className='flex gap-4 mt-2'>
                        <img
                          className='rounded-full h-12 w-12 object-cover'
                          src={`${item.userImg}`}
                          alt='user'
                        />
                        <div className='flex flex-col'>
                          <p className='font-semibold'>{item.name}</p>
                          <div className='flex gap-1.5 items-center text-zinc-600'>
                            <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                            <p className='text-sm'>Verified Client</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='bg-black' />
        <CarouselNext className='bg-black' />
      </Carousel>
    </section>
  );
}
