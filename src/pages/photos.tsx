import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Layout } from "../components";
import images from "../../images.json";

const Photos = () => {
  const { smallImages, largeImages } = images;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = (index?: number) => () => {
    setSelectedIndex(index);
    setIsOpen(!isOpen);
  };

  return (
    <Layout title="Photos - Derrick Nguyen">
      <>
        <div className="flex flex-wrap justiy-center content-center items-center w-4/5 md:w-2/4 m-auto">
          {smallImages.map(({ source, title }, index) => {
            return (
              <button
                key={index}
                className="shadow w-full md:w-img-1/2 mb-1 md:m-img"
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    toggleModal(index)();
                  }
                }}
                onClick={toggleModal(index)}
              >
                <img alt={title} src={source} />
              </button>
            );
          })}
        </div>
        <ModalGateway>
          {isOpen && (
            <Modal onClose={toggleModal()}>
              <Carousel currentIndex={selectedIndex} views={largeImages} />
            </Modal>
          )}
        </ModalGateway>
      </>
    </Layout>
  );
};

export default Photos;
