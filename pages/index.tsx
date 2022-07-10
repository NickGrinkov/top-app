import { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/Layout";
import { Htag, Button, P, Tag, Rating, Input, Textarea } from "../components";



function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(2);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Htag tag="h2">Текст1</Htag>
      <Htag tag="h3">Текст2</Htag>
      <Button appearance="primary" arrow="right">Primary</Button>
      <Button appearance="ghost" arrow="down">Ghost</Button>
      <P size="s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iste.</P>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iste.</P>
      <P size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iste.</P>
      <Tag size="s" color="ghost">Ghost</Tag>
      <Tag size="s" color="red">Red</Tag>
      <Tag size="s" color="gray">Gray</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Tag size="s" color="primary">Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="a"/>
      <Textarea placeholder="ghbdtn"/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
