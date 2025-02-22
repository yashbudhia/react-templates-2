/* eslint-disable no-unused-vars */
import { E164Number } from 'libphonenumber-js/core';
import Image from 'next/image';
import ReactDatePicker from 'react-datepicker';
import { Control } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';

import { Checkbox } from './ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select';
import { useState } from 'react';
import { setHours, setMinutes, addMinutes } from 'date-fns';

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
}

const getCurrentISTTime = () => {
  const currentUTC = new Date();
  const ISTOffset = 5 * 60 + 30; // IST is UTC+5:30
  return new Date(currentUTC.getTime() + ISTOffset * 60 * 1000);
};

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className='flex rounded-md border border-dark-500 bg-dark-400'>
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || 'icon'}
              className='m-2 select-none pointer-events-none'
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className='shad-input border-0'
            />
          </FormControl>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className='shad-textArea'
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry='IN'
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className='input-phone'
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className='flex items-center gap-4'>
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className='checkbox-label'>
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className='flex rounded-md border border-dark-500 bg-dark-400'>
          <Image
            src='/assets/icons/calendar.svg'
            height={24}
            width={24}
            alt='calendar'
            className='ml-2'
          />
          <FormControl>
            <ReactDatePicker
              selected={field.value}
              onChange={(date: Date) => {
                setStartDate(date);
                field.onChange(date);
              }}
              showTimeSelect={props.showTimeSelect ?? false}
              dateFormat={props.dateFormat ?? 'MMMM d, yyyy h:mm aa'}
              minTime={setHours(setMinutes(getCurrentISTTime(), 0), 15)} // 3:00 PM IST
              maxTime={setHours(setMinutes(getCurrentISTTime(), 0), 20)} // 8:00 PM IST
              wrapperClassName='date-picker'
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className='shad-select-trigger'>
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className='shad-select-content'>
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1'>
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className='shad-input-label'>{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />

          <FormMessage className='shad-error' />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
