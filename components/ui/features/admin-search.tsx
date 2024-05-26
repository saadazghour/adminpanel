"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Search } from "lucide-react";

const formSchema = z.object({
  search: z.string(),
});

const AdminSearch = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    // Resolver will validate our Schema.
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Submit", data);
  };
  return (
    <div className="w-full flex-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            {...register("search")}
          />
        </div>
      </form>
    </div>
  );
};

export default AdminSearch;
