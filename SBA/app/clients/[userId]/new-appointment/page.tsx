import Image from 'next/image';

import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { getClient } from '@/lib/actions/client.actions';
import * as Sentry from '@sentry/nextjs';
import { SearchParamProps } from '@/types';
import { getLoggedInUser } from '@/lib/appwrite';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const client = await getClient(userId);
  Sentry.metrics.set('user_view_new-appointment', 'client');
  const user = await getLoggedInUser();

  // validate user id against logged in user
  if (!user) redirect('/login');
  else if (user.$id !== userId) {
    redirect('/login');
  }
  return (
    <div className='flex h-screen items-center bg-black justify-center'>
      <div className='max-w-5xl py-5 sm:py-10 w-full px-5'>
        <BreadcrumbWithCustomSeparator />
        <AppointmentForm clientId={client?.$id} userId={userId} type='create' />
      </div>
    </div>
  );
};

export default Appointment;

function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumb className='mb-5 sm:mb-10 xl:mt-8 2xl:mt-0'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href='/'>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Appointments</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
