import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../components";
import images from "../../images.json";

const INITIAL_LIMIT = 9;

const Film = () => {
  const { smallImages, largeImages } = images;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [limit, setLimit] = React.useState(INITIAL_LIMIT);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = (index?: number) => () => {
    setSelectedIndex(index);
    setIsOpen(!isOpen);
  };

  return (
    <Layout active="film" title="Film - Derrick Nguyen">
      <>
        <div className="flex flex-wrap justiy-center content-center items-center w-full m-auto">
          {smallImages.slice(0, limit).map(({ source, caption }, index) => {
            return (
              <button
                key={index}
                className="shadow-xl w-full md:w-img-1/2 lg:w-img-1/3 m-img focus:outline-none focus:shadow-outline hover:opacity-75"
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    toggleModal(index)();
                  }
                }}
                onClick={toggleModal(index)}
              >
                <img className="w-full" alt={caption} src={source} />
              </button>
            );
          })}
        </div>
        <div className="flex justify-center my-3">
          {limit < smallImages.length && (
            <button
              aria-label="Expand more"
              className="w-1/4 lg:w-1/6 focus:outline-none focus:shadow-outline hover:opacity-50"
              onClick={() => setLimit(limit + 6)}
            >
              <FontAwesomeIcon size="2x" icon={faCaretDown} />
            </button>
          )}
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

export default Film;
