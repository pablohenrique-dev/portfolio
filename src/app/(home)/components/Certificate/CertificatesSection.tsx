import { CertificatesSlide } from "./CertificatesSlide";

const listCertificates = [
  {
    id: 1,
    title: "HTML & CSS",
    icon: "/assets/icon-react.svg",
    certificateUrl: "https://www.origamid.com/certificate/e8c0895f",
    color: "rgba(241,101,40,1)",
  },
  {
    id: 2,
    title: "JavaScript",
    icon: "/assets/icon-react.svg",
    certificateUrl: "https://www.origamid.com/certificate/b8dbe48c",
    color: "rgba(240,220,78,1)",
  },
  {
    id: 3,
    title: "Git & Github",
    icon: "/assets/icon-react.svg",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-09ff3f4d-635b-4c8e-853a-4401b9f75679/",
    color: "rgba(240,80,51,1)",
  },
  {
    id: 4,
    title: "React",
    icon: "/assets/icon-react.svg",
    certificateUrl: "https://www.origamid.com/certificate/81a02836",
    color: "rgba(97,219,251,1)",
  },
  {
    id: 5,
    title: "TypeScript",
    icon: "/assets/icon-react.svg",
    certificateUrl: "https://www.origamid.com/certificate/0dad2a3e",
    color: "rgba(20,110,245,1)",
  },
  {
    id: 6,
    title: "Redux",
    icon: "/assets/icon-react.svg",
    certificateUrl: "https://www.origamid.com/certificate/81a02836",
    color: "rgba(118,74,188,1)",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="certificados" className="overflow-hidden">
      <div className="container flex flex-col gap-8 border-b border-gray-200 py-16 sm:gap-14 md:py-28">
        <CertificatesSlide listCertificates={listCertificates} />
      </div>
    </section>
  );
};
