

// Reusable Badge Component
import Image from "next/image";

const Badge = ({ label }: { label: string }) => (
  <div className="px-3.5 py-1 bg-opacity-10 rounded-[40px] shadow-[inset_0px_0px_4px_2px_rgba(255,255,255,0.10)] outline-[0.5px] outline-offset-[-0.5px] outline-white backdrop-blur-blur flex justify-start items-center gap-2 overflow-hidden">
    <div className="text-white text-xs leading-none">{label}</div>
  </div>
);

const BlogCard = ({
  imageSrc,
  title,
  description,
  tags,
}: {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
}) => (
  <div className="w-full p-3.5 bg-white/10 rounded-xl outline-[0.50px] outline-offset-[-0.50px] outline-white backdrop-blur-md flex flex-col lg:flex-row justify-start items-start gap-6">
    <Image
      src={imageSrc}
      alt={title}
      width={625}
      height={210}
      className="w-full lg:w-60 h-44 rounded-xl object-cover"
    />
    <div className="flex-1 flex flex-col justify-start items-start gap-6">
      <div className="flex flex-col justify-start items-start gap-3.5">
        <div className="text-white text-lg font-normal font-Montserrat leading-tight">
          {title}
        </div>
        <div className="text-white text-xs font-normal font-inter leading-snug">
          {description}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Badge key={index} label={tag} />
        ))}
      </div>
    </div>
  </div>
);

// Main BlogPage Component
const BlogPage = () => {
  const blogPosts = [
    {
      imageSrc: "/portrait2.svg",
      title: "How to Optimize Your Resume for ATS & Get Noticed",
      description:
        "Your resume might be getting rejected before a recruiter even sees it. Learn how to beat ATS and stand out.",
      tags: ["Resume Tips", "6 Min Read"],
    },
    {
      imageSrc: "/portrait3.svg",
      title: "Top IT Job Roles in Demand for 2025",
      description:
        "Which IT jobs are booming? Discover the top-paying roles and the skills you need to secure them.",
      tags: ["Resume Tips", "6 Min Read"],
    },
    {
      imageSrc: "/portrait4.svg",
      title: "The Ultimate Guide to Acing Your IT Interview",
      description:
        "Impress hiring managers with confidence. Get expert tips on tackling technical and behavioral questions.",
      tags: ["Interview Prep", "6 Min Read"],
    },
    {
      imageSrc: "/portrait5.svg",
      title: "How to Negotiate a Higher Salary in Your Next IT Job",
      description:
        "Don't leave money on the table! Learn negotiation tactics that can boost your salary by 15-30%.",
      tags: ["Salary & Growth", "6 Min Read"],
    },
  ];

  return (
    <div className="relative overflow-hidden bg-black font-sans px-4 sm:px-[7.92%] min-h-screen"
    style={{ backgroundImage: "url('/Blog_vector.svg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
  {/* <div className="absolute inset-0 z-10 bg-[url('/Blog_vector.svg')] bg-cover bg-center bg-no-repeat opacity-70"></div> */}
  <div className="absolute inset-0 bg-gradient-to-b"></div>
      
      {/* Header */}
      <div className="relative z-10">
      <div className="flex flex-col justify-start items-center gap-6 py-12 text-center">
        <div className="px-3 py-[5px] rounded-[56px] bg-[#1B2B3A] text-white text-lg font-normal outline-1 outline-offset-[-1px] outline-white backdrop-blur-sm font-Montserrat leading-relaxed inline-flex justify-start items-center gap-2 overflow-hidden">
          Blog/Insight
        </div>
        <div className="max-w-4xl text-center">
          <span className="text-white text-5xl md:text-5xl font-inter font-semibold leading-[40px] md:leading-[56px]">
            Stay Ahead, Gain Insights, and{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3DB21] to-[#00A6B2] text-3xl md:text-5xl font-inter font-semibold leading-[56px] md:leading-[56px]">
            Accelerate Your IT Career
          </span>
        </div>
      </div>



      {/* Search Box */}
      <div className="w-[461px] p-3.5 max-w-lg mx-auto mb-10 mt-[-24px]">
        <div className="w-full bg-white/5 text-white border border-white rounded-xl p-4 flex items-center backdrop-blur-md">
          <Image
            src="/Search.png"
            alt="Search Icon"
            width={24}
            height={24}
            className="mr-3"
          />
          <input
            type="text"
            placeholder="What do you want to know?"
            className="bg-transparent font-inter leading-normal flex-1 outline-none text-white placeholder-white/80"
          />
        </div>
      </div>

      

      {/* Blog Content */}
      <div className="max-w-[1284px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Featured Blog */}
        <div className="flex flex-col gap-6">
          <Image
            src="/portrait1.svg"
            alt="Portrait 1"
            width={934}
            height={618}
            className="rounded-xl w-full"
          />
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/Ellipse 17.svg"
                alt="Author"
                width={60}
                height={60}
                className="w-14 h-14"
              />
              <div className="w-32 inline-flex justify-start items-start flex-col gap-2">
                <div className="justify-start text-white text-base font-medium font-inter leading-tight">
                  Tathagat Devda
                </div>
                <div className="self-stretch justify-start text-white text-sm font-medium font-inter leading-tight">Author</div>
              </div>
            </div>
            <div className="self-stretch justify-start flex flex-col gap-6 mt-[-14px]">
              <div className="text-white text-2xl md:text-3xl font-medium leading-8 font-inter md:leading-10">
                Mastering Your IT Job Search: Strategies for Success in 2025
              </div>
              <div className="self-stretch justify-start text-white text-xs font-normal font-inter leading-none mt-[-14px]">
                Discover proven job search strategies, resume tips, and
                interview insights to land your dream IT role faster.
              </div>

              <div className="flex items-center gap-2">
                <div className="w-[91px] h-[24px] px-3.5 py-1 bg-white/10 rounded-[40px] shadow-[inset_0px_0px_4px_2px_rgba(255,255,255,0.10)] outline-[0.50px] outline-offset-[-0.50px] outline-white backdrop-blur-blur inline-flex justify-start items-center gap-2 overflow-hidden">
                  <div className="justify-start text-white text-xs font-normal font-inter leading-none">IT Job Tips</div>
                </div>
                <div className="w-[92px] h-[24px] px-3.5 py-1 bg-white/10 rounded-[40px] shadow-[inset_0px_0px_4px_2px_rgba(255,255,255,0.10)] outline-[0.50px] outline-offset-[-0.50px] outline-white backdrop-blur-blur inline-flex justify-start items-center gap-2 overflow-hidden">
                  <div className="justify-start text-white text-xs font-normal font-inter leading-none">6 Min Read</div>
                </div>
              </div>

              {/* <div className="flex flex-wrap gap-3">
                <Badge label="IT Job Tips" />
                <Badge label="6 Min Read" />
              </div> */}
            </div>
          </div>
        </div>

        {/* Other Posts */}
        <div className="flex flex-col gap-6 py-[70px] mt-[-68px]">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              imageSrc={post.imageSrc}
              title={post.title}
              description={post.description}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogPage;
