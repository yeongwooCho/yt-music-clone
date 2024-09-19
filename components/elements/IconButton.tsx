import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClickIcon?: () => void;
}

const IconButton: React.FC<IconButtonProps> = (
  {icon, onClickIcon}
) => {
  return (
    <div>
      <div onClick={onClickIcon}
           className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer">
        {icon}
      </div>
    </div>
  );
};

export default IconButton;
