const WorkshopTakeaways = () => {
  return (
    <section aria-labelledby="takeaways-header" className="space-y-3">
      <h3
        id="takeaways-header"
        className="text-xl font-semibold text-gray-800 border-b pb-1"
      >
        Workshop Takeaways:
      </h3>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
        <li>Master fundamentals of speech production & signal processing</li>
        <li>Use tools like Praat, ELAN for speech data</li>
        <li>Apply deep learning for speech tasks in Python</li>
        <li>Insights into ASR, TTS, latest research trends</li>
      </ul>
    </section>
  );
};

export default WorkshopTakeaways;
