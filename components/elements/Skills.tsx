"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import BorderGlow from "../BorderGlow";

export default function Skills() {
  const [buttons, setButtons] = useState("project");
  return (
    <div className="my-32">
      <h1 className="text-6xl font-bold text-center mb-6">Portofolio</h1>
      <div className="flex justify-center items-center">
        <Button
          type="button"
          onClick={() => setButtons("project")}
          className={`py-2 px-8 rounded-xs ${buttons === "project" ? "bg-blue-500 hover:bg-blue-600 hover:transition-all" : "glass"}`}
        >
          Project
        </Button>
        <Button
          type="button"
          onClick={() => setButtons("skills")}
          className={`py-2 px-8 rounded-xs ${buttons === "skills" ? "bg-blue-500 hover:bg-blue-600 hover:transition-all" : "glass"}`}
        >
          Skills
        </Button>
      </div>

      {/* Content */}
      <div>
        {buttons === "project" && (
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <div className="mt-6 w-96 rounded-xl">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="0 0 0"
                borderRadius={15}
                className="shadow-lg"
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={true}
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
              >
                <div className="p-4">
                  <div className="bg-amber-100 h-42 w-full"></div>
                  <div className="mt-4">
                    <h4 className="font-bold text-xl">Project 1</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex gap-2">
                        <p className="px-2 py-1 bg-slate-800 rounded-2xl">
                          Typescript
                        </p>
                        <p className="px-2 py-1 bg-slate-800 rounded-2xl">
                          React
                        </p>
                      </div>
                      <Button
                        className="px-8 rounded-md border border-white/15"
                        variant={"default"}
                      >
                        Detail <MdOutlineArrowOutward />
                      </Button>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>
            <div className="mt-6 w-96 rounded-xl">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="0 0 0"
                borderRadius={15}
                className="shadow-lg"
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={true}
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
              >
                <div className="p-4">
                  <div className="bg-amber-100 h-42 w-full"></div>
                  <div className="mt-4">
                    <h4 className="font-bold text-xl">Project 1</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex gap-2">
                        <p className="px-2 py-1 bg-slate-800 rounded-2xl">
                          Typescript
                        </p>
                        <p className="px-2 py-1 bg-slate-800 rounded-2xl">
                          React
                        </p>
                      </div>
                      <Button
                        className="px-8 rounded-md border border-white/15"
                        variant={"default"}
                      >
                        Detail <MdOutlineArrowOutward />
                      </Button>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
        )}
        {buttons === "skills" && (
          <div>
            <div className="border p-4 mt-6 w-90 rounded-xl">
              <div className="bg-amber-100 h-42 w-full"></div>
              <div className="mt-4">
                <h4 className="font-bold text-xl">Skill 1</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-2">
                    <p className="px-2 py-1 bg-slate-800 rounded-2xl">
                      Typescript
                    </p>
                    <p className="px-2 py-1 bg-slate-800 rounded-2xl">React</p>
                  </div>
                  <Button className="px-8 rounded-md " variant={"default"}>
                    Detail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
