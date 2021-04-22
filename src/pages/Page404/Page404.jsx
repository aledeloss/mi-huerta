import Layout from "../../components/Layout/Layout";

const Page404 = ({ history }) => {
  const mainContent = "Parece que la página que estás buscando no existe :(";

  return (
    <div>
      <Layout history={history} mainContent={mainContent} bgColor="#06d6a0ff" />
    </div>
  );
};

export default Page404;
