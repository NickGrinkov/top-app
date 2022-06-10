import { Htag } from "../components";
import { Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Htag tag="h2">Текст1</Htag>
      <Htag tag="h3">Текст2</Htag>
      <Button appearance="primary" arrow="right">Primary</Button>
      <Button appearance="ghost" arrow="down">Ghost</Button>
    </div>
  );
}
