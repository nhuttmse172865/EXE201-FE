import React from "react";
import InputText from "../../../../../common/input/InputText";
import IMAGES from "../../../../../../utils/images";
import OutlineButton from "../../../../../common/button/outline-button/OutlineButton";
import ElevatedButton from "../../../../../common/button/elevated-button/ElevatedButton";

const Content = ({ setCurrentStep }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-white h-full rounded-2xl pt-[100px] px-[40px]">
        <div className="flex flex-col">
          <h1 className="font-family-playfair-display text-[20px] text-(--color-title-100) w-full text-end">
            Lorem Ipsum is simply dummy text of the printing
          </h1>
          <div className=" flex justify-end mt-2.5">
            <p className="w-[70%] text-[14px] text-[rgba(0,0,0,0.4)] text-end">
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <div className="flex flex-col">
            <label className="text-[14px] mb-0.5 text-(--color-title-60)">
              Name of Legal Representative
              <span className="text-(--color-primary-100)">*</span>
            </label>
            <input
              type="text"
              className="h-[48px] border-[1px] border-(--color-title-20) rounded-[.375rem] text-(--color-title-100) text-[15px] max-w-[550px]"
              placeholder=""
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] mb-0.5 text-(--color-title-60)">
              Tax Identification Number
              <span className="text-(--color-primary-100)">*</span>
            </label>
            <input
              type="text"
              className="h-[48px] border-[1px] border-(--color-title-20) rounded-[.375rem] text-(--color-title-100) text-[15px] max-w-[250px]"
              placeholder=""
            />
          </div>
          <div className="flex gap-x-[80px]">
            <div className="flex flex-col">
              <label className="text-[14px] mb-0.5 text-(--color-title-60)">
                Photo of Business License{" "}
                <span className="text-(--color-primary-100)">*</span>
              </label>
              <div className="relative w-[200px] h-[250px] bg-[#f7f7f7] rounded-[.375rem]">
                <input
                  type="file"
                  className=" absolute top-0 left-0 w-full h-full  opacity-0 cursor-pointer"
                />
                <div className="w-full h-full flex justify-center items-center">
                  <div className="flex flex-col items-center w-[70%]">
                    <img src={IMAGES.uploadFile} className="w-[25px]" />
                    <h5 className="text-[14px] text-[rgba(0,0,0,0.6)]">
                      Drop file or{" "}
                      <span className="text-(--color-primary-100) font-medium">
                        browse
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px] mb-0.5 text-(--color-title-60)">
                Photo of Veterinary Practice Certificate(s){" "}
                <span className="text-(--color-primary-100)">*</span>
              </p>
              <div className="relative w-[200px] h-[250px] bg-[#f7f7f7] rounded-[.375rem] overflow-hidden cursor-pointer">
                <input
                  type="file"
                  className=" absolute top-0 left-0 w-full h-full  opacity-0 cursor-pointer"
                />
                <div className="w-full h-full flex justify-center items-center">
                  <div className="flex flex-col items-center w-[70%]">
                    <img src={IMAGES.uploadFile} className="w-[25px]" />
                    <h5 className="text-[14px] text-[rgba(0,0,0,0.6)]">
                      Drop file or{" "}
                      <span className="text-(--color-primary-100) font-medium">
                        browse
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-[40px] flex gap-x-5">
            <OutlineButton
              width="200px"
              height="50px"
              text="Previous"
              handleOnclick={() => setCurrentStep((prev) => prev - 1)}
            />
            <ElevatedButton width="200px" height="50px" text="Send Form" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
