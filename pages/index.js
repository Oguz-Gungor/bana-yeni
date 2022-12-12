import Image from "next/image";
import { useRouter } from "next/router";

export default function Products(props) {
  const router = useRouter();
  return (
    <div className="preview-page flex-column">
      <span className="preview-header">List Of Items</span>
      <div className="preview-container flex-row">
        {props.data.map((data, index) => (
          <DisplayPreview
            key={index}
            {...{ data }}
            directToRoute={() => router.push("/samples/" + index)}
          />
        ))}
      </div>
    </div>
  );
}
export const listOfProductURLs = [
  "https://3d8efbd1-e448-48a4-9b31-a2add5eccd62.mock.pstmn.io/api/Item/1",
  "https://3d8efbd1-e448-48a4-9b31-a2add5eccd62.mock.pstmn.io/api/Item/2",
  "https://3d8efbd1-e448-48a4-9b31-a2add5eccd62.mock.pstmn.io/api/Item/3",
];

export async function getServerSideProps() {
  const responses = await Promise.all(
    listOfProductURLs.map((url) => fetch(url))
  );
  const data = await Promise.all(responses.map((response) => response.json()));

  return { props: { data } };
}

const DisplayPreview = ({ data, directToRoute }) => {
  const imageIndex = Math.floor(Math.random() * (data.sliderImage.length));
  return (
    <div className="preview-item flex-column" onClick={() => directToRoute()}>
      <Image
        loader={({ src }) => `${src}`}
        src={data.sliderImage[imageIndex]?.imageUrl}
        width={200}
        height={200}
      />
      {data.itemName}
    </div>
  );
};
