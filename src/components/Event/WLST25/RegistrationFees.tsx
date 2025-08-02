const RegistrationFees = () => {
  return (
    <section aria-labelledby="registration-fees-header" className="space-y-3">
      <h3
        id="registration-fees-header"
        className="text-xl font-semibold text-gray-800 border-b pb-1"
      >
        Registration Fees:
      </h3>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
        <li>Students: ₹1000/-</li>
        <li>Non-students: ₹2000/-</li>
      </ul>
    </section>
  );
};

export default RegistrationFees;
