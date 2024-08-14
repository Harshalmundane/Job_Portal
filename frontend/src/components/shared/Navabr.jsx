// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from '../ui/button'
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
    const {user}=useSelector(store=>store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-centre justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#f83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex font-medium items-centre gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browser">Browser</Link></li>
          </ul>
          {
            !user?(
    
                    <div className="flex items-centre gap-2">
                    <Link to="/login"><Button variant="outline">Login </Button></Link>
                   <Link to="/signup"> <Button className="bg-[#6a38c2] hover:bg-[#3b0c8b]">Signup</Button></Link>
                 </div>
            ):(
                <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <div className="">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                  <h4 className="font-medium">Harshal Mundane</h4>
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet. </p>
                  </div>
                    </div>
    
                     <div className="flex flex-col  text-gray-300 mt-3">
                     <div className="flex w-fit items-center gap-2 cursor-pointer ">
                        <User2/>
                        <Button variant="link"><Link to='/profile'>View profile</Link></Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer ">
                        <LogOut></LogOut>
                        <Button variant="link">Logout</Button>
                    </div>
                     </div>
                </PopoverContent>
              </Popover>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
