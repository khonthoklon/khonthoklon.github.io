const Committees = () => {
  return (
    <section aria-labelledby="committees-header" className="space-y-3">
      <h3
        id="committees-header"
        className="text-xl font-semibold text-gray-800 border-b pb-1"
      >
        Committees & Contacts:
      </h3>

      <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
        <div>
          <h4 className="font-semibold text-base">Advisory Committee</h4>
          <ul className="list-disc list-inside">
            <li>Prof. D V L N Somayajulu, Director, NIT Manipur</li>
            <li>Prof. Kh. Tomba Singh, Registrar, NIT Manipur</li>
            <li>Prof. Kh. Manglem Singh, Professor, Dept. of CSE</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-base">Convenor</h4>
          <p>
            Dr. Yambem Jina Chanu, Associate Professor &amp; HOD, Dept. of CSE
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-base">Coordinator</h4>
          <p>Dr. Kh. Johnson Singh, Assistant Professor, Dept. of CSE</p>
        </div>

        <div>
          <h4 className="font-semibold text-base">
            Program Committee (Dept. of CSE)
          </h4>
          <ul className="list-disc list-inside">
            <li>Dr. Khelchandra Thongam, Associate Professor</li>
            <li>Dr. Y. Surajkanta, Assistant Professor</li>
            <li>Dr. O. Bidyapati Chanu, Assistant Professor</li>
            <li>Dr. Th. Susma Devi, Assistant Professor</li>
            <li>Dr. Ujjwal Biswas, Assistant Professor</li>
            <li>Dr. M. Dennis Singh, Assistant Professor</li>
          </ul>
        </div>
      </div>

      <div className="text-gray-500 text-sm leading-relaxed pt-4 border-t">
        <p>Contact: khonthoklon@gmail.com</p>
        <p>Address: NIT Manipur, Khonthoklon Lab, Imphal, Manipur - 795004</p>
      </div>
    </section>
  );
};

export default Committees;
