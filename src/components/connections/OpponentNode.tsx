import Node from "@/utilities/connection";

export default function OpponentNode({node}:{node:Node}) {
  return (
    <div>{JSON.stringify(node)}</div>
  )
}