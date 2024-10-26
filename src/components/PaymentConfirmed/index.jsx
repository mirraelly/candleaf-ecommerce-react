import { Card, CardBody, CardText, CardTitle, Row } from "reactstrap";
import PaymentConfirmedContainer from "./PaymentConfirmedContainer";
import { Link } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";

const PaymentConfirmed = () => {
  const handlePrint = () => {
    window.print(); // Função para ativar a impressão da tela
  };
  return (
    <PaymentConfirmedContainer className="d-flex justify-content-center align-items-center">
      <Card className="text-center py-4 border-0">
        <div className="">
          <BsCheckCircle className="confirmed-cicle-icon" />{" "}
          {/* Ícone de check */}
        </div>
        <CardBody className="">
          <CardTitle
            tag="h3"
            className="fw-medium title-payment-confirmed pt-2"
          >
            Payment Confirmed
          </CardTitle>
          <CardText className="text-primary fw-normal subtitutle-payment-confirmed pb-2">
            ORDER #2039
          </CardText>
          <CardText className="text-muted text-start">
            Thank you Joe for buying Candleaf. The nature is grateful to you.
            Now that your order is confirmed it will be ready to ship in 2 days.
            Please check your inbox in the future for your order updates.
          </CardText>

          <div className="d-flex flex-column align-items-center gap-4 pt-5">
            <Link to={"/"} className="w-100 btn btn-primary">
              Back to shopping
            </Link>
            <Link
              to={""}
              onClick={handlePrint}
              className="w-100 text-primary text-decoration-underline d-flex justify-content-center"
            >
              Save payment receipt
            </Link>
          </div>
        </CardBody>
      </Card>
    </PaymentConfirmedContainer>
  );
};

export default PaymentConfirmed;
