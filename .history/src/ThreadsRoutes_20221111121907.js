import NewThreads from "./NewThreads";

export const ThreadsRoutes = [
  { path: "/new", exact: true, children: <NewThreads /> },
]