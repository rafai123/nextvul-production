"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createWorkspaceSchema } from "../schemas";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DottedSeparator } from "@/components/dotted-separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspace";
import { useRef } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ImageIcon } from "lucide-react";

interface CreateWorkspaceFormProps {
  onCancel?: () => void;
}

export const CreateWorkspaceForm = ({ onCancel }: CreateWorkspaceFormProps) => {

  const { mutate, isPending } = useCreateWorkspace()

  const inputRef = useRef<HTMLInputElement>(null)

  const form = useForm<z.infer <typeof createWorkspaceSchema>>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: ""
    }
  })

  // const onSubmit = (values: z.infer <typeof createWorkspaceSchema>) => {
  const onSubmit = (values: z.infer <typeof createWorkspaceSchema>) => {
    console.log({values})
    mutate({json : values})
  }

  return (
    <Card className="h-full w-full border-none shadow-none">
      <CardHeader className="flex p-7">
        <CardTitle className="text-xl font-bold">
          Create a new workspace
        </CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <FormField 
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Workspace Name
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="Enter workspace name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField 
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <div className="flex flex-col gap-y-2">
                      <div className="flex items-center gap-x-5">
                        {field.value ? (
                          <div className="size-[72px] relative rounded-md overflow-hidden">
                            <Image 
                              alt="Logo"
                              fill
                              className="object-cover"
                              src={
                                field.value instanceof File 
                                ? URL.createObjectURL(field.value)
                                : field.value
                              }
                            />
                          </div>
                        ) : (
                          <Avatar className="size-[72px]">
                            <AvatarFallback>
                              <ImageIcon  className="size[36px] text-neutral-400"/>
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    </div>
                  )}
                />
              </div>
              <DottedSeparator className="py-7" />
              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  size={"lg"}
                  variant={"secondary"}
                  onClick={onCancel}
                  disabled={isPending}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  size={"lg"}
                  disabled={isPending}
                >
                  Create Workspace
                </Button>
              </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )

}