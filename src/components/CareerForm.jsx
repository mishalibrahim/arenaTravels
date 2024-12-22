"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phoneNo: z.string().min(10, {
    message: "Phone number should be a valid 10 digit number",
  }),
  email: z.string().email(),
  resume: z.any().optional(), // File validation can be added if needed
  desc: z.string().optional(),
});

const CareerForm = () => {
  const [fileState, setFileState] = useState(false);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      resume: null,
      desc: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const file = values.resume[0]; // Assuming resume is a file input field
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Content = reader.result.split(",")[1];

        try {
          const response = await fetch("/api/emails", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: values.name,
              phoneNo: values.phoneNo,
              email: values.email,
              desc: values.desc,
              resumeContent: base64Content, // Sending the base64 content of the resume
            }),
          });

          if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
          }

          const data = await response.json();
          toast({
            title: "Email Sent Successfully",
            description: "We will get back to you soon.",
          });
          form.reset();
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Something Went Wrong",
            description: "Please Try Again Later",
          });
        } finally {
          setLoading(false);
          setFileState(false);
        }
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error:", error);
      // alert("Failed to send email. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form
        id="career-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-6 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="john doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="9876271221" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="eg: johndoe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem className="w-fit ">
                <FormLabel>Resume</FormLabel>
                <FormControl>
                  <div className="relative ">
                    <Input
                      className="absolute z-[10] cursor-pointer  opacity-0 max-w-[116px] h-full "
                      type="file"
                      accept=".pdf"
                      onChange={(e) => {
                        setFileState((prev) => !prev);
                        field.onChange(e.target.files); // Update the form state with the file
                      }}
                    />
                    {fileState ? (
                      <div className="rounded-md  w-fit border px-3 py-2 flex gap-2 items-center">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-green-600"
                        />
                        <p className="text-12">File Uploaded</p>
                      </div>
                    ) : (
                      <div className="rounded-md  w-fit border px-3 py-2 flex gap-2 items-center">
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        <p className="text-12">Upload File</p>
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Why we should hire you</FormLabel>
                <FormControl>
                  <textarea
                    className="block p-2 w-full border min-h-20 rounded-md text-12"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={loading} type="submit" className="hover:bg-[#001160]">
          {loading ? "Submitting...." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default CareerForm;
