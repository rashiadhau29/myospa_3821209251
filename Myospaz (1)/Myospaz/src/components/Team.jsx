import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const teamMembers = [
  {
    id: 1,
    name: "Walter White",
    position: "Chief Executive Officer",
    image: "/src/assets/img/team/team-1.jpg"
  },
  {
    id: 2,
    name: "Sarah Jhonson",
    position: "Product Manager",
    image: "/src/assets/img/team/team-2.jpg"
  },
  {
    id: 3,
    name: "William Anderson",
    position: "CTO",
    image: "/src/assets/img/team/team-3.jpg"
  }
];

const Team = () => {
  return (
    <section id="team" className="team section light-background py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-2">Team</h2>
          <p className="text-lg">CHECK OUR TEAM</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="member text-center"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 100)}
            >
              <div className="pic overflow-hidden rounded-lg mb-4">
                <img 
                  src={member.image} 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" 
                  alt={member.name} 
                />
              </div>
              <div className="member-info">
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <span className="text-gray-600 block mb-4">{member.position}</span>
                <div className="social flex justify-center gap-4">
                  <a href="#" className="text-gray-600 hover:text-primary transition">
                    <FiTwitter className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary transition">
                    <FiFacebook className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary transition">
                    <FiInstagram className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary transition">
                    <FiLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;