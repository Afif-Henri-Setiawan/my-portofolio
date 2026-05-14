"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function Skills() {
  const [buttons, setButtons] = useState("project");
  return (
    <div className="my-32">
      <div className="flex justify-center items-center">
        <Button
          onClick={() => setButtons("project")}
          className={`py-2 px-8 rounded-xs ${buttons === "project" ? "bg-blue-500 hover:bg-blue-600 hover:transition-all" : "glass"}`}
        >
          Project
        </Button>
        <Button
          onClick={() => setButtons("skills")}
          className={`py-2 px-8 rounded-xs ${buttons === "skills" ? "bg-blue-500 hover:bg-blue-600 hover:transition-all" : "glass"}`}
        >
          Skills
        </Button>
      </div>
      <div>
        {buttons === "project" && (
          <div>
            <p>Project Content</p>
          </div>
        )}
        {buttons === "skills" && (
          <div>
            <p>Skills Content</p>
          </div>
        )}
      </div>
    </div>
  );
}
