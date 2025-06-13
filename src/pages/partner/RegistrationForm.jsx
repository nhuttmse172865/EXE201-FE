import React, { useState } from "react";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [registered, setRegistered] = useState(false);  

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    openTime: "07:30",
    closeTime: "17:30",
  });

const [servicePrices, setServicePrices] = useState({
  generalCheckups: "20",
  surgery: "20",
  grooming: "20",
  vaccinations: "20",
  daycare: "20",
  spaying: "20",
  other: "20",
  consultingFee: "20"
});


  const [services, setServices] = useState({
    generalCheckups: true,
    surgery: false,
    grooming: true,
    vaccinations: false,
    daycare: true,
    spaying: false,
    onlineConsulting: false,
    consultingFee: "paid",
    other: "",
  });

const [documents, setDocuments] = useState({
  businessLicense: null,
  vetLicense: null,
  clinicImage: null,
  idCard: null,
});
const handlePriceChange = (e, serviceKey) => {
  const value = e.target.value;
  if (value === "" || (Number(value) > 0 && /^\d*\.?\d*$/.test(value))) {
    setServicePrices((prev) => ({
      ...prev,
      [serviceKey]: value
    }));
  }
};


const handleFileChange = (e, key) => {
  const file = e.target.files[0];
  if (file && file.size <= 100 * 1024 * 1024) {
    setDocuments((prev) => ({ ...prev, [key]: file }));
  } else {
    alert("File must be under 100MB and in jpeg/png format.");
  }
};

const renderFileInput = (label, key) => (
  <div className="border border-dashed border-pink-400 rounded-md p-4">
    <label className="block text-sm font-medium mb-1">{label} *</label>
    <p className="text-xs text-gray-500 mb-2">
      Please upload file in jpeg or png format. Max file size: 100MB.
    </p>
    <input
      type="file"
      accept="image/jpeg,image/png"
      onChange={(e) => handleFileChange(e, key)}
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
        file:rounded-md file:border-0 file:text-sm file:font-semibold
        file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
    />
  </div>
);


// Check valid form inputs before proceeding to the next step

const validateDocuments = () => {
  const { businessLicense, vetLicense, clinicImage, idCard } = documents;
  if (!businessLicense || !vetLicense || !clinicImage || !idCard) {
    alert("Please upload all required documents.");
    return false;
  }
  return true;
};


  const validateForm = () => {
    const { name, address, phone, email, password, openTime, closeTime } = form;
    if (!name || !address || !phone || !email || !password || !openTime || !closeTime) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };

const handleNext = () => {
  if (step === 1 && validateForm()) {
    setStep(2);
  } else if (step === 2) {
    setStep(3);
  } else if (step === 3 && validateDocuments()) {
    setStep(4);
  } else if (step === 4) {
    setRegistered(true);
    setStep(5);
  }
};

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleServiceChange = (e) => {
    const { name, checked, value, type } = e.target;
    setServices((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const StepHeader = () => (
    <div className="w-full bg-pink-50 py-4 px-8 flex items-center justify-between">
      <h1 className="text-xl font-bold text-pink-400">PetCarePartner</h1>
    </div>
  );

const StepProgress = () => {
  const stepTitles = [
    "Basic information",
    "Services Provided",
    "Identification information",
    "Complete",
  ];

  return (
    <div className="flex justify-between items-start mb-10 relative">
      {stepTitles.map((title, index) => {
        const currentStep = index + 1;
        const isCompleted = currentStep < step;
        const isActive = currentStep === step;

        return (
          <div className="flex flex-col items-center z-10 w-1/4" key={index}>
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold
                ${
                  isCompleted
                    ? "bg-green-500 text-white border border-green-500"
                    : isActive
                    ? "bg-pink-500 text-white border border-pink-500"
                    : "bg-white text-gray-500 border border-gray-300"
                }`}
            >
              {isCompleted ? "✓" : currentStep}
            </div>
            <span
              className={`text-sm mt-2 text-center ${
                isActive ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              {title}
            </span>
          </div>
        );
      })}
      <div className="absolute top-4 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-gray-300 z-0" />
    </div>
  );
};

  return (
    <div className="min-h-screen bg-pink-100">
      <StepHeader />

      <div className="flex justify-center py-10">
        <div className="bg-white w-[800px] rounded-xl shadow-md px-10 py-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Register Information Partner</h2>
          <StepProgress />

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Clinic/Hospital Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter clinic/hospital name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Address *</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

                <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Password *</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Operating Hours *</label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">From</span>
                    <input
                      type="time"
                      name="openTime"
                      value={form.openTime}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-2 py-1"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">To</span>
                    <input
                      type="time"
                      name="closeTime"
                      value={form.closeTime}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-2 py-1"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <label className="block text-sm font-medium mb-3">List of Services *</label>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  { name: "generalCheckups", label: "General check-ups" },
                  { name: "vaccinations", label: "Vaccinations" },
                  { name: "surgery", label: "Surgery" },
                  { name: "daycare", label: "Pet Boarding & Daycare" },
                  { name: "grooming", label: "Grooming" },
                  { name: "spaying", label: "Spaying" },
                ].map((item) => (
                  <label key={item.name}>
                    <input
                      type="checkbox"
                      name={item.name}
                      checked={services[item.name]}
                      onChange={handleServiceChange}
                    />{" "}
                    {item.label}
<input
  type="text"
  value={servicePrices[item.name]}
  onChange={(e) => handlePriceChange(e, item.name)}
  className="ml-2 px-2 border rounded-md w-20 text-center"
/>
  <span className="text-gray-500 font-semibold ml-1">$</span>
                  </label>
                ))}
              </div>

              <div className="mt-6 mb-3">
                <label className="text-sm font-medium">
                <input
                 type="checkbox"
                 name="onlineConsulting"
                 checked={services.onlineConsulting}
                      onChange={handleServiceChange}
                    />{" "}
                  Provide online consulting services</label>
                <div className="flex items-center mt-2 space-x-4">
                  <label className="text-sm">
                    Consulting fee
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="consultingFee"
                      value="paid"
                      checked={services.consultingFee === "paid"}
                      onChange={handleServiceChange}
                    />
                    <span>Price: </span>
                    <input
  type="text"
  value={servicePrices.consultingFee}
  onChange={(e) => handlePriceChange(e, "consultingFee")}
  className="w-20 border px-2 rounded-md text-center"
/>
 <span className="text-gray-500 font-semibold">$</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="consultingFee"
                      value="free"
                      checked={services.consultingFee === "free"}
                      onChange={handleServiceChange}
                    />
                    <span>Free</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm">
                    <input
                 type="checkbox"
                 name="onlineConsulting"
                 checked={services.onlineConsulting}
                      onChange={handleServiceChange}
                    />{" "}
                  Other</label>
                <div className="flex space-x-3 items-center mt-2">
                  <input
                    type="text"
                    name="other"
                    value={services.other}
                    onChange={handleServiceChange}
                    placeholder="Service name"
                    className="border px-3 py-1 rounded-md"
                  />

<input
  type="text"
  value={servicePrices.other}
  onChange={(e) => handlePriceChange(e, "other")}
  className="w-20 border px-2 rounded-md text-center"
/>
 <span className="text-gray-500 font-semibold">$</span>
                </div>
              </div>
            </>
          )}

          {/* STEP 3 */}
{step === 3 && (
  <div className="grid grid-cols-2 gap-6 text-sm">
    {renderFileInput("Upload Business License", "businessLicense")}
    {renderFileInput("Upload Image Clinic/Hospital", "clinicImage")}
    {renderFileInput("Upload Veterinary License", "vetLicense")}
    {renderFileInput("Upload Identity Card/Passport", "idCard")}
  </div>
)}

 {/* STEP 4: COMMIT */}
          {step === 4 && !registered && (
            <div className="text-left space-y-4">
              <h3 className="text-md font-semibold">Commit</h3>
              <p className="text-sm">
                When registering on the platform, the clinic provides personal and business information for the purposes of:
              </p>
<div className="space-y-1 text-sm text-gray-700">
  <p>→ Display information on the application so customers can search and book services.</p>
  <p>→ Improve the user experience and support the clinic during the collaboration process.</p>
  <p>→ Within 24 hours of receiving the information, we will check and create an account for you.</p>
</div>
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  className="px-6 py-2 rounded-md bg-white-100 text-pink-400 border border-pink-400"
                  onClick={() => setStep(3)}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 rounded-md bg-pink-400 text-white"
                  onClick={handleNext}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

{/* STEP 5: REGISTER SUCCESS */}
{step === 5 && (
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <div className="bg-green-500 w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl">
        ✓
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-2">Register Success</h3>
    <button
      className="mt-4 px-5 py-2 rounded-md bg-pink-400 text-white hover:bg-pink-500"
      onClick={() => window.location.href = "/"}
    >
      Home Page
    </button>
  </div>
)}



{/* Navigation Buttons */}
{step < 4 && (
  <div className="flex justify-between mt-6">
    {step > 1 ? (
      <button onClick={handleBack} className="bg-pink-300 text-white px-6 py-2 rounded-md">
        Back
      </button>
    ) : (
      <div />
    )}
    <button onClick={handleNext} className="bg-pink-500 text-white px-6 py-2 rounded-md">
      Next
    </button>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
