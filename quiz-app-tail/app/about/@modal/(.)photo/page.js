import Frame from "../../components/frame";
import Modal from "../../components/modal";

export default function PhotoModal() {
  const photo =
    "https://pishkesvatan.net/fa/wp-content/uploads/2020/08/%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA-%D9%88%D8%A7%D9%85-%D8%A8%D8%A7-%D9%85%D8%AF%D8%B1%DA%A9-%D9%81%D9%86%DB%8C-%D9%88-%D8%AD%D8%B1%D9%81%D9%87-%D8%A7%DB%8C-scaled-1-1024x300.jpg";

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  );
}
