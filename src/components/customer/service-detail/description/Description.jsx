import React from "react";

const Description = () => {
  return (
    <div className="mt-8">
      <div className="flex gap-1.5 items-start">
        <div className="w-[3px] h-[24px] bg-(--color-primary-100)"></div>
        <h4 className="font-family-playfair-display text-[18px] font-medium">
          Description
        </h4>
      </div>
      <div className="mt-5 ml-5">
        <p className="w-[90%] text-[15px] text-[rgba(0,0,0,0.9)]">
          Welcome to the premium Spa & Beauty package for pets at [Supplier
          Name]. We believe every pet deserves care and affection, and our
          services are designed to bring radiant beauty and optimal health to
          your four-legged friend.
        </p>

        <div className="mt-5">
          <h4 className="font-family-playfair-display text-[17px] font-medium text-[rgba(0,0,0,0.8)]">
            Details of service:
          </h4>
          <ul className="ml-10 text-[15px] text-[rgba(0,0,0,0.7)] list-decimal flex flex-col gap-4 py-4">
            <li>
              <span className="text-[rgba(0,0,0,0.7)] font-medium">
                Deep Shampoo & Conditioner:{" "}
              </span>
              <span>
                use organic shower gel and conditioner, suitable for each skin
                and hair type.
              </span>
              <p className="ml-5 mt-3.5 italic text-[14px]">
                Duration: Approximately 30-60 minutes (depending on pet size and
                coat type)
              </p>
            </li>
            <li>
              <span className="text-[rgba(0,0,0,0.7)] font-medium">
                Oral hygiene:{" "}
              </span>
              <span>clean tartar and eliminate bad breath</span>
              <p className="ml-5 mt-3.5 italic text-[14px]">
                Duration: Approximately 15-30 minutes
              </p>
            </li>
            <li>
              <span className="text-[rgba(0,0,0,0.7)] font-medium">
                Nail trimming & Cleaning between toes:{" "}
              </span>
              <span>help pets move comfortably and avoid nail diseases.</span>
              <p className="ml-5 mt-3.5 italic text-[14px]">
                Duration: Approximately 10-20 minutes
              </p>
            </li>
            <li>
              <span className="text-[rgba(0,0,0,0.7)] font-medium">
                Ear & Eye cleaning:{" "}
              </span>
              <span>prevent infection and remove dirt.</span>
              <p className="ml-5 mt-3.5 italic text-[14px]">
                Duration: Approximately 5-15 minutes
              </p>
            </li>
            <li>
              <span className="text-[rgba(0,0,0,0.7)] font-medium">
                Relaxing massage:{" "}
              </span>
              <span>
                help pets reduce stress and increase blood circulation.
              </span>
              <p className="ml-5 mt-3.5 italic text-[14px]">
                Duration: Approximately 15-30 minutes
              </p>
            </li>
            <li>
              <span className="text-[rgba(0,0,0,0.7)] font-medium">
                Hair trimming and styling:{" "}
              </span>
              <span>
                according to the owner's request or advice from a specialist.
              </span>
              <p className="ml-5 mt-3.5 italic text-[14px]">
                Duration: Approximately 45-120 minutes (highly variable
                depending on breed, coat condition, and desired style)
              </p>
            </li>
          </ul>
          <p className="w-[90%] text-[15px] text-[rgba(0,0,0,0.7)] ml-5">
            Estimated Total Service Duration (Full Package): Approximately 2 -
            3.5 hours (this can vary based on the specific needs of each pet and
            selected styling options).
          </p>
        </div>

        <div className="mt-5">
          <h4 className="text-[rgba(0,0,0,0.9)] font-family-playfair-display text-[17px] font-medium">
            Benefit:
          </h4>
          <ul className="ml-10 text-[15px] text-[rgba(0,0,0,0.7)] flex flex-col gap-4 py-4">
            <li>
              Pets will have soft, shiny fur, fresh breath and healthy skin.
            </li>
            <li>Reduces shedding and skin problems.</li>
            <li>
              Helps pets relax, have fun and strengthen their bond with their
              owners
            </li>
          </ul>
        </div>

        <div className="mt-5">
          <p className="w-[90%] text-[15px] text-[rgba(0,0,0,0.7)] ml-5">
            We are committed to using 100% specialized products for pets, of
            natural origin, safe and non-irritating. (List some prominent brands
            if any, e.g., "Brands like Earthbath, Burt's Bees for Pets, and
            TropiClean are frequently used to ensure the highest quality care.")
          </p>
        </div>
        <div className="mt-4">
          <p className="w-[90%] text-[15px] text-(--color-title-100) italic ml-5">
            Target: suitable for both dogs and cats of all ages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
