import React from "react";
import { Github, ExternalLink } from "lucide-react";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Smart Care",
      description:
        "Developed a Hospital Management Website using Django, HTML, CSS, and Bootstrap.Implemented a user   authentication system that allowed users to sign up, log in, and manage their accounts easily.Enabled users to see, Doctor Appointment, and Search Doctor by Appoing and a Review & Rating System.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "DaisyUI",
        "UI Components",
        "NPM Packages",
        "MySQL",
        "Firebase",
        "Django",
        "REST API",
        "Python",
      ],
      links: {
        github: "https://github.com/alamincse97/hotel_booking",
        demo: "https://alamincse97.github.io/Hospital_management_System_Frontend/",
      },
      image: p3,
      featured: true,
    },
    {
      title: "Hotel Booking",
      description:
        "Developed a Hotel Booking Website using Django, HTML, CSS, and Bootstrap.Implemented a user Authentication system allowing users to sign up, log in and manage their accounts easily.Enabled users to see, Hotel Booking, and Search Hotels by area and a Review & RatingSystem",
      tags: [
        "JavaScript",
        "Web Development",
        "Tailwind CSS",
        "DaisyUI",
        "UI Components",
        "NPM Packages",
        "MySQL",
        "Firebase",
        "Django",
        "Python",
      ],
      links: {
        github: "https://github.com/alamincse97/hotel_booking",
        demo: "https://alamincse975.pythonanywhere.com/",
      },
      image: p1,
      featured: true,
    },
    {
      title: "Blood Donation Management",
      description:
        "A user-friendly platform connecting blood donors and recipients efficiently. Users can donate blood and request it when needed, with features to search by blood group and view nearby donation requirements. The site ensures security using JSON Web Token (JWT) and implements a restriction to prevent users from donating more than once within 3 months.",
      tags: [
        "JavaScript",
        "Next JS",
        "Web Development",
        "Tailwind CSS",
        "DaisyUI",
        "UI Components",
        "NPM Packages",
        "MySQL",
        "Firebase",
        "Node.js",
        "Express.js",
        "Stripe",
      ],
      links: {
        github: "https://github.com/emonmorol/blood_boddies",
        demo: "https://blood-buddies-donation.web.app/",
      },
      image: p2,
      featured: true,
    },
  ];

  return (
    <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
