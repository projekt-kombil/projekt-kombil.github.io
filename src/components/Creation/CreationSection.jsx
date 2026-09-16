import "./Creation.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import SingleCreation from "./SingleCreation";
import Modal from "../Modal/Modal";
import { trackEvent } from "../../utils/analytics";

const CreationSection = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
    trackEvent("project_modal_open", {
      project_title: project.title,
      project_url: project.link || "none",
    });
  };

  const closeProject = () => setSelectedProject(null);

  const { creationItems } = data;
  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(
    creationItems.slice(0, itemsPerPage)
  );

  const [showLoadMore, setShowLoadMore] = useState(
    creationItems.length > itemsPerPage,
  );

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = creationItems.slice(
      currentLength,
      currentLength + itemsPerPage
    );
    const nextVisibleCount = currentLength + nextChunk.length;
    setVisibleItems((prevItems) => [...prevItems, ...nextChunk]);
    trackEvent("creations_load_more", {
      visible_count: nextVisibleCount,
    });

    if (nextVisibleCount >= creationItems.length) {
      setShowLoadMore(false);
    }
  };

  return (
    <>
      <section id="creations" className="st-dark-bg">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={"Selected Work"} />
        <div className="container">
          <div className="row">
            {visibleItems.map((element, index) => (
              <SingleCreation data={element} key={index} getData={openProject} />
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    className="st-btn st-style1 st-color1"
                    type="button"
                    onClick={loadMoreItems}
                  >
                    View more work
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {selectedProject && (
        <Modal
          img={selectedProject.imgLinkLg}
          title={selectedProject.title}
          subtitle={selectedProject.subtitle}
          link={selectedProject.link}
          technology={selectedProject.technology}
          modalClose={closeProject}
        />
      )}
    </>
  );
};

export default CreationSection;
