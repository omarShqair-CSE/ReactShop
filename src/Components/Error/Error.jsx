import { Alert, Card, Button } from "react-bootstrap";

function Error({ message, onRetry }) {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <Card className="shadow-lg border-0" style={{ maxWidth: "500px", width: "100%" }}>
                <Card.Body className="text-center">
                    <Alert variant="danger" className="fw-bold">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        {message}
                    </Alert>
                    <p className="text-muted">Something went wrong while fetching data.</p>
                    <Button variant="primary" onClick={onRetry} className="mt-2">
                        <i className="bi bi-arrow-repeat me-2"></i>
                        Try Again
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Error;
