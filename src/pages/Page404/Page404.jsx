import Layout from "../../components/Layout/Layout";

const Page404 = ({ history }) => {
  const mainContent = "Parece que la página que estás buscando no existe :(";

  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  function replaceMonth(array){
    let sowing= [];
    array.forEach(element => {
      let month = months[element]
      sowing.push(month)
    });
    let result = `['${sowing.join("', '")}']`
    return result;
  }

  return (
    <div>
      {replaceMonth(
[0, 7, 8, 9, 10, 11]
        )}
      <Layout history={history} mainContent={mainContent} bgColor="#06d6a0ff" />
    </div>
  );
};

export default Page404;
