import React from "react";
import { FlatList } from "react-native";
import ProjectsItem from "./ProjectsItem";


const ProjectData = [
  {
    id: "m1",
    name: "Piccon",
    description:
      "Piccon is your go-to platform for comparing designs and logos to check for originality. Easily upload your designs and verify their uniqueness against a comprehensive database. Our advanced algorithms ensure accurate and reliable results, helping you avoid copyright issues. With a user-friendly interface, you can navigate and compare effortlessly. Protect your creativity and ensure your designs stand out with PicCon..",
    website: "https://piccon.onrender.com/",
    // imageSrc: Piccon,
  },
  {
    id: "m2",
    name: "Wondabite",
    description:
      "Welcome to WondaBite, your go-to online store for a delightful variety of snacks! Whether you're craving something sweet, savory, or healthy, WondaBite has it all. Our user-friendly website allows you to easily browse through a wide selection of snacks, add your favorites to a personalized list, and conveniently add items to your cart for a seamless shopping experience. Enjoy exclusive deals, read customer reviews, and get your favorite snacks delivered right to your doorstep with WondaBite!",
    website: "https://wondabite.onrender.com/",
    // imageSrc: wondabite,
  },
];

function renderProjectsList(ProjectData) {
  return <ProjectsItem {...ProjectData.item} />;
}

function ProjectsList() {
  return (
    <FlatList
      data={ProjectData}
      keyExtractor={(item) => item.id}
      renderItem={renderProjectsList}
    />
  );
}

export default ProjectsList;
