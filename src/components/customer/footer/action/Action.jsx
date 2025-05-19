import ElevatedButton from "../../../common/button/elevated-button/ElevatedButton";

const Action = () => {
  return (
    <div className="mx-auto container h-[400px] flex flex-col items-center justify-center">
      <h1 className="font-family-playfair-display text-[35px] w-[40vw] text-center mb-5">
        Discover high-quality pet care services with ease and convenience.
      </h1>
      <ElevatedButton text="FIND A VET NOW" height="45px" width="150px"/>
      <p className="mt-5 text-[15px] text-[rgba(0,0,0,0.5)]">Quality care, simply found.</p>
    </div>
  );
};

export default Action;
