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
const QuickEnquiry = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="first-name" className="font-albert font-bold">
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="first-name"
            className="font-albert bg-white border-gray-300"
            placeholder="Enter Your First Name"
            required
          />
        </div>
        <div>
          <Label htmlFor="last-name" className="font-albert font-bold">
            Last Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="last-name"
            className="font-albert bg-white border-gray-300"
            placeholder="Enter Your Last Name"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="font-albert font-bold">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          className="font-albert bg-white border-gray-300"
          type="email"
          placeholder="Enter Your Email"
          required
        />
      </div>

      <div>
        <Label htmlFor="mobile" className="font-albert font-bold">
          Mobile Number <span className="text-red-500">*</span>
        </Label>
        <Input
          id="mobile"
          className="font-albert bg-white border-gray-300"
          type="tel"
          placeholder="Enter Your Mobile Number"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="first-name" className="font-albert font-bold">
            Country <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="font-albert border-gray-300 text-gray-600">
              <SelectValue
                placeholder="Select A Country"
                className="placeholder-albert"
              />
              {/* <span className="font-albert text-gray-700">
                            <SelectValue placeholder="Select Your Program" />
                        </span> */}
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
          <Label htmlFor="last-name" className="font-albert font-bold">
            Visa Category <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="font-albert border-gray-300 text-gray-600">
              <SelectValue
                placeholder="Select Your Visa Type"
                className="placeholder-albert"
              />
              {/* <span className="font-albert text-gray-700">
                            <SelectValue placeholder="Select Your Program" />
                        </span> */}
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

      <Button
        type="submit"
        className="w-full mt-4 bg-[#3b4f84] text-white py-3 text-lg font-albert hover:text-[#3b4f84] hover:bg-white hover:border-2 hover:border-[#3b4f84] transition duration-700"
      >
        Start Your Journey
      </Button>
    </form>
  );
};

export default QuickEnquiry;
