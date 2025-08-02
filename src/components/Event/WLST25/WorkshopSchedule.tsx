const WorkshopSchedule = () => {
  return (
    <section aria-labelledby="workshop-schedule-header" className="space-y-3">
      <h3
        id="workshop-schedule-header"
        className="text-xl font-semibold text-gray-800 border-b pb-1"
      >
        Workshop Schedule:
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th scope="col" className="border px-4 py-2 text-left">
                Day / Date
              </th>
              <th scope="col" className="border px-4 py-2 text-left">
                Slot 1 (10:00 AM – 11:30 AM)
              </th>
              <th scope="col" className="border px-4 py-2 text-left">
                Slot 2 (12:30 PM – 02:00 PM)
              </th>
              <th scope="col" className="border px-4 py-2 text-left">
                Slot 3 (02:30 PM – 03:30 PM)
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="even:bg-gray-50">
              <td scope="row" className="border px-4 py-2">
                Day 1 (23/07/2025)
              </td>
              <td className="border px-4 py-2">
                Speech Production & Phonology
                <br />
                How sound is produced, IPA
              </td>
              <td className="border px-4 py-2">
                Speech Signals & Recording
                <br />
                Wave, Sampling, Quantization
              </td>
              <td className="border px-4 py-2">
                Installation: Praat & ELAN
                <br />
                Recording of Words & NWS
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td scope="row" className="border px-4 py-2">
                Day 2 (24/07/2025)
              </td>
              <td className="border px-4 py-2">
                Time Domain to Frequency Domain
                <br />
                FT, DFT, FFT, STFT, MFCC
              </td>
              <td className="border px-4 py-2">
                Speech Dataset Preparation
                <br />
                For Acoustic Analysis, ASR, KWS, TTS
              </td>
              <td className="border px-4 py-2">
                Praat Tutorial
                <br />
                Phone Level Annotation, Visualization
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td scope="row" className="border px-4 py-2">
                Day 3 (25/07/2025)
              </td>
              <td className="border px-4 py-2">
                Intro to Python
                <br />
                Basic Tutorial, Notebook
              </td>
              <td className="border px-4 py-2">
                Advanced Python
                <br />
                Using Libraries, IDEs
              </td>
              <td className="border px-4 py-2">
                ELAN Tutorial
                <br />
                Sentence Segmentation, Annotation
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td scope="row" className="border px-4 py-2">
                Day 4 (26/07/2025)
              </td>
              <td className="border px-4 py-2">
                Deep Learning in Python
                <br />
                Tensor, PyTorch
              </td>
              <td className="border px-4 py-2">
                Existing Speech Toolkits
                <br />
                Kaldi, ESPnet, HuggingFace
              </td>
              <td className="border px-4 py-2">
                HuggingFace Inference
                <br />
                ASR, TTS Models
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td scope="row" className="border px-4 py-2">
                Day 5 (27/07/2025)
              </td>
              <td className="border px-4 py-2">Research Paper Reading</td>
              <td className="border px-4 py-2">State-of-the-Art Models</td>
              <td className="border px-4 py-2">Closing Ceremony</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WorkshopSchedule;
