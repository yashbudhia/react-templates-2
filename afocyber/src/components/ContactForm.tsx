"use client";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClose();
    console.log("Form Submitted", formData);
  };

  return (
    <span className="flex w-full items-center justify-center bg-black p-4">
      <span className="bg-black text-white p-6 rounded-xl border-0 w-full h-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <span className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <span>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Full name or Company Name"
                className="mt-1"
                value={formData.name}
                onChange={handleChange}
              />
            </span>
            <span>
              <Label htmlFor="email">Customer Email Address</Label>
              <Input
                id="email"
                name="email"
                placeholder="e.g 0901 898 8989"
                className="mt-1"
                value={formData.email}
                onChange={handleChange}
              />
            </span>
          </span>
          <span className="py-10">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="e.g Delayed Delivery"
              className="mt-1 mb-5 text-black"
              value={formData.subject}
              onChange={handleChange}
            />
          </span>
          <span className="my-3">
            <Label htmlFor="message">Tell us how we can help you</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please type here..."
              className="mt-1 mb-5 text-black"
              value={formData.message}
              onChange={handleChange}
            />
          </span>
          <span className="flex gap-5 mt-4">
            <button
              type="submit"
              className="w-full md:w-[80%] py-3 rounded-full  border border-white border-opacity-50"
            >
              Submit →
            </button>
            <button
              type="button"
              className="w-full md:w-[20%] py-3 rounded-full border border-white border-opacity-50 text-[16px] font-[400]"
              onClick={onClose}
            >
              ✕ Cancel
            </button>
          </span>
        </form>
      </span>
    </span>
  );
}
