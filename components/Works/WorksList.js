import React from "react";
import { FlatList } from "react-native";
import WorksItem from "./WorksItem";
const worksData = [
  {
    id: "m1",
    name: "Adboöks",
    description:
      "Adboöks operates as a subsidiary of Adlife, specializing in the sale of captivating romance novels. Their website is dedicated to showcasing and offering the top 10 romance books. The website seamlessly integrates the branding of their parent company, 'Adlife,' ensuring a cohesive and recognizable experience for our visitors.",
    website: "https://adbook.onrender.com/",
    // imageSrc: Adbook,
  },
  {
    id: "m2",
    name: "Kadee",
    description:
      "Your stylish online boutique for both men and women. Discover the latest trends with easy login, detailed product pages, and a user-friendly cart. Shop effortlessly on any device. Join us for a hassle-free fashion experience where style meets convenience.",
    website: "https://kadee.onrender.com/",
    // imageSrc: kadee,
  },
  {
    id: "m3",
    name: "Static Exchnge",
    description:
      "Your premier decentralized crypto platform. Trade, earn, and win on this secure, user-friendly space. Explore various cryptocurrencies and lucrative earning opportunities. Join contests for stellar crypto rewards. Embark on an interstellar journey of financial possibilities today!",
    website: "https://static-exchnge.onrender.com/",
    // imageSrc: Exchnge,
  },
  {
    id: "m4",
    name: "Kehad Quote Generator", // Quote park
    description:
      "Kehad Quote Generator is a dynamic and inspiring website designed to inject a spark of wisdom, motivation, and reflection into your daily life. Whether you're seeking a boost of positivity, a moment of contemplation, or a dash of humor, QuoteSpark delivers an endless stream of randomly generated quotes from a vast collection of timeless sayings by notable authors, philosophers, celebrities, and everyday people..",
    website: "https://kehad-quotes-generator.onrender.com/",
    // imageSrc: QuoteGen,
  },
  {
    id: "m5",
    name: "Kehad Calculator", // Quote park
    description:
      "Kehad Calculator is a versatile and user-friendly online calculator website designed to meet all your calculation needs, with basic arithmetic. Whether you're a student, professional, or anyone in need of quick and accurate calculations, Kehad Calculator is your go-to resource.",
    website: "https://kehad-calculator.onrender.com/",
    // imageSrc: KehadCalc,
  },
];

function renderWorksList(WorksData) {
    return <WorksItem {...WorksData.item} />
}

function WorksList() {
  return (
    // <View>
      <FlatList
        data={worksData}
        keyExtractor={(item) => item.id}
        renderItem={renderWorksList}
      />
    // </View>
  );
}

export default WorksList;
