"'use client'";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BookOpen, Search, User } from "lucide-react";
import Link from "next/link";

const categories = [
  "History",
  "Characters",
  "Locations",
  "Mystics",
  "Organizations",
  "Events",
];

export function WikiHomePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-gray-50 shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-2xl font-bold">The Ambrosia Wiki</span>
            </Link>
            <div className="flex items-center space-x-4">
              <form className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-900 dark:text-gray-50" />
              </form>
              <Button variant="ghost">
                <User className="h-5 w-5 mr-2" />
                Log In
              </Button>
            </div>
          </div>
          <NavigationMenu className="justify-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-red-700">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <li key={category}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                            href={`/category/${category.toLowerCase()}`}
                          >
                            <div className="text-sm font-medium leading-none">
                              {category}
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/random" legacyBehavior passHref>
                  <NavigationMenuLink className="font-medium">
                    Random Article
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to the Ambrosia Wiki
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["'Article 1'", "'Article 2'", "'Article 3'"].map(
              (article, index) => (
                <div
                  key={index}
                  className="bg-white text-gray-950 rounded-lg shadow-md p-6 dark:bg-gray-950 dark:text-gray-50"
                >
                  <h3 className="text-xl font-semibold mb-2">{article}</h3>
                  <p className="text-gray-500 mb-4 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. - Not implemented
                  </p>
                  <Button variant="outline">Read More</Button>
                </div>
              )
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 mt-12 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0 dark:text-gray-400">
              {new Date().getFullYear()} Ambrosia Wiki
            </p>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
