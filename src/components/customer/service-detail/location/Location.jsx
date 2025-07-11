import React from "react";

const Location = () => {
  return (
    <div className="mt-11 mb-30">
      <div className="flex gap-1.5 items-start">
        <div className="w-[3px] h-[24px] bg-(--color-primary-100)"></div>
        <h4 className="font-family-playfair-display text-[18px] font-medium">
          Location
        </h4>
      </div>

      <div className="mt-5 ml-5">
        <p className="w-[90%] text-[15px] text-[rgba(0,0,0,0.7)]">
          <span className="text-[rgba(0,0,0,0.7)] font-medium">Address: </span>
          Supplier Name, 123 Pet Lovers Street, Yeu Thuong Ward, Binh Thanh
          District, Ho Chi Minh City.
        </p>

        <div className="mt-5">
          <h4 className="font-family-playfair-display text-[16px] font-medium text-[rgba(0,0,0,0.9)]">
            Opening hours:
          </h4>
          <ul className="ml-10 text-[15px] text-[rgba(0,0,0,0.7)] flex flex-col gap-4 py-4">
            <li>
              <span className="text-[rgba(0,0,0,0.7)] font-medium">
                Monday - Friday:{" "}
              </span>
              <span>08:00 AM - 07:00 PM</span>
            </li>
            <li>
              <span className="text-[rgba(0,0,0,0.7)] font-medium">
                Saturday & Sunday:{" "}
              </span>
              <span>09:00 AM - 06:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="mt-5">
          <h4 className="font-family-playfair-display text-[16px] font-medium text-[rgba(0,0,0,0.9)]">
            Google map:
          </h4>
          <div className="mt-4 w-[90%] rounded-[.375rem] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6099415305143!2d106.80730807570389!3d10.841132857995563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sFPT%20University%20HCMC!5e0!3m2!1sen!2s!4v1752158309703!5m2!1sen!2s"
              className="w-full h-[400px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="mt-11">
          <h4 className="font-family-playfair-display text-[16px] font-medium text-[rgba(0,0,0,0.9)]">
            Contact Information:
          </h4>
          <div className=" w-[90%] rounded-[.375rem] overflow-hidden">
            <ul className="ml-10 text-[15px] text-[rgba(0,0,0,0.7)] flex flex-col gap-4 py-4">
              <li>
                <span className="text-[rgba(0,0,0,0.7)] font-medium">
                  Phone:{" "}
                </span>
                <span>(028) XXX XXXX</span>
              </li>
              <li>
                <span className="text-[rgba(0,0,0,0.7)] font-medium">
                  Hotline:{" "}
                </span>
                <span>09XX XXX XXX</span>
              </li>
               <li>
                <span className="text-[rgba(0,0,0,0.7)] font-medium">
                  Email:{" "}
                </span>
                <span>contact@[suppliername].com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
