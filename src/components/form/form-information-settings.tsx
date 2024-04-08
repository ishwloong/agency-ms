"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {};

export type TFormInformationSetting = {
  email: string;
  phoneNumber: string;
  address: string;
};

export type TValidFieldName = "email" | "phoneNumber" | "address";

const FormInformationSetting = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<TFormInformationSetting>();
  console.log(errors);

  return (
    <Card x-chunk="dashboard-04-chunk-1">
      <CardHeader>
        <CardTitle>Information settings</CardTitle>
        <CardDescription>
          Used to identify your store in the marketplace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Label htmlFor="email">Email address</Label>
          <Input
            className="mb-3"
            placeholder="Email address"
            {...(register("email"), { required: true, type: "email" })}
          />
          {errors.email && (
            <span className="text-red-500">Invalid email address</span>
          )}

          <Label htmlFor="email">Phone number</Label>
          <Input
            className="mb-3"
            placeholder="Phone number"
            {...(register("phoneNumber"), { required: true })}
          />

          <Label htmlFor="email">Address</Label>
          <Input
            className="mb-3"
            placeholder="Address"
            {...(register("address"), { required: true })}
          />
        </form>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
};

export default FormInformationSetting;
