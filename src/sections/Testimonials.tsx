import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import Image from 'next/image';
const testimonials = [
  {
    text: '“This product has completely transformed how I manage my projects and deadlines”',
    name: 'Sophia Perez',
    title: 'Director @ Quantum',
    avatarImg: avatar1,
  },
  {
    text: '“These AI tools have completely revolutionized our SEO entire strategy overnight”',
    name: 'Jamie Lee',
    title: 'Founder @ Pulse',
    avatarImg: avatar2,
  },
  {
    text: '“The user interface is so intuitive and easy to use, it has saved us countless hours”',
    name: 'Alisa Hester',
    title: 'Product @ Innovate',
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: 'Alec Whitten',
    title: 'CTO @ Tech Solutions',
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className=" container pl-4">
        <div>
          <h2 className=" text-white text-5xl  text-center tracking-tighter  font-medium">
            Beyond Expectations.
          </h2>
          <p className="text-white/70 text-center tracking-tighter text-lg mt-5">
            Our revolutionary AI SEO tools have transformed our clients
            strategies.
          </p>
        </div>
        <div className=" overflow-hidden mt-10">
          <div className="flex gap-5">
            {testimonials.map((testimonial) => {
              return (
                <div
                  className="border border-white/15 p-6 rounded-xl bg-gradient-to-bl from-[rgb(140,69,255,.3)] to-[#000000] max-w-sm flex-none"
                  key={testimonial.title}
                >
                  <div className="text-white max-w-72 text-lg tracking-tighter">
                    {testimonial.text}
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className=" relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg ">
                      <Image
                        className="h-11 w-11 rounded-lg grayscale "
                        src={testimonial.avatarImg}
                        alt={testimonial.name}
                      ></Image>
                    </div>
                    <div>
                      <div className="text-white">{testimonial.name}</div>
                      <div className="text-white/50 text-sm">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
