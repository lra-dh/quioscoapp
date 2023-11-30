export default async function Layout({ children, modal }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
