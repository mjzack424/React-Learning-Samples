import { useState, useEffect } from "react";
import { Skill } from "./";
import { devSkills } from "../../constants/skills";

const Skills = () => {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [git, setGit] = useState(0);
  const [react, setReact] = useState(0);
  const [node, setNode] = useState(0);
  const [js, setJs] = useState(0);
  const { htmlSkill, cssSkill, gitSkill, reactSkill, nodeSkill, jsSkill } =
    devSkills;
  useEffect(() => {
    const timer = setInterval(() => {
      setJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });
      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });
      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });
      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 50);
      });
      setReact((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });
      setNode((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 40);
      });
    }, 100);

    // for Unmounmt
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={js}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={react}
      />
      <Skill
        name={nodeSkill.name}
        icon={nodeSkill.icon}
        color={nodeSkill.color}
        value={node}
      />
      <Skill
        name={gitSkill.name}
        icon={gitSkill.icon}
        color={gitSkill.color}
        value={git}
      />
    </>
  );
};

export default Skills;
