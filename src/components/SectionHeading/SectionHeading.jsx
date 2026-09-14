import './SectionHeading.scss';

const SectionHeading = ({title}) => {
  return (
    <div className="container">
      <div className={`st-section-heading st-style1`} data-aos="fade-up" data-aos-duration="800">
        <h2 className="st-section-heading-title">{title}</h2>
        <span className="st-section-heading-subtitle" aria-hidden="true">
          {title}
        </span>
      </div>
      <div className="st-height-b25 st-height-lg-b25"></div>
    </div>
  )
}

export default SectionHeading;
