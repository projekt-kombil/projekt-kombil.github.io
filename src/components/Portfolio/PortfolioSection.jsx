import SectionHeading from "../SectionHeading/SectionHeading";
import "./Portfolio.scss";
import SinglePortfolio from "./SinglePortfolio";

const PortfolioSection = ({ data }) => {
  const { experience } = data;
  return (
    <section id="portfolio">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Portfolio"} />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="st-resume-wrap">
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {experience.map((item) => (
                  <SinglePortfolio element={item} key={item.title} />
                ))}
              </div>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
