import React, { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { MdEdit, MdSave } from "react-icons/md";

const App = () => {
  const [currentTab, setCurrentTab] = useState("jobInfo");
  const [jobDescription, setJobDescription] = useState(
    "Innovatech Solutions is a cutting-edge technology firm dedicated to revolutionizing the way businesses operate. Founded in 2023, we specialize in developing innovative software solutions that streamline processes and enhance productivity. Our team of experts is passionate about harnessing the power of artificial intelligence and machine learning to create tools that empower organizations to thrive in a competitive landscape. At Innovatech, we believe in a future where technology and creativity go hand in hand, driving success for our clients across various industries. At Innovatech Solutions, we’re all about shaking things up in the tech world! Since 2023, we’ve been crafting cool software that helps businesses run smoother and get more done. Our awesome team loves using AI and machine learning to whip up tools that help companies stand out in today’s fast-paced market. We’re all about blending tech with creativity to help our clients succeed in all sorts of industries."
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isMainEditing, setIsMainEditing] = useState(false);
  const [isSubEditing, setIsSubEditing] = useState(false);
  const textareaRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isEditing && textareaRef.current && containerRef.current) {
      const contentHeight = textareaRef.current.scrollHeight;
      containerRef.current.style.height = `auto`; // Add some padding
    } else {
      containerRef.current.style.height = `260px`;
    }
  }, [jobDescription, isEditing]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic can be added here (e.g., API call to save the description)
  };
  const [mainSkills, setMainSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ]);
  const [subSkills, setSubSkills] = useState([
    "Flexbox",
    "Grid Layout",
    "SASS",
    "CSS Animations",
    "Responsive Design",
  ]);

  const [skillInput, setSkillInput] = useState("");
  const [skillInput2, setSkillInput2] = useState("");

  const handleAddMainSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      setMainSkills([...mainSkills, skillInput.trim()]);
      setSkillInput(""); // Clear input after adding
    }
  };

  const handleAddSubSkill = (e) => {
    if (e.key === "Enter" && skillInput2.trim() !== "") {
      setSubSkills([...subSkills, skillInput2.trim()]);
      setSkillInput2(""); // Clear input after adding
    }
  };
  return (
    <>
      <main>
        <section className="px-10 py-5 flex flex-col max-w-[1200px] mx-auto">
          <div className="flex justify-between h-[40%] max-md:flex-col max-md:gap-6 shadow-[0px_0px_4px_0px_#00000040_inset] py-5 px-4 rounded-lg bg-[#F5F5F5]">
            <div className="w-full md:w-3/5 ">
              <div className="flex gap-4 h-full max-[520px]:flex-col">
                <div className="flex items-center">
                  <img
                    src="/meta-logo.png"
                    alt="Company Logo"
                    className="w-full h-full max-[520px]:w-[100px] max-[520px]:h-[100px]"
                  />
                </div>
                <div className="">
                  <h2 className="text-[24px] font-bold text-[#2D2D2D]">
                    UI/UX Designer
                  </h2>
                  <p className="flex text-[16px] font-medium text-[#787878]">
                    Meta |
                    <img
                      className="h-[14px] w-[14px] mt-2 ml-1 mr-1"
                      src="/location.svg"
                      alt=""
                    />{" "}
                    Noida
                  </p>
                  <div className="flex items-center">
                    <img
                      className="h-[18px] w-[18px]"
                      src="/briefcase.svg"
                      alt=""
                    />
                    <span className="text-[16px] font-medium text-[#747474] ml-[2px]">
                      2 years
                    </span>
                    <span className="mx-2 h-[15px] border border-l border-[#BCB4B4]"></span>
                    <img
                      className="h-[18px] w-[18px] mr-1"
                      src="/securitytime.svg"
                      alt=""
                    />
                    <span className="text-[16px] font-medium text-[#747474]">
                      Fulltime
                    </span>
                    <span className="mx-2 h-[15px] border border-l border-[#BCB4B4]"></span>
                    <img
                      className="h-[18px] w-[9px] mr-1"
                      src="/rupees.svg"
                      alt=""
                    />
                    <span className="text-[16px] font-medium text-[#747474]">
                      3 - 5 LPA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 ">
              <button className="p-3 rounded-[10px] border border-[#0072DC] text-[16px] font-medium text-[#0072DC]">
                View application
              </button>
              <button className="p-[12px] rounded-[10px] text-[16px] font-medium bg-[#0072DC] text-white cursor-not-allowed">
                Repost Job
              </button>
            </div>
          </div>
          <div className="border border-[#B9B9B9] shadow-[0px_0px_4px_0px_#00000040_inset] rounded-xl p-6 mt-7 flex flex-col gap-[28px]">
            <div className="py-6 flex items-center gap-[52px] border-b border-[#B9B9B9]">
              <button
                className={`text-[20px] font-semibold ${
                  currentTab === "jobInfo"
                    ? " text-[#0072DC] underline underline-offset-8"
                    : "text-[#6F6F6F]"
                }`}
                onClick={() => setCurrentTab("jobInfo")}
              >
                Job info
              </button>
              <button
                className={`text-[20px] font-semibold ${
                  currentTab === "setting"
                    ? " text-[#0072DC] underline underline-offset-8"
                    : "text-[#6F6F6F]"
                }`}
                onClick={() => setCurrentTab("setting")}
              >
                Setting
              </button>
            </div>
            <div className="mt-5">
              <form
                action=""
                className="flex items-center justify-between gap-3"
              >
                <div className="flex flex-col gap-3 w-full">
                  <label
                    htmlFor="joblevel"
                    className="text-[24px] font-bold text-[#1E1E1E]"
                  >
                    Job Level
                  </label>
                  <input
                    type="text"
                    placeholder="UI Designer"
                    className="shadow-[0px_0px_8px_0px_#00000066] py-2 px-3 rounded-[10px] w-full text-[20px] text-[#6F6F6F] font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label
                    htmlFor="joblevel"
                    className="text-[24px] font-bold text-[#1E1E1E]"
                  >
                    Workplace type
                  </label>
                  <input
                    type="text"
                    placeholder="Remote"
                    className="shadow-[0px_0px_8px_0px_#00000066] py-2 px-3 rounded-[10px] w-full text-[20px] text-[#6F6F6F] font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label
                    htmlFor="joblevel"
                    className="text-[24px] font-bold text-[#1E1E1E]"
                  >
                    Job Type
                  </label>
                  <input
                    type="text"
                    placeholder="Full Time"
                    className="shadow-[0px_0px_8px_0px_#00000066] py-2 px-3 rounded-[10px] w-full text-[20px] text-[#6F6F6F] font-semibold"
                  />
                </div>
              </form>
            </div>

            <div className="w-full  bg-white rounded-[12.92px]  flex-col justify-start items-center gap-12 flex">
              {/* AI Description */}
              <div
                className="w-full h-[35vh] p-8 relative rounded-[6px] overflow-hidden flex flex-col gap-4"
                ref={containerRef}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 45, 191, 0.30) -1.89%, rgba(67, 150, 247, 0.24) 45.88%, rgba(255, 155, 210, 0.42) 76.85%, rgba(201, 255, 252, 0.42) 108.11%)",
                }}
              >
                <div className="flex justify-between">
                  <div className="w-fit px-[10.77px] py-[4.77px] bg-white/20 rounded-md flex-col justify-center items-start gap-[10.77px] inline-flex">
                    <div className="justify-center items-center gap-[8.61px] inline-flex">
                      {/* Your SVG and text */}
                      <div className="text-[#1e1e1e] text-[20px] font-bold font-['SF UI  Text'] leading-normal">
                        Generating AI Description
                      </div>
                    </div>
                  </div>
                  <button
                    className="flex items-center gap-1 text-[18px] font-semibold text-[#0072DC]"
                    onClick={isEditing ? handleSave : handleEditToggle}
                  >
                    {isEditing ? (
                      <>
                        <MdSave className="w-[20px] h-[20px]" />
                        Save
                      </>
                    ) : (
                      <>
                        <MdEdit className="w-[20px] h-[20px]" />
                        Edit
                      </>
                    )}
                  </button>
                </div>
                <div className="overflow-y-auto">
                  <textarea
                    ref={textareaRef}
                    className="flex w-full text-[#6f6f6f] text-[18px] font-normal font-['SF UI Text'] leading-normal bg-transparent outline-none pr-2 border-box resize-none"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    rows={10}
                    placeholder="Enter job description..."
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col w-full gap-8">
                <div className="flex flex-col w-full gap-4 p-[24px] bg-[#F5F5F5] rounded-[8px]">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[24px] font-bold">Main Skills</h1>
                    <button
                      className="flex items-center gap-1 text-[18px] font-semibold text-[#0072DC]"
                      onClick={() => setIsMainEditing(!isMainEditing)}
                    >
                      <MdEdit className="w-5 h-5" /> Edit
                    </button>
                  </div>
                  <div className="flex gap-4 mt-4 flex-wrap">
                    {mainSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="h-10 px-[20px] py-[12px] bg-white rounded-3xl shadow-[0px_0px_8px_0px_rgba(0,0,0,0.40)] justify-center items-center gap-2 inline-flex border-[2px] border-[#0072DC]"
                      >
                        <div className="text-[#161616] text-[16px] font-medium  leading-none">
                          {skill}
                        </div>
                      </div>
                    ))}
                    {isMainEditing && (
                      <div className="flex items-center gap-2 h-10 px-[20px] py-[12px] bg-white outline-none border border-[#B9B9B9] rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] text-[#161616] text-[14px]   leading-none">
                        <input
                          type="text"
                          value={skillInput}
                          onChange={(e) => setSkillInput(e.target.value)}
                          onKeyDown={handleAddMainSkill} // Listen for Enter key
                          placeholder="Add Skill and press Enter"
                          className="outline-none"
                        />
                        <LuSearch className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col w-full gap-4 p-[24px] bg-[#F5F5F5] rounded-[8px]">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[24px] font-bold">Sub Skills</h1>
                    <button
                      className="flex items-center gap-1 text-[18px] font-semibold text-[#0072DC]"
                      onClick={() => setIsSubEditing(!isSubEditing)}
                    >
                      <MdEdit className="w-5 h-5" /> Edit
                    </button>
                  </div>
                  <div className="flex gap-4 mt-4 flex-wrap">
                    {subSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="h-10 px-5 py-3 bg-white rounded-3xl shadow-[0px_0px_8px_0px_rgba(0,0,0,0.40)] justify-center items-center gap-2 inline-flex border-[2px] border-[#0072DC]"
                      >
                        <div className="text-[#161616] text-[16px] font-medium  leading-none">
                          {skill}
                        </div>
                      </div>
                    ))}

                    {isSubEditing && (
                      <div className="flex items-center gap-2 h-10 px-[20px] py-[12px] bg-white outline-none border border-[#B9B9B9] rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] text-[#161616] text-[14px]   leading-none">
                        <input
                          type="text"
                          value={skillInput2}
                          onChange={(e) => setSkillInput2(e.target.value)}
                          onKeyDown={handleAddSubSkill} // Listen for Enter key
                          placeholder="Add Skill and press Enter"
                          className="outline-none"
                        />
                        <LuSearch className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form action="" className="grid grid-cols-2 gap-[80px]">
                <div className="flex flex-col gap-[24px]">
                  <label htmlFor="" className="text-[20px] font-semibold">
                    Salary Range
                  </label>
                  <div className="flex items-center gap-[12px]">
                    <input
                      type="text"
                      className="py-[16px] px-[24px] rounded-[8px] text-[16px] text-[#B9B9B9] border border-[#B9B9B9] bg-[#F5F5F5] w-full"
                      placeholder="Minimum Value"
                    />
                    <input
                      type="text"
                      className="py-[16px] px-[24px] rounded-[8px] text-[16px] text-[#B9B9B9] border border-[#B9B9B9] bg-[#F5F5F5] w-full"
                      placeholder="Maximum Value"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                  <label htmlFor="" className="text-[20px] font-semibold">
                    Benefits
                  </label>
                  <div className="flex items-center gap-[16px]">
                    <input type="radio" className="" />
                    <span className="text-[16px]">Health Insurance</span>
                  </div>
                </div>
              </form>
              <div className="mt-7 flex flex-col  gap-[24px]">
                <div>
                  <h4 className="text-[20px] font-semibold text-[#1E1E1E]">
                    Job Portals
                  </h4>
                  <p className="text-[16px] text-[#6F6F6F]">
                    Select any 2 platforms for posting jobs for free
                  </p>
                </div>
                <div className="flex items-center gap-[24px]">
                  <button className="border border-[#B9B9B9] rounded-[8px] flex items-center gap-[8px] p-[8px] text-[16px] font-semibold">
                    <img src="/linkedin.png" alt="linkedin image" />
                    Linkedn
                  </button>
                  <button className="border border-[#B9B9B9] rounded-[8px] flex items-center gap-[8px] p-[8px] text-[16px] font-semibold">
                    <img src="/naukri.png" alt="naukri image" />
                    Linkedn
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="border-[2px] border-[#0072DC] px-[40px] text-[18px] font-semibold rounded-[30px] py-[10px] mt-10 w-fit self-end">
            Save
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
