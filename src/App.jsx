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
  const editableDivRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isEditing && editableDivRef.current && containerRef.current) {
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
  const [mainSkills, setMainSkills] = useState(() => {
    const savedSkills = localStorage.getItem("mainSkills");
    return savedSkills
      ? JSON.parse(savedSkills)
      : ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"];
  });
  const [subSkills, setSubSkills] = useState(() => {
    const savedSkills = localStorage.getItem("subSkills");
    return savedSkills
      ? JSON.parse(savedSkills)
      : [
          "Flexbox",
          "Grid Layout",
          "SASS",
          "CSS Animations",
          "Responsive Design",
        ];
  });

  const [skillInput, setSkillInput] = useState("");
  const [skillInput2, setSkillInput2] = useState("");

  // Save skills to localStorage whenever `mainSkills` changes
  useEffect(() => {
    localStorage.setItem("mainSkills", JSON.stringify(mainSkills));
    localStorage.setItem("subSkills", JSON.stringify(subSkills));
  }, [mainSkills, subSkills]);

  const handleAddMainSkill = () => {
    if (skillInput.trim() !== "") {
      setMainSkills([...mainSkills, skillInput.trim()]);
    }
    setIsMainEditing(false);
  };

  const handleKeyDownMainSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      setMainSkills([...mainSkills, skillInput.trim()]);
    }
  };

  const handleAddSubSkill = () => {
    if (skillInput2.trim() !== "") {
      setSubSkills([...subSkills, skillInput2.trim()]);
    }
    setIsSubEditing(false);
  };

  const handleKeyDownSubSkill = (e) => {
    if (e.key === "Enter" && skillInput2.trim() !== "") {
      setSubSkills([...subSkills, skillInput2.trim()]);
    }
  };

  const jobDetails = {
    jobImg: "/meta-logo.png",
    jobTitle: "UI/UX Designer",
    companyName: "Meta",
    location: "Noida",
    experience: "2 years",
    jobType: "Fulltime",
    workplaceType: "Remote",
    salary: "3 - 5 LPA",
    minSalary: "300000",
    maxSalary: "500000",
    benefits: ["Health Insurance"],
  };
  const handleSaveConent = () => {
    if (editableDivRef.current) {
      setJobDescription(editableDivRef.current.innerHTML);
    }
    setIsEditing(false);
  };

  const applyStyle = (style) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    if (!selectedText) return;

    // Create a styled span element
    const span = document.createElement("span");
    span.style.fontWeight = style === "bold" ? "bold" : "normal";
    span.style.fontStyle = style === "italic" ? "italic" : "normal";
    span.style.textDecoration = style === "underline" ? "underline" : "none";
    span.style.fontSize = "inherit"; // Preserve font size
    span.style.fontFamily = "inherit"; // Preserve font family
    span.textContent = selectedText;

    // Replace selected text with styled span
    range.deleteContents();
    range.insertNode(span);

    // Move cursor after the styled span
    const newRange = document.createRange();
    newRange.setStartAfter(span);
    newRange.collapse(true);
    selection.removeAllRanges();
    selection.addRange(newRange);
  };

  const handleKeyDown = (e) => {
    if (isEditing) {
      if (e.ctrlKey && e.key === "b") {
        e.preventDefault();
        applyStyle("bold");
      } else if (e.ctrlKey && e.key === "i") {
        e.preventDefault();
        applyStyle("italic");
      } else if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        applyStyle("underline");
      }
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
                    src={jobDetails.jobImg}
                    alt="Company Logo"
                    className="w-full h-full max-[520px]:w-[100px] max-[520px]:h-[100px]"
                  />
                </div>
                <div className="">
                  <h2 className="text-[24px] font-bold text-[#2D2D2D]">
                    {jobDetails.jobTitle}
                  </h2>
                  <p className="flex text-[16px] font-medium text-[#787878]">
                    {jobDetails.companyName} |
                    <img
                      className="h-[14px] w-[14px] mt-2 ml-1 mr-1"
                      src="/location.svg"
                      alt=""
                    />{" "}
                    {jobDetails.location}
                  </p>
                  <div className="flex items-center">
                    <img
                      className="h-[18px] w-[18px]"
                      src="/briefcase.svg"
                      alt=""
                    />
                    <span className="text-[16px] font-medium text-[#747474] ml-[2px]">
                      {jobDetails.experience}
                    </span>
                    <span className="mx-2 h-[15px] border border-l border-[#BCB4B4]"></span>
                    <img
                      className="h-[18px] w-[18px] mr-1"
                      src="/securitytime.svg"
                      alt=""
                    />
                    <span className="text-[16px] font-medium text-[#747474]">
                      {jobDetails.jobType}
                    </span>
                    <span className="mx-2 h-[15px] border border-l border-[#BCB4B4]"></span>
                    <img
                      className="h-[18px] w-[9px] mr-1"
                      src="/rupees.svg"
                      alt=""
                    />
                    <span className="text-[16px] font-medium text-[#747474]">
                      {jobDetails.salary}
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
                    className="shadow-[0px_0px_8px_0px_#00000066] py-[8px] px-[12px] rounded-[10px] w-full text-[20px] text-[#6F6F6F] font-semibold outline-none"
                    value={jobDetails.jobTitle}
                    readOnly
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
                    className="shadow-[0px_0px_8px_0px_#00000066] py-[8px] px-[12px] rounded-[10px] w-full text-[20px] text-[#6F6F6F] font-semibold outline-none"
                    readOnly
                    value={jobDetails.workplaceType}
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
                    className="shadow-[0px_0px_8px_0px_#00000066] py-[8px] px-[12px] rounded-[10px] w-full text-[20px] text-[#6F6F6F] font-semibold outline-none"
                    readOnly
                    value={jobDetails.jobType}
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
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4946 5.52112C11.6149 5.19602 12.0747 5.19602 12.195 5.52112L13.7932 9.84008C13.9066 10.1467 14.1484 10.3885 14.455 10.5019L18.774 12.1001C19.0991 12.2204 19.0991 12.6802 18.774 12.8005L14.455 14.3987C14.1484 14.5121 13.9066 14.7539 13.7932 15.0605L12.195 19.3795C12.0747 19.7046 11.6149 19.7046 11.4946 19.3795L9.89646 15.0605C9.783 14.7539 9.54124 14.5121 9.23461 14.3987L4.91566 12.8005C4.59056 12.6802 4.59056 12.2204 4.91566 12.1001L9.23461 10.5019C9.54124 10.3885 9.783 10.1467 9.89646 9.84008L11.4946 5.52112Z"
                          fill="url(#paint0_linear_276_2933)"
                        />
                        <path
                          d="M17.9291 13.6756C17.9892 13.5131 18.2191 13.5131 18.2793 13.6756L18.6315 14.6274C18.6504 14.6785 18.6907 14.7188 18.7418 14.7378L19.6937 15.09C19.8562 15.1501 19.8562 15.38 19.6937 15.4402L18.7418 15.7924C18.6907 15.8113 18.6504 15.8516 18.6315 15.9027L18.2793 16.8545C18.2191 17.0171 17.9892 17.0171 17.9291 16.8545L17.5769 15.9027C17.558 15.8516 17.5177 15.8113 17.4666 15.7924L16.5147 15.4402C16.3522 15.38 16.3522 15.1501 16.5147 15.09L17.4666 14.7378C17.5177 14.7188 17.558 14.6785 17.5769 14.6274L17.9291 13.6756Z"
                          fill="url(#paint1_linear_276_2933)"
                        />
                        <path
                          d="M6.77979 1.86292C6.90009 1.53782 7.35991 1.53782 7.4802 1.86292L8.18021 3.75467C8.21803 3.85688 8.29862 3.93747 8.40083 3.97529L10.2926 4.6753C10.6177 4.7956 10.6177 5.25541 10.2926 5.37571L8.40083 6.07572C8.29862 6.11354 8.21803 6.19413 8.18021 6.29634L7.4802 8.18809C7.35991 8.51319 6.90009 8.51319 6.77979 8.18809L6.07978 6.29634C6.04196 6.19413 5.96137 6.11354 5.85916 6.07572L3.96741 5.37571C3.64231 5.25541 3.64231 4.7956 3.96741 4.6753L5.85916 3.97529C5.96137 3.93747 6.04196 3.85688 6.07978 3.75467L6.77979 1.86292Z"
                          fill="url(#paint2_linear_276_2933)"
                        />
                        <path
                          d="M16.0331 4.34058L16.5912 5.84856C16.6479 6.00188 16.7688 6.12276 16.9221 6.17949L18.4301 6.73749L16.9221 7.2955C16.7688 7.35223 16.6479 7.47311 16.5912 7.62643L16.0331 9.13441L15.4751 7.62643C15.4184 7.47311 15.2975 7.35223 15.1442 7.2955L13.6362 6.73749L15.1442 6.17949C15.2975 6.12276 15.4184 6.00188 15.4751 5.84856L16.0331 4.34058Z"
                          fill="url(#paint3_linear_276_2933)"
                        />
                        <path
                          d="M7.27742 15.3918C7.40882 15.2787 7.60992 15.3902 7.58375 15.5615L7.35997 17.0263C7.35174 17.0801 7.36746 17.1349 7.40299 17.1762L8.36929 18.2996C8.48232 18.431 8.37089 18.6321 8.19955 18.6059L6.73477 18.3821C6.6809 18.3739 6.62613 18.3896 6.58482 18.4252L5.46146 19.3915C5.33007 19.5045 5.12897 19.393 5.15514 19.2217L5.37892 17.7569C5.38715 17.7031 5.37143 17.6483 5.3359 17.607L4.3696 16.4836C4.25657 16.3522 4.368 16.1511 4.53934 16.1773L6.00412 16.4011C6.05799 16.4093 6.11276 16.3936 6.15407 16.3581L7.27742 15.3918Z"
                          fill="url(#paint4_linear_276_2933)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_276_2933"
                            x1="21.7245"
                            y1="25.5766"
                            x2="4.65252"
                            y2="3.9318"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.340919" stopColor="#002DBF" />
                            <stop offset="0.479627" stopColor="#4396F7" />
                            <stop offset="0.634404" stopColor="#FF9BD2" />
                            <stop offset="0.815235" stopColor="#C9FFFC" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_276_2933"
                            x1="17.0316"
                            y1="14.3652"
                            x2="20.1669"
                            y2="19.1506"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#D388FF" />
                            <stop offset="0.695" stopColor="#4B94F7" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_276_2933"
                            x1="10.1954"
                            y1="9.13454"
                            x2="0.294706"
                            y2="-2.0576"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0189477" stopColor="#89B5FF" />
                            <stop offset="0.745" stopColor="#002886" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_276_2933"
                            x1="17.8213"
                            y1="9.13443"
                            x2="12.0459"
                            y2="2.60568"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop offset="0.315" stopColor="#FF8CB6" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_276_2933"
                            x1="6.81636"
                            y1="20.6833"
                            x2="4.71992"
                            y2="11.2303"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF5FD7" />
                            <stop offset="0.545" stopColor="#C86AFF" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <div className="text-[#1e1e1e] text-[20px] font-bold font-['SF UI  Text'] leading-normal">
                        Generating AI Description
                      </div>
                    </div>
                  </div>
                  {!isEditing && (
                    <button
                      className="flex items-center gap-1 text-[18px] font-semibold text-[#0072DC]"
                      onClick={handleEditToggle}
                    >
                      <MdEdit className="w-[20px] h-[20px]" />
                      Edit
                    </button>
                  )}
                </div>
                <div className="overflow-y-auto">
                  <div
                    ref={editableDivRef}
                    contentEditable={isEditing}
                    className={`w-full text-[#6f6f6f] text-[18px] font-normal font-['SF UI Text'] leading-normal bg-transparent outline-none pr-2 border-box resize-none `}
                    onKeyDown={handleKeyDown}
                    dangerouslySetInnerHTML={{ __html: jobDescription }}
                    suppressContentEditableWarning={true}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col w-full gap-8">
                <div className="flex flex-col w-full gap-4 p-[24px] bg-[#F5F5F5] rounded-[8px]">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[24px] font-bold">Main Skills</h1>
                    {!isMainEditing && (
                      <button
                        className="flex items-center gap-1 text-[18px] font-semibold text-[#0072DC]"
                        onClick={() => setIsMainEditing(!isMainEditing)}
                      >
                        <MdEdit className="w-5 h-5" /> Edit
                      </button>
                    )}
                  </div>
                  <div className="flex gap-[20px] mt-4 flex-wrap">
                    {mainSkills.map((skill, index) => (
                      <div
                        key={index}
                        className=" px-[20px] py-[12px] bg-white rounded-[24px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.40)] justify-center items-center gap-2 inline-flex border-[2px] border-[#0072DC]"
                      >
                        <div className="text-[#161616] text-[16px] font-medium  leading-none">
                          {skill}
                        </div>
                      </div>
                    ))}
                    {isMainEditing === true && (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2  px-[20px] py-[12px] bg-white outline-none border border-[#B9B9B9] rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] text-[#161616] text-[14px]   leading-none">
                          <input
                            type="text"
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={handleKeyDownMainSkill} // Listen for Enter key
                            placeholder="Search"
                            className="outline-none"
                          />
                          <LuSearch className="w-5 h-5 text-[#6F6F6F]" />
                        </div>
                        <button
                          className="border-2 border-[#0072DC] px-[16px] py-[5px] text-[14px] rounded-[30px] text-[#0072DC] font-semibold shadow-[0px_0px_4px_0px_#00000040]"
                          onClick={handleAddMainSkill}
                        >
                          Save
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[28px] p-[24px] bg-[#F5F5F5] rounded-[8px]">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[24px] font-bold">Sub Skills</h1>
                    {!isSubEditing && (
                      <button
                        className="flex items-center gap-1 text-[18px] font-semibold text-[#0072DC]"
                        onClick={() => setIsSubEditing(!isSubEditing)}
                      >
                        <MdEdit className="w-5 h-5" /> Edit
                      </button>
                    )}
                  </div>
                  <div className="flex gap-[20px] mt-4 flex-wrap">
                    {subSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="px-[20px] py-[12px] bg-white rounded-[24px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.40)] justify-center items-center gap-2 inline-flex border-[2px] border-[#0072DC]"
                      >
                        <div className="text-[#161616] text-[16px] font-medium  leading-none">
                          {skill}
                        </div>
                      </div>
                    ))}

                    {isSubEditing && (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 px-[20px] py-[12px] bg-white outline-none border border-[#B9B9B9] rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] text-[#161616] text-[14px]   leading-none">
                          <input
                            type="text"
                            value={skillInput2}
                            onChange={(e) => setSkillInput2(e.target.value)}
                            onKeyDown={handleKeyDownSubSkill} // Listen for Enter key
                            placeholder="Search"
                            className="outline-none"
                          />
                          <LuSearch className="w-5 h-5 text-[#6F6F6F]" />
                        </div>
                        <button
                          className="border-2 border-[#0072DC] px-[16px] py-[5px] text-[14px] rounded-[30px] text-[#0072DC] font-semibold shadow-[0px_0px_4px_0px_#00000040]"
                          onClick={handleAddSubSkill}
                        >
                          Save
                        </button>
                      </div>
                    )}
                  </div>
                  {isEditing && (
                    <div className="flex justify-end">
                      <button
                        className="border-2 border-[#0072DC] px-[16px] py-[5px] text-[14px] rounded-[30px] text-[#0072DC] font-semibold shadow-[0px_0px_4px_0px_#00000040]
"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </div>
                  )}
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
                      className="py-[16px] px-[24px] rounded-[8px] text-[16px] text-[#B9B9B9] border border-[#B9B9B9] bg-[#F5F5F5] w-full outline-none"
                      readOnly
                      value={jobDetails.minSalary}
                    />
                    <input
                      type="text"
                      className="py-[16px] px-[24px] rounded-[8px] text-[16px] text-[#B9B9B9] border border-[#B9B9B9] bg-[#F5F5F5] w-full outline-none"
                      readOnly
                      value={jobDetails.maxSalary}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                  <label htmlFor="" className="text-[20px] font-semibold">
                    Benefits
                  </label>
                  <div>
                    {jobDetails.benefits.map((benefit, index) => (
                      <div className="flex items-center gap-[16px]" key={index}>
                        <img src="/radio-btn.png" alt="radio button png" />
                        <span className="text-[16px]">{benefit}</span>
                      </div>
                    ))}
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
                    Linkedin
                  </button>
                  <button className="border border-[#B9B9B9] rounded-[8px] flex items-center gap-[8px] p-[8px] text-[16px] font-semibold">
                    <img src="/naukri.png" alt="naukri image" />
                    Naukri
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
