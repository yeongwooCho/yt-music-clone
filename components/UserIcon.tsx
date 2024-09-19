import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const UserIcon = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

    </div>
  );
};

export default UserIcon;
