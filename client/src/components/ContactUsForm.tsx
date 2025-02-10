import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
const ContactUsForm = () => {
  return (
    <form className="space-y-4 font-albert">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label
            htmlFor="first-name"
            className="font-bold text-sm md:text-base"
          >
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="first-name"
            className="mt-2 border-gray-300 bg-white"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <Label htmlFor="last-name" className="font-bold text-sm md:text-base">
            Last Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="last-name"
            className="mt-2 border-gray-300 bg-white"
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="font-bold text-sm md:text-base">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          className="mt-2 border-gray-300 bg-white"
          type="email"
          placeholder="Enter your mail"
          required
        />
      </div>

      <div>
        <Label htmlFor="mobile" className="font-bold text-sm md:text-base">
          Mobile Number <span className="text-red-500">*</span>
        </Label>
        <Input
          id="mobile"
          className="mt-2 border-gray-300 bg-white"
          type="tel"
          placeholder="Enter your mobile number"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label
            htmlFor="first-name"
            className="font-albert font-bold text-sm md:text-base"
          >
            Country <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="mt-2 font-albert border-gray-300 text-gray-600">
              <SelectValue
                placeholder="Select a country"
                className="placeholder-albert"
              />
            </SelectTrigger>
            <SelectContent>
              <span className="font-albert text-gray-700">
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="new-zealand">New Zealand</SelectItem>
              </span>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="last-name"
            className="font-albert font-bold text-sm md:text-base"
          >
            Visa Category <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="mt-2 font-albert border-gray-300 text-gray-600">
              <SelectValue
                placeholder="Select youy visa type"
                className="placeholder-albert"
              />
            </SelectTrigger>
            <SelectContent>
              <span className="font-albert text-gray-700">
                <SelectItem value="usa">Work</SelectItem>
                <SelectItem value="canada">Study</SelectItem>
                <SelectItem value="australia">Immigration</SelectItem>
                <SelectItem value="europe">Business</SelectItem>
                <SelectItem value="new-zealand">Tourist</SelectItem>
              </span>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="font-bold text-sm md:text-base">
          How can we assist you? <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          className="mt-2 bg-white border-gray-300"
          placeholder="Type your message here"
        />
        <p className="text-sm text-gray-600 mt-1">
          Briefly describe your visa query, and our experts will get back to you
          soon.
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          className="accent-[#51868e]"
          required
        />
        <Label htmlFor="terms" className="text-sm">
          I accept the{" "}
          <a href="#" className="text-[#51868e] underline">
            terms and conditions
          </a>
          .
        </Label>
      </div>

      <Button className="w-full bg-[#51868e] text-white text-lg hover:bg-transparent hover:text-[#51868e] border-2 hover:border-[#51868e]">
        Submit Enquiry
      </Button>
    </form>
  );
};

export default ContactUsForm;
