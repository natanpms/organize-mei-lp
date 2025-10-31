import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type TabItem = {
  title: string;
  content: string;
};

type TabsProps = {
  items: TabItem[];
};

export function Tabs({ items }: TabsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center">
        <div className="w-full md:w-[40%] space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 shadow-md p-3 rounded-md hover:cursor-pointer"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggleTab(index)}
              >
                <h2 className="text-[#252b42] text-lg font-semibold">{item.title}</h2>
                <IoIosArrowDown
                  size={25}
                  className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </div>
              {openIndex === index && (
                <span className="text-sm mt-2 block">{item.content}</span>
              )}
            </div>
          ))}
        </div>
    </div>
  );
}
