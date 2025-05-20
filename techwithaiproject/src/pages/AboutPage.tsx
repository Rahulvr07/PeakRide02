import React from 'react';
import { Shield, Users, Mountain, Award, MapPin, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      bio: 'Former mountain guide with 15 years of experience in hill station transportation.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      bio: 'Expert in logistics and emergency response management in mountainous regions.',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Amit Patel',
      role: 'Safety Director',
      bio: 'Former rescue operations specialist with focus on hill station safety protocols.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Launched PeakRide',
      description: 'Revolutionizing hill station transportation with technology.',
    },
    {
      year: '2024',
      title: 'Expanded Coverage',
      description: 'Now serving 5 major hill stations across India.',
    },
    {
      year: '2024',
      title: 'Safety Innovation',
      description: 'Introduced offline tracking and emergency response system.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-secondary-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Making Hill Stations More Accessible</h1>
            <p className="text-xl text-white/80">
              PeakRide is revolutionizing transportation in hill stations with technology-driven solutions that work even in challenging conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              To provide safe, reliable, and accessible transportation solutions for hill stations, 
              ensuring everyone can explore the beauty of mountainous regions with peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Implementing rigorous safety measures and emergency protocols for mountain travel.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Making hill stations accessible to everyone through reliable transportation.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Building a community of trusted drivers and satisfied travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Led by mountain enthusiasts and transportation experts committed to revolutionizing hill station travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-6">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
              <p className="text-slate-600 dark:text-slate-400">Hill Stations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
              <p className="text-slate-600 dark:text-slate-400">Verified Drivers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">10K+</div>
              <p className="text-slate-600 dark:text-slate-400">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">99%</div>
              <p className="text-slate-600 dark:text-slate-400">Safety Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              From concept to reality, our mission to transform hill station transportation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="w-24 flex-shrink-0 text-right pr-6">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">{milestone.year}</span>
                </div>
                <div className="relative pl-6 border-l-2 border-primary-200 dark:border-primary-800">
                  <div className="absolute w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full -left-[7px] top-2"></div>
                  <h3 className="font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recognition & Awards</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our commitment to excellence has been recognized by industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Best Travel Innovation 2024</h3>
              <p className="text-slate-600 dark:text-slate-400">Tourism Excellence Awards</p>
            </div>
            <div className="card p-6 text-center">
              <Shield className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Safety Excellence Award</h3>
              <p className="text-slate-600 dark:text-slate-400">Mountain Tourism Board</p>
            </div>
            <div className="card p-6 text-center">
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Community Impact Award</h3>
              <p className="text-slate-600 dark:text-slate-400">Hill Station Association</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Be part of the revolution in hill station transportation. Whether you're a traveler or a driver, 
            there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent btn-large">
              Book a Ride
            </button>
            <button className="btn-outline bg-transparent text-white border-white hover:bg-white/10">
              Become a Driver
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;