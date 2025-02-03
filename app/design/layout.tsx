import { Header } from "@/src/widgets/header";

export default function FilesLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}