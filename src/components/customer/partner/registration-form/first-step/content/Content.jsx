import React from "react";
import ElevatedButton from "../../../../../common/button/elevated-button/ElevatedButton";

const Content = ({ setCurrentStep, formData, setFormData }) => {
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

        <div className=" mt-10 flex flex-col gap-8">
          <div className="flex flex-col">
            <label className="text-[14px] mb-0.5 text-(--color-title-60)">
              Clinic/Hospital Name{" "}
              <span className="text-(--color-primary-100)">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="h-[48px] border-[1px] border-(--color-title-20) rounded-[.375rem] text-(--color-title-100) text-[15px] max-w-[350px]"
              placeholder="e.g., PetCare Saigon Veterinary Clinic"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] mb-0.5 text-(--color-title-60)">
              Public Contact Phone Number{" "}
              <span className="text-(--color-primary-100)">*</span>
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="h-[48px] border-[1px] border-(--color-title-20) rounded-[.375rem] text-(--color-title-100) text-[15px] max-w-[250px]"
              placeholder="090xxxxxxx"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] mb-0.5 text-(--color-title-60)">
              Email <span className="text-(--color-primary-100)">*</span>
            </label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="h-[48px] border-[1px] border-(--color-title-20) rounded-[.375rem] text-(--color-title-100) text-[15px] max-w-[400px]"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] mb-0.5 text-(--color-title-60)">
              Detailed Address{" "}
              <span className="text-(--color-primary-100)">*</span>
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="h-[50px] border-[1px] border-(--color-title-20) rounded-[.375rem] text-(--color-title-100) text-[15px] max-w-[650px]"
              placeholder="Street number, street name, ward/commune, district, city/province"
            />
          </div>

          <div className="mt-10 mb-[40px]">
            <ElevatedButton
              width="200px"
              height="50px"
              text="Continue"
              handleOnclick={() => setCurrentStep((prev) => prev + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
