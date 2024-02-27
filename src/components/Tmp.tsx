import { Button } from "./ui/button";

export default function Tmp() {
  return <Button onClick={() => {
    window.pywebview.api.create_folder("arst").then(res => console.log(res));
  }}>Click me</Button>;
}