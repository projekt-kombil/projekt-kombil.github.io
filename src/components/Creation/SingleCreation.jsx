const SingleCreation = ({ data, getData }) => {
  const { imgLink, title, subtitle, technology } = data;

  const openCreation = () => {
    getData(data);
  };
  const visibleTechnology = technology?.slice(0, 3) || [];

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCreation();
    }
  };

  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="st-portfolio-single st-style1"
        role="button"
        tabIndex="0"
        aria-label={`View details for ${title}`}
        onClick={openCreation}
        onKeyDown={handleKeyDown}
      >
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img
                src={imgLink}
                alt="portfolio"
                width="370"
                height="300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="st-portfolio-content">
              <p>{subtitle}</p>
              <h5>{title}</h5>
              {visibleTechnology.length > 0 && (
                <div className="st-portfolio-tags">
                  {visibleTechnology.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCreation;
