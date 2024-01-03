import React from 'react';
import ProjectSection from "./projectSection";
import BlogSection from "./blogSection";
import SkillSection from "./skillSection";
import RecommendationSection from "./recommendationSection";
import Title from "./title";
import About from "./about";

function homePage() {
  return (
    <div>
    <Title/>
    <RecommendationSection />
    <SkillSection />
    <ProjectSection />
   <About />
   <BlogSection />
    </div>
  )
}

export default homePage;