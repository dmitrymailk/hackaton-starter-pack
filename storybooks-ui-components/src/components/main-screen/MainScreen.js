import React, { Component } from "react";
import ItemContainer from "./item-container/ItemContainer";
import Favorite from "../favorite/Favorite";
import InstituteItem from "../institute-item/InstituteItem";
import HomeworkItem from "../homework-item/HomeworkItem";
import AnotherProducts from "../another-products/AnotherProducts";
import MenuBurger from "../menu-burger/MenuBurger";

const favorite = {
  title: "Избранное",
  components: [
    {
      Component: Favorite,
      title: "MOC-191",
      color: "#FADE00",
      id: "1"
    },
    {
      Component: Favorite,
      title: "MOC-192",
      color: "#FADE00",
      id: "2"
    },
    {
      Component: Favorite,
      title: "MOC-191",
      color: "#FADE00",
      id: "1"
    },
    {
      Component: Favorite,
      title: "MOC-192",
      color: "#FADE00",
      id: "2"
    }
  ]
};

const institute = {
  title: "Институты",
  components: [
    {
      Component: InstituteItem,
      title: "ИМИТ",
      color: "#FADE00"
    },
    {
      Component: InstituteItem,
      title: "ИФМК",
      color: "#FFAF38"
    },
    {
      Component: InstituteItem,
      title: "ИМИТ",
      color: "#FADE00"
    },
    {
      Component: InstituteItem,
      title: "ИФМК",
      color: "#FFAF38"
    }
  ]
};

const homework = {
  title: "Домашнее задание",
  components: [
    {
      Component: HomeworkItem,
      title: "Алгебра и теория чисел"
    },
    {
      Component: HomeworkItem,
      title: "Геометрия и топология"
    },
    {
      Component: HomeworkItem,
      title: "Русский язык"
    },
    {
      Component: HomeworkItem,
      title: "Алгебра и теория чисел"
    },
    {
      Component: HomeworkItem,
      title: "Геометрия и топология"
    },
    {
      Component: HomeworkItem,
      title: "Русский язык"
    }
  ]
};

const another = {
  title: "Другие продукты",
  components: [
    {
      Component: AnotherProducts,
      title: "Лекториум",
      backColor: "#264E70",
      textColor: "#FFF"
    }
  ]
};

export default class MainScreen extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="main-wrapper__author">@dimweb</div>
        <MenuBurger />
        <ItemContainer
          title={favorite.title}
          components={favorite.components}
        />
        <ItemContainer
          title={institute.title}
          components={institute.components}
        />
        <ItemContainer
          title={homework.title}
          components={homework.components}
        />
        <ItemContainer title={another.title} components={another.components} />
      </div>
    );
  }
}
