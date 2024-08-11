import { FC } from "react";
import Card from "../ui/Card"

interface StackProps {
  title: string;
  data: Array<any>;
}

const Stack:FC<StackProps> = ({data, title}) => {
  return (
    <Card title={title}>
      <div className="flex flex-wrap gap-2 py-4">
        {data.map((icon, index) => {
          return (
            <div className="text-4xl" key={icon.id}>
              {icon.icon}
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default Stack