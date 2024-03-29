import React from "react";
import { Input, Img, Text } from "./..";

export default function DesktopTenRow({
  heydont = "Absolutely! 🍦 I&#39;m all in for ice cream. I&#39;ll bring my favorite flavors. What&#39;s your preference?",
  ...props
}) {
  return (
    
      <div className="flex md:flex-col self-end justify-between items-center w-full gap-5 overflow-auto">
       
        <div className="flex flex-col items-baseline justify-end w-[60%] md:w-full gap-[560px] right-[-50.00px] md:gap-[390px] sm:gap-[260px] relative">
          <div className="flex md:flex-col self-stretch justify-center items-start gap-[29px]">
           
            <div className="h-[129px] w-full pb-[19px] pr-[19px] relative">
              
              <div className="flex justify-center w-[88%] left-[0.00px] top-[0.00px] p-2.5 m-auto bg-teal-400 absolute rounded-[10px]">
                <Text as="p" className="mt-[7px] mb-0.5 !text-white-A700">
                  Sounds delicious, Meera! 🤩 Can&#39;t wait for Saturday! By the way, do you think we should get some
                  ice cream for dessert?&quot;
                </Text>
              </div>
            </div>
          </div>
          <Input
            shape="round"
            name="message"
            placeholder={`Send message`}
            suffix={<Img src="images/img_avatar.png" alt="Avatar" className="w-[40px] h-[40px]" />}
            className="w-[89%] sm:px-5"
          />
        </div>
      </div>
 
  );
}
