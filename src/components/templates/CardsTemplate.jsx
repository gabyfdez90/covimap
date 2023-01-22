import React from "react";
import Cards from "../atoms/cards/Cards";
import { Carousel } from "react-bootstrap";
import "../templates/CardsTemplate.css";

const CardsTemplate = () => {
  const imgStyle = {
    width: "3rem",
    height: "3rem",
    borderRadius: "30%",
    marginTop: "1rem",
    marginBottom: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
  };

  return (
    <Carousel
      fade
      interval={3000}
      slidesToShow={3}
      slidesToScroll={3}
      indicators={false}
    >
      <Carousel.Item className="d-flex align-items-center">
        <div className="col-4">
          <Cards
            imgSrc="https://www.americanschoolway.edu.co/wp-content/uploads/2022/06/Asset-5.png"
            title="Cough"
            text="Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest."
            imgStyle={imgStyle}
          />
        </div>
        <div className="col-4">
          <Cards
            imgSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAADsDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAABQABAwQGAv/EADUQAAIBAgMFBQUIAwAAAAAAAAECAwAEBRExEhMhUpEGNHPB0SJBYXGxFCMlQkNR4fAygaH/xAAaAQADAQADAAAAAAAAAAAAAAACAwQBBQYH/8QALREAAQQABAMFCQAAAAAAAAAAAQACAxEEEiExUWGRE0GBocEFFCIzYnGxsuH/2gAMAwEAAhEDEQA/AOr2m5m61NpuZutVUUFmCqCWOgAzJrzyyuwK9puZutTabmbrSNtgtzIu8uCttENWk16euVZvwS2+7YS3JPBpBoPlp/zOrG4OWs0hDB9Rry38kozMum6/ZEbTczdam03M3WmpsB3kYlsZSVYZhJlKnrl5UTcW09s2zcRNGfdmOB+R0NBPhZ4NXjTjuOq1krH7FY9puZutTabmbrVVKmzFMpUdDXXAWlllbWzw29wyAhpFzzHz9+h99cidDS/abv8AF4C/Vq5HAzdhHJKBZFDrd0e5Tzszua2+PotiTCby4kZ8RvF3accwc+HwHACsIv8AD7Dhh9vvpB+tL5f0VmuL2eyw3DXt2A2kO0CMweAr1bT2eIxT3FzYpvLddtip/wA+B9PfnVxEefJCakOtusna9DrsOSQM2W3i28tOWyONxiOJy+w0rkHgI/ZVfLrTMDy2cBGMXcLIRwjYbTH16GirjGrh13dsqW0Q0WMcevplRjsWLMxLMdSTmTUYxjIHFzHF7uJJA6bnxTjCXiiAB5pHHreG2vlWBAitGGIGmeZ9KOpbtN3+PwV+rUTU2OaG4l4AoWmwEmMEqjoaX7Td/i8Bfq1EHQ10GMWUuINHdWRSZBGFIVuOpPnR4ZjpMPK1gs/Dp1QyODZGk8/RBM7sqqzsVXgoJzC/L9qTwbuOKeB5NRkiPE5SRGRhqrDI0ng3ccU8DyahwV+8C+B/UrZ67PTl+UVVHQ1dbtphV5djNIthD+eTgPU1NHE+U5WCymOc1otxpbPabv8AH4K/VqJpTtFJHJfru3VwsQUlTnkczwouqMeQcS+uKXB8pqle4ZpYH24ZGjb91OVeKlSgkGwmkXulo8a3qCPEbdLhOYABh/fhlW7ZDClgutxdbtJ49llkbIpqOGeuvxrnKlXR+0ZGm5AHV3nfhvv1SHYdpFNNJj7bhtj3G3M8o/Vl8v4ArSu8Su7vMTSnYP5F4L/P+61KlKkxcr25Bo3gNB/fFG2FrTe55qVKlSpU1f/Z"
            title="Difficulty Breathing"
            text="Shortness of breath can be a third --and very serious-- manifestation of Covid-19, and it can occur on its own, without a cough."
            imgStyle={imgStyle}
          />
        </div>
        <div className="col-4">
          <Cards
            imgSrc={
              "https://store-images.s-microsoft.com/image/apps.14212.9007199266419762.56b9557e-4dc3-49a7-a9be-5fc3204dba85.5fd31f8e-651a-473d-9720-b03f777bd33c?mode=scale&q=90&h=300&w=300"
            }
            title="Fever"
            text="Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches 100."
            imgStyle={imgStyle}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item className="d-flex align-items-center">
        <div className="col-4">
          <Cards
            imgSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAADsDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAABQABAwQGAv/EADUQAAIBAgMFBQUIAwAAAAAAAAECAwAEBRExEhMhUpEGNHPB0SJBYXGxFCMlQkNR4fAygaH/xAAaAQADAQADAAAAAAAAAAAAAAACAwQBBQYH/8QALREAAQQABAMFCQAAAAAAAAAAAQACAxEEEiExUWGRE0GBocEFFCIzYnGxsuH/2gAMAwEAAhEDEQA/AOr2m5m61NpuZutVUUFmCqCWOgAzJrzyyuwK9puZutTabmbrSNtgtzIu8uCttENWk16euVZvwS2+7YS3JPBpBoPlp/zOrG4OWs0hDB9Rry38kozMum6/ZEbTczdam03M3WmpsB3kYlsZSVYZhJlKnrl5UTcW09s2zcRNGfdmOB+R0NBPhZ4NXjTjuOq1krH7FY9puZutTabmbrVVKmzFMpUdDXXAWlllbWzw29wyAhpFzzHz9+h99cidDS/abv8AF4C/Vq5HAzdhHJKBZFDrd0e5Tzszua2+PotiTCby4kZ8RvF3accwc+HwHACsIv8AD7Dhh9vvpB+tL5f0VmuL2eyw3DXt2A2kO0CMweAr1bT2eIxT3FzYpvLddtip/wA+B9PfnVxEefJCakOtusna9DrsOSQM2W3i28tOWyONxiOJy+w0rkHgI/ZVfLrTMDy2cBGMXcLIRwjYbTH16GirjGrh13dsqW0Q0WMcevplRjsWLMxLMdSTmTUYxjIHFzHF7uJJA6bnxTjCXiiAB5pHHreG2vlWBAitGGIGmeZ9KOpbtN3+PwV+rUTU2OaG4l4AoWmwEmMEqjoaX7Td/i8Bfq1EHQ10GMWUuINHdWRSZBGFIVuOpPnR4ZjpMPK1gs/Dp1QyODZGk8/RBM7sqqzsVXgoJzC/L9qTwbuOKeB5NRkiPE5SRGRhqrDI0ng3ccU8DyahwV+8C+B/UrZ67PTl+UVVHQ1dbtphV5djNIthD+eTgPU1NHE+U5WCymOc1otxpbPabv8AH4K/VqJpTtFJHJfru3VwsQUlTnkczwouqMeQcS+uKXB8pqle4ZpYH24ZGjb91OVeKlSgkGwmkXulo8a3qCPEbdLhOYABh/fhlW7ZDClgutxdbtJ49llkbIpqOGeuvxrnKlXR+0ZGm5AHV3nfhvv1SHYdpFNNJj7bhtj3G3M8o/Vl8v4ArSu8Su7vMTSnYP5F4L/P+61KlKkxcr25Bo3gNB/fFG2FrTe55qVKlSpU1f/Z"
            title="Difficulty Breathing"
            text="Shortness of breath can be a third --and very serious-- manifestation of Covid-19, and it can occur on its own, without a cough."
            imgStyle={imgStyle}
          />
        </div>
        <div className="col-4">
          <Cards
            imgSrc={
              "https://store-images.s-microsoft.com/image/apps.14212.9007199266419762.56b9557e-4dc3-49a7-a9be-5fc3204dba85.5fd31f8e-651a-473d-9720-b03f777bd33c?mode=scale&q=90&h=300&w=300"
            }
            title="Fever"
            text="Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches 100."
            imgStyle={imgStyle}
          />
        </div>
        <div className="col-4">
          <Cards
            imgSrc="https://www.americanschoolway.edu.co/wp-content/uploads/2022/06/Asset-5.png"
            title="Cough"
            text="Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest."
            imgStyle={imgStyle}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item className="d-flex align-items-center">
        <div className="col-4">
          <Cards
            imgSrc={
              "https://store-images.s-microsoft.com/image/apps.14212.9007199266419762.56b9557e-4dc3-49a7-a9be-5fc3204dba85.5fd31f8e-651a-473d-9720-b03f777bd33c?mode=scale&q=90&h=300&w=300"
            }
            title="Fever"
            text="Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches 100."
            imgStyle={imgStyle}
          />
        </div>
        <div className="col-4">
          <Cards
            imgSrc="https://www.americanschoolway.edu.co/wp-content/uploads/2022/06/Asset-5.png"
            title="Cough"
            text="Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest."
            imgStyle={imgStyle}
          />
        </div>
        <div className="col-4">
          <Cards
            imgSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAADsDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAABQABAwQGAv/EADUQAAIBAgMFBQUIAwAAAAAAAAECAwAEBRExEhMhUpEGNHPB0SJBYXGxFCMlQkNR4fAygaH/xAAaAQADAQADAAAAAAAAAAAAAAACAwQBBQYH/8QALREAAQQABAMFCQAAAAAAAAAAAQACAxEEEiExUWGRE0GBocEFFCIzYnGxsuH/2gAMAwEAAhEDEQA/AOr2m5m61NpuZutVUUFmCqCWOgAzJrzyyuwK9puZutTabmbrSNtgtzIu8uCttENWk16euVZvwS2+7YS3JPBpBoPlp/zOrG4OWs0hDB9Rry38kozMum6/ZEbTczdam03M3WmpsB3kYlsZSVYZhJlKnrl5UTcW09s2zcRNGfdmOB+R0NBPhZ4NXjTjuOq1krH7FY9puZutTabmbrVVKmzFMpUdDXXAWlllbWzw29wyAhpFzzHz9+h99cidDS/abv8AF4C/Vq5HAzdhHJKBZFDrd0e5Tzszua2+PotiTCby4kZ8RvF3accwc+HwHACsIv8AD7Dhh9vvpB+tL5f0VmuL2eyw3DXt2A2kO0CMweAr1bT2eIxT3FzYpvLddtip/wA+B9PfnVxEefJCakOtusna9DrsOSQM2W3i28tOWyONxiOJy+w0rkHgI/ZVfLrTMDy2cBGMXcLIRwjYbTH16GirjGrh13dsqW0Q0WMcevplRjsWLMxLMdSTmTUYxjIHFzHF7uJJA6bnxTjCXiiAB5pHHreG2vlWBAitGGIGmeZ9KOpbtN3+PwV+rUTU2OaG4l4AoWmwEmMEqjoaX7Td/i8Bfq1EHQ10GMWUuINHdWRSZBGFIVuOpPnR4ZjpMPK1gs/Dp1QyODZGk8/RBM7sqqzsVXgoJzC/L9qTwbuOKeB5NRkiPE5SRGRhqrDI0ng3ccU8DyahwV+8C+B/UrZ67PTl+UVVHQ1dbtphV5djNIthD+eTgPU1NHE+U5WCymOc1otxpbPabv8AH4K/VqJpTtFJHJfru3VwsQUlTnkczwouqMeQcS+uKXB8pqle4ZpYH24ZGjb91OVeKlSgkGwmkXulo8a3qCPEbdLhOYABh/fhlW7ZDClgutxdbtJ49llkbIpqOGeuvxrnKlXR+0ZGm5AHV3nfhvv1SHYdpFNNJj7bhtj3G3M8o/Vl8v4ArSu8Su7vMTSnYP5F4L/P+61KlKkxcr25Bo3gNB/fFG2FrTe55qVKlSpU1f/Z"
            title="Difficulty Breathing"
            text="Shortness of breath can be a third --and very serious-- manifestation of Covid-19, and it can occur on its own, without a cough."
            imgStyle={imgStyle}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

  export default CardsTemplate;
