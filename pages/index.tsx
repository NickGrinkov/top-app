import { Htag } from "../components";
import { Button } from "../components";
import { P } from "../components";
import { Tag } from "../components";


export default function Home(): JSX.Element {

  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Htag tag="h2">Текст1</Htag>
      <Htag tag="h3">Текст2</Htag>
      <Button appearance="primary" arrow="right">Primary</Button>
      <Button appearance="ghost" arrow="down">Ghost</Button>
      <P size="s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iste.</P>
      <P >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iste.</P>
      <P size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iste.</P>
      <Tag size="s" color="ghost">Ghost</Tag>
      <Tag size="s" color="red">Red</Tag>
      <Tag size="s" color="gray">Gray</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Tag size="s" color="primary">Primary</Tag>
    </div>
  );
}
