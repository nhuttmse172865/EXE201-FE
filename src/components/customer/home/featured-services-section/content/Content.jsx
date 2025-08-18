import React, { useEffect, useRef, useState } from "react";
import Card from "./card/Card";
import img1 from "/src/assets/images/grooming.jpg";
import img2 from "/src/assets/images/veterinarian.jpg";
import img3 from "/src/assets/images/boarding.jpg";
import img4 from "/src/assets/images/training.jpg";
import img5 from "/src/assets/images/emergency.jpg";
import img6 from "/src/assets/images/spa.png";
import img7 from "/src/assets/images/dental.jpg";
import img8 from "/src/assets/images/transport.jpg";
import img9 from "/src/assets/images/nutrition.jpg";
import img10 from "/src/assets/images/behavioral.jpg";
const Content = () => {
  const [featuredServices, setFeaturedServices] = useState([
    {
      name: "Grooming & Styling",
      description: "Help your pet stay clean, fresh, and look their best.",
      clinic: "Pet Paradise Clinic",
      address: "District 1, HCMC (2.5 km)",
      used: 245,
      imageUrl: img1,
    },
    {
      name: "Vaccination & General Check-up",
      description:
        "Protect your pet's health with vaccination packages and regular check-ups.",
      clinic: "Healthy Paws Vet",
      address: "District 3, HCMC (5.1 km)",
      used: 180,
      imageUrl: img2,
    },
    {
      name: "Pet Boarding",
      description:
        "Travel with peace of mind with professional and safe pet boarding services.",
      clinic: "Happy Tails Hotel",
      address: "District 7, HCMC (8.0 km)",
      used: 320,
      imageUrl: img3,
    },
    {
      name: "Pet Training",
      description:
        "Help your pet develop good behavior and obedience skills with our courses.",
      clinic: "K9 Academy",
      address: "District 2, HCMC (3.8 km)",
      used: 150,
      imageUrl: img4,
    },
    {
      name: "24/7 Emergency Service",
      description: "Urgent medical support for your pet anytime, anywhere.",
      clinic: "Emergency Pet Care",
      address: "District 4, HCMC (6.7 km)",
      used: 410,
      imageUrl: img5,
    },
    {
      name: "Spa & Beauty Services",
      description:
        "Comprehensive care from nails, teeth to skin and fur for your pet.",
      clinic: "Pet Grooming Salon",
      address: "District 5, HCMC (4.2 km)",
      used: 290,
      imageUrl: img6,
    },
    {
      name: "Dental Care",
      description:
        "Professional dental cleaning and oral health check-ups for your furry friend.",
      clinic: "Bright Smiles Vet",
      address: "District 10, HCMC (7.5 km)",
      used: 90,
      imageUrl: img7,
    },
    {
      name: "Pet Transport",
      description:
        "Safe and comfortable transportation for your pet to clinics or other destinations.",
      clinic: "Pet Express Transport",
      address: "Binh Thanh District, HCMC (1.2 km)",
      used: 115,
       imageUrl: img8,
    },
    {
      name: "Nutrition Counseling",
      description:
        "Personalized dietary plans and advice for your pet's optimal health.",
      clinic: "NutriPet Clinic",
      address: "Phu Nhuan District, HCMC (4.9 km)",
      used: 60,
       imageUrl: img9,
    },
    {
      name: "Behavioral Therapy",
      description:
        "Address challenging behaviors with expert guidance and proven techniques.",
      clinic: "Calm Paws Center",
      address: "Go Vap District, HCMC (9.3 km)",
      used: 75,
      imageUrl: img10,
    },
  ]);

  const containerFeaturedService = useRef(null);
  const [autoScrollToggle, setAutoScrollToggle] = useState(true);

  const handleScrollNext = async () => {
    let featuredServicesNew = [
      ...featuredServices,
      ...featuredServices.slice(0,1),
    ];
    setFeaturedServices(featuredServicesNew);
    await new Promise((resolve) => setTimeout(resolve, 500));
    await containerFeaturedService.current.scrollTo({
      left: 259,
      behavior: "smooth",
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFeaturedServices([...featuredServicesNew.splice(1)]);
    await containerFeaturedService.current.scrollTo({
      left: 0,
      behavior: "auto",
    });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleScrollNext();
      setAutoScrollToggle((prev) => !prev);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [autoScrollToggle,handleScrollNext]);

  return (
    <div
      ref={containerFeaturedService}
      className="mt-8 flex gap-5 w-full overflow-x-auto scroll-hidden snap-x snap-mandatory "
    >
      {featuredServices.map((item, index) => (
        <Card
          key={index}
          nameService={item.name}
          descriptionService={item.description}
          used={item.used}
          addressClinic={item.address}
          nameClinic={item.clinic}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default Content;
