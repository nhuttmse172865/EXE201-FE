import LIST_STEP_FORM_PARTNER from "../../../../../utils/list-step-form-partner";

const ProgressBar = ({currentStep}) => {
  
  return (
    <div className="flex flex-col h-full mt-[20vh]">
      {LIST_STEP_FORM_PARTNER.map((item, index) => (
        <div className="relative h-[100px] flex flex-col justify-center translate-y-[-50px]">
          <div
            className={`z-50 w-[40px] h-[40px] relative rounded-full flex justify-center items-center ${
              currentStep > index 
                ? "border-[1px] border-(--color-primary-100) bg-white"
                : null
            }`}
          >
            <div
              className="w-[30px] h-[30px] bg-[#e3e3e3] flex justify-center items-center rounded-full"
              style={{
                background: currentStep > index
                  ? "var(--color-primary-100)"
                  : null,
              }}
            >
              <span className="text-[14px] text-[rgba(255,255,255)] font-medium translate-y-[1px]">
                {item.step}
              </span>
            </div>
          </div>

          <div
            className={`z-30 absolute w-[1px] h-full bg-[#e3e3e3] left-[50%] translate-x-[-50%]`}
            style={{
              height:
                index === 0 || index === LIST_STEP_FORM_PARTNER.length - 1 ? "50%" : null,
              top: index === 0 ? "50%" : null,
              bottom: index === LIST_STEP_FORM_PARTNER.length - 1 ? "50%" : null,
              backgroundColor: currentStep > index
                ? "var(--color-primary-100)"
                : null,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
