import { Link } from "react-router-dom";
export const cardData = [
  {
    id: 1,
    image: "https://i.ibb.co/gddkYWV/apple.webp",
    title: "Apple Description",
    category: "Apple",
    description:
      "There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.",
    price: "$199.99",
    card_color: "#0052FF26",
    category_background_color: "#0052FF33",
    text_color: "#00ffff",
  },
  {
    id: 2,
    image: "https://i.ibb.co/gm4BCHc/googlel-logo.jpg",
    title: "Gooogle Description",
    category: "Google",
    description:
      "There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.",
    price: "$49.99",
    card_color: "#FF444A26",
    category_background_color: "#FF444A33",
    text_color: "#f6546a",
  },
  {
    id: 3,
    image: "https://i.ibb.co/sFxmS1P/samsung.png",
    title: "Samsung Description",
    category: "Samsung",
    description:
      "There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.",
    price: "$129.99",
    card_color: "#79C23F26",
    category_background_color: "#79C23F33",
    text_color: "#4cbb17",
  },
  {
    id: 4,
    image: "https://i.ibb.co/PTv8hwV/Oneplus-logo.webp",
    title: "Oneplus Description",
    category: "Oneplus",
    description:
      "There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.",
    price: "$299.99",
    card_color: "#FF444A26",
    category_background_color: "#FF444A33",
    text_color: "#ff7373",
  },
  {
    id: 5,
    image: "https://i.ibb.co/7ksRJGb/sony-logo-png.webp",
    title: "Sony Description",
    category: "Sony",
    description:
      "There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.",
    price: "$199.99",
    card_color: "#0052FF26",
    category_background_color: "#0052FF33",
    text_color: "#00ffff",
  },
  {
    id: 6,
    image: "https://i.ibb.co/s6696qF/xiaomi.webp",
    title: "Xiaomi Description",
    category: "Xiaomi",
    description:
      "There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.",
    price: "$49.99",
    card_color: "#FF444A26",
    category_background_color: "#FF444A33",
    text_color: "#f6546a",
  },
];
const Home = () => {
  return (
    <div>
      <>
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <video
              className="min-w-full min-h-full absolute object-cover"
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
            ></video>
            <div
              className="absolute top-0 left-0 w-full h-full bg-black"
              style={{ opacity: 0.6, zIndex: 1 }}
            ></div>
          </div>
          <div className="z-10 space-y-2">
            <h1 className="font-light text-6xl">Welcome to</h1>
            <h3 className="font-light text-3xl">Yours Dream Phone</h3>
          </div>
        </section>
        <h1 className="mt-12 text-center text-[28px] font-bold">Collection</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cardData?.map((item) => (
            <>
              <section
                style={{ backgroundColor: item?.category_background_color }}
                className="p-5 py-10  text-center transform duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <img
                  className="h-[250px] w-[100%] border-2 rounded-md"
                  src={item?.image}
                  alt=""
                />

                <h1 className="text-3xl my-5">{item?.category}</h1>
                <p className="mb-5">{item?.description?.slice(0, 100)}...</p>
                <h2 className="font-semibold mb-5">{item?.price}</h2>
                <Link to={`/Details/${item.id}`}>
                  <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                    Details Cart
                  </button>
                </Link>
              </section>
            </>
          ))}
        </div>
      </>
    </div>
  );
};

export default Home;
