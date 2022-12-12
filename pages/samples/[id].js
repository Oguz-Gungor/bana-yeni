import { listOfProductURLs } from "..";
import Product from "../../components/content/Product";

export default function Sample1(props) {
  return (
    <div className="page-sample">
      <Product {...{ ...props, size: 300 }} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(listOfProductURLs[id]);
  const data = await res.json();

  return { props: { data } };
}
