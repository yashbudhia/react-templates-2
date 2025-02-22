'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function FAQ() {
  const reply = [
    'SBA provides a comprehensive range of services, including architectural planning, structural design, project management consultancy, and property valuation for residential, commercial, and industrial projects across India.',
    'With over 25 years of experience, SBA is distinguished by its commitment to excellence, a deep understanding of diverse project requirements, and a team of highly skilled professionals who ensure that each project is tailored to meet client needs while adhering to industry standards.',
    'Yes, SBA has extensive experience working on projects of all sizes, from small residential developments to large-scale commercial and industrial ventures. Our team is equipped to manage complex projects efficiently, ensuring timely delivery and exceptional quality.',
  ];

  return (
    <div className='my-12 md:mt-16 lg:mt-20 pb-14 md:py-16 md:mb-20 lg:my-24'>
      <h2 className='font-semi-bold text-center leading-relaxed text-pretty text-4xl lg:text-5xl'>
        FAQs
      </h2>
      <Accordion
        className='mt-12 md:mt-16 lg:mt-28 xl:mt-32 bg-black'
        variant='light'
        defaultExpandedKeys={['1']}
      >
        <AccordionItem
          key='1'
          aria-label='Accordion 1'
          title='What services does SBA offer?'
          className='text-base'
        >
          <p className='text-base'>{reply[0]}</p>
        </AccordionItem>
        <AccordionItem
          key='2'
          aria-label='Accordion 2'
          title='What sets SBA apart from other consultancy firms?'
          className='text-base'
        >
          <p className='text-base'>{reply[1]}</p>
        </AccordionItem>
        <AccordionItem
          key='3'
          aria-label='Accordion 3'
          title='Can SBA handle projects of varying sizes and complexities?'
        >
          <p className='text-base'>{reply[2]}</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
