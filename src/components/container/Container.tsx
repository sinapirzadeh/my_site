interface IContainer {
  children: React.ReactNode;
}

export default function Container({ children }: IContainer) {
  return (
    <div className="container mx-auto max-sm:px-5 transition-all">
      {children}
    </div>
  );
}
