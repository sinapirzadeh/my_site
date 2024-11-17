interface IContainer {
  children: React.ReactNode;
}

export default function Container({ children }: IContainer) {
  return <div className="container mx-auto ">{children}</div>;
}
