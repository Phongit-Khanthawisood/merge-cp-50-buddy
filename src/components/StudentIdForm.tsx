"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  studentId: z.string().min(10, {
    message: "studentId must be 10 digit.",
  }),
});

interface FormData {
  studentId: string;
}

export default function StudentIdForm({
  userId,
  userEmail,
  setAlreadyUpdate,
}: {
  userId: string;
  userEmail: string;
  setAlreadyUpdate: any;
}) {
  const [formData, setFormData] = useState<FormData>({
    studentId: "",
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      studentId: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await setDoc(doc(db, "user-profiles", userId), {
        uid: userId,
        studentId: data.studentId,
        email: userEmail,
      });

      toast({
        className: "bg-green-500 text-white font-mitr",
        title: "Update Success",
        description:
          "Your Pre-register in Web Complete -> Don't Forget to Register in gg form",
      });
      window.location.href = "https://forms.gle/CLopzkR7SjhjRWgBA";
      setAlreadyUpdate(true);
    } catch (error) {
      console.error(error);

      toast({
        className: "font-mitr",
        variant: "destructive",
        title: "Update Fail",
        description: "Please Try Again or Contact Support",
      });
    }
  }

  //   const handleSubmit = async (e: FormEvent) => {
  //     e.preventDefault();
  //     console.log("Form data:", formData);
  //   };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="studentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mitr font-semibold text-[#DC6B19]">
                Student Id
              </FormLabel>
              <FormControl>
                <Input
                  className="font-mitr"
                  maxLength={10}
                  placeholder="Student Id"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-evenly items-center">
          <Button
            className="font-mitr font-semibold  bg-red-400 text-white drop-shadow-xl w-auto hover:bg-red-500 "
            onClick={() => {
              signOut(auth);
            }}
          >
            Cancel
          </Button>
          <Button
            className="font-mitr font-semibold  bg-[#F9E2AF] text-[#DC6B19] drop-shadow-xl w-auto hover:bg-[#E58B4A] hover:text-white "
            type="submit"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
