import React from "react";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "components/ui/alert-dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { toast } from "components/ui/use-toast";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  customerPhone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  customerEmail: z.string().email({
    message: "Invalid email address.",
  }),
  customerAddress: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  contactEmail: z.string().email({
    message: "Invalid email address.",
  }),
  contactPhone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  spendPotential: z.string().min(1, {
    message: "Minimum spend potential is required.",
  }),
});

export function InputForm({ defaultValues }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="customerPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="XXX-XXX-XXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customerEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customerAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name (Main Point of Contact)</FormLabel>
              <FormControl>
                <Input placeholder="Jane Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Point of Contact Email</FormLabel>
              <FormControl>
                <Input placeholder="contact@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Point of Contact Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="XXX-XXX-XXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="spendPotential"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum Spend Potential</FormLabel>
              <FormControl>
                <Input placeholder="$ 000.00" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Save Changes</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Please click "Continue" to confirm & save your edits.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={form.handleSubmit(onSubmit)}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </Form>
  );
}

export function CustomerSettings() {
  const defaultValues = {
    username: "John Doe",
    customerPhone: "123-456-7890",
    customerEmail: "john.doe@example.com",
    customerAddress: "123 Main St.",
    contactEmail: "contact@example.com",
    contactPhone: "098-765-4321",
    spendPotential: "$ 1000.00",
  };

  return (
    <div className="w-80">
      <div>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Customer Settings</h4>
          <p className="text-sm text-muted-foreground">Adjust customer details</p>
          <InputForm defaultValues={defaultValues} />
        </div>
      </div>
    </div>
  );
}