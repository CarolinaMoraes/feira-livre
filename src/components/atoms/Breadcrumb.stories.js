import React from "react"
import Breadcrumb from "./Breadcrumb"

export default {
  title: "Components/Atoms/Breadcrumb",
  component: Breadcrumb
}

const items = [{ label: "Início", link: "/" }, { label: "Sobre", link: "" }];

export const usage = () => (
  <Breadcrumb items={items}></Breadcrumb>
);
