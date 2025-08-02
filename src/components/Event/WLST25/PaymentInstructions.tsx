const PaymentInstructions = () => {
  return (
    <section
      aria-labelledby="payment-instructions-header"
      className="space-y-3"
    >
      <h3
        id="payment-instructions-header"
        className="text-xl font-semibold text-gray-800 border-b pb-1"
      >
        Payment Instructions:
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Payment should be made via bank transfer to the account below:
      </p>
      <div className="p-4 bg-gray-50 border rounded-md text-gray-700 space-y-1 text-sm">
        <p>
          <strong>Account Name:</strong> Director NIT Manipur IRG
        </p>
        <p>
          <strong>Account Number:</strong> 60330100000143
        </p>
        <p>
          <strong>Bank & Branch:</strong> Bank of Baroda, NIT Manipur
        </p>
        <p>
          <strong>IFSC Code:</strong> BARB0NITMAN
        </p>
      </div>
    </section>
  );
};

export default PaymentInstructions;
