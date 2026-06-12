import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ================= Lifecycle Diagram Component =================
const LifecycleDiagram = () => {
  const lifecycleSteps = [
    { step: "▶", label: "Project Inception", heading: "Move forward with the next iteration and continue development", text: "In this phase, we define project goals, gather requirements, and outline the roadmap." },
    { step: "1", label: "Step 1", heading: "Project Analysis", text: "We discuss, research and analyse your project internally." },
    { step: "2", label: "Step 2", heading: "Planning", text: "Define and outline the approach, process, resources, and milestones." },
    { step: "3", label: "Step 3", heading: "Design & Structure", text: "Define the scope and outline our approach, process and milestones." },
    { step: "4", label: "Step 4", heading: "Development", text: "Begin sprints utilising our DevOps process and developing PSPI." },
    { step: "5", label: "Step 5", heading: "Testing & Feedback", text: "Continuous QA, automated/manual testing, and gathering feedback from stakeholders." },
    { step: "6", label: "Step 6", heading: "Deployment", text: "Make the production ready application work on target devices and deploy for end-users." },
    { step: "7", label: "Step 7", heading: "Retrospective", text: "Reflect on what happened during the iteration and identify actions for improvement going forward." },
    { step: "8", label: "Step 8", heading: "Next Iteration", text: "Move forward with the next iteration and continue development." },
    { step: "∞", label: "Continuous Everything", heading: "Continuous Everything", text: "After a successful release, we will continue monitoring, updating and releasing for ongoing success." },
  ];

  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="w-full py-20 bg-amber-50" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10">Project Lifecycle</h2>

        <div className="flex items-center flex-wrap justify-center gap-10 mb-10">
          {lifecycleSteps.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center cursor-pointer transition transform hover:scale-110 ${activeStep === idx ? "scale-125" : ""}`}
              onClick={() => setActiveStep(idx)}
            >
              <div
                className={`w-14 h-14 rounded-full border-4 flex items-center justify-center bg-white text-xl font-bold ${
                  idx === 0 ? "border-green-500" : idx === lifecycleSteps.length - 1 ? "border-gray-500" : "border-blue-500"
                }`}
              >
                {item.step}
              </div>
              <p className="mt-2 text-sm font-semibold text-center max-w-[80px]">{item.label}</p>
            </div>
          ))}
        </div>

        {activeStep !== null && (
          <div className="bg-white shadow-lg p-6 rounded-xl max-w-xl text-center">
            <h3 className="text-xl font-bold mb-2">{lifecycleSteps[activeStep].heading}</h3>
            <p className="text-gray-700">{lifecycleSteps[activeStep].text}</p>
          </div>
        )}
      </div>
    </section>
  );
};

// ================= MobileBannerPage Component =================
const MobileBannerPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const services = [
    { title: "Custom Mobile Applications", description: "We help you develop and deliver your next mobile application no matter how big or small the project." },
    { title: "Enterprise Mobile Applications", description: "We develop secure, robust and scalable enterprise apps to help businesses streamline their operations." },
    { title: "Progressive Web Applications", description: "Built using specific patterns and technologies, give your users an experience that’s on par with native apps." },
    
    { title: "Mobile API Development", description: "Our API experts develop custom APIs to create immersive experiences and connectivity between different mobile platforms." },
    { title: "UI/UX Design", description: "Allow our design experts to captivate your users with intuitive and aesthetically-pleasing UI." },
    { title: "Technology & Security Consulting", description: "Explore and adopt new mobile technologies and step into the next generation of mobile connectivity." },
  ];

  return (
    <>
      {/* ================= Banner Section ================= */}
      <section className="py-0 bg-gray-50 mt-14">
        <div className="relative w-full mx-auto bg-black">
          <img
            src="/img/Mobile Application Banner.jpeg"
            alt="MobileBannerPage"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* ================= About Section ================= */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Image */}
            <div data-aos="fade-right" className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="/img/Mobile Application Development Image.jpeg"
                  alt="MyoSpaz Team"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Text */}
            <div data-aos="fade-left" className="lg:pl-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 relative pb-4">
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary"></span>
                We’re your expert for cutting-edge mobile applications
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Mobile Applications have become a major innovation in today’s digital world.{" "}
                  <span className="font-semibold text-primary">MyosPaz Technologies</span> develops powerful and user-friendly mobile apps across Android, iOS, and Windows.
                </p>
                <p>
                  We specialize in both native and hybrid mobile app development, ensuring high performance and smooth UI/UX.
                </p>
                <p>
                  Along with development, we provide:
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>App Store & Play Store Deployment</li>
                    <li>Windows Store Publishing</li>
                    <li>App Optimization & Performance Tuning</li>
                    <li>Post-Launch Marketing & Support</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Mobile Services Section ================= */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Mobile App Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  data-aos="fade-right"
                  className="p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Lifecycle Diagram ================= */}
      <LifecycleDiagram />

      {/* ================= Value Section ================= */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004b6f] mb-16">
            App development brings value <br /> to your organization
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: "👥", title: "Better Communication" },
              { icon: "🔗", title: "Wider Brand Presence" },
              { icon: "💰", title: "Increased Revenue" },
              { icon: "📊", title: "Competitive Advantage" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-10 text-center border border-blue-100 hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-6">
                  <span className="text-[#0ea5e9] text-5xl">{item.icon}</span>
                </div>
                <h3 className="text-[#004b6f] text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileBannerPage;
