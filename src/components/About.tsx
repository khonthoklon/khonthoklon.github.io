import logo from "../assets/logo_trans.png";

const About = () => (
  <section className="flex flex-col items-center text-center gap-4">
    <img src={logo} alt="Khonthoklon Lab Logo" className="w-24 h-24" />
    <h2 className="text-4xl font-extrabold text-gray-900">Khonthoklon Lab</h2>
    <p className="text-blue-600 font-semibold">
      Research &bull; Innovation &bull; Excellence
    </p>
    <p className="text-gray-700 max-w-xl mt-4 text-lg leading-relaxed">
      Welcome to the{" "}
      <span className="font-semibold text-gray-900">Khonthoklon Lab</span> of
      the <span className="font-semibold text-gray-900">CSE Department</span>,{" "}
      <span className="font-semibold text-gray-900">NIT Manipur</span>. We are
      dedicated to{" "}
      <span className="text-blue-600 font-semibold">advancing knowledge</span>{" "}
      through{" "}
      <span className="text-blue-600 font-semibold">innovative research</span>{" "}
      and fostering a{" "}
      <span className="text-blue-600 font-semibold">
        collaborative environment
      </span>{" "}
      for students and researchers alike. Our lab specializes in{" "}
      <span className="font-semibold text-gray-900">
        Speech and Language Technology
      </span>
      .
    </p>
  </section>
);

export default About;
