export type Path = {
  id: string;
  title: string;
  description: string;
  nodeIds: string[];
  artifactGoal: string;
};

export const paths: Path[] = [
  {
    id: "first-path",
    title: "First Path",
    description: "A minimal path to validate routing and data flow in M0.",
    nodeIds: ["node-01", "node-02", "node-03"],
    artifactGoal: "One shareable artifact produced at the end of this path.",
  },
];