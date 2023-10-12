"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogHeader,

} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage

} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    serverName: z.string().min(1, "Server name is required"),  
    imageUrl: z.string().min(1,{ message: "Server image is required" }),
});

export const InitalModel = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            serverName: "",
            imageUrl: "",
        },
        mode: "onBlur",
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }

    return(
        <Dialog open>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>
                        Welcome to Enoch's Discord Clone, Customize your server!
                    </DialogTitle>
                    <DialogDescription>
                        This is a clone of Discord, it's not the real thing. 
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                    
                    </form>
                </Form>
                <DialogFooter>
                    <button className="btn btn-primary">
                        Create a server
                    </button>
                </DialogFooter>
                </DialogContent>
        </Dialog>
    )
};
 

