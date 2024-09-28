import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
    "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

const RegisterPage = () => {
    return (
        <>
            {/* Cover Image Column (Visible only on large screens) */}
            <div className="hidden bg-muted lg:block">
                <Image
                    src="https://res.cloudinary.com/dc3apwy48/image/upload/f_auto,q_auto/qpzixtgr2tnfw7un6ofa"
                    alt="Stock market trading illustration"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    priority
                />
            </div>
            {/* Login Form Column */}
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    {/* Form Header */}
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Register</h1>
                        <p className="text-balance text-muted-foreground">
                            Create an account to get started with your stock trading journey.
                        </p>
                    </div>

                    {/* Registration Form */}
                    <form className="grid gap-4">
                        {/* First Name Field */}
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input
                                id="first-name"
                                type="text"
                                placeholder="John"
                                aria-label="First Name"
                            />
                        </div>
                        {/* Last Name Field */}
                        <div className="grid gap-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input
                                id="last-name"
                                type="text"
                                placeholder="Doe"
                                aria-label="Last Name"
                            />
                        </div>
                        {/* Email Field */}
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                aria-label="Email address"
                            />
                        </div>
                        {/* Email Field */}
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                aria-label="Password"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full">
                            Login
                        </Button>

                        {/* OAuth Login Option */}
                        <Button variant="outline" className="w-full">
                            Register with Google
                        </Button>
                        <Button variant="outline" className="w-full">
                            Register with Twitter
                        </Button>
                        <Button variant="outline" className="w-full">
                            Register with Facebook
                        </Button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage