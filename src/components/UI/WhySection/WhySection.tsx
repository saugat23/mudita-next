import React from "react";
import WhySectionLayout from "@/components/Layouts/WhySectionLayout";
import Image from "next/image";

export default function WhySection() {
  return (
    <>
      <WhySectionLayout>
        <div className="mt-12 text-center">
            <h2 className="text-[68px] font-extrabold">Why Use <span className="text-[#6D33FA]">Mudita</span> ?</h2>
        </div>
        <div className="flex items-center justify-around px-32 mt-4">
            <div>
                <Image src="/whyuse-phone.png" alt="Phone Icon - Why use section" width={500} height={530} className="" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-14">
                <div className="text-center max-w-[304px]">
                    <h4 className="text-3xl font-bold">Convenient Access</h4>
                    <p className="text-base font-bold mt-3"><span className="text-[#6D33FA]">MUDITA</span> offers easy access to mental health support anywhere, anytime, removing barriers such as transportation or scheduling conflicts.</p>
                </div>
                <div className="text-center max-w-[304px]">
                    <h4 className="text-3xl font-bold">Diverse Resources</h4>
                    <p className="text-base font-bold mt-3"><span className="text-[#6D33FA]">MUDITA</span> provides a variety of resources including articles, self-help guides, coping strategies, and interactive tools, allowing users to find what works best for them.</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-14">
                <div className="text-center max-w-[304px]">
                    <h4 className="text-3xl font-bold">Convenient Access</h4>
                    <p className="text-base font-bold mt-3"><span className="text-[#6D33FA]">MUDITA</span> offers easy access to mental health support anywhere, anytime, removing barriers such as transportation or scheduling conflicts.</p>
                </div>
                <div className="text-center max-w-[304px]">
                    <h4 className="text-3xl font-bold">Diverse Resources</h4>
                    <p className="text-base font-bold mt-3"><span className="text-[#6D33FA]">MUDITA</span> provides a variety of resources including articles, self-help guides, coping strategies, and interactive tools, allowing users to find what works best for them.</p>
                </div>
            </div>
        </div>
      </WhySectionLayout>
    </>
  );
}
